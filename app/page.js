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
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <h3 className="font-semibold text-green-800 mb-2 flex items-center">
          <span className="text-xl mr-2">📱</span> Instala esta app (PWA)
        </h3>
        <p className="text-green-700 text-sm mb-3">
          Ahora puedes instalarla como app nativa en tu celular:
        </p>
        <div className="bg-white rounded-lg p-3 mb-3">
          <h4 className="font-medium text-gray-800 mb-2">📲 Android:</h4>
          <ol className="text-gray-700 text-sm ml-4 space-y-1">
            <li>1. Abre opciones (⋮) arriba derecha</li>
            <li>2. Selecciona <strong>"Instalar app"</strong></li>
            <li>3. Confirma la instalación</li>
          </ol>
        </div>
        <div className="bg-white rounded-lg p-3">
          <h4 className="font-medium text-gray-800 mb-2">🍎 iPhone:</h4>
          <ol className="text-gray-700 text-sm ml-4 space-y-1">
            <li>1. Abre en <strong>Safari</strong> (no Chrome)</li>
            <li>2. Toca ⎋ (compartir) abajo</li>
            <li>3. Busca <strong>"Añadir a pantalla de inicio"</strong></li>
            <li>4. Confirma</li>
          </ol>
        </div>
      </div>
    </div>
  )
}