//element
function c(e) { return document.createElement(e)}
function cn(e) { return document.createElementNS(n,e)}
function ce(o) {
	var e = c(o.e)
	if(o.a) { ao(e, o.a) }
	if(o.so) { a('style', so(e, o.so)) }
	if(o.s) { ss('style', o.s) }
	if(o.t) { t(e, o.t) }
	if(o.ih) { ih(e, o.ih) }
	if(o.oh) { oh(e, o.oh) }
	if(o.c && o.c.length) { for(ch of o.c) { add(e,ce(ch)) } }
	return e
}
function p(e) { return e.parentNode }
function pr(e) { return p(e).remove() }
function sb(e) { return p(e).children }
function sbr(e) { var pe = p(e); ih(pe, ''); add(pe, e) }

//append
function add(p,c) { p.append(c)}

//select
function e(id) { return document.getElementById(id) }
function q(qq) { return document.querySelector(qq) }
function qa(qq) { return document.querySelectorAll(qq) }
function qe(el, qq) { return el.querySelector(qq) }
function qea(el, qq) { return el.querySelectorAll(qq) }

//attributes
function a(e, an, av) { e.setAttribute(an, av) }
function ao(e, ao) {
	for(at in ao) {
		e.setAttribute(at, ao[at].replace(/_/g, '-'))
	}
}
function ra(e, an) { e.removeAttribute(an) }

function ih(e, html) { e.innerHTML = html }
function oh(e, html) { e.outerHTML = html }
function t(e, text) { e.innerText = text }

//style
function s(e, sk, sv) { e.style[sk] = sv }
function ss(e, ss) { e.style = ss }
function so(sob) {
	var st = ''
	for(s in sob) { st += s + ':' + sob[s] + '; ' }
	return st.replace(/_/g, '-')
}
function se(sob) {
	const se = document.createElement('style')
	for(ss of sob) {
		var stl = ss.f + ' { '
		for(stl in ss.s) { stl += so(stl) }
		stl += '}'
		se.append(stl)
	}
	return se
}

//local storage
function ds(key,val) { return window.localStorage.setItem(key, val)}
function dg(key) { return window.localStorage.getItem(key)}
function dr(key) { return window.localStorage.removeItem(key)}

//classes
function ca(e, c) { e.classList.add(c)}
function cr(e, c) { e.classList.remove(c)}
function ct(e, c) { e.classList.toggle(c)}
function ctt(e, c) { e.classList.toggle(c, true)}
function ctf(e, c) { e.classList.toggle(c, false)}
function cc(e, cl) {return e.classList.contains(cl)}

//events 
function ael(n, f) { addEventListener(n, f)}


function notify(m, style = 'z-index: 100; padding: 22px; background-color: #ddd;') {
	const n = c('div')
	s(n, style)
	ac(n, 'center')
	ac(n, 'fullscreen')
	t(n, m)

	const x = c('div')
	t(x, 'ok')
	sa(x, 'onclick', 'p(this).remove()')
	ac(x, 'action')
	ac(x, 'bottom')
	a(n,x)

	a(q('body'), n)
}
