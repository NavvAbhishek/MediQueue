import api from './axios'
import type { LoginFormData, RegisterFormData, AuthResponse } from '@/types/auth'

export async function loginUser(data: LoginFormData): Promise<AuthResponse> {
  const res = await api.post<AuthResponse>('/auth/login', data)
  return res.data
}

export async function registerUser(data: Omit<RegisterFormData, 'confirmPassword'>): Promise<AuthResponse> {
  const res = await api.post<AuthResponse>('/auth/register', data)
  return res.data
}
