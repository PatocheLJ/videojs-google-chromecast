// Copyright Google Inc. All Rights Reserved.
(function () {
  'use strict'
  var g
  var h = this || self
  var l = function (a) {
    return void 0 !== a
  }
  var m = function () {}
  var n = function (a) {
    var b = typeof a
    if (b == 'object') {
      if (a) {
        if (a instanceof Array) return 'array'
        if (a instanceof Object) return b
        var c = Object.prototype.toString.call(a)
        if (c == '[object Window]') return 'object'
        if (c == '[object Array]' || (typeof a.length === 'number' && typeof a.splice !== 'undefined' && typeof a.propertyIsEnumerable !== 'undefined' && !a.propertyIsEnumerable('splice'))) return 'array'
        if (c == '[object Function]' || (typeof a.call !== 'undefined' && typeof a.propertyIsEnumerable !== 'undefined' && !a.propertyIsEnumerable('call'))) return 'function'
      } else return 'null'
    } else if (b == 'function' && typeof a.call === 'undefined') return 'object'
    return b
  }
  var aa = function (a) {
    var b = n(a)
    return b == 'array' || (b == 'object' && typeof a.length === 'number')
  }
  var p = function (a) {
    return n(a) == 'function'
  }
  var ba = function (a) {
    var b = typeof a
    return (b == 'object' && a != null) || b == 'function'
  }
  var ca = function (a, b, c) {
    return a.call.apply(a.bind, arguments)
  }
  var da = function (a, b, c) {
    if (!a) throw Error()
    if (arguments.length > 2) {
      var d = Array.prototype.slice.call(arguments, 2)
      return function () {
        var e = Array.prototype.slice.call(arguments)
        Array.prototype.unshift.apply(e, d)
        return a.apply(b, e)
      }
    }
    return function () {
      return a.apply(b, arguments)
    }
  }
  var t = function (a, b, c) {
    t = Function.prototype.bind && Function.prototype.bind.toString().indexOf('native code') != -1 ? ca : da
    return t.apply(null, arguments)
  }
  var ea =
            Date.now ||
            function () {
              return +new Date()
            }
  var u = function (a, b) {
    a = a.split('.')
    var c = h
    a[0] in c || typeof c.execScript === 'undefined' || c.execScript('var ' + a[0])
    for (var d; a.length && (d = a.shift());) !a.length && l(b) ? (c[d] = b) : (c = c[d] && c[d] !== Object.prototype[d] ? c[d] : (c[d] = {}))
  }
  var v = function (a, b) {
    function c () {}
    c.prototype = b.prototype
    a.kc = b.prototype
    a.prototype = new c()
    a.prototype.constructor = a
  }
  var w = function (a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, w)
    else {
      const b = Error().stack
      b && (this.stack = b)
    }
    a && (this.message = String(a))
  }
  v(w, Error)
  w.prototype.name = 'CustomError'
  var fa = function (a, b) {
    a = a.split('%s')
    for (var c = '', d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : '%s')
    w.call(this, c + a[d])
  }
  v(fa, w)
  fa.prototype.name = 'AssertionError'
  var x = function (a, b) {
    throw new fa('Failure' + (a ? ': ' + a : ''), Array.prototype.slice.call(arguments, 1))
  }
  var oa = function (a, b) {
    if (b) a = a.replace(ha, '&amp;').replace(ia, '&lt;').replace(ja, '&gt;').replace(ka, '&quot;').replace(la, '&#39;').replace(ma, '&#0;')
    else {
      if (!na.test(a)) return a
      a.indexOf('&') != -1 && (a = a.replace(ha, '&amp;'))
      a.indexOf('<') != -1 && (a = a.replace(ia, '&lt;'))
      a.indexOf('>') != -1 && (a = a.replace(ja, '&gt;'))
      a.indexOf('"') != -1 && (a = a.replace(ka, '&quot;'))
      a.indexOf("'") != -1 && (a = a.replace(la, '&#39;'))
      a.indexOf('\x00') != -1 && (a = a.replace(ma, '&#0;'))
    }
    return a
  }
  var ha = /&/g
  var ia = /</g
  var ja = />/g
  var ka = /"/g
  var la = /'/g
  var ma = /\x00/g
  var na = /[\x00&<>"']/
  var y
  a: {
    var pa = h.navigator
    if (pa) {
      var qa = pa.userAgent
      if (qa) {
        y = qa
        break a
      }
    }
    y = ''
  }
  var z = function (a, b) {
    this.Ra = (a === ra && b) || ''
    this.rb = sa
  }
  z.prototype.N = !0
  z.prototype.M = function () {
    return this.Ra
  }
  z.prototype.toString = function () {
    return 'Const{' + this.Ra + '}'
  }
  var sa = {}
  var ra = {}
  var A = new z(ra, '')
  var B = function () {
    this.Ja = ''
  }
  B.prototype.N = !0
  B.prototype.M = function () {
    return this.Ja.toString()
  }
  B.prototype.toString = function () {
    return 'SafeScript{' + this.Ja + '}'
  }
  B.prototype.G = function (a) {
    this.Ja = a
    return this
  }
  new B().G('')
  var C = function () {
    this.na = ''
    this.pb = null
    this.sb = ta
  }
  g = C.prototype
  g.N = !0
  g.M = function () {
    return this.na.toString()
  }
  g.$a = !0
  g.Za = function () {
    return 1
  }
  g.toString = function () {
    return 'TrustedResourceUrl{' + this.na + '}'
  }
  var ta = {}
  var D = function () {
    this.La = ''
  }
  D.prototype.N = !0
  D.prototype.M = function () {
    return this.La
  }
  D.prototype.toString = function () {
    return 'SafeStyle{' + this.La + '}'
  }
  D.prototype.G = function (a) {
    this.La = a
    return this
  }
  new D().G('')
  var E = function () {
    this.Ka = ''
  }
  E.prototype.N = !0
  E.prototype.M = function () {
    return this.Ka
  }
  E.prototype.toString = function () {
    return 'SafeStyleSheet{' + this.Ka + '}'
  }
  E.prototype.G = function (a) {
    this.Ka = a
    return this
  }
  new E().G('')
  var F = function () {
    this.ma = ''
    this.qb = ua
    this.Wa = null
  }
  g = F.prototype
  g.$a = !0
  g.Za = function () {
    return this.Wa
  }
  g.N = !0
  g.M = function () {
    return this.ma.toString()
  }
  g.toString = function () {
    return 'SafeHtml{' + this.ma + '}'
  }
  var va = function (a) {
    if (a instanceof F && a.constructor === F && a.qb === ua) return a.ma
    x("expected object of type SafeHtml, got '" + a + "' of type " + n(a))
    return 'type_error:SafeHtml'
  }
  var wa = function (a) {
    if (a instanceof F) return a
    var b = typeof a === 'object'
    var c = null
    b && a.$a && (c = a.Za())
    return G(oa(b && a.N ? a.M() : String(a)), c)
  }
  var ua = {}
  var G = function (a, b) {
    return new F().G(a, b)
  }
  F.prototype.G = function (a, b) {
    this.ma = a
    this.Wa = b
    return this
  }
  G('<!DOCTYPE html>', 0)
  var xa = G('', 0)
  G('<br>', 0)
  var ya = (function (a) {
    let b = !1
    let c
    return function () {
      b || ((c = a()), (b = !0))
      return c
    }
  })(function () {
    if (typeof document === 'undefined') return !1
    var a = document.createElement('div')
    var b = document.createElement('div')
    b.appendChild(document.createElement('div'))
    a.appendChild(b)
    if (!a.firstChild) return !1
    b = a.firstChild.firstChild
    a.innerHTML = va(xa)
    return !b.parentElement
  })
  var za = function (a) {
    if (A instanceof z && A.constructor === z && A.rb === sa) var b = A.Ra
    else x("expected object of type Const, got '" + A + "'"), (b = 'type_error:Const')
    var c = new C()
    c.na = b
    a: {
      try {
        var d = a && a.ownerDocument
        var e = d && (d.defaultView || d.parentWindow)
        e = e || h
        if (e.Element && e.Location) {
          var f = e
          break a
        }
      } catch (q) {}
      f = null
    }
    if (f && typeof f.HTMLIFrameElement !== 'undefined' && (!a || (!(a instanceof f.HTMLIFrameElement) && (a instanceof f.Location || a instanceof f.Element)))) {
      if (ba(a)) {
        try {
          var k = a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
        } catch (q) {
          k = '<object could not be stringified>'
        }
      } else k = void 0 === a ? 'undefined' : a === null ? 'null' : typeof a
      x('Argument is not a %s (or a non-Element, non-Location mock); got: %s', 'HTMLIFrameElement', k)
    }
    c.pb ? (b = c.pb) : (c instanceof C && c.constructor === C && c.sb === ta ? (b = c.na) : (x("expected object of type TrustedResourceUrl, got '" + c + "' of type " + n(c)), (b = 'type_error:TrustedResourceUrl')), (b = b.toString()))
    a.src = b
  }
  var H = function (a, b, c) {
    this.reset(a, b, c, void 0, void 0)
  }
  H.prototype.ea = null
  var Aa = 0
  H.prototype.reset = function (a, b, c, d, e) {
    typeof e === 'number' || Aa++
    this.ob = d || ea()
    this.H = a
    this.Rb = b
    this.bb = c
    delete this.ea
  }
  H.prototype.Pa = function (a) {
    this.H = a
  }
  H.prototype.getMessage = function () {
    return this.Rb
  }
  var I = function (a) {
    this.eb = a
    this.X = this.sa = this.H = this.s = null
  }
  var J = function (a, b) {
    this.name = a
    this.value = b
  }
  J.prototype.toString = function () {
    return this.name
  }
  var Ba = new J('SEVERE', 1e3)
  var Ca = new J('WARNING', 900)
  var Da = new J('INFO', 800)
  var Ea = new J('CONFIG', 700)
  var Fa = [new J('OFF', Infinity), new J('SHOUT', 1200), Ba, Ca, Da, Ea, new J('FINE', 500), new J('FINER', 400), new J('FINEST', 300), new J('ALL', 0)]
  var K = null
  var Ga = function (a) {
    if (!K) {
      K = {}
      for (var b = 0, c; (c = Fa[b]); b++) (K[c.value] = c), (K[c.name] = c)
    }
    if (a in K) return K[a]
    for (b = 0; b < Fa.length; ++b) if (((c = Fa[b]), c.value <= a)) return c
    return null
  }
  I.prototype.getName = function () {
    return this.eb
  }
  I.prototype.getParent = function () {
    return this.s
  }
  I.prototype.getChildren = function () {
    this.sa || (this.sa = {})
    return this.sa
  }
  I.prototype.Pa = function (a) {
    this.H = a
  }
  var Ha = function (a) {
    if (a.H) return a.H
    if (a.s) return Ha(a.s)
    x('Root logger has no level set.')
    return null
  }
  I.prototype.log = function (a, b, c) {
    if (a.value >= Ha(this).value) {
      for (p(b) && (b = b()), a = new H(a, String(b), this.eb), c && (a.ea = c), c = this; c;) {
        var d = c
        var e = a
        if (d.X) for (var f = 0; (b = d.X[f]); f++) b(e)
        c = c.getParent()
      }
    }
  }
  I.prototype.info = function (a, b) {
    this.log(Da, a, b)
  }
  var Ia = {}
  var L = null
  var Ja = function () {
    L || ((L = new I('')), (Ia[''] = L), L.Pa(Ea))
  }
  var Ka = function () {
    Ja()
    return L
  }
  var La = function (a) {
    Ja()
    var b
    if (!(b = Ia[a])) {
      b = new I(a)
      var c = a.lastIndexOf('.')
      var d = a.substr(c + 1)
      c = La(a.substr(0, c))
      c.getChildren()[d] = b
      b.s = c
      Ia[a] = b
    }
    return b
  }
  var N = function (a) {
    var b = Ma
    b && b.log(Ca, a, void 0)
  }
  var Na = function () {
    this.ib = ea()
  }
  var Oa = null
  Na.prototype.set = function (a) {
    this.ib = a
  }
  Na.prototype.reset = function () {
    this.set(ea())
  }
  Na.prototype.get = function () {
    return this.ib
  }
  var Pa = function (a) {
    this.Yb = a || ''
    Oa || (Oa = new Na())
    this.jc = Oa
  }
  g = Pa.prototype
  g.Sa = !0
  g.mb = !0
  g.gc = !0
  g.fc = !0
  g.nb = !1
  g.hc = !1
  var O = function (a) {
    return a < 10 ? '0' + a : String(a)
  }
  var Qa = function (a, b) {
    a = (a.ob - b) / 1e3
    b = a.toFixed(3)
    var c = 0
    if (a < 1) c = 2
    else for (; a < 100;) c++, (a *= 10)
    for (; c-- > 0;) b = ' ' + b
    return b
  }
  var Ra = function (a) {
    Pa.call(this, a)
  }
  v(Ra, Pa)
  var Sa = function (a, b) {
    var c = []
    c.push(a.Yb, ' ')
    if (a.mb) {
      var d = new Date(b.ob)
      c.push('[', O(d.getFullYear() - 2e3) + O(d.getMonth() + 1) + O(d.getDate()) + ' ' + O(d.getHours()) + ':' + O(d.getMinutes()) + ':' + O(d.getSeconds()) + '.' + O(Math.floor(d.getMilliseconds() / 10)), '] ')
    }
    a.gc && c.push('[', Qa(b, a.jc.get()), 's] ')
    a.fc && c.push('[', b.bb, '] ')
    a.hc && c.push('[', b.H.name, '] ')
    c.push(b.getMessage())
    a.nb && (b = b.ea) && c.push('\n', b instanceof Error ? b.message : b.toString())
    a.Sa && c.push('\n')
    return c.join('')
  }
  var Ta = function () {
    this.Zb = t(this.tb, this)
    this.fa = new Ra()
    this.fa.mb = !1
    this.fa.nb = !1
    this.ab = this.fa.Sa = !1
    this.Cb = {}
  }
  Ta.prototype.tb = function (a) {
    function b (f) {
      if (f) {
        if (f.value >= Ba.value) return 'error'
        if (f.value >= Ca.value) return 'warn'
        if (f.value >= Ea.value) return 'log'
      }
      return 'debug'
    }
    if (!this.Cb[a.bb]) {
      var c = Sa(this.fa, a)
      var d = Ua
      if (d) {
        var e = b(a.H)
        Va(d, e, c, a.ea)
      }
    }
  }
  var Wa = null
  var Ua = h.console
  var Va = function (a, b, c, d) {
    if (a[b]) a[b](c, d || '')
    else a.log(c, d || '')
  }
  var Xa = { pc: !0 }
  var P = function () {
    throw Error('Do not instantiate directly')
  }
  P.prototype.Ua = null
  P.prototype.getContent = function () {
    return this.content
  }
  P.prototype.toString = function () {
    return this.content
  }
  var Ya = function () {
    P.call(this)
  }
  v(Ya, P)
  Ya.prototype.Va = Xa
  var $a = function () {
    var a = Za(void 0, void 0)
    if (!ba(a)) return wa(String(a))
    if (a instanceof P) {
      if (a.Va !== Xa) throw Error('Sanitized content was not of kind HTML.')
      return G(a.toString(), a.Ua || null)
    }
    x('Soy template output is unsafe for use as HTML: ' + a)
    return wa('zSoyz')
  }
  var ab = class {
    constructor (a, b, c) {
      this.Ob = c
      this.xb = a
      this.bc = b
      this.ka = 0
      this.ha = null
    }

    get () {
      let a
      this.ka > 0 ? (this.ka--, (a = this.ha), (this.ha = a.next), (a.next = null)) : (a = this.xb())
      return a
    }

    put (a) {
      this.bc(a)
      this.ka < this.Ob && (this.ka++, (a.next = this.ha), (this.ha = a))
    }
  }
  var bb = function (a) {
    h.setTimeout(function () {
      throw a
    }, 0)
  }
  var cb
  var db = function () {
    var a = h.MessageChannel
    typeof a === 'undefined' &&
            typeof window !== 'undefined' &&
            window.postMessage &&
            window.addEventListener &&
            y.indexOf('Presto') == -1 &&
            (a = function () {
              var e = document.createElement('IFRAME')
              e.style.display = 'none'
              za(e)
              document.documentElement.appendChild(e)
              var f = e.contentWindow
              e = f.document
              e.open()
              e.write(va(xa))
              e.close()
              var k = 'callImmediate' + Math.random()
              var q = f.location.protocol == 'file:' ? '*' : f.location.protocol + '//' + f.location.host
              e = t(function (r) {
                if ((q == '*' || r.origin == q) && r.data == k) this.port1.onmessage()
              }, this)
              f.addEventListener('message', e, !1)
              this.port1 = {}
              this.port2 = {
                postMessage: function () {
                  f.postMessage(k, q)
                }
              }
            })
    if (typeof a !== 'undefined' && y.indexOf('Trident') == -1 && y.indexOf('MSIE') == -1) {
      var b = new a()
      var c = {}
      var d = c
      b.port1.onmessage = function () {
        if (l(c.next)) {
          c = c.next
          var e = c.Ta
          c.Ta = null
          e()
        }
      }
      return function (e) {
        d.next = { Ta: e }
        d = d.next
        b.port2.postMessage(0)
      }
    }
    return typeof document !== 'undefined' && 'onreadystatechange' in document.createElement('SCRIPT')
      ? function (e) {
        var f = document.createElement('SCRIPT')
        f.onreadystatechange = function () {
          f.onreadystatechange = null
          f.parentNode.removeChild(f)
          f = null
          e()
          e = null
        }
        document.documentElement.appendChild(f)
      }
      : function (e) {
        h.setTimeout(e, 0)
      }
  }
  var eb = function () {
    this.pa = this.V = null
  }
  var gb = new ab(
    function () {
      return new fb()
    },
    function (a) {
      a.reset()
    },
    100
  )
  eb.prototype.add = function (a, b) {
    var c = gb.get()
    c.set(a, b)
    this.pa ? (this.pa.next = c) : (this.V = c)
    this.pa = c
  }
  eb.prototype.remove = function () {
    var a = null
    this.V && ((a = this.V), (this.V = this.V.next), this.V || (this.pa = null), (a.next = null))
    return a
  }
  var fb = function () {
    this.next = this.scope = this.xa = null
  }
  fb.prototype.set = function (a, b) {
    this.xa = a
    this.scope = b
    this.next = null
  }
  fb.prototype.reset = function () {
    this.next = this.scope = this.xa = null
  }
  var lb = function (a, b) {
    hb || ib()
    jb || (hb(), (jb = !0))
    kb.add(a, b)
  }
  var hb
  var ib = function () {
    if (h.Promise && h.Promise.resolve) {
      var a = h.Promise.resolve(void 0)
      hb = function () {
        a.then(mb)
      }
    } else {
      hb = function () {
        var b = mb
        !p(h.setImmediate) || (h.Window && h.Window.prototype && y.indexOf('Edge') == -1 && h.Window.prototype.setImmediate == h.setImmediate) ? (cb || (cb = db()), cb(b)) : h.setImmediate(b)
      }
    }
  }
  var jb = !1
  var kb = new eb()
  var mb = function () {
    for (var a; (a = kb.remove());) {
      try {
        a.xa.call(a.scope)
      } catch (b) {
        bb(b)
      }
      gb.put(a)
    }
    jb = !1
  }
  var S = function (a) {
    this.l = 0
    this.jb = void 0
    this.J = this.w = this.s = null
    this.ga = this.wa = !1
    if (a != m) {
      try {
        var b = this
        a.call(
          void 0,
          function (c) {
            Q(b, 2, c)
          },
          function (c) {
            if (!(c instanceof R)) {
              try {
                if (c instanceof Error) throw c
                throw Error('Promise rejected.')
              } catch (d) {}
            }
            Q(b, 3, c)
          }
        )
      } catch (c) {
        Q(this, 3, c)
      }
    }
  }
  var nb = function () {
    this.next = this.context = this.R = this.Z = this.F = null
    this.ca = !1
  }
  nb.prototype.reset = function () {
    this.context = this.R = this.Z = this.F = null
    this.ca = !1
  }
  var ob = new ab(
    function () {
      return new nb()
    },
    function (a) {
      a.reset()
    },
    100
  )
  var pb = function (a, b, c) {
    var d = ob.get()
    d.Z = a
    d.R = b
    d.context = c
    return d
  }
  var T = function () {
    var a
    var b
    var c = new S(function (d, e) {
      a = d
      b = e
    })
    return new qb(c, a, b)
  }
  S.prototype.then = function (a, b, c) {
    return rb(this, p(a) ? a : null, p(b) ? b : null, c)
  }
  S.prototype.$goog_Thenable = !0
  S.prototype.cancel = function (a) {
    this.l == 0 &&
        lb(function () {
          var b = new R(a)
          sb(this, b)
        }, this)
  }
  var sb = function (a, b) {
    if (a.l == 0) {
      if (a.s) {
        var c = a.s
        if (c.w) {
          for (var d = 0, e = null, f = null, k = c.w; k && (k.ca || (d++, k.F == a && (e = k), !(e && d > 1))); k = k.next) e || (f = k)
          e && (c.l == 0 && d == 1 ? sb(c, b) : (f ? ((d = f), d.next == c.J && (c.J = d), (d.next = d.next.next)) : tb(c), ub(c, e, 3, b)))
        }
        a.s = null
      } else Q(a, 3, b)
    }
  }
  var wb = function (a, b) {
    a.w || (a.l != 2 && a.l != 3) || vb(a)
    a.J ? (a.J.next = b) : (a.w = b)
    a.J = b
  }
  var rb = function (a, b, c, d) {
    var e = pb(null, null, null)
    e.F = new S(function (f, k) {
      e.Z = b
        ? function (q) {
          try {
            var r = b.call(d, q)
            f(r)
          } catch (M) {
            k(M)
          }
        }
        : f
      e.R = c
        ? function (q) {
          try {
            var r = c.call(d, q)
            !l(r) && q instanceof R ? k(q) : f(r)
          } catch (M) {
            k(M)
          }
        }
        : k
    })
    e.F.s = a
    wb(a, e)
    return e.F
  }
  S.prototype.lc = function (a) {
    this.l = 0
    Q(this, 2, a)
  }
  S.prototype.mc = function (a) {
    this.l = 0
    Q(this, 3, a)
  }
  var Q = function (a, b, c) {
    if (a.l == 0) {
      a === c && ((b = 3), (c = new TypeError('Promise cannot resolve to itself')))
      a.l = 1
      a: {
        var d = c
        var e = a.lc
        var f = a.mc
        if (d instanceof S) {
          wb(d, pb(e || m, f || null, a))
          var k = !0
        } else {
          if (d) {
            try {
              var q = !!d.$goog_Thenable
            } catch (M) {
              q = !1
            }
          } else q = !1
          if (q) d.then(e, f, a), (k = !0)
          else {
            if (ba(d)) {
              try {
                var r = d.then
                if (p(r)) {
                  xb(d, r, e, f, a)
                  k = !0
                  break a
                }
              } catch (M) {
                f.call(a, M)
                k = !0
                break a
              }
            }
            k = !1
          }
        }
      }
      k || ((a.jb = c), (a.l = b), (a.s = null), vb(a), b != 3 || c instanceof R || yb(a, c))
    }
  }
  var xb = function (a, b, c, d, e) {
    var f = !1
    var k = function (r) {
      f || ((f = !0), c.call(e, r))
    }
    var q = function (r) {
      f || ((f = !0), d.call(e, r))
    }
    try {
      b.call(a, k, q)
    } catch (r) {
      q(r)
    }
  }
  var vb = function (a) {
    a.wa || ((a.wa = !0), lb(a.Ab, a))
  }
  var tb = function (a) {
    var b = null
    a.w && ((b = a.w), (a.w = b.next), (b.next = null))
    a.w || (a.J = null)
    return b
  }
  S.prototype.Ab = function () {
    for (var a; (a = tb(this));) ub(this, a, this.l, this.jb)
    this.wa = !1
  }
  var ub = function (a, b, c, d) {
    if (c == 3 && b.R && !b.ca) for (; a && a.ga; a = a.s) a.ga = !1
    if (b.F) (b.F.s = null), zb(b, c, d)
    else {
      try {
        b.ca ? b.Z.call(b.context) : zb(b, c, d)
      } catch (e) {
        Ab.call(null, e)
      }
    }
    ob.put(b)
  }
  var zb = function (a, b, c) {
    b == 2 ? a.Z.call(a.context, c) : a.R && a.R.call(a.context, c)
  }
  var yb = function (a, b) {
    a.ga = !0
    lb(function () {
      a.ga && Ab.call(null, b)
    })
  }
  var Ab = bb
  var R = function (a) {
    w.call(this, a)
  }
  v(R, w)
  R.prototype.name = 'cancel'
  var qb = function (a, b, c) {
    this.T = a
    this.resolve = b
    this.reject = c
  }
  var U = function () {
    this.da = this.da
    this.la = this.la
  }
  U.prototype.da = !1
  U.prototype.ua = function () {
    this.da || ((this.da = !0), this.va())
  }
  U.prototype.va = function () {
    if (this.la) for (; this.la.length;) this.la.shift()()
  }
  var Bb = function (a, b, c) {
    U.call(this)
    this.Pb = c != null ? t(a, c) : a
    this.Nb = b
    this.wb = t(this.Xb, this)
    this.ra = []
  }
  v(Bb, U)
  g = Bb.prototype
  g.U = !1
  g.$ = 0
  g.I = null
  g.Db = function (a) {
    this.ra = arguments
    this.I || this.$ ? (this.U = !0) : Cb(this)
  }
  g.stop = function () {
    this.I && (h.clearTimeout(this.I), (this.I = null), (this.U = !1), (this.ra = []))
  }
  g.pause = function () {
    this.$++
  }
  g.resume = function () {
    this.$--
    this.$ || !this.U || this.I || ((this.U = !1), Cb(this))
  }
  g.va = function () {
    Bb.kc.va.call(this)
    this.stop()
  }
  g.Xb = function () {
    this.I = null
    this.U && !this.$ && ((this.U = !1), Cb(this))
  }
  var Cb = function (a) {
    var b = a.wb
    var c = a.Nb
    if (!p(b)) {
      if (b && typeof b.handleEvent === 'function') b = t(b.handleEvent, b)
      else throw Error('Invalid listener argument')
    }
    b = Number(c) > 2147483647 ? -1 : h.setTimeout(b, c || 0)
    a.I = b
    a.Pb.apply(null, a.ra)
  }
  var Db = function (a) {
    a.controller = this
    this.g = a
    this.C = this.j = this.h = null
    this.gb = this.Wb.bind(this)
    this.O = this.Tb.bind(this)
    this.P = this.Ub.bind(this)
    this.v = 0
    this.nc = new Bb(this.Bb, 200, this)
  }
  g = Db.prototype
  g.Ia = function () {
    this.j && (this.v++, (this.g.isPaused = !this.g.isPaused), this.g.isPaused ? this.j.pause(null, this.P, this.O) : this.j.play(null, this.P, this.O))
  }
  g.stop = function () {
    this.j && (this.v++, this.j.stop(null, this.P, this.O))
  }
  g.seek = function () {
    if (this.j) {
      this.C && (clearTimeout(this.C), (this.C = null))
      this.v++
      var a = new chrome.cast.media.SeekRequest()
      a.currentTime = this.g.currentTime
      this.j.seek(a, this.P, this.O)
    }
  }
  g.Ga = function () {
    this.h && (this.v++, (this.g.isMuted = !this.g.isMuted), this.h.setReceiverMuted(this.g.isMuted, this.P, this.O))
  }
  g.Qa = function () {
    this.nc.Db()
  }
  g.Bb = function () {
    this.h && (this.v++, this.h.setReceiverVolumeLevel(this.g.volumeLevel, this.P, this.O))
  }
  g.Ub = function () {
    this.v--
    this.D()
  }
  g.Tb = function () {
    this.v--
    this.j && this.j.getStatus(null, m, m)
  }
  g.Wb = function () {
    this.j &&
        (typeof this.j.getEstimatedBreakTime === 'function' && (this.g.currentBreakTime = this.j.getEstimatedBreakTime()),
        typeof this.j.getEstimatedBreakClipTime === 'function' && (this.g.currentBreakTime = this.j.getEstimatedBreakClipTime()),
        (this.g.currentTime = this.j.getEstimatedTime()),
        (this.C = setTimeout(this.gb, 1e3)))
  }
  g.D = function (a) {
    if (!(this.v > 0)) {
      if (this.h) {
        this.g.displayName = this.h.displayName || ''
        var b = this.h.statusText || ''
        this.g.displayStatus = b != this.g.displayName ? b : ''
        !a && this.h.receiver && (a = this.h.receiver.volume) && (a.muted != null && (this.g.isMuted = a.muted), a.level != null && (this.g.volumeLevel = a.level), (this.g.canControlVolume = a.controlType != 'fixed'))
        if (this.j) {
          a = this.j.breakStatus
          b = this.j
          if (Eb(a)) {
            const e = Fb(a, b.media)
            const f = Gb(a, b.media)
            this.g.isPlayingBreak = !0
            var c = this.g
            var d = (d = e) && n(d.breakClipIds) == 'array' ? d.breakClipIds.length : 0
            c.numberBreakClips = d
            e && f ? ((c = e.breakClipIds.indexOf(f.id)), (c = c < 0 ? 0 : c)) : (c = 0)
            this.g.currentBreakClipNumber = c
            this.g.currentBreakTime = typeof b.getEstimatedBreakTime === 'function' ? b.getEstimatedBreakTime() : a.currentBreakTime
            this.g.currentBreakClipTime = typeof b.getEstimatedBreakClipTime === 'function' ? b.getEstimatedBreakClipTime() : a.currentBreakClipTime
            this.g.breakId = a.breakId
            this.g.breakClipId = a.breakClipId
            this.g.whenSkippable = a.whenSkippable
          } else {
            (this.g.isPlayingBreak = !1),
            (this.g.numberBreakClips = 0),
            (this.g.currentBreakClipNumber = 0),
            (this.g.currentBreakTime = void 0),
            (this.g.currentBreakClipTime = void 0),
            (this.g.breakId = void 0),
            (this.g.breakClipId = void 0),
            (this.g.whenSkippable = void 0)
          }
          this.g.isMediaLoaded = b.playerState != chrome.cast.media.PlayerState.IDLE
          this.g.isPaused = b.playerState == chrome.cast.media.PlayerState.PAUSED
          this.g.canPause = b.supportedMediaCommands.indexOf(chrome.cast.media.MediaCommand.PAUSE) >= 0
          this.ba(b.media)
          this.g.canSeek = Eb(a) && (void 0 == a.whenSkippable || a.whenSkippable < 0 || a.currentBreakClipTime < a.whenSkippable) ? !1 : b.supportedMediaCommands.indexOf(chrome.cast.media.MediaCommand.SEEK) >= 0 && this.g.duration != 0
          this.g.currentTime = b.getEstimatedTime()
          this.C && (clearTimeout(this.C), (this.C = null))
          b.playerState == chrome.cast.media.PlayerState.PLAYING && (this.C = setTimeout(this.gb, 1e3))
        } else this.ba(null)
      } else (this.g.displayName = ''), (this.g.displayStatus = ''), this.ba(null)
    }
  }
  g.ba = function (a) {
    a
      ? ((this.g.duration = a.duration || 0), a.metadata && a.metadata.title && (this.g.displayStatus = a.metadata.title))
      : ((this.g.isMediaLoaded = !1),
      (this.g.canPause = !1),
      (this.g.canSeek = !1),
      (this.g.currentTime = 0),
      (this.g.duration = 0),
      (this.g.isPlayingBreak = !1),
      (this.g.numberBreakClips = 0),
      (this.g.currentBreakClipNumber = 0),
      (this.g.currentBreakTime = void 0),
      (this.g.currentBreakClipTime = void 0),
      (this.g.breakId = void 0),
      (this.g.breakClipId = void 0),
      (this.g.whenSkippable = void 0))
  }
  var Hb = function (a) {
    if (!a.j) {
      for (var b = 0, c = a.h.media; b < c.length; b++) {
        if (!c[b].idleReason) {
          a.j = c[b]
          a.j.addUpdateListener(a.Qb.bind(a))
          break
        }
      }
    }
  }
  var Ib = function (a, b) {
    a.h = b
    b.addMediaListener(a.cb.bind(a))
    b.addUpdateListener(a.Oa.bind(a))
    Hb(a)
    a.D()
  }
  g = Db.prototype
  g.Oa = function (a) {
    a || (this.j = this.h = null)
    this.D()
  }
  g.cb = function () {
    Hb(this)
    this.D(!0)
  }
  g.Qb = function (a) {
    a || (this.j = null)
    this.D(!0)
  }
  g.Aa = function (a, b) {
    return b ? (100 * a) / b : 0
  }
  g.Ba = function (a, b) {
    return b ? (a * b) / 100 : 0
  }
  g.ya = function (a) {
    return a < 0 ? '' : [('0' + Math.floor(a / 3600)).substr(-2), ('0' + (Math.floor(a / 60) % 60)).substr(-2), ('0' + (Math.floor(a) % 60)).substr(-2)].join(':')
  }
  var Fb = function (a, b) {
    return Eb(a) ? ((b && b.breaks) || []).find((c) => c.id === a.breakId) || null : null
  }
  var Gb = function (a, b) {
    return Eb(a) ? ((b && b.breakClips) || []).find((c) => c.id === a.breakClipId) || null : null
  }
  var Eb = function (a) {
    return !!a && l(a.currentBreakClipTime) && l(a.breakClipId)
  } /*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
  var Jb = (function (a) {
    function b (c) {
      this.content = c
    }
    b.prototype = a.prototype
    return function (c, d) {
      c = new b(String(c))
      void 0 !== d && (c.Ua = d)
      return c
    }
  })(Ya)
  var Kb = {
    '\x00': '&#0;',
    '\t': '&#9;',
    '\n': '&#10;',
    '\x0B': '&#11;',
    '\f': '&#12;',
    '\r': '&#13;',
    ' ': '&#32;',
    '"': '&quot;',
    '&': '&amp;',
    "'": '&#39;',
    '-': '&#45;',
    '/': '&#47;',
    '<': '&lt;',
    '=': '&#61;',
    '>': '&gt;',
    '`': '&#96;',
    '\u0085': '&#133;',
    '\u00a0': '&#160;',
    '\u2028': '&#8232;',
    '\u2029': '&#8233;'
  }
  var Lb = function (a) {
    return Kb[a]
  }
  var Mb = /[\x00\x22\x27\x3c\x3e]/g
  var Nb = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g
  var Ob = /</g
  var Za = function (a, b) {
    (a = (a = b || a) && a.oc)
      ? (a != null && a.Va === Xa ? ((a = a.getContent()), (a = String(a).replace(Nb, '').replace(Ob, '&lt;')), (a = String(a).replace(Mb, Lb))) : ((a = String(a)), (a = oa(a, void 0))), (a = ' nonce="' + a + '"'))
      : (a = '')
    return Jb(
      '<style' +
            a +
            '>.cast_caf_state_c {fill: var(--connected-color, #4285f4);}.cast_caf_state_d {fill: var(--disconnected-color, #7d7d7d);}.cast_caf_state_h {opacity: 0;}</style><svg x="0px" y="0px" width="100%" height="100%" viewBox="0 0 24 24"><g><path id="cast_caf_icon_arch0" class="cast_caf_status_d" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path id="cast_caf_icon_arch1" class="cast_caf_status_d" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path id="cast_caf_icon_arch2" class="cast_caf_status_d" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path id="cast_caf_icon_box" class="cast_caf_status_d" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path id="cast_caf_icon_boxfill" class="cast_caf_state_h" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>'
    )
  }
  Za.qc = 'cast.framework.CastButtonTemplate.icon'
  u('cast.framework.VERSION', '1.0.10')
  u('cast.framework.LoggerLevel', { DEBUG: 0, INFO: 800, WARNING: 900, ERROR: 1e3, NONE: 1500 })
  u('cast.framework.CastState', { NO_DEVICES_AVAILABLE: 'NO_DEVICES_AVAILABLE', NOT_CONNECTED: 'NOT_CONNECTED', CONNECTING: 'CONNECTING', CONNECTED: 'CONNECTED' })
  u('cast.framework.SessionState', {
    NO_SESSION: 'NO_SESSION',
    SESSION_STARTING: 'SESSION_STARTING',
    SESSION_STARTED: 'SESSION_STARTED',
    SESSION_START_FAILED: 'SESSION_START_FAILED',
    SESSION_ENDING: 'SESSION_ENDING',
    SESSION_ENDED: 'SESSION_ENDED',
    SESSION_RESUMED: 'SESSION_RESUMED'
  })
  u('cast.framework.CastContextEventType', { CAST_STATE_CHANGED: 'caststatechanged', SESSION_STATE_CHANGED: 'sessionstatechanged' })
  u('cast.framework.SessionEventType', {
    APPLICATION_STATUS_CHANGED: 'applicationstatuschanged',
    APPLICATION_METADATA_CHANGED: 'applicationmetadatachanged',
    ACTIVE_INPUT_STATE_CHANGED: 'activeinputstatechanged',
    VOLUME_CHANGED: 'volumechanged',
    MEDIA_SESSION: 'mediasession'
  })
  u('cast.framework.RemotePlayerEventType', {
    ANY_CHANGE: 'anyChanged',
    IS_CONNECTED_CHANGED: 'isConnectedChanged',
    IS_MEDIA_LOADED_CHANGED: 'isMediaLoadedChanged',
    QUEUE_DATA_CHANGED: 'queueDataChanged',
    VIDEO_INFO_CHANGED: 'videoInfoChanged',
    DURATION_CHANGED: 'durationChanged',
    CURRENT_TIME_CHANGED: 'currentTimeChanged',
    IS_PAUSED_CHANGED: 'isPausedChanged',
    VOLUME_LEVEL_CHANGED: 'volumeLevelChanged',
    CAN_CONTROL_VOLUME_CHANGED: 'canControlVolumeChanged',
    IS_MUTED_CHANGED: 'isMutedChanged',
    CAN_PAUSE_CHANGED: 'canPauseChanged',
    CAN_SEEK_CHANGED: 'canSeekChanged',
    DISPLAY_NAME_CHANGED: 'displayNameChanged',
    STATUS_TEXT_CHANGED: 'statusTextChanged',
    TITLE_CHANGED: 'titleChanged',
    DISPLAY_STATUS_CHANGED: 'displayStatusChanged',
    MEDIA_INFO_CHANGED: 'mediaInfoChanged',
    IMAGE_URL_CHANGED: 'imageUrlChanged',
    PLAYER_STATE_CHANGED: 'playerStateChanged',
    IS_PLAYING_BREAK_CHANGED: 'isPlayingBreakChanged',
    NUMBER_BREAK_CLIPS_CHANGED: 'numberBreakClipsChanged',
    CURRENT_BREAK_CLIP_NUMBER_CHANGED: 'currentBreakClipNumberChanged',
    CURRENT_BREAK_TIME_CHANGED: 'currentBreakTimeChanged',
    CURRENT_BREAK_CLIP_TIME_CHANGED: 'currentBreakClipTimeChanged',
    BREAK_ID_CHANGED: 'breakIdChanged',
    BREAK_CLIP_ID_CHANGED: 'breakClipIdChanged',
    WHEN_SKIPPABLE_CHANGED: 'whenSkippableChanged',
    LIVE_SEEKABLE_RANGE_CHANGED: 'liveSeekableRangeChanged'
  })
  u('cast.framework.ActiveInputState', { ACTIVE_INPUT_STATE_UNKNOWN: -1, ACTIVE_INPUT_STATE_NO: 0, ACTIVE_INPUT_STATE_YES: 1 })
  var Pb = function (a) {
    Ka().Pa(Ga(a))
  }
  u('cast.framework.setLoggerLevel', Pb)
  Wa || (Wa = new Ta())
  if (Wa) {
    var Qb = Wa
    if (Qb.ab != 1) {
      var Rb = Ka()
      var Sb = Qb.Zb
      Rb.X || (Rb.X = [])
      Rb.X.push(Sb)
      Qb.ab = !0
    }
  }
  Pb(1e3)
  var V = class {
    constructor (a) {
      this.type = a
    }
  }
  u('cast.framework.EventData', V)
  var Tb = class extends V {
    constructor (a) {
      super('activeinputstatechanged')
      this.activeInputState = a
    }
  }
  u('cast.framework.ActiveInputStateEventData', Tb)
  var Ub = class {
    constructor (a) {
      this.applicationId = a.appId
      this.name = a.displayName
      this.images = a.appImages
      this.namespaces = this.Ha(a.namespaces || [])
    }

    Ha (a) {
      return a.map((b) => b.name)
    }
  }
  u('cast.framework.ApplicationMetadata', Ub)
  var Vb = class extends V {
    constructor (a) {
      super('applicationmetadatachanged')
      this.metadata = a
    }
  }
  u('cast.framework.ApplicationMetadataEventData', Vb)
  var Wb = class extends V {
    constructor (a) {
      super('applicationstatuschanged')
      this.status = a
    }
  }
  u('cast.framework.ApplicationStatusEventData', Wb)
  const Xb = La('cast.framework.EventTarget')
  var Yb = class {
    constructor () {
      this.Y = {}
    }

    addEventListener (a, b) {
      a in this.Y || (this.Y[a] = [])
      a = this.Y[a]
      a.includes(b) || a.push(b)
    }

    removeEventListener (a, b) {
      a = this.Y[a] || []
      b = a.indexOf(b)
      b >= 0 && a.splice(b, 1)
    }

    dispatchEvent (a) {
      a &&
            a.type &&
            (this.Y[a.type] || []).slice().forEach((b) => {
              try {
                b(a)
              } catch (c) {
                Xb && Xb.log(Ba, 'Handler for ' + a.type + ' event failed: ' + c, c)
              }
            })
    }
  }
  var Zb = class {
    constructor (a) {
      a = a || {}
      this.receiverApplicationId = a.receiverApplicationId || null
      this.resumeSavedSession = l(a.resumeSavedSession) ? a.resumeSavedSession : !0
      this.autoJoinPolicy = l(a.autoJoinPolicy) ? a.autoJoinPolicy : chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED
      this.language = a.language || null
    }
  }
  u('cast.framework.CastOptions', Zb)
  var $b = class extends V {
    constructor (a) {
      super('mediasession')
      this.mediaSession = a
    }
  }
  u('cast.framework.MediaSessionEventData', $b)
  var ac = class extends V {
    constructor (a, b) {
      super('volumechanged')
      this.volume = a
      this.isMute = b
    }
  }
  u('cast.framework.VolumeEventData', ac)
  var bc = function (a) {
    const b = a.i.loadMedia.bind(a.i)
    a.i.loadMedia = (d, e, f) => {
      b(
        d,
        (k) => {
          e && e(k)
          a.Fa(k)
        },
        f
      )
    }
    const c = a.i.queueLoad.bind(a.i)
    a.i.queueLoad = (d, e, f) => {
      c(
        d,
        (k) => {
          e && e(k)
          a.Fa(k)
        },
        f
      )
    }
  }
  var cc = function (a, b) {
    a.hb = b
    !b.volume || (a.o && a.o.muted == b.volume.muted && a.o.level == b.volume.level) || ((a.o = b.volume), a.m.dispatchEvent(new ac(a.o.level, a.o.muted)))
    a.ia != b.isActiveInput && ((a.ia = b.isActiveInput), (b = a.ia), a.m.dispatchEvent(new Tb(b == null ? -1 : b ? 1 : 0)))
  }
  var W = class {
    constructor (a, b) {
      this.m = new Yb()
      this.l = b
      this.i = a
      this.kb = a.sessionId
      this.aa = a.statusText
      this.hb = a.receiver
      this.o = a.receiver.volume
      this.ja = new Ub(a)
      this.ia = a.receiver.isActiveInput
      this.i.addMediaListener(this.Fa.bind(this))
      bc(this)
    }

    addEventListener (a, b) {
      this.m.addEventListener(a, b)
    }

    removeEventListener (a, b) {
      this.m.removeEventListener(a, b)
    }

    Lb () {
      return this.i
    }

    Kb () {
      return this.kb
    }

    Ca () {
      return this.l
    }

    Hb () {
      return this.hb
    }

    Fb () {
      return this.ja
    }

    Gb () {
      return this.aa
    }

    Eb () {
      var a = this.ia
      return a == null ? -1 : a ? 1 : 0
    }

    Ya (a) {
      this.l != 'SESSION_ENDED' && (a ? this.i.stop(m, m) : this.i.leave(m, m))
    }

    setVolume (a) {
      const b = T()
      const c = Promise.resolve(b.T)
      this.o && ((this.o.level = a), (this.o.muted = !1))
      this.i.setReceiverVolumeLevel(
        a,
        () => b.resolve(),
        (d) => b.reject(d.code)
      )
      return c
    }

    Mb () {
      return this.o ? this.o.level : null
    }

    dc (a) {
      const b = T()
      const c = Promise.resolve(b.T)
      this.o && (this.o.muted = a)
      this.i.setReceiverMuted(
        a,
        () => b.resolve(),
        (d) => b.reject(d.code)
      )
      return c
    }

    isMute () {
      return this.o ? this.o.muted : null
    }

    sendMessage (a, b) {
      const c = T()
      const d = Promise.resolve(c.T)
      this.i.sendMessage(
        a,
        b,
        () => c.resolve(),
        (e) => c.reject(e.code)
      )
      return d
    }

    addMessageListener (a, b) {
      this.i.addMessageListener(a, b)
    }

    removeMessageListener (a, b) {
      this.i.removeMessageListener(a, b)
    }

    loadMedia (a) {
      const b = T()
      const c = Promise.resolve(b.T)
      this.i.loadMedia(
        a,
        () => {
          b.resolve()
        },
        (d) => {
          b.reject(d.code)
        }
      )
      return c
    }

    za () {
      a: {
        var a = this.i
        if (a.media) {
          for (const b of a.media) {
            if (!b.idleReason) {
              a = b
              break a
            }
          }
        }
        a = null
      }
      return a
    }

    Fa (a) {
      a.media && this.m.dispatchEvent(new $b(a))
    }

    Ha (a) {
      return a.map((b, c) => c.name)
    }
  }
  u('cast.framework.CastSession', W)
  W.prototype.getMediaSession = W.prototype.za
  W.prototype.loadMedia = W.prototype.loadMedia
  W.prototype.removeMessageListener = W.prototype.removeMessageListener
  W.prototype.addMessageListener = W.prototype.addMessageListener
  W.prototype.sendMessage = W.prototype.sendMessage
  W.prototype.isMute = W.prototype.isMute
  W.prototype.setMute = W.prototype.dc
  W.prototype.getVolume = W.prototype.Mb
  W.prototype.setVolume = W.prototype.setVolume
  W.prototype.endSession = W.prototype.Ya
  W.prototype.getActiveInputState = W.prototype.Eb
  W.prototype.getApplicationStatus = W.prototype.Gb
  W.prototype.getApplicationMetadata = W.prototype.Fb
  W.prototype.getCastDevice = W.prototype.Hb
  W.prototype.getSessionState = W.prototype.Ca
  W.prototype.getSessionId = W.prototype.Kb
  W.prototype.getSessionObj = W.prototype.Lb
  W.prototype.removeEventListener = W.prototype.removeEventListener
  W.prototype.addEventListener = W.prototype.addEventListener
  var dc = class extends V {
    constructor (a) {
      super('caststatechanged')
      this.castState = a
    }
  }
  u('cast.framework.CastStateEventData', dc)
  var ec = class extends V {
    constructor (a, b, c) {
      super('sessionstatechanged')
      this.session = a
      this.sessionState = b
      this.errorCode = l(c) ? c : null
    }
  }
  u('cast.framework.SessionStateEventData', ec)
  const Ma = La('cast.framework.CastContext')
  var fc = function (a) {
    let b = 'NO_DEVICES_AVAILABLE'
    switch (a.u) {
      case 'SESSION_STARTING':
      case 'SESSION_ENDING':
        b = 'CONNECTING'
        break
      case 'SESSION_STARTED':
      case 'SESSION_RESUMED':
        b = 'CONNECTED'
        break
      case 'NO_SESSION':
      case 'SESSION_ENDED':
      case 'SESSION_START_FAILED':
        b = a.Na ? 'NOT_CONNECTED' : 'NO_DEVICES_AVAILABLE'
        break
      default:
        N('Unexpected session state: ' + a.u)
    }
    b !== a.W && ((a.W = b), a.m.dispatchEvent(new dc(b)))
  }
  var X = function (a, b, c) {
    b == a.u ? b == 'SESSION_START_FAILED' && a.m.dispatchEvent(new ec(a.h, a.u, c)) : ((a.u = b), a.h && (a.h.l = a.u), a.m.dispatchEvent(new ec(a.h, a.u, c)), fc(a))
  }
  var Y = class {
    constructor () {
      this.m = new Yb()
      this.Ea = !1
      this.B = null
      this.Na = !1
      this.W = 'NO_DEVICES_AVAILABLE'
      this.u = 'NO_SESSION'
      this.oa = this.h = null
    }

    addEventListener (a, b) {
      this.m.addEventListener(a, b)
    }

    removeEventListener (a, b) {
      this.m.removeEventListener(a, b)
    }

    ec (a) {
      if (this.Ea) N('CastContext already initialized, new options are ignored')
      else {
        this.B = new Zb(a)
        if (!this.B || !this.B.receiverApplicationId) throw Error('Missing application id in cast options')
        a = new chrome.cast.SessionRequest(this.B.receiverApplicationId)
        this.B.language && (a.language = this.B.language)
        a = new chrome.cast.ApiConfig(a, this.lb.bind(this), this.ac.bind(this), this.B.autoJoinPolicy)
        chrome.cast.initialize(a, m, m)
        chrome.cast.addReceiverActionListener(this.$b.bind(this))
        this.Ea = !0
      }
    }

    Ib () {
      return this.W
    }

    Ca () {
      return this.u
    }

    requestSession () {
      if (!this.Ea) throw Error('Cannot start session before cast options are provided')
      const a = T()
      const b = Promise.resolve(a.T)
      rb(a.T, null, m, void 0)
      b.catch(m)
      const c = this.W == 'NOT_CONNECTED'
      chrome.cast.requestSession(
        (d) => {
          this.lb(d)
          a.resolve(null)
        },
        (d) => {
          c && X(this, 'SESSION_START_FAILED', d ? d.code : void 0)
          a.reject(d.code)
        }
      )
      return b
    }

    Jb () {
      return this.h
    }

    zb (a) {
      this.h && this.h.Ya(a)
    }

    ac (a) {
      (this.Na = a == chrome.cast.ReceiverAvailability.AVAILABLE) && !this.h && this.oa && this.B.resumeSavedSession && chrome.cast.requestSessionById(this.oa)
      fc(this)
    }

    $b (a, b) {
      this.h || b != chrome.cast.ReceiverAction.CAST ? (this.h && b == chrome.cast.ReceiverAction.STOP ? X(this, 'SESSION_ENDING') : a && cc(this.h, a)) : X(this, 'SESSION_STARTING')
    }

    lb (a) {
      const b = this.u == 'SESSION_STARTING' ? 'SESSION_STARTED' : 'SESSION_RESUMED'
      this.oa = null
      this.h = new W(a, b)
      a.addUpdateListener(this.Oa.bind(this))
      X(this, b)
    }

    Oa () {
      if (this.h) {
        switch (this.h.i.status) {
          case chrome.cast.SessionStatus.DISCONNECTED:
          case chrome.cast.SessionStatus.STOPPED:
            X(this, 'SESSION_ENDED')
            this.oa = this.h.kb
            this.h = null
            break
          case chrome.cast.SessionStatus.CONNECTED:
            var a = this.h
            var b = a.ja
            var c = a.i
            var d
            if ((d = b.applicationId == c.appId && b.name == c.displayName)) {
              a: if (((d = b.namespaces), (b = b.Ha(c.namespaces || [])), aa(d) && aa(b) && d.length == b.length)) {
                c = d.length
                for (var e = 0; e < c; e++) {
                  if (d[e] !== b[e]) {
                    d = !1
                    break a
                  }
                }
                d = !0
              } else d = !1
            }
            d || ((a.ja = new Ub(a.i)), a.m.dispatchEvent(new Vb(a.ja)))
            cc(a, a.i.receiver)
            a.aa != a.i.statusText && ((a.aa = a.i.statusText), a.m.dispatchEvent(new Wb(a.aa)))
            break
          default:
            N('Unknown session status ' + this.h.i.status)
        }
      } else N('Received session update event without known session')
    }
  }
  u('cast.framework.CastContext', Y)
  Y.prototype.endCurrentSession = Y.prototype.zb
  Y.prototype.getCurrentSession = Y.prototype.Jb
  Y.prototype.requestSession = Y.prototype.requestSession
  Y.prototype.getSessionState = Y.prototype.Ca
  Y.prototype.getCastState = Y.prototype.Ib
  Y.prototype.setOptions = Y.prototype.ec
  Y.prototype.removeEventListener = Y.prototype.removeEventListener
  Y.prototype.addEventListener = Y.prototype.addEventListener
  Y.Da = void 0
  Y.L = function () {
    return Y.Da ? Y.Da : (Y.Da = new Y())
  }
  Y.getInstance = Y.L
  var gc = function () {
    Y.L().requestSession()
  }
  var hc = function (a, b) {
    a.setAttribute('class', b ? 'cast_caf_state_c' : 'cast_caf_state_d')
  }
  var jc = function (a) {
    if (a.l == 'NO_DEVICES_AVAILABLE') a.K.style.display = 'none'
    else {
      switch (((a.K.style.display = a.yb), a.l)) {
        case 'NOT_CONNECTED':
          ic(a, !1, 'cast_caf_state_h')
          break
        case 'CONNECTING':
          ic(a, !1, 'cast_caf_state_h')
          a.S || a.Xa()
          break
        case 'CONNECTED':
          ic(a, !0, 'cast_caf_state_c')
      }
    }
  }
  var kc = function (a, b) {
    a.ta = Y.L()
    a.fb = a.Vb.bind(a)
    a.qa = []
    for (let c = 0; c < 3; c++) a.qa.push(b.querySelector('#cast_caf_icon_arch' + c))
    a.ub = b.querySelector('#cast_caf_icon_box')
    a.vb = b.querySelector('#cast_caf_icon_boxfill')
    a.Ma = 0
    a.S = null
    a.yb = window.getComputedStyle(a.K, null).display
    a.l = a.ta.W
    jc(a)
    a.K.addEventListener('click', gc)
    a.ta.addEventListener('caststatechanged', a.fb)
  }
  var lc = function (a) {
    a.ta.removeEventListener('caststatechanged', a.fb)
    a.S !== null && (window.clearTimeout(a.S), (a.S = null))
  }
  var ic = function (a, b, c) {
    for (const d of a.qa) hc(d, b)
    hc(a.ub, b)
    a.vb.setAttribute('class', c)
  }
  const mc = class {
    constructor (a) {
      this.K = a
      try {
        this.K.attachShadow({ mode: 'open' }).innerHTML = Za().getContent()
      } catch (c) {
        a = this.K
        var b = $a()
        if (ya()) for (; a.lastChild;) a.removeChild(a.lastChild)
        a.innerHTML = va(b)
      }
    }

    Vb (a) {
      this.l = a.castState
      jc(this)
    }

    Xa () {
      this.S = null
      if (this.l == 'CONNECTING') {
        for (let a = 0; a < 3; a++) hc(this.qa[a], a == this.Ma)
        this.Ma = (this.Ma + 1) % 3
        this.S = window.setTimeout(this.Xa.bind(this), 300)
      }
    }
  }
  const nc = class extends HTMLElement {
    constructor () {
      super()
      this.A = new mc(this)
    }

    connectedCallback () {
      kc(this.A, this.shadowRoot || this)
    }

    disconnectedCallback () {
      lc(this.A)
    }

    ua () {}
  }
  const oc = class extends HTMLButtonElement {
    constructor () {
      super()
      this.A = new mc(this)
    }

    connectedCallback () {
      kc(this.A, this.shadowRoot || this)
    }

    disconnectedCallback () {
      lc(this.A)
    }

    ua () {}
  }
  var qc = function () {
    const a = document.createElement.bind(document)
    document.createElement = function (b, c) {
      if (b === 'google-cast-launcher' || (b === 'button' && c && (c === 'google-cast-button' || c.is === 'google-cast-button'))) {
        const d = a(b, c)
        pc(d)
        return d
      }
      return a(...arguments)
    }
  }
  var rc = function () {
    document.querySelectorAll('button[is=google-cast-button], google-cast-launcher').forEach((a) => pc(a))
  }
  var pc = function (a) {
    a.A = new mc(a)
    kc(a.A, a.shadowRoot || a)
    a.ua = function () {
      lc(a.A)
    }
  }
  customElements.define ? (customElements.define('google-cast-button', oc, { extends: 'button' }), customElements.define('google-cast-launcher', nc)) : (document.readyState !== 'complete' ? window.addEventListener('load', rc) : rc(), qc())
  u(
    'cast.framework.RemotePlayer',
    class {
      constructor () {
        this.isMediaLoaded = this.isConnected = !1
        this.videoInfo = this.queueData = void 0
        this.currentTime = this.duration = 0
        this.volumeLevel = 1
        this.canControlVolume = !0
        this.canSeek = this.canPause = this.isMuted = this.isPaused = !1
        this.displayStatus = this.title = this.statusText = this.displayName = ''
        this.controller = this.savedPlayerState = this.playerState = this.imageUrl = this.mediaInfo = null
        this.isPlayingBreak = !1
        this.currentBreakClipNumber = this.numberBreakClips = 0
        this.liveSeekableRange = this.whenSkippable = this.breakClipId = this.breakId = this.currentBreakClipTime = this.currentBreakTime = void 0
      }
    }
  )
  var sc = class extends V {
    constructor (a, b, c) {
      super(a)
      this.field = b
      this.value = c
    }
  }
  u('cast.framework.RemotePlayerChangedEvent', sc)
  var tc = function (a, b) {
    return new window.Proxy(a, {
      set: (c, d, e) => {
        if (e === c[d]) return !0
        c[d] = e
        b.dispatchEvent(new sc(d + 'Changed', d, e))
        b.dispatchEvent(new sc('anyChanged', d, e))
        return !0
      }
    })
  }
  var Z = class extends Db {
    constructor (a) {
      const b = new Yb()
      super(tc(a, b))
      this.m = b
      this.Sb = 0
      a = Y.L()
      a.addEventListener('sessionstatechanged', this.cc.bind(this));
      (a = a.h) ? Ib(this, a.i) : this.D()
    }

    addEventListener (a, b) {
      this.m.addEventListener(a, b)
    }

    removeEventListener (a, b) {
      this.m.removeEventListener(a, b)
    }

    cc (a) {
      switch (a.sessionState) {
        case 'SESSION_STARTED':
        case 'SESSION_RESUMED':
          this.g.isConnected = !0
          const b = a.session && a.session.i
          b && (Ib(this, b), a.session.addEventListener('mediasession', this.cb.bind(this)))
      }
    }

    D (a) {
      const b = Y.L().h
      b ? (this.g.savedPlayerState = null) : this.g.isConnected && (this.g.savedPlayerState = { mediaInfo: this.g.mediaInfo, currentTime: this.g.currentTime, isPaused: this.g.isPaused })
      super.D(a)
      this.g.isConnected = !!b
      this.g.statusText = (b && b.aa) || ''
      a = b && b.za()
      this.g.playerState = (a && a.playerState) || chrome.cast.media.PlayerState.IDLE
      a
        ? ((this.g.queueData = a.queueData), (this.g.videoInfo = a.videoInfo), (this.g.liveSeekableRange = typeof a.getEstimatedLiveSeekableRange === 'function' ? a.getEstimatedLiveSeekableRange() : a.liveSeekableRange))
        : ((this.g.queueData = void 0), (this.g.videoInfo = void 0), (this.g.liveSeekableRange = void 0))
    }

    ba (a) {
      super.ba(a)
      var b = (this.g.mediaInfo = a) && a.metadata
      a = null
      let c = ''
      b && ((c = b.title || ''), (b = b.images) && b.length > 0 && (a = b[0].url))
      this.g.title = c
      this.g.imageUrl = a
    }

    Ia () {
      super.Ia()
    }

    stop () {
      super.stop()
    }

    seek () {
      super.seek()
    }

    Ga () {
      super.Ga()
    }

    Qa () {
      super.Qa()
    }

    ya (a) {
      return super.ya(a)
    }

    Aa (a, b) {
      return super.Aa(a, b)
    }

    Ba (a, b) {
      return super.Ba(a, b)
    }

    ic () {
      const a = Y.L().h
      if (a) {
        var b = a.za()
        b && a && a.sendMessage('urn:x-cast:com.google.cast.media', { type: 'SKIP_AD', requestId: this.Sb++, mediaSessionId: b.mediaSessionId })
      }
    }
  }
  u('cast.framework.RemotePlayerController', Z)
  Z.prototype.skipAd = Z.prototype.ic
  Z.prototype.getSeekTime = Z.prototype.Ba
  Z.prototype.getSeekPosition = Z.prototype.Aa
  Z.prototype.getFormattedTime = Z.prototype.ya
  Z.prototype.setVolumeLevel = Z.prototype.Qa
  Z.prototype.muteOrUnmute = Z.prototype.Ga
  Z.prototype.seek = Z.prototype.seek
  Z.prototype.stop = Z.prototype.stop
  Z.prototype.playOrPause = Z.prototype.Ia
  Z.prototype.removeEventListener = Z.prototype.removeEventListener
  Z.prototype.addEventListener =
        Z.prototype.addEventListener /*

 Copyright 2018 The Incremental DOM Authors. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS-IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
  /*

   @license
   Copyright 2018 The Incremental DOM Authors. All Rights Reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS-IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
  */
}.call(window))
