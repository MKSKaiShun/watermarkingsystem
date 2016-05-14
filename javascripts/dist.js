function getReadableFileSizeString(t) {
	var e = -1,
	i = [" kB", " MB", " GB", " TB", "PB", "EB", "ZB", "YB"];
	do
		t /= 1024, e++;
	while (t > 1024);
	return Math.max(t, .1).toFixed(1) + i[e]
}
if (!function (t, e) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
		if (!t.document)
			throw new Error("jQuery requires a window with a document");
			return e(t)
		}
		 : e(t)
	}
		("undefined" != typeof window ? window : this, function (t, e) {
			function i(t) {
				var e = "length" in t && t.length,
				i = st.type(t);
				return "function" === i || st.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
			}
			function n(t, e, i) {
				if (st.isFunction(e))
					return st.grep(t, function (t, n) {
						return !!e.call(t, n, t) !== i
					});
				if (e.nodeType)
					return st.grep(t, function (t) {
						return t === e !== i
					});
				if ("string" == typeof e) {
					if (dt.test(e))
						return st.filter(e, t, i);
					e = st.filter(e, t)
				}
				return st.grep(t, function (t) {
					return st.inArray(t, e) >= 0 !== i
				})
			}
			function s(t, e) {
				do
					t = t[e];
				while (t && 1 !== t.nodeType);
				return t
			}
			function r(t) {
				var e = _t[t] = {};
				return st.each(t.match(yt) || [], function (t, i) {
					e[i] = !0
				}),
				e
			}
			function o() {
				pt.addEventListener ? (pt.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (pt.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
			}
			function a() {
				(pt.addEventListener || "load" === event.type || "complete" === pt.readyState) && (o(), st.ready())
			}
			function l(t, e, i) {
				if (void 0 === i && 1 === t.nodeType) {
					var n = "data-" + e.replace(Et, "-$1").toLowerCase();
					if (i = t.getAttribute(n), "string" == typeof i) {
						try {
							i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Ct.test(i) ? st.parseJSON(i) : i
						} catch (s) {}

						st.data(t, e, i)
					} else
						i = void 0
				}
				return i
			}
			function h(t) {
				var e;
				for (e in t)
					if (("data" !== e || !st.isEmptyObject(t[e])) && "toJSON" !== e)
						return !1;
				return !0
			}
			function u(t, e, i, n) {
				if (st.acceptData(t)) {
					var s,
					r,
					o = st.expando,
					a = t.nodeType,
					l = a ? st.cache : t,
					h = a ? t[o] : t[o] && o;
					if (h && l[h] && (n || l[h].data) || void 0 !== i || "string" != typeof e)
						return h || (h = a ? t[o] = K.pop() || st.guid++ : o), l[h] || (l[h] = a ? {}

							 : {
							toJSON : st.noop
						}), ("object" == typeof e || "function" == typeof e) && (n ? l[h] = st.extend(l[h], e) : l[h].data = st.extend(l[h].data, e)), r = l[h], n || (r.data || (r.data = {}), r = r.data), void 0 !== i && (r[st.camelCase(e)] = i), "string" == typeof e ? (s = r[e], null == s && (s = r[st.camelCase(e)])) : s = r, s
				}
			}
			function c(t, e, i) {
				if (st.acceptData(t)) {
					var n,
					s,
					r = t.nodeType,
					o = r ? st.cache : t,
					a = r ? t[st.expando] : st.expando;
					if (o[a]) {
						if (e && (n = i ? o[a] : o[a].data)) {
							st.isArray(e) ? e = e.concat(st.map(e, st.camelCase)) : e in n ? e = [e] : (e = st.camelCase(e), e = e in n ? [e] : e.split(" ")),
							s = e.length;
							for (; s--; )
								delete n[e[s]];
							if (i ? !h(n) : !st.isEmptyObject(n))
								return
						}
						(i || (delete o[a].data, h(o[a]))) && (r ? st.cleanData([t], !0) : it.deleteExpando || o != o.window ? delete o[a] : o[a] = null)
					}
				}
			}
			function d() {
				return !0
			}
			function f() {
				return !1
			}
			function p() {
				try {
					return pt.activeElement
				} catch (t) {}

			}
			function g(t) {
				var e = Rt.split("|"),
				i = t.createDocumentFragment();
				if (i.createElement)
					for (; e.length; )
						i.createElement(e.pop());
				return i
			}
			function m(t, e) {
				var i,
				n,
				s = 0,
				r = typeof t.getElementsByTagName !== kt ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== kt ? t.querySelectorAll(e || "*") : void 0;
				if (!r)
					for (r = [], i = t.childNodes || t; null != (n = i[s]); s++)
						!e || st.nodeName(n, e) ? r.push(n) : st.merge(r, m(n, e));
				return void 0 === e || e && st.nodeName(t, e) ? st.merge([t], r) : r
			}
			function v(t) {
				At.test(t.type) && (t.defaultChecked = t.checked)
			}
			function b(t, e) {
				return st.nodeName(t, "table") && st.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
			}
			function y(t) {
				return t.type = (null !== st.find.attr(t, "type")) + "/" + t.type,
				t
			}
			function _(t) {
				var e = Yt.exec(t.type);
				return e ? t.type = e[1] : t.removeAttribute("type"),
				t
			}
			function w(t, e) {
				for (var i, n = 0; null != (i = t[n]); n++)
					st._data(i, "globalEval", !e || st._data(e[n], "globalEval"))
			}
			function x(t, e) {
				if (1 === e.nodeType && st.hasData(t)) {
					var i,
					n,
					s,
					r = st._data(t),
					o = st._data(e, r),
					a = r.events;
					if (a) {
						delete o.handle,
						o.events = {};
						for (i in a)
							for (n = 0, s = a[i].length; s > n; n++)
								st.event.add(e, i, a[i][n])
					}
					o.data && (o.data = st.extend({}, o.data))
				}
			}
			function k(t, e) {
				var i,
				n,
				s;
				if (1 === e.nodeType) {
					if (i = e.nodeName.toLowerCase(), !it.noCloneEvent && e[st.expando]) {
						s = st._data(e);
						for (n in s.events)
							st.removeEvent(e, n, s.handle);
						e.removeAttribute(st.expando)
					}
					"script" === i && e.text !== t.text ? (y(e).text = t.text, _(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), it.html5Clone && t.innerHTML && !st.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && At.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
				}
			}
			function C(e, i) {
				var n,
				s = st(i.createElement(e)).appendTo(i.body),
				r = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(s[0])) ? n.display : st.css(s[0], "display");
				return s.detach(),
				r
			}
			function E(t) {
				var e = pt,
				i = Qt[t];
				return i || (i = C(t, e), "none" !== i && i || (Jt = (Jt || st("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Jt[0].contentWindow || Jt[0].contentDocument).document, e.write(), e.close(), i = C(t, e), Jt.detach()), Qt[t] = i),
				i
			}
			function T(t, e) {
				return {
					get : function () {
						var i = t();
						return null != i ? i ? void delete this.get : (this.get = e).apply(this, arguments) : void 0
					}
				}
			}
			function S(t, e) {
				if (e in t)
					return e;
				for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, s = de.length; s--; )
					if (e = de[s] + i, e in t)
						return e;
				return n
			}
			function I(t, e) {
				for (var i, n, s, r = [], o = 0, a = t.length; a > o; o++)
					n = t[o], n.style && (r[o] = st._data(n, "olddisplay"), i = n.style.display, e ? (r[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && It(n) && (r[o] = st._data(n, "olddisplay", E(n.nodeName)))) : (s = It(n), (i && "none" !== i || !s) && st._data(n, "olddisplay", s ? i : st.css(n, "display"))));
				for (o = 0; a > o; o++)
					n = t[o], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[o] || "" : "none"));
				return t
			}
			function D(t, e, i) {
				var n = le.exec(e);
				return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
			}
			function A(t, e, i, n, s) {
				for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > r; r += 2)
					"margin" === i && (o += st.css(t, i + St[r], !0, s)), n ? ("content" === i && (o -= st.css(t, "padding" + St[r], !0, s)), "margin" !== i && (o -= st.css(t, "border" + St[r] + "Width", !0, s))) : (o += st.css(t, "padding" + St[r], !0, s), "padding" !== i && (o += st.css(t, "border" + St[r] + "Width", !0, s)));
				return o
			}
			function M(t, e, i) {
				var n = !0,
				s = "width" === e ? t.offsetWidth : t.offsetHeight,
				r = te(t),
				o = it.boxSizing && "border-box" === st.css(t, "boxSizing", !1, r);
				if (0 >= s || null == s) {
					if (s = ee(t, e, r), (0 > s || null == s) && (s = t.style[e]), ne.test(s))
						return s;
					n = o && (it.boxSizingReliable() || s === t.style[e]),
					s = parseFloat(s) || 0
				}
				return s + A(t, e, i || (o ? "border" : "content"), n, r) + "px"
			}
			function N(t, e, i, n, s) {
				return new N.prototype.init(t, e, i, n, s)
			}
			function O() {
				return setTimeout(function () {
					fe = void 0
				}),
				fe = st.now()
			}
			function P(t, e) {
				var i,
				n = {
					height : t
				},
				s = 0;
				for (e = e ? 1 : 0; 4 > s; s += 2 - e)
					i = St[s], n["margin" + i] = n["padding" + i] = t;
				return e && (n.opacity = n.width = t),
				n
			}
			function z(t, e, i) {
				for (var n, s = (ye[e] || []).concat(ye["*"]), r = 0, o = s.length; o > r; r++)
					if (n = s[r].call(i, e, t))
						return n
			}
			function R(t, e, i) {
				var n,
				s,
				r,
				o,
				a,
				l,
				h,
				u,
				c = this,
				d = {},
				f = t.style,
				p = t.nodeType && It(t),
				g = st._data(t, "fxshow");
				i.queue || (a = st._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
						a.unqueued || l()
					}), a.unqueued++, c.always(function () {
						c.always(function () {
							a.unqueued--,
							st.queue(t, "fx").length || a.empty.fire()
						})
					})),
				1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [f.overflow, f.overflowX, f.overflowY], h = st.css(t, "display"), u = "none" === h ? st._data(t, "olddisplay") || E(t.nodeName) : h, "inline" === u && "none" === st.css(t, "float") && (it.inlineBlockNeedsLayout && "inline" !== E(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")),
				i.overflow && (f.overflow = "hidden", it.shrinkWrapBlocks() || c.always(function () {
						f.overflow = i.overflow[0],
						f.overflowX = i.overflow[1],
						f.overflowY = i.overflow[2]
					}));
				for (n in e)
					if (s = e[n], ge.exec(s)) {
						if (delete e[n], r = r || "toggle" === s, s === (p ? "hide" : "show")) {
							if ("show" !== s || !g || void 0 === g[n])
								continue;
							p = !0
						}
						d[n] = g && g[n] || st.style(t, n)
					} else
						h = void 0;
				if (st.isEmptyObject(d))
					"inline" === ("none" === h ? E(t.nodeName) : h) && (f.display = h);
				else {
					g ? "hidden" in g && (p = g.hidden) : g = st._data(t, "fxshow", {}),
					r && (g.hidden = !p),
					p ? st(t).show() : c.done(function () {
						st(t).hide()
					}),
					c.done(function () {
						var e;
						st._removeData(t, "fxshow");
						for (e in d)
							st.style(t, e, d[e])
					});
					for (n in d)
						o = z(p ? g[n] : 0, n, c), n in g || (g[n] = o.start, p && (o.end = o.start, o.start = "width" === n || "height" === n ? 1 : 0))
				}
			}
			function H(t, e) {
				var i,
				n,
				s,
				r,
				o;
				for (i in t)
					if (n = st.camelCase(i), s = e[n], r = t[i], st.isArray(r) && (s = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), o = st.cssHooks[n], o && "expand" in o) {
						r = o.expand(r),
						delete t[n];
						for (i in r)
							i in t || (t[i] = r[i], e[i] = s)
					} else
						e[n] = s
			}
			function L(t, e, i) {
				var n,
				s,
				r = 0,
				o = be.length,
				a = st.Deferred().always(function () {
						delete l.elem
					}),
				l = function () {
					if (s)
						return !1;
					for (var e = fe || O(), i = Math.max(0, h.startTime + h.duration - e), n = i / h.duration || 0, r = 1 - n, o = 0, l = h.tweens.length; l > o; o++)
						h.tweens[o].run(r);
					return a.notifyWith(t, [h, r, i]),
					1 > r && l ? i : (a.resolveWith(t, [h]), !1)
				},
				h = a.promise({
						elem : t,
						props : st.extend({}, e),
						opts : st.extend(!0, {
							specialEasing : {}

						}, i),
						originalProperties : e,
						originalOptions : i,
						startTime : fe || O(),
						duration : i.duration,
						tweens : [],
						createTween : function (e, i) {
							var n = st.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
							return h.tweens.push(n),
							n
						},
						stop : function (e) {
							var i = 0,
							n = e ? h.tweens.length : 0;
							if (s)
								return this;
							for (s = !0; n > i; i++)
								h.tweens[i].run(1);
							return e ? a.resolveWith(t, [h, e]) : a.rejectWith(t, [h, e]),
							this
						}
					}),
				u = h.props;
				for (H(u, h.opts.specialEasing); o > r; r++)
					if (n = be[r].call(h, t, u, h.opts))
						return n;
				return st.map(u, z, h),
				st.isFunction(h.opts.start) && h.opts.start.call(t, h),
				st.fx.timer(st.extend(l, {
						elem : t,
						anim : h,
						queue : h.opts.queue
					})),
				h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
			}
			function j(t) {
				return function (e, i) {
					"string" != typeof e && (i = e, e = "*");
					var n,
					s = 0,
					r = e.toLowerCase().match(yt) || [];
					if (st.isFunction(i))
						for (; n = r[s++]; )
							"+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
				}
			}
			function B(t, e, i, n) {
				function s(a) {
					var l;
					return r[a] = !0,
					st.each(t[a] || [], function (t, a) {
						var h = a(e, i, n);
						return "string" != typeof h || o || r[h] ? o ? !(l = h) : void 0 : (e.dataTypes.unshift(h), s(h), !1)
					}),
					l
				}
				var r = {},
				o = t === $e;
				return s(e.dataTypes[0]) || !r["*"] && s("*")
			}
			function F(t, e) {
				var i,
				n,
				s = st.ajaxSettings.flatOptions || {};
				for (n in e)
					void 0 !== e[n] && ((s[n] ? t : i || (i = {}))[n] = e[n]);
				return i && st.extend(!0, t, i),
				t
			}
			function W(t, e, i) {
				for (var n, s, r, o, a = t.contents, l = t.dataTypes; "*" === l[0]; )
					l.shift(), void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
				if (s)
					for (o in a)
						if (a[o] && a[o].test(s)) {
							l.unshift(o);
							break
						}
				if (l[0]in i)
					r = l[0];
				else {
					for (o in i) {
						if (!l[0] || t.converters[o + " " + l[0]]) {
							r = o;
							break
						}
						n || (n = o)
					}
					r = r || n
				}
				return r ? (r !== l[0] && l.unshift(r), i[r]) : void 0
			}
			function $(t, e, i, n) {
				var s,
				r,
				o,
				a,
				l,
				h = {},
				u = t.dataTypes.slice();
				if (u[1])
					for (o in t.converters)
						h[o.toLowerCase()] = t.converters[o];
				for (r = u.shift(); r; )
					if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
						if ("*" === r)
							r = l;
						else if ("*" !== l && l !== r) {
							if (o = h[l + " " + r] || h["* " + r], !o)
								for (s in h)
									if (a = s.split(" "), a[1] === r && (o = h[l + " " + a[0]] || h["* " + a[0]])) {
										o === !0 ? o = h[s] : h[s] !== !0 && (r = a[0], u.unshift(a[1]));
										break
									}
							if (o !== !0)
								if (o && t["throws"])
									e = o(e);
								else
									try {
										e = o(e)
									} catch (c) {
										return {
											state : "parsererror",
											error : o ? c : "No conversion from " + l + " to " + r
										}
									}
						}
				return {
					state : "success",
					data : e
				}
			}
			function V(t, e, i, n) {
				var s;
				if (st.isArray(e))
					st.each(e, function (e, s) {
						i || Ye.test(t) ? n(t, s) : V(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n)
					});
				else if (i || "object" !== st.type(e))
					n(t, e);
				else
					for (s in e)
						V(t + "[" + s + "]", e[s], i, n)
			}
			function q() {
				try {
					return new t.XMLHttpRequest
				} catch (e) {}

			}
			function U() {
				try {
					return new t.ActiveXObject("Microsoft.XMLHTTP")
				} catch (e) {}

			}
			function Y(t) {
				return st.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
			}
			var K = [],
			X = K.slice,
			Z = K.concat,
			G = K.push,
			J = K.indexOf,
			Q = {},
			tt = Q.toString,
			et = Q.hasOwnProperty,
			it = {},
			nt = "1.11.3",
			st = function (t, e) {
				return new st.fn.init(t, e)
			},
			rt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
			ot = /^-ms-/,
			at = /-([\da-z])/gi,
			lt = function (t, e) {
				return e.toUpperCase()
			};
			st.fn = st.prototype = {
				jquery : nt,
				constructor : st,
				selector : "",
				length : 0,
				toArray : function () {
					return X.call(this)
				},
				get : function (t) {
					return null != t ? 0 > t ? this[t + this.length] : this[t] : X.call(this)
				},
				pushStack : function (t) {
					var e = st.merge(this.constructor(), t);
					return e.prevObject = this,
					e.context = this.context,
					e
				},
				each : function (t, e) {
					return st.each(this, t, e)
				},
				map : function (t) {
					return this.pushStack(st.map(this, function (e, i) {
							return t.call(e, i, e)
						}))
				},
				slice : function () {
					return this.pushStack(X.apply(this, arguments))
				},
				first : function () {
					return this.eq(0)
				},
				last : function () {
					return this.eq(-1)
				},
				eq : function (t) {
					var e = this.length,
					i = +t + (0 > t ? e : 0);
					return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
				},
				end : function () {
					return this.prevObject || this.constructor(null)
				},
				push : G,
				sort : K.sort,
				splice : K.splice
			},
			st.extend = st.fn.extend = function () {
				var t,
				e,
				i,
				n,
				s,
				r,
				o = arguments[0] || {},
				a = 1,
				l = arguments.length,
				h = !1;
				for ("boolean" == typeof o && (h = o, o = arguments[a] || {}, a++), "object" == typeof o || st.isFunction(o) || (o = {}), a === l && (o = this, a--); l > a; a++)
					if (null != (s = arguments[a]))
						for (n in s)
							t = o[n], i = s[n], o !== i && (h && i && (st.isPlainObject(i) || (e = st.isArray(i))) ? (e ? (e = !1, r = t && st.isArray(t) ? t : []) : r = t && st.isPlainObject(t) ? t : {}, o[n] = st.extend(h, r, i)) : void 0 !== i && (o[n] = i));
				return o
			},
			st.extend({
				expando : "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
				isReady : !0,
				error : function (t) {
					throw new Error(t)
				},
				noop : function () {},
				isFunction : function (t) {
					return "function" === st.type(t)
				},
				isArray : Array.isArray || function (t) {
					return "array" === st.type(t)
				},
				isWindow : function (t) {
					return null != t && t == t.window
				},
				isNumeric : function (t) {
					return !st.isArray(t) && t - parseFloat(t) + 1 >= 0
				},
				isEmptyObject : function (t) {
					var e;
					for (e in t)
						return !1;
					return !0
				},
				isPlainObject : function (t) {
					var e;
					if (!t || "object" !== st.type(t) || t.nodeType || st.isWindow(t))
						return !1;
					try {
						if (t.constructor && !et.call(t, "constructor") && !et.call(t.constructor.prototype, "isPrototypeOf"))
							return !1
					} catch (i) {
						return !1
					}
					if (it.ownLast)
						for (e in t)
							return et.call(t, e);
					for (e in t);
					return void 0 === e || et.call(t, e)
				},
				type : function (t) {
					return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Q[tt.call(t)] || "object" : typeof t
				},
				globalEval : function (e) {
					e && st.trim(e) && (t.execScript || function (e) {
						t.eval.call(t, e)
					})(e)
				},
				camelCase : function (t) {
					return t.replace(ot, "ms-").replace(at, lt)
				},
				nodeName : function (t, e) {
					return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
				},
				each : function (t, e, n) {
					var s,
					r = 0,
					o = t.length,
					a = i(t);
					if (n) {
						if (a)
							for (; o > r && (s = e.apply(t[r], n), s !== !1); r++);
						else
							for (r in t)
								if (s = e.apply(t[r], n), s === !1)
									break
					} else if (a)
						for (; o > r && (s = e.call(t[r], r, t[r]), s !== !1); r++);
					else
						for (r in t)
							if (s = e.call(t[r], r, t[r]), s === !1)
								break;
					return t
				},
				trim : function (t) {
					return null == t ? "" : (t + "").replace(rt, "")
				},
				makeArray : function (t, e) {
					var n = e || [];
					return null != t && (i(Object(t)) ? st.merge(n, "string" == typeof t ? [t] : t) : G.call(n, t)),
					n
				},
				inArray : function (t, e, i) {
					var n;
					if (e) {
						if (J)
							return J.call(e, t, i);
						for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
							if (i in e && e[i] === t)
								return i
					}
					return -1
				},
				merge : function (t, e) {
					for (var i = +e.length, n = 0, s = t.length; i > n; )
						t[s++] = e[n++];
					if (i !== i)
						for (; void 0 !== e[n]; )
							t[s++] = e[n++];
					return t.length = s,
					t
				},
				grep : function (t, e, i) {
					for (var n, s = [], r = 0, o = t.length, a = !i; o > r; r++)
						n = !e(t[r], r), n !== a && s.push(t[r]);
					return s
				},
				map : function (t, e, n) {
					var s,
					r = 0,
					o = t.length,
					a = i(t),
					l = [];
					if (a)
						for (; o > r; r++)
							s = e(t[r], r, n), null != s && l.push(s);
					else
						for (r in t)
							s = e(t[r], r, n), null != s && l.push(s);
					return Z.apply([], l)
				},
				guid : 1,
				proxy : function (t, e) {
					var i,
					n,
					s;
					return "string" == typeof e && (s = t[e], e = t, t = s),
					st.isFunction(t) ? (i = X.call(arguments, 2), n = function () {
						return t.apply(e || this, i.concat(X.call(arguments)))
					}, n.guid = t.guid = t.guid || st.guid++, n) : void 0
				},
				now : function () {
					return +new Date
				},
				support : it
			}),
			st.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
				Q["[object " + e + "]"] = e.toLowerCase()
			});
			var ht = function (t) {
				function e(t, e, i, n) {
					var s,
					r,
					o,
					a,
					l,
					h,
					c,
					f,
					p,
					g;
					if ((e ? e.ownerDocument || e : B) !== N && M(e), e = e || N, i = i || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a)
						return i;
					if (!n && P) {
						if (11 !== a && (s = bt.exec(t)))
							if (o = s[1]) {
								if (9 === a) {
									if (r = e.getElementById(o), !r || !r.parentNode)
										return i;
									if (r.id === o)
										return i.push(r), i
								} else if (e.ownerDocument && (r = e.ownerDocument.getElementById(o)) && L(e, r) && r.id === o)
									return i.push(r), i
							} else {
								if (s[2])
									return J.apply(i, e.getElementsByTagName(t)), i;
								if ((o = s[3]) && w.getElementsByClassName)
									return J.apply(i, e.getElementsByClassName(o)), i
							}
						if (w.qsa && (!z || !z.test(t))) {
							if (f = c = j, p = e, g = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
								for (h = E(t), (c = e.getAttribute("id")) ? f = c.replace(_t, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", l = h.length; l--; )
									h[l] = f + d(h[l]);
								p = yt.test(t) && u(e.parentNode) || e,
								g = h.join(",")
							}
							if (g)
								try {
									return J.apply(i, p.querySelectorAll(g)),
									i
								} catch (m) {}

							finally {
								c || e.removeAttribute("id")
							}
						}
					}
					return S(t.replace(lt, "$1"), e, i, n)
				}
				function i() {
					function t(i, n) {
						return e.push(i + " ") > x.cacheLength && delete t[e.shift()],
						t[i + " "] = n
					}
					var e = [];
					return t
				}
				function n(t) {
					return t[j] = !0,
					t
				}
				function s(t) {
					var e = N.createElement("div");
					try {
						return !!t(e)
					} catch (i) {
						return !1
					}
					finally {
						e.parentNode && e.parentNode.removeChild(e),
						e = null
					}
				}
				function r(t, e) {
					for (var i = t.split("|"), n = t.length; n--; )
						x.attrHandle[i[n]] = e
				}
				function o(t, e) {
					var i = e && t,
					n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
					if (n)
						return n;
					if (i)
						for (; i = i.nextSibling; )
							if (i === e)
								return -1;
					return t ? 1 : -1
				}
				function a(t) {
					return function (e) {
						var i = e.nodeName.toLowerCase();
						return "input" === i && e.type === t
					}
				}
				function l(t) {
					return function (e) {
						var i = e.nodeName.toLowerCase();
						return ("input" === i || "button" === i) && e.type === t
					}
				}
				function h(t) {
					return n(function (e) {
						return e = +e,
						n(function (i, n) {
							for (var s, r = t([], i.length, e), o = r.length; o--; )
								i[s = r[o]] && (i[s] = !(n[s] = i[s]))
						})
					})
				}
				function u(t) {
					return t && "undefined" != typeof t.getElementsByTagName && t
				}
				function c() {}

				function d(t) {
					for (var e = 0, i = t.length, n = ""; i > e; e++)
						n += t[e].value;
					return n
				}
				function f(t, e, i) {
					var n = e.dir,
					s = i && "parentNode" === n,
					r = W++;
					return e.first ? function (e, i, r) {
						for (; e = e[n]; )
							if (1 === e.nodeType || s)
								return t(e, i, r)
					}
					 : function (e, i, o) {
						var a,
						l,
						h = [F, r];
						if (o) {
							for (; e = e[n]; )
								if ((1 === e.nodeType || s) && t(e, i, o))
									return !0
						} else
							for (; e = e[n]; )
								if (1 === e.nodeType || s) {
									if (l = e[j] || (e[j] = {}), (a = l[n]) && a[0] === F && a[1] === r)
										return h[2] = a[2];
									if (l[n] = h, h[2] = t(e, i, o))
										return !0
								}
					}
				}
				function p(t) {
					return t.length > 1 ? function (e, i, n) {
						for (var s = t.length; s--; )
							if (!t[s](e, i, n))
								return !1;
						return !0
					}
					 : t[0]
				}
				function g(t, i, n) {
					for (var s = 0, r = i.length; r > s; s++)
						e(t, i[s], n);
					return n
				}
				function m(t, e, i, n, s) {
					for (var r, o = [], a = 0, l = t.length, h = null != e; l > a; a++)
						(r = t[a]) && (!i || i(r, n, s)) && (o.push(r), h && e.push(a));
					return o
				}
				function v(t, e, i, s, r, o) {
					return s && !s[j] && (s = v(s)),
					r && !r[j] && (r = v(r, o)),
					n(function (n, o, a, l) {
						var h,
						u,
						c,
						d = [],
						f = [],
						p = o.length,
						v = n || g(e || "*", a.nodeType ? [a] : a, []),
						b = !t || !n && e ? v : m(v, d, t, a, l),
						y = i ? r || (n ? t : p || s) ? [] : o : b;
						if (i && i(b, y, a, l), s)
							for (h = m(y, f), s(h, [], a, l), u = h.length; u--; )
								(c = h[u]) && (y[f[u]] = !(b[f[u]] = c));
						if (n) {
							if (r || t) {
								if (r) {
									for (h = [], u = y.length; u--; )
										(c = y[u]) && h.push(b[u] = c);
									r(null, y = [], h, l)
								}
								for (u = y.length; u--; )
									(c = y[u]) && (h = r ? tt(n, c) : d[u]) > -1 && (n[h] = !(o[h] = c))
							}
						} else
							y = m(y === o ? y.splice(p, y.length) : y), r ? r(null, o, y, l) : J.apply(o, y)
					})
				}
				function b(t) {
					for (var e, i, n, s = t.length, r = x.relative[t[0].type], o = r || x.relative[" "], a = r ? 1 : 0, l = f(function (t) {
								return t === e
							}, o, !0), h = f(function (t) {
								return tt(e, t) > -1
							}, o, !0), u = [function (t, i, n) {
								var s = !r && (n || i !== I) || ((e = i).nodeType ? l(t, i, n) : h(t, i, n));
								return e = null,
								s
							}
						]; s > a; a++)
						if (i = x.relative[t[a].type])
							u = [f(p(u), i)];
						else {
							if (i = x.filter[t[a].type].apply(null, t[a].matches), i[j]) {
								for (n = ++a; s > n && !x.relative[t[n].type]; n++);
								return v(a > 1 && p(u), a > 1 && d(t.slice(0, a - 1).concat({
											value : " " === t[a - 2].type ? "*" : ""
										})).replace(lt, "$1"), i, n > a && b(t.slice(a, n)), s > n && b(t = t.slice(n)), s > n && d(t))
							}
							u.push(i)
						}
					return p(u)
				}
				function y(t, i) {
					var s = i.length > 0,
					r = t.length > 0,
					o = function (n, o, a, l, h) {
						var u,
						c,
						d,
						f = 0,
						p = "0",
						g = n && [],
						v = [],
						b = I,
						y = n || r && x.find.TAG("*", h),
						_ = F += null == b ? 1 : Math.random() || .1,
						w = y.length;
						for (h && (I = o !== N && o); p !== w && null != (u = y[p]); p++) {
							if (r && u) {
								for (c = 0; d = t[c++]; )
									if (d(u, o, a)) {
										l.push(u);
										break
									}
								h && (F = _)
							}
							s && ((u = !d && u) && f--, n && g.push(u))
						}
						if (f += p, s && p !== f) {
							for (c = 0; d = i[c++]; )
								d(g, v, o, a);
							if (n) {
								if (f > 0)
									for (; p--; )
										g[p] || v[p] || (v[p] = Z.call(l));
								v = m(v)
							}
							J.apply(l, v),
							h && !n && v.length > 0 && f + i.length > 1 && e.uniqueSort(l)
						}
						return h && (F = _, I = b),
						g
					};
					return s ? n(o) : o
				}
				var _,
				w,
				x,
				k,
				C,
				E,
				T,
				S,
				I,
				D,
				A,
				M,
				N,
				O,
				P,
				z,
				R,
				H,
				L,
				j = "sizzle" + 1 * new Date,
				B = t.document,
				F = 0,
				W = 0,
				$ = i(),
				V = i(),
				q = i(),
				U = function (t, e) {
					return t === e && (A = !0),
					0
				},
				Y = 1 << 31,
				K = {}

				.hasOwnProperty,
				X = [],
				Z = X.pop,
				G = X.push,
				J = X.push,
				Q = X.slice,
				tt = function (t, e) {
					for (var i = 0, n = t.length; n > i; i++)
						if (t[i] === e)
							return i;
					return -1
				},
				et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				it = "[\\x20\\t\\r\\n\\f]",
				nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				st = nt.replace("w", "w#"),
				rt = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + st + "))|)" + it + "*\\]",
				ot = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
				at = new RegExp(it + "+", "g"),
				lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
				ht = new RegExp("^" + it + "*," + it + "*"),
				ut = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
				ct = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
				dt = new RegExp(ot),
				ft = new RegExp("^" + st + "$"),
				pt = {
					ID : new RegExp("^#(" + nt + ")"),
					CLASS : new RegExp("^\\.(" + nt + ")"),
					TAG : new RegExp("^(" + nt.replace("w", "w*") + ")"),
					ATTR : new RegExp("^" + rt),
					PSEUDO : new RegExp("^" + ot),
					CHILD : new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
					bool : new RegExp("^(?:" + et + ")$", "i"),
					needsContext : new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
				},
				gt = /^(?:input|select|textarea|button)$/i,
				mt = /^h\d$/i,
				vt = /^[^{]+\{\s*\[native \w/,
				bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				yt = /[+~]/,
				_t = /'|\\/g,
				wt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
				xt = function (t, e, i) {
					var n = "0x" + e - 65536;
					return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
				},
				kt = function () {
					M()
				};
				try {
					J.apply(X = Q.call(B.childNodes), B.childNodes),
					X[B.childNodes.length].nodeType
				} catch (Ct) {
					J = {
						apply : X.length ? function (t, e) {
							G.apply(t, Q.call(e))
						}
						 : function (t, e) {
							for (var i = t.length, n = 0; t[i++] = e[n++]; );
							t.length = i - 1
						}
					}
				}
				w = e.support = {},
				C = e.isXML = function (t) {
					var e = t && (t.ownerDocument || t).documentElement;
					return e ? "HTML" !== e.nodeName : !1
				},
				M = e.setDocument = function (t) {
					var e,
					i,
					n = t ? t.ownerDocument || t : B;
					return n !== N && 9 === n.nodeType && n.documentElement ? (N = n, O = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", kt, !1) : i.attachEvent && i.attachEvent("onunload", kt)), P = !C(n), w.attributes = s(function (t) {
								return t.className = "i",
								!t.getAttribute("className")
							}), w.getElementsByTagName = s(function (t) {
								return t.appendChild(n.createComment("")),
								!t.getElementsByTagName("*").length
							}), w.getElementsByClassName = vt.test(n.getElementsByClassName), w.getById = s(function (t) {
								return O.appendChild(t).id = j,
								!n.getElementsByName || !n.getElementsByName(j).length
							}), w.getById ? (x.find.ID = function (t, e) {
							if ("undefined" != typeof e.getElementById && P) {
								var i = e.getElementById(t);
								return i && i.parentNode ? [i] : []
							}
						}, x.filter.ID = function (t) {
							var e = t.replace(wt, xt);
							return function (t) {
								return t.getAttribute("id") === e
							}
						}) : (delete x.find.ID, x.filter.ID = function (t) {
							var e = t.replace(wt, xt);
							return function (t) {
								var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
								return i && i.value === e
							}
						}), x.find.TAG = w.getElementsByTagName ? function (t, e) {
						return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
					}
						 : function (t, e) {
						var i,
						n = [],
						s = 0,
						r = e.getElementsByTagName(t);
						if ("*" === t) {
							for (; i = r[s++]; )
								1 === i.nodeType && n.push(i);
							return n
						}
						return r
					}, x.find.CLASS = w.getElementsByClassName && function (t, e) {
						return P ? e.getElementsByClassName(t) : void 0
					}, R = [], z = [], (w.qsa = vt.test(n.querySelectorAll)) && (s(function (t) {
								O.appendChild(t).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\f]' msallowcapture=''><option selected=''></option></select>",
								t.querySelectorAll("[msallowcapture^='']").length && z.push("[*^$]=" + it + "*(?:''|\"\")"),
								t.querySelectorAll("[selected]").length || z.push("\\[" + it + "*(?:value|" + et + ")"),
								t.querySelectorAll("[id~=" + j + "-]").length || z.push("~="),
								t.querySelectorAll(":checked").length || z.push(":checked"),
								t.querySelectorAll("a#" + j + "+*").length || z.push(".#.+[+~]")
							}), s(function (t) {
								var e = n.createElement("input");
								e.setAttribute("type", "hidden"),
								t.appendChild(e).setAttribute("name", "D"),
								t.querySelectorAll("[name=d]").length && z.push("name" + it + "*[*^$|!~]?="),
								t.querySelectorAll(":enabled").length || z.push(":enabled", ":disabled"),
								t.querySelectorAll("*,:x"),
								z.push(",.*:")
							})), (w.matchesSelector = vt.test(H = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && s(function (t) {
							w.disconnectedMatch = H.call(t, "div"),
							H.call(t, "[s!='']:x"),
							R.push("!=", ot)
						}), z = z.length && new RegExp(z.join("|")), R = R.length && new RegExp(R.join("|")), e = vt.test(O.compareDocumentPosition), L = e || vt.test(O.contains) ? function (t, e) {
						var i = 9 === t.nodeType ? t.documentElement : t,
						n = e && e.parentNode;
						return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
					}
						 : function (t, e) {
						if (e)
							for (; e = e.parentNode; )
								if (e === t)
									return !0;
						return !1
					}, U = e ? function (t, e) {
						if (t === e)
							return A = !0, 0;
						var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
						return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === B && L(B, t) ? -1 : e === n || e.ownerDocument === B && L(B, e) ? 1 : D ? tt(D, t) - tt(D, e) : 0 : 4 & i ? -1 : 1)
					}
						 : function (t, e) {
						if (t === e)
							return A = !0, 0;
						var i,
						s = 0,
						r = t.parentNode,
						a = e.parentNode,
						l = [t],
						h = [e];
						if (!r || !a)
							return t === n ? -1 : e === n ? 1 : r ? -1 : a ? 1 : D ? tt(D, t) - tt(D, e) : 0;
						if (r === a)
							return o(t, e);
						for (i = t; i = i.parentNode; )
							l.unshift(i);
						for (i = e; i = i.parentNode; )
							h.unshift(i);
						for (; l[s] === h[s]; )
							s++;
						return s ? o(l[s], h[s]) : l[s] === B ? -1 : h[s] === B ? 1 : 0
					}, n) : N
				},
				e.matches = function (t, i) {
					return e(t, null, null, i)
				},
				e.matchesSelector = function (t, i) {
					if ((t.ownerDocument || t) !== N && M(t), i = i.replace(ct, "='$1']"), !(!w.matchesSelector || !P || R && R.test(i) || z && z.test(i)))
						try {
							var n = H.call(t, i);
							if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType)
								return n
						} catch (s) {}

					return e(i, N, null, [t]).length > 0
				},
				e.contains = function (t, e) {
					return (t.ownerDocument || t) !== N && M(t),
					L(t, e)
				},
				e.attr = function (t, e) {
					(t.ownerDocument || t) !== N && M(t);
					var i = x.attrHandle[e.toLowerCase()],
					n = i && K.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !P) : void 0;
					return void 0 !== n ? n : w.attributes || !P ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
				},
				e.error = function (t) {
					throw new Error("Syntax error, unrecognized expression: " + t)
				},
				e.uniqueSort = function (t) {
					var e,
					i = [],
					n = 0,
					s = 0;
					if (A = !w.detectDuplicates, D = !w.sortStable && t.slice(0), t.sort(U), A) {
						for (; e = t[s++]; )
							e === t[s] && (n = i.push(s));
						for (; n--; )
							t.splice(i[n], 1)
					}
					return D = null,
					t
				},
				k = e.getText = function (t) {
					var e,
					i = "",
					n = 0,
					s = t.nodeType;
					if (s) {
						if (1 === s || 9 === s || 11 === s) {
							if ("string" == typeof t.textContent)
								return t.textContent;
							for (t = t.firstChild; t; t = t.nextSibling)
								i += k(t)
						} else if (3 === s || 4 === s)
							return t.nodeValue
					} else
						for (; e = t[n++]; )
							i += k(e);
					return i
				},
				x = e.selectors = {
					cacheLength : 50,
					createPseudo : n,
					match : pt,
					attrHandle : {},
					find : {},
					relative : {
						">" : {
							dir : "parentNode",
							first : !0
						},
						" " : {
							dir : "parentNode"
						},
						"+" : {
							dir : "previousSibling",
							first : !0
						},
						"~" : {
							dir : "previousSibling"
						}
					},
					preFilter : {
						ATTR : function (t) {
							return t[1] = t[1].replace(wt, xt),
							t[3] = (t[3] || t[4] || t[5] || "").replace(wt, xt),
							"~=" === t[2] && (t[3] = " " + t[3] + " "),
							t.slice(0, 4)
						},
						CHILD : function (t) {
							return t[1] = t[1].toLowerCase(),
							"nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] =  + (t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] =  + (t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
							t
						},
						PSEUDO : function (t) {
							var e,
							i = !t[6] && t[2];
							return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && dt.test(i) && (e = E(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
						}
					},
					filter : {
						TAG : function (t) {
							var e = t.replace(wt, xt).toLowerCase();
							return "*" === t ? function () {
								return !0
							}
							 : function (t) {
								return t.nodeName && t.nodeName.toLowerCase() === e
							}
						},
						CLASS : function (t) {
							var e = $[t + " "];
							return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && $(t, function (t) {
								return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
							})
						},
						ATTR : function (t, i, n) {
							return function (s) {
								var r = e.attr(s, t);
								return null == r ? "!=" === i : i ? (r += "", "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? (" " + r.replace(at, " ") + " ").indexOf(n) > -1 : "|=" === i ? r === n || r.slice(0, n.length + 1) === n + "-" : !1) : !0
							}
						},
						CHILD : function (t, e, i, n, s) {
							var r = "nth" !== t.slice(0, 3),
							o = "last" !== t.slice(-4),
							a = "of-type" === e;
							return 1 === n && 0 === s ? function (t) {
								return !!t.parentNode
							}
							 : function (e, i, l) {
								var h,
								u,
								c,
								d,
								f,
								p,
								g = r !== o ? "nextSibling" : "previousSibling",
								m = e.parentNode,
								v = a && e.nodeName.toLowerCase(),
								b = !l && !a;
								if (m) {
									if (r) {
										for (; g; ) {
											for (c = e; c = c[g]; )
												if (a ? c.nodeName.toLowerCase() === v : 1 === c.nodeType)
													return !1;
											p = g = "only" === t && !p && "nextSibling"
										}
										return !0
									}
									if (p = [o ? m.firstChild : m.lastChild], o && b) {
										for (u = m[j] || (m[j] = {}), h = u[t] || [], f = h[0] === F && h[1], d = h[0] === F && h[2], c = f && m.childNodes[f]; c = ++f && c && c[g] || (d = f = 0) || p.pop(); )
											if (1 === c.nodeType && ++d && c === e) {
												u[t] = [F, f, d];
												break
											}
									} else if (b && (h = (e[j] || (e[j] = {}))[t]) && h[0] === F)
										d = h[1];
									else
										for (; (c = ++f && c && c[g] || (d = f = 0) || p.pop()) && ((a ? c.nodeName.toLowerCase() !== v : 1 !== c.nodeType) || !++d || (b && ((c[j] || (c[j] = {}))[t] = [F, d]), c !== e)); );
									return d -= s,
									d === n || d % n === 0 && d / n >= 0
								}
							}
						},
						PSEUDO : function (t, i) {
							var s,
							r = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
							return r[j] ? r(i) : r.length > 1 ? (s = [t, t, "", i], x.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function (t, e) {
									for (var n, s = r(t, i), o = s.length; o--; )
										n = tt(t, s[o]), t[n] = !(e[n] = s[o])
								}) : function (t) {
								return r(t, 0, s)
							}) : r
						}
					},
					pseudos : {
						not : n(function (t) {
							var e = [],
							i = [],
							s = T(t.replace(lt, "$1"));
							return s[j] ? n(function (t, e, i, n) {
								for (var r, o = s(t, null, n, []), a = t.length; a--; )
									(r = o[a]) && (t[a] = !(e[a] = r))
							}) : function (t, n, r) {
								return e[0] = t,
								s(e, null, r, i),
								e[0] = null,
								!i.pop()
							}
						}),
						has : n(function (t) {
							return function (i) {
								return e(t, i).length > 0
							}
						}),
						contains : n(function (t) {
							return t = t.replace(wt, xt),
							function (e) {
								return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
							}
						}),
						lang : n(function (t) {
							return ft.test(t || "") || e.error("unsupported lang: " + t),
							t = t.replace(wt, xt).toLowerCase(),
							function (e) {
								var i;
								do
									if (i = P ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
										return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
								while ((e = e.parentNode) && 1 === e.nodeType);
								return !1
							}
						}),
						target : function (e) {
							var i = t.location && t.location.hash;
							return i && i.slice(1) === e.id
						},
						root : function (t) {
							return t === O
						},
						focus : function (t) {
							return t === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
						},
						enabled : function (t) {
							return t.disabled === !1
						},
						disabled : function (t) {
							return t.disabled === !0
						},
						checked : function (t) {
							var e = t.nodeName.toLowerCase();
							return "input" === e && !!t.checked || "option" === e && !!t.selected
						},
						selected : function (t) {
							return t.parentNode && t.parentNode.selectedIndex,
							t.selected === !0
						},
						empty : function (t) {
							for (t = t.firstChild; t; t = t.nextSibling)
								if (t.nodeType < 6)
									return !1;
							return !0
						},
						parent : function (t) {
							return !x.pseudos.empty(t)
						},
						header : function (t) {
							return mt.test(t.nodeName)
						},
						input : function (t) {
							return gt.test(t.nodeName)
						},
						button : function (t) {
							var e = t.nodeName.toLowerCase();
							return "input" === e && "button" === t.type || "button" === e
						},
						text : function (t) {
							var e;
							return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
						},
						first : h(function () {
							return [0]
						}),
						last : h(function (t, e) {
							return [e - 1]
						}),
						eq : h(function (t, e, i) {
							return [0 > i ? i + e : i]
						}),
						even : h(function (t, e) {
							for (var i = 0; e > i; i += 2)
								t.push(i);
							return t
						}),
						odd : h(function (t, e) {
							for (var i = 1; e > i; i += 2)
								t.push(i);
							return t
						}),
						lt : h(function (t, e, i) {
							for (var n = 0 > i ? i + e : i; --n >= 0; )
								t.push(n);
							return t
						}),
						gt : h(function (t, e, i) {
							for (var n = 0 > i ? i + e : i; ++n < e; )
								t.push(n);
							return t
						})
					}
				},
				x.pseudos.nth = x.pseudos.eq;
				for (_ in {
					radio : !0,
					checkbox : !0,
					file : !0,
					password : !0,
					image : !0
				})
					x.pseudos[_] = a(_);
				for (_ in {
					submit : !0,
					reset : !0
				})
					x.pseudos[_] = l(_);
				return c.prototype = x.filters = x.pseudos,
				x.setFilters = new c,
				E = e.tokenize = function (t, i) {
					var n,
					s,
					r,
					o,
					a,
					l,
					h,
					u = V[t + " "];
					if (u)
						return i ? 0 : u.slice(0);
					for (a = t, l = [], h = x.preFilter; a; ) {
						(!n || (s = ht.exec(a))) && (s && (a = a.slice(s[0].length) || a),
							l.push(r = [])),
						n = !1,
						(s = ut.exec(a)) && (n = s.shift(), r.push({
								value : n,
								type : s[0].replace(lt, " ")
							}), a = a.slice(n.length));
						for (o in x.filter)
							!(s = pt[o].exec(a)) || h[o] && !(s = h[o](s)) || (n = s.shift(), r.push({
									value : n,
									type : o,
									matches : s
								}), a = a.slice(n.length));
						if (!n)
							break
					}
					return i ? a.length : a ? e.error(t) : V(t, l).slice(0)
				},
				T = e.compile = function (t, e) {
					var i,
					n = [],
					s = [],
					r = q[t + " "];
					if (!r) {
						for (e || (e = E(t)), i = e.length; i--; )
							r = b(e[i]), r[j] ? n.push(r) : s.push(r);
						r = q(t, y(s, n)),
						r.selector = t
					}
					return r
				},
				S = e.select = function (t, e, i, n) {
					var s,
					r,
					o,
					a,
					l,
					h = "function" == typeof t && t,
					c = !n && E(t = h.selector || t);
					if (i = i || [], 1 === c.length) {
						if (r = c[0] = c[0].slice(0), r.length > 2 && "ID" === (o = r[0]).type && w.getById && 9 === e.nodeType && P && x.relative[r[1].type]) {
							if (e = (x.find.ID(o.matches[0].replace(wt, xt), e) || [])[0], !e)
								return i;
							h && (e = e.parentNode),
							t = t.slice(r.shift().value.length)
						}
						for (s = pt.needsContext.test(t) ? 0 : r.length; s-- && (o = r[s], !x.relative[a = o.type]); )
							if ((l = x.find[a]) && (n = l(o.matches[0].replace(wt, xt), yt.test(r[0].type) && u(e.parentNode) || e))) {
								if (r.splice(s, 1), t = n.length && d(r), !t)
									return J.apply(i, n), i;
								break
							}
					}
					return (h || T(t, c))(n, e, !P, i, yt.test(t) && u(e.parentNode) || e),
					i
				},
				w.sortStable = j.split("").sort(U).join("") === j,
				w.detectDuplicates = !!A,
				M(),
				w.sortDetached = s(function (t) {
						return 1 & t.compareDocumentPosition(N.createElement("div"))
					}),
				s(function (t) {
					return t.innerHTML = "<a href='#'></a>",
					"#" === t.firstChild.getAttribute("href")
				}) || r("type|href|height|width", function (t, e, i) {
					return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
				}),
				w.attributes && s(function (t) {
					return t.innerHTML = "<input/>",
					t.firstChild.setAttribute("value", ""),
					"" === t.firstChild.getAttribute("value")
				}) || r("value", function (t, e, i) {
					return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
				}),
				s(function (t) {
					return null == t.getAttribute("disabled")
				}) || r(et, function (t, e, i) {
					var n;
					return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
				}),
				e
			}
			(t);
			st.find = ht,
			st.expr = ht.selectors,
			st.expr[":"] = st.expr.pseudos,
			st.unique = ht.uniqueSort,
			st.text = ht.getText,
			st.isXMLDoc = ht.isXML,
			st.contains = ht.contains;
			var ut = st.expr.match.needsContext,
			ct = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			dt = /^.[^:#\[\.,]*$/;
			st.filter = function (t, e, i) {
				var n = e[0];
				return i && (t = ":not(" + t + ")"),
				1 === e.length && 1 === n.nodeType ? st.find.matchesSelector(n, t) ? [n] : [] : st.find.matches(t, st.grep(e, function (t) {
						return 1 === t.nodeType
					}))
			},
			st.fn.extend({
				find : function (t) {
					var e,
					i = [],
					n = this,
					s = n.length;
					if ("string" != typeof t)
						return this.pushStack(st(t).filter(function () {
								for (e = 0; s > e; e++)
									if (st.contains(n[e], this))
										return !0
							}));
					for (e = 0; s > e; e++)
						st.find(t, n[e], i);
					return i = this.pushStack(s > 1 ? st.unique(i) : i),
					i.selector = this.selector ? this.selector + " " + t : t,
					i
				},
				filter : function (t) {
					return this.pushStack(n(this, t || [], !1))
				},
				not : function (t) {
					return this.pushStack(n(this, t || [], !0))
				},
				is : function (t) {
					return !!n(this, "string" == typeof t && ut.test(t) ? st(t) : t || [], !1).length
				}
			});
			var ft,
			pt = t.document,
			gt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
			mt = st.fn.init = function (t, e) {
				var i,
				n;
				if (!t)
					return this;
				if ("string" == typeof t) {
					if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : gt.exec(t), !i || !i[1] && e)
						return !e || e.jquery ? (e || ft).find(t) : this.constructor(e).find(t);
					if (i[1]) {
						if (e = e instanceof st ? e[0] : e, st.merge(this, st.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : pt, !0)), ct.test(i[1]) && st.isPlainObject(e))
							for (i in e)
								st.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
						return this
					}
					if (n = pt.getElementById(i[2]), n && n.parentNode) {
						if (n.id !== i[2])
							return ft.find(t);
						this.length = 1,
						this[0] = n
					}
					return this.context = pt,
					this.selector = t,
					this
				}
				return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : st.isFunction(t) ? "undefined" != typeof ft.ready ? ft.ready(t) : t(st) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), st.makeArray(t, this))
			};
			mt.prototype = st.fn,
			ft = st(pt);
			var vt = /^(?:parents|prev(?:Until|All))/,
			bt = {
				children : !0,
				contents : !0,
				next : !0,
				prev : !0
			};
			st.extend({
				dir : function (t, e, i) {
					for (var n = [], s = t[e]; s && 9 !== s.nodeType && (void 0 === i || 1 !== s.nodeType || !st(s).is(i)); )
						1 === s.nodeType && n.push(s), s = s[e];
					return n
				},
				sibling : function (t, e) {
					for (var i = []; t; t = t.nextSibling)
						1 === t.nodeType && t !== e && i.push(t);
					return i
				}
			}),
			st.fn.extend({
				has : function (t) {
					var e,
					i = st(t, this),
					n = i.length;
					return this.filter(function () {
						for (e = 0; n > e; e++)
							if (st.contains(this, i[e]))
								return !0
					})
				},
				closest : function (t, e) {
					for (var i, n = 0, s = this.length, r = [], o = ut.test(t) || "string" != typeof t ? st(t, e || this.context) : 0; s > n; n++)
						for (i = this[n]; i && i !== e; i = i.parentNode)
							if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && st.find.matchesSelector(i, t))) {
								r.push(i);
								break
							}
					return this.pushStack(r.length > 1 ? st.unique(r) : r)
				},
				index : function (t) {
					return t ? "string" == typeof t ? st.inArray(this[0], st(t)) : st.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
				},
				add : function (t, e) {
					return this.pushStack(st.unique(st.merge(this.get(), st(t, e))))
				},
				addBack : function (t) {
					return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
				}
			}),
			st.each({
				parent : function (t) {
					var e = t.parentNode;
					return e && 11 !== e.nodeType ? e : null
				},
				parents : function (t) {
					return st.dir(t, "parentNode")
				},
				parentsUntil : function (t, e, i) {
					return st.dir(t, "parentNode", i)
				},
				next : function (t) {
					return s(t, "nextSibling")
				},
				prev : function (t) {
					return s(t, "previousSibling")
				},
				nextAll : function (t) {
					return st.dir(t, "nextSibling")
				},
				prevAll : function (t) {
					return st.dir(t, "previousSibling")
				},
				nextUntil : function (t, e, i) {
					return st.dir(t, "nextSibling", i)
				},
				prevUntil : function (t, e, i) {
					return st.dir(t, "previousSibling", i)
				},
				siblings : function (t) {
					return st.sibling((t.parentNode || {}).firstChild, t)
				},
				children : function (t) {
					return st.sibling(t.firstChild)
				},
				contents : function (t) {
					return st.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : st.merge([], t.childNodes)
				}
			}, function (t, e) {
				st.fn[t] = function (i, n) {
					var s = st.map(this, e, i);
					return "Until" !== t.slice(-5) && (n = i),
					n && "string" == typeof n && (s = st.filter(n, s)),
					this.length > 1 && (bt[t] || (s = st.unique(s)), vt.test(t) && (s = s.reverse())),
					this.pushStack(s)
				}
			});
			var yt = /\S+/g,
			_t = {};
			st.Callbacks = function (t) {
				t = "string" == typeof t ? _t[t] || r(t) : st.extend({}, t);
				var e,
				i,
				n,
				s,
				o,
				a,
				l = [],
				h = !t.once && [],
				u = function (r) {
					for (i = t.memory && r, n = !0, o = a || 0, a = 0, s = l.length, e = !0; l && s > o; o++)
						if (l[o].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
							i = !1;
							break
						}
					e = !1,
					l && (h ? h.length && u(h.shift()) : i ? l = [] : c.disable())
				},
				c = {
					add : function () {
						if (l) {
							var n = l.length;
							!function r(e) {
								st.each(e, function (e, i) {
									var n = st.type(i);
									"function" === n ? t.unique && c.has(i) || l.push(i) : i && i.length && "string" !== n && r(i)
								})
							}
							(arguments),
							e ? s = l.length : i && (a = n, u(i))
						}
						return this
					},
					remove : function () {
						return l && st.each(arguments, function (t, i) {
							for (var n; (n = st.inArray(i, l, n)) > -1; )
								l.splice(n, 1), e && (s >= n && s--, o >= n && o--)
						}),
						this
					},
					has : function (t) {
						return t ? st.inArray(t, l) > -1 : !(!l || !l.length)
					},
					empty : function () {
						return l = [],
						s = 0,
						this
					},
					disable : function () {
						return l = h = i = void 0,
						this
					},
					disabled : function () {
						return !l
					},
					lock : function () {
						return h = void 0,
						i || c.disable(),
						this
					},
					locked : function () {
						return !h
					},
					fireWith : function (t, i) {
						return !l || n && !h || (i = i || [], i = [t, i.slice ? i.slice() : i], e ? h.push(i) : u(i)),
						this
					},
					fire : function () {
						return c.fireWith(this, arguments),
						this
					},
					fired : function () {
						return !!n
					}
				};
				return c
			},
			st.extend({
				Deferred : function (t) {
					var e = [["resolve", "done", st.Callbacks("once memory"), "resolved"], ["reject", "fail", st.Callbacks("once memory"), "rejected"], ["notify", "progress", st.Callbacks("memory")]],
					i = "pending",
					n = {
						state : function () {
							return i
						},
						always : function () {
							return s.done(arguments).fail(arguments),
							this
						},
						then : function () {
							var t = arguments;
							return st.Deferred(function (i) {
								st.each(e, function (e, r) {
									var o = st.isFunction(t[e]) && t[e];
									s[r[1]](function () {
										var t = o && o.apply(this, arguments);
										t && st.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[r[0] + "With"](this === n ? i.promise() : this, o ? [t] : arguments)
									})
								}),
								t = null
							}).promise()
						},
						promise : function (t) {
							return null != t ? st.extend(t, n) : n
						}
					},
					s = {};
					return n.pipe = n.then,
					st.each(e, function (t, r) {
						var o = r[2],
						a = r[3];
						n[r[1]] = o.add,
						a && o.add(function () {
							i = a
						}, e[1^t][2].disable, e[2][2].lock),
						s[r[0]] = function () {
							return s[r[0] + "With"](this === s ? n : this, arguments),
							this
						},
						s[r[0] + "With"] = o.fireWith
					}),
					n.promise(s),
					t && t.call(s, s),
					s
				},
				when : function (t) {
					var e,
					i,
					n,
					s = 0,
					r = X.call(arguments),
					o = r.length,
					a = 1 !== o || t && st.isFunction(t.promise) ? o : 0,
					l = 1 === a ? t : st.Deferred(),
					h = function (t, i, n) {
						return function (s) {
							i[t] = this,
							n[t] = arguments.length > 1 ? X.call(arguments) : s,
							n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
						}
					};
					if (o > 1)
						for (e = new Array(o), i = new Array(o), n = new Array(o); o > s; s++)
							r[s] && st.isFunction(r[s].promise) ? r[s].promise().done(h(s, n, r)).fail(l.reject).progress(h(s, i, e)) : --a;
					return a || l.resolveWith(n, r),
					l.promise()
				}
			});
			var wt;
			st.fn.ready = function (t) {
				return st.ready.promise().done(t),
				this
			},
			st.extend({
				isReady : !1,
				readyWait : 1,
				holdReady : function (t) {
					t ? st.readyWait++ : st.ready(!0)
				},
				ready : function (t) {
					if (t === !0 ? !--st.readyWait : !st.isReady) {
						if (!pt.body)
							return setTimeout(st.ready);
						st.isReady = !0,
						t !== !0 && --st.readyWait > 0 || (wt.resolveWith(pt, [st]), st.fn.triggerHandler && (st(pt).triggerHandler("ready"), st(pt).off("ready")))
					}
				}
			}),
			st.ready.promise = function (e) {
				if (!wt)
					if (wt = st.Deferred(), "complete" === pt.readyState)
						setTimeout(st.ready);
					else if (pt.addEventListener)
						pt.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1);
					else {
						pt.attachEvent("onreadystatechange", a),
						t.attachEvent("onload", a);
						var i = !1;
						try {
							i = null == t.frameElement && pt.documentElement
						} catch (n) {}

						i && i.doScroll && !function s() {
							if (!st.isReady) {
								try {
									i.doScroll("left")
								} catch (t) {
									return setTimeout(s, 50)
								}
								o(),
								st.ready()
							}
						}
						()
					}
				return wt.promise(e)
			};
			var xt,
			kt = "undefined";
			for (xt in st(it))
				break;
			it.ownLast = "0" !== xt,
			it.inlineBlockNeedsLayout = !1,
			st(function () {
				var t,
				e,
				i,
				n;
				i = pt.getElementsByTagName("body")[0],
				i && i.style && (e = pt.createElement("div"), n = pt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== kt && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", it.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
			}),
			function () {
				var t = pt.createElement("div");
				if (null == it.deleteExpando) {
					it.deleteExpando = !0;
					try {
						delete t.test
					} catch (e) {
						it.deleteExpando = !1
					}
				}
				t = null
			}
			(),
			st.acceptData = function (t) {
				var e = st.noData[(t.nodeName + " ").toLowerCase()],
				i = +t.nodeType || 1;
				return 1 !== i && 9 !== i ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
			};
			var Ct = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			Et = /([A-Z])/g;
			st.extend({
				cache : {},
				noData : {
					"applet " : !0,
					"embed " : !0,
					"object " : "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
				},
				hasData : function (t) {
					return t = t.nodeType ? st.cache[t[st.expando]] : t[st.expando],
					!!t && !h(t)
				},
				data : function (t, e, i) {
					return u(t, e, i)
				},
				removeData : function (t, e) {
					return c(t, e)
				},
				_data : function (t, e, i) {
					return u(t, e, i, !0)
				},
				_removeData : function (t, e) {
					return c(t, e, !0)
				}
			}),
			st.fn.extend({
				data : function (t, e) {
					var i,
					n,
					s,
					r = this[0],
					o = r && r.attributes;
					if (void 0 === t) {
						if (this.length && (s = st.data(r), 1 === r.nodeType && !st._data(r, "parsedAttrs"))) {
							for (i = o.length; i--; )
								o[i] && (n = o[i].name, 0 === n.indexOf("data-") && (n = st.camelCase(n.slice(5)), l(r, n, s[n])));
							st._data(r, "parsedAttrs", !0)
						}
						return s
					}
					return "object" == typeof t ? this.each(function () {
						st.data(this, t)
					}) : arguments.length > 1 ? this.each(function () {
						st.data(this, t, e)
					}) : r ? l(r, t, st.data(r, t)) : void 0
				},
				removeData : function (t) {
					return this.each(function () {
						st.removeData(this, t)
					})
				}
			}),
			st.extend({
				queue : function (t, e, i) {
					var n;
					return t ? (e = (e || "fx") + "queue", n = st._data(t, e), i && (!n || st.isArray(i) ? n = st._data(t, e, st.makeArray(i)) : n.push(i)), n || []) : void 0
				},
				dequeue : function (t, e) {
					e = e || "fx";
					var i = st.queue(t, e),
					n = i.length,
					s = i.shift(),
					r = st._queueHooks(t, e),
					o = function () {
						st.dequeue(t, e)
					};
					"inprogress" === s && (s = i.shift(), n--),
					s && ("fx" === e && i.unshift("inprogress"), delete r.stop, s.call(t, o, r)),
					!n && r && r.empty.fire()
				},
				_queueHooks : function (t, e) {
					var i = e + "queueHooks";
					return st._data(t, i) || st._data(t, i, {
						empty : st.Callbacks("once memory").add(function () {
							st._removeData(t, e + "queue"),
							st._removeData(t, i)
						})
					})
				}
			}),
			st.fn.extend({
				queue : function (t, e) {
					var i = 2;
					return "string" != typeof t && (e = t, t = "fx", i--),
					arguments.length < i ? st.queue(this[0], t) : void 0 === e ? this : this.each(function () {
						var i = st.queue(this, t, e);
						st._queueHooks(this, t),
						"fx" === t && "inprogress" !== i[0] && st.dequeue(this, t)
					})
				},
				dequeue : function (t) {
					return this.each(function () {
						st.dequeue(this, t)
					})
				},
				clearQueue : function (t) {
					return this.queue(t || "fx", [])
				},
				promise : function (t, e) {
					var i,
					n = 1,
					s = st.Deferred(),
					r = this,
					o = this.length,
					a = function () {
						--n || s.resolveWith(r, [r])
					};
					for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--; )
						i = st._data(r[o], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
					return a(),
					s.promise(e)
				}
			});
			var Tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			St = ["Top", "Right", "Bottom", "Left"],
			It = function (t, e) {
				return t = e || t,
				"none" === st.css(t, "display") || !st.contains(t.ownerDocument, t)
			},
			Dt = st.access = function (t, e, i, n, s, r, o) {
				var a = 0,
				l = t.length,
				h = null == i;
				if ("object" === st.type(i)) {
					s = !0;
					for (a in i)
						st.access(t, e, a, i[a], !0, r, o)
				} else if (void 0 !== n && (s = !0, st.isFunction(n) || (o = !0), h && (o ? (e.call(t, n), e = null) : (h = e, e = function (t, e, i) {
								return h.call(st(t), i)
							})), e))
					for (; l > a; a++)
						e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
				return s ? t : h ? e.call(t) : l ? e(t[0], i) : r
			},
			At = /^(?:checkbox|radio)$/i;
			!function () {
				var t = pt.createElement("input"),
				e = pt.createElement("div"),
				i = pt.createDocumentFragment();
				if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", it.leadingWhitespace = 3 === e.firstChild.nodeType, it.tbody = !e.getElementsByTagName("tbody").length, it.htmlSerialize = !!e.getElementsByTagName("link").length, it.html5Clone = "<:nav></:nav>" !== pt.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), it.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", it.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, i.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", it.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, it.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
							it.noCloneEvent = !1
						}), e.cloneNode(!0).click()), null == it.deleteExpando) {
					it.deleteExpando = !0;
					try {
						delete e.test
					} catch (n) {
						it.deleteExpando = !1
					}
				}
			}
			(),
			function () {
				var e,
				i,
				n = pt.createElement("div");
				for (e in {
					submit : !0,
					change : !0,
					focusin : !0
				})
					i = "on" + e, (it[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), it[e + "Bubbles"] = n.attributes[i].expando === !1);
				n = null
			}
			();
			var Mt = /^(?:input|select|textarea)$/i,
			Nt = /^key/,
			Ot = /^(?:mouse|pointer|contextmenu)|click/,
			Pt = /^(?:focusinfocus|focusoutblur)$/,
			zt = /^([^.]*)(?:\.(.+)|)$/;
			st.event = {
				global : {},
				add : function (t, e, i, n, s) {
					var r,
					o,
					a,
					l,
					h,
					u,
					c,
					d,
					f,
					p,
					g,
					m = st._data(t);
					if (m) {
						for (i.handler && (l = i, i = l.handler, s = l.selector), i.guid || (i.guid = st.guid++), (o = m.events) || (o = m.events = {}), (u = m.handle) || (u = m.handle = function (t) {
								return typeof st === kt || t && st.event.triggered === t.type ? void 0 : st.event.dispatch.apply(u.elem, arguments)
							}, u.elem = t), e = (e || "").match(yt) || [""], a = e.length; a--; )
							r = zt.exec(e[a]) || [], f = g = r[1], p = (r[2] || "").split(".").sort(), f && (h = st.event.special[f] || {}, f = (s ? h.delegateType : h.bindType) || f, h = st.event.special[f] || {}, c = st.extend({
										type : f,
										origType : g,
										data : n,
										handler : i,
										guid : i.guid,
										selector : s,
										needsContext : s && st.expr.match.needsContext.test(s),
										namespace : p.join(".")
									}, l), (d = o[f]) || (d = o[f] = [], d.delegateCount = 0, h.setup && h.setup.call(t, n, p, u) !== !1 || (t.addEventListener ? t.addEventListener(f, u, !1) : t.attachEvent && t.attachEvent("on" + f, u))), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, c) : d.push(c), st.event.global[f] = !0);
						t = null
					}
				},
				remove : function (t, e, i, n, s) {
					var r,
					o,
					a,
					l,
					h,
					u,
					c,
					d,
					f,
					p,
					g,
					m = st.hasData(t) && st._data(t);
					if (m && (u = m.events)) {
						for (e = (e || "").match(yt) || [""], h = e.length; h--; )
							if (a = zt.exec(e[h]) || [], f = g = a[1], p = (a[2] || "").split(".").sort(), f) {
								for (c = st.event.special[f] || {}, f = (n ? c.delegateType : c.bindType) || f, d = u[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = d.length; r--; )
									o = d[r], !s && g !== o.origType || i && i.guid !== o.guid || a && !a.test(o.namespace) || n && n !== o.selector && ("**" !== n || !o.selector) || (d.splice(r, 1), o.selector && d.delegateCount--, c.remove && c.remove.call(t, o));
								l && !d.length && (c.teardown && c.teardown.call(t, p, m.handle) !== !1 || st.removeEvent(t, f, m.handle), delete u[f])
							} else
								for (f in u)
									st.event.remove(t, f + e[h], i, n, !0);
						st.isEmptyObject(u) && (delete m.handle, st._removeData(t, "events"))
					}
				},
				trigger : function (e, i, n, s) {
					var r,
					o,
					a,
					l,
					h,
					u,
					c,
					d = [n || pt],
					f = et.call(e, "type") ? e.type : e,
					p = et.call(e, "namespace") ? e.namespace.split(".") : [];
					if (a = u = n = n || pt, 3 !== n.nodeType && 8 !== n.nodeType && !Pt.test(f + st.event.triggered) && (f.indexOf(".") >= 0 && (p = f.split("."), f = p.shift(), p.sort()), o = f.indexOf(":") < 0 && "on" + f, e = e[st.expando] ? e : new st.Event(f, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : st.makeArray(i, [e]), h = st.event.special[f] || {}, s || !h.trigger || h.trigger.apply(n, i) !== !1)) {
						if (!s && !h.noBubble && !st.isWindow(n)) {
							for (l = h.delegateType || f, Pt.test(l + f) || (a = a.parentNode); a; a = a.parentNode)
								d.push(a), u = a;
							u === (n.ownerDocument || pt) && d.push(u.defaultView || u.parentWindow || t)
						}
						for (c = 0; (a = d[c++]) && !e.isPropagationStopped(); )
							e.type = c > 1 ? l : h.bindType || f, r = (st._data(a, "events") || {})[e.type] && st._data(a, "handle"), r && r.apply(a, i), r = o && a[o], r && r.apply && st.acceptData(a) && (e.result = r.apply(a, i), e.result === !1 && e.preventDefault());
						if (e.type = f, !s && !e.isDefaultPrevented() && (!h._default || h._default.apply(d.pop(), i) === !1) && st.acceptData(n) && o && n[f] && !st.isWindow(n)) {
							u = n[o],
							u && (n[o] = null),
							st.event.triggered = f;
							try {
								n[f]()
							} catch (g) {}

							st.event.triggered = void 0,
							u && (n[o] = u)
						}
						return e.result
					}
				},
				dispatch : function (t) {
					t = st.event.fix(t);
					var e,
					i,
					n,
					s,
					r,
					o = [],
					a = X.call(arguments),
					l = (st._data(this, "events") || {})[t.type] || [],
					h = st.event.special[t.type] || {};
					if (a[0] = t, t.delegateTarget = this, !h.preDispatch || h.preDispatch.call(this, t) !== !1) {
						for (o = st.event.handlers.call(this, t, l), e = 0; (s = o[e++]) && !t.isPropagationStopped(); )
							for (t.currentTarget = s.elem, r = 0; (n = s.handlers[r++]) && !t.isImmediatePropagationStopped(); )
								(!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, i = ((st.event.special[n.origType] || {}).handle || n.handler).apply(s.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
						return h.postDispatch && h.postDispatch.call(this, t),
						t.result
					}
				},
				handlers : function (t, e) {
					var i,
					n,
					s,
					r,
					o = [],
					a = e.delegateCount,
					l = t.target;
					if (a && l.nodeType && (!t.button || "click" !== t.type))
						for (; l != this; l = l.parentNode || this)
							if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
								for (s = [], r = 0; a > r; r++)
									n = e[r], i = n.selector + " ", void 0 === s[i] && (s[i] = n.needsContext ? st(i, this).index(l) >= 0 : st.find(i, this, null, [l]).length), s[i] && s.push(n);
								s.length && o.push({
									elem : l,
									handlers : s
								})
							}
					return a < e.length && o.push({
						elem : this,
						handlers : e.slice(a)
					}),
					o
				},
				fix : function (t) {
					if (t[st.expando])
						return t;
					var e,
					i,
					n,
					s = t.type,
					r = t,
					o = this.fixHooks[s];
					for (o || (this.fixHooks[s] = o = Ot.test(s) ? this.mouseHooks : Nt.test(s) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, t = new st.Event(r), e = n.length; e--; )
						i = n[e], t[i] = r[i];
					return t.target || (t.target = r.srcElement || pt),
					3 === t.target.nodeType && (t.target = t.target.parentNode),
					t.metaKey = !!t.metaKey,
					o.filter ? o.filter(t, r) : t
				},
				props : "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
				fixHooks : {},
				keyHooks : {
					props : "char charCode key keyCode".split(" "),
					filter : function (t, e) {
						return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode),
						t
					}
				},
				mouseHooks : {
					props : "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
					filter : function (t, e) {
						var i,
						n,
						s,
						r = e.button,
						o = e.fromElement;
						return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || pt, s = n.documentElement, i = n.body, t.pageX = e.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)),
						!t.relatedTarget && o && (t.relatedTarget = o === t.target ? e.toElement : o),
						t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
						t
					}
				},
				special : {
					load : {
						noBubble : !0
					},
					focus : {
						trigger : function () {
							if (this !== p() && this.focus)
								try {
									return this.focus(),
									!1
								} catch (t) {}

						},
						delegateType : "focusin"
					},
					blur : {
						trigger : function () {
							return this === p() && this.blur ? (this.blur(), !1) : void 0
						},
						delegateType : "focusout"
					},
					click : {
						trigger : function () {
							return st.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
						},
						_default : function (t) {
							return st.nodeName(t.target, "a")
						}
					},
					beforeunload : {
						postDispatch : function (t) {
							void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
						}
					}
				},
				simulate : function (t, e, i, n) {
					var s = st.extend(new st.Event, i, {
							type : t,
							isSimulated : !0,
							originalEvent : {}

						});
					n ? st.event.trigger(s, null, e) : st.event.dispatch.call(e, s),
					s.isDefaultPrevented() && i.preventDefault()
				}
			},
			st.removeEvent = pt.removeEventListener ? function (t, e, i) {
				t.removeEventListener && t.removeEventListener(e, i, !1)
			}
			 : function (t, e, i) {
				var n = "on" + e;
				t.detachEvent && (typeof t[n] === kt && (t[n] = null), t.detachEvent(n, i))
			},
			st.Event = function (t, e) {
				return this instanceof st.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? d : f) : this.type = t, e && st.extend(this, e), this.timeStamp = t && t.timeStamp || st.now(), void(this[st.expando] = !0)) : new st.Event(t, e)
			},
			st.Event.prototype = {
				isDefaultPrevented : f,
				isPropagationStopped : f,
				isImmediatePropagationStopped : f,
				preventDefault : function () {
					var t = this.originalEvent;
					this.isDefaultPrevented = d,
					t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
				},
				stopPropagation : function () {
					var t = this.originalEvent;
					this.isPropagationStopped = d,
					t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
				},
				stopImmediatePropagation : function () {
					var t = this.originalEvent;
					this.isImmediatePropagationStopped = d,
					t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
					this.stopPropagation()
				}
			},
			st.each({
				mouseenter : "mouseover",
				mouseleave : "mouseout",
				pointerenter : "pointerover",
				pointerleave : "pointerout"
			}, function (t, e) {
				st.event.special[t] = {
					delegateType : e,
					bindType : e,
					handle : function (t) {
						var i,
						n = this,
						s = t.relatedTarget,
						r = t.handleObj;
						return (!s || s !== n && !st.contains(n, s)) && (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e),
						i
					}
				}
			}),
			it.submitBubbles || (st.event.special.submit = {
					setup : function () {
						return st.nodeName(this, "form") ? !1 : void st.event.add(this, "click._submit keypress._submit", function (t) {
							var e = t.target,
							i = st.nodeName(e, "input") || st.nodeName(e, "button") ? e.form : void 0;
							i && !st._data(i, "submitBubbles") && (st.event.add(i, "submit._submit", function (t) {
									t._submit_bubble = !0
								}), st._data(i, "submitBubbles", !0))
						})
					},
					postDispatch : function (t) {
						t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && st.event.simulate("submit", this.parentNode, t, !0))
					},
					teardown : function () {
						return st.nodeName(this, "form") ? !1 : void st.event.remove(this, "._submit")
					}
				}),
			it.changeBubbles || (st.event.special.change = {
					setup : function () {
						return Mt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (st.event.add(this, "propertychange._change", function (t) {
									"checked" === t.originalEvent.propertyName && (this._just_changed = !0)
								}), st.event.add(this, "click._change", function (t) {
									this._just_changed && !t.isTrigger && (this._just_changed = !1),
									st.event.simulate("change", this, t, !0)
								})), !1) : void st.event.add(this, "beforeactivate._change", function (t) {
							var e = t.target;
							Mt.test(e.nodeName) && !st._data(e, "changeBubbles") && (st.event.add(e, "change._change", function (t) {
									!this.parentNode || t.isSimulated || t.isTrigger || st.event.simulate("change", this.parentNode, t, !0)
								}), st._data(e, "changeBubbles", !0))
						})
					},
					handle : function (t) {
						var e = t.target;
						return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
					},
					teardown : function () {
						return st.event.remove(this, "._change"),
						!Mt.test(this.nodeName)
					}
				}),
			it.focusinBubbles || st.each({
				focus : "focusin",
				blur : "focusout"
			}, function (t, e) {
				var i = function (t) {
					st.event.simulate(e, t.target, st.event.fix(t), !0)
				};
				st.event.special[e] = {
					setup : function () {
						var n = this.ownerDocument || this,
						s = st._data(n, e);
						s || n.addEventListener(t, i, !0),
						st._data(n, e, (s || 0) + 1)
					},
					teardown : function () {
						var n = this.ownerDocument || this,
						s = st._data(n, e) - 1;
						s ? st._data(n, e, s) : (n.removeEventListener(t, i, !0), st._removeData(n, e))
					}
				}
			}),
			st.fn.extend({
				on : function (t, e, i, n, s) {
					var r,
					o;
					if ("object" == typeof t) {
						"string" != typeof e && (i = i || e, e = void 0);
						for (r in t)
							this.on(r, e, i, t[r], s);
						return this
					}
					if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1)
						n = f;
					else if (!n)
						return this;
					return 1 === s && (o = n, n = function (t) {
						return st().off(t),
						o.apply(this, arguments)
					}, n.guid = o.guid || (o.guid = st.guid++)),
					this.each(function () {
						st.event.add(this, t, n, i, e)
					})
				},
				one : function (t, e, i, n) {
					return this.on(t, e, i, n, 1)
				},
				off : function (t, e, i) {
					var n,
					s;
					if (t && t.preventDefault && t.handleObj)
						return n = t.handleObj, st(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
					if ("object" == typeof t) {
						for (s in t)
							this.off(s, e, t[s]);
						return this
					}
					return (e === !1 || "function" == typeof e) && (i = e, e = void 0),
					i === !1 && (i = f),
					this.each(function () {
						st.event.remove(this, t, i, e)
					})
				},
				trigger : function (t, e) {
					return this.each(function () {
						st.event.trigger(t, e, this)
					})
				},
				triggerHandler : function (t, e) {
					var i = this[0];
					return i ? st.event.trigger(t, e, i, !0) : void 0
				}
			});
			var Rt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
			Ht = / jQuery\d+="(?:null|\d+)"/g,
			Lt = new RegExp("<(?:" + Rt + ")[\\s/>]", "i"),
			jt = /^\s+/,
			Bt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			Ft = /<([\w:]+)/,
			Wt = /<tbody/i,
			$t = /<|&#?\w+;/,
			Vt = /<(?:script|style|link)/i,
			qt = /checked\s*(?:[^=]|=\s*.checked.)/i,
			Ut = /^$|\/(?:java|ecma)script/i,
			Yt = /^true\/(.*)/,
			Kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
			Xt = {
				option : [1, "<select multiple='multiple'>", "</select>"],
				legend : [1, "<fieldset>", "</fieldset>"],
				area : [1, "<map>", "</map>"],
				param : [1, "<object>", "</object>"],
				thead : [1, "<table>", "</table>"],
				tr : [2, "<table><tbody>", "</tbody></table>"],
				col : [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
				td : [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default : it.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
			},
			Zt = g(pt),
			Gt = Zt.appendChild(pt.createElement("div"));
			Xt.optgroup = Xt.option,
			Xt.tbody = Xt.tfoot = Xt.colgroup = Xt.caption = Xt.thead,
			Xt.th = Xt.td,
			st.extend({
				clone : function (t, e, i) {
					var n,
					s,
					r,
					o,
					a,
					l = st.contains(t.ownerDocument, t);
					if (it.html5Clone || st.isXMLDoc(t) || !Lt.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (Gt.innerHTML = t.outerHTML, Gt.removeChild(r = Gt.firstChild)), !(it.noCloneEvent && it.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || st.isXMLDoc(t)))
						for (n = m(r), a = m(t), o = 0; null != (s = a[o]); ++o)
							n[o] && k(s, n[o]);
					if (e)
						if (i)
							for (a = a || m(t), n = n || m(r), o = 0; null != (s = a[o]); o++)
								x(s, n[o]);
						else
							x(t, r);
					return n = m(r, "script"),
					n.length > 0 && w(n, !l && m(t, "script")),
					n = a = s = null,
					r
				},
				buildFragment : function (t, e, i, n) {
					for (var s, r, o, a, l, h, u, c = t.length, d = g(e), f = [], p = 0; c > p; p++)
						if (r = t[p], r || 0 === r)
							if ("object" === st.type(r))
								st.merge(f, r.nodeType ? [r] : r);
							else if ($t.test(r)) {
								for (a = a || d.appendChild(e.createElement("div")), l = (Ft.exec(r) || ["", ""])[1].toLowerCase(), u = Xt[l] || Xt._default, a.innerHTML = u[1] + r.replace(Bt, "<$1></$2>") + u[2], s = u[0]; s--; )
									a = a.lastChild;
								if (!it.leadingWhitespace && jt.test(r) && f.push(e.createTextNode(jt.exec(r)[0])), !it.tbody)
									for (r = "table" !== l || Wt.test(r) ? "<table>" !== u[1] || Wt.test(r) ? 0 : a : a.firstChild, s = r && r.childNodes.length; s--; )
										st.nodeName(h = r.childNodes[s], "tbody") && !h.childNodes.length && r.removeChild(h);
								for (st.merge(f, a.childNodes), a.textContent = ""; a.firstChild; )
									a.removeChild(a.firstChild);
								a = d.lastChild
							} else
								f.push(e.createTextNode(r));
					for (a && d.removeChild(a), it.appendChecked || st.grep(m(f, "input"), v), p = 0; r = f[p++]; )
						if ((!n || -1 === st.inArray(r, n)) && (o = st.contains(r.ownerDocument, r), a = m(d.appendChild(r), "script"), o && w(a), i))
							for (s = 0; r = a[s++]; )
								Ut.test(r.type || "") && i.push(r);
					return a = null,
					d
				},
				cleanData : function (t, e) {
					for (var i, n, s, r, o = 0, a = st.expando, l = st.cache, h = it.deleteExpando, u = st.event.special; null != (i = t[o]); o++)
						if ((e || st.acceptData(i)) && (s = i[a], r = s && l[s])) {
							if (r.events)
								for (n in r.events)
									u[n] ? st.event.remove(i, n) : st.removeEvent(i, n, r.handle);
							l[s] && (delete l[s], h ? delete i[a] : typeof i.removeAttribute !== kt ? i.removeAttribute(a) : i[a] = null, K.push(s))
						}
				}
			}),
			st.fn.extend({
				text : function (t) {
					return Dt(this, function (t) {
						return void 0 === t ? st.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pt).createTextNode(t))
					}, null, t, arguments.length)
				},
				append : function () {
					return this.domManip(arguments, function (t) {
						if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
							var e = b(this, t);
							e.appendChild(t)
						}
					})
				},
				prepend : function () {
					return this.domManip(arguments, function (t) {
						if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
							var e = b(this, t);
							e.insertBefore(t, e.firstChild)
						}
					})
				},
				before : function () {
					return this.domManip(arguments, function (t) {
						this.parentNode && this.parentNode.insertBefore(t, this)
					})
				},
				after : function () {
					return this.domManip(arguments, function (t) {
						this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
					})
				},
				remove : function (t, e) {
					for (var i, n = t ? st.filter(t, this) : this, s = 0; null != (i = n[s]); s++)
						e || 1 !== i.nodeType || st.cleanData(m(i)), i.parentNode && (e && st.contains(i.ownerDocument, i) && w(m(i, "script")), i.parentNode.removeChild(i));
					return this
				},
				empty : function () {
					for (var t, e = 0; null != (t = this[e]); e++) {
						for (1 === t.nodeType && st.cleanData(m(t, !1)); t.firstChild; )
							t.removeChild(t.firstChild);
						t.options && st.nodeName(t, "select") && (t.options.length = 0)
					}
					return this
				},
				clone : function (t, e) {
					return t = null == t ? !1 : t,
					e = null == e ? t : e,
					this.map(function () {
						return st.clone(this, t, e)
					})
				},
				html : function (t) {
					return Dt(this, function (t) {
						var e = this[0] || {},
						i = 0,
						n = this.length;
						if (void 0 === t)
							return 1 === e.nodeType ? e.innerHTML.replace(Ht, "") : void 0;
						if (!("string" != typeof t || Vt.test(t) || !it.htmlSerialize && Lt.test(t) || !it.leadingWhitespace && jt.test(t) || Xt[(Ft.exec(t) || ["", ""])[1].toLowerCase()])) {
							t = t.replace(Bt, "<$1></$2>");
							try {
								for (; n > i; i++)
									e = this[i] || {},
								1 === e.nodeType && (st.cleanData(m(e, !1)), e.innerHTML = t);
								e = 0
							} catch (s) {}

						}
						e && this.empty().append(t)
					}, null, t, arguments.length)
				},
				replaceWith : function () {
					var t = arguments[0];
					return this.domManip(arguments, function (e) {
						t = this.parentNode,
						st.cleanData(m(this)),
						t && t.replaceChild(e, this)
					}),
					t && (t.length || t.nodeType) ? this : this.remove()
				},
				detach : function (t) {
					return this.remove(t, !0)
				},
				domManip : function (t, e) {
					t = Z.apply([], t);
					var i,
					n,
					s,
					r,
					o,
					a,
					l = 0,
					h = this.length,
					u = this,
					c = h - 1,
					d = t[0],
					f = st.isFunction(d);
					if (f || h > 1 && "string" == typeof d && !it.checkClone && qt.test(d))
						return this.each(function (i) {
							var n = u.eq(i);
							f && (t[0] = d.call(this, i, n.html())),
							n.domManip(t, e)
						});
					if (h && (a = st.buildFragment(t, this[0].ownerDocument, !1, this), i = a.firstChild, 1 === a.childNodes.length && (a = i), i)) {
						for (r = st.map(m(a, "script"), y), s = r.length; h > l; l++)
							n = a, l !== c && (n = st.clone(n, !0, !0), s && st.merge(r, m(n, "script"))), e.call(this[l], n, l);
						if (s)
							for (o = r[r.length - 1].ownerDocument, st.map(r, _), l = 0; s > l; l++)
								n = r[l], Ut.test(n.type || "") && !st._data(n, "globalEval") && st.contains(o, n) && (n.src ? st._evalUrl && st._evalUrl(n.src) : st.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Kt, "")));
						a = i = null
					}
					return this
				}
			}),
			st.each({
				appendTo : "append",
				prependTo : "prepend",
				insertBefore : "before",
				insertAfter : "after",
				replaceAll : "replaceWith"
			}, function (t, e) {
				st.fn[t] = function (t) {
					for (var i, n = 0, s = [], r = st(t), o = r.length - 1; o >= n; n++)
						i = n === o ? this : this.clone(!0), st(r[n])[e](i), G.apply(s, i.get());
					return this.pushStack(s)
				}
			});
			var Jt,
			Qt = {};
			!function () {
				var t;
				it.shrinkWrapBlocks = function () {
					if (null != t)
						return t;
					t = !1;
					var e,
					i,
					n;
					return i = pt.getElementsByTagName("body")[0],
					i && i.style ? (e = pt.createElement("div"), n = pt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== kt && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(pt.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0
				}
			}
			();
			var te,
			ee,
			ie = /^margin/,
			ne = new RegExp("^(" + Tt + ")(?!px)[a-z%]+$", "i"),
			se = /^(top|right|bottom|left)$/;
			t.getComputedStyle ? (te = function (e) {
				return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
			}, ee = function (t, e, i) {
				var n,
				s,
				r,
				o,
				a = t.style;
				return i = i || te(t),
				o = i ? i.getPropertyValue(e) || i[e] : void 0,
				i && ("" !== o || st.contains(t.ownerDocument, t) || (o = st.style(t, e)), ne.test(o) && ie.test(e) && (n = a.width, s = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = s, a.maxWidth = r)),
				void 0 === o ? o : o + ""
			}) : pt.documentElement.currentStyle && (te = function (t) {
				return t.currentStyle
			}, ee = function (t, e, i) {
				var n,
				s,
				r,
				o,
				a = t.style;
				return i = i || te(t),
				o = i ? i[e] : void 0,
				null == o && a && a[e] && (o = a[e]),
				ne.test(o) && !se.test(e) && (n = a.left, s = t.runtimeStyle, r = s && s.left, r && (s.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : o, o = a.pixelLeft + "px", a.left = n, r && (s.left = r)),
				void 0 === o ? o : o + "" || "auto"
			}),
			!function () {
				function e() {
					var e,
					i,
					n,
					s;
					i = pt.getElementsByTagName("body")[0],
					i && i.style && (e = pt.createElement("div"), n = pt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = o = !1, l = !0, t.getComputedStyle && (r = "1%" !== (t.getComputedStyle(e, null) || {}).top, o = "4px" === (t.getComputedStyle(e, null) || {
									width : "4px"
								}).width, s = e.appendChild(pt.createElement("div")), s.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", s.style.marginRight = s.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(s, null) || {}).marginRight), e.removeChild(s)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = e.getElementsByTagName("td"), s[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === s[0].offsetHeight, a && (s[0].style.display = "", s[1].style.display = "none", a = 0 === s[0].offsetHeight), i.removeChild(n))
				}
				var i,
				n,
				s,
				r,
				o,
				a,
				l;
				i = pt.createElement("div"),
				i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
				s = i.getElementsByTagName("a")[0],
				(n = s && s.style) && (n.cssText = "float:left;opacity:.5", it.opacity = "0.5" === n.opacity, it.cssFloat = !!n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", it.clearCloneStyle = "content-box" === i.style.backgroundClip, it.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, st.extend(it, {
						reliableHiddenOffsets : function () {
							return null == a && e(),
							a
						},
						boxSizingReliable : function () {
							return null == o && e(),
							o
						},
						pixelPosition : function () {
							return null == r && e(),
							r
						},
						reliableMarginRight : function () {
							return null == l && e(),
							l
						}
					}))
			}
			(),
			st.swap = function (t, e, i, n) {
				var s,
				r,
				o = {};
				for (r in e)
					o[r] = t.style[r], t.style[r] = e[r];
				s = i.apply(t, n || []);
				for (r in e)
					t.style[r] = o[r];
				return s
			};
			var re = /alpha\([^)]*\)/i,
			oe = /opacity\s*=\s*([^)]*)/,
			ae = /^(none|table(?!-c[ea]).+)/,
			le = new RegExp("^(" + Tt + ")(.*)$", "i"),
			he = new RegExp("^([+-])=(" + Tt + ")", "i"),
			ue = {
				position : "absolute",
				visibility : "hidden",
				display : "block"
			},
			ce = {
				letterSpacing : "0",
				fontWeight : "400"
			},
			de = ["Webkit", "O", "Moz", "ms"];
			st.extend({
				cssHooks : {
					opacity : {
						get : function (t, e) {
							if (e) {
								var i = ee(t, "opacity");
								return "" === i ? "1" : i
							}
						}
					}
				},
				cssNumber : {
					columnCount : !0,
					fillOpacity : !0,
					flexGrow : !0,
					flexShrink : !0,
					fontWeight : !0,
					lineHeight : !0,
					opacity : !0,
					order : !0,
					orphans : !0,
					widows : !0,
					zIndex : !0,
					zoom : !0
				},
				cssProps : {
					"float" : it.cssFloat ? "cssFloat" : "styleFloat"
				},
				style : function (t, e, i, n) {
					if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
						var s,
						r,
						o,
						a = st.camelCase(e),
						l = t.style;
						if (e = st.cssProps[a] || (st.cssProps[a] = S(l, a)), o = st.cssHooks[e] || st.cssHooks[a], void 0 === i)
							return o && "get" in o && void 0 !== (s = o.get(t, !1, n)) ? s : l[e];
						if (r = typeof i, "string" === r && (s = he.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(st.css(t, e)), r = "number"), null != i && i === i && ("number" !== r || st.cssNumber[a] || (i += "px"), it.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(o && "set" in o && void 0 === (i = o.set(t, i, n)))))
							try {
								l[e] = i
							} catch (h) {}

					}
				},
				css : function (t, e, i, n) {
					var s,
					r,
					o,
					a = st.camelCase(e);
					return e = st.cssProps[a] || (st.cssProps[a] = S(t.style, a)),
					o = st.cssHooks[e] || st.cssHooks[a],
					o && "get" in o && (r = o.get(t, !0, i)),
					void 0 === r && (r = ee(t, e, n)),
					"normal" === r && e in ce && (r = ce[e]),
					"" === i || i ? (s = parseFloat(r), i === !0 || st.isNumeric(s) ? s || 0 : r) : r
				}
			}),
			st.each(["height", "width"], function (t, e) {
				st.cssHooks[e] = {
					get : function (t, i, n) {
						return i ? ae.test(st.css(t, "display")) && 0 === t.offsetWidth ? st.swap(t, ue, function () {
							return M(t, e, n)
						}) : M(t, e, n) : void 0
					},
					set : function (t, i, n) {
						var s = n && te(t);
						return D(t, i, n ? A(t, e, n, it.boxSizing && "border-box" === st.css(t, "boxSizing", !1, s), s) : 0)
					}
				}
			}),
			it.opacity || (st.cssHooks.opacity = {
					get : function (t, e) {
						return oe.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
					},
					set : function (t, e) {
						var i = t.style,
						n = t.currentStyle,
						s = st.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
						r = n && n.filter || i.filter || "";
						i.zoom = 1,
						(e >= 1 || "" === e) && "" === st.trim(r.replace(re, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = re.test(r) ? r.replace(re, s) : r + " " + s)
					}
				}),
			st.cssHooks.marginRight = T(it.reliableMarginRight, function (t, e) {
					return e ? st.swap(t, {
						display : "inline-block"
					}, ee, [t, "marginRight"]) : void 0
				}),
			st.each({
				margin : "",
				padding : "",
				border : "Width"
			}, function (t, e) {
				st.cssHooks[t + e] = {
					expand : function (i) {
						for (var n = 0, s = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++)
							s[t + St[n] + e] = r[n] || r[n - 2] || r[0];
						return s
					}
				},
				ie.test(t) || (st.cssHooks[t + e].set = D)
			}),
			st.fn.extend({
				css : function (t, e) {
					return Dt(this, function (t, e, i) {
						var n,
						s,
						r = {},
						o = 0;
						if (st.isArray(e)) {
							for (n = te(t), s = e.length; s > o; o++)
								r[e[o]] = st.css(t, e[o], !1, n);
							return r
						}
						return void 0 !== i ? st.style(t, e, i) : st.css(t, e)
					}, t, e, arguments.length > 1)
				},
				show : function () {
					return I(this, !0)
				},
				hide : function () {
					return I(this)
				},
				toggle : function (t) {
					return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
						It(this) ? st(this).show() : st(this).hide()
					})
				}
			}),
			st.Tween = N,
			N.prototype = {
				constructor : N,
				init : function (t, e, i, n, s, r) {
					this.elem = t,
					this.prop = i,
					this.easing = s || "swing",
					this.options = e,
					this.start = this.now = this.cur(),
					this.end = n,
					this.unit = r || (st.cssNumber[i] ? "" : "px")
				},
				cur : function () {
					var t = N.propHooks[this.prop];
					return t && t.get ? t.get(this) : N.propHooks._default.get(this)
				},
				run : function (t) {
					var e,
					i = N.propHooks[this.prop];
					return this.pos = e = this.options.duration ? st.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t,
					this.now = (this.end - this.start) * e + this.start,
					this.options.step && this.options.step.call(this.elem, this.now, this),
					i && i.set ? i.set(this) : N.propHooks._default.set(this),
					this
				}
			},
			N.prototype.init.prototype = N.prototype,
			N.propHooks = {
				_default : {
					get : function (t) {
						var e;
						return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = st.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
					},
					set : function (t) {
						st.fx.step[t.prop] ? st.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[st.cssProps[t.prop]] || st.cssHooks[t.prop]) ? st.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
					}
				}
			},
			N.propHooks.scrollTop = N.propHooks.scrollLeft = {
				set : function (t) {
					t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
				}
			},
			st.easing = {
				linear : function (t) {
					return t
				},
				swing : function (t) {
					return .5 - Math.cos(t * Math.PI) / 2
				}
			},
			st.fx = N.prototype.init,
			st.fx.step = {};
			var fe,
			pe,
			ge = /^(?:toggle|show|hide)$/,
			me = new RegExp("^(?:([+-])=|)(" + Tt + ")([a-z%]*)$", "i"),
			ve = /queueHooks$/,
			be = [R],
			ye = {
				"*" : [function (t, e) {
						var i = this.createTween(t, e),
						n = i.cur(),
						s = me.exec(e),
						r = s && s[3] || (st.cssNumber[t] ? "" : "px"),
						o = (st.cssNumber[t] || "px" !== r && +n) && me.exec(st.css(i.elem, t)),
						a = 1,
						l = 20;
						if (o && o[3] !== r) {
							r = r || o[3],
							s = s || [],
							o = +n || 1;
							do
								a = a || ".5", o /= a, st.style(i.elem, t, o + r);
							while (a !== (a = i.cur() / n) && 1 !== a && --l)
						}
						return s && (o = i.start = +o || +n || 0, i.unit = r, i.end = s[1] ? o + (s[1] + 1) * s[2] : +s[2]),
						i
					}
				]
			};
			st.Animation = st.extend(L, {
					tweener : function (t, e) {
						st.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
						for (var i, n = 0, s = t.length; s > n; n++)
							i = t[n], ye[i] = ye[i] || [], ye[i].unshift(e)
					},
					prefilter : function (t, e) {
						e ? be.unshift(t) : be.push(t)
					}
				}),
			st.speed = function (t, e, i) {
				var n = t && "object" == typeof t ? st.extend({}, t) : {
					complete : i || !i && e || st.isFunction(t) && t,
					duration : t,
					easing : i && e || e && !st.isFunction(e) && e
				};
				return n.duration = st.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in st.fx.speeds ? st.fx.speeds[n.duration] : st.fx.speeds._default,
				(null == n.queue || n.queue === !0) && (n.queue = "fx"),
				n.old = n.complete,
				n.complete = function () {
					st.isFunction(n.old) && n.old.call(this),
					n.queue && st.dequeue(this, n.queue)
				},
				n
			},
			st.fn.extend({
				fadeTo : function (t, e, i, n) {
					return this.filter(It).css("opacity", 0).show().end().animate({
						opacity : e
					}, t, i, n)
				},
				animate : function (t, e, i, n) {
					var s = st.isEmptyObject(t),
					r = st.speed(e, i, n),
					o = function () {
						var e = L(this, st.extend({}, t), r);
						(s || st._data(this, "finish")) && e.stop(!0)
					};
					return o.finish = o,
					s || r.queue === !1 ? this.each(o) : this.queue(r.queue, o)
				},
				stop : function (t, e, i) {
					var n = function (t) {
						var e = t.stop;
						delete t.stop,
						e(i)
					};
					return "string" != typeof t && (i = e, e = t, t = void 0),
					e && t !== !1 && this.queue(t || "fx", []),
					this.each(function () {
						var e = !0,
						s = null != t && t + "queueHooks",
						r = st.timers,
						o = st._data(this);
						if (s)
							o[s] && o[s].stop && n(o[s]);
						else
							for (s in o)
								o[s] && o[s].stop && ve.test(s) && n(o[s]);
						for (s = r.length; s--; )
							r[s].elem !== this || null != t && r[s].queue !== t || (r[s].anim.stop(i), e = !1, r.splice(s, 1));
						(e || !i) && st.dequeue(this, t)
					})
				},
				finish : function (t) {
					return t !== !1 && (t = t || "fx"),
					this.each(function () {
						var e,
						i = st._data(this),
						n = i[t + "queue"],
						s = i[t + "queueHooks"],
						r = st.timers,
						o = n ? n.length : 0;
						for (i.finish = !0, st.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = r.length; e--; )
							r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
						for (e = 0; o > e; e++)
							n[e] && n[e].finish && n[e].finish.call(this);
						delete i.finish
					})
				}
			}),
			st.each(["toggle", "show", "hide"], function (t, e) {
				var i = st.fn[e];
				st.fn[e] = function (t, n, s) {
					return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(P(e, !0), t, n, s)
				}
			}),
			st.each({
				slideDown : P("show"),
				slideUp : P("hide"),
				slideToggle : P("toggle"),
				fadeIn : {
					opacity : "show"
				},
				fadeOut : {
					opacity : "hide"
				},
				fadeToggle : {
					opacity : "toggle"
				}
			}, function (t, e) {
				st.fn[t] = function (t, i, n) {
					return this.animate(e, t, i, n)
				}
			}),
			st.timers = [],
			st.fx.tick = function () {
				var t,
				e = st.timers,
				i = 0;
				for (fe = st.now(); i < e.length; i++)
					t = e[i], t() || e[i] !== t || e.splice(i--, 1);
				e.length || st.fx.stop(),
				fe = void 0
			},
			st.fx.timer = function (t) {
				st.timers.push(t),
				t() ? st.fx.start() : st.timers.pop()
			},
			st.fx.interval = 13,
			st.fx.start = function () {
				pe || (pe = setInterval(st.fx.tick, st.fx.interval))
			},
			st.fx.stop = function () {
				clearInterval(pe),
				pe = null
			},
			st.fx.speeds = {
				slow : 600,
				fast : 200,
				_default : 400
			},
			st.fn.delay = function (t, e) {
				return t = st.fx ? st.fx.speeds[t] || t : t,
				e = e || "fx",
				this.queue(e, function (e, i) {
					var n = setTimeout(e, t);
					i.stop = function () {
						clearTimeout(n)
					}
				})
			},
			function () {
				var t,
				e,
				i,
				n,
				s;
				e = pt.createElement("div"),
				e.setAttribute("className", "t"),
				e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
				n = e.getElementsByTagName("a")[0],
				i = pt.createElement("select"),
				s = i.appendChild(pt.createElement("option")),
				t = e.getElementsByTagName("input")[0],
				n.style.cssText = "top:1px",
				it.getSetAttribute = "t" !== e.className,
				it.style = /top/.test(n.getAttribute("style")),
				it.hrefNormalized = "/a" === n.getAttribute("href"),
				it.checkOn = !!t.value,
				it.optSelected = s.selected,
				it.enctype = !!pt.createElement("form").enctype,
				i.disabled = !0,
				it.optDisabled = !s.disabled,
				t = pt.createElement("input"),
				t.setAttribute("value", ""),
				it.input = "" === t.getAttribute("value"),
				t.value = "t",
				t.setAttribute("type", "radio"),
				it.radioValue = "t" === t.value
			}
			();
			var _e = /\r/g;
			st.fn.extend({
				val : function (t) {
					var e,
					i,
					n,
					s = this[0];
					return arguments.length ? (n = st.isFunction(t), this.each(function (i) {
							var s;
							1 === this.nodeType && (s = n ? t.call(this, i, st(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : st.isArray(s) && (s = st.map(s, function (t) {
												return null == t ? "" : t + ""
											})), e = st.valHooks[this.type] || st.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
						})) : s ? (e = st.valHooks[s.type] || st.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, "string" == typeof i ? i.replace(_e, "") : null == i ? "" : i)) : void 0
				}
			}),
			st.extend({
				valHooks : {
					option : {
						get : function (t) {
							var e = st.find.attr(t, "value");
							return null != e ? e : st.trim(st.text(t))
						}
					},
					select : {
						get : function (t) {
							for (var e, i, n = t.options, s = t.selectedIndex, r = "select-one" === t.type || 0 > s, o = r ? null : [], a = r ? s + 1 : n.length, l = 0 > s ? a : r ? s : 0; a > l; l++)
								if (i = n[l], !(!i.selected && l !== s || (it.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && st.nodeName(i.parentNode, "optgroup"))) {
									if (e = st(i).val(), r)
										return e;
									o.push(e)
								}
							return o
						},
						set : function (t, e) {
							for (var i, n, s = t.options, r = st.makeArray(e), o = s.length; o--; )
								if (n = s[o], st.inArray(st.valHooks.option.get(n), r) >= 0)
									try {
										n.selected = i = !0
									} catch (a) {
										n.scrollHeight
									}
								else
									n.selected = !1;
							return i || (t.selectedIndex = -1),
							s
						}
					}
				}
			}),
			st.each(["radio", "checkbox"], function () {
				st.valHooks[this] = {
					set : function (t, e) {
						return st.isArray(e) ? t.checked = st.inArray(st(t).val(), e) >= 0 : void 0
					}
				},
				it.checkOn || (st.valHooks[this].get = function (t) {
					return null === t.getAttribute("value") ? "on" : t.value
				})
			});
			var we,
			xe,
			ke = st.expr.attrHandle,
			Ce = /^(?:checked|selected)$/i,
			Ee = it.getSetAttribute,
			Te = it.input;
			st.fn.extend({
				attr : function (t, e) {
					return Dt(this, st.attr, t, e, arguments.length > 1)
				},
				removeAttr : function (t) {
					return this.each(function () {
						st.removeAttr(this, t)
					})
				}
			}),
			st.extend({
				attr : function (t, e, i) {
					var n,
					s,
					r = t.nodeType;
					return t && 3 !== r && 8 !== r && 2 !== r ? typeof t.getAttribute === kt ? st.prop(t, e, i) : (1 === r && st.isXMLDoc(t) || (e = e.toLowerCase(), n = st.attrHooks[e] || (st.expr.match.bool.test(e) ? xe : we)), void 0 === i ? n && "get" in n && null !== (s = n.get(t, e)) ? s : (s = st.find.attr(t, e), null == s ? void 0 : s) : null !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : (t.setAttribute(e, i + ""), i) : void st.removeAttr(t, e)) : void 0
				},
				removeAttr : function (t, e) {
					var i,
					n,
					s = 0,
					r = e && e.match(yt);
					if (r && 1 === t.nodeType)
						for (; i = r[s++]; )
							n = st.propFix[i] || i, st.expr.match.bool.test(i) ? Te && Ee || !Ce.test(i) ? t[n] = !1 : t[st.camelCase("default-" + i)] = t[n] = !1 : st.attr(t, i, ""), t.removeAttribute(Ee ? i : n)
				},
				attrHooks : {
					type : {
						set : function (t, e) {
							if (!it.radioValue && "radio" === e && st.nodeName(t, "input")) {
								var i = t.value;
								return t.setAttribute("type", e),
								i && (t.value = i),
								e
							}
						}
					}
				}
			}),
			xe = {
				set : function (t, e, i) {
					return e === !1 ? st.removeAttr(t, i) : Te && Ee || !Ce.test(i) ? t.setAttribute(!Ee && st.propFix[i] || i, i) : t[st.camelCase("default-" + i)] = t[i] = !0,
					i
				}
			},
			st.each(st.expr.match.bool.source.match(/\w+/g), function (t, e) {
				var i = ke[e] || st.find.attr;
				ke[e] = Te && Ee || !Ce.test(e) ? function (t, e, n) {
					var s,
					r;
					return n || (r = ke[e], ke[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, ke[e] = r),
					s
				}
				 : function (t, e, i) {
					return i ? void 0 : t[st.camelCase("default-" + e)] ? e.toLowerCase() : null
				}
			}),
			Te && Ee || (st.attrHooks.value = {
					set : function (t, e, i) {
						return st.nodeName(t, "input") ? void(t.defaultValue = e) : we && we.set(t, e, i)
					}
				}),
			Ee || (we = {
					set : function (t, e, i) {
						var n = t.getAttributeNode(i);
						return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)),
						n.value = e += "",
						"value" === i || e === t.getAttribute(i) ? e : void 0
					}
				}, ke.id = ke.name = ke.coords = function (t, e, i) {
				var n;
				return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
			}, st.valHooks.button = {
					get : function (t, e) {
						var i = t.getAttributeNode(e);
						return i && i.specified ? i.value : void 0
					},
					set : we.set
				}, st.attrHooks.contenteditable = {
					set : function (t, e, i) {
						we.set(t, "" === e ? !1 : e, i)
					}
				}, st.each(["width", "height"], function (t, e) {
					st.attrHooks[e] = {
						set : function (t, i) {
							return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
						}
					}
				})),
			it.style || (st.attrHooks.style = {
					get : function (t) {
						return t.style.cssText || void 0
					},
					set : function (t, e) {
						return t.style.cssText = e + ""
					}
				});
			var Se = /^(?:input|select|textarea|button|object)$/i,
			Ie = /^(?:a|area)$/i;
			st.fn.extend({
				prop : function (t, e) {
					return Dt(this, st.prop, t, e, arguments.length > 1)
				},
				removeProp : function (t) {
					return t = st.propFix[t] || t,
					this.each(function () {
						try {
							this[t] = void 0,
							delete this[t]
						} catch (e) {}

					})
				}
			}),
			st.extend({
				propFix : {
					"for" : "htmlFor",
					"class" : "className"
				},
				prop : function (t, e, i) {
					var n,
					s,
					r,
					o = t.nodeType;
					return t && 3 !== o && 8 !== o && 2 !== o ? (r = 1 !== o || !st.isXMLDoc(t), r && (e = st.propFix[e] || e, s = st.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]) : void 0
				},
				propHooks : {
					tabIndex : {
						get : function (t) {
							var e = st.find.attr(t, "tabindex");
							return e ? parseInt(e, 10) : Se.test(t.nodeName) || Ie.test(t.nodeName) && t.href ? 0 : -1
						}
					}
				}
			}),
			it.hrefNormalized || st.each(["href", "src"], function (t, e) {
				st.propHooks[e] = {
					get : function (t) {
						return t.getAttribute(e, 4)
					}
				}
			}),
			it.optSelected || (st.propHooks.selected = {
					get : function (t) {
						var e = t.parentNode;
						return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
						null
					}
				}),
			st.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
				st.propFix[this.toLowerCase()] = this
			}),
			it.enctype || (st.propFix.enctype = "encoding");
			var De = /[\t\r\n\f]/g;
			st.fn.extend({
				addClass : function (t) {
					var e,
					i,
					n,
					s,
					r,
					o,
					a = 0,
					l = this.length,
					h = "string" == typeof t && t;
					if (st.isFunction(t))
						return this.each(function (e) {
							st(this).addClass(t.call(this, e, this.className))
						});
					if (h)
						for (e = (t || "").match(yt) || []; l > a; a++)
							if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(De, " ") : " ")) {
								for (r = 0; s = e[r++]; )
									n.indexOf(" " + s + " ") < 0 && (n += s + " ");
								o = st.trim(n),
								i.className !== o && (i.className = o)
							}
					return this
				},
				removeClass : function (t) {
					var e,
					i,
					n,
					s,
					r,
					o,
					a = 0,
					l = this.length,
					h = 0 === arguments.length || "string" == typeof t && t;
					if (st.isFunction(t))
						return this.each(function (e) {
							st(this).removeClass(t.call(this, e, this.className))
						});
					if (h)
						for (e = (t || "").match(yt) || []; l > a; a++)
							if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(De, " ") : "")) {
								for (r = 0; s = e[r++]; )
									for (; n.indexOf(" " + s + " ") >= 0; )
										n = n.replace(" " + s + " ", " ");
								o = t ? st.trim(n) : "",
								i.className !== o && (i.className = o)
							}
					return this
				},
				toggleClass : function (t, e) {
					var i = typeof t;
					return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(st.isFunction(t) ? function (i) {
						st(this).toggleClass(t.call(this, i, this.className, e), e)
					}
						 : function () {
						if ("string" === i)
							for (var e, n = 0, s = st(this), r = t.match(yt) || []; e = r[n++]; )
								s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
						else (i === kt || "boolean" === i) && (this.className && st._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : st._data(this, "__className__") || "")
					})
				},
				hasClass : function (t) {
					for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
						if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(De, " ").indexOf(e) >= 0)
							return !0;
					return !1
				}
			}),
			st.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
				st.fn[e] = function (t, i) {
					return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
				}
			}),
			st.fn.extend({
				hover : function (t, e) {
					return this.mouseenter(t).mouseleave(e || t)
				},
				bind : function (t, e, i) {
					return this.on(t, null, e, i)
				},
				unbind : function (t, e) {
					return this.off(t, null, e)
				},
				delegate : function (t, e, i, n) {
					return this.on(e, t, i, n)
				},
				undelegate : function (t, e, i) {
					return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
				}
			});
			var Ae = st.now(),
			Me = /\?/,
			Ne = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
			st.parseJSON = function (e) {
				if (t.JSON && t.JSON.parse)
					return t.JSON.parse(e + "");
				var i,
				n = null,
				s = st.trim(e + "");
				return s && !st.trim(s.replace(Ne, function (t, e, s, r) {
						return i && e && (n = 0),
						0 === n ? t : (i = s || e, n += !r - !s, "")
					})) ? Function("return " + s)() : st.error("Invalid JSON: " + e)
			},
			st.parseXML = function (e) {
				var i,
				n;
				if (!e || "string" != typeof e)
					return null;
				try {
					t.DOMParser ? (n = new DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
				} catch (s) {
					i = void 0
				}
				return i && i.documentElement && !i.getElementsByTagName("parsererror").length || st.error("Invalid XML: " + e),
				i
			};
			var Oe,
			Pe,
			ze = /#.*$/,
			Re = /([?&])_=[^&]*/,
			He = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
			Le = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			je = /^(?:GET|HEAD)$/,
			Be = /^\/\//,
			Fe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
			We = {},
			$e = {},
			Ve = "*/".concat("*");
			try {
				Pe = location.href
			} catch (qe) {
				Pe = pt.createElement("a"),
				Pe.href = "",
				Pe = Pe.href
			}
			Oe = Fe.exec(Pe.toLowerCase()) || [],
			st.extend({
				active : 0,
				lastModified : {},
				etag : {},
				ajaxSettings : {
					url : Pe,
					type : "GET",
					isLocal : Le.test(Oe[1]),
					global : !0,
					processData : !0,
					async : !0,
					contentType : "application/x-www-form-urlencoded; charset=UTF-8",
					accepts : {
						"*" : Ve,
						text : "text/plain",
						html : "text/html",
						xml : "application/xml, text/xml",
						json : "application/json, text/javascript"
					},
					contents : {
						xml : /xml/,
						html : /html/,
						json : /json/
					},
					responseFields : {
						xml : "responseXML",
						text : "responseText",
						json : "responseJSON"
					},
					converters : {
						"* text" : String,
						"text html" : !0,
						"text json" : st.parseJSON,
						"text xml" : st.parseXML
					},
					flatOptions : {
						url : !0,
						context : !0
					}
				},
				ajaxSetup : function (t, e) {
					return e ? F(F(t, st.ajaxSettings), e) : F(st.ajaxSettings, t)
				},
				ajaxPrefilter : j(We),
				ajaxTransport : j($e),
				ajax : function (t, e) {
					function i(t, e, i, n) {
						var s,
						u,
						v,
						b,
						_,
						x = e;
						2 !== y && (y = 2, a && clearTimeout(a), h = void 0, o = n || "", w.readyState = t > 0 ? 4 : 0, s = t >= 200 && 300 > t || 304 === t, i && (b = W(c, w, i)), b = $(c, b, w, s), s ? (c.ifModified && (_ = w.getResponseHeader("Last-Modified"), _ && (st.lastModified[r] = _), _ = w.getResponseHeader("etag"), _ && (st.etag[r] = _)), 204 === t || "HEAD" === c.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = b.state, u = b.data, v = b.error, s = !v)) : (v = x, (t || !x) && (x = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || x) + "", s ? p.resolveWith(d, [u, x, w]) : p.rejectWith(d, [w, x, v]), w.statusCode(m), m = void 0, l && f.trigger(s ? "ajaxSuccess" : "ajaxError", [w, c, s ? u : v]), g.fireWith(d, [w, x]), l && (f.trigger("ajaxComplete", [w, c]), --st.active || st.event.trigger("ajaxStop")))
					}
					"object" == typeof t && (e = t, t = void 0),
					e = e || {};
					var n,
					s,
					r,
					o,
					a,
					l,
					h,
					u,
					c = st.ajaxSetup({}, e),
					d = c.context || c,
					f = c.context && (d.nodeType || d.jquery) ? st(d) : st.event,
					p = st.Deferred(),
					g = st.Callbacks("once memory"),
					m = c.statusCode || {},
					v = {},
					b = {},
					y = 0,
					_ = "canceled",
					w = {
						readyState : 0,
						getResponseHeader : function (t) {
							var e;
							if (2 === y) {
								if (!u)
									for (u = {}; e = He.exec(o); )
										u[e[1].toLowerCase()] = e[2];
								e = u[t.toLowerCase()]
							}
							return null == e ? null : e
						},
						getAllResponseHeaders : function () {
							return 2 === y ? o : null
						},
						setRequestHeader : function (t, e) {
							var i = t.toLowerCase();
							return y || (t = b[i] = b[i] || t, v[t] = e),
							this
						},
						overrideMimeType : function (t) {
							return y || (c.mimeType = t),
							this
						},
						statusCode : function (t) {
							var e;
							if (t)
								if (2 > y)
									for (e in t)
										m[e] = [m[e], t[e]];
								else
									w.always(t[w.status]);
							return this
						},
						abort : function (t) {
							var e = t || _;
							return h && h.abort(e),
							i(0, e),
							this
						}
					};
					if (p.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, c.url = ((t || c.url || Pe) + "").replace(ze, "").replace(Be, Oe[1] + "//"), c.type = e.method || e.type || c.method || c.type, c.dataTypes = st.trim(c.dataType || "*").toLowerCase().match(yt) || [""], null == c.crossDomain && (n = Fe.exec(c.url.toLowerCase()), c.crossDomain = !(!n || n[1] === Oe[1] && n[2] === Oe[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Oe[3] || ("http:" === Oe[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = st.param(c.data, c.traditional)), B(We, c, e, w), 2 === y)
						return w;
					l = st.event && c.global,
					l && 0 === st.active++ && st.event.trigger("ajaxStart"),
					c.type = c.type.toUpperCase(),
					c.hasContent = !je.test(c.type),
					r = c.url,
					c.hasContent || (c.data && (r = c.url += (Me.test(r) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = Re.test(r) ? r.replace(Re, "$1_=" + Ae++) : r + (Me.test(r) ? "&" : "?") + "_=" + Ae++)),
					c.ifModified && (st.lastModified[r] && w.setRequestHeader("If-Modified-Since", st.lastModified[r]), st.etag[r] && w.setRequestHeader("If-None-Match", st.etag[r])),
					(c.data && c.hasContent && c.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", c.contentType),
					w.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + Ve + "; q=0.01" : "") : c.accepts["*"]);
					for (s in c.headers)
						w.setRequestHeader(s, c.headers[s]);
					if (c.beforeSend && (c.beforeSend.call(d, w, c) === !1 || 2 === y))
						return w.abort();
					_ = "abort";
					for (s in {
						success : 1,
						error : 1,
						complete : 1
					})
						w[s](c[s]);
					if (h = B($e, c, e, w)) {
						w.readyState = 1,
						l && f.trigger("ajaxSend", [w, c]),
						c.async && c.timeout > 0 && (a = setTimeout(function () {
									w.abort("timeout")
								}, c.timeout));
						try {
							y = 1,
							h.send(v, i)
						} catch (x) {
							if (!(2 > y))
								throw x;
							i(-1, x)
						}
					} else
						i(-1, "No Transport");
					return w
				},
				getJSON : function (t, e, i) {
					return st.get(t, e, i, "json")
				},
				getScript : function (t, e) {
					return st.get(t, void 0, e, "script")
				}
			}),
			st.each(["get", "post"], function (t, e) {
				st[e] = function (t, i, n, s) {
					return st.isFunction(i) && (s = s || n, n = i, i = void 0),
					st.ajax({
						url : t,
						type : e,
						dataType : s,
						data : i,
						success : n
					})
				}
			}),
			st._evalUrl = function (t) {
				return st.ajax({
					url : t,
					type : "GET",
					dataType : "script",
					async : !1,
					global : !1,
					"throws" : !0
				})
			},
			st.fn.extend({
				wrapAll : function (t) {
					if (st.isFunction(t))
						return this.each(function (e) {
							st(this).wrapAll(t.call(this, e))
						});
					if (this[0]) {
						var e = st(t, this[0].ownerDocument).eq(0).clone(!0);
						this[0].parentNode && e.insertBefore(this[0]),
						e.map(function () {
							for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; )
								t = t.firstChild;
							return t
						}).append(this)
					}
					return this
				},
				wrapInner : function (t) {
					return this.each(st.isFunction(t) ? function (e) {
						st(this).wrapInner(t.call(this, e))
					}
						 : function () {
						var e = st(this),
						i = e.contents();
						i.length ? i.wrapAll(t) : e.append(t)
					})
				},
				wrap : function (t) {
					var e = st.isFunction(t);
					return this.each(function (i) {
						st(this).wrapAll(e ? t.call(this, i) : t)
					})
				},
				unwrap : function () {
					return this.parent().each(function () {
						st.nodeName(this, "body") || st(this).replaceWith(this.childNodes)
					}).end()
				}
			}),
			st.expr.filters.hidden = function (t) {
				return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !it.reliableHiddenOffsets() && "none" === (t.style && t.style.display || st.css(t, "display"))
			},
			st.expr.filters.visible = function (t) {
				return !st.expr.filters.hidden(t)
			};
			var Ue = /%20/g,
			Ye = /\[\]$/,
			Ke = /\r?\n/g,
			Xe = /^(?:submit|button|image|reset|file)$/i,
			Ze = /^(?:input|select|textarea|keygen)/i;
			st.param = function (t, e) {
				var i,
				n = [],
				s = function (t, e) {
					e = st.isFunction(e) ? e() : null == e ? "" : e,
					n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
				};
				if (void 0 === e && (e = st.ajaxSettings && st.ajaxSettings.traditional), st.isArray(t) || t.jquery && !st.isPlainObject(t))
					st.each(t, function () {
						s(this.name, this.value)
					});
				else
					for (i in t)
						V(i, t[i], e, s);
				return n.join("&").replace(Ue, "+")
			},
			st.fn.extend({
				serialize : function () {
					return st.param(this.serializeArray())
				},
				serializeArray : function () {
					return this.map(function () {
						var t = st.prop(this, "elements");
						return t ? st.makeArray(t) : this
					}).filter(function () {
						var t = this.type;
						return this.name && !st(this).is(":disabled") && Ze.test(this.nodeName) && !Xe.test(t) && (this.checked || !At.test(t))
					}).map(function (t, e) {
						var i = st(this).val();
						return null == i ? null : st.isArray(i) ? st.map(i, function (t) {
							return {
								name : e.name,
								value : t.replace(Ke, "\r\n")
							}
						}) : {
							name : e.name,
							value : i.replace(Ke, "\r\n")
						}
					}).get()
				}
			}),
			st.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
				return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && q() || U()
			}
			 : q;
			var Ge = 0,
			Je = {},
			Qe = st.ajaxSettings.xhr();
			t.attachEvent && t.attachEvent("onunload", function () {
				for (var t in Je)
					Je[t](void 0, !0)
			}),
			it.cors = !!Qe && "withCredentials" in Qe,
			Qe = it.ajax = !!Qe,
			Qe && st.ajaxTransport(function (t) {
				if (!t.crossDomain || it.cors) {
					var e;
					return {
						send : function (i, n) {
							var s,
							r = t.xhr(),
							o = ++Ge;
							if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
								for (s in t.xhrFields)
									r[s] = t.xhrFields[s];
							t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType),
							t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
							for (s in i)
								void 0 !== i[s] && r.setRequestHeader(s, i[s] + "");
							r.send(t.hasContent && t.data || null),
							e = function (i, s) {
								var a,
								l,
								h;
								if (e && (s || 4 === r.readyState))
									if (delete Je[o], e = void 0, r.onreadystatechange = st.noop, s)
										4 !== r.readyState && r.abort();
									else {
										h = {},
										a = r.status,
										"string" == typeof r.responseText && (h.text = r.responseText);
										try {
											l = r.statusText
										} catch (u) {
											l = ""
										}
										a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = h.text ? 200 : 404
									}
								h && n(a, l, h, r.getAllResponseHeaders())
							},
							t.async ? 4 === r.readyState ? setTimeout(e) : r.onreadystatechange = Je[o] = e : e()
						},
						abort : function () {
							e && e(void 0, !0)
						}
					}
				}
			}),
			st.ajaxSetup({
				accepts : {
					script : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
				},
				contents : {
					script : /(?:java|ecma)script/
				},
				converters : {
					"text script" : function (t) {
						return st.globalEval(t),
						t
					}
				}
			}),
			st.ajaxPrefilter("script", function (t) {
				void 0 === t.cache && (t.cache = !1),
				t.crossDomain && (t.type = "GET", t.global = !1)
			}),
			st.ajaxTransport("script", function (t) {
				if (t.crossDomain) {
					var e,
					i = pt.head || st("head")[0] || pt.documentElement;
					return {
						send : function (n, s) {
							e = pt.createElement("script"),
							e.async = !0,
							t.scriptCharset && (e.charset = t.scriptCharset),
							e.src = t.url,
							e.onload = e.onreadystatechange = function (t, i) {
								(i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || s(200, "success"))
							},
							i.insertBefore(e, i.firstChild)
						},
						abort : function () {
							e && e.onload(void 0, !0)
						}
					}
				}
			});
			var ti = [],
			ei = /(=)\?(?=&|$)|\?\?/;
			st.ajaxSetup({
				jsonp : "callback",
				jsonpCallback : function () {
					var t = ti.pop() || st.expando + "_" + Ae++;
					return this[t] = !0,
					t
				}
			}),
			st.ajaxPrefilter("json jsonp", function (e, i, n) {
				var s,
				r,
				o,
				a = e.jsonp !== !1 && (ei.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ei.test(e.data) && "data");
				return a || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = st.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(ei, "$1" + s) : e.jsonp !== !1 && (e.url += (Me.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function () {
					return o || st.error(s + " was not called"),
					o[0]
				}, e.dataTypes[0] = "json", r = t[s], t[s] = function () {
					o = arguments
				}, n.always(function () {
						t[s] = r,
						e[s] && (e.jsonpCallback = i.jsonpCallback, ti.push(s)),
						o && st.isFunction(r) && r(o[0]),
						o = r = void 0
					}), "script") : void 0
			}),
			st.parseHTML = function (t, e, i) {
				if (!t || "string" != typeof t)
					return null;
				"boolean" == typeof e && (i = e, e = !1),
				e = e || pt;
				var n = ct.exec(t),
				s = !i && [];
				return n ? [e.createElement(n[1])] : (n = st.buildFragment([t], e, s), s && s.length && st(s).remove(), st.merge([], n.childNodes))
			};
			var ii = st.fn.load;
			st.fn.load = function (t, e, i) {
				if ("string" != typeof t && ii)
					return ii.apply(this, arguments);
				var n,
				s,
				r,
				o = this,
				a = t.indexOf(" ");
				return a >= 0 && (n = st.trim(t.slice(a, t.length)), t = t.slice(0, a)),
				st.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"),
				o.length > 0 && st.ajax({
					url : t,
					type : r,
					dataType : "html",
					data : e
				}).done(function (t) {
					s = arguments,
					o.html(n ? st("<div>").append(st.parseHTML(t)).find(n) : t)
				}).complete(i && function (t, e) {
					o.each(i, s || [t.responseText, e, t])
				}),
				this
			},
			st.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
				st.fn[e] = function (t) {
					return this.on(e, t)
				}
			}),
			st.expr.filters.animated = function (t) {
				return st.grep(st.timers, function (e) {
					return t === e.elem
				}).length
			};
			var ni = t.document.documentElement;
			st.offset = {
				setOffset : function (t, e, i) {
					var n,
					s,
					r,
					o,
					a,
					l,
					h,
					u = st.css(t, "position"),
					c = st(t),
					d = {};
					"static" === u && (t.style.position = "relative"),
					a = c.offset(),
					r = st.css(t, "top"),
					l = st.css(t, "left"),
					h = ("absolute" === u || "fixed" === u) && st.inArray("auto", [r, l]) > -1,
					h ? (n = c.position(), o = n.top, s = n.left) : (o = parseFloat(r) || 0, s = parseFloat(l) || 0),
					st.isFunction(e) && (e = e.call(t, i, a)),
					null != e.top && (d.top = e.top - a.top + o),
					null != e.left && (d.left = e.left - a.left + s),
					"using" in e ? e.using.call(t, d) : c.css(d)
				}
			},
			st.fn.extend({
				offset : function (t) {
					if (arguments.length)
						return void 0 === t ? this : this.each(function (e) {
							st.offset.setOffset(this, t, e)
						});
					var e,
					i,
					n = {
						top : 0,
						left : 0
					},
					s = this[0],
					r = s && s.ownerDocument;
					return r ? (e = r.documentElement, st.contains(e, s) ? (typeof s.getBoundingClientRect !== kt && (n = s.getBoundingClientRect()), i = Y(r), {
							top : n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
							left : n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
						}) : n) : void 0
				},
				position : function () {
					if (this[0]) {
						var t,
						e,
						i = {
							top : 0,
							left : 0
						},
						n = this[0];
						return "fixed" === st.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), st.nodeName(t[0], "html") || (i = t.offset()), i.top += st.css(t[0], "borderTopWidth", !0), i.left += st.css(t[0], "borderLeftWidth", !0)), {
							top : e.top - i.top - st.css(n, "marginTop", !0),
							left : e.left - i.left - st.css(n, "marginLeft", !0)
						}
					}
				},
				offsetParent : function () {
					return this.map(function () {
						for (var t = this.offsetParent || ni; t && !st.nodeName(t, "html") && "static" === st.css(t, "position"); )
							t = t.offsetParent;
						return t || ni
					})
				}
			}),
			st.each({
				scrollLeft : "pageXOffset",
				scrollTop : "pageYOffset"
			}, function (t, e) {
				var i = /Y/.test(e);
				st.fn[t] = function (n) {
					return Dt(this, function (t, n, s) {
						var r = Y(t);
						return void 0 === s ? r ? e in r ? r[e] : r.document.documentElement[n] : t[n] : void(r ? r.scrollTo(i ? st(r).scrollLeft() : s, i ? s : st(r).scrollTop()) : t[n] = s)
					}, t, n, arguments.length, null)
				}
			}),
			st.each(["top", "left"], function (t, e) {
				st.cssHooks[e] = T(it.pixelPosition, function (t, i) {
						return i ? (i = ee(t, e), ne.test(i) ? st(t).position()[e] + "px" : i) : void 0
					})
			}),
			st.each({
				Height : "height",
				Width : "width"
			}, function (t, e) {
				st.each({
					padding : "inner" + t,
					content : e,
					"" : "outer" + t
				}, function (i, n) {
					st.fn[n] = function (n, s) {
						var r = arguments.length && (i || "boolean" != typeof n),
						o = i || (n === !0 || s === !0 ? "margin" : "border");
						return Dt(this, function (e, i, n) {
							var s;
							return st.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? st.css(e, i, o) : st.style(e, i, n, o)
						}, e, r ? n : void 0, r, null)
					}
				})
			}),
			st.fn.size = function () {
				return this.length
			},
			st.fn.andSelf = st.fn.addBack,
			"function" == typeof define && define.amd && define("jquery", [], function () {
				return st
			});
			var si = t.jQuery,
			ri = t.$;
			return st.noConflict = function (e) {
				return t.$ === st && (t.$ = ri),
				e && t.jQuery === st && (t.jQuery = si),
				st
			},
			typeof e === kt && (t.jQuery = t.$ = st),
			st
		}), function (t) {
		"function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
	}
		(function (t) {
			function e(e, n) {
				var s,
				r,
				o,
				a = e.nodeName.toLowerCase();
				return "area" === a ? (s = e.parentNode, r = s.name, e.href && r && "map" === s.nodeName.toLowerCase() ? (o = t("img[usemap='#" + r + "']")[0], !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(a) ? !e.disabled : "a" === a ? e.href || n : n) && i(e)
			}
			function i(e) {
				return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function () {
					return "hidden" === t.css(this, "visibility")
				}).length
			}
			function n(t) {
				for (var e, i; t.length && t[0] !== document; ) {
					if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i))
						return i;
					t = t.parent()
				}
				return 0
			}
			function s() {
				this._curInst = null,
				this._keyEvent = !1,
				this._disabledInputs = [],
				this._datepickerShowing = !1,
				this._inDialog = !1,
				this._mainDivId = "ui-datepicker-div",
				this._inlineClass = "ui-datepicker-inline",
				this._appendClass = "ui-datepicker-append",
				this._triggerClass = "ui-datepicker-trigger",
				this._dialogClass = "ui-datepicker-dialog",
				this._disableClass = "ui-datepicker-disabled",
				this._unselectableClass = "ui-datepicker-unselectable",
				this._currentClass = "ui-datepicker-current-day",
				this._dayOverClass = "ui-datepicker-days-cell-over",
				this.regional = [],
				this.regional[""] = {
					closeText : "Done",
					prevText : "Prev",
					nextText : "Next",
					currentText : "Today",
					monthNames : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
					monthNamesShort : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
					dayNames : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
					dayNamesShort : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
					dayNamesMin : ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
					weekHeader : "Wk",
					dateFormat : "mm/dd/yy",
					firstDay : 0,
					isRTL : !1,
					showMonthAfterYear : !1,
					yearSuffix : ""
				},
				this._defaults = {
					showOn : "focus",
					showAnim : "fadeIn",
					showOptions : {},
					defaultDate : null,
					appendText : "",
					buttonText : "...",
					buttonImage : "",
					buttonImageOnly : !1,
					hideIfNoPrevNext : !1,
					navigationAsDateFormat : !1,
					gotoCurrent : !1,
					changeMonth : !1,
					changeYear : !1,
					yearRange : "c-10:c+10",
					showOtherMonths : !1,
					selectOtherMonths : !1,
					showWeek : !1,
					calculateWeek : this.iso8601Week,
					shortYearCutoff : "+10",
					minDate : null,
					maxDate : null,
					duration : "fast",
					beforeShowDay : null,
					beforeShow : null,
					onSelect : null,
					onChangeMonthYear : null,
					onClose : null,
					numberOfMonths : 1,
					showCurrentAtPos : 0,
					stepMonths : 1,
					stepBigMonths : 12,
					altField : "",
					altFormat : "",
					constrainInput : !0,
					showButtonPanel : !1,
					autoSize : !1,
					disabled : !1
				},
				t.extend(this._defaults, this.regional[""]),
				this.regional.en = t.extend(!0, {}, this.regional[""]),
				this.regional["en-US"] = t.extend(!0, {}, this.regional.en),
				this.dpDiv = r(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
			}
			function r(e) {
				var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
				return e.delegate(i, "mouseout", function () {
					t(this).removeClass("ui-state-hover"),
					-1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"),
					-1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
				}).delegate(i, "mouseover", o)
			}
			function o() {
				t.datepicker._isDisabledDatepicker(v.inline ? v.dpDiv.parent()[0] : v.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
			}
			function a(e, i) {
				t.extend(e, i);
				for (var n in i)
					null == i[n] && (e[n] = i[n]);
				return e
			}
			function l(t) {
				return function () {
					var e = this.element.val();
					t.apply(this, arguments),
					this._refresh(),
					e !== this.element.val() && this._trigger("change")
				}
			}
			t.ui = t.ui || {},
			t.extend(t.ui, {
				version : "1.11.4",
				keyCode : {
					BACKSPACE : 8,
					COMMA : 188,
					DELETE : 46,
					DOWN : 40,
					END : 35,
					ENTER : 13,
					ESCAPE : 27,
					HOME : 36,
					LEFT : 37,
					PAGE_DOWN : 34,
					PAGE_UP : 33,
					PERIOD : 190,
					RIGHT : 39,
					SPACE : 32,
					TAB : 9,
					UP : 38
				}
			}),
			t.fn.extend({
				scrollParent : function (e) {
					var i = this.css("position"),
					n = "absolute" === i,
					s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
					r = this.parents().filter(function () {
							var e = t(this);
							return n && "static" === e.css("position") ? !1 : s.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
						}).eq(0);
					return "fixed" !== i && r.length ? r : t(this[0].ownerDocument || document)
				},
				uniqueId : function () {
					var t = 0;
					return function () {
						return this.each(function () {
							this.id || (this.id = "ui-id-" + ++t)
						})
					}
				}
				(),
				removeUniqueId : function () {
					return this.each(function () {
						/^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
					})
				}
			}),
			t.extend(t.expr[":"], {
				data : t.expr.createPseudo ? t.expr.createPseudo(function (e) {
					return function (i) {
						return !!t.data(i, e)
					}
				}) : function (e, i, n) {
					return !!t.data(e, n[3])
				},
				focusable : function (i) {
					return e(i, !isNaN(t.attr(i, "tabindex")))
				},
				tabbable : function (i) {
					var n = t.attr(i, "tabindex"),
					s = isNaN(n);
					return (s || n >= 0) && e(i, !s)
				}
			}),
			t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function (e, i) {
				function n(e, i, n, r) {
					return t.each(s, function () {
						i -= parseFloat(t.css(e, "padding" + this)) || 0,
						n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
						r && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
					}),
					i
				}
				var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
				r = i.toLowerCase(),
				o = {
					innerWidth : t.fn.innerWidth,
					innerHeight : t.fn.innerHeight,
					outerWidth : t.fn.outerWidth,
					outerHeight : t.fn.outerHeight
				};
				t.fn["inner" + i] = function (e) {
					return void 0 === e ? o["inner" + i].call(this) : this.each(function () {
						t(this).css(r, n(this, e) + "px")
					})
				},
				t.fn["outer" + i] = function (e, s) {
					return "number" != typeof e ? o["outer" + i].call(this, e) : this.each(function () {
						t(this).css(r, n(this, e, !0, s) + "px")
					})
				}
			}),
			t.fn.addBack || (t.fn.addBack = function (t) {
				return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
			}),
			t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function (e) {
				return function (i) {
					return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
				}
			}
				(t.fn.removeData)),
			t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
			t.fn.extend({
				focus : function (e) {
					return function (i, n) {
						return "number" == typeof i ? this.each(function () {
							var e = this;
							setTimeout(function () {
								t(e).focus(),
								n && n.call(e)
							}, i)
						}) : e.apply(this, arguments)
					}
				}
				(t.fn.focus),
				disableSelection : function () {
					var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
					return function () {
						return this.bind(t + ".ui-disableSelection", function (t) {
							t.preventDefault()
						})
					}
				}
				(),
				enableSelection : function () {
					return this.unbind(".ui-disableSelection")
				},
				zIndex : function (e) {
					if (void 0 !== e)
						return this.css("zIndex", e);
					if (this.length)
						for (var i, n, s = t(this[0]); s.length && s[0] !== document; ) {
							if (i = s.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (n = parseInt(s.css("zIndex"), 10), !isNaN(n) && 0 !== n))
								return n;
							s = s.parent()
						}
					return 0
				}
			}),
			t.ui.plugin = {
				add : function (e, i, n) {
					var s,
					r = t.ui[e].prototype;
					for (s in n)
						r.plugins[s] = r.plugins[s] || [], r.plugins[s].push([i, n[s]])
				},
				call : function (t, e, i, n) {
					var s,
					r = t.plugins[e];
					if (r && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
						for (s = 0; r.length > s; s++)
							t.options[r[s][0]] && r[s][1].apply(t.element, i)
				}
			};
			var h = 0,
			u = Array.prototype.slice;
			t.cleanData = function (e) {
				return function (i) {
					var n,
					s,
					r;
					for (r = 0; null != (s = i[r]); r++)
						try {
							n = t._data(s, "events"),
							n && n.remove && t(s).triggerHandler("remove")
						} catch (o) {}

					e(i)
				}
			}
			(t.cleanData),
			t.widget = function (e, i, n) {
				var s,
				r,
				o,
				a,
				l = {},
				h = e.split(".")[0];
				return e = e.split(".")[1],
				s = h + "-" + e,
				n || (n = i, i = t.Widget),
				t.expr[":"][s.toLowerCase()] = function (e) {
					return !!t.data(e, s)
				},
				t[h] = t[h] || {},
				r = t[h][e],
				o = t[h][e] = function (t, e) {
					return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new o(t, e)
				},
				t.extend(o, r, {
					version : n.version,
					_proto : t.extend({}, n),
					_childConstructors : []
				}),
				a = new i,
				a.options = t.widget.extend({}, a.options),
				t.each(n, function (e, n) {
					return t.isFunction(n) ? void(l[e] = function () {
						var t = function () {
							return i.prototype[e].apply(this, arguments)
						},
						s = function (t) {
							return i.prototype[e].apply(this, t)
						};
						return function () {
							var e,
							i = this._super,
							r = this._superApply;
							return this._super = t,
							this._superApply = s,
							e = n.apply(this, arguments),
							this._super = i,
							this._superApply = r,
							e
						}
					}
						()) : void(l[e] = n)
				}),
				o.prototype = t.widget.extend(a, {
						widgetEventPrefix : r ? a.widgetEventPrefix || e : e
					}, l, {
						constructor : o,
						namespace : h,
						widgetName : e,
						widgetFullName : s
					}),
				r ? (t.each(r._childConstructors, function (e, i) {
						var n = i.prototype;
						t.widget(n.namespace + "." + n.widgetName, o, i._proto)
					}), delete r._childConstructors) : i._childConstructors.push(o),
				t.widget.bridge(e, o),
				o
			},
			t.widget.extend = function (e) {
				for (var i, n, s = u.call(arguments, 1), r = 0, o = s.length; o > r; r++)
					for (i in s[r])
						n = s[r][i], s[r].hasOwnProperty(i) && void 0 !== n && (e[i] = t.isPlainObject(n) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n) : n);
				return e
			},
			t.widget.bridge = function (e, i) {
				var n = i.prototype.widgetFullName || e;
				t.fn[e] = function (s) {
					var r = "string" == typeof s,
					o = u.call(arguments, 1),
					a = this;
					return r ? this.each(function () {
						var i,
						r = t.data(this, n);
						return "instance" === s ? (a = r, !1) : r ? t.isFunction(r[s]) && "_" !== s.charAt(0) ? (i = r[s].apply(r, o), i !== r && void 0 !== i ? (a = i && i.jquery ? a.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'")
					}) : (o.length && (s = t.widget.extend.apply(null, [s].concat(o))), this.each(function () {
							var e = t.data(this, n);
							e ? (e.option(s || {}), e._init && e._init()) : t.data(this, n, new i(s, this))
						})),
					a
				}
			},
			t.Widget = function () {},
			t.Widget._childConstructors = [],
			t.Widget.prototype = {
				widgetName : "widget",
				widgetEventPrefix : "",
				defaultElement : "<div>",
				options : {
					disabled : !1,
					create : null
				},
				_createWidget : function (e, i) {
					i = t(i || this.defaultElement || this)[0],
					this.element = t(i),
					this.uuid = h++,
					this.eventNamespace = "." + this.widgetName + this.uuid,
					this.bindings = t(),
					this.hoverable = t(),
					this.focusable = t(),
					i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
							remove : function (t) {
								t.target === i && this.destroy()
							}
						}), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)),
					this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e),
					this._create(),
					this._trigger("create", null, this._getCreateEventData()),
					this._init()
				},
				_getCreateOptions : t.noop,
				_getCreateEventData : t.noop,
				_create : t.noop,
				_init : t.noop,
				destroy : function () {
					this._destroy(),
					this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),
					this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
					this.bindings.unbind(this.eventNamespace),
					this.hoverable.removeClass("ui-state-hover"),
					this.focusable.removeClass("ui-state-focus")
				},
				_destroy : t.noop,
				widget : function () {
					return this.element
				},
				option : function (e, i) {
					var n,
					s,
					r,
					o = e;
					if (0 === arguments.length)
						return t.widget.extend({}, this.options);
					if ("string" == typeof e)
						if (o = {}, n = e.split("."), e = n.shift(), n.length) {
							for (s = o[e] = t.widget.extend({}, this.options[e]), r = 0; n.length - 1 > r; r++)
								s[n[r]] = s[n[r]] || {},
							s = s[n[r]];
							if (e = n.pop(), 1 === arguments.length)
								return void 0 === s[e] ? null : s[e];
							s[e] = i
						} else {
							if (1 === arguments.length)
								return void 0 === this.options[e] ? null : this.options[e];
							o[e] = i
						}
					return this._setOptions(o),
					this
				},
				_setOptions : function (t) {
					var e;
					for (e in t)
						this._setOption(e, t[e]);
					return this
				},
				_setOption : function (t, e) {
					return this.options[t] = e,
					"disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))),
					this
				},
				enable : function () {
					return this._setOptions({
						disabled : !1
					})
				},
				disable : function () {
					return this._setOptions({
						disabled : !0
					})
				},
				_on : function (e, i, n) {
					var s,
					r = this;
					"boolean" != typeof e && (n = i, i = e, e = !1),
					n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()),
					t.each(n, function (n, o) {
						function a() {
							return e || r.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? r[o] : o).apply(r, arguments) : void 0
						}
						"string" != typeof o && (a.guid = o.guid = o.guid || a.guid || t.guid++);
						var l = n.match(/^([\w:-]*)\s*(.*)$/),
						h = l[1] + r.eventNamespace,
						u = l[2];
						u ? s.delegate(u, h, a) : i.bind(h, a)
					})
				},
				_off : function (e, i) {
					i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
					e.unbind(i).undelegate(i),
					this.bindings = t(this.bindings.not(e).get()),
					this.focusable = t(this.focusable.not(e).get()),
					this.hoverable = t(this.hoverable.not(e).get())
				},
				_delay : function (t, e) {
					function i() {
						return ("string" == typeof t ? n[t] : t).apply(n, arguments)
					}
					var n = this;
					return setTimeout(i, e || 0)
				},
				_hoverable : function (e) {
					this.hoverable = this.hoverable.add(e),
					this._on(e, {
						mouseenter : function (e) {
							t(e.currentTarget).addClass("ui-state-hover")
						},
						mouseleave : function (e) {
							t(e.currentTarget).removeClass("ui-state-hover")
						}
					})
				},
				_focusable : function (e) {
					this.focusable = this.focusable.add(e),
					this._on(e, {
						focusin : function (e) {
							t(e.currentTarget).addClass("ui-state-focus")
						},
						focusout : function (e) {
							t(e.currentTarget).removeClass("ui-state-focus")
						}
					})
				},
				_trigger : function (e, i, n) {
					var s,
					r,
					o = this.options[e];
					if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], r = i.originalEvent)
						for (s in r)
							s in i || (i[s] = r[s]);
					return this.element.trigger(i, n),
					!(t.isFunction(o) && o.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
				}
			},
			t.each({
				show : "fadeIn",
				hide : "fadeOut"
			}, function (e, i) {
				t.Widget.prototype["_" + e] = function (n, s, r) {
					"string" == typeof s && (s = {
							effect : s
						});
					var o,
					a = s ? s === !0 || "number" == typeof s ? i : s.effect || i : e;
					s = s || {},
					"number" == typeof s && (s = {
							duration : s
						}),
					o = !t.isEmptyObject(s),
					s.complete = r,
					s.delay && n.delay(s.delay),
					o && t.effects && t.effects.effect[a] ? n[e](s) : a !== e && n[a] ? n[a](s.duration, s.easing, r) : n.queue(function (i) {
						t(this)[e](),
						r && r.call(n[0]),
						i()
					})
				}
			}),
			t.widget;
			var c = !1;
			t(document).mouseup(function () {
				c = !1
			}),
			t.widget("ui.mouse", {
				version : "1.11.4",
				options : {
					cancel : "input,textarea,button,select,option",
					distance : 1,
					delay : 0
				},
				_mouseInit : function () {
					var e = this;
					this.element.bind("mousedown." + this.widgetName, function (t) {
						return e._mouseDown(t)
					}).bind("click." + this.widgetName, function (i) {
						return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
					}),
					this.started = !1
				},
				_mouseDestroy : function () {
					this.element.unbind("." + this.widgetName),
					this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
				},
				_mouseDown : function (e) {
					if (!c) {
						this._mouseMoved = !1,
						this._mouseStarted && this._mouseUp(e),
						this._mouseDownEvent = e;
						var i = this,
						n = 1 === e.which,
						s = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
						return n && !s && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
										i.mouseDelayMet = !0
									}, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
								return i._mouseMove(t)
							}, this._mouseUpDelegate = function (t) {
								return i._mouseUp(t)
							}, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), c = !0, !0)) : !0
					}
				},
				_mouseMove : function (e) {
					if (this._mouseMoved) {
						if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button)
							return this._mouseUp(e);
						if (!e.which)
							return this._mouseUp(e)
					}
					return (e.which || e.button) && (this._mouseMoved = !0),
					this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
				},
				_mouseUp : function (e) {
					return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
					this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)),
					c = !1,
					!1
				},
				_mouseDistanceMet : function (t) {
					return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
				},
				_mouseDelayMet : function () {
					return this.mouseDelayMet
				},
				_mouseStart : function () {},
				_mouseDrag : function () {},
				_mouseStop : function () {},
				_mouseCapture : function () {
					return !0
				}
			}),
			function () {
				function e(t, e, i) {
					return [parseFloat(t[0]) * (f.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (f.test(t[1]) ? i / 100 : 1)]
				}
				function i(e, i) {
					return parseInt(t.css(e, i), 10) || 0
				}
				function n(e) {
					var i = e[0];
					return 9 === i.nodeType ? {
						width : e.width(),
						height : e.height(),
						offset : {
							top : 0,
							left : 0
						}
					}
					 : t.isWindow(i) ? {
						width : e.width(),
						height : e.height(),
						offset : {
							top : e.scrollTop(),
							left : e.scrollLeft()
						}
					}
					 : i.preventDefault ? {
						width : 0,
						height : 0,
						offset : {
							top : i.pageY,
							left : i.pageX
						}
					}
					 : {
						width : e.outerWidth(),
						height : e.outerHeight(),
						offset : e.offset()
					}
				}
				t.ui = t.ui || {};
				var s,
				r,
				o = Math.max,
				a = Math.abs,
				l = Math.round,
				h = /left|center|right/,
				u = /top|center|bottom/,
				c = /[\+\-]\d+(\.[\d]+)?%?/,
				d = /^\w+/,
				f = /%$/,
				p = t.fn.position;
				t.position = {
					scrollbarWidth : function () {
						if (void 0 !== s)
							return s;
						var e,
						i,
						n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
						r = n.children()[0];
						return t("body").append(n),
						e = r.offsetWidth,
						n.css("overflow", "scroll"),
						i = r.offsetWidth,
						e === i && (i = n[0].clientWidth),
						n.remove(),
						s = e - i
					},
					getScrollInfo : function (e) {
						var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
						n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
						s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
						r = "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight;
						return {
							width : r ? t.position.scrollbarWidth() : 0,
							height : s ? t.position.scrollbarWidth() : 0
						}
					},
					getWithinInfo : function (e) {
						var i = t(e || window),
						n = t.isWindow(i[0]),
						s = !!i[0] && 9 === i[0].nodeType;
						return {
							element : i,
							isWindow : n,
							isDocument : s,
							offset : i.offset() || {
								left : 0,
								top : 0
							},
							scrollLeft : i.scrollLeft(),
							scrollTop : i.scrollTop(),
							width : n || s ? i.width() : i.outerWidth(),
							height : n || s ? i.height() : i.outerHeight()
						}
					}
				},
				t.fn.position = function (s) {
					if (!s || !s.of)
						return p.apply(this, arguments);
					s = t.extend({}, s);
					var f,
					g,
					m,
					v,
					b,
					y,
					_ = t(s.of),
					w = t.position.getWithinInfo(s.within),
					x = t.position.getScrollInfo(w),
					k = (s.collision || "flip").split(" "),
					C = {};
					return y = n(_),
					_[0].preventDefault && (s.at = "left top"),
					g = y.width,
					m = y.height,
					v = y.offset,
					b = t.extend({}, v),
					t.each(["my", "at"], function () {
						var t,
						e,
						i = (s[this] || "").split(" ");
						1 === i.length && (i = h.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]),
						i[0] = h.test(i[0]) ? i[0] : "center",
						i[1] = u.test(i[1]) ? i[1] : "center",
						t = c.exec(i[0]),
						e = c.exec(i[1]),
						C[this] = [t ? t[0] : 0, e ? e[0] : 0],
						s[this] = [d.exec(i[0])[0], d.exec(i[1])[0]]
					}),
					1 === k.length && (k[1] = k[0]),
					"right" === s.at[0] ? b.left += g : "center" === s.at[0] && (b.left += g / 2),
					"bottom" === s.at[1] ? b.top += m : "center" === s.at[1] && (b.top += m / 2),
					f = e(C.at, g, m),
					b.left += f[0],
					b.top += f[1],
					this.each(function () {
						var n,
						h,
						u = t(this),
						c = u.outerWidth(),
						d = u.outerHeight(),
						p = i(this, "marginLeft"),
						y = i(this, "marginTop"),
						E = c + p + i(this, "marginRight") + x.width,
						T = d + y + i(this, "marginBottom") + x.height,
						S = t.extend({}, b),
						I = e(C.my, u.outerWidth(), u.outerHeight());
						"right" === s.my[0] ? S.left -= c : "center" === s.my[0] && (S.left -= c / 2),
						"bottom" === s.my[1] ? S.top -= d : "center" === s.my[1] && (S.top -= d / 2),
						S.left += I[0],
						S.top += I[1],
						r || (S.left = l(S.left), S.top = l(S.top)),
						n = {
							marginLeft : p,
							marginTop : y
						},
						t.each(["left", "top"], function (e, i) {
							t.ui.position[k[e]] && t.ui.position[k[e]][i](S, {
								targetWidth : g,
								targetHeight : m,
								elemWidth : c,
								elemHeight : d,
								collisionPosition : n,
								collisionWidth : E,
								collisionHeight : T,
								offset : [f[0] + I[0], f[1] + I[1]],
								my : s.my,
								at : s.at,
								within : w,
								elem : u
							})
						}),
						s.using && (h = function (t) {
							var e = v.left - S.left,
							i = e + g - c,
							n = v.top - S.top,
							r = n + m - d,
							l = {
								target : {
									element : _,
									left : v.left,
									top : v.top,
									width : g,
									height : m
								},
								element : {
									element : u,
									left : S.left,
									top : S.top,
									width : c,
									height : d
								},
								horizontal : 0 > i ? "left" : e > 0 ? "right" : "center",
								vertical : 0 > r ? "top" : n > 0 ? "bottom" : "middle"
							};
							c > g && g > a(e + i) && (l.horizontal = "center"),
							d > m && m > a(n + r) && (l.vertical = "middle"),
							l.important = o(a(e), a(i)) > o(a(n), a(r)) ? "horizontal" : "vertical",
							s.using.call(this, t, l)
						}),
						u.offset(t.extend(S, {
								using : h
							}))
					})
				},
				t.ui.position = {
					fit : {
						left : function (t, e) {
							var i,
							n = e.within,
							s = n.isWindow ? n.scrollLeft : n.offset.left,
							r = n.width,
							a = t.left - e.collisionPosition.marginLeft,
							l = s - a,
							h = a + e.collisionWidth - r - s;
							e.collisionWidth > r ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - r - s, t.left += l - i) : t.left = h > 0 && 0 >= l ? s : l > h ? s + r - e.collisionWidth : s : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - a, t.left)
						},
						top : function (t, e) {
							var i,
							n = e.within,
							s = n.isWindow ? n.scrollTop : n.offset.top,
							r = e.within.height,
							a = t.top - e.collisionPosition.marginTop,
							l = s - a,
							h = a + e.collisionHeight - r - s;
							e.collisionHeight > r ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - r - s, t.top += l - i) : t.top = h > 0 && 0 >= l ? s : l > h ? s + r - e.collisionHeight : s : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - a, t.top)
						}
					},
					flip : {
						left : function (t, e) {
							var i,
							n,
							s = e.within,
							r = s.offset.left + s.scrollLeft,
							o = s.width,
							l = s.isWindow ? s.scrollLeft : s.offset.left,
							h = t.left - e.collisionPosition.marginLeft,
							u = h - l,
							c = h + e.collisionWidth - o - l,
							d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
							f = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
							p = -2 * e.offset[0];
							0 > u ? (i = t.left + d + f + p + e.collisionWidth - o - r, (0 > i || a(u) > i) && (t.left += d + f + p)) : c > 0 && (n = t.left - e.collisionPosition.marginLeft + d + f + p - l, (n > 0 || c > a(n)) && (t.left += d + f + p))
						},
						top : function (t, e) {
							var i,
							n,
							s = e.within,
							r = s.offset.top + s.scrollTop,
							o = s.height,
							l = s.isWindow ? s.scrollTop : s.offset.top,
							h = t.top - e.collisionPosition.marginTop,
							u = h - l,
							c = h + e.collisionHeight - o - l,
							d = "top" === e.my[1],
							f = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
							p = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
							g = -2 * e.offset[1];
							0 > u ? (n = t.top + f + p + g + e.collisionHeight - o - r, (0 > n || a(u) > n) && (t.top += f + p + g)) : c > 0 && (i = t.top - e.collisionPosition.marginTop + f + p + g - l, (i > 0 || c > a(i)) && (t.top += f + p + g))
						}
					},
					flipfit : {
						left : function () {
							t.ui.position.flip.left.apply(this, arguments),
							t.ui.position.fit.left.apply(this, arguments)
						},
						top : function () {
							t.ui.position.flip.top.apply(this, arguments),
							t.ui.position.fit.top.apply(this, arguments)
						}
					}
				},
				function () {
					var e,
					i,
					n,
					s,
					o,
					a = document.getElementsByTagName("body")[0],
					l = document.createElement("div");
					e = document.createElement(a ? "div" : "body"),
					n = {
						visibility : "hidden",
						width : 0,
						height : 0,
						border : 0,
						margin : 0,
						background : "none"
					},
					a && t.extend(n, {
						position : "absolute",
						left : "-1000px",
						top : "-1000px"
					});
					for (o in n)
						e.style[o] = n[o];
					e.appendChild(l),
					i = a || document.documentElement,
					i.insertBefore(e, i.firstChild),
					l.style.cssText = "position: absolute; left: 10.7432222px;",
					s = t(l).offset().left,
					r = s > 10 && 11 > s,
					e.innerHTML = "",
					i.removeChild(e)
				}
				()
			}
			(),
			t.ui.position,
			t.widget("ui.accordion", {
				version : "1.11.4",
				options : {
					active : 0,
					animate : {},
					collapsible : !1,
					event : "click",
					header : "> li > :first-child,> :not(li):even",
					heightStyle : "auto",
					icons : {
						activeHeader : "ui-icon-triangle-1-s",
						header : "ui-icon-triangle-1-e"
					},
					activate : null,
					beforeActivate : null
				},
				hideProps : {
					borderTopWidth : "hide",
					borderBottomWidth : "hide",
					paddingTop : "hide",
					paddingBottom : "hide",
					height : "hide"
				},
				showProps : {
					borderTopWidth : "show",
					borderBottomWidth : "show",
					paddingTop : "show",
					paddingBottom : "show",
					height : "show"
				},
				_create : function () {
					var e = this.options;
					this.prevShow = this.prevHide = t(),
					this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"),
					e.collapsible || e.active !== !1 && null != e.active || (e.active = 0),
					this._processPanels(),
					0 > e.active && (e.active += this.headers.length),
					this._refresh()
				},
				_getCreateEventData : function () {
					return {
						header : this.active,
						panel : this.active.length ? this.active.next() : t()
					}
				},
				_createIcons : function () {
					var e = this.options.icons;
					e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
				},
				_destroyIcons : function () {
					this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
				},
				_destroy : function () {
					var t;
					this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),
					this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(),
					this._destroyIcons(),
					t = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(),
					"content" !== this.options.heightStyle && t.css("height", "")
				},
				_setOption : function (t, e) {
					return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), void("disabled" === t && (this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e))))
				},
				_keydown : function (e) {
					if (!e.altKey && !e.ctrlKey) {
						var i = t.ui.keyCode,
						n = this.headers.length,
						s = this.headers.index(e.target),
						r = !1;
						switch (e.keyCode) {
						case i.RIGHT:
						case i.DOWN:
							r = this.headers[(s + 1) % n];
							break;
						case i.LEFT:
						case i.UP:
							r = this.headers[(s - 1 + n) % n];
							break;
						case i.SPACE:
						case i.ENTER:
							this._eventHandler(e);
							break;
						case i.HOME:
							r = this.headers[0];
							break;
						case i.END:
							r = this.headers[n - 1]
						}
						r && (t(e.target).attr("tabIndex", -1), t(r).attr("tabIndex", 0), r.focus(), e.preventDefault())
					}
				},
				_panelKeyDown : function (e) {
					e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
				},
				refresh : function () {
					var e = this.options;
					this._processPanels(),
					e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active),
					this._destroyIcons(),
					this._refresh()
				},
				_processPanels : function () {
					var t = this.headers,
					e = this.panels;
					this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"),
					this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(),
					e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
				},
				_refresh : function () {
					var e,
					i = this.options,
					n = i.heightStyle,
					s = this.element.parent();
					this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),
					this.active.next().addClass("ui-accordion-content-active").show(),
					this.headers.attr("role", "tab").each(function () {
						var e = t(this),
						i = e.uniqueId().attr("id"),
						n = e.next(),
						s = n.uniqueId().attr("id");
						e.attr("aria-controls", s),
						n.attr("aria-labelledby", i)
					}).next().attr("role", "tabpanel"),
					this.headers.not(this.active).attr({
						"aria-selected" : "false",
						"aria-expanded" : "false",
						tabIndex : -1
					}).next().attr({
						"aria-hidden" : "true"
					}).hide(),
					this.active.length ? this.active.attr({
						"aria-selected" : "true",
						"aria-expanded" : "true",
						tabIndex : 0
					}).next().attr({
						"aria-hidden" : "false"
					}) : this.headers.eq(0).attr("tabIndex", 0),
					this._createIcons(),
					this._setupEvents(i.event),
					"fill" === n ? (e = s.height(), this.element.siblings(":visible").each(function () {
							var i = t(this),
							n = i.css("position");
							"absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0))
						}), this.headers.each(function () {
							e -= t(this).outerHeight(!0)
						}), this.headers.next().each(function () {
							t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
						}).css("overflow", "auto")) : "auto" === n && (e = 0, this.headers.next().each(function () {
							e = Math.max(e, t(this).css("height", "").height())
						}).height(e))
				},
				_activate : function (e) {
					var i = this._findActive(e)[0];
					i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
							target : i,
							currentTarget : i,
							preventDefault : t.noop
						}))
				},
				_findActive : function (e) {
					return "number" == typeof e ? this.headers.eq(e) : t()
				},
				_setupEvents : function (e) {
					var i = {
						keydown : "_keydown"
					};
					e && t.each(e.split(" "), function (t, e) {
						i[e] = "_eventHandler"
					}),
					this._off(this.headers.add(this.headers.next())),
					this._on(this.headers, i),
					this._on(this.headers.next(), {
						keydown : "_panelKeyDown"
					}),
					this._hoverable(this.headers),
					this._focusable(this.headers)
				},
				_eventHandler : function (e) {
					var i = this.options,
					n = this.active,
					s = t(e.currentTarget),
					r = s[0] === n[0],
					o = r && i.collapsible,
					a = o ? t() : s.next(),
					l = n.next(),
					h = {
						oldHeader : n,
						oldPanel : l,
						newHeader : o ? t() : s,
						newPanel : a
					};
					e.preventDefault(),
					r && !i.collapsible || this._trigger("beforeActivate", e, h) === !1 || (i.active = o ? !1 : this.headers.index(s), this.active = r ? t() : s, this._toggle(h), n.removeClass("ui-accordion-header-active ui-state-active"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), r || (s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), s.next().addClass("ui-accordion-content-active")))
				},
				_toggle : function (e) {
					var i = e.newPanel,
					n = this.prevShow.length ? this.prevShow : e.oldPanel;
					this.prevShow.add(this.prevHide).stop(!0, !0),
					this.prevShow = i,
					this.prevHide = n,
					this.options.animate ? this._animate(i, n, e) : (n.hide(), i.show(), this._toggleComplete(e)),
					n.attr({
						"aria-hidden" : "true"
					}),
					n.prev().attr({
						"aria-selected" : "false",
						"aria-expanded" : "false"
					}),
					i.length && n.length ? n.prev().attr({
						tabIndex : -1,
						"aria-expanded" : "false"
					}) : i.length && this.headers.filter(function () {
						return 0 === parseInt(t(this).attr("tabIndex"), 10)
					}).attr("tabIndex", -1),
					i.attr("aria-hidden", "false").prev().attr({
						"aria-selected" : "true",
						"aria-expanded" : "true",
						tabIndex : 0
					})
				},
				_animate : function (t, e, i) {
					var n,
					s,
					r,
					o = this,
					a = 0,
					l = t.css("box-sizing"),
					h = t.length && (!e.length || t.index() < e.index()),
					u = this.options.animate || {},
					c = h && u.down || u,
					d = function () {
						o._toggleComplete(i)
					};
					return "number" == typeof c && (r = c),
					"string" == typeof c && (s = c),
					s = s || c.easing || u.easing,
					r = r || c.duration || u.duration,
					e.length ? t.length ? (n = t.show().outerHeight(), e.animate(this.hideProps, {
							duration : r,
							easing : s,
							step : function (t, e) {
								e.now = Math.round(t)
							}
						}), void t.hide().animate(this.showProps, {
							duration : r,
							easing : s,
							complete : d,
							step : function (t, i) {
								i.now = Math.round(t),
								"height" !== i.prop ? "content-box" === l && (a += i.now) : "content" !== o.options.heightStyle && (i.now = Math.round(n - e.outerHeight() - a), a = 0)
							}
						})) : e.animate(this.hideProps, r, s, d) : t.animate(this.showProps, r, s, d)
				},
				_toggleComplete : function (t) {
					var e = t.oldPanel;
					e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),
					e.length && (e.parent()[0].className = e.parent()[0].className),
					this._trigger("activate", null, t)
				}
			}),
			t.widget("ui.menu", {
				version : "1.11.4",
				defaultElement : "<ul>",
				delay : 300,
				options : {
					icons : {
						submenu : "ui-icon-carat-1-e"
					},
					items : "> *",
					menus : "ul",
					position : {
						my : "left-1 top",
						at : "right top"
					},
					role : "menu",
					blur : null,
					focus : null,
					select : null
				},
				_create : function () {
					this.activeMenu = this.element,
					this.mouseHandled = !1,
					this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
						role : this.options.role,
						tabIndex : 0
					}),
					this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"),
					this._on({
						"mousedown .ui-menu-item" : function (t) {
							t.preventDefault()
						},
						"click .ui-menu-item" : function (e) {
							var i = t(e.target);
							!this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && t(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
						},
						"mouseenter .ui-menu-item" : function (e) {
							if (!this.previousFilter) {
								var i = t(e.currentTarget);
								i.siblings(".ui-state-active").removeClass("ui-state-active"),
								this.focus(e, i)
							}
						},
						mouseleave : "collapseAll",
						"mouseleave .ui-menu" : "collapseAll",
						focus : function (t, e) {
							var i = this.active || this.element.find(this.options.items).eq(0);
							e || this.focus(t, i)
						},
						blur : function (e) {
							this._delay(function () {
								t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
							})
						},
						keydown : "_keydown"
					}),
					this.refresh(),
					this._on(this.document, {
						click : function (t) {
							this._closeOnDocumentClick(t) && this.collapseAll(t),
							this.mouseHandled = !1
						}
					})
				},
				_destroy : function () {
					this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),
					this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
						var e = t(this);
						e.data("ui-menu-submenu-carat") && e.remove()
					}),
					this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
				},
				_keydown : function (e) {
					var i,
					n,
					s,
					r,
					o = !0;
					switch (e.keyCode) {
					case t.ui.keyCode.PAGE_UP:
						this.previousPage(e);
						break;
					case t.ui.keyCode.PAGE_DOWN:
						this.nextPage(e);
						break;
					case t.ui.keyCode.HOME:
						this._move("first", "first", e);
						break;
					case t.ui.keyCode.END:
						this._move("last", "last", e);
						break;
					case t.ui.keyCode.UP:
						this.previous(e);
						break;
					case t.ui.keyCode.DOWN:
						this.next(e);
						break;
					case t.ui.keyCode.LEFT:
						this.collapse(e);
						break;
					case t.ui.keyCode.RIGHT:
						this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
						break;
					case t.ui.keyCode.ENTER:
					case t.ui.keyCode.SPACE:
						this._activate(e);
						break;
					case t.ui.keyCode.ESCAPE:
						this.collapse(e);
						break;
					default:
						o = !1,
						n = this.previousFilter || "",
						s = String.fromCharCode(e.keyCode),
						r = !1,
						clearTimeout(this.filterTimer),
						s === n ? r = !0 : s = n + s,
						i = this._filterMenuItems(s),
						i = r && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i,
						i.length || (s = String.fromCharCode(e.keyCode), i = this._filterMenuItems(s)),
						i.length ? (this.focus(e, i), this.previousFilter = s, this.filterTimer = this._delay(function () {
									delete this.previousFilter
								}, 1e3)) : delete this.previousFilter
					}
					o && e.preventDefault()
				},
				_activate : function (t) {
					this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(t) : this.select(t))
				},
				refresh : function () {
					var e,
					i,
					n = this,
					s = this.options.icons.submenu,
					r = this.element.find(this.options.menus);
					this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length),
					r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
						role : this.options.role,
						"aria-hidden" : "true",
						"aria-expanded" : "false"
					}).each(function () {
						var e = t(this),
						i = e.parent(),
						n = t("<span>").addClass("ui-menu-icon ui-icon " + s).data("ui-menu-submenu-carat", !0);
						i.attr("aria-haspopup", "true").prepend(n),
						e.attr("aria-labelledby", i.attr("id"))
					}),
					e = r.add(this.element),
					i = e.find(this.options.items),
					i.not(".ui-menu-item").each(function () {
						var e = t(this);
						n._isDivider(e) && e.addClass("ui-widget-content ui-menu-divider")
					}),
					i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
						tabIndex : -1,
						role : this._itemRole()
					}),
					i.filter(".ui-state-disabled").attr("aria-disabled", "true"),
					this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
				},
				_itemRole : function () {
					return {
						menu : "menuitem",
						listbox : "option"
					}
					[this.options.role]
				},
				_setOption : function (t, e) {
					"icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu),
					"disabled" === t && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e),
					this._super(t, e)
				},
				focus : function (t, e) {
					var i,
					n;
					this.blur(t, t && "focus" === t.type),
					this._scrollIntoView(e),
					this.active = e.first(),
					n = this.active.addClass("ui-state-focus").removeClass("ui-state-active"),
					this.options.role && this.element.attr("aria-activedescendant", n.attr("id")),
					this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),
					t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
							this._close()
						}, this.delay),
					i = e.children(".ui-menu"),
					i.length && t && /^mouse/.test(t.type) && this._startOpening(i),
					this.activeMenu = e.parent(),
					this._trigger("focus", t, {
						item : e
					})
				},
				_scrollIntoView : function (e) {
					var i,
					n,
					s,
					r,
					o,
					a;
					this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, s = e.offset().top - this.activeMenu.offset().top - i - n, r = this.activeMenu.scrollTop(), o = this.activeMenu.height(), a = e.outerHeight(), 0 > s ? this.activeMenu.scrollTop(r + s) : s + a > o && this.activeMenu.scrollTop(r + s - o + a))
				},
				blur : function (t, e) {
					e || clearTimeout(this.timer),
					this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
							item : this.active
						}))
				},
				_startOpening : function (t) {
					clearTimeout(this.timer),
					"true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
								this._close(),
								this._open(t)
							}, this.delay))
				},
				_open : function (e) {
					var i = t.extend({
							of : this.active
						}, this.options.position);
					clearTimeout(this.timer),
					this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
					e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
				},
				collapseAll : function (e, i) {
					clearTimeout(this.timer),
					this.timer = this._delay(function () {
							var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
							n.length || (n = this.element),
							this._close(n),
							this.blur(e),
							this.activeMenu = n
						}, this.delay)
				},
				_close : function (t) {
					t || (t = this.active ? this.active.parent() : this.element),
					t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
				},
				_closeOnDocumentClick : function (e) {
					return !t(e.target).closest(".ui-menu").length
				},
				_isDivider : function (t) {
					return !/[^\-\u2014\u2013\s]/.test(t.text())
				},
				collapse : function (t) {
					var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
					e && e.length && (this._close(), this.focus(t, e))
				},
				expand : function (t) {
					var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
					e && e.length && (this._open(e.parent()), this._delay(function () {
							this.focus(t, e)
						}))
				},
				next : function (t) {
					this._move("next", "first", t)
				},
				previous : function (t) {
					this._move("prev", "last", t)
				},
				isFirstItem : function () {
					return this.active && !this.active.prevAll(".ui-menu-item").length
				},
				isLastItem : function () {
					return this.active && !this.active.nextAll(".ui-menu-item").length
				},
				_move : function (t, e, i) {
					var n;
					this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)),
					n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[e]()),
					this.focus(i, n)
				},
				nextPage : function (e) {
					var i,
					n,
					s;
					return this.active ? void(this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
									return i = t(this),
									0 > i.offset().top - n - s
								}), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e)
				},
				previousPage : function (e) {
					var i,
					n,
					s;
					return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
									return i = t(this),
									i.offset().top - n + s > 0
								}), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e)
				},
				_hasScroll : function () {
					return this.element.outerHeight() < this.element.prop("scrollHeight")
				},
				select : function (e) {
					this.active = this.active || t(e.target).closest(".ui-menu-item");
					var i = {
						item : this.active
					};
					this.active.has(".ui-menu").length || this.collapseAll(e, !0),
					this._trigger("select", e, i)
				},
				_filterMenuItems : function (e) {
					var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
					n = RegExp("^" + i, "i");
					return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
						return n.test(t.trim(t(this).text()))
					})
				}
			}),
			t.widget("ui.autocomplete", {
				version : "1.11.4",
				defaultElement : "<input>",
				options : {
					appendTo : null,
					autoFocus : !1,
					delay : 300,
					minLength : 1,
					position : {
						my : "left top",
						at : "left bottom",
						collision : "none"
					},
					source : null,
					change : null,
					close : null,
					focus : null,
					open : null,
					response : null,
					search : null,
					select : null
				},
				requestIndex : 0,
				pending : 0,
				_create : function () {
					var e,
					i,
					n,
					s = this.element[0].nodeName.toLowerCase(),
					r = "textarea" === s,
					o = "input" === s;
					this.isMultiLine = r ? !0 : o ? !1 : this.element.prop("isContentEditable"),
					this.valueMethod = this.element[r || o ? "val" : "text"],
					this.isNewMenu = !0,
					this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"),
					this._on(this.element, {
						keydown : function (s) {
							if (this.element.prop("readOnly"))
								return e = !0, n = !0, void(i = !0);
							e = !1,
							n = !1,
							i = !1;
							var r = t.ui.keyCode;
							switch (s.keyCode) {
							case r.PAGE_UP:
								e = !0,
								this._move("previousPage", s);
								break;
							case r.PAGE_DOWN:
								e = !0,
								this._move("nextPage", s);
								break;
							case r.UP:
								e = !0,
								this._keyEvent("previous", s);
								break;
							case r.DOWN:
								e = !0,
								this._keyEvent("next", s);
								break;
							case r.ENTER:
								this.menu.active && (e = !0, s.preventDefault(), this.menu.select(s));
								break;
							case r.TAB:
								this.menu.active && this.menu.select(s);
								break;
							case r.ESCAPE:
								this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(s), s.preventDefault());
								break;
							default:
								i = !0,
								this._searchTimeout(s)
							}
						},
						keypress : function (n) {
							if (e)
								return e = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && n.preventDefault());
							if (!i) {
								var s = t.ui.keyCode;
								switch (n.keyCode) {
								case s.PAGE_UP:
									this._move("previousPage", n);
									break;
								case s.PAGE_DOWN:
									this._move("nextPage", n);
									break;
								case s.UP:
									this._keyEvent("previous", n);
									break;
								case s.DOWN:
									this._keyEvent("next", n)
								}
							}
						},
						input : function (t) {
							return n ? (n = !1, void t.preventDefault()) : void this._searchTimeout(t)
						},
						focus : function () {
							this.selectedItem = null,
							this.previous = this._value()
						},
						blur : function (t) {
							return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
						}
					}),
					this._initSource(),
					this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
							role : null
						}).hide().menu("instance"),
					this._on(this.menu.element, {
						mousedown : function (e) {
							e.preventDefault(),
							this.cancelBlur = !0,
							this._delay(function () {
								delete this.cancelBlur
							});
							var i = this.menu.element[0];
							t(e.target).closest(".ui-menu-item").length || this._delay(function () {
								var e = this;
								this.document.one("mousedown", function (n) {
									n.target === e.element[0] || n.target === i || t.contains(i, n.target) || e.close()
								})
							})
						},
						menufocus : function (e, i) {
							var n,
							s;
							return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function () {
									t(e.target).trigger(e.originalEvent)
								})) : (s = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
									item : s
								}) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value), n = i.item.attr("aria-label") || s.value, void(n && t.trim(n).length && (this.liveRegion.children().hide(), t("<div>").text(n).appendTo(this.liveRegion))))
						},
						menuselect : function (t, e) {
							var i = e.item.data("ui-autocomplete-item"),
							n = this.previous;
							this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = n, this._delay(function () {
									this.previous = n,
									this.selectedItem = i
								})),
							!1 !== this._trigger("select", t, {
								item : i
							}) && this._value(i.value),
							this.term = this._value(),
							this.close(t),
							this.selectedItem = i
						}
					}),
					this.liveRegion = t("<span>", {
							role : "status",
							"aria-live" : "assertive",
							"aria-relevant" : "additions"
						}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),
					this._on(this.window, {
						beforeunload : function () {
							this.element.removeAttr("autocomplete")
						}
					})
				},
				_destroy : function () {
					clearTimeout(this.searching),
					this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),
					this.menu.element.remove(),
					this.liveRegion.remove()
				},
				_setOption : function (t, e) {
					this._super(t, e),
					"source" === t && this._initSource(),
					"appendTo" === t && this.menu.element.appendTo(this._appendTo()),
					"disabled" === t && e && this.xhr && this.xhr.abort()
				},
				_appendTo : function () {
					var e = this.options.appendTo;
					return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
					e && e[0] || (e = this.element.closest(".ui-front")),
					e.length || (e = this.document[0].body),
					e
				},
				_initSource : function () {
					var e,
					i,
					n = this;
					t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, n) {
						n(t.ui.autocomplete.filter(e, i.term))
					}) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, s) {
						n.xhr && n.xhr.abort(),
						n.xhr = t.ajax({
								url : i,
								data : e,
								dataType : "json",
								success : function (t) {
									s(t)
								},
								error : function () {
									s([])
								}
							})
					}) : this.source = this.options.source
				},
				_searchTimeout : function (t) {
					clearTimeout(this.searching),
					this.searching = this._delay(function () {
							var e = this.term === this._value(),
							i = this.menu.element.is(":visible"),
							n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
							(!e || e && !i && !n) && (this.selectedItem = null, this.search(null, t))
						}, this.options.delay)
				},
				search : function (t, e) {
					return t = null != t ? t : this._value(),
					this.term = this._value(),
					t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
				},
				_search : function (t) {
					this.pending++,
					this.element.addClass("ui-autocomplete-loading"),
					this.cancelSearch = !1,
					this.source({
						term : t
					}, this._response())
				},
				_response : function () {
					var e = ++this.requestIndex;
					return t.proxy(function (t) {
						e === this.requestIndex && this.__response(t),
						this.pending--,
						this.pending || this.element.removeClass("ui-autocomplete-loading")
					}, this)
				},
				__response : function (t) {
					t && (t = this._normalize(t)),
					this._trigger("response", null, {
						content : t
					}),
					!this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
				},
				close : function (t) {
					this.cancelSearch = !0,
					this._close(t)
				},
				_close : function (t) {
					this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
				},
				_change : function (t) {
					this.previous !== this._value() && this._trigger("change", t, {
						item : this.selectedItem
					})
				},
				_normalize : function (e) {
					return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) {
						return "string" == typeof e ? {
							label : e,
							value : e
						}
						 : t.extend({}, e, {
							label : e.label || e.value,
							value : e.value || e.label
						})
					})
				},
				_suggest : function (e) {
					var i = this.menu.element.empty();
					this._renderMenu(i, e),
					this.isNewMenu = !0,
					this.menu.refresh(),
					i.show(),
					this._resizeMenu(),
					i.position(t.extend({
							of : this.element
						}, this.options.position)),
					this.options.autoFocus && this.menu.next()
				},
				_resizeMenu : function () {
					var t = this.menu.element;
					t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
				},
				_renderMenu : function (e, i) {
					var n = this;
					t.each(i, function (t, i) {
						n._renderItemData(e, i)
					})
				},
				_renderItemData : function (t, e) {
					return this._renderItem(t, e).data("ui-autocomplete-item", e)
				},
				_renderItem : function (e, i) {
					return t("<li>").text(i.label).appendTo(e)
				},
				_move : function (t, e) {
					return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
				},
				widget : function () {
					return this.menu.element
				},
				_value : function () {
					return this.valueMethod.apply(this.element, arguments)
				},
				_keyEvent : function (t, e) {
					(!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
				}
			}),
			t.extend(t.ui.autocomplete, {
				escapeRegex : function (t) {
					return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
				},
				filter : function (e, i) {
					var n = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
					return t.grep(e, function (t) {
						return n.test(t.label || t.value || t)
					})
				}
			}),
			t.widget("ui.autocomplete", t.ui.autocomplete, {
				options : {
					messages : {
						noResults : "No search results.",
						results : function (t) {
							return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
						}
					}
				},
				__response : function (e) {
					var i;
					this._superApply(arguments),
					this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
				}
			}),
			t.ui.autocomplete;
			var d,
			f = "ui-button ui-widget ui-state-default ui-corner-all",
			p = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
			g = function () {
				var e = t(this);
				setTimeout(function () {
					e.find(":ui-button").button("refresh")
				}, 1)
			},
			m = function (e) {
				var i = e.name,
				n = e.form,
				s = t([]);
				return i && (i = i.replace(/'/g, "\\'"), s = n ? t(n).find("[name='" + i + "'][type=radio]") : t("[name='" + i + "'][type=radio]", e.ownerDocument).filter(function () {
							return !this.form
						})),
				s
			};
			t.widget("ui.button", {
				version : "1.11.4",
				defaultElement : "<button>",
				options : {
					disabled : null,
					text : !0,
					label : null,
					icons : {
						primary : null,
						secondary : null
					}
				},
				_create : function () {
					this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, g),
					"boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled),
					this._determineButtonType(),
					this.hasTitle = !!this.buttonElement.attr("title");
					var e = this,
					i = this.options,
					n = "checkbox" === this.type || "radio" === this.type,
					s = n ? "" : "ui-state-active";
					null === i.label && (i.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()),
					this._hoverable(this.buttonElement),
					this.buttonElement.addClass(f).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
						i.disabled || this === d && t(this).addClass("ui-state-active")
					}).bind("mouseleave" + this.eventNamespace, function () {
						i.disabled || t(this).removeClass(s)
					}).bind("click" + this.eventNamespace, function (t) {
						i.disabled && (t.preventDefault(), t.stopImmediatePropagation())
					}),
					this._on({
						focus : function () {
							this.buttonElement.addClass("ui-state-focus")
						},
						blur : function () {
							this.buttonElement.removeClass("ui-state-focus")
						}
					}),
					n && this.element.bind("change" + this.eventNamespace, function () {
						e.refresh()
					}),
					"checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
						return i.disabled ? !1 : void 0
					}) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
						if (i.disabled)
							return !1;
						t(this).addClass("ui-state-active"),
						e.buttonElement.attr("aria-pressed", "true");
						var n = e.element[0];
						m(n).not(n).map(function () {
							return t(this).button("widget")[0]
						}).removeClass("ui-state-active").attr("aria-pressed", "false")
					}) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
							return i.disabled ? !1 : (t(this).addClass("ui-state-active"), d = this, void e.document.one("mouseup", function () {
									d = null
								}))
						}).bind("mouseup" + this.eventNamespace, function () {
							return i.disabled ? !1 : void t(this).removeClass("ui-state-active")
						}).bind("keydown" + this.eventNamespace, function (e) {
							return i.disabled ? !1 : void((e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active"))
						}).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
							t(this).removeClass("ui-state-active")
						}), this.buttonElement.is("a") && this.buttonElement.keyup(function (e) {
							e.keyCode === t.ui.keyCode.SPACE && t(this).click()
						})),
					this._setOption("disabled", i.disabled),
					this._resetButton()
				},
				_determineButtonType : function () {
					var t,
					e,
					i;
					this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button",
					"checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
				},
				widget : function () {
					return this.buttonElement
				},
				_destroy : function () {
					this.element.removeClass("ui-helper-hidden-accessible"),
					this.buttonElement.removeClass(f + " ui-state-active " + p).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),
					this.hasTitle || this.buttonElement.removeAttr("title")
				},
				_setOption : function (t, e) {
					return this._super(t, e),
					"disabled" === t ? (this.widget().toggleClass("ui-state-disabled", !!e), this.element.prop("disabled", !!e), void(e && this.buttonElement.removeClass("checkbox" === this.type || "radio" === this.type ? "ui-state-focus" : "ui-state-focus ui-state-active"))) : void this._resetButton()
				},
				refresh : function () {
					var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
					e !== this.options.disabled && this._setOption("disabled", e),
					"radio" === this.type ? m(this.element[0]).each(function () {
						t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
					}) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
				},
				_resetButton : function () {
					if ("input" === this.type)
						return void(this.options.label && this.element.val(this.options.label));
					var e = this.buttonElement.removeClass(p),
					i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
					n = this.options.icons,
					s = n.primary && n.secondary,
					r = [];
					n.primary || n.secondary ? (this.options.text && r.push("ui-button-text-icon" + (s ? "s" : n.primary ? "-primary" : "-secondary")), n.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + n.primary + "'></span>"), n.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + n.secondary + "'></span>"), this.options.text || (r.push(s ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", t.trim(i)))) : r.push("ui-button-text-only"),
					e.addClass(r.join(" "))
				}
			}),
			t.widget("ui.buttonset", {
				version : "1.11.4",
				options : {
					items : "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
				},
				_create : function () {
					this.element.addClass("ui-buttonset")
				},
				_init : function () {
					this.refresh()
				},
				_setOption : function (t, e) {
					"disabled" === t && this.buttons.button("option", t, e),
					this._super(t, e)
				},
				refresh : function () {
					var e = "rtl" === this.element.css("direction"),
					i = this.element.find(this.options.items),
					n = i.filter(":ui-button");
					i.not(":ui-button").button(),
					n.button("refresh"),
					this.buttons = i.map(function () {
							return t(this).button("widget")[0]
						}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
				},
				_destroy : function () {
					this.element.removeClass("ui-buttonset"),
					this.buttons.map(function () {
						return t(this).button("widget")[0]
					}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
				}
			}),
			t.ui.button,
			t.extend(t.ui, {
				datepicker : {
					version : "1.11.4"
				}
			});
			var v;
			t.extend(s.prototype, {
				markerClassName : "hasDatepicker",
				maxRows : 4,
				_widgetDatepicker : function () {
					return this.dpDiv
				},
				setDefaults : function (t) {
					return a(this._defaults, t || {}),
					this
				},
				_attachDatepicker : function (e, i) {
					var n,
					s,
					r;
					n = e.nodeName.toLowerCase(),
					s = "div" === n || "span" === n,
					e.id || (this.uuid += 1, e.id = "dp" + this.uuid),
					r = this._newInst(t(e), s),
					r.settings = t.extend({}, i || {}),
					"input" === n ? this._connectDatepicker(e, r) : s && this._inlineDatepicker(e, r)
				},
				_newInst : function (e, i) {
					var n = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
					return {
						id : n,
						input : e,
						selectedDay : 0,
						selectedMonth : 0,
						selectedYear : 0,
						drawMonth : 0,
						drawYear : 0,
						inline : i,
						dpDiv : i ? r(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
					}
				},
				_connectDatepicker : function (e, i) {
					var n = t(e);
					i.append = t([]),
					i.trigger = t([]),
					n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
				},
				_attachments : function (e, i) {
					var n,
					s,
					r,
					o = this._get(i, "appendText"),
					a = this._get(i, "isRTL");
					i.append && i.append.remove(),
					o && (i.append = t("<span class='" + this._appendClass + "'>" + o + "</span>"), e[a ? "before" : "after"](i.append)),
					e.unbind("focus", this._showDatepicker),
					i.trigger && i.trigger.remove(),
					n = this._get(i, "showOn"),
					("focus" === n || "both" === n) && e.focus(this._showDatepicker),
					("button" === n || "both" === n) && (s = this._get(i, "buttonText"), r = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
									src : r,
									alt : s,
									title : s
								}) : t("<button type='button'></button>").addClass(this._triggerClass).html(r ? t("<img/>").attr({
										src : r,
										alt : s,
										title : s
									}) : s)), e[a ? "before" : "after"](i.trigger), i.trigger.click(function () {
							return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]),
							!1
						}))
				},
				_autoSize : function (t) {
					if (this._get(t, "autoSize") && !t.inline) {
						var e,
						i,
						n,
						s,
						r = new Date(2009, 11, 20),
						o = this._get(t, "dateFormat");
						o.match(/[DM]/) && (e = function (t) {
							for (i = 0, n = 0, s = 0; t.length > s; s++)
								t[s].length > i && (i = t[s].length, n = s);
							return n
						}, r.setMonth(e(this._get(t, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), r.setDate(e(this._get(t, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - r.getDay())),
						t.input.attr("size", this._formatDate(t, r).length)
					}
				},
				_inlineDatepicker : function (e, i) {
					var n = t(e);
					n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
				},
				_dialogDatepicker : function (e, i, n, s, r) {
					var o,
					l,
					h,
					u,
					c,
					d = this._dialogInst;
					return d || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)),
					a(d.settings, s || {}),
					i = i && i.constructor === Date ? this._formatDate(d, i) : i,
					this._dialogInput.val(i),
					this._pos = r ? r.length ? r : [r.pageX, r.pageY] : null,
					this._pos || (l = document.documentElement.clientWidth, h = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, c = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + u, h / 2 - 150 + c]),
					this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
					d.settings.onSelect = n,
					this._inDialog = !0,
					this.dpDiv.addClass(this._dialogClass),
					this._showDatepicker(this._dialogInput[0]),
					t.blockUI && t.blockUI(this.dpDiv),
					t.data(this._dialogInput[0], "datepicker", d),
					this
				},
				_destroyDatepicker : function (e) {
					var i,
					n = t(e),
					s = t.data(e, "datepicker");
					n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (s.append.remove(), s.trigger.remove(), n.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && n.removeClass(this.markerClassName).empty(), v === s && (v = null))
				},
				_enableDatepicker : function (e) {
					var i,
					n,
					s = t(e),
					r = t.data(e, "datepicker");
					s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, r.trigger.filter("button").each(function () {
								this.disabled = !1
							}).end().filter("img").css({
								opacity : "1.0",
								cursor : ""
							})) : ("div" === i || "span" === i) && (n = s.children("." + this._inlineClass), n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
								return t === e ? null : t
							}))
				},
				_disableDatepicker : function (e) {
					var i,
					n,
					s = t(e),
					r = t.data(e, "datepicker");
					s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, r.trigger.filter("button").each(function () {
								this.disabled = !0
							}).end().filter("img").css({
								opacity : "0.5",
								cursor : "default"
							})) : ("div" === i || "span" === i) && (n = s.children("." + this._inlineClass), n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
								return t === e ? null : t
							}), this._disabledInputs[this._disabledInputs.length] = e)
				},
				_isDisabledDatepicker : function (t) {
					if (!t)
						return !1;
					for (var e = 0; this._disabledInputs.length > e; e++)
						if (this._disabledInputs[e] === t)
							return !0;
					return !1
				},
				_getInst : function (e) {
					try {
						return t.data(e, "datepicker")
					} catch (i) {
						throw "Missing instance data for this datepicker"
					}
				},
				_optionDatepicker : function (e, i, n) {
					var s,
					r,
					o,
					l,
					h = this._getInst(e);
					return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : h ? "all" === i ? t.extend({}, h.settings) : this._get(h, i) : null : (s = i || {}, "string" == typeof i && (s = {}, s[i] = n), void(h && (this._curInst === h && this._hideDatepicker(), r = this._getDateDatepicker(e, !0), o = this._getMinMaxDate(h, "min"), l = this._getMinMaxDate(h, "max"), a(h.settings, s), null !== o && void 0 !== s.dateFormat && void 0 === s.minDate && (h.settings.minDate = this._formatDate(h, o)), null !== l && void 0 !== s.dateFormat && void 0 === s.maxDate && (h.settings.maxDate = this._formatDate(h, l)), "disabled" in s && (s.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), h), this._autoSize(h), this._setDate(h, r), this._updateAlternate(h), this._updateDatepicker(h))))
				},
				_changeDatepicker : function (t, e, i) {
					this._optionDatepicker(t, e, i)
				},
				_refreshDatepicker : function (t) {
					var e = this._getInst(t);
					e && this._updateDatepicker(e)
				},
				_setDateDatepicker : function (t, e) {
					var i = this._getInst(t);
					i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
				},
				_getDateDatepicker : function (t, e) {
					var i = this._getInst(t);
					return i && !i.inline && this._setDateFromField(i, e),
					i ? this._getDate(i) : null
				},
				_doKeyDown : function (e) {
					var i,
					n,
					s,
					r = t.datepicker._getInst(e.target),
					o = !0,
					a = r.dpDiv.is(".ui-datepicker-rtl");
					if (r._keyEvent = !0, t.datepicker._datepickerShowing)
						switch (e.keyCode) {
						case 9:
							t.datepicker._hideDatepicker(),
							o = !1;
							break;
						case 13:
							return s = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", r.dpDiv),
							s[0] && t.datepicker._selectDay(e.target, r.selectedMonth, r.selectedYear, s[0]),
							i = t.datepicker._get(r, "onSelect"),
							i ? (n = t.datepicker._formatDate(r), i.apply(r.input ? r.input[0] : null, [n, r])) : t.datepicker._hideDatepicker(),
							!1;
						case 27:
							t.datepicker._hideDatepicker();
							break;
						case 33:
							t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(r, "stepBigMonths") : -t.datepicker._get(r, "stepMonths"), "M");
							break;
						case 34:
							t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(r, "stepBigMonths") : +t.datepicker._get(r, "stepMonths"), "M");
							break;
						case 35:
							(e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target),
							o = e.ctrlKey || e.metaKey;
							break;
						case 36:
							(e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target),
							o = e.ctrlKey || e.metaKey;
							break;
						case 37:
							(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? 1 : -1, "D"),
							o = e.ctrlKey || e.metaKey,
							e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(r, "stepBigMonths") : -t.datepicker._get(r, "stepMonths"), "M");
							break;
						case 38:
							(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"),
							o = e.ctrlKey || e.metaKey;
							break;
						case 39:
							(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? -1 : 1, "D"),
							o = e.ctrlKey || e.metaKey,
							e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(r, "stepBigMonths") : +t.datepicker._get(r, "stepMonths"), "M");
							break;
						case 40:
							(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"),
							o = e.ctrlKey || e.metaKey;
							break;
						default:
							o = !1
						}
					else
						36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : o = !1;
					o && (e.preventDefault(), e.stopPropagation())
				},
				_doKeyPress : function (e) {
					var i,
					n,
					s = t.datepicker._getInst(e.target);
					return t.datepicker._get(s, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(s, "dateFormat")), n = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1) : void 0
				},
				_doKeyUp : function (e) {
					var i,
					n = t.datepicker._getInst(e.target);
					if (n.input.val() !== n.lastVal)
						try {
							i = t.datepicker.parseDate(t.datepicker._get(n, "dateFormat"), n.input ? n.input.val() : null, t.datepicker._getFormatConfig(n)),
							i && (t.datepicker._setDateFromField(n), t.datepicker._updateAlternate(n), t.datepicker._updateDatepicker(n))
						} catch (s) {}

					return !0
				},
				_showDatepicker : function (e) {
					if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
						var i,
						s,
						r,
						o,
						l,
						h,
						u;
						i = t.datepicker._getInst(e),
						t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),
						s = t.datepicker._get(i, "beforeShow"),
						r = s ? s.apply(e, [e, i]) : {},
						r !== !1 && (a(i.settings, r), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), o = !1, t(e).parents().each(function () {
								return o |= "fixed" === t(this).css("position"),
								!o
							}), l = {
								left : t.datepicker._pos[0],
								top : t.datepicker._pos[1]
							}, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
								position : "absolute",
								display : "block",
								top : "-1000px"
							}), t.datepicker._updateDatepicker(i), l = t.datepicker._checkOffset(i, l, o), i.dpDiv.css({
								position : t.datepicker._inDialog && t.blockUI ? "static" : o ? "fixed" : "absolute",
								display : "none",
								left : l.left + "px",
								top : l.top + "px"
							}), i.inline || (h = t.datepicker._get(i, "showAnim"), u = t.datepicker._get(i, "duration"), i.dpDiv.css("z-index", n(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[h] ? i.dpDiv.show(h, t.datepicker._get(i, "showOptions"), u) : i.dpDiv[h || "show"](h ? u : null), t.datepicker._shouldFocusInput(i) && i.input.focus(), t.datepicker._curInst = i))
					}
				},
				_updateDatepicker : function (e) {
					this.maxRows = 4,
					v = e,
					e.dpDiv.empty().append(this._generateHTML(e)),
					this._attachHandlers(e);
					var i,
					n = this._getNumberOfMonths(e),
					s = n[1],
					r = 17,
					a = e.dpDiv.find("." + this._dayOverClass + " a");
					a.length > 0 && o.apply(a.get(0)),
					e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
					s > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", r * s + "em"),
					e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"),
					e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"),
					e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(),
					e.yearshtml && (i = e.yearshtml, setTimeout(function () {
							i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),
							i = e.yearshtml = null
						}, 0))
				},
				_shouldFocusInput : function (t) {
					return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
				},
				_checkOffset : function (e, i, n) {
					var s = e.dpDiv.outerWidth(),
					r = e.dpDiv.outerHeight(),
					o = e.input ? e.input.outerWidth() : 0,
					a = e.input ? e.input.outerHeight() : 0,
					l = document.documentElement.clientWidth + (n ? 0 : t(document).scrollLeft()),
					h = document.documentElement.clientHeight + (n ? 0 : t(document).scrollTop());
					return i.left -= this._get(e, "isRTL") ? s - o : 0,
					i.left -= n && i.left === e.input.offset().left ? t(document).scrollLeft() : 0,
					i.top -= n && i.top === e.input.offset().top + a ? t(document).scrollTop() : 0,
					i.left -= Math.min(i.left, i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0),
					i.top -= Math.min(i.top, i.top + r > h && h > r ? Math.abs(r + a) : 0),
					i
				},
				_findPos : function (e) {
					for (var i, n = this._getInst(e), s = this._get(n, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e)); )
						e = e[s ? "previousSibling" : "nextSibling"];
					return i = t(e).offset(),
					[i.left, i.top]
				},
				_hideDatepicker : function (e) {
					var i,
					n,
					s,
					r,
					o = this._curInst;
					!o || e && o !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(o, "showAnim"), n = this._get(o, "duration"), s = function () {
						t.datepicker._tidyDialog(o)
					}, t.effects && (t.effects.effect[i] || t.effects[i]) ? o.dpDiv.hide(i, t.datepicker._get(o, "showOptions"), n, s) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, s), i || s(), this._datepickerShowing = !1, r = this._get(o, "onClose"), r && r.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
								position : "absolute",
								left : "0",
								top : "-100px"
							}), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
				},
				_tidyDialog : function (t) {
					t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
				},
				_checkExternalClick : function (e) {
					if (t.datepicker._curInst) {
						var i = t(e.target),
						n = t.datepicker._getInst(i[0]);
						(i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== n) && t.datepicker._hideDatepicker()
					}
				},
				_adjustDate : function (e, i, n) {
					var s = t(e),
					r = this._getInst(s[0]);
					this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(r, i + ("M" === n ? this._get(r, "showCurrentAtPos") : 0), n), this._updateDatepicker(r))
				},
				_gotoToday : function (e) {
					var i,
					n = t(e),
					s = this._getInst(n[0]);
					this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()),
					this._notifyChange(s),
					this._adjustDate(n)
				},
				_selectMonthYear : function (e, i, n) {
					var s = t(e),
					r = this._getInst(s[0]);
					r["selected" + ("M" === n ? "Month" : "Year")] = r["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10),
					this._notifyChange(r),
					this._adjustDate(s)
				},
				_selectDay : function (e, i, n, s) {
					var r,
					o = t(e);
					t(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (r = this._getInst(o[0]), r.selectedDay = r.currentDay = t("a", s).html(), r.selectedMonth = r.currentMonth = i, r.selectedYear = r.currentYear = n, this._selectDate(e, this._formatDate(r, r.currentDay, r.currentMonth, r.currentYear)))
				},
				_clearDate : function (e) {
					var i = t(e);
					this._selectDate(i, "")
				},
				_selectDate : function (e, i) {
					var n,
					s = t(e),
					r = this._getInst(s[0]);
					i = null != i ? i : this._formatDate(r),
					r.input && r.input.val(i),
					this._updateAlternate(r),
					n = this._get(r, "onSelect"),
					n ? n.apply(r.input ? r.input[0] : null, [i, r]) : r.input && r.input.trigger("change"),
					r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], "object" != typeof r.input[0] && r.input.focus(), this._lastInput = null)
				},
				_updateAlternate : function (e) {
					var i,
					n,
					s,
					r = this._get(e, "altField");
					r && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), s = this.formatDate(i, n, this._getFormatConfig(e)), t(r).each(function () {
							t(this).val(s)
						}))
				},
				noWeekends : function (t) {
					var e = t.getDay();
					return [e > 0 && 6 > e, ""]
				},
				iso8601Week : function (t) {
					var e,
					i = new Date(t.getTime());
					return i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
					e = i.getTime(),
					i.setMonth(0),
					i.setDate(1),
					Math.floor(Math.round((e - i) / 864e5) / 7) + 1
				},
				parseDate : function (e, i, n) {
					if (null == e || null == i)
						throw "Invalid arguments";
					if (i = "object" == typeof i ? "" + i : i + "", "" === i)
						return null;
					var s,
					r,
					o,
					a,
					l = 0,
					h = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
					u = "string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10),
					c = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
					d = (n ? n.dayNames : null) || this._defaults.dayNames,
					f = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
					p = (n ? n.monthNames : null) || this._defaults.monthNames,
					g = -1,
					m = -1,
					v = -1,
					b = -1,
					y = !1,
					_ = function (t) {
						var i = e.length > s + 1 && e.charAt(s + 1) === t;
						return i && s++,
						i
					},
					w = function (t) {
						var e = _(t),
						n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
						s = "y" === t ? n : 1,
						r = RegExp("^\\d{" + s + "," + n + "}"),
						o = i.substring(l).match(r);
						if (!o)
							throw "Missing number at position " + l;
						return l += o[0].length,
						parseInt(o[0], 10)
					},
					x = function (e, n, s) {
						var r = -1,
						o = t.map(_(e) ? s : n, function (t, e) {
								return [[e, t]]
							}).sort(function (t, e) {
								return  - (t[1].length - e[1].length)
							});
						if (t.each(o, function (t, e) {
								var n = e[1];
								return i.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (r = e[0], l += n.length, !1) : void 0
							}), -1 !== r)
							return r + 1;
						throw "Unknown name at position " + l
					},
					k = function () {
						if (i.charAt(l) !== e.charAt(s))
							throw "Unexpected literal at position " + l;
						l++
					};
					for (s = 0; e.length > s; s++)
						if (y)
							"'" !== e.charAt(s) || _("'") ? k() : y = !1;
						else
							switch (e.charAt(s)) {
							case "d":
								v = w("d");
								break;
							case "D":
								x("D", c, d);
								break;
							case "o":
								b = w("o");
								break;
							case "m":
								m = w("m");
								break;
							case "M":
								m = x("M", f, p);
								break;
							case "y":
								g = w("y");
								break;
							case "@":
								a = new Date(w("@")),
								g = a.getFullYear(),
								m = a.getMonth() + 1,
								v = a.getDate();
								break;
							case "!":
								a = new Date((w("!") - this._ticksTo1970) / 1e4),
								g = a.getFullYear(),
								m = a.getMonth() + 1,
								v = a.getDate();
								break;
							case "'":
								_("'") ? k() : y = !0;
								break;
							default:
								k()
							}
					if (i.length > l && (o = i.substr(l), !/^\s+/.test(o)))
						throw "Extra/unparsed characters found in date: " + o;
					if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= g ? 0 : -100)), b > -1)
						for (m = 1, v = b; r = this._getDaysInMonth(g, m - 1), !(r >= v); )
							m++, v -= r;
					if (a = this._daylightSavingAdjust(new Date(g, m - 1, v)), a.getFullYear() !== g || a.getMonth() + 1 !== m || a.getDate() !== v)
						throw "Invalid date";
					return a
				},
				ATOM : "yy-mm-dd",
				COOKIE : "D, dd M yy",
				ISO_8601 : "yy-mm-dd",
				RFC_822 : "D, d M y",
				RFC_850 : "DD, dd-M-y",
				RFC_1036 : "D, d M y",
				RFC_1123 : "D, d M yy",
				RFC_2822 : "D, d M yy",
				RSS : "D, d M y",
				TICKS : "!",
				TIMESTAMP : "@",
				W3C : "yy-mm-dd",
				_ticksTo1970 : 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
				formatDate : function (t, e, i) {
					if (!e)
						return "";
					var n,
					s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
					r = (i ? i.dayNames : null) || this._defaults.dayNames,
					o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
					a = (i ? i.monthNames : null) || this._defaults.monthNames,
					l = function (e) {
						var i = t.length > n + 1 && t.charAt(n + 1) === e;
						return i && n++,
						i
					},
					h = function (t, e, i) {
						var n = "" + e;
						if (l(t))
							for (; i > n.length; )
								n = "0" + n;
						return n
					},
					u = function (t, e, i, n) {
						return l(t) ? n[e] : i[e]
					},
					c = "",
					d = !1;
					if (e)
						for (n = 0; t.length > n; n++)
							if (d)
								"'" !== t.charAt(n) || l("'") ? c += t.charAt(n) : d = !1;
							else
								switch (t.charAt(n)) {
								case "d":
									c += h("d", e.getDate(), 2);
									break;
								case "D":
									c += u("D", e.getDay(), s, r);
									break;
								case "o":
									c += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
									break;
								case "m":
									c += h("m", e.getMonth() + 1, 2);
									break;
								case "M":
									c += u("M", e.getMonth(), o, a);
									break;
								case "y":
									c += l("y") ? e.getFullYear() : (10 > e.getYear() % 100 ? "0" : "") + e.getYear() % 100;
									break;
								case "@":
									c += e.getTime();
									break;
								case "!":
									c += 1e4 * e.getTime() + this._ticksTo1970;
									break;
								case "'":
									l("'") ? c += "'" : d = !0;
									break;
								default:
									c += t.charAt(n)
								}
					return c
				},
				_possibleChars : function (t) {
					var e,
					i = "",
					n = !1,
					s = function (i) {
						var n = t.length > e + 1 && t.charAt(e + 1) === i;
						return n && e++,
						n
					};
					for (e = 0; t.length > e; e++)
						if (n)
							"'" !== t.charAt(e) || s("'") ? i += t.charAt(e) : n = !1;
						else
							switch (t.charAt(e)) {
							case "d":
							case "m":
							case "y":
							case "@":
								i += "0123456789";
								break;
							case "D":
							case "M":
								return null;
							case "'":
								s("'") ? i += "'" : n = !0;
								break;
							default:
								i += t.charAt(e)
							}
					return i
				},
				_get : function (t, e) {
					return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
				},
				_setDateFromField : function (t, e) {
					if (t.input.val() !== t.lastVal) {
						var i = this._get(t, "dateFormat"),
						n = t.lastVal = t.input ? t.input.val() : null,
						s = this._getDefaultDate(t),
						r = s,
						o = this._getFormatConfig(t);
						try {
							r = this.parseDate(i, n, o) || s
						} catch (a) {
							n = e ? "" : n
						}
						t.selectedDay = r.getDate(),
						t.drawMonth = t.selectedMonth = r.getMonth(),
						t.drawYear = t.selectedYear = r.getFullYear(),
						t.currentDay = n ? r.getDate() : 0,
						t.currentMonth = n ? r.getMonth() : 0,
						t.currentYear = n ? r.getFullYear() : 0,
						this._adjustInstDate(t)
					}
				},
				_getDefaultDate : function (t) {
					return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
				},
				_determineDate : function (e, i, n) {
					var s = function (t) {
						var e = new Date;
						return e.setDate(e.getDate() + t),
						e
					},
					r = function (i) {
						try {
							return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
						} catch (n) {}

						for (var s = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, r = s.getFullYear(), o = s.getMonth(), a = s.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, h = l.exec(i); h; ) {
							switch (h[2] || "d") {
							case "d":
							case "D":
								a += parseInt(h[1], 10);
								break;
							case "w":
							case "W":
								a += 7 * parseInt(h[1], 10);
								break;
							case "m":
							case "M":
								o += parseInt(h[1], 10),
								a = Math.min(a, t.datepicker._getDaysInMonth(r, o));
								break;
							case "y":
							case "Y":
								r += parseInt(h[1], 10),
								a = Math.min(a, t.datepicker._getDaysInMonth(r, o))
							}
							h = l.exec(i)
						}
						return new Date(r, o, a)
					},
					o = null == i || "" === i ? n : "string" == typeof i ? r(i) : "number" == typeof i ? isNaN(i) ? n : s(i) : new Date(i.getTime());
					return o = o && "Invalid Date" == "" + o ? n : o,
					o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)),
					this._daylightSavingAdjust(o)
				},
				_daylightSavingAdjust : function (t) {
					return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
				},
				_setDate : function (t, e, i) {
					var n = !e,
					s = t.selectedMonth,
					r = t.selectedYear,
					o = this._restrictMinMax(t, this._determineDate(t, e, new Date));
					t.selectedDay = t.currentDay = o.getDate(),
					t.drawMonth = t.selectedMonth = t.currentMonth = o.getMonth(),
					t.drawYear = t.selectedYear = t.currentYear = o.getFullYear(),
					s === t.selectedMonth && r === t.selectedYear || i || this._notifyChange(t),
					this._adjustInstDate(t),
					t.input && t.input.val(n ? "" : this._formatDate(t))
				},
				_getDate : function (t) {
					var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
					return e
				},
				_attachHandlers : function (e) {
					var i = this._get(e, "stepMonths"),
					n = "#" + e.id.replace(/\\\\/g, "\\");
					e.dpDiv.find("[data-handler]").map(function () {
						var e = {
							prev : function () {
								t.datepicker._adjustDate(n, -i, "M")
							},
							next : function () {
								t.datepicker._adjustDate(n, +i, "M")
							},
							hide : function () {
								t.datepicker._hideDatepicker()
							},
							today : function () {
								t.datepicker._gotoToday(n)
							},
							selectDay : function () {
								return t.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this),
								!1
							},
							selectMonth : function () {
								return t.datepicker._selectMonthYear(n, this, "M"),
								!1
							},
							selectYear : function () {
								return t.datepicker._selectMonthYear(n, this, "Y"),
								!1
							}
						};
						t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
					})
				},
				_generateHTML : function (t) {
					var e,
					i,
					n,
					s,
					r,
					o,
					a,
					l,
					h,
					u,
					c,
					d,
					f,
					p,
					g,
					m,
					v,
					b,
					y,
					_,
					w,
					x,
					k,
					C,
					E,
					T,
					S,
					I,
					D,
					A,
					M,
					N,
					O,
					P,
					z,
					R,
					H,
					L,
					j,
					B = new Date,
					F = this._daylightSavingAdjust(new Date(B.getFullYear(), B.getMonth(), B.getDate())),
					W = this._get(t, "isRTL"),
					$ = this._get(t, "showButtonPanel"),
					V = this._get(t, "hideIfNoPrevNext"),
					q = this._get(t, "navigationAsDateFormat"),
					U = this._getNumberOfMonths(t),
					Y = this._get(t, "showCurrentAtPos"),
					K = this._get(t, "stepMonths"),
					X = 1 !== U[0] || 1 !== U[1],
					Z = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
					G = this._getMinMaxDate(t, "min"),
					J = this._getMinMaxDate(t, "max"),
					Q = t.drawMonth - Y,
					tt = t.drawYear;
					if (0 > Q && (Q += 12, tt--), J)
						for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), e = G && G > e ? G : e; this._daylightSavingAdjust(new Date(tt, Q, 1)) > e; )
							Q--, 0 > Q && (Q = 11, tt--);
					for (t.drawMonth = Q, t.drawYear = tt, i = this._get(t, "prevText"), i = q ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, Q - K, 1)), this._getFormatConfig(t)) : i, n = this._canAdjustMonth(t, -1, tt, Q) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "e" : "w") + "'>" + i + "</span></a>" : V ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(t, "nextText"), s = q ? this.formatDate(s, this._daylightSavingAdjust(new Date(tt, Q + K, 1)), this._getFormatConfig(t)) : s, r = this._canAdjustMonth(t, 1, tt, Q) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "w" : "e") + "'>" + s + "</span></a>" : V ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "w" : "e") + "'>" + s + "</span></a>", o = this._get(t, "currentText"), a = this._get(t, "gotoCurrent") && t.currentDay ? Z : F, o = q ? this.formatDate(o, a, this._getFormatConfig(t)) : o, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", h = $ ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (W ? l : "") + (this._isInRange(t, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (W ? "" : l) + "</div>" : "", u = parseInt(this._get(t, "firstDay"), 10), u = isNaN(u) ? 0 : u, c = this._get(t, "showWeek"), d = this._get(t, "dayNames"), f = this._get(t, "dayNamesMin"), p = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), b = this._get(t, "selectOtherMonths"), y = this._getDefaultDate(t), _ = "", x = 0; U[0] > x; x++) {
						for (k = "", this.maxRows = 4, C = 0; U[1] > C; C++) {
							if (E = this._daylightSavingAdjust(new Date(tt, Q, t.selectedDay)), T = " ui-corner-all", S = "", X) {
								if (S += "<div class='ui-datepicker-group", U[1] > 1)
									switch (C) {
									case 0:
										S += " ui-datepicker-group-first",
										T = " ui-corner-" + (W ? "right" : "left");
										break;
									case U[1] - 1:
										S += " ui-datepicker-group-last",
										T = " ui-corner-" + (W ? "left" : "right");
										break;
									default:
										S += " ui-datepicker-group-middle",
										T = ""
									}
								S += "'>"
							}
							for (S += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === x ? W ? r : n : "") + (/all|right/.test(T) && 0 === x ? W ? n : r : "") + this._generateMonthYearHeader(t, Q, tt, G, J, x > 0 || C > 0, p, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", I = c ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++)
								D = (w + u) % 7, I += "<th scope='col'" + ((w + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[D] + "'>" + f[D] + "</span></th>";
							for (S += I + "</tr></thead><tbody>", A = this._getDaysInMonth(tt, Q), tt === t.selectedYear && Q === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, A)), M = (this._getFirstDayOfMonth(tt, Q) - u + 7) % 7, N = Math.ceil((M + A) / 7), O = X && this.maxRows > N ? this.maxRows : N, this.maxRows = O, P = this._daylightSavingAdjust(new Date(tt, Q, 1 - M)), z = 0; O > z; z++) {
								for (S += "<tr>", R = c ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(P) + "</td>" : "", w = 0; 7 > w; w++)
									H = m ? m.apply(t.input ? t.input[0] : null, [P]) : [!0, ""], L = P.getMonth() !== Q, j = L && !b || !H[0] || G && G > P || J && P > J, R += "<td class='" + ((w + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (L ? " ui-datepicker-other-month" : "") + (P.getTime() === E.getTime() && Q === t.selectedMonth && t._keyEvent || y.getTime() === P.getTime() && y.getTime() === E.getTime() ? " " + this._dayOverClass : "") + (j ? " " + this._unselectableClass + " ui-state-disabled" : "") + (L && !v ? "" : " " + H[1] + (P.getTime() === Z.getTime() ? " " + this._currentClass : "") + (P.getTime() === F.getTime() ? " ui-datepicker-today" : "")) + "'" + (L && !v || !H[2] ? "" : " title='" + H[2].replace(/'/g, "&#39;") + "'") + (j ? "" : " data-handler='selectDay' data-event='click' data-month='" + P.getMonth() + "' data-year='" + P.getFullYear() + "'") + ">" + (L && !v ? "&#xa0;" : j ? "<span class='ui-state-default'>" + P.getDate() + "</span>" : "<a class='ui-state-default" + (P.getTime() === F.getTime() ? " ui-state-highlight" : "") + (P.getTime() === Z.getTime() ? " ui-state-active" : "") + (L ? " ui-priority-secondary" : "") + "' href='#'>" + P.getDate() + "</a>") + "</td>", P.setDate(P.getDate() + 1), P = this._daylightSavingAdjust(P);
								S += R + "</tr>"
							}
							Q++,
							Q > 11 && (Q = 0, tt++),
							S += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""),
							k += S
						}
						_ += k
					}
					return _ += h,
					t._keyEvent = !1,
					_
				},
				_generateMonthYearHeader : function (t, e, i, n, s, r, o, a) {
					var l,
					h,
					u,
					c,
					d,
					f,
					p,
					g,
					m = this._get(t, "changeMonth"),
					v = this._get(t, "changeYear"),
					b = this._get(t, "showMonthAfterYear"),
					y = "<div class='ui-datepicker-title'>",
					_ = "";
					if (r || !m)
						_ += "<span class='ui-datepicker-month'>" + o[e] + "</span>";
					else {
						for (l = n && n.getFullYear() === i, h = s && s.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++)
							(!l || u >= n.getMonth()) && (!h || s.getMonth() >= u) && (_ += "<option value='" + u + "'" + (u === e ? " selected='selected'" : "") + ">" + a[u] + "</option>");
						_ += "</select>"
					}
					if (b || (y += _ + (!r && m && v ? "" : "&#xa0;")), !t.yearshtml)
						if (t.yearshtml = "", r || !v)
							y += "<span class='ui-datepicker-year'>" + i + "</span>";
						else {
							for (c = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), f = function (t) {
								var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
								return isNaN(e) ? d : e
							}, p = f(c[0]), g = Math.max(p, f(c[1] || "")), p = n ? Math.max(p, n.getFullYear()) : p, g = s ? Math.min(g, s.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= p; p++)
								t.yearshtml += "<option value='" + p + "'" + (p === i ? " selected='selected'" : "") + ">" + p + "</option>";
							t.yearshtml += "</select>",
							y += t.yearshtml,
							t.yearshtml = null
						}
					return y += this._get(t, "yearSuffix"),
					b && (y += (!r && m && v ? "" : "&#xa0;") + _),
					y += "</div>"
				},
				_adjustInstDate : function (t, e, i) {
					var n = t.drawYear + ("Y" === i ? e : 0),
					s = t.drawMonth + ("M" === i ? e : 0),
					r = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0),
					o = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, r)));
					t.selectedDay = o.getDate(),
					t.drawMonth = t.selectedMonth = o.getMonth(),
					t.drawYear = t.selectedYear = o.getFullYear(),
					("M" === i || "Y" === i) && this._notifyChange(t)
				},
				_restrictMinMax : function (t, e) {
					var i = this._getMinMaxDate(t, "min"),
					n = this._getMinMaxDate(t, "max"),
					s = i && i > e ? i : e;
					return n && s > n ? n : s
				},
				_notifyChange : function (t) {
					var e = this._get(t, "onChangeMonthYear");
					e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
				},
				_getNumberOfMonths : function (t) {
					var e = this._get(t, "numberOfMonths");
					return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
				},
				_getMinMaxDate : function (t, e) {
					return this._determineDate(t, this._get(t, e + "Date"), null)
				},
				_getDaysInMonth : function (t, e) {
					return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
				},
				_getFirstDayOfMonth : function (t, e) {
					return new Date(t, e, 1).getDay()
				},
				_canAdjustMonth : function (t, e, i, n) {
					var s = this._getNumberOfMonths(t),
					r = this._daylightSavingAdjust(new Date(i, n + (0 > e ? e : s[0] * s[1]), 1));
					return 0 > e && r.setDate(this._getDaysInMonth(r.getFullYear(), r.getMonth())),
					this._isInRange(t, r)
				},
				_isInRange : function (t, e) {
					var i,
					n,
					s = this._getMinMaxDate(t, "min"),
					r = this._getMinMaxDate(t, "max"),
					o = null,
					a = null,
					l = this._get(t, "yearRange");
					return l && (i = l.split(":"), n = (new Date).getFullYear(), o = parseInt(i[0], 10), a = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (o += n), i[1].match(/[+\-].*/) && (a += n)),
					(!s || e.getTime() >= s.getTime()) && (!r || e.getTime() <= r.getTime()) && (!o || e.getFullYear() >= o) && (!a || a >= e.getFullYear())
				},
				_getFormatConfig : function (t) {
					var e = this._get(t, "shortYearCutoff");
					return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
						shortYearCutoff : e,
						dayNamesShort : this._get(t, "dayNamesShort"),
						dayNames : this._get(t, "dayNames"),
						monthNamesShort : this._get(t, "monthNamesShort"),
						monthNames : this._get(t, "monthNames")
					}
				},
				_formatDate : function (t, e, i, n) {
					e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
					var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
					return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t))
				}
			}),
			t.fn.datepicker = function (e) {
				if (!this.length)
					return this;
				t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0),
				0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
				var i = Array.prototype.slice.call(arguments, 1);
				return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function () {
					"string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
				}) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
			},
			t.datepicker = new s,
			t.datepicker.initialized = !1,
			t.datepicker.uuid = (new Date).getTime(),
			t.datepicker.version = "1.11.4",
			t.datepicker,
			t.widget("ui.draggable", t.ui.mouse, {
				version : "1.11.4",
				widgetEventPrefix : "drag",
				options : {
					addClasses : !0,
					appendTo : "parent",
					axis : !1,
					connectToSortable : !1,
					containment : !1,
					cursor : "auto",
					cursorAt : !1,
					grid : !1,
					handle : !1,
					helper : "original",
					iframeFix : !1,
					opacity : !1,
					refreshPositions : !1,
					revert : !1,
					revertDuration : 500,
					scope : "default",
					scroll : !0,
					scrollSensitivity : 20,
					scrollSpeed : 20,
					snap : !1,
					snapMode : "both",
					snapTolerance : 20,
					stack : !1,
					zIndex : !1,
					drag : null,
					start : null,
					stop : null
				},
				_create : function () {
					"original" === this.options.helper && this._setPositionRelative(),
					this.options.addClasses && this.element.addClass("ui-draggable"),
					this.options.disabled && this.element.addClass("ui-draggable-disabled"),
					this._setHandleClassName(),
					this._mouseInit()
				},
				_setOption : function (t, e) {
					this._super(t, e),
					"handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
				},
				_destroy : function () {
					return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), void this._mouseDestroy())
				},
				_mouseCapture : function (e) {
					var i = this.options;
					return this._blurActiveElement(e),
					this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1)
				},
				_blockFrames : function (e) {
					this.iframeBlocks = this.document.find(e).map(function () {
							var e = t(this);
							return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
						})
				},
				_unblockFrames : function () {
					this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
				},
				_blurActiveElement : function (e) {
					var i = this.document[0];
					if (this.handleElement.is(e.target))
						try {
							i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && t(i.activeElement).blur()
						} catch (n) {}

				},
				_mouseStart : function (e) {
					var i = this.options;
					return this.helper = this._createHelper(e),
					this.helper.addClass("ui-draggable-dragging"),
					this._cacheHelperProportions(),
					t.ui.ddmanager && (t.ui.ddmanager.current = this),
					this._cacheMargins(),
					this.cssPosition = this.helper.css("position"),
					this.scrollParent = this.helper.scrollParent(!0),
					this.offsetParent = this.helper.offsetParent(),
					this.hasFixedAncestor = this.helper.parents().filter(function () {
							return "fixed" === t(this).css("position")
						}).length > 0,
					this.positionAbs = this.element.offset(),
					this._refreshOffsets(e),
					this.originalPosition = this.position = this._generatePosition(e, !1),
					this.originalPageX = e.pageX,
					this.originalPageY = e.pageY,
					i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
					this._setContainment(),
					this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._normalizeRightBottom(), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
				},
				_refreshOffsets : function (t) {
					this.offset = {
						top : this.positionAbs.top - this.margins.top,
						left : this.positionAbs.left - this.margins.left,
						scroll : !1,
						parent : this._getParentOffset(),
						relative : this._getRelativeOffset()
					},
					this.offset.click = {
						left : t.pageX - this.offset.left,
						top : t.pageY - this.offset.top
					}
				},
				_mouseDrag : function (e, i) {
					if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
						var n = this._uiHash();
						if (this._trigger("drag", e, n) === !1)
							return this._mouseUp({}), !1;
						this.position = n.position
					}
					return this.helper[0].style.left = this.position.left + "px",
					this.helper[0].style.top = this.position.top + "px",
					t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
					!1
				},
				_mouseStop : function (e) {
					var i = this,
					n = !1;
					return t.ui.ddmanager && !this.options.dropBehaviour && (n = t.ui.ddmanager.drop(this, e)),
					this.dropped && (n = this.dropped, this.dropped = !1),
					"invalid" === this.options.revert && !n || "valid" === this.options.revert && n || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
						i._trigger("stop", e) !== !1 && i._clear()
					}) : this._trigger("stop", e) !== !1 && this._clear(),
					!1
				},
				_mouseUp : function (e) {
					return this._unblockFrames(),
					t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
					this.handleElement.is(e.target) && this.element.focus(),
					t.ui.mouse.prototype._mouseUp.call(this, e)
				},
				cancel : function () {
					return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
					this
				},
				_getHandle : function (e) {
					return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
				},
				_setHandleClassName : function () {
					this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element,
					this.handleElement.addClass("ui-draggable-handle")
				},
				_removeHandleClassName : function () {
					this.handleElement.removeClass("ui-draggable-handle")
				},
				_createHelper : function (e) {
					var i = this.options,
					n = t.isFunction(i.helper),
					s = n ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
					return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo),
					n && s[0] === this.element[0] && this._setPositionRelative(),
					s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"),
					s
				},
				_setPositionRelative : function () {
					/^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
				},
				_adjustOffsetFromHelper : function (e) {
					"string" == typeof e && (e = e.split(" ")),
					t.isArray(e) && (e = {
							left : +e[0],
							top : +e[1] || 0
						}),
					"left" in e && (this.offset.click.left = e.left + this.margins.left),
					"right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
					"top" in e && (this.offset.click.top = e.top + this.margins.top),
					"bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
				},
				_isRootNode : function (t) {
					return /(html|body)/i.test(t.tagName) || t === this.document[0]
				},
				_getParentOffset : function () {
					var e = this.offsetParent.offset(),
					i = this.document[0];
					return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()),
					this._isRootNode(this.offsetParent[0]) && (e = {
							top : 0,
							left : 0
						}), {
						top : e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
						left : e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
					}
				},
				_getRelativeOffset : function () {
					if ("relative" !== this.cssPosition)
						return {
							top : 0,
							left : 0
						};
					var t = this.element.position(),
					e = this._isRootNode(this.scrollParent[0]);
					return {
						top : t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
						left : t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
					}
				},
				_cacheMargins : function () {
					this.margins = {
						left : parseInt(this.element.css("marginLeft"), 10) || 0,
						top : parseInt(this.element.css("marginTop"), 10) || 0,
						right : parseInt(this.element.css("marginRight"), 10) || 0,
						bottom : parseInt(this.element.css("marginBottom"), 10) || 0
					}
				},
				_cacheHelperProportions : function () {
					this.helperProportions = {
						width : this.helper.outerWidth(),
						height : this.helper.outerHeight()
					}
				},
				_setContainment : function () {
					var e,
					i,
					n,
					s = this.options,
					r = this.document[0];
					return this.relativeContainer = null,
					s.containment ? "window" === s.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || r.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === s.containment ? void(this.containment = [0, 0, t(r).width() - this.helperProportions.width - this.margins.left, (t(r).height() || r.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : s.containment.constructor === Array ? void(this.containment = s.containment) : ("parent" === s.containment && (s.containment = this.helper[0].parentNode),
						i = t(s.containment), n = i[0], void(n && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void(this.containment = null)
				},
				_convertPositionTo : function (t, e) {
					e || (e = this.position);
					var i = "absolute" === t ? 1 : -1,
					n = this._isRootNode(this.scrollParent[0]);
					return {
						top : e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
						left : e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i
					}
				},
				_generatePosition : function (t, e) {
					var i,
					n,
					s,
					r,
					o = this.options,
					a = this._isRootNode(this.scrollParent[0]),
					l = t.pageX,
					h = t.pageY;
					return a && this.offset.scroll || (this.offset.scroll = {
							top : this.scrollParent.scrollTop(),
							left : this.scrollParent.scrollLeft()
						}),
					e && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), o.grid && (s = o.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, h = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - o.grid[1] : s + o.grid[1] : s, r = o.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, l = i ? r - this.offset.click.left >= i[0] || r - this.offset.click.left > i[2] ? r : r - this.offset.click.left >= i[0] ? r - o.grid[0] : r + o.grid[0] : r), "y" === o.axis && (l = this.originalPageX), "x" === o.axis && (h = this.originalPageY)), {
						top : h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : a ? 0 : this.offset.scroll.top),
						left : l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : a ? 0 : this.offset.scroll.left)
					}
				},
				_clear : function () {
					this.helper.removeClass("ui-draggable-dragging"),
					this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
					this.helper = null,
					this.cancelHelperRemoval = !1,
					this.destroyOnClear && this.destroy()
				},
				_normalizeRightBottom : function () {
					"y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")),
					"x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
				},
				_trigger : function (e, i, n) {
					return n = n || this._uiHash(),
					t.ui.plugin.call(this, e, [i, n, this], !0),
					/^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), n.offset = this.positionAbs),
					t.Widget.prototype._trigger.call(this, e, i, n)
				},
				plugins : {},
				_uiHash : function () {
					return {
						helper : this.helper,
						position : this.position,
						originalPosition : this.originalPosition,
						offset : this.positionAbs
					}
				}
			}),
			t.ui.plugin.add("draggable", "connectToSortable", {
				start : function (e, i, n) {
					var s = t.extend({}, i, {
							item : n.element
						});
					n.sortables = [],
					t(n.options.connectToSortable).each(function () {
						var i = t(this).sortable("instance");
						i && !i.options.disabled && (n.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, s))
					})
				},
				stop : function (e, i, n) {
					var s = t.extend({}, i, {
							item : n.element
						});
					n.cancelHelperRemoval = !1,
					t.each(n.sortables, function () {
						var t = this;
						t.isOver ? (t.isOver = 0, n.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
								position : t.placeholder.css("position"),
								top : t.placeholder.css("top"),
								left : t.placeholder.css("left")
							}, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, s))
					})
				},
				drag : function (e, i, n) {
					t.each(n.sortables, function () {
						var s = !1,
						r = this;
						r.positionAbs = n.positionAbs,
						r.helperProportions = n.helperProportions,
						r.offset.click = n.offset.click,
						r._intersectsWith(r.containerCache) && (s = !0, t.each(n.sortables, function () {
								return this.positionAbs = n.positionAbs,
								this.helperProportions = n.helperProportions,
								this.offset.click = n.offset.click,
								this !== r && this._intersectsWith(this.containerCache) && t.contains(r.element[0], this.element[0]) && (s = !1),
								s
							})),
						s ? (r.isOver || (r.isOver = 1, n._parent = i.helper.parent(), r.currentItem = i.helper.appendTo(r.element).data("ui-sortable-item", !0), r.options._helper = r.options.helper, r.options.helper = function () {
								return i.helper[0]
							}, e.target = r.currentItem[0], r._mouseCapture(e, !0), r._mouseStart(e, !0, !0), r.offset.click.top = n.offset.click.top, r.offset.click.left = n.offset.click.left, r.offset.parent.left -= n.offset.parent.left - r.offset.parent.left, r.offset.parent.top -= n.offset.parent.top - r.offset.parent.top, n._trigger("toSortable", e), n.dropped = r.element, t.each(n.sortables, function () {
									this.refreshPositions()
								}), n.currentItem = n.element, r.fromOutside = n), r.currentItem && (r._mouseDrag(e), i.position = r.position)) : r.isOver && (r.isOver = 0, r.cancelHelperRemoval = !0, r.options._revert = r.options.revert, r.options.revert = !1, r._trigger("out", e, r._uiHash(r)), r._mouseStop(e, !0), r.options.revert = r.options._revert, r.options.helper = r.options._helper, r.placeholder && r.placeholder.remove(), i.helper.appendTo(n._parent), n._refreshOffsets(e), i.position = n._generatePosition(e, !0), n._trigger("fromSortable", e), n.dropped = !1, t.each(n.sortables, function () {
								this.refreshPositions()
							}))
					})
				}
			}),
			t.ui.plugin.add("draggable", "cursor", {
				start : function (e, i, n) {
					var s = t("body"),
					r = n.options;
					s.css("cursor") && (r._cursor = s.css("cursor")),
					s.css("cursor", r.cursor)
				},
				stop : function (e, i, n) {
					var s = n.options;
					s._cursor && t("body").css("cursor", s._cursor)
				}
			}),
			t.ui.plugin.add("draggable", "opacity", {
				start : function (e, i, n) {
					var s = t(i.helper),
					r = n.options;
					s.css("opacity") && (r._opacity = s.css("opacity")),
					s.css("opacity", r.opacity)
				},
				stop : function (e, i, n) {
					var s = n.options;
					s._opacity && t(i.helper).css("opacity", s._opacity)
				}
			}),
			t.ui.plugin.add("draggable", "scroll", {
				start : function (t, e, i) {
					i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
					i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
				},
				drag : function (e, i, n) {
					var s = n.options,
					r = !1,
					o = n.scrollParentNotHidden[0],
					a = n.document[0];
					o !== a && "HTML" !== o.tagName ? (s.axis && "x" === s.axis || (n.overflowOffset.top + o.offsetHeight - e.pageY < s.scrollSensitivity ? o.scrollTop = r = o.scrollTop + s.scrollSpeed : e.pageY - n.overflowOffset.top < s.scrollSensitivity && (o.scrollTop = r = o.scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (n.overflowOffset.left + o.offsetWidth - e.pageX < s.scrollSensitivity ? o.scrollLeft = r = o.scrollLeft + s.scrollSpeed : e.pageX - n.overflowOffset.left < s.scrollSensitivity && (o.scrollLeft = r = o.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(a).scrollTop() < s.scrollSensitivity ? r = t(a).scrollTop(t(a).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(a).scrollTop()) < s.scrollSensitivity && (r = t(a).scrollTop(t(a).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(a).scrollLeft() < s.scrollSensitivity ? r = t(a).scrollLeft(t(a).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(a).scrollLeft()) < s.scrollSensitivity && (r = t(a).scrollLeft(t(a).scrollLeft() + s.scrollSpeed)))),
					r !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(n, e)
				}
			}),
			t.ui.plugin.add("draggable", "snap", {
				start : function (e, i, n) {
					var s = n.options;
					n.snapElements = [],
					t(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function () {
						var e = t(this),
						i = e.offset();
						this !== n.element[0] && n.snapElements.push({
							item : this,
							width : e.outerWidth(),
							height : e.outerHeight(),
							top : i.top,
							left : i.left
						})
					})
				},
				drag : function (e, i, n) {
					var s,
					r,
					o,
					a,
					l,
					h,
					u,
					c,
					d,
					f,
					p = n.options,
					g = p.snapTolerance,
					m = i.offset.left,
					v = m + n.helperProportions.width,
					b = i.offset.top,
					y = b + n.helperProportions.height;
					for (d = n.snapElements.length - 1; d >= 0; d--)
						l = n.snapElements[d].left - n.margins.left, h = l + n.snapElements[d].width, u = n.snapElements[d].top - n.margins.top, c = u + n.snapElements[d].height, l - g > v || m > h + g || u - g > y || b > c + g || !t.contains(n.snapElements[d].item.ownerDocument, n.snapElements[d].item) ? (n.snapElements[d].snapping && n.options.snap.release && n.options.snap.release.call(n.element, e, t.extend(n._uiHash(), {
									snapItem : n.snapElements[d].item
								})), n.snapElements[d].snapping = !1) : ("inner" !== p.snapMode && (s = g >= Math.abs(u - y), r = g >= Math.abs(c - b), o = g >= Math.abs(l - v), a = g >= Math.abs(h - m), s && (i.position.top = n._convertPositionTo("relative", {
											top : u - n.helperProportions.height,
											left : 0
										}).top), r && (i.position.top = n._convertPositionTo("relative", {
											top : c,
											left : 0
										}).top), o && (i.position.left = n._convertPositionTo("relative", {
											top : 0,
											left : l - n.helperProportions.width
										}).left), a && (i.position.left = n._convertPositionTo("relative", {
											top : 0,
											left : h
										}).left)), f = s || r || o || a, "outer" !== p.snapMode && (s = g >= Math.abs(u - b), r = g >= Math.abs(c - y), o = g >= Math.abs(l - m), a = g >= Math.abs(h - v), s && (i.position.top = n._convertPositionTo("relative", {
											top : u,
											left : 0
										}).top), r && (i.position.top = n._convertPositionTo("relative", {
											top : c - n.helperProportions.height,
											left : 0
										}).top), o && (i.position.left = n._convertPositionTo("relative", {
											top : 0,
											left : l
										}).left), a && (i.position.left = n._convertPositionTo("relative", {
											top : 0,
											left : h - n.helperProportions.width
										}).left)), !n.snapElements[d].snapping && (s || r || o || a || f) && n.options.snap.snap && n.options.snap.snap.call(n.element, e, t.extend(n._uiHash(), {
									snapItem : n.snapElements[d].item
								})), n.snapElements[d].snapping = s || r || o || a || f)
				}
			}),
			t.ui.plugin.add("draggable", "stack", {
				start : function (e, i, n) {
					var s,
					r = n.options,
					o = t.makeArray(t(r.stack)).sort(function (e, i) {
							return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
						});
					o.length && (s = parseInt(t(o[0]).css("zIndex"), 10) || 0, t(o).each(function (e) {
							t(this).css("zIndex", s + e)
						}), this.css("zIndex", s + o.length))
				}
			}),
			t.ui.plugin.add("draggable", "zIndex", {
				start : function (e, i, n) {
					var s = t(i.helper),
					r = n.options;
					s.css("zIndex") && (r._zIndex = s.css("zIndex")),
					s.css("zIndex", r.zIndex)
				},
				stop : function (e, i, n) {
					var s = n.options;
					s._zIndex && t(i.helper).css("zIndex", s._zIndex)
				}
			}),
			t.ui.draggable,
			t.widget("ui.resizable", t.ui.mouse, {
				version : "1.11.4",
				widgetEventPrefix : "resize",
				options : {
					alsoResize : !1,
					animate : !1,
					animateDuration : "slow",
					animateEasing : "swing",
					aspectRatio : !1,
					autoHide : !1,
					containment : !1,
					ghost : !1,
					grid : !1,
					handles : "e,s,se",
					helper : !1,
					maxHeight : null,
					maxWidth : null,
					minHeight : 10,
					minWidth : 10,
					zIndex : 90,
					resize : null,
					start : null,
					stop : null
				},
				_num : function (t) {
					return parseInt(t, 10) || 0
				},
				_isNumber : function (t) {
					return !isNaN(parseInt(t, 10))
				},
				_hasScroll : function (e, i) {
					if ("hidden" === t(e).css("overflow"))
						return !1;
					var n = i && "left" === i ? "scrollLeft" : "scrollTop",
					s = !1;
					return e[n] > 0 ? !0 : (e[n] = 1, s = e[n] > 0, e[n] = 0, s)
				},
				_create : function () {
					var e,
					i,
					n,
					s,
					r,
					o = this,
					a = this.options;
					if (this.element.addClass("ui-resizable"), t.extend(this, {
							_aspectRatio : !!a.aspectRatio,
							aspectRatio : a.aspectRatio,
							originalElement : this.element,
							_proportionallyResizeElements : [],
							_helper : a.helper || a.ghost || a.animate ? a.helper || "ui-resizable-helper" : null
						}), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
									position : this.element.css("position"),
									width : this.element.outerWidth(),
									height : this.element.outerHeight(),
									top : this.element.css("top"),
									left : this.element.css("left")
								})), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
								marginLeft : this.originalElement.css("marginLeft"),
								marginTop : this.originalElement.css("marginTop"),
								marginRight : this.originalElement.css("marginRight"),
								marginBottom : this.originalElement.css("marginBottom")
							}), this.originalElement.css({
								marginLeft : 0,
								marginTop : 0,
								marginRight : 0,
								marginBottom : 0
							}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
									position : "static",
									zoom : 1,
									display : "block"
								})), this.originalElement.css({
								margin : this.originalElement.css("margin")
							}), this._proportionallyResize()), this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
								n : ".ui-resizable-n",
								e : ".ui-resizable-e",
								s : ".ui-resizable-s",
								w : ".ui-resizable-w",
								se : ".ui-resizable-se",
								sw : ".ui-resizable-sw",
								ne : ".ui-resizable-ne",
								nw : ".ui-resizable-nw"
							}
								 : "e,s,se"), this._handles = t(), this.handles.constructor === String)
						for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, i = 0; e.length > i; i++)
							n = t.trim(e[i]), r = "ui-resizable-" + n, s = t("<div class='ui-resizable-handle " + r + "'></div>"), s.css({
								zIndex : a.zIndex
							}), "se" === n && s.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[n] = ".ui-resizable-" + n, this.element.append(s);
					this._renderAxis = function (e) {
						var i,
						n,
						s,
						r;
						e = e || this.element;
						for (i in this.handles)
							this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {
										mousedown : o._mouseDown
									})), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (n = t(this.handles[i], this.element), r = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), s = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(s, r), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
					},
					this._renderAxis(this.element),
					this._handles = this._handles.add(this.element.find(".ui-resizable-handle")),
					this._handles.disableSelection(),
					this._handles.mouseover(function () {
						o.resizing || (this.className && (s = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = s && s[1] ? s[1] : "se")
					}),
					a.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
							a.disabled || (t(this).removeClass("ui-resizable-autohide"), o._handles.show())
						}).mouseleave(function () {
							a.disabled || o.resizing || (t(this).addClass("ui-resizable-autohide"), o._handles.hide())
						})),
					this._mouseInit()
				},
				_destroy : function () {
					this._mouseDestroy();
					var e,
					i = function (e) {
						t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
					};
					return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
							position : e.css("position"),
							width : e.outerWidth(),
							height : e.outerHeight(),
							top : e.css("top"),
							left : e.css("left")
						}).insertAfter(e), e.remove()),
					this.originalElement.css("resize", this.originalResizeStyle),
					i(this.originalElement),
					this
				},
				_mouseCapture : function (e) {
					var i,
					n,
					s = !1;
					for (i in this.handles)
						n = t(this.handles[i])[0], (n === e.target || t.contains(n, e.target)) && (s = !0);
					return !this.options.disabled && s
				},
				_mouseStart : function (e) {
					var i,
					n,
					s,
					r = this.options,
					o = this.element;
					return this.resizing = !0,
					this._renderProxy(),
					i = this._num(this.helper.css("left")),
					n = this._num(this.helper.css("top")),
					r.containment && (i += t(r.containment).scrollLeft() || 0, n += t(r.containment).scrollTop() || 0),
					this.offset = this.helper.offset(),
					this.position = {
						left : i,
						top : n
					},
					this.size = this._helper ? {
						width : this.helper.width(),
						height : this.helper.height()
					}
					 : {
						width : o.width(),
						height : o.height()
					},
					this.originalSize = this._helper ? {
						width : o.outerWidth(),
						height : o.outerHeight()
					}
					 : {
						width : o.width(),
						height : o.height()
					},
					this.sizeDiff = {
						width : o.outerWidth() - o.width(),
						height : o.outerHeight() - o.height()
					},
					this.originalPosition = {
						left : i,
						top : n
					},
					this.originalMousePosition = {
						left : e.pageX,
						top : e.pageY
					},
					this.aspectRatio = "number" == typeof r.aspectRatio ? r.aspectRatio : this.originalSize.width / this.originalSize.height || 1,
					s = t(".ui-resizable-" + this.axis).css("cursor"),
					t("body").css("cursor", "auto" === s ? this.axis + "-resize" : s),
					o.addClass("ui-resizable-resizing"),
					this._propagate("start", e),
					!0
				},
				_mouseDrag : function (e) {
					var i,
					n,
					s = this.originalMousePosition,
					r = this.axis,
					o = e.pageX - s.left || 0,
					a = e.pageY - s.top || 0,
					l = this._change[r];
					return this._updatePrevProperties(),
					l ? (i = l.apply(this, [e, o, a]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), n = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1) : !1
				},
				_mouseStop : function (e) {
					this.resizing = !1;
					var i,
					n,
					s,
					r,
					o,
					a,
					l,
					h = this.options,
					u = this;
					return this._helper && (i = this._proportionallyResizeElements, n = i.length && /textarea/i.test(i[0].nodeName), s = n && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, r = n ? 0 : u.sizeDiff.width, o = {
							width : u.helper.width() - r,
							height : u.helper.height() - s
						}, a = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, l = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, h.animate || this.element.css(t.extend(o, {
								top : l,
								left : a
							})), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !h.animate && this._proportionallyResize()),
					t("body").css("cursor", "auto"),
					this.element.removeClass("ui-resizable-resizing"),
					this._propagate("stop", e),
					this._helper && this.helper.remove(),
					!1
				},
				_updatePrevProperties : function () {
					this.prevPosition = {
						top : this.position.top,
						left : this.position.left
					},
					this.prevSize = {
						width : this.size.width,
						height : this.size.height
					}
				},
				_applyChanges : function () {
					var t = {};
					return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"),
					this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"),
					this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"),
					this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"),
					this.helper.css(t),
					t
				},
				_updateVirtualBoundaries : function (t) {
					var e,
					i,
					n,
					s,
					r,
					o = this.options;
					r = {
						minWidth : this._isNumber(o.minWidth) ? o.minWidth : 0,
						maxWidth : this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0,
						minHeight : this._isNumber(o.minHeight) ? o.minHeight : 0,
						maxHeight : this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0
					},
					(this._aspectRatio || t) && (e = r.minHeight * this.aspectRatio, n = r.minWidth / this.aspectRatio, i = r.maxHeight * this.aspectRatio, s = r.maxWidth / this.aspectRatio, e > r.minWidth && (r.minWidth = e), n > r.minHeight && (r.minHeight = n), r.maxWidth > i && (r.maxWidth = i), r.maxHeight > s && (r.maxHeight = s)),
					this._vBoundaries = r
				},
				_updateCache : function (t) {
					this.offset = this.helper.offset(),
					this._isNumber(t.left) && (this.position.left = t.left),
					this._isNumber(t.top) && (this.position.top = t.top),
					this._isNumber(t.height) && (this.size.height = t.height),
					this._isNumber(t.width) && (this.size.width = t.width)
				},
				_updateRatio : function (t) {
					var e = this.position,
					i = this.size,
					n = this.axis;
					return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio),
					"sw" === n && (t.left = e.left + (i.width - t.width), t.top = null),
					"nw" === n && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)),
					t
				},
				_respectSize : function (t) {
					var e = this._vBoundaries,
					i = this.axis,
					n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
					s = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
					r = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
					o = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
					a = this.originalPosition.left + this.originalSize.width,
					l = this.position.top + this.size.height,
					h = /sw|nw|w/.test(i),
					u = /nw|ne|n/.test(i);
					return r && (t.width = e.minWidth),
					o && (t.height = e.minHeight),
					n && (t.width = e.maxWidth),
					s && (t.height = e.maxHeight),
					r && h && (t.left = a - e.minWidth),
					n && h && (t.left = a - e.maxWidth),
					o && u && (t.top = l - e.minHeight),
					s && u && (t.top = l - e.maxHeight),
					t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null,
					t
				},
				_getPaddingPlusBorderDimensions : function (t) {
					for (var e = 0, i = [], n = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], s = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++)
						i[e] = parseInt(n[e], 10) || 0, i[e] += parseInt(s[e], 10) || 0;
					return {
						height : i[0] + i[2],
						width : i[1] + i[3]
					}
				},
				_proportionallyResize : function () {
					if (this._proportionallyResizeElements.length)
						for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++)
							t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
								height : i.height() - this.outerDimensions.height || 0,
								width : i.width() - this.outerDimensions.width || 0
							})
				},
				_renderProxy : function () {
					var e = this.element,
					i = this.options;
					this.elementOffset = e.offset(),
					this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
							width : this.element.outerWidth() - 1,
							height : this.element.outerHeight() - 1,
							position : "absolute",
							left : this.elementOffset.left + "px",
							top : this.elementOffset.top + "px",
							zIndex : ++i.zIndex
						}), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
				},
				_change : {
					e : function (t, e) {
						return {
							width : this.originalSize.width + e
						}
					},
					w : function (t, e) {
						var i = this.originalSize,
						n = this.originalPosition;
						return {
							left : n.left + e,
							width : i.width - e
						}
					},
					n : function (t, e, i) {
						var n = this.originalSize,
						s = this.originalPosition;
						return {
							top : s.top + i,
							height : n.height - i
						}
					},
					s : function (t, e, i) {
						return {
							height : this.originalSize.height + i
						}
					},
					se : function (e, i, n) {
						return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
					},
					sw : function (e, i, n) {
						return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
					},
					ne : function (e, i, n) {
						return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
					},
					nw : function (e, i, n) {
						return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
					}
				},
				_propagate : function (e, i) {
					t.ui.plugin.call(this, e, [i, this.ui()]),
					"resize" !== e && this._trigger(e, i, this.ui())
				},
				plugins : {},
				ui : function () {
					return {
						originalElement : this.originalElement,
						element : this.element,
						helper : this.helper,
						position : this.position,
						size : this.size,
						originalSize : this.originalSize,
						originalPosition : this.originalPosition
					}
				}
			}),
			t.ui.plugin.add("resizable", "animate", {
				stop : function (e) {
					var i = t(this).resizable("instance"),
					n = i.options,
					s = i._proportionallyResizeElements,
					r = s.length && /textarea/i.test(s[0].nodeName),
					o = r && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
					a = r ? 0 : i.sizeDiff.width,
					l = {
						width : i.size.width - a,
						height : i.size.height - o
					},
					h = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
					u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
					i.element.animate(t.extend(l, u && h ? {
							top : u,
							left : h
						}
							 : {}), {
						duration : n.animateDuration,
						easing : n.animateEasing,
						step : function () {
							var n = {
								width : parseInt(i.element.css("width"), 10),
								height : parseInt(i.element.css("height"), 10),
								top : parseInt(i.element.css("top"), 10),
								left : parseInt(i.element.css("left"), 10)
							};
							s && s.length && t(s[0]).css({
								width : n.width,
								height : n.height
							}),
							i._updateCache(n),
							i._propagate("resize", e)
						}
					})
				}
			}),
			t.ui.plugin.add("resizable", "containment", {
				start : function () {
					var e,
					i,
					n,
					s,
					r,
					o,
					a,
					l = t(this).resizable("instance"),
					h = l.options,
					u = l.element,
					c = h.containment,
					d = c instanceof t ? c.get(0) : /parent/.test(c) ? u.parent().get(0) : c;
					d && (l.containerElement = t(d), /document/.test(c) || c === document ? (l.containerOffset = {
								left : 0,
								top : 0
							}, l.containerPosition = {
								left : 0,
								top : 0
							}, l.parentData = {
								element : t(document),
								left : 0,
								top : 0,
								width : t(document).width(),
								height : t(document).height() || document.body.parentNode.scrollHeight
							}) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function (t, n) {
								i[t] = l._num(e.css("padding" + n))
							}), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = {
								height : e.innerHeight() - i[3],
								width : e.innerWidth() - i[1]
							}, n = l.containerOffset, s = l.containerSize.height, r = l.containerSize.width, o = l._hasScroll(d, "left") ? d.scrollWidth : r, a = l._hasScroll(d) ? d.scrollHeight : s, l.parentData = {
								element : d,
								left : n.left,
								top : n.top,
								width : o,
								height : a
							}))
				},
				resize : function (e) {
					var i,
					n,
					s,
					r,
					o = t(this).resizable("instance"),
					a = o.options,
					l = o.containerOffset,
					h = o.position,
					u = o._aspectRatio || e.shiftKey,
					c = {
						top : 0,
						left : 0
					},
					d = o.containerElement,
					f = !0;
					d[0] !== document && /static/.test(d.css("position")) && (c = l),
					h.left < (o._helper ? l.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - l.left : o.position.left - c.left), u && (o.size.height = o.size.width / o.aspectRatio, f = !1), o.position.left = a.helper ? l.left : 0),
					h.top < (o._helper ? l.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - l.top : o.position.top), u && (o.size.width = o.size.height * o.aspectRatio, f = !1), o.position.top = o._helper ? l.top : 0),
					s = o.containerElement.get(0) === o.element.parent().get(0),
					r = /relative|absolute/.test(o.containerElement.css("position")),
					s && r ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top),
					i = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - c.left : o.offset.left - l.left)),
					n = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - c.top : o.offset.top - l.top)),
					i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, u && (o.size.height = o.size.width / o.aspectRatio, f = !1)),
					n + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - n, u && (o.size.width = o.size.height * o.aspectRatio, f = !1)),
					f || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height)
				},
				stop : function () {
					var e = t(this).resizable("instance"),
					i = e.options,
					n = e.containerOffset,
					s = e.containerPosition,
					r = e.containerElement,
					o = t(e.helper),
					a = o.offset(),
					l = o.outerWidth() - e.sizeDiff.width,
					h = o.outerHeight() - e.sizeDiff.height;
					e._helper && !i.animate && /relative/.test(r.css("position")) && t(this).css({
						left : a.left - s.left - n.left,
						width : l,
						height : h
					}),
					e._helper && !i.animate && /static/.test(r.css("position")) && t(this).css({
						left : a.left - s.left - n.left,
						width : l,
						height : h
					})
				}
			}),
			t.ui.plugin.add("resizable", "alsoResize", {
				start : function () {
					var e = t(this).resizable("instance"),
					i = e.options;
					t(i.alsoResize).each(function () {
						var e = t(this);
						e.data("ui-resizable-alsoresize", {
							width : parseInt(e.width(), 10),
							height : parseInt(e.height(), 10),
							left : parseInt(e.css("left"), 10),
							top : parseInt(e.css("top"), 10)
						})
					})
				},
				resize : function (e, i) {
					var n = t(this).resizable("instance"),
					s = n.options,
					r = n.originalSize,
					o = n.originalPosition,
					a = {
						height : n.size.height - r.height || 0,
						width : n.size.width - r.width || 0,
						top : n.position.top - o.top || 0,
						left : n.position.left - o.left || 0
					};
					t(s.alsoResize).each(function () {
						var e = t(this),
						n = t(this).data("ui-resizable-alsoresize"),
						s = {},
						r = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
						t.each(r, function (t, e) {
							var i = (n[e] || 0) + (a[e] || 0);
							i && i >= 0 && (s[e] = i || null)
						}),
						e.css(s)
					})
				},
				stop : function () {
					t(this).removeData("resizable-alsoresize")
				}
			}),
			t.ui.plugin.add("resizable", "ghost", {
				start : function () {
					var e = t(this).resizable("instance"),
					i = e.options,
					n = e.size;
					e.ghost = e.originalElement.clone(),
					e.ghost.css({
						opacity : .25,
						display : "block",
						position : "relative",
						height : n.height,
						width : n.width,
						margin : 0,
						left : 0,
						top : 0
					}).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""),
					e.ghost.appendTo(e.helper)
				},
				resize : function () {
					var e = t(this).resizable("instance");
					e.ghost && e.ghost.css({
						position : "relative",
						height : e.size.height,
						width : e.size.width
					})
				},
				stop : function () {
					var e = t(this).resizable("instance");
					e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
				}
			}),
			t.ui.plugin.add("resizable", "grid", {
				resize : function () {
					var e,
					i = t(this).resizable("instance"),
					n = i.options,
					s = i.size,
					r = i.originalSize,
					o = i.originalPosition,
					a = i.axis,
					l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
					h = l[0] || 1,
					u = l[1] || 1,
					c = Math.round((s.width - r.width) / h) * h,
					d = Math.round((s.height - r.height) / u) * u,
					f = r.width + c,
					p = r.height + d,
					g = n.maxWidth && f > n.maxWidth,
					m = n.maxHeight && p > n.maxHeight,
					v = n.minWidth && n.minWidth > f,
					b = n.minHeight && n.minHeight > p;
					n.grid = l,
					v && (f += h),
					b && (p += u),
					g && (f -= h),
					m && (p -= u),
					/^(se|s|e)$/.test(a) ? (i.size.width = f, i.size.height = p) : /^(ne)$/.test(a) ? (i.size.width = f, i.size.height = p, i.position.top = o.top - d) : /^(sw)$/.test(a) ? (i.size.width = f, i.size.height = p, i.position.left = o.left - c) : ((0 >= p - u || 0 >= f - h) && (e = i._getPaddingPlusBorderDimensions(this)), p - u > 0 ? (i.size.height = p, i.position.top = o.top - d) : (p = u - e.height, i.size.height = p, i.position.top = o.top + r.height - p), f - h > 0 ? (i.size.width = f, i.position.left = o.left - c) : (f = h - e.width, i.size.width = f, i.position.left = o.left + r.width - f))
				}
			}),
			t.ui.resizable,
			t.widget("ui.dialog", {
				version : "1.11.4",
				options : {
					appendTo : "body",
					autoOpen : !0,
					buttons : [],
					closeOnEscape : !0,
					closeText : "Close",
					dialogClass : "",
					draggable : !0,
					hide : null,
					height : "auto",
					maxHeight : null,
					maxWidth : null,
					minHeight : 150,
					minWidth : 150,
					modal : !1,
					position : {
						my : "center",
						at : "center",
						of : window,
						collision : "fit",
						using : function (e) {
							var i = t(this).css(e).offset().top;
							0 > i && t(this).css("top", e.top - i)
						}
					},
					resizable : !0,
					show : null,
					title : null,
					width : 300,
					beforeClose : null,
					close : null,
					drag : null,
					dragStart : null,
					dragStop : null,
					focus : null,
					open : null,
					resize : null,
					resizeStart : null,
					resizeStop : null
				},
				sizeRelatedOptions : {
					buttons : !0,
					height : !0,
					maxHeight : !0,
					maxWidth : !0,
					minHeight : !0,
					minWidth : !0,
					width : !0
				},
				resizableRelatedOptions : {
					maxHeight : !0,
					maxWidth : !0,
					minHeight : !0,
					minWidth : !0
				},
				_create : function () {
					this.originalCss = {
						display : this.element[0].style.display,
						width : this.element[0].style.width,
						minHeight : this.element[0].style.minHeight,
						maxHeight : this.element[0].style.maxHeight,
						height : this.element[0].style.height
					},
					this.originalPosition = {
						parent : this.element.parent(),
						index : this.element.parent().children().index(this.element)
					},
					this.originalTitle = this.element.attr("title"),
					this.options.title = this.options.title || this.originalTitle,
					this._createWrapper(),
					this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),
					this._createTitlebar(),
					this._createButtonPane(),
					this.options.draggable && t.fn.draggable && this._makeDraggable(),
					this.options.resizable && t.fn.resizable && this._makeResizable(),
					this._isOpen = !1,
					this._trackFocus()
				},
				_init : function () {
					this.options.autoOpen && this.open()
				},
				_appendTo : function () {
					var e = this.options.appendTo;
					return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
				},
				_destroy : function () {
					var t,
					e = this.originalPosition;
					this._untrackInstance(),
					this._destroyOverlay(),
					this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),
					this.uiDialog.stop(!0, !0).remove(),
					this.originalTitle && this.element.attr("title", this.originalTitle),
					t = e.parent.children().eq(e.index),
					t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
				},
				widget : function () {
					return this.uiDialog
				},
				disable : t.noop,
				enable : t.noop,
				close : function (e) {
					var i,
					n = this;
					if (this._isOpen && this._trigger("beforeClose", e) !== !1) {
						if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length)
							try {
								i = this.document[0].activeElement,
								i && "body" !== i.nodeName.toLowerCase() && t(i).blur()
							} catch (s) {}

						this._hide(this.uiDialog, this.options.hide, function () {
							n._trigger("close", e)
						})
					}
				},
				isOpen : function () {
					return this._isOpen
				},
				moveToTop : function () {
					this._moveToTop()
				},
				_moveToTop : function (e, i) {
					var n = !1,
					s = this.uiDialog.siblings(".ui-front:visible").map(function () {
							return +t(this).css("z-index")
						}).get(),
					r = Math.max.apply(null, s);
					return r >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", r + 1), n = !0),
					n && !i && this._trigger("focus", e),
					n
				},
				open : function () {
					var e = this;
					return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
							e._focusTabbable(),
							e._trigger("focus")
						}), this._makeFocusTarget(),
						void this._trigger("open"))
				},
				_focusTabbable : function () {
					var t = this._focusedElement;
					t || (t = this.element.find("[autofocus]")),
					t.length || (t = this.element.find(":tabbable")),
					t.length || (t = this.uiDialogButtonPane.find(":tabbable")),
					t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")),
					t.length || (t = this.uiDialog),
					t.eq(0).focus()
				},
				_keepFocus : function (e) {
					function i() {
						var e = this.document[0].activeElement,
						i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
						i || this._focusTabbable()
					}
					e.preventDefault(),
					i.call(this),
					this._delay(i)
				},
				_createWrapper : function () {
					this.uiDialog = t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
							tabIndex : -1,
							role : "dialog"
						}).appendTo(this._appendTo()),
					this._on(this.uiDialog, {
						keydown : function (e) {
							if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE)
								return e.preventDefault(), void this.close(e);
							if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
								var i = this.uiDialog.find(":tabbable"),
								n = i.filter(":first"),
								s = i.filter(":last");
								e.target !== s[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== n[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function () {
										s.focus()
									}), e.preventDefault()) : (this._delay(function () {
										n.focus()
									}), e.preventDefault())
							}
						},
						mousedown : function (t) {
							this._moveToTop(t) && this._focusTabbable()
						}
					}),
					this.element.find("[aria-describedby]").length || this.uiDialog.attr({
						"aria-describedby" : this.element.uniqueId().attr("id")
					})
				},
				_createTitlebar : function () {
					var e;
					this.uiDialogTitlebar = t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),
					this._on(this.uiDialogTitlebar, {
						mousedown : function (e) {
							t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
						}
					}),
					this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
							label : this.options.closeText,
							icons : {
								primary : "ui-icon-closethick"
							},
							text : !1
						}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),
					this._on(this.uiDialogTitlebarClose, {
						click : function (t) {
							t.preventDefault(),
							this.close(t)
						}
					}),
					e = t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),
					this._title(e),
					this.uiDialog.attr({
						"aria-labelledby" : e.attr("id")
					})
				},
				_title : function (t) {
					this.options.title || t.html("&#160;"),
					t.text(this.options.title)
				},
				_createButtonPane : function () {
					this.uiDialogButtonPane = t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
					this.uiButtonSet = t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),
					this._createButtons()
				},
				_createButtons : function () {
					var e = this,
					i = this.options.buttons;
					return this.uiDialogButtonPane.remove(),
					this.uiButtonSet.empty(),
					t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this.uiDialog.removeClass("ui-dialog-buttons") : (t.each(i, function (i, n) {
							var s,
							r;
							n = t.isFunction(n) ? {
								click : n,
								text : i
							}
							 : n,
							n = t.extend({
									type : "button"
								}, n),
							s = n.click,
							n.click = function () {
								s.apply(e.element[0], arguments)
							},
							r = {
								icons : n.icons,
								text : n.showText
							},
							delete n.icons,
							delete n.showText,
							t("<button></button>", n).button(r).appendTo(e.uiButtonSet)
						}), this.uiDialog.addClass("ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
				},
				_makeDraggable : function () {
					function e(t) {
						return {
							position : t.position,
							offset : t.offset
						}
					}
					var i = this,
					n = this.options;
					this.uiDialog.draggable({
						cancel : ".ui-dialog-content, .ui-dialog-titlebar-close",
						handle : ".ui-dialog-titlebar",
						containment : "document",
						start : function (n, s) {
							t(this).addClass("ui-dialog-dragging"),
							i._blockFrames(),
							i._trigger("dragStart", n, e(s))
						},
						drag : function (t, n) {
							i._trigger("drag", t, e(n))
						},
						stop : function (s, r) {
							var o = r.offset.left - i.document.scrollLeft(),
							a = r.offset.top - i.document.scrollTop();
							n.position = {
								my : "left top",
								at : "left" + (o >= 0 ? "+" : "") + o + " top" + (a >= 0 ? "+" : "") + a,
								of : i.window
							},
							t(this).removeClass("ui-dialog-dragging"),
							i._unblockFrames(),
							i._trigger("dragStop", s, e(r))
						}
					})
				},
				_makeResizable : function () {
					function e(t) {
						return {
							originalPosition : t.originalPosition,
							originalSize : t.originalSize,
							position : t.position,
							size : t.size
						}
					}
					var i = this,
					n = this.options,
					s = n.resizable,
					r = this.uiDialog.css("position"),
					o = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
					this.uiDialog.resizable({
						cancel : ".ui-dialog-content",
						containment : "document",
						alsoResize : this.element,
						maxWidth : n.maxWidth,
						maxHeight : n.maxHeight,
						minWidth : n.minWidth,
						minHeight : this._minHeight(),
						handles : o,
						start : function (n, s) {
							t(this).addClass("ui-dialog-resizing"),
							i._blockFrames(),
							i._trigger("resizeStart", n, e(s))
						},
						resize : function (t, n) {
							i._trigger("resize", t, e(n))
						},
						stop : function (s, r) {
							var o = i.uiDialog.offset(),
							a = o.left - i.document.scrollLeft(),
							l = o.top - i.document.scrollTop();
							n.height = i.uiDialog.height(),
							n.width = i.uiDialog.width(),
							n.position = {
								my : "left top",
								at : "left" + (a >= 0 ? "+" : "") + a + " top" + (l >= 0 ? "+" : "") + l,
								of : i.window
							},
							t(this).removeClass("ui-dialog-resizing"),
							i._unblockFrames(),
							i._trigger("resizeStop", s, e(r))
						}
					}).css("position", r)
				},
				_trackFocus : function () {
					this._on(this.widget(), {
						focusin : function (e) {
							this._makeFocusTarget(),
							this._focusedElement = t(e.target)
						}
					})
				},
				_makeFocusTarget : function () {
					this._untrackInstance(),
					this._trackingInstances().unshift(this)
				},
				_untrackInstance : function () {
					var e = this._trackingInstances(),
					i = t.inArray(this, e);
					-1 !== i && e.splice(i, 1)
				},
				_trackingInstances : function () {
					var t = this.document.data("ui-dialog-instances");
					return t || (t = [], this.document.data("ui-dialog-instances", t)),
					t
				},
				_minHeight : function () {
					var t = this.options;
					return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
				},
				_position : function () {
					var t = this.uiDialog.is(":visible");
					t || this.uiDialog.show(),
					this.uiDialog.position(this.options.position),
					t || this.uiDialog.hide()
				},
				_setOptions : function (e) {
					var i = this,
					n = !1,
					s = {};
					t.each(e, function (t, e) {
						i._setOption(t, e),
						t in i.sizeRelatedOptions && (n = !0),
						t in i.resizableRelatedOptions && (s[t] = e)
					}),
					n && (this._size(), this._position()),
					this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s)
				},
				_setOption : function (t, e) {
					var i,
					n,
					s = this.uiDialog;
					"dialogClass" === t && s.removeClass(this.options.dialogClass).addClass(e),
					"disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({
							label : "" + e
						}), "draggable" === t && (i = s.is(":data(ui-draggable)"), i && !e && s.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && (n = s.is(":data(ui-resizable)"), n && !e && s.resizable("destroy"), n && "string" == typeof e && s.resizable("option", "handles", e), n || e === !1 || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
				},
				_size : function () {
					var t,
					e,
					i,
					n = this.options;
					this.element.show().css({
						width : "auto",
						minHeight : 0,
						maxHeight : "none",
						height : 0
					}),
					n.minWidth > n.width && (n.width = n.minWidth),
					t = this.uiDialog.css({
							height : "auto",
							width : n.width
						}).outerHeight(),
					e = Math.max(0, n.minHeight - t),
					i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none",
					"auto" === n.height ? this.element.css({
						minHeight : e,
						maxHeight : i,
						height : "auto"
					}) : this.element.height(Math.max(0, n.height - t)),
					this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
				},
				_blockFrames : function () {
					this.iframeBlocks = this.document.find("iframe").map(function () {
							var e = t(this);
							return t("<div>").css({
								position : "absolute",
								width : e.outerWidth(),
								height : e.outerHeight()
							}).appendTo(e.parent()).offset(e.offset())[0]
						})
				},
				_unblockFrames : function () {
					this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
				},
				_allowInteraction : function (e) {
					return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length
				},
				_createOverlay : function () {
					if (this.options.modal) {
						var e = !0;
						this._delay(function () {
							e = !1
						}),
						this.document.data("ui-dialog-overlays") || this._on(this.document, {
							focusin : function (t) {
								e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
							}
						}),
						this.overlay = t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),
						this._on(this.overlay, {
							mousedown : "_keepFocus"
						}),
						this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
					}
				},
				_destroyOverlay : function () {
					if (this.options.modal && this.overlay) {
						var t = this.document.data("ui-dialog-overlays") - 1;
						t ? this.document.data("ui-dialog-overlays", t) : this.document.unbind("focusin").removeData("ui-dialog-overlays"),
						this.overlay.remove(),
						this.overlay = null
					}
				}
			}),
			t.widget("ui.droppable", {
				version : "1.11.4",
				widgetEventPrefix : "drop",
				options : {
					accept : "*",
					activeClass : !1,
					addClasses : !0,
					greedy : !1,
					hoverClass : !1,
					scope : "default",
					tolerance : "intersect",
					activate : null,
					deactivate : null,
					drop : null,
					out : null,
					over : null
				},
				_create : function () {
					var e,
					i = this.options,
					n = i.accept;
					this.isover = !1,
					this.isout = !0,
					this.accept = t.isFunction(n) ? n : function (t) {
						return t.is(n)
					},
					this.proportions = function () {
						return arguments.length ? void(e = arguments[0]) : e ? e : e = {
							width : this.element[0].offsetWidth,
							height : this.element[0].offsetHeight
						}
					},
					this._addToManager(i.scope),
					i.addClasses && this.element.addClass("ui-droppable")
				},
				_addToManager : function (e) {
					t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [],
					t.ui.ddmanager.droppables[e].push(this)
				},
				_splice : function (t) {
					for (var e = 0; t.length > e; e++)
						t[e] === this && t.splice(e, 1)
				},
				_destroy : function () {
					var e = t.ui.ddmanager.droppables[this.options.scope];
					this._splice(e),
					this.element.removeClass("ui-droppable ui-droppable-disabled")
				},
				_setOption : function (e, i) {
					if ("accept" === e)
						this.accept = t.isFunction(i) ? i : function (t) {
							return t.is(i)
						};
					else if ("scope" === e) {
						var n = t.ui.ddmanager.droppables[this.options.scope];
						this._splice(n),
						this._addToManager(i)
					}
					this._super(e, i)
				},
				_activate : function (e) {
					var i = t.ui.ddmanager.current;
					this.options.activeClass && this.element.addClass(this.options.activeClass),
					i && this._trigger("activate", e, this.ui(i))
				},
				_deactivate : function (e) {
					var i = t.ui.ddmanager.current;
					this.options.activeClass && this.element.removeClass(this.options.activeClass),
					i && this._trigger("deactivate", e, this.ui(i))
				},
				_over : function (e) {
					var i = t.ui.ddmanager.current;
					i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
				},
				_out : function (e) {
					var i = t.ui.ddmanager.current;
					i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
				},
				_drop : function (e, i) {
					var n = i || t.ui.ddmanager.current,
					s = !1;
					return n && (n.currentItem || n.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
							var i = t(this).droppable("instance");
							return i.options.greedy && !i.options.disabled && i.options.scope === n.options.scope && i.accept.call(i.element[0], n.currentItem || n.element) && t.ui.intersect(n, t.extend(i, {
									offset : i.element.offset()
								}), i.options.tolerance, e) ? (s = !0, !1) : void 0
						}), s ? !1 : this.accept.call(this.element[0], n.currentItem || n.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(n)), this.element) : !1) : !1
				},
				ui : function (t) {
					return {
						draggable : t.currentItem || t.element,
						helper : t.helper,
						position : t.position,
						offset : t.positionAbs
					}
				}
			}),
			t.ui.intersect = function () {
				function t(t, e, i) {
					return t >= e && e + i > t
				}
				return function (e, i, n, s) {
					if (!i.offset)
						return !1;
					var r = (e.positionAbs || e.position.absolute).left + e.margins.left,
					o = (e.positionAbs || e.position.absolute).top + e.margins.top,
					a = r + e.helperProportions.width,
					l = o + e.helperProportions.height,
					h = i.offset.left,
					u = i.offset.top,
					c = h + i.proportions().width,
					d = u + i.proportions().height;
					switch (n) {
					case "fit":
						return r >= h && c >= a && o >= u && d >= l;
					case "intersect":
						return r + e.helperProportions.width / 2 > h && c > a - e.helperProportions.width / 2 && o + e.helperProportions.height / 2 > u && d > l - e.helperProportions.height / 2;
					case "pointer":
						return t(s.pageY, u, i.proportions().height) && t(s.pageX, h, i.proportions().width);
					case "touch":
						return (o >= u && d >= o || l >= u && d >= l || u > o && l > d) && (r >= h && c >= r || a >= h && c >= a || h > r && a > c);
					default:
						return !1
					}
				}
			}
			(),
			t.ui.ddmanager = {
				current : null,
				droppables : {
					"default" : []
				},
				prepareOffsets : function (e, i) {
					var n,
					s,
					r = t.ui.ddmanager.droppables[e.options.scope] || [],
					o = i ? i.type : null,
					a = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
					t : for (n = 0; r.length > n; n++)
						if (!(r[n].options.disabled || e && !r[n].accept.call(r[n].element[0], e.currentItem || e.element))) {
							for (s = 0; a.length > s; s++)
								if (a[s] === r[n].element[0]) {
									r[n].proportions().height = 0;
									continue t
								}
							r[n].visible = "none" !== r[n].element.css("display"),
							r[n].visible && ("mousedown" === o && r[n]._activate.call(r[n], i), r[n].offset = r[n].element.offset(), r[n].proportions({
									width : r[n].element[0].offsetWidth,
									height : r[n].element[0].offsetHeight
								}))
						}
				},
				drop : function (e, i) {
					var n = !1;
					return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function () {
						this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance, i) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
					}),
					n
				},
				dragStart : function (e, i) {
					e.element.parentsUntil("body").bind("scroll.droppable", function () {
						e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
					})
				},
				drag : function (e, i) {
					e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i),
					t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
						if (!this.options.disabled && !this.greedyChild && this.visible) {
							var n,
							s,
							r,
							o = t.ui.intersect(e, this, this.options.tolerance, i),
							a = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
							a && (this.options.greedy && (s = this.options.scope, r = this.element.parents(":data(ui-droppable)").filter(function () {
											return t(this).droppable("instance").options.scope === s
										}), r.length && (n = t(r[0]).droppable("instance"), n.greedyChild = "isover" === a)), n && "isover" === a && (n.isover = !1, n.isout = !0, n._out.call(n, i)), this[a] = !0, this["isout" === a ? "isover" : "isout"] = !1, this["isover" === a ? "_over" : "_out"].call(this, i), n && "isout" === a && (n.isout = !1, n.isover = !0, n._over.call(n, i)))
						}
					})
				},
				dragStop : function (e, i) {
					e.element.parentsUntil("body").unbind("scroll.droppable"),
					e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
				}
			},
			t.ui.droppable;
			var b = "ui-effects-",
			y = t;
			t.effects = {
				effect : {}

			},
			function (t, e) {
				function i(t, e, i) {
					var n = c[e.type] || {};
					return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : t > n.max ? n.max : t)
				}
				function n(i) {
					var n = h(),
					s = n._rgba = [];
					return i = i.toLowerCase(),
					p(l, function (t, r) {
						var o,
						a = r.re.exec(i),
						l = a && r.parse(a),
						h = r.space || "rgba";
						return l ? (o = n[h](l), n[u[h].cache] = o[u[h].cache], s = n._rgba = o._rgba, !1) : e
					}),
					s.length ? ("0,0,0,0" === s.join() && t.extend(s, r.transparent), n) : r[i]
				}
				function s(t, e, i) {
					return i = (i + 1) % 1,
					1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
				}
				var r,
				o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
				a = /^([\-+])=\s*(\d+\.?\d*)/,
				l = [{
						re : /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
						parse : function (t) {
							return [t[1], t[2], t[3], t[4]]
						}
					}, {
						re : /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
						parse : function (t) {
							return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
						}
					}, {
						re : /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
						parse : function (t) {
							return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
						}
					}, {
						re : /#([a-f0-9])([a-f0-9])([a-f0-9])/,
						parse : function (t) {
							return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
						}
					}, {
						re : /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
						space : "hsla",
						parse : function (t) {
							return [t[1], t[2] / 100, t[3] / 100, t[4]]
						}
					}
				],
				h = t.Color = function (e, i, n, s) {
					return new t.Color.fn.parse(e, i, n, s)
				},
				u = {
					rgba : {
						props : {
							red : {
								idx : 0,
								type : "byte"
							},
							green : {
								idx : 1,
								type : "byte"
							},
							blue : {
								idx : 2,
								type : "byte"
							}
						}
					},
					hsla : {
						props : {
							hue : {
								idx : 0,
								type : "degrees"
							},
							saturation : {
								idx : 1,
								type : "percent"
							},
							lightness : {
								idx : 2,
								type : "percent"
							}
						}
					}
				},
				c = {
					"byte" : {
						floor : !0,
						max : 255
					},
					percent : {
						max : 1
					},
					degrees : {
						mod : 360,
						floor : !0
					}
				},
				d = h.support = {},
				f = t("<p>")[0],
				p = t.each;
				f.style.cssText = "background-color:rgba(1,1,1,.5)",
				d.rgba = f.style.backgroundColor.indexOf("rgba") > -1,
				p(u, function (t, e) {
					e.cache = "_" + t,
					e.props.alpha = {
						idx : 3,
						type : "percent",
						def : 1
					}
				}),
				h.fn = t.extend(h.prototype, {
						parse : function (s, o, a, l) {
							if (s === e)
								return this._rgba = [null, null, null, null], this;
							(s.jquery || s.nodeType) && (s = t(s).css(o), o = e);
							var c = this,
							d = t.type(s),
							f = this._rgba = [];
							return o !== e && (s = [s, o, a, l], d = "array"),
							"string" === d ? this.parse(n(s) || r._default) : "array" === d ? (p(u.rgba.props, function (t, e) {
									f[e.idx] = i(s[e.idx], e)
								}), this) : "object" === d ? (s instanceof h ? p(u, function (t, e) {
									s[e.cache] && (c[e.cache] = s[e.cache].slice())
								}) : p(u, function (e, n) {
									var r = n.cache;
									p(n.props, function (t, e) {
										if (!c[r] && n.to) {
											if ("alpha" === t || null == s[t])
												return;
											c[r] = n.to(c._rgba)
										}
										c[r][e.idx] = i(s[t], e, !0)
									}),
									c[r] && 0 > t.inArray(null, c[r].slice(0, 3)) && (c[r][3] = 1, n.from && (c._rgba = n.from(c[r])))
								}), this) : e
						},
						is : function (t) {
							var i = h(t),
							n = !0,
							s = this;
							return p(u, function (t, r) {
								var o,
								a = i[r.cache];
								return a && (o = s[r.cache] || r.to && r.to(s._rgba) || [], p(r.props, function (t, i) {
										return null != a[i.idx] ? n = a[i.idx] === o[i.idx] : e
									})),
								n
							}),
							n
						},
						_space : function () {
							var t = [],
							e = this;
							return p(u, function (i, n) {
								e[n.cache] && t.push(i)
							}),
							t.pop()
						},
						transition : function (t, e) {
							var n = h(t),
							s = n._space(),
							r = u[s],
							o = 0 === this.alpha() ? h("transparent") : this,
							a = o[r.cache] || r.to(o._rgba),
							l = a.slice();
							return n = n[r.cache],
							p(r.props, function (t, s) {
								var r = s.idx,
								o = a[r],
								h = n[r],
								u = c[s.type] || {};
								null !== h && (null === o ? l[r] = h : (u.mod && (h - o > u.mod / 2 ? o += u.mod : o - h > u.mod / 2 && (o -= u.mod)), l[r] = i((h - o) * e + o, s)))
							}),
							this[s](l)
						},
						blend : function (e) {
							if (1 === this._rgba[3])
								return this;
							var i = this._rgba.slice(),
							n = i.pop(),
							s = h(e)._rgba;
							return h(t.map(i, function (t, e) {
									return (1 - n) * s[e] + n * t
								}))
						},
						toRgbaString : function () {
							var e = "rgba(",
							i = t.map(this._rgba, function (t, e) {
									return null == t ? e > 2 ? 1 : 0 : t
								});
							return 1 === i[3] && (i.pop(), e = "rgb("),
							e + i.join() + ")"
						},
						toHslaString : function () {
							var e = "hsla(",
							i = t.map(this.hsla(), function (t, e) {
									return null == t && (t = e > 2 ? 1 : 0),
									e && 3 > e && (t = Math.round(100 * t) + "%"),
									t
								});
							return 1 === i[3] && (i.pop(), e = "hsl("),
							e + i.join() + ")"
						},
						toHexString : function (e) {
							var i = this._rgba.slice(),
							n = i.pop();
							return e && i.push(~~(255 * n)),
							"#" + t.map(i, function (t) {
								return t = (t || 0).toString(16),
								1 === t.length ? "0" + t : t
							}).join("")
						},
						toString : function () {
							return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
						}
					}),
				h.fn.parse.prototype = h.fn,
				u.hsla.to = function (t) {
					if (null == t[0] || null == t[1] || null == t[2])
						return [null, null, null, t[3]];
					var e,
					i,
					n = t[0] / 255,
					s = t[1] / 255,
					r = t[2] / 255,
					o = t[3],
					a = Math.max(n, s, r),
					l = Math.min(n, s, r),
					h = a - l,
					u = a + l,
					c = .5 * u;
					return e = l === a ? 0 : n === a ? 60 * (s - r) / h + 360 : s === a ? 60 * (r - n) / h + 120 : 60 * (n - s) / h + 240,
					i = 0 === h ? 0 : .5 >= c ? h / u : h / (2 - u),
					[Math.round(e) % 360, i, c, null == o ? 1 : o]
				},
				u.hsla.from = function (t) {
					if (null == t[0] || null == t[1] || null == t[2])
						return [null, null, null, t[3]];
					var e = t[0] / 360,
					i = t[1],
					n = t[2],
					r = t[3],
					o = .5 >= n ? n * (1 + i) : n + i - n * i,
					a = 2 * n - o;
					return [Math.round(255 * s(a, o, e + 1 / 3)), Math.round(255 * s(a, o, e)), Math.round(255 * s(a, o, e - 1 / 3)), r]
				},
				p(u, function (n, s) {
					var r = s.props,
					o = s.cache,
					l = s.to,
					u = s.from;
					h.fn[n] = function (n) {
						if (l && !this[o] && (this[o] = l(this._rgba)), n === e)
							return this[o].slice();
						var s,
						a = t.type(n),
						c = "array" === a || "object" === a ? n : arguments,
						d = this[o].slice();
						return p(r, function (t, e) {
							var n = c["object" === a ? t : e.idx];
							null == n && (n = d[e.idx]),
							d[e.idx] = i(n, e)
						}),
						u ? (s = h(u(d)), s[o] = d, s) : h(d)
					},
					p(r, function (e, i) {
						h.fn[e] || (h.fn[e] = function (s) {
							var r,
							o = t.type(s),
							l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : n,
							h = this[l](),
							u = h[i.idx];
							return "undefined" === o ? u : ("function" === o && (s = s.call(this, u), o = t.type(s)), null == s && i.empty ? this : ("string" === o && (r = a.exec(s), r && (s = u + parseFloat(r[2]) * ("+" === r[1] ? 1 : -1))), h[i.idx] = s, this[l](h)))
						})
					})
				}),
				h.hook = function (e) {
					var i = e.split(" ");
					p(i, function (e, i) {
						t.cssHooks[i] = {
							set : function (e, s) {
								var r,
								o,
								a = "";
								if ("transparent" !== s && ("string" !== t.type(s) || (r = n(s)))) {
									if (s = h(r || s), !d.rgba && 1 !== s._rgba[3]) {
										for (o = "backgroundColor" === i ? e.parentNode : e; ("" === a || "transparent" === a) && o && o.style; )
											try {
												a = t.css(o, "backgroundColor"),
												o = o.parentNode
											} catch (l) {}

										s = s.blend(a && "transparent" !== a ? a : "_default")
									}
									s = s.toRgbaString()
								}
								try {
									e.style[i] = s
								} catch (l) {}

							}
						},
						t.fx.step[i] = function (e) {
							e.colorInit || (e.start = h(e.elem, i), e.end = h(e.end), e.colorInit = !0),
							t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
						}
					})
				},
				h.hook(o),
				t.cssHooks.borderColor = {
					expand : function (t) {
						var e = {};
						return p(["Top", "Right", "Bottom", "Left"], function (i, n) {
							e["border" + n + "Color"] = t
						}),
						e
					}
				},
				r = t.Color.names = {
					aqua : "#00ffff",
					black : "#000000",
					blue : "#0000ff",
					fuchsia : "#ff00ff",
					gray : "#808080",
					green : "#008000",
					lime : "#00ff00",
					maroon : "#800000",
					navy : "#000080",
					olive : "#808000",
					purple : "#800080",
					red : "#ff0000",
					silver : "#c0c0c0",
					teal : "#008080",
					white : "#ffffff",
					yellow : "#ffff00",
					transparent : [null, null, null, 0],
					_default : "#ffffff"
				}
			}
			(y),
			function () {
				function e(e) {
					var i,
					n,
					s = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
					r = {};
					if (s && s.length && s[0] && s[s[0]])
						for (n = s.length; n--; )
							i = s[n], "string" == typeof s[i] && (r[t.camelCase(i)] = s[i]);
					else
						for (i in s)
							"string" == typeof s[i] && (r[i] = s[i]);
					return r
				}
				function i(e, i) {
					var n,
					r,
					o = {};
					for (n in i)
						r = i[n], e[n] !== r && (s[n] || (t.fx.step[n] || !isNaN(parseFloat(r))) && (o[n] = r));
					return o
				}
				var n = ["add", "remove", "toggle"],
				s = {
					border : 1,
					borderBottom : 1,
					borderColor : 1,
					borderLeft : 1,
					borderRight : 1,
					borderTop : 1,
					borderWidth : 1,
					margin : 1,
					padding : 1
				};
				t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
					t.fx.step[i] = function (t) {
						("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (y.style(t.elem, i, t.end), t.setAttr = !0)
					}
				}),
				t.fn.addBack || (t.fn.addBack = function (t) {
					return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
				}),
				t.effects.animateClass = function (s, r, o, a) {
					var l = t.speed(r, o, a);
					return this.queue(function () {
						var r,
						o = t(this),
						a = o.attr("class") || "",
						h = l.children ? o.find("*").addBack() : o;
						h = h.map(function () {
								var i = t(this);
								return {
									el : i,
									start : e(this)
								}
							}),
						r = function () {
							t.each(n, function (t, e) {
								s[e] && o[e + "Class"](s[e])
							})
						},
						r(),
						h = h.map(function () {
								return this.end = e(this.el[0]),
								this.diff = i(this.start, this.end),
								this
							}),
						o.attr("class", a),
						h = h.map(function () {
								var e = this,
								i = t.Deferred(),
								n = t.extend({}, l, {
										queue : !1,
										complete : function () {
											i.resolve(e)
										}
									});
								return this.el.animate(this.diff, n),
								i.promise()
							}),
						t.when.apply(t, h.get()).done(function () {
							r(),
							t.each(arguments, function () {
								var e = this.el;
								t.each(this.diff, function (t) {
									e.css(t, "")
								})
							}),
							l.complete.call(o[0])
						})
					})
				},
				t.fn.extend({
					addClass : function (e) {
						return function (i, n, s, r) {
							return n ? t.effects.animateClass.call(this, {
								add : i
							}, n, s, r) : e.apply(this, arguments)
						}
					}
					(t.fn.addClass),
					removeClass : function (e) {
						return function (i, n, s, r) {
							return arguments.length > 1 ? t.effects.animateClass.call(this, {
								remove : i
							}, n, s, r) : e.apply(this, arguments)
						}
					}
					(t.fn.removeClass),
					toggleClass : function (e) {
						return function (i, n, s, r, o) {
							return "boolean" == typeof n || void 0 === n ? s ? t.effects.animateClass.call(this, n ? {
								add : i
							}
								 : {
								remove : i
							}, s, r, o) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
								toggle : i
							}, n, s, r)
						}
					}
					(t.fn.toggleClass),
					switchClass : function (e, i, n, s, r) {
						return t.effects.animateClass.call(this, {
							add : i,
							remove : e
						}, n, s, r)
					}
				})
			}
			(),
			function () {
				function e(e, i, n, s) {
					return t.isPlainObject(e) && (i = e, e = e.effect),
					e = {
						effect : e
					},
					null == i && (i = {}),
					t.isFunction(i) && (s = i, n = null, i = {}),
					("number" == typeof i || t.fx.speeds[i]) && (s = n, n = i, i = {}),
					t.isFunction(n) && (s = n, n = null),
					i && t.extend(e, i),
					n = n || i.duration,
					e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default,
					e.complete = s || i.complete,
					e
				}
				function i(e) {
					return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
				}
				t.extend(t.effects, {
					version : "1.11.4",
					save : function (t, e) {
						for (var i = 0; e.length > i; i++)
							null !== e[i] && t.data(b + e[i], t[0].style[e[i]])
					},
					restore : function (t, e) {
						var i,
						n;
						for (n = 0; e.length > n; n++)
							null !== e[n] && (i = t.data(b + e[n]), void 0 === i && (i = ""), t.css(e[n], i))
					},
					setMode : function (t, e) {
						return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"),
						e
					},
					getBaseline : function (t, e) {
						var i,
						n;
						switch (t[0]) {
						case "top":
							i = 0;
							break;
						case "middle":
							i = .5;
							break;
						case "bottom":
							i = 1;
							break;
						default:
							i = t[0] / e.height
						}
						switch (t[1]) {
						case "left":
							n = 0;
							break;
						case "center":
							n = .5;
							break;
						case "right":
							n = 1;
							break;
						default:
							n = t[1] / e.width
						}
						return {
							x : n,
							y : i
						}
					},
					createWrapper : function (e) {
						if (e.parent().is(".ui-effects-wrapper"))
							return e.parent();
						var i = {
							width : e.outerWidth(!0),
							height : e.outerHeight(!0),
							"float" : e.css("float")
						},
						n = t("<div></div>").addClass("ui-effects-wrapper").css({
								fontSize : "100%",
								background : "transparent",
								border : "none",
								margin : 0,
								padding : 0
							}),
						s = {
							width : e.width(),
							height : e.height()
						},
						r = document.activeElement;
						try {
							r.id
						} catch (o) {
							r = document.body
						}
						return e.wrap(n),
						(e[0] === r || t.contains(e[0], r)) && t(r).focus(),
						n = e.parent(),
						"static" === e.css("position") ? (n.css({
								position : "relative"
							}), e.css({
								position : "relative"
							})) : (t.extend(i, {
								position : e.css("position"),
								zIndex : e.css("z-index")
							}), t.each(["top", "left", "bottom", "right"], function (t, n) {
								i[n] = e.css(n),
								isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
							}), e.css({
								position : "relative",
								top : 0,
								left : 0,
								right : "auto",
								bottom : "auto"
							})),
						e.css(s),
						n.css(i).show()
					},
					removeWrapper : function (e) {
						var i = document.activeElement;
						return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()),
						e
					},
					setTransition : function (e, i, n, s) {
						return s = s || {},
						t.each(i, function (t, i) {
							var r = e.cssUnit(i);
							r[0] > 0 && (s[i] = r[0] * n + r[1])
						}),
						s
					}
				}),
				t.fn.extend({
					effect : function () {
						function i(e) {
							function i() {
								t.isFunction(r) && r.call(s[0]),
								t.isFunction(e) && e()
							}
							var s = t(this),
							r = n.complete,
							a = n.mode;
							(s.is(":hidden") ? "hide" === a : "show" === a) ? (s[a](), i()) : o.call(s[0], n, i)
						}
						var n = e.apply(this, arguments),
						s = n.mode,
						r = n.queue,
						o = t.effects.effect[n.effect];
						return t.fx.off || !o ? s ? this[s](n.duration, n.complete) : this.each(function () {
							n.complete && n.complete.call(this)
						}) : r === !1 ? this.each(i) : this.queue(r || "fx", i)
					},
					show : function (t) {
						return function (n) {
							if (i(n))
								return t.apply(this, arguments);
							var s = e.apply(this, arguments);
							return s.mode = "show",
							this.effect.call(this, s)
						}
					}
					(t.fn.show),
					hide : function (t) {
						return function (n) {
							if (i(n))
								return t.apply(this, arguments);
							var s = e.apply(this, arguments);
							return s.mode = "hide",
							this.effect.call(this, s)
						}
					}
					(t.fn.hide),
					toggle : function (t) {
						return function (n) {
							if (i(n) || "boolean" == typeof n)
								return t.apply(this, arguments);
							var s = e.apply(this, arguments);
							return s.mode = "toggle",
							this.effect.call(this, s)
						}
					}
					(t.fn.toggle),
					cssUnit : function (e) {
						var i = this.css(e),
						n = [];
						return t.each(["em", "px", "%", "pt"], function (t, e) {
							i.indexOf(e) > 0 && (n = [parseFloat(i), e])
						}),
						n
					}
				})
			}
			(),
			function () {
				var e = {};
				t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
					e[i] = function (e) {
						return Math.pow(e, t + 2)
					}
				}),
				t.extend(e, {
					Sine : function (t) {
						return 1 - Math.cos(t * Math.PI / 2)
					},
					Circ : function (t) {
						return 1 - Math.sqrt(1 - t * t)
					},
					Elastic : function (t) {
						return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
					},
					Back : function (t) {
						return t * t * (3 * t - 2)
					},
					Bounce : function (t) {
						for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t; );
						return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
					}
				}),
				t.each(e, function (e, i) {
					t.easing["easeIn" + e] = i,
					t.easing["easeOut" + e] = function (t) {
						return 1 - i(1 - t)
					},
					t.easing["easeInOut" + e] = function (t) {
						return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
					}
				})
			}
			(),
			t.effects,
			t.effects.effect.blind = function (e, i) {
				var n,
				s,
				r,
				o = t(this),
				a = /up|down|vertical/,
				l = /up|left|vertical|horizontal/,
				h = ["position", "top", "bottom", "left", "right", "height", "width"],
				u = t.effects.setMode(o, e.mode || "hide"),
				c = e.direction || "up",
				d = a.test(c),
				f = d ? "height" : "width",
				p = d ? "top" : "left",
				g = l.test(c),
				m = {},
				v = "show" === u;
				o.parent().is(".ui-effects-wrapper") ? t.effects.save(o.parent(), h) : t.effects.save(o, h),
				o.show(),
				n = t.effects.createWrapper(o).css({
						overflow : "hidden"
					}),
				s = n[f](),
				r = parseFloat(n.css(p)) || 0,
				m[f] = v ? s : 0,
				g || (o.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({
						position : "absolute"
					}), m[p] = v ? r : s + r),
				v && (n.css(f, 0), g || n.css(p, r + s)),
				n.animate(m, {
					duration : e.duration,
					easing : e.easing,
					queue : !1,
					complete : function () {
						"hide" === u && o.hide(),
						t.effects.restore(o, h),
						t.effects.removeWrapper(o),
						i()
					}
				})
			},
			t.effects.effect.bounce = function (e, i) {
				var n,
				s,
				r,
				o = t(this),
				a = ["position", "top", "bottom", "left", "right", "height", "width"],
				l = t.effects.setMode(o, e.mode || "effect"),
				h = "hide" === l,
				u = "show" === l,
				c = e.direction || "up",
				d = e.distance,
				f = e.times || 5,
				p = 2 * f + (u || h ? 1 : 0),
				g = e.duration / p,
				m = e.easing,
				v = "up" === c || "down" === c ? "top" : "left",
				b = "up" === c || "left" === c,
				y = o.queue(),
				_ = y.length;
				for ((u || h) && a.push("opacity"), t.effects.save(o, a), o.show(), t.effects.createWrapper(o), d || (d = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), u && (r = {
							opacity : 1
						}, r[v] = 0, o.css("opacity", 0).css(v, b ? 2 * -d : 2 * d).animate(r, g, m)), h && (d /= Math.pow(2, f - 1)), r = {}, r[v] = 0, n = 0; f > n; n++)
					s = {},
				s[v] = (b ? "-=" : "+=") + d,
				o.animate(s, g, m).animate(r, g, m),
				d = h ? 2 * d : d / 2;
				h && (s = {
						opacity : 0
					}, s[v] = (b ? "-=" : "+=") + d, o.animate(s, g, m)),
				o.queue(function () {
					h && o.hide(),
					t.effects.restore(o, a),
					t.effects.removeWrapper(o),
					i()
				}),
				_ > 1 && y.splice.apply(y, [1, 0].concat(y.splice(_, p + 1))),
				o.dequeue()
			},
			t.effects.effect.clip = function (e, i) {
				var n,
				s,
				r,
				o = t(this),
				a = ["position", "top", "bottom", "left", "right", "height", "width"],
				l = t.effects.setMode(o, e.mode || "hide"),
				h = "show" === l,
				u = e.direction || "vertical",
				c = "vertical" === u,
				d = c ? "height" : "width",
				f = c ? "top" : "left",
				p = {};
				t.effects.save(o, a),
				o.show(),
				n = t.effects.createWrapper(o).css({
						overflow : "hidden"
					}),
				s = "IMG" === o[0].tagName ? n : o,
				r = s[d](),
				h && (s.css(d, 0), s.css(f, r / 2)),
				p[d] = h ? r : 0,
				p[f] = h ? 0 : r / 2,
				s.animate(p, {
					queue : !1,
					duration : e.duration,
					easing : e.easing,
					complete : function () {
						h || o.hide(),
						t.effects.restore(o, a),
						t.effects.removeWrapper(o),
						i()
					}
				})
			},
			t.effects.effect.drop = function (e, i) {
				var n,
				s = t(this),
				r = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
				o = t.effects.setMode(s, e.mode || "hide"),
				a = "show" === o,
				l = e.direction || "left",
				h = "up" === l || "down" === l ? "top" : "left",
				u = "up" === l || "left" === l ? "pos" : "neg",
				c = {
					opacity : a ? 1 : 0
				};
				t.effects.save(s, r),
				s.show(),
				t.effects.createWrapper(s),
				n = e.distance || s["top" === h ? "outerHeight" : "outerWidth"](!0) / 2,
				a && s.css("opacity", 0).css(h, "pos" === u ? -n : n),
				c[h] = (a ? "pos" === u ? "+=" : "-=" : "pos" === u ? "-=" : "+=") + n,
				s.animate(c, {
					queue : !1,
					duration : e.duration,
					easing : e.easing,
					complete : function () {
						"hide" === o && s.hide(),
						t.effects.restore(s, r),
						t.effects.removeWrapper(s),
						i()
					}
				})
			},
			t.effects.effect.explode = function (e, i) {
				function n() {
					y.push(this),
					y.length === c * d && s()
				}
				function s() {
					f.css({
						visibility : "visible"
					}),
					t(y).remove(),
					g || f.hide(),
					i()
				}
				var r,
				o,
				a,
				l,
				h,
				u,
				c = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
				d = c,
				f = t(this),
				p = t.effects.setMode(f, e.mode || "hide"),
				g = "show" === p,
				m = f.show().css("visibility", "hidden").offset(),
				v = Math.ceil(f.outerWidth() / d),
				b = Math.ceil(f.outerHeight() / c),
				y = [];
				for (r = 0; c > r; r++)
					for (l = m.top + r * b, u = r - (c - 1) / 2, o = 0; d > o; o++)
						a = m.left + o * v, h = o - (d - 1) / 2, f.clone().appendTo("body").wrap("<div></div>").css({
							position : "absolute",
							visibility : "visible",
							left : -o * v,
							top : -r * b
						}).parent().addClass("ui-effects-explode").css({
							position : "absolute",
							overflow : "hidden",
							width : v,
							height : b,
							left : a + (g ? h * v : 0),
							top : l + (g ? u * b : 0),
							opacity : g ? 0 : 1
						}).animate({
							left : a + (g ? 0 : h * v),
							top : l + (g ? 0 : u * b),
							opacity : g ? 1 : 0
						}, e.duration || 500, e.easing, n)
			},
			t.effects.effect.fade = function (e, i) {
				var n = t(this),
				s = t.effects.setMode(n, e.mode || "toggle");
				n.animate({
					opacity : s
				}, {
					queue : !1,
					duration : e.duration,
					easing : e.easing,
					complete : i
				})
			},
			t.effects.effect.fold = function (e, i) {
				var n,
				s,
				r = t(this),
				o = ["position", "top", "bottom", "left", "right", "height", "width"],
				a = t.effects.setMode(r, e.mode || "hide"),
				l = "show" === a,
				h = "hide" === a,
				u = e.size || 15,
				c = /([0-9]+)%/.exec(u),
				d = !!e.horizFirst,
				f = l !== d,
				p = f ? ["width", "height"] : ["height", "width"],
				g = e.duration / 2,
				m = {},
				v = {};
				t.effects.save(r, o),
				r.show(),
				n = t.effects.createWrapper(r).css({
						overflow : "hidden"
					}),
				s = f ? [n.width(), n.height()] : [n.height(), n.width()],
				c && (u = parseInt(c[1], 10) / 100 * s[h ? 0 : 1]),
				l && n.css(d ? {
					height : 0,
					width : u
				}
					 : {
					height : u,
					width : 0
				}),
				m[p[0]] = l ? s[0] : u,
				v[p[1]] = l ? s[1] : 0,
				n.animate(m, g, e.easing).animate(v, g, e.easing, function () {
					h && r.hide(),
					t.effects.restore(r, o),
					t.effects.removeWrapper(r),
					i()
				})
			},
			t.effects.effect.highlight = function (e, i) {
				var n = t(this),
				s = ["backgroundImage", "backgroundColor", "opacity"],
				r = t.effects.setMode(n, e.mode || "show"),
				o = {
					backgroundColor : n.css("backgroundColor")
				};
				"hide" === r && (o.opacity = 0),
				t.effects.save(n, s),
				n.show().css({
					backgroundImage : "none",
					backgroundColor : e.color || "#ffff99"
				}).animate(o, {
					queue : !1,
					duration : e.duration,
					easing : e.easing,
					complete : function () {
						"hide" === r && n.hide(),
						t.effects.restore(n, s),
						i()
					}
				})
			},
			t.effects.effect.size = function (e, i) {
				var n,
				s,
				r,
				o = t(this),
				a = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
				l = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
				h = ["width", "height", "overflow"],
				u = ["fontSize"],
				c = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
				d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
				f = t.effects.setMode(o, e.mode || "effect"),
				p = e.restore || "effect" !== f,
				g = e.scale || "both",
				m = e.origin || ["middle", "center"],
				v = o.css("position"),
				b = p ? a : l,
				y = {
					height : 0,
					width : 0,
					outerHeight : 0,
					outerWidth : 0
				};
				"show" === f && o.show(),
				n = {
					height : o.height(),
					width : o.width(),
					outerHeight : o.outerHeight(),
					outerWidth : o.outerWidth()
				},
				"toggle" === e.mode && "show" === f ? (o.from = e.to || y, o.to = e.from || n) : (o.from = e.from || ("show" === f ? y : n), o.to = e.to || ("hide" === f ? y : n)),
				r = {
					from : {
						y : o.from.height / n.height,
						x : o.from.width / n.width
					},
					to : {
						y : o.to.height / n.height,
						x : o.to.width / n.width
					}
				},
				("box" === g || "both" === g) && (r.from.y !== r.to.y && (b = b.concat(c), o.from = t.effects.setTransition(o, c, r.from.y, o.from), o.to = t.effects.setTransition(o, c, r.to.y, o.to)), r.from.x !== r.to.x && (b = b.concat(d), o.from = t.effects.setTransition(o, d, r.from.x, o.from), o.to = t.effects.setTransition(o, d, r.to.x, o.to))),
				("content" === g || "both" === g) && r.from.y !== r.to.y && (b = b.concat(u).concat(h), o.from = t.effects.setTransition(o, u, r.from.y, o.from), o.to = t.effects.setTransition(o, u, r.to.y, o.to)),
				t.effects.save(o, b),
				o.show(),
				t.effects.createWrapper(o),
				o.css("overflow", "hidden").css(o.from),
				m && (s = t.effects.getBaseline(m, n), o.from.top = (n.outerHeight - o.outerHeight()) * s.y, o.from.left = (n.outerWidth - o.outerWidth()) * s.x, o.to.top = (n.outerHeight - o.to.outerHeight) * s.y, o.to.left = (n.outerWidth - o.to.outerWidth) * s.x),
				o.css(o.from),
				("content" === g || "both" === g) && (c = c.concat(["marginTop", "marginBottom"]).concat(u), d = d.concat(["marginLeft", "marginRight"]), h = a.concat(c).concat(d), o.find("*[width]").each(function () {
						var i = t(this),
						n = {
							height : i.height(),
							width : i.width(),
							outerHeight : i.outerHeight(),
							outerWidth : i.outerWidth()
						};
						p && t.effects.save(i, h),
						i.from = {
							height : n.height * r.from.y,
							width : n.width * r.from.x,
							outerHeight : n.outerHeight * r.from.y,
							outerWidth : n.outerWidth * r.from.x
						},
						i.to = {
							height : n.height * r.to.y,
							width : n.width * r.to.x,
							outerHeight : n.height * r.to.y,
							outerWidth : n.width * r.to.x
						},
						r.from.y !== r.to.y && (i.from = t.effects.setTransition(i, c, r.from.y, i.from), i.to = t.effects.setTransition(i, c, r.to.y, i.to)),
						r.from.x !== r.to.x && (i.from = t.effects.setTransition(i, d, r.from.x, i.from), i.to = t.effects.setTransition(i, d, r.to.x, i.to)),
						i.css(i.from),
						i.animate(i.to, e.duration, e.easing, function () {
							p && t.effects.restore(i, h)
						})
					})),
				o.animate(o.to, {
					queue : !1,
					duration : e.duration,
					easing : e.easing,
					complete : function () {
						0 === o.to.opacity && o.css("opacity", o.from.opacity),
						"hide" === f && o.hide(),
						t.effects.restore(o, b),
						p || ("static" === v ? o.css({
								position : "relative",
								top : o.to.top,
								left : o.to.left
							}) : t.each(["top", "left"], function (t, e) {
								o.css(e, function (e, i) {
									var n = parseInt(i, 10),
									s = t ? o.to.left : o.to.top;
									return "auto" === i ? s + "px" : n + s + "px"
								})
							})),
						t.effects.removeWrapper(o),
						i()
					}
				})
			},
			t.effects.effect.scale = function (e, i) {
				var n = t(this),
				s = t.extend(!0, {}, e),
				r = t.effects.setMode(n, e.mode || "effect"),
				o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === r ? 0 : 100),
				a = e.direction || "both",
				l = e.origin,
				h = {
					height : n.height(),
					width : n.width(),
					outerHeight : n.outerHeight(),
					outerWidth : n.outerWidth()
				},
				u = {
					y : "horizontal" !== a ? o / 100 : 1,
					x : "vertical" !== a ? o / 100 : 1
				};
				s.effect = "size",
				s.queue = !1,
				s.complete = i,
				"effect" !== r && (s.origin = l || ["middle", "center"], s.restore = !0),
				s.from = e.from || ("show" === r ? {
						height : 0,
						width : 0,
						outerHeight : 0,
						outerWidth : 0
					}
						 : h),
				s.to = {
					height : h.height * u.y,
					width : h.width * u.x,
					outerHeight : h.outerHeight * u.y,
					outerWidth : h.outerWidth * u.x
				},
				s.fade && ("show" === r && (s.from.opacity = 0, s.to.opacity = 1), "hide" === r && (s.from.opacity = 1, s.to.opacity = 0)),
				n.effect(s)
			},
			t.effects.effect.puff = function (e, i) {
				var n = t(this),
				s = t.effects.setMode(n, e.mode || "hide"),
				r = "hide" === s,
				o = parseInt(e.percent, 10) || 150,
				a = o / 100,
				l = {
					height : n.height(),
					width : n.width(),
					outerHeight : n.outerHeight(),
					outerWidth : n.outerWidth()
				};
				t.extend(e, {
					effect : "scale",
					queue : !1,
					fade : !0,
					mode : s,
					complete : i,
					percent : r ? o : 100,
					from : r ? l : {
						height : l.height * a,
						width : l.width * a,
						outerHeight : l.outerHeight * a,
						outerWidth : l.outerWidth * a
					}
				}),
				n.effect(e)
			},
			t.effects.effect.pulsate = function (e, i) {
				var n,
				s = t(this),
				r = t.effects.setMode(s, e.mode || "show"),
				o = "show" === r,
				a = "hide" === r,
				l = o || "hide" === r,
				h = 2 * (e.times || 5) + (l ? 1 : 0),
				u = e.duration / h,
				c = 0,
				d = s.queue(),
				f = d.length;
				for ((o || !s.is(":visible")) && (s.css("opacity", 0).show(), c = 1), n = 1; h > n; n++)
					s.animate({
						opacity : c
					}, u, e.easing), c = 1 - c;
				s.animate({
					opacity : c
				}, u, e.easing),
				s.queue(function () {
					a && s.hide(),
					i()
				}),
				f > 1 && d.splice.apply(d, [1, 0].concat(d.splice(f, h + 1))),
				s.dequeue()
			},
			t.effects.effect.shake = function (e, i) {
				var n,
				s = t(this),
				r = ["position", "top", "bottom", "left", "right", "height", "width"],
				o = t.effects.setMode(s, e.mode || "effect"),
				a = e.direction || "left",
				l = e.distance || 20,
				h = e.times || 3,
				u = 2 * h + 1,
				c = Math.round(e.duration / u),
				d = "up" === a || "down" === a ? "top" : "left",
				f = "up" === a || "left" === a,
				p = {},
				g = {},
				m = {},
				v = s.queue(),
				b = v.length;
				for (t.effects.save(s, r), s.show(), t.effects.createWrapper(s), p[d] = (f ? "-=" : "+=") + l, g[d] = (f ? "+=" : "-=") + 2 * l, m[d] = (f ? "-=" : "+=") + 2 * l, s.animate(p, c, e.easing), n = 1; h > n; n++)
					s.animate(g, c, e.easing).animate(m, c, e.easing);
				s.animate(g, c, e.easing).animate(p, c / 2, e.easing).queue(function () {
					"hide" === o && s.hide(),
					t.effects.restore(s, r),
					t.effects.removeWrapper(s),
					i()
				}),
				b > 1 && v.splice.apply(v, [1, 0].concat(v.splice(b, u + 1))),
				s.dequeue()
			},
			t.effects.effect.slide = function (e, i) {
				var n,
				s = t(this),
				r = ["position", "top", "bottom", "left", "right", "width", "height"],
				o = t.effects.setMode(s, e.mode || "show"),
				a = "show" === o,
				l = e.direction || "left",
				h = "up" === l || "down" === l ? "top" : "left",
				u = "up" === l || "left" === l,
				c = {};
				t.effects.save(s, r),
				s.show(),
				n = e.distance || s["top" === h ? "outerHeight" : "outerWidth"](!0),
				t.effects.createWrapper(s).css({
					overflow : "hidden"
				}),
				a && s.css(h, u ? isNaN(n) ? "-" + n : -n : n),
				c[h] = (a ? u ? "+=" : "-=" : u ? "-=" : "+=") + n,
				s.animate(c, {
					queue : !1,
					duration : e.duration,
					easing : e.easing,
					complete : function () {
						"hide" === o && s.hide(),
						t.effects.restore(s, r),
						t.effects.removeWrapper(s),
						i()
					}
				})
			},
			t.effects.effect.transfer = function (e, i) {
				var n = t(this),
				s = t(e.to),
				r = "fixed" === s.css("position"),
				o = t("body"),
				a = r ? o.scrollTop() : 0,
				l = r ? o.scrollLeft() : 0,
				h = s.offset(),
				u = {
					top : h.top - a,
					left : h.left - l,
					height : s.innerHeight(),
					width : s.innerWidth()
				},
				c = n.offset(),
				d = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
						top : c.top - a,
						left : c.left - l,
						height : n.innerHeight(),
						width : n.innerWidth(),
						position : r ? "fixed" : "absolute"
					}).animate(u, e.duration, e.easing, function () {
						d.remove(),
						i()
					})
			},
			t.widget("ui.progressbar", {
				version : "1.11.4",
				options : {
					max : 100,
					value : 0,
					change : null,
					complete : null
				},
				min : 0,
				_create : function () {
					this.oldValue = this.options.value = this._constrainedValue(),
					this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
						role : "progressbar",
						"aria-valuemin" : this.min
					}),
					this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),
					this._refreshValue()
				},
				_destroy : function () {
					this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),
					this.valueDiv.remove()
				},
				value : function (t) {
					return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue())
				},
				_constrainedValue : function (t) {
					return void 0 === t && (t = this.options.value),
					this.indeterminate = t === !1,
					"number" != typeof t && (t = 0),
					this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
				},
				_setOptions : function (t) {
					var e = t.value;
					delete t.value,
					this._super(t),
					this.options.value = this._constrainedValue(e),
					this._refreshValue()
				},
				_setOption : function (t, e) {
					"max" === t && (e = Math.max(this.min, e)),
					"disabled" === t && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e),
					this._super(t, e)
				},
				_percentage : function () {
					return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
				},
				_refreshValue : function () {
					var e = this.options.value,
					i = this._percentage();
					this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(i.toFixed(0) + "%"),
					this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate),
					this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
							"aria-valuemax" : this.options.max,
							"aria-valuenow" : e
						}), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)),
					this.oldValue !== e && (this.oldValue = e, this._trigger("change")),
					e === this.options.max && this._trigger("complete")
				}
			}),
			t.widget("ui.selectable", t.ui.mouse, {
				version : "1.11.4",
				options : {
					appendTo : "body",
					autoRefresh : !0,
					distance : 0,
					filter : "*",
					tolerance : "touch",
					selected : null,
					selecting : null,
					start : null,
					stop : null,
					unselected : null,
					unselecting : null
				},
				_create : function () {
					var e,
					i = this;
					this.element.addClass("ui-selectable"),
					this.dragged = !1,
					this.refresh = function () {
						e = t(i.options.filter, i.element[0]),
						e.addClass("ui-selectee"),
						e.each(function () {
							var e = t(this),
							i = e.offset();
							t.data(this, "selectable-item", {
								element : this,
								$element : e,
								left : i.left,
								top : i.top,
								right : i.left + e.outerWidth(),
								bottom : i.top + e.outerHeight(),
								startselected : !1,
								selected : e.hasClass("ui-selected"),
								selecting : e.hasClass("ui-selecting"),
								unselecting : e.hasClass("ui-unselecting")
							})
						})
					},
					this.refresh(),
					this.selectees = e.addClass("ui-selectee"),
					this._mouseInit(),
					this.helper = t("<div class='ui-selectable-helper'></div>")
				},
				_destroy : function () {
					this.selectees.removeClass("ui-selectee").removeData("selectable-item"),
					this.element.removeClass("ui-selectable ui-selectable-disabled"),
					this._mouseDestroy()
				},
				_mouseStart : function (e) {
					var i = this,
					n = this.options;
					this.opos = [e.pageX, e.pageY],
					this.options.disabled || (this.selectees = t(n.filter, this.element[0]), this._trigger("start", e), t(n.appendTo).append(this.helper), this.helper.css({
							left : e.pageX,
							top : e.pageY,
							width : 0,
							height : 0
						}), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
							var n = t.data(this, "selectable-item");
							n.startselected = !0,
							e.metaKey || e.ctrlKey || (n.$element.removeClass("ui-selected"), n.selected = !1, n.$element.addClass("ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", e, {
									unselecting : n.element
								}))
						}), t(e.target).parents().addBack().each(function () {
							var n,
							s = t.data(this, "selectable-item");
							return s ? (n = !e.metaKey && !e.ctrlKey || !s.$element.hasClass("ui-selected"), s.$element.removeClass(n ? "ui-unselecting" : "ui-selected").addClass(n ? "ui-selecting" : "ui-unselecting"), s.unselecting = !n, s.selecting = n, s.selected = n, n ? i._trigger("selecting", e, {
									selecting : s.element
								}) : i._trigger("unselecting", e, {
									unselecting : s.element
								}), !1) : void 0
						}))
				},
				_mouseDrag : function (e) {
					if (this.dragged = !0, !this.options.disabled) {
						var i,
						n = this,
						s = this.options,
						r = this.opos[0],
						o = this.opos[1],
						a = e.pageX,
						l = e.pageY;
						return r > a && (i = a, a = r, r = i),
						o > l && (i = l, l = o, o = i),
						this.helper.css({
							left : r,
							top : o,
							width : a - r,
							height : l - o
						}),
						this.selectees.each(function () {
							var i = t.data(this, "selectable-item"),
							h = !1;
							i && i.element !== n.element[0] && ("touch" === s.tolerance ? h = !(i.left > a || r > i.right || i.top > l || o > i.bottom) : "fit" === s.tolerance && (h = i.left > r && a > i.right && i.top > o && l > i.bottom), h ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, n._trigger("selecting", e, {
											selecting : i.element
										}))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), n._trigger("unselecting", e, {
												unselecting : i.element
											}))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, n._trigger("unselecting", e, {
												unselecting : i.element
											})))))
						}),
						!1
					}
				},
				_mouseStop : function (e) {
					var i = this;
					return this.dragged = !1,
					t(".ui-unselecting", this.element[0]).each(function () {
						var n = t.data(this, "selectable-item");
						n.$element.removeClass("ui-unselecting"),
						n.unselecting = !1,
						n.startselected = !1,
						i._trigger("unselected", e, {
							unselected : n.element
						})
					}),
					t(".ui-selecting", this.element[0]).each(function () {
						var n = t.data(this, "selectable-item");
						n.$element.removeClass("ui-selecting").addClass("ui-selected"),
						n.selecting = !1,
						n.selected = !0,
						n.startselected = !0,
						i._trigger("selected", e, {
							selected : n.element
						})
					}),
					this._trigger("stop", e),
					this.helper.remove(),
					!1
				}
			}),
			t.widget("ui.selectmenu", {
				version : "1.11.4",
				defaultElement : "<select>",
				options : {
					appendTo : null,
					disabled : null,
					icons : {
						button : "ui-icon-triangle-1-s"
					},
					position : {
						my : "left top",
						at : "left bottom",
						collision : "none"
					},
					width : null,
					change : null,
					close : null,
					focus : null,
					open : null,
					select : null
				},
				_create : function () {
					var t = this.element.uniqueId().attr("id");
					this.ids = {
						element : t,
						button : t + "-button",
						menu : t + "-menu"
					},
					this._drawButton(),
					this._drawMenu(),
					this.options.disabled && this.disable()
				},
				_drawButton : function () {
					var e = this;
					this.label = t("label[for='" + this.ids.element + "']").attr("for", this.ids.button),
					this._on(this.label, {
						click : function (t) {
							this.button.focus(),
							t.preventDefault()
						}
					}),
					this.element.hide(),
					this.button = t("<span>", {
							"class" : "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
							tabindex : this.options.disabled ? -1 : 0,
							id : this.ids.button,
							role : "combobox",
							"aria-expanded" : "false",
							"aria-autocomplete" : "list",
							"aria-owns" : this.ids.menu,
							"aria-haspopup" : "true"
						}).insertAfter(this.element),
					t("<span>", {
						"class" : "ui-icon " + this.options.icons.button
					}).prependTo(this.button),
					this.buttonText = t("<span>", {
							"class" : "ui-selectmenu-text"
						}).appendTo(this.button),
					this._setText(this.buttonText, this.element.find("option:selected").text()),
					this._resizeButton(),
					this._on(this.button, this._buttonEvents),
					this.button.one("focusin", function () {
						e.menuItems || e._refreshMenu()
					}),
					this._hoverable(this.button),
					this._focusable(this.button)
				},
				_drawMenu : function () {
					var e = this;
					this.menu = t("<ul>", {
							"aria-hidden" : "true",
							"aria-labelledby" : this.ids.button,
							id : this.ids.menu
						}),
					this.menuWrap = t("<div>", {
							"class" : "ui-selectmenu-menu ui-front"
						}).append(this.menu).appendTo(this._appendTo()),
					this.menuInstance = this.menu.menu({
							role : "listbox",
							select : function (t, i) {
								t.preventDefault(),
								e._setSelection(),
								e._select(i.item.data("ui-selectmenu-item"), t)
							},
							focus : function (t, i) {
								var n = i.item.data("ui-selectmenu-item");
								null != e.focusIndex && n.index !== e.focusIndex && (e._trigger("focus", t, {
										item : n
									}), e.isOpen || e._select(n, t)),
								e.focusIndex = n.index,
								e.button.attr("aria-activedescendant", e.menuItems.eq(n.index).attr("id"))
							}
						}).menu("instance"),
					this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"),
					this.menuInstance._off(this.menu, "mouseleave"),
					this.menuInstance._closeOnDocumentClick = function () {
						return !1
					},
					this.menuInstance._isDivider = function () {
						return !1
					}
				},
				refresh : function () {
					this._refreshMenu(),
					this._setText(this.buttonText, this._getSelectedItem().text()),
					this.options.width || this._resizeButton()
				},
				_refreshMenu : function () {
					this.menu.empty();
					var t,
					e = this.element.find("option");
					e.length && (this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
				},
				open : function (t) {
					this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t))
				},
				_position : function () {
					this.menuWrap.position(t.extend({
							of : this.button
						}, this.options.position))
				},
				close : function (t) {
					this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
				},
				widget : function () {
					return this.button
				},
				menuWidget : function () {
					return this.menu
				},
				_renderMenu : function (e, i) {
					var n = this,
					s = "";
					t.each(i, function (i, r) {
						r.optgroup !== s && (t("<li>", {
								"class" : "ui-selectmenu-optgroup ui-menu-divider" + (r.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
								text : r.optgroup
							}).appendTo(e), s = r.optgroup),
						n._renderItemData(e, r)
					})
				},
				_renderItemData : function (t, e) {
					return this._renderItem(t, e).data("ui-selectmenu-item", e)
				},
				_renderItem : function (e, i) {
					var n = t("<li>");
					return i.disabled && n.addClass("ui-state-disabled"),
					this._setText(n, i.label),
					n.appendTo(e)
				},
				_setText : function (t, e) {
					e ? t.text(e) : t.html("&#160;")
				},
				_move : function (t, e) {
					var i,
					n,
					s = ".ui-menu-item";
					this.isOpen ? i = this.menuItems.eq(this.focusIndex) : (i = this.menuItems.eq(this.element[0].selectedIndex), s += ":not(.ui-state-disabled)"),
					n = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1) : i[t + "All"](s).eq(0),
					n.length && this.menuInstance.focus(e, n)
				},
				_getSelectedItem : function () {
					return this.menuItems.eq(this.element[0].selectedIndex)
				},
				_toggle : function (t) {
					this[this.isOpen ? "close" : "open"](t)
				},
				_setSelection : function () {
					var t;
					this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
				},
				_documentClick : {
					mousedown : function (e) {
						this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(e))
					}
				},
				_buttonEvents : {
					mousedown : function () {
						var t;
						window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange()
					},
					click : function (t) {
						this._setSelection(),
						this._toggle(t)
					},
					keydown : function (e) {
						var i = !0;
						switch (e.keyCode) {
						case t.ui.keyCode.TAB:
						case t.ui.keyCode.ESCAPE:
							this.close(e),
							i = !1;
							break;
						case t.ui.keyCode.ENTER:
							this.isOpen && this._selectFocusedItem(e);
							break;
						case t.ui.keyCode.UP:
							e.altKey ? this._toggle(e) : this._move("prev", e);
							break;
						case t.ui.keyCode.DOWN:
							e.altKey ? this._toggle(e) : this._move("next", e);
							break;
						case t.ui.keyCode.SPACE:
							this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
							break;
						case t.ui.keyCode.LEFT:
							this._move("prev", e);
							break;
						case t.ui.keyCode.RIGHT:
							this._move("next", e);
							break;
						case t.ui.keyCode.HOME:
						case t.ui.keyCode.PAGE_UP:
							this._move("first", e);
							break;
						case t.ui.keyCode.END:
						case t.ui.keyCode.PAGE_DOWN:
							this._move("last", e);
							break;
						default:
							this.menu.trigger(e),
							i = !1
						}
						i && e.preventDefault()
					}
				},
				_selectFocusedItem : function (t) {
					var e = this.menuItems.eq(this.focusIndex);
					e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
				},
				_select : function (t, e) {
					var i = this.element[0].selectedIndex;
					this.element[0].selectedIndex = t.index,
					this._setText(this.buttonText, t.label),
					this._setAria(t),
					this._trigger("select", e, {
						item : t
					}),
					t.index !== i && this._trigger("change", e, {
						item : t
					}),
					this.close(e)
				},
				_setAria : function (t) {
					var e = this.menuItems.eq(t.index).attr("id");
					this.button.attr({
						"aria-labelledby" : e,
						"aria-activedescendant" : e
					}),
					this.menu.attr("aria-activedescendant", e)
				},
				_setOption : function (t, e) {
					"icons" === t && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(e.button),
					this._super(t, e),
					"appendTo" === t && this.menuWrap.appendTo(this._appendTo()),
					"disabled" === t && (this.menuInstance.option("disabled", e), this.button.toggleClass("ui-state-disabled", e).attr("aria-disabled", e), this.element.prop("disabled", e), e ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)),
					"width" === t && this._resizeButton()
				},
				_appendTo : function () {
					var e = this.options.appendTo;
					return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
					e && e[0] || (e = this.element.closest(".ui-front")),
					e.length || (e = this.document[0].body),
					e
				},
				_toggleAttr : function () {
					this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen),
					this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen),
					this.menu.attr("aria-hidden", !this.isOpen)
				},
				_resizeButton : function () {
					var t = this.options.width;
					t || (t = this.element.show().outerWidth(), this.element.hide()),
					this.button.outerWidth(t)
				},
				_resizeMenu : function () {
					this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
				},
				_getCreateOptions : function () {
					return {
						disabled : this.element.prop("disabled")
					}
				},
				_parseOptions : function (e) {
					var i = [];
					e.each(function (e, n) {
						var s = t(n),
						r = s.parent("optgroup");
						i.push({
							element : s,
							index : e,
							value : s.val(),
							label : s.text(),
							optgroup : r.attr("label") || "",
							disabled : r.prop("disabled") || s.prop("disabled")
						})
					}),
					this.items = i
				},
				_destroy : function () {
					this.menuWrap.remove(),
					this.button.remove(),
					this.element.show(),
					this.element.removeUniqueId(),
					this.label.attr("for", this.ids.element)
				}
			}),
			t.widget("ui.slider", t.ui.mouse, {
				version : "1.11.4",
				widgetEventPrefix : "slide",
				options : {
					animate : !1,
					distance : 0,
					max : 100,
					min : 0,
					orientation : "horizontal",
					range : !1,
					step : 1,
					value : 0,
					values : null,
					change : null,
					slide : null,
					start : null,
					stop : null
				},
				numPages : 5,
				_create : function () {
					this._keySliding = !1,
					this._mouseSliding = !1,
					this._animateOff = !0,
					this._handleIndex = null,
					this._detectOrientation(),
					this._mouseInit(),
					this._calculateNewMax(),
					this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"),
					this._refresh(),
					this._setOption("disabled", this.options.disabled),
					this._animateOff = !1
				},
				_refresh : function () {
					this._createRange(),
					this._createHandles(),
					this._setupEvents(),
					this._refreshValue()
				},
				_createHandles : function () {
					var e,
					i,
					n = this.options,
					s = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
					r = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
					o = [];
					for (i = n.values && n.values.length || 1, s.length > i && (s.slice(i).remove(), s = s.slice(0, i)), e = s.length; i > e; e++)
						o.push(r);
					this.handles = s.add(t(o.join("")).appendTo(this.element)),
					this.handle = this.handles.eq(0),
					this.handles.each(function (e) {
						t(this).data("ui-slider-handle-index", e)
					})
				},
				_createRange : function () {
					var e = this.options,
					i = "";
					e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
							left : "",
							bottom : ""
						}) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(), this.range = null)
				},
				_setupEvents : function () {
					this._off(this.handles),
					this._on(this.handles, this._handleEvents),
					this._hoverable(this.handles),
					this._focusable(this.handles)
				},
				_destroy : function () {
					this.handles.remove(),
					this.range && this.range.remove(),
					this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),
					this._mouseDestroy()
				},
				_mouseCapture : function (e) {
					var i,
					n,
					s,
					r,
					o,
					a,
					l,
					h,
					u = this,
					c = this.options;
					return c.disabled ? !1 : (this.elementSize = {
							width : this.element.outerWidth(),
							height : this.element.outerHeight()
						}, this.elementOffset = this.element.offset(), i = {
							x : e.pageX,
							y : e.pageY
						}, n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
							var i = Math.abs(n - u.values(e));
							(s > i || s === i && (e === u._lastChangedValue || u.values(e) === c.min)) && (s = i, r = t(this), o = e)
						}), a = this._start(e, o), a === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, r.addClass("ui-state-active").focus(), l = r.offset(), h = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? {
								left : 0,
								top : 0
							}
							 : {
							left : e.pageX - l.left - r.width() / 2,
							top : e.pageY - l.top - r.height() / 2 - (parseInt(r.css("borderTopWidth"), 10) || 0) - (parseInt(r.css("borderBottomWidth"), 10) || 0) + (parseInt(r.css("marginTop"), 10) || 0)
						}, this.handles.hasClass("ui-state-hover") || this._slide(e, o, n), this._animateOff = !0, !0))
				},
				_mouseStart : function () {
					return !0
				},
				_mouseDrag : function (t) {
					var e = {
						x : t.pageX,
						y : t.pageY
					},
					i = this._normValueFromMouse(e);
					return this._slide(t, this._handleIndex, i),
					!1
				},
				_mouseStop : function (t) {
					return this.handles.removeClass("ui-state-active"),
					this._mouseSliding = !1,
					this._stop(t, this._handleIndex),
					this._change(t, this._handleIndex),
					this._handleIndex = null,
					this._clickOffset = null,
					this._animateOff = !1,
					!1
				},
				_detectOrientation : function () {
					this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
				},
				_normValueFromMouse : function (t) {
					var e,
					i,
					n,
					s,
					r;
					return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
					n = i / e,
					n > 1 && (n = 1),
					0 > n && (n = 0),
					"vertical" === this.orientation && (n = 1 - n),
					s = this._valueMax() - this._valueMin(),
					r = this._valueMin() + n * s,
					this._trimAlignValue(r)
				},
				_start : function (t, e) {
					var i = {
						handle : this.handles[e],
						value : this.value()
					};
					return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()),
					this._trigger("start", t, i)
				},
				_slide : function (t, e, i) {
					var n,
					s,
					r;
					this.options.values && this.options.values.length ? (n = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > n || 1 === e && n > i) && (i = n), i !== this.values(e) && (s = this.values(), s[e] = i, r = this._trigger("slide", t, {
									handle : this.handles[e],
									value : i,
									values : s
								}), n = this.values(e ? 0 : 1), r !== !1 && this.values(e, i))) : i !== this.value() && (r = this._trigger("slide", t, {
								handle : this.handles[e],
								value : i
							}), r !== !1 && this.value(i))
				},
				_stop : function (t, e) {
					var i = {
						handle : this.handles[e],
						value : this.value()
					};
					this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()),
					this._trigger("stop", t, i)
				},
				_change : function (t, e) {
					if (!this._keySliding && !this._mouseSliding) {
						var i = {
							handle : this.handles[e],
							value : this.value()
						};
						this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()),
						this._lastChangedValue = e,
						this._trigger("change", t, i)
					}
				},
				value : function (t) {
					return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
				},
				values : function (e, i) {
					var n,
					s,
					r;
					if (arguments.length > 1)
						return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
					if (!arguments.length)
						return this._values();
					if (!t.isArray(arguments[0]))
						return this.options.values && this.options.values.length ? this._values(e) : this.value();
					for (n = this.options.values, s = arguments[0], r = 0; n.length > r; r += 1)
						n[r] = this._trimAlignValue(s[r]), this._change(null, r);
					this._refreshValue()
				},
				_setOption : function (e, i) {
					var n,
					s = 0;
					switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (s = this.options.values.length), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!i), this._super(e, i), e) {
					case "orientation":
						this._detectOrientation(),
						this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation),
						this._refreshValue(),
						this.handles.css("horizontal" === i ? "bottom" : "left", "");
						break;
					case "value":
						this._animateOff = !0,
						this._refreshValue(),
						this._change(null, 0),
						this._animateOff = !1;
						break;
					case "values":
						for (this._animateOff = !0, this._refreshValue(), n = 0; s > n; n += 1)
							this._change(null, n);
						this._animateOff = !1;
						break;
					case "step":
					case "min":
					case "max":
						this._animateOff = !0,
						this._calculateNewMax(),
						this._refreshValue(),
						this._animateOff = !1;
						break;
					case "range":
						this._animateOff = !0,
						this._refresh(),
						this._animateOff = !1
					}
				},
				_value : function () {
					var t = this.options.value;
					return t = this._trimAlignValue(t)
				},
				_values : function (t) {
					var e,
					i,
					n;
					if (arguments.length)
						return e = this.options.values[t], e = this._trimAlignValue(e);
					if (this.options.values && this.options.values.length) {
						for (i = this.options.values.slice(), n = 0; i.length > n; n += 1)
							i[n] = this._trimAlignValue(i[n]);
						return i
					}
					return []
				},
				_trimAlignValue : function (t) {
					if (this._valueMin() >= t)
						return this._valueMin();
					if (t >= this._valueMax())
						return this._valueMax();
					var e = this.options.step > 0 ? this.options.step : 1,
					i = (t - this._valueMin()) % e,
					n = t - i;
					return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e),
					parseFloat(n.toFixed(5))
				},
				_calculateNewMax : function () {
					var t = this.options.max,
					e = this._valueMin(),
					i = this.options.step,
					n = Math.floor( + (t - e).toFixed(this._precision()) / i) * i;
					t = n + e,
					this.max = parseFloat(t.toFixed(this._precision()))
				},
				_precision : function () {
					var t = this._precisionOf(this.options.step);
					return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))),
					t
				},
				_precisionOf : function (t) {
					var e = "" + t,
					i = e.indexOf(".");
					return -1 === i ? 0 : e.length - i - 1
				},
				_valueMin : function () {
					return this.options.min
				},
				_valueMax : function () {
					return this.max
				},
				_refreshValue : function () {
					var e,
					i,
					n,
					s,
					r,
					o = this.options.range,
					a = this.options,
					l = this,
					h = this._animateOff ? !1 : a.animate,
					u = {};
					this.options.values && this.options.values.length ? this.handles.each(function (n) {
						i = 100 * ((l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin())),
						u["horizontal" === l.orientation ? "left" : "bottom"] = i + "%",
						t(this).stop(1, 1)[h ? "animate" : "css"](u, a.animate),
						l.options.range === !0 && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({
									left : i + "%"
								}, a.animate), 1 === n && l.range[h ? "animate" : "css"]({
									width : i - e + "%"
								}, {
									queue : !1,
									duration : a.animate
								})) : (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({
									bottom : i + "%"
								}, a.animate), 1 === n && l.range[h ? "animate" : "css"]({
									height : i - e + "%"
								}, {
									queue : !1,
									duration : a.animate
								}))),
						e = i
					}) : (n = this.value(), s = this._valueMin(), r = this._valueMax(), i = r !== s ? 100 * ((n - s) / (r - s)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](u, a.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
							width : i + "%"
						}, a.animate), "max" === o && "horizontal" === this.orientation && this.range[h ? "animate" : "css"]({
							width : 100 - i + "%"
						}, {
							queue : !1,
							duration : a.animate
						}), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
							height : i + "%"
						}, a.animate), "max" === o && "vertical" === this.orientation && this.range[h ? "animate" : "css"]({
							height : 100 - i + "%"
						}, {
							queue : !1,
							duration : a.animate
						}))
				},
				_handleEvents : {
					keydown : function (e) {
						var i,
						n,
						s,
						r,
						o = t(e.target).data("ui-slider-handle-index");
						switch (e.keyCode) {
						case t.ui.keyCode.HOME:
						case t.ui.keyCode.END:
						case t.ui.keyCode.PAGE_UP:
						case t.ui.keyCode.PAGE_DOWN:
						case t.ui.keyCode.UP:
						case t.ui.keyCode.RIGHT:
						case t.ui.keyCode.DOWN:
						case t.ui.keyCode.LEFT:
							if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, t(e.target).addClass("ui-state-active"), i = this._start(e, o), i === !1))
								return
						}
						switch (r = this.options.step, n = s = this.options.values && this.options.values.length ? this.values(o) : this.value(), e.keyCode) {
						case t.ui.keyCode.HOME:
							s = this._valueMin();
							break;
						case t.ui.keyCode.END:
							s = this._valueMax();
							break;
						case t.ui.keyCode.PAGE_UP:
							s = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / this.numPages);
							break;
						case t.ui.keyCode.PAGE_DOWN:
							s = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / this.numPages);
							break;
						case t.ui.keyCode.UP:
						case t.ui.keyCode.RIGHT:
							if (n === this._valueMax())
								return;
							s = this._trimAlignValue(n + r);
							break;
						case t.ui.keyCode.DOWN:
						case t.ui.keyCode.LEFT:
							if (n === this._valueMin())
								return;
							s = this._trimAlignValue(n - r)
						}
						this._slide(e, o, s)
					},
					keyup : function (e) {
						var i = t(e.target).data("ui-slider-handle-index");
						this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
					}
				}
			}),
			t.widget("ui.sortable", t.ui.mouse, {
				version : "1.11.4",
				widgetEventPrefix : "sort",
				ready : !1,
				options : {
					appendTo : "parent",
					axis : !1,
					connectWith : !1,
					containment : !1,
					cursor : "auto",
					cursorAt : !1,
					dropOnEmpty : !0,
					forcePlaceholderSize : !1,
					forceHelperSize : !1,
					grid : !1,
					handle : !1,
					helper : "original",
					items : "> *",
					opacity : !1,
					placeholder : !1,
					revert : !1,
					scroll : !0,
					scrollSensitivity : 20,
					scrollSpeed : 20,
					scope : "default",
					tolerance : "intersect",
					zIndex : 1e3,
					activate : null,
					beforeStop : null,
					change : null,
					deactivate : null,
					out : null,
					over : null,
					receive : null,
					remove : null,
					sort : null,
					start : null,
					stop : null,
					update : null
				},
				_isOverAxis : function (t, e, i) {
					return t >= e && e + i > t
				},
				_isFloating : function (t) {
					return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"));

				},
				_create : function () {
					this.containerCache = {},
					this.element.addClass("ui-sortable"),
					this.refresh(),
					this.offset = this.element.offset(),
					this._mouseInit(),
					this._setHandleClassName(),
					this.ready = !0
				},
				_setOption : function (t, e) {
					this._super(t, e),
					"handle" === t && this._setHandleClassName()
				},
				_setHandleClassName : function () {
					this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),
					t.each(this.items, function () {
						(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
					})
				},
				_destroy : function () {
					this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),
					this._mouseDestroy();
					for (var t = this.items.length - 1; t >= 0; t--)
						this.items[t].item.removeData(this.widgetName + "-item");
					return this
				},
				_mouseCapture : function (e, i) {
					var n = null,
					s = !1,
					r = this;
					return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function () {
							return t.data(this, r.widgetName + "-item") === r ? (n = t(this), !1) : void 0
						}), t.data(e.target, r.widgetName + "-item") === r && (n = t(e.target)), n && (!this.options.handle || i || (t(this.options.handle, n).find("*").addBack().each(function () {
									this === e.target && (s = !0)
								}), s)) ? (this.currentItem = n, this._removeCurrentsFromItems(), !0) : !1)
				},
				_mouseStart : function (e, i, n) {
					var s,
					r,
					o = this.options;
					if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
							top : this.offset.top - this.margins.top,
							left : this.offset.left - this.margins.left
						}, t.extend(this.offset, {
							click : {
								left : e.pageX - this.offset.left,
								top : e.pageY - this.offset.top
							},
							parent : this._getParentOffset(),
							relative : this._getRelativeOffset()
						}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
							prev : this.currentItem.prev()[0],
							parent : this.currentItem.parent()[0]
						}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (r = this.document.find("body"), this.storedCursor = r.css("cursor"), r.css("cursor", o.cursor), this.storedStylesheet = t("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(r)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
						for (s = this.containers.length - 1; s >= 0; s--)
							this.containers[s]._trigger("activate", e, this._uiHash(this));
					return t.ui.ddmanager && (t.ui.ddmanager.current = this),
					t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
					this.dragging = !0,
					this.helper.addClass("ui-sortable-helper"),
					this._mouseDrag(e),
					!0
				},
				_mouseDrag : function (e) {
					var i,
					n,
					s,
					r,
					o = this.options,
					a = !1;
					for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + o.scrollSpeed : e.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + o.scrollSpeed : e.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (e.pageY - this.document.scrollTop() < o.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < o.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed)), e.pageX - this.document.scrollLeft() < o.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < o.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed))), a !== !1 && t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
						if (n = this.items[i], s = n.item[0], r = this._intersectsWithPointer(n), r && n.instance === this.currentContainer && s !== this.currentItem[0] && this.placeholder[1 === r ? "next" : "prev"]()[0] !== s && !t.contains(this.placeholder[0], s) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], s) : !0)) {
							if (this.direction = 1 === r ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n))
								break;
							this._rearrange(e, n),
							this._trigger("change", e, this._uiHash());
							break
						}
					return this._contactContainers(e),
					t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
					this._trigger("sort", e, this._uiHash()),
					this.lastPositionAbs = this.positionAbs,
					!1
				},
				_mouseStop : function (e, i) {
					if (e) {
						if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
							var n = this,
							s = this.placeholder.offset(),
							r = this.options.axis,
							o = {};
							r && "x" !== r || (o.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)),
							r && "y" !== r || (o.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)),
							this.reverting = !0,
							t(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function () {
								n._clear(e)
							})
						} else
							this._clear(e, i);
						return !1
					}
				},
				cancel : function () {
					if (this.dragging) {
						this._mouseUp({
							target : null
						}),
						"original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
						for (var e = this.containers.length - 1; e >= 0; e--)
							this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
					}
					return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
							helper : null,
							dragging : !1,
							reverting : !1,
							_noFinalSort : null
						}), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)),
					this
				},
				serialize : function (e) {
					var i = this._getItemsAsjQuery(e && e.connected),
					n = [];
					return e = e || {},
					t(i).each(function () {
						var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
						i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
					}),
					!n.length && e.key && n.push(e.key + "="),
					n.join("&")
				},
				toArray : function (e) {
					var i = this._getItemsAsjQuery(e && e.connected),
					n = [];
					return e = e || {},
					i.each(function () {
						n.push(t(e.item || this).attr(e.attribute || "id") || "")
					}),
					n
				},
				_intersectsWith : function (t) {
					var e = this.positionAbs.left,
					i = e + this.helperProportions.width,
					n = this.positionAbs.top,
					s = n + this.helperProportions.height,
					r = t.left,
					o = r + t.width,
					a = t.top,
					l = a + t.height,
					h = this.offset.click.top,
					u = this.offset.click.left,
					c = "x" === this.options.axis || n + h > a && l > n + h,
					d = "y" === this.options.axis || e + u > r && o > e + u,
					f = c && d;
					return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? f : e + this.helperProportions.width / 2 > r && o > i - this.helperProportions.width / 2 && n + this.helperProportions.height / 2 > a && l > s - this.helperProportions.height / 2
				},
				_intersectsWithPointer : function (t) {
					var e = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
					i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
					n = e && i,
					s = this._getDragVerticalDirection(),
					r = this._getDragHorizontalDirection();
					return n ? this.floating ? r && "right" === r || "down" === s ? 2 : 1 : s && ("down" === s ? 2 : 1) : !1
				},
				_intersectsWithSides : function (t) {
					var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
					i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
					n = this._getDragVerticalDirection(),
					s = this._getDragHorizontalDirection();
					return this.floating && s ? "right" === s && i || "left" === s && !i : n && ("down" === n && e || "up" === n && !e)
				},
				_getDragVerticalDirection : function () {
					var t = this.positionAbs.top - this.lastPositionAbs.top;
					return 0 !== t && (t > 0 ? "down" : "up")
				},
				_getDragHorizontalDirection : function () {
					var t = this.positionAbs.left - this.lastPositionAbs.left;
					return 0 !== t && (t > 0 ? "right" : "left")
				},
				refresh : function (t) {
					return this._refreshItems(t),
					this._setHandleClassName(),
					this.refreshPositions(),
					this
				},
				_connectWith : function () {
					var t = this.options;
					return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
				},
				_getItemsAsjQuery : function (e) {
					function i() {
						a.push(this)
					}
					var n,
					s,
					r,
					o,
					a = [],
					l = [],
					h = this._connectWith();
					if (h && e)
						for (n = h.length - 1; n >= 0; n--)
							for (r = t(h[n], this.document[0]), s = r.length - 1; s >= 0; s--)
								o = t.data(r[s], this.widgetFullName), o && o !== this && !o.options.disabled && l.push([t.isFunction(o.options.items) ? o.options.items.call(o.element) : t(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
					for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
									options : this.options,
									item : this.currentItem
								}) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = l.length - 1; n >= 0; n--)
						l[n][0].each(i);
					return t(a)
				},
				_removeCurrentsFromItems : function () {
					var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
					this.items = t.grep(this.items, function (t) {
							for (var i = 0; e.length > i; i++)
								if (e[i] === t.item[0])
									return !1;
							return !0
						})
				},
				_refreshItems : function (e) {
					this.items = [],
					this.containers = [this];
					var i,
					n,
					s,
					r,
					o,
					a,
					l,
					h,
					u = this.items,
					c = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
								item : this.currentItem
							}) : t(this.options.items, this.element), this]],
					d = this._connectWith();
					if (d && this.ready)
						for (i = d.length - 1; i >= 0; i--)
							for (s = t(d[i], this.document[0]), n = s.length - 1; n >= 0; n--)
								r = t.data(s[n], this.widgetFullName), r && r !== this && !r.options.disabled && (c.push([t.isFunction(r.options.items) ? r.options.items.call(r.element[0], e, {
												item : this.currentItem
											}) : t(r.options.items, r.element), r]), this.containers.push(r));
					for (i = c.length - 1; i >= 0; i--)
						for (o = c[i][1], a = c[i][0], n = 0, h = a.length; h > n; n++)
							l = t(a[n]), l.data(this.widgetName + "-item", o), u.push({
								item : l,
								instance : o,
								width : 0,
								height : 0,
								left : 0,
								top : 0
							})
				},
				refreshPositions : function (e) {
					this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1,
					this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
					var i,
					n,
					s,
					r;
					for (i = this.items.length - 1; i >= 0; i--)
						n = this.items[i], n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, e || (n.width = s.outerWidth(), n.height = s.outerHeight()), r = s.offset(), n.left = r.left, n.top = r.top);
					if (this.options.custom && this.options.custom.refreshContainers)
						this.options.custom.refreshContainers.call(this);
					else
						for (i = this.containers.length - 1; i >= 0; i--)
							r = this.containers[i].element.offset(), this.containers[i].containerCache.left = r.left, this.containers[i].containerCache.top = r.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
					return this
				},
				_createPlaceholder : function (e) {
					e = e || this;
					var i,
					n = e.options;
					n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
							element : function () {
								var n = e.currentItem[0].nodeName.toLowerCase(),
								s = t("<" + n + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
								return "tbody" === n ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(s)) : "tr" === n ? e._createTrPlaceholder(e.currentItem, s) : "img" === n && s.attr("src", e.currentItem.attr("src")),
								i || s.css("visibility", "hidden"),
								s
							},
							update : function (t, s) {
								(!i || n.forcePlaceholderSize) && (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
							}
						}),
					e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)),
					e.currentItem.after(e.placeholder),
					n.placeholder.update(e, e.placeholder)
				},
				_createTrPlaceholder : function (e, i) {
					var n = this;
					e.children().each(function () {
						t("<td>&#160;</td>", n.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
					})
				},
				_contactContainers : function (e) {
					var i,
					n,
					s,
					r,
					o,
					a,
					l,
					h,
					u,
					c,
					d = null,
					f = null;
					for (i = this.containers.length - 1; i >= 0; i--)
						if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
							if (this._intersectsWith(this.containers[i].containerCache)) {
								if (d && t.contains(this.containers[i].element[0], d.element[0]))
									continue;
								d = this.containers[i],
								f = i
							} else
								this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
					if (d)
						if (1 === this.containers.length)
							this.containers[f].containerCache.over || (this.containers[f]._trigger("over", e, this._uiHash(this)), this.containers[f].containerCache.over = 1);
						else {
							for (s = 1e4, r = null, u = d.floating || this._isFloating(this.currentItem), o = u ? "left" : "top", a = u ? "width" : "height", c = u ? "clientX" : "clientY", n = this.items.length - 1; n >= 0; n--)
								t.contains(this.containers[f].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (l = this.items[n].item.offset()[o], h = !1, e[c] - l > this.items[n][a] / 2 && (h = !0), s > Math.abs(e[c] - l) && (s = Math.abs(e[c] - l), r = this.items[n], this.direction = h ? "up" : "down"));
							if (!r && !this.options.dropOnEmpty)
								return;
							if (this.currentContainer === this.containers[f])
								return void(this.currentContainer.containerCache.over || (this.containers[f]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
							r ? this._rearrange(e, r, null, !0) : this._rearrange(e, null, this.containers[f].element, !0),
							this._trigger("change", e, this._uiHash()),
							this.containers[f]._trigger("change", e, this._uiHash(this)),
							this.currentContainer = this.containers[f],
							this.options.placeholder.update(this.currentContainer, this.placeholder),
							this.containers[f]._trigger("over", e, this._uiHash(this)),
							this.containers[f].containerCache.over = 1
						}
				},
				_createHelper : function (e) {
					var i = this.options,
					n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
					return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]),
					n[0] === this.currentItem[0] && (this._storedCSS = {
							width : this.currentItem[0].style.width,
							height : this.currentItem[0].style.height,
							position : this.currentItem.css("position"),
							top : this.currentItem.css("top"),
							left : this.currentItem.css("left")
						}),
					(!n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()),
					(!n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()),
					n
				},
				_adjustOffsetFromHelper : function (e) {
					"string" == typeof e && (e = e.split(" ")),
					t.isArray(e) && (e = {
							left : +e[0],
							top : +e[1] || 0
						}),
					"left" in e && (this.offset.click.left = e.left + this.margins.left),
					"right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
					"top" in e && (this.offset.click.top = e.top + this.margins.top),
					"bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
				},
				_getParentOffset : function () {
					this.offsetParent = this.helper.offsetParent();
					var e = this.offsetParent.offset();
					return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()),
					(this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
							top : 0,
							left : 0
						}), {
						top : e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
						left : e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
					}
				},
				_getRelativeOffset : function () {
					if ("relative" === this.cssPosition) {
						var t = this.currentItem.position();
						return {
							top : t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
							left : t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
						}
					}
					return {
						top : 0,
						left : 0
					}
				},
				_cacheMargins : function () {
					this.margins = {
						left : parseInt(this.currentItem.css("marginLeft"), 10) || 0,
						top : parseInt(this.currentItem.css("marginTop"), 10) || 0
					}
				},
				_cacheHelperProportions : function () {
					this.helperProportions = {
						width : this.helper.outerWidth(),
						height : this.helper.outerHeight()
					}
				},
				_setContainment : function () {
					var e,
					i,
					n,
					s = this.options;
					"parent" === s.containment && (s.containment = this.helper[0].parentNode),
					("document" === s.containment || "window" === s.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === s.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
					/^(document|window|parent)$/.test(s.containment) || (e = t(s.containment)[0], i = t(s.containment).offset(), n = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
				},
				_convertPositionTo : function (e, i) {
					i || (i = this.position);
					var n = "absolute" === e ? 1 : -1,
					s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
					r = /(html|body)/i.test(s[0].tagName);
					return {
						top : i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : s.scrollTop()) * n,
						left : i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : s.scrollLeft()) * n
					}
				},
				_generatePosition : function (e) {
					var i,
					n,
					s = this.options,
					r = e.pageX,
					o = e.pageY,
					a = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
					l = /(html|body)/i.test(a[0].tagName);
					return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()),
					this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (r = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (r = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), s.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / s.grid[1]) * s.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i, n = this.originalPageX + Math.round((r - this.originalPageX) / s.grid[0]) * s.grid[0], r = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)), {
						top : o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
						left : r - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
					}
				},
				_rearrange : function (t, e, i, n) {
					i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling),
					this.counter = this.counter ? ++this.counter : 1;
					var s = this.counter;
					this._delay(function () {
						s === this.counter && this.refreshPositions(!n)
					})
				},
				_clear : function (t, e) {
					function i(t, e, i) {
						return function (n) {
							i._trigger(t, n, e._uiHash(e))
						}
					}
					this.reverting = !1;
					var n,
					s = [];
					if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
						for (n in this._storedCSS)
							("auto" === this._storedCSS[n] || "static" === this._storedCSS[n]) && (this._storedCSS[n] = "");
						this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
					} else
						this.currentItem.show();
					for (this.fromOutside && !e && s.push(function (t) {
							this._trigger("receive", t, this._uiHash(this.fromOutside))
						}), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function (t) {
							this._trigger("update", t, this._uiHash())
						}), this !== this.currentContainer && (e || (s.push(function (t) {
									this._trigger("remove", t, this._uiHash())
								}), s.push(function (t) {
									return function (e) {
										t._trigger("receive", e, this._uiHash(this))
									}
								}
									.call(this, this.currentContainer)), s.push(function (t) {
									return function (e) {
										t._trigger("update", e, this._uiHash(this))
									}
								}
									.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--)
						e || s.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
					if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
						for (n = 0; s.length > n; n++)
							s[n].call(this, t);
						this._trigger("stop", t, this._uiHash())
					}
					return this.fromOutside = !1,
					!this.cancelHelperRemoval
				},
				_trigger : function () {
					t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
				},
				_uiHash : function (e) {
					var i = e || this;
					return {
						helper : i.helper,
						placeholder : i.placeholder || t([]),
						position : i.position,
						originalPosition : i.originalPosition,
						offset : i.positionAbs,
						item : i.currentItem,
						sender : e ? e.element : null
					}
				}
			}),
			t.widget("ui.spinner", {
				version : "1.11.4",
				defaultElement : "<input>",
				widgetEventPrefix : "spin",
				options : {
					culture : null,
					icons : {
						down : "ui-icon-triangle-1-s",
						up : "ui-icon-triangle-1-n"
					},
					incremental : !0,
					max : null,
					min : null,
					numberFormat : null,
					page : 10,
					step : 1,
					change : null,
					spin : null,
					start : null,
					stop : null
				},
				_create : function () {
					this._setOption("max", this.options.max),
					this._setOption("min", this.options.min),
					this._setOption("step", this.options.step),
					"" !== this.value() && this._value(this.element.val(), !0),
					this._draw(),
					this._on(this._events),
					this._refresh(),
					this._on(this.window, {
						beforeunload : function () {
							this.element.removeAttr("autocomplete")
						}
					})
				},
				_getCreateOptions : function () {
					var e = {},
					i = this.element;
					return t.each(["min", "max", "step"], function (t, n) {
						var s = i.attr(n);
						void 0 !== s && s.length && (e[n] = s)
					}),
					e
				},
				_events : {
					keydown : function (t) {
						this._start(t) && this._keydown(t) && t.preventDefault()
					},
					keyup : "_stop",
					focus : function () {
						this.previous = this.element.val()
					},
					blur : function (t) {
						return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", t)))
					},
					mousewheel : function (t, e) {
						if (e) {
							if (!this.spinning && !this._start(t))
								return !1;
							this._spin((e > 0 ? 1 : -1) * this.options.step, t),
							clearTimeout(this.mousewheelTimer),
							this.mousewheelTimer = this._delay(function () {
									this.spinning && this._stop(t)
								}, 100),
							t.preventDefault()
						}
					},
					"mousedown .ui-spinner-button" : function (e) {
						function i() {
							var t = this.element[0] === this.document[0].activeElement;
							t || (this.element.focus(), this.previous = n, this._delay(function () {
									this.previous = n
								}))
						}
						var n;
						n = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(),
						e.preventDefault(),
						i.call(this),
						this.cancelBlur = !0,
						this._delay(function () {
							delete this.cancelBlur,
							i.call(this)
						}),
						this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
					},
					"mouseup .ui-spinner-button" : "_stop",
					"mouseenter .ui-spinner-button" : function (e) {
						return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0
					},
					"mouseleave .ui-spinner-button" : "_stop"
				},
				_draw : function () {
					var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
					this.element.attr("role", "spinbutton"),
					this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"),
					this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()),
					this.options.disabled && this.disable()
				},
				_keydown : function (e) {
					var i = this.options,
					n = t.ui.keyCode;
					switch (e.keyCode) {
					case n.UP:
						return this._repeat(null, 1, e),
						!0;
					case n.DOWN:
						return this._repeat(null, -1, e),
						!0;
					case n.PAGE_UP:
						return this._repeat(null, i.page, e),
						!0;
					case n.PAGE_DOWN:
						return this._repeat(null, -i.page, e),
						!0
					}
					return !1
				},
				_uiSpinnerHtml : function () {
					return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
				},
				_buttonHtml : function () {
					return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
				},
				_start : function (t) {
					return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
				},
				_repeat : function (t, e, i) {
					t = t || 500,
					clearTimeout(this.timer),
					this.timer = this._delay(function () {
							this._repeat(40, e, i)
						}, t),
					this._spin(e * this.options.step, i)
				},
				_spin : function (t, e) {
					var i = this.value() || 0;
					this.counter || (this.counter = 1),
					i = this._adjustValue(i + t * this._increment(this.counter)),
					this.spinning && this._trigger("spin", e, {
						value : i
					}) === !1 || (this._value(i), this.counter++)
				},
				_increment : function (e) {
					var i = this.options.incremental;
					return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
				},
				_precision : function () {
					var t = this._precisionOf(this.options.step);
					return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))),
					t
				},
				_precisionOf : function (t) {
					var e = "" + t,
					i = e.indexOf(".");
					return -1 === i ? 0 : e.length - i - 1
				},
				_adjustValue : function (t) {
					var e,
					i,
					n = this.options;
					return e = null !== n.min ? n.min : 0,
					i = t - e,
					i = Math.round(i / n.step) * n.step,
					t = e + i,
					t = parseFloat(t.toFixed(this._precision())),
					null !== n.max && t > n.max ? n.max : null !== n.min && n.min > t ? n.min : t
				},
				_stop : function (t) {
					this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
				},
				_setOption : function (t, e) {
					if ("culture" === t || "numberFormat" === t) {
						var i = this._parse(this.element.val());
						return this.options[t] = e,
						void this.element.val(this._format(i))
					}
					("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)),
					"icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)),
					this._super(t, e),
					"disabled" === t && (this.widget().toggleClass("ui-state-disabled", !!e), this.element.prop("disabled", !!e), this.buttons.button(e ? "disable" : "enable"))
				},
				_setOptions : l(function (t) {
					this._super(t)
				}),
				_parse : function (t) {
					return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t),
					"" === t || isNaN(t) ? null : t
				},
				_format : function (t) {
					return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
				},
				_refresh : function () {
					this.element.attr({
						"aria-valuemin" : this.options.min,
						"aria-valuemax" : this.options.max,
						"aria-valuenow" : this._parse(this.element.val())
					})
				},
				isValid : function () {
					var t = this.value();
					return null === t ? !1 : t === this._adjustValue(t)
				},
				_value : function (t, e) {
					var i;
					"" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))),
					this.element.val(t),
					this._refresh()
				},
				_destroy : function () {
					this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),
					this.uiSpinner.replaceWith(this.element)
				},
				stepUp : l(function (t) {
					this._stepUp(t)
				}),
				_stepUp : function (t) {
					this._start() && (this._spin((t || 1) * this.options.step), this._stop())
				},
				stepDown : l(function (t) {
					this._stepDown(t)
				}),
				_stepDown : function (t) {
					this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
				},
				pageUp : l(function (t) {
					this._stepUp((t || 1) * this.options.page)
				}),
				pageDown : l(function (t) {
					this._stepDown((t || 1) * this.options.page)
				}),
				value : function (t) {
					return arguments.length ? void l(this._value).call(this, t) : this._parse(this.element.val())
				},
				widget : function () {
					return this.uiSpinner
				}
			}),
			t.widget("ui.tabs", {
				version : "1.11.4",
				delay : 300,
				options : {
					active : null,
					collapsible : !1,
					event : "click",
					heightStyle : "content",
					hide : null,
					show : null,
					activate : null,
					beforeActivate : null,
					beforeLoad : null,
					load : null
				},
				_isLocal : function () {
					var t = /#.*$/;
					return function (e) {
						var i,
						n;
						e = e.cloneNode(!1),
						i = e.href.replace(t, ""),
						n = location.href.replace(t, "");
						try {
							i = decodeURIComponent(i)
						} catch (s) {}

						try {
							n = decodeURIComponent(n)
						} catch (s) {}

						return e.hash.length > 1 && i === n
					}
				}
				(),
				_create : function () {
					var e = this,
					i = this.options;
					this.running = !1,
					this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible),
					this._processTabs(),
					i.active = this._initialActive(),
					t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
										return e.tabs.index(t)
									}))).sort()),
					this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(),
					this._refresh(),
					this.active.length && this.load(i.active)
				},
				_initialActive : function () {
					var e = this.options.active,
					i = this.options.collapsible,
					n = location.hash.substring(1);
					return null === e && (n && this.tabs.each(function (i, s) {
							return t(s).attr("aria-controls") === n ? (e = i, !1) : void 0
						}), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)),
					e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = i ? !1 : 0)),
					!i && e === !1 && this.anchors.length && (e = 0),
					e
				},
				_getCreateEventData : function () {
					return {
						tab : this.active,
						panel : this.active.length ? this._getPanelForTab(this.active) : t()
					}
				},
				_tabKeydown : function (e) {
					var i = t(this.document[0].activeElement).closest("li"),
					n = this.tabs.index(i),
					s = !0;

					if (!this._handlePageNav(e)) {
						switch (e.keyCode) {
						case t.ui.keyCode.RIGHT:
						case t.ui.keyCode.DOWN:
							n++;
							break;
						case t.ui.keyCode.UP:
						case t.ui.keyCode.LEFT:
							s = !1,
							n--;
							break;
						case t.ui.keyCode.END:
							n = this.anchors.length - 1;
							break;
						case t.ui.keyCode.HOME:
							n = 0;
							break;
						case t.ui.keyCode.SPACE:
							return e.preventDefault(),
							clearTimeout(this.activating),
							void this._activate(n);
						case t.ui.keyCode.ENTER:
							return e.preventDefault(),
							clearTimeout(this.activating),
							void this._activate(n === this.options.active ? !1 : n);
						default:
							return
						}
						e.preventDefault(),
						clearTimeout(this.activating),
						n = this._focusNextTab(n, s),
						e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function () {
									this.option("active", n)
								}, this.delay))
					}
				},
				_panelKeydown : function (e) {
					this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
				},
				_handlePageNav : function (e) {
					return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
				},
				_findNextTab : function (e, i) {
					function n() {
						return e > s && (e = 0),
						0 > e && (e = s),
						e
					}
					for (var s = this.tabs.length - 1; -1 !== t.inArray(n(), this.options.disabled); )
						e = i ? e + 1 : e - 1;
					return e
				},
				_focusNextTab : function (t, e) {
					return t = this._findNextTab(t, e),
					this.tabs.eq(t).focus(),
					t
				},
				_setOption : function (t, e) {
					return "active" === t ? void this._activate(e) : "disabled" === t ? void this._setupDisabled(e) : (this._super(t, e), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e)))
				},
				_sanitizeSelector : function (t) {
					return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
				},
				refresh : function () {
					var e = this.options,
					i = this.tablist.children(":has(a[href])");
					e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
							return i.index(t)
						}),
					this._processTabs(),
					e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()),
					this._refresh()
				},
				_refresh : function () {
					this._setupDisabled(this.options.disabled),
					this._setupEvents(this.options.event),
					this._setupHeightStyle(this.options.heightStyle),
					this.tabs.not(this.active).attr({
						"aria-selected" : "false",
						"aria-expanded" : "false",
						tabIndex : -1
					}),
					this.panels.not(this._getPanelForTab(this.active)).hide().attr({
						"aria-hidden" : "true"
					}),
					this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
							"aria-selected" : "true",
							"aria-expanded" : "true",
							tabIndex : 0
						}), this._getPanelForTab(this.active).show().attr({
							"aria-hidden" : "false"
						})) : this.tabs.eq(0).attr("tabIndex", 0)
				},
				_processTabs : function () {
					var e = this,
					i = this.tabs,
					n = this.anchors,
					s = this.panels;
					this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function (e) {
							t(this).is(".ui-state-disabled") && e.preventDefault()
						}).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
							t(this).closest("li").is(".ui-state-disabled") && this.blur()
						}),
					this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
							role : "tab",
							tabIndex : -1
						}),
					this.anchors = this.tabs.map(function () {
							return t("a", this)[0]
						}).addClass("ui-tabs-anchor").attr({
							role : "presentation",
							tabIndex : -1
						}),
					this.panels = t(),
					this.anchors.each(function (i, n) {
						var s,
						r,
						o,
						a = t(n).uniqueId().attr("id"),
						l = t(n).closest("li"),
						h = l.attr("aria-controls");
						e._isLocal(n) ? (s = n.hash, o = s.substring(1), r = e.element.find(e._sanitizeSelector(s))) : (o = l.attr("aria-controls") || t({}).uniqueId()[0].id, s = "#" + o, r = e.element.find(s), r.length || (r = e._createPanel(o), r.insertAfter(e.panels[i - 1] || e.tablist)), r.attr("aria-live", "polite")),
						r.length && (e.panels = e.panels.add(r)),
						h && l.data("ui-tabs-aria-controls", h),
						l.attr({
							"aria-controls" : o,
							"aria-labelledby" : a
						}),
						r.attr("aria-labelledby", a)
					}),
					this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"),
					i && (this._off(i.not(this.tabs)), this._off(n.not(this.anchors)), this._off(s.not(this.panels)))
				},
				_getList : function () {
					return this.tablist || this.element.find("ol,ul").eq(0)
				},
				_createPanel : function (e) {
					return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
				},
				_setupDisabled : function (e) {
					t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
					for (var i, n = 0; i = this.tabs[n]; n++)
						e === !0 || -1 !== t.inArray(n, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
					this.options.disabled = e
				},
				_setupEvents : function (e) {
					var i = {};
					e && t.each(e.split(" "), function (t, e) {
						i[e] = "_eventHandler"
					}),
					this._off(this.anchors.add(this.tabs).add(this.panels)),
					this._on(!0, this.anchors, {
						click : function (t) {
							t.preventDefault()
						}
					}),
					this._on(this.anchors, i),
					this._on(this.tabs, {
						keydown : "_tabKeydown"
					}),
					this._on(this.panels, {
						keydown : "_panelKeydown"
					}),
					this._focusable(this.tabs),
					this._hoverable(this.tabs)
				},
				_setupHeightStyle : function (e) {
					var i,
					n = this.element.parent();
					"fill" === e ? (i = n.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
							var e = t(this),
							n = e.css("position");
							"absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0))
						}), this.element.children().not(this.panels).each(function () {
							i -= t(this).outerHeight(!0)
						}), this.panels.each(function () {
							t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
						}).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
							i = Math.max(i, t(this).height("").height())
						}).height(i))
				},
				_eventHandler : function (e) {
					var i = this.options,
					n = this.active,
					s = t(e.currentTarget),
					r = s.closest("li"),
					o = r[0] === n[0],
					a = o && i.collapsible,
					l = a ? t() : this._getPanelForTab(r),
					h = n.length ? this._getPanelForTab(n) : t(),
					u = {
						oldTab : n,
						oldPanel : h,
						newTab : a ? t() : r,
						newPanel : l
					};
					e.preventDefault(),
					r.hasClass("ui-state-disabled") || r.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || this._trigger("beforeActivate", e, u) === !1 || (i.active = a ? !1 : this.tabs.index(r), this.active = o ? t() : r, this.xhr && this.xhr.abort(), h.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(r), e), this._toggle(e, u))
				},
				_toggle : function (e, i) {
					function n() {
						r.running = !1,
						r._trigger("activate", e, i)
					}
					function s() {
						i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),
						o.length && r.options.show ? r._show(o, r.options.show, n) : (o.show(), n())
					}
					var r = this,
					o = i.newPanel,
					a = i.oldPanel;
					this.running = !0,
					a.length && this.options.hide ? this._hide(a, this.options.hide, function () {
						i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),
						s()
					}) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), a.hide(), s()),
					a.attr("aria-hidden", "true"),
					i.oldTab.attr({
						"aria-selected" : "false",
						"aria-expanded" : "false"
					}),
					o.length && a.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function () {
						return 0 === t(this).attr("tabIndex")
					}).attr("tabIndex", -1),
					o.attr("aria-hidden", "false"),
					i.newTab.attr({
						"aria-selected" : "true",
						"aria-expanded" : "true",
						tabIndex : 0
					})
				},
				_activate : function (e) {
					var i,
					n = this._findActive(e);
					n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({
							target : i,
							currentTarget : i,
							preventDefault : t.noop
						}))
				},
				_findActive : function (e) {
					return e === !1 ? t() : this.tabs.eq(e)
				},
				_getIndex : function (t) {
					return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))),
					t
				},
				_destroy : function () {
					this.xhr && this.xhr.abort(),
					this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),
					this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),
					this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),
					this.tablist.unbind(this.eventNamespace),
					this.tabs.add(this.panels).each(function () {
						t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
					}),
					this.tabs.each(function () {
						var e = t(this),
						i = e.data("ui-tabs-aria-controls");
						i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
					}),
					this.panels.show(),
					"content" !== this.options.heightStyle && this.panels.css("height", "")
				},
				enable : function (e) {
					var i = this.options.disabled;
					i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function (t) {
										return t !== e ? t : null
									}) : t.map(this.tabs, function (t, i) {
										return i !== e ? i : null
									})), this._setupDisabled(i))
				},
				disable : function (e) {
					var i = this.options.disabled;
					if (i !== !0) {
						if (void 0 === e)
							i = !0;
						else {
							if (e = this._getIndex(e), -1 !== t.inArray(e, i))
								return;
							i = t.isArray(i) ? t.merge([e], i).sort() : [e]
						}
						this._setupDisabled(i)
					}
				},
				load : function (e, i) {
					e = this._getIndex(e);
					var n = this,
					s = this.tabs.eq(e),
					r = s.find(".ui-tabs-anchor"),
					o = this._getPanelForTab(s),
					a = {
						tab : s,
						panel : o
					},
					l = function (t, e) {
						"abort" === e && n.panels.stop(!1, !0),
						s.removeClass("ui-tabs-loading"),
						o.removeAttr("aria-busy"),
						t === n.xhr && delete n.xhr
					};
					this._isLocal(r[0]) || (this.xhr = t.ajax(this._ajaxSettings(r, i, a)), this.xhr && "canceled" !== this.xhr.statusText && (s.addClass("ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.done(function (t, e, s) {
								setTimeout(function () {
									o.html(t),
									n._trigger("load", i, a),
									l(s, e)
								}, 1)
							}).fail(function (t, e) {
								setTimeout(function () {
									l(t, e)
								}, 1)
							})))
				},
				_ajaxSettings : function (e, i, n) {
					var s = this;
					return {
						url : e.attr("href"),
						beforeSend : function (e, r) {
							return s._trigger("beforeLoad", i, t.extend({
									jqXHR : e,
									ajaxSettings : r
								}, n))
						}
					}
				},
				_getPanelForTab : function (e) {
					var i = t(e).attr("aria-controls");
					return this.element.find(this._sanitizeSelector("#" + i))
				}
			}),
			t.widget("ui.tooltip", {
				version : "1.11.4",
				options : {
					content : function () {
						var e = t(this).attr("title") || "";
						return t("<a>").text(e).html()
					},
					hide : !0,
					items : "[title]:not([disabled])",
					position : {
						my : "left top+15",
						at : "left bottom",
						collision : "flipfit flip"
					},
					show : !0,
					tooltipClass : null,
					track : !1,
					close : null,
					open : null
				},
				_addDescribedBy : function (e, i) {
					var n = (e.attr("aria-describedby") || "").split(/\s+/);
					n.push(i),
					e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(n.join(" ")))
				},
				_removeDescribedBy : function (e) {
					var i = e.data("ui-tooltip-id"),
					n = (e.attr("aria-describedby") || "").split(/\s+/),
					s = t.inArray(i, n);
					-1 !== s && n.splice(s, 1),
					e.removeData("ui-tooltip-id"),
					n = t.trim(n.join(" ")),
					n ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby")
				},
				_create : function () {
					this._on({
						mouseover : "open",
						focusin : "open"
					}),
					this.tooltips = {},
					this.parents = {},
					this.options.disabled && this._disable(),
					this.liveRegion = t("<div>").attr({
							role : "log",
							"aria-live" : "assertive",
							"aria-relevant" : "additions"
						}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
				},
				_setOption : function (e, i) {
					var n = this;
					return "disabled" === e ? (this[i ? "_disable" : "_enable"](), void(this.options[e] = i)) : (this._super(e, i), void("content" === e && t.each(this.tooltips, function (t, e) {
								n._updateContent(e.element)
							})))
				},
				_disable : function () {
					var e = this;
					t.each(this.tooltips, function (i, n) {
						var s = t.Event("blur");
						s.target = s.currentTarget = n.element[0],
						e.close(s, !0)
					}),
					this.element.find(this.options.items).addBack().each(function () {
						var e = t(this);
						e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).removeAttr("title")
					})
				},
				_enable : function () {
					this.element.find(this.options.items).addBack().each(function () {
						var e = t(this);
						e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
					})
				},
				open : function (e) {
					var i = this,
					n = t(e ? e.target : this.element).closest(this.options.items);
					n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), n.data("ui-tooltip-open", !0), e && "mouseover" === e.type && n.parents().each(function () {
							var e,
							n = t(this);
							n.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)),
							n.attr("title") && (n.uniqueId(), i.parents[this.id] = {
									element : this,
									title : n.attr("title")
								}, n.attr("title", ""))
						}), this._registerCloseHandlers(e, n), this._updateContent(n, e))
				},
				_updateContent : function (t, e) {
					var i,
					n = this.options.content,
					s = this,
					r = e ? e.type : null;
					return "string" == typeof n ? this._open(e, t, n) : (i = n.call(t[0], function (i) {
								s._delay(function () {
									t.data("ui-tooltip-open") && (e && (e.type = r), this._open(e, t, i))
								})
							}), void(i && this._open(e, t, i)))
				},
				_open : function (e, i, n) {
					function s(t) {
						h.of = t,
						o.is(":hidden") || o.position(h)
					}
					var r,
					o,
					a,
					l,
					h = t.extend({}, this.options.position);
					if (n) {
						if (r = this._find(i))
							return void r.tooltip.find(".ui-tooltip-content").html(n);
						i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")),
						r = this._tooltip(i),
						o = r.tooltip,
						this._addDescribedBy(i, o.attr("id")),
						o.find(".ui-tooltip-content").html(n),
						this.liveRegion.children().hide(),
						n.clone ? (l = n.clone(), l.removeAttr("id").find("[id]").removeAttr("id")) : l = n,
						t("<div>").html(l).appendTo(this.liveRegion),
						this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
								mousemove : s
							}), s(e)) : o.position(t.extend({
								of : i
							}, this.options.position)),
						o.hide(),
						this._show(o, this.options.show),
						this.options.show && this.options.show.delay && (a = this.delayedShow = setInterval(function () {
									o.is(":visible") && (s(h.of), clearInterval(a))
								}, t.fx.interval)),
						this._trigger("open", e, {
							tooltip : o
						})
					}
				},
				_registerCloseHandlers : function (e, i) {
					var n = {
						keyup : function (e) {
							if (e.keyCode === t.ui.keyCode.ESCAPE) {
								var n = t.Event(e);
								n.currentTarget = i[0],
								this.close(n, !0)
							}
						}
					};
					i[0] !== this.element[0] && (n.remove = function () {
						this._removeTooltip(this._find(i).tooltip)
					}),
					e && "mouseover" !== e.type || (n.mouseleave = "close"),
					e && "focusin" !== e.type || (n.focusout = "close"),
					this._on(!0, i, n)
				},
				close : function (e) {
					var i,
					n = this,
					s = t(e ? e.currentTarget : this.element),
					r = this._find(s);
					return r ? (i = r.tooltip, void(r.closing || (clearInterval(this.delayedShow), s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")), this._removeDescribedBy(s), r.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function () {
									n._removeTooltip(t(this))
								}), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function (e, i) {
									t(i.element).attr("title", i.title),
									delete n.parents[e]
								}), r.closing = !0, this._trigger("close", e, {
									tooltip : i
								}), r.hiding || (r.closing = !1)))) : void s.removeData("ui-tooltip-open")
				},
				_tooltip : function (e) {
					var i = t("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
					n = i.uniqueId().attr("id");
					return t("<div>").addClass("ui-tooltip-content").appendTo(i),
					i.appendTo(this.document[0].body),
					this.tooltips[n] = {
						element : e,
						tooltip : i
					}
				},
				_find : function (t) {
					var e = t.data("ui-tooltip-id");
					return e ? this.tooltips[e] : null
				},
				_removeTooltip : function (t) {
					t.remove(),
					delete this.tooltips[t.attr("id")]
				},
				_destroy : function () {
					var e = this;
					t.each(this.tooltips, function (i, n) {
						var s = t.Event("blur"),
						r = n.element;
						s.target = s.currentTarget = r[0],
						e.close(s, !0),
						t("#" + i).remove(),
						r.data("ui-tooltip-title") && (r.attr("title") || r.attr("title", r.data("ui-tooltip-title")), r.removeData("ui-tooltip-title"))
					}),
					this.liveRegion.remove()
				}
			})
		}), "undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function(t) {
	"use strict";
	var e = t.fn.jquery.split(" ")[0].split(".");
	if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1)
		throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}
(jQuery), +function(t) {
	"use strict";
	function e() {
		var t = document.createElement("bootstrap"),
		e = {
			WebkitTransition : "webkitTransitionEnd",
			MozTransition : "transitionend",
			OTransition : "oTransitionEnd otransitionend",
			transition : "transitionend"
		};
		for (var i in e)
			if (void 0 !== t.style[i])
				return {
					end : e[i]
				};
		return !1
	}
	t.fn.emulateTransitionEnd = function (e) {
		var i = !1,
		n = this;
		t(this).one("bsTransitionEnd", function () {
			i = !0
		});
		var s = function () {
			i || t(n).trigger(t.support.transition.end)
		};
		return setTimeout(s, e),
		this
	},
	t(function () {
		t.support.transition = e(),
		t.support.transition && (t.event.special.bsTransitionEnd = {
				bindType : t.support.transition.end,
				delegateType : t.support.transition.end,
				handle : function (e) {
					return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
				}
			})
	})
}
(jQuery), +function(t) {
	"use strict";
	function e(e) {
		return this.each(function () {
			var i = t(this),
			s = i.data("bs.alert");
			s || i.data("bs.alert", s = new n(this)),
			"string" == typeof e && s[e].call(i)
		})
	}
	var i = '[data-dismiss="alert"]',
	n = function (e) {
		t(e).on("click", i, this.close)
	};
	n.VERSION = "3.3.5",
	n.TRANSITION_DURATION = 150,
	n.prototype.close = function (e) {
		function i() {
			o.detach().trigger("closed.bs.alert").remove()
		}
		var s = t(this),
		r = s.attr("data-target");
		r || (r = s.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
		var o = t(r);
		e && e.preventDefault(),
		o.length || (o = s.closest(".alert")),
		o.trigger(e = t.Event("close.bs.alert")),
		e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
	};
	var s = t.fn.alert;
	t.fn.alert = e,
	t.fn.alert.Constructor = n,
	t.fn.alert.noConflict = function () {
		return t.fn.alert = s,
		this
	},
	t(document).on("click.bs.alert.data-api", i, n.prototype.close)
}
(jQuery), +function(t) {
	"use strict";
	function e(e) {
		return this.each(function () {
			var n = t(this),
			s = n.data("bs.button"),
			r = "object" == typeof e && e;
			s || n.data("bs.button", s = new i(this, r)),
			"toggle" == e ? s.toggle() : e && s.setState(e)
		})
	}
	var i = function (e, n) {
		this.$element = t(e),
		this.options = t.extend({}, i.DEFAULTS, n),
		this.isLoading = !1
	};
	i.VERSION = "3.3.5",
	i.DEFAULTS = {
		loadingText : "loading..."
	},
	i.prototype.setState = function (e) {
		var i = "disabled",
		n = this.$element,
		s = n.is("input") ? "val" : "html",
		r = n.data();
		e += "Text",
		null == r.resetText && n.data("resetText", n[s]()),
		setTimeout(t.proxy(function () {
				n[s](null == r[e] ? this.options[e] : r[e]),
				"loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
			}, this), 0)
	},
	i.prototype.toggle = function () {
		var t = !0,
		e = this.$element.closest('[data-toggle="buttons"]');
		if (e.length) {
			var i = this.$element.find("input");
			"radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")),
			i.prop("checked", this.$element.hasClass("active")),
			t && i.trigger("change")
		} else
			this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
	};
	var n = t.fn.button;
	t.fn.button = e,
	t.fn.button.Constructor = i,
	t.fn.button.noConflict = function () {
		return t.fn.button = n,
		this
	},
	t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
		var n = t(i.target);
		n.hasClass("btn") || (n = n.closest(".btn")),
		e.call(n, "toggle"),
		t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault()
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
		t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
	})
}
(jQuery), +function(t) {
	"use strict";
	function e(e) {
		return this.each(function () {
			var n = t(this),
			s = n.data("bs.carousel"),
			r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
			o = "string" == typeof e ? e : r.slide;
			s || n.data("bs.carousel", s = new i(this, r)),
			"number" == typeof e ? s.to(e) : o ? s[o]() : r.interval && s.pause().cycle()
		})
	}
	var i = function (e, i) {
		this.$element = t(e),
		this.$indicators = this.$element.find(".carousel-indicators"),
		this.options = i,
		this.paused = null,
		this.sliding = null,
		this.interval = null,
		this.$active = null,
		this.$items = null,
		this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
		"hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
	};
	i.VERSION = "3.3.5",
	i.TRANSITION_DURATION = 600,
	i.DEFAULTS = {
		interval : 5e3,
		pause : "hover",
		wrap : !0,
		keyboard : !0
	},
	i.prototype.keydown = function (t) {
		if (!/input|textarea/i.test(t.target.tagName)) {
			switch (t.which) {
			case 37:
				this.prev();
				break;
			case 39:
				this.next();
				break;
			default:
				return
			}
			t.preventDefault()
		}
	},
	i.prototype.cycle = function (e) {
		return e || (this.paused = !1),
		this.interval && clearInterval(this.interval),
		this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)),
		this
	},
	i.prototype.getItemIndex = function (t) {
		return this.$items = t.parent().children(".item"),
		this.$items.index(t || this.$active)
	},
	i.prototype.getItemForDirection = function (t, e) {
		var i = this.getItemIndex(e),
		n = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
		if (n && !this.options.wrap)
			return e;
		var s = "prev" == t ? -1 : 1,
		r = (i + s) % this.$items.length;
		return this.$items.eq(r)
	},
	i.prototype.to = function (t) {
		var e = this,
		i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
		return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
			e.to(t)
		}) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
	},
	i.prototype.pause = function (e) {
		return e || (this.paused = !0),
		this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)),
		this.interval = clearInterval(this.interval),
		this
	},
	i.prototype.next = function () {
		return this.sliding ? void 0 : this.slide("next")
	},
	i.prototype.prev = function () {
		return this.sliding ? void 0 : this.slide("prev")
	},
	i.prototype.slide = function (e, n) {
		var s = this.$element.find(".item.active"),
		r = n || this.getItemForDirection(e, s),
		o = this.interval,
		a = "next" == e ? "left" : "right",
		l = this;
		if (r.hasClass("active"))
			return this.sliding = !1;
		var h = r[0],
		u = t.Event("slide.bs.carousel", {
				relatedTarget : h,
				direction : a
			});
		if (this.$element.trigger(u), !u.isDefaultPrevented()) {
			if (this.sliding = !0, o && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				var c = t(this.$indicators.children()[this.getItemIndex(r)]);
				c && c.addClass("active")
			}
			var d = t.Event("slid.bs.carousel", {
					relatedTarget : h,
					direction : a
				});
			return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, s.addClass(a), r.addClass(a), s.one("bsTransitionEnd", function () {
					r.removeClass([e, a].join(" ")).addClass("active"),
					s.removeClass(["active", a].join(" ")),
					l.sliding = !1,
					setTimeout(function () {
						l.$element.trigger(d)
					}, 0)
				}).emulateTransitionEnd(i.TRANSITION_DURATION)) : (s.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(d)),
			o && this.cycle(),
			this
		}
	};
	var n = t.fn.carousel;
	t.fn.carousel = e,
	t.fn.carousel.Constructor = i,
	t.fn.carousel.noConflict = function () {
		return t.fn.carousel = n,
		this
	};
	var s = function (i) {
		var n,
		s = t(this),
		r = t(s.attr("data-target") || (n = s.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
		if (r.hasClass("carousel")) {
			var o = t.extend({}, r.data(), s.data()),
			a = s.attr("data-slide-to");
			a && (o.interval = !1),
			e.call(r, o),
			a && r.data("bs.carousel").to(a),
			i.preventDefault()
		}
	};
	t(document).on("click.bs.carousel.data-api", "[data-slide]", s).on("click.bs.carousel.data-api", "[data-slide-to]", s),
	t(window).on("load", function () {
		t('[data-ride="carousel"]').each(function () {
			var i = t(this);
			e.call(i, i.data())
		})
	})
}
(jQuery), +function(t) {
	"use strict";
	function e(e) {
		var i,
		n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
		return t(n)
	}
	function i(e) {
		return this.each(function () {
			var i = t(this),
			s = i.data("bs.collapse"),
			r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
			!s && r.toggle && /show|hide/.test(e) && (r.toggle = !1),
			s || i.data("bs.collapse", s = new n(this, r)),
			"string" == typeof e && s[e]()
		})
	}
	var n = function (e, i) {
		this.$element = t(e),
		this.options = t.extend({}, n.DEFAULTS, i),
		this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'),
		this.transitioning = null,
		this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
		this.options.toggle && this.toggle()
	};
	n.VERSION = "3.3.5",
	n.TRANSITION_DURATION = 350,
	n.DEFAULTS = {
		toggle : !0
	},
	n.prototype.dimension = function () {
		var t = this.$element.hasClass("width");
		return t ? "width" : "height"
	},
	n.prototype.show = function () {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var e,
			s = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
			if (!(s && s.length && (e = s.data("bs.collapse"), e && e.transitioning))) {
				var r = t.Event("show.bs.collapse");
				if (this.$element.trigger(r), !r.isDefaultPrevented()) {
					s && s.length && (i.call(s, "hide"), e || s.data("bs.collapse", null));
					var o = this.dimension();
					this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0),
					this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
					this.transitioning = 1;
					var a = function () {
						this.$element.removeClass("collapsing").addClass("collapse in")[o](""),
						this.transitioning = 0,
						this.$element.trigger("shown.bs.collapse")
					};
					if (!t.support.transition)
						return a.call(this);
					var l = t.camelCase(["scroll", o].join("-"));
					this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[o](this.$element[0][l])
				}
			}
		}
	},
	n.prototype.hide = function () {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var e = t.Event("hide.bs.collapse");
			if (this.$element.trigger(e), !e.isDefaultPrevented()) {
				var i = this.dimension();
				this.$element[i](this.$element[i]())[0].offsetHeight,
				this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
				this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
				this.transitioning = 1;
				var s = function () {
					this.transitioning = 0,
					this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
				};
				return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : s.call(this)
			}
		}
	},
	n.prototype.toggle = function () {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	},
	n.prototype.getParent = function () {
		return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (i, n) {
				var s = t(n);
				this.addAriaAndCollapsedClass(e(s), s)
			}, this)).end()
	},
	n.prototype.addAriaAndCollapsedClass = function (t, e) {
		var i = t.hasClass("in");
		t.attr("aria-expanded", i),
		e.toggleClass("collapsed", !i).attr("aria-expanded", i)
	};
	var s = t.fn.collapse;
	t.fn.collapse = i,
	t.fn.collapse.Constructor = n,
	t.fn.collapse.noConflict = function () {
		return t.fn.collapse = s,
		this
	},
	t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (n) {
		var s = t(this);
		s.attr("data-target") || n.preventDefault();
		var r = e(s),
		o = r.data("bs.collapse"),
		a = o ? "toggle" : s.data();
		i.call(r, a)
	})
}
(jQuery), +function(t) {
	"use strict";
	function e(e) {
		var i = e.attr("data-target");
		i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
		var n = i && t(i);
		return n && n.length ? n : e.parent()
	}
	function i(i) {
		i && 3 === i.which || (t(s).remove(), t(r).each(function () {
				var n = t(this),
				s = e(n),
				r = {
					relatedTarget : this
				};
				s.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(s[0], i.target) || (s.trigger(i = t.Event("hide.bs.dropdown", r)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), s.removeClass("open").trigger("hidden.bs.dropdown", r))))
			}))
	}
	function n(e) {
		return this.each(function () {
			var i = t(this),
			n = i.data("bs.dropdown");
			n || i.data("bs.dropdown", n = new o(this)),
			"string" == typeof e && n[e].call(i)
		})
	}
	var s = ".dropdown-backdrop",
	r = '[data-toggle="dropdown"]',
	o = function (e) {
		t(e).on("click.bs.dropdown", this.toggle)
	};
	o.VERSION = "3.3.5",
	o.prototype.toggle = function (n) {
		var s = t(this);
		if (!s.is(".disabled, :disabled")) {
			var r = e(s),
			o = r.hasClass("open");
			if (i(), !o) {
				"ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
				var a = {
					relatedTarget : this
				};
				if (r.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented())
					return;
				s.trigger("focus").attr("aria-expanded", "true"),
				r.toggleClass("open").trigger("shown.bs.dropdown", a)
			}
			return !1
		}
	},
	o.prototype.keydown = function (i) {
		if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
			var n = t(this);
			if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
				var s = e(n),
				o = s.hasClass("open");
				if (!o && 27 != i.which || o && 27 == i.which)
					return 27 == i.which && s.find(r).trigger("focus"), n.trigger("click");
				var a = " li:not(.disabled):visible a",
				l = s.find(".dropdown-menu" + a);
				if (l.length) {
					var h = l.index(i.target);
					38 == i.which && h > 0 && h--,
					40 == i.which && h < l.length - 1 && h++,
					~h || (h = 0),
					l.eq(h).trigger("focus")
				}
			}
		}
	};
	var a = t.fn.dropdown;
	t.fn.dropdown = n,
	t.fn.dropdown.Constructor = o,
	t.fn.dropdown.noConflict = function () {
		return t.fn.dropdown = a,
		this
	},
	t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
		t.stopPropagation()
	}).on("click.bs.dropdown.data-api", r, o.prototype.toggle).on("keydown.bs.dropdown.data-api", r, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
}
(jQuery), +function(t) {
	"use strict";
	function e(e, n) {
		return this.each(function () {
			var s = t(this),
			r = s.data("bs.modal"),
			o = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e);
			r || s.data("bs.modal", r = new i(this, o)),
			"string" == typeof e ? r[e](n) : o.show && r.show(n)
		})
	}
	var i = function (e, i) {
		this.options = i,
		this.$body = t(document.body),
		this.$element = t(e),
		this.$dialog = this.$element.find(".modal-dialog"),
		this.$backdrop = null,
		this.isShown = null,
		this.originalBodyPad = null,
		this.scrollbarWidth = 0,
		this.ignoreBackdropClick = !1,
		this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
				this.$element.trigger("loaded.bs.modal")
			}, this))
	};
	i.VERSION = "3.3.5",
	i.TRANSITION_DURATION = 300,
	i.BACKDROP_TRANSITION_DURATION = 150,
	i.DEFAULTS = {
		backdrop : !0,
		keyboard : !0,
		show : !0
	},
	i.prototype.toggle = function (t) {
		return this.isShown ? this.hide() : this.show(t)
	},
	i.prototype.show = function (e) {
		var n = this,
		s = t.Event("show.bs.modal", {
				relatedTarget : e
			});
		this.$element.trigger(s),
		this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
				n.$element.one("mouseup.dismiss.bs.modal", function (e) {
					t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
				})
			}), this.backdrop(function () {
				var s = t.support.transition && n.$element.hasClass("fade");
				n.$element.parent().length || n.$element.appendTo(n.$body),
				n.$element.show().scrollTop(0),
				n.adjustDialog(),
				s && n.$element[0].offsetWidth,
				n.$element.addClass("in"),
				n.enforceFocus();
				var r = t.Event("shown.bs.modal", {
						relatedTarget : e
					});
				s ? n.$dialog.one("bsTransitionEnd", function () {
					n.$element.trigger("focus").trigger(r)
				}).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(r)
			}))
	},
	i.prototype.hide = function (e) {
		e && e.preventDefault(),
		e = t.Event("hide.bs.modal"),
		this.$element.trigger(e),
		this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
	},
	i.prototype.enforceFocus = function () {
		t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
				this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
			}, this))
	},
	i.prototype.escape = function () {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
				27 == t.which && this.hide()
			}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
	},
	i.prototype.resize = function () {
		this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal");

	},
	i.prototype.hideModal = function () {
		var t = this;
		this.$element.hide(),
		this.backdrop(function () {
			t.$body.removeClass("modal-open"),
			t.resetAdjustments(),
			t.resetScrollbar(),
			t.$element.trigger("hidden.bs.modal")
		})
	},
	i.prototype.removeBackdrop = function () {
		this.$backdrop && this.$backdrop.remove(),
		this.$backdrop = null
	},
	i.prototype.backdrop = function (e) {
		var n = this,
		s = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var r = t.support.transition && s;
			if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + s).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
						return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
					}, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)
				return;
			r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");
			var o = function () {
				n.removeBackdrop(),
				e && e()
			};
			t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : o()
		} else
			e && e()
	},
	i.prototype.handleUpdate = function () {
		this.adjustDialog()
	},
	i.prototype.adjustDialog = function () {
		var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft : !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
			paddingRight : this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
		})
	},
	i.prototype.resetAdjustments = function () {
		this.$element.css({
			paddingLeft : "",
			paddingRight : ""
		})
	},
	i.prototype.checkScrollbar = function () {
		var t = window.innerWidth;
		if (!t) {
			var e = document.documentElement.getBoundingClientRect();
			t = e.right - Math.abs(e.left)
		}
		this.bodyIsOverflowing = document.body.clientWidth < t,
		this.scrollbarWidth = this.measureScrollbar()
	},
	i.prototype.setScrollbar = function () {
		var t = parseInt(this.$body.css("padding-right") || 0, 10);
		this.originalBodyPad = document.body.style.paddingRight || "",
		this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
	},
	i.prototype.resetScrollbar = function () {
		this.$body.css("padding-right", this.originalBodyPad)
	},
	i.prototype.measureScrollbar = function () {
		var t = document.createElement("div");
		t.className = "modal-scrollbar-measure",
		this.$body.append(t);
		var e = t.offsetWidth - t.clientWidth;
		return this.$body[0].removeChild(t),
		e
	};
	var n = t.fn.modal;
	t.fn.modal = e,
	t.fn.modal.Constructor = i,
	t.fn.modal.noConflict = function () {
		return t.fn.modal = n,
		this
	},
	t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
		var n = t(this),
		s = n.attr("href"),
		r = t(n.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")),
		o = r.data("bs.modal") ? "toggle" : t.extend({
				remote : !/#/.test(s) && s
			}, r.data(), n.data());
		n.is("a") && i.preventDefault(),
		r.one("show.bs.modal", function (t) {
			t.isDefaultPrevented() || r.one("hidden.bs.modal", function () {
				n.is(":visible") && n.trigger("focus")
			})
		}),
		e.call(r, o, this)
	})
}
(jQuery), +function(t) {
	"use strict";
	function e(e) {
		return this.each(function () {
			var n = t(this),
			s = n.data("bs.tooltip"),
			r = "object" == typeof e && e;
			(s || !/destroy|hide/.test(e)) && (s || n.data("bs.tooltip", s = new i(this, r)), "string" == typeof e && s[e]())
		})
	}
	var i = function (t, e) {
		this.type = null,
		this.options = null,
		this.enabled = null,
		this.timeout = null,
		this.hoverState = null,
		this.$element = null,
		this.inState = null,
		this.init("tooltip", t, e)
	};
	i.VERSION = "3.3.5",
	i.TRANSITION_DURATION = 150,
	i.DEFAULTS = {
		animation : !0,
		placement : "top",
		selector : !1,
		template : '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger : "hover focus",
		title : "",
		delay : 0,
		html : !1,
		container : !1,
		viewport : {
			selector : "body",
			padding : 0
		}
	},
	i.prototype.init = function (e, i, n) {
		if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
				click : !1,
				hover : !1,
				focus : !1
			}, this.$element[0]instanceof document.constructor && !this.options.selector)
			throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
		for (var s = this.options.trigger.split(" "), r = s.length; r--; ) {
			var o = s[r];
			if ("click" == o)
				this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
			else if ("manual" != o) {
				var a = "hover" == o ? "mouseenter" : "focusin",
				l = "hover" == o ? "mouseleave" : "focusout";
				this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)),
				this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = t.extend({}, this.options, {
				trigger : "manual",
				selector : ""
			}) : this.fixTitle()
	},
	i.prototype.getDefaults = function () {
		return i.DEFAULTS
	},
	i.prototype.getOptions = function (e) {
		return e = t.extend({}, this.getDefaults(), this.$element.data(), e),
		e.delay && "number" == typeof e.delay && (e.delay = {
				show : e.delay,
				hide : e.delay
			}),
		e
	},
	i.prototype.getDelegateOptions = function () {
		var e = {},
		i = this.getDefaults();
		return this._options && t.each(this._options, function (t, n) {
			i[t] != n && (e[t] = n)
		}),
		e
	},
	i.prototype.enter = function (e) {
		var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
		return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)),
		e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0),
		i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function () {
						"in" == i.hoverState && i.show()
					}, i.options.delay.show)) : i.show())
	},
	i.prototype.isInStateTrue = function () {
		for (var t in this.inState)
			if (this.inState[t])
				return !0;
		return !1
	},
	i.prototype.leave = function (e) {
		var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
		return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)),
		e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1),
		i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function () {
						"out" == i.hoverState && i.hide()
					}, i.options.delay.hide)) : i.hide())
	},
	i.prototype.show = function () {
		var e = t.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(e);
			var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (e.isDefaultPrevented() || !n)
				return;
			var s = this,
			r = this.tip(),
			o = this.getUID(this.type);
			this.setContent(),
			r.attr("id", o),
			this.$element.attr("aria-describedby", o),
			this.options.animation && r.addClass("fade");
			var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
			l = /\s?auto?\s?/i,
			h = l.test(a);
			h && (a = a.replace(l, "") || "top"),
			r.detach().css({
				top : 0,
				left : 0,
				display : "block"
			}).addClass(a).data("bs." + this.type, this),
			this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element),
			this.$element.trigger("inserted.bs." + this.type);
			var u = this.getPosition(),
			c = r[0].offsetWidth,
			d = r[0].offsetHeight;
			if (h) {
				var f = a,
				p = this.getPosition(this.$viewport);
				a = "bottom" == a && u.bottom + d > p.bottom ? "top" : "top" == a && u.top - d < p.top ? "bottom" : "right" == a && u.right + c > p.width ? "left" : "left" == a && u.left - c < p.left ? "right" : a,
				r.removeClass(f).addClass(a)
			}
			var g = this.getCalculatedOffset(a, u, c, d);
			this.applyPlacement(g, a);
			var m = function () {
				var t = s.hoverState;
				s.$element.trigger("shown.bs." + s.type),
				s.hoverState = null,
				"out" == t && s.leave(s)
			};
			t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m()
		}
	},
	i.prototype.applyPlacement = function (e, i) {
		var n = this.tip(),
		s = n[0].offsetWidth,
		r = n[0].offsetHeight,
		o = parseInt(n.css("margin-top"), 10),
		a = parseInt(n.css("margin-left"), 10);
		isNaN(o) && (o = 0),
		isNaN(a) && (a = 0),
		e.top += o,
		e.left += a,
		t.offset.setOffset(n[0], t.extend({
				using : function (t) {
					n.css({
						top : Math.round(t.top),
						left : Math.round(t.left)
					})
				}
			}, e), 0),
		n.addClass("in");
		var l = n[0].offsetWidth,
		h = n[0].offsetHeight;
		"top" == i && h != r && (e.top = e.top + r - h);
		var u = this.getViewportAdjustedDelta(i, e, l, h);
		u.left ? e.left += u.left : e.top += u.top;
		var c = /top|bottom/.test(i),
		d = c ? 2 * u.left - s + l : 2 * u.top - r + h,
		f = c ? "offsetWidth" : "offsetHeight";
		n.offset(e),
		this.replaceArrow(d, n[0][f], c)
	},
	i.prototype.replaceArrow = function (t, e, i) {
		this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
	},
	i.prototype.setContent = function () {
		var t = this.tip(),
		e = this.getTitle();
		t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
		t.removeClass("fade in top bottom left right")
	},
	i.prototype.hide = function (e) {
		function n() {
			"in" != s.hoverState && r.detach(),
			s.$element.removeAttr("aria-describedby").trigger("hidden.bs." + s.type),
			e && e()
		}
		var s = this,
		r = t(this.$tip),
		o = t.Event("hide.bs." + this.type);
		return this.$element.trigger(o),
		o.isDefaultPrevented() ? void 0 : (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this)
	},
	i.prototype.fixTitle = function () {
		var t = this.$element;
		(t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
	},
	i.prototype.hasContent = function () {
		return this.getTitle()
	},
	i.prototype.getPosition = function (e) {
		e = e || this.$element;
		var i = e[0],
		n = "BODY" == i.tagName,
		s = i.getBoundingClientRect();
		null == s.width && (s = t.extend({}, s, {
					width : s.right - s.left,
					height : s.bottom - s.top
				}));
		var r = n ? {
			top : 0,
			left : 0
		}
		 : e.offset(),
		o = {
			scroll : n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
		},
		a = n ? {
			width : t(window).width(),
			height : t(window).height()
		}
		 : null;
		return t.extend({}, s, o, a, r)
	},
	i.prototype.getCalculatedOffset = function (t, e, i, n) {
		return "bottom" == t ? {
			top : e.top + e.height,
			left : e.left + e.width / 2 - i / 2
		}
		 : "top" == t ? {
			top : e.top - n,
			left : e.left + e.width / 2 - i / 2
		}
		 : "left" == t ? {
			top : e.top + e.height / 2 - n / 2,
			left : e.left - i
		}
		 : {
			top : e.top + e.height / 2 - n / 2,
			left : e.left + e.width
		}
	},
	i.prototype.getViewportAdjustedDelta = function (t, e, i, n) {
		var s = {
			top : 0,
			left : 0
		};
		if (!this.$viewport)
			return s;
		var r = this.options.viewport && this.options.viewport.padding || 0,
		o = this.getPosition(this.$viewport);
		if (/right|left/.test(t)) {
			var a = e.top - r - o.scroll,
			l = e.top + r - o.scroll + n;
			a < o.top ? s.top = o.top - a : l > o.top + o.height && (s.top = o.top + o.height - l)
		} else {
			var h = e.left - r,
			u = e.left + r + i;
			h < o.left ? s.left = o.left - h : u > o.right && (s.left = o.left + o.width - u)
		}
		return s
	},
	i.prototype.getTitle = function () {
		var t,
		e = this.$element,
		i = this.options;
		return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
	},
	i.prototype.getUID = function (t) {
		do
			t += ~~(1e6 * Math.random());
		while (document.getElementById(t));
		return t
	},
	i.prototype.tip = function () {
		if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length))
			throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
		return this.$tip
	},
	i.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	},
	i.prototype.enable = function () {
		this.enabled = !0
	},
	i.prototype.disable = function () {
		this.enabled = !1
	},
	i.prototype.toggleEnabled = function () {
		this.enabled = !this.enabled
	},
	i.prototype.toggle = function (e) {
		var i = this;
		e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))),
		e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
	},
	i.prototype.destroy = function () {
		var t = this;
		clearTimeout(this.timeout),
		this.hide(function () {
			t.$element.off("." + t.type).removeData("bs." + t.type),
			t.$tip && t.$tip.detach(),
			t.$tip = null,
			t.$arrow = null,
			t.$viewport = null
		})
	};
	var n = t.fn.tooltip;
	t.fn.tooltip = e,
	t.fn.tooltip.Constructor = i,
	t.fn.tooltip.noConflict = function () {
		return t.fn.tooltip = n,
		this
	}
}
(jQuery), +function(t) {
	"use strict";
	function e(e) {
		return this.each(function () {
			var n = t(this),
			s = n.data("bs.popover"),
			r = "object" == typeof e && e;
			(s || !/destroy|hide/.test(e)) && (s || n.data("bs.popover", s = new i(this, r)), "string" == typeof e && s[e]())
		})
	}
	var i = function (t, e) {
		this.init("popover", t, e)
	};
	if (!t.fn.tooltip)
		throw new Error("Popover requires tooltip.js");
	i.VERSION = "3.3.5",
	i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
			placement : "right",
			trigger : "click",
			content : "",
			template : '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
		}),
	i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype),
	i.prototype.constructor = i,
	i.prototype.getDefaults = function () {
		return i.DEFAULTS
	},
	i.prototype.setContent = function () {
		var t = this.tip(),
		e = this.getTitle(),
		i = this.getContent();
		t.find(".popover-title")[this.options.html ? "html" : "text"](e),
		t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i),
		t.removeClass("fade top bottom left right in"),
		t.find(".popover-title").html() || t.find(".popover-title").hide()
	},
	i.prototype.hasContent = function () {
		return this.getTitle() || this.getContent()
	},
	i.prototype.getContent = function () {
		var t = this.$element,
		e = this.options;
		return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
	},
	i.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	};
	var n = t.fn.popover;
	t.fn.popover = e,
	t.fn.popover.Constructor = i,
	t.fn.popover.noConflict = function () {
		return t.fn.popover = n,
		this
	}
}
(jQuery), +function(t) {
	"use strict";
	function e(i, n) {
		this.$body = t(document.body),
		this.$scrollElement = t(t(i).is(document.body) ? window : i),
		this.options = t.extend({}, e.DEFAULTS, n),
		this.selector = (this.options.target || "") + " .nav li > a",
		this.offsets = [],
		this.targets = [],
		this.activeTarget = null,
		this.scrollHeight = 0,
		this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)),
		this.refresh(),
		this.process()
	}
	function i(i) {
		return this.each(function () {
			var n = t(this),
			s = n.data("bs.scrollspy"),
			r = "object" == typeof i && i;
			s || n.data("bs.scrollspy", s = new e(this, r)),
			"string" == typeof i && s[i]()
		})
	}
	e.VERSION = "3.3.5",
	e.DEFAULTS = {
		offset : 10
	},
	e.prototype.getScrollHeight = function () {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	},
	e.prototype.refresh = function () {
		var e = this,
		i = "offset",
		n = 0;
		this.offsets = [],
		this.targets = [],
		this.scrollHeight = this.getScrollHeight(),
		t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()),
		this.$body.find(this.selector).map(function () {
			var e = t(this),
			s = e.data("target") || e.attr("href"),
			r = /^#./.test(s) && t(s);
			return r && r.length && r.is(":visible") && [[r[i]().top + n, s]] || null
		}).sort(function (t, e) {
			return t[0] - e[0]
		}).each(function () {
			e.offsets.push(this[0]),
			e.targets.push(this[1])
		})
	},
	e.prototype.process = function () {
		var t,
		e = this.$scrollElement.scrollTop() + this.options.offset,
		i = this.getScrollHeight(),
		n = this.options.offset + i - this.$scrollElement.height(),
		s = this.offsets,
		r = this.targets,
		o = this.activeTarget;
		if (this.scrollHeight != i && this.refresh(), e >= n)
			return o != (t = r[r.length - 1]) && this.activate(t);
		if (o && e < s[0])
			return this.activeTarget = null, this.clear();
		for (t = s.length; t--; )
			o != r[t] && e >= s[t] && (void 0 === s[t + 1] || e < s[t + 1]) && this.activate(r[t])
	},
	e.prototype.activate = function (e) {
		this.activeTarget = e,
		this.clear();
		var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
		n = t(i).parents("li").addClass("active");
		n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")),
		n.trigger("activate.bs.scrollspy")
	},
	e.prototype.clear = function () {
		t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
	};
	var n = t.fn.scrollspy;
	t.fn.scrollspy = i,
	t.fn.scrollspy.Constructor = e,
	t.fn.scrollspy.noConflict = function () {
		return t.fn.scrollspy = n,
		this
	},
	t(window).on("load.bs.scrollspy.data-api", function () {
		t('[data-spy="scroll"]').each(function () {
			var e = t(this);
			i.call(e, e.data())
		})
	})
}
(jQuery), +function(t) {
	"use strict";
	function e(e) {
		return this.each(function () {
			var n = t(this),
			s = n.data("bs.tab");
			s || n.data("bs.tab", s = new i(this)),
			"string" == typeof e && s[e]()
		})
	}
	var i = function (e) {
		this.element = t(e)
	};
	i.VERSION = "3.3.5",
	i.TRANSITION_DURATION = 150,
	i.prototype.show = function () {
		var e = this.element,
		i = e.closest("ul:not(.dropdown-menu)"),
		n = e.data("target");
		if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
			var s = i.find(".active:last a"),
			r = t.Event("hide.bs.tab", {
					relatedTarget : e[0]
				}),
			o = t.Event("show.bs.tab", {
					relatedTarget : s[0]
				});
			if (s.trigger(r), e.trigger(o), !o.isDefaultPrevented() && !r.isDefaultPrevented()) {
				var a = t(n);
				this.activate(e.closest("li"), i),
				this.activate(a, a.parent(), function () {
					s.trigger({
						type : "hidden.bs.tab",
						relatedTarget : e[0]
					}),
					e.trigger({
						type : "shown.bs.tab",
						relatedTarget : s[0]
					})
				})
			}
		}
	},
	i.prototype.activate = function (e, n, s) {
		function r() {
			o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
			e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
			a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
			e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
			s && s()
		}
		var o = n.find("> .active"),
		a = s && t.support.transition && (o.length && o.hasClass("fade") || !!n.find("> .fade").length);
		o.length && a ? o.one("bsTransitionEnd", r).emulateTransitionEnd(i.TRANSITION_DURATION) : r(),
		o.removeClass("in")
	};
	var n = t.fn.tab;
	t.fn.tab = e,
	t.fn.tab.Constructor = i,
	t.fn.tab.noConflict = function () {
		return t.fn.tab = n,
		this
	};
	var s = function (i) {
		i.preventDefault(),
		e.call(t(this), "show")
	};
	t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', s).on("click.bs.tab.data-api", '[data-toggle="pill"]', s)
}
(jQuery), +function(t) {
	"use strict";
	function e(e) {
		return this.each(function () {
			var n = t(this),
			s = n.data("bs.affix"),
			r = "object" == typeof e && e;
			s || n.data("bs.affix", s = new i(this, r)),
			"string" == typeof e && s[e]()
		})
	}
	var i = function (e, n) {
		this.options = t.extend({}, i.DEFAULTS, n),
		this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)),
		this.$element = t(e),
		this.affixed = null,
		this.unpin = null,
		this.pinnedOffset = null,
		this.checkPosition()
	};
	i.VERSION = "3.3.5",
	i.RESET = "affix affix-top affix-bottom",
	i.DEFAULTS = {
		offset : 0,
		target : window
	},
	i.prototype.getState = function (t, e, i, n) {
		var s = this.$target.scrollTop(),
		r = this.$element.offset(),
		o = this.$target.height();
		if (null != i && "top" == this.affixed)
			return i > s ? "top" : !1;
		if ("bottom" == this.affixed)
			return null != i ? s + this.unpin <= r.top ? !1 : "bottom" : t - n >= s + o ? !1 : "bottom";
		var a = null == this.affixed,
		l = a ? s : r.top,
		h = a ? o : e;
		return null != i && i >= s ? "top" : null != n && l + h >= t - n ? "bottom" : !1
	},
	i.prototype.getPinnedOffset = function () {
		if (this.pinnedOffset)
			return this.pinnedOffset;
		this.$element.removeClass(i.RESET).addClass("affix");
		var t = this.$target.scrollTop(),
		e = this.$element.offset();
		return this.pinnedOffset = e.top - t
	},
	i.prototype.checkPositionWithEventLoop = function () {
		setTimeout(t.proxy(this.checkPosition, this), 1)
	},
	i.prototype.checkPosition = function () {
		if (this.$element.is(":visible")) {
			var e = this.$element.height(),
			n = this.options.offset,
			s = n.top,
			r = n.bottom,
			o = Math.max(t(document).height(), t(document.body).height());
			"object" != typeof n && (r = s = n),
			"function" == typeof s && (s = n.top(this.$element)),
			"function" == typeof r && (r = n.bottom(this.$element));
			var a = this.getState(o, e, s, r);
			if (this.affixed != a) {
				null != this.unpin && this.$element.css("top", "");
				var l = "affix" + (a ? "-" + a : ""),
				h = t.Event(l + ".bs.affix");
				if (this.$element.trigger(h), h.isDefaultPrevented())
					return;
				this.affixed = a,
				this.unpin = "bottom" == a ? this.getPinnedOffset() : null,
				this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
			}
			"bottom" == a && this.$element.offset({
				top : o - e - r
			})
		}
	};
	var n = t.fn.affix;
	t.fn.affix = e,
	t.fn.affix.Constructor = i,
	t.fn.affix.noConflict = function () {
		return t.fn.affix = n,
		this
	},
	t(window).on("load", function () {
		t('[data-spy="affix"]').each(function () {
			var i = t(this),
			n = i.data();
			n.offset = n.offset || {},
			null != n.offsetBottom && (n.offset.bottom = n.offsetBottom),
			null != n.offsetTop && (n.offset.top = n.offsetTop),
			e.call(i, n)
		})
	})
}
(jQuery), !function (t, e) {
	if ("function" == typeof define && define.amd)
		define(["jquery"], e);
	else if ("object" == typeof module && module.exports) {
		var i;
		try {
			i = require("jquery")
		} catch (n) {
			i = null
		}
		module.exports = e(i)
	} else
		t.Slider = e(t.jQuery)
}
(this, function (t) {
	var e;
	return function (t) {
		"use strict";
		function e() {}

		function i(t) {
			function i(e) {
				e.prototype.option || (e.prototype.option = function (e) {
					t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
				})
			}
			function s(e, i) {
				t.fn[e] = function (s) {
					if ("string" == typeof s) {
						for (var o = n.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
							var h = this[a],
							u = t.data(h, e);
							if (u)
								if (t.isFunction(u[s]) && "_" !== s.charAt(0)) {
									var c = u[s].apply(u, o);
									if (void 0 !== c && c !== u)
										return c
								} else
									r("no such method '" + s + "' for " + e + " instance");
							else
								r("cannot call methods on " + e + " prior to initialization; attempted to call '" + s + "'")
						}
						return this
					}
					var d = this.map(function () {
							var n = t.data(this, e);
							return n ? (n.option(s), n._init()) : (n = new i(this, s), t.data(this, e, n)),
							t(this)
						});
					return !d || d.length > 1 ? d : d[0]
				}
			}
			if (t) {
				var r = "undefined" == typeof console ? e : function (t) {
					console.error(t)
				};
				return t.bridget = function (t, e) {
					i(e),
					s(t, e)
				},
				t.bridget
			}
		}
		var n = Array.prototype.slice;
		i(t)
	}
	(t),
	function (t) {
		function i(e, i) {
			function n(t, e) {
				var i = "data-slider-" + e.replace(/_/g, "-"),
				n = t.getAttribute(i);
				try {
					return JSON.parse(n)
				} catch (s) {
					return n
				}
			}
			this._state = {
				value : null,
				enabled : null,
				offset : null,
				size : null,
				percentage : null,
				inDrag : !1,
				over : !1
			},
			"string" == typeof e ? this.element = document.querySelector(e) : e instanceof HTMLElement && (this.element = e),
			i = i ? i : {};
			for (var r = Object.keys(this.defaultOptions), o = 0; o < r.length; o++) {
				var a = r[o],
				l = i[a];
				l = "undefined" != typeof l ? l : n(this.element, a),
				l = null !== l ? l : this.defaultOptions[a],
				this.options || (this.options = {}),
				this.options[a] = l
			}
			"vertical" !== this.options.orientation || "top" !== this.options.tooltip_position && "bottom" !== this.options.tooltip_position ? "horizontal" !== this.options.orientation || "left" !== this.options.tooltip_position && "right" !== this.options.tooltip_position || (this.options.tooltip_position = "top") : this.options.tooltip_position = "right";
			var h,
			u,
			c,
			d,
			f,
			p = this.element.style.width,
			g = !1,
			m = this.element.parentNode;
			if (this.sliderElem)
				g = !0;
			else {
				this.sliderElem = document.createElement("div"),
				this.sliderElem.className = "slider";
				var v = document.createElement("div");
				v.className = "slider-track",
				u = document.createElement("div"),
				u.className = "slider-track-low",
				h = document.createElement("div"),
				h.className = "slider-selection",
				c = document.createElement("div"),
				c.className = "slider-track-high",
				d = document.createElement("div"),
				d.className = "slider-handle min-slider-handle",
				d.setAttribute("role", "slider"),
				d.setAttribute("aria-valuemin", this.options.min),
				d.setAttribute("aria-valuemax", this.options.max),
				f = document.createElement("div"),
				f.className = "slider-handle max-slider-handle",
				f.setAttribute("role", "slider"),
				f.setAttribute("aria-valuemin", this.options.min),
				f.setAttribute("aria-valuemax", this.options.max),
				v.appendChild(u),
				v.appendChild(h),
				v.appendChild(c);
				var b = Array.isArray(this.options.labelledby);
				if (b && this.options.labelledby[0] && d.setAttribute("aria-labelledby", this.options.labelledby[0]), b && this.options.labelledby[1] && f.setAttribute("aria-labelledby", this.options.labelledby[1]), !b && this.options.labelledby && (d.setAttribute("aria-labelledby", this.options.labelledby), f.setAttribute("aria-labelledby", this.options.labelledby)), this.ticks = [], Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
					for (o = 0; o < this.options.ticks.length; o++) {
						var y = document.createElement("div");
						y.className = "slider-tick",
						this.ticks.push(y),
						v.appendChild(y)
					}
					h.className += " tick-slider-selection"
				}
				if (v.appendChild(d), v.appendChild(f), this.tickLabels = [], Array.isArray(this.options.ticks_labels) && this.options.ticks_labels.length > 0)
					for (this.tickLabelContainer = document.createElement("div"), this.tickLabelContainer.className = "slider-tick-label-container", o = 0; o < this.options.ticks_labels.length; o++) {
						var _ = document.createElement("div"),
						w = 0 === this.options.ticks_positions.length,
						x = this.options.reversed && w ? this.options.ticks_labels.length - (o + 1) : o;
						_.className = "slider-tick-label",
						_.innerHTML = this.options.ticks_labels[x],
						this.tickLabels.push(_),
						this.tickLabelContainer.appendChild(_)
					}
				var k = function (t) {
					var e = document.createElement("div");
					e.className = "tooltip-arrow";
					var i = document.createElement("div");
					i.className = "tooltip-inner",
					t.appendChild(e),
					t.appendChild(i)
				},
				C = document.createElement("div");
				C.className = "tooltip tooltip-main",
				C.setAttribute("role", "presentation"),
				k(C);
				var E = document.createElement("div");
				E.className = "tooltip tooltip-min",
				E.setAttribute("role", "presentation"),
				k(E);
				var T = document.createElement("div");
				T.className = "tooltip tooltip-max",
				T.setAttribute("role", "presentation"),
				k(T),
				this.sliderElem.appendChild(v),
				this.sliderElem.appendChild(C),
				this.sliderElem.appendChild(E),
				this.sliderElem.appendChild(T),
				this.tickLabelContainer && this.sliderElem.appendChild(this.tickLabelContainer),
				m.insertBefore(this.sliderElem, this.element),
				this.element.style.display = "none"
			}
			if (t && (this.$element = t(this.element), this.$sliderElem = t(this.sliderElem)), this.eventToCallbackMap = {}, this.sliderElem.id = this.options.id, this.touchCapable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, this.tooltip = this.sliderElem.querySelector(".tooltip-main"), this.tooltipInner = this.tooltip.querySelector(".tooltip-inner"), this.tooltip_min = this.sliderElem.querySelector(".tooltip-min"), this.tooltipInner_min = this.tooltip_min.querySelector(".tooltip-inner"), this.tooltip_max = this.sliderElem.querySelector(".tooltip-max"), this.tooltipInner_max = this.tooltip_max.querySelector(".tooltip-inner"), s[this.options.scale] && (this.options.scale = s[this.options.scale]), g === !0 && (this._removeClass(this.sliderElem, "slider-horizontal"), this._removeClass(this.sliderElem, "slider-vertical"), this._removeClass(this.tooltip, "hide"), this._removeClass(this.tooltip_min, "hide"), this._removeClass(this.tooltip_max, "hide"), ["left", "top", "width", "height"].forEach(function (t) {
						this._removeProperty(this.trackLow, t),
						this._removeProperty(this.trackSelection, t),
						this._removeProperty(this.trackHigh, t)
					}, this), [this.handle1, this.handle2].forEach(function (t) {
						this._removeProperty(t, "left"),
						this._removeProperty(t, "top")
					}, this), [this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function (t) {
						this._removeProperty(t, "left"),
						this._removeProperty(t, "top"),
						this._removeProperty(t, "margin-left"),
						this._removeProperty(t, "margin-top"),
						this._removeClass(t, "right"),
						this._removeClass(t, "top")
					}, this)), "vertical" === this.options.orientation ? (this._addClass(this.sliderElem, "slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight") : (this._addClass(this.sliderElem, "slider-horizontal"), this.sliderElem.style.width = p, this.options.orientation = "horizontal", this.stylePos = "left", this.mousePos = "pageX", this.sizePos = "offsetWidth"), this._setTooltipPosition(), Array.isArray(this.options.ticks) && this.options.ticks.length > 0 && (this.options.max = Math.max.apply(Math, this.options.ticks), this.options.min = Math.min.apply(Math, this.options.ticks)), Array.isArray(this.options.value) ? (this.options.range = !0, this._state.value = this.options.value) : this._state.value = this.options.range ? [this.options.value, this.options.max] : this.options.value, this.trackLow = u || this.trackLow, this.trackSelection = h || this.trackSelection, this.trackHigh = c || this.trackHigh, "none" === this.options.selection && (this._addClass(this.trackLow, "hide"), this._addClass(this.trackSelection, "hide"), this._addClass(this.trackHigh, "hide")), this.handle1 = d || this.handle1, this.handle2 = f || this.handle2, g === !0)
				for (this._removeClass(this.handle1, "round triangle"), this._removeClass(this.handle2, "round triangle hide"), o = 0; o < this.ticks.length; o++)
					this._removeClass(this.ticks[o], "round triangle hide");
			var S = ["round", "triangle", "custom"],
			I = -1 !== S.indexOf(this.options.handle);
			if (I)
				for (this._addClass(this.handle1, this.options.handle), this._addClass(this.handle2, this.options.handle), o = 0; o < this.ticks.length; o++)
					this._addClass(this.ticks[o], this.options.handle);
			this._state.offset = this._offset(this.sliderElem),
			this._state.size = this.sliderElem[this.sizePos],
			this.setValue(this._state.value),
			this.handle1Keydown = this._keydown.bind(this, 0),
			this.handle1.addEventListener("keydown", this.handle1Keydown, !1),
			this.handle2Keydown = this._keydown.bind(this, 1),
			this.handle2.addEventListener("keydown", this.handle2Keydown, !1),
			this.mousedown = this._mousedown.bind(this),
			this.touchCapable && this.sliderElem.addEventListener("touchstart", this.mousedown, !1),
			this.sliderElem.addEventListener("mousedown", this.mousedown, !1),
			"hide" === this.options.tooltip ? (this._addClass(this.tooltip, "hide"), this._addClass(this.tooltip_min, "hide"), this._addClass(this.tooltip_max, "hide")) : "always" === this.options.tooltip ? (this._showTooltip(), this._alwaysShowTooltip = !0) : (this.showTooltip = this._showTooltip.bind(this), this.hideTooltip = this._hideTooltip.bind(this), this.sliderElem.addEventListener("mouseenter", this.showTooltip, !1), this.sliderElem.addEventListener("mouseleave", this.hideTooltip, !1), this.handle1.addEventListener("focus", this.showTooltip, !1), this.handle1.addEventListener("blur", this.hideTooltip, !1), this.handle2.addEventListener("focus", this.showTooltip, !1), this.handle2.addEventListener("blur", this.hideTooltip, !1)),
			this.options.enabled ? this.enable() : this.disable()
		}
		var n = {
			formatInvalidInputErrorMsg : function (t) {
				return "Invalid input value '" + t + "' passed in"
			},
			callingContextNotSliderInstance : "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
		},
		s = {
			linear : {
				toValue : function (t) {
					var e = t / 100 * (this.options.max - this.options.min);
					if (this.options.ticks_positions.length > 0) {
						for (var i, n, s, r = 0, o = 0; o < this.options.ticks_positions.length; o++)
							if (t <= this.options.ticks_positions[o]) {
								i = o > 0 ? this.options.ticks[o - 1] : 0,
								s = o > 0 ? this.options.ticks_positions[o - 1] : 0,
								n = this.options.ticks[o],
								r = this.options.ticks_positions[o];
								break
							}
						if (o > 0) {
							var a = (t - s) / (r - s);
							e = i + a * (n - i)
						}
					}
					var l = this.options.min + Math.round(e / this.options.step) * this.options.step;
					return l < this.options.min ? this.options.min : l > this.options.max ? this.options.max : l
				},
				toPercentage : function (t) {
					if (this.options.max === this.options.min)
						return 0;
					if (this.options.ticks_positions.length > 0) {
						for (var e, i, n, s = 0, r = 0; r < this.options.ticks.length; r++)
							if (t <= this.options.ticks[r]) {
								e = r > 0 ? this.options.ticks[r - 1] : 0,
								n = r > 0 ? this.options.ticks_positions[r - 1] : 0,
								i = this.options.ticks[r],
								s = this.options.ticks_positions[r];
								break
							}
						if (r > 0) {
							var o = (t - e) / (i - e);
							return n + o * (s - n)
						}
					}
					return 100 * (t - this.options.min) / (this.options.max - this.options.min)
				}
			},
			logarithmic : {
				toValue : function (t) {
					var e = 0 === this.options.min ? 0 : Math.log(this.options.min),
					i = Math.log(this.options.max),
					n = Math.exp(e + (i - e) * t / 100);
					return n = this.options.min + Math.round((n - this.options.min) / this.options.step) * this.options.step,
					n < this.options.min ? this.options.min : n > this.options.max ? this.options.max : n
				},
				toPercentage : function (t) {
					if (this.options.max === this.options.min)
						return 0;
					var e = Math.log(this.options.max),
					i = 0 === this.options.min ? 0 : Math.log(this.options.min),
					n = 0 === t ? 0 : Math.log(t);
					return 100 * (n - i) / (e - i)
				}
			}
		};
		if (e = function (t, e) {
			return i.call(this, t, e),
			this
		}, e.prototype = {
				_init : function () {},
				constructor : e,
				defaultOptions : {
					id : "",
					min : 0,
					max : 10,
					step : 1,
					precision : 0,
					orientation : "horizontal",
					value : 5,
					range : !1,
					selection : "before",
					tooltip : "show",
					tooltip_split : !1,
					handle : "round",
					reversed : !1,
					enabled : !0,
					formatter : function (t) {
						return Array.isArray(t) ? t[0] + " : " + t[1] : t
					},
					natural_arrow_keys : !1,
					ticks : [],
					ticks_positions : [],
					ticks_labels : [],
					ticks_snap_bounds : 0,
					scale : "linear",
					focus : !1,
					tooltip_position : null,
					labelledby : null
				},
				getElement : function () {
					return this.sliderElem
				},
				getValue : function () {
					return this.options.range ? this._state.value : this._state.value[0]
				},
				setValue : function (t, e, i) {
					t || (t = 0);
					var n = this.getValue();
					this._state.value = this._validateInputValue(t);
					var s = this._applyPrecision.bind(this);
					this.options.range ? (this._state.value[0] = s(this._state.value[0]),
						this._state.value[1] = s(this._state.value[1]), this._state.value[0] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[0])), this._state.value[1] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[1]))) : (this._state.value = s(this._state.value), this._state.value = [Math.max(this.options.min, Math.min(this.options.max, this._state.value))], this._addClass(this.handle2, "hide"), this._state.value[1] = "after" === this.options.selection ? this.options.max : this.options.min),
					this._state.percentage = this.options.max > this.options.min ? [this._toPercentage(this._state.value[0]), this._toPercentage(this._state.value[1]), 100 * this.options.step / (this.options.max - this.options.min)] : [0, 0, 100],
					this._layout();
					var r = this.options.range ? this._state.value : this._state.value[0];
					return e === !0 && this._trigger("slide", r),
					n !== r && i === !0 && this._trigger("change", {
						oldValue : n,
						newValue : r
					}),
					this._setDataVal(r),
					this
				},
				destroy : function () {
					this._removeSliderEventHandlers(),
					this.sliderElem.parentNode.removeChild(this.sliderElem),
					this.element.style.display = "",
					this._cleanUpEventCallbacksMap(),
					this.element.removeAttribute("data"),
					t && (this._unbindJQueryEventHandlers(), this.$element.removeData("slider"))
				},
				disable : function () {
					return this._state.enabled = !1,
					this.handle1.removeAttribute("tabindex"),
					this.handle2.removeAttribute("tabindex"),
					this._addClass(this.sliderElem, "slider-disabled"),
					this._trigger("slideDisabled"),
					this
				},
				enable : function () {
					return this._state.enabled = !0,
					this.handle1.setAttribute("tabindex", 0),
					this.handle2.setAttribute("tabindex", 0),
					this._removeClass(this.sliderElem, "slider-disabled"),
					this._trigger("slideEnabled"),
					this
				},
				toggle : function () {
					return this._state.enabled ? this.disable() : this.enable(),
					this
				},
				isEnabled : function () {
					return this._state.enabled
				},
				on : function (t, e) {
					return this._bindNonQueryEventHandler(t, e),
					this
				},
				off : function (e, i) {
					t ? (this.$element.off(e, i), this.$sliderElem.off(e, i)) : this._unbindNonQueryEventHandler(e, i)
				},
				getAttribute : function (t) {
					return t ? this.options[t] : this.options
				},
				setAttribute : function (t, e) {
					return this.options[t] = e,
					this
				},
				refresh : function () {
					return this._removeSliderEventHandlers(),
					i.call(this, this.element, this.options),
					t && t.data(this.element, "slider", this),
					this
				},
				relayout : function () {
					return this._layout(),
					this
				},
				_removeSliderEventHandlers : function () {
					this.handle1.removeEventListener("keydown", this.handle1Keydown, !1),
					this.handle2.removeEventListener("keydown", this.handle2Keydown, !1),
					this.showTooltip && (this.handle1.removeEventListener("focus", this.showTooltip, !1), this.handle2.removeEventListener("focus", this.showTooltip, !1)),
					this.hideTooltip && (this.handle1.removeEventListener("blur", this.hideTooltip, !1), this.handle2.removeEventListener("blur", this.hideTooltip, !1)),
					this.showTooltip && this.sliderElem.removeEventListener("mouseenter", this.showTooltip, !1),
					this.hideTooltip && this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, !1),
					this.sliderElem.removeEventListener("touchstart", this.mousedown, !1),
					this.sliderElem.removeEventListener("mousedown", this.mousedown, !1)
				},
				_bindNonQueryEventHandler : function (t, e) {
					void 0 === this.eventToCallbackMap[t] && (this.eventToCallbackMap[t] = []),
					this.eventToCallbackMap[t].push(e)
				},
				_unbindNonQueryEventHandler : function (t, e) {
					var i = this.eventToCallbackMap[t];
					if (void 0 !== i)
						for (var n = 0; n < i.length; n++)
							if (i[n] === e) {
								i.splice(n, 1);
								break
							}
				},
				_cleanUpEventCallbacksMap : function () {
					for (var t = Object.keys(this.eventToCallbackMap), e = 0; e < t.length; e++) {
						var i = t[e];
						this.eventToCallbackMap[i] = null
					}
				},
				_showTooltip : function () {
					this.options.tooltip_split === !1 ? (this._addClass(this.tooltip, "in"), this.tooltip_min.style.display = "none", this.tooltip_max.style.display = "none") : (this._addClass(this.tooltip_min, "in"), this._addClass(this.tooltip_max, "in"), this.tooltip.style.display = "none"),
					this._state.over = !0
				},
				_hideTooltip : function () {
					this._state.inDrag === !1 && this.alwaysShowTooltip !== !0 && (this._removeClass(this.tooltip, "in"), this._removeClass(this.tooltip_min, "in"), this._removeClass(this.tooltip_max, "in")),
					this._state.over = !1
				},
				_layout : function () {
					var t;
					if (t = this.options.reversed ? [100 - this._state.percentage[0], this.options.range ? 100 - this._state.percentage[1] : this._state.percentage[1]] : [this._state.percentage[0], this._state.percentage[1]], this.handle1.style[this.stylePos] = t[0] + "%", this.handle1.setAttribute("aria-valuenow", this._state.value[0]), this.handle2.style[this.stylePos] = t[1] + "%", this.handle2.setAttribute("aria-valuenow", this._state.value[1]), Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
						var e = "vertical" === this.options.orientation ? "height" : "width",
						i = "vertical" === this.options.orientation ? "marginTop" : "marginLeft",
						n = this._state.size / (this.options.ticks.length - 1);
						if (this.tickLabelContainer) {
							var s = 0;
							if (0 === this.options.ticks_positions.length)
								"vertical" !== this.options.orientation && (this.tickLabelContainer.style[i] = -n / 2 + "px") , s = this.tickLabelContainer.offsetHeight;
								else
									for (r = 0; r < this.tickLabelContainer.childNodes.length; r++)
										this.tickLabelContainer.childNodes[r].offsetHeight > s && (s = this.tickLabelContainer.childNodes[r].offsetHeight);
								"horizontal" === this.options.orientation && (this.sliderElem.style.marginBottom = s + "px")
							}
							for (var r = 0; r < this.options.ticks.length; r++) {
								var o = this.options.ticks_positions[r] || this._toPercentage(this.options.ticks[r]);
								this.options.reversed && (o = 100 - o),
								this.ticks[r].style[this.stylePos] = o + "%",
								this._removeClass(this.ticks[r], "in-selection"),
								this.options.range ? o >= t[0] && o <= t[1] && this._addClass(this.ticks[r], "in-selection") : "after" === this.options.selection && o >= t[0] ? this._addClass(this.ticks[r], "in-selection") : "before" === this.options.selection && o <= t[0] && this._addClass(this.ticks[r], "in-selection"),
								this.tickLabels[r] && (this.tickLabels[r].style[e] = n + "px", "vertical" !== this.options.orientation && void 0 !== this.options.ticks_positions[r] ? (this.tickLabels[r].style.position = "absolute", this.tickLabels[r].style[this.stylePos] = o + "%", this.tickLabels[r].style[i] = -n / 2 + "px") : "vertical" === this.options.orientation && (this.tickLabels[r].style.marginLeft = this.sliderElem.offsetWidth + "px", this.tickLabelContainer.style.marginTop = this.sliderElem.offsetWidth / 2 * -1 + "px"))
							}
						}
						var a;
						if (this.options.range) {
							a = this.options.formatter(this._state.value),
							this._setText(this.tooltipInner, a),
							this.tooltip.style[this.stylePos] = (t[1] + t[0]) / 2 + "%",
							"vertical" === this.options.orientation ? this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px"),
							"vertical" === this.options.orientation ? this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px");
							var l = this.options.formatter(this._state.value[0]);
							this._setText(this.tooltipInner_min, l);
							var h = this.options.formatter(this._state.value[1]);
							this._setText(this.tooltipInner_max, h),
							this.tooltip_min.style[this.stylePos] = t[0] + "%",
							"vertical" === this.options.orientation ? this._css(this.tooltip_min, "margin-top", -this.tooltip_min.offsetHeight / 2 + "px") : this._css(this.tooltip_min, "margin-left", -this.tooltip_min.offsetWidth / 2 + "px"),
							this.tooltip_max.style[this.stylePos] = t[1] + "%",
							"vertical" === this.options.orientation ? this._css(this.tooltip_max, "margin-top", -this.tooltip_max.offsetHeight / 2 + "px") : this._css(this.tooltip_max, "margin-left", -this.tooltip_max.offsetWidth / 2 + "px")
						} else
							a = this.options.formatter(this._state.value[0]), this._setText(this.tooltipInner, a), this.tooltip.style[this.stylePos] = t[0] + "%", "vertical" === this.options.orientation ? this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px");
						if ("vertical" === this.options.orientation)
							this.trackLow.style.top = "0", this.trackLow.style.height = Math.min(t[0], t[1]) + "%", this.trackSelection.style.top = Math.min(t[0], t[1]) + "%", this.trackSelection.style.height = Math.abs(t[0] - t[1]) + "%", this.trackHigh.style.bottom = "0", this.trackHigh.style.height = 100 - Math.min(t[0], t[1]) - Math.abs(t[0] - t[1]) + "%";
						else {
							this.trackLow.style.left = "0",
							this.trackLow.style.width = Math.min(t[0], t[1]) + "%",
							this.trackSelection.style.left = Math.min(t[0], t[1]) + "%",
							this.trackSelection.style.width = Math.abs(t[0] - t[1]) + "%",
							this.trackHigh.style.right = "0",
							this.trackHigh.style.width = 100 - Math.min(t[0], t[1]) - Math.abs(t[0] - t[1]) + "%";
							var u = this.tooltip_min.getBoundingClientRect(),
							c = this.tooltip_max.getBoundingClientRect();
							u.right > c.left ? (this._removeClass(this.tooltip_max, "top"), this._addClass(this.tooltip_max, "bottom"), this.tooltip_max.style.top = "18px") : (this._removeClass(this.tooltip_max, "bottom"), this._addClass(this.tooltip_max, "top"), this.tooltip_max.style.top = this.tooltip_min.style.top)
						}
					},
					_removeProperty : function (t, e) {
						t.style.removeProperty ? t.style.removeProperty(e) : t.style.removeAttribute(e)
					},
					_mousedown : function (t) {
						if (!this._state.enabled)
							return !1;
						this._state.offset = this._offset(this.sliderElem),
						this._state.size = this.sliderElem[this.sizePos];
						var e = this._getPercentage(t);
						if (this.options.range) {
							var i = Math.abs(this._state.percentage[0] - e),
							n = Math.abs(this._state.percentage[1] - e);
							this._state.dragged = n > i ? 0 : 1
						} else
							this._state.dragged = 0;
						this._state.percentage[this._state.dragged] = e,
						this._layout(),
						this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)),
						this.mousemove && document.removeEventListener("mousemove", this.mousemove, !1),
						this.mouseup && document.removeEventListener("mouseup", this.mouseup, !1),
						this.mousemove = this._mousemove.bind(this),
						this.mouseup = this._mouseup.bind(this),
						this.touchCapable && (document.addEventListener("touchmove", this.mousemove, !1), document.addEventListener("touchend", this.mouseup, !1)),
						document.addEventListener("mousemove", this.mousemove, !1),
						document.addEventListener("mouseup", this.mouseup, !1),
						this._state.inDrag = !0;
						var s = this._calculateValue();
						return this._trigger("slideStart", s),
						this._setDataVal(s),
						this.setValue(s, !1, !0),
						this._pauseEvent(t),
						this.options.focus && this._triggerFocusOnHandle(this._state.dragged),
						!0
					},
					_triggerFocusOnHandle : function (t) {
						0 === t && this.handle1.focus(),
						1 === t && this.handle2.focus()
					},
					_keydown : function (t, e) {
						if (!this._state.enabled)
							return !1;
						var i;
						switch (e.keyCode) {
						case 37:
						case 40:
							i = -1;
							break;
						case 39:
						case 38:
							i = 1
						}
						if (i) {
							if (this.options.natural_arrow_keys) {
								var n = "vertical" === this.options.orientation && !this.options.reversed,
								s = "horizontal" === this.options.orientation && this.options.reversed;
								(n || s) && (i = -i)
							}
							var r = this._state.value[t] + i * this.options.step;
							return this.options.range && (r = [t ? this._state.value[0] : r, t ? r : this._state.value[1]]),
							this._trigger("slideStart", r),
							this._setDataVal(r),
							this.setValue(r, !0, !0),
							this._setDataVal(r),
							this._trigger("slideStop", r),
							this._layout(),
							this._pauseEvent(e),
							!1
						}
					},
					_pauseEvent : function (t) {
						t.stopPropagation && t.stopPropagation(),
						t.preventDefault && t.preventDefault(),
						t.cancelBubble = !0,
						t.returnValue = !1
					},
					_mousemove : function (t) {
						if (!this._state.enabled)
							return !1;
						var e = this._getPercentage(t);
						this._adjustPercentageForRangeSliders(e),
						this._state.percentage[this._state.dragged] = e,
						this._layout();
						var i = this._calculateValue(!0);
						return this.setValue(i, !0, !0),
						!1
					},
					_adjustPercentageForRangeSliders : function (t) {
						if (this.options.range) {
							var e = this._getNumDigitsAfterDecimalPlace(t);
							e = e ? e - 1 : 0;
							var i = this._applyToFixedAndParseFloat(t, e);
							0 === this._state.dragged && this._applyToFixedAndParseFloat(this._state.percentage[1], e) < i ? (this._state.percentage[0] = this._state.percentage[1], this._state.dragged = 1) : 1 === this._state.dragged && this._applyToFixedAndParseFloat(this._state.percentage[0], e) > i && (this._state.percentage[1] = this._state.percentage[0], this._state.dragged = 0)
						}
					},
					_mouseup : function () {
						if (!this._state.enabled)
							return !1;
						this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)),
						document.removeEventListener("mousemove", this.mousemove, !1),
						document.removeEventListener("mouseup", this.mouseup, !1),
						this._state.inDrag = !1,
						this._state.over === !1 && this._hideTooltip();
						var t = this._calculateValue(!0);
						return this._layout(),
						this._setDataVal(t),
						this._trigger("slideStop", t),
						!1
					},
					_calculateValue : function (t) {
						var e;
						if (this.options.range ? (e = [this.options.min, this.options.max], 0 !== this._state.percentage[0] && (e[0] = this._toValue(this._state.percentage[0]), e[0] = this._applyPrecision(e[0])), 100 !== this._state.percentage[1] && (e[1] = this._toValue(this._state.percentage[1]), e[1] = this._applyPrecision(e[1]))) : (e = this._toValue(this._state.percentage[0]), e = parseFloat(e), e = this._applyPrecision(e)), t) {
							for (var i = [e, 1 / 0], n = 0; n < this.options.ticks.length; n++) {
								var s = Math.abs(this.options.ticks[n] - e);
								s <= i[1] && (i = [this.options.ticks[n], s])
							}
							if (i[1] <= this.options.ticks_snap_bounds)
								return i[0]
						}
						return e
					},
					_applyPrecision : function (t) {
						var e = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.options.step);
						return this._applyToFixedAndParseFloat(t, e)
					},
					_getNumDigitsAfterDecimalPlace : function (t) {
						var e = ("" + t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
						return e ? Math.max(0, (e[1] ? e[1].length : 0) - (e[2] ? +e[2] : 0)) : 0
					},
					_applyToFixedAndParseFloat : function (t, e) {
						var i = t.toFixed(e);
						return parseFloat(i)
					},
					_getPercentage : function (t) {
						!this.touchCapable || "touchstart" !== t.type && "touchmove" !== t.type || (t = t.touches[0]);
						var e = t[this.mousePos],
						i = this._state.offset[this.stylePos],
						n = e - i,
						s = n / this._state.size * 100;
						return s = Math.round(s / this._state.percentage[2]) * this._state.percentage[2],
						this.options.reversed && (s = 100 - s),
						Math.max(0, Math.min(100, s))
					},
					_validateInputValue : function (t) {
						if ("number" == typeof t)
							return t;
						if (Array.isArray(t))
							return this._validateArray(t), t;
						throw new Error(n.formatInvalidInputErrorMsg(t))
					},
					_validateArray : function (t) {
						for (var e = 0; e < t.length; e++) {
							var i = t[e];
							if ("number" != typeof i)
								throw new Error(n.formatInvalidInputErrorMsg(i))
						}
					},
					_setDataVal : function (t) {
						this.element.setAttribute("data-value", t),
						this.element.setAttribute("value", t),
						this.element.value = t
					},
					_trigger : function (e, i) {
						i = i || 0 === i ? i : void 0;
						var n = this.eventToCallbackMap[e];
						if (n && n.length)
							for (var s = 0; s < n.length; s++) {
								var r = n[s];
								r(i)
							}
						t && this._triggerJQueryEvent(e, i)
					},
					_triggerJQueryEvent : function (t, e) {
						var i = {
							type : t,
							value : e
						};
						this.$element.trigger(i),
						this.$sliderElem.trigger(i)
					},
					_unbindJQueryEventHandlers : function () {
						this.$element.off(),
						this.$sliderElem.off()
					},
					_setText : function (t, e) {
						"undefined" != typeof t.innerText ? t.innerText = e : "undefined" != typeof t.textContent && (t.textContent = e)
					},
					_removeClass : function (t, e) {
						for (var i = e.split(" "), n = t.className, s = 0; s < i.length; s++) {
							var r = i[s],
							o = new RegExp("(?:\\s|^)" + r + "(?:\\s|$)");
							n = n.replace(o, " ")
						}
						t.className = n.trim()
					},
					_addClass : function (t, e) {
						for (var i = e.split(" "), n = t.className, s = 0; s < i.length; s++) {
							var r = i[s],
							o = new RegExp("(?:\\s|^)" + r + "(?:\\s|$)"),
							a = o.test(n);
							a || (n += " " + r)
						}
						t.className = n.trim()
					},
					_offsetLeft : function (t) {
						return t.getBoundingClientRect().left
					},
					_offsetTop : function (t) {
						for (var e = t.offsetTop; (t = t.offsetParent) && !isNaN(t.offsetTop); )
							e += t.offsetTop;
						return e
					},
					_offset : function (t) {
						return {
							left : this._offsetLeft(t),
							top : this._offsetTop(t)
						}
					},
					_css : function (e, i, n) {
						if (t)
							t.style(e, i, n);
						else {
							var s = i.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (t, e) {
									return e.toUpperCase()
								});
							e.style[s] = n
						}
					},
					_toValue : function (t) {
						return this.options.scale.toValue.apply(this, [t])
					},
					_toPercentage : function (t) {
						return this.options.scale.toPercentage.apply(this, [t])
					},
					_setTooltipPosition : function () {
						var t = [this.tooltip, this.tooltip_min, this.tooltip_max];
						if ("vertical" === this.options.orientation) {
							var e = this.options.tooltip_position || "right",
							i = "left" === e ? "right" : "left";
							t.forEach(function (t) {
								this._addClass(t, e),
								t.style[i] = "100%"
							}
								.bind(this))
						} else
							t.forEach("bottom" === this.options.tooltip_position ? function (t) {
								this._addClass(t, "bottom"),
								t.style.top = "22px"
							}
								.bind(this) : function (t) {
								this._addClass(t, "top"),
								t.style.top = -this.tooltip.outerHeight - 14 + "px"
							}
								.bind(this))
					}
				}, t) {
				var r = t.fn.slider ? "bootstrapSlider" : "slider";
				t.bridget(r, e)
			}
	}
	(t),
	e
}), !function (t) {
	if ("object" == typeof exports && "undefined" != typeof module)
		module.exports = t();
	else if ("function" == typeof define && define.amd)
		define([], t);
	else {
		var e;
		"undefined" != typeof window ? e = window : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self),
		e.JSZip = t()
	}
}
(function () {
	return function t(e, i, n) {
		function s(o, a) {
			if (!i[o]) {
				if (!e[o]) {
					var l = "function" == typeof require && require;
					if (!a && l)
						return l(o, !0);
					if (r)
						return r(o, !0);
					throw new Error("Cannot find module '" + o + "'")
				}
				var h = i[o] = {
					exports : {}

				};
				e[o][0].call(h.exports, function (t) {
					var i = e[o][1][t];
					return s(i ? i : t)
				}, h, h.exports, t, e, i, n)
			}
			return i[o].exports
		}
		for (var r = "function" == typeof require && require, o = 0; o < n.length; o++)
			s(n[o]);
		return s
	}
	({
		1 : [function (t, e, i) {
				"use strict";
				var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
				i.encode = function (t) {
					for (var e, i, s, r, o, a, l, h = "", u = 0; u < t.length; )
						e = t.charCodeAt(u++), i = t.charCodeAt(u++), s = t.charCodeAt(u++), r = e >> 2, o = (3 & e) << 4 | i >> 4, a = (15 & i) << 2 | s >> 6, l = 63 & s, isNaN(i) ? a = l = 64 : isNaN(s) && (l = 64), h = h + n.charAt(r) + n.charAt(o) + n.charAt(a) + n.charAt(l);
					return h
				},
				i.decode = function (t) {
					var e,
					i,
					s,
					r,
					o,
					a,
					l,
					h = "",
					u = 0;
					for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); u < t.length; )
						r = n.indexOf(t.charAt(u++)), o = n.indexOf(t.charAt(u++)), a = n.indexOf(t.charAt(u++)), l = n.indexOf(t.charAt(u++)), e = r << 2 | o >> 4, i = (15 & o) << 4 | a >> 2, s = (3 & a) << 6 | l, h += String.fromCharCode(e), 64 != a && (h += String.fromCharCode(i)), 64 != l && (h += String.fromCharCode(s));
					return h
				}
			}, {}

		],
		2 : [function (t, e) {
				"use strict";
				function i() {
					this.compressedSize = 0,
					this.uncompressedSize = 0,
					this.crc32 = 0,
					this.compressionMethod = null,
					this.compressedContent = null
				}
				i.prototype = {
					getContent : function () {
						return null
					},
					getCompressedContent : function () {
						return null
					}
				},
				e.exports = i
			}, {}

		],
		3 : [function (t, e, i) {
				"use strict";
				i.STORE = {
					magic : "\x00\x00",
					compress : function (t) {
						return t
					},
					uncompress : function (t) {
						return t
					},
					compressInputType : null,
					uncompressInputType : null
				},
				i.DEFLATE = t("./flate")
			}, {
				"./flate" : 8
			}
		],
		4 : [function (t, e) {
				"use strict";
				var i = t("./utils"),
				n = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
				e.exports = function (t, e) {
					if ("undefined" == typeof t || !t.length)
						return 0;
					var s = "string" !== i.getTypeOf(t);
					"undefined" == typeof e && (e = 0);
					var r = 0,
					o = 0,
					a = 0;
					e = -1^e;
					for (var l = 0, h = t.length; h > l; l++)
						a = s ? t[l] : t.charCodeAt(l), o = 255 & (e^a), r = n[o], e = e >>> 8^r;
					return -1^e
				}
			}, {
				"./utils" : 21
			}
		],
		5 : [function (t, e) {
				"use strict";
				function i() {
					this.data = null,
					this.length = 0,
					this.index = 0
				}
				var n = t("./utils");
				i.prototype = {
					checkOffset : function (t) {
						this.checkIndex(this.index + t)
					},
					checkIndex : function (t) {
						if (this.length < t || 0 > t)
							throw new Error("End of data reached (data length = " + this.length + ", asked index = " + t + "). Corrupted zip ?")
					},
					setIndex : function (t) {
						this.checkIndex(t),
						this.index = t
					},
					skip : function (t) {
						this.setIndex(this.index + t)
					},
					byteAt : function () {},
					readInt : function (t) {
						var e,
						i = 0;
						for (this.checkOffset(t), e = this.index + t - 1; e >= this.index; e--)
							i = (i << 8) + this.byteAt(e);
						return this.index += t,
						i
					},
					readString : function (t) {
						return n.transformTo("string", this.readData(t))
					},
					readData : function () {},
					lastIndexOfSignature : function () {},
					readDate : function () {
						var t = this.readInt(4);
						return new Date((t >> 25 & 127) + 1980, (t >> 21 & 15) - 1, t >> 16 & 31, t >> 11 & 31, t >> 5 & 63, (31 & t) << 1)
					}
				},
				e.exports = i
			}, {
				"./utils" : 21
			}
		],
		6 : [function (t, e, i) {
				"use strict";
				i.base64 = !1,
				i.binary = !1,
				i.dir = !1,
				i.createFolders = !1,
				i.date = null,
				i.compression = null,
				i.compressionOptions = null,
				i.comment = null,
				i.unixPermissions = null,
				i.dosPermissions = null
			}, {}

		],
		7 : [function (t, e, i) {
				"use strict";
				var n = t("./utils");
				i.string2binary = function (t) {
					return n.string2binary(t)
				},
				i.string2Uint8Array = function (t) {
					return n.transformTo("uint8array", t)
				},
				i.uint8Array2String = function (t) {
					return n.transformTo("string", t)
				},
				i.string2Blob = function (t) {
					var e = n.transformTo("arraybuffer", t);
					return n.arrayBuffer2Blob(e)
				},
				i.arrayBuffer2Blob = function (t) {
					return n.arrayBuffer2Blob(t)
				},
				i.transformTo = function (t, e) {
					return n.transformTo(t, e)
				},
				i.getTypeOf = function (t) {
					return n.getTypeOf(t)
				},
				i.checkSupport = function (t) {
					return n.checkSupport(t)
				},
				i.MAX_VALUE_16BITS = n.MAX_VALUE_16BITS,
				i.MAX_VALUE_32BITS = n.MAX_VALUE_32BITS,
				i.pretty = function (t) {
					return n.pretty(t)
				},
				i.findCompression = function (t) {
					return n.findCompression(t)
				},
				i.isRegExp = function (t) {
					return n.isRegExp(t)
				}
			}, {
				"./utils" : 21
			}
		],
		8 : [function (t, e, i) {
				"use strict";
				var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array,
				s = t("pako");
				i.uncompressInputType = n ? "uint8array" : "array",
				i.compressInputType = n ? "uint8array" : "array",
				i.magic = "\b\x00",
				i.compress = function (t, e) {
					return s.deflateRaw(t, {
						level : e.level || -1
					})
				},
				i.uncompress = function (t) {
					return s.inflateRaw(t)
				}
			}, {
				pako : 24
			}
		],
		9 : [function (t, e) {
				"use strict";
				function i(t, e) {
					return this instanceof i ? (this.files = {}, this.comment = null, this.root = "", t && this.load(t, e), void(this.clone = function () {
							var t = new i;
							for (var e in this)
								"function" != typeof this[e] && (t[e] = this[e]);
							return t
						})) : new i(t, e)
				}
				var n = t("./base64");
				i.prototype = t("./object"),
				i.prototype.load = t("./load"),
				i.support = t("./support"),
				i.defaults = t("./defaults"),
				i.utils = t("./deprecatedPublicUtils"),
				i.base64 = {
					encode : function (t) {
						return n.encode(t)
					},
					decode : function (t) {
						return n.decode(t)
					}
				},
				i.compressions = t("./compressions"),
				e.exports = i
			}, {
				"./base64" : 1,
				"./compressions" : 3,
				"./defaults" : 6,
				"./deprecatedPublicUtils" : 7,
				"./load" : 10,
				"./object" : 13,
				"./support" : 17
			}
		],
		10 : [function (t, e) {
				"use strict";
				var i = t("./base64"),
				n = t("./zipEntries");
				e.exports = function (t, e) {
					var s,
					r,
					o,
					a;
					for (e = e || {}, e.base64 && (t = i.decode(t)), r = new n(t, e), s = r.files, o = 0; o < s.length; o++)
						a = s[o], this.file(a.fileName, a.decompressed, {
							binary : !0,
							optimizedBinaryString : !0,
							date : a.date,
							dir : a.dir,
							comment : a.fileComment.length ? a.fileComment : null,
							unixPermissions : a.unixPermissions,
							dosPermissions : a.dosPermissions,
							createFolders : e.createFolders
						});
					return r.zipComment.length && (this.comment = r.zipComment),
					this
				}
			}, {
				"./base64" : 1,
				"./zipEntries" : 22
			}
		],
		11 : [function (t, e) {
				(function (t) {
					"use strict";
					e.exports = function (e, i) {
						return new t(e, i)
					},
					e.exports.test = function (e) {
						return t.isBuffer(e)
					}
				}).call(this, "undefined" != typeof Buffer ? Buffer : void 0)
			}, {}

		],
		12 : [function (t, e) {
				"use strict";
				function i(t) {
					this.data = t,
					this.length = this.data.length,
					this.index = 0
				}
				var n = t("./uint8ArrayReader");
				i.prototype = new n,
				i.prototype.readData = function (t) {
					this.checkOffset(t);
					var e = this.data.slice(this.index, this.index + t);
					return this.index += t,
					e
				},
				e.exports = i
			}, {
				"./uint8ArrayReader" : 18
			}
		],
		13 : [function (t, e) {
				"use strict";
				var i = t("./support"),
				n = t("./utils"),
				s = t("./crc32"),
				r = t("./signature"),
				o = t("./defaults"),
				a = t("./base64"),
				l = t("./compressions"),
				h = t("./compressedObject"),
				u = t("./nodeBuffer"),
				c = t("./utf8"),
				d = t("./stringWriter"),
				f = t("./uint8ArrayWriter"),
				p = function (t) {
					if (t._data instanceof h && (t._data = t._data.getContent(), t.options.binary = !0, t.options.base64 = !1, "uint8array" === n.getTypeOf(t._data))) {
						var e = t._data;
						t._data = new Uint8Array(e.length),
						0 !== e.length && t._data.set(e, 0)
					}
					return t._data
				},
				g = function (t) {
					var e = p(t),
					s = n.getTypeOf(e);
					return "string" === s ? !t.options.binary && i.nodebuffer ? u(e, "utf-8") : t.asBinary() : e
				},
				m = function (t) {
					var e = p(this);
					return null === e || "undefined" == typeof e ? "" : (this.options.base64 && (e = a.decode(e)), e = t && this.options.binary ? D.utf8decode(e) : n.transformTo("string", e), t || this.options.binary || (e = n.transformTo("string", D.utf8encode(e))), e)
				},
				v = function (t, e, i) {
					this.name = t,
					this.dir = i.dir,
					this.date = i.date,
					this.comment = i.comment,
					this.unixPermissions = i.unixPermissions,
					this.dosPermissions = i.dosPermissions,
					this._data = e,
					this.options = i,
					this._initialMetadata = {
						dir : i.dir,
						date : i.date
					}
				};
				v.prototype = {
					asText : function () {
						return m.call(this, !0)
					},
					asBinary : function () {
						return m.call(this, !1)
					},
					asNodeBuffer : function () {
						var t = g(this);
						return n.transformTo("nodebuffer", t)
					},
					asUint8Array : function () {
						var t = g(this);
						return n.transformTo("uint8array", t)
					},
					asArrayBuffer : function () {
						return this.asUint8Array().buffer
					}
				};
				var b = function (t, e) {
					var i,
					n = "";
					for (i = 0; e > i; i++)
						n += String.fromCharCode(255 & t), t >>>= 8;
					return n
				},
				y = function () {
					var t,
					e,
					i = {};
					for (t = 0; t < arguments.length; t++)
						for (e in arguments[t])
							arguments[t].hasOwnProperty(e) && "undefined" == typeof i[e] && (i[e] = arguments[t][e]);
					return i
				},
				_ = function (t) {
					return t = t || {},
					t.base64 !== !0 || null !== t.binary && void 0 !== t.binary || (t.binary = !0),
					t = y(t, o),
					t.date = t.date || new Date,
					null !== t.compression && (t.compression = t.compression.toUpperCase()),
					t
				},
				w = function (t, e, i) {
					var s,
					r = n.getTypeOf(e);
					if (i = _(i), "string" == typeof i.unixPermissions && (i.unixPermissions = parseInt(i.unixPermissions, 8)), i.unixPermissions && 16384 & i.unixPermissions && (i.dir = !0), i.dosPermissions && 16 & i.dosPermissions && (i.dir = !0), i.dir && (t = k(t)), i.createFolders && (s = x(t)) && C.call(this, s, !0), i.dir || null === e || "undefined" == typeof e)
						i.base64 = !1, i.binary = !1, e = null, r = null;
					else if ("string" === r)
						i.binary && !i.base64 && i.optimizedBinaryString !== !0 && (e = n.string2binary(e));
					else {
						if (i.base64 = !1, i.binary = !0, !(r || e instanceof h))
							throw new Error("The data of '" + t + "' is in an unsupported format !");
						"arraybuffer" === r && (e = n.transformTo("uint8array", e))
					}
					var o = new v(t, e, i);
					return this.files[t] = o,
					o
				},
				x = function (t) {
					"/" == t.slice(-1) && (t = t.substring(0, t.length - 1));
					var e = t.lastIndexOf("/");
					return e > 0 ? t.substring(0, e) : ""
				},
				k = function (t) {
					return "/" != t.slice(-1) && (t += "/"),
					t
				},
				C = function (t, e) {
					return e = "undefined" != typeof e ? e : !1,
					t = k(t),
					this.files[t] || w.call(this, t, null, {
						dir : !0,
						createFolders : e
					}),
					this.files[t]
				},
				E = function (t, e, i) {
					var r,
					o = new h;
					return t._data instanceof h ? (o.uncompressedSize = t._data.uncompressedSize, o.crc32 = t._data.crc32, 0 === o.uncompressedSize || t.dir ? (e = l.STORE, o.compressedContent = "", o.crc32 = 0) : t._data.compressionMethod === e.magic ? o.compressedContent = t._data.getCompressedContent() : (r = t._data.getContent(), o.compressedContent = e.compress(n.transformTo(e.compressInputType, r), i))) : (r = g(t), (!r || 0 === r.length || t.dir) && (e = l.STORE, r = ""), o.uncompressedSize = r.length, o.crc32 = s(r), o.compressedContent = e.compress(n.transformTo(e.compressInputType, r), i)),
					o.compressedSize = o.compressedContent.length,
					o.compressionMethod = e.magic,
					o
				},
				T = function (t, e) {
					var i = t;
					return t || (i = e ? 16893 : 33204),
					(65535 & i) << 16
				},
				S = function (t) {
					return 63 & (t || 0)
				},
				I = function (t, e, i, o, a) {
					var l,
					h,
					u,
					d,
					f = (i.compressedContent, n.transformTo("string", c.utf8encode(e.name))),
					p = e.comment || "",
					g = n.transformTo("string", c.utf8encode(p)),
					m = f.length !== e.name.length,
					v = g.length !== p.length,
					y = e.options,
					_ = "",
					w = "",
					x = "";
					u = e._initialMetadata.dir !== e.dir ? e.dir : y.dir,
					d = e._initialMetadata.date !== e.date ? e.date : y.date;
					var k = 0,
					C = 0;
					u && (k |= 16),
					"UNIX" === a ? (C = 798, k |= T(e.unixPermissions, u)) : (C = 20, k |= S(e.dosPermissions, u)),
					l = d.getHours(),
					l <<= 6,
					l |= d.getMinutes(),
					l <<= 5,
					l |= d.getSeconds() / 2,
					h = d.getFullYear() - 1980,
					h <<= 4,
					h |= d.getMonth() + 1,
					h <<= 5,
					h |= d.getDate(),
					m && (w = b(1, 1) + b(s(f), 4) + f, _ += "up" + b(w.length, 2) + w),
					v && (x = b(1, 1) + b(this.crc32(g), 4) + g, _ += "uc" + b(x.length, 2) + x);
					var E = "";
					E += "\n\x00",
					E += m || v ? "\x00\b" : "\x00\x00",
					E += i.compressionMethod,
					E += b(l, 2),
					E += b(h, 2),
					E += b(i.crc32, 4),
					E += b(i.compressedSize, 4),
					E += b(i.uncompressedSize, 4),
					E += b(f.length, 2),
					E += b(_.length, 2);
					var I = r.LOCAL_FILE_HEADER + E + f + _,
					D = r.CENTRAL_FILE_HEADER + b(C, 2) + E + b(g.length, 2) + "\x00\x00\x00\x00" + b(k, 4) + b(o, 4) + f + _ + g;
					return {
						fileRecord : I,
						dirRecord : D,
						compressedObject : i
					}
				},
				D = {
					load : function () {
						throw new Error("Load method is not defined. Is the file jszip-load.js included ?")
					},
					filter : function (t) {
						var e,
						i,
						n,
						s,
						r = [];
						for (e in this.files)
							this.files.hasOwnProperty(e) && (n = this.files[e], s = new v(n.name, n._data, y(n.options)), i = e.slice(this.root.length, e.length), e.slice(0, this.root.length) === this.root && t(i, s) && r.push(s));
						return r
					},
					file : function (t, e, i) {
						if (1 === arguments.length) {
							if (n.isRegExp(t)) {
								var s = t;
								return this.filter(function (t, e) {
									return !e.dir && s.test(t)
								})
							}
							return this.filter(function (e, i) {
								return !i.dir && e === t
							})[0] || null
						}
						return t = this.root + t,
						w.call(this, t, e, i),
						this
					},
					folder : function (t) {
						if (!t)
							return this;
						if (n.isRegExp(t))
							return this.filter(function (e, i) {
								return i.dir && t.test(e)
							});
						var e = this.root + t,
						i = C.call(this, e),
						s = this.clone();
						return s.root = i.name,
						s
					},
					remove : function (t) {
						t = this.root + t;
						var e = this.files[t];
						if (e || ("/" != t.slice(-1) && (t += "/"), e = this.files[t]), e && !e.dir)
							delete this.files[t];
						else
							for (var i = this.filter(function (e, i) {
										return i.name.slice(0, t.length) === t
									}), n = 0; n < i.length; n++)
								delete this.files[i[n].name];
						return this
					},
					generate : function (t) {
						t = y(t || {}, {
								base64 : !0,
								compression : "STORE",
								compressionOptions : null,
								type : "base64",
								platform : "DOS",
								comment : null,
								mimeType : "application/zip"
							}),
						n.checkSupport(t.type),
						("darwin" === t.platform || "freebsd" === t.platform || "linux" === t.platform || "sunos" === t.platform) && (t.platform = "UNIX"),
						"win32" === t.platform && (t.platform = "DOS");
						var e,
						i,
						s = [],
						o = 0,
						h = 0,
						u = n.transformTo("string", this.utf8encode(t.comment || this.comment || ""));
						for (var c in this.files)
							if (this.files.hasOwnProperty(c)) {
								var p = this.files[c],
								g = p.options.compression || t.compression.toUpperCase(),
								m = l[g];
								if (!m)
									throw new Error(g + " is not a valid compression method !");
								var v = p.options.compressionOptions || t.compressionOptions || {},
								_ = E.call(this, p, m, v),
								w = I.call(this, c, p, _, o, t.platform);
								o += w.fileRecord.length + _.compressedSize,
								h += w.dirRecord.length,
								s.push(w)
							}
						var x = "";
						x = r.CENTRAL_DIRECTORY_END + "\x00\x00\x00\x00" + b(s.length, 2) + b(s.length, 2) + b(h, 4) + b(o, 4) + b(u.length, 2) + u;
						var k = t.type.toLowerCase();
						for (e = "uint8array" === k || "arraybuffer" === k || "blob" === k || "nodebuffer" === k ? new f(o + h + x.length) : new d(o + h + x.length), i = 0; i < s.length; i++)
							e.append(s[i].fileRecord), e.append(s[i].compressedObject.compressedContent);
						for (i = 0; i < s.length; i++)
							e.append(s[i].dirRecord);
						e.append(x);
						var C = e.finalize();
						switch (t.type.toLowerCase()) {
						case "uint8array":
						case "arraybuffer":
						case "nodebuffer":
							return n.transformTo(t.type.toLowerCase(), C);
						case "blob":
							return n.arrayBuffer2Blob(n.transformTo("arraybuffer", C), t.mimeType);
						case "base64":
							return t.base64 ? a.encode(C) : C;
						default:
							return C
						}
					},
					crc32 : function (t, e) {
						return s(t, e)
					},
					utf8encode : function (t) {
						return n.transformTo("string", c.utf8encode(t))
					},
					utf8decode : function (t) {
						return c.utf8decode(t);

					}
				};
				e.exports = D
			}, {
				"./base64" : 1,
				"./compressedObject" : 2,
				"./compressions" : 3,
				"./crc32" : 4,
				"./defaults" : 6,
				"./nodeBuffer" : 11,
				"./signature" : 14,
				"./stringWriter" : 16,
				"./support" : 17,
				"./uint8ArrayWriter" : 19,
				"./utf8" : 20,
				"./utils" : 21
			}
		],
		14 : [function (t, e, i) {
				"use strict";
				i.LOCAL_FILE_HEADER = "PK",
				i.CENTRAL_FILE_HEADER = "PK",
				i.CENTRAL_DIRECTORY_END = "PK",
				i.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK",
				i.ZIP64_CENTRAL_DIRECTORY_END = "PK",
				i.DATA_DESCRIPTOR = "PK\b"
			}, {}

		],
		15 : [function (t, e) {
				"use strict";
				function i(t, e) {
					this.data = t,
					e || (this.data = s.string2binary(this.data)),
					this.length = this.data.length,
					this.index = 0
				}
				var n = t("./dataReader"),
				s = t("./utils");
				i.prototype = new n,
				i.prototype.byteAt = function (t) {
					return this.data.charCodeAt(t)
				},
				i.prototype.lastIndexOfSignature = function (t) {
					return this.data.lastIndexOf(t)
				},
				i.prototype.readData = function (t) {
					this.checkOffset(t);
					var e = this.data.slice(this.index, this.index + t);
					return this.index += t,
					e
				},
				e.exports = i
			}, {
				"./dataReader" : 5,
				"./utils" : 21
			}
		],
		16 : [function (t, e) {
				"use strict";
				var i = t("./utils"),
				n = function () {
					this.data = []
				};
				n.prototype = {
					append : function (t) {
						t = i.transformTo("string", t),
						this.data.push(t)
					},
					finalize : function () {
						return this.data.join("")
					}
				},
				e.exports = n
			}, {
				"./utils" : 21
			}
		],
		17 : [function (t, e, i) {
				(function (t) {
					"use strict";
					if (i.base64 = !0, i.array = !0, i.string = !0, i.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, i.nodebuffer = "undefined" != typeof t, i.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer)
						i.blob = !1;
					else {
						var e = new ArrayBuffer(0);
						try {
							i.blob = 0 === new Blob([e], {
									type : "application/zip"
								}).size
						} catch (n) {
							try {
								var s = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
								r = new s;
								r.append(e),
								i.blob = 0 === r.getBlob("application/zip").size
							} catch (n) {
								i.blob = !1
							}
						}
					}
				}).call(this, "undefined" != typeof Buffer ? Buffer : void 0)
			}, {}

		],
		18 : [function (t, e) {
				"use strict";
				function i(t) {
					t && (this.data = t, this.length = this.data.length, this.index = 0)
				}
				var n = t("./dataReader");
				i.prototype = new n,
				i.prototype.byteAt = function (t) {
					return this.data[t]
				},
				i.prototype.lastIndexOfSignature = function (t) {
					for (var e = t.charCodeAt(0), i = t.charCodeAt(1), n = t.charCodeAt(2), s = t.charCodeAt(3), r = this.length - 4; r >= 0; --r)
						if (this.data[r] === e && this.data[r + 1] === i && this.data[r + 2] === n && this.data[r + 3] === s)
							return r;
					return -1
				},
				i.prototype.readData = function (t) {
					if (this.checkOffset(t), 0 === t)
						return new Uint8Array(0);
					var e = this.data.subarray(this.index, this.index + t);
					return this.index += t,
					e
				},
				e.exports = i
			}, {
				"./dataReader" : 5
			}
		],
		19 : [function (t, e) {
				"use strict";
				var i = t("./utils"),
				n = function (t) {
					this.data = new Uint8Array(t),
					this.index = 0
				};
				n.prototype = {
					append : function (t) {
						0 !== t.length && (t = i.transformTo("uint8array", t), this.data.set(t, this.index), this.index += t.length)
					},
					finalize : function () {
						return this.data
					}
				},
				e.exports = n
			}, {
				"./utils" : 21
			}
		],
		20 : [function (t, e, i) {
				"use strict";
				for (var n = t("./utils"), s = t("./support"), r = t("./nodeBuffer"), o = new Array(256), a = 0; 256 > a; a++)
					o[a] = a >= 252 ? 6 : a >= 248 ? 5 : a >= 240 ? 4 : a >= 224 ? 3 : a >= 192 ? 2 : 1;
				o[254] = o[254] = 1;
				var l = function (t) {
					var e,
					i,
					n,
					r,
					o,
					a = t.length,
					l = 0;
					for (r = 0; a > r; r++)
						i = t.charCodeAt(r), 55296 === (64512 & i) && a > r + 1 && (n = t.charCodeAt(r + 1), 56320 === (64512 & n) && (i = 65536 + (i - 55296 << 10) + (n - 56320), r++)), l += 128 > i ? 1 : 2048 > i ? 2 : 65536 > i ? 3 : 4;
					for (e = s.uint8array ? new Uint8Array(l) : new Array(l), o = 0, r = 0; l > o; r++)
						i = t.charCodeAt(r), 55296 === (64512 & i) && a > r + 1 && (n = t.charCodeAt(r + 1), 56320 === (64512 & n) && (i = 65536 + (i - 55296 << 10) + (n - 56320), r++)), 128 > i ? e[o++] = i : 2048 > i ? (e[o++] = 192 | i >>> 6, e[o++] = 128 | 63 & i) : 65536 > i ? (e[o++] = 224 | i >>> 12, e[o++] = 128 | i >>> 6 & 63, e[o++] = 128 | 63 & i) : (e[o++] = 240 | i >>> 18, e[o++] = 128 | i >>> 12 & 63, e[o++] = 128 | i >>> 6 & 63, e[o++] = 128 | 63 & i);
					return e
				},
				h = function (t, e) {
					var i;
					for (e = e || t.length, e > t.length && (e = t.length), i = e - 1; i >= 0 && 128 === (192 & t[i]); )
						i--;
					return 0 > i ? e : 0 === i ? e : i + o[t[i]] > e ? i : e
				},
				u = function (t) {
					var e,
					i,
					s,
					r,
					a = t.length,
					l = new Array(2 * a);
					for (i = 0, e = 0; a > e; )
						if (s = t[e++], 128 > s)
							l[i++] = s;
						else if (r = o[s], r > 4)
							l[i++] = 65533, e += r - 1;
						else {
							for (s &= 2 === r ? 31 : 3 === r ? 15 : 7; r > 1 && a > e; )
								s = s << 6 | 63 & t[e++], r--;
							r > 1 ? l[i++] = 65533 : 65536 > s ? l[i++] = s : (s -= 65536, l[i++] = 55296 | s >> 10 & 1023, l[i++] = 56320 | 1023 & s)
						}
					return l.length !== i && (l.subarray ? l = l.subarray(0, i) : l.length = i),
					n.applyFromCharCode(l)
				};
				i.utf8encode = function (t) {
					return s.nodebuffer ? r(t, "utf-8") : l(t)
				},
				i.utf8decode = function (t) {
					if (s.nodebuffer)
						return n.transformTo("nodebuffer", t).toString("utf-8");
					t = n.transformTo(s.uint8array ? "uint8array" : "array", t);
					for (var e = [], i = 0, r = t.length, o = 65536; r > i; ) {
						var a = h(t, Math.min(i + o, r));
						e.push(u(s.uint8array ? t.subarray(i, a) : t.slice(i, a))),
						i = a
					}
					return e.join("")
				}
			}, {
				"./nodeBuffer" : 11,
				"./support" : 17,
				"./utils" : 21
			}
		],
		21 : [function (t, e, i) {
				"use strict";
				function n(t) {
					return t
				}
				function s(t, e) {
					for (var i = 0; i < t.length; ++i)
						e[i] = 255 & t.charCodeAt(i);
					return e
				}
				function r(t) {
					var e = 65536,
					n = [],
					s = t.length,
					r = i.getTypeOf(t),
					o = 0,
					a = !0;
					try {
						switch (r) {
						case "uint8array":
							String.fromCharCode.apply(null, new Uint8Array(0));
							break;
						case "nodebuffer":
							String.fromCharCode.apply(null, h(0))
						}
					} catch (l) {
						a = !1
					}
					if (!a) {
						for (var u = "", c = 0; c < t.length; c++)
							u += String.fromCharCode(t[c]);
						return u
					}
					for (; s > o && e > 1; )
						try {
							n.push("array" === r || "nodebuffer" === r ? String.fromCharCode.apply(null, t.slice(o, Math.min(o + e, s))) : String.fromCharCode.apply(null, t.subarray(o, Math.min(o + e, s)))),
							o += e
						} catch (l) {
							e = Math.floor(e / 2)
						}
					return n.join("")
				}
				function o(t, e) {
					for (var i = 0; i < t.length; i++)
						e[i] = t[i];
					return e
				}
				var a = t("./support"),
				l = t("./compressions"),
				h = t("./nodeBuffer");
				i.string2binary = function (t) {
					for (var e = "", i = 0; i < t.length; i++)
						e += String.fromCharCode(255 & t.charCodeAt(i));
					return e
				},
				i.arrayBuffer2Blob = function (t, e) {
					i.checkSupport("blob"),
					e = e || "application/zip";
					try {
						return new Blob([t], {
							type : e
						})
					} catch (n) {
						try {
							var s = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
							r = new s;
							return r.append(t),
							r.getBlob(e)
						} catch (n) {
							throw new Error("Bug : can't construct the Blob.")
						}
					}
				},
				i.applyFromCharCode = r;
				var u = {};
				u.string = {
					string : n,
					array : function (t) {
						return s(t, new Array(t.length))
					},
					arraybuffer : function (t) {
						return u.string.uint8array(t).buffer
					},
					uint8array : function (t) {
						return s(t, new Uint8Array(t.length))
					},
					nodebuffer : function (t) {
						return s(t, h(t.length))
					}
				},
				u.array = {
					string : r,
					array : n,
					arraybuffer : function (t) {
						return new Uint8Array(t).buffer
					},
					uint8array : function (t) {
						return new Uint8Array(t)
					},
					nodebuffer : function (t) {
						return h(t)
					}
				},
				u.arraybuffer = {
					string : function (t) {
						return r(new Uint8Array(t))
					},
					array : function (t) {
						return o(new Uint8Array(t), new Array(t.byteLength))
					},
					arraybuffer : n,
					uint8array : function (t) {
						return new Uint8Array(t)
					},
					nodebuffer : function (t) {
						return h(new Uint8Array(t))
					}
				},
				u.uint8array = {
					string : r,
					array : function (t) {
						return o(t, new Array(t.length))
					},
					arraybuffer : function (t) {
						return t.buffer
					},
					uint8array : n,
					nodebuffer : function (t) {
						return h(t)
					}
				},
				u.nodebuffer = {
					string : r,
					array : function (t) {
						return o(t, new Array(t.length))
					},
					arraybuffer : function (t) {
						return u.nodebuffer.uint8array(t).buffer
					},
					uint8array : function (t) {
						return o(t, new Uint8Array(t.length))
					},
					nodebuffer : n
				},
				i.transformTo = function (t, e) {
					if (e || (e = ""), !t)
						return e;
					i.checkSupport(t);
					var n = i.getTypeOf(e),
					s = u[n][t](e);
					return s
				},
				i.getTypeOf = function (t) {
					return "string" == typeof t ? "string" : "[object Array]" === Object.prototype.toString.call(t) ? "array" : a.nodebuffer && h.test(t) ? "nodebuffer" : a.uint8array && t instanceof Uint8Array ? "uint8array" : a.arraybuffer && t instanceof ArrayBuffer ? "arraybuffer" : void 0
				},
				i.checkSupport = function (t) {
					var e = a[t.toLowerCase()];
					if (!e)
						throw new Error(t + " is not supported by this browser")
				},
				i.MAX_VALUE_16BITS = 65535,
				i.MAX_VALUE_32BITS = -1,
				i.pretty = function (t) {
					var e,
					i,
					n = "";
					for (i = 0; i < (t || "").length; i++)
						e = t.charCodeAt(i), n += "\\x" + (16 > e ? "0" : "") + e.toString(16).toUpperCase();
					return n
				},
				i.findCompression = function (t) {
					for (var e in l)
						if (l.hasOwnProperty(e) && l[e].magic === t)
							return l[e];
					return null
				},
				i.isRegExp = function (t) {
					return "[object RegExp]" === Object.prototype.toString.call(t)
				}
			}, {
				"./compressions" : 3,
				"./nodeBuffer" : 11,
				"./support" : 17
			}
		],
		22 : [function (t, e) {
				"use strict";
				function i(t, e) {
					this.files = [],
					this.loadOptions = e,
					t && this.load(t)
				}
				var n = t("./stringReader"),
				s = t("./nodeBufferReader"),
				r = t("./uint8ArrayReader"),
				o = t("./utils"),
				a = t("./signature"),
				l = t("./zipEntry"),
				h = t("./support"),
				u = t("./object");
				i.prototype = {
					checkSignature : function (t) {
						var e = this.reader.readString(4);
						if (e !== t)
							throw new Error("Corrupted zip or bug : unexpected signature (" + o.pretty(e) + ", expected " + o.pretty(t) + ")")
					},
					readBlockEndOfCentral : function () {
						this.diskNumber = this.reader.readInt(2),
						this.diskWithCentralDirStart = this.reader.readInt(2),
						this.centralDirRecordsOnThisDisk = this.reader.readInt(2),
						this.centralDirRecords = this.reader.readInt(2),
						this.centralDirSize = this.reader.readInt(4),
						this.centralDirOffset = this.reader.readInt(4),
						this.zipCommentLength = this.reader.readInt(2),
						this.zipComment = this.reader.readString(this.zipCommentLength),
						this.zipComment = u.utf8decode(this.zipComment)
					},
					readBlockZip64EndOfCentral : function () {
						this.zip64EndOfCentralSize = this.reader.readInt(8),
						this.versionMadeBy = this.reader.readString(2),
						this.versionNeeded = this.reader.readInt(2),
						this.diskNumber = this.reader.readInt(4),
						this.diskWithCentralDirStart = this.reader.readInt(4),
						this.centralDirRecordsOnThisDisk = this.reader.readInt(8),
						this.centralDirRecords = this.reader.readInt(8),
						this.centralDirSize = this.reader.readInt(8),
						this.centralDirOffset = this.reader.readInt(8),
						this.zip64ExtensibleData = {};
						for (var t, e, i, n = this.zip64EndOfCentralSize - 44, s = 0; n > s; )
							t = this.reader.readInt(2), e = this.reader.readInt(4), i = this.reader.readString(e), this.zip64ExtensibleData[t] = {
								id : t,
								length : e,
								value : i
							}
					},
					readBlockZip64EndOfCentralLocator : function () {
						if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), this.disksCount > 1)
							throw new Error("Multi-volumes zip are not supported")
					},
					readLocalFiles : function () {
						var t,
						e;
						for (t = 0; t < this.files.length; t++)
							e = this.files[t], this.reader.setIndex(e.localHeaderOffset), this.checkSignature(a.LOCAL_FILE_HEADER), e.readLocalPart(this.reader), e.handleUTF8(), e.processAttributes()
					},
					readCentralDir : function () {
						var t;
						for (this.reader.setIndex(this.centralDirOffset); this.reader.readString(4) === a.CENTRAL_FILE_HEADER; )
							t = new l({
									zip64 : this.zip64
								}, this.loadOptions), t.readCentralPart(this.reader), this.files.push(t)
					},
					readEndOfCentral : function () {
						var t = this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);
						if (-1 === t) {
							var e = !0;
							try {
								this.reader.setIndex(0),
								this.checkSignature(a.LOCAL_FILE_HEADER),
								e = !1
							} catch (i) {}

							throw new Error(e ? "Can't find end of central directory : is this a zip file ? If it is, see http://stuk.github.io/jszip/documentation/howto/read_zip.html" : "Corrupted zip : can't find end of central directory")
						}
						if (this.reader.setIndex(t), this.checkSignature(a.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === o.MAX_VALUE_16BITS || this.diskWithCentralDirStart === o.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === o.MAX_VALUE_16BITS || this.centralDirRecords === o.MAX_VALUE_16BITS || this.centralDirSize === o.MAX_VALUE_32BITS || this.centralDirOffset === o.MAX_VALUE_32BITS) {
							if (this.zip64 = !0, t = this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR), -1 === t)
								throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
							this.reader.setIndex(t),
							this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),
							this.readBlockZip64EndOfCentralLocator(),
							this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),
							this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),
							this.readBlockZip64EndOfCentral()
						}
					},
					prepareReader : function (t) {
						var e = o.getTypeOf(t);
						this.reader = "string" !== e || h.uint8array ? "nodebuffer" === e ? new s(t) : new r(o.transformTo("uint8array", t)) : new n(t, this.loadOptions.optimizedBinaryString)
					},
					load : function (t) {
						this.prepareReader(t),
						this.readEndOfCentral(),
						this.readCentralDir(),
						this.readLocalFiles()
					}
				},
				e.exports = i
			}, {
				"./nodeBufferReader" : 12,
				"./object" : 13,
				"./signature" : 14,
				"./stringReader" : 15,
				"./support" : 17,
				"./uint8ArrayReader" : 18,
				"./utils" : 21,
				"./zipEntry" : 23
			}
		],
		23 : [function (t, e) {
				"use strict";
				function i(t, e) {
					this.options = t,
					this.loadOptions = e
				}
				var n = t("./stringReader"),
				s = t("./utils"),
				r = t("./compressedObject"),
				o = t("./object"),
				a = 0,
				l = 3;
				i.prototype = {
					isEncrypted : function () {
						return 1 === (1 & this.bitFlag)
					},
					useUTF8 : function () {
						return 2048 === (2048 & this.bitFlag)
					},
					prepareCompressedContent : function (t, e, i) {
						return function () {
							var n = t.index;
							t.setIndex(e);
							var s = t.readData(i);
							return t.setIndex(n),
							s
						}
					},
					prepareContent : function (t, e, i, n, r) {
						return function () {
							var t = s.transformTo(n.uncompressInputType, this.getCompressedContent()),
							e = n.uncompress(t);
							if (e.length !== r)
								throw new Error("Bug : uncompressed data size mismatch");
							return e
						}
					},
					readLocalPart : function (t) {
						var e,
						i;
						if (t.skip(22), this.fileNameLength = t.readInt(2), i = t.readInt(2), this.fileName = t.readString(this.fileNameLength), t.skip(i), -1 == this.compressedSize || -1 == this.uncompressedSize)
							throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)");
						if (e = s.findCompression(this.compressionMethod), null === e)
							throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + this.fileName + ")");
						if (this.decompressed = new r, this.decompressed.compressedSize = this.compressedSize, this.decompressed.uncompressedSize = this.uncompressedSize, this.decompressed.crc32 = this.crc32, this.decompressed.compressionMethod = this.compressionMethod, this.decompressed.getCompressedContent = this.prepareCompressedContent(t, t.index, this.compressedSize, e), this.decompressed.getContent = this.prepareContent(t, t.index, this.compressedSize, e, this.uncompressedSize), this.loadOptions.checkCRC32 && (this.decompressed = s.transformTo("string", this.decompressed.getContent()), o.crc32(this.decompressed) !== this.crc32))
							throw new Error("Corrupted zip : CRC32 mismatch")
					},
					readCentralPart : function (t) {
						if (this.versionMadeBy = t.readInt(2), this.versionNeeded = t.readInt(2), this.bitFlag = t.readInt(2), this.compressionMethod = t.readString(2), this.date = t.readDate(), this.crc32 = t.readInt(4), this.compressedSize = t.readInt(4), this.uncompressedSize = t.readInt(4), this.fileNameLength = t.readInt(2), this.extraFieldsLength = t.readInt(2), this.fileCommentLength = t.readInt(2), this.diskNumberStart = t.readInt(2), this.internalFileAttributes = t.readInt(2), this.externalFileAttributes = t.readInt(4), this.localHeaderOffset = t.readInt(4), this.isEncrypted())
							throw new Error("Encrypted zip are not supported");
						this.fileName = t.readString(this.fileNameLength),
						this.readExtraFields(t),
						this.parseZIP64ExtraField(t),
						this.fileComment = t.readString(this.fileCommentLength)
					},
					processAttributes : function () {
						this.unixPermissions = null,
						this.dosPermissions = null;
						var t = this.versionMadeBy >> 8;
						this.dir = 16 & this.externalFileAttributes ? !0 : !1,
						t === a && (this.dosPermissions = 63 & this.externalFileAttributes),
						t === l && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535),
						this.dir || "/" !== this.fileName.slice(-1) || (this.dir = !0)
					},
					parseZIP64ExtraField : function () {
						if (this.extraFields[1]) {
							var t = new n(this.extraFields[1].value);
							this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = t.readInt(8)),
							this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = t.readInt(8)),
							this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = t.readInt(8)),
							this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = t.readInt(4))
						}
					},
					readExtraFields : function (t) {
						var e,
						i,
						n,
						s = t.index;
						for (this.extraFields = this.extraFields || {}; t.index < s + this.extraFieldsLength; )
							e = t.readInt(2), i = t.readInt(2), n = t.readString(i), this.extraFields[e] = {
								id : e,
								length : i,
								value : n
							}
					},
					handleUTF8 : function () {
						if (this.useUTF8())
							this.fileName = o.utf8decode(this.fileName), this.fileComment = o.utf8decode(this.fileComment);
						else {
							var t = this.findExtraFieldUnicodePath();
							null !== t && (this.fileName = t);
							var e = this.findExtraFieldUnicodeComment();
							null !== e && (this.fileComment = e)
						}
					},
					findExtraFieldUnicodePath : function () {
						var t = this.extraFields[28789];
						if (t) {
							var e = new n(t.value);
							return 1 !== e.readInt(1) ? null : o.crc32(this.fileName) !== e.readInt(4) ? null : o.utf8decode(e.readString(t.length - 5))
						}
						return null
					},
					findExtraFieldUnicodeComment : function () {
						var t = this.extraFields[25461];
						if (t) {
							var e = new n(t.value);
							return 1 !== e.readInt(1) ? null : o.crc32(this.fileComment) !== e.readInt(4) ? null : o.utf8decode(e.readString(t.length - 5))
						}
						return null
					}
				},
				e.exports = i
			}, {
				"./compressedObject" : 2,
				"./object" : 13,
				"./stringReader" : 15,
				"./utils" : 21
			}
		],
		24 : [function (t, e) {
				"use strict";
				var i = t("./lib/utils/common").assign,
				n = t("./lib/deflate"),
				s = t("./lib/inflate"),
				r = t("./lib/zlib/constants"),
				o = {};
				i(o, n, s, r),
				e.exports = o
			}, {
				"./lib/deflate" : 25,
				"./lib/inflate" : 26,
				"./lib/utils/common" : 27,
				"./lib/zlib/constants" : 30
			}
		],
		25 : [function (t, e, i) {
				"use strict";
				function n(t, e) {
					var i = new b(e);
					if (i.push(t, !0), i.err)
						throw i.msg;
					return i.result
				}
				function s(t, e) {
					return e = e || {},
					e.raw = !0,
					n(t, e)
				}
				function r(t, e) {
					return e = e || {},
					e.gzip = !0,
					n(t, e)
				}
				var o = t("./zlib/deflate.js"),
				a = t("./utils/common"),
				l = t("./utils/strings"),
				h = t("./zlib/messages"),
				u = t("./zlib/zstream"),
				c = 0,
				d = 4,
				f = 0,
				p = 1,
				g = -1,
				m = 0,
				v = 8,
				b = function (t) {
					this.options = a.assign({
							level : g,
							method : v,
							chunkSize : 16384,
							windowBits : 15,
							memLevel : 8,
							strategy : m,
							to : ""
						}, t || {});
					var e = this.options;
					e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16),
					this.err = 0,
					this.msg = "",
					this.ended = !1,
					this.chunks = [],
					this.strm = new u,
					this.strm.avail_out = 0;
					var i = o.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
					if (i !== f)
						throw new Error(h[i]);
					e.header && o.deflateSetHeader(this.strm, e.header)
				};
				b.prototype.push = function (t, e) {
					var i,
					n,
					s = this.strm,
					r = this.options.chunkSize;
					if (this.ended)
						return !1;
					n = e === ~~e ? e : e === !0 ? d : c,
					s.input = "string" == typeof t ? l.string2buf(t) : t,
					s.next_in = 0,
					s.avail_in = s.input.length;
					do {
						if (0 === s.avail_out && (s.output = new a.Buf8(r), s.next_out = 0, s.avail_out = r), i = o.deflate(s, n), i !== p && i !== f)
							return this.onEnd(i), this.ended = !0, !1;
						(0 === s.avail_out || 0 === s.avail_in && n === d) && this.onData("string" === this.options.to ? l.buf2binstring(a.shrinkBuf(s.output, s.next_out)) : a.shrinkBuf(s.output, s.next_out))
					} while ((s.avail_in > 0 || 0 === s.avail_out) && i !== p);
					return n === d ? (i = o.deflateEnd(this.strm), this.onEnd(i), this.ended = !0, i === f) : !0
				},
				b.prototype.onData = function (t) {
					this.chunks.push(t)
				},
				b.prototype.onEnd = function (t) {
					t === f && (this.result = "string" === this.options.to ? this.chunks.join("") : a.flattenChunks(this.chunks)),
					this.chunks = [],
					this.err = t,
					this.msg = this.strm.msg
				},
				i.Deflate = b,
				i.deflate = n,
				i.deflateRaw = s,
				i.gzip = r
			}, {
				"./utils/common" : 27,
				"./utils/strings" : 28,
				"./zlib/deflate.js" : 32,
				"./zlib/messages" : 37,
				"./zlib/zstream" : 39
			}
		],
		26 : [function (t, e, i) {
				"use strict";
				function n(t, e) {
					var i = new d(e);
					if (i.push(t, !0), i.err)
						throw i.msg;
					return i.result
				}
				function s(t, e) {
					return e = e || {},
					e.raw = !0,
					n(t, e)
				}
				var r = t("./zlib/inflate.js"),
				o = t("./utils/common"),
				a = t("./utils/strings"),
				l = t("./zlib/constants"),
				h = t("./zlib/messages"),
				u = t("./zlib/zstream"),
				c = t("./zlib/gzheader"),
				d = function (t) {
					this.options = o.assign({
							chunkSize : 16384,
							windowBits : 0,
							to : ""
						}, t || {});
					var e = this.options;
					e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, 0 === e.windowBits && (e.windowBits = -15)),
					!(e.windowBits >= 0 && e.windowBits < 16) || t && t.windowBits || (e.windowBits += 32),
					e.windowBits > 15 && e.windowBits < 48 && 0 === (15 & e.windowBits) && (e.windowBits |= 15),
					this.err = 0,
					this.msg = "",
					this.ended = !1,
					this.chunks = [],
					this.strm = new u,
					this.strm.avail_out = 0;
					var i = r.inflateInit2(this.strm, e.windowBits);
					if (i !== l.Z_OK)
						throw new Error(h[i]);
					this.header = new c,
					r.inflateGetHeader(this.strm, this.header)
				};
				d.prototype.push = function (t, e) {
					var i,
					n,
					s,
					h,
					u,
					c = this.strm,
					d = this.options.chunkSize;
					if (this.ended)
						return !1;
					n = e === ~~e ? e : e === !0 ? l.Z_FINISH : l.Z_NO_FLUSH,
					c.input = "string" == typeof t ? a.binstring2buf(t) : t,
					c.next_in = 0,
					c.avail_in = c.input.length;
					do {
						if (0 === c.avail_out && (c.output = new o.Buf8(d), c.next_out = 0, c.avail_out = d), i = r.inflate(c, l.Z_NO_FLUSH), i !== l.Z_STREAM_END && i !== l.Z_OK)
							return this.onEnd(i), this.ended = !0, !1;
						c.next_out && (0 === c.avail_out || i === l.Z_STREAM_END || 0 === c.avail_in && n === l.Z_FINISH) && ("string" === this.options.to ? (s = a.utf8border(c.output, c.next_out), h = c.next_out - s, u = a.buf2string(c.output, s), c.next_out = h, c.avail_out = d - h, h && o.arraySet(c.output, c.output, s, h, 0), this.onData(u)) : this.onData(o.shrinkBuf(c.output, c.next_out)))
					} while (c.avail_in > 0 && i !== l.Z_STREAM_END);
					return i === l.Z_STREAM_END && (n = l.Z_FINISH),
					n === l.Z_FINISH ? (i = r.inflateEnd(this.strm), this.onEnd(i), this.ended = !0, i === l.Z_OK) : !0
				},
				d.prototype.onData = function (t) {
					this.chunks.push(t)
				},
				d.prototype.onEnd = function (t) {
					t === l.Z_OK && (this.result = "string" === this.options.to ? this.chunks.join("") : o.flattenChunks(this.chunks)),
					this.chunks = [],
					this.err = t,
					this.msg = this.strm.msg
				},
				i.Inflate = d,
				i.inflate = n,
				i.inflateRaw = s,
				i.ungzip = n
			}, {
				"./utils/common" : 27,
				"./utils/strings" : 28,
				"./zlib/constants" : 30,
				"./zlib/gzheader" : 33,
				"./zlib/inflate.js" : 35,
				"./zlib/messages" : 37,
				"./zlib/zstream" : 39
			}
		],
		27 : [function (t, e, i) {
				"use strict";
				var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
				i.assign = function (t) {
					for (var e = Array.prototype.slice.call(arguments, 1); e.length; ) {
						var i = e.shift();
						if (i) {
							if ("object" != typeof i)
								throw new TypeError(i + "must be non-object");
							for (var n in i)
								i.hasOwnProperty(n) && (t[n] = i[n])
						}
					}
					return t
				},
				i.shrinkBuf = function (t, e) {
					return t.length === e ? t : t.subarray ? t.subarray(0, e) : (t.length = e, t)
				};
				var s = {
					arraySet : function (t, e, i, n, s) {
						if (e.subarray && t.subarray)
							return void t.set(e.subarray(i, i + n), s);
						for (var r = 0; n > r; r++)
							t[s + r] = e[i + r]
					},
					flattenChunks : function (t) {
						var e,
						i,
						n,
						s,
						r,
						o;
						for (n = 0, e = 0, i = t.length; i > e; e++)
							n += t[e].length;
						for (o = new Uint8Array(n), s = 0, e = 0, i = t.length; i > e; e++)
							r = t[e], o.set(r, s), s += r.length;
						return o
					}
				},
				r = {
					arraySet : function (t, e, i, n, s) {
						for (var r = 0; n > r; r++)
							t[s + r] = e[i + r]
					},
					flattenChunks : function (t) {
						return [].concat.apply([], t)
					}
				};
				i.setTyped = function (t) {
					t ? (i.Buf8 = Uint8Array, i.Buf16 = Uint16Array, i.Buf32 = Int32Array, i.assign(i, s)) : (i.Buf8 = Array, i.Buf16 = Array, i.Buf32 = Array, i.assign(i, r))
				},
				i.setTyped(n)
			}, {}

		],
		28 : [function (t, e, i) {
				"use strict";
				function n(t, e) {
					if (65537 > e && (t.subarray && o || !t.subarray && r))
						return String.fromCharCode.apply(null, s.shrinkBuf(t, e));
					for (var i = "", n = 0; e > n; n++)
						i += String.fromCharCode(t[n]);
					return i
				}
				var s = t("./common"),
				r = !0,
				o = !0;
				try {
					String.fromCharCode.apply(null, [0])
				} catch (a) {
					r = !1
				}
				try {
					String.fromCharCode.apply(null, new Uint8Array(1))
				} catch (a) {
					o = !1
				}
				for (var l = new s.Buf8(256), h = 0; 256 > h; h++)
					l[h] = h >= 252 ? 6 : h >= 248 ? 5 : h >= 240 ? 4 : h >= 224 ? 3 : h >= 192 ? 2 : 1;
				l[254] = l[254] = 1,
				i.string2buf = function (t) {
					var e,
					i,
					n,
					r,
					o,
					a = t.length,
					l = 0;
					for (r = 0; a > r; r++)
						i = t.charCodeAt(r), 55296 === (64512 & i) && a > r + 1 && (n = t.charCodeAt(r + 1), 56320 === (64512 & n) && (i = 65536 + (i - 55296 << 10) + (n - 56320), r++)), l += 128 > i ? 1 : 2048 > i ? 2 : 65536 > i ? 3 : 4;
					for (e = new s.Buf8(l), o = 0, r = 0; l > o; r++)
						i = t.charCodeAt(r), 55296 === (64512 & i) && a > r + 1 && (n = t.charCodeAt(r + 1), 56320 === (64512 & n) && (i = 65536 + (i - 55296 << 10) + (n - 56320), r++)), 128 > i ? e[o++] = i : 2048 > i ? (e[o++] = 192 | i >>> 6, e[o++] = 128 | 63 & i) : 65536 > i ? (e[o++] = 224 | i >>> 12, e[o++] = 128 | i >>> 6 & 63, e[o++] = 128 | 63 & i) : (e[o++] = 240 | i >>> 18, e[o++] = 128 | i >>> 12 & 63, e[o++] = 128 | i >>> 6 & 63, e[o++] = 128 | 63 & i);
					return e
				},
				i.buf2binstring = function (t) {
					return n(t, t.length)
				},
				i.binstring2buf = function (t) {
					for (var e = new s.Buf8(t.length), i = 0, n = e.length; n > i; i++)
						e[i] = t.charCodeAt(i);
					return e
				},
				i.buf2string = function (t, e) {
					var i,
					s,
					r,
					o,
					a = e || t.length,
					h = new Array(2 * a);
					for (s = 0, i = 0; a > i; )
						if (r = t[i++], 128 > r)
							h[s++] = r;
						else if (o = l[r], o > 4)
							h[s++] = 65533, i += o - 1;
						else {
							for (r &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && a > i; )
								r = r << 6 | 63 & t[i++], o--;
							o > 1 ? h[s++] = 65533 : 65536 > r ? h[s++] = r : (r -= 65536, h[s++] = 55296 | r >> 10 & 1023, h[s++] = 56320 | 1023 & r)
						}
					return n(h, s)
				},
				i.utf8border = function (t, e) {
					var i;
					for (e = e || t.length, e > t.length && (e = t.length), i = e - 1; i >= 0 && 128 === (192 & t[i]); )
						i--;
					return 0 > i ? e : 0 === i ? e : i + l[t[i]] > e ? i : e
				}
			}, {
				"./common" : 27
			}
		],
		29 : [function (t, e) {
				"use strict";
				function i(t, e, i, n) {
					for (var s = 65535 & t | 0, r = t >>> 16 & 65535 | 0, o = 0; 0 !== i; ) {
						o = i > 2e3 ? 2e3 : i,
						i -= o;
						do
							s = s + e[n++] | 0, r = r + s | 0;
						while (--o);
						s %= 65521,
						r %= 65521
					}
					return s | r << 16 | 0
				}
				e.exports = i
			}, {}

		],
		30 : [function (t, e) {
				e.exports = {
					Z_NO_FLUSH : 0,
					Z_PARTIAL_FLUSH : 1,
					Z_SYNC_FLUSH : 2,
					Z_FULL_FLUSH : 3,
					Z_FINISH : 4,
					Z_BLOCK : 5,
					Z_TREES : 6,
					Z_OK : 0,
					Z_STREAM_END : 1,
					Z_NEED_DICT : 2,
					Z_ERRNO : -1,
					Z_STREAM_ERROR : -2,
					Z_DATA_ERROR : -3,
					Z_BUF_ERROR : -5,
					Z_NO_COMPRESSION : 0,
					Z_BEST_SPEED : 1,
					Z_BEST_COMPRESSION : 9,
					Z_DEFAULT_COMPRESSION : -1,
					Z_FILTERED : 1,
					Z_HUFFMAN_ONLY : 2,
					Z_RLE : 3,
					Z_FIXED : 4,
					Z_DEFAULT_STRATEGY : 0,
					Z_BINARY : 0,
					Z_TEXT : 1,
					Z_UNKNOWN : 2,
					Z_DEFLATED : 8
				}
			}, {}

		],
		31 : [function (t, e) {
				"use strict";
				function i() {
					for (var t, e = [], i = 0; 256 > i; i++) {
						t = i;
						for (var n = 0; 8 > n; n++)
							t = 1 & t ? 3988292384^t >>> 1 : t >>> 1;
						e[i] = t
					}
					return e
				}
				function n(t, e, i, n) {
					var r = s,
					o = n + i;
					t = -1^t;
					for (var a = n; o > a; a++)
						t = t >>> 8^r[255 & (t^e[a])];
					return -1^t
				}
				var s = i();
				e.exports = n
			}, {}

		],
		32 : [function (t, e, i) {
				"use strict";
				function n(t, e) {
					return t.msg = N[e],
					e
				}
				function s(t) {
					return (t << 1) - (t > 4 ? 9 : 0)
				}
				function r(t) {
					for (var e = t.length; --e >= 0; )
						t[e] = 0
				}
				function o(t) {
					var e = t.state,
					i = e.pending;
					i > t.avail_out && (i = t.avail_out),
					0 !== i && (I.arraySet(t.output, e.pending_buf, e.pending_out, i, t.next_out), t.next_out += i, e.pending_out += i, t.total_out += i, t.avail_out -= i, e.pending -= i, 0 === e.pending && (e.pending_out = 0))
				}
				function a(t, e) {
					D._tr_flush_block(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e),
					t.block_start = t.strstart,
					o(t.strm)
				}
				function l(t, e) {
					t.pending_buf[t.pending++] = e
				}
				function h(t, e) {
					t.pending_buf[t.pending++] = e >>> 8 & 255,
					t.pending_buf[t.pending++] = 255 & e
				}
				function u(t, e, i, n) {
					var s = t.avail_in;
					return s > n && (s = n),
					0 === s ? 0 : (t.avail_in -= s, I.arraySet(e, t.input, t.next_in, s, i), 1 === t.state.wrap ? t.adler = A(t.adler, e, s, i) : 2 === t.state.wrap && (t.adler = M(t.adler, e, s, i)), t.next_in += s, t.total_in += s, s)
				}
				function c(t, e) {
					var i,
					n,
					s = t.max_chain_length,
					r = t.strstart,
					o = t.prev_length,
					a = t.nice_match,
					l = t.strstart > t.w_size - ht ? t.strstart - (t.w_size - ht) : 0,
					h = t.window,
					u = t.w_mask,
					c = t.prev,
					d = t.strstart + lt,
					f = h[r + o - 1],
					p = h[r + o];
					t.prev_length >= t.good_match && (s >>= 2),
					a > t.lookahead && (a = t.lookahead);
					do
						if (i = e, h[i + o] === p && h[i + o - 1] === f && h[i] === h[r] && h[++i] === h[r + 1]) {
							r += 2,
							i++;
							do ;
							while (h[++r] === h[++i] && h[++r] === h[++i] && h[++r] === h[++i] && h[++r] === h[++i] && h[++r] === h[++i] && h[++r] === h[++i] && h[++r] === h[++i] && h[++r] === h[++i] && d > r);
							if (n = lt - (d - r), r = d - lt, n > o) {
								if (t.match_start = e, o = n, n >= a)
									break;
								f = h[r + o - 1],
								p = h[r + o]
							}
						}
					while ((e = c[e & u]) > l && 0 !== --s);
					return o <= t.lookahead ? o : t.lookahead
				}
				function d(t) {
					var e,
					i,
					n,
					s,
					r,
					o = t.w_size;
					do {
						if (s = t.window_size - t.lookahead - t.strstart, t.strstart >= o + (o - ht)) {
							I.arraySet(t.window, t.window, o, o, 0),
							t.match_start -= o,
							t.strstart -= o,
							t.block_start -= o,
							i = t.hash_size,
							e = i;
							do
								n = t.head[--e], t.head[e] = n >= o ? n - o : 0;
							while (--i);
							i = o,
							e = i;
							do
								n = t.prev[--e], t.prev[e] = n >= o ? n - o : 0;
							while (--i);
							s += o
						}
						if (0 === t.strm.avail_in)
							break;
						if (i = u(t.strm, t.window, t.strstart + t.lookahead, s), t.lookahead += i, t.lookahead + t.insert >= at)
							for (r = t.strstart - t.insert, t.ins_h = t.window[r], t.ins_h = (t.ins_h << t.hash_shift^t.window[r + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift^t.window[r + at - 1]) & t.hash_mask, t.prev[r & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = r, r++, t.insert--, !(t.lookahead + t.insert < at)); );
					} while (t.lookahead < ht && 0 !== t.strm.avail_in)
				}
				function f(t, e) {
					var i = 65535;
					for (i > t.pending_buf_size - 5 && (i = t.pending_buf_size - 5); ; ) {
						if (t.lookahead <= 1) {
							if (d(t), 0 === t.lookahead && e === O)
								return bt;
							if (0 === t.lookahead)
								break
						}
						t.strstart += t.lookahead,
						t.lookahead = 0;
						var n = t.block_start + i;
						if ((0 === t.strstart || t.strstart >= n) && (t.lookahead = t.strstart - n, t.strstart = n, a(t, !1), 0 === t.strm.avail_out))
							return bt;
						if (t.strstart - t.block_start >= t.w_size - ht && (a(t, !1), 0 === t.strm.avail_out))
							return bt
					}
					return t.insert = 0,
					e === R ? (a(t, !0), 0 === t.strm.avail_out ? _t : wt) : t.strstart > t.block_start && (a(t, !1), 0 === t.strm.avail_out) ? bt : bt
				}
				function p(t, e) {
					for (var i, n; ; ) {
						if (t.lookahead < ht) {
							if (d(t), t.lookahead < ht && e === O)
								return bt;
							if (0 === t.lookahead)
								break
						}
						if (i = 0, t.lookahead >= at && (t.ins_h = (t.ins_h << t.hash_shift^t.window[t.strstart + at - 1]) & t.hash_mask, i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 !== i && t.strstart - i <= t.w_size - ht && (t.match_length = c(t, i)), t.match_length >= at)
							if (n = D._tr_tally(t, t.strstart - t.match_start, t.match_length - at), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= at) {
								t.match_length--;
								do
									t.strstart++, t.ins_h = (t.ins_h << t.hash_shift^t.window[t.strstart + at - 1]) & t.hash_mask, i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart;
								while (0 !== --t.match_length);
								t.strstart++
							} else
								t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift^t.window[t.strstart + 1]) & t.hash_mask;
						else
							n = D._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
						if (n && (a(t, !1), 0 === t.strm.avail_out))
							return bt
					}
					return t.insert = t.strstart < at - 1 ? t.strstart : at - 1,
					e === R ? (a(t, !0), 0 === t.strm.avail_out ? _t : wt) : t.last_lit && (a(t, !1), 0 === t.strm.avail_out) ? bt : yt
				}
				function g(t, e) {
					for (var i, n, s; ; ) {
						if (t.lookahead < ht) {
							if (d(t), t.lookahead < ht && e === O)
								return bt;
							if (0 === t.lookahead)
								break
						}
						if (i = 0, t.lookahead >= at && (t.ins_h = (t.ins_h << t.hash_shift^t.window[t.strstart + at - 1]) & t.hash_mask, i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = at - 1, 0 !== i && t.prev_length < t.max_lazy_match && t.strstart - i <= t.w_size - ht && (t.match_length = c(t, i), t.match_length <= 5 && (t.strategy === V || t.match_length === at && t.strstart - t.match_start > 4096) && (t.match_length = at - 1)), t.prev_length >= at && t.match_length <= t.prev_length) {
							s = t.strstart + t.lookahead - at,
							n = D._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - at),
							t.lookahead -= t.prev_length - 1,
							t.prev_length -= 2;
							do ++t.strstart <= s && (t.ins_h = (t.ins_h << t.hash_shift^t.window[t.strstart + at - 1]) & t.hash_mask, i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart);
							while (0 !== --t.prev_length);
							if (t.match_available = 0, t.match_length = at - 1, t.strstart++, n && (a(t, !1), 0 === t.strm.avail_out))
								return bt
						} else if (t.match_available) {
							if (n = D._tr_tally(t, 0, t.window[t.strstart - 1]), n && a(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out)
								return bt
						} else
							t.match_available = 1, t.strstart++, t.lookahead--
					}
					return t.match_available && (n = D._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0),
					t.insert = t.strstart < at - 1 ? t.strstart : at - 1,
					e === R ? (a(t, !0), 0 === t.strm.avail_out ? _t : wt) : t.last_lit && (a(t, !1), 0 === t.strm.avail_out) ? bt : yt
				}
				function m(t, e) {
					for (var i, n, s, r, o = t.window; ; ) {
						if (t.lookahead <= lt) {
							if (d(t), t.lookahead <= lt && e === O)
								return bt;
							if (0 === t.lookahead)
								break
						}
						if (t.match_length = 0, t.lookahead >= at && t.strstart > 0 && (s = t.strstart - 1, n = o[s], n === o[++s] && n === o[++s] && n === o[++s])) {
							r = t.strstart + lt;
							do ;
							while (n === o[++s] && n === o[++s] && n === o[++s] && n === o[++s] && n === o[++s] && n === o[++s] && n === o[++s] && n === o[++s] && r > s);
							t.match_length = lt - (r - s),
							t.match_length > t.lookahead && (t.match_length = t.lookahead)
						}
						if (t.match_length >= at ? (i = D._tr_tally(t, 1, t.match_length - at), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (i = D._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), i && (a(t, !1), 0 === t.strm.avail_out))
							return bt
					}
					return t.insert = 0,
					e === R ? (a(t, !0), 0 === t.strm.avail_out ? _t : wt) : t.last_lit && (a(t, !1), 0 === t.strm.avail_out) ? bt : yt
				}
				function v(t, e) {
					for (var i; ; ) {
						if (0 === t.lookahead && (d(t), 0 === t.lookahead)) {
							if (e === O)
								return bt;
							break
						}
						if (t.match_length = 0, i = D._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, i && (a(t, !1), 0 === t.strm.avail_out))
							return bt
					}
					return t.insert = 0,
					e === R ? (a(t, !0), 0 === t.strm.avail_out ? _t : wt) : t.last_lit && (a(t, !1), 0 === t.strm.avail_out) ? bt : yt
				}
				function b(t) {
					t.window_size = 2 * t.w_size,
					r(t.head),
					t.max_lazy_match = S[t.level].max_lazy,
					t.good_match = S[t.level].good_length,
					t.nice_match = S[t.level].nice_length,
					t.max_chain_length = S[t.level].max_chain,
					t.strstart = 0,
					t.block_start = 0,
					t.lookahead = 0,
					t.insert = 0,
					t.match_length = t.prev_length = at - 1,
					t.match_available = 0,
					t.ins_h = 0
				}
				function y() {
					this.strm = null,
					this.status = 0,
					this.pending_buf = null,
					this.pending_buf_size = 0,
					this.pending_out = 0,
					this.pending = 0,
					this.wrap = 0,
					this.gzhead = null,
					this.gzindex = 0,
					this.method = Z,
					this.last_flush = -1,
					this.w_size = 0,
					this.w_bits = 0,
					this.w_mask = 0,
					this.window = null,
					this.window_size = 0,
					this.prev = null,
					this.head = null,
					this.ins_h = 0,
					this.hash_size = 0,
					this.hash_bits = 0,
					this.hash_mask = 0,
					this.hash_shift = 0,
					this.block_start = 0,
					this.match_length = 0,
					this.prev_match = 0,
					this.match_available = 0,
					this.strstart = 0,
					this.match_start = 0,
					this.lookahead = 0,
					this.prev_length = 0,
					this.max_chain_length = 0,
					this.max_lazy_match = 0,
					this.level = 0,
					this.strategy = 0,
					this.good_match = 0,
					this.nice_match = 0,
					this.dyn_ltree = new I.Buf16(2 * rt),
					this.dyn_dtree = new I.Buf16(2 * (2 * nt + 1)),
					this.bl_tree = new I.Buf16(2 * (2 * st + 1)),
					r(this.dyn_ltree),
					r(this.dyn_dtree),
					r(this.bl_tree),
					this.l_desc = null,
					this.d_desc = null,
					this.bl_desc = null,
					this.bl_count = new I.Buf16(ot + 1),
					this.heap = new I.Buf16(2 * it + 1),
					r(this.heap),
					this.heap_len = 0,
					this.heap_max = 0,
					this.depth = new I.Buf16(2 * it + 1),
					r(this.depth),
					this.l_buf = 0,
					this.lit_bufsize = 0,
					this.last_lit = 0,
					this.d_buf = 0,
					this.opt_len = 0,
					this.static_len = 0,
					this.matches = 0,
					this.insert = 0,
					this.bi_buf = 0,
					this.bi_valid = 0
				}
				function _(t) {
					var e;
					return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = X, e = t.state, e.pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = e.wrap ? ct : mt, t.adler = 2 === e.wrap ? 0 : 1, e.last_flush = O, D._tr_init(e), L) : n(t, B)
				}
				function w(t) {
					var e = _(t);
					return e === L && b(t.state),
					e
				}
				function x(t, e) {
					return t && t.state ? 2 !== t.state.wrap ? B : (t.state.gzhead = e, L) : B
				}
				function k(t, e, i, s, r, o) {
					if (!t)
						return B;
					var a = 1;
					if (e === $ && (e = 6), 0 > s ? (a = 0, s = -s) : s > 15 && (a = 2, s -= 16), 1 > r || r > G || i !== Z || 8 > s || s > 15 || 0 > e || e > 9 || 0 > o || o > Y)
						return n(t, B);
					8 === s && (s = 9);
					var l = new y;
					return t.state = l,
					l.strm = t,
					l.wrap = a,
					l.gzhead = null,
					l.w_bits = s,
					l.w_size = 1 << l.w_bits,
					l.w_mask = l.w_size - 1,
					l.hash_bits = r + 7,
					l.hash_size = 1 << l.hash_bits,
					l.hash_mask = l.hash_size - 1,
					l.hash_shift = ~~((l.hash_bits + at - 1) / at),
					l.window = new I.Buf8(2 * l.w_size),
					l.head = new I.Buf16(l.hash_size),
					l.prev = new I.Buf16(l.w_size),
					l.lit_bufsize = 1 << r + 6,
					l.pending_buf_size = 4 * l.lit_bufsize,
					l.pending_buf = new I.Buf8(l.pending_buf_size),
					l.d_buf = l.lit_bufsize >> 1,
					l.l_buf = 3 * l.lit_bufsize,
					l.level = e,
					l.strategy = o,
					l.method = i,
					w(t)
				}
				function C(t, e) {
					return k(t, e, Z, J, Q, K)
				}
				function E(t, e) {
					var i,
					a,
					u,
					c;
					if (!t || !t.state || e > H || 0 > e)
						return t ? n(t, B) : B;
					if (a = t.state, !t.output || !t.input && 0 !== t.avail_in || a.status === vt && e !== R)
						return n(t, 0 === t.avail_out ? W : B);
					if (a.strm = t, i = a.last_flush, a.last_flush = e, a.status === ct)
						if (2 === a.wrap)
							t.adler = 0, l(a, 31), l(a, 139), l(a, 8), a.gzhead ? (l(a, (a.gzhead.text ? 1 : 0) + (a.gzhead.hcrc ? 2 : 0) + (a.gzhead.extra ? 4 : 0) + (a.gzhead.name ? 8 : 0) + (a.gzhead.comment ? 16 : 0)), l(a, 255 & a.gzhead.time), l(a, a.gzhead.time >> 8 & 255), l(a, a.gzhead.time >> 16 & 255), l(a, a.gzhead.time >> 24 & 255), l(a, 9 === a.level ? 2 : a.strategy >= q || a.level < 2 ? 4 : 0), l(a, 255 & a.gzhead.os), a.gzhead.extra && a.gzhead.extra.length && (l(a, 255 & a.gzhead.extra.length), l(a, a.gzhead.extra.length >> 8 & 255)), a.gzhead.hcrc && (t.adler = M(t.adler, a.pending_buf, a.pending, 0)), a.gzindex = 0, a.status = dt) : (l(a, 0), l(a, 0), l(a, 0), l(a, 0), l(a, 0), l(a, 9 === a.level ? 2 : a.strategy >= q || a.level < 2 ? 4 : 0), l(a, xt), a.status = mt);
						else {
							var d = Z + (a.w_bits - 8 << 4) << 8,
							f = -1;
							f = a.strategy >= q || a.level < 2 ? 0 : a.level < 6 ? 1 : 6 === a.level ? 2 : 3,
							d |= f << 6,
							0 !== a.strstart && (d |= ut),
							d += 31 - d % 31,
							a.status = mt,
							h(a, d),
							0 !== a.strstart && (h(a, t.adler >>> 16), h(a, 65535 & t.adler)),
							t.adler = 1
						}
					if (a.status === dt)
						if (a.gzhead.extra) {
							for (u = a.pending; a.gzindex < (65535 & a.gzhead.extra.length) && (a.pending !== a.pending_buf_size || (a.gzhead.hcrc && a.pending > u && (t.adler = M(t.adler, a.pending_buf, a.pending - u, u)), o(t), u = a.pending, a.pending !== a.pending_buf_size)); )
								l(a, 255 & a.gzhead.extra[a.gzindex]), a.gzindex++;
							a.gzhead.hcrc && a.pending > u && (t.adler = M(t.adler, a.pending_buf, a.pending - u, u)),
							a.gzindex === a.gzhead.extra.length && (a.gzindex = 0, a.status = ft)
						} else
							a.status = ft;
					if (a.status === ft)
						if (a.gzhead.name) {
							u = a.pending;
							do {
								if (a.pending === a.pending_buf_size && (a.gzhead.hcrc && a.pending > u && (t.adler = M(t.adler, a.pending_buf, a.pending - u, u)), o(t), u = a.pending, a.pending === a.pending_buf_size)) {
									c = 1;
									break
								}
								c = a.gzindex < a.gzhead.name.length ? 255 & a.gzhead.name.charCodeAt(a.gzindex++) : 0,
								l(a, c)
							} while (0 !== c);
							a.gzhead.hcrc && a.pending > u && (t.adler = M(t.adler, a.pending_buf, a.pending - u, u)),
							0 === c && (a.gzindex = 0, a.status = pt)
						} else
							a.status = pt;
					if (a.status === pt)
						if (a.gzhead.comment) {
							u = a.pending;
							do {
								if (a.pending === a.pending_buf_size && (a.gzhead.hcrc && a.pending > u && (t.adler = M(t.adler, a.pending_buf, a.pending - u, u)), o(t), u = a.pending, a.pending === a.pending_buf_size)) {
									c = 1;
									break
								}
								c = a.gzindex < a.gzhead.comment.length ? 255 & a.gzhead.comment.charCodeAt(a.gzindex++) : 0,
								l(a, c)
							} while (0 !== c);
							a.gzhead.hcrc && a.pending > u && (t.adler = M(t.adler, a.pending_buf, a.pending - u, u)),
							0 === c && (a.status = gt)
						} else
							a.status = gt;
					if (a.status === gt && (a.gzhead.hcrc ? (a.pending + 2 > a.pending_buf_size && o(t), a.pending + 2 <= a.pending_buf_size && (l(a, 255 & t.adler), l(a, t.adler >> 8 & 255), t.adler = 0, a.status = mt)) : a.status = mt), 0 !== a.pending) {
						if (o(t), 0 === t.avail_out)
							return a.last_flush = -1, L
					} else if (0 === t.avail_in && s(e) <= s(i) && e !== R)
						return n(t, W);
					if (a.status === vt && 0 !== t.avail_in)
						return n(t, W);
					if (0 !== t.avail_in || 0 !== a.lookahead || e !== O && a.status !== vt) {
						var p = a.strategy === q ? v(a, e) : a.strategy === U ? m(a, e) : S[a.level].func(a, e);
						if ((p === _t || p === wt) && (a.status = vt), p === bt || p === _t)
							return 0 === t.avail_out && (a.last_flush = -1), L;
						if (p === yt && (e === P ? D._tr_align(a) : e !== H && (D._tr_stored_block(a, 0, 0, !1), e === z && (r(a.head), 0 === a.lookahead && (a.strstart = 0, a.block_start = 0, a.insert = 0))), o(t), 0 === t.avail_out))
							return a.last_flush = -1, L
					}
					return e !== R ? L : a.wrap <= 0 ? j : (2 === a.wrap ? (l(a, 255 & t.adler), l(a, t.adler >> 8 & 255), l(a, t.adler >> 16 & 255), l(a, t.adler >> 24 & 255), l(a, 255 & t.total_in), l(a, t.total_in >> 8 & 255), l(a, t.total_in >> 16 & 255), l(a, t.total_in >> 24 & 255)) : (h(a, t.adler >>> 16), h(a, 65535 & t.adler)), o(t), a.wrap > 0 && (a.wrap = -a.wrap), 0 !== a.pending ? L : j)
				}
				function T(t) {
					var e;
					return t && t.state ? (e = t.state.status, e !== ct && e !== dt && e !== ft && e !== pt && e !== gt && e !== mt && e !== vt ? n(t, B) : (t.state = null, e === mt ? n(t, F) : L)) : B
				}
				var S,
				I = t("../utils/common"),
				D = t("./trees"),
				A = t("./adler32"),
				M = t("./crc32"),
				N = t("./messages"),
				O = 0,
				P = 1,
				z = 3,
				R = 4,
				H = 5,
				L = 0,
				j = 1,
				B = -2,
				F = -3,
				W = -5,
				$ = -1,
				V = 1,
				q = 2,
				U = 3,
				Y = 4,
				K = 0,
				X = 2,
				Z = 8,
				G = 9,
				J = 15,
				Q = 8,
				tt = 29,
				et = 256,
				it = et + 1 + tt,
				nt = 30,
				st = 19,
				rt = 2 * it + 1,
				ot = 15,
				at = 3,
				lt = 258,
				ht = lt + at + 1,
				ut = 32,
				ct = 42,
				dt = 69,
				ft = 73,
				pt = 91,
				gt = 103,
				mt = 113,
				vt = 666,
				bt = 1,
				yt = 2,
				_t = 3,
				wt = 4,
				xt = 3,
				kt = function (t, e, i, n, s) {
					this.good_length = t,
					this.max_lazy = e,
					this.nice_length = i,
					this.max_chain = n,
					this.func = s
				};
				S = [new kt(0, 0, 0, 0, f), new kt(4, 4, 8, 4, p), new kt(4, 5, 16, 8, p), new kt(4, 6, 32, 32, p), new kt(4, 4, 16, 16, g), new kt(8, 16, 32, 32, g), new kt(8, 16, 128, 128, g), new kt(8, 32, 128, 256, g), new kt(32, 128, 258, 1024, g), new kt(32, 258, 258, 4096, g)],
				i.deflateInit = C,
				i.deflateInit2 = k,
				i.deflateReset = w,
				i.deflateResetKeep = _,
				i.deflateSetHeader = x,
				i.deflate = E,
				i.deflateEnd = T,
				i.deflateInfo = "pako deflate (from Nodeca project)"
			}, {
				"../utils/common" : 27,
				"./adler32" : 29,
				"./crc32" : 31,
				"./messages" : 37,
				"./trees" : 38
			}
		],
		33 : [function (t, e) {
				"use strict";
				function i() {
					this.text = 0,
					this.time = 0,
					this.xflags = 0,
					this.os = 0,
					this.extra = null,
					this.extra_len = 0,
					this.name = "",
					this.comment = "",
					this.hcrc = 0,
					this.done = !1
				}
				e.exports = i
			}, {}

		],
		34 : [function (t, e) {
				"use strict";
				var i = 30,
				n = 12;
				e.exports = function (t, e) {
					var s,
					r,
					o,
					a,
					l,
					h,
					u,
					c,
					d,
					f,
					p,
					g,
					m,
					v,
					b,
					y,
					_,
					w,
					x,
					k,
					C,
					E,
					T,
					S,
					I;
					s = t.state,
					r = t.next_in,
					S = t.input,
					o = r + (t.avail_in - 5),
					a = t.next_out,
					I = t.output,
					l = a - (e - t.avail_out),
					h = a + (t.avail_out - 257),
					u = s.dmax,
					c = s.wsize,
					d = s.whave,
					f = s.wnext,
					p = s.window,
					g = s.hold,
					m = s.bits,
					v = s.lencode,
					b = s.distcode,
					y = (1 << s.lenbits) - 1,
					_ = (1 << s.distbits) - 1;
					t : do {
						15 > m && (g += S[r++] << m, m += 8, g += S[r++] << m, m += 8),
						w = v[g & y];
						e : for (; ; ) {
							if (x = w >>> 24, g >>>= x, m -= x, x = w >>> 16 & 255, 0 === x)
								I[a++] = 65535 & w;
							else {
								if (!(16 & x)) {
									if (0 === (64 & x)) {
										w = v[(65535 & w) + (g & (1 << x) - 1)];
										continue e
									}
									if (32 & x) {
										s.mode = n;
										break t
									}
									t.msg = "invalid literal/length code",
									s.mode = i;
									break t
								}
								k = 65535 & w,
								x &= 15,
								x && (x > m && (g += S[r++] << m, m += 8), k += g & (1 << x) - 1, g >>>= x, m -= x),
								15 > m && (g += S[r++] << m, m += 8, g += S[r++] << m, m += 8),
								w = b[g & _];
								i : for (; ; ) {
									if (x = w >>> 24, g >>>= x, m -= x, x = w >>> 16 & 255, !(16 & x)) {
										if (0 === (64 & x)) {
											w = b[(65535 & w) + (g & (1 << x) - 1)];
											continue i
										}
										t.msg = "invalid distance code",
										s.mode = i;
										break t
									}
									if (C = 65535 & w, x &= 15, x > m && (g += S[r++] << m, m += 8, x > m && (g += S[r++] << m, m += 8)), C += g & (1 << x) - 1, C > u) {
										t.msg = "invalid distance too far back",
										s.mode = i;
										break t
									}
									if (g >>>= x, m -= x, x = a - l, C > x) {
										if (x = C - x, x > d && s.sane) {
											t.msg = "invalid distance too far back",
											s.mode = i;
											break t
										}
										if (E = 0, T = p, 0 === f) {
											if (E += c - x, k > x) {
												k -= x;
												do
													I[a++] = p[E++];
												while (--x);
												E = a - C,
												T = I
											}
										} else if (x > f) {
											if (E += c + f - x, x -= f, k > x) {
												k -= x;
												do
													I[a++] = p[E++];
												while (--x);
												if (E = 0, k > f) {
													x = f,
													k -= x;
													do
														I[a++] = p[E++];
													while (--x);
													E = a - C,
													T = I
												}
											}
										} else if (E += f - x, k > x) {
											k -= x;
											do
												I[a++] = p[E++];
											while (--x);
											E = a - C,
											T = I
										}
										for (; k > 2; )
											I[a++] = T[E++], I[a++] = T[E++], I[a++] = T[E++], k -= 3;
										k && (I[a++] = T[E++], k > 1 && (I[a++] = T[E++]))
									} else {
										E = a - C;
										do
											I[a++] = I[E++], I[a++] = I[E++], I[a++] = I[E++], k -= 3;
										while (k > 2);
										k && (I[a++] = I[E++], k > 1 && (I[a++] = I[E++]))
									}
									break
								}
							}
							break
						}
					} while (o > r && h > a);
					k = m >> 3,
					r -= k,
					m -= k << 3,
					g &= (1 << m) - 1,
					t.next_in = r,
					t.next_out = a,
					t.avail_in = o > r ? 5 + (o - r) : 5 - (r - o),
					t.avail_out = h > a ? 257 + (h - a) : 257 - (a - h),
					s.hold = g,
					s.bits = m
				}
			}, {}

		],
		35 : [function (t, e, i) {
				"use strict";
				function n(t) {
					return (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24)
				}
				function s() {
					this.mode = 0,
					this.last = !1,
					this.wrap = 0,
					this.havedict = !1,
					this.flags = 0,
					this.dmax = 0,
					this.check = 0,
					this.total = 0,
					this.head = null,
					this.wbits = 0,
					this.wsize = 0,
					this.whave = 0,
					this.wnext = 0,
					this.window = null,
					this.hold = 0,
					this.bits = 0,
					this.length = 0,
					this.offset = 0,
					this.extra = 0,
					this.lencode = null,
					this.distcode = null,
					this.lenbits = 0,
					this.distbits = 0,
					this.ncode = 0,
					this.nlen = 0,
					this.ndist = 0,
					this.have = 0,
					this.next = null,
					this.lens = new v.Buf16(320),
					this.work = new v.Buf16(288),
					this.lendyn = null,
					this.distdyn = null,
					this.sane = 0,
					this.back = 0,
					this.was = 0
				}
				function r(t) {
					var e;
					return t && t.state ? (e = t.state, t.total_in = t.total_out = e.total = 0, t.msg = "", e.wrap && (t.adler = 1 & e.wrap), e.mode = R, e.last = 0, e.havedict = 0, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new v.Buf32(pt), e.distcode = e.distdyn = new v.Buf32(gt), e.sane = 1, e.back = -1, I) : M
				}
				function o(t) {
					var e;
					return t && t.state ? (e = t.state, e.wsize = 0, e.whave = 0, e.wnext = 0, r(t)) : M
				}
				function a(t, e) {
					var i,
					n;
					return t && t.state ? (n = t.state, 0 > e ? (i = 0, e = -e) : (i = (e >> 4) + 1, 48 > e && (e &= 15)), e && (8 > e || e > 15) ? M : (null !== n.window && n.wbits !== e && (n.window = null), n.wrap = i, n.wbits = e, o(t))) : M
				}
				function l(t, e) {
					var i,
					n;
					return t ? (n = new s, t.state = n, n.window = null, i = a(t, e), i !== I && (t.state = null), i) : M
				}
				function h(t) {
					return l(t, vt)
				}
				function u(t) {
					if (bt) {
						var e;
						for (g = new v.Buf32(512), m = new v.Buf32(32), e = 0; 144 > e; )
							t.lens[e++] = 8;
						for (; 256 > e; )
							t.lens[e++] = 9;
						for (; 280 > e; )
							t.lens[e++] = 7;
						for (; 288 > e; )
							t.lens[e++] = 8;
						for (w(k, t.lens, 0, 288, g, 0, t.work, {
								bits : 9
							}), e = 0; 32 > e; )
							t.lens[e++] = 5;
						w(C, t.lens, 0, 32, m, 0, t.work, {
							bits : 5
						}),
						bt = !1
					}
					t.lencode = g,
					t.lenbits = 9,
					t.distcode = m,
					t.distbits = 5
				}
				function c(t, e, i, n) {
					var s,
					r = t.state;
					return null === r.window && (r.wsize = 1 << r.wbits, r.wnext = 0, r.whave = 0, r.window = new v.Buf8(r.wsize)),
					n >= r.wsize ? (v.arraySet(r.window, e, i - r.wsize, r.wsize, 0), r.wnext = 0, r.whave = r.wsize) : (s = r.wsize - r.wnext, s > n && (s = n), v.arraySet(r.window, e, i - n, s, r.wnext), n -= s, n ? (v.arraySet(r.window, e, i - n, n, 0), r.wnext = n, r.whave = r.wsize) : (r.wnext += s, r.wnext === r.wsize && (r.wnext = 0), r.whave < r.wsize && (r.whave += s))),
					0
				}
				function d(t, e) {
					var i,
					s,
					r,
					o,
					a,
					l,
					h,
					d,
					f,
					p,
					g,
					m,
					pt,
					gt,
					mt,
					vt,
					bt,
					yt,
					_t,
					wt,
					xt,
					kt,
					Ct,
					Et,
					Tt = 0,
					St = new v.Buf8(4),
					It = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
					if (!t || !t.state || !t.output || !t.input && 0 !== t.avail_in)
						return M;
					i = t.state,
					i.mode === Y && (i.mode = K),
					a = t.next_out,
					r = t.output,
					h = t.avail_out,
					o = t.next_in,
					s = t.input,
					l = t.avail_in,
					d = i.hold,
					f = i.bits,
					p = l,
					g = h,
					kt = I;
					t : for (; ; )
						switch (i.mode) {
						case R:
							if (0 === i.wrap) {
								i.mode = K;
								break
							}
							for (; 16 > f; ) {
								if (0 === l)
									break t;
								l--,
								d += s[o++] << f,
								f += 8
							}
							if (2 & i.wrap && 35615 === d) {
								i.check = 0,
								St[0] = 255 & d,
								St[1] = d >>> 8 & 255,
								i.check = y(i.check, St, 2, 0),
								d = 0,
								f = 0,
								i.mode = H;
								break
							}
							if (i.flags = 0, i.head && (i.head.done = !1), !(1 & i.wrap) || (((255 & d) << 8) + (d >> 8)) % 31) {
								t.msg = "incorrect header check",
								i.mode = ct;
								break
							}
							if ((15 & d) !== z) {
								t.msg = "unknown compression method",
								i.mode = ct;
								break
							}
							if (d >>>= 4, f -= 4, xt = (15 & d) + 8, 0 === i.wbits)
								i.wbits = xt;
							else if (xt > i.wbits) {
								t.msg = "invalid window size",
								i.mode = ct;
								break
							}
							i.dmax = 1 << xt,
							t.adler = i.check = 1,
							i.mode = 512 & d ? q : Y,
							d = 0,
							f = 0;
							break;
						case H:
							for (; 16 > f; ) {
								if (0 === l)
									break t;
								l--,
								d += s[o++] << f,
								f += 8
							}
							if (i.flags = d, (255 & i.flags) !== z) {
								t.msg = "unknown compression method",
								i.mode = ct;
								break
							}
							if (57344 & i.flags) {
								t.msg = "unknown header flags set",
								i.mode = ct;
								break
							}
							i.head && (i.head.text = d >> 8 & 1),
							512 & i.flags && (St[0] = 255 & d, St[1] = d >>> 8 & 255, i.check = y(i.check, St, 2, 0)),
							d = 0,
							f = 0,
							i.mode = L;
						case L:
							for (; 32 > f; ) {
								if (0 === l)
									break t;
								l--,
								d += s[o++] << f,
								f += 8
							}
							i.head && (i.head.time = d),
							512 & i.flags && (St[0] = 255 & d, St[1] = d >>> 8 & 255, St[2] = d >>> 16 & 255, St[3] = d >>> 24 & 255, i.check = y(i.check, St, 4, 0)),
							d = 0,
							f = 0,
							i.mode = j;
						case j:
							for (; 16 > f; ) {
								if (0 === l)
									break t;
								l--,
								d += s[o++] << f,
								f += 8
							}
							i.head && (i.head.xflags = 255 & d, i.head.os = d >> 8),
							512 & i.flags && (St[0] = 255 & d, St[1] = d >>> 8 & 255, i.check = y(i.check, St, 2, 0)),
							d = 0,
							f = 0,
							i.mode = B;
						case B:
							if (1024 & i.flags) {
								for (; 16 > f; ) {
									if (0 === l)
										break t;
									l--,
									d += s[o++] << f,
									f += 8
								}
								i.length = d,
								i.head && (i.head.extra_len = d),
								512 & i.flags && (St[0] = 255 & d, St[1] = d >>> 8 & 255, i.check = y(i.check, St, 2, 0)),
								d = 0,
								f = 0
							} else
								i.head && (i.head.extra = null);
							i.mode = F;
						case F:
							if (1024 & i.flags && (m = i.length, m > l && (m = l), m && (i.head && (xt = i.head.extra_len - i.length, i.head.extra || (i.head.extra = new Array(i.head.extra_len)), v.arraySet(i.head.extra, s, o, m, xt)), 512 & i.flags && (i.check = y(i.check, s, m, o)), l -= m, o += m, i.length -= m), i.length))
								break t;
							i.length = 0,
							i.mode = W;
						case W:
							if (2048 & i.flags) {
								if (0 === l)
									break t;
								m = 0;
								do
									xt = s[o + m++], i.head && xt && i.length < 65536 && (i.head.name += String.fromCharCode(xt));
								while (xt && l > m);
								if (512 & i.flags && (i.check = y(i.check, s, m, o)), l -= m, o += m, xt)
									break t
							} else
								i.head && (i.head.name = null);
							i.length = 0,
							i.mode = $;
						case $:
							if (4096 & i.flags) {
								if (0 === l)
									break t;
								m = 0;
								do
									xt = s[o + m++], i.head && xt && i.length < 65536 && (i.head.comment += String.fromCharCode(xt));
								while (xt && l > m);
								if (512 & i.flags && (i.check = y(i.check, s, m, o)), l -= m, o += m, xt)
									break t
							} else
								i.head && (i.head.comment = null);
							i.mode = V;
						case V:
							if (512 & i.flags) {
								for (; 16 > f; ) {
									if (0 === l)
										break t;
									l--,
									d += s[o++] << f,
									f += 8
								}
								if (d !== (65535 & i.check)) {
									t.msg = "header crc mismatch",
									i.mode = ct;
									break
								}
								d = 0,
								f = 0
							}
							i.head && (i.head.hcrc = i.flags >> 9 & 1, i.head.done = !0),
							t.adler = i.check = 0,
							i.mode = Y;
							break;
						case q:
							for (; 32 > f; ) {
								if (0 === l)
									break t;
								l--,
								d += s[o++] << f,
								f += 8
							}
							t.adler = i.check = n(d),
							d = 0,
							f = 0,
							i.mode = U;
						case U:
							if (0 === i.havedict)
								return t.next_out = a, t.avail_out = h, t.next_in = o, t.avail_in = l, i.hold = d, i.bits = f, A;
							t.adler = i.check = 1,
							i.mode = Y;
						case Y:
							if (e === T || e === S)
								break t;
						case K:
							if (i.last) {
								d >>>= 7 & f,
								f -= 7 & f,
								i.mode = lt;
								break
							}
							for (; 3 > f; ) {
								if (0 === l)
									break t;
								l--,
								d += s[o++] << f,
								f += 8
							}
							switch (i.last = 1 & d, d >>>= 1, f -= 1, 3 & d) {
							case 0:
								i.mode = X;
								break;
							case 1:
								if (u(i), i.mode = et, e === S) {
									d >>>= 2,
									f -= 2;
									break t
								}
								break;
							case 2:
								i.mode = J;
								break;
							case 3:
								t.msg = "invalid block type",
								i.mode = ct
							}
							d >>>= 2,
							f -= 2;
							break;
						case X:
							for (d >>>= 7 & f, f -= 7 & f; 32 > f; ) {
								if (0 === l)
									break t;
								l--,
								d += s[o++] << f,
								f += 8
							}
							if ((65535 & d) !== (d >>> 16^65535)) {
								t.msg = "invalid stored block lengths",
								i.mode = ct;
								break
							}
							if (i.length = 65535 & d, d = 0, f = 0, i.mode = Z, e === S)
								break t;
						case Z:
							i.mode = G;
						case G:
							if (m = i.length) {
								if (m > l && (m = l), m > h && (m = h), 0 === m)
									break t;
								v.arraySet(r, s, o, m, a),
								l -= m,
								o += m,
								h -= m,
								a += m,
								i.length -= m;
								break
							}
							i.mode = Y;
							break;
						case J:
							for (; 14 > f; ) {
								if (0 === l)
									break t;
								l--,
								d += s[o++] << f,
								f += 8
							}
							if (i.nlen = (31 & d) + 257, d >>>= 5, f -= 5, i.ndist = (31 & d) + 1, d >>>= 5, f -= 5, i.ncode = (15 & d) + 4, d >>>= 4, f -= 4, i.nlen > 286 || i.ndist > 30) {
								t.msg = "too many length or distance symbols",
								i.mode = ct;
								break
							}
							i.have = 0,
							i.mode = Q;
						case Q:
							for (; i.have < i.ncode; ) {
								for (; 3 > f; ) {
									if (0 === l)
										break t;
									l--,
									d += s[o++] << f,
									f += 8
								}
								i.lens[It[i.have++]] = 7 & d,
								d >>>= 3,
								f -= 3
							}
							for (; i.have < 19; )
								i.lens[It[i.have++]] = 0;
							if (i.lencode = i.lendyn, i.lenbits = 7, Ct = {
									bits : i.lenbits
								}, kt = w(x, i.lens, 0, 19, i.lencode, 0, i.work, Ct), i.lenbits = Ct.bits, kt) {
								t.msg = "invalid code lengths set",
								i.mode = ct;
								break
							}
							i.have = 0,
							i.mode = tt;
						case tt:
							for (; i.have < i.nlen + i.ndist; ) {
								for (; Tt = i.lencode[d & (1 << i.lenbits) - 1], mt = Tt >>> 24, vt = Tt >>> 16 & 255, bt = 65535 & Tt, !(f >= mt); ) {
									if (0 === l)
										break t;
									l--,
									d += s[o++] << f,
									f += 8
								}
								if (16 > bt)
									d >>>= mt, f -= mt, i.lens[i.have++] = bt;
								else {
									if (16 === bt) {
										for (Et = mt + 2; Et > f; ) {
											if (0 === l)
												break t;
											l--,
											d += s[o++] << f,
											f += 8
										}
										if (d >>>= mt, f -= mt, 0 === i.have) {
											t.msg = "invalid bit length repeat",
											i.mode = ct;
											break
										}
										xt = i.lens[i.have - 1],
										m = 3 + (3 & d),
										d >>>= 2,
										f -= 2
									} else if (17 === bt) {
										for (Et = mt + 3; Et > f; ) {
											if (0 === l)
												break t;
											l--,
											d += s[o++] << f,
											f += 8
										}
										d >>>= mt,
										f -= mt,
										xt = 0,
										m = 3 + (7 & d),
										d >>>= 3,
										f -= 3
									} else {
										for (Et = mt + 7; Et > f; ) {
											if (0 === l)
												break t;
											l--,
											d += s[o++] << f,
											f += 8
										}
										d >>>= mt,
										f -= mt,
										xt = 0,
										m = 11 + (127 & d),
										d >>>= 7,
										f -= 7
									}
									if (i.have + m > i.nlen + i.ndist) {
										t.msg = "invalid bit length repeat",
										i.mode = ct;
										break
									}
									for (; m--; )
										i.lens[i.have++] = xt
								}
							}
							if (i.mode === ct)
								break;
							if (0 === i.lens[256]) {
								t.msg = "invalid code -- missing end-of-block",
								i.mode = ct;
								break
							}
							if (i.lenbits = 9, Ct = {
									bits : i.lenbits
								}, kt = w(k, i.lens, 0, i.nlen, i.lencode, 0, i.work, Ct), i.lenbits = Ct.bits, kt) {
								t.msg = "invalid literal/lengths set",
								i.mode = ct;
								break
							}
							if (i.distbits = 6, i.distcode = i.distdyn, Ct = {
									bits : i.distbits
								}, kt = w(C, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, Ct), i.distbits = Ct.bits, kt) {
								t.msg = "invalid distances set",
								i.mode = ct;
								break
							}
							if (i.mode = et, e === S)
								break t;
						case et:
							i.mode = it;
						case it:
							if (l >= 6 && h >= 258) {
								t.next_out = a,
								t.avail_out = h,
								t.next_in = o,
								t.avail_in = l,
								i.hold = d,
								i.bits = f,
								_(t, g),
								a = t.next_out,
								r = t.output,
								h = t.avail_out,
								o = t.next_in,
								s = t.input,
								l = t.avail_in,
								d = i.hold,
								f = i.bits,
								i.mode === Y && (i.back = -1);
								break
							}
							for (i.back = 0; Tt = i.lencode[d & (1 << i.lenbits) - 1], mt = Tt >>> 24, vt = Tt >>> 16 & 255, bt = 65535 & Tt, !(f >= mt); ) {
								if (0 === l)
									break t;
								l--,
								d += s[o++] << f,
								f += 8
							}
							if (vt && 0 === (240 & vt)) {
								for (yt = mt, _t = vt, wt = bt; Tt = i.lencode[wt + ((d & (1 << yt + _t) - 1) >> yt)], mt = Tt >>> 24, vt = Tt >>> 16 & 255, bt = 65535 & Tt, !(f >= yt + mt); ) {
									if (0 === l)
										break t;
									l--,
									d += s[o++] << f,
									f += 8
								}
								d >>>= yt,
								f -= yt,
								i.back += yt
							}
							if (d >>>= mt, f -= mt, i.back += mt, i.length = bt, 0 === vt) {
								i.mode = at;
								break
							}
							if (32 & vt) {
								i.back = -1,
								i.mode = Y;
								break
							}
							if (64 & vt) {
								t.msg = "invalid literal/length code",
								i.mode = ct;
								break
							}
							i.extra = 15 & vt,
							i.mode = nt;
						case nt:
							if (i.extra) {
								for (Et = i.extra; Et > f; ) {
									if (0 === l)
										break t;
									l--,
									d += s[o++] << f,
									f += 8
								}
								i.length += d & (1 << i.extra) - 1,
								d >>>= i.extra,
								f -= i.extra,
								i.back += i.extra
							}
							i.was = i.length,
							i.mode = st;
						case st:
							for (; Tt = i.distcode[d & (1 << i.distbits) - 1], mt = Tt >>> 24, vt = Tt >>> 16 & 255, bt = 65535 & Tt, !(f >= mt); ) {
								if (0 === l)
									break t;
								l--,
								d += s[o++] << f,
								f += 8
							}
							if (0 === (240 & vt)) {
								for (yt = mt, _t = vt, wt = bt; Tt = i.distcode[wt + ((d & (1 << yt + _t) - 1) >> yt)], mt = Tt >>> 24, vt = Tt >>> 16 & 255, bt = 65535 & Tt, !(f >= yt + mt); ) {
									if (0 === l)
										break t;
									l--,
									d += s[o++] << f,
									f += 8
								}
								d >>>= yt,
								f -= yt,
								i.back += yt
							}
							if (d >>>= mt, f -= mt, i.back += mt, 64 & vt) {
								t.msg = "invalid distance code",
								i.mode = ct;
								break
							}
							i.offset = bt,
							i.extra = 15 & vt,
							i.mode = rt;
						case rt:
							if (i.extra) {
								for (Et = i.extra; Et > f; ) {
									if (0 === l)
										break t;
									l--,
									d += s[o++] << f,
									f += 8
								}
								i.offset += d & (1 << i.extra) - 1,
								d >>>= i.extra,
								f -= i.extra,
								i.back += i.extra
							}
							if (i.offset > i.dmax) {
								t.msg = "invalid distance too far back",
								i.mode = ct;
								break
							}
							i.mode = ot;
						case ot:
							if (0 === h)
								break t;
							if (m = g - h, i.offset > m) {
								if (m = i.offset - m, m > i.whave && i.sane) {
									t.msg = "invalid distance too far back",
									i.mode = ct;
									break
								}
								m > i.wnext ? (m -= i.wnext, pt = i.wsize - m) : pt = i.wnext - m,
								m > i.length && (m = i.length),
								gt = i.window
							} else
								gt = r, pt = a - i.offset, m = i.length;
							m > h && (m = h),
							h -= m,
							i.length -= m;
							do
								r[a++] = gt[pt++];
							while (--m);
							0 === i.length && (i.mode = it);
							break;
						case at:
							if (0 === h)
								break t;
							r[a++] = i.length,
							h--,
							i.mode = it;
							break;
						case lt:
							if (i.wrap) {
								for (; 32 > f; ) {
									if (0 === l)
										break t;
									l--,
									d |= s[o++] << f,
									f += 8
								}
								if (g -= h, t.total_out += g, i.total += g, g && (t.adler = i.check = i.flags ? y(i.check, r, g, a - g) : b(i.check, r, g, a - g)), g = h, (i.flags ? d : n(d)) !== i.check) {
									t.msg = "incorrect data check",
									i.mode = ct;
									break
								}
								d = 0,
								f = 0
							}
							i.mode = ht;
						case ht:
							if (i.wrap && i.flags) {
								for (; 32 > f; ) {
									if (0 === l)
										break t;
									l--,
									d += s[o++] << f,
									f += 8
								}
								if (d !== (4294967295 & i.total)) {
									t.msg = "incorrect length check",
									i.mode = ct;
									break
								}
								d = 0,
								f = 0
							}
							i.mode = ut;
						case ut:
							kt = D;
							break t;
						case ct:
							kt = N;
							break t;
						case dt:
							return O;
						case ft:
						default:
							return M
						}
					return t.next_out = a,
					t.avail_out = h,
					t.next_in = o,
					t.avail_in = l,
					i.hold = d,
					i.bits = f,
					(i.wsize || g !== t.avail_out && i.mode < ct && (i.mode < lt || e !== E)) && c(t, t.output, t.next_out, g - t.avail_out) ? (i.mode = dt, O) : (p -= t.avail_in, g -= t.avail_out, t.total_in += p, t.total_out += g, i.total += g, i.wrap && g && (t.adler = i.check = i.flags ? y(i.check, r, g, t.next_out - g) : b(i.check, r, g, t.next_out - g)), t.data_type = i.bits + (i.last ? 64 : 0) + (i.mode === Y ? 128 : 0) + (i.mode === et || i.mode === Z ? 256 : 0), (0 === p && 0 === g || e === E) && kt === I && (kt = P), kt)
				}
				function f(t) {
					if (!t || !t.state)
						return M;
					var e = t.state;
					return e.window && (e.window = null),
					t.state = null,
					I
				}
				function p(t, e) {
					var i;
					return t && t.state ? (i = t.state, 0 === (2 & i.wrap) ? M : (i.head = e, e.done = !1, I)) : M
				}
				var g,
				m,
				v = t("../utils/common"),
				b = t("./adler32"),
				y = t("./crc32"),
				_ = t("./inffast"),
				w = t("./inftrees"),
				x = 0,
				k = 1,
				C = 2,
				E = 4,
				T = 5,
				S = 6,
				I = 0,
				D = 1,
				A = 2,
				M = -2,
				N = -3,
				O = -4,
				P = -5,
				z = 8,
				R = 1,
				H = 2,
				L = 3,
				j = 4,
				B = 5,
				F = 6,
				W = 7,
				$ = 8,
				V = 9,
				q = 10,
				U = 11,
				Y = 12,
				K = 13,
				X = 14,
				Z = 15,
				G = 16,
				J = 17,
				Q = 18,
				tt = 19,
				et = 20,
				it = 21,
				nt = 22,
				st = 23,
				rt = 24,
				ot = 25,
				at = 26,
				lt = 27,
				ht = 28,
				ut = 29,
				ct = 30,
				dt = 31,
				ft = 32,
				pt = 852,
				gt = 592,
				mt = 15,
				vt = mt,
				bt = !0;
				i.inflateReset = o,
				i.inflateReset2 = a,
				i.inflateResetKeep = r,
				i.inflateInit = h,
				i.inflateInit2 = l,
				i.inflate = d,
				i.inflateEnd = f,
				i.inflateGetHeader = p,
				i.inflateInfo = "pako inflate (from Nodeca project)"
			}, {
				"../utils/common" : 27,
				"./adler32" : 29,
				"./crc32" : 31,
				"./inffast" : 34,
				"./inftrees" : 36
			}
		],
		36 : [function (t, e) {
				"use strict";
				var i = t("../utils/common"),
				n = 15,
				s = 852,
				r = 592,
				o = 0,
				a = 1,
				l = 2,
				h = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
				u = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
				c = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
				d = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
				e.exports = function (t, e, f, p, g, m, v, b) {
					var y,
					_,
					w,
					x,
					k,
					C,
					E,
					T,
					S,
					I = b.bits,
					D = 0,
					A = 0,
					M = 0,
					N = 0,
					O = 0,
					P = 0,
					z = 0,
					R = 0,
					H = 0,
					L = 0,
					j = null,
					B = 0,
					F = new i.Buf16(n + 1),
					W = new i.Buf16(n + 1),
					$ = null,
					V = 0;
					for (D = 0; n >= D; D++)
						F[D] = 0;
					for (A = 0; p > A; A++)
						F[e[f + A]]++;
					for (O = I, N = n; N >= 1 && 0 === F[N]; N--);
					if (O > N && (O = N), 0 === N)
						return g[m++] = 20971520, g[m++] = 20971520, b.bits = 1, 0;
					for (M = 1; N > M && 0 === F[M]; M++);
					for (M > O && (O = M), R = 1, D = 1; n >= D; D++)
						if (R <<= 1, R -= F[D], 0 > R)
							return -1;
					if (R > 0 && (t === o || 1 !== N))
						return -1;
					for (W[1] = 0, D = 1; n > D; D++)
						W[D + 1] = W[D] + F[D];
					for (A = 0; p > A; A++)
						0 !== e[f + A] && (v[W[e[f + A]]++] = A);
					if (t === o ? (j = $ = v, C = 19) : t === a ? (j = h, B -= 257, $ = u, V -= 257, C = 256) : (j = c, $ = d, C = -1), L = 0, A = 0, D = M, k = m, P = O, z = 0, w = -1, H = 1 << O, x = H - 1, t === a && H > s || t === l && H > r)
						return 1;
					for (var q = 0; ; ) {
						q++,
						E = D - z,
						v[A] < C ? (T = 0, S = v[A]) : v[A] > C ? (T = $[V + v[A]], S = j[B + v[A]]) : (T = 96, S = 0),
						y = 1 << D - z,
						_ = 1 << P,
						M = _;
						do
							_ -= y, g[k + (L >> z) + _] = E << 24 | T << 16 | S | 0;
						while (0 !== _);
						for (y = 1 << D - 1; L & y; )
							y >>= 1;
						if (0 !== y ? (L &= y - 1, L += y) : L = 0, A++, 0 === --F[D]) {
							if (D === N)
								break;
							D = e[f + v[A]]
						}
						if (D > O && (L & x) !== w) {
							for (0 === z && (z = O), k += M, P = D - z, R = 1 << P; N > P + z && (R -= F[P + z], !(0 >= R)); )
								P++, R <<= 1;
							if (H += 1 << P, t === a && H > s || t === l && H > r)
								return 1;
							w = L & x,
							g[w] = O << 24 | P << 16 | k - m | 0
						}
					}
					return 0 !== L && (g[k + L] = D - z << 24 | 64 << 16 | 0),
					b.bits = O,
					0
				}
			}, {
				"../utils/common" : 27
			}
		],
		37 : [function (t, e) {
				"use strict";
				e.exports = {
					2 : "need dictionary",
					1 : "stream end",
					0 : "",
					"-1" : "file error",
					"-2" : "stream error",
					"-3" : "data error",
					"-4" : "insufficient memory",
					"-5" : "buffer error",
					"-6" : "incompatible version"
				}
			}, {}

		],
		38 : [function (t, e, i) {
				"use strict";
				function n(t) {
					for (var e = t.length; --e >= 0; )
						t[e] = 0
				}
				function s(t) {
					return 256 > t ? ot[t] : ot[256 + (t >>> 7)]
				}
				function r(t, e) {
					t.pending_buf[t.pending++] = 255 & e,
					t.pending_buf[t.pending++] = e >>> 8 & 255
				}
				function o(t, e, i) {
					t.bi_valid > Y - i ? (t.bi_buf |= e << t.bi_valid & 65535, r(t, t.bi_buf), t.bi_buf = e >> Y - t.bi_valid, t.bi_valid += i - Y) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += i)
				}
				function a(t, e, i) {
					o(t, i[2 * e], i[2 * e + 1])
				}
				function l(t, e) {
					var i = 0;
					do
						i |= 1 & t, t >>>= 1, i <<= 1;
					while (--e > 0);
					return i >>> 1
				}
				function h(t) {
					16 === t.bi_valid ? (r(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8)
				}
				function u(t, e) {
					var i,
					n,
					s,
					r,
					o,
					a,
					l = e.dyn_tree,
					h = e.max_code,
					u = e.stat_desc.static_tree,
					c = e.stat_desc.has_stree,
					d = e.stat_desc.extra_bits,
					f = e.stat_desc.extra_base,
					p = e.stat_desc.max_length,
					g = 0;
					for (r = 0; U >= r; r++)
						t.bl_count[r] = 0;
					for (l[2 * t.heap[t.heap_max] + 1] = 0, i = t.heap_max + 1; q > i; i++)
						n = t.heap[i], r = l[2 * l[2 * n + 1] + 1] + 1, r > p && (r = p, g++), l[2 * n + 1] = r, n > h || (t.bl_count[r]++, o = 0, n >= f && (o = d[n - f]), a = l[2 * n], t.opt_len += a * (r + o), c && (t.static_len += a * (u[2 * n + 1] + o)));
					if (0 !== g) {
						do {
							for (r = p - 1; 0 === t.bl_count[r]; )
								r--;
							t.bl_count[r]--,
							t.bl_count[r + 1] += 2,
							t.bl_count[p]--,
							g -= 2
						} while (g > 0);
						for (r = p; 0 !== r; r--)
							for (n = t.bl_count[r]; 0 !== n; )
								s = t.heap[--i], s > h || (l[2 * s + 1] !== r && (t.opt_len += (r - l[2 * s + 1]) * l[2 * s], l[2 * s + 1] = r), n--)
					}
				}
				function c(t, e, i) {
					var n,
					s,
					r = new Array(U + 1),
					o = 0;
					for (n = 1; U >= n; n++)
						r[n] = o = o + i[n - 1] << 1;
					for (s = 0; e >= s; s++) {
						var a = t[2 * s + 1];
						0 !== a && (t[2 * s] = l(r[a]++, a))
					}
				}
				function d() {
					var t,
					e,
					i,
					n,
					s,
					r = new Array(U + 1);
					for (i = 0, n = 0; B - 1 > n; n++)
						for (lt[n] = i, t = 0; t < 1 << Q[n]; t++)
							at[i++] = n;
					for (at[i - 1] = n, s = 0, n = 0; 16 > n; n++)
						for (ht[n] = s, t = 0; t < 1 << tt[n]; t++)
							ot[s++] = n;
					for (s >>= 7; $ > n; n++)
						for (ht[n] = s << 7, t = 0; t < 1 << tt[n] - 7; t++)
							ot[256 + s++] = n;
					for (e = 0; U >= e; e++)
						r[e] = 0;
					for (t = 0; 143 >= t; )
						st[2 * t + 1] = 8, t++, r[8]++;
					for (; 255 >= t; )
						st[2 * t + 1] = 9, t++, r[9]++;
					for (; 279 >= t; )
						st[2 * t + 1] = 7, t++, r[7]++;
					for (; 287 >= t; )
						st[2 * t + 1] = 8, t++, r[8]++;
					for (c(st, W + 1, r), t = 0; $ > t; t++)
						rt[2 * t + 1] = 5, rt[2 * t] = l(t, 5);
					ut = new ft(st, Q, F + 1, W, U),
					ct = new ft(rt, tt, 0, $, U),
					dt = new ft(new Array(0), et, 0, V, K)
				}
				function f(t) {
					var e;
					for (e = 0; W > e; e++)
						t.dyn_ltree[2 * e] = 0;
					for (e = 0; $ > e; e++)
						t.dyn_dtree[2 * e] = 0;
					for (e = 0; V > e; e++)
						t.bl_tree[2 * e] = 0;
					t.dyn_ltree[2 * X] = 1,
					t.opt_len = t.static_len = 0,
					t.last_lit = t.matches = 0
				}
				function p(t) {
					t.bi_valid > 8 ? r(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf),
					t.bi_buf = 0,
					t.bi_valid = 0
				}
				function g(t, e, i, n) {
					p(t),
					n && (r(t, i), r(t, ~i)),
					A.arraySet(t.pending_buf, t.window, e, i, t.pending),
					t.pending += i
				}
				function m(t, e, i, n) {
					var s = 2 * e,
					r = 2 * i;
					return t[s] < t[r] || t[s] === t[r] && n[e] <= n[i]
				}
				function v(t, e, i) {
					for (var n = t.heap[i], s = i << 1; s <= t.heap_len && (s < t.heap_len && m(e, t.heap[s + 1], t.heap[s], t.depth) && s++, !m(e, n, t.heap[s], t.depth)); )
						t.heap[i] = t.heap[s], i = s, s <<= 1;
					t.heap[i] = n
				}
				function b(t, e, i) {
					var n,
					r,
					l,
					h,
					u = 0;
					if (0 !== t.last_lit)
						do
							n = t.pending_buf[t.d_buf + 2 * u] << 8 | t.pending_buf[t.d_buf + 2 * u + 1], r = t.pending_buf[t.l_buf + u], u++, 0 === n ? a(t, r, e) : (l = at[r], a(t, l + F + 1, e), h = Q[l], 0 !== h && (r -= lt[l], o(t, r, h)), n--, l = s(n), a(t, l, i), h = tt[l], 0 !== h && (n -= ht[l], o(t, n, h)));
						while (u < t.last_lit);
					a(t, X, e)
				}
				function y(t, e) {
					var i,
					n,
					s,
					r = e.dyn_tree,
					o = e.stat_desc.static_tree,
					a = e.stat_desc.has_stree,
					l = e.stat_desc.elems,
					h = -1;
					for (t.heap_len = 0, t.heap_max = q, i = 0; l > i; i++)
						0 !== r[2 * i] ? (t.heap[++t.heap_len] = h = i, t.depth[i] = 0) : r[2 * i + 1] = 0;
					for (; t.heap_len < 2; )
						s = t.heap[++t.heap_len] = 2 > h ? ++h : 0, r[2 * s] = 1, t.depth[s] = 0, t.opt_len--, a && (t.static_len -= o[2 * s + 1]);
					for (e.max_code = h, i = t.heap_len >> 1; i >= 1; i--)
						v(t, r, i);
					s = l;
					do
						i = t.heap[1], t.heap[1] = t.heap[t.heap_len--], v(t, r, 1), n = t.heap[1], t.heap[--t.heap_max] = i, t.heap[--t.heap_max] = n, r[2 * s] = r[2 * i] + r[2 * n], t.depth[s] = (t.depth[i] >= t.depth[n] ? t.depth[i] : t.depth[n]) + 1, r[2 * i + 1] = r[2 * n + 1] = s, t.heap[1] = s++, v(t, r, 1);
					while (t.heap_len >= 2);
					t.heap[--t.heap_max] = t.heap[1],
					u(t, e),
					c(r, h, t.bl_count)
				}
				function _(t, e, i) {
					var n,
					s,
					r = -1,
					o = e[1],
					a = 0,
					l = 7,
					h = 4;
					for (0 === o && (l = 138, h = 3), e[2 * (i + 1) + 1] = 65535, n = 0; i >= n; n++)
						s = o, o = e[2 * (n + 1) + 1], ++a < l && s === o || (h > a ? t.bl_tree[2 * s] += a : 0 !== s ? (s !== r && t.bl_tree[2 * s]++, t.bl_tree[2 * Z]++) : 10 >= a ? t.bl_tree[2 * G]++ : t.bl_tree[2 * J]++, a = 0, r = s, 0 === o ? (l = 138, h = 3) : s === o ? (l = 6, h = 3) : (l = 7, h = 4))
				}
				function w(t, e, i) {
					var n,
					s,
					r = -1,
					l = e[1],
					h = 0,
					u = 7,
					c = 4;
					for (0 === l && (u = 138, c = 3), n = 0; i >= n; n++)
						if (s = l, l = e[2 * (n + 1) + 1], !(++h < u && s === l)) {
							if (c > h) {
								do
									a(t, s, t.bl_tree);
								while (0 !== --h)
							} else
								0 !== s ? (s !== r && (a(t, s, t.bl_tree), h--), a(t, Z, t.bl_tree), o(t, h - 3, 2)) : 10 >= h ? (a(t, G, t.bl_tree), o(t, h - 3, 3)) : (a(t, J, t.bl_tree), o(t, h - 11, 7));
							h = 0,
							r = s,
							0 === l ? (u = 138, c = 3) : s === l ? (u = 6, c = 3) : (u = 7, c = 4)
						}
				}
				function x(t) {
					var e;
					for (_(t, t.dyn_ltree, t.l_desc.max_code), _(t, t.dyn_dtree, t.d_desc.max_code), y(t, t.bl_desc), e = V - 1; e >= 3 && 0 === t.bl_tree[2 * it[e] + 1]; e--);
					return t.opt_len += 3 * (e + 1) + 5 + 5 + 4,
					e
				}
				function k(t, e, i, n) {
					var s;
					for (o(t, e - 257, 5), o(t, i - 1, 5), o(t, n - 4, 4), s = 0; n > s; s++)
						o(t, t.bl_tree[2 * it[s] + 1], 3);
					w(t, t.dyn_ltree, e - 1),
					w(t, t.dyn_dtree, i - 1)
				}
				function C(t) {
					var e,
					i = 4093624447;
					for (e = 0; 31 >= e; e++, i >>>= 1)
						if (1 & i && 0 !== t.dyn_ltree[2 * e])
							return N;
					if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26])
						return O;
					for (e = 32; F > e; e++)
						if (0 !== t.dyn_ltree[2 * e])
							return O;
					return N
				}
				function E(t) {
					gt || (d(), gt = !0),
					t.l_desc = new pt(t.dyn_ltree, ut),
					t.d_desc = new pt(t.dyn_dtree, ct),
					t.bl_desc = new pt(t.bl_tree, dt),
					t.bi_buf = 0,
					t.bi_valid = 0,
					f(t)
				}
				function T(t, e, i, n) {
					o(t, (z << 1) + (n ? 1 : 0), 3),
					g(t, e, i, !0)
				}
				function S(t) {
					o(t, R << 1, 3),
					a(t, X, st),
					h(t)
				}
				function I(t, e, i, n) {
					var s,
					r,
					a = 0;
					t.level > 0 ? (t.strm.data_type === P && (t.strm.data_type = C(t)), y(t, t.l_desc), y(t, t.d_desc), a = x(t), s = t.opt_len + 3 + 7 >>> 3, r = t.static_len + 3 + 7 >>> 3, s >= r && (s = r)) : s = r = i + 5,
					s >= i + 4 && -1 !== e ? T(t, e, i, n) : t.strategy === M || r === s ? (o(t, (R << 1) + (n ? 1 : 0), 3), b(t, st, rt)) : (o(t, (H << 1) + (n ? 1 : 0), 3), k(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, a + 1), b(t, t.dyn_ltree, t.dyn_dtree)),
					f(t),
					n && p(t)
				}
				function D(t, e, i) {
					return t.pending_buf[t.d_buf + 2 * t.last_lit] = e >>> 8 & 255,
					t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e,
					t.pending_buf[t.l_buf + t.last_lit] = 255 & i,
					t.last_lit++,
					0 === e ? t.dyn_ltree[2 * i]++ : (t.matches++, e--, t.dyn_ltree[2 * (at[i] + F + 1)]++, t.dyn_dtree[2 * s(e)]++),
					t.last_lit === t.lit_bufsize - 1
				}
				var A = t("../utils/common"),
				M = 4,
				N = 0,
				O = 1,
				P = 2,
				z = 0,
				R = 1,
				H = 2,
				L = 3,
				j = 258,
				B = 29,
				F = 256,
				W = F + 1 + B,
				$ = 30,
				V = 19,
				q = 2 * W + 1,
				U = 15,
				Y = 16,
				K = 7,
				X = 256,
				Z = 16,
				G = 17,
				J = 18,
				Q = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
				tt = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
				et = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
				it = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
				nt = 512,
				st = new Array(2 * (W + 2));
				n(st);
				var rt = new Array(2 * $);
				n(rt);
				var ot = new Array(nt);
				n(ot);
				var at = new Array(j - L + 1);
				n(at);
				var lt = new Array(B);
				n(lt);
				var ht = new Array($);
				n(ht);
				var ut,
				ct,
				dt,
				ft = function (t, e, i, n, s) {
					this.static_tree = t,
					this.extra_bits = e,
					this.extra_base = i,
					this.elems = n,
					this.max_length = s,
					this.has_stree = t && t.length
				},
				pt = function (t, e) {
					this.dyn_tree = t,
					this.max_code = 0,
					this.stat_desc = e
				},
				gt = !1;
				i._tr_init = E,
				i._tr_stored_block = T,
				i._tr_flush_block = I,
				i._tr_tally = D,
				i._tr_align = S
			}, {
				"../utils/common" : 27
			}
		],
		39 : [function (t, e) {
				"use strict";
				function i() {
					this.input = null,
					this.next_in = 0,
					this.avail_in = 0,
					this.total_in = 0,
					this.output = null,
					this.next_out = 0,
					this.avail_out = 0,
					this.total_out = 0,
					this.msg = "",
					this.state = null,
					this.data_type = 2,
					this.adler = 0
				}
				e.exports = i
			}, {}

		]
	}, {}, [9])(9)
});
var saveAs = saveAs || function (t) {
	"use strict";
	if ("undefined" == typeof navigator || !/MSIE [1-9]\./.test(navigator.userAgent)) {
		var e = t.document,
		i = function () {
			return t.URL || t.webkitURL || t
		},
		n = e.createElementNS("http://www.w3.org/1999/xhtml", "a"),
		s = "download" in n,
		r = function (t) {
			var e = new MouseEvent("click");
			t.dispatchEvent(e)
		},
		o = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
		a = t.webkitRequestFileSystem,
		l = t.requestFileSystem || a || t.mozRequestFileSystem,
		h = function (e) {
			(t.setImmediate || t.setTimeout)(function () {
				throw e
			}, 0)
		},
		u = "application/octet-stream",
		c = 0,
		d = 500,
		f = function (e) {
			var n = function () {
				"string" == typeof e ? i().revokeObjectURL(e) : e.remove()
			};
			t.chrome ? n() : setTimeout(n, d)
		},
		p = function (t, e, i) {
			e = [].concat(e);
			for (var n = e.length; n--; ) {
				var s = t["on" + e[n]];
				if ("function" == typeof s)
					try {
						s.call(t, i || t)
					} catch (r) {
						h(r)
					}
			}
		},
		g = function (t) {
			return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob(["\ufeff", t], {
				type : t.type
			}) : t
		},
		m = function (e, h, d) {
			d || (e = g(e));
			var m,
			v,
			b,
			y = this,
			_ = e.type,
			w = !1,
			x = function () {
				p(y, "writestart progress write writeend".split(" "))
			},
			k = function () {
				if (v && o && "undefined" != typeof FileReader) {
					var n = new FileReader;
					return n.onloadend = function () {
						var t = n.result;
						v.location.href = "data:attachment/file" + t.slice(t.search(/[,;]/)),
						y.readyState = y.DONE,
						x()
					},
					n.readAsDataURL(e),
					void(y.readyState = y.INIT)
				}
				if ((w || !m) && (m = i().createObjectURL(e)), v)
					v.location.href = m;
				else {
					var s = t.open(m, "_blank");
					void 0 == s && o && (t.location.href = m)
				}
				y.readyState = y.DONE,
				x(),
				f(m)
			},
			C = function (t) {
				return function () {
					return y.readyState !== y.DONE ? t.apply(this, arguments) : void 0
				}
			},
			E = {
				create : !0,
				exclusive : !1
			};
			return y.readyState = y.INIT,
			h || (h = "download"),
			s ? (m = i().createObjectURL(e), void setTimeout(function () {
					n.href = m,
					n.download = h,
					r(n),
					x(),
					f(m),
					y.readyState = y.DONE
				})) : (t.chrome && _ && _ !== u && (b = e.slice || e.webkitSlice, e = b.call(e, 0, e.size, u), w = !0), a && "download" !== h && (h += ".download"), (_ === u || a) && (v = t), l ? (c += e.size, void l(t.TEMPORARY, c, C(function (t) {
							t.root.getDirectory("saved", E, C(function (t) {
									var i = function () {
										t.getFile(h, E, C(function (t) {
												t.createWriter(C(function (i) {
														i.onwriteend = function (e) {
															v.location.href = t.toURL(),
															y.readyState = y.DONE,
															p(y, "writeend", e),
															f(t)
														},
														i.onerror = function () {
															var t = i.error;
															t.code !== t.ABORT_ERR && k()
														},
														"writestart progress write abort".split(" ").forEach(function (t) {
															i["on" + t] = y["on" + t]
														}),
														i.write(e),
														y.abort = function () {
															i.abort(),
															y.readyState = y.DONE
														},
														y.readyState = y.WRITING
													}), k)
											}), k)
									};
									t.getFile(h, {
										create : !1
									}, C(function (t) {
											t.remove(),
											i()
										}), C(function (t) {
											t.code === t.NOT_FOUND_ERR ? i() : k()
										}))
								}), k)
						}), k)) : void k())
		},
		v = m.prototype,
		b = function (t, e, i) {
			return new m(t, e, i)
		};
		return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function (t, e, i) {
			return i || (t = g(t)),
			navigator.msSaveOrOpenBlob(t, e || "download")
		}
		 : (v.abort = function () {
			var t = this;
			t.readyState = t.DONE,
			p(t, "abort")
		}, v.readyState = v.INIT = 0, v.WRITING = 1, v.DONE = 2, v.error = v.onwritestart = v.onprogress = v.onwrite = v.onabort = v.onerror = v.onwriteend = null, b)
	}
}
("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
"undefined" != typeof module && module.exports ? module.exports.saveAs = saveAs : "undefined" != typeof define && null !== define && null != define.amd && define([], function () {
		return saveAs
	}), function () {
	function t(t) {
		function e(e, i, n, s, r, o) {
			for (; r >= 0 && o > r; r += t) {
				var a = s ? s[r] : r;
				n = i(n, e[a], a, e)
			}
			return n
		}
		return function (i, n, s, r) {
			n = y(n, r, 4);
			var o = !T(i) && b.keys(i),
			a = (o || i).length,
			l = t > 0 ? 0 : a - 1;
			return arguments.length < 3 && (s = i[o ? o[l] : l], l += t),
			e(i, n, s, o, l, a)
		}
	}
	function e(t) {
		return function (e, i, n) {
			i = _(i, n);
			for (var s = E(e), r = t > 0 ? 0 : s - 1; r >= 0 && s > r; r += t)
				if (i(e[r], r, e))
					return r;
			return -1
		}
	}
	function i(t, e, i) {
		return function (n, s, r) {
			var o = 0,
			a = E(n);
			if ("number" == typeof r)
				t > 0 ? o = r >= 0 ? r : Math.max(r + a, o) : a = r >= 0 ? Math.min(r + 1, a) : r + a + 1;
			else if (i && r && a)
				return r = i(n, s),
				n[r] === s ? r : -1;
			if (s !== s)
				return r = e(u.call(n, o, a), b.isNaN), r >= 0 ? r + o : -1;
			for (r = t > 0 ? o : a - 1; r >= 0 && a > r; r += t)
				if (n[r] === s)
					return r;
			return -1
		}
	}
	function n(t, e) {
		var i = M.length,
		n = t.constructor,
		s = b.isFunction(n) && n.prototype || a,
		r = "constructor";
		for (b.has(t, r) && !b.contains(e, r) && e.push(r); i--; )
			r = M[i], r in t && t[r] !== s[r] && !b.contains(e, r) && e.push(r)
	}
	var s = this,
	r = s._,
	o = Array.prototype,
	a = Object.prototype,
	l = Function.prototype,
	h = o.push,
	u = o.slice,
	c = a.toString,
	d = a.hasOwnProperty,
	f = Array.isArray,
	p = Object.keys,
	g = l.bind,
	m = Object.create,
	v = function () {},
	b = function (t) {
		return t instanceof b ? t : this instanceof b ? void(this._wrapped = t) : new b(t)
	};
	"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = b), exports._ = b) : s._ = b,
	b.VERSION = "1.8.3";
	var y = function (t, e, i) {
		if (void 0 === e)
			return t;
		switch (null == i ? 3 : i) {
		case 1:
			return function (i) {
				return t.call(e, i)
			};
		case 2:
			return function (i, n) {
				return t.call(e, i, n)
			};
		case 3:
			return function (i, n, s) {
				return t.call(e, i, n, s)
			};
		case 4:
			return function (i, n, s, r) {
				return t.call(e, i, n, s, r)
			}
		}
		return function () {
			return t.apply(e, arguments)
		}
	},
	_ = function (t, e, i) {
		return null == t ? b.identity : b.isFunction(t) ? y(t, e, i) : b.isObject(t) ? b.matcher(t) : b.property(t)
	};
	b.iteratee = function (t, e) {
		return _(t, e, 1 / 0)
	};
	var w = function (t, e) {
		return function (i) {
			var n = arguments.length;
			if (2 > n || null == i)
				return i;
			for (var s = 1; n > s; s++)
				for (var r = arguments[s], o = t(r), a = o.length, l = 0; a > l; l++) {
					var h = o[l];
					e && void 0 !== i[h] || (i[h] = r[h])
				}
			return i
		}
	},
	x = function (t) {
		if (!b.isObject(t))
			return {};
		if (m)
			return m(t);
		v.prototype = t;
		var e = new v;
		return v.prototype = null,
		e
	},
	k = function (t) {
		return function (e) {
			return null == e ? void 0 : e[t]
		}
	},
	C = Math.pow(2, 53) - 1,
	E = k("length"),
	T = function (t) {
		var e = E(t);
		return "number" == typeof e && e >= 0 && C >= e
	};
	b.each = b.forEach = function (t, e, i) {
		e = y(e, i);
		var n,
		s;
		if (T(t))
			for (n = 0, s = t.length; s > n; n++)
				e(t[n], n, t);
		else {
			var r = b.keys(t);
			for (n = 0, s = r.length; s > n; n++)
				e(t[r[n]], r[n], t)
		}
		return t
	},
	b.map = b.collect = function (t, e, i) {
		e = _(e, i);
		for (var n = !T(t) && b.keys(t), s = (n || t).length, r = Array(s), o = 0; s > o; o++) {
			var a = n ? n[o] : o;
			r[o] = e(t[a], a, t)
		}
		return r
	},
	b.reduce = b.foldl = b.inject = t(1),
	b.reduceRight = b.foldr = t(-1),
	b.find = b.detect = function (t, e, i) {
		var n;
		return n = T(t) ? b.findIndex(t, e, i) : b.findKey(t, e, i),
		void 0 !== n && -1 !== n ? t[n] : void 0
	},
	b.filter = b.select = function (t, e, i) {
		var n = [];
		return e = _(e, i),
		b.each(t, function (t, i, s) {
			e(t, i, s) && n.push(t)
		}),
		n
	},
	b.reject = function (t, e, i) {
		return b.filter(t, b.negate(_(e)), i)
	},
	b.every = b.all = function (t, e, i) {
		e = _(e, i);
		for (var n = !T(t) && b.keys(t), s = (n || t).length, r = 0; s > r; r++) {
			var o = n ? n[r] : r;
			if (!e(t[o], o, t))
				return !1
		}
		return !0
	},
	b.some = b.any = function (t, e, i) {
		e = _(e, i);
		for (var n = !T(t) && b.keys(t), s = (n || t).length, r = 0; s > r; r++) {
			var o = n ? n[r] : r;
			if (e(t[o], o, t))
				return !0
		}
		return !1
	},
	b.contains = b.includes = b.include = function (t, e, i, n) {
		return T(t) || (t = b.values(t)),
		("number" != typeof i || n) && (i = 0),
		b.indexOf(t, e, i) >= 0
	},
	b.invoke = function (t, e) {
		var i = u.call(arguments, 2),
		n = b.isFunction(e);
		return b.map(t, function (t) {
			var s = n ? e : t[e];
			return null == s ? s : s.apply(t, i)
		})
	},
	b.pluck = function (t, e) {
		return b.map(t, b.property(e))
	},
	b.where = function (t, e) {
		return b.filter(t, b.matcher(e))
	},
	b.findWhere = function (t, e) {
		return b.find(t, b.matcher(e))
	},
	b.max = function (t, e, i) {
		var n,
		s,
		r = -1 / 0,
		o = -1 / 0;
		if (null == e && null != t) {
			t = T(t) ? t : b.values(t);
			for (var a = 0, l = t.length; l > a; a++)
				n = t[a], n > r && (r = n)
		} else
			e = _(e, i), b.each(t, function (t, i, n) {
				s = e(t, i, n),
				(s > o || s === -1 / 0 && r === -1 / 0) && (r = t, o = s)
			});
		return r
	},
	b.min = function (t, e, i) {
		var n,
		s,
		r = 1 / 0,
		o = 1 / 0;
		if (null == e && null != t) {
			t = T(t) ? t : b.values(t);
			for (var a = 0, l = t.length; l > a; a++)
				n = t[a], r > n && (r = n)
		} else
			e = _(e, i), b.each(t, function (t, i, n) {
				s = e(t, i, n),
				(o > s || 1 / 0 === s && 1 / 0 === r) && (r = t, o = s)
			});
		return r
	},
	b.shuffle = function (t) {
		for (var e, i = T(t) ? t : b.values(t), n = i.length, s = Array(n), r = 0; n > r; r++)
			e = b.random(0, r), e !== r && (s[r] = s[e]), s[e] = i[r];
		return s
	},
	b.sample = function (t, e, i) {
		return null == e || i ? (T(t) || (t = b.values(t)), t[b.random(t.length - 1)]) : b.shuffle(t).slice(0, Math.max(0, e))
	},
	b.sortBy = function (t, e, i) {
		return e = _(e, i),
		b.pluck(b.map(t, function (t, i, n) {
				return {
					value : t,
					index : i,
					criteria : e(t, i, n)
				}
			}).sort(function (t, e) {
				var i = t.criteria,
				n = e.criteria;
				if (i !== n) {
					if (i > n || void 0 === i)
						return 1;
					if (n > i || void 0 === n)
						return -1
				}
				return t.index - e.index
			}), "value")
	};
	var S = function (t) {
		return function (e, i, n) {
			var s = {};
			return i = _(i, n),
			b.each(e, function (n, r) {
				var o = i(n, r, e);
				t(s, n, o)
			}),
			s
		}
	};
	b.groupBy = S(function (t, e, i) {
			b.has(t, i) ? t[i].push(e) : t[i] = [e]
		}),
	b.indexBy = S(function (t, e, i) {
			t[i] = e
		}),
	b.countBy = S(function (t, e, i) {
			b.has(t, i) ? t[i]++ : t[i] = 1
		}),
	b.toArray = function (t) {
		return t ? b.isArray(t) ? u.call(t) : T(t) ? b.map(t, b.identity) : b.values(t) : []
	},
	b.size = function (t) {
		return null == t ? 0 : T(t) ? t.length : b.keys(t).length
	},
	b.partition = function (t, e, i) {
		e = _(e, i);
		var n = [],
		s = [];
		return b.each(t, function (t, i, r) {
			(e(t, i, r) ? n : s).push(t)
		}),
		[n, s]
	},
	b.first = b.head = b.take = function (t, e, i) {
		return null == t ? void 0 : null == e || i ? t[0] : b.initial(t, t.length - e)
	},
	b.initial = function (t, e, i) {
		return u.call(t, 0, Math.max(0, t.length - (null == e || i ? 1 : e)))
	},
	b.last = function (t, e, i) {
		return null == t ? void 0 : null == e || i ? t[t.length - 1] : b.rest(t, Math.max(0, t.length - e))
	},
	b.rest = b.tail = b.drop = function (t, e, i) {
		return u.call(t, null == e || i ? 1 : e)
	},
	b.compact = function (t) {
		return b.filter(t, b.identity)
	};
	var I = function (t, e, i, n) {
		for (var s = [], r = 0, o = n || 0, a = E(t); a > o; o++) {
			var l = t[o];
			if (T(l) && (b.isArray(l) || b.isArguments(l))) {
				e || (l = I(l, e, i));
				var h = 0,
				u = l.length;
				for (s.length += u; u > h; )
					s[r++] = l[h++]
			} else
				i || (s[r++] = l)
		}
		return s
	};
	b.flatten = function (t, e) {
		return I(t, e, !1)
	},
	b.without = function (t) {
		return b.difference(t, u.call(arguments, 1))
	},
	b.uniq = b.unique = function (t, e, i, n) {
		b.isBoolean(e) || (n = i, i = e, e = !1),
		null != i && (i = _(i, n));
		for (var s = [], r = [], o = 0, a = E(t); a > o; o++) {
			var l = t[o],
			h = i ? i(l, o, t) : l;
			e ? (o && r === h || s.push(l), r = h) : i ? b.contains(r, h) || (r.push(h), s.push(l)) : b.contains(s, l) || s.push(l)
		}
		return s
	},
	b.union = function () {
		return b.uniq(I(arguments, !0, !0))
	},
	b.intersection = function (t) {
		for (var e = [], i = arguments.length, n = 0, s = E(t); s > n; n++) {
			var r = t[n];
			if (!b.contains(e, r)) {
				for (var o = 1; i > o && b.contains(arguments[o], r); o++);
				o === i && e.push(r)
			}
		}
		return e
	},
	b.difference = function (t) {
		var e = I(arguments, !0, !0, 1);
		return b.filter(t, function (t) {
			return !b.contains(e, t)
		})
	},
	b.zip = function () {
		return b.unzip(arguments)
	},
	b.unzip = function (t) {
		for (var e = t && b.max(t, E).length || 0, i = Array(e), n = 0; e > n; n++)
			i[n] = b.pluck(t, n);
		return i
	},
	b.object = function (t, e) {
		for (var i = {}, n = 0, s = E(t); s > n; n++)
			e ? i[t[n]] = e[n] : i[t[n][0]] = t[n][1];
		return i
	},
	b.findIndex = e(1),
	b.findLastIndex = e(-1),
	b.sortedIndex = function (t, e, i, n) {
		i = _(i, n, 1);
		for (var s = i(e), r = 0, o = E(t); o > r; ) {
			var a = Math.floor((r + o) / 2);
			i(t[a]) < s ? r = a + 1 : o = a
		}
		return r
	},
	b.indexOf = i(1, b.findIndex, b.sortedIndex),
	b.lastIndexOf = i(-1, b.findLastIndex),
	b.range = function (t, e, i) {
		null == e && (e = t || 0, t = 0),
		i = i || 1;
		for (var n = Math.max(Math.ceil((e - t) / i), 0), s = Array(n), r = 0; n > r; r++, t += i)
			s[r] = t;
		return s
	};
	var D = function (t, e, i, n, s) {
		if (!(n instanceof e))
			return t.apply(i, s);
		var r = x(t.prototype),
		o = t.apply(r, s);
		return b.isObject(o) ? o : r
	};
	b.bind = function (t, e) {
		if (g && t.bind === g)
			return g.apply(t, u.call(arguments, 1));
		if (!b.isFunction(t))
			throw new TypeError("Bind must be called on a function");
		var i = u.call(arguments, 2),
		n = function () {
			return D(t, n, e, this, i.concat(u.call(arguments)))
		};
		return n
	},
	b.partial = function (t) {
		var e = u.call(arguments, 1),
		i = function () {
			for (var n = 0, s = e.length, r = Array(s), o = 0; s > o; o++)
				r[o] = e[o] === b ? arguments[n++] : e[o];
			for (; n < arguments.length; )
				r.push(arguments[n++]);
			return D(t, i, this, this, r)
		};
		return i
	},
	b.bindAll = function (t) {
		var e,
		i,
		n = arguments.length;
		if (1 >= n)
			throw new Error("bindAll must be passed function names");
		for (e = 1; n > e; e++)
			i = arguments[e], t[i] = b.bind(t[i], t);
		return t
	},
	b.memoize = function (t, e) {
		var i = function (n) {
			var s = i.cache,
			r = "" + (e ? e.apply(this, arguments) : n);
			return b.has(s, r) || (s[r] = t.apply(this, arguments)),
			s[r]
		};
		return i.cache = {},
		i
	},
	b.delay = function (t, e) {
		var i = u.call(arguments, 2);
		return setTimeout(function () {
			return t.apply(null, i)
		}, e)
	},
	b.defer = b.partial(b.delay, b, 1),
	b.throttle = function (t, e, i) {
		var n,
		s,
		r,
		o = null,
		a = 0;
		i || (i = {});
		var l = function () {
			a = i.leading === !1 ? 0 : b.now(),
			o = null,
			r = t.apply(n, s),
			o || (n = s = null)
		};
		return function () {
			var h = b.now();
			a || i.leading !== !1 || (a = h);
			var u = e - (h - a);
			return n = this,
			s = arguments,
			0 >= u || u > e ? (o && (clearTimeout(o), o = null), a = h, r = t.apply(n, s), o || (n = s = null)) : o || i.trailing === !1 || (o = setTimeout(l, u)),
			r
		}
	},
	b.debounce = function (t, e, i) {
		var n,
		s,
		r,
		o,
		a,
		l = function () {
			var h = b.now() - o;
			e > h && h >= 0 ? n = setTimeout(l, e - h) : (n = null, i || (a = t.apply(r, s), n || (r = s = null)))
		};
		return function () {
			r = this,
			s = arguments,
			o = b.now();
			var h = i && !n;
			return n || (n = setTimeout(l, e)),
			h && (a = t.apply(r, s), r = s = null),
			a
		}
	},
	b.wrap = function (t, e) {
		return b.partial(e, t)
	},
	b.negate = function (t) {
		return function () {
			return !t.apply(this, arguments)
		}
	},
	b.compose = function () {
		var t = arguments,
		e = t.length - 1;
		return function () {
			for (var i = e, n = t[e].apply(this, arguments); i--; )
				n = t[i].call(this, n);
			return n
		}
	},
	b.after = function (t, e) {
		return function () {
			return --t < 1 ? e.apply(this, arguments) : void 0
		}
	},
	b.before = function (t, e) {
		var i;
		return function () {
			return --t > 0 && (i = e.apply(this, arguments)),
			1 >= t && (e = null),
			i
		}
	},
	b.once = b.partial(b.before, 2);
	var A = !{
		toString : null
	}
	.propertyIsEnumerable("toString"),
	M = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
	b.keys = function (t) {
		if (!b.isObject(t))
			return [];
		if (p)
			return p(t);
		var e = [];
		for (var i in t)
			b.has(t, i) && e.push(i);
		return A && n(t, e),
		e
	},
	b.allKeys = function (t) {
		if (!b.isObject(t))
			return [];
		var e = [];
		for (var i in t)
			e.push(i);
		return A && n(t, e),
		e
	},
	b.values = function (t) {
		for (var e = b.keys(t), i = e.length, n = Array(i), s = 0; i > s; s++)
			n[s] = t[e[s]];
		return n
	},
	b.mapObject = function (t, e, i) {
		e = _(e, i);
		for (var n, s = b.keys(t), r = s.length, o = {}, a = 0; r > a; a++)
			n = s[a], o[n] = e(t[n], n, t);
		return o
	},
	b.pairs = function (t) {
		for (var e = b.keys(t), i = e.length, n = Array(i), s = 0; i > s; s++)
			n[s] = [e[s], t[e[s]]];
		return n
	},
	b.invert = function (t) {
		for (var e = {}, i = b.keys(t), n = 0, s = i.length; s > n; n++)
			e[t[i[n]]] = i[n];
		return e
	},
	b.functions = b.methods = function (t) {
		var e = [];
		for (var i in t)
			b.isFunction(t[i]) && e.push(i);
		return e.sort()
	},
	b.extend = w(b.allKeys),
	b.extendOwn = b.assign = w(b.keys),
	b.findKey = function (t, e, i) {
		e = _(e, i);
		for (var n, s = b.keys(t), r = 0, o = s.length; o > r; r++)
			if (n = s[r], e(t[n], n, t))
				return n
	},
	b.pick = function (t, e, i) {
		var n,
		s,
		r = {},
		o = t;
		if (null == o)
			return r;
		b.isFunction(e) ? (s = b.allKeys(o), n = y(e, i)) : (s = I(arguments, !1, !1, 1), n = function (t, e, i) {
			return e in i
		}, o = Object(o));
		for (var a = 0, l = s.length; l > a; a++) {
			var h = s[a],
			u = o[h];
			n(u, h, o) && (r[h] = u)
		}
		return r
	},
	b.omit = function (t, e, i) {
		if (b.isFunction(e))
			e = b.negate(e);
		else {
			var n = b.map(I(arguments, !1, !1, 1), String);
			e = function (t, e) {
				return !b.contains(n, e)
			}
		}
		return b.pick(t, e, i)
	},
	b.defaults = w(b.allKeys, !0),
	b.create = function (t, e) {
		var i = x(t);
		return e && b.extendOwn(i, e),
		i
	},
	b.clone = function (t) {
		return b.isObject(t) ? b.isArray(t) ? t.slice() : b.extend({}, t) : t
	},
	b.tap = function (t, e) {
		return e(t),
		t
	},
	b.isMatch = function (t, e) {
		var i = b.keys(e),
		n = i.length;
		if (null == t)
			return !n;
		for (var s = Object(t), r = 0; n > r; r++) {
			var o = i[r];
			if (e[o] !== s[o] || !(o in s))
				return !1
		}
		return !0
	};
	var N = function (t, e, i, n) {
		if (t === e)
			return 0 !== t || 1 / t === 1 / e;
		if (null == t || null == e)
			return t === e;
		t instanceof b && (t = t._wrapped),
		e instanceof b && (e = e._wrapped);
		var s = c.call(t);
		if (s !== c.call(e))
			return !1;
		switch (s) {
		case "[object RegExp]":
		case "[object String]":
			return "" + t == "" + e;
		case "[object Number]":
			return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
		case "[object Date]":
		case "[object Boolean]":
			return +t === +e
		}
		var r = "[object Array]" === s;
		if (!r) {
			if ("object" != typeof t || "object" != typeof e)
				return !1;
			var o = t.constructor,
			a = e.constructor;
			if (o !== a && !(b.isFunction(o) && o instanceof o && b.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e)
				return !1
		}
		i = i || [],
		n = n || [];
		for (var l = i.length; l--; )
			if (i[l] === t)
				return n[l] === e;
		if (i.push(t), n.push(e), r) {
			if (l = t.length, l !== e.length)
				return !1;
			for (; l--; )
				if (!N(t[l], e[l], i, n))
					return !1
		} else {
			var h,
			u = b.keys(t);
			if (l = u.length, b.keys(e).length !== l)
				return !1;
			for (; l--; )
				if (h = u[l], !b.has(e, h) || !N(t[h], e[h], i, n))
					return !1
		}
		return i.pop(),
		n.pop(),
		!0
	};
	b.isEqual = function (t, e) {
		return N(t, e)
	},
	b.isEmpty = function (t) {
		return null == t ? !0 : T(t) && (b.isArray(t) || b.isString(t) || b.isArguments(t)) ? 0 === t.length : 0 === b.keys(t).length
	},
	b.isElement = function (t) {
		return !(!t || 1 !== t.nodeType)
	},
	b.isArray = f || function (t) {
		return "[object Array]" === c.call(t)
	},
	b.isObject = function (t) {
		var e = typeof t;
		return "function" === e || "object" === e && !!t
	},
	b.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (t) {
		b["is" + t] = function (e) {
			return c.call(e) === "[object " + t + "]"
		}
	}),
	b.isArguments(arguments) || (b.isArguments = function (t) {
		return b.has(t, "callee")
	}),
	"function" != typeof / . /  && "object" != typeof Int8Array && (b.isFunction = function (t) {
		return "function" == typeof t || !1
	}),
	b.isFinite = function (t) {
		return isFinite(t) && !isNaN(parseFloat(t))
	},
	b.isNaN = function (t) {
		return b.isNumber(t) && t !== +t
	},
	b.isBoolean = function (t) {
		return t === !0 || t === !1 || "[object Boolean]" === c.call(t)
	},
	b.isNull = function (t) {
		return null === t
	},
	b.isUndefined = function (t) {
		return void 0 === t
	},
	b.has = function (t, e) {
		return null != t && d.call(t, e)
	},
	b.noConflict = function () {
		return s._ = r,
		this
	},
	b.identity = function (t) {
		return t
	},
	b.constant = function (t) {
		return function () {
			return t
		}
	},
	b.noop = function () {},
	b.property = k,
	b.propertyOf = function (t) {
		return null == t ? function () {}

		 : function (e) {
			return t[e]
		}
	},
	b.matcher = b.matches = function (t) {
		return t = b.extendOwn({}, t),
		function (e) {
			return b.isMatch(e, t)
		}
	},
	b.times = function (t, e, i) {
		var n = Array(Math.max(0, t));
		e = y(e, i, 1);
		for (var s = 0; t > s; s++)
			n[s] = e(s);
		return n
	},
	b.random = function (t, e) {
		return null == e && (e = t, t = 0),
		t + Math.floor(Math.random() * (e - t + 1))
	},
	b.now = Date.now || function () {
		return (new Date).getTime()
	};
	var O = {
		"&" : "&amp;",
		"<" : "&lt;",
		">" : "&gt;",
		'"' : "&quot;",
		"'" : "&#x27;",
		"`" : "&#x60;"
	},
	P = b.invert(O),
	z = function (t) {
		var e = function (e) {
			return t[e]
		},
		i = "(?:" + b.keys(t).join("|") + ")",
		n = RegExp(i),
		s = RegExp(i, "g");
		return function (t) {
			return t = null == t ? "" : "" + t,
			n.test(t) ? t.replace(s, e) : t
		}
	};
	b.escape = z(O),
	b.unescape = z(P),
	b.result = function (t, e, i) {
		var n = null == t ? void 0 : t[e];
		return void 0 === n && (n = i),
		b.isFunction(n) ? n.call(t) : n
	};
	var R = 0;
	b.uniqueId = function (t) {
		var e = ++R + "";
		return t ? t + e : e
	},
	b.templateSettings = {
		evaluate : /<%([\s\S]+?)%>/g,
		interpolate : /<%=([\s\S]+?)%>/g,
		escape : /<%-([\s\S]+?)%>/g
	};
	var H = /(.)^/,
	L = {
		"'" : "'",
		"\\" : "\\",
		"\r" : "r",
		"\n" : "n",
		"\u2028" : "u2028",
		"\u2029" : "u2029"
	},
	j = /\\|'|\r|\n|\u2028|\u2029/g,
	B = function (t) {
		return "\\" + L[t]
	};
	b.template = function (t, e, i) {
		!e && i && (e = i),
		e = b.defaults({}, e, b.templateSettings);
		var n = RegExp([(e.escape || H).source, (e.interpolate || H).source, (e.evaluate || H).source].join("|") + "|$", "g"),
		s = 0,
		r = "__p+='";
		t.replace(n, function (e, i, n, o, a) {
			return r += t.slice(s, a).replace(j, B),
			s = a + e.length,
			i ? r += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'" : n ? r += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : o && (r += "';\n" + o + "\n__p+='"),
			e
		}),
		r += "';\n",
		e.variable || (r = "with(obj||{}){\n" + r + "}\n"),
		r = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + r + "return __p;\n";
		try {
			var o = new Function(e.variable || "obj", "_", r)
		} catch (a) {
			throw a.source = r,
			a
		}
		var l = function (t) {
			return o.call(this, t, b)
		},
		h = e.variable || "obj";
		return l.source = "function(" + h + "){\n" + r + "}",
		l
	},
	b.chain = function (t) {
		var e = b(t);
		return e._chain = !0,
		e
	};
	var F = function (t, e) {
		return t._chain ? b(e).chain() : e
	};
	b.mixin = function (t) {
		b.each(b.functions(t), function (e) {
			var i = b[e] = t[e];
			b.prototype[e] = function () {
				var t = [this._wrapped];
				return h.apply(t, arguments),
				F(this, i.apply(b, t))
			}
		})
	},
	b.mixin(b),
	b.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
		var e = o[t];
		b.prototype[t] = function () {
			var i = this._wrapped;
			return e.apply(i, arguments),
			"shift" !== t && "splice" !== t || 0 !== i.length || delete i[0],
			F(this, i)
		}
	}),
	b.each(["concat", "join", "slice"], function (t) {
		var e = o[t];
		b.prototype[t] = function () {
			return F(this, e.apply(this._wrapped, arguments))
		}
	}),
	b.prototype.value = function () {
		return this._wrapped
	},
	b.prototype.valueOf = b.prototype.toJSON = b.prototype.value,
	b.prototype.toString = function () {
		return "" + this._wrapped
	},
	"function" == typeof define && define.amd && define("underscore", [], function () {
		return b
	})
}
.call(this), function (t) {
	var e = "object" == typeof self && self.self == self && self || "object" == typeof global && global.global == global && global;
	if ("function" == typeof define && define.amd)
		define(["underscore", "jquery", "exports"], function (i, n, s) {
			e.Backbone = t(e, s, i, n)
		});
	else if ("undefined" != typeof exports) {
		var i,
		n = require("underscore");
		try {
			i = require("jquery")
		} catch (s) {}

		t(e, exports, n, i)
	} else
		e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
}
(function (t, e, i, n) {
	var s = t.Backbone,
	r = Array.prototype.slice;
	e.VERSION = "1.2.3",
	e.$ = n,
	e.noConflict = function () {
		return t.Backbone = s,
		this
	},
	e.emulateHTTP = !1,
	e.emulateJSON = !1;
	var o = function (t, e, n) {
		switch (t) {
		case 1:
			return function () {
				return i[e](this[n])
			};
		case 2:
			return function (t) {
				return i[e](this[n], t)
			};
		case 3:
			return function (t, s) {
				return i[e](this[n], l(t, this), s)
			};
		case 4:
			return function (t, s, r) {
				return i[e](this[n], l(t, this), s, r)
			};
		default:
			return function () {
				var t = r.call(arguments);
				return t.unshift(this[n]),
				i[e].apply(i, t)
			}
		}
	},
	a = function (t, e, n) {
		i.each(e, function (e, s) {
			i[s] && (t.prototype[s] = o(e, s, n))
		})
	},
	l = function (t, e) {
		return i.isFunction(t) ? t : i.isObject(t) && !e._isModel(t) ? h(t) : i.isString(t) ? function (e) {
			return e.get(t)
		}
		 : t
	},
	h = function (t) {
		var e = i.matches(t);
		return function (t) {
			return e(t.attributes)
		}
	},
	u = e.Events = {},
	c = /\s+/,
	d = function (t, e, n, s, r) {
		var o,
		a = 0;
		if (n && "object" == typeof n) {
			void 0 !== s && "context" in r && void 0 === r.context && (r.context = s);
			for (o = i.keys(n); a < o.length; a++)
				e = d(t, e, o[a], n[o[a]], r)
		} else if (n && c.test(n))
			for (o = n.split(c); a < o.length; a++)
				e = t(e, o[a], s, r);
		else
			e = t(e, n, s, r);
		return e
	};
	u.on = function (t, e, i) {
		return f(this, t, e, i)
	};
	var f = function (t, e, i, n, s) {
		if (t._events = d(p, t._events || {}, e, i, {
					context : n,
					ctx : t,
					listening : s
				}), s) {
			var r = t._listeners || (t._listeners = {});
			r[s.id] = s
		}
		return t
	};
	u.listenTo = function (t, e, n) {
		if (!t)
			return this;
		var s = t._listenId || (t._listenId = i.uniqueId("l")),
		r = this._listeningTo || (this._listeningTo = {}),
		o = r[s];
		if (!o) {
			var a = this._listenId || (this._listenId = i.uniqueId("l"));
			o = r[s] = {
				obj : t,
				objId : s,
				id : a,
				listeningTo : r,
				count : 0
			}
		}
		return f(t, e, n, this, o),
		this
	};
	var p = function (t, e, i, n) {
		if (i) {
			var s = t[e] || (t[e] = []),
			r = n.context,
			o = n.ctx,
			a = n.listening;
			a && a.count++,
			s.push({
				callback : i,
				context : r,
				ctx : r || o,
				listening : a
			})
		}
		return t
	};
	u.off = function (t, e, i) {
		return this._events ? (this._events = d(g, this._events, t, e, {
					context : i,
					listeners : this._listeners
				}), this) : this
	},
	u.stopListening = function (t, e, n) {
		var s = this._listeningTo;
		if (!s)
			return this;
		for (var r = t ? [t._listenId] : i.keys(s), o = 0; o < r.length; o++) {
			var a = s[r[o]];
			if (!a)
				break;
			a.obj.off(e, n, this)
		}
		return i.isEmpty(s) && (this._listeningTo = void 0),
		this
	};
	var g = function (t, e, n, s) {
		if (t) {
			var r,
			o = 0,
			a = s.context,
			l = s.listeners;
			if (e || n || a) {
				for (var h = e ? [e] : i.keys(t); o < h.length; o++) {
					e = h[o];
					var u = t[e];
					if (!u)
						break;
					for (var c = [], d = 0; d < u.length; d++) {
						var f = u[d];
						n && n !== f.callback && n !== f.callback._callback || a && a !== f.context ? c.push(f) : (r = f.listening, r && 0 === --r.count && (delete l[r.id], delete r.listeningTo[r.objId]))
					}
					c.length ? t[e] = c : delete t[e]
				}
				return i.size(t) ? t : void 0
			}
			for (var p = i.keys(l); o < p.length; o++)
				r = l[p[o]], delete l[r.id], delete r.listeningTo[r.objId]
		}
	};
	u.once = function (t, e, n) {
		var s = d(m, {}, t, e, i.bind(this.off, this));
		return this.on(s, void 0, n)
	},
	u.listenToOnce = function (t, e, n) {
		var s = d(m, {}, e, n, i.bind(this.stopListening, this, t));
		return this.listenTo(t, s)
	};
	var m = function (t, e, n, s) {
		if (n) {
			var r = t[e] = i.once(function () {
					s(e, r),
					n.apply(this, arguments)
				});
			r._callback = n
		}
		return t
	};
	u.trigger = function (t) {
		if (!this._events)
			return this;
		for (var e = Math.max(0, arguments.length - 1), i = Array(e), n = 0; e > n; n++)
			i[n] = arguments[n + 1];
		return d(v, this._events, t, void 0, i),
		this
	};
	var v = function (t, e, i, n) {
		if (t) {
			var s = t[e],
			r = t.all;
			s && r && (r = r.slice()),
			s && b(s, n),
			r && b(r, [e].concat(n))
		}
		return t
	},
	b = function (t, e) {
		var i,
		n = -1,
		s = t.length,
		r = e[0],
		o = e[1],
		a = e[2];
		switch (e.length) {
		case 0:
			for (; ++n < s; )
				(i = t[n]).callback.call(i.ctx);
			return;
		case 1:
			for (; ++n < s; )
				(i = t[n]).callback.call(i.ctx, r);
			return;
		case 2:
			for (; ++n < s; )
				(i = t[n]).callback.call(i.ctx, r, o);
			return;
		case 3:
			for (; ++n < s; )
				(i = t[n]).callback.call(i.ctx, r, o, a);
			return;
		default:
			for (; ++n < s; )
				(i = t[n]).callback.apply(i.ctx, e);
			return
		}
	};
	u.bind = u.on,
	u.unbind = u.off,
	i.extend(e, u);
	var y = e.Model = function (t, e) {
		var n = t || {};
		e || (e = {}),
		this.cid = i.uniqueId(this.cidPrefix),
		this.attributes = {},
		e.collection && (this.collection = e.collection),
		e.parse && (n = this.parse(n, e) || {}),
		n = i.defaults({}, n, i.result(this, "defaults")),
		this.set(n, e),
		this.changed = {},
		this.initialize.apply(this, arguments)
	};
	i.extend(y.prototype, u, {
		changed : null,
		validationError : null,
		idAttribute : "id",
		cidPrefix : "c",
		initialize : function () {},
		toJSON : function () {
			return i.clone(this.attributes)
		},
		sync : function () {
			return e.sync.apply(this, arguments)
		},
		get : function (t) {
			return this.attributes[t]
		},
		escape : function (t) {
			return i.escape(this.get(t))
		},
		has : function (t) {
			return null != this.get(t)
		},
		matches : function (t) {
			return !!i.iteratee(t, this)(this.attributes)
		},
		set : function (t, e, n) {
			if (null == t)
				return this;
			var s;
			if ("object" == typeof t ? (s = t, n = e) : (s = {})[t] = e, n || (n = {}), !this._validate(s, n))
				return !1;
			var r = n.unset,
			o = n.silent,
			a = [],
			l = this._changing;
			this._changing = !0,
			l || (this._previousAttributes = i.clone(this.attributes), this.changed = {});
			var h = this.attributes,
			u = this.changed,
			c = this._previousAttributes;
			for (var d in s)
				e = s[d], i.isEqual(h[d], e) || a.push(d), i.isEqual(c[d], e) ? delete u[d] : u[d] = e, r ? delete h[d] : h[d] = e;
			if (this.id = this.get(this.idAttribute), !o) {
				a.length && (this._pending = n);
				for (var f = 0; f < a.length; f++)
					this.trigger("change:" + a[f], this, h[a[f]], n)
			}
			if (l)
				return this;
			if (!o)
				for (; this._pending; )
					n = this._pending, this._pending = !1, this.trigger("change", this, n);
			return this._pending = !1,
			this._changing = !1,
			this
		},
		unset : function (t, e) {
			return this.set(t, void 0, i.extend({}, e, {
					unset : !0
				}))
		},
		clear : function (t) {
			var e = {};
			for (var n in this.attributes)
				e[n] = void 0;
			return this.set(e, i.extend({}, t, {
					unset : !0
				}))
		},
		hasChanged : function (t) {
			return null == t ? !i.isEmpty(this.changed) : i.has(this.changed, t)
		},
		changedAttributes : function (t) {
			if (!t)
				return this.hasChanged() ? i.clone(this.changed) : !1;
			var e = this._changing ? this._previousAttributes : this.attributes,
			n = {};
			for (var s in t) {
				var r = t[s];
				i.isEqual(e[s], r) || (n[s] = r)
			}
			return i.size(n) ? n : !1
		},
		previous : function (t) {
			return null != t && this._previousAttributes ? this._previousAttributes[t] : null
		},
		previousAttributes : function () {
			return i.clone(this._previousAttributes)
		},
		fetch : function (t) {
			t = i.extend({
					parse : !0
				}, t);
			var e = this,
			n = t.success;
			return t.success = function (i) {
				var s = t.parse ? e.parse(i, t) : i;
				return e.set(s, t) ? (n && n.call(t.context, e, i, t), void e.trigger("sync", e, i, t)) : !1
			},
			F(this, t),
			this.sync("read", this, t)
		},
		save : function (t, e, n) {
			var s;
			null == t || "object" == typeof t ? (s = t, n = e) : (s = {})[t] = e,
			n = i.extend({
					validate : !0,
					parse : !0
				}, n);
			var r = n.wait;
			if (s && !r) {
				if (!this.set(s, n))
					return !1
			} else if (!this._validate(s, n))
				return !1;
			var o = this,
			a = n.success,
			l = this.attributes;
			n.success = function (t) {
				o.attributes = l;
				var e = n.parse ? o.parse(t, n) : t;
				return r && (e = i.extend({}, s, e)),
				e && !o.set(e, n) ? !1 : (a && a.call(n.context, o, t, n), void o.trigger("sync", o, t, n))
			},
			F(this, n),
			s && r && (this.attributes = i.extend({}, l, s));
			var h = this.isNew() ? "create" : n.patch ? "patch" : "update";
			"patch" !== h || n.attrs || (n.attrs = s);
			var u = this.sync(h, this, n);
			return this.attributes = l,
			u
		},
		destroy : function (t) {
			t = t ? i.clone(t) : {};
			var e = this,
			n = t.success,
			s = t.wait,
			r = function () {
				e.stopListening(),
				e.trigger("destroy", e, e.collection, t)
			};
			t.success = function (i) {
				s && r(),
				n && n.call(t.context, e, i, t),
				e.isNew() || e.trigger("sync", e, i, t)
			};
			var o = !1;
			return this.isNew() ? i.defer(t.success) : (F(this, t), o = this.sync("delete", this, t)),
			s || r(),
			o
		},
		url : function () {
			var t = i.result(this, "urlRoot") || i.result(this.collection, "url") || B();
			if (this.isNew())
				return t;
			var e = this.get(this.idAttribute);
			return t.replace(/[^\/]$/, "$&/") + encodeURIComponent(e)
		},
		parse : function (t) {
			return t
		},
		clone : function () {
			return new this.constructor(this.attributes)
		},
		isNew : function () {
			return !this.has(this.idAttribute)
		},
		isValid : function (t) {
			return this._validate({}, i.defaults({
					validate : !0
				}, t))
		},
		_validate : function (t, e) {
			if (!e.validate || !this.validate)
				return !0;
			t = i.extend({}, this.attributes, t);
			var n = this.validationError = this.validate(t, e) || null;
			return n ? (this.trigger("invalid", this, n, i.extend(e, {
						validationError : n
					})), !1) : !0
		}
	});
	var _ = {
		keys : 1,
		values : 1,
		pairs : 1,
		invert : 1,
		pick : 0,
		omit : 0,
		chain : 1,
		isEmpty : 1
	};
	a(y, _, "attributes");
	var w = e.Collection = function (t, e) {
		e || (e = {}),
		e.model && (this.model = e.model),
		void 0 !== e.comparator && (this.comparator = e.comparator),
		this._reset(),
		this.initialize.apply(this, arguments),
		t && this.reset(t, i.extend({
				silent : !0
			}, e))
	},
	x = {
		add : !0,
		remove : !0,
		merge : !0
	},
	k = {
		add : !0,
		remove : !1
	},
	C = function (t, e, i) {
		i = Math.min(Math.max(i, 0), t.length);
		for (var n = Array(t.length - i), s = e.length, r = 0; r < n.length; r++)
			n[r] = t[r + i];
		for (r = 0; s > r; r++)
			t[r + i] = e[r];
		for (r = 0; r < n.length; r++)
			t[r + s + i] = n[r]
	};
	i.extend(w.prototype, u, {
		model : y,
		initialize : function () {},
		toJSON : function (t) {
			return this.map(function (e) {
				return e.toJSON(t)
			})
		},
		sync : function () {
			return e.sync.apply(this, arguments)
		},
		add : function (t, e) {
			return this.set(t, i.extend({
					merge : !1
				}, e, k))
		},
		remove : function (t, e) {
			e = i.extend({}, e);
			var n = !i.isArray(t);
			t = n ? [t] : i.clone(t);
			var s = this._removeModels(t, e);
			return !e.silent && s && this.trigger("update", this, e),
			n ? s[0] : s
		},
		set : function (t, e) {
			if (null != t) {
				e = i.defaults({}, e, x),
				e.parse && !this._isModel(t) && (t = this.parse(t, e));
				var n = !i.isArray(t);
				t = n ? [t] : t.slice();
				var s = e.at;
				null != s && (s = +s),
				0 > s && (s += this.length + 1);
				for (var r, o = [], a = [], l = [], h = {}, u = e.add, c = e.merge, d = e.remove, f = !1, p = this.comparator && null == s && e.sort !== !1, g = i.isString(this.comparator) ? this.comparator : null, m = 0; m < t.length; m++) {
					r = t[m];
					var v = this.get(r);
					if (v) {
						if (c && r !== v) {
							var b = this._isModel(r) ? r.attributes : r;
							e.parse && (b = v.parse(b, e)),
							v.set(b, e),
							p && !f && (f = v.hasChanged(g))
						}
						h[v.cid] || (h[v.cid] = !0, o.push(v)),
						t[m] = v
					} else
						u && (r = t[m] = this._prepareModel(r, e), r && (a.push(r), this._addReference(r, e), h[r.cid] = !0, o.push(r)))
				}
				if (d) {
					for (m = 0; m < this.length; m++)
						r = this.models[m], h[r.cid] || l.push(r);
					l.length && this._removeModels(l, e)
				}
				var y = !1,
				_ = !p && u && d;
				if (o.length && _ ? (y = this.length != o.length || i.some(this.models, function (t, e) {
								return t !== o[e]
							}), this.models.length = 0, C(this.models, o, 0), this.length = this.models.length) : a.length && (p && (f = !0), C(this.models, a, null == s ? this.length : s), this.length = this.models.length), f && this.sort({
						silent : !0
					}), !e.silent) {
					for (m = 0; m < a.length; m++)
						null != s && (e.index = s + m), r = a[m], r.trigger("add", r, this, e);
					(f || y) && this.trigger("sort", this, e),
					(a.length || l.length) && this.trigger("update", this, e)
				}
				return n ? t[0] : t
			}
		},
		reset : function (t, e) {
			e = e ? i.clone(e) : {};
			for (var n = 0; n < this.models.length; n++)
				this._removeReference(this.models[n], e);
			return e.previousModels = this.models,
			this._reset(),
			t = this.add(t, i.extend({
						silent : !0
					}, e)),
			e.silent || this.trigger("reset", this, e),
			t
		},
		push : function (t, e) {
			return this.add(t, i.extend({
					at : this.length
				}, e))
		},
		pop : function (t) {
			var e = this.at(this.length - 1);
			return this.remove(e, t)
		},
		unshift : function (t, e) {
			return this.add(t, i.extend({
					at : 0
				}, e))
		},
		shift : function (t) {
			var e = this.at(0);
			return this.remove(e, t)
		},
		slice : function () {
			return r.apply(this.models, arguments)
		},
		get : function (t) {
			if (null == t)
				return void 0;
			var e = this.modelId(this._isModel(t) ? t.attributes : t);
			return this._byId[t] || this._byId[e] || this._byId[t.cid]
		},
		at : function (t) {
			return 0 > t && (t += this.length),
			this.models[t]
		},
		where : function (t, e) {
			return this[e ? "find" : "filter"](t)
		},
		findWhere : function (t) {
			return this.where(t, !0)
		},
		sort : function (t) {
			var e = this.comparator;
			if (!e)
				throw new Error("Cannot sort a set without a comparator");
			t || (t = {});
			var n = e.length;
			return i.isFunction(e) && (e = i.bind(e, this)),
			1 === n || i.isString(e) ? this.models = this.sortBy(e) : this.models.sort(e),
			t.silent || this.trigger("sort", this, t),
			this
		},
		pluck : function (t) {
			return i.invoke(this.models, "get", t)
		},
		fetch : function (t) {
			t = i.extend({
					parse : !0
				}, t);
			var e = t.success,
			n = this;
			return t.success = function (i) {
				var s = t.reset ? "reset" : "set";
				n[s](i, t),
				e && e.call(t.context, n, i, t),
				n.trigger("sync", n, i, t)
			},
			F(this, t),
			this.sync("read", this, t)
		},
		create : function (t, e) {
			e = e ? i.clone(e) : {};
			var n = e.wait;
			if (t = this._prepareModel(t, e), !t)
				return !1;
			n || this.add(t, e);
			var s = this,
			r = e.success;
			return e.success = function (t, e, i) {
				n && s.add(t, i),
				r && r.call(i.context, t, e, i)
			},
			t.save(null, e),
			t
		},
		parse : function (t) {
			return t
		},
		clone : function () {
			return new this.constructor(this.models, {
				model : this.model,
				comparator : this.comparator
			})
		},
		modelId : function (t) {
			return t[this.model.prototype.idAttribute || "id"]
		},
		_reset : function () {
			this.length = 0,
			this.models = [],
			this._byId = {}

		},
		_prepareModel : function (t, e) {
			if (this._isModel(t))
				return t.collection || (t.collection = this), t;
			e = e ? i.clone(e) : {},
			e.collection = this;
			var n = new this.model(t, e);
			return n.validationError ? (this.trigger("invalid", this, n.validationError, e), !1) : n
		},
		_removeModels : function (t, e) {
			for (var i = [], n = 0; n < t.length; n++) {
				var s = this.get(t[n]);
				if (s) {
					var r = this.indexOf(s);
					this.models.splice(r, 1),
					this.length--,
					e.silent || (e.index = r, s.trigger("remove", s, this, e)),
					i.push(s),
					this._removeReference(s, e)
				}
			}
			return i.length ? i : !1
		},
		_isModel : function (t) {
			return t instanceof y
		},
		_addReference : function (t) {
			this._byId[t.cid] = t;
			var e = this.modelId(t.attributes);
			null != e && (this._byId[e] = t),
			t.on("all", this._onModelEvent, this)
		},
		_removeReference : function (t) {
			delete this._byId[t.cid];
			var e = this.modelId(t.attributes);
			null != e && delete this._byId[e],
			this === t.collection && delete t.collection,
			t.off("all", this._onModelEvent, this)
		},
		_onModelEvent : function (t, e, i, n) {
			if ("add" !== t && "remove" !== t || i === this) {
				if ("destroy" === t && this.remove(e, n), "change" === t) {
					var s = this.modelId(e.previousAttributes()),
					r = this.modelId(e.attributes);
					s !== r && (null != s && delete this._byId[s], null != r && (this._byId[r] = e))
				}
				this.trigger.apply(this, arguments)
			}
		}
	});
	var E = {
		forEach : 3,
		each : 3,
		map : 3,
		collect : 3,
		reduce : 4,
		foldl : 4,
		inject : 4,
		reduceRight : 4,
		foldr : 4,
		find : 3,
		detect : 3,
		filter : 3,
		select : 3,
		reject : 3,
		every : 3,
		all : 3,
		some : 3,
		any : 3,
		include : 3,
		includes : 3,
		contains : 3,
		invoke : 0,
		max : 3,
		min : 3,
		toArray : 1,
		size : 1,
		first : 3,
		head : 3,
		take : 3,
		initial : 3,
		rest : 3,
		tail : 3,
		drop : 3,
		last : 3,
		without : 0,
		difference : 0,
		indexOf : 3,
		shuffle : 1,
		lastIndexOf : 3,
		isEmpty : 1,
		chain : 1,
		sample : 3,
		partition : 3,
		groupBy : 3,
		countBy : 3,
		sortBy : 3,
		indexBy : 3
	};
	a(w, E, "models");
	var T = e.View = function (t) {
		this.cid = i.uniqueId("view"),
		i.extend(this, i.pick(t, I)),
		this._ensureElement(),
		this.initialize.apply(this, arguments)
	},
	S = /^(\S+)\s*(.*)$/,
	I = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
	i.extend(T.prototype, u, {
		tagName : "div",
		$ : function (t) {
			return this.$el.find(t)
		},
		initialize : function () {},
		render : function () {
			return this
		},
		remove : function () {
			return this._removeElement(),
			this.stopListening(),
			this
		},
		_removeElement : function () {
			this.$el.remove()
		},
		setElement : function (t) {
			return this.undelegateEvents(),
			this._setElement(t),
			this.delegateEvents(),
			this
		},
		_setElement : function (t) {
			this.$el = t instanceof e.$ ? t : e.$(t),
			this.el = this.$el[0]
		},
		delegateEvents : function (t) {
			if (t || (t = i.result(this, "events")), !t)
				return this;
			this.undelegateEvents();
			for (var e in t) {
				var n = t[e];
				if (i.isFunction(n) || (n = this[n]), n) {
					var s = e.match(S);
					this.delegate(s[1], s[2], i.bind(n, this))
				}
			}
			return this
		},
		delegate : function (t, e, i) {
			return this.$el.on(t + ".delegateEvents" + this.cid, e, i),
			this
		},
		undelegateEvents : function () {
			return this.$el && this.$el.off(".delegateEvents" + this.cid),
			this
		},
		undelegate : function (t, e, i) {
			return this.$el.off(t + ".delegateEvents" + this.cid, e, i),
			this
		},
		_createElement : function (t) {
			return document.createElement(t)
		},
		_ensureElement : function () {
			if (this.el)
				this.setElement(i.result(this, "el"));
			else {
				var t = i.extend({}, i.result(this, "attributes"));
				this.id && (t.id = i.result(this, "id")),
				this.className && (t["class"] = i.result(this, "className")),
				this.setElement(this._createElement(i.result(this, "tagName"))),
				this._setAttributes(t)
			}
		},
		_setAttributes : function (t) {
			this.$el.attr(t)
		}
	}),
	e.sync = function (t, n, s) {
		var r = D[t];
		i.defaults(s || (s = {}), {
			emulateHTTP : e.emulateHTTP,
			emulateJSON : e.emulateJSON
		});
		var o = {
			type : r,
			dataType : "json"
		};
		if (s.url || (o.url = i.result(n, "url") || B()), null != s.data || !n || "create" !== t && "update" !== t && "patch" !== t || (o.contentType = "application/json", o.data = JSON.stringify(s.attrs || n.toJSON(s))), s.emulateJSON && (o.contentType = "application/x-www-form-urlencoded", o.data = o.data ? {
					model : o.data
				}
				 : {}), s.emulateHTTP && ("PUT" === r || "DELETE" === r || "PATCH" === r)) {
			o.type = "POST",
			s.emulateJSON && (o.data._method = r);
			var a = s.beforeSend;
			s.beforeSend = function (t) {
				return t.setRequestHeader("X-HTTP-Method-Override", r),
				a ? a.apply(this, arguments) : void 0
			}
		}
		"GET" === o.type || s.emulateJSON || (o.processData = !1);
		var l = s.error;
		s.error = function (t, e, i) {
			s.textStatus = e,
			s.errorThrown = i,
			l && l.call(s.context, t, e, i)
		};
		var h = s.xhr = e.ajax(i.extend(o, s));
		return n.trigger("request", n, h, s),
		h
	};
	var D = {
		create : "POST",
		update : "PUT",
		patch : "PATCH",
		"delete" : "DELETE",
		read : "GET"
	};
	e.ajax = function () {
		return e.$.ajax.apply(e.$, arguments)
	};
	var A = e.Router = function (t) {
		t || (t = {}),
		t.routes && (this.routes = t.routes),
		this._bindRoutes(),
		this.initialize.apply(this, arguments)
	},
	M = /\((.*?)\)/g,
	N = /(\(\?)?:\w+/g,
	O = /\*\w+/g,
	P = /[\-{}\[\]+?.,\\\^$|#\s]/g;
	i.extend(A.prototype, u, {
		initialize : function () {},
		route : function (t, n, s) {
			i.isRegExp(t) || (t = this._routeToRegExp(t)),
			i.isFunction(n) && (s = n, n = ""),
			s || (s = this[n]);
			var r = this;
			return e.history.route(t, function (i) {
				var o = r._extractParameters(t, i);
				r.execute(s, o, n) !== !1 && (r.trigger.apply(r, ["route:" + n].concat(o)), r.trigger("route", n, o), e.history.trigger("route", r, n, o))
			}),
			this
		},
		execute : function (t, e) {
			t && t.apply(this, e)
		},
		navigate : function (t, i) {
			return e.history.navigate(t, i),
			this
		},
		_bindRoutes : function () {
			if (this.routes) {
				this.routes = i.result(this, "routes");
				for (var t, e = i.keys(this.routes); null != (t = e.pop()); )
					this.route(t, this.routes[t])
			}
		},
		_routeToRegExp : function (t) {
			return t = t.replace(P, "\\$&").replace(M, "(?:$1)?").replace(N, function (t, e) {
					return e ? t : "([^/?]+)"
				}).replace(O, "([^?]*?)"),
			new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
		},
		_extractParameters : function (t, e) {
			var n = t.exec(e).slice(1);
			return i.map(n, function (t, e) {
				return e === n.length - 1 ? t || null : t ? decodeURIComponent(t) : null
			})
		}
	});
	var z = e.History = function () {
		this.handlers = [],
		this.checkUrl = i.bind(this.checkUrl, this),
		"undefined" != typeof window && (this.location = window.location, this.history = window.history)
	},
	R = /^[#\/]|\s+$/g,
	H = /^\/+|\/+$/g,
	L = /#.*$/;
	z.started = !1,
	i.extend(z.prototype, u, {
		interval : 50,
		atRoot : function () {
			var t = this.location.pathname.replace(/[^\/]$/, "$&/");
			return t === this.root && !this.getSearch()
		},
		matchRoot : function () {
			var t = this.decodeFragment(this.location.pathname),
			e = t.slice(0, this.root.length - 1) + "/";
			return e === this.root
		},
		decodeFragment : function (t) {
			return decodeURI(t.replace(/%25/g, "%2525"))
		},
		getSearch : function () {
			var t = this.location.href.replace(/#.*/, "").match(/\?.+/);
			return t ? t[0] : ""
		},
		getHash : function (t) {
			var e = (t || this).location.href.match(/#(.*)$/);
			return e ? e[1] : ""
		},
		getPath : function () {
			var t = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
			return "/" === t.charAt(0) ? t.slice(1) : t
		},
		getFragment : function (t) {
			return null == t && (t = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()),
			t.replace(R, "")
		},
		start : function (t) {
			if (z.started)
				throw new Error("Backbone.history has already been started");
			if (z.started = !0, this.options = i.extend({
						root : "/"
					}, this.options, t), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window && (void 0 === document.documentMode || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(H, "/"), this._wantsHashChange && this._wantsPushState) {
				if (!this._hasPushState && !this.atRoot()) {
					var e = this.root.slice(0, -1) || "/";
					return this.location.replace(e + "#" + this.getPath()),
					!0
				}
				this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
					replace : !0
				})
			}
			if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
				this.iframe = document.createElement("iframe"),
				this.iframe.src = "javascript:0",
				this.iframe.style.display = "none",
				this.iframe.tabIndex = -1;
				var n = document.body,
				s = n.insertBefore(this.iframe, n.firstChild).contentWindow;
				s.document.open(),
				s.document.close(),
				s.location.hash = "#" + this.fragment
			}
			var r = window.addEventListener || function (t, e) {
				return attachEvent("on" + t, e)
			};
			return this._usePushState ? r("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? r("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
			this.options.silent ? void 0 : this.loadUrl()
		},
		stop : function () {
			var t = window.removeEventListener || function (t, e) {
				return detachEvent("on" + t, e)
			};
			this._usePushState ? t("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && t("hashchange", this.checkUrl, !1),
			this.iframe && (document.body.removeChild(this.iframe), this.iframe = null),
			this._checkUrlInterval && clearInterval(this._checkUrlInterval),
			z.started = !1
		},
		route : function (t, e) {
			this.handlers.unshift({
				route : t,
				callback : e
			})
		},
		checkUrl : function () {
			var t = this.getFragment();
			return t === this.fragment && this.iframe && (t = this.getHash(this.iframe.contentWindow)),
			t === this.fragment ? !1 : (this.iframe && this.navigate(t), void this.loadUrl())
		},
		loadUrl : function (t) {
			return this.matchRoot() ? (t = this.fragment = this.getFragment(t), i.some(this.handlers, function (e) {
					return e.route.test(t) ? (e.callback(t), !0) : void 0
				})) : !1
		},
		navigate : function (t, e) {
			if (!z.started)
				return !1;
			e && e !== !0 || (e = {
					trigger : !!e
				}),
			t = this.getFragment(t || "");
			var i = this.root;
			("" === t || "?" === t.charAt(0)) && (i = i.slice(0, -1) || "/");
			var n = i + t;
			if (t = this.decodeFragment(t.replace(L, "")), this.fragment !== t) {
				if (this.fragment = t, this._usePushState)
					this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, n);
				else {
					if (!this._wantsHashChange)
						return this.location.assign(n);
					if (this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getHash(this.iframe.contentWindow)) {
						var s = this.iframe.contentWindow;
						e.replace || (s.document.open(), s.document.close()),
						this._updateHash(s.location, t, e.replace)
					}
				}
				return e.trigger ? this.loadUrl(t) : void 0
			}
		},
		_updateHash : function (t, e, i) {
			if (i) {
				var n = t.href.replace(/(javascript:|#).*$/, "");
				t.replace(n + "#" + e)
			} else
				t.hash = "#" + e
		}
	}),
	e.history = new z;
	var j = function (t, e) {
		var n,
		s = this;
		n = t && i.has(t, "constructor") ? t.constructor : function () {
			return s.apply(this, arguments)
		},
		i.extend(n, s, e);
		var r = function () {
			this.constructor = n
		};
		return r.prototype = s.prototype,
		n.prototype = new r,
		t && i.extend(n.prototype, t),
		n.__super__ = s.prototype,
		n
	};
	y.extend = w.extend = A.extend = T.extend = z.extend = j;
	var B = function () {
		throw new Error('A "url" property or function must be specified')
	},
	F = function (t, e) {
		var i = e.error;
		e.error = function (n) {
			i && i.call(e.context, t, n, e),
			t.trigger("error", t, n, e)
		}
	};
	return e
}), function (t, e) {
	if ("function" == typeof define && define.amd)
		define(["backbone", "underscore"], function (i, n) {
			return t.Marionette = t.Mn = e(t, i, n)
		});
	else if ("undefined" != typeof exports) {
		var i = require("backbone"),
		n = require("underscore");
		module.exports = e(t, i, n)
	} else
		t.Marionette = t.Mn = e(t, t.Backbone, t._)
}
(this, function (t, e, i) {
	"use strict";
	!function (t, e) {
		var i = t.ChildViewContainer;
		return t.ChildViewContainer = function (t, e) {
			var i = function (t) {
				this._views = {},
				this._indexByModel = {},
				this._indexByCustom = {},
				this._updateLength(),
				e.each(t, this.add, this)
			};
			e.extend(i.prototype, {
				add : function (t, e) {
					var i = t.cid;
					return this._views[i] = t,
					t.model && (this._indexByModel[t.model.cid] = i),
					e && (this._indexByCustom[e] = i),
					this._updateLength(),
					this
				},
				findByModel : function (t) {
					return this.findByModelCid(t.cid)
				},
				findByModelCid : function (t) {
					var e = this._indexByModel[t];
					return this.findByCid(e)
				},
				findByCustom : function (t) {
					var e = this._indexByCustom[t];
					return this.findByCid(e)
				},
				findByIndex : function (t) {
					return e.values(this._views)[t]
				},
				findByCid : function (t) {
					return this._views[t]
				},
				remove : function (t) {
					var i = t.cid;
					return t.model && delete this._indexByModel[t.model.cid],
					e.any(this._indexByCustom, function (t, e) {
						return t === i ? (delete this._indexByCustom[e], !0) : void 0
					}, this),
					delete this._views[i],
					this._updateLength(),
					this
				},
				call : function (t) {
					this.apply(t, e.tail(arguments))
				},
				apply : function (t, i) {
					e.each(this._views, function (n) {
						e.isFunction(n[t]) && n[t].apply(n, i || [])
					})
				},
				_updateLength : function () {
					this.length = e.size(this._views)
				}
			});
			var n = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck", "reduce"];
			return e.each(n, function (t) {
				i.prototype[t] = function () {
					var i = e.values(this._views),
					n = [i].concat(e.toArray(arguments));
					return e[t].apply(e, n)
				}
			}),
			i
		}
		(t, e),
		t.ChildViewContainer.VERSION = "0.1.10",
		t.ChildViewContainer.noConflict = function () {
			return t.ChildViewContainer = i,
			this
		},
		t.ChildViewContainer
	}
	(e, i),
	function (t, e) {
		var i = t.Wreqr,
		n = t.Wreqr = {};
		return t.Wreqr.VERSION = "1.3.5",
		t.Wreqr.noConflict = function () {
			return t.Wreqr = i,
			this
		},
		n.Handlers = function (t, e) {
			var i = function (t) {
				this.options = t,
				this._wreqrHandlers = {},
				e.isFunction(this.initialize) && this.initialize(t)
			};
			return i.extend = t.Model.extend,
			e.extend(i.prototype, t.Events, {
				setHandlers : function (t) {
					e.each(t, function (t, i) {
						var n = null;
						e.isObject(t) && !e.isFunction(t) && (n = t.context, t = t.callback),
						this.setHandler(i, t, n)
					}, this)
				},
				setHandler : function (t, e, i) {
					var n = {
						callback : e,
						context : i
					};
					this._wreqrHandlers[t] = n,
					this.trigger("handler:add", t, e, i)
				},
				hasHandler : function (t) {
					return !!this._wreqrHandlers[t]
				},
				getHandler : function (t) {
					var e = this._wreqrHandlers[t];
					if (e)
						return function () {
							return e.callback.apply(e.context, arguments)
						}
				},
				removeHandler : function (t) {
					delete this._wreqrHandlers[t]
				},
				removeAllHandlers : function () {
					this._wreqrHandlers = {}

				}
			}),
			i
		}
		(t, e),
		n.CommandStorage = function () {
			var i = function (t) {
				this.options = t,
				this._commands = {},
				e.isFunction(this.initialize) && this.initialize(t)
			};
			return e.extend(i.prototype, t.Events, {
				getCommands : function (t) {
					var e = this._commands[t];
					return e || (e = {
							command : t,
							instances : []
						}, this._commands[t] = e),
					e
				},
				addCommand : function (t, e) {
					var i = this.getCommands(t);
					i.instances.push(e)
				},
				clearCommands : function (t) {
					var e = this.getCommands(t);
					e.instances = []
				}
			}),
			i
		}
		(),
		n.Commands = function (t, e) {
			return t.Handlers.extend({
				storageType : t.CommandStorage,
				constructor : function (e) {
					this.options = e || {},
					this._initializeStorage(this.options),
					this.on("handler:add", this._executeCommands, this),
					t.Handlers.prototype.constructor.apply(this, arguments)
				},
				execute : function (t) {
					t = arguments[0];
					var i = e.rest(arguments);
					this.hasHandler(t) ? this.getHandler(t).apply(this, i) : this.storage.addCommand(t, i)
				},
				_executeCommands : function (t, i, n) {
					var s = this.storage.getCommands(t);
					e.each(s.instances, function (t) {
						i.apply(n, t)
					}),
					this.storage.clearCommands(t)
				},
				_initializeStorage : function (t) {
					var i,
					n = t.storageType || this.storageType;
					i = e.isFunction(n) ? new n : n,
					this.storage = i
				}
			})
		}
		(n, e),
		n.RequestResponse = function (t, e) {
			return t.Handlers.extend({
				request : function (t) {
					return this.hasHandler(t) ? this.getHandler(t).apply(this, e.rest(arguments)) : void 0
				}
			})
		}
		(n, e),
		n.EventAggregator = function (t, e) {
			var i = function () {};
			return i.extend = t.Model.extend,
			e.extend(i.prototype, t.Events),
			i
		}
		(t, e),
		n.Channel = function () {
			var i = function (e) {
				this.vent = new t.Wreqr.EventAggregator,
				this.reqres = new t.Wreqr.RequestResponse,
				this.commands = new t.Wreqr.Commands,
				this.channelName = e
			};
			return e.extend(i.prototype, {
				reset : function () {
					return this.vent.off(),
					this.vent.stopListening(),
					this.reqres.removeAllHandlers(),
					this.commands.removeAllHandlers(),
					this
				},
				connectEvents : function (t, e) {
					return this._connect("vent", t, e),
					this
				},
				connectCommands : function (t, e) {
					return this._connect("commands", t, e),
					this
				},
				connectRequests : function (t, e) {
					return this._connect("reqres", t, e),
					this
				},
				_connect : function (t, i, n) {
					if (i) {
						n = n || this;
						var s = "vent" === t ? "on" : "setHandler";
						e.each(i, function (i, r) {
							this[t][s](r, e.bind(i, n))
						}, this)
					}
				}
			}),
			i
		}
		(n),
		n.radio = function (t, e) {
			var i = function () {
				this._channels = {},
				this.vent = {},
				this.commands = {},
				this.reqres = {},
				this._proxyMethods()
			};
			e.extend(i.prototype, {
				channel : function (t) {
					if (!t)
						throw new Error("Channel must receive a name");
					return this._getChannel(t)
				},
				_getChannel : function (e) {
					var i = this._channels[e];
					return i || (i = new t.Channel(e), this._channels[e] = i),
					i
				},
				_proxyMethods : function () {
					e.each(["vent", "commands", "reqres"], function (t) {
						e.each(n[t], function (e) {
							this[t][e] = s(this, t, e)
						}, this)
					}, this)
				}
			});
			var n = {
				vent : ["on", "off", "trigger", "once", "stopListening", "listenTo", "listenToOnce"],
				commands : ["execute", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers"],
				reqres : ["request", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers"]
			},
			s = function (t, i, n) {
				return function (s) {
					var r = t._getChannel(s)[i];
					return r[n].apply(r, e.rest(arguments))
				}
			};
			return new i
		}
		(n, e),
		t.Wreqr
	}
	(e, i);
	var n = t.Marionette,
	s = t.Mn,
	r = e.Marionette = {};
	r.VERSION = "2.4.4",
	r.noConflict = function () {
		return t.Marionette = n,
		t.Mn = s,
		this
	},
	e.Marionette = r,
	r.Deferred = e.$.Deferred,
	r.extend = e.Model.extend,
	r.isNodeAttached = function (t) {
		return e.$.contains(document.documentElement, t)
	},
	r.mergeOptions = function (t, e) {
		t && i.extend(this, i.pick(t, e))
	},
	r.getOption = function (t, e) {
		return t && e ? t.options && void 0 !== t.options[e] ? t.options[e] : t[e] : void 0
	},
	r.proxyGetOption = function (t) {
		return r.getOption(this, t)
	},
	r._getValue = function (t, e, n) {
		return i.isFunction(t) && (t = n ? t.apply(e, n) : t.call(e)),
		t
	},
	r.normalizeMethods = function (t) {
		return i.reduce(t, function (t, e, n) {
			return i.isFunction(e) || (e = this[e]),
			e && (t[n] = e),
			t
		}, {}, this)
	},
	r.normalizeUIString = function (t, e) {
		return t.replace(/@ui\.[a-zA-Z_$0-9]*/g, function (t) {
			return e[t.slice(4)]
		})
	},
	r.normalizeUIKeys = function (t, e) {
		return i.reduce(t, function (t, i, n) {
			var s = r.normalizeUIString(n, e);
			return t[s] = i,
			t
		}, {})
	},
	r.normalizeUIValues = function (t, e, n) {
		return i.each(t, function (s, o) {
			i.isString(s) ? t[o] = r.normalizeUIString(s, e) : i.isObject(s) && i.isArray(n) && (i.extend(s, r.normalizeUIValues(i.pick(s, n), e)), i.each(n, function (t) {
						var n = s[t];
						i.isString(n) && (s[t] = r.normalizeUIString(n, e))
					}))
		}),
		t
	},
	r.actAsCollection = function (t, e) {
		var n = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
		i.each(n, function (n) {
			t[n] = function () {
				var t = i.values(i.result(this, e)),
				s = [t].concat(i.toArray(arguments));
				return i[n].apply(i, s)
			}
		})
	};
	var o = r.deprecate = function (t, e) {
		i.isObject(t) && (t = t.prev + " is going to be removed in the future. Please use " + t.next + " instead." + (t.url ? " See: " + t.url : "")),
		void 0 !== e && e || o._cache[t] || (o._warn("Deprecation warning: " + t), o._cache[t] = !0)
	};
	o._warn = "undefined" != typeof console && (console.warn || console.log) || function () {},
	o._cache = {},
	r._triggerMethod = function () {
		function t(t, e, i) {
			return i.toUpperCase()
		}
		var e = /(^|:)(\w)/gi;
		return function (n, s, r) {
			var o = arguments.length < 3;
			o && (r = s, s = r[0]);
			var a,
			l = "on" + s.replace(e, t),
			h = n[l];
			return i.isFunction(h) && (a = h.apply(n, o ? i.rest(r) : r)),
			i.isFunction(n.trigger) && (o + r.length > 1 ? n.trigger.apply(n, o ? r : [s].concat(i.drop(r, 0))) : n.trigger(s)),
			a
		}
	}
	(),
	r.triggerMethod = function () {
		return r._triggerMethod(this, arguments)
	},
	r.triggerMethodOn = function (t) {
		var e = i.isFunction(t.triggerMethod) ? t.triggerMethod : r.triggerMethod;
		return e.apply(t, i.rest(arguments))
	},
	r.MonitorDOMRefresh = function (t) {
		function e() {
			t._isShown = !0,
			n()
		}
		function i() {
			t._isRendered = !0,
			n()
		}
		function n() {
			t._isShown && t._isRendered && r.isNodeAttached(t.el) && r.triggerMethodOn(t, "dom:refresh", t)
		}
		t._isDomRefreshMonitored || (t._isDomRefreshMonitored = !0, t.on({
				show : e,
				render : i
			}))
	},
	function (t) {
		function e(e, n, s, r) {
			var o = r.split(/\s+/);
			i.each(o, function (i) {
				var r = e[i];
				if (!r)
					throw new t.Error('Method "' + i + '" was configured as an event handler, but does not exist.');
				e.listenTo(n, s, r)
			})
		}
		function n(t, e, i, n) {
			t.listenTo(e, i, n)
		}
		function s(t, e, n, s) {
			var r = s.split(/\s+/);
			i.each(r, function (i) {
				var s = t[i];
				t.stopListening(e, n, s)
			})
		}
		function r(t, e, i, n) {
			t.stopListening(e, i, n)
		}
		function o(e, n, s, r, o) {
			if (n && s) {
				if (!i.isObject(s))
					throw new t.Error({
						message : "Bindings must be an object or function.",
						url : "marionette.functions.html#marionettebindentityevents"
					});
				s = t._getValue(s, e),
				i.each(s, function (t, s) {
					i.isFunction(t) ? r(e, n, s, t) : o(e, n, s, t)
				})
			}
		}
		t.bindEntityEvents = function (t, i, s) {
			o(t, i, s, n, e)
		},
		t.unbindEntityEvents = function (t, e, i) {
			o(t, e, i, r, s)
		},
		t.proxyBindEntityEvents = function (e, i) {
			return t.bindEntityEvents(this, e, i)
		},
		t.proxyUnbindEntityEvents = function (e, i) {
			return t.unbindEntityEvents(this, e, i)
		}
	}
	(r);
	var a = ["description", "fileName", "lineNumber", "name", "message", "number"];
	return r.Error = r.extend.call(Error, {
			urlRoot : "http://marionettejs.com/docs/v" + r.VERSION + "/",
			constructor : function (t, e) {
				i.isObject(t) ? (e = t, t = e.message) : e || (e = {});
				var n = Error.call(this, t);
				i.extend(this, i.pick(n, a), i.pick(e, a)),
				this.captureStackTrace(),
				e.url && (this.url = this.urlRoot + e.url)
			},
			captureStackTrace : function () {
				Error.captureStackTrace && Error.captureStackTrace(this, r.Error)
			},
			toString : function () {
				return this.name + ": " + this.message + (this.url ? " See: " + this.url : "")
			}
		}),
	r.Error.extend = r.extend,
	r.Callbacks = function () {
		this._deferred = r.Deferred(),
		this._callbacks = []
	},
	i.extend(r.Callbacks.prototype, {
		add : function (t, e) {
			var n = i.result(this._deferred, "promise");
			this._callbacks.push({
				cb : t,
				ctx : e
			}),
			n.then(function (i) {
				e && (i.context = e),
				t.call(i.context, i.options)
			})
		},
		run : function (t, e) {
			this._deferred.resolve({
				options : t,
				context : e
			})
		},
		reset : function () {
			var t = this._callbacks;
			this._deferred = r.Deferred(),
			this._callbacks = [],
			i.each(t, function (t) {
				this.add(t.cb, t.ctx)
			}, this)
		}
	}),
	r.Controller = function (t) {
		this.options = t || {},
		i.isFunction(this.initialize) && this.initialize(this.options)
	},
	r.Controller.extend = r.extend,
	i.extend(r.Controller.prototype, e.Events, {
		destroy : function () {
			return r._triggerMethod(this, "before:destroy", arguments),
			r._triggerMethod(this, "destroy", arguments),
			this.stopListening(),
			this.off(),
			this
		},
		triggerMethod : r.triggerMethod,
		mergeOptions : r.mergeOptions,
		getOption : r.proxyGetOption
	}),
	r.Object = function (t) {
		this.options = i.extend({}, i.result(this, "options"), t),
		this.initialize.apply(this, arguments)
	},
	r.Object.extend = r.extend,
	i.extend(r.Object.prototype, e.Events, {
		initialize : function () {},
		destroy : function (t) {
			return t = t || {},
			this.triggerMethod("before:destroy", t),
			this.triggerMethod("destroy", t),
			this.stopListening(),
			this
		},
		triggerMethod : r.triggerMethod,
		mergeOptions : r.mergeOptions,
		getOption : r.proxyGetOption,
		bindEntityEvents : r.proxyBindEntityEvents,
		unbindEntityEvents : r.proxyUnbindEntityEvents
	}),
	r.Region = r.Object.extend({
			constructor : function (t) {
				if (this.options = t || {}, this.el = this.getOption("el"), this.el = this.el instanceof e.$ ? this.el[0] : this.el, !this.el)
					throw new r.Error({
						name : "NoElError",
						message : 'An "el" must be specified for a region.'
					});
				this.$el = this.getEl(this.el),
				r.Object.call(this, t)
			},
			show : function (t, e) {
				if (this._ensureElement()) {
					this._ensureViewIsIntact(t),
					r.MonitorDOMRefresh(t);
					var n = e || {},
					s = t !== this.currentView,
					o = !!n.preventDestroy,
					a = !!n.forceShow,
					l = !!this.currentView,
					h = s && !o,
					u = s || a;
					if (l && this.triggerMethod("before:swapOut", this.currentView, this, e), this.currentView && delete this.currentView._parent, h ? this.empty() : l && u && this.currentView.off("destroy", this.empty, this), u) {
						t.once("destroy", this.empty, this),
						t._parent = this,
						this._renderView(t),
						l && this.triggerMethod("before:swap", t, this, e),
						this.triggerMethod("before:show", t, this, e),
						r.triggerMethodOn(t, "before:show", t, this, e),
						l && this.triggerMethod("swapOut", this.currentView, this, e);
						var c = r.isNodeAttached(this.el),
						d = [],
						f = i.extend({
								triggerBeforeAttach : this.triggerBeforeAttach,
								triggerAttach : this.triggerAttach
							}, n);
						return c && f.triggerBeforeAttach && (d = this._displayedViews(t), this._triggerAttach(d, "before:")),
						this.attachHtml(t),
						this.currentView = t,
						c && f.triggerAttach && (d = this._displayedViews(t), this._triggerAttach(d)),
						l && this.triggerMethod("swap", t, this, e),
						this.triggerMethod("show", t, this, e),
						r.triggerMethodOn(t, "show", t, this, e),
						this
					}
					return this
				}
			},
			triggerBeforeAttach : !0,
			triggerAttach : !0,
			_triggerAttach : function (t, e) {
				var n = (e || "") + "attach";
				i.each(t, function (t) {
					r.triggerMethodOn(t, n, t, this)
				}, this)
			},
			_displayedViews : function (t) {
				return i.union([t], i.result(t, "_getNestedViews") || [])
			},
			_renderView : function (t) {
				t.supportsRenderLifecycle || r.triggerMethodOn(t, "before:render", t),
				t.render(),
				t.supportsRenderLifecycle || r.triggerMethodOn(t, "render", t)
			},
			_ensureElement : function () {
				if (i.isObject(this.el) || (this.$el = this.getEl(this.el), this.el = this.$el[0]), !this.$el || 0 === this.$el.length) {
					if (this.getOption("allowMissingEl"))
						return !1;
					throw new r.Error('An "el" ' + this.$el.selector + " must exist in DOM")
				}
				return !0
			},
			_ensureViewIsIntact : function (t) {
				if (!t)
					throw new r.Error({
						name : "ViewNotValid",
						message : "The view passed is undefined and therefore invalid. You must pass a view instance to show."
					});
				if (t.isDestroyed)
					throw new r.Error({
						name : "ViewDestroyedError",
						message : 'View (cid: "' + t.cid + '") has already been destroyed and cannot be used.'
					})
			},
			getEl : function (t) {
				return e.$(t, r._getValue(this.options.parentEl, this))
			},
			attachHtml : function (t) {
				this.$el.contents().detach(),
				this.el.appendChild(t.el)
			},
			empty : function (t) {
				var e = this.currentView,
				i = t || {},
				n = !!i.preventDestroy;
				return e ? (e.off("destroy", this.empty, this), this.triggerMethod("before:empty", e), n || this._destroyView(), this.triggerMethod("empty", e), delete this.currentView, n && this.$el.contents().detach(), this) : this
			},
			_destroyView : function () {
				var t = this.currentView;
				t.isDestroyed || (t.supportsDestroyLifecycle || r.triggerMethodOn(t, "before:destroy", t), t.destroy ? t.destroy() : (t.remove(), t.isDestroyed = !0), t.supportsDestroyLifecycle || r.triggerMethodOn(t, "destroy", t))
			},
			attachView : function (t) {
				return this.currentView && delete this.currentView._parent,
				t._parent = this,
				this.currentView = t,
				this
			},
			hasView : function () {
				return !!this.currentView
			},
			reset : function () {
				return this.empty(),
				this.$el && (this.el = this.$el.selector),
				delete this.$el,
				this
			}
		}, {
			buildRegion : function (t, e) {
				if (i.isString(t))
					return this._buildRegionFromSelector(t, e);
				if (t.selector || t.el || t.regionClass)
					return this._buildRegionFromObject(t, e);
				if (i.isFunction(t))
					return this._buildRegionFromRegionClass(t);
				throw new r.Error({
					message : "Improper region configuration type.",
					url : "marionette.region.html#region-configuration-types"
				})
			},
			_buildRegionFromSelector : function (t, e) {
				return new e({
					el : t
				})
			},
			_buildRegionFromObject : function (t, e) {
				var n = t.regionClass || e,
				s = i.omit(t, "selector", "regionClass");
				return t.selector && !s.el && (s.el = t.selector),
				new n(s)
			},
			_buildRegionFromRegionClass : function (t) {
				return new t
			}
		}),
	r.RegionManager = r.Controller.extend({
			constructor : function (t) {
				this._regions = {},
				this.length = 0,
				r.Controller.call(this, t),
				this.addRegions(this.getOption("regions"))
			},
			addRegions : function (t, e) {
				return t = r._getValue(t, this, arguments),
				i.reduce(t, function (t, n, s) {
					return i.isString(n) && (n = {
							selector : n
						}),
					n.selector && (n = i.defaults({}, n, e)),
					t[s] = this.addRegion(s, n),
					t
				}, {}, this)
			},
			addRegion : function (t, e) {
				var i;
				return i = e instanceof r.Region ? e : r.Region.buildRegion(e, r.Region),
				this.triggerMethod("before:add:region", t, i),
				i._parent = this,
				this._store(t, i),
				this.triggerMethod("add:region", t, i),
				i
			},
			get : function (t) {
				return this._regions[t]
			},
			getRegions : function () {
				return i.clone(this._regions)
			},
			removeRegion : function (t) {
				var e = this._regions[t];
				return this._remove(t, e),
				e
			},
			removeRegions : function () {
				var t = this.getRegions();
				return i.each(this._regions, function (t, e) {
					this._remove(e, t)
				}, this),
				t
			},
			emptyRegions : function () {
				var t = this.getRegions();
				return i.invoke(t, "empty"),
				t
			},
			destroy : function () {
				return this.removeRegions(),
				r.Controller.prototype.destroy.apply(this, arguments)
			},
			_store : function (t, e) {
				this._regions[t] || this.length++,
				this._regions[t] = e
			},
			_remove : function (t, e) {
				this.triggerMethod("before:remove:region", t, e),
				e.empty(),
				e.stopListening(),
				delete e._parent,
				delete this._regions[t],
				this.length--,
				this.triggerMethod("remove:region", t, e)
			}
		}),
	r.actAsCollection(r.RegionManager.prototype, "_regions"),
	r.TemplateCache = function (t) {
		this.templateId = t
	},
	i.extend(r.TemplateCache, {
		templateCaches : {},
		get : function (t, e) {
			var i = this.templateCaches[t];
			return i || (i = new r.TemplateCache(t), this.templateCaches[t] = i),
			i.load(e)
		},
		clear : function () {
			var t,
			e = i.toArray(arguments),
			n = e.length;
			if (n > 0)
				for (t = 0; n > t; t++)
					delete this.templateCaches[e[t]];
			else
				this.templateCaches = {}

		}
	}),
	i.extend(r.TemplateCache.prototype, {
		load : function (t) {
			if (this.compiledTemplate)
				return this.compiledTemplate;
			var e = this.loadTemplate(this.templateId, t);
			return this.compiledTemplate = this.compileTemplate(e, t),
			this.compiledTemplate
		},
		loadTemplate : function (t) {
			var i = e.$(t);
			if (!i.length)
				throw new r.Error({
					name : "NoTemplateError",
					message : 'Could not find template: "' + t + '"'
				});
			return i.html()
		},
		compileTemplate : function (t, e) {
			return i.template(t, e)
		}
	}),
	r.Renderer = {
		render : function (t, e) {
			if (!t)
				throw new r.Error({
					name : "TemplateNotFoundError",
					message : "Cannot render the template since its false, null or undefined."
				});
			var n = i.isFunction(t) ? t : r.TemplateCache.get(t);
			return n(e)
		}
	},
	r.View = e.View.extend({
			isDestroyed : !1,
			supportsRenderLifecycle : !0,
			supportsDestroyLifecycle : !0,
			constructor : function (t) {
				this.render = i.bind(this.render, this),
				t = r._getValue(t, this),
				this.options = i.extend({}, i.result(this, "options"), t),
				this._behaviors = r.Behaviors(this),
				e.View.call(this, this.options),
				r.MonitorDOMRefresh(this)
			},
			getTemplate : function () {
				return this.getOption("template")
			},
			serializeModel : function (t) {
				return t.toJSON.apply(t, i.rest(arguments))
			},
			mixinTemplateHelpers : function (t) {
				t = t || {};
				var e = this.getOption("templateHelpers");
				return e = r._getValue(e, this),
				i.extend(t, e)
			},
			normalizeUIKeys : function (t) {
				var e = i.result(this, "_uiBindings");
				return r.normalizeUIKeys(t, e || i.result(this, "ui"))
			},
			normalizeUIValues : function (t, e) {
				var n = i.result(this, "ui"),
				s = i.result(this, "_uiBindings");
				return r.normalizeUIValues(t, s || n, e)
			},
			configureTriggers : function () {
				if (this.triggers) {
					var t = this.normalizeUIKeys(i.result(this, "triggers"));
					return i.reduce(t, function (t, e, i) {
						return t[i] = this._buildViewTrigger(e),
						t
					}, {}, this)
				}
			},
			delegateEvents : function (t) {
				return this._delegateDOMEvents(t),
				this.bindEntityEvents(this.model, this.getOption("modelEvents")),
				this.bindEntityEvents(this.collection, this.getOption("collectionEvents")),
				i.each(this._behaviors, function (t) {
					t.bindEntityEvents(this.model, t.getOption("modelEvents")),
					t.bindEntityEvents(this.collection, t.getOption("collectionEvents"))
				}, this),
				this
			},
			_delegateDOMEvents : function (t) {
				var n = r._getValue(t || this.events, this);
				n = this.normalizeUIKeys(n),
				i.isUndefined(t) && (this.events = n);
				var s = {},
				o = i.result(this, "behaviorEvents") || {},
				a = this.configureTriggers(),
				l = i.result(this, "behaviorTriggers") || {};
				i.extend(s, o, n, a, l),
				e.View.prototype.delegateEvents.call(this, s)
			},
			undelegateEvents : function () {
				return e.View.prototype.undelegateEvents.apply(this, arguments),
				this.unbindEntityEvents(this.model, this.getOption("modelEvents")),
				this.unbindEntityEvents(this.collection, this.getOption("collectionEvents")),
				i.each(this._behaviors, function (t) {
					t.unbindEntityEvents(this.model, t.getOption("modelEvents")),
					t.unbindEntityEvents(this.collection, t.getOption("collectionEvents"))
				}, this),
				this
			},
			_ensureViewIsIntact : function () {
				if (this.isDestroyed)
					throw new r.Error({
						name : "ViewDestroyedError",
						message : 'View (cid: "' + this.cid + '") has already been destroyed and cannot be used.'
					})
			},
			destroy : function () {
				if (this.isDestroyed)
					return this;
				var t = i.toArray(arguments);
				return this.triggerMethod.apply(this, ["before:destroy"].concat(t)),
				this.isDestroyed = !0,
				this.triggerMethod.apply(this, ["destroy"].concat(t)),
				this.unbindUIElements(),
				this.isRendered = !1,
				this.remove(),
				i.invoke(this._behaviors, "destroy", t),
				this
			},
			bindUIElements : function () {
				this._bindUIElements(),
				i.invoke(this._behaviors, this._bindUIElements)
			},
			_bindUIElements : function () {
				if (this.ui) {
					this._uiBindings || (this._uiBindings = this.ui);
					var t = i.result(this, "_uiBindings");
					this.ui = {},
					i.each(t, function (t, e) {
						this.ui[e] = this.$(t)
					}, this)
				}
			},
			unbindUIElements : function () {
				this._unbindUIElements(),
				i.invoke(this._behaviors, this._unbindUIElements)
			},
			_unbindUIElements : function () {
				this.ui && this._uiBindings && (i.each(this.ui, function (t, e) {
						delete this.ui[e]
					}, this), this.ui = this._uiBindings, delete this._uiBindings)
			},
			_buildViewTrigger : function (t) {
				var e = i.defaults({}, t, {
						preventDefault : !0,
						stopPropagation : !0
					}),
				n = i.isObject(t) ? e.event : t;
				return function (t) {
					t && (t.preventDefault && e.preventDefault && t.preventDefault(), t.stopPropagation && e.stopPropagation && t.stopPropagation());
					var i = {
						view : this,
						model : this.model,
						collection : this.collection
					};
					this.triggerMethod(n, i)
				}
			},
			setElement : function () {
				var t = e.View.prototype.setElement.apply(this, arguments);
				return i.invoke(this._behaviors, "proxyViewProperties", this),
				t
			},
			triggerMethod : function () {
				var t = r._triggerMethod(this, arguments);
				return this._triggerEventOnBehaviors(arguments),
				this._triggerEventOnParentLayout(arguments[0], i.rest(arguments)),
				t
			},
			_triggerEventOnBehaviors : function (t) {
				for (var e = r._triggerMethod, i = this._behaviors, n = 0, s = i && i.length; s > n; n++)
					e(i[n], t)
			},
			_triggerEventOnParentLayout : function (t, e) {
				var n = this._parentLayoutView();
				if (n) {
					var s = r.getOption(n, "childViewEventPrefix"),
					o = s + ":" + t,
					a = [this].concat(e);
					r._triggerMethod(n, o, a);
					var l = r.getOption(n, "childEvents");
					l = r._getValue(l, n);
					var h = n.normalizeMethods(l);
					h && i.isFunction(h[t]) && h[t].apply(n, a)
				}
			},
			_getImmediateChildren : function () {
				return []
			},
			_getNestedViews : function () {
				var t = this._getImmediateChildren();
				return t.length ? i.reduce(t, function (t, e) {
					return e._getNestedViews ? t.concat(e._getNestedViews()) : t
				}, t) : t
			},
			_parentLayoutView : function () {
				for (var t = this._parent; t; ) {
					if (t instanceof r.LayoutView)
						return t;
					t = t._parent
				}
			},
			normalizeMethods : r.normalizeMethods,
			mergeOptions : r.mergeOptions,
			getOption : r.proxyGetOption,
			bindEntityEvents : r.proxyBindEntityEvents,
			unbindEntityEvents : r.proxyUnbindEntityEvents
		}),
	r.ItemView = r.View.extend({
			constructor : function () {
				r.View.apply(this, arguments)
			},
			serializeData : function () {
				if (!this.model && !this.collection)
					return {};
				var t = [this.model || this.collection];
				return arguments.length && t.push.apply(t, arguments),
				this.model ? this.serializeModel.apply(this, t) : {
					items : this.serializeCollection.apply(this, t)
				}
			},
			serializeCollection : function (t) {
				return t.toJSON.apply(t, i.rest(arguments))
			},
			render : function () {
				return this._ensureViewIsIntact(),
				this.triggerMethod("before:render", this),
				this._renderTemplate(),
				this.isRendered = !0,
				this.bindUIElements(),
				this.triggerMethod("render", this),
				this
			},
			_renderTemplate : function () {
				var t = this.getTemplate();
				if (t !== !1) {
					if (!t)
						throw new r.Error({
							name : "UndefinedTemplateError",
							message : "Cannot render the template since it is null or undefined."
						});
					var e = this.mixinTemplateHelpers(this.serializeData()),
					i = r.Renderer.render(t, e, this);
					return this.attachElContent(i),
					this
				}
			},
			attachElContent : function (t) {
				return this.$el.html(t),
				this
			}
		}),
	r.CollectionView = r.View.extend({
			childViewEventPrefix : "childview",
			sort : !0,
			constructor : function () {
				this.once("render", this._initialEvents),
				this._initChildViewStorage(),
				r.View.apply(this, arguments),
				this.on({
					"before:show" : this._onBeforeShowCalled,
					show : this._onShowCalled,
					"before:attach" : this._onBeforeAttachCalled,
					attach : this._onAttachCalled
				}),
				this.initRenderBuffer()
			},
			initRenderBuffer : function () {
				this._bufferedChildren = []
			},
			startBuffering : function () {
				this.initRenderBuffer(),
				this.isBuffering = !0
			},
			endBuffering : function () {
				var t,
				e = this._isShown && r.isNodeAttached(this.el);
				this.isBuffering = !1,
				this._isShown && this._triggerMethodMany(this._bufferedChildren, this, "before:show"),
				e && this._triggerBeforeAttach && (t = this._getNestedViews(), this._triggerMethodMany(t, this, "before:attach")),
				this.attachBuffer(this, this._createBuffer()),
				e && this._triggerAttach && (t = this._getNestedViews(), this._triggerMethodMany(t, this, "attach")),
				this._isShown && this._triggerMethodMany(this._bufferedChildren, this, "show"),
				this.initRenderBuffer()
			},
			_triggerMethodMany : function (t, e, n) {
				var s = i.drop(arguments, 3);
				i.each(t, function (t) {
					r.triggerMethodOn.apply(t, [t, n, t, e].concat(s))
				})
			},
			_initialEvents : function () {
				this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "remove", this._onCollectionRemove), this.listenTo(this.collection, "reset", this.render), this.getOption("sort") && this.listenTo(this.collection, "sort", this._sortViews))
			},
			_onCollectionAdd : function (t, e, n) {
				var s = void 0 !== n.at && (n.index || e.indexOf(t));
				if ((this.getOption("filter") || s === !1) && (s = i.indexOf(this._filteredSortedModels(s), t)), this._shouldAddChild(t, s)) {
					this.destroyEmptyView();
					var r = this.getChildView(t);
					this.addChild(t, r, s)
				}
			},
			_onCollectionRemove : function (t) {
				var e = this.children.findByModel(t);
				this.removeChildView(e),
				this.checkEmpty()
			},
			_onBeforeShowCalled : function () {
				this._triggerBeforeAttach = this._triggerAttach = !1,
				this.children.each(function (t) {
					r.triggerMethodOn(t, "before:show", t)
				})
			},
			_onShowCalled : function () {
				this.children.each(function (t) {
					r.triggerMethodOn(t, "show", t)
				})
			},
			_onBeforeAttachCalled : function () {
				this._triggerBeforeAttach = !0
			},
			_onAttachCalled : function () {
				this._triggerAttach = !0
			},
			render : function () {
				return this._ensureViewIsIntact(),
				this.triggerMethod("before:render", this),
				this._renderChildren(),
				this.isRendered = !0,
				this.triggerMethod("render", this),
				this
			},
			reorder : function () {
				var t = this.children,
				e = this._filteredSortedModels(),
				n = i.some(e, function (e) {
						return !t.findByModel(e)
					});
				if (n)
					this.render();
				else {
					var s = i.map(e, function (e, i) {
							var n = t.findByModel(e);
							return n._index = i,
							n.el
						}),
					r = t.filter(function (t) {
							return !i.contains(s, t.el)
						});
					this.triggerMethod("before:reorder"),
					this._appendReorderedChildren(s),
					i.each(r, this.removeChildView, this),
					this.checkEmpty(),
					this.triggerMethod("reorder");

				}
			},
			resortView : function () {
				r.getOption(this, "reorderOnSort") ? this.reorder() : this.render()
			},
			_sortViews : function () {
				var t = this._filteredSortedModels(),
				e = i.find(t, function (t, e) {
						var i = this.children.findByModel(t);
						return !i || i._index !== e
					}, this);
				e && this.resortView()
			},
			_emptyViewIndex : -1,
			_appendReorderedChildren : function (t) {
				this.$el.append(t)
			},
			_renderChildren : function () {
				this.destroyEmptyView(),
				this.destroyChildren({
					checkEmpty : !1
				}),
				this.isEmpty(this.collection) ? this.showEmptyView() : (this.triggerMethod("before:render:collection", this), this.startBuffering(), this.showCollection(), this.endBuffering(), this.triggerMethod("render:collection", this), this.children.isEmpty() && this.getOption("filter") && this.showEmptyView())
			},
			showCollection : function () {
				var t,
				e = this._filteredSortedModels();
				i.each(e, function (e, i) {
					t = this.getChildView(e),
					this.addChild(e, t, i)
				}, this)
			},
			_filteredSortedModels : function (t) {
				var e = this.getViewComparator(),
				n = this.collection.models;
				if (t = Math.min(Math.max(t, 0), n.length - 1), e) {
					var s;
					t && (s = n[t], n = n.slice(0, t).concat(n.slice(t + 1))),
					n = this._sortModelsBy(n, e),
					s && n.splice(t, 0, s)
				}
				return this.getOption("filter") && (n = i.filter(n, function (t, e) {
							return this._shouldAddChild(t, e)
						}, this)),
				n
			},
			_sortModelsBy : function (t, e) {
				return "string" == typeof e ? i.sortBy(t, function (t) {
					return t.get(e)
				}, this) : 1 === e.length ? i.sortBy(t, e, this) : t.sort(i.bind(e, this))
			},
			showEmptyView : function () {
				var t = this.getEmptyView();
				if (t && !this._showingEmptyView) {
					this.triggerMethod("before:render:empty"),
					this._showingEmptyView = !0;
					var i = new e.Model;
					this.addEmptyView(i, t),
					this.triggerMethod("render:empty")
				}
			},
			destroyEmptyView : function () {
				this._showingEmptyView && (this.triggerMethod("before:remove:empty"), this.destroyChildren(), delete this._showingEmptyView, this.triggerMethod("remove:empty"))
			},
			getEmptyView : function () {
				return this.getOption("emptyView")
			},
			addEmptyView : function (t, e) {
				var n,
				s = this._isShown && !this.isBuffering && r.isNodeAttached(this.el),
				o = this.getOption("emptyViewOptions") || this.getOption("childViewOptions");
				i.isFunction(o) && (o = o.call(this, t, this._emptyViewIndex));
				var a = this.buildChildView(t, e, o);
				a._parent = this,
				this.proxyChildEvents(a),
				a.once("render", function () {
					this._isShown && r.triggerMethodOn(a, "before:show", a),
					s && this._triggerBeforeAttach && (n = this._getViewAndNested(a), this._triggerMethodMany(n, this, "before:attach"))
				}, this),
				this.children.add(a),
				this.renderChildView(a, this._emptyViewIndex),
				s && this._triggerAttach && (n = this._getViewAndNested(a), this._triggerMethodMany(n, this, "attach")),
				this._isShown && r.triggerMethodOn(a, "show", a)
			},
			getChildView : function () {
				var t = this.getOption("childView");
				if (!t)
					throw new r.Error({
						name : "NoChildViewError",
						message : 'A "childView" must be specified'
					});
				return t
			},
			addChild : function (t, e, i) {
				var n = this.getOption("childViewOptions");
				n = r._getValue(n, this, [t, i]);
				var s = this.buildChildView(t, e, n);
				return this._updateIndices(s, !0, i),
				this.triggerMethod("before:add:child", s),
				this._addChildView(s, i),
				this.triggerMethod("add:child", s),
				s._parent = this,
				s
			},
			_updateIndices : function (t, e, i) {
				this.getOption("sort") && (e && (t._index = i), this.children.each(function (i) {
						i._index >= t._index && (i._index += e ? 1 : -1)
					}))
			},
			_addChildView : function (t, e) {
				var i,
				n = this._isShown && !this.isBuffering && r.isNodeAttached(this.el);
				this.proxyChildEvents(t),
				t.once("render", function () {
					this._isShown && !this.isBuffering && r.triggerMethodOn(t, "before:show", t),
					n && this._triggerBeforeAttach && (i = this._getViewAndNested(t), this._triggerMethodMany(i, this, "before:attach"))
				}, this),
				this.children.add(t),
				this.renderChildView(t, e),
				n && this._triggerAttach && (i = this._getViewAndNested(t), this._triggerMethodMany(i, this, "attach")),
				this._isShown && !this.isBuffering && r.triggerMethodOn(t, "show", t)
			},
			renderChildView : function (t, e) {
				return t.supportsRenderLifecycle || r.triggerMethodOn(t, "before:render", t),
				t.render(),
				t.supportsRenderLifecycle || r.triggerMethodOn(t, "render", t),
				this.attachHtml(this, t, e),
				t
			},
			buildChildView : function (t, e, n) {
				var s = i.extend({
						model : t
					}, n),
				o = new e(s);
				return r.MonitorDOMRefresh(o),
				o
			},
			removeChildView : function (t) {
				return t ? (this.triggerMethod("before:remove:child", t), t.supportsDestroyLifecycle || r.triggerMethodOn(t, "before:destroy", t), t.destroy ? t.destroy() : t.remove(), t.supportsDestroyLifecycle || r.triggerMethodOn(t, "destroy", t), delete t._parent, this.stopListening(t), this.children.remove(t), this.triggerMethod("remove:child", t), this._updateIndices(t, !1), t) : t
			},
			isEmpty : function () {
				return !this.collection || 0 === this.collection.length
			},
			checkEmpty : function () {
				this.isEmpty(this.collection) && this.showEmptyView()
			},
			attachBuffer : function (t, e) {
				t.$el.append(e)
			},
			_createBuffer : function () {
				var t = document.createDocumentFragment();
				return i.each(this._bufferedChildren, function (e) {
					t.appendChild(e.el)
				}),
				t
			},
			attachHtml : function (t, e, i) {
				t.isBuffering ? t._bufferedChildren.splice(i, 0, e) : t._insertBefore(e, i) || t._insertAfter(e)
			},
			_insertBefore : function (t, e) {
				var i,
				n = this.getOption("sort") && e < this.children.length - 1;
				return n && (i = this.children.find(function (t) {
							return t._index === e + 1
						})),
				i ? (i.$el.before(t.el), !0) : !1
			},
			_insertAfter : function (t) {
				this.$el.append(t.el)
			},
			_initChildViewStorage : function () {
				this.children = new e.ChildViewContainer
			},
			destroy : function () {
				return this.isDestroyed ? this : (this.triggerMethod("before:destroy:collection"), this.destroyChildren({
						checkEmpty : !1
					}), this.triggerMethod("destroy:collection"), r.View.prototype.destroy.apply(this, arguments))
			},
			destroyChildren : function (t) {
				var e = t || {},
				n = !0,
				s = this.children.map(i.identity);
				return i.isUndefined(e.checkEmpty) || (n = e.checkEmpty),
				this.children.each(this.removeChildView, this),
				n && this.checkEmpty(),
				s
			},
			_shouldAddChild : function (t, e) {
				var n = this.getOption("filter");
				return !i.isFunction(n) || n.call(this, t, e, this.collection)
			},
			proxyChildEvents : function (t) {
				var e = this.getOption("childViewEventPrefix");
				this.listenTo(t, "all", function () {
					var n = i.toArray(arguments),
					s = n[0],
					r = this.normalizeMethods(i.result(this, "childEvents"));
					n[0] = e + ":" + s,
					n.splice(1, 0, t),
					"undefined" != typeof r && i.isFunction(r[s]) && r[s].apply(this, n.slice(1)),
					this.triggerMethod.apply(this, n)
				})
			},
			_getImmediateChildren : function () {
				return i.values(this.children._views)
			},
			_getViewAndNested : function (t) {
				return [t].concat(i.result(t, "_getNestedViews") || [])
			},
			getViewComparator : function () {
				return this.getOption("viewComparator")
			}
		}),
	r.CompositeView = r.CollectionView.extend({
			constructor : function () {
				r.CollectionView.apply(this, arguments)
			},
			_initialEvents : function () {
				this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "remove", this._onCollectionRemove), this.listenTo(this.collection, "reset", this._renderChildren), this.getOption("sort") && this.listenTo(this.collection, "sort", this._sortViews))
			},
			getChildView : function () {
				var t = this.getOption("childView") || this.constructor;
				return t
			},
			serializeData : function () {
				var t = {};
				return this.model && (t = i.partial(this.serializeModel, this.model).apply(this, arguments)),
				t
			},
			render : function () {
				return this._ensureViewIsIntact(),
				this._isRendering = !0,
				this.resetChildViewContainer(),
				this.triggerMethod("before:render", this),
				this._renderTemplate(),
				this._renderChildren(),
				this._isRendering = !1,
				this.isRendered = !0,
				this.triggerMethod("render", this),
				this
			},
			_renderChildren : function () {
				(this.isRendered || this._isRendering) && r.CollectionView.prototype._renderChildren.call(this)
			},
			_renderTemplate : function () {
				var t = {};
				t = this.serializeData(),
				t = this.mixinTemplateHelpers(t),
				this.triggerMethod("before:render:template");
				var e = this.getTemplate(),
				i = r.Renderer.render(e, t, this);
				this.attachElContent(i),
				this.bindUIElements(),
				this.triggerMethod("render:template")
			},
			attachElContent : function (t) {
				return this.$el.html(t),
				this
			},
			attachBuffer : function (t, e) {
				var i = this.getChildViewContainer(t);
				i.append(e)
			},
			_insertAfter : function (t) {
				var e = this.getChildViewContainer(this, t);
				e.append(t.el)
			},
			_appendReorderedChildren : function (t) {
				var e = this.getChildViewContainer(this);
				e.append(t)
			},
			getChildViewContainer : function (t) {
				if (t.$childViewContainer)
					return t.$childViewContainer;
				var e,
				i = r.getOption(t, "childViewContainer");
				if (i) {
					var n = r._getValue(i, t);
					if (e = "@" === n.charAt(0) && t.ui ? t.ui[n.substr(4)] : t.$(n), e.length <= 0)
						throw new r.Error({
							name : "ChildViewContainerMissingError",
							message : 'The specified "childViewContainer" was not found: ' + t.childViewContainer
						})
				} else
					e = t.$el;
				return t.$childViewContainer = e,
				e
			},
			resetChildViewContainer : function () {
				this.$childViewContainer && (this.$childViewContainer = void 0)
			}
		}),
	r.LayoutView = r.ItemView.extend({
			regionClass : r.Region,
			options : {
				destroyImmediate : !1
			},
			childViewEventPrefix : "childview",
			constructor : function (t) {
				t = t || {},
				this._firstRender = !0,
				this._initializeRegions(t),
				r.ItemView.call(this, t)
			},
			render : function () {
				return this._ensureViewIsIntact(),
				this._firstRender ? this._firstRender = !1 : this._reInitializeRegions(),
				r.ItemView.prototype.render.apply(this, arguments)
			},
			destroy : function () {
				return this.isDestroyed ? this : (this.getOption("destroyImmediate") === !0 && this.$el.remove(), this.regionManager.destroy(), r.ItemView.prototype.destroy.apply(this, arguments))
			},
			showChildView : function (t) {
				var e = this.getRegion(t);
				return e.show.apply(e, i.rest(arguments))
			},
			getChildView : function (t) {
				return this.getRegion(t).currentView
			},
			addRegion : function (t, e) {
				var i = {};
				return i[t] = e,
				this._buildRegions(i)[t]
			},
			addRegions : function (t) {
				return this.regions = i.extend({}, this.regions, t),
				this._buildRegions(t)
			},
			removeRegion : function (t) {
				return delete this.regions[t],
				this.regionManager.removeRegion(t)
			},
			getRegion : function (t) {
				return this.regionManager.get(t)
			},
			getRegions : function () {
				return this.regionManager.getRegions()
			},
			_buildRegions : function (t) {
				var e = {
					regionClass : this.getOption("regionClass"),
					parentEl : i.partial(i.result, this, "el")
				};
				return this.regionManager.addRegions(t, e)
			},
			_initializeRegions : function (t) {
				var e;
				this._initRegionManager(),
				e = r._getValue(this.regions, this, [t]) || {};
				var n = this.getOption.call(t, "regions");
				n = r._getValue(n, this, [t]),
				i.extend(e, n),
				e = this.normalizeUIValues(e, ["selector", "el"]),
				this.addRegions(e)
			},
			_reInitializeRegions : function () {
				this.regionManager.invoke("reset")
			},
			getRegionManager : function () {
				return new r.RegionManager
			},
			_initRegionManager : function () {
				this.regionManager = this.getRegionManager(),
				this.regionManager._parent = this,
				this.listenTo(this.regionManager, "before:add:region", function (t) {
					this.triggerMethod("before:add:region", t)
				}),
				this.listenTo(this.regionManager, "add:region", function (t, e) {
					this[t] = e,
					this.triggerMethod("add:region", t, e)
				}),
				this.listenTo(this.regionManager, "before:remove:region", function (t) {
					this.triggerMethod("before:remove:region", t)
				}),
				this.listenTo(this.regionManager, "remove:region", function (t, e) {
					delete this[t],
					this.triggerMethod("remove:region", t, e)
				})
			},
			_getImmediateChildren : function () {
				return i.chain(this.regionManager.getRegions()).pluck("currentView").compact().value()
			}
		}),
	r.Behavior = r.Object.extend({
			constructor : function (t, e) {
				this.view = e,
				this.defaults = i.result(this, "defaults") || {},
				this.options = i.extend({}, this.defaults, t),
				this.ui = i.extend({}, i.result(e, "ui"), i.result(this, "ui")),
				r.Object.apply(this, arguments)
			},
			$ : function () {
				return this.view.$.apply(this.view, arguments)
			},
			destroy : function () {
				return this.stopListening(),
				this
			},
			proxyViewProperties : function (t) {
				this.$el = t.$el,
				this.el = t.el
			}
		}),
	r.Behaviors = function (t, e) {
		function i(t, n) {
			return e.isObject(t.behaviors) ? (n = i.parseBehaviors(t, n || e.result(t, "behaviors")), i.wrap(t, n, e.keys(o)), n) : {}

		}
		function n(t, e) {
			this._view = t,
			this._behaviors = e,
			this._triggers = {}

		}
		function s(t) {
			return t._uiBindings || t.ui
		}
		var r = /^(\S+)\s*(.*)$/,
		o = {
			behaviorTriggers : function (t, e) {
				var i = new n(this, e);
				return i.buildBehaviorTriggers()
			},
			behaviorEvents : function (i, n) {
				var o = {};
				return e.each(n, function (i, n) {
					var a = {},
					l = e.clone(e.result(i, "events")) || {};
					l = t.normalizeUIKeys(l, s(i));
					var h = 0;
					e.each(l, function (t, s) {
						var o = s.match(r),
						l = o[1] + "." + [this.cid, n, h++, " "].join(""),
						u = o[2],
						c = l + u,
						d = e.isFunction(t) ? t : i[t];
						a[c] = e.bind(d, i)
					}, this),
					o = e.extend(o, a)
				}, this),
				o
			}
		};
		return e.extend(i, {
			behaviorsLookup : function () {
				throw new t.Error({
					message : "You must define where your behaviors are stored.",
					url : "marionette.behaviors.html#behaviorslookup"
				})
			},
			getBehaviorClass : function (e, n) {
				return e.behaviorClass ? e.behaviorClass : t._getValue(i.behaviorsLookup, this, [e, n])[n]
			},
			parseBehaviors : function (t, n) {
				return e.chain(n).map(function (n, s) {
					var r = i.getBehaviorClass(n, s),
					o = new r(n, t),
					a = i.parseBehaviors(t, e.result(o, "behaviors"));
					return [o].concat(a)
				}).flatten().value()
			},
			wrap : function (t, i, n) {
				e.each(n, function (n) {
					t[n] = e.partial(o[n], t[n], i)
				})
			}
		}),
		e.extend(n.prototype, {
			buildBehaviorTriggers : function () {
				return e.each(this._behaviors, this._buildTriggerHandlersForBehavior, this),
				this._triggers
			},
			_buildTriggerHandlersForBehavior : function (i, n) {
				var r = e.clone(e.result(i, "triggers")) || {};
				r = t.normalizeUIKeys(r, s(i)),
				e.each(r, e.bind(this._setHandlerForBehavior, this, i, n))
			},
			_setHandlerForBehavior : function (t, e, i, n) {
				var s = n.replace(/^\S+/, function (t) {
						return t + ".behaviortriggers" + e
					});
				this._triggers[s] = this._view._buildViewTrigger(i)
			}
		}),
		i
	}
	(r, i),
	r.AppRouter = e.Router.extend({
			constructor : function (t) {
				this.options = t || {},
				e.Router.apply(this, arguments);
				var i = this.getOption("appRoutes"),
				n = this._getController();
				this.processAppRoutes(n, i),
				this.on("route", this._processOnRoute, this)
			},
			appRoute : function (t, e) {
				var i = this._getController();
				this._addAppRoute(i, t, e)
			},
			_processOnRoute : function (t, e) {
				if (i.isFunction(this.onRoute)) {
					var n = i.invert(this.getOption("appRoutes"))[t];
					this.onRoute(t, n, e)
				}
			},
			processAppRoutes : function (t, e) {
				if (e) {
					var n = i.keys(e).reverse();
					i.each(n, function (i) {
						this._addAppRoute(t, i, e[i])
					}, this)
				}
			},
			_getController : function () {
				return this.getOption("controller")
			},
			_addAppRoute : function (t, e, n) {
				var s = t[n];
				if (!s)
					throw new r.Error('Method "' + n + '" was not found on the controller');
				this.route(e, n, i.bind(s, t))
			},
			mergeOptions : r.mergeOptions,
			getOption : r.proxyGetOption,
			triggerMethod : r.triggerMethod,
			bindEntityEvents : r.proxyBindEntityEvents,
			unbindEntityEvents : r.proxyUnbindEntityEvents
		}),
	r.Application = r.Object.extend({
			constructor : function (t) {
				this._initializeRegions(t),
				this._initCallbacks = new r.Callbacks,
				this.submodules = {},
				i.extend(this, t),
				this._initChannel(),
				r.Object.apply(this, arguments)
			},
			execute : function () {
				this.commands.execute.apply(this.commands, arguments)
			},
			request : function () {
				return this.reqres.request.apply(this.reqres, arguments)
			},
			addInitializer : function (t) {
				this._initCallbacks.add(t)
			},
			start : function (t) {
				this.triggerMethod("before:start", t),
				this._initCallbacks.run(t, this),
				this.triggerMethod("start", t)
			},
			addRegions : function (t) {
				return this._regionManager.addRegions(t)
			},
			emptyRegions : function () {
				return this._regionManager.emptyRegions()
			},
			removeRegion : function (t) {
				return this._regionManager.removeRegion(t)
			},
			getRegion : function (t) {
				return this._regionManager.get(t)
			},
			getRegions : function () {
				return this._regionManager.getRegions()
			},
			module : function (t, e) {
				var n = r.Module.getClass(e),
				s = i.toArray(arguments);
				return s.unshift(this),
				n.create.apply(n, s)
			},
			getRegionManager : function () {
				return new r.RegionManager
			},
			_initializeRegions : function (t) {
				var e = i.isFunction(this.regions) ? this.regions(t) : this.regions || {};
				this._initRegionManager();
				var n = r.getOption(t, "regions");
				return i.isFunction(n) && (n = n.call(this, t)),
				i.extend(e, n),
				this.addRegions(e),
				this
			},
			_initRegionManager : function () {
				this._regionManager = this.getRegionManager(),
				this._regionManager._parent = this,
				this.listenTo(this._regionManager, "before:add:region", function () {
					r._triggerMethod(this, "before:add:region", arguments)
				}),
				this.listenTo(this._regionManager, "add:region", function (t, e) {
					this[t] = e,
					r._triggerMethod(this, "add:region", arguments)
				}),
				this.listenTo(this._regionManager, "before:remove:region", function () {
					r._triggerMethod(this, "before:remove:region", arguments)
				}),
				this.listenTo(this._regionManager, "remove:region", function (t) {
					delete this[t],
					r._triggerMethod(this, "remove:region", arguments)
				})
			},
			_initChannel : function () {
				this.channelName = i.result(this, "channelName") || "global",
				this.channel = i.result(this, "channel") || e.Wreqr.radio.channel(this.channelName),
				this.vent = i.result(this, "vent") || this.channel.vent,
				this.commands = i.result(this, "commands") || this.channel.commands,
				this.reqres = i.result(this, "reqres") || this.channel.reqres
			}
		}),
	r.Module = function (t, e, n) {
		this.moduleName = t,
		this.options = i.extend({}, this.options, n),
		this.initialize = n.initialize || this.initialize,
		this.submodules = {},
		this._setupInitializersAndFinalizers(),
		this.app = e,
		i.isFunction(this.initialize) && this.initialize(t, e, this.options)
	},
	r.Module.extend = r.extend,
	i.extend(r.Module.prototype, e.Events, {
		startWithParent : !0,
		initialize : function () {},
		addInitializer : function (t) {
			this._initializerCallbacks.add(t)
		},
		addFinalizer : function (t) {
			this._finalizerCallbacks.add(t)
		},
		start : function (t) {
			this._isInitialized || (i.each(this.submodules, function (e) {
					e.startWithParent && e.start(t)
				}), this.triggerMethod("before:start", t), this._initializerCallbacks.run(t, this), this._isInitialized = !0, this.triggerMethod("start", t))
		},
		stop : function () {
			this._isInitialized && (this._isInitialized = !1, this.triggerMethod("before:stop"), i.invoke(this.submodules, "stop"), this._finalizerCallbacks.run(void 0, this), this._initializerCallbacks.reset(), this._finalizerCallbacks.reset(), this.triggerMethod("stop"))
		},
		addDefinition : function (t, e) {
			this._runModuleDefinition(t, e)
		},
		_runModuleDefinition : function (t, n) {
			if (t) {
				var s = i.flatten([this, this.app, e, r, e.$, i, n]);
				t.apply(this, s)
			}
		},
		_setupInitializersAndFinalizers : function () {
			this._initializerCallbacks = new r.Callbacks,
			this._finalizerCallbacks = new r.Callbacks
		},
		triggerMethod : r.triggerMethod
	}),
	i.extend(r.Module, {
		create : function (t, e, n) {
			var s = t,
			r = i.drop(arguments, 3);
			e = e.split(".");
			var o = e.length,
			a = [];
			return a[o - 1] = n,
			i.each(e, function (e, i) {
				var o = s;
				s = this._getModule(o, e, t, n),
				this._addModuleDefinition(o, s, a[i], r)
			}, this),
			s
		},
		_getModule : function (t, e, n, s) {
			var r = i.extend({}, s),
			o = this.getClass(s),
			a = t[e];
			return a || (a = new o(e, n, r), t[e] = a, t.submodules[e] = a),
			a
		},
		getClass : function (t) {
			var e = r.Module;
			return t ? t.prototype instanceof e ? t : t.moduleClass || e : e
		},
		_addModuleDefinition : function (t, e, i, n) {
			var s = this._getDefine(i),
			r = this._getStartWithParent(i, e);
			s && e.addDefinition(s, n),
			this._addStartWithParent(t, e, r)
		},
		_getStartWithParent : function (t, e) {
			var n;
			return i.isFunction(t) && t.prototype instanceof r.Module ? (n = e.constructor.prototype.startWithParent, i.isUndefined(n) ? !0 : n) : i.isObject(t) ? (n = t.startWithParent, i.isUndefined(n) ? !0 : n) : !0
		},
		_getDefine : function (t) {
			return !i.isFunction(t) || t.prototype instanceof r.Module ? i.isObject(t) ? t.define : null : t
		},
		_addStartWithParent : function (t, e, i) {
			e.startWithParent = e.startWithParent && i,
			e.startWithParent && !e.startWithParentIsConfigured && (e.startWithParentIsConfigured = !0, t.addInitializer(function (t) {
					e.startWithParent && e.start(t)
				}))
		}
	}),
	r
}), function (t, e) {
	function i(t) {
		return t.call.apply(t.bind, arguments)
	}
	function n(t, e) {
		if (!t)
			throw Error();
		if (2 < arguments.length) {
			var i = Array.prototype.slice.call(arguments, 2);
			return function () {
				var n = Array.prototype.slice.call(arguments);
				return Array.prototype.unshift.apply(n, i),
				t.apply(e, n)
			}
		}
		return function () {
			return t.apply(e, arguments)
		}
	}
	function s() {
		return s = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? i : n,
		s.apply(null, arguments)
	}
	function r(t, e) {
		this.K = t,
		this.w = e || t,
		this.G = this.w.document
	}
	function o(t, i, n) {
		t = t.G.getElementsByTagName(i)[0],
		t || (t = e.documentElement),
		t && t.lastChild && t.insertBefore(n, t.lastChild)
	}
	function a(t, e) {
		function i() {
			t.G.body ? e() : setTimeout(i, 0)
		}
		i()
	}
	function l(t, e, i) {
		e = e || [],
		i = i || [];
		for (var n = t.className.split(/\s+/), s = 0; s < e.length; s += 1) {
			for (var r = !1, o = 0; o < n.length; o += 1)
				if (e[s] === n[o]) {
					r = !0;
					break
				}
			r || n.push(e[s])
		}
		for (e = [], s = 0; s < n.length; s += 1) {
			for (r = !1, o = 0; o < i.length; o += 1)
				if (n[s] === i[o]) {
					r = !0;
					break
				}
			r || e.push(n[s])
		}
		t.className = e.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
	}
	function h(t, e) {
		for (var i = t.className.split(/\s+/), n = 0, s = i.length; s > n; n++)
			if (i[n] == e)
				return !0;
		return !1
	}
	function u(t) {
		if ("string" == typeof t.na)
			return t.na;
		var e = t.w.location.protocol;
		return "about:" == e && (e = t.K.location.protocol),
		"https:" == e ? "https:" : "http:"
	}
	function c(t, e) {
		var i = t.createElement("link", {
				rel : "stylesheet",
				href : e,
				media : "all"
			}),
		n = !1;
		i.onload = function () {
			n || (n = !0)
		},
		i.onerror = function () {
			n || (n = !0)
		},
		o(t, "head", i)
	}
	function d(e, i, n, s) {
		var r = e.G.getElementsByTagName("head")[0];
		if (r) {
			var o = e.createElement("script", {
					src : i
				}),
			a = !1;
			return o.onload = o.onreadystatechange = function () {
				a || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (a = !0, n && n(null), o.onload = o.onreadystatechange = null, "HEAD" == o.parentNode.tagName && r.removeChild(o))
			},
			r.appendChild(o),
			t.setTimeout(function () {
				a || (a = !0, n && n(Error("Script load timeout")))
			}, s || 5e3),
			o
		}
		return null
	}
	function f(t, e) {
		this.Y = t,
		this.ga = e
	}
	function p(t, e, i, n) {
		this.c = null != t ? t : null,
		this.g = null != e ? e : null,
		this.D = null != i ? i : null,
		this.e = null != n ? n : null
	}
	function g(t) {
		t = G.exec(t);
		var e = null,
		i = null,
		n = null,
		s = null;
		return t && (null !== t[1] && t[1] && (e = parseInt(t[1], 10)), null !== t[2] && t[2] && (i = parseInt(t[2], 10)), null !== t[3] && t[3] && (n = parseInt(t[3], 10)), null !== t[4] && t[4] && (s = /^[0-9]+$/.test(t[4]) ? parseInt(t[4], 10) : t[4])),
		new p(e, i, n, s)
	}
	function m(t, e, i, n, s, r, o, a) {
		this.N = t,
		this.k = a
	}
	function v(t) {
		this.a = t
	}
	function b(t) {
		var e = w(t.a, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
		return "" != e ? (/BB\d{2}/.test(e) && (e = "BlackBerry"), e) : (t = w(t.a, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/, 1), "" != t ? ("Mac_PowerPC" == t ? t = "Macintosh" : "PlayStation" == t && (t = "Linux"), t) : "Unknown")
	}
	function y(t) {
		var e = w(t.a, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
		if (e || (e = w(t.a, /Windows Phone( OS)? ([^;)]+)/, 2)) || (e = w(t.a, /(iPhone )?OS ([\d_]+)/, 2)))
			return e;
		if (e = w(t.a, /(?:Linux|CrOS|CrKey) ([^;)]+)/, 1))
			for (var e = e.split(/\s/), i = 0; i < e.length; i += 1)
				if (/^[\d\._]+$/.test(e[i]))
					return e[i];
		return (t = w(t.a, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? t : "Unknown"
	}
	function _(t) {
		var e = b(t),
		i = g(y(t)),
		n = g(w(t.a, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1)),
		s = "Unknown",
		r = new p,
		r = "Unknown",
		o = !1;
		return /OPR\/[\d.]+/.test(t.a) ? s = "Opera" : -1 != t.a.indexOf("Chrome") || -1 != t.a.indexOf("CrMo") || -1 != t.a.indexOf("CriOS") ? s = "Chrome" : /Silk\/\d/.test(t.a) ? s = "Silk" : "BlackBerry" == e || "Android" == e ? s = "BuiltinBrowser" : -1 != t.a.indexOf("PhantomJS") ? s = "PhantomJS" : -1 != t.a.indexOf("Safari") ? s = "Safari" : -1 != t.a.indexOf("AdobeAIR") ? s = "AdobeAIR" : -1 != t.a.indexOf("PlayStation") && (s = "BuiltinBrowser"),
		"BuiltinBrowser" == s ? r = "Unknown" : "Silk" == s ? r = w(t.a, /Silk\/([\d\._]+)/, 1) : "Chrome" == s ? r = w(t.a, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : -1 != t.a.indexOf("Version/") ? r = w(t.a, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == s ? r = w(t.a, /AdobeAIR\/([\d\.]+)/, 1) : "Opera" == s ? r = w(t.a, /OPR\/([\d.]+)/, 1) : "PhantomJS" == s && (r = w(t.a, /PhantomJS\/([\d.]+)/, 1)),
		r = g(r),
		o = "AdobeAIR" == s ? 2 < r.c || 2 == r.c && 5 <= r.g : "BlackBerry" == e ? 10 <= i.c : "Android" == e ? 2 < i.c || 2 == i.c && 1 < i.g : 526 <= n.c || 525 <= n.c && 13 <= n.g,
		new m(s, 0, 0, 0, 0, 0, 0, new f(o, 536 > n.c || 536 == n.c && 11 > n.g))
	}
	function w(t, e, i) {
		return (t = t.match(e)) && t[i] ? t[i] : ""
	}
	function x(t) {
		this.ma = t || "-"
	}
	function k(t, e) {
		this.N = t,
		this.Z = 4,
		this.O = "n";
		var i = (e || "n4").match(/^([nio])([1-9])$/i);
		i && (this.O = i[1], this.Z = parseInt(i[2], 10))
	}
	function C(t) {
		return t.O + t.Z
	}
	function E(t) {
		var e = 4,
		i = "n",
		n = null;
		return t && ((n = t.match(/(normal|oblique|italic)/i)) && n[1] && (i = n[1].substr(0, 1).toLowerCase()), (n = t.match(/([1-9]00|normal|bold)/i)) && n[1] && (/bold/i.test(n[1]) ? e = 7 : /[1-9]00/.test(n[1]) && (e = parseInt(n[1].substr(0, 1), 10)))),
		i + e
	}
	function T(t, e) {
		this.d = t,
		this.q = t.w.document.documentElement,
		this.Q = e,
		this.j = "wf",
		this.h = new x("-"),
		this.ha = !1 !== e.events,
		this.F = !1 !== e.classes
	}
	function S(t) {
		if (t.F) {
			var e = h(t.q, t.h.e(t.j, "active")),
			i = [],
			n = [t.h.e(t.j, "loading")];
			e || i.push(t.h.e(t.j, "inactive")),
			l(t.q, i, n)
		}
		I(t, "inactive")
	}
	function I(t, e, i) {
		t.ha && t.Q[e] && (i ? t.Q[e](i.getName(), C(i)) : t.Q[e]())
	}
	function D() {
		this.C = {}

	}
	function A(t, e) {
		this.d = t,
		this.I = e,
		this.o = this.d.createElement("span", {
				"aria-hidden" : "true"
			}, this.I)
	}
	function M(t, e) {
		var i,
		n = t.o;
		i = [];
		for (var s = e.N.split(/,\s*/), r = 0; r < s.length; r++) {
			var o = s[r].replace(/['"]/g, "");
			i.push(-1 == o.indexOf(" ") ? o : "'" + o + "'")
		}
		i = i.join(","),
		s = "normal",
		"o" === e.O ? s = "oblique" : "i" === e.O && (s = "italic"),
		n.style.cssText = "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + i + ";" + ("font-style:" + s + ";font-weight:" + (e.Z + "00") + ";")
	}
	function N(t) {
		o(t.d, "body", t.o)
	}
	function O(t, e, i, n, s, r, o, a) {
		this.$ = t,
		this.ka = e,
		this.d = i,
		this.m = n,
		this.k = s,
		this.I = a || "BESbswy",
		this.v = {},
		this.X = r || 3e3,
		this.ca = o || null,
		this.H = this.u = this.t = null,
		this.t = new A(this.d, this.I),
		this.u = new A(this.d, this.I),
		this.H = new A(this.d, this.I),
		M(this.t, new k("serif", C(this.m))),
		M(this.u, new k("sans-serif", C(this.m))),
		M(this.H, new k("monospace", C(this.m))),
		N(this.t),
		N(this.u),
		N(this.H),
		this.v.serif = this.t.o.offsetWidth,
		this.v["sans-serif"] = this.u.o.offsetWidth,
		this.v.monospace = this.H.o.offsetWidth
	}
	function P(t, e, i) {
		for (var n in Q)
			if (Q.hasOwnProperty(n) && e === t.v[Q[n]] && i === t.v[Q[n]])
				return !0;
		return !1
	}
	function z(t) {
		var e = t.t.o.offsetWidth,
		i = t.u.o.offsetWidth;
		e === t.v.serif && i === t.v["sans-serif"] || t.k.ga && P(t, e, i) ? Z() - t.oa >= t.X ? t.k.ga && P(t, e, i) && (null === t.ca || t.ca.hasOwnProperty(t.m.getName())) ? H(t, t.$) : H(t, t.ka) : R(t) : H(t, t.$)
	}
	function R(t) {
		setTimeout(s(function () {
				z(this)
			}, t), 50)
	}
	function H(t, e) {
		t.t.remove(),
		t.u.remove(),
		t.H.remove(),
		e(t.m)
	}
	function L(t, e, i, n) {
		this.d = e,
		this.A = i,
		this.S = 0,
		this.ea = this.ba = !1,
		this.X = n,
		this.k = t.k
	}
	function j(t, e, i, n, r) {
		if (i = i || {}, 0 === e.length && r)
			S(t.A);
		else
			for (t.S += e.length, r && (t.ba = r), r = 0; r < e.length; r++) {
				var o = e[r],
				a = i[o.getName()],
				h = t.A,
				u = o;
				h.F && l(h.q, [h.h.e(h.j, u.getName(), C(u).toString(), "loading")]),
				I(h, "fontloading", u),
				h = null,
				h = new O(s(t.ia, t), s(t.ja, t), t.d, o, t.k, t.X, n, a),
				h.start()
			}
	}
	function B(t) {
		0 == --t.S && t.ba && (t.ea ? (t = t.A, t.F && l(t.q, [t.h.e(t.j, "active")], [t.h.e(t.j, "loading"), t.h.e(t.j, "inactive")]), I(t, "active")) : S(t.A))
	}
	function F(t) {
		this.K = t,
		this.B = new D,
		this.pa = new v(t.navigator.userAgent),
		this.a = this.pa.parse(),
		this.U = this.V = 0,
		this.R = this.T = !0
	}
	function W(t, e, i, n, s) {
		var r = 0 == --t.V;
		(t.R || t.T) && setTimeout(function () {
			j(e, i, n || null, s || null, r)
		}, 0)
	}
	function $(t, e, i) {
		this.P = t ? t : e + tt,
		this.s = [],
		this.W = [],
		this.fa = i || ""
	}
	function V(t) {
		this.s = t,
		this.da = [],
		this.M = {}

	}
	function q(t, e) {
		this.a = new v(navigator.userAgent).parse(),
		this.d = t,
		this.f = e
	}
	function U(t, e) {
		this.d = t,
		this.f = e,
		this.p = []
	}
	function Y(t, e) {
		this.d = t,
		this.f = e,
		this.p = []
	}
	function K(t, e) {
		this.d = t,
		this.f = e,
		this.p = []
	}
	function X(t, e) {
		this.d = t,
		this.f = e
	}
	var Z = Date.now || function () {
		return +new Date
	};
	r.prototype.createElement = function (t, e, i) {
		if (t = this.G.createElement(t), e)
			for (var n in e)
				e.hasOwnProperty(n) && ("style" == n ? t.style.cssText = e[n] : t.setAttribute(n, e[n]));
		return i && t.appendChild(this.G.createTextNode(i)),
		t
	};
	var G = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
	p.prototype.compare = function (t) {
		return this.c > t.c || this.c === t.c && this.g > t.g || this.c === t.c && this.g === t.g && this.D > t.D ? 1 : this.c < t.c || this.c === t.c && this.g < t.g || this.c === t.c && this.g === t.g && this.D < t.D ? -1 : 0
	},
	p.prototype.toString = function () {
		return [this.c, this.g || "", this.D || "", this.e || ""].join("")
	},
	m.prototype.getName = function () {
		return this.N
	};
	var J = new m("Unknown", 0, 0, 0, 0, 0, 0, new f(!1, !1));
	v.prototype.parse = function () {
		var t;
		if (-1 != this.a.indexOf("MSIE") || -1 != this.a.indexOf("Trident/")) {
			t = b(this);
			var e = g(y(this)),
			i = null,
			n = w(this.a, /Trident\/([\d\w\.]+)/, 1),
			i = g(-1 != this.a.indexOf("MSIE") ? w(this.a, /MSIE ([\d\w\.]+)/, 1) : w(this.a, /rv:([\d\w\.]+)/, 1));
			"" != n && g(n),
			t = new m("MSIE", 0, 0, 0, 0, 0, 0, new f("Windows" == t && 6 <= i.c || "Windows Phone" == t && 8 <= e.c, !1))
		} else if (-1 != this.a.indexOf("Opera"))
			t : if (t = g(w(this.a, /Presto\/([\d\w\.]+)/, 1)), g(y(this)), null !== t.c || g(w(this.a, /rv:([^\)]+)/, 1)), -1 != this.a.indexOf("Opera Mini/"))
				t = g(w(this.a, /Opera Mini\/([\d\.]+)/, 1)), t = new m("OperaMini", 0, 0, 0, b(this), 0, 0, new f(!1, !1));
			else {
				if (-1 != this.a.indexOf("Version/") && (t = g(w(this.a, /Version\/([\d\.]+)/, 1)), null !== t.c)) {
					t = new m("Opera", 0, 0, 0, b(this), 0, 0, new f(10 <= t.c, !1));
					break t
				}
				t = g(w(this.a, /Opera[\/ ]([\d\.]+)/, 1)),
				t = null !== t.c ? new m("Opera", 0, 0, 0, b(this), 0, 0, new f(10 <= t.c, !1)) : new m("Opera", 0, 0, 0, b(this), 0, 0, new f(!1, !1))
			}
		else  / OPR \  / [ \ d.] + /.test(this.a)?t=_(this):/AppleWeb(K | k)it / .test(this.a) ? t = _(this) : -1 != this.a.indexOf("Gecko") ? (t = "Unknown", e = new p, g(y(this)), e = !1, -1 != this.a.indexOf("Firefox") ? (t = "Firefox", e = g(w(this.a, /Firefox\/([\d\w\.]+)/, 1)), e = 3 <= e.c && 5 <= e.g) : -1 != this.a.indexOf("Mozilla") && (t = "Mozilla"), i = g(w(this.a, /rv:([^\)]+)/, 1)), e || (e = 1 < i.c || 1 == i.c && 9 < i.g || 1 == i.c && 9 == i.g && 2 <= i.D), t = new m(t, 0, 0, 0, b(this), 0, 0, new f(e, !1))) : t = J;
		return t
	},
	x.prototype.e = function () {
		for (var t = [], e = 0; e < arguments.length; e++)
			t.push(arguments[e].replace(/[\W_]+/g, "").toLowerCase());
		return t.join(this.ma)
	},
	k.prototype.getName = function () {
		return this.N
	},
	A.prototype.remove = function () {
		var t = this.o;
		t.parentNode && t.parentNode.removeChild(t)
	};
	var Q = {
		sa : "serif",
		ra : "sans-serif",
		qa : "monospace"
	};
	O.prototype.start = function () {
		this.oa = Z(),
		M(this.t, new k(this.m.getName() + ",serif", C(this.m))),
		M(this.u, new k(this.m.getName() + ",sans-serif", C(this.m))),
		z(this)
	},
	L.prototype.ia = function (t) {
		var e = this.A;
		e.F && l(e.q, [e.h.e(e.j, t.getName(), C(t).toString(), "active")], [e.h.e(e.j, t.getName(), C(t).toString(), "loading"), e.h.e(e.j, t.getName(), C(t).toString(), "inactive")]),
		I(e, "fontactive", t),
		this.ea = !0,
		B(this)
	},
	L.prototype.ja = function (t) {
		var e = this.A;
		if (e.F) {
			var i = h(e.q, e.h.e(e.j, t.getName(), C(t).toString(), "active")),
			n = [],
			s = [e.h.e(e.j, t.getName(), C(t).toString(), "loading")];
			i || n.push(e.h.e(e.j, t.getName(), C(t).toString(), "inactive")),
			l(e.q, n, s)
		}
		I(e, "fontinactive", t),
		B(this)
	},
	F.prototype.load = function (t) {
		this.d = new r(this.K, t.context || this.K),
		this.T = !1 !== t.events,
		this.R = !1 !== t.classes;
		var e = new T(this.d, t),
		i = [],
		n = t.timeout;
		e.F && l(e.q, [e.h.e(e.j, "loading")]),
		I(e, "loading");
		var o,
		i = this.B,
		a = this.d,
		h = [];
		for (o in t)
			if (t.hasOwnProperty(o)) {
				var u = i.C[o];
				u && h.push(u(t[o], a))
			}
		for (i = h, this.U = this.V = i.length, t = new L(this.a, this.d, e, n), n = 0, o = i.length; o > n; n++)
			a = i[n], a.L(this.a, s(this.la, this, a, e, t))
	},
	F.prototype.la = function (t, e, i, n) {
		var s = this;
		n ? t.load(function (t, e, n) {
			W(s, i, t, e, n)
		}) : (t = 0 == --this.V, this.U--, t && 0 == this.U ? S(e) : (this.R || this.T) && j(i, [], {}, null, t))
	};
	var tt = "//fonts.googleapis.com/css";
	$.prototype.e = function () {
		if (0 == this.s.length)
			throw Error("No fonts to load!");
		if (-1 != this.P.indexOf("kit="))
			return this.P;
		for (var t = this.s.length, e = [], i = 0; t > i; i++)
			e.push(this.s[i].replace(/ /g, "+"));
		return t = this.P + "?family=" + e.join("%7C"),
		0 < this.W.length && (t += "&subset=" + this.W.join(",")),
		0 < this.fa.length && (t += "&text=" + encodeURIComponent(this.fa)),
		t
	};
	var et = {
		latin : "BESbswy",
		cyrillic : "&#1081;&#1103;&#1046;",
		greek : "&#945;&#946;&#931;",
		khmer : "&#x1780;&#x1781;&#x1782;",
		Hanuman : "&#x1780;&#x1781;&#x1782;"
	},
	it = {
		thin : "1",
		extralight : "2",
		"extra-light" : "2",
		ultralight : "2",
		"ultra-light" : "2",
		light : "3",
		regular : "4",
		book : "4",
		medium : "5",
		"semi-bold" : "6",
		semibold : "6",
		"demi-bold" : "6",
		demibold : "6",
		bold : "7",
		"extra-bold" : "8",
		extrabold : "8",
		"ultra-bold" : "8",
		ultrabold : "8",
		black : "9",
		heavy : "9",
		l : "3",
		r : "4",
		b : "7"
	},
	nt = {
		i : "i",
		italic : "i",
		n : "n",
		normal : "n"
	},
	st = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
	V.prototype.parse = function () {
		for (var t = this.s.length, e = 0; t > e; e++) {
			var i = this.s[e].split(":"),
			n = i[0].replace(/\+/g, " "),
			s = ["n4"];
			if (2 <= i.length) {
				var r,
				o = i[1];
				if (r = [], o)
					for (var o = o.split(","), a = o.length, l = 0; a > l; l++) {
						var h;
						if (h = o[l], h.match(/^[\w-]+$/)) {
							h = st.exec(h.toLowerCase());
							var u = void 0;
							if (null == h)
								u = "";
							else {
								if (u = void 0, u = h[1], null == u || "" == u)
									u = "4";
								else
									var c = it[u], u = c ? c : isNaN(u) ? "4" : u.substr(0, 1);
								h = h[2],
								u = [null == h || "" == h ? "n" : nt[h], u].join("")
							}
							h = u
						} else
							h = "";
						h && r.push(h)
					}
				0 < r.length && (s = r),
				3 == i.length && (i = i[2], r = [], i = i ? i.split(",") : r, 0 < i.length && (i = et[i[0]]) && (this.M[n] = i))
			}
			for (this.M[n] || (i = et[n]) && (this.M[n] = i), i = 0; i < s.length; i += 1)
				this.da.push(new k(n, s[i]))
		}
	};
	var rt = {
		Arimo : !0,
		Cousine : !0,
		Tinos : !0
	};
	q.prototype.L = function (t, e) {
		e(t.k.Y)
	},
	q.prototype.load = function (t) {
		var e = this.d;
		"MSIE" == this.a.getName() && 1 != this.f.blocking ? a(e, s(this.aa, this, t)) : this.aa(t)
	},
	q.prototype.aa = function (t) {
		for (var e = this.d, i = new $(this.f.api, u(e), this.f.text), n = this.f.families, s = n.length, r = 0; s > r; r++) {
			var o = n[r].split(":");
			3 == o.length && i.W.push(o.pop());
			var a = "";
			2 == o.length && "" != o[1] && (a = ":"),
			i.s.push(o.join(a))
		}
		n = new V(n),
		n.parse(),
		c(e, i.e()),
		t(n.da, n.M, rt)
	},
	U.prototype.J = function (t) {
		var e = this.d;
		return u(this.d) + (this.f.api || "//f.fontdeck.com/s/css/js/") + (e.w.location.hostname || e.K.location.hostname) + "/" + t + ".js";

	},
	U.prototype.L = function (t, e) {
		var i = this.f.id,
		n = this.d.w,
		s = this;
		i ? (n.__webfontfontdeckmodule__ || (n.__webfontfontdeckmodule__ = {}), n.__webfontfontdeckmodule__[i] = function (t, i) {
			for (var n = 0, r = i.fonts.length; r > n; ++n) {
				var o = i.fonts[n];
				s.p.push(new k(o.name, E("font-weight:" + o.weight + ";font-style:" + o.style)))
			}
			e(t)
		}, d(this.d, this.J(i), function (t) {
				t && e(!1)
			})) : e(!1)
	},
	U.prototype.load = function (t) {
		t(this.p)
	},
	Y.prototype.J = function (t) {
		var e = u(this.d);
		return (this.f.api || e + "//use.typekit.net") + "/" + t + ".js"
	},
	Y.prototype.L = function (t, e) {
		var i = this.f.id,
		n = this.d.w,
		s = this;
		i ? d(this.d, this.J(i), function (t) {
			if (t)
				e(!1);
			else {
				if (n.Typekit && n.Typekit.config && n.Typekit.config.fn) {
					t = n.Typekit.config.fn;
					for (var i = 0; i < t.length; i += 2)
						for (var r = t[i], o = t[i + 1], a = 0; a < o.length; a++)
							s.p.push(new k(r, o[a]));
					try {
						n.Typekit.load({
							events : !1,
							classes : !1
						})
					} catch (l) {}

				}
				e(!0)
			}
		}, 2e3) : e(!1)
	},
	Y.prototype.load = function (t) {
		t(this.p)
	},
	K.prototype.L = function (t, e) {
		var i = this,
		n = i.f.projectId,
		s = i.f.version;
		if (n) {
			var r = i.d.w;
			d(this.d, i.J(n, s), function (s) {
				if (s)
					e(!1);
				else {
					if (r["__mti_fntLst" + n] && (s = r["__mti_fntLst" + n]()))
						for (var o = 0; o < s.length; o++)
							i.p.push(new k(s[o].fontfamily));
					e(t.k.Y)
				}
			}).id = "__MonotypeAPIScript__" + n
		} else
			e(!1)
	},
	K.prototype.J = function (t, e) {
		var i = u(this.d),
		n = (this.f.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
		return i + "//" + n + "/" + t + ".js" + (e ? "?v=" + e : "")
	},
	K.prototype.load = function (t) {
		t(this.p)
	},
	X.prototype.load = function (t) {
		var e,
		i,
		n = this.f.urls || [],
		s = this.f.families || [],
		r = this.f.testStrings || {};
		for (e = 0, i = n.length; i > e; e++)
			c(this.d, n[e]);
		for (n = [], e = 0, i = s.length; i > e; e++) {
			var o = s[e].split(":");
			if (o[1])
				for (var a = o[1].split(","), l = 0; l < a.length; l += 1)
					n.push(new k(o[0], a[l]));
			else
				n.push(new k(o[0]))
		}
		t(n, r)
	},
	X.prototype.L = function (t, e) {
		return e(t.k.Y)
	};
	var ot = new F(this);
	ot.B.C.custom = function (t, e) {
		return new X(e, t)
	},
	ot.B.C.fontdeck = function (t, e) {
		return new U(e, t)
	},
	ot.B.C.monotype = function (t, e) {
		return new K(e, t)
	},
	ot.B.C.typekit = function (t, e) {
		return new Y(e, t)
	},
	ot.B.C.google = function (t, e) {
		return new q(e, t)
	},
	this.WebFont || (this.WebFont = {}, this.WebFont.load = s(ot.load, ot), this.WebFontConfig && ot.load(this.WebFontConfig))
}
(this, document), function (t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports && "object" == typeof module ? module.exports = t : t(jQuery)
}
(function (t, e) {
	function i(e, i, n, s) {
		for (var r = [], o = 0; o < e.length; o++) {
			var a = e[o];
			if (a) {
				var l = tinycolor(a),
				h = l.toHsl().l < .5 ? "sp-thumb-el sp-thumb-dark" : "sp-thumb-el sp-thumb-light";
				h += tinycolor.equals(i, a) ? " sp-thumb-active" : "";
				var u = l.toString(s.preferredFormat || "rgb"),
				c = m ? "background-color:" + l.toRgbString() : "filter:" + l.toFilter();
				r.push('<span title="' + u + '" data-color="' + l.toRgbString() + '" class="' + h + '"><span class="sp-thumb-inner" style="' + c + ';" /></span>')
			} else {
				var d = "sp-clear-display";
				r.push(t("<div />").append(t('<span data-color="" style="background-color:transparent;" class="' + d + '"></span>').attr("title", s.noColorSelectedText)).html())
			}
		}
		return "<div class='sp-cf " + n + "'>" + r.join("") + "</div>"
	}
	function n() {
		for (var t = 0; t < p.length; t++)
			p[t] && p[t].hide()
	}
	function s(e, i) {
		var n = t.extend({}, f, e);
		return n.callbacks = {
			move : h(n.move, i),
			change : h(n.change, i),
			show : h(n.show, i),
			hide : h(n.hide, i),
			beforeShow : h(n.beforeShow, i)
		},
		n
	}
	function r(r, a) {
		function h() {
			if (U.showPaletteOnly && (U.showPalette = !0), Lt.text(U.showPaletteOnly ? U.togglePaletteMoreText : U.togglePaletteLessText), U.palette) {
				ft = U.palette.slice(0),
				pt = t.isArray(ft[0]) ? ft : [ft],
				gt = {};
				for (var e = 0; e < pt.length; e++)
					for (var i = 0; i < pt[e].length; i++) {
						var n = tinycolor(pt[e][i]).toRgbString();
						gt[n] = !0
					}
			}
			kt.toggleClass("sp-flat", Y),
			kt.toggleClass("sp-input-disabled", !U.showInput),
			kt.toggleClass("sp-alpha-enabled", U.showAlpha),
			kt.toggleClass("sp-clear-enabled", Gt),
			kt.toggleClass("sp-buttons-disabled", !U.showButtons),
			kt.toggleClass("sp-palette-buttons-disabled", !U.togglePaletteOnly),
			kt.toggleClass("sp-palette-disabled", !U.showPalette),
			kt.toggleClass("sp-palette-only", U.showPaletteOnly),
			kt.toggleClass("sp-initial-disabled", !U.showInitial),
			kt.addClass(U.className).addClass(U.containerClassName),
			B()
		}
		function f() {
			function e(e) {
				return e.data && e.data.ignore ? (O(t(e.target).closest(".sp-thumb-el").data("color")), R()) : (O(t(e.target).closest(".sp-thumb-el").data("color")), R(), j(!0), U.hideAfterPaletteSelect && M()),
				!1
			}
			if (g && kt.find("*:not(input)").attr("unselectable", "on"), h(), Ft && wt.after(Wt).hide(), Gt || Rt.hide(), Y)
				wt.after(kt).hide();
			else {
				var i = "parent" === U.appendTo ? wt.parent() : t(U.appendTo);
				1 !== i.length && (i = t("body")),
				i.append(kt)
			}
			y(),
			$t.bind("click.spectrum touchstart.spectrum", function (e) {
				xt || S(),
				e.stopPropagation(),
				t(e.target).is("input") || e.preventDefault()
			}),
			(wt.is(":disabled") || U.disabled === !0) && V(),
			kt.click(l),
			Nt.change(T),
			Nt.bind("paste", function () {
				setTimeout(T, 1)
			}),
			Nt.keydown(function (t) {
				13 == t.keyCode && T()
			}),
			zt.text(U.cancelText),
			zt.bind("click.spectrum", function (t) {
				t.stopPropagation(),
				t.preventDefault(),
				N(),
				M()
			}),
			Rt.attr("title", U.clearText),
			Rt.bind("click.spectrum", function (t) {
				t.stopPropagation(),
				t.preventDefault(),
				Zt = !0,
				R(),
				Y && j(!0)
			}),
			Ht.text(U.chooseText),
			Ht.bind("click.spectrum", function (t) {
				t.stopPropagation(),
				t.preventDefault(),
				g && Nt.is(":focus") && Nt.trigger("change"),
				z() && (j(!0), M())
			}),
			Lt.text(U.showPaletteOnly ? U.togglePaletteMoreText : U.togglePaletteLessText),
			Lt.bind("click.spectrum", function (t) {
				t.stopPropagation(),
				t.preventDefault(),
				U.showPaletteOnly = !U.showPaletteOnly,
				U.showPaletteOnly || Y || kt.css("left", "-=" + (Ct.outerWidth(!0) + 5)),
				h()
			}),
			u(At, function (t, e, i) {
				dt = t / ot,
				Zt = !1,
				i.shiftKey && (dt = Math.round(10 * dt) / 10),
				R()
			}, C, E),
			u(St, function (t, e) {
				ht = parseFloat(e / st),
				Zt = !1,
				U.showAlpha || (dt = 1),
				R()
			}, C, E),
			u(Et, function (t, e, i) {
				if (i.shiftKey) {
					if (!yt) {
						var n = ut * et,
						s = it - ct * it,
						r = Math.abs(t - n) > Math.abs(e - s);
						yt = r ? "x" : "y"
					}
				} else
					yt = null;
				var o = !yt || "x" === yt,
				a = !yt || "y" === yt;
				o && (ut = parseFloat(t / et)),
				a && (ct = parseFloat((it - e) / it)),
				Zt = !1,
				U.showAlpha || (dt = 1),
				R()
			}, C, E),
			qt ? (O(qt), H(), Kt = Yt || tinycolor(qt).format, _(qt)) : H(),
			Y && I();
			var n = g ? "mousedown.spectrum" : "click.spectrum touchstart.spectrum";
			Ot.delegate(".sp-thumb-el", n, e),
			Pt.delegate(".sp-thumb-el:nth-child(1)", n, {
				ignore : !0
			}, e)
		}
		function y() {
			if (X && window.localStorage) {
				try {
					var e = window.localStorage[X].split(",#");
					e.length > 1 && (delete window.localStorage[X], t.each(e, function (t, e) {
							_(e)
						}))
				} catch (i) {}

				try {
					mt = window.localStorage[X].split(";")
				} catch (i) {}

			}
		}
		function _(e) {
			if (K) {
				var i = tinycolor(e).toRgbString();
				if (!gt[i] && -1 === t.inArray(i, mt))
					for (mt.push(i); mt.length > vt; )
						mt.shift();
				if (X && window.localStorage)
					try {
						window.localStorage[X] = mt.join(";")
					} catch (n) {}

			}
		}
		function w() {
			var t = [];
			if (U.showPalette)
				for (var e = 0; e < mt.length; e++) {
					var i = tinycolor(mt[e]).toRgbString();
					gt[i] || t.push(mt[e])
				}
			return t.reverse().slice(0, U.maxSelectionSize)
		}
		function x() {
			var e = P(),
			n = t.map(pt, function (t, n) {
					return i(t, e, "sp-palette-row sp-palette-row-" + n, U)
				});
			y(),
			mt && n.push(i(w(), e, "sp-palette-row sp-palette-row-selection", U)),
			Ot.html(n.join(""))
		}
		function k() {
			if (U.showInitial) {
				var t = Ut,
				e = P();
				Pt.html(i([t, e], e, "sp-palette-row-initial", U))
			}
		}
		function C() {
			(0 >= it || 0 >= et || 0 >= st) && B(),
			tt = !0,
			kt.addClass(bt),
			yt = null,
			wt.trigger("dragstart.spectrum", [P()])
		}
		function E() {
			tt = !1,
			kt.removeClass(bt),
			wt.trigger("dragstop.spectrum", [P()])
		}
		function T() {
			var t = Nt.val();
			if (null !== t && "" !== t || !Gt) {
				var e = tinycolor(t);
				e.isValid() ? (O(e), j(!0)) : Nt.addClass("sp-validation-error")
			} else
				O(null), j(!0)
		}
		function S() {
			Q ? M() : I()
		}
		function I() {
			var e = t.Event("beforeShow.spectrum");
			return Q ? void B() : (wt.trigger(e, [P()]), void(G.beforeShow(P()) === !1 || e.isDefaultPrevented() || (n(), Q = !0, t(_t).bind("keydown.spectrum", D), t(_t).bind("click.spectrum", A), t(window).bind("resize.spectrum", J), Wt.addClass("sp-active"), kt.removeClass("sp-hidden"), B(), H(), Ut = P(), k(), G.show(Ut), wt.trigger("show.spectrum", [Ut]))))
		}
		function D(t) {
			27 === t.keyCode && M()
		}
		function A(t) {
			2 != t.button && (tt || (Xt ? j(!0) : N(), M()))
		}
		function M() {
			Q && !Y && (Q = !1, t(_t).unbind("keydown.spectrum", D), t(_t).unbind("click.spectrum", A), t(window).unbind("resize.spectrum", J), Wt.removeClass("sp-active"), kt.addClass("sp-hidden"), G.hide(P()), wt.trigger("hide.spectrum", [P()]))
		}
		function N() {
			O(Ut, !0)
		}
		function O(t, e) {
			if (tinycolor.equals(t, P()))
				return void H();
			var i,
			n;
			!t && Gt ? Zt = !0 : (Zt = !1, i = tinycolor(t), n = i.toHsv(), ht = n.h % 360 / 360, ut = n.s, ct = n.v, dt = n.a),
			H(),
			i && i.isValid() && !e && (Kt = Yt || i.getFormat())
		}
		function P(t) {
			return t = t || {},
			Gt && Zt ? null : tinycolor.fromRatio({
				h : ht,
				s : ut,
				v : ct,
				a : Math.round(100 * dt) / 100
			}, {
				format : t.format || Kt
			})
		}
		function z() {
			return !Nt.hasClass("sp-validation-error")
		}
		function R() {
			H(),
			G.move(P()),
			wt.trigger("move.spectrum", [P()])
		}
		function H() {
			Nt.removeClass("sp-validation-error"),
			L();
			var t = tinycolor.fromRatio({
					h : ht,
					s : 1,
					v : 1
				});
			Et.css("background-color", t.toHexString());
			var e = Kt;
			1 > dt && (0 !== dt || "name" !== e) && ("hex" === e || "hex3" === e || "hex6" === e || "name" === e) && (e = "rgb");
			var i = P({
					format : e
				}),
			n = "";
			if (Vt.removeClass("sp-clear-display"), Vt.css("background-color", "transparent"), !i && Gt)
				Vt.addClass("sp-clear-display");
			else {
				var s = i.toHexString(),
				r = i.toRgbString();
				if (m || 1 === i.alpha ? Vt.css("background-color", r) : (Vt.css("background-color", "transparent"), Vt.css("filter", i.toFilter())), U.showAlpha) {
					var o = i.toRgb();
					o.a = 0;
					var a = tinycolor(o).toRgbString(),
					l = "linear-gradient(left, " + a + ", " + s + ")";
					g ? Dt.css("filter", tinycolor(a).toFilter({
							gradientType : 1
						}, s)) : (Dt.css("background", "-webkit-" + l), Dt.css("background", "-moz-" + l), Dt.css("background", "-ms-" + l), Dt.css("background", "linear-gradient(to right, " + a + ", " + s + ")"))
				}
				n = i.toString(e)
			}
			U.showInput && Nt.val(n),
			U.showPalette && x(),
			k()
		}
		function L() {
			var t = ut,
			e = ct;
			if (Gt && Zt)
				Mt.hide(), It.hide(), Tt.hide();
			else {
				Mt.show(),
				It.show(),
				Tt.show();
				var i = t * et,
				n = it - e * it;
				i = Math.max(-nt, Math.min(et - nt, i - nt)),
				n = Math.max(-nt, Math.min(it - nt, n - nt)),
				Tt.css({
					top : n + "px",
					left : i + "px"
				});
				var s = dt * ot;
				Mt.css({
					left : s - at / 2 + "px"
				});
				var r = ht * st;
				It.css({
					top : r - lt + "px"
				})
			}
		}
		function j(t) {
			var e = P(),
			i = "",
			n = !tinycolor.equals(e, Ut);
			e && (i = e.toString(Kt), _(e)),
			jt && wt.val(i),
			t && n && (G.change(e), wt.trigger("change", [e]))
		}
		function B() {
			et = Et.width(),
			it = Et.height(),
			nt = Tt.height(),
			rt = St.width(),
			st = St.height(),
			lt = It.height(),
			ot = At.width(),
			at = Mt.width(),
			Y || (kt.css("position", "absolute"), kt.offset(U.offset ? U.offset : o(kt, $t))),
			L(),
			U.showPalette && x(),
			wt.trigger("reflow.spectrum")
		}
		function F() {
			wt.show(),
			$t.unbind("click.spectrum touchstart.spectrum"),
			kt.remove(),
			Wt.remove(),
			p[Jt.id] = null
		}
		function W(i, n) {
			return i === e ? t.extend({}, U) : n === e ? U[i] : (U[i] = n, void h())
		}
		function $() {
			xt = !1,
			wt.attr("disabled", !1),
			$t.removeClass("sp-disabled")
		}
		function V() {
			M(),
			xt = !0,
			wt.attr("disabled", !0),
			$t.addClass("sp-disabled")
		}
		function q(t) {
			U.offset = t,
			B()
		}
		var U = s(a, r),
		Y = U.flat,
		K = U.showSelectionPalette,
		X = U.localStorageKey,
		Z = U.theme,
		G = U.callbacks,
		J = c(B, 10),
		Q = !1,
		tt = !1,
		et = 0,
		it = 0,
		nt = 0,
		st = 0,
		rt = 0,
		ot = 0,
		at = 0,
		lt = 0,
		ht = 0,
		ut = 0,
		ct = 0,
		dt = 1,
		ft = [],
		pt = [],
		gt = {},
		mt = U.selectionPalette.slice(0),
		vt = U.maxSelectionSize,
		bt = "sp-dragging",
		yt = null,
		_t = r.ownerDocument,
		wt = (_t.body, t(r)),
		xt = !1,
		kt = t(b, _t).addClass(Z),
		Ct = kt.find(".sp-picker-container"),
		Et = kt.find(".sp-color"),
		Tt = kt.find(".sp-dragger"),
		St = kt.find(".sp-hue"),
		It = kt.find(".sp-slider"),
		Dt = kt.find(".sp-alpha-inner"),
		At = kt.find(".sp-alpha"),
		Mt = kt.find(".sp-alpha-handle"),
		Nt = kt.find(".sp-input"),
		Ot = kt.find(".sp-palette"),
		Pt = kt.find(".sp-initial"),
		zt = kt.find(".sp-cancel"),
		Rt = kt.find(".sp-clear"),
		Ht = kt.find(".sp-choose"),
		Lt = kt.find(".sp-palette-toggle"),
		jt = wt.is("input"),
		Bt = jt && "color" === wt.attr("type") && d(),
		Ft = jt && !Y,
		Wt = Ft ? t(v).addClass(Z).addClass(U.className).addClass(U.replacerClassName) : t([]),
		$t = Ft ? Wt : wt,
		Vt = Wt.find(".sp-preview-inner"),
		qt = U.color || jt && wt.val(),
		Ut = !1,
		Yt = U.preferredFormat,
		Kt = Yt,
		Xt = !U.showButtons || U.clickoutFiresChange,
		Zt = !qt,
		Gt = U.allowEmpty && !Bt;
		f();
		var Jt = {
			show : I,
			hide : M,
			toggle : S,
			reflow : B,
			option : W,
			enable : $,
			disable : V,
			offset : q,
			set : function (t) {
				O(t),
				j()
			},
			get : P,
			destroy : F,
			container : kt
		};
		return Jt.id = p.push(Jt) - 1,
		Jt
	}
	function o(e, i) {
		var n = 0,
		s = e.outerWidth(),
		r = e.outerHeight(),
		o = i.outerHeight(),
		a = e[0].ownerDocument,
		l = a.documentElement,
		h = l.clientWidth + t(a).scrollLeft(),
		u = l.clientHeight + t(a).scrollTop(),
		c = i.offset();
		return c.top += o,
		c.left -= Math.min(c.left, c.left + s > h && h > s ? Math.abs(c.left + s - h) : 0),
		c.top -= Math.min(c.top, c.top + r > u && u > r ? Math.abs(r + o - n) : n),
		c
	}
	function a() {}

	function l(t) {
		t.stopPropagation()
	}
	function h(t, e) {
		var i = Array.prototype.slice,
		n = i.call(arguments, 2);
		return function () {
			return t.apply(e, n.concat(i.call(arguments)))
		}
	}
	function u(e, i, n, s) {
		function r(t) {
			t.stopPropagation && t.stopPropagation(),
			t.preventDefault && t.preventDefault(),
			t.returnValue = !1
		}
		function o(t) {
			if (u) {
				if (g && h.documentMode < 9 && !t.button)
					return l();
				var n = t.originalEvent && t.originalEvent.touches && t.originalEvent.touches[0],
				s = n && n.pageX || t.pageX,
				o = n && n.pageY || t.pageY,
				a = Math.max(0, Math.min(s - c.left, f)),
				m = Math.max(0, Math.min(o - c.top, d));
				p && r(t),
				i.apply(e, [a, m, t])
			}
		}
		function a(i) {
			var s = i.which ? 3 == i.which : 2 == i.button;
			s || u || n.apply(e, arguments) !== !1 && (u = !0, d = t(e).height(), f = t(e).width(), c = t(e).offset(), t(h).bind(m), t(h.body).addClass("sp-dragging"), o(i), r(i))
		}
		function l() {
			u && (t(h).unbind(m), t(h.body).removeClass("sp-dragging"), setTimeout(function () {
					s.apply(e, arguments)
				}, 0)),
			u = !1
		}
		i = i || function () {},
		n = n || function () {},
		s = s || function () {};
		var h = document,
		u = !1,
		c = {},
		d = 0,
		f = 0,
		p = "ontouchstart" in window,
		m = {};
		m.selectstart = r,
		m.dragstart = r,
		m["touchmove mousemove"] = o,
		m["touchend mouseup"] = l,
		t(e).bind("touchstart mousedown", a)
	}
	function c(t, e, i) {
		var n;
		return function () {
			var s = this,
			r = arguments,
			o = function () {
				n = null,
				t.apply(s, r)
			};
			i && clearTimeout(n),
			(i || !n) && (n = setTimeout(o, e))
		}
	}
	function d() {
		return t.fn.spectrum.inputTypeColorSupport()
	}
	var f = {
		beforeShow : a,
		move : a,
		change : a,
		show : a,
		hide : a,
		color : !1,
		flat : !1,
		showInput : !1,
		allowEmpty : !1,
		showButtons : !0,
		clickoutFiresChange : !0,
		showInitial : !1,
		showPalette : !1,
		showPaletteOnly : !1,
		hideAfterPaletteSelect : !1,
		togglePaletteOnly : !1,
		showSelectionPalette : !0,
		localStorageKey : !1,
		appendTo : "body",
		maxSelectionSize : 7,
		cancelText : "cancel",
		chooseText : "choose",
		togglePaletteMoreText : "more",
		togglePaletteLessText : "less",
		clearText : "Clear Color Selection",
		noColorSelectedText : "No Color Selected",
		preferredFormat : !1,
		className : "",
		containerClassName : "",
		replacerClassName : "",
		showAlpha : !1,
		theme : "sp-light",
		palette : [["#ffffff", "#000000", "#ff0000", "#ff8000", "#ffff00", "#008000", "#0000ff", "#4b0082", "#9400d3"]],
		selectionPalette : [],
		disabled : !1,
		offset : null
	},
	p = [],
	g = !!/msie/i.exec(window.navigator.userAgent),
	m = function () {
		function t(t, e) {
			return !!~("" + t).indexOf(e)
		}
		var e = document.createElement("div"),
		i = e.style;
		return i.cssText = "background-color:rgba(0,0,0,.5)",
		t(i.backgroundColor, "rgba") || t(i.backgroundColor, "hsla")
	}
	(),
	v = ["<div class='sp-replacer'>", "<div class='sp-preview'><div class='sp-preview-inner'></div></div>", "<div class='sp-dd'>&#9660;</div>", "</div>"].join(""),
	b = function () {
		var t = "";
		if (g)
			for (var e = 1; 6 >= e; e++)
				t += "<div class='sp-" + e + "'></div>";
		return ["<div class='sp-container sp-hidden'>", "<div class='sp-palette-container'>", "<div class='sp-palette sp-thumb sp-cf'></div>", "<div class='sp-palette-button-container sp-cf'>", "<button type='button' class='sp-palette-toggle'></button>", "</div>", "</div>", "<div class='sp-picker-container'>", "<div class='sp-top sp-cf'>", "<div class='sp-fill'></div>", "<div class='sp-top-inner'>", "<div class='sp-color'>", "<div class='sp-sat'>", "<div class='sp-val'>", "<div class='sp-dragger'></div>", "</div>", "</div>", "</div>", "<div class='sp-clear sp-clear-display'>", "</div>", "<div class='sp-hue'>", "<div class='sp-slider'></div>", t, "</div>", "</div>", "<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>", "</div>", "<div class='sp-input-container sp-cf'>", "<input class='sp-input' type='text' spellcheck='false'  />", "</div>", "<div class='sp-initial sp-thumb sp-cf'></div>", "<div class='sp-button-container sp-cf'>", "<a class='sp-cancel' href='#'></a>", "<button type='button' class='sp-choose'></button>", "</div>", "</div>", "</div>"].join("")
	}
	(),
	y = "spectrum.id";
	t.fn.spectrum = function (e) {
		if ("string" == typeof e) {
			var i = this,
			n = Array.prototype.slice.call(arguments, 1);
			return this.each(function () {
				var s = p[t(this).data(y)];
				if (s) {
					var r = s[e];
					if (!r)
						throw new Error("Spectrum: no such method: '" + e + "'");
					"get" == e ? i = s.get() : "container" == e ? i = s.container : "option" == e ? i = s.option.apply(s, n) : "destroy" == e ? (s.destroy(), t(this).removeData(y)) : r.apply(s, n)
				}
			}),
			i
		}
		return this.spectrum("destroy").each(function () {
			var i = t.extend({}, e, t(this).data()),
			n = r(this, i);
			t(this).data(y, n.id)
		})
	},
	t.fn.spectrum.load = !0,
	t.fn.spectrum.loadOpts = {},
	t.fn.spectrum.draggable = u,
	t.fn.spectrum.defaults = f,
	t.fn.spectrum.inputTypeColorSupport = function _() {
		if ("undefined" == typeof _._cachedResult) {
			var e = t("<input type='color'/>")[0];
			_._cachedResult = "color" === e.type && "" !== e.value
		}
		return _._cachedResult
	},
	t.spectrum = {},
	t.spectrum.localization = {},
	t.spectrum.palettes = {},
	t.fn.spectrum.processNativeColorInputs = function () {
		var e = t("input[type=color]");
		e.length && !d() && e.spectrum({
			preferredFormat : "hex6"
		})
	},
	function () {
		function t(t) {
			var i = {
				r : 0,
				g : 0,
				b : 0
			},
			s = 1,
			o = !1,
			a = !1;
			return "string" == typeof t && (t = N(t)),
			"object" == typeof t && (t.hasOwnProperty("r") && t.hasOwnProperty("g") && t.hasOwnProperty("b") ? (i = e(t.r, t.g, t.b), o = !0, a = "%" === String(t.r).substr(-1) ? "prgb" : "rgb") : t.hasOwnProperty("h") && t.hasOwnProperty("s") && t.hasOwnProperty("v") ? (t.s = D(t.s), t.v = D(t.v), i = r(t.h, t.s, t.v), o = !0, a = "hsv") : t.hasOwnProperty("h") && t.hasOwnProperty("s") && t.hasOwnProperty("l") && (t.s = D(t.s), t.l = D(t.l), i = n(t.h, t.s, t.l), o = !0, a = "hsl"), t.hasOwnProperty("a") && (s = t.a)),
			s = x(s), {
				ok : o,
				format : t.format || a,
				r : L(255, j(i.r, 0)),
				g : L(255, j(i.g, 0)),
				b : L(255, j(i.b, 0)),
				a : s
			}
		}
		function e(t, e, i) {
			return {
				r : 255 * k(t, 255),
				g : 255 * k(e, 255),
				b : 255 * k(i, 255)
			}
		}
		function i(t, e, i) {
			t = k(t, 255),
			e = k(e, 255),
			i = k(i, 255);
			var n,
			s,
			r = j(t, e, i),
			o = L(t, e, i),
			a = (r + o) / 2;
			if (r == o)
				n = s = 0;
			else {
				var l = r - o;
				switch (s = a > .5 ? l / (2 - r - o) : l / (r + o), r) {
				case t:
					n = (e - i) / l + (i > e ? 6 : 0);
					break;
				case e:
					n = (i - t) / l + 2;
					break;
				case i:
					n = (t - e) / l + 4
				}
				n /= 6
			}
			return {
				h : n,
				s : s,
				l : a
			}
		}
		function n(t, e, i) {
			function n(t, e, i) {
				return 0 > i && (i += 1),
				i > 1 && (i -= 1),
				1 / 6 > i ? t + 6 * (e - t) * i : .5 > i ? e : 2 / 3 > i ? t + (e - t) * (2 / 3 - i) * 6 : t
			}
			var s,
			r,
			o;
			if (t = k(t, 360), e = k(e, 100), i = k(i, 100), 0 === e)
				s = r = o = i;
			else {
				var a = .5 > i ? i * (1 + e) : i + e - i * e,
				l = 2 * i - a;
				s = n(l, a, t + 1 / 3),
				r = n(l, a, t),
				o = n(l, a, t - 1 / 3)
			}
			return {
				r : 255 * s,
				g : 255 * r,
				b : 255 * o
			}
		}
		function s(t, e, i) {
			t = k(t, 255),
			e = k(e, 255),
			i = k(i, 255);
			var n,
			s,
			r = j(t, e, i),
			o = L(t, e, i),
			a = r,
			l = r - o;
			if (s = 0 === r ? 0 : l / r, r == o)
				n = 0;
			else {
				switch (r) {
				case t:
					n = (e - i) / l + (i > e ? 6 : 0);
					break;
				case e:
					n = (i - t) / l + 2;
					break;
				case i:
					n = (t - e) / l + 4
				}
				n /= 6
			}
			return {
				h : n,
				s : s,
				v : a
			}
		}
		function r(t, e, i) {
			t = 6 * k(t, 360),
			e = k(e, 100),
			i = k(i, 100);
			var n = R.floor(t),
			s = t - n,
			r = i * (1 - e),
			o = i * (1 - s * e),
			a = i * (1 - (1 - s) * e),
			l = n % 6,
			h = [i, o, r, r, a, i][l],
			u = [a, i, i, o, r, r][l],
			c = [r, r, a, i, i, o][l];
			return {
				r : 255 * h,
				g : 255 * u,
				b : 255 * c
			}
		}
		function o(t, e, i, n) {
			var s = [I(H(t).toString(16)), I(H(e).toString(16)), I(H(i).toString(16))];
			return n && s[0].charAt(0) == s[0].charAt(1) && s[1].charAt(0) == s[1].charAt(1) && s[2].charAt(0) == s[2].charAt(1) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) : s.join("")
		}
		function a(t, e, i, n) {
			var s = [I(A(n)), I(H(t).toString(16)), I(H(e).toString(16)), I(H(i).toString(16))];
			return s.join("")
		}
		function l(t, e) {
			e = 0 === e ? 0 : e || 10;
			var i = F(t).toHsl();
			return i.s -= e / 100,
			i.s = C(i.s),
			F(i)
		}
		function h(t, e) {
			e = 0 === e ? 0 : e || 10;
			var i = F(t).toHsl();
			return i.s += e / 100,
			i.s = C(i.s),
			F(i)
		}
		function u(t) {
			return F(t).desaturate(100)
		}
		function c(t, e) {
			e = 0 === e ? 0 : e || 10;
			var i = F(t).toHsl();
			return i.l += e / 100,
			i.l = C(i.l),
			F(i)
		}
		function d(t, e) {
			e = 0 === e ? 0 : e || 10;
			var i = F(t).toRgb();
			return i.r = j(0, L(255, i.r - H(255 *  - (e / 100)))),
			i.g = j(0, L(255, i.g - H(255 *  - (e / 100)))),
			i.b = j(0, L(255, i.b - H(255 *  - (e / 100)))),
			F(i)
		}
		function f(t, e) {
			e = 0 === e ? 0 : e || 10;
			var i = F(t).toHsl();
			return i.l -= e / 100,
			i.l = C(i.l),
			F(i)
		}
		function p(t, e) {
			var i = F(t).toHsl(),
			n = (H(i.h) + e) % 360;
			return i.h = 0 > n ? 360 + n : n,
			F(i)
		}
		function g(t) {
			var e = F(t).toHsl();
			return e.h = (e.h + 180) % 360,
			F(e)
		}
		function m(t) {
			var e = F(t).toHsl(),
			i = e.h;
			return [F(t), F({
					h : (i + 120) % 360,
					s : e.s,
					l : e.l
				}), F({
					h : (i + 240) % 360,
					s : e.s,
					l : e.l
				})]
		}
		function v(t) {
			var e = F(t).toHsl(),
			i = e.h;
			return [F(t), F({
					h : (i + 90) % 360,
					s : e.s,
					l : e.l
				}), F({
					h : (i + 180) % 360,
					s : e.s,
					l : e.l
				}), F({
					h : (i + 270) % 360,
					s : e.s,
					l : e.l
				})]
		}
		function b(t) {
			var e = F(t).toHsl(),
			i = e.h;
			return [F(t), F({
					h : (i + 72) % 360,
					s : e.s,
					l : e.l
				}), F({
					h : (i + 216) % 360,
					s : e.s,
					l : e.l
				})]
		}
		function y(t, e, i) {
			e = e || 6,
			i = i || 30;
			var n = F(t).toHsl(),
			s = 360 / i,
			r = [F(t)];
			for (n.h = (n.h - (s * e >> 1) + 720) % 360; --e; )
				n.h = (n.h + s) % 360, r.push(F(n));
			return r
		}
		function _(t, e) {
			e = e || 6;
			for (var i = F(t).toHsv(), n = i.h, s = i.s, r = i.v, o = [], a = 1 / e; e--; )
				o.push(F({
						h : n,
						s : s,
						v : r
					})), r = (r + a) % 1;
			return o
		}
		function w(t) {
			var e = {};
			for (var i in t)
				t.hasOwnProperty(i) && (e[t[i]] = i);
			return e
		}
		function x(t) {
			return t = parseFloat(t),
			(isNaN(t) || 0 > t || t > 1) && (t = 1),
			t
		}
		function k(t, e) {
			T(t) && (t = "100%");
			var i = S(t);
			return t = L(e, j(0, parseFloat(t))),
			i && (t = parseInt(t * e, 10) / 100),
			R.abs(t - e) < 1e-6 ? 1 : t % e / parseFloat(e)
		}
		function C(t) {
			return L(1, j(0, t))
		}
		function E(t) {
			return parseInt(t, 16)
		}
		function T(t) {
			return "string" == typeof t && -1 != t.indexOf(".") && 1 === parseFloat(t)
		}
		function S(t) {
			return "string" == typeof t && -1 != t.indexOf("%")
		}
		function I(t) {
			return 1 == t.length ? "0" + t : "" + t
		}
		function D(t) {
			return 1 >= t && (t = 100 * t + "%"),
			t
		}
		function A(t) {
			return Math.round(255 * parseFloat(t)).toString(16)
		}
		function M(t) {
			return E(t) / 255
		}
		function N(t) {
			t = t.replace(O, "").replace(P, "").toLowerCase();
			var e = !1;
			if (W[t])
				t = W[t], e = !0;
			else if ("transparent" == t)
				return {
					r : 0,
					g : 0,
					b : 0,
					a : 0,
					format : "name"
				};
			var i;
			return (i = V.rgb.exec(t)) ? {
				r : i[1],
				g : i[2],
				b : i[3]
			}
			 : (i = V.rgba.exec(t)) ? {
				r : i[1],
				g : i[2],
				b : i[3],
				a : i[4]
			}
			 : (i = V.hsl.exec(t)) ? {
				h : i[1],
				s : i[2],
				l : i[3]
			}
			 : (i = V.hsla.exec(t)) ? {
				h : i[1],
				s : i[2],
				l : i[3],
				a : i[4]
			}
			 : (i = V.hsv.exec(t)) ? {
				h : i[1],
				s : i[2],
				v : i[3]
			}
			 : (i = V.hsva.exec(t)) ? {
				h : i[1],
				s : i[2],
				v : i[3],
				a : i[4]
			}
			 : (i = V.hex8.exec(t)) ? {
				a : M(i[1]),
				r : E(i[2]),
				g : E(i[3]),
				b : E(i[4]),
				format : e ? "name" : "hex8"
			}
			 : (i = V.hex6.exec(t)) ? {
				r : E(i[1]),
				g : E(i[2]),
				b : E(i[3]),
				format : e ? "name" : "hex"
			}
			 : (i = V.hex3.exec(t)) ? {
				r : E(i[1] + "" + i[1]),
				g : E(i[2] + "" + i[2]),
				b : E(i[3] + "" + i[3]),
				format : e ? "name" : "hex"
			}
			 : !1
		}
		var O = /^[\s,#]+/,
		P = /\s+$/,
		z = 0,
		R = Math,
		H = R.round,
		L = R.min,
		j = R.max,
		B = R.random,
		F = function (e, i) {
			if (e = e ? e : "", i = i || {}, e instanceof F)
				return e;
			if (!(this instanceof F))
				return new F(e, i);
			var n = t(e);
			this._originalInput = e,
			this._r = n.r,
			this._g = n.g,
			this._b = n.b,
			this._a = n.a,
			this._roundA = H(100 * this._a) / 100,
			this._format = i.format || n.format,
			this._gradientType = i.gradientType,
			this._r < 1 && (this._r = H(this._r)),
			this._g < 1 && (this._g = H(this._g)),
			this._b < 1 && (this._b = H(this._b)),
			this._ok = n.ok,
			this._tc_id = z++
		};
		F.prototype = {
			isDark : function () {
				return this.getBrightness() < 128
			},
			isLight : function () {
				return !this.isDark()
			},
			isValid : function () {
				return this._ok
			},
			getOriginalInput : function () {
				return this._originalInput
			},
			getFormat : function () {
				return this._format
			},
			getAlpha : function () {
				return this._a
			},
			getBrightness : function () {
				var t = this.toRgb();
				return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3
			},
			setAlpha : function (t) {
				return this._a = x(t),
				this._roundA = H(100 * this._a) / 100,
				this
			},
			toHsv : function () {
				var t = s(this._r, this._g, this._b);
				return {
					h : 360 * t.h,
					s : t.s,
					v : t.v,
					a : this._a
				}
			},
			toHsvString : function () {
				var t = s(this._r, this._g, this._b),
				e = H(360 * t.h),
				i = H(100 * t.s),
				n = H(100 * t.v);
				return 1 == this._a ? "hsv(" + e + ", " + i + "%, " + n + "%)" : "hsva(" + e + ", " + i + "%, " + n + "%, " + this._roundA + ")"
			},
			toHsl : function () {
				var t = i(this._r, this._g, this._b);
				return {
					h : 360 * t.h,
					s : t.s,
					l : t.l,
					a : this._a
				}
			},
			toHslString : function () {
				var t = i(this._r, this._g, this._b),
				e = H(360 * t.h),
				n = H(100 * t.s),
				s = H(100 * t.l);
				return 1 == this._a ? "hsl(" + e + ", " + n + "%, " + s + "%)" : "hsla(" + e + ", " + n + "%, " + s + "%, " + this._roundA + ")"
			},
			toHex : function (t) {
				return o(this._r, this._g, this._b, t)
			},
			toHexString : function (t) {
				return "#" + this.toHex(t)
			},
			toHex8 : function () {
				return a(this._r, this._g, this._b, this._a)
			},
			toHex8String : function () {
				return "#" + this.toHex8()
			},
			toRgb : function () {
				return {
					r : H(this._r),
					g : H(this._g),
					b : H(this._b),
					a : this._a
				}
			},
			toRgbString : function () {
				return 1 == this._a ? "rgb(" + H(this._r) + ", " + H(this._g) + ", " + H(this._b) + ")" : "rgba(" + H(this._r) + ", " + H(this._g) + ", " + H(this._b) + ", " + this._roundA + ")"
			},
			toPercentageRgb : function () {
				return {
					r : H(100 * k(this._r, 255)) + "%",
					g : H(100 * k(this._g, 255)) + "%",
					b : H(100 * k(this._b, 255)) + "%",
					a : this._a
				}
			},
			toPercentageRgbString : function () {
				return 1 == this._a ? "rgb(" + H(100 * k(this._r, 255)) + "%, " + H(100 * k(this._g, 255)) + "%, " + H(100 * k(this._b, 255)) + "%)" : "rgba(" + H(100 * k(this._r, 255)) + "%, " + H(100 * k(this._g, 255)) + "%, " + H(100 * k(this._b, 255)) + "%, " + this._roundA + ")"
			},
			toName : function () {
				return 0 === this._a ? "transparent" : this._a < 1 ? !1 : $[o(this._r, this._g, this._b, !0)] || !1
			},
			toFilter : function (t) {
				var e = "#" + a(this._r, this._g, this._b, this._a),
				i = e,
				n = this._gradientType ? "GradientType = 1, " : "";
				if (t) {
					var s = F(t);
					i = s.toHex8String()
				}
				return "progid:DXImageTransform.Microsoft.gradient(" + n + "startColorstr=" + e + ",endColorstr=" + i + ")"
			},
			toString : function (t) {
				var e = !!t;
				t = t || this._format;
				var i = !1,
				n = this._a < 1 && this._a >= 0,
				s = !e && n && ("hex" === t || "hex6" === t || "hex3" === t || "name" === t);
				return s ? "name" === t && 0 === this._a ? this.toName() : this.toRgbString() : ("rgb" === t && (i = this.toRgbString()), "prgb" === t && (i = this.toPercentageRgbString()), ("hex" === t || "hex6" === t) && (i = this.toHexString()), "hex3" === t && (i = this.toHexString(!0)), "hex8" === t && (i = this.toHex8String()), "name" === t && (i = this.toName()), "hsl" === t && (i = this.toHslString()), "hsv" === t && (i = this.toHsvString()), i || this.toHexString())
			},
			_applyModification : function (t, e) {
				var i = t.apply(null, [this].concat([].slice.call(e)));
				return this._r = i._r,
				this._g = i._g,
				this._b = i._b,
				this.setAlpha(i._a),
				this
			},
			lighten : function () {
				return this._applyModification(c, arguments)
			},
			brighten : function () {
				return this._applyModification(d, arguments)
			},
			darken : function () {
				return this._applyModification(f, arguments)
			},
			desaturate : function () {
				return this._applyModification(l, arguments)
			},
			saturate : function () {
				return this._applyModification(h, arguments)
			},
			greyscale : function () {
				return this._applyModification(u, arguments)
			},
			spin : function () {
				return this._applyModification(p, arguments)
			},
			_applyCombination : function (t, e) {
				return t.apply(null, [this].concat([].slice.call(e)))
			},
			analogous : function () {
				return this._applyCombination(y, arguments)
			},
			complement : function () {
				return this._applyCombination(g, arguments)
			},
			monochromatic : function () {
				return this._applyCombination(_, arguments)
			},
			splitcomplement : function () {
				return this._applyCombination(b, arguments)
			},
			triad : function () {
				return this._applyCombination(m, arguments)
			},
			tetrad : function () {
				return this._applyCombination(v, arguments)
			}
		},
		F.fromRatio = function (t, e) {
			if ("object" == typeof t) {
				var i = {};
				for (var n in t)
					t.hasOwnProperty(n) && (i[n] = "a" === n ? t[n] : D(t[n]));
				t = i
			}
			return F(t, e)
		},
		F.equals = function (t, e) {
			return t && e ? F(t).toRgbString() == F(e).toRgbString() : !1
		},
		F.random = function () {
			return F.fromRatio({
				r : B(),
				g : B(),
				b : B()
			})
		},
		F.mix = function (t, e, i) {
			i = 0 === i ? 0 : i || 50;
			var n,
			s = F(t).toRgb(),
			r = F(e).toRgb(),
			o = i / 100,
			a = 2 * o - 1,
			l = r.a - s.a;
			n = a * l == -1 ? a : (a + l) / (1 + a * l),
			n = (n + 1) / 2;
			var h = 1 - n,
			u = {
				r : r.r * n + s.r * h,
				g : r.g * n + s.g * h,
				b : r.b * n + s.b * h,
				a : r.a * o + s.a * (1 - o)
			};
			return F(u)
		},
		F.readability = function (t, e) {
			var i = F(t),
			n = F(e),
			s = i.toRgb(),
			r = n.toRgb(),
			o = i.getBrightness(),
			a = n.getBrightness(),
			l = Math.max(s.r, r.r) - Math.min(s.r, r.r) + Math.max(s.g, r.g) - Math.min(s.g, r.g) + Math.max(s.b, r.b) - Math.min(s.b, r.b);
			return {
				brightness : Math.abs(o - a),
				color : l
			}
		},
		F.isReadable = function (t, e) {
			var i = F.readability(t, e);
			return i.brightness > 125 && i.color > 500
		},
		F.mostReadable = function (t, e) {
			for (var i = null, n = 0, s = !1, r = 0; r < e.length; r++) {
				var o = F.readability(t, e[r]),
				a = o.brightness > 125 && o.color > 500,
				l = 3 * (o.brightness / 125) + o.color / 500;
				(a && !s || a && s && l > n || !a && !s && l > n) && (s = a, n = l, i = F(e[r]))
			}
			return i
		};
		var W = F.names = {
			aliceblue : "f0f8ff",
			antiquewhite : "faebd7",
			aqua : "0ff",
			aquamarine : "7fffd4",
			azure : "f0ffff",
			beige : "f5f5dc",
			bisque : "ffe4c4",
			black : "000",
			blanchedalmond : "ffebcd",
			blue : "00f",
			blueviolet : "8a2be2",
			brown : "a52a2a",
			burlywood : "deb887",
			burntsienna : "ea7e5d",
			cadetblue : "5f9ea0",
			chartreuse : "7fff00",
			chocolate : "d2691e",
			coral : "ff7f50",
			cornflowerblue : "6495ed",
			cornsilk : "fff8dc",
			crimson : "dc143c",
			cyan : "0ff",
			darkblue : "00008b",
			darkcyan : "008b8b",
			darkgoldenrod : "b8860b",
			darkgray : "a9a9a9",
			darkgreen : "006400",
			darkgrey : "a9a9a9",
			darkkhaki : "bdb76b",
			darkmagenta : "8b008b",
			darkolivegreen : "556b2f",
			darkorange : "ff8c00",
			darkorchid : "9932cc",
			darkred : "8b0000",
			darksalmon : "e9967a",
			darkseagreen : "8fbc8f",
			darkslateblue : "483d8b",
			darkslategray : "2f4f4f",
			darkslategrey : "2f4f4f",
			darkturquoise : "00ced1",
			darkviolet : "9400d3",
			deeppink : "ff1493",
			deepskyblue : "00bfff",
			dimgray : "696969",
			dimgrey : "696969",
			dodgerblue : "1e90ff",
			firebrick : "b22222",
			floralwhite : "fffaf0",
			forestgreen : "228b22",
			fuchsia : "f0f",
			gainsboro : "dcdcdc",
			ghostwhite : "f8f8ff",
			gold : "ffd700",
			goldenrod : "daa520",
			gray : "808080",
			green : "008000",
			greenyellow : "adff2f",
			grey : "808080",
			honeydew : "f0fff0",
			hotpink : "ff69b4",
			indianred : "cd5c5c",
			indigo : "4b0082",
			ivory : "fffff0",
			khaki : "f0e68c",
			lavender : "e6e6fa",
			lavenderblush : "fff0f5",
			lawngreen : "7cfc00",
			lemonchiffon : "fffacd",
			lightblue : "add8e6",
			lightcoral : "f08080",
			lightcyan : "e0ffff",
			lightgoldenrodyellow : "fafad2",
			lightgray : "d3d3d3",
			lightgreen : "90ee90",
			lightgrey : "d3d3d3",
			lightpink : "ffb6c1",
			lightsalmon : "ffa07a",
			lightseagreen : "20b2aa",
			lightskyblue : "87cefa",
			lightslategray : "789",
			lightslategrey : "789",
			lightsteelblue : "b0c4de",
			lightyellow : "ffffe0",
			lime : "0f0",
			limegreen : "32cd32",
			linen : "faf0e6",
			magenta : "f0f",
			maroon : "800000",
			mediumaquamarine : "66cdaa",
			mediumblue : "0000cd",
			mediumorchid : "ba55d3",
			mediumpurple : "9370db",
			mediumseagreen : "3cb371",
			mediumslateblue : "7b68ee",
			mediumspringgreen : "00fa9a",
			mediumturquoise : "48d1cc",
			mediumvioletred : "c71585",
			midnightblue : "191970",
			mintcream : "f5fffa",
			mistyrose : "ffe4e1",
			moccasin : "ffe4b5",
			navajowhite : "ffdead",
			navy : "000080",
			oldlace : "fdf5e6",
			olive : "808000",
			olivedrab : "6b8e23",
			orange : "ffa500",
			orangered : "ff4500",
			orchid : "da70d6",
			palegoldenrod : "eee8aa",
			palegreen : "98fb98",
			paleturquoise : "afeeee",
			palevioletred : "db7093",
			papayawhip : "ffefd5",
			peachpuff : "ffdab9",
			peru : "cd853f",
			pink : "ffc0cb",
			plum : "dda0dd",
			powderblue : "b0e0e6",
			purple : "800080",
			rebeccapurple : "663399",
			red : "f00",
			rosybrown : "bc8f8f",
			royalblue : "4169e1",
			saddlebrown : "8b4513",
			salmon : "fa8072",
			sandybrown : "f4a460",
			seagreen : "2e8b57",
			seashell : "fff5ee",
			sienna : "a0522d",
			silver : "c0c0c0",
			skyblue : "87ceeb",
			slateblue : "6a5acd",
			slategray : "708090",
			slategrey : "708090",
			snow : "fffafa",
			springgreen : "00ff7f",
			steelblue : "4682b4",
			tan : "d2b48c",
			teal : "008080",
			thistle : "d8bfd8",
			tomato : "ff6347",
			turquoise : "40e0d0",
			violet : "ee82ee",
			wheat : "f5deb3",
			white : "fff",
			whitesmoke : "f5f5f5",
			yellow : "ff0",
			yellowgreen : "9acd32"
		},
		$ = F.hexNames = w(W),
		V = function () {
			var t = "[-\\+]?\\d+%?",
			e = "[-\\+]?\\d*\\.\\d+%?",
			i = "(?:" + e + ")|(?:" + t + ")",
			n = "[\\s|\\(]+(" + i + ")[,|\\s]+(" + i + ")[,|\\s]+(" + i + ")\\s*\\)?",
			s = "[\\s|\\(]+(" + i + ")[,|\\s]+(" + i + ")[,|\\s]+(" + i + ")[,|\\s]+(" + i + ")\\s*\\)?";
			return {
				rgb : new RegExp("rgb" + n),
				rgba : new RegExp("rgba" + s),
				hsl : new RegExp("hsl" + n),
				hsla : new RegExp("hsla" + s),
				hsv : new RegExp("hsv" + n),
				hsva : new RegExp("hsva" + s),
				hex3 : /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
				hex6 : /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
				hex8 : /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
			}
		}
		();
		window.tinycolor = F
	}
	(),
	t(function () {
		t.fn.spectrum.load && t.fn.spectrum.processNativeColorInputs()
	})
}), function () {
	function t() {}

	function e(t) {
		return t
	}
	function i(t) {
		return !!t
	}
	function n(t) {
		return !t
	}
	function s(t) {
		return function () {
			if (null === t)
				throw new Error("Callback was already called.");
			t.apply(this, arguments),
			t = null
		}
	}
	function r(t) {
		return function () {
			null !== t && (t.apply(this, arguments), t = null)
		}
	}
	function o(t) {
		return R(t) || "number" == typeof t.length && t.length >= 0 && t.length % 1 === 0
	}
	function a(t, e) {
		for (var i = -1, n = t.length; ++i < n; )
			e(t[i], i, t)
	}
	function l(t, e) {
		for (var i = -1, n = t.length, s = Array(n); ++i < n; )
			s[i] = e(t[i], i, t);
		return s
	}
	function h(t) {
		return l(Array(t), function (t, e) {
			return e
		})
	}
	function u(t, e, i) {
		return a(t, function (t, n, s) {
			i = e(i, t, n, s)
		}),
		i
	}
	function c(t, e) {
		a(L(t), function (i) {
			e(t[i], i)
		})
	}
	function d(t, e) {
		for (var i = 0; i < t.length; i++)
			if (t[i] === e)
				return i;
		return -1
	}
	function f(t) {
		var e,
		i,
		n = -1;
		return o(t) ? (e = t.length, function () {
			return n++,
			e > n ? n : null
		}) : (i = L(t), e = i.length, function () {
			return n++,
			e > n ? i[n] : null
		})
	}
	function p(t, e) {
		return e = null == e ? t.length - 1 : +e,
		function () {
			for (var i = Math.max(arguments.length - e, 0), n = Array(i), s = 0; i > s; s++)
				n[s] = arguments[s + e];
			switch (e) {
			case 0:
				return t.call(this, n);
			case 1:
				return t.call(this, arguments[0], n)
			}
		}
	}
	function g(t) {
		return function (e, i, n) {
			return t(e, n)
		}
	}
	function m(e) {
		return function (i, n, o) {
			o = r(o || t),
			i = i || [];
			var a = f(i);
			if (0 >= e)
				return o(null);
			var l = !1,
			h = 0,
			u = !1;
			!function c() {
				if (l && 0 >= h)
					return o(null);
				for (; e > h && !u; ) {
					var t = a();
					if (null === t)
						return l = !0, void(0 >= h && o(null));
					h += 1,
					n(i[t], t, s(function (t) {
							h -= 1,
							t ? (o(t), u = !0) : c()
						}))
				}
			}
			()
		}
	}
	function v(t) {
		return function (e, i, n) {
			return t(O.eachOf, e, i, n)
		}
	}
	function b(t) {
		return function (e, i, n, s) {
			return t(m(i), e, n, s)
		}
	}
	function y(t) {
		return function (e, i, n) {
			return t(O.eachOfSeries, e, i, n)
		}
	}
	function _(e, i, n, s) {
		s = r(s || t),
		i = i || [];
		var a = o(i) ? [] : {};
		e(i, function (t, e, i) {
			n(t, function (t, n) {
				a[e] = n,
				i(t)
			})
		}, function (t) {
			s(t, a)
		})
	}
	function w(t, e, i, n) {
		var s = [];
		t(e, function (t, e, n) {
			i(t, function (i) {
				i && s.push({
					index : e,
					value : t
				}),
				n()
			})
		}, function () {
			n(l(s.sort(function (t, e) {
						return t.index - e.index
					}), function (t) {
					return t.value
				}))
		})
	}
	function x(t, e, i, n) {
		w(t, e, function (t, e) {
			i(t, function (t) {
				e(!t)
			})
		}, n)
	}
	function k(t, e, i) {
		return function (n, s, r, o) {
			function a() {
				o && o(i(!1, void 0))
			}
			function l(t, n, s) {
				return o ? void r(t, function (n) {
					o && e(n) && (o(i(!0, t)), o = r = !1),
					s()
				}) : s()
			}
			arguments.length > 3 ? t(n, s, l, a) : (o = r, r = s, t(n, l, a))
		}
	}
	function C(t, e) {
		return e
	}
	function E(e, i, n) {
		n = n || t;
		var s = o(i) ? [] : {};
		e(i, function (t, e, i) {
			t(p(function (t, n) {
					n.length <= 1 && (n = n[0]),
					s[e] = n,
					i(t)
				}))
		}, function (t) {
			n(t, s)
		})
	}
	function T(t, e, i, n) {
		var s = [];
		t(e, function (t, e, n) {
			i(t, function (t, e) {
				s = s.concat(e || []),
				n(t)
			})
		}, function (t) {
			n(t, s)
		})
	}
	function S(e, i, n) {
		function r(e, i, n, s) {
			if (null != s && "function" != typeof s)
				throw new Error("task callback must be a function");
			return e.started = !0,
			R(i) || (i = [i]),
			0 === i.length && e.idle() ? O.setImmediate(function () {
				e.drain()
			}) : (a(i, function (i) {
					var r = {
						data : i,
						callback : s || t
					};
					n ? e.tasks.unshift(r) : e.tasks.push(r),
					e.tasks.length === e.concurrency && e.saturated()
				}), void O.setImmediate(e.process))
		}
		function o(t, e) {
			return function () {
				h -= 1;
				var i = !1,
				n = arguments;
				a(e, function (t) {
					a(u, function (e, n) {
						e !== t || i || (u.splice(n, 1), i = !0)
					}),
					t.callback.apply(t, n)
				}),
				t.tasks.length + h === 0 && t.drain(),
				t.process()
			}
		}
		if (null == i)
			i = 1;
		else if (0 === i)
			throw new Error("Concurrency must not be zero");
		var h = 0,
		u = [],
		c = {
			tasks : [],
			concurrency : i,
			payload : n,
			saturated : t,
			empty : t,
			drain : t,
			started : !1,
			paused : !1,
			push : function (t, e) {
				r(c, t, !1, e)
			},
			kill : function () {
				c.drain = t,
				c.tasks = []
			},
			unshift : function (t, e) {
				r(c, t, !0, e)
			},
			process : function () {
				if (!c.paused && h < c.concurrency && c.tasks.length)
					for (; h < c.concurrency && c.tasks.length; ) {
						var t = c.payload ? c.tasks.splice(0, c.payload) : c.tasks.splice(0, c.tasks.length),
						i = l(t, function (t) {
								return t.data
							});
						0 === c.tasks.length && c.empty(),
						h += 1,
						u.push(t[0]);
						var n = s(o(c, t));
						e(i, n)
					}
			},
			length : function () {
				return c.tasks.length
			},
			running : function () {
				return h
			},
			workersList : function () {
				return u
			},
			idle : function () {
				return c.tasks.length + h === 0
			},
			pause : function () {
				c.paused = !0
			},
			resume : function () {
				if (c.paused !== !1) {
					c.paused = !1;
					for (var t = Math.min(c.concurrency, c.tasks.length), e = 1; t >= e; e++)
						O.setImmediate(c.process)
				}
			}
		};
		return c
	}
	function I(t) {
		return p(function (e, i) {
			e.apply(null, i.concat([p(function (e, i) {
							"object" == typeof console && (e ? console.error && console.error(e) : console[t] && a(i, function (e) {
									console[t](e)
								}))
						})]))
		})
	}
	function D(t) {
		return function (e, i, n) {
			t(h(e), i, n)
		}
	}
	function A(t) {
		return p(function (e, i) {
			var n = p(function (i) {
					var n = this,
					s = i.pop();
					return t(e, function (t, e, s) {
						t.apply(n, i.concat([s]))
					}, s)
				});
			return i.length ? n.apply(this, i) : n
		})
	}
	function M(t) {
		return p(function (e) {
			var i = e.pop();
			e.push(function () {
				var t = arguments;
				n ? O.setImmediate(function () {
					i.apply(null, t)
				}) : i.apply(null, t)
			});
			var n = !0;
			t.apply(this, e),
			n = !1
		})
	}
	var N,
	O = {},
	P = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global || this;
	null != P && (N = P.async),
	O.noConflict = function () {
		return P.async = N,
		O
	};
	var z = Object.prototype.toString,
	R = Array.isArray || function (t) {
		return "[object Array]" === z.call(t)
	},
	H = function (t) {
		var e = typeof t;
		return "function" === e || "object" === e && !!t
	},
	L = Object.keys || function (t) {
		var e = [];
		for (var i in t)
			t.hasOwnProperty(i) && e.push(i);
		return e
	},
	j = "function" == typeof setImmediate && setImmediate,
	B = j ? function (t) {
		j(t)
	}
	 : function (t) {
		setTimeout(t, 0)
	};
	O.nextTick = "object" == typeof process && "function" == typeof process.nextTick ? process.nextTick : B,
	O.setImmediate = j ? B : O.nextTick,
	O.forEach = O.each = function (t, e, i) {
		return O.eachOf(t, g(e), i)
	},
	O.forEachSeries = O.eachSeries = function (t, e, i) {
		return O.eachOfSeries(t, g(e), i)
	},
	O.forEachLimit = O.eachLimit = function (t, e, i, n) {
		return m(e)(t, g(i), n)
	},
	O.forEachOf = O.eachOf = function (e, i, n) {
		function o(t) {
			h--,
			t ? n(t) : null === a && 0 >= h && n(null)
		}
		n = r(n || t),
		e = e || [];
		for (var a, l = f(e), h = 0; null != (a = l()); )
			h += 1, i(e[a], a, s(o));
		0 === h && n(null)
	},
	O.forEachOfSeries = O.eachOfSeries = function (e, i, n) {
		function o() {
			var t = !0;
			return null === l ? n(null) : (i(e[l], l, s(function (e) {
						if (e)
							n(e);
						else {
							if (l = a(), null === l)
								return n(null);
							t ? O.setImmediate(o) : o()
						}
					})), void(t = !1))
		}
		n = r(n || t),
		e = e || [];
		var a = f(e),
		l = a();
		o()
	},
	O.forEachOfLimit = O.eachOfLimit = function (t, e, i, n) {
		m(e)(t, i, n)
	},
	O.map = v(_),
	O.mapSeries = y(_),
	O.mapLimit = b(_),
	O.inject = O.foldl = O.reduce = function (t, e, i, n) {
		O.eachOfSeries(t, function (t, n, s) {
			i(e, t, function (t, i) {
				e = i,
				s(t)
			})
		}, function (t) {
			n(t, e)
		})
	},
	O.foldr = O.reduceRight = function (t, i, n, s) {
		var r = l(t, e).reverse();
		O.reduce(r, i, n, s)
	},
	O.transform = function (t, e, i, n) {
		3 === arguments.length && (n = i, i = e, e = R(t) ? [] : {}),
		O.eachOf(t, function (t, n, s) {
			i(e, t, n, s)
		}, function (t) {
			n(t, e)
		})
	},
	O.select = O.filter = v(w),
	O.selectLimit = O.filterLimit = b(w),
	O.selectSeries = O.filterSeries = y(w),
	O.reject = v(x),
	O.rejectLimit = b(x),
	O.rejectSeries = y(x),
	O.any = O.some = k(O.eachOf, i, e),
	O.someLimit = k(O.eachOfLimit, i, e),
	O.all = O.every = k(O.eachOf, n, n),
	O.everyLimit = k(O.eachOfLimit, n, n),
	O.detect = k(O.eachOf, e, C),
	O.detectSeries = k(O.eachOfSeries, e, C),
	O.detectLimit = k(O.eachOfLimit, e, C),
	O.sortBy = function (t, e, i) {
		function n(t, e) {
			var i = t.criteria,
			n = e.criteria;
			return n > i ? -1 : i > n ? 1 : 0
		}
		O.map(t, function (t, i) {
			e(t, function (e, n) {
				e ? i(e) : i(null, {
					value : t,
					criteria : n
				})
			})
		}, function (t, e) {
			return t ? i(t) : void i(null, l(e.sort(n), function (t) {
					return t.value
				}))
		})
	},
	O.auto = function (e, i, n) {
		function s(t) {
			v.unshift(t)
		}
		function o(t) {
			var e = d(v, t);
			e >= 0 && v.splice(e, 1)
		}
		function l() {
			f--,
			a(v.slice(0), function (t) {
				t()
			})
		}
		n || (n = i, i = null),
		n = r(n || t);
		var h = L(e),
		f = h.length;
		if (!f)
			return n(null);
		i || (i = f);
		var g = {},
		m = 0,
		v = [];
		s(function () {
			f || n(null, g)
		}),
		a(h, function (t) {
			function r() {
				return i > m && u(b, function (t, e) {
					return t && g.hasOwnProperty(e)
				}, !0) && !g.hasOwnProperty(t)
			}
			function a() {
				r() && (m++, o(a), f[f.length - 1](v, g))
			}
			for (var h, f = R(e[t]) ? e[t] : [e[t]], v = p(function (e, i) {
						if (m--, i.length <= 1 && (i = i[0]), e) {
							var s = {};
							c(g, function (t, e) {
								s[e] = t
							}),
							s[t] = i,
							n(e, s)
						} else
							g[t] = i, O.setImmediate(l)
					}), b = f.slice(0, f.length - 1), y = b.length; y--; ) {
				if (!(h = e[b[y]]))
					throw new Error("Has inexistant dependency");
				if (R(h) && d(h, t) >= 0)
					throw new Error("Has cyclic dependencies")
			}
			r() ? (m++, f[f.length - 1](v, g)) : s(a)
		})
	},
	O.retry = function (t, e, i) {
		function n(t, e) {
			if ("number" == typeof e)
				t.times = parseInt(e, 10) || r;
			else {
				if ("object" != typeof e)
					throw new Error("Unsupported argument type for 'times': " + typeof e);
				t.times = parseInt(e.times, 10) || r,
				t.interval = parseInt(e.interval, 10) || o
			}
		}
		function s(t, e) {
			function i(t, i) {
				return function (n) {
					t(function (t, e) {
						n(!t || i, {
							err : t,
							result : e
						})
					}, e)
				}
			}
			function n(t) {
				return function (e) {
					setTimeout(function () {
						e(null)
					}, t)
				}
			}
			for (; l.times; ) {
				var s = !(l.times -= 1);
				a.push(i(l.task, s)),
				!s && l.interval > 0 && a.push(n(l.interval))
			}
			O.series(a, function (e, i) {
				i = i[i.length - 1],
				(t || l.callback)(i.err, i.result)
			})
		}
		var r = 5,
		o = 0,
		a = [],
		l = {
			times : r,
			interval : o
		},
		h = arguments.length;
		if (1 > h || h > 3)
			throw new Error("Invalid arguments - must be either (task), (task, callback), (times, task) or (times, task, callback)");
		return 2 >= h && "function" == typeof t && (i = e, e = t),
		"function" != typeof t && n(l, t),
		l.callback = i,
		l.task = e,
		l.callback ? s() : s
	},
	O.waterfall = function (e, i) {
		function n(t) {
			return p(function (e, s) {
				if (e)
					i.apply(null, [e].concat(s));
				else {
					var r = t.next();
					s.push(r ? n(r) : i),
					M(t).apply(null, s)
				}
			})
		}
		if (i = r(i || t), !R(e)) {
			var s = new Error("First argument to waterfall must be an array of functions");
			return i(s)
		}
		return e.length ? void n(O.iterator(e))() : i()
	},
	O.parallel = function (t, e) {
		E(O.eachOf, t, e)
	},
	O.parallelLimit = function (t, e, i) {
		E(m(e), t, i)
	},
	O.series = function (t, e) {
		E(O.eachOfSeries, t, e)
	},
	O.iterator = function (t) {
		function e(i) {
			function n() {
				return t.length && t[i].apply(null, arguments),
				n.next()
			}
			return n.next = function () {
				return i < t.length - 1 ? e(i + 1) : null
			},
			n
		}
		return e(0)
	},
	O.apply = p(function (t, e) {
			return p(function (i) {
				return t.apply(null, e.concat(i))
			})
		}),
	O.concat = v(T),
	O.concatSeries = y(T),
	O.whilst = function (e, i, n) {
		if (n = n || t, e()) {
			var s = p(function (t, r) {
					t ? n(t) : e.apply(this, r) ? i(s) : n(null)
				});
			i(s)
		} else
			n(null)
	},
	O.doWhilst = function (t, e, i) {
		var n = 0;
		return O.whilst(function () {
			return ++n <= 1 || e.apply(this, arguments)
		}, t, i)
	},
	O.until = function (t, e, i) {
		return O.whilst(function () {
			return !t.apply(this, arguments)
		}, e, i)
	},
	O.doUntil = function (t, e, i) {
		return O.doWhilst(t, function () {
			return !e.apply(this, arguments)
		}, i)
	},
	O.during = function (e, i, n) {
		n = n || t;
		var s = p(function (t, i) {
				t ? n(t) : (i.push(r), e.apply(this, i))
			}),
		r = function (t, e) {
			t ? n(t) : e ? i(s) : n(null)
		};
		e(r)
	},
	O.doDuring = function (t, e, i) {
		var n = 0;
		O.during(function (t) {
			n++ < 1 ? t(null, !0) : e.apply(this, arguments)
		}, t, i)
	},
	O.queue = function (t, e) {
		var i = S(function (e, i) {
				t(e[0], i)
			}, e, 1);
		return i
	},
	O.priorityQueue = function (e, i) {
		function n(t, e) {
			return t.priority - e.priority
		}
		function s(t, e, i) {
			for (var n = -1, s = t.length - 1; s > n; ) {
				var r = n + (s - n + 1 >>> 1);
				i(e, t[r]) >= 0 ? n = r : s = r - 1
			}
			return n
		}
		function r(e, i, r, o) {
			if (null != o && "function" != typeof o)
				throw new Error("task callback must be a function");
			return e.started = !0,
			R(i) || (i = [i]),
			0 === i.length ? O.setImmediate(function () {
				e.drain()
			}) : void a(i, function (i) {
				var a = {
					data : i,
					priority : r,
					callback : "function" == typeof o ? o : t
				};
				e.tasks.splice(s(e.tasks, a, n) + 1, 0, a),
				e.tasks.length === e.concurrency && e.saturated(),
				O.setImmediate(e.process)
			})
		}
		var o = O.queue(e, i);
		return o.push = function (t, e, i) {
			r(o, t, e, i)
		},
		delete o.unshift,
		o
	},
	O.cargo = function (t, e) {
		return S(t, 1, e)
	},
	O.log = I("log"),
	O.dir = I("dir"),
	O.memoize = function (t, i) {
		var n = {},
		s = {};
		i = i || e;
		var r = p(function (e) {
				var r = e.pop(),
				o = i.apply(null, e);
				o in n ? O.setImmediate(function () {
					r.apply(null, n[o])
				}) : o in s ? s[o].push(r) : (s[o] = [r], t.apply(null, e.concat([p(function (t) {
									n[o] = t;
									var e = s[o];
									delete s[o];
									for (var i = 0, r = e.length; r > i; i++)
										e[i].apply(null, t)
								})])))
			});
		return r.memo = n,
		r.unmemoized = t,
		r
	},
	O.unmemoize = function (t) {
		return function () {
			return (t.unmemoized || t).apply(null, arguments)
		}
	},
	O.times = D(O.map),
	O.timesSeries = D(O.mapSeries),
	O.timesLimit = function (t, e, i, n) {
		return O.mapLimit(h(t), e, i, n)
	},
	O.seq = function () {
		var e = arguments;
		return p(function (i) {
			var n = this,
			s = i[i.length - 1];
			"function" == typeof s ? i.pop() : s = t,
			O.reduce(e, i, function (t, e, i) {
				e.apply(n, t.concat([p(function (t, e) {
								i(t, e)
							})]))
			}, function (t, e) {
				s.apply(n, [t].concat(e))
			})
		})
	},
	O.compose = function () {
		return O.seq.apply(null, Array.prototype.reverse.call(arguments))
	},
	O.applyEach = A(O.eachOf),
	O.applyEachSeries = A(O.eachOfSeries),
	O.forever = function (e, i) {
		function n(t) {
			return t ? r(t) : void o(n)
		}
		var r = s(i || t),
		o = M(e);
		n()
	},
	O.ensureAsync = M,
	O.constant = p(function (t) {
			var e = [null].concat(t);
			return function (t) {
				return t.apply(this, e)
			}
		}),
	O.wrapSync = O.asyncify = function (t) {
		return p(function (e) {
			var i,
			n = e.pop();
			try {
				i = t.apply(this, e)
			} catch (s) {
				return n(s)
			}
			H(i) && "function" == typeof i.then ? i.then(function (t) {
				n(null, t)
			})["catch"](function (t) {
				n(t.message ? t : new Error(t))
			}) : n(null, i)
		})
	},
	"object" == typeof module && module.exports ? module.exports = O : "function" == typeof define && define.amd ? define([], function () {
			return O
		}) : P.async = O
}
(), function (t, e) {
	"object" == typeof exports ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t)
}
(this, function (t) {
	function e(t) {
		this._targetElement = t,
		this._introItems = [],
		this._options = {
			nextLabel : "Next &rarr;",
			prevLabel : "&larr; Back",
			skipLabel : "Skip",
			doneLabel : "Done",
			tooltipPosition : "bottom",
			tooltipClass : "",
			highlightClass : "",
			exitOnEsc : !0,
			exitOnOverlayClick : !0,
			showStepNumbers : !0,
			keyboardNavigation : !0,
			showButtons : !0,
			showBullets : !0,
			showProgress : !1,
			scrollToElement : !0,
			overlayOpacity : .8,
			positionPrecedence : ["bottom", "top", "right", "left"],
			disableInteraction : !1,
			hintPosition : "top-middle",
			hintButtonLabel : "Got it"
		}
	}
	function i(t) {
		var e = [],
		i = this;
		if (this._options.steps)
			for (var a = 0, l = this._options.steps.length; l > a; a++) {
				var h = n(this._options.steps[a]);
				if (h.step = e.length + 1, "string" == typeof h.element && (h.element = document.querySelector(h.element)), "undefined" == typeof h.element || null == h.element) {
					var u = document.querySelector(".introjsFloatingElement");
					null == u && (u = document.createElement("div"), u.className = "introjsFloatingElement", document.body.appendChild(u)),
					h.element = u,
					h.position = "floating"
				}
				null != h.element && e.push(h)
			}
		else {
			if (l = t.querySelectorAll("*[data-intro]"), 1 > l.length)
				return !1;
			for (a = 0, h = l.length; h > a; a++) {
				var u = l[a],
				d = parseInt(u.getAttribute("data-step"), 10);
				d > 0 && (e[d - 1] = {
						element : u,
						intro : u.getAttribute("data-intro"),
						step : parseInt(u.getAttribute("data-step"), 10),
						tooltipClass : u.getAttribute("data-tooltipClass"),
						highlightClass : u.getAttribute("data-highlightClass"),
						position : u.getAttribute("data-position") || this._options.tooltipPosition
					})
			}
			for (a = d = 0, h = l.length; h > a; a++)
				if (u = l[a], null == u.getAttribute("data-step")) {
					for (; "undefined" != typeof e[d]; )
						d++;
					e[d] = {
						element : u,
						intro : u.getAttribute("data-intro"),
						step : d + 1,
						tooltipClass : u.getAttribute("data-tooltipClass"),
						highlightClass : u.getAttribute("data-highlightClass"),
						position : u.getAttribute("data-position") || this._options.tooltipPosition
					}
				}
		}
		for (a = [], l = 0; l < e.length; l++)
			e[l] && a.push(e[l]);
		return e = a,
		e.sort(function (t, e) {
			return t.step - e.step
		}),
		i._introItems = e,
		b.call(i, t) && (s.call(i), t.querySelector(".introjs-skipbutton"), t.querySelector(".introjs-nextbutton"), i._onKeyDown = function (e) {
			if (27 === e.keyCode && 1 == i._options.exitOnEsc)
				void 0 != i._introExitCallback && i._introExitCallback.call(i), o.call(i, t);
			else if (37 === e.keyCode)
				r.call(i);
			else if (39 === e.keyCode)
				s.call(i);
			else if (13 === e.keyCode) {
				var n = e.target || e.srcElement;
				n && 0 < n.className.indexOf("introjs-prevbutton") ? r.call(i) : n && 0 < n.className.indexOf("introjs-skipbutton") ? (i._introItems.length - 1 == i._currentStep && "function" == typeof i._introCompleteCallback && i._introCompleteCallback.call(i), void 0 != i._introExitCallback && i._introExitCallback.call(i), o.call(i, t)) : s.call(i),
				e.preventDefault ? e.preventDefault() : e.returnValue = !1
			}
		}, i._onResize = function () {
			c.call(i, document.querySelector(".introjs-helperLayer")),
			c.call(i, document.querySelector(".introjs-tooltipReferenceLayer"))
		}, window.addEventListener ? (this._options.keyboardNavigation && window.addEventListener("keydown", i._onKeyDown, !0), window.addEventListener("resize", i._onResize, !0)) : document.attachEvent && (this._options.keyboardNavigation && document.attachEvent("onkeydown", i._onKeyDown), document.attachEvent("onresize", i._onResize))),
		!1
	}
	function n(t) {
		if (null == t || "object" != typeof t || "undefined" != typeof t.nodeType)
			return t;
		var e,
		i = {};
		for (e in t)
			i[e] = "undefined" != typeof jQuery && t[e]instanceof jQuery ? t[e] : n(t[e]);
		return i
	}
	function s() {
		if (this._direction = "forward", "undefined" == typeof this._currentStep ? this._currentStep = 0 : ++this._currentStep, this._introItems.length <= this._currentStep)
			"function" == typeof this._introCompleteCallback && this._introCompleteCallback.call(this), o.call(this, this._targetElement);
		else {
			var t = this._introItems[this._currentStep];
			"undefined" != typeof this._introBeforeChangeCallback && this._introBeforeChangeCallback.call(this, t.element),
			f.call(this, t)
		}
	}
	function r() {
		if (this._direction = "backward", 0 === this._currentStep)
			return !1;
		var t = this._introItems[--this._currentStep];
		"undefined" != typeof this._introBeforeChangeCallback && this._introBeforeChangeCallback.call(this, t.element),
		f.call(this, t)
	}
	function o(t) {
		var e = t.querySelector(".introjs-overlay");
		if (null != e) {
			e.style.opacity = 0,
			setTimeout(function () {
				e.parentNode && e.parentNode.removeChild(e)
			}, 500);
			var i = t.querySelector(".introjs-helperLayer");
			if (i && i.parentNode.removeChild(i), (i = t.querySelector(".introjs-tooltipReferenceLayer")) && i.parentNode.removeChild(i), (t = t.querySelector(".introjs-disableInteraction")) && t.parentNode.removeChild(t), (t = document.querySelector(".introjsFloatingElement")) && t.parentNode.removeChild(t), (t = document.querySelector(".introjs-showElement")) && (t.className = t.className.replace(/introjs-[a-zA-Z]+/g, "").replace(/^\s+|\s+$/g, "")), (t = document.querySelectorAll(".introjs-fixParent")) && 0 < t.length)
				for (i = t.length - 1; i >= 0; i--)
					t[i].className = t[i].className.replace(/introjs-fixParent/g, "").replace(/^\s+|\s+$/g, "");
			window.removeEventListener ? window.removeEventListener("keydown", this._onKeyDown, !0) : document.detachEvent && document.detachEvent("onkeydown", this._onKeyDown),
			this._currentStep = void 0
		}
	}
	function a(t, e, i, n, s) {
		var r,
		o,
		a = "";
		if (s = s || !1, e.style.top = null, e.style.right = null, e.style.bottom = null, e.style.left = null, e.style.marginLeft = null, e.style.marginTop = null, i.style.display = "inherit", "undefined" != typeof n && null != n && (n.style.top = null, n.style.left = null), this._introItems[this._currentStep]) {
			if (a = this._introItems[this._currentStep], a = "string" == typeof a.tooltipClass ? a.tooltipClass : this._options.tooltipClass, e.className = ("introjs-tooltip " + a).replace(/^\s+|\s+$/g, ""), o = this._introItems[this._currentStep].position, ("auto" == o || "auto" == this._options.tooltipPosition) && "floating" != o) {
				a = o,
				r = this._options.positionPrecedence.slice(),
				o = m();
				var c = E(e).height + 10,
				d = E(e).width + 20,
				f = E(t),
				p = "floating";
				f.left + d > o.width || 0 > f.left + f.width / 2 - d ? (u(r, "bottom"), u(r, "top")) : (f.height + f.top + c > o.height && u(r, "bottom"), 0 > f.top - c && u(r, "top")),
				f.width + f.left + d > o.width && u(r, "right"),
				0 > f.left - d && u(r, "left"),
				0 < r.length && (p = r[0]),
				a && "auto" != a && -1 < r.indexOf(a) && (p = a),
				o = p
			}
			switch (a = E(t), t = E(e), r = m(), o) {
			case "top":
				i.className = "introjs-arrow bottom",
				l(a, s ? 0 : 15, t, r, e),
				e.style.bottom = a.height + 20 + "px";
				break;
			case "right":
				e.style.left = a.width + 20 + "px",
				a.top + t.height > r.height ? (i.className = "introjs-arrow left-bottom", e.style.top = "-" + (t.height - a.height - 20) + "px") : i.className = "introjs-arrow left";
				break;
			case "left":
				s || 1 != this._options.showStepNumbers || (e.style.top = "15px"),
				a.top + t.height > r.height ? (e.style.top = "-" + (t.height - a.height - 20) + "px", i.className = "introjs-arrow right-bottom") : i.className = "introjs-arrow right",
				e.style.right = a.width + 20 + "px";
				break;
			case "floating":
				i.style.display = "none",
				e.style.left = "50%",
				e.style.top = "50%",
				e.style.marginLeft = "-" + t.width / 2 + "px",
				e.style.marginTop = "-" + t.height / 2 + "px",
				"undefined" != typeof n && null != n && (n.style.left = "-" + (t.width / 2 + 18) + "px", n.style.top = "-" + (t.height / 2 + 18) + "px");
				break;
			case "bottom-right-aligned":
				i.className = "introjs-arrow top-right",
				h(a, 0, t, e),
				e.style.top = a.height + 20 + "px";
				break;
			case "bottom-middle-aligned":
				i.className = "introjs-arrow top-middle",
				i = a.width / 2 - t.width / 2,
				s && (i += 5),
				h(a, i, t, e) && (e.style.right = null, l(a, i, t, r, e)),
				e.style.top = a.height + 20 + "px";
				break;
			default:
				i.className = "introjs-arrow top",
				l(a, 0, t, r, e),
				e.style.top = a.height + 20 + "px"
			}
		}
	}
	function l(t, e, i, n, s) {
		return t.left + e + i.width > n.width ? (s.style.left = n.width - i.width - t.left + "px", !1) : (s.style.left = e + "px", !0)
	}
	function h(t, e, i, n) {
		return 0 > t.left + t.width - e - i.width ? (n.style.left = -t.left + "px", !1) : (n.style.right = e + "px", !0)
	}
	function u(t, e) {
		-1 < t.indexOf(e) && t.splice(t.indexOf(e), 1)
	}
	function c(t) {
		if (t && this._introItems[this._currentStep]) {
			var e = this._introItems[this._currentStep],
			i = E(e.element),
			n = 10;
			g(e.element) && (t.className += " introjs-fixedTooltip"),
			"floating" == e.position && (n = 0),
			t.setAttribute("style", "width: " + (i.width + n) + "px; height:" + (i.height + n) + "px; top:" + (i.top - 5) + "px;left: " + (i.left - 5) + "px;")
		}
	}
	function d() {
		var t = document.querySelector(".introjs-disableInteraction");
		null === t && (t = document.createElement("div"), t.className = "introjs-disableInteraction", this._targetElement.appendChild(t)),
		c.call(this, t)
	}
	function f(t) {
		"undefined" != typeof this._introChangeCallback && this._introChangeCallback.call(this, t.element);
		var e = this,
		i = document.querySelector(".introjs-helperLayer"),
		n = document.querySelector(".introjs-tooltipReferenceLayer"),
		l = "introjs-helperLayer";
		if (E(t.element), "string" == typeof t.highlightClass && (l += " " + t.highlightClass), "string" == typeof this._options.highlightClass && (l += " " + this._options.highlightClass), null != i) {
			var h = n.querySelector(".introjs-helperNumberLayer"),
			u = n.querySelector(".introjs-tooltiptext"),
			f = n.querySelector(".introjs-arrow"),
			g = n.querySelector(".introjs-tooltip"),
			b = n.querySelector(".introjs-skipbutton"),
			y = n.querySelector(".introjs-prevbutton"),
			_ = n.querySelector(".introjs-nextbutton");
			if (i.className = l, g.style.opacity = 0, g.style.display = "none", null != h) {
				var w = this._introItems[0 <= t.step - 2 ? t.step - 2 : 0];
				(null != w && "forward" == this._direction && "floating" == w.position || "backward" == this._direction && "floating" == t.position) && (h.style.opacity = 0)
			}
			if (c.call(e, i), c.call(e, n), (w = document.querySelectorAll(".introjs-fixParent")) && 0 < w.length)
				for (l = w.length - 1; l >= 0; l--)
					w[l].className = w[l].className.replace(/introjs-fixParent/g, "").replace(/^\s+|\s+$/g, "");
			w = document.querySelector(".introjs-showElement"),
			w.className = w.className.replace(/introjs-[a-zA-Z]+/g, "").replace(/^\s+|\s+$/g, ""),
			e._lastShowElementTimer && clearTimeout(e._lastShowElementTimer),
			e._lastShowElementTimer = setTimeout(function () {
					null != h && (h.innerHTML = t.step),
					u.innerHTML = t.intro,
					g.style.display = "block",
					a.call(e, t.element, g, f, h),
					n.querySelector(".introjs-bullets li > a.active").className = "",
					n.querySelector('.introjs-bullets li > a[data-stepnumber="' + t.step + '"]').className = "active",
					n.querySelector(".introjs-progress .introjs-progressbar").setAttribute("style", "width:" + T.call(e) + "%;"),
					g.style.opacity = 1,
					h && (h.style.opacity = 1),
					-1 === _.tabIndex ? b.focus() : _.focus()
				}, 350)
		} else {
			var x = document.createElement("div"),
			y = document.createElement("div"),
			i = document.createElement("div"),
			k = document.createElement("div"),
			C = document.createElement("div"),
			S = document.createElement("div"),
			I = document.createElement("div"),
			D = document.createElement("div");
			x.className = l,
			y.className = "introjs-tooltipReferenceLayer",
			c.call(e, x),
			c.call(e, y),
			this._targetElement.appendChild(x),
			this._targetElement.appendChild(y),
			i.className = "introjs-arrow",
			C.className = "introjs-tooltiptext",
			C.innerHTML = t.intro,
			S.className = "introjs-bullets",
			!1 === this._options.showBullets && (S.style.display = "none");
			for (var x = document.createElement("ul"), l = 0, A = this._introItems.length; A > l; l++) {
				var M = document.createElement("li"),
				N = document.createElement("a");
				N.onclick = function () {
					e.goToStep(this.getAttribute("data-stepnumber"))
				},
				l === t.step - 1 && (N.className = "active"),
				N.href = "javascript:void(0);",
				N.innerHTML = "&nbsp;",
				N.setAttribute("data-stepnumber", this._introItems[l].step),
				M.appendChild(N),
				x.appendChild(M)
			}
			S.appendChild(x),
			I.className = "introjs-progress",
			!1 === this._options.showProgress && (I.style.display = "none"),
			l = document.createElement("div"),
			l.className = "introjs-progressbar",
			l.setAttribute("style", "width:" + T.call(this) + "%;"),
			I.appendChild(l),
			D.className = "introjs-tooltipbuttons",
			!1 === this._options.showButtons && (D.style.display = "none"),
			k.className = "introjs-tooltip",
			k.appendChild(C),
			k.appendChild(S),
			k.appendChild(I),
			1 == this._options.showStepNumbers && (w = document.createElement("span"), w.className = "introjs-helperNumberLayer", w.innerHTML = t.step, y.appendChild(w)),
			k.appendChild(i),
			y.appendChild(k),
			_ = document.createElement("a"),
			_.onclick = function () {
				e._introItems.length - 1 != e._currentStep && s.call(e)
			},
			_.href = "javascript:void(0);",
			_.innerHTML = this._options.nextLabel,
			y = document.createElement("a"),
			y.onclick = function () {
				0 != e._currentStep && r.call(e)
			},
			y.href = "javascript:void(0);",
			y.innerHTML = this._options.prevLabel,
			b = document.createElement("a"),
			b.className = "introjs-button introjs-skipbutton",
			b.href = "javascript:void(0);",
			b.innerHTML = this._options.skipLabel,
			b.onclick = function () {
				e._introItems.length - 1 == e._currentStep && "function" == typeof e._introCompleteCallback && e._introCompleteCallback.call(e),
				e._introItems.length - 1 != e._currentStep && "function" == typeof e._introExitCallback && e._introExitCallback.call(e),
				o.call(e, e._targetElement)
			},
			D.appendChild(b),
			1 < this._introItems.length && (D.appendChild(y), D.appendChild(_)),
			k.appendChild(D),
			a.call(e, t.element, k, i, w)
		}
		for (!0 === this._options.disableInteraction && d.call(e), y.removeAttribute("tabIndex"), _.removeAttribute("tabIndex"), 0 == this._currentStep && 1 < this._introItems.length ? (y.className = "introjs-button introjs-prevbutton introjs-disabled", y.tabIndex = "-1", _.className = "introjs-button introjs-nextbutton", b.innerHTML = this._options.skipLabel) : this._introItems.length - 1 == this._currentStep || 1 == this._introItems.length ? (b.innerHTML = this._options.doneLabel, y.className = "introjs-button introjs-prevbutton", _.className = "introjs-button introjs-nextbutton introjs-disabled", _.tabIndex = "-1") : (y.className = "introjs-button introjs-prevbutton", _.className = "introjs-button introjs-nextbutton", b.innerHTML = this._options.skipLabel), _.focus(), t.element.className += " introjs-showElement", w = p(t.element, "position"), "absolute" !== w && "relative" !== w && (t.element.className += " introjs-relativePosition"), w = t.element.parentNode; null != w && "body" !== w.tagName.toLowerCase(); )
			i = p(w, "z-index"), k = parseFloat(p(w, "opacity")), D = p(w, "transform") || p(w, "-webkit-transform") || p(w, "-moz-transform") || p(w, "-ms-transform") || p(w, "-o-transform"), (/[0-9]+/.test(i) || 1 > k || "none" !== D && void 0 !== D) && (w.className += " introjs-fixParent"), w = w.parentNode;
		v(t.element) || !0 !== this._options.scrollToElement || (k = t.element.getBoundingClientRect(), w = m().height, i = k.bottom - (k.bottom - k.top), k = k.bottom - w, 0 > i || t.element.clientHeight > w ? window.scrollBy(0, i - 30) : window.scrollBy(0, k + 100)),
		"undefined" != typeof this._introAfterChangeCallback && this._introAfterChangeCallback.call(this, t.element)
	}
	function p(t, e) {
		var i = "";
		return t.currentStyle ? i = t.currentStyle[e] : document.defaultView && document.defaultView.getComputedStyle && (i = document.defaultView.getComputedStyle(t, null).getPropertyValue(e)),
		i && i.toLowerCase ? i.toLowerCase() : i
	}
	function g(t) {
		var e = t.parentNode;
		return "HTML" === e.nodeName ? !1 : "fixed" == p(t, "position") ? !0 : g(e)
	}
	function m() {
		if (void 0 != window.innerWidth)
			return {
				width : window.innerWidth,
				height : window.innerHeight
			};
		var t = document.documentElement;
		return {
			width : t.clientWidth,
			height : t.clientHeight
		}
	}
	function v(t) {
		return t = t.getBoundingClientRect(),
		0 <= t.top && 0 <= t.left && t.bottom + 80 <= window.innerHeight && t.right <= window.innerWidth
	}
	function b(t) {
		var e = document.createElement("div"),
		i = "",
		n = this;
		if (e.className = "introjs-overlay", "body" === t.tagName.toLowerCase())
			i += "top: 0;bottom: 0; left: 0;right: 0;position: fixed;", e.setAttribute("style", i);
		else {
			var s = E(t);
			s && (i += "width: " + s.width + "px; height:" + s.height + "px; top:" + s.top + "px;left: " + s.left + "px;", e.setAttribute("style", i))
		}
		return t.appendChild(e),
		e.onclick = function () {
			1 == n._options.exitOnOverlayClick && (void 0 != n._introExitCallback && n._introExitCallback.call(n), o.call(n, t))
		},
		setTimeout(function () {
			i += "opacity: " + n._options.overlayOpacity.toString() + ";",
			e.setAttribute("style", i)
		}, 10),
		!0
	}
	function y() {
		var t = this._targetElement.querySelector(".introjs-hintReference");
		if (t) {
			var e = t.getAttribute("data-step");
			return t.parentNode.removeChild(t),
			e
		}
	}
	function _() {
		for (var t = 0, e = this._introItems.length; e > t; t++) {
			var i = this._introItems[t];
			k.call(this, i.hintPosition, i.element, i.targetElement)
		}
	}
	function w(t) {
		y.call(this);
		var e = this._targetElement.querySelector('.introjs-hint[data-step="' + t + '"]');
		e && (e.className += " introjs-hidehint"),
		"undefined" != typeof this._hintCloseCallback && this._hintCloseCallback.call(this, t)
	}
	function x() {
		var t = this,
		e = document.querySelector(".introjs-hints");
		null == e && (e = document.createElement("div"), e.className = "introjs-hints");
		for (var i = 0, n = this._introItems.length; n > i; i++) {
			var s = this._introItems[i];
			if (!document.querySelector('.introjs-hint[data-step="' + i + '"]')) {
				var r = document.createElement("a");
				r.href = "javascript:void(0);",
				function (e, i, n) {
					e.onclick = function (s) {
						s = s ? s : window.event,
						s.stopPropagation && s.stopPropagation(),
						null != s.cancelBubble && (s.cancelBubble = !0),
						C.call(t, e, i, n)
					}
				}
				(r, s, i),
				r.className = "introjs-hint",
				g(s.element) && (r.className += " introjs-fixedhint");
				var o = document.createElement("div");
				o.className = "introjs-hint-dot";
				var a = document.createElement("div");
				a.className = "introjs-hint-pulse",
				r.appendChild(o),
				r.appendChild(a),
				r.setAttribute("data-step", i),
				s.targetElement = s.element,
				s.element = r,
				k.call(this, s.hintPosition, r, s.targetElement),
				e.appendChild(r)
			}
		}
		document.body.appendChild(e),
		"undefined" != typeof this._hintsAddedCallback && this._hintsAddedCallback.call(this)
	}
	function k(t, e, i) {
		switch (i = E.call(this, i), t) {
		default:
		case "top-left":
			e.style.left = i.left + "px",
			e.style.top = i.top + "px";
			break;
		case "top-right":
			e.style.left = i.left + i.width + "px",
			e.style.top = i.top + "px";
			break;
		case "bottom-left":
			e.style.left = i.left + "px",
			e.style.top = i.top + i.height + "px";
			break;
		case "bottom-right":
			e.style.left = i.left + i.width + "px",
			e.style.top = i.top + i.height + "px";
			break;
		case "bottom-middle":
			e.style.left = i.left + i.width / 2 + "px",
			e.style.top = i.top + i.height + "px";
			break;
		case "top-middle":
			e.style.left = i.left + i.width / 2 + "px",
			e.style.top = i.top + "px"
		}
	}
	function C(t, e, i) {
		"undefined" != typeof this._hintClickCallback && this._hintClickCallback.call(this, t, e, i);
		var n = y.call(this);
		if (parseInt(n, 10) != i) {
			var n = document.createElement("div"),
			s = document.createElement("div"),
			r = document.createElement("div"),
			o = document.createElement("div");
			n.className = "introjs-tooltip",
			n.onclick = function (t) {
				t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
			},
			s.className = "introjs-tooltiptext";
			var l = document.createElement("p");
			l.innerHTML = e.hint,
			e = document.createElement("a"),
			e.className = "introjs-button",
			e.innerHTML = this._options.hintButtonLabel,
			e.onclick = w.bind(this, i),
			s.appendChild(l),
			s.appendChild(e),
			r.className = "introjs-arrow",
			n.appendChild(r),
			n.appendChild(s),
			this._currentStep = t.getAttribute("data-step"),
			o.className = "introjs-tooltipReferenceLayer introjs-hintReference",
			o.setAttribute("data-step", t.getAttribute("data-step")),
			c.call(this, o),
			o.appendChild(n),
			document.body.appendChild(o),
			a.call(this, t, n, r, null, !0)
		}
	}
	function E(t) {
		var e = {};
		e.width = t.offsetWidth,
		e.height = t.offsetHeight;
		for (var i = 0, n = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop); )
			i += t.offsetLeft, n += t.offsetTop, t = t.offsetParent;
		return e.top = n,
		e.left = i,
		e
	}
	function T() {
		return 100 * (parseInt(this._currentStep + 1, 10) / this._introItems.length)
	}
	var S = function (t) {
		if ("object" == typeof t)
			return new e(t);
		if ("string" == typeof t) {
			if (t = document.querySelector(t))
				return new e(t);
			throw Error("There is no element with given selector.")
		}
		return new e(document.body)
	};
	return S.version = "2.0",
	S.fn = e.prototype = {
		clone : function () {
			return new e(this)
		},
		setOption : function (t, e) {
			return this._options[t] = e,
			this
		},
		setOptions : function (t) {
			var e,
			i = this._options,
			n = {};
			for (e in i)
				n[e] = i[e];
			for (e in t)
				n[e] = t[e];
			return this._options = n,
			this
		},
		start : function () {
			return i.call(this, this._targetElement),
			this
		},
		goToStep : function (t) {
			return this._currentStep = t - 2,
			"undefined" != typeof this._introItems && s.call(this),
			this
		},
		nextStep : function () {
			return s.call(this),
			this
		},
		previousStep : function () {
			return r.call(this),
			this
		},
		exit : function () {
			return o.call(this, this._targetElement),
			this
		},
		refresh : function () {
			return c.call(this, document.querySelector(".introjs-helperLayer")),
			c.call(this, document.querySelector(".introjs-tooltipReferenceLayer")),
			this
		},
		onbeforechange : function (t) {
			if ("function" != typeof t)
				throw Error("Provided callback for onbeforechange was not a function");
			return this._introBeforeChangeCallback = t,
			this
		},
		onchange : function (t) {
			if ("function" != typeof t)
				throw Error("Provided callback for onchange was not a function.");
			return this._introChangeCallback = t,
			this
		},
		onafterchange : function (t) {
			if ("function" != typeof t)
				throw Error("Provided callback for onafterchange was not a function");
			return this._introAfterChangeCallback = t,
			this
		},
		oncomplete : function (t) {
			if ("function" != typeof t)
				throw Error("Provided callback for oncomplete was not a function.");
			return this._introCompleteCallback = t,
			this
		},
		onhintsadded : function (t) {
			if ("function" != typeof t)
				throw Error("Provided callback for onhintsadded was not a function.");
			return this._hintsAddedCallback = t,
			this
		},
		onhintclick : function (t) {
			if ("function" != typeof t)
				throw Error("Provided callback for onhintclick was not a function.");
			return this._hintClickCallback = t,
			this
		},
		onhintclose : function (t) {
			if ("function" != typeof t)
				throw Error("Provided callback for onhintclose was not a function.");
			return this._hintCloseCallback = t,
			this
		},
		onexit : function (t) {
			if ("function" != typeof t)
				throw Error("Provided callback for onexit was not a function.");
			return this._introExitCallback = t,
			this
		},
		addHints : function () {
			t : {
				var t = this._targetElement;
				if (this._introItems = [], this._options.hints)
					for (var t = 0, e = this._options.hints.length; e > t; t++) {
						var i = n(this._options.hints[t]);
						"string" == typeof i.element && (i.element = document.querySelector(i.element)),
						i.hintPosition = i.hintPosition || "top-middle",
						null != i.element && this._introItems.push(i)
					}
				else {
					if (i = t.querySelectorAll("*[data-hint]"), 1 > i.length)
						break t;
					for (t = 0, e = i.length; e > t; t++) {
						var s = i[t];
						this._introItems.push({
							element : s,
							hint : s.getAttribute("data-hint"),
							hintPosition : s.getAttribute("data-hintPosition") || this._options.hintPosition,
							tooltipClass : s.getAttribute("data-tooltipClass"),
							position : s.getAttribute("data-position") || this._options.tooltipPosition
						})
					}
				}
				x.call(this),
				document.addEventListener ? (document.addEventListener("click", y.bind(this), !1), window.addEventListener("resize", _.bind(this), !0)) : document.attachEvent && (document.attachEvent("onclick", y.bind(this)),
					document.attachEvent("onresize", _.bind(this)))
			}
			return this
		}
	},
	t.introJs = S
});
var templates = [{
		name : "arial-times-two-lines",
		type : "basic",
		watermarks : [{
				text : "Family Photos",
				font : "Arial",
				visibility : 100,
				color : "#ffffff",
				type : "text",
				active : !1,
				size : 140
			}, {
				text : "123 Main St, Clifton, VA",
				font : "times",
				visibility : 60,
				color : "#ffffff",
				type : "text",
				active : !1,
				size : 80,
				position : {
					top : .8,
					left : .05
				}
			}
		]
	}, {
		name : "impact-2-size",
		type : "basic",
		watermarks : [{
				text : "P",
				font : "Impact",
				visibility : 100,
				color : "#ffffff",
				type : "text",
				active : !1,
				size : 200
			}, {
				text : "hotography",
				font : "Impact",
				visibility : 100,
				color : "#ffffff",
				type : "text",
				active : !1,
				size : 100,
				position : {
					top : .38,
					left : .95
				}
			}, {
				text : "S",
				font : "Impact",
				visibility : 100,
				color : "#ffffff",
				type : "text",
				active : !1,
				size : 200,
				position : {
					top :  - .8,
					left : -1
				}
			}, {
				text : "mith",
				font : "Impact",
				visibility : 100,
				color : "#ffffff",
				type : "text",
				active : !1,
				size : 100,
				position : {
					top : .38,
					left : .95
				}
			}
		]
	}, {
		name : "italiana-three-lines",
		type : "basic",
		watermarks : [{
				text : "true",
				font : "Italiana",
				visibility : 80,
				color : "#ffffff",
				type : "text",
				active : !1,
				size : 100
			}, {
				text : "love",
				font : "Italiana",
				visibility : 80,
				color : "#ffffff",
				type : "text",
				active : !1,
				size : 100,
				position : {
					top : .9,
					left : 0
				}
			}, {
				text : "photography",
				font : "Italiana",
				visibility : 80,
				color : "#ffffff",
				type : "text",
				active : !1,
				size : 100,
				position : {
					top : .9,
					left : 0
				}
			}
		]
	}, {
		name : "josefin-slab-2-lines",
		type : "basic",
		watermarks : [{
				text : "Verdant",
				font : "Josefin Slab",
				visibility : 80,
				color : "#000",
				type : "text",
				active : !1,
				size : 100
			}, {
				text : "Images",
				font : "Josefin Slab",
				visibility : 80,
				color : "#fff",
				type : "text",
				active : !1,
				size : 100,
				position : {
					top : .5,
					left : .15
				}
			}
		]
	}, {
		name : "montserrat-two-size-black",
		type : "basic",
		watermarks : [{
				text : "S",
				font : "Montserrat",
				visibility : 80,
				color : "#000",
				type : "text",
				active : !1,
				size : 200
			}, {
				text : "MITH",
				font : "Montserrat",
				visibility : 80,
				color : "#000",
				type : "text",
				active : !1,
				size : 130,
				position : {
					top : .1,
					left : .9
				}
			}, {
				text : "M",
				font : "Montserrat",
				visibility : 80,
				color : "#000",
				type : "text",
				active : !1,
				size : 200,
				position : {
					top :  - .1,
					left : -1.6
				}
			}, {
				text : "OE",
				font : "Montserrat",
				visibility : 80,
				color : "#000",
				type : "text",
				active : !1,
				size : 130,
				position : {
					top : .1,
					left : .9
				}
			}
		]
	}, {
		name : "pacifico-red-two-size",
		type : "basic",
		watermarks : [{
				text : "S",
				font : "Pacifico",
				visibility : 80,
				color : "#c23030",
				type : "text",
				active : !1,
				size : 200
			}, {
				text : "mith",
				font : "Pacifico",
				visibility : 80,
				color : "#c23030",
				type : "text",
				active : !1,
				size : 100,
				position : {
					top : .3,
					left : .95
				}
			}, {
				text : "J",
				font : "Pacifico",
				visibility : 80,
				color : "#c23030",
				type : "text",
				active : !1,
				size : 200,
				position : {
					top :  - .55,
					left : -2.8
				}
			}, {
				text : "ane",
				font : "Pacifico",
				visibility : 80,
				color : "#c23030",
				type : "text",
				active : !1,
				size : 100,
				position : {
					top : .25,
					left : .95
				}
			}
		]
	}, {
		name : "roboto-three-lines",
		type : "basic",
		watermarks : [{
				text : "Jackson",
				font : "Roboto",
				visibility : 80,
				color : "#ffffff",
				type : "text",
				active : !1,
				size : 100
			}, {
				text : "Smith",
				font : "Roboto",
				visibility : 80,
				color : "#ffffff",
				type : "text",
				active : !1,
				size : 100,
				position : {
					top : .9,
					left : 0
				}
			}, {
				text : "Photography",
				font : "Roboto",
				visibility : 80,
				color : "#ffffff",
				type : "text",
				active : !1,
				size : 100,
				position : {
					top : .9,
					left : 0
				}
			}
		]
	}, {
		name : "abril-fatface-one-line",
		type : "pro",
		watermarks : [{
				text : "Michaelson Photos",
				font : "Abril Fatface",
				visibility : 90,
				color : "#f49815",
				type : "text",
				active : !1,
				size : 100
			}
		]
	}, {
		name : "bangers-josefin-two-lines",
		type : "pro",
		watermarks : [{
				text : "Abrasive",
				font : "Bangers",
				visibility : 90,
				color : "#fff",
				type : "text",
				active : !1,
				size : 200
			}, {
				text : "Illustrations",
				font : "Josefin Slab",
				visibility : 90,
				color : "#fff",
				type : "text",
				active : !1,
				size : 150,
				position : {
					top : .7,
					left :  - .1
				}
			}
		]
	}, {
		name : "daysone-one-line",
		type : "pro",
		watermarks : [{
				text : "MILLER",
				font : "Days One",
				visibility : 30,
				color : "#000",
				type : "text",
				active : !1,
				size : 200
			}
		]
	}, {
		name : "marvel-two-lines",
		type : "pro",
		watermarks : [{
				text : "stillwater",
				font : "Marvel",
				visibility : 100,
				color : "#f9f9f9",
				type : "text",
				active : !1,
				size : 100
			}, {
				text : "photography",
				font : "Marvel",
				visibility : 70,
				color : "#000",
				type : "text",
				active : !1,
				size : 100,
				position : {
					top : .65,
					left : .2
				}
			}
		]
	}, {
		name : "yellowtail-one-line",
		type : "pro",
		watermarks : [{
				text : "Headshot",
				font : "Yellowtail",
				visibility : 30,
				color : "#0b0bec",
				type : "text",
				active : !1,
				size : 200
			}
		]
	}, {
		name : "ubuntu-tienne-two-lines",
		type : "pro",
		watermarks : [{
				text : "MARK JACKSON",
				font : "Ubuntu",
				visibility : 100,
				color : "#fff",
				type : "text",
				active : !1,
				size : 150
			}, {
				text : "PHOTOGRAPHY",
				font : "Tienne",
				visibility : 70,
				color : "#fff",
				type : "text",
				active : !1,
				size : 100,
				position : {
					top : .7,
					left : .13
				}
			}
		]
	}, {
		name : "oswald-two-lines",
		type : "pro",
		watermarks : [{
				text : "COLD",
				font : "Oswald",
				visibility : 100,
				color : "#fff",
				type : "text",
				active : !1,
				size : 100
			}, {
				text : "WINTER",
				font : "Oswald",
				visibility : 70,
				color : "#e0e0e0",
				type : "text",
				active : !1,
				size : 100,
				position : {
					top : .75,
					left : 0
				}
			}
		]
	}, {
		name : "kaushan-script-alegreya-two-lines",
		type : "pro",
		watermarks : [{
				text : "Jessica Last",
				font : "Kaushan Script",
				visibility : 90,
				color : "#fff",
				type : "text",
				active : !1,
				size : 140
			}, {
				text : "photography",
				font : "Alegreya",
				visibility : 70,
				color : "#b3b3b3",
				type : "text",
				active : !1,
				size : 100,
				position : {
					top : .65,
					left : .3
				}
			}
		]
	}, {
		name : "philosopher-one-line",
		type : "pro",
		watermarks : [{
				text : "Sunset Photography",
				font : "Philosopher",
				visibility : 80,
				color : "#fff",
				type : "text",
				active : !1,
				size : 100
			}
		]
	}, {
		name : "playball-lora-two-lines",
		type : "pro",
		watermarks : [{
				text : "OMalley",
				font : "Playball",
				visibility : 100,
				color : "#8e8e8e",
				type : "text",
				active : !1,
				size : 140
			}, {
				text : "PHOTOGRAPHERS",
				font : "Lora",
				visibility : 100,
				color : "#8e8e8e",
				type : "text",
				active : !1,
				size : 70,
				position : {
					top : .75,
					left :  - .15
				}
			}
		]
	}, {
		name : "karla-sofia-two-lines",
		type : "pro",
		watermarks : [{
				text : "KARLA",
				font : "Karla",
				visibility : 100,
				color : "#fff",
				type : "text",
				active : !1,
				size : 140
			}, {
				text : "photo",
				font : "Sofia",
				visibility : 80,
				color : "#b0b0b0",
				type : "text",
				active : !1,
				size : 100,
				position : {
					top : .7,
					left : .25
				}
			}
		]
	}, {
		name : "gruppo-two-colors",
		type : "pro",
		watermarks : [{
				text : "rich keppler",
				font : "Gruppo",
				visibility : 100,
				color : "#fff",
				type : "text",
				active : !1,
				size : 140
			}, {
				text : "photo",
				font : "Gruppo",
				visibility : 100,
				color : "#aa0bd2",
				type : "text",
				active : !1,
				size : 140,
				position : {
					top : 0,
					left : 1.05
				}
			}
		]
	}
];
_.templateSettings = {
	evaluate : /\{\{(.+?)\}\}/g,
	interpolate : /\{\{=(.+?)\}\}/g,
	escape : /\{\{-(.+?)\}\}/g
};
var Editor = new Marionette.Application;
Editor.onStart = function (t) {
	Editor.isPro = t.pro,
	Editor.isBasic = !Editor.isPro,
	Editor.sizeViewport(),
	this.images = new Editor.Models.Images,
	this.images.on("add", function (t) {
		Editor.trigger("addedImages", t)
	}),
	this.watermarks = new Editor.Models.Watermarks,
	this.watermarks.on("add", function () {
		Editor.trigger("watermarkCountChange")
	}),
	this.watermarks.on("remove", function () {
		Editor.trigger("watermarkCountChange")
	}),
	Editor.menu = new Editor.MenuApp.Menu,
	Editor.menu.render(),
	this.gallery = new Editor.GalleryApp.GalleryView({
			collection : Editor.images
		}),
	this.gallery.render(),
	this.saveImages = new Editor.SaveApp.SaveImagesView({
			collection : Editor.images
		}),
	this.saveImages.render(),
	this.viewer = new Editor.ViewerApp.Viewer,
	this.viewer.render(),
	Editor.ViewerApp.start(),
	$(document).keyup(function (t) {
		46 == t.keyCode && Editor.trigger("deletePressed")
	}),
	this.queue = [],
	$(window).resize(Editor.sizeViewport),
	Editor.basicImageCountLimit = 5,
	Editor.basicImageSizeLimit = 3145728
}, Editor.sizeViewport = function () {
	var t = $(window).height() - $(".navbar-fixed-top").outerHeight() - $("#menu").outerHeight() - $("#gallery").outerHeight();
	$("#viewer").height(t)
}, Editor.addPhoto = function (t) {
	var e = new Image;
	e.src = window.URL.createObjectURL(t),
	e.onload = function () {
		var e = new Editor.Models.Image({
				src : this.src,
				size : t.size,
				name : t.name,
				type : t.type,
				width : this.width,
				height : this.height
			});
		Editor.isBasic ? Editor.images.length >= Editor.basicImageCountLimit ? Editor.showError() : e.get("size") > Editor.basicImageSizeLimit ? Editor.showError(e) : Editor.images.add(e) : Editor.images.add(e)
	}
}, Editor.showError = function (t) {
	$("#basicErrorModal").modal("show"),
	t && $(".tooBigList").removeClass("hidden").find("ul").append("<li>" + t.get("name") + " - " + getReadableFileSizeString(t.get("size")) + "</li>"),
	$("#basicErrorModal").one("hidden.bs.modal", function () {
		$(".tooBigList").addClass("hidden").find("li").remove()
	})
}, Editor.on("addPhotos", function (t) {
	$("#starter").modal("hide");
	for (var e = 0, i = t.length; i > e; e++)
		Editor.addPhoto(t[e])
}), Editor.on("watermarkQueue", function (t) {
	console.log(t),
	this.queue = t,
	Editor.watermarks.add(this.queue.shift())
}), Editor.on("watermarkRendered", function (t) {
	if (Editor.queue.length) {
		var e = Editor.queue.shift();
		e.position && (e.offsetTop = t.get("offsetTop") + t.get("height") / Editor.viewer.image.get("height") * 100 * e.position.top, e.offsetLeft = t.get("offsetLeft") + t.get("width") / Editor.viewer.image.get("width") * 100 * e.position.left),
		Editor.watermarks.add(e)
	}
}), Editor.module("Models", function (t, e, i) {
	e.Models.Image = i.Model.extend(),
	e.Models.Images = i.Collection.extend({
			model : t.Image
		}),
	e.Models.Watermark = i.Model.extend(),
	e.Models.Watermarks = i.Collection.extend({
			model : t.Watermark
		}),
	e.Models.Template = i.Model.extend({
			url : "/templates"
		}),
	e.Models.Templates = i.Collection.extend({
			url : "/templates",
			model : t.Template
		})
}), Editor.module("MenuApp", function (t, e, i, n, s) {
	t.Menu = n.LayoutView.extend({
			el : "#menu",
			template : !1,
			regions : {
				submenu : "#submenu",
				templates : ".template-list-holder"
			},
			addDefaultTemplates : function () {
				var i = this;
				templates.forEach(function (t) {
					i.templates.add(new e.Models.Template(t))
				}),
				this.templatesView = new t.TemplatesView({
						collection : i.templates
					}),
				this.templatesView.render(),
				this.saveTemplateView = new t.SaveTemplateView
			},
			initialize : function () {
				var t = this;
				t.templates = new e.Models.Templates,
				e.isPro ? t.templates.fetch().then(function () {
					t.addDefaultTemplates()
				}) : t.addDefaultTemplates()
			},
			events : {
				"click #addPhotos" : "addPhotos",
				"click #addText" : "addText",
				"click #addLogo" : "addLogo",
				"click #save" : "save",
				"click .dropdown-menu" : "clickDropDown",
				"click #saveTemplate" : "saveTemplate"
			},
			saveTemplate : function () {
				var t = this;
				t.saveTemplateView.show();
				var i = {
					name : "",
					type : "personal",
					watermarks : []
				};
				async.eachLimit(e.watermarks.models, 3, function (t, e) {
					var n = t.attributes;
					if ("text" == n.type || "blob" == n.src.slice(0, 3))
						i.watermarks.push(n), e();
					else {
						var s = new Image;
						s.onload = function () {
							var t = document.createElement("canvas");
							t.setAttribute("width", n.width),
							t.setAttribute("height", n.height);
							var r = t.getContext("2d");
							r.drawImage(s, 0, 0),
							n.src = t.toDataURL("image/png"),
							i.watermarks.push(n),
							e()
						},
						s.src = n.src
					}
				}, function () {
					console.log(i),
					t.saveTemplateView.setTemplate(i)
				})
			},
			save : function () {
				e.trigger("save")
			},
			closeDropDown : function () {
				this.$el.find("button#templates").parent().click()
			},
			clickDropDown : function (t) {
				t.stopPropagation()
			},
			activateImageRequiredButtons : function () {
				this.$el.find(".btn.imageRequired").removeClass("disabled")
			},
			activateWatermarkRequiredButtons : function () {
				this.$el.find(".btn.watermarkRequired").removeClass("disabled")
			},
			deactivateWatermarkRequiredButtons : function () {
				this.$el.find(".btn.watermarkRequired").addClass("disabled")
			},
			addPhotos : function (t) {
				t.preventDefault();
				var i = s('<input type="file" multiple="multiple" accept="image/*">');
				i.change(function (t) {
					e.trigger("addPhotos", t.target.files)
				}).click()
			},
			addText : function (t) {
				if (t.preventDefault(), !s(t.target).hasClass("disabled")) {
					var i = Math.round(Math.max(.038 * e.viewer.image.get("width"), 20)),
					n = new e.Models.Watermark({
							text : "Â© Click to edit",
							font : "Open Sans",
							size : i,
							visibility : 95,
							color : "#ffffff",
							type : "text",
							active : !1
						});
					e.watermarks.add(n)
				}
			},
			addLogo : function (t) {
				t.preventDefault();
				var i = s('<input type="file" accept="image/*">');
				i.change(function (t) {
					var i = t.target.files[0],
					n = new Image;
					n.src = window.URL.createObjectURL(i),
					n.onload = function () {
						var t = new e.Models.Watermark({
								visibility : 95,
								type : "image",
								active : !0,
								src : this.src,
								height : this.height,
								width : this.width,
								originalHeight : this.height,
								originalWidth : this.width,
								size : 100
							});
						e.watermarks.add(t)
					}
				}).click()
			}
		}),
	t.SaveTemplateView = n.ItemView.extend({
			template : !1,
			el : "#nameTemplateModal",
			events : {
				"keyup #templateName" : "setTemplateName",
				"click .btn" : "saveTemplate"
			},
			setTemplateName : function () {
				this.templateName = this.$el.find("#templateName").val(),
				this.templateName ? this.$el.find(".btn").removeClass("disabled") : this.$el.find(".btn").addClass("disabled")
			},
			show : function () {
				this.$el.find("#templateName").val(""),
				this.$el.modal("show")
			},
			setTemplate : function (t) {
				this.template = t
			},
			saveTemplate : function () {
				var t = this;
				t.template.name = this.templateName,
				t.$el.find(".btn .state").addClass("hidden"),
				t.$el.find(".btn .state.saving").removeClass("hidden");
				var i = new e.Models.Template(this.template);
				i.save({}, {
					success : function () {
						t.$el.find(".btn .state").addClass("hidden"),
						t.$el.find(".btn .state.done").removeClass("hidden"),
						setTimeout(function () {
							t.$el.modal("hide")
						}, 2e3)
					},
					error : function () {
						console.log("error"),
						t.$el.find(".btn .state").addClass("hidden"),
						t.$el.find(".btn .state.ready").removeClass("hidden")
					}
				})
			}
		}),
	t.TemplateView = n.ItemView.extend({
			template : "#templateTemplate",
			className : function () {
				return "pro" == this.model.get("type") ? "template pro" : "template"
			},
			events : {
				click : "addTemplate"
			},
			templateHelpers : {
				imgSrc : function () {
					return "personal" !== this.type ? "/images/templates/" + this.name + ".jpg" : void 0
				}
			},
			addTemplate : function () {
				if ("pro" == this.model.get("type") && e.isBasic)
					s("#upgradeModal").modal("show");
				else {
					var t = this.model.get("watermarks");
					if ("personal" !== this.model.get("type")) {
						var i = Math.round(Math.max(.038 * e.viewer.image.get("width"), 20));
						t.forEach(function (t) {
							t.size = Math.round(t.size / 100 * i)
						})
					}
					e.trigger("addTemplate", t),
					e.trigger("watermarkQueue", t)
				}
			}
		}),
	t.TemplatesView = n.CollectionView.extend({
			childView : t.TemplateView,
			template : !1,
			el : ".template-list-holder"
		}),
	e.on("addedImages", function () {
		e.menu.activateImageRequiredButtons()
	}),
	e.on("addTemplate", function () {
		e.menu.closeDropDown()
	}),
	e.on("watermarkCountChange", function () {
		e.watermarks.length ? e.menu.activateWatermarkRequiredButtons() : e.menu.deactivateWatermarkRequiredButtons()
	})
}), Editor.module("GalleryApp", function (t, e, i, n) {
	t.GalleryImageView = n.ItemView.extend({
			template : "#galleryImageTemplate",
			className : "galleryImageHolder",
			triggers : {
				click : "image:clicked"
			},
			activate : function () {
				this.$el.addClass("active")
			},
			inactivate : function () {
				this.$el.removeClass("active")
			}
		}),
	t.GalleryView = n.CollectionView.extend({
			childView : t.GalleryImageView,
			el : "#gallery",
			template : !1,
			onAddChild : function (t) {
				this.imageClicked(t)
			},
			childEvents : {
				"image:clicked" : "imageClicked"
			},
			imageClicked : function (t) {
				this.children.forEach(function (t) {
					t.inactivate()
				}),
				t.activate(),
				e.trigger("imageClicked", t.model)
			}
		})
}), Editor.module("ViewerApp", function (t, e, i, n, s, r) {
	this.startWithParent = !1,
	getTextHeight = function (t, e) {
		var i = s("<span>Hg</span>").css({
				"font-family" : t,
				"font-size" : e
			}),
		n = s('<div style="display: inline-block; width: 1px; height: 0px;"></div>'),
		r = s("<div></div>");
		r.append(i, n);
		var o = s("body");
		o.append(r);
		try {
			var a = {};
			n.css({
				verticalAlign : "baseline"
			}),
			a.ascent = n.offset().top - i.offset().top,
			n.css({
				verticalAlign : "bottom"
			}),
			a.height = n.offset().top - i.offset().top,
			a.descent = a.height - a.ascent
		}
		finally {
			r.remove()
		}
		return a
	},
	text2image = function (t, e, i, n) {
		var s = +i || 12,
		n = n || "black",
		r = document.createElement("canvas"),
		o = r.getContext("2d");
		o.font = s + "px " + e;
		var a = this.getTextHeight(e, s).height,
		l = Math.floor(o.measureText(t).width + 10);
		return r.setAttribute("width", l),
		r.setAttribute("height", a),
		o = r.getContext("2d"),
		o.fillStyle = n,
		o.font = s + "px " + e,
		o.fillText(t, 0, s), {
			src : r.toDataURL(),
			height : a,
			width : l
		}
	},
	t.on("start", function () {
		t.watermarksView = new t.WatermarksView({
				collection : e.watermarks
			}),
		t.watermarksView.render()
	}),
	t.PopoverView = n.ItemView.extend({
			events : {
				"click .btn-number" : "adjustByButton",
				"keyup .input-number" : "adjustByText",
				"click .btn-danger" : "deleteText",
				"change .visibility" : "changeVisibility"
			},
			onRender : function () {
				this.$el.find(".color-picker").spectrum({
					move : function (t) {
						s(".color").val(t.toHexString())
					}
				}).on("dragstop.spectrum", function (t, e) {
					s(".color").val(e.toHexString()).change()
				}),
				this.$el.find(".color-picker").spectrum("set", this.model.get("color")),
				this.$el.find(".slide").bootstrapSlider({
					min : 0,
					max : 100,
					value : this.model.get("visibility")
				}).on("slideStop", function (t) {
					var e = t.value;
					s(".visibility").val(e).change()
				})
			},
			changeVisibility : function (t) {
				var e = s(t.currentTarget).val();
				this.model.set("visibility", parseInt(e))
			},
			deleteText : function (t) {
				t.preventDefault(),
				t.stopPropagation(),
				s(".popover").remove(),
				this.model.collection.remove(this.model),
				this.model.destroy(),
				e.trigger("deactivateAllWatermarks")
			},
			adjustByText : function (t) {
				var e = s(t.currentTarget),
				i = e.attr("id"),
				n = parseInt(e.data("min")),
				r = parseInt(e.data("max"));
				e.val(e.val().replace(/[^\d]+/, ""));
				var o = e.val();
				"" == o ? (o = this.model.get(i), e.val(o)) : o > r ? (o = r, e.val(o)) : n > o && (o = n, e.val(o)),
				this.model.set(i, parseInt(e.val()))
			},
			adjustByButton : function (t) {
				var e = s(t.currentTarget),
				i = s("#" + e.data("target")),
				n = i.attr("id"),
				r = parseInt(i.data("min")),
				o = parseInt(i.data("max")),
				a = parseInt(i.val()),
				l = parseInt(e.data("value")),
				h = a + l;
				h >= r && o >= h && (i.val(h), this.model.set(n, h))
			}
		}),
	t.LogoPopoverView = t.PopoverView.extend({
			template : "#viewerLogoPopoverTemplate"
		}),
	t.TextPopoverView = t.PopoverView.extend({
			template : "#viewerTextPopoverTemplate",
			events : function () {
				return r.extend({}, t.PopoverView.prototype.events, {
					"keyup .color" : "changeColor",
					"change .color" : "changeColor",
					"keyup input.text" : "editText",
					"change .font" : "changeFont",
					"keyup .font" : "changeFont"
				})
			},
			changeColor : function () {
				var t = s(".color").val();
				s(".color-picker").spectrum("set", t),
				this.model.set("color", t)
			},
			changeFont : function (t) {
				var e = s(t.currentTarget).val();
				this.model.set("font", e)
			},
			editText : function () {
				var t = this.$el.find("input.text").val();
				this.model.set("text", t)
			}
		}),
	t.WatermarkView = n.ItemView.extend({
			template : "#viewerWatermarkTemplate",
			initialize : function () {
				this.listenTo(this.model, "change:text", this.render),
				this.listenTo(this.model, "change:size", this.changeSize),
				this.listenTo(this.model, "change:visibility", this.render),
				this.listenTo(this.model, "change:font", this.render),
				this.listenTo(this.model, "change:color", this.render)
			},
			events : {
				click : "clicked",
				dragstop : "stopDrag",
				dragstart : "startDrag"
			},
			changeSize : function () {
				if ("text" === this.model.get("type"))
					this.render();
				else {
					var t = this.model.get("size") / 100;
					this.model.set("height", this.model.get("originalHeight") * t),
					this.model.set("width", this.model.get("originalWidth") * t),
					this.render()
				}
			},
			clicked : function () {
				this.ignoreClick ? this.ignoreClick = !1 : e.trigger("activateWatermark", this.model)
			},
			activate : function () {
				this.$el.addClass("active");
				var e = this;
				setTimeout(function () {
					var i;
					s(".popover").remove(),
					i = "text" === e.model.get("type") ? new t.TextPopoverView({
							model : e.model
						}) : new t.LogoPopoverView({
							model : e.model
						}),
					i.render(),
					e.$el.popover({
						content : i.$el,
						animation : !1,
						placement : "auto left"
					}),
					e.$el.popover("show")
				}, 1)
			},
			deactivate : function () {
				s(".popover").remove(),
				this.$el.removeClass("active")
			},
			startDrag : function () {
				this.deactivate()
			},
			stopDrag : function () {
				var t = this.$el.position().left,
				i = t / (e.viewer.image.get("width") * e.viewer.image.get("scale"));
				this.model.set("offsetLeft", 100 * i);
				var n = this.$el.position().top,
				s = n / (e.viewer.image.get("height") * e.viewer.image.get("scale"));
				this.model.set("offsetTop", 100 * s),
				this.ignoreClick = !0
			},
			onBeforeRender : function () {
				if ("text" === this.model.get("type")) {
					var t = text2image(this.model.get("text"), this.model.get("font"), this.model.get("size"), this.model.get("color"));
					this.model.set("src", t.src),
					this.model.set("height", t.height),
					this.model.set("width", t.width)
				}
				if ("undefined" == typeof this.model.get("offsetTop")) {
					var i = this.model.get("height") / 2,
					n = e.viewer.image.get("height") / 2,
					s = n - i,
					r = s / e.viewer.image.get("height");
					this.model.set("offsetTop", 100 * r);
					var o = this.model.get("width") / 2,
					a = e.viewer.image.get("width") / 2,
					s = a - o,
					r = s / e.viewer.image.get("width");
					this.model.set("offsetLeft", 100 * r)
				}
			},
			onRender : function () {
				this.$el = this.$el.children(),
				this.$el.unwrap(),
				this.setElement(this.$el),
				this.$el.draggable({
					containment : "parent"
				}).css("position", "absolute"),
				e.trigger("watermarkRendered", this.model)
			},
			templateHelpers : {
				displayWidth : function () {
					return this.width * e.viewer.image.get("scale")
				},
				displayHeight : function () {
					return this.height * e.viewer.image.get("scale")
				}
			}
		}),
	t.WatermarksView = n.CollectionView.extend({
			template : !1,
			el : "#container",
			childView : t.WatermarkView,
			deactivateAllWatermarks : function () {
				this.children.forEach(function (t) {
					t.deactivate()
				})
			}
		}),
	t.Viewer = n.ItemView.extend({
			el : "#viewer",
			template : !1,
			events : {
				click : "click"
			},
			deactivateAllWatermarks : function () {
				t.watermarksView.deactivateAllWatermarks()
			},
			click : function (t) {
				var i = s(t.target).attr("id");
				("viewer" === i || "container" === i) && (s(".popover").remove(), e.trigger("deactivateAllWatermarks"))
			}
		}),
	getContainerScale = function (t) {
		var i = e.viewer.$el.width() - 20,
		n = e.viewer.$el.height() - 20,
		s = t.get("width"),
		r = t.get("height"),
		o = yScale = 1;
		return s > i && (o = 1 - (s - i) / s),
		r > n && (yScale = 1 - (r - n) / r),
		Math.min(o, yScale)
	},
	showImage = function (i) {
		e.viewer.deactivateAllWatermarks(),
		e.viewer.image = i;
		var n = getContainerScale(i);
		i.set("scale", n);
		var s = i.get("width") * n,
		r = i.get("height") * n,
		o = e.viewer.$el.width(),
		a = e.viewer.$el.height();
		e.viewer.$el.find("#container").width(s).height(r).css({
			top : (a - r) / 2,
			left : (o - s) / 2,
			"background-image" : "url(" + i.get("src") + ")"
		}).data("scale", n),
		t.watermarksView.render()
	},
	e.on("imageAdded", showImage),
	e.on("imageClicked", showImage),
	e.on("deactivateAllWatermarks", function () {
		e.viewer.deactivateAllWatermarks()
	}),
	e.on("activateWatermark", function (i) {
		setTimeout(function () {
			e.viewer.deactivateAllWatermarks(),
			t.watermarksView.children.findByModel(i).activate()
		}, 10)
	})
}), Editor.module("SaveApp", function (t, e, i, n, s, r) {
	t.SaveZipButtonView = n.ItemView.extend({
			template : !1,
			el : "#saveModal .modal-footer .btn-primary",
			events : {
				click : "saveZip"
			},
			saveZip : function () {
				var t = new JSZip;
				e.images.forEach(function (e) {
					t.file(e.get("name"), e.get("renderedSrc").substring(22), {
						base64 : !0
					})
				});
				var i = t.generate({
						type : "blob"
					});
				saveAs(i, "watermarquee.zip")
			},
			enable : function () {
				this.$el.removeClass("disabled")
			}
		}),
	t.SaveImageView = n.ItemView.extend({
			template : "#saveImageTemplate",
			className : "saveImage saving",
			events : {
				"click a" : "save"
			},
			save : function (t) {
				s(t.currentTarget).attr("href", this.$el.find("img.rendered").attr("src"))
			},
			renderTemplate : r.template(s("#renderedImageTemplate").html()),
			renderComplete : function () {
				var t = this,
				e = new Image;
				e.className = "rendered",
				e.onload = function () {
					t.$el.find(".text").addClass("hidden");
					var e = s("<a></a>");
					e.attr("href", "/download/" + t.model.get("name")),
					e.attr("download", t.model.get("name")),
					t.$el.find(".rendered").wrap(e),
					t.$el.find(".prerender").addClass("animated fadeOut").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
						t.$el.find(".prerender").addClass("hidden"),
						t.$el.find(".rendered").css("visibility", "visible")
					})
				},
				t.$el.append(e),
				e.src = this.model.get("renderedSrc")
			},
			refresh : function () {
				this.$el.find("a").remove(),
				this.$el.find(".hidden").removeClass("hidden"),
				this.$el.find(".prerender").removeClass("animated fadeOut")
			}
		}),
	t.SaveImagesView = n.CollectionView.extend({
			childView : t.SaveImageView,
			el : "#saveModal .modal-body .saveGallery",
			template : !1,
			onRender : function () {
				this.zipButton = new t.SaveZipButtonView;
				var e = this;
				s("#saveModal").on("hidden.bs.modal", function () {
					e.refresh()
				})
			},
			save : function () {
				var t = this;
				e.startRender = (new Date).getTime(),
				setTimeout(function () {
					async.eachLimit(e.images.models, 3, renderImage, function () {
						t.zipButton.enable()
					})
				}, 500)
			},
			refresh : function () {
				this.children.forEach(function (t) {
					t.refresh()
				})
			}
		}),
	renderImage = function (t, i) {
		var n = document.createElement("canvas"),
		s = n.getContext("2d");
		n.setAttribute("width", t.get("width")),
		n.setAttribute("height", t.get("height"));
		var r = new Image;
		r.onload = function () {
			s.drawImage(r, 0, 0);
			s.globalAlpha;
			e.watermarks.forEach(function (e) {
				s.globalAlpha = e.get("visibility") / 100;
				var i = e.get("offsetLeft") / 100 * t.get("width"),
				n = e.get("offsetTop") / 100 * t.get("height"),
				r = new Image;
				r.src = e.get("src"),
				s.drawImage(r, i, n, e.get("width"), e.get("height"))
			});
			var o = e.saveImages.children.findByModel(t);
			t.set("renderedSrc", n.toDataURL("image/jpeg")),
			o.renderComplete();
			(new Date).getTime() - e.startRender;
			i()
		},
		r.src = t.get("src")
	},
	e.on("save", function () {
		e.saveImages.save()
	})
});