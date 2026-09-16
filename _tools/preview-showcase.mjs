/**
 * Tiny static file server for the showcase site/ folder.
 * Usage: node _tools/preview-showcase.mjs [port]
 */
import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'site')
const port = Number(process.argv[2] || 4173)

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.map': 'application/json',
}

function safeJoin(base, reqPath) {
  const decoded = decodeURIComponent(reqPath.split('?')[0])
  const cleaned = path.normalize(decoded).replace(/^([/\\])+/, '')
  const full = path.join(base, cleaned)
  if (!full.startsWith(base)) return null
  return full
}

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent((req.url || '/').split('?')[0])

  // Keep trailing slash for directories so relative asset paths (./assets/...) resolve.
  if (urlPath !== '/' && !path.extname(urlPath) && !urlPath.endsWith('/')) {
    const asDir = safeJoin(root, urlPath)
    if (asDir && fs.existsSync(asDir) && fs.statSync(asDir).isDirectory()) {
      res.writeHead(302, { Location: `${urlPath}/` })
      res.end()
      return
    }
  }

  let target = safeJoin(root, urlPath === '/' ? '/index.html' : urlPath)
  if (!target) {
    res.writeHead(403)
    res.end('Forbidden')
    return
  }

  if (fs.existsSync(target) && fs.statSync(target).isDirectory()) {
    target = path.join(target, 'index.html')
  }

  if (!fs.existsSync(target) || !fs.statSync(target).isFile()) {
    res.writeHead(404)
    res.end('Not found')
    return
  }

  const ext = path.extname(target).toLowerCase()
  res.writeHead(200, { 'Content-Type': TYPES[ext] || 'application/octet-stream' })
  fs.createReadStream(target).pipe(res)
})

server.listen(port, '127.0.0.1', () => {
  console.log(`Showcase preview: http://127.0.0.1:${port}/`)
})
