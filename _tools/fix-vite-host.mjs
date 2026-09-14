import fs from 'fs'
import path from 'path'

const ports = {
  forno: 5173,
  noorgahve: 5174,
  shahan: 5175,
  blackgrill: 5176,
  ikigai: 5177,
  ardineh: 5178,
  sabzab: 5179,
  ahan: 5180,
  ghandil: 5181,
  charkh: 5182,
  kakao: 5183,
  sobhgah: 5184,
  zoghal: 5185,
  zeytoon: 5186,
  dogstreet: 5187,
  barg: 5188,
  yakh: 5189,
  fiesta: 5190,
  sokhari: 5191,
  versionFa: 5192,
  versionEn: 5193,
}

for (const [d, p] of Object.entries(ports)) {
  if (!fs.existsSync(path.join(d, 'package.json')) || !fs.existsSync(path.join(d, 'vite.config.js'))) {
    console.log('skip', d)
    continue
  }

  const cfg = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: ${p},
    strictPort: true,
  },
  preview: {
    host: '127.0.0.1',
    port: ${p + 100},
    strictPort: true,
  },
})
`

  fs.writeFileSync(path.join(d, 'vite.config.js'), cfg)

  const pkg = JSON.parse(fs.readFileSync(path.join(d, 'package.json'), 'utf8'))
  pkg.scripts = pkg.scripts || {}
  pkg.scripts.dev = `vite --host 127.0.0.1 --port ${p} --strictPort`
  pkg.scripts.build = pkg.scripts.build || 'vite build'
  pkg.scripts.preview = `vite preview --host 127.0.0.1 --port ${p + 100} --strictPort`
  fs.writeFileSync(path.join(d, 'package.json'), JSON.stringify(pkg, null, 2) + '\n')
  console.log('OK', d, 'dev', p, 'preview', p + 100)
}
