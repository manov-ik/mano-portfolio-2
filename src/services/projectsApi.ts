// API service for projects - Vercel Backend integration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://writings-backend.vercel.app/api';

export interface Project {
  id: string;
  slug: string;
  title: string;
  short_description: string;
  long_description: string;
  tech_stack: string[];
  tags: string[];
  year: string;
  github_link?: string;
  project_link?: string;
  image_url?: string;
  order_index?: number;
  created_at: string;
}

export interface ProjectsResponse {
  projects: Project[];
  total: number;
}

class ProjectsApiService {
  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  private async makeRequest<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: { 'Content-Type': 'application/json' },
    });
    return this.handleResponse<T>(response);
  }

  // Get all published projects (ordered by order_index ASC)
  async getProjects(): Promise<ProjectsResponse> {
    return this.makeRequest<ProjectsResponse>('/projects');
  }

  // Get a single project by slug
  async getProjectBySlug(slug: string): Promise<Project> {
    return this.makeRequest<Project>(`/projects/slug/${slug}`);
  }
}

export const projectsApi = new ProjectsApiService();
export default projectsApi;
