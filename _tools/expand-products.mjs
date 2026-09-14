/**
 * Expand product counts by cloning variants for each menu project.
 * Keeps existing items and appends new ones with unique ids/names.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const folders = [
  'noorgahve','shahan','blackgrill','ikigai','ardineh','sabzab','ahan','ghandil',
  'charkh','kakao','sobhgah','zoghal','zeytoon','dogstreet','barg','yakh','fiesta'
]

const EXTRA_SUFFIXES = ['ویژه', 'خانواده', 'دوبل', 'لایت', 'پریمیوم', 'فصلی', 'امضادار', 'کلاسیک پلاس']

for (const folder of folders) {
  const file = path.join(root, folder, 'src', 'data', 'menuData.js')
  if (!fs.existsSync(file)) continue
  let src = fs.readFileSync(file, 'utf8')
  if (src.includes('/* expanded-v2 */')) {
    console.log('already expanded', folder)
    continue
  }

  // Extract PRODUCTS array via eval-safe approach: find export const PRODUCTS
  const marker = 'export const PRODUCTS ='
  const idx = src.indexOf(marker)
  if (idx === -1) {
    console.log('no PRODUCTS', folder)
    continue
  }

  // Dynamically import by converting to temp module is heavy; instead append extras before closing ]
  const closeIdx = src.lastIndexOf(']')
  if (closeIdx === -1) continue

  // Get max id with regex
  const ids = [...src.matchAll(/id:\s*(\d+)/g)].map((m) => Number(m[1]))
  let nextId = Math.max(...ids, 0) + 1

  // Pull a few product templates via regex blocks - simplified: duplicate last few image refs
  const images = [...src.matchAll(/image:\s*img\('([^']+)'\)/g)].map((m) => m[1])
  const cats = [...src.matchAll(/\{\s*id:\s*'([^']+)'\s*,\s*name:/g)].map((m) => m[1])
  if (!images.length || !cats.length) {
    console.log('skip parse', folder)
    continue
  }

  const extras = []
  for (let i = 0; i < 12; i++) {
    const cat = cats[i % cats.length]
    const image = images[i % images.length]
    const suffix = EXTRA_SUFFIXES[i % EXTRA_SUFFIXES.length]
    const price = 85000 + (i * 17000)
    extras.push(`  {
    id: ${nextId++},
    category: '${cat}',
    name: 'آیتم ${suffix} ${i + 1}',
    price: ${price},
    prep: ${5 + (i % 10)},
    ${i % 4 === 0 ? "badge: 'new'," : i % 5 === 0 ? "badge: 'best'," : ''}
    desc: 'محصول پیشنهادی منو — قابل ویرایش از پنل مدیریت.',
    tags: ['پیشنهادی'],
    image: img('${image}'),
  }`)
  }

  const insertion = ',\n  /* expanded-v2 */\n' + extras.join(',\n') + '\n'
  src = src.slice(0, closeIdx) + insertion + src.slice(closeIdx)
  fs.writeFileSync(file, src, 'utf8')
  console.log('expanded', folder, '+12')
}
console.log('done')
