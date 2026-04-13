import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, ArrowRight, Loader2, User, Stethoscope, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import AuthBrand from '@/components/auth/AuthBrand'
import { registerUser } from '@/api/auth'
import type { RegisterFormData, UserRole } from '@/types/auth'

const fieldVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: 'easeOut' as const },
  }),
}

const roles: { value: UserRole; label: string; desc: string; icon: React.ElementType; accent: string; rgb: string }[] = [
  {
    value: 'patient',
    label: 'Patient',
    desc: 'Book appointments & track queue',
    icon: User,
    accent: '#042069',
    rgb: '4,32,105',
  },
  {
    value: 'doctor',
    label: 'Doctor',
    desc: 'Manage your daily queue',
    icon: Stethoscope,
    accent: '#420699',
    rgb: '66,6,153',
  },
  {
    value: 'admin',
    label: 'Admin',
    desc: 'Full clinic oversight',
    icon: ShieldCheck,
    accent: '#b00b69',
    rgb: '176,11,105',
  },
]

export default function RegisterPage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [serverError, setServerError] = useState('')
  const [selectedRole, setSelectedRole] = useState<UserRole>('patient')

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({ defaultValues: { role: 'patient' } })

  const passwordValue = watch('password')

  const onSubmit = async (data: RegisterFormData) => {
    setServerError('')
    try {
      const { confirmPassword, ...payload } = data
      void confirmPassword
      const res = await registerUser(payload)
      if (res.success) {
        localStorage.setItem('mq_token', res.data.token)
        localStorage.setItem('mq_user', JSON.stringify(res.data.user))
        const role = res.data.user.role
        if (role === 'doctor') navigate('/doctor')
        else if (role === 'admin') navigate('/admin')
        else navigate('/patient')
      } else {
        setServerError(res.message || 'Registration failed. Please try again.')
      }
    } catch (err: unknown) {
      const axiosErr = err as { response?: { data?: { message?: string } } }
      setServerError(axiosErr.response?.data?.message || 'Something went wrong. Try again.')
    }
  }

  const inputStyle = (hasError: boolean) => ({
    background: 'rgba(255,255,255,0.04)',
    border: hasError ? '1px solid rgba(176,11,105,0.7)' : '1px solid rgba(255,255,255,0.1)',
    color: '#f0eaff',
    fontFamily: 'Syne, sans-serif',
  })

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.style.border = '1px solid rgba(176,11,105,0.6)'
    e.target.style.boxShadow = '0 0 0 3px rgba(176,11,105,0.1)'
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>, hasError: boolean) => {
    e.target.style.border = hasError ? '1px solid rgba(176,11,105,0.7)' : '1px solid rgba(255,255,255,0.1)'
    e.target.style.boxShadow = 'none'
  }

  // Destructure RHF's onBlur from each field so we can merge it with our styling handler
  const { onBlur: nameBlur, ...nameReg } = register('name', {
    required: 'Name is required',
    minLength: { value: 2, message: 'At least 2 characters' },
  })
  const { onBlur: emailBlur, ...emailReg } = register('email', {
    required: 'Email is required',
    pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
  })
  const { onBlur: phoneBlur, ...phoneReg } = register('phone')
  const { onBlur: passwordBlur, ...passwordReg } = register('password', {
    required: 'Password is required',
    minLength: { value: 6, message: 'At least 6 characters' },
  })
  const { onBlur: confirmPasswordBlur, ...confirmPasswordReg } = register('confirmPassword', {
    required: 'Please confirm your password',
    validate: (val) => val === passwordValue || 'Passwords do not match',
  })

  return (
    <div className="min-h-screen grid lg:grid-cols-2" style={{ background: '#06030f' }}>
      <div className="hidden lg:block">
        <AuthBrand />
      </div>

      <div
        className="flex items-center justify-center p-8 lg:p-14 overflow-y-auto"
        style={{ background: '#06030f' }}
      >
        <div className="w-full max-w-md py-8">
          <div className="lg:hidden flex items-center gap-2.5 mb-8">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #420699, #b00b69)' }}
            >
              <Stethoscope className="w-4 h-4 text-white" />
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
            className="mb-8"
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
              Create your account
            </h1>
            <p className="text-sm" style={{ color: 'rgba(240,234,255,0.45)', fontFamily: 'Syne, sans-serif' }}>
              Join MediQueue — free forever for small clinics
            </p>
          </motion.div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <motion.div custom={0} variants={fieldVariants} initial="hidden" animate="visible">
              <p
                className="text-xs font-semibold tracking-wide uppercase mb-3"
                style={{ color: 'rgba(240,234,255,0.45)', fontFamily: 'Syne, sans-serif' }}
              >
                I am a
              </p>
              <div className="grid grid-cols-3 gap-2.5">
                {roles.map((r) => (
                  <button
                    key={r.value}
                    type="button"
                    onClick={() => {
                      setSelectedRole(r.value)
                      setValue('role', r.value)
                    }}
                    className="relative p-3 rounded-xl text-left transition-all duration-200"
                    style={{
                      background: selectedRole === r.value
                        ? `rgba(${r.rgb},0.15)`
                        : 'rgba(255,255,255,0.03)',
                      border: selectedRole === r.value
                        ? `1px solid rgba(${r.rgb},0.4)`
                        : '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center mb-2"
                      style={{ background: `rgba(${r.rgb},0.18)` }}
                    >
                      <r.icon className="w-4 h-4" style={{ color: r.accent }} />
                    </div>
                    <p
                      className="text-sm font-bold text-white"
                      style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.02em' }}
                    >
                      {r.label}
                    </p>
                    <p
                      className="text-xs mt-0.5 leading-tight"
                      style={{ color: 'rgba(240,234,255,0.35)', fontFamily: 'Syne, sans-serif' }}
                    >
                      {r.desc}
                    </p>
                    <AnimatePresence>
                      {selectedRole === r.value && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full"
                          style={{ background: r.accent }}
                        />
                      )}
                    </AnimatePresence>
                  </button>
                ))}
              </div>
              <input type="hidden" {...register('role')} />
            </motion.div>

            <motion.div custom={1} variants={fieldVariants} initial="hidden" animate="visible">
              <label
                className="block text-xs font-semibold mb-2 tracking-wide uppercase"
                style={{ color: 'rgba(240,234,255,0.45)', fontFamily: 'Syne, sans-serif' }}
              >
                Full name
              </label>
              <input
                type="text"
                autoComplete="name"
                placeholder="Dr. Jane Smith"
                className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200"
                style={inputStyle(!!errors.name)}
                {...nameReg}
                onFocus={handleFocus}
                onBlur={(e) => { nameBlur(e); handleBlur(e, !!errors.name) }}
              />
              {errors.name && (
                <p className="mt-1.5 text-xs" style={{ color: '#e879a0', fontFamily: 'Syne, sans-serif' }}>
                  {errors.name.message}
                </p>
              )}
            </motion.div>

            <motion.div custom={2} variants={fieldVariants} initial="hidden" animate="visible">
              <label
                className="block text-xs font-semibold mb-2 tracking-wide uppercase"
                style={{ color: 'rgba(240,234,255,0.45)', fontFamily: 'Syne, sans-serif' }}
              >
                Email address
              </label>
              <input
                type="email"
                autoComplete="email"
                placeholder="you@clinic.com"
                className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200"
                style={inputStyle(!!errors.email)}
                {...emailReg}
                onFocus={handleFocus}
                onBlur={(e) => { emailBlur(e); handleBlur(e, !!errors.email) }}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs" style={{ color: '#e879a0', fontFamily: 'Syne, sans-serif' }}>
                  {errors.email.message}
                </p>
              )}
            </motion.div>

            <motion.div custom={3} variants={fieldVariants} initial="hidden" animate="visible">
              <label
                className="block text-xs font-semibold mb-2 tracking-wide uppercase"
                style={{ color: 'rgba(240,234,255,0.45)', fontFamily: 'Syne, sans-serif' }}
              >
                Phone <span style={{ color: 'rgba(240,234,255,0.25)' }}>(optional)</span>
              </label>
              <input
                type="tel"
                autoComplete="tel"
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200"
                style={inputStyle(false)}
                {...phoneReg}
                onFocus={handleFocus}
                onBlur={(e) => { phoneBlur(e); handleBlur(e, false) }}
              />
            </motion.div>

            <motion.div custom={4} variants={fieldVariants} initial="hidden" animate="visible">
              <label
                className="block text-xs font-semibold mb-2 tracking-wide uppercase"
                style={{ color: 'rgba(240,234,255,0.45)', fontFamily: 'Syne, sans-serif' }}
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  placeholder="Min. 6 characters"
                  className="w-full px-4 py-3.5 pr-12 rounded-xl text-sm outline-none transition-all duration-200"
                  style={inputStyle(!!errors.password)}
                  {...passwordReg}
                  onFocus={handleFocus}
                  onBlur={(e) => { passwordBlur(e); handleBlur(e, !!errors.password) }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                  style={{ color: 'rgba(240,234,255,0.35)', background: 'none', border: 'none', cursor: 'pointer' }}
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

            <motion.div custom={5} variants={fieldVariants} initial="hidden" animate="visible">
              <label
                className="block text-xs font-semibold mb-2 tracking-wide uppercase"
                style={{ color: 'rgba(240,234,255,0.45)', fontFamily: 'Syne, sans-serif' }}
              >
                Confirm password
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? 'text' : 'password'}
                  autoComplete="new-password"
                  placeholder="Re-enter your password"
                  className="w-full px-4 py-3.5 pr-12 rounded-xl text-sm outline-none transition-all duration-200"
                  style={inputStyle(!!errors.confirmPassword)}
                  {...confirmPasswordReg}
                  onFocus={handleFocus}
                  onBlur={(e) => { confirmPasswordBlur(e); handleBlur(e, !!errors.confirmPassword) }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((p) => !p)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                  style={{ color: 'rgba(240,234,255,0.35)', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1.5 text-xs" style={{ color: '#e879a0', fontFamily: 'Syne, sans-serif' }}>
                  {errors.confirmPassword.message}
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

            <motion.div custom={6} variants={fieldVariants} initial="hidden" animate="visible">
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
                  <><Loader2 className="w-4 h-4 animate-spin" /> Creating account...</>
                ) : (
                  <>Create Account <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </motion.div>
          </form>

          <motion.p
            custom={7}
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
            className="mt-6 text-sm text-center"
            style={{ color: 'rgba(240,234,255,0.38)', fontFamily: 'Syne, sans-serif' }}
          >
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-semibold transition-colors duration-200"
              style={{ color: '#b00b69' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#e879a0')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#b00b69')}
            >
              Sign in
            </Link>
          </motion.p>

          <motion.p
            custom={8}
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
            className="mt-4 text-xs text-center"
            style={{ color: 'rgba(240,234,255,0.2)', fontFamily: 'Syne, sans-serif', lineHeight: 1.6 }}
          >
            By creating an account you agree to our{' '}
            <span style={{ color: 'rgba(240,234,255,0.38)', cursor: 'pointer' }}>Terms of Service</span>
            {' '}and{' '}
            <span style={{ color: 'rgba(240,234,255,0.38)', cursor: 'pointer' }}>Privacy Policy</span>.
          </motion.p>
        </div>
      </div>
    </div>
  )
}
