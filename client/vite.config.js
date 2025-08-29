export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': process.env.NODE_ENV === 'production'
        ? { target: 'https://your-backend-url.com', changeOrigin: true }
        : { target: 'http://localhost:5000', changeOrigin: true }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
