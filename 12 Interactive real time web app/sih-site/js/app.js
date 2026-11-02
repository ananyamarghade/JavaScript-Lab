const $ = (s) => document.querySelector(s)
const icons = { Cog: '⚙', Dumbbell: '🏋', Landmark: '🏛', HeartPulse: '♥', Sprout: '❦', Car: '🚗', Truck: '🚚', Bot: '🤖', Leaf: '🍃', Zap: '⚡', ShieldCheck: '🛡', Shapes: '◆' }
const state = { q: '', theme: 'All', type: 'All' }
window.fb = (el) => {
  if (el.dataset.remote && !el.dataset.tried) {
    el.dataset.tried = '1'
    el.src = el.dataset.remote
    return
  }
  const d = document.createElement('div')
  d.className = 'img-fallback ' + el.className
  d.innerHTML = '<span>' + el.alt + '</span>'
  el.replaceWith(d)
}
const img = (src, alt, cls = '') => {
  const k = Object.keys(photos).find((x) => photos[x] === src)
  return k ? `<img class="${cls}" src="images/${k}.jpg" data-remote="${src}" alt="${alt}" loading="lazy" onerror="fb(this)">` : `<img class="${cls}" src="${src}" alt="${alt}" onerror="fb(this)">`
}
const logo = '<svg class="logo" viewBox="0 0 64 64" role="img" aria-label="Smart India Hackathon logo"><circle cx="32" cy="32" r="30" fill="#0a1750" stroke="#f47b20" stroke-width="3"/><path d="M32 12a13 13 0 0 0-7 24c1.5 1 2 2.200 2 4v2h10v-2c0-1.800.5-3 2-4a13 13 0 0 0-7-24z" fill="none" stroke="#fff" stroke-width="3" stroke-linejoin="round"/><rect x="26" y="45" width="12" height="3.500" rx="1.700" fill="#f47b20"/><rect x="28" y="50.500" width="8" height="3" rx="1.500" fill="#1a9a4a"/><path d="M27 24l5 6 5-6" fill="none" stroke="#f47b20" stroke-width="2.500" stroke-linecap="round" stroke-linejoin="round"/></svg>'
const brand = (l = '') => `<a href="#home" class="brand ${l}">${logo}<span class="brand-text"><strong>Smart India Hackathon</strong><small>Edition 2026</small></span></a>`

function problemList() {
  const list = problems.filter((p) => (state.theme === 'All' || p.theme === state.theme) && (state.type === 'All' || p.type === state.type) && (p.title + p.org + p.text).toLowerCase().includes(state.q.toLowerCase()))
  $('#count').textContent = list.length + ' problem statement' + (list.length === 1 ? '' : 's') + ' found'
  $('#ps').innerHTML = list.length ? list.map((p) => `<article class="ps-row"><div class="ps-meta"><span class="ps-id">${p.id}</span><span class="chip ${p.type.toLowerCase()}">${p.type}</span></div><div><h3>${p.title}</h3><p class="org">${p.org} · ${p.theme}</p><p>${p.text}</p></div><button class="btn btn-outline" data-ps="${p.id}">View Details</button></article>`).join('') : '<div class="empty"><p>No problem statements match these filters.</p><button class="btn btn-blue" id="reset">Clear filters</button></div>'
  document.querySelectorAll('.seg button').forEach((b) => b.classList.toggle('on', b.dataset.type === state.type))
  $('#theme').value = state.theme
}

function modal(title, body) {
  const m = document.createElement('div')
  m.className = 'modal-backdrop'
  m.innerHTML = `<div class="modal" role="dialog"><button class="modal-close" aria-label="Close">✕</button><h3>${title}</h3>${body}</div>`
  const close = () => { m.remove(); document.body.style.overflow = ''; document.removeEventListener('keydown', key) }
  const key = (e) => e.key === 'Escape' && close()
  m.onclick = (e) => (e.target === m || e.target.closest('.modal-close')) && close()
  document.addEventListener('keydown', key)
  document.body.style.overflow = 'hidden'
  document.body.appendChild(m)
}

