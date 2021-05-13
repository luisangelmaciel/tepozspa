self.AMP_CONFIG = { "v": "012104302228000", "type": "production", "allow-doc-opt-in": ["amp-next-page"], "allow-url-opt-in": [], "canary": 0, "a4aProfilingRate": 0.01, "adsense-ad-size-optimization": 1, "doubleclickSraExp": 0.01, "doubleclickSraReportExcludedBlock": 0.1, "expand-json-targeting": 1, "flexAdSlots": 0.05, "ios-fixed-no-transfer": 0, "visibility-trigger-improvements": 1, "layout-aspect-ratio-css": 0, "disable-a4a-non-sd": 1, "tcf-post-message-proxy-api": 1, "amp-consent-granular-consent": 1, "amp-cid-backup": 1, "3p-vendor-split": 0.1, "story-ad-placements": 0.01, "auto-ads-no-insertion-above": 0.2 }; /*AMP_CONFIG*/
var global = self;
self.AMP = self.AMP || [];
try {
    (function(_) {
        if (self.AMP && !Array.isArray(self.AMP)) return;
        'use strict';
        var g, aa = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        };

        function ba(a) { for (var b = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], c = 0; c < b.length; ++c) { var d = b[c]; if (d && d.Math == Math) return d } return function() { throw Error("Cannot find global object"); }() }
        var ca = ba(this);
        "function" === typeof Symbol && Symbol("x");
        var da;
        if ("function" == typeof Object.setPrototypeOf) da = Object.setPrototypeOf;
        else {
            var ea;
            a: {
                var fa = { a: !0 },
                    ha = {};
                try {
                    ha.__proto__ = fa;
                    ea = ha.a;
                    break a
                } catch (a) {}
                ea = !1
            }
            da = ea ? function(a, b) { a.__proto__ = b; if (a.__proto__ !== b) throw new TypeError(a + " is not extensible"); return a } : null
        }
        var ia = da;

        function ja(a, b) {
            a.prototype = aa(b.prototype);
            a.prototype.constructor = a;
            if (ia) ia(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Qh = b.prototype
        }

        function ka() { this.$a = new la }
        ka.prototype.abort = function() { this.$a.Rd || (this.$a.Rd = !0, this.$a.Bc && this.$a.Bc({ type: "abort", bubbles: !1, cancelable: !1, target: this.$a, currentTarget: this.$a })) };
        ca.Object.defineProperties(ka.prototype, { signal: { configurable: !0, enumerable: !0, get: function() { return this.$a } } });

        function la() {
            this.Rd = !1;
            this.Bc = null
        }
        ca.Object.defineProperties(la.prototype, { aborted: { configurable: !0, enumerable: !0, get: function() { return this.Rd } }, onabort: { configurable: !0, enumerable: !0, get: function() { return this.Bc }, set: function(a) { this.Bc = a } } });

        function ma(a, b) {
            var c = b || 0,
                d = this.length;
            for (b = 0 <= c ? c : Math.max(d + c, 0); b < d; b++) { var e = this[b]; if (e === a || a !== a && e !== e) return !0 }
            return !1
        };
        var na;

        function p() { return na ? na : na = Promise.resolve(void 0) }

        function v() {
            var a, b;
            this.promise = new Promise(function(c, d) {
                a = c;
                b = d
            });
            this.resolve = a;
            this.reject = b
        }

        function oa(a) { return new Promise(function(b) { b(a()) }) };
        var pa = /^[a-z][a-z0-9._]*-[a-z0-9._-]*$/,
            qa = "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "),
            ra = { childList: !0, subtree: !0 };

        function ta(a, b) { if (!pa.test(b) || qa.includes(b)) throw new a('invalid custom element name "' + b + '"'); }

        function ua(a) { setTimeout(function() { self.__AMP_REPORT_ERROR(a); throw a; }) }

        function va(a, b) {
            this.G = a;
            this.Kc = b;
            this.Nf = Object.create(null)
        }
        va.prototype.define = function(a, b, c) {
            this.Kc.define(a, b, c);
            var d = this.Nf,
                e = d[a];
            e && (e.resolve(), delete d[a])
        };
        va.prototype.get = function(a) { var b = this.Kc.getByName(a); if (b) return b.ctor };
        va.prototype.whenDefined = function(a) {
            var b = this.G,
                c = b.Promise;
            ta(b.SyntaxError, a);
            if (this.Kc.getByName(a)) return p();
            b = this.Nf;
            var d = b[a];
            if (d) return d.promise;
            var e;
            c = new c(function(f) { return e = f });
            b[a] = { promise: c, resolve: e };
            return c
        };
        va.prototype.upgrade = function(a) { this.Kc.upgrade(a) };

        function wa(a) {
            this.G = a;
            this.Cd = Object.create(null);
            this.Xa = "";
            this.oa = this.zd = null;
            this.re = [a.document]
        }
        g = wa.prototype;
        g.current = function() {
            var a = this.zd;
            this.zd = null;
            return a
        };
        g.getByName = function(a) { var b = this.Cd[a]; if (b) return b };
        g.getByConstructor = function(a) {
            var b = this.Cd,
                c;
            for (c in b) { var d = b[c]; if (d.ctor === a) return d }
        };
        g.define = function(a, b, c) {
            var d = this,
                e = this.G,
                f = e.Error;
            e = e.SyntaxError;
            if (c) throw new f("Extending native custom elements is not supported");
            ta(e, a);
            if (this.getByName(a) || this.getByConstructor(b)) throw new f('duplicate definition "' + a + '"');
            this.Cd[a] = { name: a, ctor: b };
            xa(this, a);
            this.re.forEach(function(h) { d.upgrade(h, a) })
        };
        g.upgrade = function(a, b) {
            var c = !!b,
                d = ya(a, b || this.Xa);
            for (a = 0; a < d.length; a++) {
                var e = d[a];
                c ? za(this, e) : this.upgradeSelf(e)
            }
        };
        g.upgradeSelf = function(a) {
            var b = this.getByName(a.localName);
            b && Aa(this, a, b)
        };

        function ya(a, b) { return b && a.querySelectorAll ? a.querySelectorAll(b) : [] }

        function Aa(a, b, c) { c = c.ctor; if (!(b instanceof c)) { a.zd = b; try { if (new c !== b) throw new a.G.Error("Constructor illegally returned a different instance."); } catch (d) { ua(d) } } }

        function za(a, b) { var c = a.getByName(b.localName); if (c && (Aa(a, b, c), b.connectedCallback)) try { b.connectedCallback() } catch (d) { ua(d) } }

        function xa(a, b) {
            if (a.Xa) a.Xa += "," + b;
            else {
                a.Xa = b;
                var c = new a.G.MutationObserver(function(d) { d && Ba(a, d) });
                a.oa = c;
                a.re.forEach(function(d) { c.observe(d, ra) });
                Da(a.G, a)
            }
        }
        g.observe = function(a) {
            this.re.push(a);
            this.oa && this.oa.observe(a, ra)
        };
        g.sync = function() { this.oa && Ba(this, this.oa.takeRecords()) };

        function Ba(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                if (d) {
                    var e = d,
                        f = e.addedNodes,
                        h = e.removedNodes;
                    for (e = 0; e < f.length; e++) {
                        var k = f[e],
                            l = ya(k, a.Xa);
                        za(a, k);
                        for (k = 0; k < l.length; k++) za(a, l[k])
                    }
                    for (e = 0; e < h.length; e++) {
                        k = h[e];
                        var m = ya(k, a.Xa);
                        if (k.disconnectedCallback) try { k.disconnectedCallback() } catch (q) { ua(q) }
                        for (k = 0; k < m.length; k++) { var n = m[k]; if (n.disconnectedCallback) try { n.disconnectedCallback() } catch (q) { ua(q) } }
                    }
                }
            }
        }

        function Da(a, b) {
            var c = a.document,
                d = a.Document.prototype,
                e = a.Element.prototype,
                f = a.Node.prototype,
                h = d.createElement,
                k = d.importNode,
                l = f.appendChild,
                m = f.cloneNode,
                n = f.insertBefore,
                q = f.removeChild,
                t = f.replaceChild;
            d.createElement = function(z) { var G = b.getByName(z); return G ? new G.ctor : h.apply(this, arguments) };
            d.importNode = function() {
                var z = k.apply(this, arguments);
                z && this === c && (b.upgradeSelf(z), b.upgrade(z));
                return z
            };
            f.appendChild = function() {
                var z = l.apply(this, arguments);
                b.sync();
                return z
            };
            f.insertBefore =
                function() {
                    var z = n.apply(this, arguments);
                    b.sync();
                    return z
                };
            f.removeChild = function() {
                var z = q.apply(this, arguments);
                b.sync();
                return z
            };
            f.replaceChild = function() {
                var z = t.apply(this, arguments);
                b.sync();
                return z
            };
            f.cloneNode = function() {
                var z = m.apply(this, arguments);
                z.ownerDocument === c && (b.upgradeSelf(z), b.upgrade(z));
                return z
            };
            var x = e,
                u = Object.getOwnPropertyDescriptor(x, "innerHTML");
            u || (x = Object.getPrototypeOf(a.HTMLElement.prototype), u = Object.getOwnPropertyDescriptor(x, "innerHTML"));
            if (u && u.configurable) {
                var r =
                    u.set;
                u.set = function(z) {
                    r.call(this, z);
                    b.upgrade(this)
                };
                Object.defineProperty(x, "innerHTML", u)
            }
        }

        function Ea() {
            function a() {
                var n = this.constructor,
                    q = h.current();
                q || (q = h.getByConstructor(n), q = f.call(e, q.name));
                Fa(q, n.prototype);
                return q
            }
            var b = Ga,
                c = b.Element,
                d = b.HTMLElement,
                e = b.document,
                f = e.createElement,
                h = new wa(b),
                k = new va(b, h);
            Object.defineProperty(b, "customElements", { enumerable: !0, configurable: !0, value: k });
            c = c.prototype;
            var l = c.attachShadow,
                m = c.createShadowRoot;
            l && (c.attachShadow = function(n) {
                var q = l.apply(this, arguments);
                h.observe(q);
                return q
            }, c.attachShadow.toString = function() { return l.toString() });
            m && (c.createShadowRoot = function() {
                var n = m.apply(this, arguments);
                h.observe(n);
                return n
            }, c.createShadowRoot.toString = function() { return m.toString() });
            Ha(d, a);
            b.HTMLElementOrig = b.HTMLElement;
            b.HTMLElement = a;
            a.call || (a.apply = b.Function.apply, a.bind = b.Function.bind, a.call = b.Function.call)
        }

        function Ia() {
            function a() { return d.construct(c, [], this.constructor) }
            var b = Ga,
                c = b.HTMLElement,
                d = b.Reflect;
            Ha(c, a);
            b.HTMLElementOrig = b.HTMLElement;
            b.HTMLElement = a
        }

        function Ha(a, b) {
            b.prototype = Object.create(a.prototype, { constructor: { configurable: !0, writable: !0, value: b } });
            Fa(b, a)
        }

        function Fa(a, b) {
            if (Object.setPrototypeOf) Object.setPrototypeOf(a, b);
            else if ({ __proto__: { test: !0 } }.test) a.__proto__ = b;
            else
                for (; null !== b && !Object.isPrototypeOf.call(b, a);) {
                    for (var c = Object.getOwnPropertyNames(b), d = 0; d < c.length; d++) {
                        var e = c[d];
                        if (!Object.hasOwnProperty.call(a, e)) {
                            var f = Object.getOwnPropertyDescriptor(b, e);
                            Object.defineProperty(a, e, f)
                        }
                    }
                    b = Object.getPrototypeOf(b)
                }
        };

        function Ja(a, b) {
            if (void 0 === b ? this.contains(a) : !b) return this.remove(a), !1;
            this.add(a);
            return !0
        }

        function Ka() {
            var a = self;
            if (/Trident|MSIE|IEMobile/i.test(a.navigator.userAgent) && a.DOMTokenList) {
                a.Object.defineProperty(a.DOMTokenList.prototype, "toggle", { enumerable: !1, configurable: !0, writable: !0, value: Ja });
                var b = a.DOMTokenList.prototype.add;
                a.DOMTokenList.prototype.add = function() { for (var c = 0; c < arguments.length; c++) b.call(this, arguments[c]) }
            }
        };

        function La(a) { return a == this || this.documentElement.contains(a) };

        function Ma(a) { return a ? Array.prototype.slice.call(a) : [] }
        var w = Array.isArray;

        function Na(a, b) {
            for (var c = [], d = 0, e = 0; e < a.length; e++) {
                var f = a[e];
                b(f, e, a) ? c.push(f) : (d < e && (a[d] = f), d++)
            }
            d < a.length && (a.length = d);
            return c
        }

        function Oa(a, b) {
            for (var c = 0; c < a.length; c++)
                if (b(a[c], c, a)) return c;
            return -1
        }

        function Pa(a, b) { b = a.indexOf(b); - 1 != b && a.splice(b, 1) };

        function Qa(a, b) { var c = a.length - b.length; return 0 <= c && a.indexOf(b, c) == c }

        function Ra(a, b) { var c; "number" !== typeof c && (c = 0); return c + b.length > a.length ? !1 : -1 !== a.indexOf(b, c) }

        function Ta(a) { return a.trimStart ? a.trimStart() : (a + "_").trim().slice(0, -1) };
        var Ua = Object.prototype,
            Va = Ua.toString,
            Wa = Ua.hasOwnProperty;

        function Xa(a) { return "[object Object]" === Va.call(a) }

        function y(a) {
            var b = Object.create(null);
            a && Object.assign(b, a);
            return b
        }

        function A(a) { return a || {} };

        function Ya(a) { return 1 == (null == a ? void 0 : a.nodeType) };

        function Za(a) { return Ya(a) ? a.tagName.toLowerCase() + (a.id ? "#" + a.id : "") : a };

        function $a(a, b, c, d) {
            var e = void 0 === c ? "Assertion failed" : c;
            if (b) return b;
            a && !Ra(e, a) && (e += a);
            for (var f = 3, h = e.split("%s"), k = h.shift(), l = [k]; h.length;) {
                var m = arguments[f++],
                    n = h.shift();
                k += Za(m) + n;
                l.push(m, n.trim())
            }
            f = Error(k);
            f.messageArray = Na(l, function(q) { return "" !== q });
            self.__AMP_REPORT_ERROR && self.__AMP_REPORT_ERROR(f);
            throw f;
        };

        function ab(a) {
            var b = Object.getOwnPropertyDescriptor(a, "message");
            if (b && b.writable) return a;
            var c = a.stack,
                d = Error(a.message),
                e;
            for (e in a) d[e] = a[e];
            d.stack = c;
            return d
        }

        function bb(a) {
            for (var b = null, c = "", d = 0; d < arguments.length; d++) {
                var e = arguments[d];
                e instanceof Error && !b ? b = ab(e) : (c && (c += " "), c += e)
            }
            b ? c && (b.message = c + ": " + b.message) : b = Error(c);
            return b
        }

        function cb(a) {
            var b = bb.apply(null, arguments);
            setTimeout(function() { self.__AMP_REPORT_ERROR && self.__AMP_REPORT_ERROR(b); throw b; })
        };

        function db(a, b) { var c = b = void 0 === b ? "" : b; try { return decodeURIComponent(a) } catch (d) { return c } };
        var eb = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;

        function B(a) {
            var b = Object.create(null);
            if (!a) return b;
            for (var c; c = eb.exec(a);) {
                var d = db(c[1], c[1]);
                c = c[2] ? db(c[2].replace(/\+/g, " "), c[2]) : "";
                b[d] = c
            }
            return b
        };
        var fb = "";

        function C(a) {
            var b = a || self;
            if (b.__AMP_MODE) b = b.__AMP_MODE;
            else {
                var c = B(b.location.originalHash || b.location.hash);
                fb || (fb = b.AMP_CONFIG && b.AMP_CONFIG.v ? b.AMP_CONFIG.v : "012104302228000");
                c = { localDev: !1, development: !!(0 <= ["1", "actions", "amp", "amp4ads", "amp4email"].indexOf(c.development) || b.AMP_DEV_MODE), examiner: "2" == c.development, esm: !1, geoOverride: c["amp-geo"], minified: !0, test: !1, log: c.log, version: "2104302228000", rtvVersion: fb };
                b = b.__AMP_MODE = c
            }
            return b
        };

        function gb(a) {
            var b = !1,
                c = null,
                d = a;
            return function(e) {
                for (var f = [], h = 0; h < arguments.length; ++h) f[h - 0] = arguments[h];
                b || (c = d.apply(self, f), b = !0, d = null);
                return c
            }
        }

        function hb(a, b, c) {
            function d(k) {
                h = null;
                f = a.setTimeout(e, c);
                b.apply(null, k)
            }

            function e() {
                f = 0;
                h && d(h)
            }
            var f = 0,
                h = null;
            return function(k) {
                for (var l = [], m = 0; m < arguments.length; ++m) l[m - 0] = arguments[m];
                f ? h = l : d(l)
            }
        }

        function ib(a, b) {
            function c() {
                d = 0;
                var h = 300 - (a.Date.now() - e);
                if (0 < h) d = a.setTimeout(c, h);
                else {
                    var k = f;
                    f = null;
                    b.apply(null, k)
                }
            }
            var d = 0,
                e = 0,
                f = null;
            return function(h) {
                for (var k = [], l = 0; l < arguments.length; ++l) k[l - 0] = arguments[l];
                e = a.Date.now();
                f = k;
                d || (d = a.setTimeout(c, 300))
            }
        };
        var jb = self.AMP_CONFIG || {},
            kb = ("string" == typeof jb.cdnProxyRegex ? new RegExp(jb.cdnProxyRegex) : jb.cdnProxyRegex) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;

        function lb(a) { if (!self.document || !self.document.head || self.location && kb.test(self.location.origin)) return null; var b = self.document.head.querySelector('meta[name="' + a + '"]'); return b && b.getAttribute("content") || null }
        var mb = {
                thirdParty: jb.thirdPartyUrl || "https://3p.ampproject.net",
                thirdPartyFrameHost: jb.thirdPartyFrameHost || "ampproject.net",
                thirdPartyFrameRegex: ("string" == typeof jb.thirdPartyFrameRegex ? new RegExp(jb.thirdPartyFrameRegex) : jb.thirdPartyFrameRegex) || /^d-\d+\.ampproject\.net$/,
                cdn: jb.cdnUrl || lb("runtime-host") || "https://cdn.ampproject.org",
                cdnProxyRegex: kb,
                localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
                errorReporting: jb.errorReportingUrl || "https://us-central1-amp-error-reporting.cloudfunctions.net/r",
                betaErrorReporting: jb.betaErrorReportingUrl || "https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",
                localDev: jb.localDev || !1,
                trustedViewerHosts: [/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/, /(^|\.)gmail\.(com|dev)$/],
                geoApi: jb.geoApiUrl || lb("amp-geo-api")
            },
            ob = { urls: mb };

        function pb() {}

        function qb(a) { return 0 <= a.indexOf("\u200b\u200b\u200b") }
        var rb = void 0;

        function sb(a) { rb = a }

        function tb(a, b) { return b.reduce(function(c, d) { return c + "&s[]=" + encodeURIComponent(String(Za(d))) }, "https://log.amp.dev/?v=012104302228000&id=" + encodeURIComponent(a)) }

        function ub(a, b, c) {
            var d = this,
                e = c = void 0 === c ? "" : c;
            this.win = a;
            this.$g = b;
            this.ah = this.win.console && this.win.console.log && "0" != C().log ? this.$g(parseInt(C().log, 10), C().development) : 0;
            this.ec = e;
            this.yc = null;
            this.Cg = gb(function() { a.fetch(mb.cdn + "/rtv/012104302228000/log-messages.simple.json").then(function(f) { return f.json() }, pb).then(function(f) { f && (d.yc = f) }) })
        }

        function vb(a) { return void 0 !== rb ? rb : a.ah }

        function wb(a, b, c, d) {
            if (0 != vb(a)) {
                var e = a.win.console.log;
                "ERROR" == c ? e = a.win.console.error || e : "INFO" == c ? e = a.win.console.info || e : "WARN" == c && (e = a.win.console.warn || e);
                c = w(d[0]) ? xb(a, d[0]) : d;
                b = "[" + b + "]";
                "string" === typeof c[0] ? c[0] = b + " " + c[0] : c.unshift(b);
                e.apply(a.win.console, c)
            }
        }
        g = ub.prototype;
        g.isEnabled = function() { return 0 != vb(this) };
        g.fine = function(a, b) { 4 <= vb(this) && wb(this, a, "FINE", Array.prototype.slice.call(arguments, 1)) };
        g.info = function(a, b) { 3 <= vb(this) && wb(this, a, "INFO", Array.prototype.slice.call(arguments, 1)) };
        g.warn = function(a, b) { 2 <= vb(this) && wb(this, a, "WARN", Array.prototype.slice.call(arguments, 1)) };
        g.Va = function(a, b) {
            if (1 <= vb(this)) wb(this, a, "ERROR", Array.prototype.slice.call(arguments, 1));
            else {
                var c = bb.apply(null, Array.prototype.slice.call(arguments, 1));
                yb(this, c);
                return c
            }
        };
        g.error = function(a, b) {
            var c = this.Va.apply(this, arguments);
            c && (c.name = a || c.name, self.__AMP_REPORT_ERROR(c))
        };
        g.expectedError = function(a, b) {
            var c = this.Va.apply(this, arguments);
            c && (c.expected = !0, self.__AMP_REPORT_ERROR(c))
        };
        g.createError = function(a) {
            var b = bb.apply(null, arguments);
            yb(this, b);
            return b
        };
        g.createExpectedError = function(a) {
            var b = bb.apply(null, arguments);
            yb(this, b);
            b.expected = !0;
            return b
        };
        g.assert = function(a, b, c) { return w(b) ? this.assert.apply(this, [a].concat(xb(this, b))) : $a.apply(null, [this.ec].concat(Array.prototype.slice.call(arguments))) };
        g.assertElement = function(a, b) { zb(this, a, Ya(a), "Element expected", b); return a };
        g.assertString = function(a, b) { zb(this, a, "string" == typeof a, "String expected", b); return a };
        g.assertNumber = function(a, b) { zb(this, a, "number" == typeof a, "Number expected", b); return a };
        g.assertArray = function(a, b) { zb(this, a, w(a), "Array expected", b); return a };
        g.assertBoolean = function(a, b) { zb(this, a, !!a === a, "Boolean expected", b); return a };
        g.assertEnumValue = function(a, b, c) {
            a: {
                for (var d in a)
                    if (a[d] === b) { a = !0; break a }
                a = !1
            }
            if (a) return b;this.assert(!1, 'Unknown %s value: "%s"', c || "enum", b)
        };

        function yb(a, b) {
            b = ab(b);
            a.ec ? b.message ? -1 == b.message.indexOf(a.ec) && (b.message += a.ec) : b.message = a.ec : qb(b.message) && (b.message = b.message.replace("\u200b\u200b\u200b", ""))
        }

        function xb(a, b) {
            var c = b.shift();
            C(a.win).development && a.Cg();
            return a.yc && c in a.yc ? [a.yc[c]].concat(b) : ["More info at " + tb(c, b)]
        }

        function zb(a, b, c, d, e) { w(e) ? a.assert(c, e.concat(b)) : a.assert(c, (e || d) + ": %s", b) }
        self.__AMP_LOG = self.__AMP_LOG || { user: null, dev: null, userForEmbed: null };
        var Ab = self.__AMP_LOG,
            Bb = null;

        function D(a) { Ab.user || (Ab.user = Cb("\u200b\u200b\u200b")); var b = Ab.user.win; return a && a.ownerDocument.defaultView != b ? Ab.userForEmbed ? Ab.userForEmbed : Ab.userForEmbed = Cb("\u200b\u200b\u200b\u200b") : Ab.user }

        function Cb(a) { if (!Bb) throw Error("failed to call initLogConstructor"); return new Bb(self, function(b, c) { return c || 1 <= b ? 4 : 2 }, a) }

        function H() { if (Ab.dev) return Ab.dev; if (!Bb) throw Error("failed to call initLogConstructor"); return Ab.dev = new Bb(self, function(a) { return 3 <= a ? 4 : 2 <= a ? 3 : 0 }) }

        function J(a, b, c, d, e, f) { return D().assert(a, b, c, d, e, f, void 0, void 0, void 0, void 0, void 0) };
        /*
         https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
        var Db = /(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;

        function Eb(a, b, c, d, e) { return e ? e : b ? "\ufffd" : d ? a.slice(0, -1) + "\\" + a.slice(-1).charCodeAt(0).toString(16) + " " : "\\" + a };
        var Fb;

        function Gb(a) {
            try {
                var b = a.ownerDocument,
                    c = b.createElement("div"),
                    d = b.createElement("div");
                c.appendChild(d);
                return c.querySelector(":scope div") === d
            } catch (e) { return !1 }
        };

        function Hb(a) { return "number" === typeof a && isFinite(a) };
        var Ib = { bubbles: !0, cancelable: !0 };

        function Jb(a, b, c) {
            if (b(a)) c();
            else {
                var d = a.ownerDocument.defaultView;
                if (d.MutationObserver) {
                    var e = new d.MutationObserver(function() { b(a) && (e.disconnect(), c()) });
                    e.observe(a, { childList: !0 })
                } else var f = d.setInterval(function() { b(a) && (d.clearInterval(f), c()) }, 5)
            }
        }

        function Kb(a, b) { return new Promise(function(c) { Jb(a, b, c) }) }

        function Lb(a, b) { Jb(a.documentElement, function() { return !!a.body }, b) }

        function Mb(a) { return new Promise(function(b) { return Lb(a, b) }) }

        function Nb(a) { a.parentElement && a.parentElement.removeChild(a) }

        function Ob(a) {
            var b = A({ src: "about:blank", style: "display:none" });
            a = a.createElement("iframe");
            for (var c in b) a.setAttribute(c, b[c]);
            return a
        }

        function Pb(a) {
            var b = a.isConnected;
            if (void 0 !== b) return b;
            do
                if (a = Qb(a), a.host) a = a.host;
                else break;
            while (1);
            return a.nodeType === Node.DOCUMENT_NODE
        }

        function Qb(a) { if (Node.prototype.getRootNode) return a.getRootNode() || a; for (; a.parentNode && (!a || "I-AMPHTML-SHADOW-ROOT" != a.tagName && (11 != a.nodeType || "[object ShadowRoot]" !== Object.prototype.toString.call(a))); a = a.parentNode); return a }

        function Rb(a, b) {
            for (; a && void 0 !== a; a = a.parentElement)
                if (b(a)) return a;
            return null
        }

        function Sb(a, b) { return a.closest ? a.closest(b) : Rb(a, function(c) { return Tb(c, b) }) }

        function Ub(a, b) { var c = []; for (a = a.firstElementChild; a; a = a.nextElementSibling) b(a) && c.push(a); return c }

        function Vb(a, b) {
            for (a = a.lastElementChild; a; a = a.previousElementSibling)
                if (b(a)) return a;
            return null
        }

        function Wb(a, b) { var c = []; for (a = a.firstChild; a; a = a.nextSibling) b(a) && c.push(a); return c }

        function Xb(a, b) { /^[\w-]+$/.test(b); return Yb(a, "> [" + b + "]") }

        function Tb(a, b) { var c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector; return c ? c.call(a, b) : !1 }

        function Zb(a, b) {
            a.classList.add("i-amphtml-scoped");
            var c = b.replace(/^|,/g, "$&.i-amphtml-scoped "),
                d = a.querySelectorAll(c);
            a.classList.remove("i-amphtml-scoped");
            return d
        }

        function Yb(a, b) { if (void 0 !== Fb ? Fb : Fb = Gb(a)) return a.querySelector(b.replace(/^|,/g, "$&:scope ")); var c = Zb(a, b); return void 0 === c[0] ? null : c[0] }

        function $b(a, b) {
            var c = a;
            do
                if (c.nextSibling) return !0;
            while ((c = c.parentNode) && c != b);
            return !1
        }

        function ac(a, b) { for (var c = a.length, d = 0; d < c; d++) b(a[d], d) }

        function bc(a, b, c, d) {
            try { var e = a.open(b, c, d) } catch (f) { H().error("DOM", "Failed to open url on target: ", c, f) }
            e || "_top" == c || Ra(d || "", "noopener") || (e = a.open(b, "_top"));
            return e
        }

        function cc(a) { try { a.focus() } catch (b) {} }

        function dc(a) { return a.parent && a.parent != a }

        function ec(a, b, c, d) {
            var e = c || {};
            c = a.ownerDocument.createEvent("Event");
            c.data = e;
            d = d || Ib;
            c.initEvent(b, d.bubbles, d.cancelable);
            a.dispatchEvent(c)
        };

        function fc(a) {
            var b = Object.create(null),
                c;
            for (c in a)
                if (gc(a, c)) {
                    var d = a[c];
                    b[c] = Xa(d) ? fc(d) : d
                }
            return b
        }

        function hc(a) { return JSON.parse(a) }

        function gc(a, b) { return null == a || "object" != typeof a ? !1 : Object.prototype.hasOwnProperty.call(a, b) };

        function ic(a) { return "undefined" !== typeof TextEncoder ? (new TextEncoder("utf-8")).encode(a) : jc(unescape(encodeURIComponent(a))) }

        function jc(a) {
            for (var b = new Uint8Array(a.length), c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                b[c] = d
            }
            return b
        }

        function kc(a) { for (var b = Array(a.length), c = 0; c < a.length; c++) b[c] = String.fromCharCode(a[c]); return b.join("") };
        var lc = { document: 1, text: 2 },
            mc = ["GET", "POST"];

        function nc(a, b) {
            var c = b = void 0 === b ? {} : b;
            return new Promise(function(d, e) {
                var f = oc(c.method || "GET"),
                    h = pc(f, a);
                "include" == c.credentials && (h.withCredentials = !0);
                c.responseType in lc && (h.responseType = c.responseType);
                c.headers && Object.keys(c.headers).forEach(function(k) { h.setRequestHeader(k, c.headers[k]) });
                h.onreadystatechange = function() { 2 > h.readyState || (100 > h.status || 599 < h.status ? (h.onreadystatechange = null, e(D().createExpectedError("Unknown HTTP status " + h.status))) : 4 == h.readyState && d(new qc(h))) };
                h.onerror =
                    function() { e(D().createExpectedError("Network failure")) };
                h.onabort = function() { e(D().createExpectedError("Request aborted")) };
                "POST" == f ? h.send(c.body) : h.send()
            })
        }

        function pc(a, b) {
            var c = new XMLHttpRequest;
            if ("withCredentials" in c) c.open(a, b, !0);
            else throw H().createExpectedError("CORS is not supported");
            return c
        }

        function qc(a) {
            this.cb = a;
            this.status = this.cb.status;
            this.statusText = this.cb.statusText;
            this.ok = 200 <= this.status && 300 > this.status;
            this.headers = new rc(a);
            this.bodyUsed = !1;
            this.body = null;
            this.url = a.responseURL
        }
        qc.prototype.clone = function() { return new qc(this.cb) };

        function sc(a) { a.bodyUsed = !0; return Promise.resolve(a.cb.responseText) }
        qc.prototype.text = function() { return sc(this) };
        qc.prototype.json = function() { return sc(this).then(hc) };
        qc.prototype.arrayBuffer = function() { return sc(this).then(ic) };

        function oc(a) {
            if (void 0 === a) return "GET";
            a = a.toUpperCase();
            mc.includes(a);
            return a
        }

        function rc(a) { this.cb = a }
        rc.prototype.get = function(a) { return this.cb.getResponseHeader(a) };
        rc.prototype.has = function(a) { return null != this.cb.getResponseHeader(a) };

        function tc(a, b) {
            var c = b = void 0 === b ? {} : b,
                d = y();
            a = Object.assign({}, { status: 200, statusText: "OK", responseText: a ? String(a) : "", getResponseHeader: function(f) { var h = String(f).toLowerCase(); return Wa.call(d, h) ? d[h] : null } }, c);
            a.status = void 0 === c.status ? 200 : parseInt(c.status, 10);
            if (w(c.headers)) c.headers.forEach(function(f) {
                var h = f[1];
                d[String(f[0]).toLowerCase()] = String(h)
            });
            else if (Xa(c.headers))
                for (var e in c.headers) d[String(e).toLowerCase()] = String(c.headers[e]);
            c.statusText && (a.statusText = String(c.statusText));
            qc.call(this, a)
        }
        ja(tc, qc);

        function uc(a, b, c, d) { return { left: a, top: b, width: c, height: d, bottom: b + d, right: a + c, x: a, y: b } }

        function vc(a) { for (var b = -Infinity, c = Infinity, d = -Infinity, e = Infinity, f = 0; f < arguments.length; f++) { var h = arguments[f]; if (h && (b = Math.max(b, h.left), c = Math.min(c, h.left + h.width), d = Math.max(d, h.top), e = Math.min(e, h.top + h.height), c < b || e < d)) return null } return Infinity == c ? null : uc(b, d, c - b, e - d) }

        function wc(a, b) { return uc(a.left - .25 * a.width, a.top - a.height * b, 1.5 * a.width, a.height * (1 + 2 * b)) }

        function xc(a, b, c) { return 0 == b && 0 == c || 0 == a.width && 0 == a.height ? a : uc(a.left + b, a.top + c, a.width, a.height) };
        var yc;

        function zc() { return Pb(this) ? yc.call(this) : uc(0, 0, 0, 0) }

        function Ac() { var a = Bc; if (!a.document) return !1; try { return 0 !== a.document.createElement("div").getBoundingClientRect().top } catch (b) { return !0 } };

        function K(a, b, c) {
            a = Ec(a);
            Fc(a, a, b, c)
        }

        function M(a, b, c, d) {
            var e = Gc(a),
                f = Hc(e);
            Fc(f, e, b, c);
            d && Ic(f, b)
        }

        function N(a, b) { a = Ec(a); return Ic(a, b) }

        function O(a) { return Ic(a, "timer") }

        function Jc(a, b) {
            var c = Gc(a);
            c = Hc(c);
            return Ic(c, b)
        }

        function Kc(a, b) {
            a = Gc(a);
            a = Hc(a);
            return Lc(a, b) ? Ic(a, b) : null
        }

        function Mc(a, b) { return Nc(Hc(a), b) }

        function Oc(a, b) { return Pc(Hc(a), b) }

        function Ec(a) { return a.__AMP_TOP || (a.__AMP_TOP = a) }

        function Qc(a, b) {
            var c = (a.ownerDocument || a).defaultView,
                d = b || Ec(c);
            if (c && c != d && Ec(c) == d) try { return c.frameElement } catch (e) {}
            return null
        }

        function Gc(a) { return a.nodeType ? N((a.ownerDocument || a).defaultView, "ampdoc").getAmpDoc(a) : a }

        function Hc(a) { a = Gc(a); return a.isSingleDoc() ? a.win : a }

        function Ic(a, b) {
            Lc(a, b);
            a = Rc(a)[b];
            a.obj || (a.obj = new a.ctor(a.context), a.context = null, a.resolve && a.resolve(a.obj));
            return a.obj
        }

        function Fc(a, b, c, d) {
            var e = Rc(a),
                f = e[c];
            f || (f = e[c] = { obj: null, promise: null, resolve: null, reject: null, context: null, ctor: null, sharedInstance: !1 });
            f.ctor || (f.ctor = d, f.context = b, f.sharedInstance = !1, f.resolve && Ic(a, c))
        }

        function Nc(a, b) {
            var c = Pc(a, b);
            if (c) return c;
            a = Rc(a);
            a[b] = Sc();
            return a[b].promise
        }

        function Pc(a, b) {
            var c = Rc(a)[b];
            if (c) {
                if (c.promise) return c.promise;
                Ic(a, b);
                return c.promise = Promise.resolve(c.obj)
            }
            return null
        }

        function Rc(a) {
            var b = a.__AMP_SERVICES;
            b || (b = a.__AMP_SERVICES = {});
            return b
        }

        function Tc(a) {
            a = Rc(a);
            var b = {},
                c;
            for (c in a) {
                b.eb = c;
                if (Object.prototype.hasOwnProperty.call(a, b.eb)) {
                    var d = a[b.eb];
                    d.sharedInstance || (d.obj ? Uc(b.eb, d.obj) : d.promise && d.promise.then(function(e) { return function(f) { return Uc(e.eb, f) } }(b)))
                }
                b = { eb: b.eb }
            }
        }

        function Uc(a, b) { if ("function" == typeof b.dispose) try { b.dispose() } catch (c) { H().error("SERVICE", "failed to dispose service", a, c) } }

        function Lc(a, b) { a = a.__AMP_SERVICES && a.__AMP_SERVICES[b]; return !(!a || !a.ctor) }

        function Sc() {
            var a = new v,
                b = a.promise,
                c = a.resolve;
            a = a.reject;
            b.catch(function() {});
            return { obj: null, promise: b, resolve: c, reject: a, context: null, ctor: null }
        };
        var Vc = ["amp-mustache"];

        function Wc(a) {
            if (!a) return null;
            var b = a.match(/^(.*)\/(.*)-([0-9.]+|latest)(\.max)?\.(?:js|mjs)$/i),
                c = b ? b[2] : void 0;
            b = b ? b[3] : void 0;
            return c && b ? { extensionId: c, extensionVersion: b } : null
        }

        function Xc(a, b, c) {
            var d = a.document.createElement("script");
            d.async = !0;
            b.startsWith("_") ? c = "" : d.setAttribute(0 <= Vc.indexOf(b) ? "custom-template" : "custom-element", b);
            d.setAttribute("data-script", b);
            d.setAttribute("i-amphtml-inserted", "");
            C().esm && d.setAttribute("type", "module");
            var e = a.document.head.querySelector("script[nonce]");
            e && d.setAttribute("nonce", e.getAttribute("nonce"));
            d.setAttribute("crossorigin", "anonymous");
            a = c;
            c = C().esm ? ".mjs" : ".js";
            var f = mb.cdn;
            var h = C().rtvVersion;
            d.src = f + "/rtv/" + h +
                "/v0/" + b + (a ? "-" + a : "") + c;
            return d
        }

        function Yc(a, b, c, d, e) {
            e = void 0 === e ? !0 : e;
            a = a.document.head.querySelectorAll('script[src*="/' + b + '-"]:not([i-amphtml-loaded-new-version])' + (e ? "" : ":not([i-amphtml-inserted])"));
            for (var f = [], h = 0; h < a.length; h++) {
                var k = a[h],
                    l = Wc(k.src);
                if (l) {
                    var m = l,
                        n = m.extensionVersion;
                    m.extensionId == b && (b.startsWith("_") || n == c || "latest" == n && d) && f.push(k)
                }
            }
            return f
        }

        function Zc(a) {
            if (!a) return [];
            for (var b = a.querySelectorAll("script[custom-element],script[custom-template]"), c = [], d = 0; d < b.length; d++) {
                var e = b[d],
                    f = e.getAttribute("custom-element") || e.getAttribute("custom-template");
                e = Wc(e.src);
                f && e && c.push({ extensionId: f, extensionVersion: e.extensionVersion })
            }
            return c
        };

        function $c(a, b, c) { return ad(a, b, c, void 0).then(function(d) { return J(d, "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.", b, c, c, c) }) }

        function ad(a, b, c, d) { var e = Oc(a, b); if (e) return e; var f = Gc(a); return f.whenExtensionsKnown().then(function() { var h = f.getExtensionVersion(c); return h ? N(f.win, "extensions").waitForExtension(c, h) : null }).then(function(h) { return h ? d ? Oc(a, b) : Mc(a, b) : null }) }

        function bd(a) { var b = Kc(a, "bind"); return b ? Promise.resolve(b) : ad(a, "bind", "amp-bind") };

        function cd(a) { return N(a, "ampdoc") }

        function dd(a) { return Jc(a, "documentInfo").get() }

        function ed(a) { return N(a, "extensions") }

        function fd(a) { return Jc(a, "mutator") }

        function P(a) { return N(a, "platform") }

        function gd(a) { return N(a, "preconnect") }

        function hd(a) { return Jc(a, "resources") }

        function Q(a) { return Jc(a, "viewer") }

        function id(a) { return N(a, "vsync") }

        function jd(a) { return Jc(a, "viewport") };

        function kd(a) { return !a.IntersectionObserver || !a.IntersectionObserverEntry || !!a.IntersectionObserver._stub || !ld(a) || /apple/i.test(a.navigator.vendor) }

        function md() {
            var a = nd.IntersectionObserver,
                b = od;
            return function(c, d) { return d && d.root && 9 === d.root.nodeType ? new b(c, d) : new a(c, d) }
        }

        function ld(a) { try { return new a.IntersectionObserver(function() {}, { root: a.document }), !0 } catch (b) { return !1 } }

        function pd(a) { kd(a) && ed(a).preloadExtension("amp-intersection-observer-polyfill") }

        function od(a, b) {
            this.Ua = a;
            this.Vb = Object.assign({}, { root: null, rootMargin: "0px 0px 0px 0px" }, b);
            this.W = [];
            this.N = null;
            od._upgraders.push(this.Ce.bind(this))
        }
        g = od.prototype;
        g.disconnect = function() { this.N ? this.N.disconnect() : this.W.length = 0 };
        g.takeRecords = function() { return this.N ? this.N.takeRecords() : [] };
        g.observe = function(a) { this.N ? this.N.observe(a) : -1 == this.W.indexOf(a) && this.W.push(a) };
        g.unobserve = function(a) { this.N ? this.N.unobserve(a) : (a = this.W.indexOf(a), -1 != a && this.W.splice(a, 1)) };
        g.Ce = function(a) {
            var b = new a(this.Ua, this.Vb);
            this.N = b;
            this.W.forEach(function(c) { return b.observe(c) });
            this.W = null
        };
        ca.Object.defineProperties(od.prototype, { root: { configurable: !0, enumerable: !0, get: function() { return this.N ? this.N.root : this.Vb.root || null } }, rootMargin: { configurable: !0, enumerable: !0, get: function() { return this.N ? this.N.rootMargin : this.Vb.rootMargin } }, thresholds: { configurable: !0, enumerable: !0, get: function() { return this.N ? this.N.thresholds : [].concat(this.Vb.threshold || 0) } } });
        od._upgraders = [];

        function qd() { var a = rd;!a.IntersectionObserverEntry || "isIntersecting" in a.IntersectionObserverEntry.prototype || Object.defineProperty(a.IntersectionObserverEntry.prototype, "isIntersecting", { enumerable: !0, configurable: !0, get: function() { return 0 < this.intersectionRatio } }) };

        function sd(a) { return (a = Number(a)) ? 0 < a ? 1 : -1 : a };
        var td = Object.prototype.hasOwnProperty;

        function ud(a, b) {
            if (null == a) throw new TypeError("Cannot convert undefined or null to object");
            for (var c = Object(a), d = 1; d < arguments.length; d++) {
                var e = arguments[d];
                if (null != e)
                    for (var f in e) td.call(e, f) && (c[f] = e[f])
            }
            return c
        };

        function vd(a) { return Object.keys(a).map(function(b) { return a[b] }) };

        function wd(a) {
            if (!(this instanceof wd)) throw new TypeError("Constructor Promise requires `new`");
            if (!xd(a)) throw new TypeError("Must pass resolver function");
            this._state = yd;
            this._value = [];
            this._isChainEnd = !0;
            zd(this, Ad(this, Bd), Ad(this, Cd), { then: a })
        }
        wd.prototype.then = function(a, b) {
            a = xd(a) ? a : void 0;
            b = xd(b) ? b : void 0;
            if (a || b) this._isChainEnd = !1;
            return this._state(this._value, a, b)
        };
        wd.prototype.catch = function(a) { return this.then(void 0, a) };

        function Dd(a) { return a === Object(a) && a instanceof this ? a : new this(function(b) { b(a) }) }

        function Ed(a) { return new this(function(b, c) { c(a) }) }

        function Fd(a) {
            var b = this;
            return new b(function(c, d) {
                var e = a.length,
                    f = Array(e);
                if (0 === e) return c(f);
                Gd(a, function(h, k) {
                    b.resolve(h).then(function(l) {
                        f[k] = l;
                        0 === --e && c(f)
                    }, d)
                })
            })
        }

        function Hd(a) { var b = this; return new b(function(c, d) { for (var e = 0; e < a.length; e++) b.resolve(a[e]).then(c, d) }) }

        function Bd(a, b, c, d) {
            if (!b) return d && (b = d.promise, b._state = Bd, b._value = a), this;
            d || (d = new Id(this.constructor));
            Jd(Kd(d, b, a));
            return d.promise
        }

        function Cd(a, b, c, d) {
            if (!c) return d && (b = d.promise, b._state = Cd, b._value = a), this;
            d || (d = new Id(this.constructor));
            Jd(Kd(d, c, a));
            return d.promise
        }

        function yd(a, b, c, d) {
            if (!d) {
                if (!b && !c) return this;
                d = new Id(this.constructor)
            }
            a.push({ deferred: d, onFulfilled: b || d.resolve, onRejected: c || d.reject });
            return d.promise
        }

        function Id(a) {
            var b = this;
            this.promise = new a(function(c, d) {
                b.resolve = c;
                b.reject = d
            });
            return b
        }

        function Ld(a, b, c, d) {
            var e = a._value;
            a._state = b;
            a._value = c;
            d && b === yd && d._state(c, void 0, void 0, { promise: a, resolve: void 0, reject: void 0 });
            for (var f = 0; f < e.length; f++) {
                var h = e[f];
                a._state(c, h.onFulfilled, h.onRejected, h.deferred)
            }
            e.length = 0;
            b === Cd && a._isChainEnd && setTimeout(function() { if (a._isChainEnd) throw c; }, 0)
        }

        function Ad(a, b) { return function(c) { Ld(a, b, c) } }

        function Md() {}

        function xd(a) { return "function" === typeof a }

        function Gd(a, b) { for (var c = 0; c < a.length; c++) b(a[c], c) }

        function Kd(a, b, c) {
            var d = a.promise,
                e = a.resolve,
                f = a.reject;
            return function() {
                try {
                    var h = b(c);
                    zd(d, e, f, h, h)
                } catch (k) { f(k) }
            }
        }
        var Jd = function() {
            function a() {
                for (var e = 0; e < d; e++) {
                    var f = c[e];
                    c[e] = null;
                    f()
                }
                d = 0
            }
            if ("undefined" !== typeof window && window.postMessage) { window.addEventListener("message", a); var b = function() { window.postMessage("macro-task", "*") } } else b = function() { setTimeout(a, 0) };
            var c = Array(16),
                d = 0;
            return function(e) {
                0 === d && b();
                c[d++] = e
            }
        }();

        function zd(a, b, c, d, e) {
            var f = c,
                h;
            try {
                if (d === a) throw new TypeError("Cannot fulfill promise with itself");
                var k = d === Object(d);
                if (k && d instanceof a.constructor) Ld(a, d._state, d._value, d);
                else if (k && (h = d.then) && xd(h)) {
                    var l = function(m) {
                        l = f = Md;
                        zd(a, b, c, m, m)
                    };
                    f = function(m) {
                        l = f = Md;
                        c(m)
                    };
                    h.call(e, function(m) { l(m) }, function(m) { f(m) })
                } else b(d)
            } catch (m) { f(m) }
        };

        function Nd(a) {
            this.Ua = a;
            this.W = [];
            this.N = null;
            Nd._upgraders.push(this.Ce.bind(this))
        }
        Nd.prototype.disconnect = function() { this.N ? this.N.disconnect() : this.W.length = 0 };
        Nd.prototype.observe = function(a) { this.N ? this.N.observe(a) : -1 == this.W.indexOf(a) && this.W.push(a) };
        Nd.prototype.unobserve = function(a) { this.N ? this.N.unobserve(a) : (a = this.W.indexOf(a), -1 != a && this.W.splice(a, 1)) };
        Nd.prototype.Ce = function(a) {
            var b = new a(this.Ua, this.Vb);
            this.N = b;
            this.W.forEach(function(c) { return b.observe(c) });
            this.W = null
        };
        Nd._upgraders = [];

        function Od(a, b) { return this.substr(0 < b ? b | 0 : 0, a.length) === a };
        (function(a) { a.fetch || (Object.defineProperty(a, "fetch", { value: nc, writable: !0, enumerable: !0, configurable: !0 }), Object.defineProperty(a, "Response", { value: tc, writable: !0, enumerable: !1, configurable: !0 })) })(self);
        (function(a) { a.Math.sign || a.Object.defineProperty(a.Math, "sign", { enumerable: !1, configurable: !0, writable: !0, value: sd }) })(self);
        (function(a) { a.Object.assign || a.Object.defineProperty(a.Object, "assign", { enumerable: !1, configurable: !0, writable: !0, value: ud }) })(self);
        (function(a) { a.Object.values || a.Object.defineProperty(a.Object, "values", { configurable: !0, writable: !0, value: vd }) })(self);
        (function(a) { a.Promise || (a.Promise = wd, wd.default && (a.Promise = wd.default), a.Promise.resolve = Dd, a.Promise.reject = Ed, a.Promise.all = Fd, a.Promise.race = Hd) })(self);
        (function(a) { a.Array.prototype.includes || a.Object.defineProperty(a.Array.prototype, "includes", { enumerable: !1, configurable: !0, writable: !0, value: ma }) })(self);
        (function(a) {
            var b = a.Map,
                c = new b;
            if (c.set(0, 0) !== c) {
                var d = c.set;
                a.Object.defineProperty(b.prototype, "set", { enumerable: !1, configurable: !0, writable: !0, value: function() { d.apply(this, arguments); return this } })
            }
        })(self);
        (function(a) {
            var b = a.WeakMap,
                c = new b;
            if (c.set({}, 0) !== c) {
                var d = c.set;
                a.Object.defineProperty(b.prototype, "set", { enumerable: !1, configurable: !0, writable: !0, value: function() { d.apply(this, arguments); return this } })
            }
        })(self);
        (function(a) {
            var b = a.Set,
                c = new b;
            if (c.add(0) !== c) {
                var d = c.add;
                a.Object.defineProperty(b.prototype, "add", { enumerable: !1, configurable: !0, writable: !0, value: function() { d.apply(this, arguments); return this } })
            }
        })(self);
        (function(a) { a.String.prototype.startsWith || a.Object.defineProperty(a.String.prototype, "startsWith", { enumerable: !1, configurable: !0, writable: !0, value: Od }) })(self);
        if (self.document) {
            Ka();
            var Pd = self,
                Qd = Pd.HTMLDocument || Pd.Document;
            Qd && !Qd.prototype.contains && Pd.Object.defineProperty(Qd.prototype, "contains", { enumerable: !1, configurable: !0, writable: !0, value: La });
            var Bc = self;
            Ac() && (yc = Element.prototype.getBoundingClientRect, Bc.Object.defineProperty(Bc.Element.prototype, "getBoundingClientRect", { value: zc }));
            var Rd = function() {},
                Ga = self,
                Sd = Ga.document,
                Td, Ud = Ga.customElements;
            Td = !!(Ud && Ud.define && Ud.get && Ud.whenDefined);
            var Vd;
            if (!(Vd = !Sd)) {
                var Wd;
                if (Wd = Td) Wd = -1 === Ga.HTMLElement.toString().indexOf("[native code]");
                Vd = Wd
            }
            if (!Vd) {
                var Xd = !0,
                    Yd = !1;
                if (Rd && Td) try {
                    var Zd = Ga.Reflect,
                        $d = Object.create(Rd.prototype);
                    Function.call.call(Rd, $d);
                    Yd = !(!Zd || !Zd.construct)
                } catch (a) { Xd = !1 }
                Yd ? Ia() : Xd && Ea()
            }
            var rd = self;
            if (kd(rd)) {
                var nd = rd;
                if (nd.IntersectionObserver) {
                    var ae = nd.IntersectionObserver;
                    nd.IntersectionObserver = md();
                    nd.IntersectionObserver._stub = od;
                    nd.IntersectionObserver._native = ae
                } else nd.IntersectionObserver = od, nd.IntersectionObserver._stub = od
            }
            qd();
            var be = self;
            be.ResizeObserver && !be.ResizeObserver._stub || be.ResizeObserver ||
                (be.ResizeObserver = Nd, be.ResizeObserver._stub = Nd);
            var de = self;
            de.AbortController || (Object.defineProperty(de, "AbortController", { configurable: !0, enumerable: !1, writable: !0, value: ka }), Object.defineProperty(de, "AbortSignal", { configurable: !0, enumerable: !1, writable: !0, value: la }))
        };
        var ee;

        function fe(a) {
            a = a.ownerDocument || a;
            ee && ee.ownerDocument === a || (ee = a.createElement("div"));
            return ge
        }

        function ge(a) {
            var b = ee;
            b.innerHTML = a[0];
            a = b.firstElementChild;
            b.removeChild(a);
            return a
        };

        function he() {
            this.ug = 100;
            this.gd = this.$ = 0;
            this.hb = Object.create(null)
        }
        he.prototype.has = function(a) { return !!this.hb[a] };
        he.prototype.get = function(a) { var b = this.hb[a]; if (b) return b.access = ++this.gd, b.payload };
        he.prototype.put = function(a, b) {
            this.has(a) || this.$++;
            this.hb[a] = { payload: b, access: this.gd };
            if (!(this.$ <= this.ug)) {
                a = this.hb;
                var c = this.gd + 1,
                    d;
                for (d in a) { var e = a[d].access; if (e < c) { c = e; var f = d } }
                void 0 !== f && (delete a[f], this.$--)
            }
        };
        var ie = A({ c: !0, v: !0, a: !0, ad: !0 }),
            je, ke, le = /[?&]amp_js[^&]*/,
            me = /[?&]amp_gsa[^&]*/,
            ne = /[?&]amp_r[^&]*/,
            oe = /[?&]amp_kit[^&]*/,
            pe = /[?&]usqp[^&]*/,
            qe = ["javascript:", "data:", "vbscript:"];

        function R(a, b) { je || (je = self.document.createElement("a"), ke = self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new he)); return re(je, a, b ? null : ke) }

        function re(a, b, c) {
            if (c && c.has(b)) return c.get(b);
            a.href = b;
            a.protocol || (a.href = a.href);
            var d = { href: a.href, protocol: a.protocol, host: a.host, hostname: a.hostname, port: "0" == a.port ? "" : a.port, pathname: a.pathname, search: a.search, hash: a.hash, origin: null };
            "/" !== d.pathname[0] && (d.pathname = "/" + d.pathname);
            if ("http:" == d.protocol && 80 == d.port || "https:" == d.protocol && 443 == d.port) d.port = "", d.host = d.hostname;
            d.origin = a.origin && "null" != a.origin ? a.origin : "data:" != d.protocol && d.host ? d.protocol + "//" + d.host : d.href;
            c && c.put(b,
                d);
            return d
        }

        function se(a, b, c) {
            if (!b) return a;
            var d = a.split("#", 2),
                e = d[0].split("?", 2),
                f = e[0] + (e[1] ? c ? "?" + b + "&" + e[1] : "?" + e[1] + "&" + b : "?" + b);
            return f += d[1] ? "#" + d[1] : ""
        }

        function te(a, b) { return se(a, ue(b)) }

        function ue(a) {
            var b = [],
                c;
            for (c in a) {
                var d = a[c];
                if (null != d)
                    if (w(d))
                        for (var e = 0; e < d.length; e++) {
                            var f = d[e];
                            b.push(encodeURIComponent(c) + "=" + encodeURIComponent(f))
                        } else b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
            }
            return b.join("&")
        }

        function ve(a) { "string" == typeof a && (a = R(a)); return "https:" == a.protocol || "localhost" == a.hostname || "127.0.0.1" == a.hostname || Qa(a.hostname, ".localhost") }

        function we(a, b, c) {
            var d = c = void 0 === c ? "source" : c;
            J(null != a, "%s %s must be available", b, d);
            J(ve(a) || /^(\/\/)/.test(a), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', b, d, a);
            return a
        }

        function xe(a) { var b = a.indexOf("#"); return -1 == b ? a : a.substring(0, b) }

        function S(a) { "string" == typeof a && (a = R(a)); return mb.cdnProxyRegex.test(a.origin) }

        function ye(a) { if (!a) return !0; "string" == typeof a && (a = R(a)); return !qe.includes(a.protocol) }

        function ze(a) {
            var b = R(a);
            a = Ae(b.search);
            return b.origin + b.pathname + a + b.hash
        }

        function Ae(a) { if (!a || "?" == a) return ""; var b = a.replace(le, "").replace(me, "").replace(ne, "").replace(oe, "").replace(pe, "").replace(/^[?&]/, ""); return b ? "?" + b : "" }

        function Be(a) {
            "string" == typeof a && (a = R(a));
            if (!S(a)) return a.href;
            var b = a.pathname.split("/");
            J(ie[b[1]], "Unknown path prefix in url %s", a.href);
            var c = b[2],
                d = "s" == c ? "https://" + decodeURIComponent(b[3]) : "http://" + decodeURIComponent(c);
            J(0 < d.indexOf("."), "Expected a . in origin %s", d);
            b.splice(1, "s" == c ? 3 : 2);
            return d + b.join("/") + Ae(a.search) + (a.hash || "")
        }

        function Ce(a) { return R(Be(a)).origin }

        function De(a, b) {
            "string" == typeof b && (b = R(b));
            if ("function" == typeof URL) var c = (new URL(a, b.href)).toString();
            else {
                c = a;
                var d = b;
                "string" == typeof d && (d = R(d));
                c = c.replace(/\\/g, "/");
                var e = R(c);
                c = c.toLowerCase().startsWith(e.protocol) ? e.href : c.startsWith("//") ? d.protocol + c : c.startsWith("/") ? d.origin + c : d.origin + d.pathname.replace(/\/[^/]*$/, "/") + c
            }
            return c
        }

        function Ee(a, b) {
            Fe(b);
            var c = Ce(a.location.href);
            a = encodeURIComponent("__amp_source_origin") + "=" + encodeURIComponent(c);
            return se(b, a, void 0)
        }

        function Fe(a) {
            var b = R(a),
                c = B(b.search);
            J(!("__amp_source_origin" in c), "Source origin is not allowed in %s", a)
        };

        function Ge(a, b) { return !!He(a)[b] }

        function Ie(a, b, c, d) {
            var e = Ge(a, b),
                f = !(void 0 !== c ? !c : e);
            if (f != e && (He(a)[b] = f, !d)) {
                var h = Je(a);
                h[b] = f;
                var k = [],
                    l;
                for (l in h) k.push((!1 === h[l] ? "-" : "") + l);
                try { "localStorage" in a && a.localStorage.setItem("amp-experiment-toggles", k.join(",")) } catch (m) { D().error("EXPERIMENTS", "Failed to save experiments to localStorage.") }
                D().warn("EXPERIMENTS", '"%s" experiment %s for the domain "%s". See: https://amp.dev/documentation/guides-and-tutorials/learn/experimental', b, f ? "enabled" : "disabled", a.location.hostname)
            }
            return f
        }

        function He(a) {
            if (a.__AMP__EXPERIMENT_TOGGLES) return a.__AMP__EXPERIMENT_TOGGLES;
            a.__AMP__EXPERIMENT_TOGGLES = Object.create(null);
            var b = a.__AMP__EXPERIMENT_TOGGLES;
            if (a.AMP_CONFIG)
                for (var c in a.AMP_CONFIG) { var d = a.AMP_CONFIG[c]; "number" === typeof d && 0 <= d && 1 >= d && (b[c] = Math.random() < d) }
            if (a.AMP_CONFIG && Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"]) && 0 < a.AMP_CONFIG["allow-doc-opt-in"].length) {
                var e = a.AMP_CONFIG["allow-doc-opt-in"],
                    f = a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
                if (f) { var h = f.getAttribute("content").split(","); for (c = 0; c < h.length; c++) - 1 != e.indexOf(h[c]) && (b[h[c]] = !0) }
            }
            Object.assign(b, Je(a));
            if (a.AMP_CONFIG && Array.isArray(a.AMP_CONFIG["allow-url-opt-in"]) && 0 < a.AMP_CONFIG["allow-url-opt-in"].length) {
                c = a.AMP_CONFIG["allow-url-opt-in"];
                a = B(a.location.originalHash || a.location.hash);
                for (var k = 0; k < c.length; k++) { var l = a["e-" + c[k]]; "1" == l && (b[c[k]] = !0); "0" == l && (b[c[k]] = !1) }
            }
            return b
        }

        function Je(a) {
            var b = "";
            try { "localStorage" in a && (b = a.localStorage.getItem("amp-experiment-toggles")) } catch (e) { H().warn("EXPERIMENTS", "Failed to retrieve experiments from localStorage.") }
            var c = b ? b.split(/\s*,\s*/g) : [];
            a = Object.create(null);
            for (var d = 0; d < c.length; d++) 0 != c[d].length && ("-" == c[d][0] ? a[c[d].substr(1)] = !1 : a[c[d]] = !0);
            return a
        };
        var Ke, Le = "Webkit webkit Moz moz ms O o".split(" "),
            Me = { getPropertyPriority: function() { return "" }, getPropertyValue: function() { return "" } };

        function Ne(a, b, c) {
            if (b.startsWith("--")) return b;
            Ke || (Ke = y());
            var d = Ke[b];
            if (!d || c) {
                d = b;
                if (void 0 === a[b]) {
                    var e = b.charAt(0).toUpperCase() + b.slice(1);
                    a: {
                        for (var f = 0; f < Le.length; f++) { var h = Le[f] + e; if (void 0 !== a[h]) { e = h; break a } }
                        e = ""
                    }
                    var k = e;
                    void 0 !== a[k] && (d = k)
                }
                c || (Ke[b] = d)
            }
            return d
        }

        function Oe(a, b) { a = a.style; for (var c in b) a.setProperty(Ne(a, c), String(b[c]), "important") }

        function U(a, b, c, d) {
            if (b = Ne(a.style, b, void 0)) {
                var e = d ? c + d : c;
                b.startsWith("--") ? a.style.setProperty(b, e) : a.style[b] = e
            }
        }

        function Pe(a, b) { for (var c in b) U(a, c, b[c]) }

        function Qe(a, b) {
            void 0 === b && (b = a.hasAttribute("hidden"));
            b ? a.removeAttribute("hidden") : a.setAttribute("hidden", "")
        };

        function Re(a) {
            if (!a.hasAttribute("src") && 0 == "srcset" in a) {
                var b = a.getAttribute("srcset"),
                    c = /\S+/.exec(b);
                null != c && a.setAttribute("src", c[0])
            }
        }

        function Se(a, b, c) {
            var d = a.createElement("canvas");
            d.width = b;
            d.height = c;
            return d.toDataURL()
        };
        var Te = ['<i-amphtml-sizer class=i-amphtml-sizer slot=i-amphtml-svc><img alt="" role=presentation aria-hidden=true class=i-amphtml-intrinsic-sizer></i-amphtml-sizer>'],
            Ue = { NODISPLAY: "nodisplay", FIXED: "fixed", FIXED_HEIGHT: "fixed-height", RESPONSIVE: "responsive", CONTAINER: "container", FILL: "fill", FLEX_ITEM: "flex-item", FLUID: "fluid", INTRINSIC: "intrinsic" },
            Ve = { "AMP-PIXEL": { width: "0px", height: "0px" }, "AMP-ANALYTICS": { width: "1px", height: "1px" }, "AMP-AUDIO": null, "AMP-SOCIAL-SHARE": { width: "60px", height: "44px" } },
            We = { "AMP-AD": !0, "AMP-ANIM": !0, "AMP-EMBED": !0, "AMP-FACEBOOK": !0, "AMP-FACEBOOK-COMMENTS": !0, "AMP-FACEBOOK-PAGE": !0, "AMP-GOOGLE-DOCUMENT-EMBED": !0, "AMP-IFRAME": !0, "AMP-IMG": !0, "AMP-INSTAGRAM": !0, "AMP-LIST": !0, "AMP-PINTEREST": !0, "AMP-PLAYBUZZ": !0, "AMP-TWITTER": !0 },
            Xe = /^amp\-(video|.+player)|AMP-BRIGHTCOVE|AMP-DAILYMOTION|AMP-YOUTUBE|AMP-VIMEO|AMP-IMA-VIDEO/i,
            Ye = null;

        function Ze(a) {
            for (var b in Ue)
                if (Ue[b] == a) return Ue[b]
        }

        function $e(a) { return "fixed" == a || "fixed-height" == a || "responsive" == a || "fill" == a || "flex-item" == a || "fluid" == a || "intrinsic" == a }

        function af(a) { if ("number" == typeof a) return a + "px"; if (a && /^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(a)) return /^\d+(\.\d+)?$/.test(a) ? a + "px" : a }

        function bf(a) { J(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)$/.test(a), "Invalid length value: %s", a); return J(/[a-z]+/i.exec(a), "Failed to read units from %s", a)[0] }

        function cf(a) { a = parseFloat(a); return Hb(a) ? a : void 0 };
        var df;

        function ef(a, b, c, d) {
            var e = a,
                f = c;
            var h = function(m) { try { return f(m) } catch (n) { throw self.__AMP_REPORT_ERROR(n), n; } };
            var k = ff(),
                l = !1;
            d && (l = d.capture);
            e.addEventListener(b, h, k ? d : l);
            return function() {
                e && e.removeEventListener(b, h, k ? d : l);
                h = e = f = null
            }
        }

        function ff() {
            if (void 0 !== df) return df;
            df = !1;
            try {
                var a = {get capture() { df = !0 } };
                self.addEventListener("test-options", null, a);
                self.removeEventListener("test-options", null, a)
            } catch (b) {}
            return df
        };

        function gf(a, b, c, d) { return ef(a, b, c, d) }

        function hf(a, b, c, d) {
            var e = c,
                f = ef(a, b, function(h) { try { e(h) } finally { e = null, f() } }, d);
            return f
        }

        function jf(a, b) {
            var c, d = new Promise(function(e) { c = hf(a, "click", e, void 0) });
            d.then(c, c);
            b && b(c);
            return d
        }

        function kf(a) { return !!(a.complete || "complete" == a.readyState || lf(a) && 0 < a.readyState || a.document && "complete" == a.document.readyState) }

        function mf(a) {
            var b, c;
            if (kf(a)) return Promise.resolve(a);
            var d = lf(a);
            return d && a.__AMP_MEDIA_LOAD_FAILURE_SRC === a.currentSrc ? Promise.reject(a) : (new Promise(function(e, f) {
                b = d ? hf(a, "loadedmetadata", e, { capture: !0 }) : hf(a, "load", e);
                if (a.tagName) {
                    var h = a;
                    if (d && !a.hasAttribute("src") && (h = Vb(a, function(k) { return "SOURCE" === k.tagName }), !h)) return f(Error("Media has no source."));
                    c = hf(h, "error", f)
                }
            })).then(function() { c && c(); return a }, function() {
                b && b();
                lf(a) && (a.__AMP_MEDIA_LOAD_FAILURE_SRC = a.currentSrc || !0);
                var e = a;
                e && e.src && (e = e.src);
                throw D().createError("Failed to load:", e);
            })
        }

        function lf(a) { return "AUDIO" === a.tagName || "VIDEO" === a.tagName };

        function V(a) {
            this.element = a;
            this.win = a.ownerDocument.defaultView;
            this.Bd = this.lc = null
        }
        V.V1 = function() { return !1 };
        V.deferredMount = function() { return !0 };
        V.prerenderAllowed = function() { return !1 };
        V.usesLoading = function() { return !1 };
        V.createLoaderLogoCallback = function() { return {} };
        V.getBuildPriority = function() { return 0 };
        V.getPreconnects = function() { return null };
        V.requiresShadowDom = function() { return !1 };
        g = V.prototype;
        g.signals = function() { return this.element.signals() };
        g.getDefaultActionAlias = function() { return this.Bd };
        g.getLayoutPriority = function() { return 0 };
        g.updateLayoutPriority = function(a) { this.element.getResources().updateLayoutPriority(this.element, a) };
        g.getLayout = function() { return this.element.getLayout() };
        g.getLayoutBox = function() { return this.element.getLayoutBox() };
        g.getLayoutSize = function() { return this.element.getLayoutSize() };
        g.getWin = function() { return this.win };
        g.getAmpDoc = function() { return this.element.getAmpDoc() };
        g.getVsync = function() { return id(this.win) };
        g.getConsentPolicy = function() {
            var a = null;
            this.element.hasAttribute("data-block-on-consent") && (a = this.element.getAttribute("data-block-on-consent") || "default");
            return a
        };
        g.isLayoutSupported = function(a) { return "nodisplay" == a };
        g.isAlwaysFixed = function() { return !1 };
        g.upgradeCallback = function() { return null };
        g.buildCallback = function() {};
        g.preconnectCallback = function() {};
        g.attachedCallback = function() {};
        g.detachedCallback = function() {};
        g.setAsContainer = function(a) { this.element.setAsContainerInternal(a) };
        g.removeAsContainer = function() { this.element.removeAsContainerInternal() };
        g.isBuildRenderBlocking = function() { return !1 };
        g.createPlaceholderCallback = function() { return null };
        g.renderOutsideViewport = function() { return "inabox" == C(this.win).runtime || 3 };
        g.idleRenderOutsideViewport = function() { return !1 };
        g.ensureLoaded = function() {};
        g.setReadyState = function(a, b) { this.element.setReadyStateInternal(a, b) };
        g.mountCallback = function() {};
        g.unmountCallback = function() {};
        g.isRelayoutNeeded = function() { return !1 };
        g.layoutCallback = function() { return p() };
        g.firstLayoutCompleted = function() { this.togglePlaceholder(!1) };
        g.pauseCallback = function() {};
        g.resumeCallback = function() {};
        g.unlayoutCallback = function() { return !1 };
        g.unlayoutOnPause = function() { return !1 };
        g.reconstructWhenReparented = function() { return !0 };
        g.loadPromise = function(a) { return mf(a) };

        function nf(a) { a.lc || (a.lc = a.win.Object.create(null)) }
        g.registerAction = function(a, b, c) {
            var d = c = void 0 === c ? 2 : c;
            nf(this);
            this.lc[a] = { handler: b, minTrust: d }
        };
        g.registerDefaultAction = function(a, b, c) {
            var d = void 0 === b ? "activate" : b;
            this.registerAction(d, a, void 0 === c ? 2 : c);
            this.Bd = d
        };
        g.executeAction = function(a) {
            var b = a.method;
            "activate" === b && (b = this.Bd || b);
            nf(this);
            var c = this.lc[b];
            J(c, "Method not found: " + b + " in " + this.element.tagName);
            b = c.handler;
            if (a.satisfiesTrust(c.minTrust)) return b(a)
        };
        g.propagateAttributes = function(a, b, c) {
            a = w(a) ? a : [a];
            for (var d = 0; d < a.length; d++) {
                var e = a[d],
                    f = this.element.getAttribute(e);
                null !== f ? b.setAttribute(e, f) : c && b.removeAttribute(e)
            }
        };
        g.forwardEvents = function(a, b) {
            var c = this,
                d = (w(a) ? a : [a]).map(function(e) { return gf(b, e, function(f) { ec(c.element, e, f.data || {}) }) });
            return function() { return d.forEach(function(e) { return e() }) }
        };
        g.getPlaceholder = function() { return this.element.getPlaceholder() };
        g.togglePlaceholder = function(a) { this.element.togglePlaceholder(a) };
        g.getFallback = function() { return this.element.getFallback() };
        g.toggleFallback = function(a) { this.element.toggleFallback(a) };
        g.toggleLoading = function(a, b) { this.element.toggleLoading(a, void 0 === b ? !1 : b) };
        g.getOverflowElement = function() { return this.element.getOverflowElement() };
        g.renderStarted = function() { this.element.renderStarted() };
        g.getRealChildNodes = function() { return this.element.getRealChildNodes() };
        g.getRealChildren = function() { return this.element.getRealChildren() };
        g.applyFillContent = function(a, b) {
            a.classList.add("i-amphtml-fill-content");
            b && a.classList.add("i-amphtml-replaced-content")
        };
        g.getViewport = function() { return jd(this.getAmpDoc()) };
        g.getIntersectionElementLayoutBox = function() { return this.getLayoutBox() };
        g.collapse = function() { fd(this.getAmpDoc()).collapseElement(this.element) };
        g.attemptCollapse = function() { return fd(this.getAmpDoc()).attemptCollapse(this.element) };
        g.forceChangeHeight = function(a) { fd(this.getAmpDoc()).forceChangeSize(this.element, a, void 0) };
        g.attemptChangeHeight = function(a) { return fd(this.getAmpDoc()).requestChangeSize(this.element, a, void 0) };
        g.attemptChangeSize = function(a, b, c) { return fd(this.getAmpDoc()).requestChangeSize(this.element, a, b, void 0, c) };
        g.measureElement = function(a) { return fd(this.getAmpDoc()).measureElement(a) };
        g.mutateElement = function(a, b) { return this.measureMutateElement(null, a, b) };
        g.measureMutateElement = function(a, b, c) { return fd(this.getAmpDoc()).measureMutateElement(c || this.element, a, b) };
        g.mutateElementSkipRemeasure = function(a) { return fd(this.getAmpDoc()).mutateElement(this.element, a, !0) };
        g.collapsedCallback = function() {};
        g.expand = function() { fd(this.getAmpDoc()).expandElement(this.element) };
        g.mutatedAttributesCallback = function() {};
        g.onLayoutMeasure = function() {};
        g.user = function() { return D(this.element) };
        g.getApi = function() { return this };
        var of = { PRERENDER: "prerender", VISIBLE: "visible", HIDDEN: "hidden", PAUSED: "paused", INACTIVE: "inactive" };
        /*

         Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
         Use of this source code is governed by a BSD-style
         license that can be found in the LICENSE file or at
         https://developers.google.com/open-source/licenses/bsd */
        var pf = { "amp-dynamic-css-classes": "[custom-element=amp-dynamic-css-classes]", variant: "amp-experiment", "amp-story-render": "amp-story[standalone]" };

        function qf(a) { var b = rf(a).map(function(c) { var d = Nc(a, c).then(function(e) { return e && "function" == typeof e.whenReady ? e.whenReady().then(function() { return e }) : e }); return O(a).timeoutPromise(3E3, d, "Render timeout waiting for service " + c + " to be ready.") }); return Promise.all(b) }

        function rf(a) { var b = a.document; return Object.keys(pf).filter(function(c) { return b.querySelector(pf[c]) }) };

        function sf(a, b, c, d, e) {
            var f = a.getHeadNode(),
                h = tf(f, uf(f, b), d || !1, e || null);
            if (c) {
                var k = a.getRootNode();
                if (vf(k, h)) c(h);
                else var l = setInterval(function() { vf(k, h) && (clearInterval(l), c(h)) }, 4)
            }
        }

        function tf(a, b, c, d) {
            var e = a.__AMP_CSS_SM;
            e || (e = a.__AMP_CSS_SM = y());
            var f = !c && d && "amp-custom" != d && "amp-keyframes" != d,
                h = c ? "amp-runtime" : f ? "amp-extension=" + d : null;
            if (h) { var k = wf(a, e, h); if (k) return k.textContent !== b && (k.textContent = b), k }
            var l = (a.ownerDocument || a).createElement("style");
            l.textContent = b;
            var m = null;
            c ? l.setAttribute("amp-runtime", "") : f ? (l.setAttribute("amp-extension", d || ""), m = wf(a, e, "amp-runtime")) : (d && l.setAttribute(d, ""), m = a.lastChild);
            b = m;
            (b = void 0 === b ? null : b) ? a.insertBefore(l, b.nextSibling):
                a.insertBefore(l, a.firstChild);
            h && (e[h] = l);
            return l
        }

        function wf(a, b, c) { return b[c] ? b[c] : (a = a.querySelector("style[" + c + "]")) ? b[c] = a : null }

        function uf(a, b) { return (a = a.__AMP_CSS_TR) ? a(b) : b }
        var xf = !1;

        function yf() {
            var a = self.document,
                b = a.defaultView;
            Mb(a).then(function() { return qf(b) }).catch(function(c) { cb(c); return [] }).then(function(c) {
                xf = !0;
                a.body.getBoundingClientRect();
                zf(a);
                Gc(a).signals().signal("render-start");
                0 < c.length && hd(a.documentElement).schedulePass(1, !0);
                try {
                    var d = N(b, "performance");
                    d.tick("mbv");
                    d.flush()
                } catch (e) {}
            })
        }

        function Af(a) { xf || (xf = !0, zf(a)) }

        function zf(a) { Pe(a.body, { opacity: 1, visibility: "visible", animation: "none" }) }

        function vf(a, b) {
            var c = a.styleSheets;
            for (a = 0; a < c.length; a++)
                if (c[a].ownerNode == b) return !0;
            return !1
        };

        function Bf(a, b) { var c = b.documentElement; return a.some(function(d) { return c.hasAttribute(d) }) };

        function Cf() { var a = Df(); return function(b) { return setTimeout(b, a()) } }

        function Df() {
            var a = 0;
            return function() {
                var b = Math.pow(1.5, a++);
                var c = b * (c || .3) * Math.random();
                .5 < Math.random() && (c *= -1);
                b += c;
                return 1E3 * b
            }
        };

        function Ef(a, b) {
            var c = !1;
            b = void 0 === b ? {} : b;
            c = void 0 === c ? !0 : c;
            var d = b,
                e = c;
            ad(a, "amp-analytics-instrumentation", "amp-analytics").then(function(f) { f && f.triggerEventForTarget(a, "user-error", d, e) })
        };
        var Ff = self.__AMP_ERRORS || [];
        self.__AMP_ERRORS = Ff;

        function Gf(a) { Gf = Cf(); return Gf(a) }

        function Hf(a) { try { return JSON.stringify(a) } catch (b) { return String(a) } }
        var If;

        function Jf(a, b) {
            try {
                if (a)
                    if (void 0 !== a.message) a = ab(a);
                    else {
                        var c = a;
                        a = Error(Hf(c));
                        a.origError = c
                    }
                else a = Error("Unknown error");
                if (a.reported) return a;
                a.reported = !0;
                if (a.messageArray) { var d, e = Oa(a.messageArray, function(k) { return null == (d = k) ? void 0 : d.tagName }); - 1 < e && (a.associatedElement = a.messageArray[e]) }
                var f = b || a.associatedElement;
                f && f.classList && (f.classList.add("i-amphtml-error"), C().development && (f.classList.add("i-amphtml-element-error"), f.setAttribute("error-message", a.message)));
                if (self.console &&
                    (qb(a.message) || !a.expected)) {
                    var h = console.error || console.log;
                    a.messageArray ? h.apply(console, a.messageArray) : f ? h.call(console, a.message, f) : h.call(console, a.message)
                }
                f && f.ta && f.ta("amp:error", a.message);
                Kf.call(self, void 0, void 0, void 0, void 0, a)
            } catch (k) { setTimeout(function() { throw k; }) }
            return a
        }

        function Lf() { return Error("CANCELLED") }

        function Mf(a) { return a ? "string" == typeof a ? a.startsWith("BLOCK_BY_CONSENT") : "string" == typeof a.message ? a.message.startsWith("BLOCK_BY_CONSENT") : !1 : !1 }

        function Nf() {
            var a = self;
            a.onerror = Kf;
            a.addEventListener("unhandledrejection", function(b) {!b.reason || "CANCELLED" !== b.reason.message && "BLOCK_BY_CONSENT" !== b.reason.message && "AbortError" !== b.reason.message ? Jf(b.reason || Error("rejected promise " + b)) : b.preventDefault() })
        }

        function Kf(a, b, c, d, e) {
            var f = this;
            !this || !this.document || e && e.expected || Af(this.document);
            if (!C().development) {
                var h = !1;
                try { h = Of() } catch (l) {}
                if (!(h && .01 < Math.random())) {
                    var k = Pf(a, b, c, d, e, h);
                    k && Gf(function() { try { return Qf(f, k).catch(function() {}) } catch (l) {} })
                }
            }
        }

        function Qf(a, b) {
            return b.pt && .9 > Math.random() ? p() : Rf(a, b).then(function(c) {
                if (!c) {
                    var d = new XMLHttpRequest;
                    d.open("POST", .1 > Math.random() ? mb.betaErrorReporting : mb.errorReporting, !0);
                    d.send(JSON.stringify(b))
                }
            })
        }

        function Rf(a, b) {
            a = cd(a);
            if (!a.isSingleDoc()) return Promise.resolve(!1);
            var c = a.getSingleDoc();
            if (!c.getRootNode().documentElement.hasAttribute("report-errors-to-viewer")) return Promise.resolve(!1);
            var d = Q(c);
            return d.hasCapability("errorReporter") ? d.isTrustedViewer().then(function(e) {
                if (!e) return !1;
                d.sendMessage("error", A({ m: b.m, a: b.a, s: b.s, el: b.el, ex: b.ex, v: b.v, pt: b.pt, jse: b.jse }));
                return !0
            }) : Promise.resolve(!1)
        }

        function Pf(a, b, c, d, e, f) {
            var h = a;
            e && (h = e.message ? e.message : String(e));
            h || (h = "Unknown error");
            a = h;
            var k = !(!e || !e.expected);
            if (!/_reported_/.test(a) && "CANCELLED" != a) {
                var l = !(self && self.window),
                    m = Math.random();
                if (-1 != a.indexOf("Failed to load:") || "Script error." == a || l)
                    if (k = !0, .001 < m) return;
                var n = qb(a);
                if (!(n && .1 < m)) {
                    h = Object.create(null);
                    h.v = C().rtvVersion;
                    h.noAmp = f ? "1" : "0";
                    h.m = a.replace("\u200b\u200b\u200b", "");
                    h.a = n ? "1" : "0";
                    h.ex = k ? "1" : "0";
                    h.dw = l ? "1" : "0";
                    var q = "1p";
                    self.context && self.context.location ?
                        (h["3p"] = "1", q = "3p") : C().runtime && (q = C().runtime);
                    h.rt = q;
                    "inabox" === q && (h.adid = C().a4aId);
                    f = self;
                    h.ca = f.AMP_CONFIG && f.AMP_CONFIG.canary ? "1" : "0";
                    f = self;
                    h.bt = f.AMP_CONFIG && f.AMP_CONFIG.type ? f.AMP_CONFIG.type : "unknown";
                    self.location.ancestorOrigins && self.location.ancestorOrigins[0] && (h.or = self.location.ancestorOrigins[0]);
                    self.viewerState && (h.vs = self.viewerState);
                    self.parent && self.parent != self && (h.iem = "1");
                    if (self.AMP && self.AMP.viewer) {
                        var t = self.AMP.viewer.getResolvedViewerUrl(),
                            x = self.AMP.viewer.maybeGetMessagingOrigin();
                        t && (h.rvu = t);
                        x && (h.mso = x)
                    }
                    If || (If = Sf());
                    h.jse = If;
                    var u = [];
                    f = self.__AMP__EXPERIMENT_TOGGLES || null;
                    for (var r in f) u.push(r + "=" + (f[r] ? "1" : "0"));
                    h.exps = u.join(",");
                    if (e) {
                        var z;
                        h.el = (null == (z = e.associatedElement) ? void 0 : z.tagName) || "u";
                        e.args && (h.args = JSON.stringify(e.args));
                        n || e.ignoreStack || !e.stack || (h.s = e.stack);
                        e.message && (e.message += " _reported_")
                    } else h.f = b || "", h.l = c || "", h.c = d || "";
                    h.r = self.document ? self.document.referrer : "";
                    h.ae = Ff.join(",");
                    h.fr = self.location.originalHash || self.location.hash;
                    "production" ===
                    h.bt && (h.pt = "1");
                    b = a;
                    25 <= Ff.length && Ff.splice(0, Ff.length - 25 + 1);
                    Ff.push(b);
                    return h
                }
            }
        }

        function Of() {
            var a = self;
            if (!a.document) return !1;
            a = a.document.querySelectorAll("script[src]");
            for (var b = 0; b < a.length; b++)
                if (!S(a[b].src.toLowerCase())) return !0;
            return !1
        }

        function Sf() {
            function a() {}
            a.prototype.t = function() { throw Error("message"); };
            var b = new a;
            try { b.t() } catch (d) { b = d.stack; if (b.startsWith("t@")) return "Safari"; if (-1 < b.indexOf(".prototype.t@")) return "Firefox"; var c = b.split("\n").pop(); if (/\bat .* \(/i.test(c)) return "IE"; if (b.startsWith("Error: message")) return "Chrome" }
            return "unknown"
        };
        var Tf = "__AMP_ACTION_MAP__" + Math.random(),
            Uf = { form: ["submit", "clear"] },
            Vf = [{ tagOrTarget: "AMP", method: "setState" }, { tagOrTarget: "*", method: "focus" }, { tagOrTarget: "*", method: "hide" }, { tagOrTarget: "*", method: "show" }, { tagOrTarget: "*", method: "toggleClass" }, { tagOrTarget: "*", method: "toggleVisibility" }],
            Wf = { button: !0, checkbox: !0, link: !0, listbox: !0, menuitem: !0, menuitemcheckbox: !0, menuitemradio: !0, option: !0, radio: !0, scrollbar: !0, slider: !0, spinbutton: !0, "switch": !0, tab: !0, treeitem: !0 };

        function Xf(a, b, c, d, e, f, h, k, l, m) {
            k = void 0 === k ? "?" : k;
            l = void 0 === l ? null : l;
            m = void 0 === m ? Math.random() : m;
            var n = k,
                q = l,
                t = m;
            this.node = a;
            this.method = b;
            this.args = c;
            this.source = d;
            this.caller = e;
            this.event = f;
            this.trust = h;
            this.actionEventType = n;
            this.tagOrTarget = q || a.tagName;
            this.sequenceId = t
        }
        Xf.prototype.satisfiesTrust = function(a) {
            if (!Hb(this.trust)) return H().error("Action", "Invalid trust for '" + this.method + "': " + this.trust), !1;
            if (this.trust < a) {
                a: switch (this.trust) {
                    case 1:
                        var b = "low";
                        break a;
                    case 3:
                        b = "high";
                        break a;
                    default:
                        b = "default"
                }
                D().error("Action", '"' + this.actionEventType + '" event with "' + b + '" trust is not allowed to invoke "' + (this.tagOrTarget.toLowerCase() + "." + this.method + '".'));
                return !1
            }
            return !0
        };

        function Yf(a, b) {
            this.ampdoc = a;
            this.X = b || a.getRootNode();
            this.ka = (this.Af = this.ampdoc.isSingleDoc() && Bf(["\u26a14email", "amp4email"], this.X)) ? Vf : null;
            this.Id = y();
            this.tf = y();
            this.addEvent("tap");
            this.addEvent("submit");
            this.addEvent("change");
            this.addEvent("input-debounced");
            this.addEvent("input-throttled");
            this.addEvent("valid");
            this.addEvent("invalid")
        }
        g = Yf.prototype;
        g.addEvent = function(a) {
            var b = this;
            if ("tap" == a) this.X.addEventListener("click", function(e) { e.defaultPrevented || b.trigger(e.target, a, e, 3) }), this.X.addEventListener("keydown", function(e) {
                var f = e.key,
                    h = e.target;
                if ("Enter" == f || " " == f) { var k = h.getAttribute("role"); if (f = k) f = k.toLowerCase(), f = Wa.call(Wf, f); var l = f;!e.defaultPrevented && l && b.trigger(h, a, e, 3) && e.preventDefault() }
            });
            else if ("submit" == a) this.X.addEventListener(a, function(e) { b.trigger(e.target, a, e, 3) });
            else if ("change" == a) this.X.addEventListener(a,
                function(e) {
                    var f = e.target;
                    Zf(e);
                    b.trigger(f, a, e, 3)
                });
            else if ("input-debounced" == a) {
                var c = ib(this.ampdoc.win, function(e) { b.trigger(e.target, a, e, 3) });
                this.X.addEventListener("input", function(e) {
                    var f = new $f(e);
                    Zf(f);
                    c(f)
                })
            } else if ("input-throttled" == a) {
                var d = hb(this.ampdoc.win, function(e) { b.trigger(e.target, a, e, 3) }, 100);
                this.X.addEventListener("input", function(e) {
                    e = new $f(e);
                    Zf(e);
                    d(e)
                })
            } else "valid" != a && "invalid" != a || this.X.addEventListener(a, function(e) { b.trigger(e.target, a, e, 3) })
        };
        g.addGlobalTarget = function(a, b) { this.Id[a] = b };
        g.addGlobalMethodHandler = function(a, b, c) { this.tf[a] = { handler: b, minTrust: void 0 === c ? 2 : c } };
        g.trigger = function(a, b, c, d, e) { return ag(this, a, b, c, d, e) };
        g.execute = function(a, b, c, d, e, f, h) {
            a = new Xf(a, b, c, d, e, f, h);
            bg(this, a)
        };
        g.installActionHandler = function(a, b) {
            "amp-" === (a.getAttribute("id") || "").substring(0, 4) || a.tagName.toLowerCase();
            if (a.__AMP_ACTION_HANDLER__) H().error("Action", "Action handler already installed for " + a);
            else {
                a.__AMP_ACTION_HANDLER__ = b;
                var c = a.__AMP_ACTION_QUEUE__;
                w(c) && O(a.ownerDocument.defaultView).delay(function() {
                    c.forEach(function(d) { try { b(d) } catch (e) { H().error("Action", "Action execution failed:", d, e) } });
                    a.__AMP_ACTION_QUEUE__.length = 0
                }, 1)
            }
        };
        g.hasAction = function(a, b, c) { return !!cg(a, b, c) };
        g.hasResolvableAction = function(a, b, c) {
            var d = this,
                e = cg(a, b, c);
            return e ? e.actionInfos.some(function(f) { return !!dg(d, f.target) }) : !1
        };
        g.hasResolvableActionForTarget = function(a, b, c, d) { var e = this; return (a = cg(a, b, d)) ? a.actionInfos.some(function(f) { return dg(e, f.target) == c }) : !1 };

        function dg(a, b) { return a.Id[b] ? a.X : a.X.getElementById(b) }
        g.setAllowlist = function(a) {
            a.every(function(b) { return b.tagOrTarget && b.method });
            this.ka = a
        };
        g.addToAllowlist = function(a, b, c) {
            var d = this;
            c && c.includes("email") !== this.Af || (this.ka || (this.ka = []), w(b) || (b = [b]), b.forEach(function(e) { d.ka.some(function(f) { return f.tagOrTarget == a && f.method == e }) || d.ka.push({ tagOrTarget: a, method: e }) }))
        };

        function ag(a, b, c, d, e, f) {
            var h = cg(b, c);
            if (!h) return !1;
            var k = Math.random(),
                l = null;
            h.actionInfos.forEach(function(m) {
                function n() {
                    var r = dg(a, q);
                    if (r) return r = new Xf(r, t, u, b, h.node, d, e, c, r.tagName || q, k), bg(a, r);
                    a.Va('Target "' + q + '" not found for action [' + x + "].")
                }
                var q = m.target,
                    t = m.method,
                    x = m.str,
                    u = eg(m.args, d, f);
                l = l ? l.then(n) : n()
            });
            return 1 <= h.actionInfos.length
        }
        g.Va = function(a, b) {
            if (b) throw a = D().createError("[Action] " + a), Jf(a, b), a;
            D().error("Action", a)
        };

        function bg(a, b) {
            var c = b.method,
                d = b.tagOrTarget;
            if (a.ka && !fg(b, a.ka)) return a.Va('"' + d + "." + c + '" is not allowlisted ' + JSON.stringify(a.ka) + "."), null;
            var e = a.Id[d];
            if (e) return e(b);
            var f = b.node,
                h = a.tf[c];
            if (h && b.satisfiesTrust(h.minTrust)) return h.handler(b);
            var k = f.tagName.toLowerCase();
            if ("amp-" === k.substring(0, 4)) return f.enqueAction ? f.enqueAction(b) : a.Va('Unrecognized AMP element "' + k + '".', f), null;
            var l = Uf[k];
            if ("amp-" === (f.getAttribute("id") || "").substring(0, 4) || l && -1 < l.indexOf(c)) return (a = f.__AMP_ACTION_HANDLER__) ?
                a(b) : (f.__AMP_ACTION_QUEUE__ = f.__AMP_ACTION_QUEUE__ || [], f.__AMP_ACTION_QUEUE__.push(b)), null;
            a.Va("Target (" + d + ") doesn't support \"" + c + '" action.', b.caller);
            return null
        }

        function cg(a, b, c) {
            for (; a && (!c || a != c);) {
                var d = b;
                var e = a;
                var f = d,
                    h = e[Tf];
                void 0 === h && (h = null, e.hasAttribute("on") ? (f = e.getAttribute("on"), h = gg(f, e), e[Tf] = h) : e.hasAttribute("execute") && (h = e.getAttribute("execute"), h = gg(f + ":" + h, e), e[Tf] = h));
                var k = (e = h) ? e[d] || null : null;
                if (k && !a.disabled && !Tb(a, ":disabled")) return { node: a, actionInfos: k };
                a = a.parentElement
            }
            return null
        }
        g.setActions = function(a, b) {
            a.setAttribute("on", b);
            delete a[Tf]
        };

        function Zf(a) {
            var b = y(),
                c = a.target;
            void 0 !== c.value && (b.value = c.value);
            "INPUT" == c.tagName && (b.valueAsNumber = Number(c.value));
            void 0 !== c.checked && (b.checked = c.checked);
            if (void 0 !== c.min || void 0 !== c.max) b.min = c.min, b.max = c.max;
            c.files && (b.files = Ma(c.files).map(function(d) { return { name: d.name, size: d.size, type: d.type } }));
            if (0 < Object.keys(b).length) try { a.detail = b } catch (d) {}
        }

        function fg(a, b) {
            var c = a.method,
                d = a.node;
            a = a.tagOrTarget;
            "activate" === c && "function" == typeof d.getDefaultActionAlias && (c = d.getDefaultActionAlias());
            var e = c.toLowerCase(),
                f = a.toLowerCase();
            return b.some(function(h) { return h.tagOrTarget.toLowerCase() !== f && "*" !== h.tagOrTarget || h.method.toLowerCase() !== e ? !1 : !0 })
        }

        function $f(a) {
            this.detail = null;
            var b = this || y(),
                c;
            for (c in a) b[c] = "function" === typeof a[c] ? hg : a[c]
        }

        function hg() {}

        function gg(a, b) {
            var c = ig.bind(null, a, b),
                d = jg.bind(null, a, b);
            b = null;
            var e = new kg(a);
            do {
                var f = e.next();
                if (f.type != lg && (f.type != mg || ";" != f.value))
                    if (f.type == ng || f.type == og) {
                        var h = f.value;
                        d(e.next(), [mg], ":");
                        var k = [];
                        do {
                            var l = d(e.next(), [ng, og]).value,
                                m = "activate",
                                n = null;
                            var q = e.peek();
                            if (q.type == mg && "." == q.value && (e.next(), m = d(e.next(), [ng, og]).value || m, q = e.peek(), q.type == mg && "(" == q.value)) {
                                e.next();
                                n = e;
                                var t = d,
                                    x = c,
                                    u = n.peek(),
                                    r = null;
                                if (u.type == pg) {
                                    r = y();
                                    var z = n.next().value;
                                    r.__AMP_OBJECT_STRING__ =
                                        z;
                                    t(n.next(), [mg], ")")
                                } else {
                                    do {
                                        var G = z = n.next();
                                        u = G.type;
                                        G = G.value;
                                        if (u != mg || "," != G && ")" != G)
                                            if (u == ng || u == og) {
                                                t(n.next(), [mg], "=");
                                                z = t(n.next(!0), [ng, og]);
                                                var Ca = [z];
                                                if (z.type == og)
                                                    for (u = n.peek(); u.type == mg && "." == u.value; u = n.peek()) n.next(), z = t(n.next(!1), [og]), Ca.push(z);
                                                u = qg(Ca);
                                                r || (r = y());
                                                r[G] = u;
                                                u = n.peek();
                                                x(u.type == mg && ("," == u.value || ")" == u.value), "Expected either [,] or [)]")
                                            } else x(!1, "; unexpected token [" + (z.value || "") + "]")
                                    } while (z.type != mg || ")" != z.value)
                                }
                                n = r
                            }
                            k.push({
                                event: h,
                                target: l,
                                method: m,
                                args: n,
                                str: a
                            });
                            q = e.peek()
                        } while (q.type == mg && "," == q.value && e.next());
                        b || (b = y());
                        b[h] = k
                    } else c(!1, "; unexpected token [" + (f.value || "") + "]")
            } while (f.type != lg);
            return b
        }

        function qg(a) { return 0 == a.length ? null : 1 == a.length ? a[0].value : { expression: a.map(function(b) { return b.value }).join(".") } }

        function eg(a, b, c) {
            if (!a) return a;
            var d = c || A({});
            b && (b = b.detail) && (d.event = b);
            var e = y();
            Object.keys(a).forEach(function(f) {
                var h = a[f];
                if ("object" == typeof h && h.expression) {
                    h = h.expression;
                    if ("." == h) h = d;
                    else {
                        h = h.split(".");
                        for (var k = d, l = 0; l < h.length; l++) {
                            var m = h[l];
                            if (m && k && void 0 !== k[m] && gc(k, m)) k = k[m];
                            else { k = void 0; break }
                        }
                        h = k
                    }
                    var n = h;
                    h = void 0 === n ? null : n
                }
                e[f] = d[h] ? d[h] : h
            });
            return e
        }

        function ig(a, b, c, d) { return J(c, "Invalid action definition in %s: [%s] %s", b, a, d || "") }

        function jg(a, b, c, d, e) { void 0 !== e ? ig(a, b, d.includes(c.type) && c.value == e, "; expected [" + e + "]") : ig(a, b, d.includes(c.type)); return c }
        var lg = 1,
            mg = 2,
            ng = 3,
            og = 4,
            pg = 5;

        function kg(a) {
            this.P = a;
            this.Md = -1
        }
        kg.prototype.next = function(a) {
            var b = rg(this, a || !1);
            this.Md = b.index;
            return b
        };
        kg.prototype.peek = function(a) { return rg(this, a || !1) };

        function rg(a, b) {
            var c = a.Md + 1;
            if (c >= a.P.length) return { type: lg, index: a.Md };
            var d = a.P.charAt(c);
            if (-1 != " \t\n\r\f\v\u00a0\u2028\u2029".indexOf(d)) {
                for (c++; c < a.P.length && -1 != " \t\n\r\f\v\u00a0\u2028\u2029".indexOf(a.P.charAt(c)); c++);
                if (c >= a.P.length) return { type: lg, index: c };
                d = a.P.charAt(c)
            }
            if (b && (sg(d) || "." == d && c + 1 < a.P.length && sg(a.P[c + 1]))) {
                for (var e = "." == d, f = c + 1; f < a.P.length; f++) {
                    var h = a.P.charAt(f);
                    if ("." == h) e = !0;
                    else if (!sg(h)) break
                }
                a = a.P.substring(c, f);
                a = e ? parseFloat(a) : parseInt(a, 10);
                c = f - 1;
                return {
                    type: ng,
                    value: a,
                    index: c
                }
            }
            if (-1 != ";:.()=,|!".indexOf(d)) return { type: mg, value: d, index: c };
            if (-1 != "\"'".indexOf(d)) {
                f = -1;
                for (var k = c + 1; k < a.P.length; k++)
                    if (a.P.charAt(k) == d) { f = k; break }
                if (-1 == f) return { type: 0, index: c };
                a = a.P.substring(c + 1, f);
                c = f;
                return { type: ng, value: a, index: c }
            }
            if ("{" == d) {
                var l = 1;
                f = -1;
                for (d = c + 1; d < a.P.length; d++) { var m = a.P[d]; "{" == m ? l++ : "}" == m && l--; if (0 >= l) { f = d; break } }
                if (-1 == f) return { type: 0, index: c };
                a = a.P.substring(c, f + 1);
                c = f;
                return { type: pg, value: a, index: c }
            }
            for (f = c + 1; f < a.P.length && -1 == " \t\n\r\f\x0B\u00a0\u2028\u2029;:.()=,|!\"'{}".indexOf(a.P.charAt(f)); f++);
            a = a.P.substring(c, f);
            c = f - 1;
            return !b || "true" != a && "false" != a ? sg(a.charAt(0)) ? { type: ng, value: a, index: c } : { type: og, value: a, index: c } : { type: ng, value: "true" == a, index: c }
        }

        function sg(a) { return "0" <= a && "9" >= a };

        function tg(a) { return !!a && "function" == typeof a.getFormData };
        var ug = ["GET", "POST"],
            vg = [w, Xa];

        function wg(a, b) {
            var c = Object.assign({}, b);
            if (tg(b.body)) {
                var d = b.body;
                c.headers["Content-Type"] = "multipart/form-data;charset=utf-8";
                b = d.entries();
                for (var e = [], f = b.next(); !f.done; f = b.next()) e.push(f.value);
                c.body = e
            }
            return { input: a, init: c }
        }

        function xg(a, b) {
            J(Xa(a), "Object expected: %s", a);
            if ("document" != b) return new Response(a.body, a.init);
            var c = y(),
                d = { status: 200, statusText: "OK", getResponseHeader: function(f) { return c[String(f).toLowerCase()] || null } };
            if (a.init) {
                var e = a.init;
                w(e.headers) && e.headers.forEach(function(f) {
                    var h = f[1];
                    c[String(f[0]).toLowerCase()] = String(h)
                });
                e.status && (d.status = parseInt(e.status, 10));
                e.statusText && (d.statusText = String(e.statusText))
            }
            return new Response(a.body ? String(a.body) : "", d)
        }

        function yg(a, b, c, d) {
            if (!b) return p();
            var e = d.prerenderSafe ? p() : b.whenFirstVisible(),
                f = Q(b),
                h = S(c),
                k = f.hasCapability("xhrInterceptor"),
                l = d.bypassInterceptorForDev && !1;
            return h || !k || l || !b.getRootNode().documentElement.hasAttribute("allow-xhr-interception") ? e : e.then(function() { return f.isTrustedViewer() }).then(function(m) { if (m || Ge(a, "untrusted-xhr-interception")) { var n = A({ originalRequest: wg(c, d) }); return f.sendMessageAwaitResponse("xhr", n).then(function(q) { return xg(q, d.responseType) }) } })
        }

        function zg(a, b, c) {!1 !== c.ampCors && (b = Ee(a, b)); return b }

        function Ag(a, b) {
            a = a || {};
            var c = a.method;
            void 0 === c ? c = "GET" : (c = c.toUpperCase(), ug.includes(c));
            a.method = c;
            a.headers = a.headers || A({});
            b && (a.headers.Accept = b);
            return a
        }

        function Bg(a, b, c) {
            c = c || {};
            var d = a.origin || R(a.location.href).origin;
            a = R(b).origin;
            d == a && (c.headers = c.headers || {}, c.headers["AMP-Same-Origin"] = "true");
            return c
        }

        function Cg(a) { var b = Ag(a, "application/json"); "POST" != b.method || tg(b.body) || (vg.some(function(c) { return c(b.body) }), b.headers["Content-Type"] = b.headers["Content-Type"] || "text/plain;charset=utf-8", b.body = "application/x-www-form-urlencoded" === b.headers["Content-Type"] ? ue(b.body) : JSON.stringify(b.body)); return b }

        function Dg(a) {
            return new Promise(function(b) {
                if (a.ok) return b(a);
                b = a.status;
                var c = D().createError("HTTP error " + b);
                c.retriable = 415 == b || 500 <= b && 600 > b;
                c.response = a;
                throw c;
            })
        };

        function Eg(a) {
            this.win = a;
            a = cd(a);
            this.mg = a.isSingleDoc() ? a.getSingleDoc() : null
        }
        g = Eg.prototype;
        g.Dg = function(a, b) {
            var c = arguments,
                d = this;
            return yg(this.win, this.mg, a, b).then(function(e) {
                if (e) return e;
                tg(b.body) && (b.body = b.body.getFormData());
                return d.win.fetch.apply(null, c)
            })
        };

        function Fg(a, b, c) {
            c = void 0 === c ? {} : c;
            b = zg(a.win, b, c);
            c = Bg(a.win, b, c);
            return a.Dg(b, c).then(function(d) { return d }, function(d) { var e = R(b).origin; throw D().createExpectedError("XHR", "Failed fetching (" + e + "/...):", d && d.message); })
        }
        g.fetchJson = function(a, b) { return this.fetch(a, Cg(b)) };
        g.fetchText = function(a, b) { return this.fetch(a, Ag(b, "text/plain")) };
        g.xssiJson = function(a, b) { return b ? a.text().then(function(c) { return c.startsWith(b) ? hc(c.slice(b.length)) : (D().warn("XHR", 'Failed to strip missing prefix "' + b + '" in fetch response.'), hc(c)) }) : a.json() };
        g.fetch = function(a, b) { b = Ag(b); return Fg(this, a, b).then(function(c) { return Dg(c) }) };
        g.sendSignal = function(a, b) { return Fg(this, a, b).then(function(c) { return Dg(c) }) };
        g.getCorsUrl = function(a, b) { return Ee(a, b) };

        function Gg(a) {
            Eg.call(this, a);
            this.Lb = y()
        }
        ja(Gg, Eg);
        Gg.prototype.fetch = function(a, b) {
            var c = this,
                d = !b || !b.method || "GET" === b.method,
                e = Hg(this, a, b && b.headers && b.headers.Accept || ""),
                f = !!this.Lb[e];
            if (d && f) return this.Lb[e].then(function(k) { return k.clone() });
            var h = Eg.prototype.fetch.call(this, a, b);
            d && (this.Lb[e] = h.then(function(k) { delete c.Lb[e]; return k.clone() }, function(k) { delete c.Lb[e]; throw k; }));
            return h
        };

        function Hg(a, b, c) { var d = De(b, Ce(a.win.location)); return xe(d) + c };

        function Ig(a) {
            this.B = a;
            this.h = Q(this.B);
            this.pe = null;
            this.S = O(this.B.win)
        }
        Ig.prototype.isSupported = function() { return this.h.isCctEmbedded() && this.h.isProxyOrigin() };
        Ig.prototype.getScopedCid = function(a) {
            var b = this;
            if (!this.h.isCctEmbedded()) return Promise.resolve(null);
            this.pe || (this.pe = this.Kb("https://ampcid.google.com/v1/cache:getClientId?key=AIzaSyDKtqGxnoeIqVM33Uf7hRSa3GJxuzR7mLc"));
            return this.pe.then(function(c) { return c ? Jg(b, c, a) : null })
        };
        Ig.prototype.Kb = function(a, b) {
            var c = this,
                d = b = void 0 === b ? !0 : b,
                e = A({ publisherOrigin: Ce(this.B.win.location) });
            return this.S.timeoutPromise(3E4, N(this.B.win, "xhr").fetchJson(a, { method: "POST", ampCors: !1, credentials: "include", mode: "cors", body: e }), "fetchCidTimeout").then(function(f) { return f.json().then(function(h) { if (h.optOut) return null; var k = h.publisherClientId; return !k && d && h.alternateUrl ? c.Kb(h.alternateUrl + "?key=AIzaSyDKtqGxnoeIqVM33Uf7hRSa3GJxuzR7mLc", !1) : k }) }).catch(function(f) {
                f && f.response ? f.response.json().then(function(h) {
                    H().error("CacheCidApi",
                        JSON.stringify(h))
                }) : f && "fetchCidTimeout" == f.message ? H().expectedError("CacheCidApi", f) : H().error("CacheCidApi", f);
                return null
            })
        };

        function Jg(a, b, c) { b = b + ";" + c; return N(a.B.win, "crypto").sha384Base64(b).then(function(d) { return "amp-" + d }) };

        function Kg(a, b) {
            try { var c = a.document.cookie } catch (k) { c = "" }
            var d = c;
            if (!d) return null;
            var e = d.split(";");
            for (a = 0; a < e.length; a++) {
                var f = e[a].trim(),
                    h = f.indexOf("=");
                if (c = -1 != h) c = f.substring(0, h).trim(), c = db(c, void 0) == b;
                if (c) return b = f.substring(h + 1).trim(), db(b, b)
            }
            return null
        }

        function Lg(a, b, c, d) {
            var e = { highestAvailableDomain: !0 },
                f = e = void 0 === e ? {} : e;
            if (f.allowOnProxyOrigin) J(!f.highestAvailableDomain, "Could not support highestAvailable Domain on proxy origin, specify domain explicitly");
            else {
                J(!S(a.location.href), "Should never attempt to set cookie on proxy origin: " + b);
                e = R(a.location.href).hostname.toLowerCase();
                var h = R(mb.cdn).hostname.toLowerCase();
                J(!(e == h || Qa(e, "." + h)), "Should never attempt to set cookie on proxy origin. (in depth check): " + b)
            }
            e = void 0;
            if (f.domain) e =
                f.domain;
            else if (f.highestAvailableDomain) a: if (e = a.document.head && a.document.head.querySelector("meta[name='amp-cookie-scope']")) e = e.getAttribute("content") || "", h = Ce(a.location.href), e = Qa(h, "." + e) ? e : h.split("://")[1];
                else {
                    if (!S(a.location.href)) {
                        e = a.location.hostname.split(".");
                        h = e[e.length - 1];
                        var k;
                        for (k = "-test-amp-cookie-tmp"; Kg(a, k);) k = "-test-amp-cookie-tmp0";
                        for (var l = e.length - 2; 0 <= l; l--)
                            if (h = e[l] + "." + h, Mg(a, k, "delete", Date.now() + 1E3, h), "delete" == Kg(a, k)) {
                                Mg(a, k, "delete", Date.now() - 1E3, h);
                                e = h;
                                break a
                            }
                    }
                    e = null
                }
            Mg(a, b, c, d, e, f.sameSite, f.secure)
        }

        function Mg(a, b, c, d, e, f, h) {
            "ampproject.org" == e && (c = "delete", d = 0);
            b = encodeURIComponent(b) + "=" + encodeURIComponent(c) + "; path=/" + (e ? "; domain=" + e : "") + "; expires=" + (new Date(d)).toUTCString() + (f ? "; SameSite=" + f : "") + (h ? "; Secure" : "");
            try { a.document.cookie = b } catch (k) {}
        };

        function Ng(a) {
            this.G = a.win;
            this.S = O(this.G);
            this.wd = {};
            var b = dd(a).canonicalUrl;
            this.vd = b ? R(b).origin : null
        }
        Ng.prototype.getScopedCid = function(a, b) {
            var c = this;
            if (this.wd[b]) return this.wd[b];
            var d;
            return this.wd[b] = this.S.poll(200, function() { d = Kg(c.G, "AMP_TOKEN"); return "$RETRIEVING" !== d }).then(function() {
                if ("$OPT_OUT" === d) return "$OPT_OUT";
                if (("$NOT_FOUND" !== d || !S(c.G.document.referrer)) && d && "$" === d[0]) return null;
                d && (!d || "$" !== d[0]) || Og(c, "$RETRIEVING", 3E4);
                return c.Kb("https://ampcid.google.com/v1/publisher:getClientId?key=" + a, b, d).then(function(e) {
                    var f = c.vf(e);
                    return !f && e.alternateUrl ? c.Kb(e.alternateUrl +
                        "?key=" + a, b, d).then(c.vf.bind(c)) : f
                }).catch(function(e) {
                    Og(c, "$ERROR", 3E4);
                    e && e.response ? e.response.json().then(function(f) { H().error("GoogleCidApi", JSON.stringify(f)) }) : H().error("GoogleCidApi", e);
                    return null
                })
            })
        };
        Ng.prototype.Kb = function(a, b, c) {
            b = A({ originScope: b, canonicalOrigin: this.vd });
            c && (b.securityToken = c);
            return this.S.timeoutPromise(3E4, N(this.G, "xhr").fetchJson(a, { method: "POST", ampCors: !1, credentials: "include", mode: "cors", body: b }).then(function(d) { return d.json() }))
        };
        Ng.prototype.vf = function(a) {
            if (a.optOut) return Og(this, "$OPT_OUT", 31536E6), "$OPT_OUT";
            if (a.clientId) return Og(this, a.securityToken, 31536E6), a.clientId;
            if (a.alternateUrl) return null;
            Og(this, "$NOT_FOUND", 36E5);
            return null
        };

        function Og(a, b, c) {
            if (b) {
                var d = a.G;
                a = a.G.Date.now() + c;
                Lg(d, "AMP_TOKEN", b, a)
            }
        };

        function Pg(a) {
            this.B = a;
            this.h = Q(this.B);
            this.vd = (a = dd(this.B).canonicalUrl) ? R(a).origin : null
        }
        Pg.prototype.isSupported = function() { return this.h.hasCapability("cid") ? this.h.isTrustedViewer() : Promise.resolve(!1) };
        Pg.prototype.getScopedCid = function(a, b) {
            b = A({ scope: b, clientIdApi: !!a, canonicalOrigin: this.vd });
            a && (b.apiKey = a);
            return this.h.sendMessageAwaitResponse("cid", b)
        };
        var Qg = { "+": "-", "/": "_", "=": "." };

        function Rg(a) { a = kc(a); return btoa(a).replace(/[+/=]/g, function(b) { return Qg[b] }) };
        var Sg = /^[a-zA-Z0-9-_.]+$/,
            Tg = { googleanalytics: "AMP_ECID_GOOGLE" },
            Ug = { googleanalytics: "AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM" };

        function Vg(a) {
            this.ampdoc = a;
            this.ld = null;
            this.Fd = Object.create(null);
            this.Ze = new Ig(a);
            this.jg = new Pg(a);
            this.wg = new Ng(a);
            this.kd = null;
            this.isBackupCidExpOn = Ge(this.ampdoc.win, "amp-cid-backup")
        }
        Vg.prototype.get = function(a, b, c) {
            var d = this;
            J(Sg.test(a.scope) && Sg.test(a.cookieName), "The CID scope and cookie name must only use the characters [a-zA-Z0-9-_.]+\nInstead found: %s", a.scope);
            return b.then(function() { return d.ampdoc.whenFirstVisible() }).then(function() { return Wg(d.ampdoc) }).then(function(e) { if (e) return ""; var f = Xg(d, a, c || b); return O(d.ampdoc.win).timeoutPromise(1E4, f, 'Getting cid for "' + a.scope + '" timed out').catch(function(h) { cb(h) }) })
        };
        Vg.prototype.optOut = function() { return Yg(this.ampdoc) };

        function Xg(a, b, c) {
            var d = b.scope,
                e = R(a.ampdoc.win.location.href);
            if (!S(e)) { var f = Zg(a, d); return f ? a.wg.getScopedCid(f, d).then(function(h) { return "$OPT_OUT" == h ? null : h ? ($g(a.ampdoc.win, b.cookieName || d, h), h) : ah(a, b, c) }) : ah(a, b, c) }
            return a.jg.isSupported().then(function(h) { if (h) { var k = Zg(a, d); return a.jg.getScopedCid(k, d) } return a.Ze.isSupported() && Zg(a, d) ? a.Ze.getScopedCid(d).then(function(l) { return l ? l : bh(a, c, d, e) }) : bh(a, c, d, e) })
        }

        function bh(a, b, c, d) {
            return ch(a, b).then(function(e) {
                var f = N(a.ampdoc.win, "crypto"),
                    h = f.sha384Base64;
                J(S(d), "Expected proxy origin %s", d.origin);
                var k = Ce(d);
                return h.call(f, e + k + c)
            })
        }

        function Zg(a, b) { a.kd || (a.kd = dh(a)); return a.kd[b] }

        function dh(a) {
            var b = {},
                c = a.ampdoc.getMetaByName("amp-google-client-id-api");
            c && c.split(",").forEach(function(d) {
                d = d.trim();
                if (0 < d.indexOf("=")) {
                    var e = d.split("=");
                    d = e[0].trim();
                    b[d] = e[1].trim()
                } else {
                    var f = d;
                    (d = Tg[f]) ? b[d] = Ug[f]: D().warn("CID", "Unsupported client for Google CID API: " + f + '.Please remove or correct meta[name="amp-google-client-id-api"]')
                }
            });
            return b
        }

        function Yg(a) { Q(a).sendMessage("cidOptOut", {}); return Mc(a, "storage").then(function(b) { return b.set("amp-cid-optout", !0) }) }

        function Wg(a) { return Mc(a, "storage").then(function(b) { return b.get("amp-cid-optout").then(function(c) { return !!c }) }).catch(function() { return !1 }) }

        function $g(a, b, c) {
            var d = Date.now() + 31536E6;
            Lg(a, b, c, d)
        }

        function eh(a, b, c) { Mc(a, "storage").then(function(d) { d.isViewerStorage() || d.setNonBoolean("amp-cid:" + b, c) }) }

        function fh(a, b) {
            var c = a.ampdoc,
                d = a.isBackupCidExpOn,
                e = b.disableBackup;
            a = b.scope;
            var f = b.cookieName || a,
                h = Kg(c.win, f);
            return h ? Promise.resolve(h) : d && !e ? Mc(c, "storage").then(function(k) { return k.get("amp-cid:" + f, 31536E6) }).then(function(k) { return k && "string" == typeof k ? k : null }) : Promise.resolve(null)
        }

        function ah(a, b, c) {
            var d = a.isBackupCidExpOn,
                e = a.ampdoc,
                f = e.win,
                h = b.scope,
                k = b.disableBackup,
                l = b.cookieName || h;
            return fh(a, b).then(function(m) {
                if (!m && !b.createCookieIfNotPresent) return Promise.resolve(null);
                if (m) return /^amp-/.test(m) && ($g(f, l, m), d && !k && eh(e, l, m)), Promise.resolve(m);
                if (a.Fd[h]) return a.Fd[h];
                var n = gh(f).then(function(q) { return "amp-" + q });
                Promise.all([n, c]).then(function(q) {
                    var t = q[0];
                    Kg(f, l) || ($g(f, l, t), d && !k && eh(e, l, t))
                });
                return a.Fd[h] = n
            })
        }

        function ch(a, b) {
            if (a.ld) return a.ld;
            var c = a.ampdoc.win;
            return a.ld = hh(a.ampdoc).then(function(d) {
                var e = !1;
                if (d && !ih(d)) {
                    var f = Promise.resolve(d.cid);
                    jh(d) && (e = !0)
                } else f = N(c, "crypto").sha384Base64(kh(c)), e = !0;
                e && f.then(function(h) { lh(a.ampdoc, b, h) });
                return f
            })
        }

        function lh(a, b, c) {
            var d = a.win;
            dc(d) ? mh(a, nh(c)) : b.then(function() { try { d.localStorage.setItem("amp-cid", nh(c)) } catch (e) {} })
        }

        function mh(a, b) {
            var c = Q(a);
            return c.isTrustedViewer().then(function(d) {
                if (d) return H().expectedError("CID", "Viewer does not provide cap=cid"), c.sendMessageAwaitResponse("cid", b).then(function(e) {
                    var f;
                    if (f = e) {
                        try { var h = hc(e) } catch (k) { h = null }
                        f = !h
                    }
                    return f ? (H().expectedError("CID", "invalid cid format"), JSON.stringify(A({ time: Date.now(), cid: e }))) : e
                })
            })
        }

        function nh(a) { return JSON.stringify(A({ time: Date.now(), cid: a })) }

        function hh(a) {
            var b = a.win;
            try { var c = b.localStorage.getItem("amp-cid") } catch (e) {}
            var d = Promise.resolve(c);
            !c && dc(b) && (d = mh(a));
            return d.then(function(e) {
                if (!e) return null;
                e = hc(e);
                return { time: e.time, cid: e.cid }
            })
        }

        function ih(a) {
            var b = a.time,
                c = Date.now();
            return b + 31536E6 < c
        }

        function jh(a) { a = a.time; var b = Date.now(); return a + 864E5 < b }

        function kh(a) {
            var b;
            if ((b = (b = a.crypto) || a.msCrypto) && b.getRandomValues) {
                var c = new Uint8Array(16);
                b.getRandomValues(c);
                b = c
            } else b = null;
            return b ? b : String(a.location.href + Date.now() + a.Math.random() + a.screen.width + a.screen.height)
        }

        function gh(a) { var b = kh(a); return "string" == typeof b ? N(a, "crypto").sha384Base64(b) : oa(function() { return Rg(b).replace(/\.+$/, "") }) };

        function oh(a) {
            this.G = a;
            var b = null,
                c = !1;
            a.crypto && (a.crypto.subtle ? b = a.crypto.subtle : a.crypto.webkitSubtle && (b = a.crypto.webkitSubtle, c = !0));
            this.pkcsAlgo = { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } };
            this.subtle = b;
            this.Vg = c;
            this.Yb = null
        }
        g = oh.prototype;
        g.sha384 = function(a) {
            var b = this;
            "string" === typeof a && (a = jc(a));
            if (!this.subtle || this.Yb) return (this.Yb || ph(this)).then(function(c) { return c(a) });
            try { return this.subtle.digest({ name: "SHA-384" }, a).then(function(c) { return new Uint8Array(c) }, function(c) { c.message && 0 > c.message.indexOf("secure origin") && D().error("Crypto", "SubtleCrypto failed, fallback to closure lib.", c); return ph(b).then(function() { return b.sha384(a) }) }) } catch (c) {
                return H().error("Crypto", "SubtleCrypto failed, fallback to closure lib.",
                    c), ph(this).then(function() { return b.sha384(a) })
            }
        };
        g.sha384Base64 = function(a) { return this.sha384(a).then(function(b) { return Rg(b) }) };
        g.uniform = function(a) { return this.sha384(a).then(function(b) { for (var c = 0, d = 2; 0 <= d; d--) c = (c + b[d]) / 256; return c }) };

        function ph(a) { return a.Yb ? a.Yb : a.Yb = ed(a.G).preloadExtension("amp-crypto-polyfill").then(function() { return N(a.G, "crypto-polyfill") }) }
        g.isPkcsAvailable = function() { return !!this.subtle && !1 !== this.G.isSecureContext };
        g.importPkcsKey = function(a) { this.isPkcsAvailable(); var b = this.Vg ? ic(JSON.stringify(a)) : a; return this.subtle.importKey("jwk", b, this.pkcsAlgo, !0, ["verify"]) };
        g.verifyPkcs = function(a, b, c) { this.isPkcsAvailable(); return this.subtle.verify(this.pkcsAlgo, a, b, c) };
        var qh = ["prefetch", "preload", "preconnect", "dns-prefetch"];

        function rh(a) {
            this.B = a;
            this.le = this.Nd = null
        }
        rh.prototype.get = function() {
            if (this.Nd) return this.Nd;
            var a = this.B,
                b = a.getUrl(),
                c = Be(b),
                d = a.getRootNode();
            b = d && d.AMP && d.AMP.canonicalUrl;
            if (!b) {
                var e = d.querySelector("link[rel=canonical]");
                b = e ? R(e.href).href : c
            }
            var f = String(Math.floor(1E4 * a.win.Math.random())),
                h = sh(a.win.document);
            d = th(a.win.document);
            var k = uh(a);
            return this.Nd = {get sourceUrl() { return Be(a.getUrl()) }, canonicalUrl: b, pageViewId: f, get pageViewId64() { this.le || (this.le = gh(a.win)); return this.le }, linkRels: h, viewport: d, replaceParams: k }
        };

        function sh(a) {
            var b = y();
            if (a.head) {
                a = a.head.querySelectorAll("link[rel]");
                for (var c = {}, d = 0; d < a.length; c = { zb: c.zb }, d++) {
                    var e = a[d];
                    c.zb = e.href;
                    var f = e.getAttribute("rel");
                    f && c.zb && f.split(/\s+/).forEach(function(h) {
                        return function(k) {
                            if (-1 == qh.indexOf(k)) {
                                var l = b[k];
                                l ? (w(l) || (l = b[k] = [l]), l.push(h.zb)) : b[k] = h.zb
                            }
                        }
                    }(c))
                }
            }
            return b
        }

        function th(a) { var b = a.head.querySelector('meta[name="viewport"]'); return b ? b.getAttribute("content") : null }

        function uh(a) {
            var b;
            (b = !a.isSingleDoc()) || (b = a.win.location.href, "string" == typeof b && (b = R(b)), b = "a" != (S(b) ? b.pathname.split("/", 2)[1] : null));
            if (b) return null;
            a = R(a.win.location.href);
            var c = B(a.search).amp_r;
            return void 0 === c ? null : B(c)
        };
        var vh = null,
            wh = ["gclid", "gclsrc"],
            xh = [/^t.co$/];

        function yh() { return J(vh, "E#19457 trackImpressionPromise") }

        function zh() {
            var a = self,
                b = new v,
                c = b.promise,
                d = b.resolve;
            vh = O(a).timeoutPromise(8E3, c, "TrackImpressionPromise timeout").catch(function(h) { H().warn("IMPRESSION", h) });
            b = Q(a.document.documentElement);
            var e = b.isTrustedViewer(),
                f = b.getReferrerUrl().then(function(h) { return Ah(h) });
            Promise.all([e, f]).then(function(h) {
                var k = h[1];
                if (h[0] || k || Ge(a, "alp")) {
                    var l = Bh(a),
                        m = Ch(a);
                    Promise.all([l, m]).then(function() { d() }, function() {})
                } else d()
            })
        }

        function Bh(a) { var b = Q(a.document.documentElement); return b.getParam("replaceUrl") ? b.hasCapability("replaceUrl") ? b.sendMessageAwaitResponse("getReplaceUrl", void 0).then(function(c) { c && "object" == typeof c ? b.replaceUrl(c.replaceUrl || null) : H().warn("IMPRESSION", "get invalid replaceUrl response") }, function(c) { H().warn("IMPRESSION", "Error request replaceUrl from viewer", c) }) : (b.replaceUrl(b.getParam("replaceUrl") || null), p()) : p() }

        function Ah(a) { var b = R(a); return "https:" != b.protocol ? !1 : xh.some(function(c) { return c.test(b.hostname) }) }

        function Ch(a) {
            var b = Gc(a.document.documentElement),
                c = Q(b).getParam("click");
            if (!c) return p();
            if (0 != c.indexOf("https://")) return D().warn("IMPRESSION", "click fragment param should start with https://. Found ", c), p();
            a.location.hash && (a.location.hash = "");
            return b.whenFirstVisible().then(function() { return Dh(a, c) }).then(function(d) {
                if (d) {
                    var e = d.location;
                    (d = d.tracking_url || e) && !S(d) && ((new Image).src = d);
                    if (e && a.history.replaceState) {
                        d = Q(a.document.documentElement);
                        var f = a.location.href;
                        e = R(e);
                        e = B(e.search);
                        e = te(f, e);
                        a.history.replaceState(null, "", e);
                        d.maybeUpdateFragmentForCct()
                    }
                }
            }).catch(function(d) { D().warn("IMPRESSION", "Error on request clickUrl: ", d) })
        }

        function Dh(a, b) { return N(a, "xhr").fetchJson(b, { credentials: "include" }).then(function(c) { return 204 == c.status ? null : c.json() }) }

        function Eh(a) { return a.whenReady().then(function() { return !!a.getBody().querySelector("amp-analytics[type=googleanalytics]") }) };

        function Fh() { this.I = [] }
        Fh.prototype.peek = function() { var a = this.I.length; return a ? this.I[a - 1].item : null };
        Fh.prototype.enqueue = function(a, b) {
            if (isNaN(b)) throw Error("Priority must not be NaN.");
            for (var c = -1, d = 0, e = this.I.length; d <= e;) {
                c = Math.floor((d + e) / 2);
                if (c === this.I.length) break;
                if (this.I[c].priority < b) d = c + 1;
                else if (0 < c && this.I[c - 1].priority >= b) e = c - 1;
                else break
            }
            this.I.splice(c, 0, { item: a, priority: b })
        };
        Fh.prototype.forEach = function(a) { for (var b = this.I.length; b--;) a(this.I[b].item) };
        Fh.prototype.dequeue = function() { return this.I.length ? this.I.pop().item : null };
        ca.Object.defineProperties(Fh.prototype, { length: { configurable: !0, enumerable: !0, get: function() { return this.I.length } } });
        var Gh = ["_top", "_blank"];

        function Hh(a) {
            var b = this;
            this.ampdoc = a;
            this.qa = a.getRootNode();
            this.L = jd(this.ampdoc);
            this.h = Q(this.ampdoc);
            this.R = Jc(this.ampdoc, "history");
            this.xa = P(this.ampdoc.win);
            this.Ug = this.xa.isIos() && this.xa.isSafari();
            this.Qb = dc(this.ampdoc.win) && this.h.isOvertakeHistory();
            this.Td = this.qa != this.ampdoc.getRootNode() || !!this.ampdoc.getParent();
            this.Tg = "inabox" == C(this.ampdoc.win).runtime;
            this.Uf = this.qa.nodeType == Node.DOCUMENT_NODE ? this.qa.documentElement : this.qa;
            this.Db = this.Lg.bind(this);
            this.qa.addEventListener("click",
                this.Db);
            this.qa.addEventListener("contextmenu", this.Db);
            this.Ke = !1;
            Eh(this.ampdoc).then(function(c) { b.Ke = c });
            this.Bf = this.mb = !1;
            Promise.all([this.h.isTrustedViewer(), this.h.getViewerOrigin()]).then(function(c) {
                b.mb = c[0];
                c = c[1];
                "string" == typeof c && (c = R(c));
                c = mb.localhostRegex.test(c.origin);
                b.Bf = c
            });
            this.fd = null;
            this.Je = new Fh;
            this.Jf = new Fh
        }
        g = Hh.prototype;
        g.cleanup = function() { this.Db && (this.qa.removeEventListener("click", this.Db), this.qa.removeEventListener("contextmenu", this.Db)) };
        g.openWindow = function(a, b, c, d) {
            var e = "";
            !this.xa.isIos() && this.xa.isChrome() || d || (e += "noopener");
            var f = bc(a, b, c, e);
            f && !d && (f.opener = null)
        };
        g.navigateTo = function(a, b, c, d) {
            var e = d = void 0 === d ? {} : d;
            d = void 0 === e.target ? "_top" : e.target;
            e = void 0 === e.opener ? !1 : e.opener;
            b = Ih(this, b);
            var f = Kc(this.Uf, "url");
            if (f.isProtocolValid(b)) {
                J(Gh.includes(d), "Target '" + d + "' not supported.");
                var h = f.getSourceUrl(a.location);
                b = f.resolveRelativeUrl(b, h);
                if ("_blank" == d) this.openWindow(a, b, d, e);
                else {
                    if (c && (this.fd || (this.fd = Jh(this)), this.fd.includes(c) && this.navigateToAmpUrl(b, c))) return;
                    a.top.location.href = b
                }
            } else D().error("navigation", "Cannot navigate to invalid protocol: " +
                b)
        };
        g.navigateToAmpUrl = function(a, b) { return this.h.hasCapability("a2a") ? (this.h.sendMessage("a2aNavigate", A({ url: a, requestedBy: b })), !0) : !1 };

        function Jh(a) { return (a = a.qa.querySelector('meta[name="amp-to-amp-navigation"]')) && a.hasAttribute("content") ? a.getAttribute("content").split(",").map(function(b) { return b.trim() }) : [] }
        g.Lg = function(a) {
            if (!a.defaultPrevented) {
                var b = Sb(a.__AMP_CUSTOM_LINKER_TARGET__ || a.target, "A");
                if (b && b.href)
                    if ("click" == a.type) {
                        Kh(this, b);
                        var c = Lh(this, b.href),
                            d;
                        if (d = !Mh(this, a, b, c)) {
                            if (this.Qb) {
                                d = b.ownerDocument.defaultView;
                                var e = b.href,
                                    f = c.protocol;
                                "ftp:" == f ? (bc(d, e, "_blank"), a.preventDefault(), d = !0) : (f = /^(https?|mailto):$/.test(f), this.Ug && !f ? (bc(d, e, "_top"), a.preventDefault(), d = !0) : d = !1)
                            } else d = !1;
                            d = !d
                        }
                        if (d)
                            if (d = Lh(this, ""), Nh(c) != Nh(d) && (Oh(this, b, a), c = Lh(this, b.href)), e = c, c = Nh(e), f = Nh(d),
                                e.hash && c == f) Ph(this, a, e, d);
                            else {
                                e = (b.getAttribute("target") || "").toLowerCase();
                                (this.Td || this.Tg) && "_top" != e && "_blank" != e && (e = "_blank", b.setAttribute("target", e));
                                f = this.ampdoc.win;
                                var h = P(f);
                                b = Q(b);
                                d.search && h.isSafari() && 13 <= h.getMajorVersion() && b.isProxyOrigin() && b.isEmbedded() && Qh(f, d, e);
                                this.viewerInterceptsNavigation(c, "intercept_click") && a.preventDefault()
                            }
                    } else "contextmenu" == a.type && (Kh(this, b), Oh(this, b, a))
            }
        };

        function Oh(a, b, c) { a.Je.forEach(function(d) { d(b, c) }) }

        function Ih(a, b) { a.Jf.forEach(function(c) { b = c(b) }); return b }

        function Kh(a, b) {
            var c = null;
            if (a.Ke && !a.Td) {
                a = R(a.ampdoc.win.location.href);
                var d = B(a.search);
                a = [];
                for (var e = 0; e < wh.length; e++) { var f = wh[e]; "undefined" !== typeof d[f] && a.push(f) }
                d = b.getAttribute("data-amp-addparams");
                e = b.href;
                d && (e = te(e, B(d)));
                d = R(e);
                d = B(d.search);
                for (e = a.length - 1; 0 <= e; e--) "undefined" !== typeof d[a[e]] && a.splice(e, 1);
                d = "";
                for (e = 0; e < a.length; e++) f = a[e], d += 0 == e ? f + "=QUERY_PARAM(" + f + ")" : "&" + f + "=QUERY_PARAM(" + f + ")";
                c = d
            }
            Kc(b, "url-replace").maybeExpandLink(b, c)
        }

        function Mh(a, b, c, d) { return c.hasAttribute("rel") && c.getAttribute("rel").split(" ").map(function(e) { return e.trim() }).includes("amphtml") ? a.navigateToAmpUrl(d.href, "<a rel=amphtml>") ? (b.preventDefault(), !0) : !1 : !1 }

        function Qh(a, b, c) {
            function d() {
                var h = a.location.href;
                h == f ? (H().info("navigation", "Restored iframe URL with query string:", e), a.history.replaceState(null, "", e)) : H().error("navigation", "Unexpected iframe URL change:", h, f)
            }
            H().info("navigation", "Removing iframe query string before navigation:", b.search);
            var e = b.href,
                f = "" + b.origin + b.pathname + b.hash;
            a.history.replaceState(null, "", f);
            "_blank" === c ? a.setTimeout(d, 0) : a.addEventListener("pageshow", function l(k) {
                k.persisted && (d(), a.removeEventListener("pageshow",
                    l))
            })
        }

        function Ph(a, b, c, d) {
            if (P(a.ampdoc.win).isIe()) {
                var e = c.hash.substring(1),
                    f = a.ampdoc.getElementById(e);
                f && (/^(?:a|select|input|button|textarea)$/i.test(f.tagName) || (f.tabIndex = -1), cc(f))
            }
            b.preventDefault();
            if (!a.Td) {
                var h = c.hash.slice(1),
                    k = null;
                if (h) {
                    var l = String(h).replace(Db, Eb);
                    k = a.qa.getElementById(h) || a.qa.querySelector('a[name="' + l + '"]')
                }
                c.hash != d.hash ? a.R.replaceStateForTarget(c.hash).then(function() { Rh(a, k, h) }) : Rh(a, k, h)
            }
        }
        g.registerAnchorMutator = function(a, b) { this.Je.enqueue(a, b) };
        g.registerNavigateToMutator = function(a, b) { this.Jf.enqueue(a, b) };

        function Rh(a, b, c) { b ? (a.L.scrollIntoView(b), O(a.ampdoc.win).delay(function() { return a.L.scrollIntoView(b) }, 1)) : H().warn("navigation", "failed to find element with id=" + c + " or a[name=" + c + "]") }

        function Lh(a, b) { return Kc(a.Uf, "url").parse(b) }
        g.viewerInterceptsNavigation = function(a, b) {
            var c = this.h.hasCapability("interceptNavigation"),
                d = this.ampdoc.isSingleDoc() && this.ampdoc.getRootNode().documentElement.hasAttribute("allow-navigation-interception");
            if (!c || !d || !this.mb && !this.Bf) return !1;
            this.h.sendMessage("navigateTo", A({ url: a, requestedBy: b }));
            return !0
        };

        function Nh(a) { return "" + a.origin + a.pathname + a.search };

        function Sh(a) { a.whenExtensionsKnown().then(function() { a.declaresExtension("amp-form") && a.getRootNode().addEventListener("submit", Th, !0) }) }

        function Th(a) {
            if (!a.defaultPrevented) {
                var b = a.target;
                if (b && "FORM" == b.tagName) {
                    (b.classList.contains("i-amphtml-form") ? b.hasAttribute("amp-novalidate") : b.hasAttribute("novalidate")) || !b.checkValidity || b.checkValidity() || a.preventDefault();
                    for (var c = b.elements, d = 0; d < c.length; d++) J(!c[d].name || "__amp_source_origin" != c[d].name, "Illegal input name, %s found: %s", "__amp_source_origin", c[d]);
                    c = b.getAttribute("action");
                    var e = b.getAttribute("action-xhr");
                    d = (b.getAttribute("method") || "GET").toUpperCase();
                    e && (we(e, b, "action-xhr"), J(!S(e), "form action-xhr should not be on AMP CDN: %s", b), Fe(e));
                    c && (we(c, b, "action"), J(!S(c), "form action should not be on AMP CDN: %s", b), Fe(c));
                    "GET" == d ? J(e || c, "form action-xhr or action attribute is required for method=GET: %s", b) : "POST" == d && (c && D().error("form", "action attribute is invalid for method=POST: %s", b), e || (a.preventDefault(), J(!1, "Only XHR based (via action-xhr attribute) submissions are support for POST requests. %s", b)));
                    (c = b.getAttribute("target")) ? J("_blank" ==
                        c || "_top" == c, "form target=%s is invalid can only be _blank or _top: %s", c, b): b.setAttribute("target", "_top");
                    e && (a.preventDefault(), a.stopImmediatePropagation(), Kc(b, "action").execute(b, "submit", null, b, b, a, 3))
                }
            }
        };

        function W() { this.aa = null }
        g = W.prototype;
        g.add = function(a) {
            var b = this;
            this.aa || (this.aa = []);
            this.aa.push(a);
            return function() { b.remove(a) }
        };
        g.remove = function(a) { this.aa && (a = this.aa.indexOf(a), -1 < a && this.aa.splice(a, 1)) };
        g.removeAll = function() { this.aa && (this.aa.length = 0) };
        g.fire = function(a) {
            if (this.aa)
                for (var b = this.aa, c = 0; c < b.length; c++)(0, b[c])(a)
        };
        g.getHandlerCount = function() { return this.aa ? this.aa.length : 0 };
        var Uh = { attributes: !0, attributeFilter: ["hidden"], subtree: !0 };

        function Vh(a) {
            this.X = a.getRootNode();
            this.G = (this.X.ownerDocument || this.X).defaultView;
            this.sb = this.oa = null
        }
        Vh.prototype.add = function(a) {
            var b = this;
            Wh(this);
            var c = this.sb.add(a);
            return function() {
                c();
                0 === b.sb.getHandlerCount() && b.dispose()
            }
        };

        function Wh(a) {
            if (!a.oa) {
                a.sb = new W;
                var b = new a.G.MutationObserver(function(c) { c && a.sb.fire(c) });
                a.oa = b;
                b.observe(a.X, Uh)
            }
        }
        Vh.prototype.dispose = function() { this.oa && (this.oa.disconnect(), this.sb.removeAll(), this.sb = this.oa = null) };

        function Xh(a) { try { return a.state } catch (b) { return null } };

        function Yh(a, b) {
            this.B = a;
            this.S = O(a.win);
            this.j = b;
            this.D = 0;
            this.ab = [];
            this.I = [];
            this.j.setOnStateUpdated(this.da.bind(this))
        }
        g = Yh.prototype;
        g.cleanup = function() { this.j.cleanup() };
        g.push = function(a, b) {
            var c = this;
            return Zh(this, function() {
                return c.j.push(b).then(function(d) {
                    c.da(d);
                    a && (c.ab[d.stackIndex] = a);
                    return d.stackIndex
                })
            }, "push")
        };
        g.pop = function(a) { var b = this; return Zh(this, function() { return b.j.pop(a).then(function(c) { b.da(c) }) }, "pop") };
        g.replace = function(a) { var b = this; return Zh(this, function() { return b.j.replace(a) }, "replace") };
        g.get = function() { var a = this; return Zh(this, function() { return a.j.get() }, "get") };
        g.goBack = function(a) { var b = this; return Zh(this, function() { return 0 >= b.D && !a ? p() : b.j.pop(b.D).then(function(c) { b.da(c) }) }, "goBack") };
        g.replaceStateForTarget = function(a) {
            var b = this,
                c = this.B.win.location.hash;
            return this.push(function() { b.B.win.location.replace(c || "#") }).then(function() { b.j.replaceStateForTarget(a) })
        };
        g.getFragment = function() { return this.j.getFragment() };
        g.updateFragment = function(a) { "#" == a[0] && (a = a.substr(1)); return this.j.updateFragment(a) };
        g.da = function(a) {
            this.D = a.stackIndex;
            $h(this, a)
        };

        function $h(a, b) {
            if (!(a.D >= a.ab.length - 1)) {
                for (var c = [], d = a.ab.length - 1; d > a.D; d--) a.ab[d] && (c.push(a.ab[d]), a.ab[d] = void 0);
                a.ab.splice(a.D + 1);
                if (0 < c.length)
                    for (d = { Ab: 0 }; d.Ab < c.length; d = { Ab: d.Ab }, d.Ab++) a.S.delay(function(e) { return function() { return c[e.Ab](b) } }(d), 1)
            }
        }

        function Zh(a, b, c) {
            var d = new v,
                e = d.promise;
            a.I.push({ callback: b, resolve: d.resolve, reject: d.reject, trace: Error("history trace for " + c + ": ") });
            1 == a.I.length && ai(a);
            return e
        }

        function ai(a) {
            if (0 != a.I.length) {
                var b = a.I[0];
                try { var c = b.callback() } catch (d) { c = Promise.reject(d) }
                c.then(function(d) { b.resolve(d) }, function(d) {
                    H().error("History", "failed to execute a task:", d);
                    b.trace && (b.trace.message += d, H().error("History", b.trace));
                    b.reject(d)
                }).then(function() {
                    a.I.splice(0, 1);
                    ai(a)
                })
            }
        }

        function bi(a) {
            var b = this;
            this.win = a;
            this.S = O(a);
            a = this.win.history;
            this.bb = a.length - 1;
            var c = Xh(a);
            c && void 0 !== c["AMP.History"] && (this.bb = Math.min(c["AMP.History"], this.bb));
            this.D = this.bb;
            this.da = null;
            this.Hh = "state" in a;
            this.xb = ci(this, this.D);
            if (a.pushState && a.replaceState) {
                this.Cc = a.originalPushState || a.pushState.bind(a);
                this.Wb = a.originalReplaceState || a.replaceState.bind(a);
                var d = function(f, h, k) {
                    b.xb = f;
                    b.Cc(f, h, k || null)
                };
                var e = function(f, h, k) {
                    b.xb = f;
                    void 0 !== k ? b.Wb(f, h, k) : b.Wb(f, h)
                };
                a.originalPushState ||
                    (a.originalPushState = this.Cc);
                a.originalReplaceState || (a.originalReplaceState = this.Wb)
            } else d = function(f) { b.xb = f }, e = function(f) { b.xb = f };
            this.qh = d;
            this.Lc = e;
            try { this.Lc(ci(this, this.D, !0)) } catch (f) { H().error("History", "Initial replaceState failed: " + f.message) }
            a.pushState = this.yf.bind(this);
            a.replaceState = this.Ld.bind(this);
            this.Ic = function(f) {
                f = f.state;
                H().fine("History", "popstate event: " + b.win.history.length + ", " + JSON.stringify(f));
                f = di(b);
                H().fine("History", "history event: " + b.win.history.length +
                    ", " + JSON.stringify(f));
                var h = f ? f["AMP.History"] : void 0,
                    k = b.D,
                    l = b.cd;
                b.cd = void 0;
                k > b.win.history.length - 2 && (k = b.win.history.length - 2, b.Da(ei(f, { stackIndex: k })));
                k = void 0 == h ? k + 1 : h < b.win.history.length ? h : b.win.history.length - 1;
                f || (f = {});
                f["AMP.History"] = k;
                b.Lc(f, void 0, void 0);
                k != b.D && b.Da(ei(f, { stackIndex: k }));
                k < b.bb && (b.bb = k);
                l && l.resolve()
            };
            this.win.addEventListener("popstate", this.Ic)
        }
        g = bi.prototype;
        g.cleanup = function() {
            this.Cc && (this.win.history.pushState = this.Cc);
            this.Wb && (this.win.history.replaceState = this.Wb);
            this.win.removeEventListener("popstate", this.Ic)
        };

        function ci(a, b, c) {
            a = y(c ? di(a) : void 0);
            a["AMP.History"] = b;
            return a
        }
        g.setOnStateUpdated = function(a) { this.da = a };
        g.push = function(a) {
            var b = this;
            return fi(this, function() {
                var c = ei(di(b), a || {});
                b.yf(c, void 0, c.fragment ? "#" + c.fragment : void 0);
                return oa(function() { return ei(c, { stackIndex: b.D }) })
            })
        };
        g.pop = function(a) {
            var b = this;
            a = Math.max(a, this.bb);
            return fi(this, function() { return gi(b, b.D - a + 1) }).then(function(c) { return ei(di(b), { stackIndex: c }) })
        };
        g.replace = function(a) {
            var b = this,
                c = a = void 0 === a ? {} : a;
            return fi(this, function() {
                var d = ei(di(b), c || {}),
                    e = (d.url || "").replace(/#.*/, ""),
                    f = d.fragment ? "#" + d.fragment : "";
                b.Ld(d, d.title, e || f ? e + f : void 0);
                return oa(function() { return ei(d, { stackIndex: b.D }) })
            })
        };
        g.get = function() { var a = this; return oa(function() { return ei(di(a), { stackIndex: a.D }) }) };
        g.backTo = function(a) {
            var b = this;
            a = Math.max(a, this.bb);
            return fi(this, function() { return gi(b, b.D - a) })
        };

        function di(a) { return a.Hh ? Xh(a.win.history) : a.xb }

        function fi(a, b) { return a.cd ? a.cd.promise.then(b, b) : b() }

        function hi(a) {
            var b = new v,
                c = b.resolve,
                d = b.reject;
            b = a.S.timeoutPromise(500, b.promise);
            a.cd = { promise: b, resolve: c, reject: d };
            return b
        }

        function gi(a, b) {
            if (0 >= b) return Promise.resolve(a.D);
            a.xb = ci(a, a.D - b);
            var c = hi(a);
            a.win.history.go(-b);
            return c.then(function() { return Promise.resolve(a.D) })
        }
        g.yf = function(a, b, c) {
            a || (a = {});
            var d = this.D + 1;
            a["AMP.History"] = d;
            this.qh(a, b, c);
            d != this.win.history.length - 1 && (d = this.win.history.length - 1, a["AMP.History"] = d, this.Lc(a));
            a = ei(a, { stackIndex: d });
            this.Da(a)
        };
        g.replaceStateForTarget = function(a) {
            var b = this;
            fi(this, function() {
                b.win.removeEventListener("popstate", b.Ic);
                try { b.win.location.replace(a) } finally { b.win.addEventListener("popstate", b.Ic) }
                b.Ld();
                return p()
            })
        };
        g.Ld = function(a, b, c) {
            a || (a = {});
            var d = Math.min(this.D, this.win.history.length - 1);
            a["AMP.History"] = d;
            this.Lc(a, b, c);
            a = ei(a, { stackIndex: d });
            this.Da(a)
        };
        g.Da = function(a) {
            a.stackIndex = Math.min(a.stackIndex, this.win.history.length - 1);
            this.D != a.stackIndex && (H().fine("History", "stack index changed: " + this.D + " -> " + a.stackIndex), this.D = a.stackIndex, this.da && this.da(a))
        };
        g.getFragment = function() {
            var a = this.win.location.hash;
            a = a.substr(1);
            return Promise.resolve(a)
        };
        g.updateFragment = function(a) { return this.replace({ fragment: a }) };

        function ei(a, b) { var c = Object.assign({}, a && a.data || {}, b.data || {}); return Object.assign({}, a || {}, b, { data: c }) }

        function ii(a, b) {
            var c = this;
            this.win = a;
            this.h = b;
            this.D = 0;
            this.da = null;
            this.Lh = this.h.onMessage("historyPopped", function(d) {
                void 0 !== d.newStackIndex && (d.stackIndex = d.newStackIndex);
                ji(d) ? c.Da(d) : H().warn("History", 'Ignored unexpected "historyPopped" data:', d)
            })
        }
        g = ii.prototype;
        g.replaceStateForTarget = function(a) { this.win.location.replace(a) };
        g.cleanup = function() { this.Lh() };
        g.setOnStateUpdated = function(a) { this.da = a };

        function ki(a, b, c) {
            if (ji(a)) return a;
            H().warn("History", 'Ignored unexpected "%s" data:', c, a);
            return b
        }

        function ji(a) { return !!a && void 0 !== a.stackIndex }
        g.push = function(a) {
            var b = this,
                c = Object.assign({}, { stackIndex: this.D + 1 }, a || {});
            return this.h.sendMessageAwaitResponse("pushHistory", c).then(function(d) {
                d = ki(d, c, "pushHistory");
                b.Da(d);
                return d
            })
        };
        g.pop = function(a) {
            var b = this;
            if (a > this.D) return this.get();
            a = A({ stackIndex: this.D });
            return this.h.sendMessageAwaitResponse("popHistory", a).then(function(c) {
                var d = A({ stackIndex: b.D - 1 });
                c = ki(c, d, "popHistory");
                b.Da(c);
                return c
            })
        };
        g.replace = function(a) {
            var b = this;
            if (a && a.url) {
                if (!this.h.hasCapability("fullReplaceHistory")) { var c = A({ stackIndex: this.D }); return Promise.resolve(c) }
                var d = a.url.replace(/#.*/, "");
                a.url = d
            }
            var e = Object.assign({}, { stackIndex: this.D }, a || {});
            return this.h.sendMessageAwaitResponse("replaceHistory", e, !0).then(function(f) {
                f = ki(f, e, "replaceHistory");
                b.Da(f);
                return f
            })
        };
        g.get = function() { return Promise.resolve({ data: void 0, fragment: "", stackIndex: this.D, title: "" }) };
        g.Da = function(a) {
            var b = a.stackIndex;
            this.D != b && (H().fine("History", "stackIndex: " + this.D + " -> " + b), this.D = b, this.da && this.da(a))
        };
        g.getFragment = function() { return this.h.hasCapability("fragment") ? this.h.sendMessageAwaitResponse("getFragment", void 0, !0).then(function(a) { if (!a) return ""; "#" == a[0] && (a = a.substr(1)); return a }) : Promise.resolve("") };
        g.updateFragment = function(a) { return this.h.hasCapability("fragment") ? this.h.sendMessageAwaitResponse("replaceHistory", A({ fragment: a }), !0) : p() };

        function li(a) {
            var b = Q(a);
            b.isOvertakeHistory() || a.win.__AMP_TEST_IFRAME ? b = new ii(a.win, b) : (K(a.win, "global-history-binding", bi), b = N(a.win, "global-history-binding"));
            return new Yh(a, b)
        };

        function Y() { V.apply(this, arguments) }
        ja(Y, V);
        Y.requiresShadowDom = V.requiresShadowDom;
        Y.getPreconnects = V.getPreconnects;
        Y.getBuildPriority = V.getBuildPriority;
        Y.createLoaderLogoCallback = V.createLoaderLogoCallback;
        Y.usesLoading = V.usesLoading;
        Y.prerenderAllowed = V.prerenderAllowed;
        Y.deferredMount = V.deferredMount;
        Y.V1 = V.V1;

        function mi(a, b) {
            this.G = a;
            this.Ua = b;
            this.Ia = {};
            this.Zb = null
        }
        g = mi.prototype;
        g.start = function() {
            this.Zb = this.Ia;
            this.Ia = {}
        };
        g.resolveMatchQuery = function(a) { return "1" === this.Mc(a, ni, "1") };
        g.resolveListQuery = function(a) { return this.Mc(a, oi, "") };
        g.complete = function() {
            for (var a in this.Zb) a in this.Ia || pi(this.Zb[a], this.Ua, !1);
            this.Zb = null
        };
        g.dispose = function() {
            for (var a in this.Ia) pi(this.Ia[a], this.Ua, !1);
            this.Ia = {}
        };
        g.Mc = function(a, b, c) {
            if (!a || !a.trim()) return c;
            var d = this.Ia[a] || this.Zb[a];
            d || (d = b(this.G, a), pi(d, this.Ua, !0));
            this.Ia[a] = d;
            a: {
                for (a = 0; a < d.length; a++) {
                    var e = d[a],
                        f = e.query;
                    e = e.value;
                    if (!f || f.matches) { d = e; break a }
                }
                d = ""
            }
            return d
        };

        function ni(a, b) { return [{ query: a.matchMedia(b), value: "1" }, { query: null, value: "" }] }

        function oi(a, b) {
            return b.split(",").map(function(c) {
                c = c.replace(/\s+/g, " ").trim();
                if (0 != c.length) {
                    var d;
                    if (")" == c.charAt(c.length - 1)) {
                        var e = 1;
                        for (d = c.length - 2; 0 <= d; d--) { var f = c.charAt(d); "(" == f ? e-- : ")" == f && e++; if (0 == e) break }
                        var h = d - 1;
                        if (0 < d)
                            for (d--; 0 <= d && (f = c.charAt(d), "%" == f || "-" == f || "_" == f || "a" <= f && "z" >= f || "A" <= f && "Z" >= f || "0" <= f && "9" >= f); d--);
                        if (d >= h) return null
                    } else
                        for (d = c.length - 2; 0 <= d && (f = c.charAt(d), "%" == f || "." == f || "a" <= f && "z" >= f || "A" <= f && "Z" >= f || "0" <= f && "9" >= f); d--);
                    0 <= d ? (f = c.substring(0,
                        d + 1).trim(), c = c.substring(d + 1).trim()) : f = void 0;
                    return c ? { query: f ? a.matchMedia(f) : null, value: c } : null
                }
            }).filter(Boolean)
        }

        function pi(a, b, c) {
            for (var d = 0; d < a.length; d++) {
                var e = a[d].query;
                e && (void 0 !== e.onchange ? e.onchange = c ? b : null : c ? e.addListener(b) : e.removeListener(b))
            }
        };

        function qi(a, b, c) {
            b.__AMP__RESOURCE = this;
            this.Ng = a;
            this.element = b;
            this.debugid = b.tagName.toLowerCase() + "#" + a;
            this.hostWin = b.ownerDocument.defaultView;
            this.o = c;
            this.Xg = b.hasAttribute("placeholder");
            this.Ob = !1;
            this.tb = void 0;
            this.H = b.isBuilt() ? 1 : 0;
            0 == this.H && b.isBuilding() && this.build();
            this.oe = -1;
            this.va = 0;
            this.Ef = this.gb = null;
            this.sc = !1;
            this.ba = uc(-1E4, -1E4, 0, 0);
            this.Od = null;
            this.Xd = !1;
            this.Tb = this.ra = null;
            this.ne = void 0;
            a = new v;
            this.bh = a.promise;
            this.be = a.resolve;
            this.Vd = !1
        }

        function Z(a) { return a.__AMP__RESOURCE }
        g = qi.prototype;
        g.getId = function() { return this.Ng };
        g.updateOwner = function(a) { this.tb = a };
        g.getOwner = function() {
            if (void 0 === this.tb) {
                for (var a = this.element; a; a = a.parentElement)
                    if (a.__AMP__OWNER) { this.tb = a.__AMP__OWNER; break }
                void 0 === this.tb && (this.tb = null)
            }
            return this.tb
        };
        g.hasOwner = function() { return !!this.getOwner() };
        g.getLayoutPriority = function() { return -1 != this.oe ? this.oe : this.element.getLayoutPriority() };
        g.updateLayoutPriority = function(a) { this.oe = a };
        g.getState = function() { return this.H };
        g.isBuilt = function() { return this.element.isBuilt() };
        g.isBuilding = function() { return this.Ob };
        g.whenBuilt = function() { return this.element.signals().whenSignal("res-built") };
        g.build = function() {
            var a = this;
            if (this.Ob || !this.element.isUpgraded()) return null;
            this.Ob = !0;
            return this.element.buildInternal().then(function() {
                a.Ob = !1;
                a.H = 1;
                a.element.signals().signal("res-built")
            }, function(b) {
                a.maybeReportErrorOnBuildFailure(b);
                a.Ob = !1;
                a.element.signals().rejectSignal("res-built", b);
                throw b;
            })
        };
        g.maybeReportErrorOnBuildFailure = function(a) { Mf(a) || H().error("Resource", "failed to build:", this.debugid, a) };
        g.changeSize = function(a, b, c) {
            this.element.applySize(a, b, c);
            this.requestMeasure()
        };
        g.overflowCallback = function(a, b, c, d) {
            a && (this.ne = { height: b, width: c, margins: d });
            this.element.overflowCallback(a, b, c, d)
        };
        g.resetPendingChangeSize = function() { this.ne = void 0 };
        g.getPendingChangeSize = function() { return this.ne };
        g.getUpgradeDelayMs = function() { return this.element.getUpgradeDelayMs() };
        g.measure = function() {
            if (!(this.Xg && this.element.parentElement && this.element.parentElement.tagName.startsWith("AMP-")) || "__AMP__RESOURCE" in this.element.parentElement)
                if (this.element.ownerDocument && this.element.ownerDocument.defaultView) {
                    this.Xd = !1;
                    var a = this.ba,
                        b = jd(this.element);
                    this.ba = b.getLayoutRect(this.element);
                    var c = !1;
                    if (b.supportsPositionFixed() && this.isDisplayed())
                        for (var d = this.o.getAmpdoc().win, e = d.document.body, f = this.element; f && f != e; f = f.offsetParent) {
                            if (f.isAlwaysFixed && f.isAlwaysFixed()) {
                                c = !0;
                                break
                            }
                            if (b.isDeclaredFixed(f) && "fixed" == (d.getComputedStyle(f) || Me).position) { c = !0; break }
                        }
                    if (this.sc = c) this.ba = xc(this.ba, -b.getScrollLeft(), -b.getScrollTop());
                    var h = this.ba,
                        k = !(a.width == h.width && a.height === h.height);
                    (1 == this.H || a.top != h.top || k) && this.element.isUpgraded() && (1 == this.H ? this.H = 2 : 4 != this.H && 5 != this.H || !this.element.isRelayoutNeeded() || (this.H = 2));
                    this.hasBeenMeasured() || (this.Od = h);
                    this.element.updateLayoutBox(h, k)
                } else this.H = 1
        };
        g.ensureMeasured = function() { var a = this; return this.hasBeenMeasured() ? p() : id(this.hostWin).measure(function() { return a.measure() }) };
        g.completeCollapse = function() {
            Qe(this.element, !1);
            this.ba = uc(this.ba.left, this.ba.top, 0, 0);
            this.sc = !1;
            this.element.updateLayoutBox(this.getLayoutBox());
            var a = this.getOwner();
            a && a.collapsedCallback(this.element)
        };
        g.completeExpand = function() {
            Qe(this.element, !0);
            this.requestMeasure()
        };
        g.isMeasureRequested = function() { return this.Xd };
        g.hasBeenMeasured = function() { return !!this.Od };
        g.requestMeasure = function() { this.Xd = !0 };
        g.getLayoutSize = function() { var a = this.ba; return { width: a.width, height: a.height } };
        g.getLayoutBox = function() { if (!this.sc) return this.ba; var a = jd(this.element); return xc(this.ba, a.getScrollLeft(), a.getScrollTop()) };
        g.getInitialLayoutBox = function() { return this.Od || this.ba };
        g.isDisplayed = function() {
            if (!this.element.ownerDocument || !this.element.ownerDocument.defaultView) return !1;
            var a = "fluid" == this.element.getLayout(),
                b = this.getLayoutBox(),
                c = 0 < b.height && 0 < b.width;
            return a || c
        };
        g.isFixed = function() { return this.sc };
        g.overlaps = function(a) { var b = this.getLayoutBox(); return b.top <= a.bottom && a.top <= b.bottom && b.left <= a.right && a.left <= b.right };
        g.prerenderAllowed = function() { return this.element.prerenderAllowed() };
        g.isBuildRenderBlocking = function() { return this.element.isBuildRenderBlocking() };
        g.whenWithinViewport = function(a) {
            if (!this.isLayoutPending() || !0 === a) return p();
            var b = String(a);
            if (this.ra && this.ra[b]) return this.ra[b].promise;
            if (this.isWithinViewportRatio(a)) return p();
            this.ra = this.ra || {};
            this.ra[b] = new v;
            return this.ra[b].promise
        };

        function ri(a) {
            if (a.ra) {
                var b = a.getDistanceViewportRatio(),
                    c;
                for (c in a.ra) a.isWithinViewportRatio(parseFloat(c), b) && (a.ra[c].resolve(), delete a.ra[c])
            }
        }
        g.getDistanceViewportRatio = function() {
            var a = jd(this.element).getRect(),
                b = this.getLayoutBox(),
                c = this.o.getScrollDirection(),
                d = 1,
                e = 0;
            if (a.right < b.left || a.left > b.right) return { distance: !1 };
            if (a.bottom < b.top) e = b.top - a.bottom, -1 == c && (d = 2);
            else if (a.top > b.bottom) e = a.top - b.bottom, 1 == c && (d = 2);
            else return { distance: !0 };
            return { distance: e, scrollPenalty: d, viewportHeight: a.height }
        };
        g.isWithinViewportRatio = function(a, b) {
            if ("boolean" === typeof a) return a;
            var c = b || this.getDistanceViewportRatio(),
                d = c.distance;
            return "boolean" == typeof d ? d : d < c.viewportHeight * a / c.scrollPenalty
        };
        g.renderOutsideViewport = function() { ri(this); return this.hasOwner() || this.isWithinViewportRatio(this.element.renderOutsideViewport()) };
        g.idleRenderOutsideViewport = function() { return this.isWithinViewportRatio(this.element.idleRenderOutsideViewport()) };
        g.layoutScheduled = function(a) {
            this.H = 3;
            this.element.layoutScheduleTime = a
        };
        g.layoutCanceled = function() { this.H = this.hasBeenMeasured() ? 2 : 1 };
        g.startLayout = function() {
            var a = this;
            if (this.Tb) return this.Tb;
            if (4 == this.H) return p();
            if (5 == this.H) return Promise.reject(this.Ef);
            this.isDisplayed();
            if (3 != this.H) {
                var b = H().createError("startLayout called but not LAYOUT_SCHEDULED", "currently: ", this.H);
                Jf(b, this.element);
                return Promise.reject(b)
            }
            if (0 < this.va && !this.element.isRelayoutNeeded()) return H().fine("Resource", "layout canceled since it wasn't requested:", this.debugid, this.H), this.H = 4, p();
            H().fine("Resource", "start layout:", this.debugid, "count:",
                this.va);
            this.va++;
            this.H = 3;
            this.gb = new AbortController;
            var c = this.gb.signal;
            return this.Tb = (new Promise(function(d, e) {
                id(a.hostWin).mutate(function() {
                    try { var f = a.element.layoutCallback(c) } catch (h) { e(h) }
                    Promise.resolve(f).then(d, e)
                });
                c.onabort = function() { return e(Lf()) }
            })).then(function() { return si(a, !0, c) }, function(d) { return si(a, !1, c, d) })
        };

        function si(a, b, c, d) {
            a.gb = null;
            if (c.aborted) throw c = H().createError("layoutComplete race"), c.associatedElement = a.element, H().expectedError("Resource", c), Lf();
            a.be && (a.be(), a.be = null);
            a.Tb = null;
            a.H = b ? 4 : 5;
            a.Ef = d;
            if (b) H().fine("Resource", "layout complete:", a.debugid);
            else return H().fine("Resource", "loading failed:", a.debugid, d), Promise.reject(d)
        }
        g.isLayoutPending = function() { return 4 != this.H && 5 != this.H };
        g.loadedOnce = function() { return this.element.V1() ? this.element.whenLoaded() : this.bh };
        g.isInViewport = function() { this.Vd && ri(this); return this.Vd };
        g.setInViewport = function(a) { this.Vd = a };
        g.unlayout = function() { 0 != this.H && 1 != this.H && 2 != this.H && (this.gb && (this.gb.abort(), this.gb = null), this.setInViewport(!1), this.element.unlayoutCallback() && (this.element.togglePlaceholder(!0), this.H = 1, this.va = 0, this.Tb = null)) };
        g.getTaskId = function(a) { return this.debugid + "#" + a };
        g.pause = function() { this.element.pause() };
        g.pauseOnRemove = function() { this.element.pause() };
        g.resume = function() { this.element.resume() };
        g.unload = function() { this.element.unmount() };
        g.disconnect = function() {
            delete this.element.__AMP__RESOURCE;
            this.element.disconnect(!0)
        };

        function ti() {
            this.La = y();
            this.fa = null
        }
        g = ti.prototype;
        g.get = function(a) { a = this.La[a]; return null == a ? null : a };
        g.whenSignal = function(a) {
            var b = this.fa && this.fa[a];
            if (!b) {
                var c = this.La[a];
                null != c ? b = { promise: "number" == typeof c ? Promise.resolve(c) : Promise.reject(c) } : (c = new v, b = { promise: c.promise, resolve: c.resolve, reject: c.reject });
                this.fa || (this.fa = y());
                this.fa[a] = b
            }
            return b.promise
        };
        g.signal = function(a, b) {
            if (null == this.La[a]) {
                var c = void 0 == b ? Date.now() : b;
                this.La[a] = c;
                (a = this.fa && this.fa[a]) && a.resolve && (a.resolve(c), a.resolve = void 0, a.reject = void 0)
            }
        };
        g.rejectSignal = function(a, b) { null == this.La[a] && (this.La[a] = b, (a = this.fa && this.fa[a]) && a.reject && (a.reject(b), a.promise.catch(function() {}), a.resolve = void 0, a.reject = void 0)) };
        g.reset = function(a) {
            this.La[a] && delete this.La[a];
            var b = this.fa && this.fa[a];
            b && !b.resolve && delete this.fa[a]
        };
        var ui = Date.now();

        function vi(a) {
            var b = this;
            this.B = a;
            var c = a.win;
            this.ie = new c.IntersectionObserver(function(d) { return wi(b, d) }, { root: dc(c) ? c.document : null, rootMargin: "250% 31.25%" });
            this.Ga = new Map;
            this.ha = new Map;
            this.ub = [];
            this.Tf = !1;
            a.whenReady().then(function() { return xi(b) });
            this.Ge = a.onVisibilityChanged(function() { return yi(b) })
        }
        g = vi.prototype;
        g.dispose = function() {
            this.ie.disconnect();
            this.ha.clear();
            this.Ge && (this.Ge(), this.Ge = null)
        };
        g.scheduleAsap = function(a) {
            this.ha.set(a, { asap: !0, isIntersecting: !1 });
            zi(this, a)
        };
        g.schedule = function(a) { this.ha.has(a) || (a.deferredMount() ? (this.ha.set(a, { asap: !1, isIntersecting: !1 }), this.ie.observe(a), 0 < this.Ga.size && this.Ga.forEach(function(b, c) { a !== c && c.contains(a) && b.observe(a) })) : this.ha.set(a, { asap: !1, isIntersecting: !0 }), zi(this, a)) };
        g.unschedule = function(a) { this.ha.has(a) && (this.ha.delete(a), this.ie.unobserve(a), 0 < this.Ga.size && this.Ga.forEach(function(b) { b.unobserve(a) }), this.ub && (Pa(this.ub, a), xi(this))) };
        g.setContainer = function(a, b) {
            var c = this;
            if (!this.Ga.has(a)) {
                var d = new this.B.win.IntersectionObserver(function(e) { return wi(c, e) }, { root: b || a, rootMargin: "250% 31.25%" });
                this.Ga.set(a, d);
                this.ha.forEach(function(e, f) {!e.asap && f !== a && a.contains(f) && d.observe(f) })
            }
        };
        g.removeContainer = function(a) {
            var b = this.Ga.get(a);
            b && (b.disconnect(), this.Ga.delete(a))
        };

        function Ai(a) { a.B.isReady() && !a.Tf && (a.Tf = !0, a.B.win.setTimeout(function() { a.B.signals().signal("ready-scan") }, 50)) }

        function yi(a) { var b = a.B.getVisibilityState(); "visible" != b && "hidden" != b && "prerender" != b || a.ha.forEach(function(c, d) { return Bi(a, d) }) }

        function zi(a, b) {
            var c = a.ub;
            c ? (c.includes(b) || c.push(b), xi(a)) : Bi(a, b)
        }

        function xi(a) {
            var b = a.B.isReady(),
                c = a.ub;
            if (c)
                for (var d = 0; d < c.length; d++) { var e = c[d]; if (b || $b(e, a.B.getRootNode())) c.splice(d--, 1), Bi(a, e) }
            b && (a.ub = null, Ai(a))
        }

        function wi(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c],
                    e = d.isIntersecting,
                    f = d.target;
                if (d = a.ha.get(f)) {
                    var h = e || d.isIntersecting;
                    h !== d.isIntersecting && a.ha.set(f, { asap: d.asap, isIntersecting: h });
                    h && Bi(a, f)
                }
            }
        }

        function Bi(a, b) {
            var c = a.ub,
                d = !(c && c.includes(b)),
                e = a.ha.get(b) || { asap: !1, isIntersecting: !1 };
            c = e.asap;
            e = e.isIntersecting;
            var f = a.B.getVisibilityState();
            d && (c || e) && ("visible" == f || "hidden" == f || "prerender" == f && b.prerenderAllowed()) && (a.unschedule(b), a = a.B.win, (c || 0 >= b.getBuildPriority() ? a.setTimeout : a.requestIdleCallback || a.setTimeout)(function() { return b.mountInternal() }))
        }

        function Ci(a) { M(a, "scheduler", vi); return Jc(a, "scheduler") };
        var Di = /nochunking=1/.test(self.location.hash),
            Ei = p();

        function Fi(a) { M(a, "chunk", Gi); return Jc(a, "chunk") }

        function Hi(a, b, c) {
            if (Di) Ei.then(b);
            else {
                var d = Fi(a.documentElement || a);
                d.runForStartup(b);
                c && d.runForStartup(function() { d.Ne = !0 })
            }
        }

        function Ii(a, b) { Di ? Ei.then(b) : Fi(a).run(b, 10) }

        function Ji(a) {
            this.state = "not_run";
            this.Gd = a
        }

        function Ki(a, b) { if ("run" != a.state) { a.state = "run"; try { a.Gd(b) } catch (c) { throw a.Mf(), c; } } }
        Ji.prototype.Mf = function() {};
        Ji.prototype.zf = function() { return !1 };
        Ji.prototype.ig = function() { return !1 };

        function Li(a, b, c) {
            Ji.call(this, a);
            this.cf = c
        }
        ja(Li, Ji);
        Li.prototype.Mf = function() { Af(self.document) };
        Li.prototype.zf = function() { return this.cf.ampdoc.isVisible() };
        Li.prototype.ig = function() { return this.cf.gf };

        function Gi(a) {
            var b = this;
            this.ampdoc = a;
            this.G = a.win;
            this.O = new Fh;
            this.Pe = this.nf.bind(this);
            this.kb = 0;
            this.Fh = !(!this.G.navigator.scheduling || !this.G.navigator.scheduling.isInputPending);
            this.Oc = !1;
            this.Ne = this.G.document.documentElement.hasAttribute("i-amphtml-no-boilerplate");
            this.G.addEventListener("message", function(c) { "amp-macro-task" == c.data && b.nf(null) });
            this.gf = !1;
            Mc(a, "viewer").then(function() { b.gf = !0 });
            a.onVisibilityChanged(function() { a.isVisible() && b.Ba() })
        }
        Gi.prototype.run = function(a, b) {
            a = new Ji(a);
            this.O.enqueue(a, b);
            this.Ba()
        };
        Gi.prototype.runForStartup = function(a) {
            a = new Li(a, this.G, this);
            this.O.enqueue(a, Number.POSITIVE_INFINITY);
            this.Ba()
        };

        function Mi(a, b) {
            for (var c = a.O.peek(); c && "not_run" !== c.state;) a.O.dequeue(), c = a.O.peek();
            c && b && a.O.dequeue();
            return c
        }
        Gi.prototype.nf = function(a) {
            var b = this,
                c = Mi(this, !0);
            if (!c) return this.Oc = !1, this.kb = 0, !1;
            try {
                var d = Date.now();
                Ki(c, a)
            } finally {
                Ei.then().then().then().then().then().then().then().then().then(function() {
                    b.Oc = !1;
                    b.kb += Date.now() - d;
                    H().fine("CHUNK", c.Gd.displayName || c.Gd.name, "Chunk duration", Date.now() - d, b.kb);
                    b.Ba()
                })
            }
            return !0
        };

        function Ni(a) { a.Ne && (a.Fh ? a.G.navigator.scheduling.isInputPending() : 5 < a.kb) ? (a.kb = 0, Oi(a)) : Ei.then(function() { a.Pe(null) }) }
        Gi.prototype.Ba = function() {
            if (!this.Oc) {
                var a = Mi(this);
                a && (a.zf() ? (this.Oc = !0, Ni(this)) : a.ig() && this.G.requestIdleCallback ? Pi(this.G, this.Pe) : Oi(this))
            }
        };

        function Oi(a) { a.G.postMessage("amp-macro-task", "*") }

        function Pi(a, b) {
            function c(e) {
                if (15 > e.timeRemaining()) {
                    var f = 2E3 - (Date.now() - d);
                    0 >= f || e.didTimeout ? (H().fine("CHUNK", "Timed out", 2E3, e.didTimeout), b(e)) : (H().fine("CHUNK", "Rescheduling with", f, e.timeRemaining()), a.requestIdleCallback(c, { timeout: f }))
                } else H().fine("CHUNK", "Running idle callback with ", 15), b(e)
            }
            var d = Date.now();
            a.requestIdleCallback(c, { timeout: 2E3 })
        };
        var Qi = { bubbles: !1 };

        function Ri() { return !0 }
        var Si, Ti = [];

        function Ui(a) {
            function b() { return c.apply(this, arguments) || this }
            var c = Vi(a);
            ja(b, c);
            return b
        }

        function Vi(a) {
            function b() {
                var e = d.call(this) || this;
                e.createdCallback();
                return e
            }
            var c = Wi;
            if (a.__AMP_BASE_CE_CLASS) return a.__AMP_BASE_CE_CLASS;
            var d = a.HTMLElement;
            ja(b, d);
            b.prototype.createdCallback = function() {
                this.Ka = this.sd = !1;
                this.Ta = null;
                this.de = !1;
                this.na = this.Na = null;
                this.Ya = "upgrading";
                this.everAttached = !1;
                this.o = this.B = null;
                this.ma = "nodisplay";
                this.va = 0;
                this.Ud = !1;
                this.warnOnMissingOverflow = !0;
                this.layoutScheduleTime = this.pa = this.sizerElement = void 0;
                var e = a.__AMP_EXTENDED_ELEMENTS && a.__AMP_EXTENDED_ELEMENTS[this.localName];
                (this.M = e === Y ? null : e || null) || Ti.push(this);
                this.A = null;
                this.yb = 1;
                this.gg = 0;
                this.lb = this.Sa = void 0;
                this.C = new ti;
                this.M && this.C.signal("ready-upgrade");
                var f = a;
                f = Ec(f);
                this.Ph = (f = Lc(f, "performance") ? Ic(f, "performance") : null) && f.isPerformanceTrackingOn();
                this.ob = null;
                this.__AMP_UPG_RES && (this.__AMP_UPG_RES(this), delete this.__AMP_UPG_RES, delete this.__AMP_UPG_PRM)
            };
            b.prototype.signals = function() { return this.C };
            b.prototype.getAmpDoc = function() { return this.B };
            b.prototype.getResources = function() { return this.o };
            b.prototype.isUpgraded = function() { return 2 == this.yb };
            b.prototype.whenUpgraded = function() { return this.C.whenSignal("upgraded") };
            b.prototype.upgrade = function(e) { this.lb || 1 != this.yb || (this.M = e, this.C.signal("ready-upgrade"), this.everAttached && this.$c()) };
            b.prototype.getUpgradeDelayMs = function() { return this.gg };
            b.prototype.xd = function(e, f) {
                this.A = e;
                this.gg = a.Date.now() - f;
                this.yb = 2;
                this.setReadyStateInternal("building");
                this.classList.remove("amp-unresolved");
                this.classList.remove("i-amphtml-unresolved");
                this.og();
                this.ta("amp:attached");
                this.V1() || this.getResources().upgraded(this);
                this.C.signal("upgraded")
            };
            b.prototype.og = function() { "nodisplay" != this.ma && this.A && !this.A.isLayoutSupported(this.ma) && (J(this.getAttribute("layout"), "The element did not specify a layout attribute. Check https://amp.dev/documentation/guides-and-tutorials/develop/style_and_layout/control_layout and the respective element documentation for details."), J(!1, "Layout not supported: " + this.ma)) };
            b.prototype.getBuildPriority =
                function() { return this.M ? this.M.getBuildPriority(this) : 3 };
            b.prototype.getLayoutPriority = function() { return this.A ? this.A.getLayoutPriority() : 3 };
            b.prototype.getDefaultActionAlias = function() { this.isUpgraded(); return this.A.getDefaultActionAlias() };
            b.prototype.isBuilding = function() { return !!this.Ta };
            b.prototype.isBuilt = function() { return this.sd };
            b.prototype.whenBuilt = function() { return this.C.whenSignal("built") };
            b.prototype.buildInternal = function() {
                var e = this;
                if (this.Ta) return this.Ta;
                this.setReadyStateInternal("building");
                return this.Ta = this.hf().then(function() {
                    var f = e.Eg(),
                        h = Ge(a, "amp-consent-granular-consent"),
                        k = h && !f ? e.Fg() : null;
                    if (f || h && k) return ad(e, "consentPolicyManager", "amp-consent").then(function(l) { return l ? f ? l.whenPolicyUnblock(f) : l.whenPurposesUnblock(k) : !0 }).then(function(l) { if (!l) throw Error("BLOCK_BY_CONSENT"); })
                }).then(function() { return e.A.buildCallback() }).then(function() {
                    e.sd = !0;
                    e.classList.add("i-amphtml-built");
                    e.classList.remove("i-amphtml-notbuilt");
                    e.classList.remove("amp-notbuilt");
                    e.C.signal("built");
                    e.V1() ? e.setReadyStateInternal("building" != e.Ya ? e.Ya : "mounting") : (e.setReadyStateInternal("loading"), e.preconnect(!1));
                    e.Ka && e.ff();
                    e.Sa && O(e.ownerDocument.defaultView).delay(e.yg.bind(e), 1);
                    if (!e.getPlaceholder()) {
                        var f = e.createPlaceholder();
                        f && e.appendChild(f)
                    }
                }, function(f) {
                    e.C.rejectSignal("built", f);
                    e.V1() && e.setReadyStateInternal("error", f);
                    Mf(f) || Jf(f, e);
                    throw f;
                })
            };
            b.prototype.build = function() {
                var e = this;
                return this.Ta ? this.Ta : this.C.whenSignal("ready-upgrade").then(function() {
                    e.V1() && Ci(e.getAmpDoc()).scheduleAsap(e);
                    return e.whenBuilt()
                })
            };
            b.prototype.mountInternal = function() {
                var e = this;
                if (this.Na) return this.Na;
                this.na = this.na || new AbortController;
                var f = this.na.signal;
                return this.Na = this.buildInternal().then(function() {
                    e.V1();
                    if (!f.aborted) {
                        e.setReadyStateInternal("mounting" != e.Ya ? e.Ya : e.M.usesLoading(e) ? "loading" : "mounting");
                        e.de = !0;
                        var h = e.A.mountCallback(f);
                        return h ? h.then(Ri) : !1
                    }
                }).then(function(h) {
                    e.na = null;
                    if (f.aborted) throw Lf();
                    e.C.signal("mounted");
                    e.M.usesLoading(e) && !h || e.setReadyStateInternal("complete")
                }).catch(function(h) {
                    e.na =
                        null;
                    h && ("string" == typeof h ? h.startsWith("CANCELLED") : "string" == typeof h.message && h.message.startsWith("CANCELLED")) ? e.Na = null : (e.C.rejectSignal("mounted", h), e.setReadyStateInternal("error", h));
                    throw h;
                })
            };
            b.prototype.mount = function() {
                var e = this;
                if (this.Na) return this.Na;
                this.na = this.na || new AbortController;
                var f = this.na.signal;
                return this.C.whenSignal("ready-upgrade").then(function() {
                    if (!e.V1()) return e.whenBuilt();
                    if (f.aborted) throw Lf();
                    Ci(e.getAmpDoc()).scheduleAsap(e);
                    return e.whenMounted()
                })
            };
            b.prototype.unmount = function() {
                this.Ka && this.pause();
                this.V1() ? (this.na && (this.na.abort(), this.na = null), Ci(this.getAmpDoc()).unschedule(this), this.de && this.A.unmountCallback(), this.de = !1, this.Na = null, this.qe(), this.Ka && this.$c(!0)) : this.eg()
            };
            b.prototype.whenMounted = function() { return this.C.whenSignal("mounted") };
            b.prototype.whenLoaded = function() { return this.C.whenSignal("load-end") };
            b.prototype.ensureLoaded = function(e) {
                var f = this;
                return this.mount().then(function() {
                    if (f.V1()) return f.M.usesLoading(f) &&
                        f.A.ensureLoaded(), f.whenLoaded();
                    var h = f.Ja();
                    return h.whenBuilt().then(function() { if (4 != h.getState() && ((3 != h.getState() || h.isMeasureRequested()) && h.measure(), h.isDisplayed())) return f.getResources().scheduleLayoutOrPreload(h, !0, e, !0), f.whenLoaded() })
                })
            };
            b.prototype.setAsContainerInternal = function(e) { Ci(this.getAmpDoc()).setContainer(this, e) };
            b.prototype.removeAsContainerInternal = function() { Ci(this.getAmpDoc()).removeContainer(this) };
            b.prototype.setReadyStateInternal = function(e, f) {
                if (e !== this.Ya &&
                    (this.Ya = e, this.V1())) switch (e) {
                    case "loading":
                        this.C.signal("load-start");
                        this.C.reset("unload");
                        this.C.reset("load-end");
                        this.classList.add("i-amphtml-layout");
                        this.toggleLoading(!0);
                        this.ta("amp:load-start");
                        break;
                    case "complete":
                        this.C.signal("load-start");
                        this.C.signal("load-end");
                        this.C.reset("unload");
                        this.classList.add("i-amphtml-layout");
                        this.toggleLoading(!1);
                        ec(this, "load", null, Qi);
                        this.ta("amp:load-end");
                        break;
                    case "error":
                        this.C.rejectSignal("load-end", f), this.toggleLoading(!1), ec(this,
                            "error", f, Qi)
                }
            };
            b.prototype.preconnect = function(e) {
                var f = this;
                this.isUpgraded();
                e ? this.A.preconnectCallback(e) : Hi(this.getAmpDoc(), function() { f.ownerDocument && f.ownerDocument.defaultView && f.A.preconnectCallback(e) })
            };
            b.prototype.V1 = function() { return this.M ? this.M.V1() : !1 };
            b.prototype.deferredMount = function() { return this.M ? this.M.deferredMount(this) : !1 };
            b.prototype.isAlwaysFixed = function() { return this.A ? this.A.isAlwaysFixed() : !1 };
            b.prototype.updateLayoutBox = function(e, f) { var h = f = void 0 === f ? !1 : f; if (this.isBuilt()) this.onMeasure(h) };
            b.prototype.onMeasure = function() { this.isBuilt(); try { this.A.onLayoutMeasure() } catch (e) { Jf(e, this) } };
            b.prototype.sf = function() { void 0 !== this.sizerElement || "responsive" !== this.ma && "intrinsic" !== this.ma || (this.sizerElement = this.querySelector("i-amphtml-sizer")); return this.sizerElement || null };
            b.prototype.wh = function(e) {
                if ("responsive" === this.ma) U(e, "paddingTop", "0");
                else if ("intrinsic" === this.ma) {
                    var f = e.querySelector(".i-amphtml-intrinsic-sizer");
                    f && f.setAttribute("src", "")
                }
            };
            b.prototype.Pg = function() {
                var e =
                    this,
                    f = this.hasAttribute("media") || this.hasAttribute("sizes") && !this.hasAttribute("disable-inline-width") || this.hasAttribute("heights"),
                    h = this.ownerDocument.defaultView;
                f != !!this.ob && h && (f ? (this.ob = new mi(h, function() { return e.Le() }), this.Le()) : this.kf())
            };
            b.prototype.kf = function() { this.ob && (this.ob.dispose(), this.ob = null) };
            b.prototype.Le = function() {
                var e = this.ob;
                if (e) {
                    e.start();
                    var f = this.getAttribute("media") || null,
                        h = f ? e.resolveMatchQuery(f) : !0;
                    this.classList.toggle("i-amphtml-hidden-by-media-query", !h);
                    var k = this.hasAttribute("disable-inline-width") ? null : this.getAttribute("sizes");
                    k && U(this, "width", e.resolveListQuery(k));
                    if (k = "responsive" === this.ma ? this.getAttribute("heights") : null) {
                        var l = this.sf();
                        l && U(l, "paddingTop", e.resolveListQuery(k))
                    }
                    e.complete();
                    this.Ja().requestMeasure()
                }
            };
            b.prototype.applySize = function(e, f, h) {
                var k = this.sf();
                k && (this.sizerElement = null, this.wh(k), this.gh(function() { k && Nb(k) }));
                void 0 !== e && U(this, "height", e, "px");
                void 0 !== f && U(this, "width", f, "px");
                h && (null != h.top && U(this,
                    "marginTop", h.top, "px"), null != h.right && U(this, "marginRight", h.right, "px"), null != h.bottom && U(this, "marginBottom", h.bottom, "px"), null != h.left && U(this, "marginLeft", h.left, "px"));
                this.Rg() && this.Dh();
                ec(this, "amp:size-changed")
            };
            b.prototype.connectedCallback = function() {
                void 0 === Si && (Si = "content" in self.document.createElement("template"));
                Si || void 0 !== this.lb || (this.lb = !!Sb(this, "template"));
                if (!this.lb && !this.Ka && Pb(this)) {
                    this.Ka = !0;
                    this.everAttached || (this.classList.add("i-amphtml-element"), this.classList.add("i-amphtml-notbuilt"),
                        this.classList.add("amp-notbuilt"));
                    if (!this.B) {
                        var e = cd(this.ownerDocument.defaultView).getAmpDoc(this);
                        this.B = e;
                        c(e, this, this.M)
                    }
                    this.o || (this.o = hd(this.B));
                    this.getResources().add(this);
                    if (this.everAttached) {
                        var f = this.reconstructWhenReparented();
                        f && this.qe();
                        this.isUpgraded() && (f && !this.V1() && this.getResources().upgraded(this), this.ff(), this.ta("amp:attached"));
                        this.M && this.V1() && this.$c()
                    } else {
                        this.everAttached = !0;
                        try {
                            var h = P(this.ownerDocument.defaultView).isIe();
                            e = void 0 === h ? !1 : h;
                            var k = this.getAttribute("i-amphtml-layout");
                            if (k) { var l = Ze(k); "responsive" != l && "intrinsic" != l || !this.firstElementChild ? "nodisplay" == l && (Qe(this, !1), this.style.display = "") : (this.sizerElement = this.querySelector("i-amphtml-sizer") || void 0) && this.sizerElement.setAttribute("slot", "i-amphtml-svc"); var m = l } else {
                                var n = this.getAttribute("layout"),
                                    q = this.getAttribute("width"),
                                    t = this.getAttribute("height"),
                                    x = this.getAttribute("sizes"),
                                    u = this.getAttribute("heights"),
                                    r = n ? Ze(n) : null;
                                J(void 0 !== r, 'Invalid "layout" value: %s, %s', n, this);
                                var z = q && "auto" !=
                                    q ? af(q) : q;
                                J(void 0 !== z, 'Invalid "width" value: %s, %s', q, this);
                                var G = t && "fluid" != t ? af(t) : t;
                                J(void 0 !== G, 'Invalid "height" value: %s, %s', t, this);
                                var Ca;
                                if (!(Ca = r && "fixed" != r && "fixed-height" != r || z && G)) {
                                    var nb = this.tagName;
                                    nb = nb.toUpperCase();
                                    Ca = void 0 === Ve[nb]
                                }
                                if (Ca) { var F = z; var L = G } else {
                                    var I = this.tagName.toUpperCase();
                                    if (!Ve[I]) {
                                        var X = this.ownerDocument,
                                            sa = I.replace(/^AMP\-/, ""),
                                            T = X.createElement(sa);
                                        T.controls = !0;
                                        Pe(T, { position: "absolute", visibility: "hidden" });
                                        X.body.appendChild(T);
                                        Ve[I] = {
                                            width: (T.offsetWidth ||
                                                1) + "px",
                                            height: (T.offsetHeight || 1) + "px"
                                        };
                                        X.body.removeChild(T)
                                    }
                                    var Sa = Ve[I];
                                    F = z || "fixed-height" == r ? z : Sa.width;
                                    L = G || Sa.height
                                }
                                var E = r ? r : F || L ? "fluid" == L ? "fluid" : !L || F && "auto" != F ? L && F && (x || u) ? "responsive" : "fixed" : "fixed-height" : "container";
                                "fixed" != E && "fixed-height" != E && "responsive" != E && "intrinsic" != E || J(L, 'The "height" attribute is missing: %s', this);
                                "fixed-height" == E && J(!F || "auto" == F, 'The "width" attribute must be missing or "auto": %s', this);
                                "fixed" != E && "responsive" != E && "intrinsic" != E || J(F && "auto" !=
                                    F, 'The "width" attribute must be present and not "auto": %s', this);
                                "responsive" == E || "intrinsic" == E ? J(bf(F) == bf(L), 'Length units should be the same for "width" and "height": %s, %s, %s', q, t, this) : J(null === u, '"heights" attribute must be missing: %s', this);
                                this.classList.add("i-amphtml-layout-" + E);
                                $e(E) && this.classList.add("i-amphtml-layout-size-defined");
                                if ("nodisplay" == E) Qe(this, !1), this.style.display = "";
                                else if ("fixed" == E) Pe(this, { width: F, height: L });
                                else if ("fixed-height" == E) U(this, "height", L);
                                else if ("responsive" ==
                                    E) {
                                    var Cc = this.ownerDocument.defaultView;
                                    null == Ye && (Ye = Ge(Cc, "layout-aspect-ratio-css") && Cc.CSS && Cc.CSS.supports && Cc.CSS.supports("aspect-ratio: 1/1") || !1);
                                    if (Ye) U(this, "aspect-ratio", cf(F) + "/" + cf(L));
                                    else {
                                        var Dc = this.ownerDocument.createElement("i-amphtml-sizer");
                                        Dc.setAttribute("slot", "i-amphtml-svc");
                                        Pe(Dc, { paddingTop: cf(L) / cf(F) * 100 + "%" });
                                        this.insertBefore(Dc, this.firstChild);
                                        this.sizerElement = Dc
                                    }
                                } else if ("intrinsic" == E) {
                                    var ce = fe(this)(Te);
                                    ce.firstElementChild.setAttribute("src", e && this.ownerDocument ?
                                        Se(this.ownerDocument, cf(F), cf(L)) : 'data:image/svg+xml;charset=utf-8,<svg height="' + L + '" width="' + F + '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>');
                                    this.insertBefore(ce, this.firstChild);
                                    this.sizerElement = ce
                                } else "fill" != E && "container" != E && ("flex-item" == E ? (F && U(this, "width", F), L && U(this, "height", L)) : "fluid" == E && (this.classList.add("i-amphtml-layout-awaiting-size"), F && U(this, "width", F), U(this, "height", 0)));
                                this.setAttribute("i-amphtml-layout", E);
                                m = E
                            }
                            this.ma = m;
                            this.Pg()
                        } catch (Gl) { Jf(Gl, this) }
                        this.M &&
                            this.$c();
                        this.isUpgraded() || (this.classList.add("amp-unresolved"), this.classList.add("i-amphtml-unresolved"), this.ta("amp:stubbed"))
                    }
                    this.toggleLoading(!0)
                }
            };
            b.prototype.Rg = function() { return this.classList.contains("i-amphtml-layout-awaiting-size") };
            b.prototype.Dh = function() { this.classList.remove("i-amphtml-layout-awaiting-size") };
            b.prototype.$c = function(e) {
                if (!this.V1()) this.dg();
                else if (!this.Na)
                    if (Ci(this.getAmpDoc()).schedule(this), this.Ta) this.setReadyStateInternal(this.M && this.M.usesLoading(this) ?
                        "loading" : "mounting");
                    else if (this.setReadyStateInternal("building"), !e) {
                    var f = this.M.getPreconnects(this);
                    if (f && 0 < f.length) {
                        var h = this.getAmpDoc();
                        Hi(h, function() {
                            var k = h.win;
                            if (k) {
                                var l = gd(k);
                                f.forEach(function(m) { return l.url(h, m, !1) })
                            }
                        })
                    }
                }
            };
            b.prototype.dg = function() {
                var e = this;
                if (!this.lb && 1 == this.yb) {
                    var f = new this.M(this);
                    this.yb = 4;
                    var h = a.Date.now(),
                        k = f.upgradeCallback();
                    k ? "function" == typeof k.then ? k.then(function(l) { e.xd(l || f, h) }).catch(function(l) {
                        e.yb = 3;
                        cb(l)
                    }) : this.xd(k, h) : this.xd(f, h)
                }
            };
            b.prototype.disconnectedCallback = function() { this.disconnect(!1) };
            b.prototype.ff = function() { this.sd && this.A.attachedCallback() };
            b.prototype.disconnect = function(e) { this.lb || !this.Ka || !e && Pb(this) || (e && this.classList.remove("i-amphtml-element"), this.Ka = !1, this.getResources().remove(this), this.A && this.A.detachedCallback(), this.V1() && this.unmount(), this.toggleLoading(!1), this.kf()) };
            b.prototype.ta = function() {};
            b.prototype.prerenderAllowed = function() {
                return this.hasAttribute("noprerender") ? !1 : this.M ? this.M.prerenderAllowed(this) :
                    !1
            };
            b.prototype.isBuildRenderBlocking = function() { return this.A ? this.A.isBuildRenderBlocking() : !1 };
            b.prototype.createPlaceholder = function() { return this.A ? this.A.createPlaceholderCallback() : null };
            b.prototype.createLoaderLogo = function() { return this.M ? this.M.createLoaderLogoCallback(this) : {} };
            b.prototype.renderOutsideViewport = function() { return this.A ? this.A.renderOutsideViewport() : !1 };
            b.prototype.idleRenderOutsideViewport = function() { return this.A ? this.A.idleRenderOutsideViewport() : !1 };
            b.prototype.getLayoutBox =
                function() { return this.Ja().getLayoutBox() };
            b.prototype.getLayoutSize = function() { return this.Ja().getLayoutSize() };
            b.prototype.getOwner = function() { return this.Ja().getOwner() };
            b.prototype.getIntersectionChangeEntry = function() {
                var e = this.A ? this.A.getIntersectionElementLayoutBox() : this.getLayoutBox(),
                    f = this.getOwner(),
                    h = jd(this.getAmpDoc()).getRect(),
                    k = f && f.getLayoutBox(),
                    l = vc(e, k, h) || uc(0, 0, 0, 0);
                f = l.width * l.height;
                var m = e.width * e.height;
                f = 0 === m ? 0 : f / m;
                if (m = h) l = xc(l, -h.left, -h.top), e = xc(e, -h.left, -h.top),
                    m = xc(m, -h.left, -h.top);
                return { time: "undefined" !== typeof performance && performance.now ? performance.now() : Date.now() - ui, rootBounds: m, boundingClientRect: e, intersectionRect: l, intersectionRatio: f }
            };
            b.prototype.Ja = function() { return this.getResources().getResourceForElement(this) };
            b.prototype.getResourceId = function() { return this.Ja().getId() };
            b.prototype.isRelayoutNeeded = function() { return this.A ? this.A.isRelayoutNeeded() : !1 };
            b.prototype.getImpl = function(e) {
                var f = this;
                e = void 0 === e ? !0 : e;
                return (e ? this.build() :
                    this.hf()).then(function() { return f.A })
            };
            b.prototype.hf = function() { var e = this; return this.C.whenSignal("ready-upgrade").then(function() { e.dg(); return e.whenUpgraded() }) };
            b.prototype.getApi = function() { return this.getImpl().then(function(e) { return e.getApi() }) };
            b.prototype.getLayout = function() { return this.ma };
            b.prototype.layoutCallback = function(e) {
                var f = this;
                this.isBuilt();
                if (e.aborted) return Promise.reject(Lf());
                this.ta("amp:load-start");
                var h = 0 == this.va;
                this.C.reset("unload");
                h && this.C.signal("load-start");
                this.toggleLoading(!0);
                var k = oa(function() { return f.A.layoutCallback() });
                this.preconnect(!0);
                this.classList.add("i-amphtml-layout");
                return k.then(function() {
                    if (e.aborted) throw Lf();
                    h && f.C.signal("load-end");
                    f.setReadyStateInternal("complete");
                    f.va++;
                    f.toggleLoading(!1);
                    f.Ud || (f.A.firstLayoutCompleted(), f.Ud = !0, f.ta("amp:load-end"))
                }, function(l) {
                    if (e.aborted) throw Lf();
                    h && f.C.rejectSignal("load-end", l);
                    f.setReadyStateInternal("error", l);
                    f.va++;
                    f.toggleLoading(!1);
                    throw l;
                })
            };
            b.prototype.pause = function() {
                this.isBuilt() &&
                    (this.A.pauseCallback(), !this.V1() && this.A.unlayoutOnPause() && this.eg())
            };
            b.prototype.resume = function() { this.isBuilt() && this.A.resumeCallback() };
            b.prototype.unlayoutCallback = function() {
                if (!this.isBuilt()) return !1;
                this.C.signal("unload");
                var e = this.A.unlayoutCallback();
                e && this.qe();
                this.ta("amp:unload");
                return e
            };
            b.prototype.eg = function() {
                this.Ja().unlayout();
                this.Ka && this.o && this.o.schedulePass()
            };
            b.prototype.qe = function() {
                this.va = 0;
                this.Ud = !1;
                this.C.reset("mounted");
                this.C.reset("render-start");
                this.C.reset("load-start");
                this.C.reset("load-end");
                this.C.reset("ini-load")
            };
            b.prototype.reconstructWhenReparented = function() { return this.A ? this.A.reconstructWhenReparented() : !1 };
            b.prototype.collapse = function() { this.A && this.A.collapse() };
            b.prototype.collapsedCallback = function(e) { this.A && this.A.collapsedCallback(e) };
            b.prototype.expand = function() { this.A && this.A.expand() };
            b.prototype.mutatedAttributesCallback = function(e) { this.A && this.A.mutatedAttributesCallback(e) };
            b.prototype.enqueAction = function(e) {
                this.isBuilt() ?
                    this.pf(e, !1) : (void 0 === this.Sa && (this.Sa = []), this.Sa.push(e), this.build())
            };
            b.prototype.yg = function() {
                var e = this;
                if (this.Sa) {
                    var f = this.Sa;
                    this.Sa = null;
                    f.forEach(function(h) { e.pf(h, !0) })
                }
            };
            b.prototype.pf = function(e, f) { try { this.A.executeAction(e, f) } catch (h) { cb("Action execution failed:", h, e.node.tagName, e.method) } };
            b.prototype.Eg = function() {
                var e = this.getAttribute("data-block-on-consent");
                if (null === e)
                    if ((e = this.getAmpDoc().getMetaByName("amp-consent-blocking")) ? (e = e.toUpperCase().replace(/\s+/g, ""),
                            e = e.split(",").includes(this.tagName)) : e = !1, e) e = "default", this.setAttribute("data-block-on-consent", e);
                    else return null;
                return "" == e || "default" == e ? this.A.getConsentPolicy() : e
            };
            b.prototype.Fg = function() { var e, f; return null == (e = this.getAttribute("data-block-on-consent-purposes") || null) ? void 0 : null == (f = e.replace(/\s+/g, "")) ? void 0 : f.split(",") };
            b.prototype.getRealChildNodes = function() { return Wb(this, function(e) { return !Xi(e) }) };
            b.prototype.getRealChildren = function() { return Ub(this, function(e) { return !Xi(e) }) };
            b.prototype.getPlaceholder = function() { return Vb(this, function(e) { return e.hasAttribute("placeholder") && !("placeholder" in e) }) };
            b.prototype.togglePlaceholder = function(e) {
                if (e)(e = this.getPlaceholder()) && e.classList.remove("amp-hidden");
                else {
                    /^[\w-]+$/.test("placeholder");
                    e = (void 0 !== Fb ? Fb : Fb = Gb(this)) ? this.querySelectorAll("> [placeholder]".replace(/^|,/g, "$&:scope ")) : Zb(this, "> [placeholder]");
                    for (var f = 0; f < e.length; f++) "placeholder" in e[f] || e[f].classList.add("amp-hidden")
                }
            };
            b.prototype.getFallback =
                function() { return Xb(this, "fallback") };
            b.prototype.toggleFallback = function(e) {
                var f = this.Ja().getState();
                if (!e || 0 != f && 1 != f && 2 != f)
                    if (this.classList.toggle("amp-notsupported", e), 1 == e) {
                        var h = this.getFallback();
                        h && Jc(this.getAmpDoc(), "owners").scheduleLayout(this, h)
                    }
            };
            b.prototype.renderStarted = function() {
                this.C.signal("render-start");
                this.togglePlaceholder(!1);
                this.toggleLoading(!1)
            };
            b.prototype.Wg = function(e) {
                var f = 0 < this.va || this.C.get("render-start");
                (e = "nodisplay" == this.ma || this.hasAttribute("noloading") ||
                    f && !e) || (e = this.tagName.toUpperCase(), e = !(We[e] || ("AMP-VIDEO" == e ? 0 : Xe.test(e))));
                return e || Xi(this) ? !1 : !0
            };
            b.prototype.toggleLoading = function(e, f) {
                f = void 0 === f ? !1 : f;
                if (this.ownerDocument && this.ownerDocument.defaultView) {
                    var h = Kc(this.getAmpDoc(), "loadingIndicator");
                    h && ((e = e && this.Wg(f)) ? h.track(this) : h.untrack(this))
                }
            };
            b.prototype.getOverflowElement = function() {
                void 0 === this.pa && (this.pa = Xb(this, "overflow")) && (this.pa.hasAttribute("tabindex") || this.pa.setAttribute("tabindex", "0"), this.pa.hasAttribute("role") ||
                    this.pa.setAttribute("role", "button"));
                return this.pa
            };
            b.prototype.overflowCallback = function(e, f, h) {
                var k = this;
                this.getOverflowElement();
                this.pa ? (this.pa.classList.toggle("amp-visible", e), this.pa.onclick = e ? function() {
                    var l = fd(k.getAmpDoc());
                    l.forceChangeSize(k, f, h);
                    l.mutateElement(k, function() { k.overflowCallback(!1, f, h) })
                } : null) : e && this.warnOnMissingOverflow && D().warn("CustomElement", "Cannot resize element and overflow is not available", this)
            };
            b.prototype.gh = function(e) {
                var f = void 0 === f ? !1 : f;
                this.B ?
                    fd(this.getAmpDoc()).mutateElement(this, e, f) : e()
            };
            ca.Object.defineProperties(b.prototype, { readyState: { configurable: !0, enumerable: !0, get: function() { return this.Ya } } });
            a.__AMP_BASE_CE_CLASS = b;
            return a.__AMP_BASE_CE_CLASS
        }

        function Xi(a) { var b = "string" == typeof a ? a : a.tagName; return b && b.toLowerCase().startsWith("i-") || a.tagName && (a.hasAttribute("placeholder") || a.hasAttribute("fallback") || a.hasAttribute("overflow")) ? !0 : !1 };
        var Yi = new WeakMap;

        function Zi(a) { a.__AMP_EXTENDED_ELEMENTS || (a.__AMP_EXTENDED_ELEMENTS = {}); return a.__AMP_EXTENDED_ELEMENTS }

        function $i(a, b, c) {
            var d = aj(a, c);
            d ? d.then(function() { return bj(a, b, c) }) : bj(a, b, c)
        }

        function bj(a, b, c) {
            var d = Zi(a);
            if (!d[b]) cj(a, b, c);
            else if (d[b] != c) {
                J(d[b] == Y, "%s is already registered. The script tag for %s is likely included twice in the page.", b, b);
                d[b] = c;
                for (var e = 0; e < Ti.length; e++) {
                    var f = Ti[e];
                    if (f.tagName.toLowerCase() == b && f.ownerDocument.defaultView == a) {
                        try { f.upgrade(c) } catch (h) { Jf(h, f) }
                        Ti.splice(e--, 1)
                    }
                }
            }
        }

        function aj(a, b) { if (b.requiresShadowDom() && !a.Element.prototype.attachShadow) return ed(a).importUnwrapped(a, "amp-shadow-dom-polyfill") }

        function dj(a) {
            Zc(a.getHeadNode()).forEach(function(b) {
                var c = b.extensionId;
                a.declareExtension(c, b.extensionVersion);
                ej(a.win, c)
            });
            a.isBodyAvailable() && a.setExtensionsKnown()
        }

        function ej(a, b) { Zi(a)[b] || cj(a, b, Y) }

        function cj(a, b, c) {
            Zi(a)[b] = c;
            var d = Ui(a);
            a.customElements.define(b, d)
        }

        function Wi(a, b, c) {
            Yi.has(a) || (Yi.set(a, !0), dj(a));
            b = b.localName;
            c || a.declaresExtension(b) || ed(a.win).installExtensionForDoc(a, b, "0.1")
        };
        var fj = "alt aria-describedby aria-label aria-labelledby crossorigin referrerpolicy title sizes srcset src".split(" ");

        function gj(a) {
            V.call(this, a);
            this.mc = !0;
            this.Yc = this.Zc = this.F = null;
            this.Yf = 0
        }
        ja(gj, V);
        gj.requiresShadowDom = V.requiresShadowDom;
        gj.getBuildPriority = V.getBuildPriority;
        gj.createLoaderLogoCallback = V.createLoaderLogoCallback;
        gj.deferredMount = V.deferredMount;
        gj.V1 = function() { return !1 };
        gj.prerenderAllowed = function() { return !0 };
        gj.usesLoading = function() { return !0 };
        gj.getPreconnects = function(a) {
            var b = a.getAttribute("src");
            if (b) return [b];
            if (a = a.getAttribute("srcset"))
                if (a = /\S+/.exec(a)) return [a[0]];
            return null
        };
        g = gj.prototype;
        g.mutatedAttributesCallback = function(a) {
            if (this.F) {
                var b = fj.filter(function(c) { return void 0 !== a[c] });
                a.src && !a.srcset && this.element.hasAttribute("srcset") && (this.element.removeAttribute("srcset"), b.push("srcset"), this.user().warn("amp-img", "Removed [srcset] since [src] was mutated. Recommend adding a [srcset] binding to support responsive images.", this.element));
                this.propagateAttributes(b, this.F, !0);
                this.propagateDataset(this.F);
                Re(this.F);
                gj.V1() && !this.F.complete && this.setReadyState("loading")
            }
        };
        g.preconnectCallback = function(a) {
            var b = this.element.getAttribute("src");
            b ? gd(this.win).url(this.getAmpDoc(), b, a) : (b = this.element.getAttribute("srcset")) && (b = /\S+/.exec(b)) && gd(this.win).url(this.getAmpDoc(), b[0], a)
        };
        g.isLayoutSupported = function(a) { return $e(a) };
        g.Nb = function() {
            if (this.F) return this.F;
            this.mc = !this.element.hasAttribute("fallback");
            var a = this.element.hasAttribute("i-amphtml-ssr");
            a && (this.F = Yb(this.element, "> img:not([placeholder])"));
            this.F = this.F || new Image;
            this.F.setAttribute("decoding", "async");
            this.element.id && this.F.setAttribute("amp-img-id", this.element.id);
            "img" == this.element.getAttribute("role") && (this.element.removeAttribute("role"), this.user().error("amp-img", "Setting role=img on amp-img elements breaks screen readers please just set alt or ARIA attributes, they will be correctly propagated for the underlying <img> element."));
            if (this.F && !this.element.hasAttribute("i-amphtml-ssr") && !this.element.hasAttribute("sizes") && !this.F.hasAttribute("sizes")) {
                var b = this.element.getAttribute("srcset");
                if (b && !/[0-9]+x(?:,|$)/.test(b) && (b = this.element.getLayoutSize().width, this.F.hasAttribute("sizes") ? b > this.Yf : 1)) {
                    var c = this.getViewport().getWidth(),
                        d = "(max-width: " + c + "px) " + b + "px, ",
                        e = b + "px";
                    "fixed" !== this.getLayout() && (e = Math.max(Math.round(100 * b / c), 100) + "vw");
                    this.F.setAttribute("sizes", d + e);
                    this.Yf = b
                }
            }
            this.propagateAttributes(fj,
                this.F);
            this.propagateDataset(this.F);
            Re(this.F);
            this.applyFillContent(this.F, !0);
            b = this.element;
            c = this.F;
            b.hasAttribute("object-fit") && U(c, "object-fit", b.getAttribute("object-fit"));
            b.hasAttribute("object-position") && U(c, "object-position", b.getAttribute("object-position"));
            a || this.element.appendChild(this.F);
            return this.F
        };
        g.reconstructWhenReparented = function() { return !1 };
        g.mountCallback = function() {
            var a = this,
                b = !!this.F,
                c = this.Nb();
            b || (gf(c, "load", function() {
                a.setReadyState("complete");
                a.firstLayoutCompleted();
                hj(a)
            }), gf(c, "error", function(d) {
                a.setReadyState("error", d);
                ij(a)
            }));
            c.complete ? (this.setReadyState("complete"), this.firstLayoutCompleted(), hj(this)) : this.setReadyState("loading")
        };
        g.unmountCallback = function() {
            var a = this.F;
            a && !a.complete && (a.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=", Nb(a), this.F = null)
        };
        g.ensureLoaded = function() { this.F.loading = "eager" };
        g.layoutCallback = function() {
            var a = this;
            this.Nb();
            var b = this.F;
            this.Zc = gf(b, "load", function() { return hj(a) });
            this.Yc = gf(b, "error", function() { return ij(a) });
            return 0 >= this.element.getLayoutSize().width ? p() : this.loadPromise(b)
        };
        g.unlayoutCallback = function() {
            if (!gj.V1()) {
                this.Yc && (this.Yc(), this.Yc = null);
                this.Zc && (this.Zc(), this.Zc = null);
                var a = this.F;
                a && !a.complete && (a.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=", Nb(a), this.F = null);
                return !0
            }
        };
        g.firstLayoutCompleted = function() {
            var a = this.getPlaceholder();
            a && a.classList.contains("i-amphtml-blurry-placeholder") ? Oe(a, { opacity: 0 }) : this.togglePlaceholder(!1)
        };

        function hj(a) {!a.mc && a.F.classList.contains("i-amphtml-ghost") && (a.F.classList.remove("i-amphtml-ghost"), a.toggleFallback(!1)) }

        function ij(a) { a.mc && (a.F.classList.add("i-amphtml-ghost"), a.toggleFallback(!0), a.togglePlaceholder(!1), a.mc = !1) }
        g.propagateDataset = function(a) { for (var b in a.dataset) b in this.element.dataset || delete a.dataset[b]; for (var c in this.element.dataset) c.startsWith("ampBind") && "ampBind" !== c || a.dataset[c] !== this.element.dataset[c] && (a.dataset[c] = this.element.dataset[c]) };

        function jj(a, b, c) {
            var d = this;
            this.S = O(a);
            this.Mg = b;
            this.xg = c || 0;
            this.za = -1;
            this.he = 0;
            this.Za = !1;
            this.rg = function() { d.Hc() }
        }
        jj.prototype.isPending = function() { return -1 != this.za };
        jj.prototype.schedule = function(a) {
            var b = a || this.xg;
            this.Za && 10 > b && (b = 10);
            var c = Date.now() + b;
            return !this.isPending() || -10 > c - this.he ? (this.cancel(), this.he = c, this.za = this.S.delay(this.rg, b), !0) : !1
        };
        jj.prototype.Hc = function() {
            this.za = -1;
            this.he = 0;
            this.Za = !0;
            this.Mg();
            this.Za = !1
        };
        jj.prototype.cancel = function() { this.isPending() && (this.S.cancel(this.za), this.za = -1) };

        function kj(a) {
            this.win = a;
            this.pg = this.hh.bind(this);
            this.qg = this.ih.bind(this);
            this.nd = this.Qe = this.od = null;
            this.rc = "ontouchstart" in a || void 0 !== a.navigator.maxTouchPoints && 0 < a.navigator.maxTouchPoints || void 0 !== a.DocumentTouch;
            H().fine("Input", "touch detected:", this.rc);
            this.Sb = !1;
            this.win.document.addEventListener("keydown", this.pg);
            this.win.document.addEventListener("mousedown", this.qg);
            this.Jd = !0;
            this.Hf = 0;
            this.Jh = new W;
            this.If = new W;
            this.Zd = new W;
            this.rc && (this.Jd = !this.rc, this.od = this.jh.bind(this),
                hf(a.document, "mousemove", this.od))
        }
        g = kj.prototype;
        g.setupInputModeClasses = function(a) {
            var b = this;
            this.onTouchDetected(function(c) { lj(b, a, "amp-mode-touch", c) }, !0);
            this.onMouseDetected(function(c) { lj(b, a, "amp-mode-mouse", c) }, !0);
            this.onKeyboardStateChanged(function(c) { lj(b, a, "amp-mode-keyboard-active", c) }, !0)
        };
        g.isTouchDetected = function() { return this.rc };
        g.onTouchDetected = function(a, b) { b && a(this.isTouchDetected()); return this.Jh.add(a) };
        g.isMouseDetected = function() { return this.Jd };
        g.onMouseDetected = function(a, b) { b && a(this.isMouseDetected()); return this.If.add(a) };
        g.isKeyboardActive = function() { return this.Sb };
        g.onKeyboardStateChanged = function(a, b) { b && a(this.isKeyboardActive()); return this.Zd.add(a) };

        function lj(a, b, c, d) { b.waitForBodyOpen().then(function(e) { id(a.win).mutate(function() { e.classList.toggle(c, d) }) }) }
        g.hh = function(a) { this.Sb || a.defaultPrevented || (a = a.target, a && ("INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "OPTION" == a.tagName || a.hasAttribute("contenteditable"))) || (this.Sb = !0, this.Zd.fire(!0), H().fine("Input", "keyboard activated")) };
        g.ih = function() { this.Sb && (this.Sb = !1, this.Zd.fire(!1), H().fine("Input", "keyboard deactivated")) };
        g.jh = function(a) {
            var b = this;
            if (a.sourceCapabilities && a.sourceCapabilities.firesTouchEvents) this.Gf();
            else {
                this.nd || (this.nd = this.fh.bind(this), this.Qe = this.Gf.bind(this));
                var c, d = jf(this.win.document, function(e) { c = e });
                return O(this.win).timeoutPromise(300, d).then(this.Qe, function() {
                    c && c();
                    b.nd()
                })
            }
        };
        g.fh = function() {
            this.Jd = !0;
            this.If.fire(!0);
            H().fine("Input", "mouse detected")
        };
        g.Gf = function() {
            this.Hf++;
            3 >= this.Hf ? hf(this.win.document, "mousemove", this.od) : H().fine("Input", "mouse detection failed")
        };

        function mj() { V.apply(this, arguments) }
        ja(mj, V);
        mj.requiresShadowDom = V.requiresShadowDom;
        mj.getPreconnects = V.getPreconnects;
        mj.getBuildPriority = V.getBuildPriority;
        mj.createLoaderLogoCallback = V.createLoaderLogoCallback;
        mj.usesLoading = V.usesLoading;
        mj.deferredMount = V.deferredMount;
        mj.V1 = V.V1;
        mj.prerenderAllowed = function() { return !0 };
        mj.prototype.isLayoutSupported = function(a) { return "container" == a || $e(a) };
        mj.prototype.buildCallback = function() {
            if ("container" != this.getLayout()) {
                var a = this.win.document.createElement("div");
                this.applyFillContent(a);
                this.getRealChildNodes().forEach(function(b) { a.appendChild(b) });
                this.element.appendChild(a)
            }
        };

        function nj(a, b) { return ed(a.win).installExtensionForDoc(a, "amp-loader").then(function() { return $c(b, "loader", "amp-loader") }) }

        function oj(a, b, c, d, e) {
            var f = e = void 0 === e ? a.win.Date.now() : e,
                h = b.ownerDocument.createElement("div");
            nj(a, b).then(function(k) {
                var l = a.win.Date.now() - f;
                k.initializeLoader(b, h, l, c, d)
            });
            return h
        };

        function pj(a, b) {
            var c = void 0 === c ? {} : c;
            var d = c.threshold,
                e = c.needsRootBounds;
            c = dc(b) && e ? b.document : void 0;
            return new b.IntersectionObserver(a, { threshold: d, root: c })
        }
        new WeakMap;
        new WeakMap;
        var qj = ['<div slot=i-amphtml-svc class="i-amphtml-svc i-amphtml-loading-container i-amphtml-fill-content amp-hidden"></div>'];

        function rj(a) {
            this.B = a;
            a = a.win;
            var b = this.Og.bind(this);
            this.Qd = pj(function(c) { return c.forEach(b) }, a);
            this.Ra = new WeakMap
        }
        g = rj.prototype;
        g.dispose = function() { this.Qd.disconnect() };
        g.track = function(a) { this.Qd.observe(a) };
        g.untrack = function(a) {
            this.Qd.unobserve(a);
            this.df(a)
        };
        g.Og = function(a) {
            var b = a.boundingClientRect,
                c = b.width,
                d = b.height;
            b = a.target;
            a = a.isIntersecting && 20 < c && 20 < d;
            var e = this.Ra.get(b);
            a !== (e && e.shown || !1) && (a && !e && (e = Date.now(), c = oj(this.B, b, c, d, e), d = fe(this.B.win.document)(qj), d.appendChild(c), b.appendChild(d), e = { shown: !1, loader: c, container: d }, this.Ra.set(b, e)), e && (e.shown = a, e.container.classList.toggle("amp-hidden", !a), e.loader.classList.toggle("amp-active", a)))
        };
        g.df = function(a) {
            var b = this.Ra.get(a);
            b && (this.Ra.delete(a), Nb(b.container))
        };

        function sj(a) {
            var b = this;
            this.win = a;
            this.ph = 6E4;
            this.R = [];
            this.Kf = new W;
            this.af = function(c) { Ya(c.target) && tj(b, c.target) };
            this.$e = function() { O(a).delay(function() { b.win.document.activeElement && tj(b, b.win.document.activeElement) }, 500) };
            this.win.document.addEventListener("focus", this.af, !0);
            this.win.addEventListener("blur", this.$e)
        }
        g = sj.prototype;
        g.df = function() {
            this.win.document.removeEventListener("focus", this.af, !0);
            this.win.removeEventListener("blur", this.$e)
        };
        g.onFocus = function(a) { return this.Kf.add(a) };

        function tj(a, b) {
            var c = Date.now();
            0 == a.R.length || a.R[a.R.length - 1].el != b ? a.R.push({ el: b, time: c }) : a.R[a.R.length - 1].time = c;
            a.purgeBefore(c - a.ph);
            a.Kf.fire(b)
        }
        g.getLast = function() { return 0 == this.R.length ? null : this.R[this.R.length - 1].el };
        g.purgeBefore = function(a) {
            for (var b = this.R.length - 1, c = 0; c < this.R.length; c++)
                if (this.R[c].time >= a) { b = c - 1; break } - 1 != b && this.R.splice(0, b + 1)
        };
        g.hasDescendantsOf = function(a) {
            this.win.document.activeElement && tj(this, this.win.document.activeElement);
            for (var b = 0; b < this.R.length; b++)
                if (a.contains(this.R[b].el)) return !0;
            return !1
        };

        function uj(a) {
            var b = this;
            this.ampdoc = a;
            this.win = a.win;
            this.o = hd(a);
            this.L = jd(this.ampdoc);
            this.J = id(this.win);
            this.hd = new sj(this.win);
            this.hd.onFocus(function(c) { vj(b, c) })
        }
        g = uj.prototype;
        g.forceChangeSize = function(a, b, c, d, e) { wj(this, Z(a), b, c, e, void 0, !0, d) };
        g.requestChangeSize = function(a, b, c, d, e) { var f = this; return new Promise(function(h, k) { wj(f, Z(a), b, c, d, e, !1, function(l) { l ? h() : k(Error("changeSize attempt denied")) }) }) };
        g.expandElement = function(a) {
            Z(a).completeExpand();
            this.o.schedulePass(70)
        };
        g.attemptCollapse = function(a) { var b = this; return new Promise(function(c, d) { wj(b, Z(a), 0, 0, void 0, void 0, !1, function(e) { e ? (Z(a).completeCollapse(), c()) : d(H().createExpectedError("collapse attempt denied")) }) }) };
        g.collapseElement = function(a) {
            var b = this.L.getLayoutRect(a);
            0 != b.width && 0 != b.height && (Ge(this.win, "dirty-collapse-element") ? this.dirtyElement(a) : this.o.setRelayoutTop(b.top));
            Z(a).completeCollapse();
            this.o.schedulePass(70)
        };
        g.measureElement = function(a) { return this.J.measurePromise(a) };
        g.mutateElement = function(a, b, c) { return xj(this, a, null, b, c) };
        g.measureMutateElement = function(a, b, c) { return xj(this, a, b, c) };

        function xj(a, b, c, d, e) {
            function f() { var l = a.L.getLayoutRect(b); return 0 != l.width && 0 != l.height ? l.top : -1 }
            var h = void 0 === e ? !1 : e,
                k = -1;
            return a.J.runPromise({
                measure: function() {
                    c && c();
                    h || (k = f())
                },
                mutate: function() {
                    d();
                    if (!h) {
                        b.classList.contains("i-amphtml-element") && Z(b).requestMeasure();
                        for (var l = b.getElementsByClassName("i-amphtml-element"), m = 0; m < l.length; m++) Z(l[m]).requestMeasure();
                        a.o.schedulePass(70); - 1 != k && a.o.setRelayoutTop(k);
                        a.J.measure(function() {
                            var n = f(); - 1 != n && n != k && (a.o.setRelayoutTop(n),
                                a.o.schedulePass(70));
                            a.o.maybeHeightChanged()
                        })
                    }
                }
            })
        }
        g.dirtyElement = function(a) {
            var b = !1;
            a.classList.contains("i-amphtml-element") ? (a = Z(a), this.o.setRelayoutTop(a.getLayoutBox().top)) : b = !0;
            this.o.schedulePass(70, b)
        };

        function vj(a, b) {
            var c = Rb(b, function(e) { return !!Z(e) });
            if (c) {
                b = Z(c);
                var d = b.getPendingChangeSize();
                void 0 !== d && wj(a, b, d.height, d.width, d.margins, void 0, !0)
            }
        }

        function wj(a, b, c, d, e, f, h, k) {
            b.hasBeenMeasured() && !e ? yj(a, b, c, d, void 0, f, h, k) : a.J.measure(function() {
                b.hasBeenMeasured() || b.measure();
                if (e) {
                    var l = a.win.getComputedStyle(b.element) || Me;
                    l = { top: parseInt(l.marginTop, 10) || 0, right: parseInt(l.marginRight, 10) || 0, bottom: parseInt(l.marginBottom, 10) || 0, left: parseInt(l.marginLeft, 10) || 0 };
                    l = { newMargins: e, currentMargins: l }
                } else l = void 0;
                yj(a, b, c, d, l, f, h, k)
            })
        }

        function yj(a, b, c, d, e, f, h, k) {
            b.resetPendingChangeSize();
            var l = b.getLayoutSize(),
                m;
            if (!(m = void 0 !== c && c != l.height || void 0 !== d && d != l.width) && (m = void 0 !== e)) {
                m = e.currentMargins;
                var n = e.newMargins;
                m = void 0 !== n.top && n.top != m.top || void 0 !== n.right && n.right != m.right || void 0 !== n.bottom && n.bottom != m.bottom || void 0 !== n.left && n.left != m.left
            }
            m ? (a.o.updateOrEnqueueMutateTask(b, { resource: b, newHeight: c, newWidth: d, marginChange: e, event: f, force: h, callback: k }), a.o.schedulePassVsync()) : (void 0 === c && void 0 === d && void 0 ===
                e && H().error("Mutator", "attempting to change size with undefined dimensions", b.debugid), k && k(!0))
        };

        function zj(a) { return w(a) ? a : [a] }

        function Aj(a) { this.o = hd(a) }
        g = Aj.prototype;
        g.setOwner = function(a, b) {
            b.contains(a);
            Z(a) && Z(a).updateOwner(b);
            a.__AMP__OWNER = b;
            a = a.getElementsByClassName("i-amphtml-element");
            for (b = 0; b < a.length; b++) {
                var c = a[b];
                Z(c) && Z(c).updateOwner(void 0)
            }
        };
        g.schedulePreload = function(a, b) { Bj(this, this.o.getResourceForElement(a), zj(b)) };
        g.scheduleLayout = function(a, b) { Bj(this, this.o.getResourceForElement(a), zj(b)) };
        g.schedulePause = function(a, b) {
            var c = this.o.getResourceForElement(a);
            b = zj(b);
            Cj(this, c, b, function(d) { d.pause() })
        };
        g.scheduleResume = function(a, b) {
            a = this.o.getResourceForElement(a);
            b = zj(b);
            Cj(this, a, b, function(c) { c.resume() })
        };
        g.scheduleUnlayout = function(a, b) {
            a = this.o.getResourceForElement(a);
            b = zj(b);
            Cj(this, a, b, function(c) { c.unlayout() })
        };
        g.requireLayout = function(a) {
            var b = [];
            Dj(this, a, function(c) { b.push(c.element.ensureLoaded()) });
            return Promise.all(b)
        };

        function Cj(a, b, c, d) {
            c.forEach(function(e) {
                b.element.contains(e);
                Dj(a, e, d)
            })
        }

        function Dj(a, b, c) {
            if (b.classList.contains("i-amphtml-element")) c(a.o.getResourceForElement(b)), (b = b.getPlaceholder()) && Dj(a, b, c);
            else {
                b = b.getElementsByClassName("i-amphtml-element");
                for (var d = [], e = 0; e < b.length; e++) {
                    for (var f = b[e], h = !1, k = 0; k < d.length; k++)
                        if (d[k].contains(f)) { h = !0; break }
                    h || (d.push(f), c(a.o.getResourceForElement(f)))
                }
            }
        }

        function Bj(a, b, c) { Cj(a, b, c, function(d) { d.element.ensureLoaded(b.getLayoutPriority()) }) };

        function Ej(a, b) {
            if ("referrerPolicy" in Image.prototype) return Fj(a, b, !0);
            var c = Ob(a.document);
            c.onload = function() { Fj(c.contentWindow, b) };
            a.document.body.appendChild(c);
            return c
        }

        function Fj(a, b, c) {
            var d = c = void 0 === c ? !1 : c;
            a = new a.Image;
            d && (a.referrerPolicy = "no-referrer");
            a.src = b;
            return a
        };

        function Gj(a) {
            V.call(this, a);
            this.ze = null
        }
        ja(Gj, V);
        Gj.requiresShadowDom = V.requiresShadowDom;
        Gj.getPreconnects = V.getPreconnects;
        Gj.getBuildPriority = V.getBuildPriority;
        Gj.createLoaderLogoCallback = V.createLoaderLogoCallback;
        Gj.usesLoading = V.usesLoading;
        Gj.prerenderAllowed = V.prerenderAllowed;
        Gj.deferredMount = V.deferredMount;
        Gj.V1 = V.V1;
        Gj.prototype.isLayoutSupported = function() { return !0 };
        Gj.prototype.buildCallback = function() {
            this.element.setAttribute("aria-hidden", "true");
            (this.Jc = this.element.getAttribute("referrerpolicy")) && J("no-referrer" == this.Jc, 'amp-pixel: invalid "referrerpolicy" value "' + this.Jc + '". Only "no-referrer" is supported');
            this.element.hasAttribute("i-amphtml-ssr") && this.element.querySelector("img") ? H().info("amp-pixel", "inabox img already present") : this.getAmpDoc().whenFirstVisible().then(this.Kh.bind(this))
        };
        Gj.prototype.Kh = function() {
            var a = this;
            if (this.ze) return H().error("amp-pixel", "duplicate pixel"), this.ze;
            this.ze = O(this.win).promise(1).then(function() {
                var b = a.element.getAttribute("src");
                if (b) {
                    var c = Kc(a.element, "url-replace"),
                        d = c.expandUrlAsync;
                    J(/^(https:\/\/|\/\/)/i.test(b), 'The <amp-pixel> src attribute must start with "https://" or "//". Invalid value: ' + b);
                    return d.call(c, b).then(function(e) {
                        if (a.win) {
                            var f = a.win;
                            var h = a.Jc;
                            h && "no-referrer" !== h && D().error("pixel", "Unsupported referrerPolicy: %s",
                                h);
                            f = "no-referrer" === h ? Ej(f, e) : Fj(f, e);
                            H().info("amp-pixel", "pixel triggered: ", e);
                            return f
                        }
                    })
                }
            })
        };

        function Hj(a) {
            this.V = a.navigator;
            this.G = a
        }
        g = Hj.prototype;
        g.isAndroid = function() { return /Android/i.test(this.V.userAgent) };
        g.isIos = function() { return /iPhone|iPad|iPod/i.test(this.V.userAgent) };
        g.isSafari = function() { return /Safari/i.test(this.V.userAgent) && !this.isChrome() && !this.isIe() && !this.isEdge() && !this.isFirefox() && !this.isOpera() };
        g.isChrome = function() { return /Chrome|CriOS/i.test(this.V.userAgent) && !this.isEdge() && !this.isOpera() };
        g.isFirefox = function() { return /Firefox|FxiOS/i.test(this.V.userAgent) && !this.isEdge() };
        g.isOpera = function() { return /OPR\/|Opera|OPiOS/i.test(this.V.userAgent) };
        g.isIe = function() { return /Trident|MSIE|IEMobile/i.test(this.V.userAgent) };
        g.isEdge = function() { return /Edge/i.test(this.V.userAgent) };
        g.isWebKit = function() { return /WebKit/i.test(this.V.userAgent) && !this.isEdge() };
        g.isWindows = function() { return /Windows/i.test(this.V.userAgent) };
        g.isStandalone = function() { return this.isIos() && this.V.standalone || this.isChrome() && this.G.matchMedia("(display-mode: standalone)").matches };
        g.isBot = function() { return /bot/i.test(this.V.userAgent) };
        g.getMajorVersion = function() { return this.isSafari() ? this.isIos() ? this.getIosMajorVersion() || 0 : Ij(this, /\sVersion\/(\d+)/, 1) : this.isChrome() ? Ij(this, /(Chrome|CriOS)\/(\d+)/, 2) : this.isFirefox() ? Ij(this, /(Firefox|FxiOS)\/(\d+)/, 2) : this.isOpera() ? Ij(this, /(OPR|Opera|OPiOS)\/(\d+)/, 2) : this.isIe() ? Ij(this, /MSIE\s(\d+)/, 1) : this.isEdge() ? Ij(this, /Edge\/(\d+)/, 1) : 0 };

        function Ij(a, b, c) {
            if (!a.V.userAgent) return 0;
            a = a.V.userAgent.match(b);
            return !a || c >= a.length ? 0 : parseInt(a[c], 10)
        }
        g.getIosVersionString = function() { if (!this.V.userAgent || !this.isIos()) return ""; var a = this.V.userAgent.match(/OS ([0-9]+[_.][0-9]+([_.][0-9]+)?)\b/); return a ? a = a[1].replace(/_/g, ".") : "" };
        g.getIosMajorVersion = function() { var a = this.getIosVersionString(); return "" == a ? null : Number(a.split(".")[0]) };

        function Jj(a) { return "loading" != a.readyState && "uninitialized" != a.readyState }

        function Kj(a) { return "complete" == a.readyState }

        function Lj(a, b) { Mj(a, Jj, b) }

        function Mj(a, b, c) {
            var d = b(a);
            if (d) c(a);
            else {
                var e = function() { b(a) && (d || (d = !0, c(a)), a.removeEventListener("readystatechange", e)) };
                a.addEventListener("readystatechange", e)
            }
        }

        function Nj(a) { return new Promise(function(b) { Lj(a, b) }) }

        function Oj(a) { return new Promise(function(b) { Mj(a, Kj, b) }) };
        var Pj = ["<link rel=preload referrerpolicy=origin>"],
            Qj = null;

        function Rj(a) {
            this.Dd = a.document;
            this.Kd = a.document.head;
            this.Xb = {};
            this.hg = {};
            this.xa = P(a);
            this.Xb[R(a.location.href).origin] = !0;
            a: {
                if (!Qj) {
                    var b = a.document.createElement("link");
                    var c = b.relList;
                    b.as = "invalid-value";
                    if (!c || !c.supports) { b = {}; break a }
                    Qj = { preconnect: c.supports("preconnect"), preload: c.supports("preload"), onlyValidAs: "invalid-value" != b.as }
                }
                b = Qj
            }
            this.pc = b;
            this.S = O(a)
        }
        Rj.prototype.url = function(a, b, c) {
            var d = this;
            a.whenFirstVisible().then(function() { d.ic(a, b, c) })
        };
        Rj.prototype.ic = function(a, b, c) {
            if (Sj(b)) {
                a = R(b).origin;
                b = Date.now();
                var d = this.Xb[a];
                if (d && b < d) c && (this.Xb[a] = b + 18E4);
                else {
                    this.Xb[a] = b + (c ? 18E4 : 1E4);
                    if (!this.pc.preconnect) {
                        var e = this.Dd.createElement("link");
                        e.setAttribute("rel", "dns-prefetch");
                        e.setAttribute("href", a);
                        this.Kd.appendChild(e)
                    }
                    var f = this.Dd.createElement("link");
                    f.setAttribute("rel", "preconnect");
                    f.setAttribute("href", a);
                    f.setAttribute("referrerpolicy", "origin");
                    this.Kd.appendChild(f);
                    this.S.delay(function() {
                        e && e.parentNode && e.parentNode.removeChild(e);
                        f.parentNode && f.parentNode.removeChild(f)
                    }, 1E4);
                    Tj(this, a)
                }
            }
        };
        Rj.prototype.preload = function(a, b, c) {
            var d = this;
            Sj(b) && !this.hg[b] && (this.hg[b] = !0, this.url(a, b, !0), this.pc.preload && ("document" == c && this.xa.isSafari() || a.whenFirstVisible().then(function() {
                var e = fe(d.Dd)(Pj);
                e.setAttribute("href", b);
                e.as = d.pc.onlyValidAs ? "fetch" : "";
                d.Kd.appendChild(e)
            })))
        };

        function Sj(a) { return a.startsWith("https:") || a.startsWith("http:") ? !0 : !1 }

        function Tj(a, b) {
            if (!a.pc.preconnect && (a.xa.isSafari() || a.xa.isIos())) {
                var c = Date.now();
                a.Xb[b] = c + 18E4;
                a = new XMLHttpRequest;
                a.open("HEAD", b + "/robots.txt?_AMP_safari_preconnect_polyfill_cachebust=" + (c - c % 18E4), !0);
                a.withCredentials = !0;
                a.send()
            }
        }

        function Uj() {
            var a = self.document;
            Oj(a).then(function() {
                var b = a.defaultView;
                if (b) {
                    b = gd(b);
                    var c = dd(a.documentElement),
                        d = Gc(a);
                    b.url(d, c.sourceUrl);
                    b.url(d, c.canonicalUrl)
                }
            })
        };

        function Vj(a) {
            this.H = a;
            this.cg = Object.create(null)
        }
        Vj.prototype.addTransition = function(a, b, c) { this.cg[a + "|" + b] = c };
        Vj.prototype.setState = function(a) {
            var b = this.H;
            this.H = a;
            (a = this.cg[b + "|" + a]) && a()
        };

        function Wj() {
            this.O = [];
            this.fc = {};
            this.Cf = this.Df = 0
        }
        g = Wj.prototype;
        g.getSize = function() { return this.O.length };
        g.getLastEnqueueTime = function() { return this.Df };
        g.getLastDequeueTime = function() { return this.Cf };
        g.getTaskById = function(a) { return this.fc[a] || null };
        g.enqueue = function(a) {
            this.O.push(a);
            this.fc[a.id] = a;
            this.Df = Date.now()
        };
        g.dequeue = function(a) {
            if (!this.removeAtIndex(a, this.O.indexOf(this.fc[a.id]))) return !1;
            this.Cf = Date.now();
            return !0
        };
        g.peek = function(a) {
            for (var b = 1E6, c = null, d = 0; d < this.O.length; d++) {
                var e = this.O[d],
                    f = a(e);
                f < b && (b = f, c = e)
            }
            return c
        };
        g.forEach = function(a) { this.O.forEach(a) };
        g.removeAtIndex = function(a, b) {
            var c = this.fc[a.id];
            if (!c || this.O[b] != c) return !1;
            this.O.splice(b, 1);
            delete this.fc[a.id];
            return !0
        };
        g.purge = function(a) { for (var b = this.O.length; b--;) a(this.O[b]) && this.removeAtIndex(this.O[b], b) };

        function Xj(a) {
            if (P(a).isIe()) {
                a = a.document;
                for (var b = a.querySelectorAll('.i-amphtml-intrinsic-sizer[src^="data:image/svg"]'), c = 0; c < b.length; c++) {
                    var d = b[c],
                        e = Sb(d, ".i-amphtml-element");
                    if (e) {
                        var f = cf(e.getAttribute("width"));
                        e = cf(e.getAttribute("height"));
                        f && e && (d.src = Se(a, f, e))
                    }
                }
            }
        };

        function Yj(a) {
            return !P(a).isIe() || Zj(a) ? null : new Promise(function(b) {
                var c = Date.now() + 2E3,
                    d = a.setInterval(function() {
                        var e = Date.now(),
                            f = Zj(a);
                        if (f || e > c) a.clearInterval(d), b(), f || H().error("ie-media-bug", "IE media never resolved")
                    }, 10)
            })
        }

        function Zj(a) { var b = "(min-width: " + (a.innerWidth - 1) + "px) AND (max-width: " + (a.innerWidth + 1 + "px)"); try { return a.matchMedia(b).matches } catch (c) { return H().error("ie-media-bug", "IE matchMedia failed: ", c), !0 } };

        function ak(a) {
            var b = this;
            this.ampdoc = a;
            this.win = a.win;
            this.h = Q(a);
            this.la = this.h.isRuntimeOn();
            this.Sg = !1;
            this.yh = 0;
            this.o = [];
            this.Ye = this.We = this.Ie = 0;
            this.ja = this.ampdoc.isVisible();
            this.Hb = !1;
            this.qf = !0;
            this.jd = !1;
            this.qc = -1;
            this.dc = !0;
            this.vb = -1;
            this.$d = this.wc = 0;
            this.Hc = new jj(this.win, function() { return b.doPass() });
            this.Qf = new jj(this.win, function() {
                b.dc = !0;
                b.schedulePass()
            });
            this.ua = new Wj;
            this.I = new Wj;
            this.rd = this.tg.bind(this);
            this.ga = [];
            this.Aa = [];
            this.Sd = !1;
            this.L = jd(this.ampdoc);
            this.J =
                id(this.win);
            this.hd = new sj(this.win);
            this.He = !1;
            this.ib = 0;
            this.nb = !1;
            this.Gc = [];
            this.Ed = [];
            this.rf = new v;
            this.lg = new Vj(this.ampdoc.getVisibilityState());
            this.L.onChanged(function(c) {
                b.wc = b.win.Date.now();
                b.$d = c.velocity;
                c.relayoutAll && (b.dc = !0, b.nb = !0);
                b.schedulePass()
            });
            this.L.onScroll(function() { b.wc = b.win.Date.now() });
            this.ampdoc.onVisibilityChanged(function() {
                -1 == b.qc && b.ampdoc.isVisible() && (b.qc = b.win.Date.now());
                b.schedulePass()
            });
            this.h.onRuntimeState(function(c) {
                H().fine("Resources", "Runtime state:",
                    c);
                b.la = c;
                b.schedulePass(1)
            });
            Hi(this.ampdoc, function() {
                bk(b, b.lg);
                b.schedulePass(0)
            });
            ck(this);
            this.Vc = hb(this.win, function(c) {
                c = c.target;
                c.nodeType !== Node.ELEMENT_NODE || c === b.L.getScrollingElement() || b.Ed.includes(c) || (b.Ed.push(c), b.schedulePass(70))
            }, 250);
            gf(this.win.document, "scroll", this.Vc, { capture: !0, passive: !0 })
        }

        function ck(a) {
            a.ampdoc.whenReady().then(function() {
                function b() { return a.Qf.schedule() }
                a.Hb = !0;
                a.Xe();
                a.Aa = null;
                N(a.win, "input").setupInputModeClasses(a.ampdoc);
                Xj(a.win);
                var c = Yj(a.win);
                c ? c.then(b) : b();
                Promise.race([mf(a.win), O(a.win).promise(3100)]).then(b);
                a.win.document.fonts && "loaded" != a.win.document.fonts.status && a.win.document.fonts.ready.then(b)
            })
        }
        g = ak.prototype;
        g.get = function() { return this.o.slice(0) };
        g.getAmpdoc = function() { return this.ampdoc };
        g.getResourceForElement = function(a) { return Z(a) };
        g.getResourceForElementOptional = function(a) { return Z(a) };
        g.getScrollDirection = function() { return Math.sign(this.$d) || 1 };
        g.add = function(a) {
            this.Ie++;
            1 == this.Ie && this.L.ensureReadyForElements();
            var b = Z(a);
            b && 0 != b.getState() && !a.reconstructWhenReparented() ? (b.requestMeasure(), H().fine("Resources", "resource reused:", b.debugid)) : (b = new qi(++this.yh, a, this), H().fine("Resources", "resource added:", b.debugid));
            this.o.push(b);
            this.Qf.schedule(1E3)
        };

        function dk(a, b, c, d) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? !1 : d;
            var e = c,
                f = d;
            if (a.la || a.Sg)
                if ("prerender" != a.ampdoc.getVisibilityState() || b.prerenderAllowed()) a.Hb ? ek(a, b, f) : b.isBuilt() || b.isBuilding() || e && a.Aa.includes(b) || (a.Aa.push(b), a.Xe())
        }
        g.Xe = function() { if (!this.Sd) try { this.Sd = !0; for (var a = 0; a < this.Aa.length; a++) { var b = this.Aa[a]; if (this.Hb || $b(b.element, this.ampdoc.getRootNode())) this.Aa.splice(a--, 1), ek(this, b) } } finally { this.Sd = !1 } };

        function ek(a, b, c) {
            if ((void 0 === c ? 0 : c) || 20 > a.We || a.ampdoc.hasBeenVisible() || b.isBuildRenderBlocking())
                if (c = b.build()) H().fine("Resources", "build resource:", b.debugid), a.We++, a.Ye++, c.then(function() { return a.schedulePass() }, function(d) { fk(a, b); if (!Mf(d)) throw d; })
        }
        g.remove = function(a) {
            (a = Z(a)) && fk(this, a)
        };

        function fk(a, b) {
            var c = a.o.indexOf(b); - 1 != c && a.o.splice(c, 1);
            b.isBuilt() && b.pauseOnRemove();
            3 === b.getState() && b.layoutCanceled();
            gk(a, b, !0);
            H().fine("Resources", "resource removed:", b.debugid)
        }
        g.upgraded = function(a) {
            a = Z(a);
            dk(this, a);
            H().fine("Resources", "resource upgraded:", a.debugid)
        };
        g.updateLayoutPriority = function(a, b) {
            var c = Z(a);
            c.updateLayoutPriority(b);
            this.I.forEach(function(d) { d.resource == c && (d.priority = b) });
            this.schedulePass()
        };
        g.schedulePass = function(a) { return this.Hc.schedule(a) };
        g.updateOrEnqueueMutateTask = function(a, b) {
            for (var c = null, d = 0; d < this.ga.length; d++)
                if (this.ga[d].resource == a) { c = this.ga[d]; break }
            c ? (c.newHeight = b.newHeight, c.newWidth = b.newWidth, c.marginChange = b.marginChange, c.event = b.event, c.force = b.force || c.force, c.callback = b.callback) : this.ga.push(b)
        };
        g.schedulePassVsync = function() {
            var a = this;
            this.He || (this.He = !0, this.J.mutate(function() { return a.doPass() }))
        };
        g.ampInitComplete = function() {
            this.jd = !0;
            H().fine("Resources", "ampInitComplete");
            this.schedulePass()
        };
        g.setRelayoutTop = function(a) { this.vb = -1 == this.vb ? a : Math.min(a, this.vb) };
        g.maybeHeightChanged = function() { this.nb = !0 };
        g.onNextPass = function(a) { this.Gc.push(a) };
        g.doPass = function() {
            var a = this;
            if (this.la) {
                this.ja = this.ampdoc.isVisible();
                this.Ye = 0;
                if (this.Hb && this.qf && this.jd) {
                    this.qf = !1;
                    var b = this.win.document,
                        c = dd(this.ampdoc),
                        d;
                    this.h.sendMessage("documentLoaded", A({ title: b.title, sourceUrl: Be(this.ampdoc.getUrl()), isStory: "AMP-STORY" === (null == (d = b.body.firstElementChild) ? void 0 : d.tagName), serverLayout: b.documentElement.hasAttribute("i-amphtml-element"), linkRels: c.linkRels, metaTags: { viewport: c.viewport }, viewport: c.viewport }), !0);
                    this.ib = this.L.getContentHeight();
                    this.h.sendMessage("documentHeight", A({ height: this.ib }), !0);
                    H().fine("Resources", "document height on load: %s", this.ib)
                }
                var e = this.L.getSize();
                H().fine("Resources", "PASS: visible=", this.ja, ", relayoutAll=", this.dc, ", relayoutTop=", this.vb, ", viewportSize=", e.width, e.height);
                this.Hc.cancel();
                this.He = !1;
                this.lg.setState(this.ampdoc.getVisibilityState());
                this.Hb && this.jd && !this.ampdoc.signals().get("ready-scan") && (this.ampdoc.signals().signal("ready-scan"), H().fine("Resources", "signal: ready-scan"));
                this.nb && (this.nb = !1, this.J.measure(function() {
                    var f = a.L.getContentHeight();
                    f != a.ib && (a.h.sendMessage("documentHeight", A({ height: f }), !0), a.ib = f, H().fine("Resources", "document height changed: %s", a.ib), a.L.contentHeightChanged())
                }));
                for (b = 0; b < this.Gc.length; b++)(0, this.Gc[b])();
                this.Gc.length = 0
            } else H().fine("Resources", "runtime is off")
        };

        function hk(a) {
            var b = a.win.Date.now(),
                c = a.L.getRect(),
                d = c.height / 10,
                e = c.height / 10,
                f = .01 > Math.abs(a.$d) && 500 < b - a.wc || 1E3 < b - a.wc;
            if (0 < a.ga.length) {
                H().fine("Resources", "change size requests:", a.ga.length);
                var h = a.ga;
                a.ga = [];
                var k = -1,
                    l = [],
                    m = 0;
                b = {};
                for (var n = 0; n < h.length; b = { fb: b.fb, kc: b.kc, K: b.K, T: b.T }, n++) {
                    b.K = h[n];
                    var q = b.K;
                    b.fb = q.resource;
                    q = q.event;
                    var t = b.fb.getLayoutBox(),
                        x = 0,
                        u = 0,
                        r = 0,
                        z = 0,
                        G = t,
                        Ca = G.top,
                        nb = G.bottom;
                    b.T = void 0;
                    b.K.marginChange && (b.T = b.K.marginChange.newMargins, G = b.K.marginChange.currentMargins,
                        void 0 != b.T.top && (x = b.T.top - G.top), void 0 != b.T.bottom && (u = b.T.bottom - G.bottom), void 0 != b.T.left && (r = b.T.left - G.left), void 0 != b.T.right && (z = b.T.right - G.right), x && (Ca = t.top - G.top), u && (nb = t.bottom + G.bottom));
                    var F = b.K.newHeight - t.height;
                    b.kc = b.K.newWidth - t.width;
                    var L = !1;
                    if (0 != F || 0 != x || 0 != u || 0 != b.kc || 0 != r || 0 != z)
                        if (b.K.force || !a.ja) L = !0;
                        else if (a.hd.hasDescendantsOf(b.fb.element) || q && q.userActivation && q.userActivation.hasBeenActive) L = !0;
                    else if (Ca >= c.bottom - e || 0 == x && t.bottom + Math.min(F, 0) >= c.bottom - e) L = !0;
                    else if (1 < c.top && nb <= c.top + d) {
                        if (0 > F && c.top + m < -F) continue;
                        f ? (m += F, l.push(b.K)) : a.ga.push(b.K);
                        continue
                    } else ik(a, b.fb, t) ? L = !0 : 0 > F || 0 > x || 0 > u || (b.K.newHeight == t.height ? a.J.run({
                        measure: function(I) {
                            return function(X) {
                                X.resize = !1;
                                var sa = I.fb.element.parentElement;
                                if (sa) {
                                    for (var T = sa.getLayoutSize && sa.getLayoutSize().width || sa.offsetWidth, Sa = I.kc, E = 0; E < sa.childElementCount; E++)
                                        if (Sa += sa.children[E].offsetWidth, Sa > T) return;
                                    X.resize = !0
                                }
                            }
                        }(b),
                        mutate: function(I) {
                            return function(X) {
                                X.resize && I.K.resource.changeSize(I.K.newHeight,
                                    I.K.newWidth, I.T);
                                I.K.resource.overflowCallback(!X.resize, I.K.newHeight, I.K.newWidth, I.T)
                            }
                        }(b)
                    }, {}) : b.K.resource.overflowCallback(!0, b.K.newHeight, b.K.newWidth, b.T));
                    L && (0 <= t.top && (k = -1 == k ? t.top : Math.min(k, t.top)), b.K.resource.changeSize(b.K.newHeight, b.K.newWidth, b.T), b.K.resource.overflowCallback(!1, b.K.newHeight, b.K.newWidth, b.T), a.nb = !0);
                    b.K.callback && b.K.callback(L)
                } - 1 != k && a.setRelayoutTop(k);
                0 < l.length && a.J.run({
                    measure: function(I) {
                        I.scrollHeight = a.L.getScrollHeight();
                        I.scrollTop = a.L.getScrollTop()
                    },
                    mutate: function(I) {
                        var X = -1;
                        l.forEach(function(T) {
                            var Sa = T.resource.getLayoutBox();
                            X = -1 == X ? Sa.top : Math.min(X, Sa.top);
                            T.resource.changeSize(T.newHeight, T.newWidth, T.marginChange ? T.marginChange.newMargins : void 0);
                            T.callback && T.callback(!0)
                        }); - 1 != X && a.setRelayoutTop(X);
                        var sa = a.L.getScrollHeight();
                        sa != I.scrollHeight && a.L.setScrollTop(I.scrollTop + (sa - I.scrollHeight));
                        a.nb = !0
                    }
                }, {})
            }
        }

        function ik(a, b, c) {
            var d = a.L.getContentHeight();
            a = Math.max(.85 * d, d - 1E3);
            var e = c || b.getLayoutBox(),
                f = b.getInitialLayoutBox();
            return e.bottom >= a || f.bottom >= a
        }

        function jk(a, b) {
            b.length && a.J.mutate(function() {
                b.forEach(function(c) {
                    c.unload();
                    gk(a, c)
                });
                H().fine("Resources", "unload:", b)
            })
        }
        g.tg = function(a) {
            var b = this.L.getRect(),
                c = a.resource.getLayoutBox(),
                d = Math.floor((c.top - b.top) / b.height);
            Math.sign(d) != this.getScrollDirection() && (d *= 2);
            d = Math.abs(d);
            return 10 * a.priority + d
        };

        function kk(a, b) {
            var c = a.win.Date.now();
            if (0 == a.ua.getSize()) return -1 === a.qc ? 0 : Math.max(1E3 * b.priority - (c - a.qc), 0);
            var d = 0;
            a.ua.forEach(function(e) { d = Math.max(d, Math.max(1E3 * (b.priority - e.priority), 0) - (c - e.startTime)) });
            return d
        }
        g.vh = function(a) { this.I.getTaskById(a.id) || this.I.enqueue(a) };
        g.$f = function(a, b, c) {
            this.ua.dequeue(a);
            this.schedulePass(1E3);
            if (!b) return H().info("Resources", "task failed:", a.id, a.resource.debugid, c), Promise.reject(c)
        };

        function lk(a, b, c) { return 0 != b.getState() && b.isDisplayed() && (a.ja || "prerender" == a.ampdoc.getVisibilityState() && b.prerenderAllowed()) && (c || b.isInViewport() || b.renderOutsideViewport() || b.idleRenderOutsideViewport()) ? !0 : !1 }
        g.scheduleLayoutOrPreload = function(a, b, c, d) { a.element.V1() || (a.getState(), a.isDisplayed(), d = d || !1, lk(this, a, d) && (b ? this.Ba(a, "L", 0, c || 0, d, a.startLayout.bind(a)) : this.Ba(a, "P", 2, c || 0, d, a.startLayout.bind(a)))) };
        g.Ba = function(a, b, c, d, e, f) {
            b = a.getTaskId(b);
            a = { id: b, resource: a, priority: Math.max(a.getLayoutPriority(), d) + c, forceOutsideViewport: e, callback: f, scheduleTime: this.win.Date.now(), startTime: 0, promise: null };
            H().fine("Resources", "schedule:", a.id, "at", a.scheduleTime);
            var h = this.I.getTaskById(b);
            if (!h || a.priority < h.priority) h && this.I.dequeue(h), this.I.enqueue(a), this.schedulePass(kk(this, a));
            a.resource.layoutScheduled(a.scheduleTime)
        };
        g.whenFirstPass = function() { return this.rf.promise };

        function bk(a, b) {
            function c() {
                a.o.forEach(function(k) { return k.resume() });
                h()
            }

            function d() {
                a.o.forEach(function(k) {
                    k.unload();
                    gk(a, k)
                });
                try { a.win.getSelection().removeAllRanges() } catch (k) {}
            }

            function e() { a.o.forEach(function(k) { return k.pause() }) }

            function f() {}

            function h() {
                var k = a.L.getSize();
                if (0 < k.height && 0 < k.width) {
                    0 < a.ga.length && hk(a);
                    k = a.win.Date.now();
                    var l = a.dc,
                        m = a.vb,
                        n = a.Ed;
                    a.dc = !1;
                    a.vb = -1;
                    for (var q = 0, t = 0, x = 0; x < a.o.length; x++) {
                        var u = a.o[x];
                        0 != u.getState() || u.isBuilding() || u.element.V1() || dk(a,
                            u, !0);
                        !l && u.hasBeenMeasured() && 1 != u.getState() || q++;
                        u.isMeasureRequested() && t++
                    }
                    var r;
                    if (0 < q || 0 < t || l || -1 != m || 0 < n.length)
                        for (q = 0; q < a.o.length; q++)
                            if (t = a.o[q], !(t.hasOwner() && !t.isMeasureRequested() || t.element.V1())) {
                                x = l || 1 == t.getState() || !t.hasBeenMeasured() || t.isMeasureRequested() || -1 != m && t.getLayoutBox().bottom >= m;
                                if (!x)
                                    for (u = 0; u < n.length; u++)
                                        if (n[u].contains(t.element)) { x = !0; break }
                                x && (x = t.isDisplayed(), t.measure(), x = !(!x || t.isDisplayed()));
                                x && (r || (r = []), r.push(t))
                            }
                    n.length = 0;
                    r && jk(a, r);
                    l = a.L.getRect();
                    r = a.ja ? wc(l, 2) : l;
                    l = a.ja ? wc(l, .25) : l;
                    for (m = 0; m < a.o.length; m++) n = a.o[m], 0 == n.getState() || n.hasOwner() || n.element.V1() || (q = a.ja && n.isDisplayed() && n.overlaps(l), n.setInViewport(q));
                    if (r)
                        for (l = 0; l < a.o.length; l++) m = a.o[l], !(m.isBuilt() || m.isBuilding() || m.hasOwner() || m.element.V1()) && m.hasBeenMeasured() && m.isDisplayed() && m.overlaps(r) && dk(a, m, !0, !0), 2 != m.getState() || m.hasOwner() || m.isDisplayed() && m.overlaps(r) && a.scheduleLayoutOrPreload(m, !0);
                    if (r = a.ja) k = void 0 === k ? Date.now() : k, r = a.ua.getLastDequeueTime(),
                        r = 0 == a.ua.getSize() && 0 == a.I.getSize() && k > r + 5E3 && 0 < r;
                    if (r) { for (r = k = 0; r < a.o.length && 4 > k; r++) l = a.o[r], 2 == l.getState() && !l.hasOwner() && !l.element.V1() && l.isDisplayed() && l.idleRenderOutsideViewport() && (H().fine("Resources", "idleRenderOutsideViewport layout:", l.debugid), a.scheduleLayoutOrPreload(l, !1), k++); for (r = 0; r < a.o.length && 4 > k; r++) l = a.o[r], 2 != l.getState() || l.hasOwner() || l.element.V1() || !l.isDisplayed() || (H().fine("Resources", "idle layout:", l.debugid), a.scheduleLayoutOrPreload(l, !1), k++) }
                    k = a.win.Date.now();
                    l = -1;
                    for (r = a.I.peek(a.rd); r;) {
                        l = kk(a, r);
                        H().fine("Resources", "peek from queue:", r.id, "sched at", r.scheduleTime, "score", a.rd(r), "timeout", l);
                        if (16 < l) break;
                        a.I.dequeue(r);
                        (l = a.ua.getTaskById(r.id)) ? (r = a.vh.bind(a, r), l.promise.then(r, r)) : (l = r.resource, l.measure(), lk(a, l, r.forceOutsideViewport) ? (r.promise = r.callback(), r.startTime = k, H().fine("Resources", "exec:", r.id, "at", r.startTime), a.ua.enqueue(r), r.promise.then(a.$f.bind(a, r, !0), a.$f.bind(a, r, !1)).catch(Jf)) : (H().fine("Resources", "cancelled", r.id),
                            l.layoutCanceled()));
                        r = a.I.peek(a.rd);
                        l = -1
                    }
                    H().fine("Resources", "queue size:", a.I.getSize(), "exec size:", a.ua.getSize());
                    0 <= l ? k = l : (k = 2 * (k - a.ua.getLastDequeueTime()), k = Math.max(Math.min(3E4, k), 5E3));
                    0 < a.ga.length && (k = Math.min(k, 500));
                    a.ja ? a.schedulePass(k) ? H().fine("Resources", "next pass:", k) : H().fine("Resources", "pass already scheduled") : H().fine("Resources", "document is not visible: no scheduling");
                    a.rf.resolve()
                }
            }
            b.addTransition("prerender", "prerender", h);
            b.addTransition("prerender", "visible", h);
            b.addTransition("prerender", "hidden", h);
            b.addTransition("prerender", "inactive", h);
            b.addTransition("prerender", "paused", h);
            b.addTransition("visible", "visible", h);
            b.addTransition("visible", "hidden", h);
            b.addTransition("visible", "inactive", d);
            b.addTransition("visible", "paused", e);
            b.addTransition("hidden", "visible", h);
            b.addTransition("hidden", "hidden", h);
            b.addTransition("hidden", "inactive", d);
            b.addTransition("hidden", "paused", e);
            b.addTransition("inactive", "visible", c);
            b.addTransition("inactive", "hidden",
                c);
            b.addTransition("inactive", "inactive", f);
            b.addTransition("inactive", "paused", h);
            b.addTransition("paused", "visible", c);
            b.addTransition("paused", "hidden", h);
            b.addTransition("paused", "inactive", d);
            b.addTransition("paused", "paused", f)
        }

        function gk(a, b, c) { if (1 == b.getState() || 2 == b.getState()) a.I.purge(function(e) { return e.resource == b }), a.ua.purge(function(e) { return e.resource == b }), Na(a.ga, function(e) { return e.resource === b }); if (0 == b.getState() && c && a.Aa) { var d = a.Aa.indexOf(b); - 1 != d && a.Aa.splice(d, 1) } };
        var mk = /^i-amphtml-/;

        function nk(a) {
            this.ampdoc = a;
            var b = a.getHeadNode();
            this.rb = fd(a);
            this.L = jd(a);
            a = Kc(b, "action");
            a.addGlobalTarget("AMP", this.Gg.bind(this));
            a.addGlobalMethodHandler("hide", this.uf.bind(this));
            a.addGlobalMethodHandler("show", this.xf.bind(this));
            a.addGlobalMethodHandler("toggleVisibility", this.Kg.bind(this));
            a.addGlobalMethodHandler("scrollTo", this.wf.bind(this));
            a.addGlobalMethodHandler("focus", this.Hg.bind(this));
            a.addGlobalMethodHandler("toggleClass", this.Jg.bind(this))
        }
        g = nk.prototype;
        g.Gg = function(a) {
            if (!a.satisfiesTrust(2)) return null;
            var b = a.node,
                c = a.method,
                d = a.args,
                e = ok(b);
            switch (c) {
                case "pushState":
                case "setState":
                    return bd(b.nodeType === Node.DOCUMENT_NODE ? b.documentElement : b).then(function(f) { J(f, "AMP-BIND is not installed."); return f.invoke(a) });
                case "navigateTo":
                    return pk(this, a);
                case "closeOrNavigateTo":
                    return qk(this, a);
                case "scrollTo":
                    return J(d.id, "AMP.scrollTo must provide element ID"), a.node = Gc(b).getElementById(d.id), this.wf(a);
                case "goBack":
                    return Jc(this.ampdoc,
                        "history").goBack(!(!d || !0 !== d.navigate)), null;
                case "print":
                    return e.print(), null;
                case "optoutOfCid":
                    return Mc(this.ampdoc, "cid").then(function(f) { return f.optOut() }).catch(function(f) { H().error("STANDARD-ACTIONS", "Failed to opt out of CID", f) })
            }
            throw D().createError("Unknown AMP action ", c);
        };

        function pk(a, b) {
            var c = b.caller,
                d = b.method,
                e = b.args,
                f = ok(b.node);
            b = p();
            c.tagName.startsWith("AMP-") && (b = c.getImpl().then(function(h) { "function" == typeof h.throwIfCannotNavigate && h.throwIfCannotNavigate() }));
            return b.then(function() { Jc(a.ampdoc, "navigation").navigateTo(f, e.url, "AMP." + d, { target: e.target, opener: e.opener }) }, function(h) { D().error("STANDARD-ACTIONS", h) })
        }

        function qk(a, b) {
            var c = ok(b.node),
                d = c.parent != c,
                e = !1;
            c.opener && a.ampdoc.isSingleDoc() && !d && (c.close(), e = c.closed);
            return e ? p() : pk(a, b)
        }
        g.wf = function(a) {
            var b = a.node,
                c = (a = a.args) && a.position,
                d = a && a.duration;
            c && !["top", "bottom", "center"].includes(c) && (c = void 0);
            Hb(d) || (d = void 0);
            return this.L.animateScrollIntoView(b, c, d)
        };
        g.Hg = function(a) { cc(a.node); return null };
        g.uf = function(a) {
            var b = a.node;
            b.classList.contains("i-amphtml-element") ? this.rb.mutateElement(b, function() { return b.collapse() }, !0) : this.rb.mutateElement(b, function() { return Qe(b, !1) });
            return null
        };
        g.xf = function(a) {
            var b = a.node,
                c = b.ownerDocument.defaultView;
            if (b.classList.contains("i-amphtml-layout-nodisplay")) return D().warn("STANDARD-ACTIONS", "Elements with layout=nodisplay cannot be dynamically shown.", b), null;
            this.rb.measureElement(function() { "none" != (c.getComputedStyle(b) || Me).display || b.hasAttribute("hidden") || D().warn("STANDARD-ACTIONS", 'Elements can only be dynamically shown when they have the "hidden" attribute set or when they were dynamically hidden.', b) });
            var d = b.hasAttribute("autofocus") ?
                b : b.querySelector("[autofocus]");
            d && P(c).isIos() ? (rk(b, d), this.rb.mutateElement(b, function() {})) : this.rb.mutateElement(b, function() { rk(b, d) });
            return null
        };

        function rk(a, b) {
            a.classList.contains("i-amphtml-element") ? a.expand() : Qe(a, !0);
            b && cc(b)
        }
        g.Kg = function(a) { return a.node.hasAttribute("hidden") ? this.xf(a) : this.uf(a) };
        g.Jg = function(a) {
            var b = a.node,
                c = a.args,
                d = D().assertString(c["class"], "Argument 'class' must be a string.");
            if (mk.test(d)) return null;
            this.rb.mutateElement(b, function() {
                if (void 0 !== c.force) {
                    var e = D().assertBoolean(c.force, "Optional argument 'force' must be a boolean.");
                    b.classList.toggle(d, e)
                } else b.classList.toggle(d)
            });
            return null
        };

        function ok(a) { return (a.ownerDocument || a).defaultView };

        function sk(a, b, c) {
            this.ampdoc = a;
            this.h = b;
            this.j = c;
            this.Zg = c instanceof tk;
            this.Dc = Ce(this.ampdoc.win.location);
            this.Sc = null
        }
        g = sk.prototype;
        g.get = function(a, b) { return uk(this).then(function(c) { return c.get(a, b) }) };
        g.set = function(a, b, c) { return this.setNonBoolean(a, b, c) };
        g.setNonBoolean = function(a, b, c) { return vk(this, function(d) { return d.set(a, b, c) }) };
        g.remove = function(a) { return vk(this, function(b) { return b.remove(a) }) };
        g.isViewerStorage = function() { return this.Zg };

        function uk(a) { a.Sc || (a.Sc = a.j.loadBlob(a.Dc).then(function(b) { return b ? hc(atob(b)) : {} }).catch(function(b) { H().expectedError("Storage", "Failed to load store: ", b); return {} }).then(function(b) { return new wk(b) })); return a.Sc }

        function vk(a, b) {
            return uk(a).then(function(c) {
                b(c);
                c = btoa(JSON.stringify(c.obj));
                return a.j.saveBlob(a.Dc, c)
            }).then(a.sg.bind(a))
        }

        function xk(a) { a.h.onBroadcast(function(b) { "amp-storage-reset" == b.type && b.origin == a.Dc && (H().fine("Storage", "Received reset message"), a.Sc = null) }) }
        g.sg = function() {
            H().fine("Storage", "Broadcasted reset message");
            this.h.broadcast({ type: "amp-storage-reset", origin: this.Dc })
        };

        function wk(a) {
            this.obj = fc(a);
            this.dh = 8;
            this.Ea = this.obj.vv || Object.create(null);
            this.obj.vv || (this.obj.vv = this.Ea)
        }
        wk.prototype.get = function(a, b) {
            var c = (a = this.Ea[a]) ? a.t : void 0,
                d = b && void 0 != c ? c + b > Date.now() : !0;
            return a && d ? a.v : void 0
        };
        wk.prototype.set = function(a, b, c) {
            if (void 0 !== this.Ea[a]) {
                a = this.Ea[a];
                var d = Date.now();
                c && (d = a.t);
                a.v = b;
                a.t = d
            } else this.Ea[a] = A({ v: b, t: Date.now() });
            b = Object.keys(this.Ea);
            if (b.length > this.dh) {
                var e = Infinity,
                    f = null;
                for (c = 0; c < b.length; c++) a = this.Ea[b[c]], a.t < e && (f = b[c], e = a.t);
                f && delete this.Ea[f]
            }
        };
        wk.prototype.remove = function(a) { delete this.Ea[a] };

        function yk(a) {
            this.win = a;
            try { if ("localStorage" in this.win) { this.win.localStorage.getItem("test"); var b = !0 } else b = !1 } catch (c) { b = !1 }
            this.Wd = b;
            this.Wd || (a = Error("localStorage not supported."), H().expectedError("Storage", a))
        }
        yk.prototype.loadBlob = function(a) { var b = this; return new Promise(function(c) { b.Wd ? c(b.win.localStorage.getItem("amp-store:" + a)) : c(null) }) };
        yk.prototype.saveBlob = function(a, b) {
            var c = this;
            return new Promise(function(d) {
                c.Wd && c.win.localStorage.setItem("amp-store:" + a, b);
                d()
            })
        };

        function tk(a) { this.h = a }
        tk.prototype.loadBlob = function(a) { return this.h.sendMessageAwaitResponse("loadStore", A({ origin: a })).then(function(b) { return b.blob }) };
        tk.prototype.saveBlob = function(a, b) { return this.h.sendMessageAwaitResponse("saveStore", A({ origin: a, blob: b })).catch(function(c) { throw H().createExpectedError("Storage", "Failed to save store: ", c); }) };

        function zk(a) {
            M(a, "storage", function() {
                var b = Q(a),
                    c = parseInt(b.getParam("storage"), 10) ? new tk(b) : new yk(a.win);
                b = new sk(a, b, c);
                xk(b);
                return b
            }, !0)
        };

        function Ak() {}

        function Bk(a) {
            this.B = a;
            this.hc = {};
            this.xe = {}
        }
        g = Bk.prototype;
        g.whenReady = function(a) { return Ck(this, a).then(Ak) };
        g.setHtmlForTemplate = function(a, b) { return Ck(this, a).then(function(c) { return c.setHtml(b) }) };
        g.renderTemplate = function(a, b) { return Ck(this, a).then(function(c) { return c.render(b) }) };
        g.renderTemplateAsString = function(a, b) { return Ck(this, a).then(function(c) { return c.renderAsString(b) }) };
        g.renderTemplateArray = function(a, b) { return 0 == b.length ? Promise.resolve([]) : Ck(this, a).then(function(c) { return b.map(function(d) { return c.render(d) }) }) };
        g.findAndRenderTemplate = function(a, b, c) { return this.renderTemplate(this.findTemplate(a, c), b) };
        g.findAndSetHtmlForTemplate = function(a, b, c) { return this.setHtmlForTemplate(this.findTemplate(a, c), b) };
        g.findAndRenderTemplateArray = function(a, b, c) { return this.renderTemplateArray(this.findTemplate(a, c), b) };
        g.hasTemplate = function(a, b) { return !!this.maybeFindTemplate(a, b) };
        g.findTemplate = function(a, b) {
            b = this.maybeFindTemplate(a, b);
            J(b, "Template not found for %s", a);
            var c = b.tagName;
            J("TEMPLATE" == c || "SCRIPT" == c && "text/plain" === b.getAttribute("type"), 'Template must be defined in a <template> or <script type="text/plain"> tag');
            return b
        };
        g.maybeFindTemplate = function(a, b) { var c = a.getAttribute("template"); return c ? Qb(a).getElementById(c) : b ? Yb(a, b) : a.querySelector('template[type], script[type="text/plain"]') };

        function Ck(a, b) {
            var c = b.__AMP_IMPL_;
            if (c) return Promise.resolve(c);
            c = "";
            var d = b.tagName;
            "TEMPLATE" == d ? c = b.getAttribute("type") : "SCRIPT" == d && (c = b.getAttribute("template"));
            J(c, "Type must be specified: %s", b);
            if (d = b.__AMP_WAIT_) return d;
            d = Dk(a, c).then(function(e) {
                var f = b.__AMP_IMPL_ = new e(b, a.B.win);
                delete b.__AMP_WAIT_;
                return f
            });
            return b.__AMP_WAIT_ = d
        }

        function Dk(a, b) {
            if (a.hc[b]) return a.hc[b];
            var c = new v,
                d = c.promise;
            c = c.resolve;
            a.hc[b] = d;
            a.xe[b] = c;
            return d
        };

        function Ek(a) {
            this.win = a;
            this.xh = this.win.Promise.resolve();
            this.Ih = 0;
            this.ud = {};
            this.we = Date.now()
        }
        g = Ek.prototype;
        g.timeSinceStart = function() { return Date.now() - this.we };
        g.delay = function(a, b) {
            var c = this;
            if (!b) {
                var d = "p" + this.Ih++;
                this.xh.then(function() { c.ud[d] ? delete c.ud[d] : a() }).catch(Jf);
                return d
            }
            return this.win.setTimeout(function() { try { a() } catch (e) { throw Jf(e), e; } }, b)
        };
        g.cancel = function(a) { "string" == typeof a ? this.ud[a] = !0 : this.win.clearTimeout(a) };
        g.promise = function(a) { var b = this; return new this.win.Promise(function(c) { if (-1 == b.delay(c, a)) throw Error("Failed to schedule timer."); }) };
        g.timeoutPromise = function(a, b, c) {
            function d() { e.cancel(f) }
            var e = this,
                f, h = new this.win.Promise(function(k, l) { f = e.delay(function() { l(D().createError(c || "timeout")) }, a); if (-1 == f) throw Error("Failed to schedule timer."); });
            if (!b) return h;
            b.then(d, d);
            return this.win.Promise.race([h, b])
        };
        g.poll = function(a, b) { var c = this; return new this.win.Promise(function(d) { var e = c.win.setInterval(function() { b() && (c.win.clearInterval(e), d()) }, a) }) };

        function Fk(a) {
            a = a.getRootNode();
            this.ng = (a.ownerDocument || a).createElement("a");
            this.hb = new he
        }
        g = Fk.prototype;
        g.parse = function(a, b) { return re(this.ng, a, b ? null : this.hb) };

        function Gk(a, b) { return "string" !== typeof b ? b : a.parse(b) }
        g.isProtocolValid = function(a) { return ye(a) };
        g.getSourceOrigin = function(a) { return Ce(Gk(this, a)) };
        g.getSourceUrl = function(a) { return Be(Gk(this, a)) };
        g.resolveRelativeUrl = function(a, b) { return De(a, Gk(this, b)) };
        g.assertHttpsUrl = function(a, b, c) { return we(a, b, void 0 === c ? "source" : c) };
        g.assertAbsoluteHttpOrHttpsUrl = function(a) { J(/^https?:/i.test(a), 'URL must start with "http://" or "https://". Invalid value: %s', a); return R(a).href };
        g.isProxyOrigin = function(a) { return S(Gk(this, a)) };
        g.isSecure = function(a) { return ve(Gk(this, a)) };
        g.getWinOrigin = function(a) { return a.origin || Gk(this, a.location.href).origin };
        g.getCdnUrlOnOrigin = function(a) {
            if (S(a)) return a;
            var b = Gk(this, a),
                c = b.hash,
                d = b.pathname,
                e = b.search,
                f = encodeURIComponent(b.host);
            return mb.cdn + "/c/" + f + d + e + c
        };
        var Hk = { navigationStart: 1, redirectStart: 1, redirectEnd: 1, fetchStart: 1, domainLookupStart: 1, domainLookupEnd: 1, connectStart: 1, secureConnectionStart: 1, connectEnd: 1, requestStart: 1, responseStart: 1, responseEnd: 1, domLoading: 2, domInteractive: 2, domContentLoaded: 2, domComplete: 2, loadEventStart: 3, loadEventEnd: 4 };

        function Ik(a, b, c) {
            var d = Hk[b] || 3,
                e = Math.max(d, c ? Hk[c] || 3 : d);
            if (1 === e) var f = p();
            else if (2 === e) f = Oj(a.document);
            else if (3 === e) f = mf(a);
            else if (4 === e) {
                var h = O(a);
                f = mf(a).then(function() { return h.promise(1) })
            }
            return f.then(function() { return Jk(a, b, c) })
        }

        function Jk(a, b, c) { var d = a.performance && a.performance.timing; if (d && 0 != d.navigationStart) { var e = void 0 === c ? d[b] : d[c] - d[b]; if (Hb(e) && !(0 > e)) return e } }

        function Kk(a, b) { var c = a.performance && a.performance.navigation; if (c && void 0 !== c[b]) return c[b] }

        function Lk(a) {
            this.ampdoc = a;
            this.Oa = Object.create(null);
            this.Pd = !1;
            Mk(this)
        }
        g = Lk.prototype;
        g.Nb = function() {
            this.initialize();
            this.Pd = !0
        };
        g.initialize = function() {};
        g.get = function(a) { this.Pd || this.Nb(); return this.Oa[a] };
        g.set = function(a, b) {
            a.indexOf("RETURN");
            this.Oa[a] = this.Oa[a] || { sync: void 0, async: void 0 };
            this.Oa[a].sync = b;
            return this
        };
        g.setAsync = function(a, b) {
            a.indexOf("RETURN");
            this.Oa[a] = this.Oa[a] || { sync: void 0, async: void 0 };
            this.Oa[a].async = b;
            return this
        };
        g.setBoth = function(a, b, c) { return this.set(a, b).setAsync(a, c) };
        g.getExpr = function(a, b) { this.Pd || this.Nb(); var c = Object.assign({}, this.Oa, a); return Nk(this, Object.keys(c), b) };

        function Nk(a, b, c) {
            Mk(a) && (b = b.filter(function(e) { return Mk(a).includes(e) }));
            c && (b = b.filter(function(e) { return c[e] }));
            if (0 === b.length) return /_^/g;
            b.sort(function(e, f) { return f.length - e.length });
            var d = "\\$?(" + b.map(function(e) { return "$" === e[0] ? "\\" + e : e }).join("|") + ")";
            return new RegExp(d, "g")
        }

        function Mk(a) { if (a.De) return a.De; if (a.ampdoc.isSingleDoc()) { var b = a.ampdoc.getRootNode(); if (Bf(["\u26a14email", "amp4email"], b)) return a.De = [""], a.De } };

        function Ok(a, b, c, d, e, f) {
            this.ia = a;
            this.Bb = b;
            this.ef = c;
            this.wb = d;
            this.ka = e;
            this.Bg = !f
        }
        Ok.prototype.expand = function(a) {
            if (!a.length) return this.wb ? a : Promise.resolve(a);
            var b = this.ia.getExpr(this.Bb, this.ka);
            b = Pk(a, b);
            return b.length ? Qk(this, a, b) : this.wb ? a : Promise.resolve(a)
        };
        Ok.prototype.getMacroNames = function(a) { var b = this.ia.getExpr(this.Bb, this.ka); return (a = a.match(b)) ? a : [] };

        function Pk(a, b) {
            var c = [];
            a.replace(b, function(d, e, f) {
                d = d.length;
                c.push({ start: f, stop: d + f - 1, name: e, length: d })
            });
            return c
        }

        function Qk(a, b, c) {
            function d(n) {
                for (var q = "", t = [], x = []; f < b.length && h <= c.length;) {
                    var u = q.trim();
                    if (k && f === k.start) u && t.push(l ? Ta(q) : q), q = void 0, q = a.Bb && Wa.call(a.Bb, k.name) ? { name: k.name, prioritized: a.Bb[k.name], encode: n } : Object.assign({}, a.ia.get(k.name), { name: k.name, encode: n }), f = k.stop + 1, k = c[++h], "(" === b[f] ? (f++, l++, e.push(q), t.push(d(!1))) : t.push(Rk(a, q)), q = "";
                    else {
                        if ("`" === b[f]) m ? (m = !1, q.length && t.push(q)) : (m = !0, u && t.push(u)), q = "";
                        else if (l && "," === b[f] && !m) u && t.push(u), x.push(t), t = [], "," === b[f +
                            1] && (x.push([""]), f++), q = "";
                        else {
                            if (l && ")" === b[f] && !m) return f++, l--, q = e.pop(), u && t.push(u), x.push(t), Rk(a, q, x);
                            q += b[f]
                        }
                        f++
                    }
                    f === b.length && q.length && t.push(q)
                }
                return a.wb ? t.join("") : Promise.all(t).then(function(r) { return r.join("") }).catch(function(r) { cb(r); return "" })
            }
            var e = [],
                f = 0,
                h = 0,
                k = c[h],
                l = 0,
                m = !1;
            return d(a.Bg)
        }

        function Rk(a, b, c) {
            var d = b.encode,
                e = b.name;
            if (void 0 != b.prioritized) var f = b.prioritized;
            else a.wb && void 0 != b.sync ? f = b.sync : a.wb ? (D().error("Expander", "ignoring async replacement key: ", b.name), f = "") : f = b.async || b.sync;
            return a.wb ? (a = Sk(a, f, e, c), d ? encodeURIComponent(a) : a) : Tk(a, f, e, c).then(function(h) { return d ? encodeURIComponent(h) : h })
        }

        function Tk(a, b, c, d) {
            try {
                var e = "function" === typeof b ? d ? Uk(d).then(function(f) { return b.apply(null, f) }) : oa(b) : Promise.resolve(b);
                return e.then(function(f) { Vk(a, c, f, d); return null == f ? "" : f }).catch(function(f) {
                    cb(f);
                    Vk(a, c, "", d);
                    return Promise.resolve("")
                })
            } catch (f) { return cb(f), Vk(a, c, "", d), Promise.resolve("") }
        }

        function Uk(a) { return Promise.all(a.map(function(b) { return Promise.all(b).then(function(c) { return c.join("") }) })) }

        function Sk(a, b, c, d) { try { var e = b; "function" === typeof b && (e = b.apply(null, Wk(d))); if (e && "function" == typeof e.then) { D().error("Expander", "ignoring async macro resolution"); var f = "" } else "string" === typeof e || "number" === typeof e || "boolean" === typeof e ? (Vk(a, c, e, d), f = e.toString()) : (Vk(a, c, "", d), f = ""); return f } catch (h) { return cb(h), Vk(a, c, "", d), "" } }

        function Wk(a) { return a ? a.map(function(b) { return b.join("") }) : a }

        function Vk(a, b, c, d) {
            if (a.ef) {
                var e = "";
                d && (e = "(" + d.filter(function(f) { return "" !== f }).join(",") + ")");
                a.ef["" + b + e] = c || ""
            }
        };

        function Xk(a) { return function() { return (new Date)[a]() } }

        function Yk(a, b) { return function() { return a[b] } }

        function Zk() { Lk.apply(this, arguments) }
        ja(Zk, Lk);

        function $k(a, b, c, d) { a.setBoth(b, function() { return Jk(a.ampdoc.win, c, d) }, function() { return Ik(a.ampdoc.win, c, d) }) }
        Zk.prototype.initialize = function() {
            function a() { var l = al(b); return xe(bl(b, l.sourceUrl)) }
            var b = this,
                c = this.ampdoc.win,
                d = this.ampdoc.getHeadNode(),
                e = jd(this.ampdoc);
            this.set("RANDOM", function() { return Math.random() });
            var f = Object.create(null);
            this.set("COUNTER", function(l) { return f[l] = (f[l] | 0) + 1 });
            this.set("CANONICAL_URL", function() { return al(b).canonicalUrl });
            this.set("CANONICAL_HOST", function() { return R(al(b).canonicalUrl).host });
            this.set("CANONICAL_HOSTNAME", function() { return R(al(b).canonicalUrl).hostname });
            this.set("CANONICAL_PATH", function() { return R(al(b).canonicalUrl).pathname });
            this.setAsync("DOCUMENT_REFERRER", function() { return Q(b.ampdoc).getReferrerUrl() });
            this.setAsync("EXTERNAL_REFERRER", function() { return Q(b.ampdoc).getReferrerUrl().then(function(l) { return l ? R(Be(l)).hostname === c.location.hostname ? null : l : null }) });
            this.set("TITLE", function() { var l = c.document; return l.originalTitle || l.title });
            this.set("AMPDOC_URL", function() { return xe(bl(b, c.location.href)) });
            this.set("AMPDOC_HOST", function() {
                var l =
                    R(c.location.href);
                return l && l.host
            });
            this.set("AMPDOC_HOSTNAME", function() { var l = R(c.location.href); return l && l.hostname });
            this.setBoth("SOURCE_URL", function() { return a() }, function() { return yh().then(function() { return a() }) });
            this.set("SOURCE_HOST", function() { return R(al(b).sourceUrl).host });
            this.set("SOURCE_HOSTNAME", function() { return R(al(b).sourceUrl).hostname });
            this.set("SOURCE_PATH", function() { return R(al(b).sourceUrl).pathname });
            this.set("PAGE_VIEW_ID", function() { return al(b).pageViewId });
            this.setAsync("PAGE_VIEW_ID_64", function() { return al(b).pageViewId64 });
            this.setBoth("QUERY_PARAM", function(l, m) { return cl(b, l, void 0 === m ? "" : m) }, function(l, m) { var n = void 0 === m ? "" : m; return yh().then(function() { return cl(b, l, n) }) });
            this.set("FRAGMENT_PARAM", function(l, m) {
                m = void 0 === m ? "" : m;
                J(l, "The first argument to FRAGMENT_PARAM, the fragment string param is required");
                J("string" == typeof l, "param should be a string");
                var n = B(b.ampdoc.win.location.originalHash);
                return void 0 === n[l] ? m : n[l]
            });
            var h = null;
            this.setBoth("CLIENT_ID", function(l) { return h ? h[l] : null }, function(l, m, n, q) {
                J(l, "The first argument to CLIENT_ID, the fallback Cookie name, is required");
                var t = p();
                m && (t = $c(d, "userNotificationManager", "amp-user-notification").then(function(x) { return x.get(m) }));
                return Mc(b.ampdoc, "cid").then(function(x) { q = "true" == q ? !0 : !1; return x.get({ scope: l, createCookieIfNotPresent: !0, cookieName: n || void 0, disableBackup: q }, t) }).then(function(x) {
                    h || (h = Object.create(null));
                    var u = n || l;
                    x && "_ga" == u && ("string" === typeof x ?
                        x = x.replace(/^(GA1|1)\.[\d-]+\./, "") : H().error("UrlReplacements", "non-string cid, what is it?", Object.keys(x)));
                    return h[l] = x
                })
            });
            this.setAsync("VARIANT", function(l) {
                return dl(b, function(m) {
                    var n = m[l];
                    J(void 0 !== n, "The value passed to VARIANT() is not a valid experiment in <amp-experiment>:" + l);
                    return null === n ? "none" : n
                }, "VARIANT")
            });
            this.setAsync("VARIANTS", function() {
                return dl(b, function(l) {
                    var m = [],
                        n;
                    for (n in l) m.push(n + "." + (l[n] || "none"));
                    return m.join("!")
                }, "VARIANTS")
            });
            this.setAsync("AMP_GEO",
                function(l) { return el(b, function(m) { return l ? (J("ISOCountry" === l, "The value passed to AMP_GEO() is not valid name:" + l), m[l] || "unknown") : m.matchedISOCountryGroups.join(",") }) });
            this.set("TIMESTAMP", Xk("getTime"));
            this.set("TIMESTAMP_ISO", Xk("toISOString"));
            this.set("TIMEZONE", Xk("getTimezoneOffset"));
            this.set("SCROLL_HEIGHT", function() { return e.getScrollHeight() });
            this.set("SCROLL_WIDTH", function() { return e.getScrollWidth() });
            this.set("VIEWPORT_HEIGHT", function() { return e.getHeight() });
            this.set("VIEWPORT_WIDTH",
                function() { return e.getWidth() });
            var k = c.screen;
            this.set("SCREEN_WIDTH", Yk(k, "width"));
            this.set("SCREEN_HEIGHT", Yk(k, "height"));
            this.set("AVAILABLE_SCREEN_HEIGHT", Yk(k, "availHeight"));
            this.set("AVAILABLE_SCREEN_WIDTH", Yk(k, "availWidth"));
            this.set("SCREEN_COLOR_DEPTH", Yk(k, "colorDepth"));
            this.set("DOCUMENT_CHARSET", function() { var l = c.document; return l.characterSet || l.charset });
            this.set("BROWSER_LANGUAGE", function() { var l = c.navigator; return (l.language || l.userLanguage || l.browserLanguage || "").toLowerCase() });
            this.set("USER_AGENT", function() { return c.navigator.userAgent });
            $k(this, "PAGE_LOAD_TIME", "navigationStart", "loadEventStart");
            $k(this, "DOMAIN_LOOKUP_TIME", "domainLookupStart", "domainLookupEnd");
            $k(this, "TCP_CONNECT_TIME", "connectStart", "connectEnd");
            $k(this, "SERVER_RESPONSE_TIME", "requestStart", "responseStart");
            $k(this, "PAGE_DOWNLOAD_TIME", "responseStart", "responseEnd");
            $k(this, "REDIRECT_TIME", "navigationStart", "fetchStart");
            $k(this, "DOM_INTERACTIVE_TIME", "navigationStart", "domInteractive");
            $k(this,
                "CONTENT_LOAD_TIME", "navigationStart", "domContentLoadedEventStart");
            this.setAsync("ACCESS_READER_ID", function() { return fl(b, function(l) { return l.getAccessReaderId() }, "ACCESS_READER_ID") });
            this.setAsync("AUTHDATA", function(l) { J(l, "The first argument to AUTHDATA, the field, is required"); return fl(b, function(m) { return m.getAuthdataField(l) }, "AUTHDATA") });
            this.setAsync("VIEWER", function() { return Q(b.ampdoc).getViewerOrigin().then(function(l) { return void 0 == l ? "" : l }) });
            this.setAsync("TOTAL_ENGAGED_TIME",
                function() { return $c(d, "activity", "amp-analytics").then(function(l) { return l.getTotalEngagedTime() }) });
            this.setAsync("INCREMENTAL_ENGAGED_TIME", function(l, m) { return $c(d, "activity", "amp-analytics").then(function(n) { return n.getIncrementalEngagedTime(l, "false" !== m) }) });
            this.set("NAV_TIMING", function(l, m) { J(l, "The first argument to NAV_TIMING, the start attribute name, is required"); return Jk(c, l, m) });
            this.setAsync("NAV_TIMING", function(l, m) {
                J(l, "The first argument to NAV_TIMING, the start attribute name, is required");
                return Ik(c, l, m)
            });
            this.set("NAV_TYPE", function() { return Kk(c, "type") });
            this.set("NAV_REDIRECT_COUNT", function() { return Kk(c, "redirectCount") });
            this.set("AMP_VERSION", function() { return "2104302228000" });
            this.set("BACKGROUND_STATE", function() { return b.ampdoc.isVisible() ? "0" : "1" });
            this.setAsync("VIDEO_STATE", function(l, m) { return Jc(b.ampdoc, "video-manager").getVideoStateProperty(l, m) });
            this.setAsync("AMP_STATE", function(l) {
                var m = b.ampdoc.getRootNode();
                return bd(m.documentElement || m).then(function(n) {
                    return n ?
                        n.getStateValue(l) || "" : ""
                })
            })
        };

        function bl(a, b) {
            if (a = al(a).replaceParams) {
                b = ze(b);
                var c = R(b);
                c = B(c.search);
                for (var d = A({}), e = Object.keys(a), f = 0; f < e.length; f++) Wa.call(c, e[f]) || (d[e[f]] = a[e[f]]);
                a = te(b, d)
            } else a = b;
            return a
        }

        function al(a) { return dd(a.ampdoc) }

        function fl(a, b, c) {
            a = a.ampdoc.getHeadNode();
            return Promise.all([ad(a, "access", "amp-access"), ad(a, "subscriptions", "amp-subscriptions")]).then(function(d) {
                var e = d[0],
                    f = d[1];
                d = e || f;
                return d ? e && f ? b(f) || b(e) : b(d) : (D().error("UrlReplacements", "Access or subsciptions service is not installed to access: ", c), null)
            })
        }

        function cl(a, b, c) {
            J(b, "The first argument to QUERY_PARAM, the query string param is required");
            var d = R(ze(a.ampdoc.win.location.href));
            d = B(d.search);
            a = al(a).replaceParams;
            return "undefined" !== typeof d[b] ? d[b] : a && "undefined" !== typeof a[b] ? a[b] : c
        }

        function dl(a, b, c) { return ad(a.ampdoc.getHeadNode(), "variant", "amp-experiment", !0).then(function(d) { J(d, "To use variable %s, amp-experiment should be configured", c); return d.getVariants() }).then(function(d) { return b(d) }) }

        function el(a, b) { a = a.ampdoc.getHeadNode(); return ad(a, "geo", "amp-geo", !0).then(function(c) { J(c, "To use variable %s, amp-geo should be configured", "AMP_GEO"); return b(c) }) }

        function gl(a, b) {
            this.ampdoc = a;
            this.ia = b
        }
        g = gl.prototype;
        g.expandStringSync = function(a, b, c) { return (new Ok(this.ia, b, void 0, !0, c, !0)).expand(a) };
        g.expandStringAsync = function(a, b, c) { return (new Ok(this.ia, b, void 0, void 0, c, !0)).expand(a) };
        g.expandUrlSync = function(a, b, c) { return hl(a, (new Ok(this.ia, b, void 0, !0, c)).expand(a)) };
        g.expandUrlAsync = function(a, b, c, d) { return (new Ok(this.ia, b, void 0, void 0, c, d)).expand(a).then(function(e) { return hl(a, e) }) };
        g.expandInputValueAsync = function(a) { return il(this, a, !1) };
        g.expandInputValueSync = function(a) { return il(this, a, !0) };

        function il(a, b, c) {
            "INPUT" == b.tagName && (b.getAttribute("type") || "").toLowerCase();
            var d = jl(b);
            if (!d) return c ? b.value : Promise.resolve(b.value);
            void 0 === b["amp-original-value"] && (b["amp-original-value"] = b.value);
            a = (new Ok(a.ia, void 0, void 0, c, d)).expand(b["amp-original-value"] || b.value);
            return c ? b.value = a : a.then(function(e) { return b.value = e })
        }

        function jl(a, b) {
            if (a = a.getAttribute("data-amp-replace")) {
                var c = {};
                a.trim().split(/\s+/).forEach(function(d) {!b || Wa.call(b, d) ? c[d] = !0 : D().warn("URL", "Ignoring unsupported replacement", d) });
                return c
            }
        }
        g.maybeExpandLink = function(a, b) {
            var c = a.getAttribute("data-amp-addparams") || "",
                d = jl(a, { CLIENT_ID: !0, QUERY_PARAM: !0, PAGE_VIEW_ID: !0, PAGE_VIEW_ID_64: !0, NAV_TIMING: !0 });
            if (d || c || b) {
                var e = a["amp-original-href"] || a.getAttribute("href"),
                    f = R(e);
                null == a["amp-original-href"] && (a["amp-original-href"] = e);
                a: {
                    var h = dd(this.ampdoc);
                    if (f.origin == R(h.canonicalUrl).origin || f.origin == R(h.sourceUrl).origin) f = !0;
                    else {
                        if (h = this.ampdoc.getMetaByName("amp-link-variable-allowed-origin")) {
                            h = h.trim().split(/\s+/);
                            for (var k =
                                    0; k < h.length; k++)
                                if (f.origin == R(h[k]).origin) { f = !0; break a }
                        }
                        f = !1
                    }
                }
                var l = f;
                c && (l ? (f = c, f = d ? this.expandUrlSync(f, void 0, d) : f) : f = c, c = f, e = te(e, B(c)));
                if (!l) return d && D().warn("URL", "Ignoring link replacement %s because the link does not go to the document's source, canonical, or allowlisted origin.", e), a.href = e;
                b && (d && d.QUERY_PARAM || (b = this.expandUrlSync(b, void 0, { QUERY_PARAM: !0 })), e = te(e, B(b)));
                e = d ? this.expandUrlSync(e, void 0, d) : e;
                return a.href = e
            }
        };
        g.collectVars = function(a, b) { var c = Object.create(null); return (new Ok(this.ia, b, c)).expand(a).then(function() { return c }) };
        g.collectDisallowedVarsSync = function(a) {
            var b = a.getAttribute("src"),
                c = (new Ok(this.ia)).getMacroNames(b),
                d = jl(a);
            return d ? c.filter(function(e) { return !d[e] }) : c
        };

        function hl(a, b) {
            var c = R(b, !0).protocol,
                d = R(a, !0).protocol;
            if (c != d) return D().error("UrlReplacements", "Illegal replacement of the protocol: ", a), a;
            J(ye(b), "The replacement url has invalid protocol: %s", b);
            return b
        }
        g.getVariableSource = function() { return this.ia };

        function kl(a) { M(a, "url-replace", function(b) { return new gl(b, new Zk(b)) }) };
        var ll = /^(https?:\/\/)((www[0-9]*|web|ftp|wap|home|mobile|amp|m)\.)+/i;

        function ml(a) {
            var b = this;
            this.ampdoc = a;
            this.win = a.win;
            this.Qb = dc(this.win);
            this.la = !0;
            this.Ec = !1;
            this.ce = y();
            this.xc = y();
            this.Sf = new W;
            this.Ve = new W;
            this.zc = this.pb = null;
            this.qb = [];
            this.ya = y();
            this.Mb = y();
            a.isSingleDoc() && Object.assign(this.Mb, B(this.win.location.hash));
            this.la = !parseInt(a.getParam("off"), 10);
            H().fine("Viewer", "- runtimeOn:", this.la);
            this.Ec = !(!parseInt(a.getParam("history"), 10) && !this.Ec);
            H().fine("Viewer", "- history:", this.Ec);
            H().fine("Viewer", "- visibilityState:", this.ampdoc.getVisibilityState());
            this.Pb = null;
            this.Yg = S(R(this.ampdoc.win.location.href));
            var c = new v;
            this.eh = c.resolve;
            this.Wa = nl(this, c.promise);
            this.Ee = this.mb = null;
            var d = a.getParam("referrer");
            this.Xc = this.isEmbedded() && null != d && !1 !== ol(this) ? d : this.win.document.referrer;
            this.sh = new Promise(function(f) {
                b.isEmbedded() && null != a.getParam("referrer") ? b.isTrustedViewer().then(function(h) {
                    h ? f(a.getParam("referrer")) : (f(b.win.document.referrer), b.Xc != b.win.document.referrer && (H().expectedError("Viewer", "Untrusted viewer referrer override: " +
                        b.Xc + " at " + b.zc), b.Xc = b.win.document.referrer))
                }) : f(b.win.document.referrer)
            });
            this.Nc = xe(this.win.location.href || "");
            this.Oh = new Promise(function(f) {
                var h = a.getParam("viewerUrl");
                b.isEmbedded() && h ? b.isTrustedViewer().then(function(k) {
                    k ? b.Nc = h : H().expectedError("Viewer", "Untrusted viewer url override: " + h + " at " + b.zc);
                    f(b.Nc)
                }) : f(b.Nc)
            });
            if (this.Mb.click) {
                var e = xe(this.win.location.href);
                e != this.win.location.href && this.win.history.replaceState && (this.win.location.originalHash || (this.win.location.originalHash =
                    this.win.location.hash), this.win.history.replaceState({}, "", e), delete this.Mb.click, H().fine("Viewer", "replace fragment:" + this.win.location.href))
            }
            this.ampdoc.whenFirstVisible().then(function() { b.maybeUpdateFragmentForCct() });
            this.ampdoc.isSingleDoc() && pl(this)
        }

        function nl(a, b) {
            return a.Qb && !a.win.__AMP_TEST_IFRAME && (a.ampdoc.getParam("origin") || a.ampdoc.getParam("visibilityState") || -1 != a.win.location.search.indexOf("amp_js_v")) || a.isWebviewEmbedded() || a.isCctEmbedded() || !a.ampdoc.isSingleDoc() ? O(a.win).timeoutPromise(2E4, b, "initMessagingChannel timeout").catch(function(c) {
                (c = ql(c)) && Qa(c.message, "initMessagingChannel timeout") && (c = H().createExpectedError(c));
                Jf(c);
                throw c;
            }) : null
        }
        g = ml.prototype;
        g.getAmpDoc = function() { return this.ampdoc };
        g.getParam = function(a) { return this.ampdoc.getParam(a) };
        g.hasCapability = function(a) { var b = this.ampdoc.getParam("cap"); return b ? -1 != b.split(",").indexOf(a) : !1 };
        g.isEmbedded = function() { return !!this.Wa };
        g.isWebviewEmbedded = function() { return !this.Qb && "1" == this.ampdoc.getParam("webview") };
        g.isCctEmbedded = function() {
            if (null != this.Pb) return this.Pb;
            this.Pb = !1;
            if (!this.Qb) {
                var a = B(this.win.location.search);
                this.Pb = "1" === a.amp_gsa && (a.amp_js_v || "").startsWith("a")
            }
            return this.Pb
        };
        g.isProxyOrigin = function() { return this.Yg };
        g.maybeUpdateFragmentForCct = function() {
            if (this.isCctEmbedded() && this.win.history.replaceState) {
                var a = Ce(this.win.location.href),
                    b = dd(this.ampdoc).canonicalUrl,
                    c = Ce(b);
                rl(a, c) && (this.Mb.ampshare = b, this.win.history.replaceState({}, "", "#" + ue(this.Mb)))
            }
        };

        function rl(a, b) {
            function c(d) { return 2 < d.split(".").length ? d.replace(ll, "$1") : d }
            return c(a) == c(b)
        }
        g.isRuntimeOn = function() { return this.la };
        g.toggleRuntime = function() {
            this.la = !this.la;
            H().fine("Viewer", "Runtime state:", this.la);
            this.Sf.fire(this.la)
        };
        g.onRuntimeState = function(a) { return this.Sf.add(a) };
        g.isOvertakeHistory = function() { return this.Ec };
        g.getVisibilityState = function() { return this.ampdoc.getVisibilityState() };
        g.isVisible = function() { return this.ampdoc.isVisible() };
        g.hasBeenVisible = function() { return this.ampdoc.hasBeenVisible() };
        g.whenFirstVisible = function() { return this.ampdoc.whenFirstVisible() };
        g.whenNextVisible = function() { return this.ampdoc.whenNextVisible() };
        g.getFirstVisibleTime = function() { return this.ampdoc.getFirstVisibleTime() };
        g.getLastVisibleTime = function() { return this.ampdoc.getLastVisibleTime() };
        g.onVisibilityChanged = function(a) { return this.ampdoc.onVisibilityChanged(a) };

        function sl(a, b) { b && (b = H().assertEnumValue(of, b, "VisibilityState"), "hidden" === b && (b = null != a.ampdoc.getLastVisibleTime() ? "inactive" : "prerender"), a.ampdoc.overrideVisibilityState(b), H().fine("Viewer", "visibilitychange event:", a.ampdoc.getVisibilityState())) }
        g.getResolvedViewerUrl = function() { return this.Nc };
        g.getViewerUrl = function() { return this.Oh };
        g.maybeGetMessagingOrigin = function() { return this.zc };
        g.getUnconfirmedReferrerUrl = function() { return this.Xc };
        g.getReferrerUrl = function() { return this.sh };
        g.isTrustedViewer = function() {
            if (!this.mb) {
                var a = ol(this);
                this.mb = void 0 !== a ? Promise.resolve(a) : this.Wa.then(function(b) { return b ? tl(b) : !1 })
            }
            return this.mb
        };

        function ol(a) { if (!a.isEmbedded()) return !1; if (a.win.location.ancestorOrigins && !a.isWebviewEmbedded() && !a.isCctEmbedded()) return 0 < a.win.location.ancestorOrigins.length && tl(a.win.location.ancestorOrigins[0]) }
        g.getViewerOrigin = function() {
            if (!this.Ee) {
                var a;
                this.isEmbedded() ? this.win.location.ancestorOrigins && 0 < this.win.location.ancestorOrigins.length && (a = this.win.location.ancestorOrigins[0]) : a = "";
                this.Ee = void 0 !== a ? Promise.resolve(a) : O(this.win).timeoutPromise(1E3, this.Wa).catch(function() { return "" })
            }
            return this.Ee
        };

        function tl(a) {
            var b = R(a);
            a = b.protocol;
            return "x-thread:" == a ? !0 : "https:" != a ? !1 : mb.trustedViewerHosts.some(function(c) { return c.test(b.hostname) })
        }
        g.onMessage = function(a, b) {
            var c = this.ce[a];
            c || (c = new W, this.ce[a] = c);
            var d = c.add(b);
            this.ya[a] && (this.ya[a].forEach(function(e) {
                c.fire(e.data);
                e.deferred.resolve()
            }), this.ya[a] = []);
            return d
        };
        g.onMessageRespond = function(a, b) {
            var c = this;
            this.xc[a] = b;
            this.ya[a] && (this.ya[a].forEach(function(d) { d.deferred.resolve(b(d.data)) }), this.ya[a] = []);
            return function() { c.xc[a] === b && delete c.xc[a] }
        };
        g.receiveMessage = function(a, b) {
            if ("visibilitychange" == a) return sl(this, b.state), p();
            if ("broadcast" == a) return this.Ve.fire(b), p();
            var c = this.ce[a],
                d = this.xc[a];
            if (!c && !d) {
                this.ya[a] = this.ya[a] || [];
                if (50 <= this.ya[a].length) return;
                c = new v;
                this.ya[a].push({ data: b, deferred: c });
                return c.promise
            }
            c && c.fire(b);
            if (d) return d(b);
            if (c) return p()
        };
        g.setMessageDeliverer = function(a, b) {
            var c = this;
            if (this.pb) throw Error("message channel can only be initialized once");
            if (null == b) throw Error("message channel must have an origin");
            H().fine("Viewer", "message channel established with origin: ", b);
            this.pb = a;
            this.zc = b;
            this.eh(b);
            0 < this.qb.length && (a = this.qb.slice(0), this.qb = [], a.forEach(function(d) {
                var e = c.pb(d.eventType, d.data, d.awaitResponse);
                d.awaitResponse && d.responseResolver(e)
            }))
        };
        g.sendMessage = function(a, b, c) { ul(this, a, b, void 0 === c ? !1 : c, !1) };
        g.sendMessageAwaitResponse = function(a, b, c) { return ul(this, a, b, void 0 === c ? !1 : c, !0) };

        function ul(a, b, c, d, e) {
            if (a.pb) return oa(function() { return a.pb(b, c, e) });
            if (!a.Wa) return e ? Promise.reject(ql()) : p();
            if (!d) return a.Wa.then(function() { return a.pb(b, c, e) });
            var f = Oa(a.qb, function(h) { return h.eventType == b }); - 1 != f ? (d = a.qb.splice(f, 1)[0], d.data = c, d.awaitResponse = d.awaitResponse || e) : (d = new v, d = { eventType: b, data: c, awaitResponse: e, responsePromise: d.promise, responseResolver: d.resolve });
            a.qb.push(d);
            return d.responsePromise
        }
        g.broadcast = function(a) { return this.Wa ? ul(this, "broadcast", a, !1, !1).then(function() { return !0 }, function() { return !1 }) : Promise.resolve(!1) };
        g.onBroadcast = function(a) { return this.Ve.add(a) };
        g.whenMessagingReady = function() { return this.Wa };
        g.replaceUrl = function(a) {
            if (a && this.ampdoc.isSingleDoc() && this.win.history.replaceState) try {
                var b = R(this.win.location.href),
                    c = R(xe(a) + this.win.location.hash);
                b.origin == c.origin && Ce(b) == Ce(c) && (this.win.history.replaceState({}, "", c.href), this.win.location.originalHref = b.href, H().fine("Viewer", "replace url:" + c.href))
            } catch (d) { H().error("Viewer", "replaceUrl failed", d) }
        };

        function pl(a) {
            if ("visible" != a.ampdoc.getVisibilityState()) {
                var b = [],
                    c = function() { return b.forEach(function(f) { return f() }) },
                    d = function() {
                        sl(a, "visible");
                        c();
                        H().expectedError("Viewer", "Received user action in non-visible doc")
                    },
                    e = { capture: !0, passive: !0 };
                b.push(ef(a.win, "keydown", d, e), ef(a.win, "touchstart", d, e), ef(a.win, "mousedown", d, e));
                a.whenFirstVisible().then(c)
            }
        }

        function ql(a) {
            if (a instanceof Error) {
                a = ab(a);
                a.message = "No messaging channel: " + a.message;
                var b = a
            } else b = Error("No messaging channel: " + a);
            b.message = b.message.replace("\u200b\u200b\u200b", "");
            return b
        };

        function vl(a, b, c, d) { var e = new wl(a, b, c, d); return e.solveYValueFromXValue.bind(e) }

        function wl(a, b, c, d) {
            this.y0 = this.x0 = 0;
            this.x1 = a;
            this.y1 = b;
            this.x2 = c;
            this.y2 = d;
            this.y3 = this.x3 = 1
        }
        g = wl.prototype;
        g.solveYValueFromXValue = function(a) { return this.getPointY(this.solvePositionFromXValue(a)) };
        g.solvePositionFromXValue = function(a) {
            var b = (a - this.x0) / (this.x3 - this.x0);
            if (0 >= b) return 0;
            if (1 <= b) return 1;
            for (var c = 0, d = 1, e = 0, f = 0; 8 > f; f++) {
                e = this.getPointX(b);
                var h = (this.getPointX(b + 1E-6) - e) / 1E-6;
                if (1E-6 > Math.abs(e - a)) return b;
                if (1E-6 > Math.abs(h)) break;
                else e < a ? c = b : d = b, b -= (e - a) / h
            }
            for (f = 0; 1E-6 < Math.abs(e - a) && 8 > f; f++) e < a ? (c = b, b = (b + d) / 2) : (d = b, b = (b + c) / 2), e = this.getPointX(b);
            return b
        };
        g.getPointX = function(a) {
            if (0 == a) return this.x0;
            if (1 == a) return this.x3;
            var b = this.lerp(this.x0, this.x1, a),
                c = this.lerp(this.x1, this.x2, a),
                d = this.lerp(this.x2, this.x3, a);
            b = this.lerp(b, c, a);
            c = this.lerp(c, d, a);
            return this.lerp(b, c, a)
        };
        g.getPointY = function(a) {
            if (0 == a) return this.y0;
            if (1 == a) return this.y3;
            var b = this.lerp(this.y0, this.y1, a),
                c = this.lerp(this.y1, this.y2, a),
                d = this.lerp(this.y2, this.y3, a);
            b = this.lerp(b, c, a);
            c = this.lerp(c, d, a);
            return this.lerp(b, c, a)
        };
        g.lerp = function(a, b, c) { return a + c * (b - a) };
        var xl = vl(.25, .1, .25, 1),
            yl = vl(.42, 0, 1, 1),
            zl = vl(0, 0, .58, 1),
            Al = vl(.42, 0, .58, 1),
            Bl = { linear: function(a) { return a }, ease: xl, "ease-in": yl, "ease-out": zl, "ease-in-out": Al };

        function Cl(a) {
            if (!a) return null;
            if ("string" == typeof a) {
                if (-1 != a.indexOf("cubic-bezier")) {
                    var b = a.match(/cubic-bezier\((.+)\)/);
                    if (b && (b = b[1].split(",").map(parseFloat), 4 == b.length)) {
                        for (var c = 0; 4 > c; c++)
                            if (isNaN(b[c])) return null;
                        return vl(b[0], b[1], b[2], b[3])
                    }
                    return null
                }
                return Bl[a]
            }
            return a
        };

        function Dl() {}

        function El(a) {
            this.Gb = a;
            this.J = id(self);
            this.jf = null;
            this.Y = []
        }

        function Fl(a, b, c, d) { return (new El(a)).setCurve(d).add(0, b, 1).start(c) }
        El.prototype.setCurve = function(a) { a && (this.jf = Cl(a)); return this };
        El.prototype.add = function(a, b, c, d) { this.Y.push({ delay: a, func: b, duration: c, curve: Cl(d) }); return this };
        El.prototype.start = function(a) { return new Hl(this.J, this.Gb, this.Y, this.jf, a) };

        function Hl(a, b, c, d, e) {
            this.J = a;
            this.Gb = b;
            this.Y = [];
            for (a = 0; a < c.length; a++) {
                var f = c[a];
                this.Y.push({ delay: f.delay, func: f.func, duration: f.duration, curve: f.curve || d, started: !1, completed: !1 })
            }
            this.Ag = e;
            this.we = Date.now();
            this.Za = !0;
            this.H = {};
            c = new v;
            this.Of = c.promise;
            this.Mc = c.resolve;
            this.uh = c.reject;
            this.ag = this.J.createAnimTask(this.Gb, { mutate: this.Eh.bind(this) });
            this.J.canAnimate(this.Gb) ? this.ag(this.H) : (H().warn("Animation", "cannot animate"), Il(this, !1, 0))
        }
        Hl.prototype.then = function(a, b) { return a || b ? this.Of.then(a, b) : this.Of };
        Hl.prototype.thenAlways = function(a) { a = a || Dl; return this.then(a, a) };
        Hl.prototype.halt = function(a) { Il(this, !1, a || 0) };

        function Il(a, b, c) {
            if (a.Za) {
                a.Za = !1;
                if (0 != c) {
                    1 < a.Y.length && a.Y.sort(function(e, f) { return e.delay + e.duration - (f.delay + f.duration) });
                    try {
                        if (0 < c)
                            for (c = 0; c < a.Y.length; c++) a.Y[c].func(1, !0);
                        else
                            for (var d = a.Y.length - 1; 0 <= d; d--) a.Y[d].func(0, !1)
                    } catch (e) { H().error("Animation", "completion failed: " + e, e), b = !1 }
                }
                b ? a.Mc() : a.uh()
            }
        }
        Hl.prototype.Eh = function() {
            if (this.Za) {
                for (var a = Date.now(), b = Math.min((a - this.we) / this.Ag, 1), c = 0; c < this.Y.length; c++) { var d = this.Y[c];!d.started && b >= d.delay && (d.started = !0) }
                for (c = 0; c < this.Y.length; c++)
                    if (d = this.Y[c], d.started && !d.completed) a: {
                        var e;
                        if (0 < d.duration) {
                            var f = e = Math.min((b - d.delay) / d.duration, 1);
                            if (d.curve && 1 != f) try { f = d.curve(e) } catch (h) {
                                H().error("Animation", "step curve failed: " + h, h);
                                Il(this, !1, 0);
                                break a
                            }
                        } else f = e = 1;1 == e && (d.completed = !0);
                        try { d.func(f, d.completed) } catch (h) {
                            H().error("Animation",
                                "step mutate failed: " + h, h), Il(this, !1, 0)
                        }
                    }
                1 == b ? Il(this, !0, 0) : this.J.canAnimate(this.Gb) ? this.ag(this.H) : (H().warn("Animation", "cancel animation"), Il(this, !1, 0))
            }
        };

        function Jl(a, b) {
            for (b = b.lastElementChild; b; b = b.previousElementSibling)
                if (0 < b.getBoundingClientRect().height) { var c = a.getComputedStyle(b) || Me; if ("static" == c.position || "relative" == c.position) { var d = c; break } }
            return d ? parseInt(d.marginBottom, 10) : 0
        };

        function Kl(a) {
            var b = this;
            this.win = a;
            this.J = id(a);
            a = this.win.document;
            var c = a.documentElement,
                d = c.className;
            c.classList.add("i-amphtml-ios-embed");
            var e = a.createElement("html");
            this.Z = e;
            e.id = "i-amphtml-wrapper";
            e.className = d;
            this.Qa = new W;
            this.Pa = new W;
            this.Fb = this.Lf.bind(this);
            this.Eb = function() { return b.Pa.fire() };
            this.ea = 0;
            this.Vf = !1;
            Lb(a, this.Wf.bind(this));
            Nj(a).then(function() { c.classList.add("i-amphtml-ios-overscroll") });
            H().fine("Viewport", "initialized ios-embed-wrapper viewport")
        }
        g = Kl.prototype;
        g.ensureReadyForElements = function() { this.Wf() };
        g.Wf = function() {
            if (!this.Vf) {
                this.Vf = !0;
                var a = this.win.document,
                    b = a.body;
                a.documentElement.appendChild(this.Z);
                this.Z.appendChild(b);
                Object.defineProperty(a, "body", { get: function() { return b } });
                this.Lf()
            }
        };
        g.connect = function() {
            this.win.addEventListener("resize", this.Eb);
            this.Z.addEventListener("scroll", this.Fb)
        };
        g.disconnect = function() {
            this.win.removeEventListener("resize", this.Eb);
            this.Z.removeEventListener("scroll", this.Fb)
        };
        g.getBorderTop = function() { return 1 };
        g.requiresFixedLayerTransfer = function() { return Ge(this.win, "ios-fixed-no-transfer") ? 12.2 > parseFloat(P(this.win).getIosVersionString()) : !0 };
        g.overrideGlobalScrollTo = function() { return !0 };
        g.supportsPositionFixed = function() { return !0 };
        g.onScroll = function(a) { this.Qa.add(a) };
        g.onResize = function(a) { this.Pa.add(a) };
        g.updatePaddingTop = function(a) {
            this.ea = a;
            Oe(this.Z, { "padding-top": a + "px" })
        };
        g.hideViewerHeader = function(a) { a || this.updatePaddingTop(0) };
        g.showViewerHeader = function(a, b) { a || this.updatePaddingTop(b) };
        g.disableScroll = function() { this.Z.classList.add("i-amphtml-scroll-disabled") };
        g.resetScroll = function() { this.Z.classList.remove("i-amphtml-scroll-disabled") };
        g.updateLightboxMode = function() { return p() };
        g.getSize = function() { return { width: this.win.innerWidth, height: this.win.innerHeight } };
        g.getScrollTop = function() { return this.Z.scrollTop };
        g.getScrollLeft = function() { return 0 };
        g.getScrollWidth = function() { return this.Z.scrollWidth };
        g.getScrollHeight = function() { return this.Z.scrollHeight };
        g.getContentHeight = function() {
            var a = this.win.document.body,
                b = a.getBoundingClientRect().height,
                c = Jl(this.win, a);
            a = this.win.getComputedStyle(a) || Me;
            return parseInt(a.marginTop, 10) + this.ea + b + c + parseInt(a.marginBottom, 10)
        };
        g.contentHeightChanged = function() {};
        g.getLayoutRect = function(a, b, c) {
            a = a.getBoundingClientRect();
            var d = void 0 != c ? c : this.getScrollTop(),
                e = void 0 != b ? b : this.getScrollLeft();
            return uc(Math.round(a.left + e), Math.round(a.top + d), Math.round(a.width), Math.round(a.height))
        };
        g.getRootClientRectAsync = function() { return Promise.resolve(null) };
        g.setScrollTop = function(a) { this.Z.scrollTop = a || 1 };
        g.Lf = function(a) {
            0 == this.Z.scrollTop && (this.Z.scrollTop = 1, a && a.preventDefault());
            a && this.Qa.fire()
        };
        g.getScrollingElement = function() { return this.Z };
        g.getScrollingElementScrollsLikeViewport = function() { return !1 };

        function Ll(a) {
            var b = this;
            this.ampdoc = a;
            this.win = a.win;
            this.xa = P(this.win);
            this.Qa = new W;
            this.Pa = new W;
            this.Fb = this.Ig.bind(this);
            this.Eb = function() { return b.Pa.fire() };
            H().fine("Viewport", "initialized natural viewport")
        }
        g = Ll.prototype;
        g.Ig = function() { this.Qa.fire() };
        g.connect = function() {
            this.win.addEventListener("scroll", this.Fb);
            this.win.addEventListener("resize", this.Eb)
        };
        g.disconnect = function() {
            this.win.removeEventListener("scroll", this.Fb);
            this.win.removeEventListener("resize", this.Eb)
        };
        g.ensureReadyForElements = function() {};
        g.getBorderTop = function() { return 0 };
        g.requiresFixedLayerTransfer = function() { return !1 };
        g.overrideGlobalScrollTo = function() { return !1 };
        g.supportsPositionFixed = function() { return !0 };
        g.onScroll = function(a) { this.Qa.add(a) };
        g.onResize = function(a) { this.Pa.add(a) };
        g.updatePaddingTop = function(a) { Oe(this.win.document.documentElement, { "padding-top": a + "px" }) };
        g.hideViewerHeader = function(a) { a || this.updatePaddingTop(0) };
        g.showViewerHeader = function(a, b) { a || this.updatePaddingTop(b) };
        g.disableScroll = function() { this.win.document.documentElement.classList.add("i-amphtml-scroll-disabled") };
        g.resetScroll = function() { this.win.document.documentElement.classList.remove("i-amphtml-scroll-disabled") };
        g.updateLightboxMode = function() { return p() };
        g.getSize = function() {
            var a = this.win.innerWidth,
                b = this.win.innerHeight;
            if (a && b) return { width: a, height: b };
            var c = this.win.document.documentElement;
            return { width: c.clientWidth, height: c.clientHeight }
        };
        g.getScrollTop = function() {
            var a = this.getScrollingElement().scrollTop || this.win.pageYOffset,
                b = this.ampdoc.getRootNode().host;
            return b ? a - b.offsetTop : a
        };
        g.getScrollLeft = function() { return 0 };
        g.getScrollWidth = function() { return this.getScrollingElement().scrollWidth };
        g.getScrollHeight = function() { return this.getScrollingElement().scrollHeight };
        g.getContentHeight = function() {
            var a = this.getScrollingElement(),
                b = a.getBoundingClientRect(),
                c = b.top + this.getScrollTop(),
                d = P(this.win).isSafari() ? Jl(this.win, a) : 0;
            a = this.win.getComputedStyle(a) || Me;
            return c + parseInt(a.marginTop, 10) + b.height + d + parseInt(a.marginBottom, 10)
        };
        g.contentHeightChanged = function() {};
        g.getLayoutRect = function(a, b, c) {
            a = a.getBoundingClientRect();
            c = void 0 != c ? c : this.getScrollTop();
            b = void 0 != b ? b : this.getScrollLeft();
            return uc(Math.round(a.left + b), Math.round(a.top + c), Math.round(a.width), Math.round(a.height))
        };
        g.getRootClientRectAsync = function() { return Promise.resolve(null) };
        g.setScrollTop = function(a) { this.getScrollingElement().scrollTop = a };
        g.getScrollingElement = function() { var a = this.win.document; return a.scrollingElement ? a.scrollingElement : a.body && this.xa.isWebKit() ? a.body : a.documentElement };
        g.getScrollingElementScrollsLikeViewport = function() { return !0 };

        function Ml(a, b) { return function(c) { return a + (b - a) * c } };

        function Nl(a, b, c) {
            var d = this,
                e = a.win;
            this.ampdoc = a;
            this.Hd = this.ampdoc.win.document;
            this.j = b;
            this.h = c;
            this.Ca = this.$ = this.cc = null;
            this.se = !1;
            this.Pc = null;
            this.ea = Number(c.getParam("paddingTop") || 0);
            this.vc = 0;
            this.S = O(e);
            this.J = id(e);
            this.te = !1;
            this.ue = null;
            this.Ah = 0;
            this.bf = new W;
            this.Qa = new W;
            this.Pa = new W;
            this.ke = this.jc = void 0;
            this.U = null;
            this.h.onMessage("viewport", this.Mh.bind(this));
            this.h.onMessage("scroll", this.Nh.bind(this));
            this.h.onMessage("disableScroll", this.zg.bind(this));
            this.h.isEmbedded() &&
                this.j.updatePaddingTop(this.ea);
            this.j.onScroll(this.Bh.bind(this));
            this.j.onResize(this.Rf.bind(this));
            this.onScroll(this.Ch.bind(this));
            this.ja = !1;
            this.ampdoc.onVisibilityChanged(this.fg.bind(this));
            this.fg();
            var f = this.Hd.documentElement;
            a.isSingleDoc() && f.classList.add("i-amphtml-singledoc");
            c.isEmbedded() ? f.classList.add("i-amphtml-embedded") : f.classList.add("i-amphtml-standalone");
            dc(e) && f.classList.add("i-amphtml-iframed");
            "1" === c.getParam("webview") && f.classList.add("i-amphtml-webview");
            dc(e) && "scrollRestoration" in e.history && (e.history.scrollRestoration = "manual");
            if (this.j.overrideGlobalScrollTo()) try { Object.defineProperty(e, "scrollTo", { value: function(h, k) { return d.setScrollTop(k) } }), ["pageYOffset", "scrollY"].forEach(function(h) { Object.defineProperty(e, h, { get: function() { return d.getScrollTop() } }) }) } catch (h) {}
            P(e).isIos() && dc(e) && this.ampdoc.isSingleDoc() && this.ampdoc.whenReady().then(function() { e.scrollTo(-.1, 0) })
        }
        g = Nl.prototype;
        g.dispose = function() { this.j.disconnect() };
        g.ensureReadyForElements = function() { this.j.ensureReadyForElements() };
        g.fg = function() {
            var a = this.ampdoc.isVisible();
            a != this.ja && ((this.ja = a) ? (this.j.connect(), this.$ && this.Rf(), this.Ca && (this.Ca = null, this.getScrollTop())) : this.j.disconnect())
        };
        g.getPaddingTop = function() { return this.ea };
        g.getScrollTop = function() { null == this.Ca && (this.Ca = this.j.getScrollTop()); return this.Ca };
        g.getScrollLeft = function() { null == this.Pc && (this.Pc = this.j.getScrollLeft()); return this.Pc };
        g.setScrollTop = function(a) {
            this.Ca = null;
            this.j.setScrollTop(a)
        };
        g.updatePaddingBottom = function(a) { this.ampdoc.waitForBodyOpen().then(function(b) { U(b, "borderBottom", a + "px solid transparent") }) };
        g.getSize = function() {
            if (this.$) return this.$;
            this.$ = this.j.getSize();
            if (0 == this.$.width || 0 == this.$.height) {
                var a = this.ampdoc.getVisibilityState();
                ("prerender" == a || "visible" == a) && .01 > Math.random() && H().error("Viewport", "viewport has zero dimensions")
            }
            return this.$
        };
        g.getHeight = function() { return this.getSize().height };
        g.getWidth = function() { return this.getSize().width };
        g.getScrollWidth = function() { return this.j.getScrollWidth() };
        g.getScrollHeight = function() { return this.j.getScrollHeight() };
        g.getContentHeight = function() { return this.j.getContentHeight() };
        g.contentHeightChanged = function() { this.j.contentHeightChanged() };
        g.getRect = function() {
            if (null == this.cc) {
                var a = this.getScrollTop(),
                    b = this.getScrollLeft(),
                    c = this.getSize();
                this.cc = uc(b, a, c.width, c.height)
            }
            return this.cc
        };
        g.getLayoutRect = function(a) {
            var b = this.getScrollLeft(),
                c = this.getScrollTop(),
                d = Qc(a, this.ampdoc.win);
            return d ? (a = this.j.getLayoutRect(a, 0, 0), b = this.j.getLayoutRect(d, b, c), uc(Math.round(a.left + b.left), Math.round(a.top + b.top), Math.round(a.width), Math.round(a.height))) : this.j.getLayoutRect(a, b, c)
        };
        g.getClientRectAsync = function(a) {
            var b = this.J.measurePromise(function() { return a.getBoundingClientRect() }),
                c = this.j.getRootClientRectAsync(),
                d = Qc(a, this.ampdoc.win);
            d && (c = this.J.measurePromise(function() { return d.getBoundingClientRect() }));
            return Promise.all([b, c]).then(function(e) { var f = e[0]; return (e = e[1]) ? xc(f, e.left, e.top) : uc(Number(f.left), Number(f.top), Number(f.width), Number(f.height)) })
        };
        g.supportsPositionFixed = function() { return this.j.supportsPositionFixed() };
        g.isDeclaredFixed = function(a) { return this.U ? this.U.isDeclaredFixed(a) : !1 };
        g.scrollIntoView = function(a) { var b = this; return Ol(this, a).then(function(c) { return Pl(b, a, c) }) };

        function Pl(a, b, c) {
            var d = a.j.getLayoutRect(b).top;
            oa(function() { return Math.max(0, d - a.ea) }).then(function(e) { return Ql(a, c, e) })
        }
        g.animateScrollIntoView = function(a, b, c, d) {
            var e = this,
                f = void 0 === b ? "top" : b;
            return Ol(this, a).then(function(h) { return e.animateScrollWithinParent(a, h, f, c, d) })
        };
        g.animateScrollWithinParent = function(a, b, c, d, e) {
            var f = this,
                h = this.j.getLayoutRect(a),
                k = (b == this.j.getScrollingElement() ? this.getSize() : this.getLayoutRect(b)).height;
            switch (c) {
                case "bottom":
                    var l = -k + h.height;
                    break;
                case "center":
                    l = -k / 2 + h.height / 2;
                    break;
                default:
                    l = 0
            }
            return Rl(this, b).then(function(m) { var n = Math.max(0, h.top - f.ea + l); if (n != m) return Sl(f, b, m, n, d, e) })
        };

        function Sl(a, b, c, d, e, f) {
            var h = void 0 === f ? "ease-in" : f;
            e = void 0 !== e ? e : Tl(c, d);
            var k = Ml(c, d);
            return Fl(b, function(l) { Ql(a, b, k(l)) }, e, h).thenAlways(function() { Ql(a, b, d) })
        }

        function Ol(a, b) { return a.J.measurePromise(function() { return Sb(b, ".i-amphtml-scrollable") || a.j.getScrollingElement() }) }

        function Ql(a, b, c) { b == a.j.getScrollingElement() ? a.j.setScrollTop(c) : a.J.mutate(function() { b.scrollTop = c }) }

        function Rl(a, b) { return b == a.j.getScrollingElement() ? oa(function() { return a.getScrollTop() }) : a.J.measurePromise(function() { return b.scrollTop }) }
        g.getScrollingElement = function() { return this.ue ? this.ue : this.ue = this.j.getScrollingElement() };
        g.onChanged = function(a) { return this.bf.add(a) };
        g.onScroll = function(a) { return this.Qa.add(a) };
        g.onResize = function(a) { return this.Pa.add(a) };
        g.enterLightboxMode = function(a, b) {
            this.h.sendMessage("requestFullOverlay", {}, !0);
            this.enterOverlayMode();
            this.U && this.U.enterLightbox(a, b);
            a && this.maybeEnterFieLightboxMode(a);
            return this.j.updateLightboxMode(!0)
        };
        g.leaveLightboxMode = function(a) {
            this.h.sendMessage("cancelFullOverlay", {}, !0);
            this.U && this.U.leaveLightbox();
            this.leaveOverlayMode();
            a && this.maybeLeaveFieLightboxMode(a);
            return this.j.updateLightboxMode(!1)
        };
        g.isLightboxExperimentOn = function() { return Ge(this.ampdoc.win, "amp-lightbox-a4a-proto") };
        g.maybeEnterFieLightboxMode = function(a) {
            var b = Ul(this, a);
            b && (this.isLightboxExperimentOn(), b.enterFullOverlayMode())
        };
        g.maybeLeaveFieLightboxMode = function(a) {
            (a = Ul(this, a)) && a.leaveFullOverlayMode()
        };

        function Ul(a, b) { var c = Qc(b, a.ampdoc.win); return c && c.__AMP_EMBED__ }
        g.enterOverlayMode = function() {
            this.disableTouchZoom();
            this.disableScroll()
        };
        g.leaveOverlayMode = function() {
            this.resetScroll();
            this.restoreOriginalTouchZoom()
        };
        g.disableScroll = function() {
            var a = this,
                b = this.ampdoc.win,
                c = b.document.documentElement,
                d;
            this.J.measure(function() {
                var e = (b.getComputedStyle(c) || Me).marginRight;
                var f = a.ampdoc.win;
                f = f.innerWidth - f.document.documentElement.clientWidth;
                d = parseInt(e, 10) + f
            });
            this.J.mutate(function() {
                U(c, "margin-right", d, "px");
                a.j.disableScroll()
            })
        };
        g.resetScroll = function() {
            var a = this,
                b = this.ampdoc.win.document.documentElement;
            this.J.mutate(function() {
                U(b, "margin-right", "");
                a.j.resetScroll()
            })
        };
        g.resetTouchZoom = function() {
            var a = this,
                b = this.ampdoc.win.innerHeight,
                c = this.Hd.documentElement.clientHeight;
            b && c && b === c || this.disableTouchZoom() && this.S.delay(function() { a.restoreOriginalTouchZoom() }, 50)
        };
        g.disableTouchZoom = function() {
            var a = Vl(this);
            if (!a) return !1;
            var b = a.content,
                c = { "maximum-scale": "1", "user-scalable": "no" };
            var d = Object.create(null);
            if (b)
                for (var e = b.split(/,|;/), f = 0; f < e.length; f++) {
                    var h = e[f].split("="),
                        k = h[0].trim();
                    h = h[1];
                    h = (h || "").trim();
                    k && (d[k] = h)
                }
            e = !1;
            for (var l in c) d[l] !== c[l] && (e = !0, void 0 !== c[l] ? d[l] = c[l] : delete d[l]);
            if (e) {
                b = "";
                for (var m in d) 0 < b.length && (b += ","), b = d[m] ? b + (m + "=" + d[m]) : b + m;
                d = b
            } else d = b;
            return Wl(this, d)
        };
        g.restoreOriginalTouchZoom = function() { return void 0 !== this.ke ? Wl(this, this.ke) : !1 };
        g.updateFixedLayer = function() { return this.U ? this.U.update() : p() };
        g.addToFixedLayer = function(a, b) { return this.U ? this.U.addElement(a, b) : p() };
        g.removeFromFixedLayer = function(a) { this.U && this.U.removeElement(a) };
        g.createFixedLayer = function(a) {
            var b = this;
            this.U = new a(this.ampdoc, this.J, this.j.getBorderTop(), this.ea, this.j.requiresFixedLayerTransfer());
            this.ampdoc.whenReady().then(function() { return b.U.setup() })
        };

        function Wl(a, b) { return (a = Vl(a)) && a.content != b ? (H().fine("Viewport", "changed viewport meta to:", b), a.content = b, !0) : !1 }

        function Vl(a) {
            if (dc(a.ampdoc.win)) return null;
            void 0 === a.jc && (a.jc = a.Hd.querySelector("meta[name=viewport]"), a.jc && (a.ke = a.jc.content));
            return a.jc
        }
        g.Nh = function(a) { this.setScrollTop(a.scrollTop) };
        g.Mh = function(a) {
            var b = this,
                c = a.paddingTop,
                d = a.duration || 0,
                e = a.curve,
                f = a["transient"];
            if (void 0 != c && c != this.ea && (this.vc = this.ea, this.ea = c, this.U)) {
                var h = this.U.animateFixedElements(this.ea, this.vc, d, e, f);
                c < this.vc ? this.j.hideViewerHeader(f, this.vc) : h.then(function() { b.j.showViewerHeader(f, c) })
            }
        };
        g.zg = function(a) { a ? this.disableScroll() : this.resetScroll() };

        function Xl(a, b, c) {
            var d = a.getSize(),
                e = a.getScrollTop(),
                f = a.getScrollLeft();
            H().fine("Viewport", "changed event:", "relayoutAll=", b, "top=", e, "left=", f, "bottom=", e + d.height, "velocity=", c);
            a.bf.fire({ relayoutAll: b, top: e, left: f, width: d.width, height: d.height, velocity: c })
        }
        g.Bh = function() {
            var a = this;
            this.cc = null;
            this.Ah++;
            this.Pc = this.j.getScrollLeft();
            var b = this.j.getScrollTop();
            if (!(0 > b)) {
                this.Ca = b;
                if (!this.te) {
                    this.te = !0;
                    var c = Date.now();
                    this.S.delay(function() { a.J.measure(function() { a.Vc(c, b) }) }, 36)
                }
                this.Qa.fire()
            }
        };
        g.Vc = function(a, b) {
            var c = this,
                d = this.Ca = this.j.getScrollTop(),
                e = Date.now(),
                f = 0;
            e != a && (f = (d - b) / (e - a));
            H().fine("Viewport", "scroll: scrollTop=" + d + "; velocity=" + f);
            .03 > Math.abs(f) ? (Xl(this, !1, f), this.te = !1) : this.S.delay(function() { return c.J.measure(c.Vc.bind(c, e, d)) }, 20)
        };
        g.Ch = function() {
            var a = this;
            this.se || (this.se = !0, this.J.measure(function() {
                a.se = !1;
                a.h.sendMessage("scroll", A({ scrollTop: a.getScrollTop() }), !0)
            }))
        };
        g.Rf = function() {
            var a = this;
            this.cc = null;
            var b = this.$;
            this.$ = null;
            var c = this.getSize();
            this.updateFixedLayer().then(function() {
                var d = !b || b.width != c.width;
                Xl(a, d, 0);
                (d || b.height != c.height) && a.Pa.fire({ relayoutAll: d, width: c.width, height: c.height })
            })
        };

        function Tl(a, b) { var c = Math; return c.floor.call(c, Math.min(Math.max(.65 * Math.abs(a - b), 0), 500)) }

        function Yl(a) {
            var b = Q(a),
                c = a.win;
            c = a.isSingleDoc() && (P(c).isIos() && dc(c) && b.isEmbedded() && !b.hasCapability("iframeScroll") ? Zl : $l) == Zl ? new Kl(c) : new Ll(a);
            return new Nl(a, c, b)
        }
        var $l = "natural",
            Zl = "natural-ios-embed";

        function am(a) { var b = Ne(a, "visibilityState", !0); if (a[b]) return a[b]; var c = Ne(a, "hidden", !0); return a[c] ? a[c] ? "hidden" : "visible" : "visible" }

        function bm(a, b) {
            if (a.addEventListener) {
                var c = cm(a);
                c && a.addEventListener(c, b)
            }
        }

        function dm(a, b) {
            if (a.removeEventListener) {
                var c = cm(a);
                c && a.removeEventListener(c, b)
            }
        }

        function cm(a) { a = Ne(a, "hidden", !0); var b = a.indexOf("Hidden"); return -1 != b ? a.substring(0, b) + "Visibilitychange" : "visibilitychange" };

        function em(a) {
            this.win = a;
            this.Fa = cd(this.win);
            this.rh = fm(this);
            this.O = [];
            this.ge = [];
            this.Ra = [];
            this.fe = [];
            this.za = !1;
            this.ee = this.Ac = null;
            this.qd = this.zh.bind(this);
            this.Qg = new jj(this.win, this.qd, 16);
            this.Me = new jj(this.win, this.qd, 40);
            this.pd = this.oh.bind(this);
            if (this.Fa.isSingleDoc()) this.Fa.getSingleDoc().onVisibilityChanged(this.pd);
            else bm(this.win.document, this.pd)
        }
        g = em.prototype;
        g.dispose = function() { dm(this.win.document, this.pd) };
        g.oh = function() { this.za && gm(this) };
        g.run = function(a, b) {
            this.O.push(a);
            this.Ra.push(b || void 0);
            this.Ba()
        };
        g.runPromise = function(a, b) {
            this.run(a, b);
            if (this.Ac) return this.Ac;
            a = new v;
            this.ee = a.resolve;
            return this.Ac = a.promise
        };
        g.createTask = function(a) { var b = this; return function(c) { b.run(a, c) } };
        g.mutate = function(a) { this.run({ measure: void 0, mutate: a }) };
        g.mutatePromise = function(a) { return this.runPromise({ measure: void 0, mutate: a }) };
        g.measure = function(a) { this.run({ measure: a, mutate: void 0 }) };
        g.measurePromise = function(a) { var b = this; return new Promise(function(c) { b.measure(function() { c(a()) }) }) };
        g.canAnimate = function(a) { return hm(this, a) };

        function hm(a, b) { return "visible" != am(a.win.document) ? !1 : a.Fa.isSingleDoc() ? a.Fa.getSingleDoc().isVisible() : b ? (a = a.Fa.getAmpDocIfAvailable(b), !a || a.isVisible()) : !0 }
        g.runAnim = function(a, b, c) {
            if (!hm(this, a)) return H().warn("VSYNC", "Did not schedule a vsync request, because document was invisible"), !1;
            this.run(b, c);
            return !0
        };
        g.createAnimTask = function(a, b) { var c = this; return function(d) { return c.runAnim(a, b, d) } };
        g.runAnimMutateSeries = function(a, b, c) {
            var d = this;
            return hm(this, a) ? new Promise(function(e, f) {
                var h = Date.now(),
                    k = 0,
                    l = d.createAnimTask(a, {
                        mutate: function(m) {
                            var n = Date.now() - h;
                            b(n, n - k, m) ? c && n > c ? f(Error("timeout")) : (k = n, l(m)) : e()
                        }
                    });
                l({})
            }) : Promise.reject(Lf())
        };
        g.Ba = function() { this.za || (this.za = !0, gm(this)) };

        function gm(a) { hm(a) ? (a.rh(a.qd), a.Me.schedule()) : a.Qg.schedule() }
        g.zh = function() {
            this.Me.cancel();
            this.za = !1;
            var a = this.O,
                b = this.Ra,
                c = this.ee;
            this.Ac = this.ee = null;
            this.O = this.ge;
            this.Ra = this.fe;
            for (var d = 0; d < a.length; d++) a[d].measure && !im(a[d].measure, b[d]) && (a[d].mutate = void 0);
            for (d = 0; d < a.length; d++) a[d].mutate && im(a[d].mutate, b[d]);
            this.ge = a;
            this.fe = b;
            this.ge.length = 0;
            this.fe.length = 0;
            c && c()
        };

        function fm(a) {
            var b = a.win.requestAnimationFrame || a.win.webkitRequestAnimationFrame;
            if (b) return b.bind(a.win);
            var c = 0;
            return function(d) {
                var e = Date.now(),
                    f = Math.max(0, 16 - (e - c));
                c = e + f;
                a.win.setTimeout(d, f)
            }
        }

        function im(a, b) { try { void 0 !== a(b) && H().error("VSYNC", "callback returned a value but vsync cannot propogate it: %s", a.toString()) } catch (c) { return cb(c), !1 } return !0 };

        function jm(a) {
            K(a, "crypto", oh);
            K(a, "batched-xhr", Gg);
            K(a, "platform", Hj);
            K(a, "timer", Ek);
            K(a, "timer", Ek);
            K(a, "vsync", em);
            K(a, "xhr", Eg);
            K(a, "input", kj);
            K(a, "preconnect", Rj)
        }

        function km(a) {
            a.getParent();
            M(a, "url", Fk, !0);
            M(a, "templates", Bk);
            M(a, "documentInfo", rh);
            M(a, "cid", Vg);
            M(a, "viewer", ml, !0);
            M(a, "viewport", Yl, !0);
            M(a, "hidden-observer", Vh);
            M(a, "history", li);
            M(a, "resources", ak);
            M(a, "owners", Aj);
            M(a, "mutator", uj);
            kl(a);
            M(a, "action", Yf, !0);
            M(a, "standard-actions", nk, !0);
            zk(a);
            M(a, "navigation", Hh, !0);
            Sh(a);
            M(a, "loadingIndicator", rj)
        };
        var lm = ["amp-ad", "amp-embed", "amp-video"];

        function mm(a) {
            this.win = a;
            this.Fa = cd(a);
            this.Jb = {};
            this.yd = this.oc = this.jb = null
        }
        g = mm.prototype;
        g.registerExtension = function(a, b, c, d, e) {
            var f = c ? this.Jb[a + ":latest"] : null,
                h, k = nm(this, a, b, null != (h = null == f ? void 0 : f.auto) ? h : !0);
            k.latest = c;
            if (!k.loaded) {
                c && (this.Jb[a + ":latest"] = k);
                try {
                    this.jb = a;
                    this.oc = b;
                    this.yd = c;
                    d(e, e._);
                    k.loaded = !0;
                    var l;
                    null == (l = k.resolve) || l.call(k, k.extension);
                    var m;
                    null == f || null == (m = f.resolve) || m.call(f, k.extension)
                } catch (t) {
                    k.error = t;
                    var n;
                    null == (n = k.reject) || n.call(k, t);
                    var q;
                    null == f || null == (q = f.reject) || q.call(f, t);
                    throw t;
                } finally { this.yd = this.oc = this.jb = null }
            }
        };
        g.waitForExtension = function(a, b) {
            var c = om(nm(this, a, b));
            return O(this.win).timeoutPromise(16E3, c).catch(function(d) {
                if (!d.message.includes("timeout")) throw d;
                D().error("extensions", "Waited over 16s to load extension " + a + ".");
                return c
            })
        };
        g.preloadExtension = function(a, b) {
            var c = void 0 === b ? "0.1" : b;
            "amp-embed" == a && (a = "amp-ad");
            b = nm(this, a, c);
            if (b.loaded || b.error) var d = !1;
            else void 0 === b.scriptPresent && (d = Yc(this.win, a, c, b.latest), b.scriptPresent = 0 < d.length), d = !b.scriptPresent;
            d && (a = Xc(this.win, a, c), this.win.document.head.appendChild(a), b.scriptPresent = !0);
            return om(b)
        };
        g.installExtensionForDoc = function(a, b, c) {
            var d = this,
                e = void 0 === c ? "0.1" : c;
            c = a.getRootNode();
            var f = c.__AMP_EXT_LDR;
            f || (f = c.__AMP_EXT_LDR = y());
            if (f[b]) return f[b];
            a.declareExtension(b, e);
            ej(a.win, b);
            return f[b] = this.preloadExtension(b, e).then(function() { return d.installExtensionInDoc(a, b, e) })
        };
        g.reloadExtension = function(a, b, c) {
            var d = Yc(this.win, a, b, c, !1);
            if (c = this.Jb[a + ":" + b]) c.scriptPresent = !1;
            d.forEach(function(e) { return e.setAttribute("i-amphtml-loaded-new-version", a) });
            return this.preloadExtension(a, b)
        };
        g.importUnwrapped = function(a, b, c, d) {
            var e = void 0 === c ? "0.1" : c,
                f = Yc(a, b, e, void 0 === d ? !0 : d),
                h = 0 < f.length ? f[0] : null;
            h ? b = h.__AMP_SCR_LOADED : (h = Xc(this.win, b, e), b = h.__AMP_SCR_LOADED = new Promise(function(k, l) {
                h.onload = k;
                h.onerror = l
            }), a.document.head.appendChild(h));
            return b
        };
        g.loadElementClass = function(a, b) { return this.preloadExtension(a, void 0 === b ? "0.1" : b).then(function(c) { return c.elements[a].implementationClass }) };
        g.addElement = function(a, b, c) {
            pm(this, a).extension.elements[a] = { implementationClass: b, css: c };
            this.addDocFactory(function(d) { qm(d, a, b, c) })
        };
        g.addTemplate = function(a, b) {
            this.addDocFactory(function(c) {
                c = Jc(c, "templates");
                if (c.hc[a]) {
                    var d = c.xe[a];
                    J(d, "Duplicate template type: %s", a);
                    delete c.xe[a];
                    d(b)
                } else c.hc[a] = Promise.resolve(b)
            })
        };

        function qm(a, b, c, d) { d ? sf(a, d, function() { rm(a.win, b, c) }, !1, b) : rm(a.win, b, c) }

        function rm(a, b, c) {
            $i(a, b, c);
            K(a, b, sm)
        }
        g.addService = function(a, b) {
            pm(this, a).extension.services.push({ serviceName: a, serviceClass: b });
            this.addDocFactory(function(c) { M(c, a, b, !0) })
        };
        g.addDocFactory = function(a, b) {
            var c = pm(this, b);
            c.docFactories.push(a);
            if (this.jb && this.Fa.isSingleDoc()) {
                var d = this.Fa.getAmpDoc(this.win.document),
                    e = this.jb,
                    f = this.yd || !1;
                (d.declaresExtension(e, this.oc) || f && d.declaresExtension(e, "latest") || c.auto) && a(d)
            }
        };
        g.preinstallEmbed = function(a, b) {
            var c = a.win;
            tm(this.win, c);
            um(c);
            b.forEach(function(d) {
                var e = d.extensionId;
                a.declareExtension(e, d.extensionVersion);
                lm.includes(e) || ej(c, e)
            })
        };
        g.installExtensionsInDoc = function(a, b) { var c = this; return Promise.all(b.map(function(d) { return c.installExtensionInDoc(a, d.extensionId, d.extensionVersion) })) };
        g.installExtensionInDoc = function(a, b, c) {
            var d = this,
                e = void 0 === c ? "0.1" : c;
            a.declareExtension(b, e);
            return om(nm(this, b, e)).then(function() { nm(d, b, e).docFactories.forEach(function(f) { try { f(a) } catch (h) { cb("Doc factory failed: ", h, b) } }) })
        };

        function nm(a, b, c, d) {
            b = b + ":" + c;
            var e = a.Jb[b];
            e || (e = { version: c, latest: "latest" == c, extension: { elements: {}, services: [] }, auto: d || !1, docFactories: [], promise: void 0, resolve: void 0, reject: void 0, loaded: void 0, error: void 0, scriptPresent: void 0 }, a.Jb[b] = e);
            return e
        }

        function pm(a, b) { a.jb || H().error("extensions", "unknown extension for ", b); return nm(a, a.jb || "_UNKNOWN_", a.oc || "") }

        function om(a) {
            if (!a.promise)
                if (a.loaded) a.promise = Promise.resolve(a.extension);
                else if (a.error) a.promise = Promise.reject(a.error);
            else {
                var b = new v;
                a.promise = b.promise;
                a.resolve = b.resolve;
                a.reject = b.reject
            }
            return a.promise
        }

        function um(a) { lm.forEach(function(b) { ej(a, b) }) }

        function tm(a, b) {
            var c = Zi(a)["amp-img"];
            cj(b, "amp-img", c || Y);
            a = Zi(a)["amp-pixel"];
            cj(b, "amp-pixel", a || Y)
        }

        function sm() { return {} };
        (function() {
            Bb = ub;
            H();
            D()
        })();
        (function(a) { self.__AMP_REPORT_ERROR = a })(function(a, b, c) {
            Jf(b, c);
            b && a && qb(b.message) && !(0 <= b.message.indexOf("\u200b\u200b\u200b\u200b")) && cd(a).isSingleDoc() && (b = A({ errorName: b.name, errorMessage: b.message }), a = cd(a).getSingleDoc().getRootNode(), Ef(a.documentElement || a.body || a, b))
        }.bind(null, self));

        function vm(a) {
            function b(k) { wm(c, k, function() { f.then(function() { "function" == typeof k ? k(c.AMP, c.AMP._) : e.registerExtension(k.n, k.ev, k.l, k.f, c.AMP) }) }) }
            var c = self;
            if (c.__AMP_TAG) p();
            else {
                c.__AMP_TAG = !0;
                var d = c.AMP || [];
                K(c, "extensions", mm);
                var e = ed(c);
                jm(c);
                um(c);
                c.AMP = { win: c, _: c.AMP ? c.AMP._ : void 0 };
                c.AMP.config = ob;
                c.AMP.BaseElement = V;
                c.AMP.registerElement = e.addElement.bind(e);
                c.AMP.registerTemplate = e.addTemplate.bind(e);
                c.AMP.registerServiceForDoc = e.addService.bind(e);
                c.AMP.isExperimentOn = Ge.bind(null,
                    c);
                c.AMP.toggleExperiment = Ie.bind(null, c);
                c.AMP.setLogLevel = sb.bind(null);
                c.AMP.setTickFunction = function() {};
                var f = a(c, e);
                for (a = 0; a < d.length; a++) {
                    var h = d[a];
                    if (xm(c, h)) d.splice(a--, 1);
                    else if ("function" == typeof h || "high" == h.p) {
                        try { b(h) } catch (k) { H().error("runtime", "Extension failed: ", k, h.n) }
                        d.splice(a--, 1)
                    }
                }
                ym(c, function() {
                    c.AMP.push = function(m) { xm(c, m) || b(m) };
                    for (var k = 0; k < d.length; k++) { var l = d[k]; if (!xm(c, l)) try { b(l) } catch (m) { H().error("runtime", "Extension failed: ", m, l.n) } }
                    d.length = 0
                });
                c.AMP.push ||
                    (c.AMP.push = d.push.bind(d));
                P(c).isIos() && U(c.document.documentElement, "cursor", "pointer");
                pd(c);
                c.ResizeObserver && !c.ResizeObserver._stub || ed(c).preloadExtension("amp-resize-observer-polyfill")
            }
        }

        function wm(a, b, c) { "function" == typeof b || "high" == b.p ? p().then(c) : (c.displayName = b.n, Hi(a.document, c)) }

        function zm() {
            vm(function(a) {
                Am(a);
                Bm(a);
                return Mb(a.document).then(function() { dj(a.AMP.ampdoc) })
            })
        }

        function Am(a) {
            var b = a.document.documentElement,
                c = cd(a).getSingleDoc();
            a.AMP.ampdoc = c;
            c = Q(b);
            a.AMP.viewer = c;
            C().development && (a.AMP.toggleRuntime = c.toggleRuntime.bind(c), a.AMP.resources = hd(b));
            b = jd(b);
            a.AMP.viewport = {};
            a.AMP.viewport.getScrollLeft = b.getScrollLeft.bind(b);
            a.AMP.viewport.getScrollWidth = b.getScrollWidth.bind(b);
            a.AMP.viewport.getWidth = b.getWidth.bind(b)
        }

        function Bm(a) {
            a.AMP.installAmpdocServices = km.bind(null);
            a.AMP.combinedCss = "html{overflow-x:hidden!important}html.i-amphtml-fie{height:100%!important;width:100%!important}html:not([amp4ads]),html:not([amp4ads]) body{height:auto!important}html:not([amp4ads]) body{margin:0!important}body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}html.i-amphtml-singledoc.i-amphtml-embedded{-ms-touch-action:pan-y pinch-zoom;touch-action:pan-y pinch-zoom}html.i-amphtml-fie>body,html.i-amphtml-singledoc>body{overflow:visible!important}html.i-amphtml-fie:not(.i-amphtml-inabox)>body,html.i-amphtml-singledoc:not(.i-amphtml-inabox)>body{position:relative!important}html.i-amphtml-ios-embed-legacy>body{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important}html.i-amphtml-ios-embed{overflow-y:auto!important;position:static}#i-amphtml-wrapper{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;margin:0!important;display:block!important}html.i-amphtml-ios-embed.i-amphtml-ios-overscroll,html.i-amphtml-ios-embed.i-amphtml-ios-overscroll>#i-amphtml-wrapper{-webkit-overflow-scrolling:touch!important}#i-amphtml-wrapper>body{position:relative!important;border-top:1px solid transparent!important}#i-amphtml-wrapper+body{visibility:visible}#i-amphtml-wrapper+body .i-amphtml-lightbox-element,#i-amphtml-wrapper+body[i-amphtml-lightbox]{visibility:hidden}#i-amphtml-wrapper+body[i-amphtml-lightbox] .i-amphtml-lightbox-element{visibility:visible}#i-amphtml-wrapper.i-amphtml-scroll-disabled,.i-amphtml-scroll-disabled{overflow-x:hidden!important;overflow-y:hidden!important}amp-instagram{padding:54px 0px 0px!important;background-color:#fff}amp-iframe iframe{box-sizing:border-box!important}[amp-access][amp-access-hide]{display:none}[subscriptions-dialog],body:not(.i-amphtml-subs-ready) [subscriptions-action],body:not(.i-amphtml-subs-ready) [subscriptions-section]{display:none!important}amp-experiment,amp-live-list>[update]{display:none}amp-list[resizable-children]>.i-amphtml-loading-container.amp-hidden{display:none!important}amp-list [fetch-error],amp-list[load-more] [load-more-button],amp-list[load-more] [load-more-end],amp-list[load-more] [load-more-failed],amp-list[load-more] [load-more-loading]{display:none}amp-list[diffable] div[role=list]{display:block}amp-story-page,amp-story[standalone]{min-height:1px!important;display:block!important;height:100%!important;margin:0!important;padding:0!important;overflow:hidden!important;width:100%!important}amp-story[standalone]{background-color:#202125!important;position:relative!important}amp-story-page{background-color:#757575}amp-story .amp-active>div,amp-story .i-amphtml-loader-background{display:none!important}amp-story-page:not(:first-of-type):not([distance]):not([active]){transform:translateY(1000vh)!important}amp-autocomplete{position:relative!important;display:inline-block!important}amp-autocomplete>input,amp-autocomplete>textarea{padding:0.5rem;border:1px solid rgba(0,0,0,0.33)}.i-amphtml-autocomplete-results,amp-autocomplete>input,amp-autocomplete>textarea{font-size:1rem;line-height:1.5rem}[amp-fx^=fly-in]{visibility:hidden}amp-script[nodom]{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}\n/*# sourceURL=/css/ampdoc.css*/[hidden]{display:none!important}.i-amphtml-element{display:inline-block}.i-amphtml-blurry-placeholder{transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;pointer-events:none}[layout=nodisplay]:not(.i-amphtml-element){display:none!important}.i-amphtml-layout-fixed,[layout=fixed][width][height]:not(.i-amphtml-layout-fixed){display:inline-block;position:relative}.i-amphtml-layout-responsive,[layout=responsive][width][height]:not(.i-amphtml-layout-responsive),[width][height][heights]:not([layout]):not(.i-amphtml-layout-responsive),[width][height][sizes]:not([layout]):not(.i-amphtml-layout-responsive){display:block;position:relative}.i-amphtml-layout-intrinsic,[layout=intrinsic][width][height]:not(.i-amphtml-layout-intrinsic){display:inline-block;position:relative;max-width:100%}.i-amphtml-layout-intrinsic .i-amphtml-sizer{max-width:100%}.i-amphtml-intrinsic-sizer{max-width:100%;display:block!important}.i-amphtml-layout-container,.i-amphtml-layout-fixed-height,[layout=container],[layout=fixed-height][height]:not(.i-amphtml-layout-fixed-height){display:block;position:relative}.i-amphtml-layout-fill,.i-amphtml-layout-fill.i-amphtml-notbuilt,[layout=fill]:not(.i-amphtml-layout-fill),body noscript>*{display:block;overflow:hidden!important;position:absolute;top:0;left:0;bottom:0;right:0}body noscript>*{position:absolute!important;width:100%;height:100%;z-index:2}body noscript{display:inline!important}.i-amphtml-layout-flex-item,[layout=flex-item]:not(.i-amphtml-layout-flex-item){display:block;position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.i-amphtml-layout-fluid{position:relative}.i-amphtml-layout-size-defined{overflow:hidden!important}.i-amphtml-layout-awaiting-size{position:absolute!important;top:auto!important;bottom:auto!important}i-amphtml-sizer{display:block!important}@supports (aspect-ratio:1/1){i-amphtml-sizer.i-amphtml-disable-ar{display:none!important}}.i-amphtml-blurry-placeholder,.i-amphtml-fill-content{display:block;height:0;max-height:100%;max-width:100%;min-height:100%;min-width:100%;width:0;margin:auto}.i-amphtml-layout-size-defined .i-amphtml-fill-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-replaced-content,.i-amphtml-screen-reader{padding:0!important;border:none!important}.i-amphtml-screen-reader{position:fixed!important;top:0px!important;left:0px!important;width:4px!important;height:4px!important;opacity:0!important;overflow:hidden!important;margin:0!important;display:block!important;visibility:visible!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:8px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:12px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:16px!important}.i-amphtml-unresolved{position:relative;overflow:hidden!important}.i-amphtml-select-disabled{-webkit-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.i-amphtml-notbuilt,[layout]:not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not([layout]):not(.i-amphtml-element){position:relative;overflow:hidden!important;color:transparent!important}.i-amphtml-notbuilt:not(.i-amphtml-layout-container)>*,[layout]:not([layout=container]):not(.i-amphtml-element)>*,[width][height][heights]:not([layout]):not(.i-amphtml-element)>*,[width][height][sizes]:not([layout]):not(.i-amphtml-element)>*{display:none}amp-img:not(.i-amphtml-element)[i-amphtml-ssr]>img.i-amphtml-fill-content{display:block}.i-amphtml-notbuilt:not(.i-amphtml-layout-container),[layout]:not([layout=container]):not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not([layout]):not(.i-amphtml-element){color:transparent!important;line-height:0!important}.i-amphtml-ghost{visibility:hidden!important}.i-amphtml-element>[placeholder],[layout]:not(.i-amphtml-element)>[placeholder],[width][height][heights]:not([layout]):not(.i-amphtml-element)>[placeholder],[width][height][sizes]:not([layout]):not(.i-amphtml-element)>[placeholder]{display:block;line-height:normal}.i-amphtml-element>[placeholder].amp-hidden,.i-amphtml-element>[placeholder].hidden{visibility:hidden}.i-amphtml-element:not(.amp-notsupported)>[fallback],.i-amphtml-layout-container>[placeholder].amp-hidden,.i-amphtml-layout-container>[placeholder].hidden{display:none}.i-amphtml-layout-size-defined>[fallback],.i-amphtml-layout-size-defined>[placeholder]{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:1}amp-img.i-amphtml-ssr:not(.i-amphtml-element)>[placeholder]{z-index:auto}.i-amphtml-notbuilt>[placeholder]{display:block!important}.i-amphtml-hidden-by-media-query{display:none!important}.i-amphtml-element-error{background:red!important;color:#fff!important;position:relative!important}.i-amphtml-element-error:before{content:attr(error-message)}i-amp-scroll-container,i-amphtml-scroll-container{position:absolute;top:0;left:0;right:0;bottom:0;display:block}i-amp-scroll-container.amp-active,i-amphtml-scroll-container.amp-active{overflow:auto;-webkit-overflow-scrolling:touch}.i-amphtml-loading-container{display:block!important;pointer-events:none;z-index:1}.i-amphtml-notbuilt>.i-amphtml-loading-container{display:block!important}.i-amphtml-loading-container.amp-hidden{visibility:hidden}.i-amphtml-element>[overflow]{cursor:pointer;position:relative;z-index:2;visibility:hidden;display:initial;line-height:normal}.i-amphtml-layout-size-defined>[overflow]{position:absolute}.i-amphtml-element>[overflow].amp-visible{visibility:visible}template{display:none!important}.amp-border-box,.amp-border-box *,.amp-border-box :after,.amp-border-box :before{box-sizing:border-box}amp-pixel{display:none!important}amp-analytics,amp-auto-ads,amp-story-auto-ads{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}html.i-amphtml-fie>amp-analytics{position:initial!important}[visible-when-invalid]:not(.visible),form [submit-error],form [submit-success],form [submitting]{display:none}amp-accordion{display:block!important}@media (min-width:1px){:where(amp-accordion>section)>:first-child{margin:0;background-color:#efefef;padding-right:20px;border:1px solid #dfdfdf}:where(amp-accordion>section)>:last-child{margin:0}}amp-accordion>section{float:none!important}amp-accordion>section>*{float:none!important;display:block!important;overflow:hidden!important;position:relative!important}amp-accordion,amp-accordion>section{margin:0}amp-accordion:not(.i-amphtml-built)>section>:last-child{display:none!important}amp-accordion:not(.i-amphtml-built)>section[expanded]>:last-child{display:block!important}\n/*# sourceURL=/css/ampshared.css*/"
        }

        function xm(a, b) {
            if ("function" == typeof b) return !1;
            if (b.m) return !0;
            if ("2104302228000" == b.v) return !1;
            ed(a).reloadExtension(b.n, b.ev, b.l);
            return !0
        }

        function ym(a, b) { a.document.body ? 0 < rf(a).length ? b() : O(a).delay(b, 1) : b() };

        function Cm() {
            var a = self;
            Lj(a.document, function() { return Dm(a) })
        }

        function Dm(a) {
            var b = 1500,
                c = a.performance;
            c && c.timing && c.timing.navigationStart && (b = Date.now() - c.timing.navigationStart);
            var d = Math.max(1, 2100 - b);
            a.setTimeout(function() {
                Em(a);
                var e = a.document.styleSheets;
                if (e) {
                    for (var f = a.document.querySelectorAll('link[rel~="stylesheet"]:not([href^="' + String(mb.cdn).replace(Db, Eb) + '"])'), h = [], k = 0; k < f.length; k++) {
                        for (var l = f[k], m = !1, n = 0; n < e.length; n++)
                            if (e[n].ownerNode == l) { m = !0; break }
                        m || h.push(l)
                    }
                    k = {};
                    for (l = 0; l < h.length; k = { sa: k.sa, ed: k.ed }, l++) k.sa = h[l], k.ed = k.sa.media ||
                        "all", k.sa.media = "print", k.sa.onload = function(q) {
                            return function() {
                                q.sa.media = q.ed;
                                Em(a)
                            }
                        }(k), k.sa.setAttribute("i-amphtml-timeout", d), k.sa.parentNode.insertBefore(k.sa, k.sa.nextSibling)
                }
            }, d)
        }

        function Em(a) {
            a = a.document;
            if (a.fonts && a.fonts.values)
                for (var b = a.fonts.values(); a = b.next();) { var c = a.value; if (!c) break; "loading" == c.status && "display" in c && "auto" == c.display && (c.display = "swap") }
        };

        function Fm(a) {
            return a.waitForBodyOpen().then(function() {
                var b = a.getBody(),
                    c = Kb(b, function() { return !!b.firstElementChild });
                return O(a.win).timeoutPromise(2E3, c).then(function() { return "AMP-STORY" === b.firstElementChild.tagName }, function() { return !1 })
            })
        };

        function Gm(a) {
            var b = a.win;
            Bf(["\u26a1", "amp"], b.document) && a.isSingleDoc() && Ii(a, function() { Fm(a).then(function(c) { c || ed(b).installExtensionForDoc(a, "amp-auto-lightbox") }) })
        };

        function Hm(a) {
            this.win = a;
            this.Rc = null;
            var b = y();
            a.name && 0 == a.name.indexOf("__AMP__") && Object.assign(b, B(a.name.substring(7)));
            a.location && a.location.hash && Object.assign(b, B(a.location.hash));
            this.Rc = new Im(a, { params: b });
            a.document.__AMPDOC = this.Rc
        }
        g = Hm.prototype;
        g.isSingleDoc = function() { return !!this.Rc };
        g.getSingleDoc = function() { return this.Rc };
        g.getAmpDocIfAvailable = function(a) {
            for (var b = a; b;) {
                var c = a.everAttached && "function" === typeof a.getAmpDoc ? a.getAmpDoc() : null;
                if (c) return c;
                b = Qb(b);
                if (!b) break;
                var d = b.__AMPDOC;
                if (d) return d;
                b = b.host ? b.host : Qc(b, this.win)
            }
            return null
        };
        g.getAmpDoc = function(a) { var b = this.getAmpDocIfAvailable(a); if (!b) throw H().createError("No ampdoc found for", a); return b };
        g.installShadowDoc = function(a, b, c) { a = new Jm(this.win, a, b, c); return b.__AMPDOC = a };
        g.installFieDoc = function(a, b, c) {
            var d = b.document;
            a = new Km(b, a, this.getAmpDoc(b.frameElement), c);
            return d.__AMPDOC = a
        };

        function Lm(a, b, c) {
            var d = this;
            this.win = a;
            this.Pf = y();
            this.Fc = b;
            this.C = c && c.signals || new ti;
            this.me = c && c.params || y();
            this.wa = null;
            this.Ad = {};
            this.Fe = c && c.visibilityState || this.me.visibilityState && H().assertEnumValue(of, this.me.visibilityState, "VisibilityState") || null;
            this.bd = null;
            this.kg = new W;
            this.Ff = null;
            this.Ae = [];
            var e = this.Be.bind(this);
            this.Fc && this.Ae.push(this.Fc.onVisibilityChanged(e));
            bm(this.win.document, e);
            this.Ae.push(function() { return dm(d.win.document, e) });
            this.Be()
        }
        g = Lm.prototype;
        g.dispose = function() {
            Tc(this);
            this.Ae.forEach(function(a) { return a() })
        };
        g.isSingleDoc = function() { return null };
        g.getParent = function() { return this.Fc };
        g.getWin = function() { return this.win };
        g.signals = function() { return this.C };
        g.getParam = function(a) { a = this.me[a]; return null == a ? null : a };
        g.getMeta = function() {
            var a = this;
            if (this.wa) return y(this.wa);
            this.wa = y();
            var b = this.win.document.head.querySelectorAll("meta[name]");
            ac(b, function(c) {
                var d = c.getAttribute("name");
                c = c.getAttribute("content");
                d && null !== c && void 0 === a.wa[d] && (a.wa[d] = c)
            });
            return y(this.wa)
        };
        g.getMetaByName = function(a) {
            if (!a) return null;
            a = this.getMeta()[a];
            return void 0 !== a ? a : null
        };
        g.setMetaByName = function() {};
        g.declaresExtension = function(a, b) { var c = this.Ad[a]; return c ? !b || c === b : !1 };
        g.declareExtension = function(a, b) { this.Ad[a] = b };
        g.getExtensionVersion = function(a) { return this.Ad[a] || null };
        g.setExtensionsKnown = function() { this.C.signal("-ampdoc-ext-known") };
        g.whenExtensionsKnown = function() { return this.C.whenSignal("-ampdoc-ext-known") };
        g.getRootNode = function() { return null };
        g.getHeadNode = function() {};
        g.isBodyAvailable = function() { return !1 };
        g.getBody = function() { return null };
        g.waitForBodyOpen = function() { return null };
        g.isReady = function() { return null };
        g.whenReady = function() { return null };
        g.getUrl = function() { return null };
        g.getElementById = function(a) { return this.getRootNode().getElementById(a) };
        g.contains = function(a) { return this.getRootNode().contains(a) };
        g.overrideVisibilityState = function(a) { this.Fe != a && (this.Fe = a, this.Be()) };
        g.Be = function() {
            for (var a = am(this.win.document), b = "visible", c = this.Fc; c; c = c.getParent())
                if ("visible" != c.getVisibilityState()) { b = c.getVisibilityState(); break }
            var d = this.Fe || "visible";
            c = "visible" == d && "visible" == b && "visible" == a ? "visible" : "hidden" == a && "paused" == d ? a : "paused" == d || "inactive" == d ? d : "paused" == b || "inactive" == b ? b : "prerender" == d || "prerender" == a || "prerender" == b ? "prerender" : "hidden";
            this.bd != c && (this.bd = c, "visible" == c ? (this.Ff = Date.now(), this.C.signal("-ampdoc-first-visible"), this.C.signal("-ampdoc-next-visible")) :
                this.C.reset("-ampdoc-next-visible"), this.kg.fire())
        };
        g.whenFirstVisible = function() { return this.C.whenSignal("-ampdoc-first-visible").then(function() {}) };
        g.whenNextVisible = function() { return this.C.whenSignal("-ampdoc-next-visible").then(function() {}) };
        g.getFirstVisibleTime = function() { return this.C.get("-ampdoc-first-visible") };
        g.getLastVisibleTime = function() { return this.Ff };
        g.getVisibilityState = function() { return this.bd };
        g.isVisible = function() { return "visible" == this.bd };
        g.hasBeenVisible = function() { return null != this.getLastVisibleTime() };
        g.onVisibilityChanged = function(a) { return this.kg.add(a) };
        g.registerSingleton = function(a) { return this.Pf[a] ? !1 : this.Pf[a] = !0 };

        function Im(a, b) {
            Lm.call(this, a, null, b);
            var c = this;
            this.Cb = this.win.document.body ? Promise.resolve(this.win.document.body) : Mb(this.win.document).then(function() { return c.getBody() });
            this.$b = Nj(this.win.document)
        }
        ja(Im, Lm);
        g = Im.prototype;
        g.isSingleDoc = function() { return !0 };
        g.getRootNode = function() { return this.win.document };
        g.getUrl = function() { return this.win.location.href };
        g.getHeadNode = function() { return this.win.document.head };
        g.isBodyAvailable = function() { return !!this.win.document.body };
        g.getBody = function() { return this.win.document.body };
        g.waitForBodyOpen = function() { return this.Cb };
        g.isReady = function() { return Jj(this.win.document) };
        g.whenReady = function() { return this.$b };

        function Jm(a, b, c, d) {
            Lm.call(this, a, null, d);
            this.ic = b;
            this.Xf = c;
            this.md = null;
            var e = new v;
            this.Cb = e.promise;
            this.Oe = e.resolve;
            this.bc = !1;
            var f = new v;
            this.$b = f.promise;
            this.ac = f.resolve
        }
        ja(Jm, Lm);
        g = Jm.prototype;
        g.isSingleDoc = function() { return !1 };
        g.getRootNode = function() { return this.Xf };
        g.getUrl = function() { return this.ic };
        g.getHeadNode = function() { return this.Xf };
        g.isBodyAvailable = function() { return !!this.md };
        g.getBody = function() { return this.md };
        g.setBody = function(a) {
            this.md = a;
            this.Oe(a);
            this.Oe = void 0
        };
        g.waitForBodyOpen = function() { return this.Cb };
        g.isReady = function() { return this.bc };
        g.setReady = function() {
            this.bc = !0;
            this.ac();
            this.ac = void 0
        };
        g.whenReady = function() { return this.$b };
        g.getMeta = function() { return y(this.wa) };
        g.setMetaByName = function(a, b) {
            this.wa || (this.wa = y());
            this.wa[a] = b
        };

        function Km(a, b, c, d) {
            Lm.call(this, a, c, d);
            var e = this;
            this.ic = b;
            this.Cb = this.win.document.body ? Promise.resolve(this.win.document.body) : Mb(this.win.document).then(function() { return e.getBody() });
            this.bc = !1;
            a = new v;
            this.$b = a.promise;
            this.ac = a.resolve
        }
        ja(Km, Lm);
        g = Km.prototype;
        g.isSingleDoc = function() { return !1 };
        g.getRootNode = function() { return this.win.document };
        g.getUrl = function() { return this.ic };
        g.getHeadNode = function() { return this.win.document.head };
        g.isBodyAvailable = function() { return !!this.win.document.body };
        g.getBody = function() { return this.win.document.body };
        g.waitForBodyOpen = function() { return this.Cb };
        g.isReady = function() { return this.bc };
        g.whenReady = function() { return this.$b };
        g.setReady = function() {
            this.bc = !0;
            this.ac();
            this.ac = void 0
        };

        function Mm() {
            var a = self;
            K(a, "ampdoc", function() { return new Hm(a) })
        };
        var Nm = ["AMP-AD", "AMP-ANALYTICS", "AMP-PIXEL", "AMP-AD-EXIT"];

        function Om(a) {
            var b = Gc(a);
            return b.signals().whenSignal("ready-scan").then(function() {
                var c = hd(b).get().filter(function(d) { return d.prerenderAllowed() ? !Nm.includes(d.element.tagName) : !1 }).map(function(d) { return d.element });
                return 0 === c.length ? Promise.resolve([]) : (new Promise(function(d) {
                    var e = b.win,
                        f = new e.IntersectionObserver(function(h) {
                            f.disconnect();
                            for (var k = [], l = 0; l < h.length; l++) {
                                var m = h[l],
                                    n = m.target;
                                m.isIntersecting && k.push(n)
                            }
                            d(k)
                        }, { root: dc(e) ? e.document : null, threshold: .01 });
                    for (e = 0; e < Math.min(c.length,
                            100); e++) f.observe(c[e])
                })).then(function(d) { return Promise.all(d.map(function(e) { return e.whenLoaded() })) })
            })
        };

        function Pm(a) {
            var b = this;
            this.win = a;
            this.Ib = [];
            this.ye = a.performance.timeOrigin || a.performance.timing.navigationStart;
            this.lf = this.o = this.h = this.B = null;
            this.Rb = this.Yd = !1;
            this.mf = y();
            this.nc = void 0;
            this.Ma = new ti;
            this.Qc = 0;
            this.Ub = [];
            var c = this.win.PerformanceObserver && this.win.PerformanceObserver.supportedEntryTypes || [];
            c.includes("paint") || this.Ma.rejectSignal("fcp", H().createExpectedError("First Contentful Paint not supported"));
            (this.Uc = c.includes("layout-shift")) || this.Ma.rejectSignal("cls",
                H().createExpectedError("Cumulative Layout Shift not supported"));
            (this.Zf = c.includes("first-input")) || this.Ma.rejectSignal("fid", H().createExpectedError("First Input Delay not supported"));
            (this.Tc = c.includes("largest-contentful-paint")) || this.Ma.rejectSignal("lcpv", H().createExpectedError("Largest Contentful Paint not supported"));
            this.Gh = c.includes("navigation");
            this.uc = this.tc = null;
            this.je = this.je.bind(this);
            this.addEnabledExperiment("rtv-" + C(this.win).rtvVersion);
            Nj(a.document).then(function() {
                b.tick("dr");
                b.flush()
            });
            Oj(a.document).then(function() {
                b.tick("ol");
                if (!b.win.PerformancePaintTiming && b.win.chrome && "function" == typeof b.win.chrome.loadTimes) {
                    var d = 1E3 * b.win.chrome.loadTimes().firstPaintTime - b.win.performance.timing.navigationStart;
                    1 >= d || b.tickDelta("fp", d)
                }
                b.flush()
            });
            Qm(this);
            Rm(this)
        }
        g = Pm.prototype;
        g.coreServicesAvailable = function() {
            var a = this,
                b = this.win.document.documentElement;
            this.B = Gc(b);
            this.h = Q(b);
            this.o = hd(b);
            this.lf = dd(this.B);
            this.Rb = this.h.isEmbedded() && "1" === this.h.getParam("csi");
            this.B.onVisibilityChanged(this.flush.bind(this));
            Sm(this);
            var c = this.h.whenMessagingReady();
            this.B.whenFirstVisible().then(function() {
                a.tick("ofv");
                a.flush()
            });
            if (this.Tc || this.Uc) this.B.onVisibilityChanged(this.je);
            return c ? c.then(function() {
                a.tickDelta("msr", a.win.performance.now());
                a.tick("timeOrigin",
                    void 0, a.ye);
                var d = a.B.getMetaByName("amp-usqp");
                d && d.split(",").forEach(function(e) { a.addEnabledExperiment("ssr-" + e) });
                return Tm(a)
            }).then(function() {
                a.Yd = !0;
                Um(a);
                a.flush()
            }) : p()
        };

        function Tm(a) { var b = cd(a.win).getSingleDoc(); return Fm(b).then(function(c) { c && a.addEnabledExperiment("story") }) }

        function Qm(a) {
            if ("inabox" !== C(a.win).runtime) {
                var b = !1,
                    c = !1,
                    d = !1,
                    e = !1,
                    f = function(k) {
                        if ("first-paint" != k.name || b)
                            if ("first-contentful-paint" != k.name || c) "first-input" !== k.entryType || d ? "layout-shift" === k.entryType ? !k.hadRecentInput && 1E3 > a.Ub.length && a.Ub.push(k) : "largest-contentful-paint" === k.entryType ? (k.loadTime && (a.tc = k.loadTime), k.renderTime && (a.uc = k.renderTime)) : "navigation" != k.entryType || e || ("domComplete domContentLoadedEventEnd domContentLoadedEventStart domInteractive loadEventEnd loadEventStart requestStart responseStart".split(" ").forEach(function(m) {
                                return a.tick(m,
                                    k[m])
                            }), e = !0) : (a.tickDelta("fid", k.processingStart - k.startTime), d = !0);
                            else {
                                var l = k.startTime + k.duration;
                                a.tickDelta("fcp", l);
                                a.tickSinceVisible("fcpv", l);
                                c = !0
                            }
                        else a.tickDelta("fp", k.startTime + k.duration), b = !0
                    },
                    h = [];
                a.win.PerformancePaintTiming && (a.win.performance.getEntriesByType("paint").forEach(f), h.push("paint"));
                a.Zf && Vm(a, f, { type: "first-input", buffered: !0 });
                a.Uc && Vm(a, f, { type: "layout-shift", buffered: !0 });
                a.Tc && Vm(a, f, { type: "largest-contentful-paint", buffered: !0 });
                a.Gh && Vm(a, f, {
                    type: "navigation",
                    buffered: !0
                });
                0 < h.length && Vm(a, f, { entryTypes: h })
            }
        }

        function Vm(a, b, c) {
            try {
                (new a.win.PerformanceObserver(function(d) {
                    d.getEntries().forEach(b);
                    a.flush()
                })).observe(c)
            } catch (d) { H().warn("Performance", d) }
        }

        function Rm(a) {
            if (a.win.perfMetrics && a.win.perfMetrics.onFirstInputDelay) a.win.perfMetrics.onFirstInputDelay(function(b) {
                a.tickDelta("fid-polyfill", b);
                a.flush()
            })
        }
        g.je = function() {
            var a = this.B.getVisibilityState();
            if ("inactive" === a || "hidden" === a)
                if (this.Uc && Wm(this), this.Tc) {
                    if (null !== this.tc) { this.tickDelta("lcpl", this.tc); var b = this.tc }
                    null !== this.uc && (this.tickDelta("lcpr", this.uc), b = b || this.uc);
                    null !== b && this.tickSinceVisible("lcpv", b);
                    this.flush()
                }
        };

        function Wm(a) {
            var b = a.Ub.reduce(function(l, m) { return l + m.value }, 0),
                c, d = null != (c = a.Ma.get("fcp")) ? c : 0,
                e, f = null != (e = a.Ma.get("ofv")) ? e : 0,
                h = a.Ub.reduce(function(l, m) { return m.startTime < d ? l + m.value : l }, 0),
                k = a.Ub.reduce(function(l, m) { return m.startTime < f ? l + m.value : l }, 0);
            0 === a.Qc ? (a.tick("cls-ofv", k), a.tickDelta("cls-fcp", h), a.tickDelta("cls", b), a.flush(), a.Qc = 1) : 1 === a.Qc && (a.tickDelta("cls-2", b), a.flush(), a.Qc = 2)
        }

        function Sm(a) {
            var b = !a.B.hasBeenVisible(),
                c = -1;
            a.B.whenFirstVisible().then(function() {
                c = a.win.performance.now();
                a.mark("visible")
            });
            Xm(a).then(function() {
                if (b) {
                    var d = -1 < c ? a.win.performance.now() - c : 0;
                    a.B.whenFirstVisible().then(function() { a.tickDelta("pc", d) });
                    Ym(a, d);
                    a.mark("pc")
                } else a.tick("pc"), Ym(a, a.win.performance.now() - c);
                a.flush()
            })
        }

        function Xm(a) {
            return a.o.whenFirstPass().then(function() {
                var b = a.win.document.documentElement,
                    c = jd(b).getSize();
                uc(0, 0, c.width, c.height);
                return Om(b)
            })
        }
        g.tick = function(a, b, c) {
            var d = A({ label: a }),
                e;
            void 0 != b ? d.delta = e = Math.max(b, 0) : void 0 != c ? d.value = c : (this.mark(a), e = this.win.performance.now(), d.value = this.ye + e);
            c = this.win;
            var f = c.dispatchEvent;
            var h = this.win;
            var k = { label: a, delta: e };
            var l = { detail: k };
            Object.assign(l, void 0);
            "function" == typeof h.CustomEvent ? k = new h.CustomEvent("perf", l) : (h = h.document.createEvent("CustomEvent"), h.initCustomEvent("perf", !!l.bubbles, !!l.cancelable, k), k = h);
            f.call(c, k);
            this.Yd && this.Rb ? this.h.sendMessage("tick", d) : (50 <= this.Ib.length &&
                this.Ib.shift(), this.Ib.push(d));
            this.Ma.signal(a, e)
        };
        g.mark = function(a) { this.win.performance && this.win.performance.mark && 1 == arguments.length && this.win.performance.mark(a) };
        g.tickDelta = function(a, b) { this.tick(a, b) };
        g.tickSinceVisible = function(a, b) {
            b = void 0 == b ? this.win.performance.now() : b;
            b = this.ye + b;
            var c = this.B && this.B.getFirstVisibleTime();
            this.tickDelta(a, c ? Math.max(b - c, 0) : 0)
        };
        g.flush = function() { this.Yd && this.Rb && (null == this.nc && (this.nc = Object.keys(this.mf).join(",")), this.h.sendMessage("sendCsi", A({ ampexp: this.nc, canonicalUrl: this.lf.canonicalUrl }), !0)) };
        g.throttledFlush = function() {
            this.bg || (this.bg = hb(this.win, this.flush.bind(this), 100));
            this.bg()
        };
        g.addEnabledExperiment = function(a) {
            this.mf[a] = !0;
            this.nc = void 0
        };

        function Um(a) { a.h && (a.Rb && a.Ib.forEach(function(b) { a.h.sendMessage("tick", b) }), a.Ib.length = 0) }

        function Ym(a, b) { a.h && a.h.sendMessage("prerenderComplete", A({ value: b }), !0) }
        g.isPerformanceTrackingOn = function() { return this.Rb };
        g.getMetric = function(a) { return this.Ma.whenSignal(a) };

        function Zm(a, b) {
            this.Ha = a;
            this.L = b;
            this.Wc = !1;
            this.ve = 0;
            this.Ue = this.nh.bind(this);
            this.Te = this.mh.bind(this);
            this.Se = this.lh.bind(this);
            this.Re = this.kh.bind(this);
            this.Ha.addEventListener("touchstart", this.Ue, !0)
        }
        g = Zm.prototype;
        g.cleanup = function() {
            $m(this);
            this.Ha.removeEventListener("touchstart", this.Ue, !0)
        };
        g.nh = function(a) { this.Wc || !a.touches || 1 != a.touches.length || 0 < this.L.getScrollTop() || (a = a.touches[0].clientY, this.Wc = !0, this.ve = a, this.Ha.addEventListener("touchmove", this.Te, !0), this.Ha.addEventListener("touchend", this.Se, !0), this.Ha.addEventListener("touchcancel", this.Re, !0)) };

        function $m(a) {
            a.Wc = !1;
            a.ve = 0;
            a.Ha.removeEventListener("touchmove", a.Te, !0);
            a.Ha.removeEventListener("touchend", a.Se, !0);
            a.Ha.removeEventListener("touchcancel", a.Re, !0)
        }
        g.mh = function(a) {
            if (this.Wc) {
                var b = a.touches[0].clientY - this.ve;
                0 < b && a.preventDefault();
                0 != b && $m(this)
            }
        };
        g.lh = function() { $m(this) };
        g.kh = function() { $m(this) };

        function an(a) {
            var b = a.win;
            Bf(["\u26a1", "amp"], b.document) && P(a.win).isStandalone() && Ii(a, function() { ed(b).installExtensionForDoc(a, "amp-standalone").then(function() { return $c(a.getBody(), "standalone", "amp-standalone") }).then(function(c) { return c.initialize() }) })
        };

        function bn() {
            var a = self,
                b = a.location.href;
            if (!b.startsWith("about:")) {
                var c = !1;
                C().development && (c = "0" !== B(a.location.originalHash || a.location.hash).validate);
                c ? cn(a.document, mb.cdn + "/v0/validator_wasm.js").then(function() { amp.validator.validateUrlAndLog(b, a.document) }) : C().examiner && cn(a.document, mb.cdn + "/examiner.js")
            }
        }

        function cn(a, b) {
            var c = a.createElement("script");
            c.src = b;
            (b = a.head.querySelector("script[nonce]")) && c.setAttribute("nonce", b.getAttribute("nonce"));
            b = mf(c).then(function() { a.head.removeChild(c) }, function() {});
            a.head.appendChild(c);
            return b
        };

        function dn(a, b) {
            Hi(self.document, function() {
                jm(self);
                km(a);
                b.coreServicesAvailable();
                zh()
            });
            Hi(self.document, function() { zm() });
            Hi(self.document, function() {
                var c = self;
                cj(c, "amp-img", gj);
                cj(c, "amp-pixel", Gj);
                cj(c, "amp-layout", mj)
            });
            Hi(self.document, function() { dj(a) });
            Hi(self.document, function() {
                var c = self,
                    d = c.document.documentElement;
                "0" == Q(d).getParam("p2r") && P(c).isChrome() && new Zm(c.document, jd(d));
                Gm(a);
                an(a);
                bn();
                yf();
                Uj()
            }, !0);
            Hi(self.document, function() {
                b.tick("e_is");
                hd(a).ampInitComplete();
                b.flush()
            })
        }
        self.location && (self.location.originalHash = self.location.hash);
        var en;
        try { Nf(), Mm(), en = cd(self) } catch (a) { throw Af(self.document), a; }
        Hi(self.document, function() {
            var a = en.getAmpDoc(self.document);
            K(self, "platform", Hj);
            K(self, "performance", Pm);
            var b = N(self, "performance");
            self.document.documentElement.hasAttribute("i-amphtml-no-boilerplate") && b.addEnabledExperiment("no-boilerplate");
            Cm();
            b.tick("is");
            sf(a, "html{overflow-x:hidden!important}html.i-amphtml-fie{height:100%!important;width:100%!important}html:not([amp4ads]),html:not([amp4ads]) body{height:auto!important}html:not([amp4ads]) body{margin:0!important}body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}html.i-amphtml-singledoc.i-amphtml-embedded{-ms-touch-action:pan-y pinch-zoom;touch-action:pan-y pinch-zoom}html.i-amphtml-fie>body,html.i-amphtml-singledoc>body{overflow:visible!important}html.i-amphtml-fie:not(.i-amphtml-inabox)>body,html.i-amphtml-singledoc:not(.i-amphtml-inabox)>body{position:relative!important}html.i-amphtml-ios-embed-legacy>body{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important}html.i-amphtml-ios-embed{overflow-y:auto!important;position:static}#i-amphtml-wrapper{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;margin:0!important;display:block!important}html.i-amphtml-ios-embed.i-amphtml-ios-overscroll,html.i-amphtml-ios-embed.i-amphtml-ios-overscroll>#i-amphtml-wrapper{-webkit-overflow-scrolling:touch!important}#i-amphtml-wrapper>body{position:relative!important;border-top:1px solid transparent!important}#i-amphtml-wrapper+body{visibility:visible}#i-amphtml-wrapper+body .i-amphtml-lightbox-element,#i-amphtml-wrapper+body[i-amphtml-lightbox]{visibility:hidden}#i-amphtml-wrapper+body[i-amphtml-lightbox] .i-amphtml-lightbox-element{visibility:visible}#i-amphtml-wrapper.i-amphtml-scroll-disabled,.i-amphtml-scroll-disabled{overflow-x:hidden!important;overflow-y:hidden!important}amp-instagram{padding:54px 0px 0px!important;background-color:#fff}amp-iframe iframe{box-sizing:border-box!important}[amp-access][amp-access-hide]{display:none}[subscriptions-dialog],body:not(.i-amphtml-subs-ready) [subscriptions-action],body:not(.i-amphtml-subs-ready) [subscriptions-section]{display:none!important}amp-experiment,amp-live-list>[update]{display:none}amp-list[resizable-children]>.i-amphtml-loading-container.amp-hidden{display:none!important}amp-list [fetch-error],amp-list[load-more] [load-more-button],amp-list[load-more] [load-more-end],amp-list[load-more] [load-more-failed],amp-list[load-more] [load-more-loading]{display:none}amp-list[diffable] div[role=list]{display:block}amp-story-page,amp-story[standalone]{min-height:1px!important;display:block!important;height:100%!important;margin:0!important;padding:0!important;overflow:hidden!important;width:100%!important}amp-story[standalone]{background-color:#202125!important;position:relative!important}amp-story-page{background-color:#757575}amp-story .amp-active>div,amp-story .i-amphtml-loader-background{display:none!important}amp-story-page:not(:first-of-type):not([distance]):not([active]){transform:translateY(1000vh)!important}amp-autocomplete{position:relative!important;display:inline-block!important}amp-autocomplete>input,amp-autocomplete>textarea{padding:0.5rem;border:1px solid rgba(0,0,0,0.33)}.i-amphtml-autocomplete-results,amp-autocomplete>input,amp-autocomplete>textarea{font-size:1rem;line-height:1.5rem}[amp-fx^=fly-in]{visibility:hidden}amp-script[nodom]{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}\n/*# sourceURL=/css/ampdoc.css*/[hidden]{display:none!important}.i-amphtml-element{display:inline-block}.i-amphtml-blurry-placeholder{transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;pointer-events:none}[layout=nodisplay]:not(.i-amphtml-element){display:none!important}.i-amphtml-layout-fixed,[layout=fixed][width][height]:not(.i-amphtml-layout-fixed){display:inline-block;position:relative}.i-amphtml-layout-responsive,[layout=responsive][width][height]:not(.i-amphtml-layout-responsive),[width][height][heights]:not([layout]):not(.i-amphtml-layout-responsive),[width][height][sizes]:not([layout]):not(.i-amphtml-layout-responsive){display:block;position:relative}.i-amphtml-layout-intrinsic,[layout=intrinsic][width][height]:not(.i-amphtml-layout-intrinsic){display:inline-block;position:relative;max-width:100%}.i-amphtml-layout-intrinsic .i-amphtml-sizer{max-width:100%}.i-amphtml-intrinsic-sizer{max-width:100%;display:block!important}.i-amphtml-layout-container,.i-amphtml-layout-fixed-height,[layout=container],[layout=fixed-height][height]:not(.i-amphtml-layout-fixed-height){display:block;position:relative}.i-amphtml-layout-fill,.i-amphtml-layout-fill.i-amphtml-notbuilt,[layout=fill]:not(.i-amphtml-layout-fill),body noscript>*{display:block;overflow:hidden!important;position:absolute;top:0;left:0;bottom:0;right:0}body noscript>*{position:absolute!important;width:100%;height:100%;z-index:2}body noscript{display:inline!important}.i-amphtml-layout-flex-item,[layout=flex-item]:not(.i-amphtml-layout-flex-item){display:block;position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.i-amphtml-layout-fluid{position:relative}.i-amphtml-layout-size-defined{overflow:hidden!important}.i-amphtml-layout-awaiting-size{position:absolute!important;top:auto!important;bottom:auto!important}i-amphtml-sizer{display:block!important}@supports (aspect-ratio:1/1){i-amphtml-sizer.i-amphtml-disable-ar{display:none!important}}.i-amphtml-blurry-placeholder,.i-amphtml-fill-content{display:block;height:0;max-height:100%;max-width:100%;min-height:100%;min-width:100%;width:0;margin:auto}.i-amphtml-layout-size-defined .i-amphtml-fill-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-replaced-content,.i-amphtml-screen-reader{padding:0!important;border:none!important}.i-amphtml-screen-reader{position:fixed!important;top:0px!important;left:0px!important;width:4px!important;height:4px!important;opacity:0!important;overflow:hidden!important;margin:0!important;display:block!important;visibility:visible!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:8px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:12px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:16px!important}.i-amphtml-unresolved{position:relative;overflow:hidden!important}.i-amphtml-select-disabled{-webkit-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.i-amphtml-notbuilt,[layout]:not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not([layout]):not(.i-amphtml-element){position:relative;overflow:hidden!important;color:transparent!important}.i-amphtml-notbuilt:not(.i-amphtml-layout-container)>*,[layout]:not([layout=container]):not(.i-amphtml-element)>*,[width][height][heights]:not([layout]):not(.i-amphtml-element)>*,[width][height][sizes]:not([layout]):not(.i-amphtml-element)>*{display:none}amp-img:not(.i-amphtml-element)[i-amphtml-ssr]>img.i-amphtml-fill-content{display:block}.i-amphtml-notbuilt:not(.i-amphtml-layout-container),[layout]:not([layout=container]):not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not([layout]):not(.i-amphtml-element){color:transparent!important;line-height:0!important}.i-amphtml-ghost{visibility:hidden!important}.i-amphtml-element>[placeholder],[layout]:not(.i-amphtml-element)>[placeholder],[width][height][heights]:not([layout]):not(.i-amphtml-element)>[placeholder],[width][height][sizes]:not([layout]):not(.i-amphtml-element)>[placeholder]{display:block;line-height:normal}.i-amphtml-element>[placeholder].amp-hidden,.i-amphtml-element>[placeholder].hidden{visibility:hidden}.i-amphtml-element:not(.amp-notsupported)>[fallback],.i-amphtml-layout-container>[placeholder].amp-hidden,.i-amphtml-layout-container>[placeholder].hidden{display:none}.i-amphtml-layout-size-defined>[fallback],.i-amphtml-layout-size-defined>[placeholder]{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:1}amp-img.i-amphtml-ssr:not(.i-amphtml-element)>[placeholder]{z-index:auto}.i-amphtml-notbuilt>[placeholder]{display:block!important}.i-amphtml-hidden-by-media-query{display:none!important}.i-amphtml-element-error{background:red!important;color:#fff!important;position:relative!important}.i-amphtml-element-error:before{content:attr(error-message)}i-amp-scroll-container,i-amphtml-scroll-container{position:absolute;top:0;left:0;right:0;bottom:0;display:block}i-amp-scroll-container.amp-active,i-amphtml-scroll-container.amp-active{overflow:auto;-webkit-overflow-scrolling:touch}.i-amphtml-loading-container{display:block!important;pointer-events:none;z-index:1}.i-amphtml-notbuilt>.i-amphtml-loading-container{display:block!important}.i-amphtml-loading-container.amp-hidden{visibility:hidden}.i-amphtml-element>[overflow]{cursor:pointer;position:relative;z-index:2;visibility:hidden;display:initial;line-height:normal}.i-amphtml-layout-size-defined>[overflow]{position:absolute}.i-amphtml-element>[overflow].amp-visible{visibility:visible}template{display:none!important}.amp-border-box,.amp-border-box *,.amp-border-box :after,.amp-border-box :before{box-sizing:border-box}amp-pixel{display:none!important}amp-analytics,amp-auto-ads,amp-story-auto-ads{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}html.i-amphtml-fie>amp-analytics{position:initial!important}[visible-when-invalid]:not(.visible),form [submit-error],form [submit-success],form [submitting]{display:none}amp-accordion{display:block!important}@media (min-width:1px){:where(amp-accordion>section)>:first-child{margin:0;background-color:#efefef;padding-right:20px;border:1px solid #dfdfdf}:where(amp-accordion>section)>:last-child{margin:0}}amp-accordion>section{float:none!important}amp-accordion>section>*{float:none!important;display:block!important;overflow:hidden!important;position:relative!important}amp-accordion,amp-accordion>section{margin:0}amp-accordion:not(.i-amphtml-built)>section>:last-child{display:none!important}amp-accordion:not(.i-amphtml-built)>section[expanded]>:last-child{display:block!important}\n/*# sourceURL=/css/ampshared.css*/", function() {
                return dn(a,
                    b)
            }, !0, "amp-runtime")
        });
        self.console && (console.info || console.log).call(console, "Powered by AMP \u26a1 HTML \u2013 Version 2104302228000", self.location.href);
        self.document.documentElement.setAttribute("amp-version", "2104302228000");
    })(AMP._ = AMP._ || {})
} catch (e) {
    setTimeout(function() {
        var s = document.body.style;
        s.opacity = 1;
        s.visibility = "visible";
        s.animation = "none";
        s.WebkitAnimation = "none;"
    }, 1000);
    throw e
};

//# sourceMappingURL=v0.js.map