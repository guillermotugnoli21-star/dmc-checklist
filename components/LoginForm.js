'use client'

import { useState } from 'react'
import { loginWithCode } from '../lib/firebase'

export default function LoginForm() {
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      // Validar longitud mínima
      if (code.length < 6) {
        setError('El código debe tener al menos 6 caracteres')
        setLoading(false)
        return
      }
      
      // Intentar autenticación
      const result = await loginWithCode(code)
      
      if (result.success) {
        // Guardar en localStorage temporalmente
        localStorage.setItem('dmc_user', JSON.stringify(result.user))
        localStorage.setItem('dmc_code', code)
        
        // Redirigir al dashboard
        window.location.href = '/dashboard'
      } else {
        setError(result.error || 'Código incorrecto. Intenta nuevamente.')
      }
      
    } catch (err) {
      console.error('Login error:', err)
      setError('Error de conexión. Verifica tu internet.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-2">
          Código de acceso
        </label>
        <input
          id="code"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          placeholder="Ej: ABC123"
          className="w-full px-4 py-3 text-lg text-center border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition"
          maxLength={8}
          required
          disabled={loading}
        />
        <p className="mt-2 text-sm text-gray-500">
          Ingresa el código de 6-8 caracteres que te asignó el administrador
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="text-red-700 text-sm font-medium">{error}</p>
          <p className="text-red-600 text-xs mt-1">
            Si el problema persiste, contacta al administrador.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={loading || code.length < 6}
        className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed touch-target"
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Verificando...
          </span>
        ) : (
          'Ingresar al sistema'
        )}
      </button>

      <div className="text-center text-sm text-gray-500 pt-4 border-t border-gray-200">
        <p>¿Problemas para acceder?</p>
        <button
          type="button"
          className="text-primary-600 hover:text-primary-800 font-medium mt-1"
          onClick={() => alert('Contacta al administrador para obtener un nuevo código.')}
        >
          Solicitar ayuda
        </button>
      </div>
    </form>
  )
}