$('#root').innerHTML = `
<header class="header"><div class="gov-strip"><div class="wrap"><span>Government of India</span><span>Ministry of Education’s Innovation Cell · AICTE</span></div></div>
<div class="logo-bar"><div class="wrap">${brand()}<div class="partners"><div class="partner"><span class="p-ic"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#0a1750" stroke-width="2" stroke-linejoin="round"><path d="M12 6c-2-1.500-5-2-9-2v14c4 0 7 .5 9 2 2-1.500 5-2 9-2V4c-4 0-7 .5-9 2zM12 6v14"/></svg></span><span><strong>Ministry of Education</strong><small>Government of India</small></span></div><div class="partner"><span class="p-ic aicte">AICTE</span><span><strong>AICTE</strong><small>Technical Education Council</small></span></div><div class="partner"><span class="p-ic"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#b84f06" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.500c.7.700 1 1.500 1 2.500h6c0-1 .3-1.800 1-2.500A6 6 0 0 0 12 3z"/></svg></span><span><strong>Innovation Cell</strong><small>Ministry of Education</small></span></div></div></div></div>
<div class="nav-bar"><div class="wrap"><nav class="nav" id="nav">${nav.map(([l, h]) => `<a href="${h}">${l}</a>`).join('')}</nav><a href="#about" class="btn btn-saffron header-cta">Explore SIH</a><button class="menu-btn" id="menu" aria-label="Toggle menu">☰</button></div></div>
<div class="ticker"><strong>What’s New</strong><div>${[...announcements, ...announcements].map((a) => `<span>${a.text}</span>`).join('')}</div></div></header>
<main>
<section id="home" class="hero"><div class="wrap hero-grid"><div><h1>Smart India Hackathon 2026</h1><p class="tagline">Innovating for a Smarter and Stronger India.</p><p>A nationwide initiative bringing together young innovators, creative thinkers and problem solvers to develop technology-driven solutions for real-world challenges.</p><div class="btn-row"><a href="#about" class="btn btn-blue">Explore SIH</a><a href="#problems" class="btn btn-outline">Explore Problem Statements</a></div></div>
<div class="hero-images">${img(photos.team, 'Student team collaborating', 'hero-main')}${img(photos.code, 'Students coding', 'hero-side')}<div class="hero-badge"><strong>36 hours</strong><span>continuous grand finale</span></div></div></div><div class="motto"><h2>No problem is too big... No idea is too small</h2><p>Open innovation for school students and higher education students alike.</p></div></section>
<section id="announcements" class="section alt"><div class="wrap"><div class="section-head"><h2>Latest Announcements</h2><p class="note">Sample announcements shown for illustration. They are not official SIH notices.</p></div><ul class="notice-list">${announcements.map((a) => `<li><time>${a.date}</time><span class="chip">${a.tag}</span><p>${a.text}</p></li>`).join('')}</ul></div></section>
<section id="about" class="section"><div class="wrap about-grid"><div class="about-images">${img(photos.group, 'Students working together', 'about-a')}${img(photos.meeting, 'Mentor guiding a team', 'about-b')}</div><div><h2>About Smart India Hackathon</h2><dl class="about-list">
<div><dt>What is SIH?</dt><dd>Smart India Hackathon is a national innovation competition where students solve problems posed by ministries, departments and industry.</dd></div>
<div><dt>Why it was introduced</dt><dd>To build a culture of product thinking and bring fresh student ideas to challenges that matter to citizens.</dd></div>
<div><dt>Objectives</dt><dd>Promote problem solving, nurture innovation, connect students with organisations and create deployable solutions.</dd></div>
<div><dt>How students participate</dt><dd>Form a team of six, pick a problem, clear your institution’s internal round and submit your idea nationally.</dd></div>
<div><dt>How organisations benefit</dt><dd>Departments gain working prototypes, new perspectives and access to a pool of young talent.</dd></div></dl><div class="age-grid"><div><h3>SIH Junior</h3><p>School students from classes 6 to 12 can present open innovation ideas.</p></div><div><h3>SIH Senior</h3><p>Graduate and post-graduate students of higher education institutions solve real problems.</p></div></div></div></div></section>
<section id="themes" class="section alt"><div class="wrap"><div class="section-head"><h2>Innovation Themes</h2><p>Select a theme to see related problem statements.</p></div><div class="theme-grid">${themes.map((t) => `<a href="#problems" class="theme" data-theme="${t.name}"><span class="ti">${icons[t.icon]}</span><h3>${t.name}</h3><p>${t.text}</p></a>`).join('')}</div></div></section>
<section id="problems" class="section"><div class="wrap"><div class="section-head"><h2>Problem Statements</h2><p class="note">Illustrative sample problems for demonstration. They are not officially released SIH problem statements.</p></div>
<div class="filters"><label class="search">🔍<input id="q" placeholder="Search by keyword"></label><select id="theme" aria-label="Filter by theme"><option>All</option>${themes.map((t) => `<option>${t.name}</option>`).join('')}</select><div class="seg">${['All', 'Software', 'Hardware'].map((t) => `<button data-type="${t}">${t}</button>`).join('')}</div></div>
<p class="count" id="count"></p><div id="ps"></div></div></section>
<section id="timeline" class="section alt"><div class="wrap"><div class="section-head"><h2>How SIH Works</h2></div><ol class="timeline">${steps.map(([t, d], i) => `<li><span class="step-no">${String(i + 1).padStart(2, '0')}</span><div><h3>${t}</h3><p>${d}</p></div></li>`).join('')}</ol></div></section>
<section class="impact"><div class="wrap"><h2>Achievements and Impact</h2><div class="stat-row">${stats.map(([l, n, g]) => `<div><strong>${n}</strong><span>${l}</span><em>${g} figure</em></div>`).join('')}</div></div></section>
<section id="winners" class="section"><div class="wrap"><div class="section-head"><h2>Winning Projects and Success Stories</h2><p class="note">Example projects for illustration. They do not represent actual SIH winners.</p></div><div class="project-grid">${projects.map((p, i) => `<article class="project">${img(photos[p.img], p.name + ' project')}<div><h3>${p.name}</h3><p class="org">${p.problem}</p><p>${p.summary}</p><button class="link-btn" data-pr="${i}">Read case study</button></div></article>`).join('')}</div></div></section>
<section class="section alt"><div class="wrap careers-grid"><div><h2>Placements and Career Opportunities</h2><p>Participation gives students more than a certificate. It builds the experience that employers and incubators look for.</p><ul class="skill-list">${skills.map(([t, d]) => `<li><strong>${t}</strong><span>${d}</span></li>`).join('')}</ul></div>${img(photos.present, 'Student presenting a project', 'careers-img')}</div></section>
<section id="gallery" class="section"><div class="wrap"><div class="section-head"><h2>Event Gallery</h2></div><div class="gallery">${gallery.map(([k, l, s]) => `<button class="shot ${s}" data-g="${k}|${l}">${img(photos[k], l)}<span>${l}</span></button>`).join('')}</div></div></section>
<section class="cta"><div class="wrap"><h2>Your idea can make a difference.</h2><p>Think. Innovate. Collaborate. Build solutions for a better India.</p><a href="#home" class="btn btn-saffron">Explore Smart India Hackathon</a></div></section>
</main>
<footer id="contact" class="footer"><div class="wrap footer-grid"><div>${brand('light')}<p>A national platform for student innovation, solving real problems for a smarter and stronger India.</p><div class="socials">${['X', 'f', 'in', 'ig', '▶'].map((s) => `<a href="https://sih.gov.in" target="_blank" rel="noreferrer">${s}</a>`).join('')}</div></div>
<div><h4>Quick Navigation</h4><ul>${nav.map(([l, h]) => `<li><a href="${h}">${l}</a></li>`).join('')}</ul></div>
<div><h4>Important Links</h4><ul><li><a href="https://www.education.gov.in" target="_blank" rel="noreferrer">Ministry of Education</a></li><li><a href="https://sih.gov.in" target="_blank" rel="noreferrer">Official SIH Portal</a></li><li><a href="https://www.aicte-india.org" target="_blank" rel="noreferrer">AICTE</a></li><li><a href="https://www.digitalindia.gov.in" target="_blank" rel="noreferrer">Digital India</a></li></ul></div>
<div><h4>Contact</h4><ul><li>contact@example.org</li><li>+91 00000 00000</li><li>Address placeholder, India</li></ul></div></div>
<div class="wrap copyright">© 2026 Smart India Hackathon portal concept. Content is illustrative and not an official publication.</div>
<div class="credit"><span>Designed By</span><strong>Ananya Marghade</strong><span>PRN 24070521004</span><span>Batch A1</span></div></footer>`

