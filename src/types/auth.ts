export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: "admin" | "manager" | "tenant";
  avatarUrl?: string;
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  user?: UserProfile;
  errors?: Record<string, string[]>;
}
