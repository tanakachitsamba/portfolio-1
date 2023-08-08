function $() {}
function H(t, n) {
	for (const e in n) t[e] = n[e];
	return t;
}
function B(t) {
	return t();
}
function C() {
	return Object.create(null);
}
function g(t) {
	t.forEach(B);
}
function O(t) {
	return typeof t == 'function';
}
function lt(t, n) {
	return t != t ? n == n : t !== n || (t && typeof t == 'object') || typeof t == 'function';
}
function I(t) {
	return Object.keys(t).length === 0;
}
function G(t, ...n) {
	if (t == null) return $;
	const e = t.subscribe(...n);
	return e.unsubscribe ? () => e.unsubscribe() : e;
}
function ut(t, n, e) {
	t.$$.on_destroy.push(G(n, e));
}
function ot(t, n, e, i) {
	if (t) {
		const r = P(t, n, e, i);
		return t[0](r);
	}
}
function P(t, n, e, i) {
	return t[1] && i ? H(e.ctx.slice(), t[1](i(n))) : e.ctx;
}
function st(t, n, e, i) {
	if (t[2] && i) {
		const r = t[2](i(e));
		if (n.dirty === void 0) return r;
		if (typeof r == 'object') {
			const s = [],
				c = Math.max(n.dirty.length, r.length);
			for (let o = 0; o < c; o += 1) s[o] = n.dirty[o] | r[o];
			return s;
		}
		return n.dirty | r;
	}
	return n.dirty;
}
function ft(t, n, e, i, r, s) {
	if (r) {
		const c = P(n, e, i, s);
		t.p(c, r);
	}
}
function at(t) {
	if (t.ctx.length > 32) {
		const n = [],
			e = t.ctx.length / 32;
		for (let i = 0; i < e; i++) n[i] = -1;
		return n;
	}
	return -1;
}
let w = !1;
function L() {
	w = !0;
}
function W() {
	w = !1;
}
function J(t, n, e, i) {
	for (; t < n; ) {
		const r = t + ((n - t) >> 1);
		e(r) <= i ? (t = r + 1) : (n = r);
	}
	return t;
}
function K(t) {
	if (t.hydrate_init) return;
	t.hydrate_init = !0;
	let n = t.childNodes;
	if (t.nodeName === 'HEAD') {
		const l = [];
		for (let u = 0; u < n.length; u++) {
			const a = n[u];
			a.claim_order !== void 0 && l.push(a);
		}
		n = l;
	}
	const e = new Int32Array(n.length + 1),
		i = new Int32Array(n.length);
	e[0] = -1;
	let r = 0;
	for (let l = 0; l < n.length; l++) {
		const u = n[l].claim_order,
			a = (r > 0 && n[e[r]].claim_order <= u ? r + 1 : J(1, r, (x) => n[e[x]].claim_order, u)) - 1;
		i[l] = e[a] + 1;
		const f = a + 1;
		(e[f] = l), (r = Math.max(f, r));
	}
	const s = [],
		c = [];
	let o = n.length - 1;
	for (let l = e[r] + 1; l != 0; l = i[l - 1]) {
		for (s.push(n[l - 1]); o >= l; o--) c.push(n[o]);
		o--;
	}
	for (; o >= 0; o--) c.push(n[o]);
	s.reverse(), c.sort((l, u) => l.claim_order - u.claim_order);
	for (let l = 0, u = 0; l < c.length; l++) {
		for (; u < s.length && c[l].claim_order >= s[u].claim_order; ) u++;
		const a = u < s.length ? s[u] : null;
		t.insertBefore(c[l], a);
	}
}
function Q(t, n) {
	if (w) {
		for (
			K(t),
				(t.actual_end_child === void 0 ||
					(t.actual_end_child !== null && t.actual_end_child.parentNode !== t)) &&
					(t.actual_end_child = t.firstChild);
			t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

		)
			t.actual_end_child = t.actual_end_child.nextSibling;
		n !== t.actual_end_child
			? (n.claim_order !== void 0 || n.parentNode !== t) && t.insertBefore(n, t.actual_end_child)
			: (t.actual_end_child = n.nextSibling);
	} else (n.parentNode !== t || n.nextSibling !== null) && t.appendChild(n);
}
function dt(t, n, e) {
	w && !e ? Q(t, n) : (n.parentNode !== t || n.nextSibling != e) && t.insertBefore(n, e || null);
}
function R(t) {
	t.parentNode && t.parentNode.removeChild(t);
}
function U(t) {
	return document.createElement(t);
}
function A(t) {
	return document.createTextNode(t);
}
function _t() {
	return A(' ');
}
function ht() {
	return A('');
}
function mt(t, n, e) {
	e == null ? t.removeAttribute(n) : t.getAttribute(n) !== e && t.setAttribute(n, e);
}
function V(t) {
	return Array.from(t.childNodes);
}
function X(t) {
	t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function T(t, n, e, i, r = !1) {
	X(t);
	const s = (() => {
		for (let c = t.claim_info.last_index; c < t.length; c++) {
			const o = t[c];
			if (n(o)) {
				const l = e(o);
				return l === void 0 ? t.splice(c, 1) : (t[c] = l), r || (t.claim_info.last_index = c), o;
			}
		}
		for (let c = t.claim_info.last_index - 1; c >= 0; c--) {
			const o = t[c];
			if (n(o)) {
				const l = e(o);
				return (
					l === void 0 ? t.splice(c, 1) : (t[c] = l),
					r ? l === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = c),
					o
				);
			}
		}
		return i();
	})();
	return (s.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), s;
}
function Y(t, n, e, i) {
	return T(
		t,
		(r) => r.nodeName === n,
		(r) => {
			const s = [];
			for (let c = 0; c < r.attributes.length; c++) {
				const o = r.attributes[c];
				e[o.name] || s.push(o.name);
			}
			s.forEach((c) => r.removeAttribute(c));
		},
		() => i(n)
	);
}
function pt(t, n, e) {
	return Y(t, n, e, U);
}
function Z(t, n) {
	return T(
		t,
		(e) => e.nodeType === 3,
		(e) => {
			const i = '' + n;
			if (e.data.startsWith(i)) {
				if (e.data.length !== i.length) return e.splitText(i.length);
			} else e.data = i;
		},
		() => A(n),
		!0
	);
}
function yt(t) {
	return Z(t, ' ');
}
function gt(t, n) {
	(n = '' + n), t.data !== n && (t.data = n);
}
function xt(t, n, e, i) {
	e == null ? t.style.removeProperty(n) : t.style.setProperty(n, e, i ? 'important' : '');
}
function bt(t, n) {
	return new t(n);
}
let y;
function p(t) {
	y = t;
}
function q() {
	if (!y) throw new Error('Function called outside component initialization');
	return y;
}
function $t(t) {
	q().$$.on_mount.push(t);
}
function wt(t) {
	q().$$.after_update.push(t);
}
const h = [],
	k = [];
