import { useState, useEffect, useCallback } from 'react';
import { projectsApi } from '../services/projectsApi';
import type { Project } from '../services/projectsApi';

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

// ─── useProjects (list) ─────────────────────────────────────────────────────

interface UseProjectsReturn {
  projects: Project[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

const PROJECTS_CACHE_KEY = 'projects_cache';

export const useProjects = (): UseProjectsReturn => {
  // Seed state from cache immediately (no spinner on cache hit)
  const [projects, setProjects] = useState<Project[]>(
    () => readCache<Project[]>(PROJECTS_CACHE_KEY) ?? []
  );
  const [loading, setLoading] = useState<boolean>(
    () => readCache<Project[]>(PROJECTS_CACHE_KEY) === null
  );
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = useCallback(async (force = false) => {
    if (!force) {
      const cached = readCache<Project[]>(PROJECTS_CACHE_KEY);
      if (cached) {
        setProjects(cached);
        setLoading(false);
        return;
      }
    }

    try {
      setLoading(true);
      setError(null);
      const response = await projectsApi.getProjects();
      setProjects(response.projects);
      writeCache(PROJECTS_CACHE_KEY, response.projects);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch projects');
      console.error('Error fetching projects:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const refetch = useCallback(() => fetchProjects(true), [fetchProjects]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return { projects, loading, error, refetch };
};

// ─── useProject (single by slug) ────────────────────────────────────────────

interface UseProjectOptions {
  slug?: string;
  autoFetch?: boolean;
}

interface UseProjectReturn {
  project: Project | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useProject = ({ slug, autoFetch = true }: UseProjectOptions = {}): UseProjectReturn => {
  const cacheKey = `project_cache_${slug}`;

  const [project, setProject] = useState<Project | null>(
    () => (slug ? readCache<Project>(cacheKey) : null)
  );
  const [loading, setLoading] = useState<boolean>(
    () => !!slug && readCache<Project>(cacheKey) === null
  );
  const [error, setError] = useState<string | null>(null);

  const fetchProject = useCallback(async (force = false) => {
    if (!slug) return;

    if (!force) {
      const cached = readCache<Project>(cacheKey);
      if (cached) {
        setProject(cached);
        setLoading(false);
        return;
      }
    }

    try {
      setLoading(true);
      setError(null);
      const response = await projectsApi.getProjectBySlug(slug);
      setProject(response);
      writeCache(cacheKey, response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch project');
      console.error('Error fetching project:', err);
    } finally {
      setLoading(false);
    }
  }, [slug, cacheKey]);

  const refetch = useCallback(() => fetchProject(true), [fetchProject]);

  useEffect(() => {
    if (autoFetch && slug) {
      fetchProject();
    }
  }, [autoFetch, slug, fetchProject]);

  return { project, loading, error, refetch };
};

export default useProjects;
