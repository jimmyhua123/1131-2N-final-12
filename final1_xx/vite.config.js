import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/final1_xx/', // 如果是子路徑部署，例如 '/final1_xx/'，請對應修改
  build: {
    outDir: 'dist', // 確保構建輸出的目錄是 dist
  },
});
