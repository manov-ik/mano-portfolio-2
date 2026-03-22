import { useState, useEffect, useCallback } from 'react';
import { writingsApi } from '../services/writingsApi';
import type { Writing } from '../services/writingsApi';

// ─── Cache config ───────────────────────────────────────────────────────────
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

function readCache<T>(key: string): T | null {
  try {
    const raw = sessionStorage.getItem(key);
    if (!raw) return null;
    const entry: CacheEntry<T> = JSON.parse(raw);
    if (Date.now() - entry.timestamp > CACHE_TTL_MS) {
      sessionStorage.removeItem(key);
      return null;
    }
    return entry.data;
  } catch {
    return null;
  }
}

function writeCache<T>(key: string, data: T): void {
  try {
    const entry: CacheEntry<T> = { data, timestamp: Date.now() };
    sessionStorage.setItem(key, JSON.stringify(entry));
  } catch {
    // sessionStorage full or unavailable — silent fail
  }
}

// ─── useWritings (list) ─────────────────────────────────────────────────────

interface UseWritingsReturn {
  writings: Writing[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

const WRITINGS_CACHE_KEY = 'writings_cache';

export const useWritings = (): UseWritingsReturn => {
  // Seed state from cache immediately — no spinner on cache hit
  const [writings, setWritings] = useState<Writing[]>(
    () => readCache<Writing[]>(WRITINGS_CACHE_KEY) ?? []
  );
  const [loading, setLoading] = useState<boolean>(
    () => readCache<Writing[]>(WRITINGS_CACHE_KEY) === null
  );
  const [error, setError] = useState<string | null>(null);

  const fetchWritings = useCallback(async (force = false) => {
    if (!force) {
      const cached = readCache<Writing[]>(WRITINGS_CACHE_KEY);
      if (cached) {
        setWritings(cached);
        setLoading(false);
        return;
      }
    }

    try {
      setLoading(true);
      setError(null);
      const response = await writingsApi.getWritings();
      setWritings(response.writings);
      writeCache(WRITINGS_CACHE_KEY, response.writings);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch writings');
      console.error('Error fetching writings:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const refetch = useCallback(() => fetchWritings(true), [fetchWritings]);

  useEffect(() => {
    fetchWritings();
  }, [fetchWritings]);

  return { writings, loading, error, refetch };
};

// ─── useWriting (single by slug) ────────────────────────────────────────────

interface UseWritingOptions {
  slug?: string;
  autoFetch?: boolean;
}

interface UseWritingReturn {
  writing: Writing | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useWriting = (options: UseWritingOptions = {}): UseWritingReturn => {
  const { slug, autoFetch = true } = options;
  const cacheKey = `writing_cache_${slug}`;

  const [writing, setWriting] = useState<Writing | null>(
    () => (slug ? readCache<Writing>(cacheKey) : null)
  );
  const [loading, setLoading] = useState<boolean>(
    () => !!slug && readCache<Writing>(cacheKey) === null
  );
  const [error, setError] = useState<string | null>(null);

  const fetchWriting = useCallback(async (force = false) => {
    if (!slug) return;

    if (!force) {
      const cached = readCache<Writing>(cacheKey);
      if (cached) {
        setWriting(cached);
        setLoading(false);
        return;
      }
    }

    try {
      setLoading(true);
      setError(null);
      const response = await writingsApi.getWritingBySlug(slug);
      setWriting(response);
      writeCache(cacheKey, response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch writing');
      console.error('Error fetching writing:', err);
    } finally {
      setLoading(false);
    }
  }, [slug, cacheKey]);

  const refetch = useCallback(() => fetchWriting(true), [fetchWriting]);

  useEffect(() => {
    if (autoFetch && slug) {
      fetchWriting();
    }
  }, [autoFetch, slug, fetchWriting]);

  return { writing, loading, error, refetch };
};

export default useWritings;
