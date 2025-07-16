/*! (c) FunnyMonkey under Copyright Reserved */
(() => {
    "use strict";
    if (self.jsu) return !1;
    const e = document,
        t = new WeakMap,
        n = new WeakMap,
        s = Symbol();
    class r {
        constructor(t, n = !0) {
            let s = t;
            if ("string" == typeof t && (!1 === n || t.indexOf("<") > -1)) {
                const n = e.createElement("div");
                n.innerHTML = t, s = n.childNodes
            }
            this._fillNodeList(s)
        }
        static _isDefined(e) {
            return null != e
        }
        static _forEach(e, t, n = !1) {
            const s = e.length;
            if (n) {
                for (let i = s - 1; i >= 0; i--)
                    if (r._isDefined(e[i].forEach)) r._forEach(e[i], t, n);
                    else if (!1 === t(e[i], i)) break
            } else
                for (let i = 0; i < s; i++)
                    if (r._isDefined(e[i].forEach)) r._forEach(e[i], t, n);
                    else if (!1 === t(e[i], i)) break
        }
        _fillNodeList(t) {
            if (r._isDefined(t))
                if (t instanceof r) this[s] = t.get();
                else if ("string" == typeof t) this[s] = e.querySelectorAll(t);
            else if (t instanceof Node || t instanceof HTMLDocument || t instanceof Window) this[s] = [t];
            else if (t instanceof NodeList || t instanceof HTMLCollection) this[s] = t;
            else {
                if ("object" != typeof t) throw new DOMException("invalid parameter for jsu");
                this[s] = [], r._isDefined(t.forEach) || (t = [t]), t.forEach((e => {
                    const t = e => {
                        -1 === this[s].indexOf(e) && this[s].push(e)
                    };
                    e instanceof r ? e.forEach(t) : Array.isArray(e) || e instanceof NodeList || e instanceof HTMLCollection || /^\[object (HTMLCollection|NodeList|Object)\]$/.test(e.toString()) ? r._forEach(e, t) : this[s].push(e)
                }))
            } else this[s] = [];
            this.forEach(((e, t) => {
                this[t] = e
            }))
        }
        forEach(e, t = !1) {
            return r._forEach(this[s], e, t), this
        }
        css(e, t) {
            let n = !1;
            const i = r._isDefined(e),
                o = r._isDefined(t),
                a = [];
            return this.forEach((s => {
                i && o && "string" == typeof e ? (s.style[e] = t, n = !0) : i && ("string" == typeof e ? a.push(window.getComputedStyle(s)[e]) : "object" == typeof e && (n = !0, Object.keys(e).forEach((t => {
                    "string" == typeof t && (s.style[t] = e[t])
                }))))
            })), n ? this : this[s].length > 1 ? a : a[0]
        }
        attr(e, t) {
            let n = !1;
            const i = r._isDefined(e),
                o = r._isDefined(t),
                a = [];
            return this.forEach((s => {
                const h = (e, t) => {
                    n = !0, r._isDefined(s[e]) ? s[e] = t : s.setAttribute(e, t)
                };
                var c;
                i && o && "string" == typeof e ? h(e, t) : i && ("string" == typeof e ? a.push((c = e, r._isDefined(s[c]) ? s[c] : s.getAttribute(c))) : "object" == typeof e && Object.keys(e).forEach((t => {
                    "string" == typeof t && h(t, e[t])
                })))
            })), n ? this : this[s].length > 1 ? a : a[0]
        }
        removeAttr(e) {
            return this.forEach((t => {
                t.removeAttribute(e)
            })), this
        }
        static _addEventListener(e, n) {
            let s = t.get(e);
            r._isDefined(s) || (s = {}, t.set(e, s)), s[n.event] || (s[n.event] = []), s[n.event].push({
                fn: n.fn,
                name: n.name || n.event + "_" + +new Date + Math.random().toString(36).substr(2, 12),
                opts: n.opts,
                wantsUntrusted: n.wantsUntrusted
            }), e.addEventListener(n.event, n.fn, n.opts, n.wantsUntrusted)
        }
        static _cloneEventListener(e, n) {
            const s = t.get(e);
            r._isDefined(s) && Object.keys(s).forEach((e => {
                s[e].forEach((t => {
                    r._addEventListener(n, {
                        event: e,
                        fn: t.fn,
                        opts: t.opts,
                        wantsUntrusted: t.wantsUntrusted
                    })
                }))
            })), n.children && r._forEach(n.children, ((t, n) => {
                r._cloneEventListener(e.children[n], t)
            }))
        }
        static _addData(e, t, s) {
            let i = n.get(e);
            r._isDefined(i) || (i = {}, n.set(e, i)), i[t] = s
        }
        static _cloneData(e, t) {
            const s = n.get(e);
            r._isDefined(s) && Object.keys(s).forEach((e => {
                r._addData(t, e, s[e])
            })), t.children && r._forEach(t.children, ((t, n) => {
                r._cloneData(e.children[n], t)
            }))
        }
        static _cloneElement(e) {
            const t = [];
            return e.forEach((e => {
                const n = e.cloneNode(!0);
                r._cloneEventListener(e, n), r._cloneData(e, n), t.push(n)
            })), new r(t)
        }
        clone() {
            return r._cloneElement(this)
        }
        data(e, t) {
            let i = !1;
            const o = r._isDefined(e),
                a = r._isDefined(t),
                h = [];
            return this.forEach((s => {
                const c = n.get(s),
                    l = r._isDefined(c);
                o && a ? (i = !0, r._addData(s, e, t)) : o ? "string" == typeof e ? h.push(l ? c[e] : void 0) : "object" == typeof e && (i = !0, Object.keys(e).forEach((t => {
                    "string" == typeof t && r._addData(s, t, e[t])
                }))) : h.push(l ? c : {})
            })), i ? this : this[s].length > 1 ? h : h[0]
        }
        removeData(e) {
            const t = !r._isDefined(e);
            return this.forEach((s => {
                const i = n.get(s);
                r._isDefined(i) && (t ? n.delete(s) : r._isDefined(i[e]) && delete i[e])
            })), this
        }
        on(e, t, n, s, i) {
            const o = (e, t) => {
                Object.keys(t).forEach((n => {
                    try {
                        Object.defineProperty(e, n, {
                            value: t[n]
                        })
                    } catch (e) {}
                }))
            };
            let a = n;
            "function" == typeof n ? a = s : i = s, void 0 === a && (a = null), void 0 === i && (i = null);
            const h = "string" == typeof t;
            return this.forEach((s => {
                e.split(/\s+/g).forEach((e => {
                    const c = e.split(/\./);
                    r._addEventListener(s, {
                        event: c[0],
                        name: c[1],
                        fn: e => {
                            if (o(e, {
                                    type: c[0]
                                }), h) {
                                const i = {
                                    preventDefault: () => {
                                        e.preventDefault()
                                    },
                                    stopPropagation: () => {
                                        e.stopPropagation()
                                    }
                                };
                                r._forEach(s.querySelectorAll(":scope " + t), (t => {
                                    let r = e.target;
                                    for (; r && r !== s;) {
                                        if (r === t) {
                                            const t = c[0].startsWith("key") ? new KeyboardEvent(c[0], e) : new MouseEvent(c[0], e);
                                            o(t, {
                                                preventDefault: i.preventDefault,
                                                stopPropagation: i.stopPropagation,
                                                currentTarget: r,
                                                target: e.target
                                            }), n(t)
                                        }
                                        r = r.parentNode
                                    }
                                }))
                            } else "function" == typeof t && t(e)
                        },
                        opts: a,
                        wantsUntrusted: i
                    })
                }))
            }), !0), this
        }
        off(e) {
            return this.forEach((n => {
                const s = t.get(n);
                if (r._isDefined(s)) {
                    e.split(/\s+/g).forEach((e => {
                        const t = e.split(/\./);
                        "*" === t[0] ? Object.entries(s).forEach((([e, i]) => {
                            r._forEach(i, ((r, i) => {
                                void 0 !== t[1] && t[1] !== r.name || (n.removeEventListener(e, r.fn), s[e].splice(i, 1))
                            }), !0)
                        })) : s[t[0]] && r._forEach(s[t[0]], ((e, r) => {
                            void 0 !== t[1] && t[1] !== e.name || (n.removeEventListener(t[0], e.fn), s[t[0]].splice(r, 1))
                        }), !0)
                    }))
                }
            })), this
        }
        trigger(e, t) {
            return e.split(/\s+/g).forEach((e => {
                const n = e.split(/\./),
                    s = new CustomEvent(n[0], t);
                this.forEach((e => {
                    e.dispatchEvent(s)
                }))
            })), this
        }
        addClass(e) {
            return "object" != typeof e && (e = [e]), this.forEach((t => {
                e.forEach((e => {
                    t.classList.contains(e) || t.classList.add(e)
                }))
            })), this
        }
        removeClass(e) {
            return "object" != typeof e && (e = [e]), this.forEach((t => {
                e.forEach((e => {
                    t.classList.contains(e) && t.classList.remove(e)
                }))
            })), this
        }
        toggleClass(e) {
            return this.forEach((t => {
                t.classList.toggle(e)
            })), this
        }
        hasClass(e) {
            const t = [];
            return this.forEach((n => {
                t.push(n.classList.contains(e))
            })), this[s].length > 1 ? t : t[0]
        }
        _realDimension(e, t = !1) {
            const n = [];
            let r = "width",
                i = ["left", "right"];
            return "h" === e && (r = "height", i = ["top", "bottom"]), this.forEach((e => {
                const s = e.getBoundingClientRect(),
                    o = window.getComputedStyle(e);
                let a = parseFloat((s[r] + "").replace(/,/g, "."));
                t && i.forEach((e => {
                    const t = o.getPropertyValue("margin-" + e);
                    a += parseFloat((t + "").replace(/,/g, "."))
                })), n.push(a)
            })), this[s].length > 1 ? n : n[0]
        }
        realWidth(e = !1) {
            return this._realDimension("w", e)
        }
        realHeight(e = !1) {
            return this._realDimension("h", e)
        }
        find(e) {
            const t = [];
            return this.forEach((n => {
                n instanceof HTMLIFrameElement ? t.push(n.contentDocument.querySelectorAll(":scope " + e)) : t.push(n.querySelectorAll(":scope " + e))
            })), new r(t)
        }
        children(e) {
            const t = [];
            return e || (e = "*"), this.forEach((n => {
                t.push(n.querySelectorAll(":scope > " + e))
            })), new r(t)
        }
        _htmlText(e, t) {
            const n = r._isDefined(e);
            let s = n ? this : "";
            return this.forEach((r => {
                n ? r[t] = e : s += r[t]
            })), s
        }
        html(e) {
            return this._htmlText(e, "innerHTML")
        }
        text(e) {
            return this._htmlText(e, "innerText")
        }
        remove() {
            this.forEach((e => {
                e && e.parentElement && (t.delete(e), n.delete(e), e.parentElement.removeChild(e))
            }))
        }
        _moveElement(e, t, n = !0) {
            if (Array.isArray(e)) e.forEach((e => {
                this._moveElement(e, t, n)
            }));
            else {
                "string" == typeof e && e.indexOf("<") > -1 && (n = !1);
                const s = new r(e, n);
                this.forEach((e => {
                    r._cloneElement(s).forEach((n => {
                        switch (t) {
                            case "append":
                                e.appendChild(n);
                                break;
                            case "prepend":
                                e.insertBefore(n, e.firstChild);
                                break;
                            case "before":
                                e.parentNode.insertBefore(n, e);
                                break;
                            case "after":
                                e.parentNode.insertBefore(n, e.nextSibling)
                        }
                    }))
                })), s.remove()
            }
            return this
        }
        _moveElementTo(e, t) {
            const n = [];
            return new r(e).forEach((e => {
                r._cloneElement(this).forEach((s => {
                    switch (t) {
                        case "append":
                            e.appendChild(s);
                            break;
                        case "prepend":
                            e.insertBefore(s, e.firstChild);
                            break;
                        case "before":
                            e.parentNode.insertBefore(s, e);
                            break;
                        case "after":
                            e.parentNode.insertBefore(s, e.nextSibling)
                    }
                    n.push(s)
                }))
            })), this.remove(), new r(n)
        }
        append(e, t) {
            return this._moveElement(e, "append", t)
        }
        appendTo(e) {
            return this._moveElementTo(e, "append")
        }
        prepend(e, t = !0) {
            return this._moveElement(e, "prepend", t)
        }
        prependTo(e) {
            return this._moveElementTo(e, "prepend")
        }
        before(e, t = !0) {
            return this._moveElement(e, "before", t)
        }
        insertBefore(e) {
            return this._moveElementTo(e, "before")
        }
        after(e, t = !0) {
            return this._moveElement(e, "after", t)
        }
        insertAfter(e) {
            return this._moveElementTo(e, "after")
        }
        _nextPrev(e, t) {
            const n = r._isDefined(e),
                s = [];
            return this.forEach((i => {
                const o = "prev" === t ? i.previousElementSibling : i.nextElementSibling;
                r._isDefined(o) && (!n || r._isDefined(o.matches) && o.matches(e)) && s.push(o)
            })), new r(s)
        }
        next(e) {
            return this._nextPrev(e, "next")
        }
        prev(e) {
            return this._nextPrev(e, "prev")
        }
        _siblings(e, t = "siblings") {
            const n = r._isDefined(e),
                i = [];
            return this.forEach((s => {
                let o = null;
                const a = [];
                for ("siblings" === t && s.parentNode.firstElementChild ? (o = s.parentNode.firstElementChild, t = "next") : "previous" !== t && "next" !== t || (o = s[t + "ElementSibling"]); o && o.matches;) o === s || n && !o.matches(e) || a.push(o), o = o[t + "ElementSibling"];
                i.push(new r(a))
            })), this[s].length > 1 ? new r(i) : i[0]
        }
        siblings(e) {
            return this._siblings(e)
        }
        nextAll(e) {
            return this._siblings(e, "next")
        }
        prevAll(e) {
            return this._siblings(e, "previous")
        }
        parent(e) {
            const t = r._isDefined(e),
                n = [];
            return this.forEach((s => {
                let i = s.parentNode;
                !t || r._isDefined(i.matches) && i.matches(e) || (i = null), n.push(new r(i))
            })), this[s].length > 1 ? new r(n) : n[0]
        }
        parents(e) {
            const t = r._isDefined(e),
                n = [];
            return this.forEach((s => {
                const i = [];
                let o = s.parentNode;
                for (; o && o.matches && o !== this;) t && !o.matches(e) || i.push(o), o = o.parentNode;
                n.push(new r(i))
            })), this[s].length > 1 ? new r(n) : n[0]
        }
        document() {
            const e = [];
            return this.forEach((t => {
                e.push(new r(t.ownerDocument))
            })), this[s].length > 1 ? new r(e) : e[0]
        }
        eq(e) {
            return e < 0 && (e = this[s].length + e), new r(this[s][e])
        }
        get(e) {
            return r._isDefined(e) ? (e < 0 && (e = this[s].length + e), this[s][e]) : this[s]
        }
        length() {
            return this[s].length
        }
    }(() => {
        const e = e => new r(e);
        Object.entries(jsuTools).forEach((([t, n]) => {
            e[t] = n
        })), self.jsu = e
    })()
})();
