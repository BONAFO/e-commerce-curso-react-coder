# 🛒 ecommerce-curso-react

Proyecto de e-commerce desarrollado como parte del curso de **React Redux / CoderHouse**.  
Incluye integración con **Firebase Firestore** y un servicio de datos mockeado para pruebas.

---

## 🚀 Instalación

1. Clona el repositorio

Instala las dependencias:

npm install

Configura las variables de entorno en un archivo .env

Env:
    Firestore:
    
                VITE_FIREBASE_API_KEY
                VITE_FIREBASE_AUTH_DOMAIN
                VITE_FIREBASE_PROJECT_ID
                VITE_FIREBASE_STORAGE_BUCKET
                VITE_FIREBASE_MESSAGING_SENDER_ID
                VITE_FIREBASE_APP_ID


🧪 Scripts disponibles

    npm run start — Inicia el servidor de desarrollo en localhost:3000

    npm run build — Compila el proyecto para producción

    npm run preview — Previsualiza el build localmente

    npm run lint — Ejecuta ESLint sobre el código fuente


⚙️ Configuración

El proyecto soporta dos modos de servicio:

    mock — Usa datos locales para pruebas rápidas.

    firestore — Conecta con Firebase Firestore para datos reales.

El modo se define en src/db/services.js:


export const MODE = "firestore"; // Cambiar a "mock" si se desea usar datos locales

