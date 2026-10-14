# DMC Checklist

Sistema de checklist operativo multi-unidad de negocio.

## Características principales

- ✅ Autenticación por código (6-8 caracteres)
- ✅ Dos roles: Administrador y Operador
- ✅ Menú de unidades de negocio con logos
- ✅ Checklists por departamento
- ✅ Envío de reportes por WhatsApp
- ✅ Panel de administración completo
- ✅ Sistema de auditoría integral
- ✅ PWA (instalable en celular)

## Tecnologías

- **Frontend**: Next.js (App Router) + React
- **Estilos**: Tailwind CSS
- **Backend**: Firebase (Firestore, Auth, Storage)
- **Despliegue**: Vercel
- **PWA**: next-pwa

## Instalación local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/guillermotugnoli21-star/dmc-checklist.git
   cd dmc-checklist
   ```

2. Instala dependencias:
   ```bash
   npm install
   ```

3. Configura Firebase:
   - Copia tus credenciales en `firebase-config.js`
   - Configura reglas de seguridad en Firebase Console

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abre [http://localhost:3000](http://localhost:3000)

## Configuración de Firebase

1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com)
2. Habilita:
   - Authentication (Email/Password)
   - Firestore Database
   - Storage
3. Configura reglas de seguridad según `firebase-rules.md`

## Despliegue en Vercel

1. Conecta tu repositorio GitHub en [Vercel](https://vercel.com)
2. Agrega variables de entorno:
   - `NEXT_PUBLIC_FIREBASE_*` (todas las claves)
3. Despliega

## Licencia

Propietario - DMC Checklist