problemList()
$('#q').oninput = (e) => { state.q = e.target.value; problemList() }
$('#theme').onchange = (e) => { state.theme = e.target.value; problemList() }
$('#menu').onclick = () => $('#nav').classList.toggle('open')
$('#nav').onclick = () => $('#nav').classList.remove('open')
document.addEventListener('click', (e) => {
  const t = e.target.closest('[data-theme],[data-type],[data-ps],[data-pr],[data-g],#reset')
  if (!t) return
  if (t.dataset.theme) { state.theme = t.dataset.theme; problemList() }
  else if (t.dataset.type) { state.type = t.dataset.type; problemList() }
  else if (t.id === 'reset') { state.q = ''; state.theme = 'All'; state.type = 'All'; $('#q').value = ''; problemList() }
  else if (t.dataset.ps) { const p = problems.find((x) => x.id === t.dataset.ps); modal(p.title, `<p class="org">${p.org} · ${p.theme} · ${p.type}</p><p>${p.text}</p><p>${p.detail}</p><p class="note">Sample problem statement for illustration only.</p>`) }
  else if (t.dataset.pr) { const p = projects[t.dataset.pr]; modal(p.name, `<dl class="detail"><dt>Problem addressed</dt><dd>${p.problem}</dd><dt>Technology stack</dt><dd>${p.stack}</dd><dt>Solution summary</dt><dd>${p.summary}</dd><dt>Impact</dt><dd>${p.impact}</dd></dl><p class="note">Illustrative example project.</p>`) }
  else if (t.dataset.g) { const [k, l] = t.dataset.g.split('|'); modal(l, img(photos[k], l, 'lightbox')) }
})
