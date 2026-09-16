/**
 * Build all menu templates into site/{folder}/ with subdirectory base,
 * then copy the showcase gallery to site/index.html.
 */
import { spawnSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const siteDir = path.join(root, 'site')
const showcaseDir = path.join(root, '_tools', 'showcase')

const PROJECTS = [
  'ahan',
  'ardineh',
  'barg',
  'blackgrill',
  'charkh',
  'dogstreet',
  'fiesta',
  'forno',
  'ghandil',
  'ikigai',
  'kakao',
  'noorgahve',
  'sabzab',
  'shahan',
  'sobhgah',
  'sokhari',
  'versionEn',
  'versionFa',
  'yakh',
  'zeytoon',
  'zoghal',
]

function decodeEntities(str) {
  return String(str || '')
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
}

function readMeta(folder) {
  const htmlPath = path.join(root, folder, 'index.html')
  const html = fs.readFileSync(htmlPath, 'utf8')
  const titleMatch = html.match(/<title>([^<]*)<\/title>/i)
  const descMatch = html.match(/name=["']description["']\s+content=["']([^"']*)["']/i)
    || html.match(/content=["']([^"']*)["']\s+name=["']description["']/i)
  let title = decodeEntities((titleMatch?.[1] || folder).trim())
  // Prefer brand name before " | "
  if (title.includes('|')) title = title.split('|')[0].trim()
  if (title.includes('—')) title = title.split('—')[0].trim()
  const description = decodeEntities((descMatch?.[1] || '').trim()) || `تمپلیت منوی ${title}`
  return { folder, title, description }
}

function run(cmd, args, cwd) {
  console.log(`\n> ${cmd} ${args.join(' ')}  (${path.relative(root, cwd)})`)
  const result = spawnSync(cmd, args, {
    cwd,
    stdio: 'inherit',
    shell: process.platform === 'win32',
    env: process.env,
  })
  if (result.status !== 0) {
    throw new Error(`Command failed in ${cwd}: ${cmd} ${args.join(' ')}`)
  }
}

function ensureDeps(folderPath) {
  const nodeModules = path.join(folderPath, 'node_modules')
  const viteBin = path.join(nodeModules, 'vite')
  if (!fs.existsSync(viteBin)) {
    run('npm', ['install'], folderPath)
  }
}

function emptyDir(dir) {
  fs.rmSync(dir, { recursive: true, force: true })
  fs.mkdirSync(dir, { recursive: true })
}

emptyDir(siteDir)

const catalog = []

for (const folder of PROJECTS) {
  const folderPath = path.join(root, folder)
  if (!fs.existsSync(path.join(folderPath, 'package.json'))) {
    console.warn('skip missing package.json:', folder)
    continue
  }

  ensureDeps(folderPath)

  const outDir = path.join(siteDir, folder)
  // Vite --outDir is relative to project root; use absolute to be safe
  // Relative base so assets work when site/ is opened via Live Server,
  // nested paths, or static hosts — not only at domain-root /{folder}/.
  run(
    'npx',
    ['vite', 'build', '--base', './', '--outDir', outDir, '--emptyOutDir'],
    folderPath
  )

  catalog.push(readMeta(folder))
  console.log('built', folder)
}

// Showcase gallery files
fs.copyFileSync(path.join(showcaseDir, 'index.html'), path.join(siteDir, 'index.html'))
fs.copyFileSync(path.join(showcaseDir, 'styles.css'), path.join(siteDir, 'styles.css'))
fs.copyFileSync(path.join(showcaseDir, 'app.js'), path.join(siteDir, 'app.js'))
fs.writeFileSync(
  path.join(siteDir, 'projects.js'),
  `window.__SHOWCASE_PROJECTS__ = ${JSON.stringify(catalog, null, 2)};\n`,
  'utf8'
)

console.log(`\nShowcase ready: ${siteDir}`)
console.log(`Projects: ${catalog.length}`)
