const PROJECTS = window.__SHOWCASE_PROJECTS__ || []

const grid = document.getElementById('grid')

if (!PROJECTS.length) {
  grid.innerHTML =
    '<p style="grid-column:1/-1;text-align:center;color:#4a3f36">هنوز پروژه‌ای ثبت نشده. اسکریپت بیلد را اجرا کنید.</p>'
} else {
  grid.innerHTML = PROJECTS.map(
    (p, i) => `
    <a class="card" href="./${p.folder}/" style="--delay:${i * 40}ms">
      <span class="card-slug">${p.folder}</span>
      <h2>${escapeHtml(p.title)}</h2>
      <p>${escapeHtml(p.description)}</p>
      <span class="card-cta">مشاهده منو ←</span>
    </a>`
  ).join('')
}

function escapeHtml(str) {
  return String(str || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}
