/**
 * Rewrite absolute /logo.png and /hero.png paths to respect Vite BASE_URL
 * so menus work both at domain root and under /{folder}/ in the showcase.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const skip = new Set(['.git', '_tools', 'node_modules', 'site'])

const folders = fs
  .readdirSync(root, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !skip.has(d.name) && !d.name.startsWith('.'))
  .map((d) => d.name)

let changed = 0

for (const folder of folders) {
  const base = path.join(root, folder)

  const logoPath = path.join(base, 'src', 'components', 'Logo.jsx')
  if (fs.existsSync(logoPath)) {
    let s = fs.readFileSync(logoPath, 'utf8')
    const next = s.replaceAll('src="/logo.png"', 'src={`${import.meta.env.BASE_URL}logo.png`}')
    if (next !== s) {
      fs.writeFileSync(logoPath, next)
      changed++
      console.log('logo', folder)
    }
  }

  const appPath = path.join(base, 'src', 'App.jsx')
  if (fs.existsSync(appPath)) {
    let s = fs.readFileSync(appPath, 'utf8')
    const next = s.replaceAll("heroImage: '/hero.png'", 'heroImage: `${import.meta.env.BASE_URL}hero.png`')
    if (next !== s) {
      fs.writeFileSync(appPath, next)
      changed++
      console.log('app', folder)
    }
  }

  const cssPath = path.join(base, 'src', 'index.css')
  if (fs.existsSync(cssPath)) {
    let s = fs.readFileSync(cssPath, 'utf8')
    let next = s
      .replace(/,\s*url\('\/hero\.png'\)\s*center\/cover\s*no-repeat/g, '')
      .replace(/url\('\/hero\.png'\)\s*center\/cover\s*no-repeat/g, 'none')
      .replace(/var\(--hero-overlay\),\s*url\('\/hero\.png'\)\s*center\/cover\s*no-repeat/g, 'var(--hero-overlay)')
    if (next !== s) {
      fs.writeFileSync(cssPath, next)
      changed++
      console.log('css', folder)
    }
  }

  const htmlPath = path.join(base, 'index.html')
  if (fs.existsSync(htmlPath)) {
    let s = fs.readFileSync(htmlPath, 'utf8')
    let next = s
      .replaceAll('href="/logo.png"', 'href="%BASE_URL%logo.png"')
      .replaceAll('href="/favicon.svg"', 'href="%BASE_URL%favicon.svg"')
    if (next !== s) {
      fs.writeFileSync(htmlPath, next)
      changed++
      console.log('html', folder)
    }
  }
}

console.log('done, files changed:', changed)
