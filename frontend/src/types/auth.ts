export type UserRole = 'patient' | 'doctor' | 'admin'

export interface LoginFormData {
  email: string
  password: string
}

export interface RegisterFormData {
  name: string
  email: string
  password: string
  confirmPassword: string
  role: UserRole
  phone?: string
}

export interface User {
  id: number
  name: string
  email: string
  role: UserRole
  phone?: string
  created_at: string
}

export interface AuthResponse {
  success: boolean
  data: {
    token: string
    user: User
  }
  message?: string
}
