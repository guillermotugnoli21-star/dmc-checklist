import LoginForm from '../components/LoginForm'

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-block p-4 bg-primary-100 rounded-full mb-4">
          <span className="text-3xl">✅</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Bienvenido a DMC Checklist
        </h1>
        <p className="text-gray-600">
          Sistema operativo multi-unidad de negocio
        </p>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <LoginForm />
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-800 mb-2">📱 Instala esta app</h3>
        <p className="text-blue-700 text-sm">
          Esta es una PWA. Para instalarla en tu celular:
        </p>
        <ul className="text-blue-700 text-sm mt-2 space-y-1">
          <li>• <strong>Android:</strong> Abre opciones (⋮) → "Instalar app"</li>
          <li>• <strong>iPhone:</strong> Comparte (⎋) → "Añadir a pantalla de inicio"</li>
        </ul>
      </div>
    </div>
  )
}