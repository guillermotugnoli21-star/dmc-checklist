'use client'

export default function BusinessUnitCard({ unit }) {
  const handleClick = () => {
    // TODO: Navegar a checklist de esta unidad
    alert(`Abriendo checklist de ${unit.name}`)
  }

  return (
    <div 
      onClick={handleClick}
      className="bg-white border border-gray-200 rounded-xl p-4 hover:border-primary-300 hover:shadow-sm transition cursor-pointer"
    >
      <div className="flex items-start space-x-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
            {unit.logo ? (
              <img 
                src={unit.logo} 
                alt={unit.name}
                className="w-12 h-12 object-contain"
              />
            ) : (
              <span className="text-2xl">🏢</span>
            )}
          </div>
        </div>

        {/* Información */}
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">{unit.name}</h3>
          
          <div className="mt-2 space-y-1">
            <div className="flex items-center text-sm text-gray-600">
              <span className="w-4 mr-2">📋</span>
              <span>{unit.departmentCount} departamentos</span>
            </div>
            
            <div className="flex items-center text-sm text-gray-600">
              <span className="w-4 mr-2">👥</span>
              <span>Operativos activos: 3</span>
            </div>
          </div>

          {/* Estado */}
          <div className="mt-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Progreso diario</span>
              <span className="text-xs font-medium text-primary-600">65%</span>
            </div>
            <div className="mt-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary-500 rounded-full"
                style={{ width: '65%' }}
              ></div>
            </div>
          </div>
        </div>

        {/* Flecha */}
        <div className="flex-shrink-0 text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Botón de acción */}
      <div className="mt-4 pt-3 border-t border-gray-100">
        <button className="w-full py-2 bg-primary-50 text-primary-700 font-medium rounded-lg hover:bg-primary-100 transition">
          Abrir checklist
        </button>
      </div>
    </div>
  )
}