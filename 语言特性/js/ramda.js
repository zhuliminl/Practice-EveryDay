//  Ramda v0.24.1
//  https://github.com/ramda/ramda
//  (c) 2013-2017 Scott Sauyet, Michael Hurley, and David Chambers
//  Ramda may be freely distributed under the MIT license.

(function() {
    "use strict";
    var t = { "@@functional/placeholder": !0 },
        n = function(t, n) {
            for (var r = 0, e = n.length - (t - 1), u = new Array(e >= 0 ? e : 0); e > r;) u[r] = Array.prototype.slice.call(n, r, r + t), r += 1;
            return u },
        r = function(t, n) {
            switch (t) {
                case 0:
                    return function() {
                        return n.apply(this, arguments) };
                case 1:
                    return function(t) {
                        return n.apply(this, arguments) };
                case 2:
                    return function(t, r) {
                        return n.apply(this, arguments) };
                case 3:
                    return function(t, r, e) {
                        return n.apply(this, arguments) };
                case 4:
                    return function(t, r, e, u) {
                        return n.apply(this, arguments) };
                case 5:
                    return function(t, r, e, u, i) {
                        return n.apply(this, arguments) };
                case 6:
                    return function(t, r, e, u, i, o) {
                        return n.apply(this, arguments) };
                case 7:
                    return function(t, r, e, u, i, o, c) {
                        return n.apply(this, arguments) };
                case 8:
                    return function(t, r, e, u, i, o, c, a) {
                        return n.apply(this, arguments) };
                case 9:
                    return function(t, r, e, u, i, o, c, a, s) {
                        return n.apply(this, arguments) };
                case 10:
                    return function(t, r, e, u, i, o, c, a, s, f) {
                        return n.apply(this, arguments) };
                default:
                    throw new Error("First argument to _arity must be a non-negative integer no greater than ten") } },
        e = function(t) {
            for (var n, r = []; !(n = t.next()).done;) r.push(n.value);
            return r },
        u = function(t) {
            return new RegExp(t.source, (t.global ? "g" : "") + (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.sticky ? "y" : "") + (t.unicode ? "u" : "")) },
        i = function(t) {
            return function() {
                return !t.apply(this, arguments) } },
        o = function(t, n) { t = t || [], n = n || [];
            var r, e = t.length,
                u = n.length,
                i = [];
            for (r = 0; e > r;) i[i.length] = t[r], r += 1;
            for (r = 0; u > r;) i[i.length] = n[r], r += 1;
            return i },
        c = function(t, n, r) {
            for (var e = 0, u = r.length; u > e;) {
                if (t(n, r[e])) return !0;
                e += 1 }
            return !1 },
        a = function(t, n) {
            for (var r = n.length - 1; r >= 0 && t(n[r]);) r -= 1;
            return Array.prototype.slice.call(n, 0, r + 1) },
        s = function(t, n) {
            for (var r = 0, e = n.length, u = []; e > r;) t(n[r]) && (u[u.length] = n[r]), r += 1;
            return u },
        f = function(t) {
            return { "@@transducer/value": t, "@@transducer/reduced": !0 } },
        l = function(t) {
            var n = String(t).match(/^function (\w*)/);
            return null == n ? "" : n[1] },
        p = function(t, n) {
            return Object.prototype.hasOwnProperty.call(n, t) },
        h = function(t) {
            return t },
        y = function() {
            var t = Object.prototype.toString;
            return "[object Arguments]" === t.call(arguments) ? function(n) {
                return "[object Arguments]" === t.call(n) } : function(t) {
                return p("callee", t) } }(),
        g = Array.isArray || function(t) {
            return null != t && t.length >= 0 && "[object Array]" === Object.prototype.toString.call(t) },
        d = function(t) {
            return "[object Function]" === Object.prototype.toString.call(t) },
        m = Number.isInteger || function(t) {
            return t << 0 === t },
        v = function(t) {
            return "[object Number]" === Object.prototype.toString.call(t) },
        w = function(t) {
            return "[object Object]" === Object.prototype.toString.call(t) },
        b = function(t) {
            return null != t && "object" == typeof t && t["@@functional/placeholder"] === !0 },
        x = function(t) {
            return "[object RegExp]" === Object.prototype.toString.call(t) },
        j = function(t) {
            return "[object String]" === Object.prototype.toString.call(t) },
        A = function(t) {
            return "function" == typeof t["@@transducer/step"] },
        O = function(t, n) {
            for (var r = 0, e = n.length, u = Array(e); e > r;) u[r] = t(n[r]), r += 1;
            return u },
        S = function(t) {
            if (null == t) throw new TypeError("Cannot convert undefined or null to object");
            for (var n = Object(t), r = 1, e = arguments.length; e > r;) {
                var u = arguments[r];
                if (null != u)
                    for (var i in u) p(i, u) && (n[i] = u[i]);
                r += 1 }
            return n },
        E = function(t) {
            return [t] },
        _ = function(t, n) {
            return function() {
                return n.call(this, t.apply(this, arguments)) } },
        q = function(t, n) {
            return function() {
                var r = this;
                return t.apply(r, arguments).then(function(t) {
                    return n.call(r, t) }) } },
        N = function(t) {
            var n = t.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
            return '"' + n.replace(/"/g, '\\"') + '"' },
        k = function(t) {
            return t && t["@@transducer/reduced"] ? t : { "@@transducer/value": t, "@@transducer/reduced": !0 } },
        I = function() {
            var t = function(t) {
                return (10 > t ? "0" : "") + t };
            return "function" == typeof Date.prototype.toISOString ? function(t) {
                return t.toISOString() } : function(n) {
                return n.getUTCFullYear() + "-" + t(n.getUTCMonth() + 1) + "-" + t(n.getUTCDate()) + "T" + t(n.getUTCHours()) + ":" + t(n.getUTCMinutes()) + ":" + t(n.getUTCSeconds()) + "." + (n.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z" } }(),
        W = { init: function() {
                return this.xf["@@transducer/init"]() }, result: function(t) {
                return this.xf["@@transducer/result"](t) } },
        C = function() {
            function t(t) { this.f = t }
            return t.prototype["@@transducer/init"] = function() {
                    throw new Error("init not implemented on XWrap") }, t.prototype["@@transducer/result"] = function(t) {
                    return t }, t.prototype["@@transducer/step"] = function(t, n) {
                    return this.f(t, n) },
                function(n) {
                    return new t(n) } }(),
        P = "function" == typeof Object.assign ? Object.assign : S,
        T = function(t, n) {
            return function() {
                var r = arguments.length;
                if (0 === r) return n();
                var e = arguments[r - 1];
                return g(e) || "function" != typeof e[t] ? n.apply(this, arguments) : e[t].apply(e, Array.prototype.slice.call(arguments, 0, r - 1)) } },
        F = function(t) {
            return function n(r) {
                return 0 === arguments.length || b(r) ? n : t.apply(this, arguments) } },
        B = function(t) {
            return function n(r, e) {
                switch (arguments.length) {
                    case 0:
                        return n;
                    case 1:
                        return b(r) ? n : F(function(n) {
                            return t(r, n) });
                    default:
                        return b(r) && b(e) ? n : b(r) ? F(function(n) {
                            return t(n, e) }) : b(e) ? F(function(n) {
                            return t(r, n) }) : t(r, e) } } },
        R = function(t) {
            return function n(r, e, u) {
                switch (arguments.length) {
                    case 0:
                        return n;
                    case 1:
                        return b(r) ? n : B(function(n, e) {
                            return t(r, n, e) });
                    case 2:
                        return b(r) && b(e) ? n : b(r) ? B(function(n, r) {
                            return t(n, e, r) }) : b(e) ? B(function(n, e) {
                            return t(r, n, e) }) : F(function(n) {
                            return t(r, e, n) });
                    default:
                        return b(r) && b(e) && b(u) ? n : b(r) && b(e) ? B(function(n, r) {
                            return t(n, r, u) }) : b(r) && b(u) ? B(function(n, r) {
                            return t(n, e, r) }) : b(e) && b(u) ? B(function(n, e) {
                            return t(r, n, e) }) : b(r) ? F(function(n) {
                            return t(n, e, u) }) : b(e) ? F(function(n) {
                            return t(r, n, u) }) : b(u) ? F(function(n) {
                            return t(r, e, n) }) : t(r, e, u) } } },
        U = function Xu(t, n, e) {
            return function() {
                for (var u = [], i = 0, o = t, c = 0; c < n.length || i < arguments.length;) {
                    var a;
                    c < n.length && (!b(n[c]) || i >= arguments.length) ? a = n[c] : (a = arguments[i], i += 1), u[c] = a, b(a) || (o -= 1), c += 1 }
                return 0 >= o ? e.apply(this, u) : r(o, Xu(t, u, e)) } },
        D = function(t, n, r) {
            return function() {
                if (0 === arguments.length) return r();
                var e = Array.prototype.slice.call(arguments, 0),
                    u = e.pop();
                if (!g(u)) {
                    for (var i = 0; i < t.length;) {
                        if ("function" == typeof u[t[i]]) return u[t[i]].apply(u, e);
                        i += 1 }
                    if (A(u)) {
                        var o = n.apply(null, e);
                        return o(u) } }
                return r.apply(this, arguments) } },
        M = F(function(t) {
            return g(t) ? !0 : t ? "object" != typeof t ? !1 : j(t) ? !1 : 1 === t.nodeType ? !!t.length : 0 === t.length ? !0 : t.length > 0 ? t.hasOwnProperty(0) && t.hasOwnProperty(t.length - 1) : !1 : !1 }),
        L = function(t) {
            return function n(r) {
                for (var e, u, i, o = [], c = 0, a = r.length; a > c;) {
                    if (M(r[c]))
                        for (e = t ? n(r[c]) : r[c], i = 0, u = e.length; u > i;) o[o.length] = e[i], i += 1;
                    else o[o.length] = r[c];
                    c += 1 }
                return o } },
        z = function() {
            function t(t, n) { this.xf = n, this.f = t, this.all = !0 }
            return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = function(t) {
                return this.all && (t = this.xf["@@transducer/step"](t, !0)), this.xf["@@transducer/result"](t) }, t.prototype["@@transducer/step"] = function(t, n) {
                return this.f(n) || (this.all = !1, t = k(this.xf["@@transducer/step"](t, !1))), t }, B(function(n, r) {
                return new t(n, r) }) }(),
        K = function() {
            function t(t, n) { this.xf = n, this.f = t, this.any = !1 }
            return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = function(t) {
                return this.any || (t = this.xf["@@transducer/step"](t, !1)), this.xf["@@transducer/result"](t) }, t.prototype["@@transducer/step"] = function(t, n) {
                return this.f(n) && (this.any = !0, t = k(this.xf["@@transducer/step"](t, !0))), t }, B(function(n, r) {
                return new t(n, r) }) }(),
        V = function() {
            function t(t, n) { this.xf = n, this.pos = 0, this.full = !1, this.acc = new Array(t) }
            return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = function(t) {
                return this.acc = null, this.xf["@@transducer/result"](t) }, t.prototype["@@transducer/step"] = function(t, n) {
                return this.store(n), this.full ? this.xf["@@transducer/step"](t, this.getCopy()) : t }, t.prototype.store = function(t) { this.acc[this.pos] = t, this.pos += 1, this.pos === this.acc.length && (this.pos = 0, this.full = !0) }, t.prototype.getCopy = function() {
                return o(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos)) }, B(function(n, r) {
                return new t(n, r) }) }(),
        $ = function() {
            function t(t, n) { this.xf = n, this.n = t }
            return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = W.result, t.prototype["@@transducer/step"] = function(t, n) {
                return this.n > 0 ? (this.n -= 1, t) : this.xf["@@transducer/step"](t, n) }, B(function(n, r) {
                return new t(n, r) }) }(),
        H = function() {
            function t(t, n) { this.xf = n, this.pos = 0, this.full = !1, this.acc = new Array(t) }
            return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = function(t) {
                return this.acc = null, this.xf["@@transducer/result"](t) }, t.prototype["@@transducer/step"] = function(t, n) {
                return this.full && (t = this.xf["@@transducer/step"](t, this.acc[this.pos])), this.store(n), t }, t.prototype.store = function(t) { this.acc[this.pos] = t, this.pos += 1, this.pos === this.acc.length && (this.pos = 0, this.full = !0) }, B(function(n, r) {
                return new t(n, r) }) }(),
        J = function() {
            function t(t, n) { this.xf = n, this.pred = t, this.lastValue = void 0, this.seenFirstValue = !1 }
            return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = W.result, t.prototype["@@transducer/step"] = function(t, n) {
                var r = !1;
                return this.seenFirstValue ? this.pred(this.lastValue, n) && (r = !0) : this.seenFirstValue = !0, this.lastValue = n, r ? t : this.xf["@@transducer/step"](t, n) }, B(function(n, r) {
                return new t(n, r) }) }(),
        X = function() {
            function t(t, n) { this.xf = n, this.f = t }
            return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = W.result, t.prototype["@@transducer/step"] = function(t, n) {
                if (this.f) {
                    if (this.f(n)) return t;
                    this.f = null }
                return this.xf["@@transducer/step"](t, n) }, B(function(n, r) {
                return new t(n, r) }) }(),
        Y = function() {
            function t(t, n) { this.xf = n, this.f = t }
            return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = W.result, t.prototype["@@transducer/step"] = function(t, n) {
                return this.f(n) ? this.xf["@@transducer/step"](t, n) : t }, B(function(n, r) {
                return new t(n, r) }) }(),
        Z = function() {
            function t(t, n) { this.xf = n, this.f = t, this.found = !1 }
            return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = function(t) {
                return this.found || (t = this.xf["@@transducer/step"](t, void 0)), this.xf["@@transducer/result"](t) }, t.prototype["@@transducer/step"] = function(t, n) {
                return this.f(n) && (this.found = !0, t = k(this.xf["@@transducer/step"](t, n))), t }, B(function(n, r) {
                return new t(n, r) }) }(),
        G = function() {
            function t(t, n) { this.xf = n, this.f = t, this.idx = -1, this.found = !1 }
            return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = function(t) {
                return this.found || (t = this.xf["@@transducer/step"](t, -1)), this.xf["@@transducer/result"](t) }, t.prototype["@@transducer/step"] = function(t, n) {
                return this.idx += 1, this.f(n) && (this.found = !0, t = k(this.xf["@@transducer/step"](t, this.idx))), t }, B(function(n, r) {
                return new t(n, r) }) }(),
        Q = function() {
            function t(t, n) { this.xf = n, this.f = t }
            return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = function(t) {
                return this.xf["@@transducer/result"](this.xf["@@transducer/step"](t, this.last)) }, t.prototype["@@transducer/step"] = function(t, n) {
                return this.f(n) && (this.last = n), t }, B(function(n, r) {
                return new t(n, r) }) }(),
        tt = function() {
            function t(t, n) { this.xf = n, this.f = t, this.idx = -1, this.lastIdx = -1 }
            return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = function(t) {
                return this.xf["@@transducer/result"](this.xf["@@transducer/step"](t, this.lastIdx)) }, t.prototype["@@transducer/step"] = function(t, n) {
                return this.idx += 1, this.f(n) && (this.lastIdx = this.idx), t }, B(function(n, r) {
                return new t(n, r) }) }(),
        nt = function() {
            function t(t, n) { this.xf = n, this.f = t }
            return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = W.result, t.prototype["@@transducer/step"] = function(t, n) {
                return this.xf["@@transducer/step"](t, this.f(n)) }, B(function(n, r) {
                return new t(n, r) }) }(),
        rt = function() {
            function t(t, n, r, e) { this.valueFn = t, this.valueAcc = n, this.keyFn = r, this.xf = e, this.inputs = {} }
            return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = function(t) {
                var n;
                for (n in this.inputs)
                    if (p(n, this.inputs) && (t = this.xf["@@transducer/step"](t, this.inputs[n]), t["@@transducer/reduced"])) { t = t["@@transducer/value"];
                        break }
                return this.inputs = null, this.xf["@@transducer/result"](t) }, t.prototype["@@transducer/step"] = function(t, n) {
                var r = this.keyFn(n);
                return this.inputs[r] = this.inputs[r] || [r, this.valueAcc], this.inputs[r][1] = this.valueFn(this.inputs[r][1], n), t }, U(4, [], function(n, r, e, u) {
                return new t(n, r, e, u) }) }(),
        et = function() {
            function t(t, n) { this.xf = n, this.n = t, this.i = 0 }
            return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = W.result, t.prototype["@@transducer/step"] = function(t, n) { this.i += 1;
                var r = 0 === this.n ? t : this.xf["@@transducer/step"](t, n);
                return this.n >= 0 && this.i >= this.n ? k(r) : r }, B(function(n, r) {
                return new t(n, r) }) }(),
        ut = function() {
            function t(t, n) { this.xf = n, this.f = t }
            return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = W.result, t.prototype["@@transducer/step"] = function(t, n) {
                return this.f(n) ? this.xf["@@transducer/step"](t, n) : k(t) }, B(function(n, r) {
                return new t(n, r) }) }(),
        it = B(function(t, n) {
            return Number(t) + Number(n) }),
        ot = R(function(t, n, r) {
            if (n >= r.length || n < -r.length) return r;
            var e = 0 > n ? r.length : 0,
                u = e + n,
                i = o(r);
            return i[u] = t(r[u]), i }),
        ct = B(D(["all"], z, function(t, n) {
            for (var r = 0; r < n.length;) {
                if (!t(n[r])) return !1;
                r += 1 }
            return !0 })),
        at = F(function(t) {
            return function() {
                return t } }),
        st = B(function(t, n) {
            return t && n }),
        ft = B(D(["any"], K, function(t, n) {
            for (var r = 0; r < n.length;) {
                if (t(n[r])) return !0;
                r += 1 }
            return !1 })),
        lt = B(D([], V, n)),
        pt = B(function(t, n) {
            return o(n, [t]) }),
        ht = B(function(t, n) {
            return t.apply(this, n) }),
        yt = R(function(t, n, r) {
            var e = t(n),
                u = t(r);
            return u > e ? -1 : e > u ? 1 : 0 }),
        gt = R(function(t, n, r) {
            var e = {};
            for (var u in r) e[u] = r[u];
            return e[t] = n, e }),
        dt = B(function(t, n) {
            return r(t.length, function() {
                return t.apply(n, arguments) }) }),
        mt = R(function(t, n, r) {
            if (t > n) throw new Error("min must not be greater than max in clamp(min, max, value)");
            return t > r ? t : r > n ? n : r }),
        vt = F(function(t) {
            return function(n, r) {
                return t(n, r) ? -1 : t(r, n) ? 1 : 0 } }),
        wt = B(function(t, n) {
            return 1 === t ? F(n) : r(t, U(t, [], n)) }),
        bt = it(-1),
        xt = B(function(t, n) {
            return null == n || n !== n ? t : n }),
        jt = R(function(t, n, r) {
            var e = t(n),
                u = t(r);
            return e > u ? -1 : u > e ? 1 : 0 }),
        At = R(function(t, n, r) {
            for (var e = [], u = 0, i = n.length; i > u;) c(t, n[u], r) || c(t, n[u], e) || e.push(n[u]), u += 1;
            return e }),
        Ot = B(function(t, n) {
            var r = {};
            for (var e in n) r[e] = n[e];
            return delete r[t], r }),
        St = B(function(t, n) {
            return t / n }),
        Et = B(D(["dropWhile"], X, function(t, n) {
            for (var r = 0, e = n.length; e > r && t(n[r]);) r += 1;
            return Array.prototype.slice.call(n, r) })),
        _t = F(function(t) {
            return null != t && "function" == typeof t["fantasy-land/empty"] ? t["fantasy-land/empty"]() : null != t && null != t.constructor && "function" == typeof t.constructor["fantasy-land/empty"] ? t.constructor["fantasy-land/empty"]() : null != t && "function" == typeof t.empty ? t.empty() : null != t && null != t.constructor && "function" == typeof t.constructor.empty ? t.constructor.empty() : g(t) ? [] : j(t) ? "" : w(t) ? {} : y(t) ? function() {
                return arguments }() : void 0 }),
        qt = B(function Yu(t, n) {
            var r, e, u, i = {};
            for (e in n) r = t[e], u = typeof r, i[e] = "function" === u ? r(n[e]) : r && "object" === u ? Yu(r, n[e]) : n[e];
            return i }),
        Nt = B(D(["find"], Z, function(t, n) {
            for (var r = 0, e = n.length; e > r;) {
                if (t(n[r])) return n[r];
                r += 1 } })),
        kt = B(D([], G, function(t, n) {
            for (var r = 0, e = n.length; e > r;) {
                if (t(n[r])) return r;
                r += 1 }
            return -1 })),
        It = B(D([], Q, function(t, n) {
            for (var r = n.length - 1; r >= 0;) {
                if (t(n[r])) return n[r];
                r -= 1 } })),
        Wt = B(D([], tt, function(t, n) {
            for (var r = n.length - 1; r >= 0;) {
                if (t(n[r])) return r;
                r -= 1 }
            return -1 })),
        Ct = F(L(!0)),
        Pt = B(T("forEach", function(t, n) {
            for (var r = n.length, e = 0; r > e;) t(n[e]), e += 1;
            return n })),
        Tt = F(function(t) {
            for (var n = {}, r = 0; r < t.length;) n[t[r][0]] = t[r][1], r += 1;
            return n }),
        Ft = B(function(t, n) {
            for (var r = [], e = 0, u = n.length; u > e;) {
                for (var i = e + 1; u > i && t(n[i - 1], n[i]);) i += 1;
                r.push(n.slice(e, i)), e = i }
            return r }),
        Bt = B(function(t, n) {
            return t > n }),
        Rt = B(function(t, n) {
            return t >= n }),
        Ut = B(p),
        Dt = B(function(t, n) {
            return t in n }),
        Mt = B(function(t, n) {
            return t === n ? 0 !== t || 1 / t === 1 / n : t !== t && n !== n }),
        Lt = F(h),
        zt = R(function(t, n, r) {
            return wt(Math.max(t.length, n.length, r.length), function() {
                return t.apply(this, arguments) ? n.apply(this, arguments) : r.apply(this, arguments) }) }),
        Kt = it(1),
        Vt = R(function(t, n, r) {
            return s(function(n) {
                return c(t, n, r) }, n) }),
        $t = R(function(t, n, r) { t = t < r.length && t >= 0 ? t : r.length;
            var e = Array.prototype.slice.call(r, 0);
            return e.splice(t, 0, n), e }),
        Ht = R(function(t, n, r) {
            return t = t < r.length && t >= 0 ? t : r.length, [].concat(Array.prototype.slice.call(r, 0, t), n, Array.prototype.slice.call(r, t)) }),
        Jt = B(T("intersperse", function(t, n) {
            for (var r = [], e = 0, u = n.length; u > e;) e === u - 1 ? r.push(n[e]) : r.push(n[e], t), e += 1;
            return r })),
        Xt = B(function(t, n) {
            return null != n && n.constructor === t || n instanceof t }),
        Yt = F(function(t) {
            return null == t }),
        Zt = function() {
            var t = !{ toString: null }.propertyIsEnumerable("toString"),
                n = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
                r = function() {
                    return arguments.propertyIsEnumerable("length") }(),
                e = function(t, n) {
                    for (var r = 0; r < t.length;) {
                        if (t[r] === n) return !0;
                        r += 1 }
                    return !1 };
            return F("function" != typeof Object.keys || r ? function(u) {
                if (Object(u) !== u) return [];
                var i, o, c = [],
                    a = r && y(u);
                for (i in u) !p(i, u) || a && "length" === i || (c[c.length] = i);
                if (t)
                    for (o = n.length - 1; o >= 0;) i = n[o], p(i, u) && !e(c, i) && (c[c.length] = i), o -= 1;
                return c } : function(t) {
                return Object(t) !== t ? [] : Object.keys(t) }) }(),
        Gt = F(function(t) {
            var n, r = [];
            for (n in t) r[r.length] = n;
            return r }),
        Qt = F(function(t) {
            return null != t && v(t.length) ? t.length : NaN }),
        tn = B(function(t, n) {
            return n > t }),
        nn = B(function(t, n) {
            return n >= t }),
        rn = R(function(t, n, r) {
            for (var e = 0, u = r.length, i = [], o = [n]; u > e;) o = t(o[0], r[e]), i[e] = o[1], e += 1;
            return [o[0], i] }),
        en = R(function(t, n, r) {
            for (var e = r.length - 1, u = [], i = [n]; e >= 0;) i = t(r[e], i[0]), u[e] = i[1], e -= 1;
            return [u, i[0]] }),
        un = B(function(t, n) {
            return n.match(t) || [] }),
        on = B(function(t, n) {
            return m(t) ? !m(n) || 1 > n ? NaN : (t % n + n) % n : NaN }),
        cn = B(function(t, n) {
            return n > t ? n : t }),
        an = R(function(t, n, r) {
            return t(r) > t(n) ? r : n }),
        sn = B(function(t, n) {
            var e = {};
            return r(n.length, function() {
                var r = t.apply(this, arguments);
                return p(r, e) || (e[r] = n.apply(this, arguments)), e[r] }) }),
        fn = B(function(t, n) {
            return P({}, t, n) }),
        ln = F(function(t) {
            return P.apply(null, [{}].concat(t)) }),
        pn = R(function(t, n, r) {
            var e, u = {};
            for (e in n) p(e, n) && (u[e] = p(e, r) ? t(e, n[e], r[e]) : n[e]);
            for (e in r) p(e, r) && !p(e, u) && (u[e] = r[e]);
            return u }),
        hn = B(function(t, n) {
            return t > n ? n : t }),
        yn = R(function(t, n, r) {
            return t(r) < t(n) ? r : n }),
        gn = B(function(t, n) {
            return t % n }),
        dn = B(function(t, n) {
            return t * n }),
        mn = B(function(t, n) {
            switch (t) {
                case 0:
                    return function() {
                        return n.call(this) };
                case 1:
                    return function(t) {
                        return n.call(this, t) };
                case 2:
                    return function(t, r) {
                        return n.call(this, t, r) };
                case 3:
                    return function(t, r, e) {
                        return n.call(this, t, r, e) };
                case 4:
                    return function(t, r, e, u) {
                        return n.call(this, t, r, e, u) };
                case 5:
                    return function(t, r, e, u, i) {
                        return n.call(this, t, r, e, u, i) };
                case 6:
                    return function(t, r, e, u, i, o) {
                        return n.call(this, t, r, e, u, i, o) };
                case 7:
                    return function(t, r, e, u, i, o, c) {
                        return n.call(this, t, r, e, u, i, o, c) };
                case 8:
                    return function(t, r, e, u, i, o, c, a) {
                        return n.call(this, t, r, e, u, i, o, c, a) };
                case 9:
                    return function(t, r, e, u, i, o, c, a, s) {
                        return n.call(this, t, r, e, u, i, o, c, a, s) };
                case 10:
                    return function(t, r, e, u, i, o, c, a, s, f) {
                        return n.call(this, t, r, e, u, i, o, c, a, s, f) };
                default:
                    throw new Error("First argument to nAry must be a non-negative integer no greater than ten") } }),
        vn = F(function(t) {
            return -t }),
        wn = B(i(D(["any"], K, ft))),
        bn = F(function(t) {
            return !t }),
        xn = B(function(t, n) {
            var r = 0 > t ? n.length + t : t;
            return j(n) ? n.charAt(r) : n[r] }),
        jn = F(function(t) {
            var n = 0 > t ? 1 : t + 1;
            return wt(n, function() {
                return xn(t, arguments) }) }),
        An = R(function(t, n, r) {
            return t(n(r)) }),
        On = B(function(t, n) {
            var r = {};
            return r[t] = n, r }),
        Sn = F(E),
        En = F(function(t) {
            var n, e = !1;
            return r(t.length, function() {
                return e ? n : (e = !0, n = t.apply(this, arguments)) }) }),
        _n = B(function(t, n) {
            return t || n }),
        qn = function() {
            var t = function(n) {
                return { value: n, map: function(r) {
                        return t(r(n)) } } };
            return R(function(n, r, e) {
                return n(function(n) {
                    return t(r(n)) })(e).value }) }(),
        Nn = B(function(t, n) {
            return [t, n] }),
        kn = B(function(t, n) {
            for (var r = n, e = 0; e < t.length;) {
                if (null == r) return;
                r = r[t[e]], e += 1 }
            return r }),
        In = R(function(t, n, r) {
            return xt(t, kn(n, r)) }),
        Wn = R(function(t, n, r) {
            return n.length > 0 && t(kn(n, r)) }),
        Cn = B(function(t, n) {
            for (var r = {}, e = 0; e < t.length;) t[e] in n && (r[t[e]] = n[t[e]]), e += 1;
            return r }),
        Pn = B(function(t, n) {
            for (var r = {}, e = 0, u = t.length; u > e;) {
                var i = t[e];
                r[i] = n[i], e += 1 }
            return r }),
        Tn = B(function(t, n) {
            var r = {};
            for (var e in n) t(n[e], e, n) && (r[e] = n[e]);
            return r }),
        Fn = B(function(t, n) {
            return o([t], n) }),
        Bn = B(function(t, n) {
            return n[t] }),
        Rn = R(function(t, n, r) {
            return Xt(t, r[n]) }),
        Un = R(function(t, n, r) {
            return null != r && p(n, r) ? r[n] : t }),
        Dn = R(function(t, n, r) {
            return t(r[n]) }),
        Mn = B(function(t, n) {
            for (var r = t.length, e = [], u = 0; r > u;) e[u] = n[t[u]], u += 1;
            return e }),
        Ln = B(function(t, n) {
            if (!v(t) || !v(n)) throw new TypeError("Both arguments to range must be numbers");
            for (var r = [], e = t; n > e;) r.push(e), e += 1;
            return r }),
        zn = R(function(t, n, r) {
            for (var e = r.length - 1; e >= 0;) n = t(r[e], n), e -= 1;
            return n }),
        Kn = F(k),
        Vn = R(function(t, n, r) {
            var e = Array.prototype.slice.call(r, 0);
            return e.splice(t, n), e }),
        $n = R(function(t, n, r) {
            return r.replace(t, n) }),
        Hn = F(function(t) {
            return j(t) ? t.split("").reverse().join("") : Array.prototype.slice.call(t, 0).reverse() }),
        Jn = R(function(t, n, r) {
            for (var e = 0, u = r.length, i = [n]; u > e;) n = t(n, r[e]), i[e + 1] = n, e += 1;
            return i }),
        Xn = R(function(t, n, r) {
            return qn(t, at(n), r) }),
        Yn = R(T("slice", function(t, n, r) {
            return Array.prototype.slice.call(r, t, n) })),
        Zn = B(function(t, n) {
            return Array.prototype.slice.call(n, 0).sort(t) }),
        Gn = B(function(t, n) {
            return Array.prototype.slice.call(n, 0).sort(function(n, r) {
                var e = t(n),
                    u = t(r);
                return u > e ? -1 : e > u ? 1 : 0 }) }),
        Qn = B(function(t, n) {
            return Array.prototype.slice.call(n, 0).sort(function(n, r) {
                for (var e = 0, u = 0; 0 === e && u < t.length;) e = t[u](n, r), u += 1;
                return e }) }),
        tr = B(function(t, n) {
            return [Yn(0, t, n), Yn(t, Qt(n), n)] }),
        nr = B(function(t, n) {
            if (0 >= t) throw new Error("First argument to splitEvery must be a positive integer");
            for (var r = [], e = 0; e < n.length;) r.push(Yn(e, e += t, n));
            return r }),
        rr = B(function(t, n) {
            for (var r = 0, e = n.length, u = []; e > r && !t(n[r]);) u.push(n[r]), r += 1;
            return [u, Array.prototype.slice.call(n, r)] }),
        er = B(function(t, n) {
            return Number(t) - Number(n) }),
        ur = F(T("tail", Yn(1, 1 / 0))),
        ir = B(D(["take"], et, function(t, n) {
            return Yn(0, 0 > t ? 1 / 0 : t, n) })),
        or = B(function(t, n) {
            for (var r = n.length - 1; r >= 0 && t(n[r]);) r -= 1;
            return Array.prototype.slice.call(n, r + 1) }),
        cr = B(D(["takeWhile"], ut, function(t, n) {
            for (var r = 0, e = n.length; e > r && t(n[r]);) r += 1;
            return Array.prototype.slice.call(n, 0, r) })),
        ar = B(function(t, n) {
            return t(n), n }),
        sr = B(function(t, n) {
            var r, e = Number(n),
                u = 0;
            if (0 > e || isNaN(e)) throw new RangeError("n must be a non-negative number");
            for (r = new Array(e); e > u;) r[u] = t(u), u += 1;
            return r }),
        fr = F(function(t) {
            var n = [];
            for (var r in t) p(r, t) && (n[n.length] = [r, t[r]]);
            return n }),
        lr = F(function(t) {
            var n = [];
            for (var r in t) n[n.length] = [r, t[r]];
            return n }),
        pr = F(function(t) {
            for (var n = 0, r = []; n < t.length;) {
                for (var e = t[n], u = 0; u < e.length;) "undefined" == typeof r[u] && (r[u] = []), r[u].push(e[u]), u += 1;
                n += 1 }
            return r }),
        hr = function() {
            var t = "	\n\f\r   ᠎             　\u2028\u2029\ufeff",
                n = "​",
                r = "function" == typeof String.prototype.trim;
            return F(r && !t.trim() && n.trim() ? function(t) {
                return t.trim() } : function(n) {
                var r = new RegExp("^[" + t + "][" + t + "]*"),
                    e = new RegExp("[" + t + "][" + t + "]*$");
                return n.replace(r, "").replace(e, "") }) }(),
        yr = B(function(t, n) {
            return r(t.length, function() {
                try {
                    return t.apply(this, arguments) } catch (r) {
                    return n.apply(this, o([r], arguments)) } }) }),
        gr = F(function(t) {
            return null === t ? "Null" : void 0 === t ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1) }),
        dr = F(function(t) {
            return function() {
                return t(Array.prototype.slice.call(arguments, 0)) } }),
        mr = F(function(t) {
            return mn(1, t) }),
        vr = B(function(t, n) {
            return wt(t, function() {
                for (var r, e = 1, u = n, i = 0; t >= e && "function" == typeof u;) r = e === t ? arguments.length : i + u.length, u = u.apply(this, Array.prototype.slice.call(arguments, i, r)), e += 1, i = r;
                return u }) }),
        wr = B(function(t, n) {
            for (var r = t(n), e = []; r && r.length;) e[e.length] = r[0], r = t(r[1]);
            return e }),
        br = B(function(t, n) {
            for (var r, e = 0, u = n.length, i = []; u > e;) r = n[e], c(t, r, i) || (i[i.length] = r), e += 1;
            return i }),
        xr = R(function(t, n, r) {
            return t(r) ? r : n(r) }),
        jr = R(function(t, n, r) {
            for (var e = r; !t(e);) e = n(e);
            return e }),
        Ar = R(function(t, n, r) {
            return ot(at(n), t, r) }),
        Or = B(function(t, n) {
            return wt(n.length, function() {
                for (var r = [], e = 0; e < n.length;) r.push(n[e].call(this, arguments[e])), e += 1;
                return t.apply(this, r.concat(Array.prototype.slice.call(arguments, n.length))) }) }),
        Sr = F(function(t) {
            for (var n = Zt(t), r = n.length, e = [], u = 0; r > u;) e[u] = t[n[u]], u += 1;
            return e }),
        Er = F(function(t) {
            var n, r = [];
            for (n in t) r[r.length] = t[n];
            return r }),
        _r = function() {
            var t = function(t) {
                return { value: t, "fantasy-land/map": function() {
                        return this } } };
            return B(function(n, r) {
                return n(t)(r).value }) }(),
        qr = R(function(t, n, r) {
            return t(r) ? n(r) : r }),
        Nr = B(function(t, n) {
            for (var r in t)
                if (p(r, t) && !t[r](n[r])) return !1;
            return !0 }),
        kr = B(function(t, n) {
            for (var r, e = 0, u = t.length, i = n.length, o = []; u > e;) {
                for (r = 0; i > r;) o[o.length] = [t[e], n[r]], r += 1;
                e += 1 }
            return o }),
        Ir = B(function(t, n) {
            for (var r = [], e = 0, u = Math.min(t.length, n.length); u > e;) r[e] = [t[e], n[e]], e += 1;
            return r }),
        Wr = B(function(t, n) {
            for (var r = 0, e = Math.min(t.length, n.length), u = {}; e > r;) u[t[r]] = n[r], r += 1;
            return u }),
        Cr = R(function(t, n, r) {
            for (var e = [], u = 0, i = Math.min(n.length, r.length); i > u;) e[u] = t(n[u], r[u]), u += 1;
            return e }),
        Pr = at(!1),
        Tr = at(!0),
        Fr = function Zu(t, n, r, e) {
            var i = function(u) {
                for (var i = n.length, o = 0; i > o;) {
                    if (t === n[o]) return r[o];
                    o += 1 }
                n[o + 1] = t, r[o + 1] = u;
                for (var c in t) u[c] = e ? Zu(t[c], n, r, !0) : t[c];
                return u };
            switch (gr(t)) {
                case "Object":
                    return i({});
                case "Array":
                    return i([]);
                case "Date":
                    return new Date(t.valueOf());
                case "RegExp":
                    return u(t);
                default:
                    return t } },
        Br = function(t) {
            return B(function(n, e) {
                return r(Math.max(0, n.length - e.length), function() {
                    return n.apply(this, t(e, arguments)) }) }) },
        Rr = function(t, n) {
            return ir(t < n.length ? n.length - t : 0, n) },
        Ur = function Gu(t, n, r, u) {
            if (Mt(t, n)) return !0;
            if (gr(t) !== gr(n)) return !1;
            if (null == t || null == n) return !1;
            if ("function" == typeof t["fantasy-land/equals"] || "function" == typeof n["fantasy-land/equals"]) return "function" == typeof t["fantasy-land/equals"] && t["fantasy-land/equals"](n) && "function" == typeof n["fantasy-land/equals"] && n["fantasy-land/equals"](t);
            if ("function" == typeof t.equals || "function" == typeof n.equals) return "function" == typeof t.equals && t.equals(n) && "function" == typeof n.equals && n.equals(t);
            switch (gr(t)) {
                case "Arguments":
                case "Array":
                case "Object":
                    if ("function" == typeof t.constructor && "Promise" === l(t.constructor)) return t === n;
                    break;
                case "Boolean":
                case "Number":
                case "String":
                    if (typeof t != typeof n || !Mt(t.valueOf(), n.valueOf())) return !1;
                    break;
                case "Date":
                    if (!Mt(t.valueOf(), n.valueOf())) return !1;
                    break;
                case "Error":
                    return t.name === n.name && t.message === n.message;
                case "RegExp":
                    if (t.source !== n.source || t.global !== n.global || t.ignoreCase !== n.ignoreCase || t.multiline !== n.multiline || t.sticky !== n.sticky || t.unicode !== n.unicode) return !1;
                    break;
                case "Map":
                case "Set":
                    if (!Gu(e(t.entries()), e(n.entries()), r, u)) return !1;
                    break;
                case "Int8Array":
                case "Uint8Array":
                case "Uint8ClampedArray":
                case "Int16Array":
                case "Uint16Array":
                case "Int32Array":
                case "Uint32Array":
                case "Float32Array":
                case "Float64Array":
                    break;
                case "ArrayBuffer":
                    break;
                default:
                    return !1 }
            var i = Zt(t);
            if (i.length !== Zt(n).length) return !1;
            for (var o = r.length - 1; o >= 0;) {
                if (r[o] === t) return u[o] === n;
                o -= 1 }
            for (r.push(t), u.push(n), o = i.length - 1; o >= 0;) {
                var c = i[o];
                if (!p(c, n) || !Gu(n[c], t[c], r, u)) return !1;
                o -= 1 }
            return r.pop(), u.pop(), !0 },
        Dr = function() {
            function t(t, n, r) {
                for (var e = 0, u = r.length; u > e;) {
                    if (n = t["@@transducer/step"](n, r[e]), n && n["@@transducer/reduced"]) { n = n["@@transducer/value"];
                        break }
                    e += 1 }
                return t["@@transducer/result"](n) }

            function n(t, n, r) {
                for (var e = r.next(); !e.done;) {
                    if (n = t["@@transducer/step"](n, e.value), n && n["@@transducer/reduced"]) { n = n["@@transducer/value"];
                        break }
                    e = r.next() }
                return t["@@transducer/result"](n) }

            function r(t, n, r, e) {
                return t["@@transducer/result"](r[e](dt(t["@@transducer/step"], t), n)) }
            var e = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator";
            return function(u, i, o) {
                if ("function" == typeof u && (u = C(u)), M(o)) return t(u, i, o);
                if ("function" == typeof o["fantasy-land/reduce"]) return r(u, i, o, "fantasy-land/reduce");
                if (null != o[e]) return n(u, i, o[e]());
                if ("function" == typeof o.next) return n(u, i, o);
                if ("function" == typeof o.reduce) return r(u, i, o, "reduce");
                throw new TypeError("reduce: list must be array or iterable") } }(),
        Mr = function() {
            var t = { "@@transducer/init": Array, "@@transducer/step": function(t, n) {
                        return t.push(n), t }, "@@transducer/result": h },
                n = { "@@transducer/init": String, "@@transducer/step": function(t, n) {
                        return t + n }, "@@transducer/result": h },
                r = { "@@transducer/init": Object, "@@transducer/step": function(t, n) {
                        return P(t, M(n) ? On(n[0], n[1]) : n) }, "@@transducer/result": h };
            return function(e) {
                if (A(e)) return e;
                if (M(e)) return t;
                if ("string" == typeof e) return n;
                if ("object" == typeof e) return r;
                throw new Error("Cannot create transformer for " + e) } }(),
        Lr = function() {
            function t(t, n) { this.f = t, this.retained = [], this.xf = n }
            return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = function(t) {
                return this.retained = null, this.xf["@@transducer/result"](t) }, t.prototype["@@transducer/step"] = function(t, n) {
                return this.f(n) ? this.retain(t, n) : this.flush(t, n) }, t.prototype.flush = function(t, n) {
                return t = Dr(this.xf["@@transducer/step"], t, this.retained), this.retained = [], this.xf["@@transducer/step"](t, n) }, t.prototype.retain = function(t, n) {
                return this.retained.push(n), t }, B(function(n, r) {
                return new t(n, r) }) }(),
        zr = F(function(t) {
            return wt(t.length, function() {
                var n = 0,
                    r = arguments[0],
                    e = arguments[arguments.length - 1],
                    u = Array.prototype.slice.call(arguments, 0);
                return u[0] = function() {
                    var t = r.apply(this, o(arguments, [n, e]));
                    return n += 1, t }, t.apply(this, u) }) }),
        Kr = R(function Qu(t, n, r) {
            if (0 === t.length) return n;
            var e = t[0];
            if (t.length > 1) {
                var u = !Yt(r) && p(e, r) ? r[e] : m(t[1]) ? [] : {};
                n = Qu(Array.prototype.slice.call(t, 1), n, u) }
            if (m(e) && g(r)) {
                var i = [].concat(r);
                return i[e] = n, i }
            return gt(e, n, r) }),
        Vr = F(function(t) {
            return mn(2, t) }),
        $r = F(function(t) {
            return null != t && "function" == typeof t.clone ? t.clone() : Fr(t, [], [], !0) }),
        Hr = F(function(t) {
            return wt(t.length, t) }),
        Jr = B(function ti(t, n) {
            switch (t.length) {
                case 0:
                    return n;
                case 1:
                    return m(t[0]) ? Vn(t[0], 1, n) : Ot(t[0], n);
                default:
                    var r = t[0],
                        e = Array.prototype.slice.call(t, 1);
                    return null == n[r] ? n : m(t[0]) ? Ar(r, ti(e, n[r]), n) : gt(r, ti(e, n[r]), n) } }),
        Xr = B(D(["drop"], $, function(t, n) {
            return Yn(Math.max(0, t), 1 / 0, n) })),
        Yr = B(D([], H, Rr)),
        Zr = B(D([], Lr, a)),
        Gr = B(function(t, n) {
            return Ur(t, n, [], []) }),
        Qr = B(D(["filter"], Y, function(t, n) {
            return w(n) ? Dr(function(r, e) {
                return t(n[e]) && (r[e] = n[e]), r }, {}, Zt(n)) : s(t, n) })),
        te = F(function(t) {
            return Hr(function(n, r) {
                var e = Array.prototype.slice.call(arguments, 0);
                return e[0] = r, e[1] = n, t.apply(this, e) }) }),
        ne = B(function(t, n) {
            for (var r = Zt(n), e = 0; e < r.length;) {
                var u = r[e];
                t(n[u], u, n), e += 1 }
            return n }),
        re = xn(0),
        ee = Yn(0, -1),
        ue = R(function(t, n, r) {
            var e, u;
            n.length > r.length ? (e = n, u = r) : (e = r, u = n);
            for (var i = [], o = 0; o < u.length;) c(t, u[o], e) && (i[i.length] = u[o]), o += 1;
            return br(t, i) }),
        ie = R(function(t, n, r) {
            return A(t) ? Dr(n(t), t["@@transducer/init"](), r) : Dr(n(Mr(t)), Fr(t, [], [], !1), r) }),
        oe = F(function(t) {
            for (var n = Zt(t), r = n.length, e = 0, u = {}; r > e;) {
                var i = n[e],
                    o = t[i],
                    c = p(o, u) ? u[o] : u[o] = [];
                c[c.length] = i, e += 1 }
            return u }),
        ce = F(function(t) {
            for (var n = Zt(t), r = n.length, e = 0, u = {}; r > e;) {
                var i = n[e];
                u[t[i]] = i, e += 1 }
            return u }),
        ae = F(function(t) {
            return null != t && Gr(t, _t(t)) }),
        se = xn(-1),
        fe = B(function(t, n) {
            if ("function" != typeof n.lastIndexOf || g(n)) {
                for (var r = n.length - 1; r >= 0;) {
                    if (Gr(n[r], t)) return r;
                    r -= 1 }
                return -1 }
            return n.lastIndexOf(t) }),
        le = B(D(["fantasy-land/map", "map"], nt, function(t, n) {
            switch (Object.prototype.toString.call(n)) {
                case "[object Function]":
                    return wt(n.length, function() {
                        return t.call(this, n.apply(this, arguments)) });
                case "[object Object]":
                    return Dr(function(r, e) {
                        return r[e] = t(n[e]), r }, {}, Zt(n));
                default:
                    return O(t, n) } })),
        pe = B(function(t, n) {
            return Dr(function(r, e) {
                return r[e] = t(n[e], e, n), r }, {}, Zt(n)) }),
        he = R(function ni(t, n, r) {
            return pn(function(n, r, e) {
                return w(r) && w(e) ? ni(t, r, e) : t(n, r, e) }, n, r) }),
        ye = R(function(t, n, r) {
            return pn(function(n, r, e) {
                return t(r, e) }, n, r) }),
        ge = Br(o),
        de = Br(te(o)),
        me = R(function(t, n, r) {
            return Gr(kn(t, r), n) }),
        ve = B(function(t, n) {
            return le(Bn(t), n) }),
        we = Or(O, [Pn, Lt]),
        be = R(function(t, n, r) {
            return Gr(n, r[t]) }),
        xe = R(Dr),
        je = U(4, [], D([], rt, function(t, n, r, e) {
            return Dr(function(e, u) {
                var i = r(u);
                return e[i] = t(p(i, e) ? e[i] : n, u), e }, {}, e) })),
        Ae = U(4, [], function(t, n, r, e) {
            return Dr(function(r, e) {
                return t(r, e) ? n(r, e) : k(r) }, r, e)
        }),
        Oe = B(function(t, n) {
            return Qr(i(t), n) }),
        Se = B(function(t, n) {
            return sr(at(t), n) }),
        Ee = B(function(t, n) {
            return Gr(ir(t.length, n), t) }),
        _e = xe(it, 0),
        qe = B(function(t, n) {
            return Xr(t >= 0 ? n.length - t : 0, n) }),
        Ne = wt(4, function(t, n, r, e) {
            return Dr(t("function" == typeof n ? C(n) : n), r, e) }),
        ke = R(function(t, n, r) {
            return br(t, o(n, r)) }),
        Ie = B(function(t, n) {
            return Nr(le(Gr, t), n) }),
        We = function() {
            var t = function(t) {
                return { "@@transducer/init": W.init, "@@transducer/result": function(n) {
                        return t["@@transducer/result"](n) }, "@@transducer/step": function(n, r) {
                        var e = t["@@transducer/step"](n, r);
                        return e["@@transducer/reduced"] ? f(e) : e } } };
            return function(n) {
                var r = t(n);
                return { "@@transducer/init": W.init, "@@transducer/result": function(t) {
                        return r["@@transducer/result"](t) }, "@@transducer/step": function(t, n) {
                        return M(n) ? Dr(r, t, n) : Dr(r, t, [n]) } } } }(),
        Ce = function(t, n, r) {
            var e, u;
            if ("function" == typeof t.indexOf) switch (typeof n) {
                case "number":
                    if (0 === n) {
                        for (e = 1 / n; r < t.length;) {
                            if (u = t[r], 0 === u && 1 / u === e) return r;
                            r += 1 }
                        return -1 }
                    if (n !== n) {
                        for (; r < t.length;) {
                            if (u = t[r], "number" == typeof u && u !== u) return r;
                            r += 1 }
                        return -1 }
                    return t.indexOf(n, r);
                case "string":
                case "boolean":
                case "function":
                case "undefined":
                    return t.indexOf(n, r);
                case "object":
                    if (null === n) return t.indexOf(n, r) }
            for (; r < t.length;) {
                if (Gr(t[r], n)) return r;
                r += 1 }
            return -1 },
        Pe = B(function(t, n) {
            return le(t, We(n)) }),
        Te = F(function(t) {
            return wt(xe(cn, 0, ve("length", t)), function() {
                for (var n = 0, r = t.length; r > n;) {
                    if (!t[n].apply(this, arguments)) return !1;
                    n += 1 }
                return !0 }) }),
        Fe = F(function(t) {
            return wt(xe(cn, 0, ve("length", t)), function() {
                for (var n = 0, r = t.length; r > n;) {
                    if (t[n].apply(this, arguments)) return !0;
                    n += 1 }
                return !1 }) }),
        Be = B(function(t, n) {
            return "function" == typeof n["fantasy-land/ap"] ? n["fantasy-land/ap"](t) : "function" == typeof t.ap ? t.ap(n) : "function" == typeof t ? function(r) {
                return t(r)(n(r)) } : Dr(function(t, r) {
                return o(t, le(r, n)) }, [], t) }),
        Re = F(function ri(t) {
            return t = le(function(t) {
                return "function" == typeof t ? t : ri(t) }, t), wt(xe(cn, 0, ve("length", Sr(t))), function() {
                var n = arguments;
                return le(function(t) {
                    return ht(t, n) }, t) }) }),
        Ue = Hr(function(t) {
            return t.apply(this, Array.prototype.slice.call(arguments, 1)) }),
        De = B(D(["fantasy-land/chain", "chain"], Pe, function(t, n) {
            return "function" == typeof n ? function(r) {
                return t(n(r))(r) } : L(!1)(le(t, n)) })),
        Me = F(function(t) {
            var n = xe(cn, 0, le(function(t) {
                return t[0].length }, t));
            return r(n, function() {
                for (var n = 0; n < t.length;) {
                    if (t[n][0].apply(this, arguments)) return t[n][1].apply(this, arguments);
                    n += 1 } }) }),
        Le = B(function(t, n) {
            if (t > 10) throw new Error("Constructor with greater than ten arguments");
            return 0 === t ? function() {
                return new n } : Hr(mn(t, function(t, r, e, u, i, o, c, a, s, f) {
                switch (arguments.length) {
                    case 1:
                        return new n(t);
                    case 2:
                        return new n(t, r);
                    case 3:
                        return new n(t, r, e);
                    case 4:
                        return new n(t, r, e, u);
                    case 5:
                        return new n(t, r, e, u, i);
                    case 6:
                        return new n(t, r, e, u, i, o);
                    case 7:
                        return new n(t, r, e, u, i, o, c);
                    case 8:
                        return new n(t, r, e, u, i, o, c, a);
                    case 9:
                        return new n(t, r, e, u, i, o, c, a, s);
                    case 10:
                        return new n(t, r, e, u, i, o, c, a, s, f) } })) }),
        ze = B(function(t, n) {
            return wt(xe(cn, 0, ve("length", n)), function() {
                var r = arguments,
                    e = this;
                return t.apply(e, O(function(t) {
                    return t.apply(e, r) }, n)) }) }),
        Ke = je(function(t, n) {
            return t + 1 }, 0),
        Ve = B(D([], J, function(t, n) {
            var r = [],
                e = 1,
                u = n.length;
            if (0 !== u)
                for (r[0] = n[0]; u > e;) t(se(r), n[e]) || (r[r.length] = n[e]), e += 1;
            return r })),
        $e = B(function(t, n) {
            return Gr(qe(t.length, n), t) }),
        He = R(function(t, n, r) {
            return Gr(t(n), t(r)) }),
        Je = R(function(t, n, r) {
            return Gr(n[t], r[t]) }),
        Xe = B(T("groupBy", je(function(t, n) {
            return null == t && (t = []), t.push(n), t }, null))),
        Ye = je(function(t, n) {
            return n }, null),
        Ze = B(function(t, n) {
            return "function" != typeof n.indexOf || g(n) ? Ce(n, t, 0) : n.indexOf(t) }),
        Ge = F(function(t) {
            return ze(function() {
                return Array.prototype.slice.call(arguments, 0) }, t) }),
        Qe = B(function(t, n) {
            return function(r) {
                return function(e) {
                    return le(function(t) {
                        return n(t, e) }, r(t(e))) } } }),
        tu = F(function(t) {
            return Qe(xn(t), Ar(t)) }),
        nu = F(function(t) {
            return Qe(kn(t), Kr(t)) }),
        ru = F(function(t) {
            return Qe(Bn(t), gt(t)) }),
        eu = B(function(t, n) {
            var r = wt(t, n);
            return wt(t, function() {
                return Dr(Be, le(r, arguments[0]), Array.prototype.slice.call(arguments, 1)) }) }),
        uu = F(function(t) {
            return _e(t) / t.length }),
        iu = F(function(t) {
            var n = t.length;
            if (0 === n) return NaN;
            var r = 2 - n % 2,
                e = (n - r) / 2;
            return uu(Array.prototype.slice.call(t, 0).sort(function(t, n) {
                return n > t ? -1 : t > n ? 1 : 0 }).slice(e, e + r)) }),
        ou = B(function(t, n) {
            return he(function(t, n, r) {
                return n }, t, n) }),
        cu = B(function(t, n) {
            return he(function(t, n, r) {
                return r }, t, n) }),
        au = R(function(t, n, r) {
            return he(function(n, r, e) {
                return t(r, e) }, n, r) }),
        su = Ge([Qr, Oe]),
        fu = function() {
            if (0 === arguments.length) throw new Error("pipe requires at least one argument");
            return r(arguments[0].length, xe(_, arguments[0], ur(arguments))) },
        lu = function() {
            if (0 === arguments.length) throw new Error("pipeP requires at least one argument");
            return r(arguments[0].length, xe(q, arguments[0], ur(arguments))) },
        pu = xe(dn, 1),
        hu = B(function(t, n) {
            return "function" == typeof n.sequence ? n.sequence(t) : zn(function(t, n) {
                return Be(le(Fn, t), n) }, t([]), n) }),
        yu = R(function(t, n, r) {
            return "function" == typeof r["fantasy-land/traverse"] ? r["fantasy-land/traverse"](n, t) : hu(t, le(n, r)) }),
        gu = De(h),
        du = function(t, n) {
            return Ce(n, t, 0) >= 0 },
        mu = function ei(t, n) {
            var r = function(r) {
                    var e = n.concat([t]);
                    return du(r, e) ? "<Circular>" : ei(r, e) },
                e = function(t, n) {
                    return O(function(n) {
                        return N(n) + ": " + r(t[n]) }, n.slice().sort()) };
            switch (Object.prototype.toString.call(t)) {
                case "[object Arguments]":
                    return "(function() { return arguments; }(" + O(r, t).join(", ") + "))";
                case "[object Array]":
                    return "[" + O(r, t).concat(e(t, Oe(function(t) {
                        return /^\d+$/.test(t) }, Zt(t)))).join(", ") + "]";
                case "[object Boolean]":
                    return "object" == typeof t ? "new Boolean(" + r(t.valueOf()) + ")" : t.toString();
                case "[object Date]":
                    return "new Date(" + (isNaN(t.valueOf()) ? r(NaN) : N(I(t))) + ")";
                case "[object Null]":
                    return "null";
                case "[object Number]":
                    return "object" == typeof t ? "new Number(" + r(t.valueOf()) + ")" : 1 / t === -(1 / 0) ? "-0" : t.toString(10);
                case "[object String]":
                    return "object" == typeof t ? "new String(" + r(t.valueOf()) + ")" : N(t);
                case "[object Undefined]":
                    return "undefined";
                default:
                    if ("function" == typeof t.toString) {
                        var u = t.toString();
                        if ("[object Object]" !== u) return u }
                    return "{" + e(t, Zt(t)).join(", ") + "}" } },
        vu = function() {
            if (0 === arguments.length) throw new Error("compose requires at least one argument");
            return fu.apply(this, Hn(arguments)) },
        wu = function() {
            if (0 === arguments.length) throw new Error("composeK requires at least one argument");
            var t = Array.prototype.slice.call(arguments),
                n = t.pop();
            return vu(vu.apply(this, le(De, t)), n) },
        bu = function() {
            if (0 === arguments.length) throw new Error("composeP requires at least one argument");
            return lu.apply(this, Hn(arguments)) },
        xu = F(function(t) {
            return Le(t.length, t) }),
        ju = B(du),
        Au = B(function(t, n) {
            for (var r = [], e = 0, u = t.length; u > e;) du(t[e], n) || du(t[e], r) || (r[r.length] = t[e]), e += 1;
            return r }),
        Ou = F(D([], J(Gr), Ve(Gr))),
        Su = F(function(t) {
            return eu(t.length, t) }),
        Eu = B(function(t, n) {
            var r = {};
            for (var e in n) du(e, t) || (r[e] = n[e]);
            return r }),
        _u = function() {
            if (0 === arguments.length) throw new Error("pipeK requires at least one argument");
            return wu.apply(this, Hn(arguments)) },
        qu = F(function(t) {
            return mu(t, []) }),
        Nu = B(function(t, n) {
            return Oe(te(du)(t), n) }),
        ku = function() {
            function t() { this._nativeSet = "function" == typeof Set ? new Set : null, this._items = {} }

            function n(t, n, r) {
                var e, u, i = typeof t;
                switch (i) {
                    case "string":
                    case "number":
                        return 0 === t && 1 / t === -(1 / 0) ? r._items["-0"] ? !0 : (n && (r._items["-0"] = !0), !1) : null !== r._nativeSet ? n ? (e = r._nativeSet.size, r._nativeSet.add(t), u = r._nativeSet.size, u === e) : r._nativeSet.has(t) : i in r._items ? t in r._items[i] ? !0 : (n && (r._items[i][t] = !0), !1) : (n && (r._items[i] = {}, r._items[i][t] = !0), !1);
                    case "boolean":
                        if (i in r._items) {
                            var o = t ? 1 : 0;
                            return r._items[i][o] ? !0 : (n && (r._items[i][o] = !0), !1) }
                        return n && (r._items[i] = t ? [!1, !0] : [!0, !1]), !1;
                    case "function":
                        return null !== r._nativeSet ? n ? (e = r._nativeSet.size, r._nativeSet.add(t), u = r._nativeSet.size, u === e) : r._nativeSet.has(t) : i in r._items ? du(t, r._items[i]) ? !0 : (n && r._items[i].push(t), !1) : (n && (r._items[i] = [t]), !1);
                    case "undefined":
                        return r._items[i] ? !0 : (n && (r._items[i] = !0), !1);
                    case "object":
                        if (null === t) return r._items["null"] ? !0 : (n && (r._items["null"] = !0), !1);
                    default:
                        return i = Object.prototype.toString.call(t), i in r._items ? du(t, r._items[i]) ? !0 : (n && r._items[i].push(t), !1) : (n && (r._items[i] = [t]), !1) } }
            return t.prototype.add = function(t) {
                return !n(t, !0, this) }, t.prototype.has = function(t) {
                return n(t, !1, this) }, t }(),
        Iu = B(function(t, n) {
            return d(t) ? function() {
                return t.apply(this, arguments) && n.apply(this, arguments) } : Su(st)(t, n) }),
        Wu = Su(bn),
        Cu = B(function(t, n) {
            if (g(t)) {
                if (g(n)) return t.concat(n);
                throw new TypeError(qu(n) + " is not an array") }
            if (j(t)) {
                if (j(n)) return t + n;
                throw new TypeError(qu(n) + " is not a string") }
            if (null != t && d(t["fantasy-land/concat"])) return t["fantasy-land/concat"](n);
            if (null != t && d(t.concat)) return t.concat(n);
            throw new TypeError(qu(t) + ' does not have a method named "concat" or "fantasy-land/concat"') }),
        Pu = B(function(t, n) {
            return d(t) ? function() {
                return t.apply(this, arguments) || n.apply(this, arguments) } : Su(_n)(t, n) }),
        Tu = B(function(t, n) {
            return wt(t + 1, function() {
                var r = arguments[t];
                if (null != r && d(r[n])) return r[n].apply(r, Array.prototype.slice.call(arguments, 0, t));
                throw new TypeError(qu(r) + ' does not have a method named "' + n + '"') }) }),
        Fu = Tu(1, "join"),
        Bu = sn(function() {
            return qu(arguments) }),
        Ru = Tu(1, "split"),
        Uu = B(function(t, n) {
            return Cu(Au(t, n), Au(n, t)) }),
        Du = R(function(t, n, r) {
            return Cu(At(t, n, r), At(t, r, n)) }),
        Mu = B(function(t, n) {
            if (!x(t)) throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received " + qu(t));
            return u(t).test(n) }),
        Lu = Tu(0, "toLowerCase"),
        zu = Tu(0, "toUpperCase"),
        Ku = B(function(t, n) {
            for (var r, e, u = new ku, i = [], o = 0; o < n.length;) e = n[o], r = t(e), u.add(r) && i.push(e), o += 1;
            return i }),
        Vu = Ku(Lt),
        $u = B(function(t, n) {
            var r, e;
            return t.length > n.length ? (r = t, e = n) : (r = n, e = t), Vu(s(te(du)(r), e)) }),
        Hu = B(vu(Vu, o)),
        Ju = { F: Pr, T: Tr, __: t, add: it, addIndex: zr, adjust: ot, all: ct, allPass: Te, always: at, and: st, any: ft, anyPass: Fe, ap: Be, aperture: lt, append: pt, apply: ht, applySpec: Re, ascend: yt, assoc: gt, assocPath: Kr, binary: Vr, bind: dt, both: Iu, call: Ue, chain: De, clamp: mt, clone: $r, comparator: vt, complement: Wu, compose: vu, composeK: wu, composeP: bu, concat: Cu, cond: Me, construct: xu, constructN: Le, contains: ju, converge: ze, countBy: Ke, curry: Hr, curryN: wt, dec: bt, defaultTo: xt, descend: jt, difference: Au, differenceWith: At, dissoc: Ot, dissocPath: Jr, divide: St, drop: Xr, dropLast: Yr, dropLastWhile: Zr, dropRepeats: Ou, dropRepeatsWith: Ve, dropWhile: Et, either: Pu, empty: _t, endsWith: $e, eqBy: He, eqProps: Je, equals: Gr, evolve: qt, filter: Qr, find: Nt, findIndex: kt, findLast: It, findLastIndex: Wt, flatten: Ct, flip: te, forEach: Pt, forEachObjIndexed: ne, fromPairs: Tt, groupBy: Xe, groupWith: Ft, gt: Bt, gte: Rt, has: Ut, hasIn: Dt, head: re, identical: Mt, identity: Lt, ifElse: zt, inc: Kt, indexBy: Ye, indexOf: Ze, init: ee, innerJoin: Vt, insert: $t, insertAll: Ht, intersection: $u, intersectionWith: ue, intersperse: Jt, into: ie, invert: oe, invertObj: ce, invoker: Tu, is: Xt, isEmpty: ae, isNil: Yt, join: Fu, juxt: Ge, keys: Zt, keysIn: Gt, last: se, lastIndexOf: fe, length: Qt, lens: Qe, lensIndex: tu, lensPath: nu, lensProp: ru, lift: Su, liftN: eu, lt: tn, lte: nn, map: le, mapAccum: rn, mapAccumRight: en, mapObjIndexed: pe, match: un, mathMod: on, max: cn, maxBy: an, mean: uu, median: iu, memoize: Bu, memoizeWith: sn, merge: fn, mergeAll: ln, mergeDeepLeft: ou, mergeDeepRight: cu, mergeDeepWith: au, mergeDeepWithKey: he, mergeWith: ye, mergeWithKey: pn, min: hn, minBy: yn, modulo: gn, multiply: dn, nAry: mn, negate: vn, none: wn, not: bn, nth: xn, nthArg: jn, o: An, objOf: On, of: Sn, omit: Eu, once: En, or: _n, over: qn, pair: Nn, partial: ge, partialRight: de, partition: su, path: kn, pathEq: me, pathOr: In, pathSatisfies: Wn, pick: Cn, pickAll: Pn, pickBy: Tn, pipe: fu, pipeK: _u, pipeP: lu, pluck: ve, prepend: Fn, product: pu, project: we, prop: Bn, propEq: be, propIs: Rn, propOr: Un, propSatisfies: Dn, props: Mn, range: Ln, reduce: xe, reduceBy: je, reduceRight: zn, reduceWhile: Ae, reduced: Kn, reject: Oe, remove: Vn, repeat: Se, replace: $n, reverse: Hn, scan: Jn, sequence: hu, set: Xn, slice: Yn, sort: Zn, sortBy: Gn, sortWith: Qn, split: Ru, splitAt: tr, splitEvery: nr, splitWhen: rr, startsWith: Ee, subtract: er, sum: _e, symmetricDifference: Uu, symmetricDifferenceWith: Du, tail: ur, take: ir, takeLast: qe, takeLastWhile: or, takeWhile: cr, tap: ar, test: Mu, times: sr, toLower: Lu, toPairs: fr, toPairsIn: lr, toString: qu, toUpper: zu, transduce: Ne, transpose: pr, traverse: yu, trim: hr, tryCatch: yr, type: gr, unapply: dr, unary: mr, uncurryN: vr, unfold: wr, union: Hu, unionWith: ke, uniq: Vu, uniqBy: Ku, uniqWith: br, unless: xr, unnest: gu, until: jr, update: Ar, useWith: Or, values: Sr, valuesIn: Er, view: _r, when: qr, where: Nr, whereEq: Ie, without: Nu, xprod: kr, zip: Ir, zipObj: Wr, zipWith: Cr };
    "object" == typeof exports ? module.exports = Ju : "function" == typeof define && define.amd ? define(function() {
        return Ju }) : this.R = Ju
}).call(this);
