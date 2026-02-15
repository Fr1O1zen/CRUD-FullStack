import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import RegisterBackground from "../img/RegisterBackground.png"
import useUserRegister from "../hooks/useUserRegister";

export default function RegisterPage() {
  const [nickname, setNickname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<{nickname?: string; email?: string; password?: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { register, registerError } = useUserRegister({ email,  nickname, password })

  const validateEmail = (email: string) => {
    if (!email) return "Email is required"
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      return "Invalid email address"
    }
    return undefined
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const emailError = validateEmail(email)
    const passwordError = !password ? "Password is required" : undefined

    // Poprawiony warunek: brak nickname powinien blokować rejestrację
    if (!nickname || emailError || passwordError) {
      setErrors({ nickname: !nickname ? "Nickname is required" : undefined, email: emailError, password: passwordError })
      return
    }

    setIsSubmitting(true)
    try {
      console.log("Registering user with:", { email, nickname, password })
      await register()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Image */}
      <div className="hidden lg:block w-1/2 h-screen border-x-amber-300 border-r-2">
        <img src={RegisterBackground} alt="Beehive Background" className="w-full h-full object-cover" />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-12 bg-gradient-to-b from-slate-900 via-slate-800 to-amber-900/40">
        {/* Mobile logo */}
        <div className="lg:hidden text-center mb-8">
          <div className="text-6xl mb-2">🐝</div>
          <h2 className="text-2xl font-bold text-white">BeeHive</h2>
        </div>

        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <p className="text-amber-400 font-medium tracking-wide uppercase text-sm">
              Zarządzaj swoją pasieką
            </p>
            <h1 className="text-3xl font-bold text-white mt-2">
              Zarejestruj się
            </h1>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div>
                    <label htmlFor="nickname" className="block text-sm font-medium text-white/90 mb-2">
                    Nazwa użytkownika
                    </label>
                    <input
                    id="nickname"
                    type="text"
                    value={nickname}
                    onChange={(e) => {
                        setNickname(e.target.value)
                        if (errors.nickname) setErrors((prev) => ({ ...prev, nickname: undefined }))
                    }}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200"
                    placeholder="twoj@email.com"
                    />
                </div>
               </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                  Adres email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }))
                  }}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200"
                  placeholder="twoj@email.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white/90 mb-2">
                  Hasło
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }))
                  }}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200"
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.password}
                  </p>
                )}
                {registerError && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {registerError}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-white/20 bg-white/10 text-amber-500 focus:ring-amber-400 focus:ring-offset-0"
                  />
                  <span className="text-white/70">Akceptuję <a href="#" className="text-amber-400 hover:text-amber-300">warunki</a> użytkwania aplikacji</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-semibold rounded-xl shadow-lg shadow-amber-500/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Rejestracja...
                  </span>
                ) : (
                  "Zarejestruj się"
                )}
              </button>
            </form>
          </div>
          <p className="mt-8 text-center text-white/70">
            Masz już konto ?{" "}
            <Link to="/login" className="text-amber-400 hover:text-amber-300 font-medium underline underline-offset-4 transition-colors">
              Zaloguj się
            </Link>
          </p>
        </div>

        <footer className="absolute bottom-4 text-white/50 text-sm">
          © 2024 BeeHive. All rights reserved.
        </footer>
      </div>
    </div>
  )
}
