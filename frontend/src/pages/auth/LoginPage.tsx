import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, ArrowRight, Loader2 } from 'lucide-react'
import { useState } from 'react'
import AuthBrand from '@/components/auth/AuthBrand'
import { loginUser } from '@/api/auth'
import type { LoginFormData } from '@/types/auth'

const fieldVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: 'easeOut' as const },
  }),
}

export default function LoginPage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>()

  const onSubmit = async (data: LoginFormData) => {
    setServerError('')
    try {
      const res = await loginUser(data)
      if (res.success) {
        localStorage.setItem('mq_token', res.data.token)
        localStorage.setItem('mq_user', JSON.stringify(res.data.user))
        const role = res.data.user.role
        if (role === 'doctor') navigate('/doctor')
        else if (role === 'admin') navigate('/admin')
        else navigate('/patient')
      } else {
        setServerError(res.message || 'Login failed. Please try again.')
      }
    } catch (err: unknown) {
      const axiosErr = err as { response?: { data?: { message?: string } } }
      setServerError(axiosErr.response?.data?.message || 'Something went wrong. Try again.')
    }
  }

  const { onBlur: emailBlur, ...emailReg } = register('email', {
    required: 'Email is required',
    pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
  })
  const { onBlur: passwordBlur, ...passwordReg } = register('password', {
    required: 'Password is required',
    minLength: { value: 6, message: 'At least 6 characters' },
  })

  return (
    <div className="min-h-screen grid lg:grid-cols-2" style={{ background: '#06030f' }}>
      <div className="hidden lg:block">
        <AuthBrand />
      </div>

      <div
        className="flex items-center justify-center p-8 lg:p-16"
        style={{ background: '#06030f' }}
      >
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-2.5 mb-10">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #420699, #b00b69)' }}
            >
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span
              className="text-lg font-bold text-white"
              style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.03em' }}
            >
              Medi<span style={{ color: '#b00b69' }}>Queue</span>
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h1
              className="font-bold text-white mb-2"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
                letterSpacing: '-0.04em',
                lineHeight: 1.1,
              }}
            >
              Welcome back
            </h1>
            <p className="text-sm" style={{ color: 'rgba(240,234,255,0.45)', fontFamily: 'Syne, sans-serif' }}>
              Sign in to your MediQueue account
            </p>
          </motion.div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <motion.div custom={0} variants={fieldVariants} initial="hidden" animate="visible">
              <label
                className="block text-xs font-semibold mb-2 tracking-wide uppercase"
                style={{ color: 'rgba(240,234,255,0.45)', fontFamily: 'Syne, sans-serif' }}
              >
                Email address
              </label>
              <input
                type="email"
                autoComplete="email"
                placeholder="doctor@clinic.com"
                className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: errors.email ? '1px solid rgba(176,11,105,0.7)' : '1px solid rgba(255,255,255,0.1)',
                  color: '#f0eaff',
                  fontFamily: 'Syne, sans-serif',
                }}
                {...emailReg}
                onFocus={(e) => {
                  e.target.style.border = '1px solid rgba(176,11,105,0.6)'
                  e.target.style.boxShadow = '0 0 0 3px rgba(176,11,105,0.1)'
                }}
                onBlur={(e) => {
                  emailBlur(e)
                  e.target.style.border = errors.email ? '1px solid rgba(176,11,105,0.7)' : '1px solid rgba(255,255,255,0.1)'
                  e.target.style.boxShadow = 'none'
                }}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs" style={{ color: '#e879a0', fontFamily: 'Syne, sans-serif' }}>
                  {errors.email.message}
                </p>
              )}
            </motion.div>

            <motion.div custom={1} variants={fieldVariants} initial="hidden" animate="visible">
              <div className="flex items-center justify-between mb-2">
                <label
                  className="text-xs font-semibold tracking-wide uppercase"
                  style={{ color: 'rgba(240,234,255,0.45)', fontFamily: 'Syne, sans-serif' }}
                >
                  Password
                </label>
                <button
                  type="button"
                  className="text-xs transition-colors duration-200 hover:text-white"
                  style={{ color: '#b00b69', fontFamily: 'Syne, sans-serif', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3.5 pr-12 rounded-xl text-sm outline-none transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: errors.password ? '1px solid rgba(176,11,105,0.7)' : '1px solid rgba(255,255,255,0.1)',
                    color: '#f0eaff',
                    fontFamily: 'Syne, sans-serif',
                  }}
                  {...passwordReg}
                  onFocus={(e) => {
                    e.target.style.border = '1px solid rgba(176,11,105,0.6)'
                    e.target.style.boxShadow = '0 0 0 3px rgba(176,11,105,0.1)'
                  }}
                  onBlur={(e) => {
                    passwordBlur(e)
                    e.target.style.border = errors.password ? '1px solid rgba(176,11,105,0.7)' : '1px solid rgba(255,255,255,0.1)'
                    e.target.style.boxShadow = 'none'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors duration-200"
                  style={{ color: 'rgba(240,234,255,0.35)', background: 'none', border: 'none', cursor: 'pointer' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(240,234,255,0.7)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240,234,255,0.35)')}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1.5 text-xs" style={{ color: '#e879a0', fontFamily: 'Syne, sans-serif' }}>
                  {errors.password.message}
                </p>
              )}
            </motion.div>

            {serverError && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-4 py-3 rounded-xl text-sm"
                style={{
                  background: 'rgba(176,11,105,0.1)',
                  border: '1px solid rgba(176,11,105,0.25)',
                  color: '#e879a0',
                  fontFamily: 'Syne, sans-serif',
                }}
              >
                {serverError}
              </motion.div>
            )}

            <motion.div custom={2} variants={fieldVariants} initial="hidden" animate="visible">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm text-white transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: isSubmitting
                    ? 'rgba(176,11,105,0.5)'
                    : 'linear-gradient(135deg, #b00b69, #420699)',
                  fontFamily: 'Syne, sans-serif',
                  boxShadow: isSubmitting ? 'none' : '0 0 40px rgba(176,11,105,0.4), 0 4px 20px rgba(0,0,0,0.3)',
                }}
                onMouseEnter={(e) => { if (!isSubmitting) e.currentTarget.style.transform = 'scale(1.02)' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
              >
                {isSubmitting ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Signing in...</>
                ) : (
                  <>Sign In <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </motion.div>
          </form>

          <motion.p
            custom={3}
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 text-sm text-center"
            style={{ color: 'rgba(240,234,255,0.38)', fontFamily: 'Syne, sans-serif' }}
          >
            Don't have an account?{' '}
            <Link
              to="/register"
              className="font-semibold transition-colors duration-200"
              style={{ color: '#b00b69' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#e879a0')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#b00b69')}
            >
              Create one free
            </Link>
          </motion.p>

          <motion.div
            custom={4}
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
            className="mt-10 pt-6"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <p
              className="text-xs text-center mb-4"
              style={{ color: 'rgba(240,234,255,0.25)', fontFamily: 'Syne, sans-serif' }}
            >
              Demo credentials
            </p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { role: 'Patient', email: 'patient@demo.com' },
                { role: 'Doctor', email: 'doctor@demo.com' },
                { role: 'Admin', email: 'admin@demo.com' },
              ].map((d) => (
                <div
                  key={d.role}
                  className="px-3 py-2.5 rounded-xl text-center"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <p className="text-xs font-semibold text-white mb-0.5" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {d.role}
                  </p>
                  <p className="text-xs" style={{ color: 'rgba(240,234,255,0.3)', fontFamily: 'Syne, sans-serif', fontSize: '10px' }}>
                    {d.email}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
