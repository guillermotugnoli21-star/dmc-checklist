'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import BusinessUnitCard from '../../components/BusinessUnitCard'

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Verificar autenticación
    const userData = localStorage.getItem('dmc_user')
    const userCode = localStorage.getItem('dmc_code')
    
    if (!userData || !userCode) {
      router.push('/')
      return
    }
    
    setUser(JSON.parse(userData))
    setLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('dmc_user')
    localStorage.removeItem('dmc_code')
    router.push('/')
  }

  // Datos de prueba - unidades de negocio
  const businessUnits = [
    { id: 1, name: 'Sucursal Centro', logo: '/logo-temp.svg', departmentCount: 5 },
    { id: 2, name: 'Sucursal Norte', logo: '/logo-temp.svg', departmentCount: 3 },
    { id: 3, name: 'Sucursal Sur', logo: '/logo-temp.svg', departmentCount: 4 },
    { id: 4, name: 'Almacén Principal', logo: '/logo-temp.svg', departmentCount: 2 },
  ]

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Hola, {user?.code || 'Operador'}
          </h1>
          <p className="text-gray-600">
            Rol: <span className="font-medium capitalize">{user?.role?.toLowerCase() || 'operador'}</span>
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-sm bg-red-50 text-red-700 border border-red-200 rounded-lg hover:bg-red-100 transition"
        >
          Cerrar sesión
        </button>
      </div>

      {/* Unidades de negocio */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Unidades de negocio asignadas
        </h2>
        
        {businessUnits.length === 0 ? (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
            <p className="text-gray-600">No tienes unidades asignadas</p>
            <p className="text-gray-500 text-sm mt-2">
              Contacta al administrador para obtener acceso
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {businessUnits.map((unit) => (
              <BusinessUnitCard key={unit.id} unit={unit} />
            ))}
          </div>
        )}
      </div>

      {/* Acciones rápidas */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-800 mb-2">Acciones rápidas</h3>
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-white border border-blue-300 text-blue-700 rounded-lg hover:bg-blue-50">
            Ver auditoría
          </button>
          <button className="px-4 py-2 bg-white border border-blue-300 text-blue-700 rounded-lg hover:bg-blue-50">
            Reportar problema
          </button>
          <button className="px-4 py-2 bg-white border border-blue-300 text-blue-700 rounded-lg hover:bg-blue-50">
            Cambiar contraseña
          </button>
        </div>
      </div>
    </div>
  )
}