let m = [];
const M = [],
	z = Promise.resolve();
let v = !1;
function D() {
	v || ((v = !0), z.then(F));
}
function Et() {
	return D(), z;
}
function N(t) {
	m.push(t);
}
const E = new Set();
let _ = 0;
function F() {
	if (_ !== 0) return;
	const t = y;
	do {
		try {
			for (; _ < h.length; ) {
				const n = h[_];
				_++, p(n), tt(n.$$);
			}
		} catch (n) {
			throw ((h.length = 0), (_ = 0), n);
		}
		for (p(null), h.length = 0, _ = 0; k.length; ) k.pop()();
		for (let n = 0; n < m.length; n += 1) {
			const e = m[n];
			E.has(e) || (E.add(e), e());
		}
		m.length = 0;
	} while (h.length);
	for (; M.length; ) M.pop()();
	(v = !1), E.clear(), p(t);
}
function tt(t) {
	if (t.fragment !== null) {
		t.update(), g(t.before_update);
		const n = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(N);
	}
}
function nt(t) {
	const n = [],
		e = [];
	m.forEach((i) => (t.indexOf(i) === -1 ? n.push(i) : e.push(i))), e.forEach((i) => i()), (m = n);
}
const b = new Set();
let d;
function vt() {
	d = { r: 0, c: [], p: d };
}
function Nt() {
	d.r || g(d.c), (d = d.p);
}
function et(t, n) {
	t && t.i && (b.delete(t), t.i(n));
}
function At(t, n, e, i) {
	if (t && t.o) {
		if (b.has(t)) return;
		b.add(t),
			d.c.push(() => {
				b.delete(t), i && (e && t.d(1), i());
			}),
			t.o(n);
	} else i && i();
}
function St(t) {
	t && t.c();
}
function jt(t, n) {
	t && t.l(n);
}
function it(t, n, e, i) {
	const { fragment: r, after_update: s } = t.$$;
	r && r.m(n, e),
		i ||
			N(() => {
				const c = t.$$.on_mount.map(B).filter(O);
				t.$$.on_destroy ? t.$$.on_destroy.push(...c) : g(c), (t.$$.on_mount = []);
			}),
		s.forEach(N);
}
function rt(t, n) {
	const e = t.$$;
	e.fragment !== null &&
		(nt(e.after_update),
		g(e.on_destroy),
		e.fragment && e.fragment.d(n),
		(e.on_destroy = e.fragment = null),
		(e.ctx = []));
}
function ct(t, n) {
	t.$$.dirty[0] === -1 && (h.push(t), D(), t.$$.dirty.fill(0)),
		(t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
}
function Ct(t, n, e, i, r, s, c, o = [-1]) {
	const l = y;
	p(t);
	const u = (t.$$ = {
		fragment: null,
		ctx: [],
		props: s,
		update: $,
		not_equal: r,
		bound: C(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(n.context || (l ? l.$$.context : [])),
		callbacks: C(),
		dirty: o,
		skip_bound: !1,
		root: n.target || l.$$.root
	});
	c && c(u.root);
	let a = !1;
	if (
		((u.ctx = e
			? e(t, n.props || {}, (f, x, ...S) => {
					const j = S.length ? S[0] : x;
					return (
						u.ctx &&
							r(u.ctx[f], (u.ctx[f] = j)) &&
							(!u.skip_bound && u.bound[f] && u.bound[f](j), a && ct(t, f)),
						x
					);
			  })
			: []),
		u.update(),
		(a = !0),
		g(u.before_update),
		(u.fragment = i ? i(u.ctx) : !1),
		n.target)
	) {
		if (n.hydrate) {
			L();
			const f = V(n.target);
			u.fragment && u.fragment.l(f), f.forEach(R);
		} else u.fragment && u.fragment.c();
		n.intro && et(t.$$.fragment), it(t, n.target, n.anchor, n.customElement), W(), F();
	}
	p(l);
}
class kt {
	$destroy() {
		rt(this, 1), (this.$destroy = $);
	}
	$on(n, e) {
		if (!O(e)) return $;
		const i = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
		return (
			i.push(e),
			() => {
				const r = i.indexOf(e);
				r !== -1 && i.splice(r, 1);
			}
		);
	}
	$set(n) {
		this.$$set && !I(n) && ((this.$$.skip_bound = !0), this.$$set(n), (this.$$.skip_bound = !1));
	}
}
export {
	it as A,
	rt as B,
	ot as C,
	ft as D,
	at as E,
	st as F,
	Q as G,
	$ as H,
	ut as I,
	kt as S,
	_t as a,
	dt as b,
	yt as c,
	At as d,
	ht as e,
	Nt as f,
	et as g,
	R as h,
	Ct as i,
	wt as j,
	U as k,
	pt as l,
	V as m,
	mt as n,
	$t as o,
	xt as p,
	A as q,
	Z as r,
	lt as s,
	Et as t,
	gt as u,
	vt as v,
	k as w,
	bt as x,
	St as y,
	jt as z
};
