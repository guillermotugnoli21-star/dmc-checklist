import './globals.css'

export const metadata = {
  title: 'DMC Checklist - Sistema Operativo',
  description: 'Sistema de checklist operativo multi-unidad de negocio',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  manifest: '/manifest.json',
  themeColor: '#3b82f6',
  appleWebApp: {
    capable: true,
    title: 'DMC Checklist',
    statusBarStyle: 'black-translucent',
  },
  openGraph: {
    type: 'website',
    title: 'DMC Checklist',
    description: 'Sistema de checklist operativo multi-unidad de negocio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMC Checklist',
    description: 'Sistema de checklist operativo multi-unidad de negocio',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-md min-h-screen bg-white shadow-sm">
          <header className="sticky top-0 z-10 bg-white border-b border-gray-200 p-4">
            <h1 className="text-xl font-bold text-gray-800">DMC Checklist</h1>
          </header>
          <main className="p-4">
            {children}
          </main>
          <footer className="border-t border-gray-200 p-4 text-center text-sm text-gray-500">
            <p>© 2024 DMC Checklist - Versión 0.1</p>
          </footer>
        </div>
      </body>
    </html>
  )
}