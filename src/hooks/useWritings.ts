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
  loadingMore: boolean;
  error: string | null;
  hasMore: boolean;
  total: number;
  refetch: () => Promise<void>;
  loadMore: () => Promise<void>;
}

const WRITINGS_CACHE_KEY = 'writings_cache';

export const useWritings = (limit: number = 6): UseWritingsReturn => {
  const [writings, setWritings] = useState<Writing[]>(() => {
    const cached = readCache<Writing[]>(WRITINGS_CACHE_KEY);
    return cached || [];
  });
  const [loading, setLoading] = useState<boolean>(writings.length === 0);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchWritings = useCallback(async (targetPage: number, isLoadMore: boolean = false) => {
    try {
      if (isLoadMore) setLoadingMore(true);
      else setLoading(true);
      
      setError(null);
      const response = await writingsApi.getWritings(targetPage, limit);
      
      if (isLoadMore) {
        setWritings(prev => [...prev, ...response.writings]);
      } else {
        setWritings(response.writings);
        // Only cache the first page for quick initial load
        if (targetPage === 1) {
          writeCache(WRITINGS_CACHE_KEY, response.writings);
        }
      }
      
      setTotal(response.total);
      setHasMore(writings.length + response.writings.length < response.total);
      setPage(targetPage);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch writings');
      console.error('Error fetching writings:', err);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, [limit, writings.length]);

  const loadMore = useCallback(async () => {
    if (loading || loadingMore || !hasMore) return;
    await fetchWritings(page + 1, true);
  }, [fetchWritings, page, loading, loadingMore, hasMore]);

  const refetch = useCallback(() => {
    setPage(1);
    return fetchWritings(1, false);
  }, [fetchWritings]);

  useEffect(() => {
    // Initial fetch if no cached data or if we want to refresh
    if (writings.length === 0) {
      fetchWritings(1, false);
    } else {
      // If we have cached data, still sync the total and hasMore info
      // But maybe just let it be until they scroll or refetch
    }
  }, []); // Only run once on mount

  return { 
    writings, 
    loading, 
    loadingMore, 
    error, 
    hasMore, 
    total, 
    refetch, 
    loadMore 
  };
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
