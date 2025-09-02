// API configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.humanbo.com';

// API response interface
interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// HTTP client with error handling
class ApiClient {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const url = `${this.baseURL}${endpoint}`;
      const config: RequestInit = {
        ...options,
        headers: {
          ...this.defaultHeaders,
          ...options.headers,
        },
      };

      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error('API request failed:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'An unknown error occurred',
      };
    }
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  async post<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }

  setAuthToken(token: string) {
    this.defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  removeAuthToken() {
    delete this.defaultHeaders['Authorization'];
  }
}

// Create API client instance
export const apiClient = new ApiClient(API_BASE_URL);

// API endpoints
export const endpoints = {
  // Contact form
  contact: '/contact',
  
  // Newsletter subscription
  newsletter: '/newsletter/subscribe',
  
  // Authentication
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
  },
  
  // User management
  user: {
    profile: '/user/profile',
    updateProfile: '/user/profile',
    changePassword: '/user/change-password',
  },
  
  // Products
  products: {
    list: '/products',
    details: (id: string) => `/products/${id}`,
  },
  
  // Support
  support: {
    tickets: '/support/tickets',
    createTicket: '/support/tickets',
    faq: '/support/faq',
  },
  
  // Analytics
  analytics: {
    track: '/analytics/track',
  },
};

// Specific API functions
export const contactAPI = {
  submit: async (data: {
    name: string;
    email: string;
    company?: string;
    subject: string;
    message: string;
  }) => {
    // Simulate API call for demo purposes
    return new Promise<ApiResponse>((resolve) => {
      window.setTimeout(() => {
        resolve({
          success: true,
          message: 'Message sent successfully'
        });
      }, 1500);
    });
  },
};

export const newsletterAPI = {
  subscribe: async (email: string) => {
    // Simulate API call for demo purposes
    return new Promise<ApiResponse>((resolve) => {
      window.setTimeout(() => {
        resolve({
          success: true,
          message: 'Successfully subscribed to newsletter'
        });
      }, 1000);
    });
  },
};

export const authAPI = {
  login: async (email: string, password: string) => {
    // Simulate API call for demo purposes
    return new Promise<ApiResponse>((resolve) => {
      window.setTimeout(() => {
        resolve({
          success: true,
          data: { token: 'demo-token', user: { email, name: 'Demo User' } }
        });
      }, 1500);
    });
  },
  
  register: async (userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => {
    // Simulate API call for demo purposes
    return new Promise<ApiResponse>((resolve) => {
      window.setTimeout(() => {
        resolve({
          success: true,
          data: { token: 'demo-token', user: userData }
        });
      }, 2000);
    });
  },
  
  logout: async () => {
    return new Promise<ApiResponse>((resolve) => {
      window.setTimeout(() => {
        resolve({
          success: true,
          message: 'Logged out successfully'
        });
      }, 500);
    });
  },
  
  forgotPassword: async (email: string) => {
    return new Promise<ApiResponse>((resolve) => {
      window.setTimeout(() => {
        resolve({
          success: true,
          message: 'Password reset email sent'
        });
      }, 1000);
    });
  },
};

// Error handling helper
export const handleApiError = (error: any): string => {
  if (typeof error === 'string') {
    return error;
  }
  
  if (error?.message) {
    return error.message;
  }
  
  if (error?.error) {
    return error.error;
  }
  
  return 'An unexpected error occurred. Please try again.';
};
