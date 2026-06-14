import { githubPagesSpa } from "@sctg/vite-plugin-github-pages-spa";

export default defineConfig({
  base: '/mehvarsalamatapp/',
  plugins: [
    react(),
    githubPagesSpa({ verbose: true }),
  ],
})