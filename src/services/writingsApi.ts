// API service for writings - Vercel Backend integration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://writings-backend.vercel.app/api';

export interface Writing {
  id?: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  created_at: string;
  updated_at?: string;
  read_time?: string;
  category?: string;
  author?: string;
  tags?: string[];
  order_index?: number;
  published?: boolean;
}

export interface WritingsResponse {
  writings: Writing[];
  total: number;
  page: number;
  limit: number;
}

export interface ApiError {
  message: string;
  status: number;
}

class WritingsApiService {
  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  private async makeRequest<T>(endpoint: string, options?: RequestInit): Promise<T> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        ...options,
      });

      return await this.handleResponse<T>(response);
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Get all writings (backend sorts by order_index ASC, created_at DESC)
  async getWritings(): Promise<WritingsResponse> {
    return this.makeRequest<WritingsResponse>('/writings');
  }

  // Get a single writing by slug
  async getWritingBySlug(slug: string): Promise<Writing> {
    return this.makeRequest<Writing>(`/writings/slug/${slug}`);
  }
}

// Export a singleton instance
export const writingsApi = new WritingsApiService();

// Export default for convenience
export default writingsApi;
