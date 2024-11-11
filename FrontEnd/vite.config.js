import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    devOptions: {
      enabled: true
    },
    injectRegister: 'auto',
    
    includeAssets: ['./android'],
    manifest: {
      name: 'Tienda en linea',
      short_name: 'ShopNet.com',
      description: 'Es una tienda en linea',
      theme_color: '#ffffff',
      "icons": [
        {
          "src": "android/android-launchericon-512-512.png",
          "sizes": "512x512"
        },
        {
          "src": "android/android-launchericon-192-192.png",
          "sizes": "192x192"
        },
        {
          "src": "android/android-launchericon-144-144.png",
          "sizes": "144x144"
        },
        {
          "src": "android/android-launchericon-96-96.png",
          "sizes": "96x96"
        },
        {
          "src": "android/android-launchericon-72-72.png",
          "sizes": "72x72"
        },
        {
          "src": "android/android-launchericon-48-48.png",
          "sizes": "48x48"
        }
      ],
    }
  })],
})
