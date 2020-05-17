/*! @name videojs-google-chromecast @version 0.0.4 @license UNLICENSED */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var videojs = _interopDefault(require('video.js'));
var _assertThisInitialized = _interopDefault(require('@babel/runtime/helpers/assertThisInitialized'));
var _wrapNativeSuper = _interopDefault(require('@babel/runtime/helpers/wrapNativeSuper'));
var _inheritsLoose = _interopDefault(require('@babel/runtime/helpers/inheritsLoose'));
var Mdns = _interopDefault(require('node-mdns-easy'));

var version = "0.0.4";

function _createForOfIteratorHelperLoose(o) { var i = 0; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } i = o[Symbol.iterator](); return i.next.bind(i); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Copyright Google Inc. All Rights Reserved.
(function () {

  var g,
      h = this || self,
      l = function l(a) {
    return void 0 !== a;
  },
      m = function m() {},
      n = function n(a) {
    var b = typeof a;
    if ("object" == b) {
      if (a) {
        if (a instanceof Array) return "array";
        if (a instanceof Object) return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c) return "object";
        if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
        if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function";
      } else return "null";
    } else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b;
  },
      aa = function aa(a) {
    var b = n(a);
    return "array" == b || "object" == b && "number" == typeof a.length;
  },
      p = function p(a) {
    return "function" == n(a);
  },
      ba = function ba(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b;
  },
      ca = function ca(a, b, c) {
    return a.call.apply(a.bind, arguments);
  },
      da = function da(a, b, c) {
    if (!a) throw Error();

    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      };
    }

    return function () {
      return a.apply(b, arguments);
    };
  },
      _t = function t(a, b, c) {
    _t = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ca : da;
    return _t.apply(null, arguments);
  },
      ea = Date.now || function () {
    return +new Date();
  },
      u = function u(a, b) {
    a = a.split(".");
    var c = h;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);

    for (var d; a.length && (d = a.shift());) {
      !a.length && l(b) ? c[d] = b : c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {};
    }
  },
      v = function v(a, b) {
    function c() {}

    c.prototype = b.prototype;
    a.kc = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
  };

  var w = function w(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, w);else {
      var b = Error().stack;
      b && (this.stack = b);
    }
    a && (this.message = String(a));
  };

  v(w, Error);
  w.prototype.name = "CustomError";

  var fa = function fa(a, b) {
    a = a.split("%s");

    for (var c = "", d = a.length - 1, e = 0; e < d; e++) {
      c += a[e] + (e < b.length ? b[e] : "%s");
    }

    w.call(this, c + a[d]);
  };

  v(fa, w);
  fa.prototype.name = "AssertionError";

  var x = function x(a, b) {
    throw new fa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
  };

  var oa = function oa(a, b) {
    if (b) a = a.replace(ha, "&amp;").replace(ia, "&lt;").replace(ja, "&gt;").replace(ka, "&quot;").replace(la, "&#39;").replace(ma, "&#0;");else {
      if (!na.test(a)) return a;
      -1 != a.indexOf("&") && (a = a.replace(ha, "&amp;"));
      -1 != a.indexOf("<") && (a = a.replace(ia, "&lt;"));
      -1 != a.indexOf(">") && (a = a.replace(ja, "&gt;"));
      -1 != a.indexOf('"') && (a = a.replace(ka, "&quot;"));
      -1 != a.indexOf("'") && (a = a.replace(la, "&#39;"));
      -1 != a.indexOf("\x00") && (a = a.replace(ma, "&#0;"));
    }
    return a;
  },
      ha = /&/g,
      ia = /</g,
      ja = />/g,
      ka = /"/g,
      la = /'/g,
      ma = /\x00/g,
      na = /[\x00&<>"']/;

  var y;

  a: {
    var pa = h.navigator;

    if (pa) {
      var qa = pa.userAgent;

      if (qa) {
        y = qa;
        break a;
      }
    }

    y = "";
  }

  var z = function z(a, b) {
    this.Ra = a === ra && b || "";
    this.rb = sa;
  };

  z.prototype.N = !0;

  z.prototype.M = function () {
    return this.Ra;
  };

  z.prototype.toString = function () {
    return "Const{" + this.Ra + "}";
  };

  var sa = {},
      ra = {},
      A = new z(ra, "");

  var B = function B() {
    this.Ja = "";
  };

  B.prototype.N = !0;

  B.prototype.M = function () {
    return this.Ja.toString();
  };

  B.prototype.toString = function () {
    return "SafeScript{" + this.Ja + "}";
  };

  B.prototype.G = function (a) {
    this.Ja = a;
    return this;
  };

  new B().G("");

  var C = function C() {
    this.na = "";
    this.pb = null;
    this.sb = ta;
  };

  g = C.prototype;
  g.N = !0;

  g.M = function () {
    return this.na.toString();
  };

  g.$a = !0;

  g.Za = function () {
    return 1;
  };

  g.toString = function () {
    return "TrustedResourceUrl{" + this.na + "}";
  };

  var ta = {};

  var D = function D() {
    this.La = "";
  };

  D.prototype.N = !0;

  D.prototype.M = function () {
    return this.La;
  };

  D.prototype.toString = function () {
    return "SafeStyle{" + this.La + "}";
  };

  D.prototype.G = function (a) {
    this.La = a;
    return this;
  };

  new D().G("");

  var E = function E() {
    this.Ka = "";
  };

  E.prototype.N = !0;

  E.prototype.M = function () {
    return this.Ka;
  };

  E.prototype.toString = function () {
    return "SafeStyleSheet{" + this.Ka + "}";
  };

  E.prototype.G = function (a) {
    this.Ka = a;
    return this;
  };

  new E().G("");

  var F = function F() {
    this.ma = "";
    this.qb = ua;
    this.Wa = null;
  };

  g = F.prototype;
  g.$a = !0;

  g.Za = function () {
    return this.Wa;
  };

  g.N = !0;

  g.M = function () {
    return this.ma.toString();
  };

  g.toString = function () {
    return "SafeHtml{" + this.ma + "}";
  };

  var va = function va(a) {
    if (a instanceof F && a.constructor === F && a.qb === ua) return a.ma;
    x("expected object of type SafeHtml, got '" + a + "' of type " + n(a));
    return "type_error:SafeHtml";
  },
      wa = function wa(a) {
    if (a instanceof F) return a;
    var b = "object" == typeof a,
        c = null;
    b && a.$a && (c = a.Za());
    return G(oa(b && a.N ? a.M() : String(a)), c);
  },
      ua = {},
      G = function G(a, b) {
    return new F().G(a, b);
  };

  F.prototype.G = function (a, b) {
    this.ma = a;
    this.Wa = b;
    return this;
  };

  G("<!DOCTYPE html>", 0);
  var xa = G("", 0);
  G("<br>", 0);

  var ya = function (a) {
    var b = !1,
        c;
    return function () {
      b || (c = a(), b = !0);
      return c;
    };
  }(function () {
    if ("undefined" === typeof document) return !1;
    var a = document.createElement("div"),
        b = document.createElement("div");
    b.appendChild(document.createElement("div"));
    a.appendChild(b);
    if (!a.firstChild) return !1;
    b = a.firstChild.firstChild;
    a.innerHTML = va(xa);
    return !b.parentElement;
  }),
      za = function za(a) {
    if (A instanceof z && A.constructor === z && A.rb === sa) var b = A.Ra;else x("expected object of type Const, got '" + A + "'"), b = "type_error:Const";
    var c = new C();
    c.na = b;

    a: {
      try {
        var d = a && a.ownerDocument,
            e = d && (d.defaultView || d.parentWindow);
        e = e || h;

        if (e.Element && e.Location) {
          var f = e;
          break a;
        }
      } catch (q) {}

      f = null;
    }

    if (f && "undefined" != typeof f.HTMLIFrameElement && (!a || !(a instanceof f.HTMLIFrameElement) && (a instanceof f.Location || a instanceof f.Element))) {
      if (ba(a)) try {
        var k = a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a);
      } catch (q) {
        k = "<object could not be stringified>";
      } else k = void 0 === a ? "undefined" : null === a ? "null" : typeof a;
      x("Argument is not a %s (or a non-Element, non-Location mock); got: %s", "HTMLIFrameElement", k);
    }

    c.pb ? b = c.pb : (c instanceof C && c.constructor === C && c.sb === ta ? b = c.na : (x("expected object of type TrustedResourceUrl, got '" + c + "' of type " + n(c)), b = "type_error:TrustedResourceUrl"), b = b.toString());
    a.src = b;
  };

  var H = function H(a, b, c) {
    this.reset(a, b, c, void 0, void 0);
  };

  H.prototype.ea = null;

  H.prototype.reset = function (a, b, c, d, e) {
    this.ob = d || ea();
    this.H = a;
    this.Rb = b;
    this.bb = c;
    delete this.ea;
  };

  H.prototype.Pa = function (a) {
    this.H = a;
  };

  H.prototype.getMessage = function () {
    return this.Rb;
  };

  var I = function I(a) {
    this.eb = a;
    this.X = this.sa = this.H = this.s = null;
  },
      J = function J(a, b) {
    this.name = a;
    this.value = b;
  };

  J.prototype.toString = function () {
    return this.name;
  };

  var Ba = new J("SEVERE", 1e3),
      Ca = new J("WARNING", 900),
      Da = new J("INFO", 800),
      Ea = new J("CONFIG", 700),
      Fa = [new J("OFF", Infinity), new J("SHOUT", 1200), Ba, Ca, Da, Ea, new J("FINE", 500), new J("FINER", 400), new J("FINEST", 300), new J("ALL", 0)],
      K = null,
      Ga = function Ga(a) {
    if (!K) {
      K = {};

      for (var b = 0, c; c = Fa[b]; b++) {
        K[c.value] = c, K[c.name] = c;
      }
    }

    if (a in K) return K[a];

    for (b = 0; b < Fa.length; ++b) {
      if (c = Fa[b], c.value <= a) return c;
    }

    return null;
  };

  I.prototype.getName = function () {
    return this.eb;
  };

  I.prototype.getParent = function () {
    return this.s;
  };

  I.prototype.getChildren = function () {
    this.sa || (this.sa = {});
    return this.sa;
  };

  I.prototype.Pa = function (a) {
    this.H = a;
  };

  var Ha = function Ha(a) {
    if (a.H) return a.H;
    if (a.s) return Ha(a.s);
    x("Root logger has no level set.");
    return null;
  };

  I.prototype.log = function (a, b, c) {
    if (a.value >= Ha(this).value) for (p(b) && (b = b()), a = new H(a, String(b), this.eb), c && (a.ea = c), c = this; c;) {
      var d = c,
          e = a;
      if (d.X) for (var f = 0; b = d.X[f]; f++) {
        b(e);
      }
      c = c.getParent();
    }
  };

  I.prototype.info = function (a, b) {
    this.log(Da, a, b);
  };

  var Ia = {},
      L = null,
      Ja = function Ja() {
    L || (L = new I(""), Ia[""] = L, L.Pa(Ea));
  },
      Ka = function Ka() {
    Ja();
    return L;
  },
      La = function La(a) {
    Ja();
    var b;

    if (!(b = Ia[a])) {
      b = new I(a);
      var c = a.lastIndexOf("."),
          d = a.substr(c + 1);
      c = La(a.substr(0, c));
      c.getChildren()[d] = b;
      b.s = c;
      Ia[a] = b;
    }

    return b;
  };

  var N = function N(a) {
    var b = Ma;
    b && b.log(Ca, a, void 0);
  };

  var Na = function Na() {
    this.ib = ea();
  },
      Oa = null;

  Na.prototype.set = function (a) {
    this.ib = a;
  };

  Na.prototype.reset = function () {
    this.set(ea());
  };

  Na.prototype.get = function () {
    return this.ib;
  };

  var Pa = function Pa(a) {
    this.Yb = a || "";
    Oa || (Oa = new Na());
    this.jc = Oa;
  };

  g = Pa.prototype;
  g.Sa = !0;
  g.mb = !0;
  g.gc = !0;
  g.fc = !0;
  g.nb = !1;
  g.hc = !1;

  var O = function O(a) {
    return 10 > a ? "0" + a : String(a);
  },
      Qa = function Qa(a, b) {
    a = (a.ob - b) / 1e3;
    b = a.toFixed(3);
    var c = 0;
    if (1 > a) c = 2;else for (; 100 > a;) {
      c++, a *= 10;
    }

    for (; 0 < c--;) {
      b = " " + b;
    }

    return b;
  },
      Ra = function Ra(a) {
    Pa.call(this, a);
  };

  v(Ra, Pa);

  var Sa = function Sa(a, b) {
    var c = [];
    c.push(a.Yb, " ");

    if (a.mb) {
      var d = new Date(b.ob);
      c.push("[", O(d.getFullYear() - 2e3) + O(d.getMonth() + 1) + O(d.getDate()) + " " + O(d.getHours()) + ":" + O(d.getMinutes()) + ":" + O(d.getSeconds()) + "." + O(Math.floor(d.getMilliseconds() / 10)), "] ");
    }

    a.gc && c.push("[", Qa(b, a.jc.get()), "s] ");
    a.fc && c.push("[", b.bb, "] ");
    a.hc && c.push("[", b.H.name, "] ");
    c.push(b.getMessage());
    a.nb && (b = b.ea) && c.push("\n", b instanceof Error ? b.message : b.toString());
    a.Sa && c.push("\n");
    return c.join("");
  };

  var Ta = function Ta() {
    this.Zb = _t(this.tb, this);
    this.fa = new Ra();
    this.fa.mb = !1;
    this.fa.nb = !1;
    this.ab = this.fa.Sa = !1;
    this.Cb = {};
  };

  Ta.prototype.tb = function (a) {
    function b(f) {
      if (f) {
        if (f.value >= Ba.value) return "error";
        if (f.value >= Ca.value) return "warn";
        if (f.value >= Ea.value) return "log";
      }

      return "debug";
    }

    if (!this.Cb[a.bb]) {
      var c = Sa(this.fa, a),
          d = Ua;

      if (d) {
        var e = b(a.H);
        Va(d, e, c, a.ea);
      }
    }
  };

  var Wa = null,
      Ua = h.console,
      Va = function Va(a, b, c, d) {
    if (a[b]) a[b](c, d || "");else a.log(c, d || "");
  };

  var Xa = {
    pc: !0
  },
      P = function P() {
    throw Error("Do not instantiate directly");
  };

  P.prototype.Ua = null;

  P.prototype.getContent = function () {
    return this.content;
  };

  P.prototype.toString = function () {
    return this.content;
  };

  var Ya = function Ya() {
    P.call(this);
  };

  v(Ya, P);
  Ya.prototype.Va = Xa;

  var $a = function $a() {
    var a = Za(void 0, void 0);
    if (!ba(a)) return wa(String(a));

    if (a instanceof P) {
      if (a.Va !== Xa) throw Error("Sanitized content was not of kind HTML.");
      return G(a.toString(), a.Ua || null);
    }

    x("Soy template output is unsafe for use as HTML: " + a);
    return wa("zSoyz");
  };

  var ab = /*#__PURE__*/function () {
    function ab(a, b, c) {
      this.Ob = c;
      this.xb = a;
      this.bc = b;
      this.ka = 0;
      this.ha = null;
    }

    var _proto = ab.prototype;

    _proto.get = function get() {
      var a;
      0 < this.ka ? (this.ka--, a = this.ha, this.ha = a.next, a.next = null) : a = this.xb();
      return a;
    };

    _proto.put = function put(a) {
      this.bc(a);
      this.ka < this.Ob && (this.ka++, a.next = this.ha, this.ha = a);
    };

    return ab;
  }();

  var bb = function bb(a) {
    h.setTimeout(function () {
      throw a;
    }, 0);
  },
      cb,
      db = function db() {
    var a = h.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && -1 == y.indexOf("Presto") && (a = function a() {
      var e = document.createElement("IFRAME");
      e.style.display = "none";
      za(e);
      document.documentElement.appendChild(e);
      var f = e.contentWindow;
      e = f.document;
      e.open();
      e.write(va(xa));
      e.close();
      var k = "callImmediate" + Math.random(),
          q = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
      e = _t(function (r) {
        if (("*" == q || r.origin == q) && r.data == k) this.port1.onmessage();
      }, this);
      f.addEventListener("message", e, !1);
      this.port1 = {};
      this.port2 = {
        postMessage: function postMessage() {
          f.postMessage(k, q);
        }
      };
    });

    if ("undefined" !== typeof a && -1 == y.indexOf("Trident") && -1 == y.indexOf("MSIE")) {
      var b = new a(),
          c = {},
          d = c;

      b.port1.onmessage = function () {
        if (l(c.next)) {
          c = c.next;
          var e = c.Ta;
          c.Ta = null;
          e();
        }
      };

      return function (e) {
        d.next = {
          Ta: e
        };
        d = d.next;
        b.port2.postMessage(0);
      };
    }

    return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function (e) {
      var f = document.createElement("SCRIPT");

      f.onreadystatechange = function () {
        f.onreadystatechange = null;
        f.parentNode.removeChild(f);
        f = null;
        e();
        e = null;
      };

      document.documentElement.appendChild(f);
    } : function (e) {
      h.setTimeout(e, 0);
    };
  };

  var eb = function eb() {
    this.pa = this.V = null;
  },
      gb = new ab(function () {
    return new fb();
  }, function (a) {
    a.reset();
  }, 100);

  eb.prototype.add = function (a, b) {
    var c = gb.get();
    c.set(a, b);
    this.pa ? this.pa.next = c : this.V = c;
    this.pa = c;
  };

  eb.prototype.remove = function () {
    var a = null;
    this.V && (a = this.V, this.V = this.V.next, this.V || (this.pa = null), a.next = null);
    return a;
  };

  var fb = function fb() {
    this.next = this.scope = this.xa = null;
  };

  fb.prototype.set = function (a, b) {
    this.xa = a;
    this.scope = b;
    this.next = null;
  };

  fb.prototype.reset = function () {
    this.next = this.scope = this.xa = null;
  };

  var lb = function lb(a, b) {
    hb || ib();
    jb || (hb(), jb = !0);
    kb.add(a, b);
  },
      hb,
      ib = function ib() {
    if (h.Promise && h.Promise.resolve) {
      var a = h.Promise.resolve(void 0);

      hb = function hb() {
        a.then(mb);
      };
    } else hb = function hb() {
      var b = mb;
      !p(h.setImmediate) || h.Window && h.Window.prototype && -1 == y.indexOf("Edge") && h.Window.prototype.setImmediate == h.setImmediate ? (cb || (cb = db()), cb(b)) : h.setImmediate(b);
    };
  },
      jb = !1,
      kb = new eb(),
      mb = function mb() {
    for (var a; a = kb.remove();) {
      try {
        a.xa.call(a.scope);
      } catch (b) {
        bb(b);
      }

      gb.put(a);
    }

    jb = !1;
  };

  var S = function S(a) {
    this.l = 0;
    this.jb = void 0;
    this.J = this.w = this.s = null;
    this.ga = this.wa = !1;
    if (a != m) try {
      var b = this;
      a.call(void 0, function (c) {
        Q(b, 2, c);
      }, function (c) {
        if (!(c instanceof R)) try {
          if (c instanceof Error) throw c;
          throw Error("Promise rejected.");
        } catch (d) {}
        Q(b, 3, c);
      });
    } catch (c) {
      Q(this, 3, c);
    }
  },
      nb = function nb() {
    this.next = this.context = this.R = this.Z = this.F = null;
    this.ca = !1;
  };

  nb.prototype.reset = function () {
    this.context = this.R = this.Z = this.F = null;
    this.ca = !1;
  };

  var ob = new ab(function () {
    return new nb();
  }, function (a) {
    a.reset();
  }, 100),
      pb = function pb(a, b, c) {
    var d = ob.get();
    d.Z = a;
    d.R = b;
    d.context = c;
    return d;
  },
      T = function T() {
    var a,
        b,
        c = new S(function (d, e) {
      a = d;
      b = e;
    });
    return new qb(c, a, b);
  };

  S.prototype.then = function (a, b, c) {
    return rb(this, p(a) ? a : null, p(b) ? b : null, c);
  };

  S.prototype.$goog_Thenable = !0;

  S.prototype.cancel = function (a) {
    0 == this.l && lb(function () {
      var b = new R(a);
      sb(this, b);
    }, this);
  };

  var sb = function sb(a, b) {
    if (0 == a.l) if (a.s) {
      var c = a.s;

      if (c.w) {
        for (var d = 0, e = null, f = null, k = c.w; k && (k.ca || (d++, k.F == a && (e = k), !(e && 1 < d))); k = k.next) {
          e || (f = k);
        }

        e && (0 == c.l && 1 == d ? sb(c, b) : (f ? (d = f, d.next == c.J && (c.J = d), d.next = d.next.next) : tb(c), ub(c, e, 3, b)));
      }

      a.s = null;
    } else Q(a, 3, b);
  },
      wb = function wb(a, b) {
    a.w || 2 != a.l && 3 != a.l || vb(a);
    a.J ? a.J.next = b : a.w = b;
    a.J = b;
  },
      rb = function rb(a, b, c, d) {
    var e = pb(null, null, null);
    e.F = new S(function (f, k) {
      e.Z = b ? function (q) {
        try {
          var r = b.call(d, q);
          f(r);
        } catch (M) {
          k(M);
        }
      } : f;
      e.R = c ? function (q) {
        try {
          var r = c.call(d, q);
          !l(r) && q instanceof R ? k(q) : f(r);
        } catch (M) {
          k(M);
        }
      } : k;
    });
    e.F.s = a;
    wb(a, e);
    return e.F;
  };

  S.prototype.lc = function (a) {
    this.l = 0;
    Q(this, 2, a);
  };

  S.prototype.mc = function (a) {
    this.l = 0;
    Q(this, 3, a);
  };

  var Q = function Q(a, b, c) {
    if (0 == a.l) {
      a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
      a.l = 1;

      a: {
        var d = c,
            e = a.lc,
            f = a.mc;

        if (d instanceof S) {
          wb(d, pb(e || m, f || null, a));
          var k = !0;
        } else {
          if (d) try {
            var q = !!d.$goog_Thenable;
          } catch (M) {
            q = !1;
          } else q = !1;
          if (q) d.then(e, f, a), k = !0;else {
            if (ba(d)) try {
              var r = d.then;

              if (p(r)) {
                xb(d, r, e, f, a);
                k = !0;
                break a;
              }
            } catch (M) {
              f.call(a, M);
              k = !0;
              break a;
            }
            k = !1;
          }
        }
      }

      k || (a.jb = c, a.l = b, a.s = null, vb(a), 3 != b || c instanceof R || yb(a, c));
    }
  },
      xb = function xb(a, b, c, d, e) {
    var f = !1,
        k = function k(r) {
      f || (f = !0, c.call(e, r));
    },
        q = function q(r) {
      f || (f = !0, d.call(e, r));
    };

    try {
      b.call(a, k, q);
    } catch (r) {
      q(r);
    }
  },
      vb = function vb(a) {
    a.wa || (a.wa = !0, lb(a.Ab, a));
  },
      tb = function tb(a) {
    var b = null;
    a.w && (b = a.w, a.w = b.next, b.next = null);
    a.w || (a.J = null);
    return b;
  };

  S.prototype.Ab = function () {
    for (var a; a = tb(this);) {
      ub(this, a, this.l, this.jb);
    }

    this.wa = !1;
  };

  var ub = function ub(a, b, c, d) {
    if (3 == c && b.R && !b.ca) for (; a && a.ga; a = a.s) {
      a.ga = !1;
    }
    if (b.F) b.F.s = null, zb(b, c, d);else try {
      b.ca ? b.Z.call(b.context) : zb(b, c, d);
    } catch (e) {
      Ab.call(null, e);
    }
    ob.put(b);
  },
      zb = function zb(a, b, c) {
    2 == b ? a.Z.call(a.context, c) : a.R && a.R.call(a.context, c);
  },
      yb = function yb(a, b) {
    a.ga = !0;
    lb(function () {
      a.ga && Ab.call(null, b);
    });
  },
      Ab = bb,
      R = function R(a) {
    w.call(this, a);
  };

  v(R, w);
  R.prototype.name = "cancel";

  var qb = function qb(a, b, c) {
    this.T = a;
    this.resolve = b;
    this.reject = c;
  };

  var U = function U() {
    this.da = this.da;
    this.la = this.la;
  };

  U.prototype.da = !1;

  U.prototype.ua = function () {
    this.da || (this.da = !0, this.va());
  };

  U.prototype.va = function () {
    if (this.la) for (; this.la.length;) {
      this.la.shift()();
    }
  };

  var Bb = function Bb(a, b, c) {
    U.call(this);
    this.Pb = null != c ? _t(a, c) : a;
    this.Nb = b;
    this.wb = _t(this.Xb, this);
    this.ra = [];
  };

  v(Bb, U);
  g = Bb.prototype;
  g.U = !1;
  g.$ = 0;
  g.I = null;

  g.Db = function (a) {
    this.ra = arguments;
    this.I || this.$ ? this.U = !0 : Cb(this);
  };

  g.stop = function () {
    this.I && (h.clearTimeout(this.I), this.I = null, this.U = !1, this.ra = []);
  };

  g.pause = function () {
    this.$++;
  };

  g.resume = function () {
    this.$--;
    this.$ || !this.U || this.I || (this.U = !1, Cb(this));
  };

  g.va = function () {
    Bb.kc.va.call(this);
    this.stop();
  };

  g.Xb = function () {
    this.I = null;
    this.U && !this.$ && (this.U = !1, Cb(this));
  };

  var Cb = function Cb(a) {
    var b = a.wb;
    var c = a.Nb;
    if (!p(b)) if (b && "function" == typeof b.handleEvent) b = _t(b.handleEvent, b);else throw Error("Invalid listener argument");
    b = 2147483647 < Number(c) ? -1 : h.setTimeout(b, c || 0);
    a.I = b;
    a.Pb.apply(null, a.ra);
  };

  var Db = function Db(a) {
    a.controller = this;
    this.g = a;
    this.C = this.j = this.h = null;
    this.gb = this.Wb.bind(this);
    this.O = this.Tb.bind(this);
    this.P = this.Ub.bind(this);
    this.v = 0;
    this.nc = new Bb(this.Bb, 200, this);
  };

  g = Db.prototype;

  g.Ia = function () {
    this.j && (this.v++, this.g.isPaused = !this.g.isPaused, this.g.isPaused ? this.j.pause(null, this.P, this.O) : this.j.play(null, this.P, this.O));
  };

  g.stop = function () {
    this.j && (this.v++, this.j.stop(null, this.P, this.O));
  };

  g.seek = function () {
    if (this.j) {
      this.C && (clearTimeout(this.C), this.C = null);
      this.v++;
      var a = new chrome.cast.media.SeekRequest();
      a.currentTime = this.g.currentTime;
      this.j.seek(a, this.P, this.O);
    }
  };

  g.Ga = function () {
    this.h && (this.v++, this.g.isMuted = !this.g.isMuted, this.h.setReceiverMuted(this.g.isMuted, this.P, this.O));
  };

  g.Qa = function () {
    this.nc.Db();
  };

  g.Bb = function () {
    this.h && (this.v++, this.h.setReceiverVolumeLevel(this.g.volumeLevel, this.P, this.O));
  };

  g.Ub = function () {
    this.v--;
    this.D();
  };

  g.Tb = function () {
    this.v--;
    this.j && this.j.getStatus(null, m, m);
  };

  g.Wb = function () {
    this.j && ("function" === typeof this.j.getEstimatedBreakTime && (this.g.currentBreakTime = this.j.getEstimatedBreakTime()), "function" === typeof this.j.getEstimatedBreakClipTime && (this.g.currentBreakTime = this.j.getEstimatedBreakClipTime()), this.g.currentTime = this.j.getEstimatedTime(), this.C = setTimeout(this.gb, 1e3));
  };

  g.D = function (a) {
    if (!(0 < this.v)) if (this.h) {
      this.g.displayName = this.h.displayName || "";
      var b = this.h.statusText || "";
      this.g.displayStatus = b != this.g.displayName ? b : "";
      !a && this.h.receiver && (a = this.h.receiver.volume) && (null != a.muted && (this.g.isMuted = a.muted), null != a.level && (this.g.volumeLevel = a.level), this.g.canControlVolume = "fixed" != a.controlType);

      if (this.j) {
        a = this.j.breakStatus;
        b = this.j;

        if (Eb(a)) {
          var e = Fb(a, b.media),
              f = Gb(a, b.media);
          this.g.isPlayingBreak = !0;
          var c = this.g;
          var d = (d = e) && "array" == n(d.breakClipIds) ? d.breakClipIds.length : 0;
          c.numberBreakClips = d;
          e && f ? (c = e.breakClipIds.indexOf(f.id), c = 0 > c ? 0 : c) : c = 0;
          this.g.currentBreakClipNumber = c;
          this.g.currentBreakTime = "function" === typeof b.getEstimatedBreakTime ? b.getEstimatedBreakTime() : a.currentBreakTime;
          this.g.currentBreakClipTime = "function" === typeof b.getEstimatedBreakClipTime ? b.getEstimatedBreakClipTime() : a.currentBreakClipTime;
          this.g.breakId = a.breakId;
          this.g.breakClipId = a.breakClipId;
          this.g.whenSkippable = a.whenSkippable;
        } else this.g.isPlayingBreak = !1, this.g.numberBreakClips = 0, this.g.currentBreakClipNumber = 0, this.g.currentBreakTime = void 0, this.g.currentBreakClipTime = void 0, this.g.breakId = void 0, this.g.breakClipId = void 0, this.g.whenSkippable = void 0;

        this.g.isMediaLoaded = b.playerState != chrome.cast.media.PlayerState.IDLE;
        this.g.isPaused = b.playerState == chrome.cast.media.PlayerState.PAUSED;
        this.g.canPause = 0 <= b.supportedMediaCommands.indexOf(chrome.cast.media.MediaCommand.PAUSE);
        this.ba(b.media);
        this.g.canSeek = Eb(a) && (void 0 == a.whenSkippable || 0 > a.whenSkippable || a.currentBreakClipTime < a.whenSkippable) ? !1 : 0 <= b.supportedMediaCommands.indexOf(chrome.cast.media.MediaCommand.SEEK) && 0 != this.g.duration;
        this.g.currentTime = b.getEstimatedTime();
        this.C && (clearTimeout(this.C), this.C = null);
        b.playerState == chrome.cast.media.PlayerState.PLAYING && (this.C = setTimeout(this.gb, 1e3));
      } else this.ba(null);
    } else this.g.displayName = "", this.g.displayStatus = "", this.ba(null);
  };

  g.ba = function (a) {
    a ? (this.g.duration = a.duration || 0, a.metadata && a.metadata.title && (this.g.displayStatus = a.metadata.title)) : (this.g.isMediaLoaded = !1, this.g.canPause = !1, this.g.canSeek = !1, this.g.currentTime = 0, this.g.duration = 0, this.g.isPlayingBreak = !1, this.g.numberBreakClips = 0, this.g.currentBreakClipNumber = 0, this.g.currentBreakTime = void 0, this.g.currentBreakClipTime = void 0, this.g.breakId = void 0, this.g.breakClipId = void 0, this.g.whenSkippable = void 0);
  };

  var Hb = function Hb(a) {
    if (!a.j) for (var b = 0, c = a.h.media; b < c.length; b++) {
      if (!c[b].idleReason) {
        a.j = c[b];
        a.j.addUpdateListener(a.Qb.bind(a));
        break;
      }
    }
  },
      Ib = function Ib(a, b) {
    a.h = b;
    b.addMediaListener(a.cb.bind(a));
    b.addUpdateListener(a.Oa.bind(a));
    Hb(a);
    a.D();
  };

  g = Db.prototype;

  g.Oa = function (a) {
    a || (this.j = this.h = null);
    this.D();
  };

  g.cb = function () {
    Hb(this);
    this.D(!0);
  };

  g.Qb = function (a) {
    a || (this.j = null);
    this.D(!0);
  };

  g.Aa = function (a, b) {
    return b ? 100 * a / b : 0;
  };

  g.Ba = function (a, b) {
    return b ? a * b / 100 : 0;
  };

  g.ya = function (a) {
    return 0 > a ? "" : [("0" + Math.floor(a / 3600)).substr(-2), ("0" + Math.floor(a / 60) % 60).substr(-2), ("0" + Math.floor(a) % 60).substr(-2)].join(":");
  };

  var Fb = function Fb(a, b) {
    return Eb(a) ? (b && b.breaks || []).find(function (c) {
      return c.id === a.breakId;
    }) || null : null;
  },
      Gb = function Gb(a, b) {
    return Eb(a) ? (b && b.breakClips || []).find(function (c) {
      return c.id === a.breakClipId;
    }) || null : null;
  },
      Eb = function Eb(a) {
    return !!a && l(a.currentBreakClipTime) && l(a.breakClipId);
  };
  /*
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


  var Jb = function (a) {
    function b(c) {
      this.content = c;
    }

    b.prototype = a.prototype;
    return function (c, d) {
      c = new b(String(c));
      void 0 !== d && (c.Ua = d);
      return c;
    };
  }(Ya),
      Kb = {
    "\x00": "&#0;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\x0B": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "-": "&#45;",
    "/": "&#47;",
    "<": "&lt;",
    "=": "&#61;",
    ">": "&gt;",
    "`": "&#96;",
    "\x85": "&#133;",
    "\xA0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;"
  },
      Lb = function Lb(a) {
    return Kb[a];
  },
      Mb = /[\x00\x22\x27\x3c\x3e]/g,
      Nb = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
      Ob = /</g;

  var Za = function Za(a, b) {
    (a = (a = b || a) && a.oc) ? (null != a && a.Va === Xa ? (a = a.getContent(), a = String(a).replace(Nb, "").replace(Ob, "&lt;"), a = String(a).replace(Mb, Lb)) : (a = String(a), a = oa(a, void 0)), a = ' nonce="' + a + '"') : a = "";
    return Jb("<style" + a + '>.cast_caf_state_c {fill: var(--connected-color, #4285f4);}.cast_caf_state_d {fill: var(--disconnected-color, #7d7d7d);}.cast_caf_state_h {opacity: 0;}</style><svg x="0px" y="0px" width="100%" height="100%" viewBox="0 0 24 24"><g><path id="cast_caf_icon_arch0" class="cast_caf_status_d" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path id="cast_caf_icon_arch1" class="cast_caf_status_d" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path id="cast_caf_icon_arch2" class="cast_caf_status_d" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path id="cast_caf_icon_box" class="cast_caf_status_d" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path id="cast_caf_icon_boxfill" class="cast_caf_state_h" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>');
  };

  Za.qc = "cast.framework.CastButtonTemplate.icon";
  u("cast.framework.VERSION", "1.0.10");
  u("cast.framework.LoggerLevel", {
    DEBUG: 0,
    INFO: 800,
    WARNING: 900,
    ERROR: 1e3,
    NONE: 1500
  });
  u("cast.framework.CastState", {
    NO_DEVICES_AVAILABLE: "NO_DEVICES_AVAILABLE",
    NOT_CONNECTED: "NOT_CONNECTED",
    CONNECTING: "CONNECTING",
    CONNECTED: "CONNECTED"
  });
  u("cast.framework.SessionState", {
    NO_SESSION: "NO_SESSION",
    SESSION_STARTING: "SESSION_STARTING",
    SESSION_STARTED: "SESSION_STARTED",
    SESSION_START_FAILED: "SESSION_START_FAILED",
    SESSION_ENDING: "SESSION_ENDING",
    SESSION_ENDED: "SESSION_ENDED",
    SESSION_RESUMED: "SESSION_RESUMED"
  });
  u("cast.framework.CastContextEventType", {
    CAST_STATE_CHANGED: "caststatechanged",
    SESSION_STATE_CHANGED: "sessionstatechanged"
  });
  u("cast.framework.SessionEventType", {
    APPLICATION_STATUS_CHANGED: "applicationstatuschanged",
    APPLICATION_METADATA_CHANGED: "applicationmetadatachanged",
    ACTIVE_INPUT_STATE_CHANGED: "activeinputstatechanged",
    VOLUME_CHANGED: "volumechanged",
    MEDIA_SESSION: "mediasession"
  });
  u("cast.framework.RemotePlayerEventType", {
    ANY_CHANGE: "anyChanged",
    IS_CONNECTED_CHANGED: "isConnectedChanged",
    IS_MEDIA_LOADED_CHANGED: "isMediaLoadedChanged",
    QUEUE_DATA_CHANGED: "queueDataChanged",
    VIDEO_INFO_CHANGED: "videoInfoChanged",
    DURATION_CHANGED: "durationChanged",
    CURRENT_TIME_CHANGED: "currentTimeChanged",
    IS_PAUSED_CHANGED: "isPausedChanged",
    VOLUME_LEVEL_CHANGED: "volumeLevelChanged",
    CAN_CONTROL_VOLUME_CHANGED: "canControlVolumeChanged",
    IS_MUTED_CHANGED: "isMutedChanged",
    CAN_PAUSE_CHANGED: "canPauseChanged",
    CAN_SEEK_CHANGED: "canSeekChanged",
    DISPLAY_NAME_CHANGED: "displayNameChanged",
    STATUS_TEXT_CHANGED: "statusTextChanged",
    TITLE_CHANGED: "titleChanged",
    DISPLAY_STATUS_CHANGED: "displayStatusChanged",
    MEDIA_INFO_CHANGED: "mediaInfoChanged",
    IMAGE_URL_CHANGED: "imageUrlChanged",
    PLAYER_STATE_CHANGED: "playerStateChanged",
    IS_PLAYING_BREAK_CHANGED: "isPlayingBreakChanged",
    NUMBER_BREAK_CLIPS_CHANGED: "numberBreakClipsChanged",
    CURRENT_BREAK_CLIP_NUMBER_CHANGED: "currentBreakClipNumberChanged",
    CURRENT_BREAK_TIME_CHANGED: "currentBreakTimeChanged",
    CURRENT_BREAK_CLIP_TIME_CHANGED: "currentBreakClipTimeChanged",
    BREAK_ID_CHANGED: "breakIdChanged",
    BREAK_CLIP_ID_CHANGED: "breakClipIdChanged",
    WHEN_SKIPPABLE_CHANGED: "whenSkippableChanged",
    LIVE_SEEKABLE_RANGE_CHANGED: "liveSeekableRangeChanged"
  });
  u("cast.framework.ActiveInputState", {
    ACTIVE_INPUT_STATE_UNKNOWN: -1,
    ACTIVE_INPUT_STATE_NO: 0,
    ACTIVE_INPUT_STATE_YES: 1
  });

  var Pb = function Pb(a) {
    Ka().Pa(Ga(a));
  };

  u("cast.framework.setLoggerLevel", Pb);
  Wa || (Wa = new Ta());

  if (Wa) {
    var Qb = Wa;

    if (1 != Qb.ab) {
      var Rb = Ka(),
          Sb = Qb.Zb;
      Rb.X || (Rb.X = []);
      Rb.X.push(Sb);
      Qb.ab = !0;
    }
  }

  Pb(1e3);

  var V = function V(a) {
    this.type = a;
  };

  u("cast.framework.EventData", V);

  var Tb = /*#__PURE__*/function (_V) {
    _inheritsLoose(Tb, _V);

    function Tb(a) {
      var _this;

      _this = _V.call(this, "activeinputstatechanged") || this;
      _this.activeInputState = a;
      return _this;
    }

    return Tb;
  }(V);

  u("cast.framework.ActiveInputStateEventData", Tb);

  var Ub = /*#__PURE__*/function () {
    function Ub(a) {
      this.applicationId = a.appId;
      this.name = a.displayName;
      this.images = a.appImages;
      this.namespaces = this.Ha(a.namespaces || []);
    }

    var _proto2 = Ub.prototype;

    _proto2.Ha = function Ha(a) {
      return a.map(function (b) {
        return b.name;
      });
    };

    return Ub;
  }();

  u("cast.framework.ApplicationMetadata", Ub);

  var Vb = /*#__PURE__*/function (_V2) {
    _inheritsLoose(Vb, _V2);

    function Vb(a) {
      var _this2;

      _this2 = _V2.call(this, "applicationmetadatachanged") || this;
      _this2.metadata = a;
      return _this2;
    }

    return Vb;
  }(V);

  u("cast.framework.ApplicationMetadataEventData", Vb);

  var Wb = /*#__PURE__*/function (_V3) {
    _inheritsLoose(Wb, _V3);

    function Wb(a) {
      var _this3;

      _this3 = _V3.call(this, "applicationstatuschanged") || this;
      _this3.status = a;
      return _this3;
    }

    return Wb;
  }(V);

  u("cast.framework.ApplicationStatusEventData", Wb);
  var Xb = La("cast.framework.EventTarget");

  var Yb = /*#__PURE__*/function () {
    function Yb() {
      this.Y = {};
    }

    var _proto3 = Yb.prototype;

    _proto3.addEventListener = function addEventListener(a, b) {
      a in this.Y || (this.Y[a] = []);
      a = this.Y[a];
      a.includes(b) || a.push(b);
    };

    _proto3.removeEventListener = function removeEventListener(a, b) {
      a = this.Y[a] || [];
      b = a.indexOf(b);
      0 <= b && a.splice(b, 1);
    };

    _proto3.dispatchEvent = function dispatchEvent(a) {
      a && a.type && (this.Y[a.type] || []).slice().forEach(function (b) {
        try {
          b(a);
        } catch (c) {
          Xb && Xb.log(Ba, "Handler for " + a.type + " event failed: " + c, c);
        }
      });
    };

    return Yb;
  }();

  var Zb = function Zb(a) {
    a = a || {};
    this.receiverApplicationId = a.receiverApplicationId || null;
    this.resumeSavedSession = l(a.resumeSavedSession) ? a.resumeSavedSession : !0;
    this.autoJoinPolicy = l(a.autoJoinPolicy) ? a.autoJoinPolicy : chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
    this.language = a.language || null;
  };

  u("cast.framework.CastOptions", Zb);

  var $b = /*#__PURE__*/function (_V4) {
    _inheritsLoose($b, _V4);

    function $b(a) {
      var _this4;

      _this4 = _V4.call(this, "mediasession") || this;
      _this4.mediaSession = a;
      return _this4;
    }

    return $b;
  }(V);

  u("cast.framework.MediaSessionEventData", $b);

  var ac = /*#__PURE__*/function (_V5) {
    _inheritsLoose(ac, _V5);

    function ac(a, b) {
      var _this5;

      _this5 = _V5.call(this, "volumechanged") || this;
      _this5.volume = a;
      _this5.isMute = b;
      return _this5;
    }

    return ac;
  }(V);

  u("cast.framework.VolumeEventData", ac);

  var bc = function bc(a) {
    var b = a.i.loadMedia.bind(a.i);

    a.i.loadMedia = function (d, e, f) {
      b(d, function (k) {
        e && e(k);
        a.Fa(k);
      }, f);
    };

    var c = a.i.queueLoad.bind(a.i);

    a.i.queueLoad = function (d, e, f) {
      c(d, function (k) {
        e && e(k);
        a.Fa(k);
      }, f);
    };
  },
      cc = function cc(a, b) {
    a.hb = b;
    !b.volume || a.o && a.o.muted == b.volume.muted && a.o.level == b.volume.level || (a.o = b.volume, a.m.dispatchEvent(new ac(a.o.level, a.o.muted)));
    a.ia != b.isActiveInput && (a.ia = b.isActiveInput, b = a.ia, a.m.dispatchEvent(new Tb(null == b ? -1 : b ? 1 : 0)));
  },
      W = /*#__PURE__*/function () {
    function W(a, b) {
      this.m = new Yb();
      this.l = b;
      this.i = a;
      this.kb = a.sessionId;
      this.aa = a.statusText;
      this.hb = a.receiver;
      this.o = a.receiver.volume;
      this.ja = new Ub(a);
      this.ia = a.receiver.isActiveInput;
      this.i.addMediaListener(this.Fa.bind(this));
      bc(this);
    }

    var _proto4 = W.prototype;

    _proto4.addEventListener = function addEventListener(a, b) {
      this.m.addEventListener(a, b);
    };

    _proto4.removeEventListener = function removeEventListener(a, b) {
      this.m.removeEventListener(a, b);
    };

    _proto4.Lb = function Lb() {
      return this.i;
    };

    _proto4.Kb = function Kb() {
      return this.kb;
    };

    _proto4.Ca = function Ca() {
      return this.l;
    };

    _proto4.Hb = function Hb() {
      return this.hb;
    };

    _proto4.Fb = function Fb() {
      return this.ja;
    };

    _proto4.Gb = function Gb() {
      return this.aa;
    };

    _proto4.Eb = function Eb() {
      var a = this.ia;
      return null == a ? -1 : a ? 1 : 0;
    };

    _proto4.Ya = function Ya(a) {
      "SESSION_ENDED" != this.l && (a ? this.i.stop(m, m) : this.i.leave(m, m));
    };

    _proto4.setVolume = function setVolume(a) {
      var b = T(),
          c = Promise.resolve(b.T);
      this.o && (this.o.level = a, this.o.muted = !1);
      this.i.setReceiverVolumeLevel(a, function () {
        return b.resolve();
      }, function (d) {
        return b.reject(d.code);
      });
      return c;
    };

    _proto4.Mb = function Mb() {
      return this.o ? this.o.level : null;
    };

    _proto4.dc = function dc(a) {
      var b = T(),
          c = Promise.resolve(b.T);
      this.o && (this.o.muted = a);
      this.i.setReceiverMuted(a, function () {
        return b.resolve();
      }, function (d) {
        return b.reject(d.code);
      });
      return c;
    };

    _proto4.isMute = function isMute() {
      return this.o ? this.o.muted : null;
    };

    _proto4.sendMessage = function sendMessage(a, b) {
      var c = T(),
          d = Promise.resolve(c.T);
      this.i.sendMessage(a, b, function () {
        return c.resolve();
      }, function (e) {
        return c.reject(e.code);
      });
      return d;
    };

    _proto4.addMessageListener = function addMessageListener(a, b) {
      this.i.addMessageListener(a, b);
    };

    _proto4.removeMessageListener = function removeMessageListener(a, b) {
      this.i.removeMessageListener(a, b);
    };

    _proto4.loadMedia = function loadMedia(a) {
      var b = T(),
          c = Promise.resolve(b.T);
      this.i.loadMedia(a, function () {
        b.resolve();
      }, function (d) {
        b.reject(d.code);
      });
      return c;
    };

    _proto4.za = function za() {
      a: {
        var a = this.i;

        if (a.media) {
          for (var _iterator = _createForOfIteratorHelperLoose(a.media), _step; !(_step = _iterator()).done;) {
            var b = _step.value;

            if (!b.idleReason) {
              a = b;
              break a;
            }
          }
        }

        a = null;
      }

      return a;
    };

    _proto4.Fa = function Fa(a) {
      a.media && this.m.dispatchEvent(new $b(a));
    };

    _proto4.Ha = function Ha(a) {
      return a.map(function (b, c) {
        return c.name;
      });
    };

    return W;
  }();

  u("cast.framework.CastSession", W);
  W.prototype.getMediaSession = W.prototype.za;
  W.prototype.loadMedia = W.prototype.loadMedia;
  W.prototype.removeMessageListener = W.prototype.removeMessageListener;
  W.prototype.addMessageListener = W.prototype.addMessageListener;
  W.prototype.sendMessage = W.prototype.sendMessage;
  W.prototype.isMute = W.prototype.isMute;
  W.prototype.setMute = W.prototype.dc;
  W.prototype.getVolume = W.prototype.Mb;
  W.prototype.setVolume = W.prototype.setVolume;
  W.prototype.endSession = W.prototype.Ya;
  W.prototype.getActiveInputState = W.prototype.Eb;
  W.prototype.getApplicationStatus = W.prototype.Gb;
  W.prototype.getApplicationMetadata = W.prototype.Fb;
  W.prototype.getCastDevice = W.prototype.Hb;
  W.prototype.getSessionState = W.prototype.Ca;
  W.prototype.getSessionId = W.prototype.Kb;
  W.prototype.getSessionObj = W.prototype.Lb;
  W.prototype.removeEventListener = W.prototype.removeEventListener;
  W.prototype.addEventListener = W.prototype.addEventListener;

  var dc = /*#__PURE__*/function (_V6) {
    _inheritsLoose(dc, _V6);

    function dc(a) {
      var _this6;

      _this6 = _V6.call(this, "caststatechanged") || this;
      _this6.castState = a;
      return _this6;
    }

    return dc;
  }(V);

  u("cast.framework.CastStateEventData", dc);

  var ec = /*#__PURE__*/function (_V7) {
    _inheritsLoose(ec, _V7);

    function ec(a, b, c) {
      var _this7;

      _this7 = _V7.call(this, "sessionstatechanged") || this;
      _this7.session = a;
      _this7.sessionState = b;
      _this7.errorCode = l(c) ? c : null;
      return _this7;
    }

    return ec;
  }(V);

  u("cast.framework.SessionStateEventData", ec);
  var Ma = La("cast.framework.CastContext");

  var fc = function fc(a) {
    var b = "NO_DEVICES_AVAILABLE";

    switch (a.u) {
      case "SESSION_STARTING":
      case "SESSION_ENDING":
        b = "CONNECTING";
        break;

      case "SESSION_STARTED":
      case "SESSION_RESUMED":
        b = "CONNECTED";
        break;

      case "NO_SESSION":
      case "SESSION_ENDED":
      case "SESSION_START_FAILED":
        b = a.Na ? "NOT_CONNECTED" : "NO_DEVICES_AVAILABLE";
        break;

      default:
        N("Unexpected session state: " + a.u);
    }

    b !== a.W && (a.W = b, a.m.dispatchEvent(new dc(b)));
  },
      X = function X(a, b, c) {
    b == a.u ? "SESSION_START_FAILED" == b && a.m.dispatchEvent(new ec(a.h, a.u, c)) : (a.u = b, a.h && (a.h.l = a.u), a.m.dispatchEvent(new ec(a.h, a.u, c)), fc(a));
  },
      Y = /*#__PURE__*/function () {
    function Y() {
      this.m = new Yb();
      this.Ea = !1;
      this.B = null;
      this.Na = !1;
      this.W = "NO_DEVICES_AVAILABLE";
      this.u = "NO_SESSION";
      this.oa = this.h = null;
    }

    var _proto5 = Y.prototype;

    _proto5.addEventListener = function addEventListener(a, b) {
      this.m.addEventListener(a, b);
    };

    _proto5.removeEventListener = function removeEventListener(a, b) {
      this.m.removeEventListener(a, b);
    };

    _proto5.ec = function ec(a) {
      if (this.Ea) N("CastContext already initialized, new options are ignored");else {
        this.B = new Zb(a);
        if (!this.B || !this.B.receiverApplicationId) throw Error("Missing application id in cast options");
        a = new chrome.cast.SessionRequest(this.B.receiverApplicationId);
        this.B.language && (a.language = this.B.language);
        a = new chrome.cast.ApiConfig(a, this.lb.bind(this), this.ac.bind(this), this.B.autoJoinPolicy);
        chrome.cast.initialize(a, m, m);
        chrome.cast.addReceiverActionListener(this.$b.bind(this));
        this.Ea = !0;
      }
    };

    _proto5.Ib = function Ib() {
      return this.W;
    };

    _proto5.Ca = function Ca() {
      return this.u;
    };

    _proto5.requestSession = function requestSession() {
      var _this8 = this;

      if (!this.Ea) throw Error("Cannot start session before cast options are provided");
      var a = T(),
          b = Promise.resolve(a.T);
      rb(a.T, null, m, void 0);
      b.catch(m);
      var c = "NOT_CONNECTED" == this.W;
      chrome.cast.requestSession(function (d) {
        _this8.lb(d);

        a.resolve(null);
      }, function (d) {
        c && X(_this8, "SESSION_START_FAILED", d ? d.code : void 0);
        a.reject(d.code);
      });
      return b;
    };

    _proto5.Jb = function Jb() {
      return this.h;
    };

    _proto5.zb = function zb(a) {
      this.h && this.h.Ya(a);
    };

    _proto5.ac = function ac(a) {
      (this.Na = a == chrome.cast.ReceiverAvailability.AVAILABLE) && !this.h && this.oa && this.B.resumeSavedSession && chrome.cast.requestSessionById(this.oa);
      fc(this);
    };

    _proto5.$b = function $b(a, b) {
      this.h || b != chrome.cast.ReceiverAction.CAST ? this.h && b == chrome.cast.ReceiverAction.STOP ? X(this, "SESSION_ENDING") : a && cc(this.h, a) : X(this, "SESSION_STARTING");
    };

    _proto5.lb = function lb(a) {
      var b = "SESSION_STARTING" == this.u ? "SESSION_STARTED" : "SESSION_RESUMED";
      this.oa = null;
      this.h = new W(a, b);
      a.addUpdateListener(this.Oa.bind(this));
      X(this, b);
    };

    _proto5.Oa = function Oa() {
      if (this.h) switch (this.h.i.status) {
        case chrome.cast.SessionStatus.DISCONNECTED:
        case chrome.cast.SessionStatus.STOPPED:
          X(this, "SESSION_ENDED");
          this.oa = this.h.kb;
          this.h = null;
          break;

        case chrome.cast.SessionStatus.CONNECTED:
          var a = this.h,
              b = a.ja,
              c = a.i,
              d;
          if (d = b.applicationId == c.appId && b.name == c.displayName) a: if (d = b.namespaces, b = b.Ha(c.namespaces || []), aa(d) && aa(b) && d.length == b.length) {
            c = d.length;

            for (var e = 0; e < c; e++) {
              if (d[e] !== b[e]) {
                d = !1;
                break a;
              }
            }

            d = !0;
          } else d = !1;
          d || (a.ja = new Ub(a.i), a.m.dispatchEvent(new Vb(a.ja)));
          cc(a, a.i.receiver);
          a.aa != a.i.statusText && (a.aa = a.i.statusText, a.m.dispatchEvent(new Wb(a.aa)));
          break;

        default:
          N("Unknown session status " + this.h.i.status);
      } else N("Received session update event without known session");
    };

    return Y;
  }();

  u("cast.framework.CastContext", Y);
  Y.prototype.endCurrentSession = Y.prototype.zb;
  Y.prototype.getCurrentSession = Y.prototype.Jb;
  Y.prototype.requestSession = Y.prototype.requestSession;
  Y.prototype.getSessionState = Y.prototype.Ca;
  Y.prototype.getCastState = Y.prototype.Ib;
  Y.prototype.setOptions = Y.prototype.ec;
  Y.prototype.removeEventListener = Y.prototype.removeEventListener;
  Y.prototype.addEventListener = Y.prototype.addEventListener;
  Y.Da = void 0;

  Y.L = function () {
    return Y.Da ? Y.Da : Y.Da = new Y();
  };

  Y.getInstance = Y.L;

  var gc = function gc() {
    Y.L().requestSession();
  },
      hc = function hc(a, b) {
    a.setAttribute("class", b ? "cast_caf_state_c" : "cast_caf_state_d");
  },
      jc = function jc(a) {
    if ("NO_DEVICES_AVAILABLE" == a.l) a.K.style.display = "none";else switch (a.K.style.display = a.yb, a.l) {
      case "NOT_CONNECTED":
        ic(a, !1, "cast_caf_state_h");
        break;

      case "CONNECTING":
        ic(a, !1, "cast_caf_state_h");
        a.S || a.Xa();
        break;

      case "CONNECTED":
        ic(a, !0, "cast_caf_state_c");
    }
  },
      kc = function kc(a, b) {
    a.ta = Y.L();
    a.fb = a.Vb.bind(a);
    a.qa = [];

    for (var c = 0; 3 > c; c++) {
      a.qa.push(b.querySelector("#cast_caf_icon_arch" + c));
    }

    a.ub = b.querySelector("#cast_caf_icon_box");
    a.vb = b.querySelector("#cast_caf_icon_boxfill");
    a.Ma = 0;
    a.S = null;
    a.yb = window.getComputedStyle(a.K, null).display;
    a.l = a.ta.W;
    jc(a);
    a.K.addEventListener("click", gc);
    a.ta.addEventListener("caststatechanged", a.fb);
  },
      lc = function lc(a) {
    a.ta.removeEventListener("caststatechanged", a.fb);
    null !== a.S && (window.clearTimeout(a.S), a.S = null);
  },
      ic = function ic(a, b, c) {
    for (var _iterator2 = _createForOfIteratorHelperLoose(a.qa), _step2; !(_step2 = _iterator2()).done;) {
      var d = _step2.value;
      hc(d, b);
    }

    hc(a.ub, b);
    a.vb.setAttribute("class", c);
  };

  var mc = /*#__PURE__*/function () {
    function mc(a) {
      this.K = a;

      try {
        this.K.attachShadow({
          mode: "open"
        }).innerHTML = Za().getContent();
      } catch (c) {
        a = this.K;
        var b = $a();
        if (ya()) for (; a.lastChild;) {
          a.removeChild(a.lastChild);
        }
        a.innerHTML = va(b);
      }
    }

    var _proto6 = mc.prototype;

    _proto6.Vb = function Vb(a) {
      this.l = a.castState;
      jc(this);
    };

    _proto6.Xa = function Xa() {
      this.S = null;

      if ("CONNECTING" == this.l) {
        for (var a = 0; 3 > a; a++) {
          hc(this.qa[a], a == this.Ma);
        }

        this.Ma = (this.Ma + 1) % 3;
        this.S = window.setTimeout(this.Xa.bind(this), 300);
      }
    };

    return mc;
  }(),
      nc = /*#__PURE__*/function (_HTMLElement) {
    _inheritsLoose(nc, _HTMLElement);

    function nc() {
      var _this9;

      _this9 = _HTMLElement.call(this) || this;
      _this9.A = new mc(_assertThisInitialized(_this9));
      return _this9;
    }

    var _proto7 = nc.prototype;

    _proto7.connectedCallback = function connectedCallback() {
      kc(this.A, this.shadowRoot || this);
    };

    _proto7.disconnectedCallback = function disconnectedCallback() {
      lc(this.A);
    };

    _proto7.ua = function ua() {};

    return nc;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)),
      oc = /*#__PURE__*/function (_HTMLButtonElement) {
    _inheritsLoose(oc, _HTMLButtonElement);

    function oc() {
      var _this10;

      _this10 = _HTMLButtonElement.call(this) || this;
      _this10.A = new mc(_assertThisInitialized(_this10));
      return _this10;
    }

    var _proto8 = oc.prototype;

    _proto8.connectedCallback = function connectedCallback() {
      kc(this.A, this.shadowRoot || this);
    };

    _proto8.disconnectedCallback = function disconnectedCallback() {
      lc(this.A);
    };

    _proto8.ua = function ua() {};

    return oc;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLButtonElement));

  var qc = function qc() {
    var a = document.createElement.bind(document);

    document.createElement = function (b, c) {
      if ("google-cast-launcher" === b || "button" === b && c && ("google-cast-button" === c || "google-cast-button" === c.is)) {
        var d = a(b, c);
        pc(d);
        return d;
      }

      return a.apply(void 0, arguments);
    };
  },
      rc = function rc() {
    document.querySelectorAll("button[is=google-cast-button], google-cast-launcher").forEach(function (a) {
      return pc(a);
    });
  },
      pc = function pc(a) {
    a.A = new mc(a);
    kc(a.A, a.shadowRoot || a);

    a.ua = function () {
      lc(a.A);
    };
  };

  customElements.define ? (customElements.define("google-cast-button", oc, {
    extends: "button"
  }), customElements.define("google-cast-launcher", nc)) : ("complete" !== document.readyState ? window.addEventListener("load", rc) : rc(), qc());
  u("cast.framework.RemotePlayer", /*#__PURE__*/function () {
    function _class() {
      this.isMediaLoaded = this.isConnected = !1;
      this.videoInfo = this.queueData = void 0;
      this.currentTime = this.duration = 0;
      this.volumeLevel = 1;
      this.canControlVolume = !0;
      this.canSeek = this.canPause = this.isMuted = this.isPaused = !1;
      this.displayStatus = this.title = this.statusText = this.displayName = "";
      this.controller = this.savedPlayerState = this.playerState = this.imageUrl = this.mediaInfo = null;
      this.isPlayingBreak = !1;
      this.currentBreakClipNumber = this.numberBreakClips = 0;
      this.liveSeekableRange = this.whenSkippable = this.breakClipId = this.breakId = this.currentBreakClipTime = this.currentBreakTime = void 0;
    }

    return _class;
  }());

  var sc = /*#__PURE__*/function (_V8) {
    _inheritsLoose(sc, _V8);

    function sc(a, b, c) {
      var _this11;

      _this11 = _V8.call(this, a) || this;
      _this11.field = b;
      _this11.value = c;
      return _this11;
    }

    return sc;
  }(V);

  u("cast.framework.RemotePlayerChangedEvent", sc);

  var tc = function tc(a, b) {
    return new window.Proxy(a, {
      set: function set(c, d, e) {
        if (e === c[d]) return !0;
        c[d] = e;
        b.dispatchEvent(new sc(d + "Changed", d, e));
        b.dispatchEvent(new sc("anyChanged", d, e));
        return !0;
      }
    });
  },
      Z = /*#__PURE__*/function (_Db) {
    _inheritsLoose(Z, _Db);

    function Z(a) {
      var _this12;

      var b = new Yb();
      _this12 = _Db.call(this, tc(a, b)) || this;
      _this12.m = b;
      _this12.Sb = 0;
      a = Y.L();
      a.addEventListener("sessionstatechanged", _this12.cc.bind(_assertThisInitialized(_this12)));
      (a = a.h) ? Ib(_assertThisInitialized(_this12), a.i) : _this12.D();
      return _this12;
    }

    var _proto9 = Z.prototype;

    _proto9.addEventListener = function addEventListener(a, b) {
      this.m.addEventListener(a, b);
    };

    _proto9.removeEventListener = function removeEventListener(a, b) {
      this.m.removeEventListener(a, b);
    };

    _proto9.cc = function cc(a) {
      switch (a.sessionState) {
        case "SESSION_STARTED":
        case "SESSION_RESUMED":
          this.g.isConnected = !0;
          var b = a.session && a.session.i;
          b && (Ib(this, b), a.session.addEventListener("mediasession", this.cb.bind(this)));
      }
    };

    _proto9.D = function D(a) {
      var b = Y.L().h;
      b ? this.g.savedPlayerState = null : this.g.isConnected && (this.g.savedPlayerState = {
        mediaInfo: this.g.mediaInfo,
        currentTime: this.g.currentTime,
        isPaused: this.g.isPaused
      });

      _Db.prototype.D.call(this, a);

      this.g.isConnected = !!b;
      this.g.statusText = b && b.aa || "";
      a = b && b.za();
      this.g.playerState = a && a.playerState || chrome.cast.media.PlayerState.IDLE;
      a ? (this.g.queueData = a.queueData, this.g.videoInfo = a.videoInfo, this.g.liveSeekableRange = "function" === typeof a.getEstimatedLiveSeekableRange ? a.getEstimatedLiveSeekableRange() : a.liveSeekableRange) : (this.g.queueData = void 0, this.g.videoInfo = void 0, this.g.liveSeekableRange = void 0);
    };

    _proto9.ba = function ba(a) {
      _Db.prototype.ba.call(this, a);

      var b = (this.g.mediaInfo = a) && a.metadata;
      a = null;
      var c = "";
      b && (c = b.title || "", (b = b.images) && 0 < b.length && (a = b[0].url));
      this.g.title = c;
      this.g.imageUrl = a;
    };

    _proto9.Ia = function Ia() {
      _Db.prototype.Ia.call(this);
    };

    _proto9.stop = function stop() {
      _Db.prototype.stop.call(this);
    };

    _proto9.seek = function seek() {
      _Db.prototype.seek.call(this);
    };

    _proto9.Ga = function Ga() {
      _Db.prototype.Ga.call(this);
    };

    _proto9.Qa = function Qa() {
      _Db.prototype.Qa.call(this);
    };

    _proto9.ya = function ya(a) {
      return _Db.prototype.ya.call(this, a);
    };

    _proto9.Aa = function Aa(a, b) {
      return _Db.prototype.Aa.call(this, a, b);
    };

    _proto9.Ba = function Ba(a, b) {
      return _Db.prototype.Ba.call(this, a, b);
    };

    _proto9.ic = function ic() {
      var a = Y.L().h;

      if (a) {
        var b = a.za();
        b && a && a.sendMessage("urn:x-cast:com.google.cast.media", {
          type: "SKIP_AD",
          requestId: this.Sb++,
          mediaSessionId: b.mediaSessionId
        });
      }
    };

    return Z;
  }(Db);

  u("cast.framework.RemotePlayerController", Z);
  Z.prototype.skipAd = Z.prototype.ic;
  Z.prototype.getSeekTime = Z.prototype.Ba;
  Z.prototype.getSeekPosition = Z.prototype.Aa;
  Z.prototype.getFormattedTime = Z.prototype.ya;
  Z.prototype.setVolumeLevel = Z.prototype.Qa;
  Z.prototype.muteOrUnmute = Z.prototype.Ga;
  Z.prototype.seek = Z.prototype.seek;
  Z.prototype.stop = Z.prototype.stop;
  Z.prototype.playOrPause = Z.prototype.Ia;
  Z.prototype.removeEventListener = Z.prototype.removeEventListener;
  Z.prototype.addEventListener = Z.prototype.addEventListener;
  /*
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
}).call(window);

var Component = videojs.getComponent('Component');
var ControlBar = videojs.getComponent('ControlBar');
var Button = videojs.getComponent('Button');
var Tech = videojs.getComponent('Tech');
var PLAYER_STATE = {
  // No media is loaded into the player.
  IDLE: 'IDLE',
  // Player is in PLAY mode but not actively playing content.
  BUFFERING: 'BUFFERING',
  // The media is loaded but not playing.
  LOADED: 'LOADED',
  // The media is playing.
  PLAYING: 'PLAYING',
  // The media is paused.
  PAUSED: 'PAUSED'
};
/**
 * Chromecast Media Controller - Wrapper for HTML5 Media API
 *
 * @param {Object=} params Object of option names and values
 * @param {Function=} options Options callback function
 * @extends Tech
 * @class Chromecast
 */

var ChromecastTech = /*#__PURE__*/function (_Tech) {
  _inheritsLoose(ChromecastTech, _Tech);

  function ChromecastTech(options, ready) {
    var _this;

    if (ready === void 0) {
      ready = {};
    }

    _this = _Tech.call(this, options, ready) || this;
    _this.castBtn = _this.options_.source.cast_;
    _this.apiSession = _this.options_.source.apiSession;
    _this.receiver = _this.apiSession.getCastDevice().friendlyName;
    _this.castBtn.currentTech = _assertThisInitialized(_this);

    _this.initializeUI();

    _this.initializeTracks();

    _this.update();

    _this.triggerReady();

    return _this;
  }

  var _proto = ChromecastTech.prototype;

  _proto.initializeUI = function initializeUI() {
    var _this2 = this;

    this.on('dispose', function () {
      console.log("dispose triggered");

      _this2.onMediaStatusUpdate();

      _this2.onSessionUpdate(false);
    });
  };

  _proto.initializeTracks = function initializeTracks() {
    var tracks = this.textTracks();

    if (tracks) {
      var changeHandler = this.handleTextTracksChange.bind(this);
      tracks.addEventListener('change', changeHandler);
      this.on('dispose', function () {
        tracks.removeEventListener('change', changeHandler);
      });
      this.handleTextTracksChange();
    }

    try {
      tracks = this.audioTracks();

      if (tracks) {
        var _changeHandler = this.handleAudioTracksChange.bind(this);

        tracks.addEventListener('change', _changeHandler);
        this.on('dispose', function () {
          tracks.removeEventListener('change', _changeHandler);
        });
      }
    } catch (e) {
      videojs.log('get player audioTracks fail' + e);
    }

    try {
      tracks = this.videoTracks();

      if (tracks) {
        var _changeHandler2 = this.handleVideoTracksChange.bind(this);

        tracks.addEventListener('change', _changeHandler2);
        this.on('dispose', function () {
          tracks.removeEventListener('change', _changeHandler2);
        });
      }
    } catch (e) {
      videojs.log('get player videoTracks fail' + e);
    }
  };

  _proto.createEl = function createEl() {
    var el = videojs.dom.createEl('div', {
      id: this.options_.techId,
      className: 'vjs-tech vjs-tech-chromecast'
    });
    return el;
  };

  _proto.update = function update() {
    this.el_.innerHTML = "<div class=\"casting-image\" style=\"background-image: url('" + this.options_.poster + "')\"></div><div class=\"casting-overlay\"><div class=\"casting-information\"><div class=\"casting-icon\"></div><div class=\"casting-description\"><small>" + this.localize('CASTING TO') + "</small><br>" + this.receiver + "</div></div></div>";
  };

  _proto.onSessionUpdate = function onSessionUpdate(isAlive) {
    if (!this.apiSession) {
      return;
    }

    if (!isAlive) {
      return this.onStopAppSuccess();
    }
  };

  _proto.onStopAppSuccess = function onStopAppSuccess() {
    this.stopTrackingCurrentTime();
    this.apiSession = null;
  };

  _proto.onMediaStatusUpdate = function onMediaStatusUpdate() {
    if (!this.apiSession) {
      return;
    }

    switch (this.castBtn.playerState) {
      case PLAYER_STATE.BUFFERING:
        this.trigger('waiting');
        break;

      case PLAYER_STATE.IDLE:
        this.trigger('timeupdate');
        this.trigger('ended');
        break;

      case PLAYER_STATE.PAUSED:
        this.trigger('pause');
        this.paused_ = true;
        break;

      case PLAYER_STATE.PLAYING:
        this.trigger('playing');
        this.trigger('play');
        this.paused_ = false;
        break;
    }
  };

  _proto.src = function src(_src) {};

  _proto.currentSrc = function currentSrc() {
    if (!this.apiSession) {
      return;
    }

    return this.castBtn.sources.src;
  };

  _proto.handleAudioTracksChange = function handleAudioTracksChange() {
    var trackInfo = [];
    var tTracks = this.textTracks();
    var tracks = this.audioTracks();

    if (!tracks) {
      return;
    }

    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];

      if (track.enabled) {
        trackInfo.push(i + 1 + tTracks.length);
      }
    }

    if (this.apiSession && trackInfo.length) {
      this.tracksInfoRequest = new chrome.cast.media.EditTracksInfoRequest(trackInfo);
      console.log('tracks are changing in remote');
    }
  };

  _proto.handleVideoTracksChange = function handleVideoTracksChange() {};

  _proto.handleTextTracksChange = function handleTextTracksChange() {
    var trackInfo = [];
    var tracks = this.textTracks();

    if (!tracks) {
      return;
    }

    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];

      if (track.mode === 'showing') {
        trackInfo.push(i + 1);
      }
    }

    if (this.apiSession && trackInfo.length) {
      this.tracksInfoRequest = new chrome.cast.media.EditTracksInfoRequest(trackInfo);
      console.log("tracks are requested in remote");
    }
  };

  _proto.onTrackSuccess = function onTrackSuccess() {
    return videojs.log('track added');
  };

  _proto.onTrackError = function onTrackError(e) {
    return videojs.log('Cast track Error: ' + JSON.stringify(e));
  };

  _proto.castError = function castError(e) {
    return videojs.log('Cast Error: ' + JSON.stringify(e));
  };

  _proto.controls = function controls() {
    return false;
  };

  _proto.play = function play() {
    if (!this.apiSession) {
      return;
    }

    if (this.paused_) {
      this.castBtn.playerHandler.play();
    }

    return this.paused_ = false;
  };

  _proto.pause = function pause() {
    if (!this.apiSession) {
      return;
    }

    if (!this.paused_) {
      this.castBtn.playerHandler.pause();
    }

    return this.paused_ = true;
  };

  _proto.paused = function paused() {
    return this.paused_;
  };

  _proto.ended = function ended() {
    return chrome.cast.media.IdleReason === "FINISHED";
  };

  _proto.currentTime = function currentTime() {
    if (!this.apiSession) {
      return 0;
    }

    return this.castBtn.remotePlayer.currentTime;
  };

  _proto.setCurrentTime = function setCurrentTime(position) {
    var time = 0;

    if (!this.apiSession) {
      return time;
    }

    time = position;
    this.castBtn.remotePlayer.currentTime = time;
    this.castBtn.remotePlayerController.seek();
    return time;
  };

  _proto.volume = function volume() {
    return this.volume_;
  };

  _proto.buffered = function buffered() {};

  _proto.duration = function duration() {
    if (!this.apiSession) {
      return 0;
    }

    return this.castBtn.player_.duration();
  };

  _proto.seeked = function seeked() {
    console.log("has seekd");
  };

  _proto.seeking = function seeking() {
    console.log('is seeking');
    return true;
  };

  _proto.seekable = function seekable() {
    console.log('is seekable');
    return true;
  };

  _proto.setVolume = function setVolume(level, mute) {
    if (mute === void 0) {
      mute = false;
    }

    var request;
    var volume;

    if (!this.apiSession) {
      return;
    }

    volume = new chrome.cast.Volume();
    volume.level = level;
    volume.muted = mute;
    this.volume_ = volume.level;
    this.muted_ = mute;
    request = new chrome.cast.media.VolumeRequest();
    request.volume = volume;
    return this.trigger('volumechange');
  };

  _proto.muted = function muted() {
    return this.muted_;
  };

  _proto.setMuted = function setMuted(muted) {
    return this.setVolume(this.volume_, muted);
  };

  _proto.supportsFullScreen = function supportsFullScreen() {
    return false;
  };

  _proto.resetSrc_ = function resetSrc_(callback) {
    callback();
  };

  _proto.dispose = function dispose() {
    //this.resetSrc_(Function.prototype);
    _Tech.prototype.dispose.call(this, this);
  };

  _proto.playbackRate = function playbackRate() {
    return 1;
  };

  return ChromecastTech;
}(Tech);

ChromecastTech.prototype.paused_ = false;
ChromecastTech.prototype.options_ = {};

ChromecastTech.isSupported = function () {
  return true;
};

Tech.withSourceHandlers(ChromecastTech);
ChromecastTech.nativeSourceHandler = {};

ChromecastTech.nativeSourceHandler.canPlayType = function (source) {
  var dashTypeRE = /^application\/(?:dash\+xml|(x-|vnd\.apple\.)mpegurl)/i;
  var dashExtRE = /^video\/(mpd|mp4|webm|m3u8)/i;

  if (dashTypeRE.test(source)) {
    return 'probably';
  } else if (dashExtRE.test(source)) {
    return 'maybe';
  } else {
    return '';
  }
};

ChromecastTech.nativeSourceHandler.canHandleSource = function (source) {
  if (source.type) {
    return ChromecastTech.nativeSourceHandler.canPlayType(source.type);
  } else if (source.src) {
    return ChromecastTech.nativeSourceHandler.canPlayType(source.src);
  }

  return '';
};

ChromecastTech.nativeSourceHandler.handleSource = function (source, tech) {
  tech.src(source.src);
};

ChromecastTech.nativeSourceHandler.dispose = function () {};

ChromecastTech.registerSourceHandler(ChromecastTech.nativeSourceHandler);
ChromecastTech.prototype.featuresVolumeControl = true;
ChromecastTech.prototype.featuresPlaybackRate = true;
ChromecastTech.prototype.movingMediaElementInDOM = true;
ChromecastTech.prototype.featuresTimeupdateEvents = true;
ChromecastTech.prototype.featuresProgressEvents = true;
ChromecastTech.prototype.featuresNativeTextTracks = true;
ChromecastTech.prototype.featuresNativeAudioTracks = true;
ChromecastTech.prototype.featuresNativeVideoTracks = true;
videojs.options.chromecast = {}; // Register the compnent with video.js, avoid double registration

if (typeof Tech.getTech('ChromecastTech') === 'undefined') {
  Tech.registerTech('ChromecastTech', ChromecastTech);
}

var Component$1 = videojs.getComponent('Component');
var ControlBar$1 = videojs.getComponent('ControlBar');
var Button$1 = videojs.getComponent('Button');
var Tech$1 = videojs.getComponent('Tech');
var DEFAULT_VOLUME = 0.5;
var FULL_VOLUME_HEIGHT = 100;
var PLAYER_STATE$1 = {
  // No media is loaded into the player.
  IDLE: 'IDLE',
  // Player is in PLAY mode but not actively playing content.
  BUFFERING: 'BUFFERING',
  // The media is loaded but not playing.
  LOADED: 'LOADED',
  // The media is playing.
  PLAYING: 'PLAYING',
  // The media is paused.
  PAUSED: 'PAUSED'
};

var ChromecastButton = /*#__PURE__*/function (_Button) {
  _inheritsLoose(ChromecastButton, _Button);

  function ChromecastButton(player, options) {
    var _this2;

    _this2 = _Button.call(this, player, options) || this;
    _this2.sources = {};
    _this2.player = player;
    _this2.options = options;
    _this2.casting = false;
    _this2.apiSession = null;
    _this2.tryingReconnect = 0;

    _this2.hide();

    _this2.initPlayerHandler(_assertThisInitialized(_this2));

    _this2.playerState = PLAYER_STATE$1.IDLE;
    _this2.playerStateBeforeSwitch = null;
    _this2.remotePlayer = null;
    _this2.remotePlayerController = null;
    _this2.currentMediaTime = 0;
    _this2.mediaDuration = -1;
    _this2.incrementMediaTimeHandler = _this2.incrementMediaTime.bind(_assertThisInitialized(_this2));
    _this2.mediaInfo = null;

    _this2.setupLocalPlayer();

    _this2.addVideoThumbs();

    _this2.initializeUI(player);

    return _this2;
  }

  var _proto = ChromecastButton.prototype;

  _proto.initCastPlayer = function initCastPlayer() {
    var options = this.options_.playerOptions.plugins.chromecast;

    if (options.appId !== undefined && options.appId !== '') {
      this.appId = options.appId;
    } else if (chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID) {
      this.appId = chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID;
    }

    if (options.autoJoinPolicy !== undefined && options.autoJoinPolicy !== '') {
      this.autoJoinPolicy = options.autoJoinPolicy;
    } else if (chrome.cast.AutoJoinPolicy.PAGE_SCOPED) {
      this.autoJoinPolicy = chrome.cast.AutoJoinPolicy.PAGE_SCOPED;
    }

    cast.framework.CastContext.getInstance().setOptions({
      receiverApplicationId: this.appId,
      autoJoinPolicy: this.autoJoinPolicy
    });
    this.remotePlayer = new cast.framework.RemotePlayer();
    this.remotePlayerController = new cast.framework.RemotePlayerController(this.remotePlayer);
    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.IS_CONNECTED_CHANGED, function (e) {
      this.switchPlayer(e.value);
    }.bind(this));
    this.apiInitialized = true;
  };

  _proto.initPlayerHandler = function initPlayerHandler(_this) {
    if (_this === void 0) {
      _this = {};
    }

    this.playerHandler = {};
    this.playerHandler.target = {};

    this.playerHandler.setTarget = function (target) {
      _this.playerHandler.target = target;
    };

    this.playerHandler.play = function () {
      if (_this.playerState == PLAYER_STATE$1.IDLE || !_this.playerHandler.target.isMediaLoaded()) {
        _this.playerHandler.load();

        return;
      }

      _this.playerState = PLAYER_STATE$1.PLAYING;

      _this.playerHandler.target.play();
    };

    this.playerHandler.pause = function () {
      _this.playerState = PLAYER_STATE$1.PAUSED;

      _this.playerHandler.target.pause();
    };

    this.playerHandler.stop = function () {
      _this.playerState = PLAYER_STATE$1.IDLE;

      _this.playerHandler.target.stop();
    };

    this.playerHandler.load = function () {
      _this.playerState = PLAYER_STATE$1.BUFFERING;

      _this.playerHandler.target.load();
    };

    this.playerHandler.isMediaLoaded = function () {
      return _this.playerHandler.target.isMediaLoaded();
    };

    this.playerHandler.prepareToPlay = function () {
      _this.mediaDuration = _this.playerHandler.getMediaDuration();

      _this.playerHandler.updateDurationDisplay();

      _this.playerState = PLAYER_STATE$1.LOADED;

      _this.playerHandler.play();

      _this.playerHandler.updateDisplay();
    };

    this.playerHandler.getCurrentMediaTime = function () {
      return _this.playerHandler.target.getCurrentMediaTime();
    };

    this.playerHandler.getMediaDuration = function () {
      return _this.playerHandler.target.getMediaDuration();
    };

    this.playerHandler.updateDisplay = function () {
      // Update local variables
      _this.playerHandler.currentMediaTime = _this.playerHandler.target.getCurrentMediaTime();
      _this.playerHandler.mediaDuration = _this.playerHandler.target.getMediaDuration();

      _this.playerHandler.target.updateDisplay();
    };

    this.playerHandler.updateCurrentTimeDisplay = function () {
      _this.playerHandler.target.updateCurrentTimeDisplay();
    };

    this.playerHandler.updateDurationDisplay = function () {
      _this.playerHandler.target.updateDurationDisplay();
    };

    this.playerHandler.setTimeString = function (time) {
      _this.playerHandler.target.setTimeString(time);
    };

    this.playerHandler.setVolume = function (volumeSliderPosition) {
      _this.playerHandler.target.setVolume(volumeSliderPosition);
    };

    this.playerHandler.mute = function () {
      _this.playerHandler.target.mute();
    };

    this.playerHandler.unMute = function () {
      _this.playerHandler.target.unMute();
    };

    this.playerHandler.isMuted = function () {
      return _this.playerHandler.target.isMuted();
    };

    this.playerHandler.seekTo = function (time) {
      _this.playerHandler.target.seekTo(time);
    };
  };

  _proto.initializeUI = function initializeUI(player) {
    var _this3 = this;

    if (player.controlBar !== undefined) {
      var castComponent = document.createElement('google-cast-launcher');
      castComponent.setAttribute('class', 'vjs-chromecast-button');
      var jsControlBar = document.getElementsByClassName('vjs-control-bar');

      if (jsControlBar.length > 0) {
        jsControlBar[0].appendChild(castComponent);
      } // Avoids inconsistency in videojs


      player.controlBar.chromecastButton = this;
      player.controlBar.children_.push(this);
    } else {
      return;
    }

    this.on(player, 'seeked', function () {
      if (_this3.casting && _this3.apiSession) {
        _this3.seekMedia(_this3.player_.currentTime());
      }
    });
    this.on(player, 'play', function (el) {
      if (_this3.casting && _this3.apiSession) {
        _this3.playerHandler.play();
      }
    });
    this.on(player, 'pause', function (el) {
      if (_this3.casting && _this3.apiSession) {
        _this3.playerHandler.pause();
      }
    });
    this.on(player, 'volumechange', function (el) {
      if (_this3.casting && _this3.apiSession) {
        var volumeLevel = _this3.player_.volume();

        if (_this3.player_.muted()) {
          _this3.playerHandler.mute();

          volumeLevel = 0;
        } else {
          _this3.playerHandler.unMute();
        }

        _this3.playerHandler.setVolume(volumeLevel);
      }
    });
    this.on(player, 'loadedmetadata', function (el) {
      _this3.onMediaLoadedLocally(_this3);
    });
    this.on(player, 'dispose', function () {
      if (_this3.casting && _this3.apiSession) {
        _this3.disposed = true;

        _this3.stop();
      }
    });
  };

  _proto.hide = function hide() {
    _Button.prototype.hide.call(this);

    var castButton = document.getElementsByClassName('vjs-chromecast-button');

    if (castButton.length > 0) {
      castButton[0].style.display = 'none';
    }
  };

  _proto.show = function show() {
    _Button.prototype.show.call(this);

    var castButton = document.getElementsByClassName('vjs-chromecast-button');

    if (castButton.length > 0) {
      castButton[0].style.display = 'block';
    }
  };

  _proto.buildCSSClass = function buildCSSClass() {
    return "vjs-chromecast-button " + _Button.prototype.buildCSSClass.call(this, this);
  };

  _proto.receiverListener = function receiverListener(availability) {
    if (this.disposed) return;

    if (availability === 'available') {
      return this.show();
    }
    return this.hide();
  };

  _proto.findSources = function findSources() {
    var source = null;

    if (this.player_ === null) {
      if (this.player.cache_ !== undefined) {
        if (this.player.cache_.source != undefined) {
          source = this.player.cache_.source;
        }
      }
    } else {
      source = this.player_.currentSource();
    }

    this.sources = source;
    return this.sources;
  };

  _proto.switchPlayer = function switchPlayer(value) {
    this.playerStateBeforeSwitch = this.playerState;

    if (value) {
      if (cast && cast.framework && this.remotePlayer.isConnected) {
        this.playerHandler.pause();
        this.setupRemotePlayer();
      } else {
        this.setupLocalPlayer();
      }
    } else {
      // casting has ended so the session needs to be renewed
      this.setupLocalPlayer();
    }
  }
  /**
   * Add event listeners for player changes which may occur outside sender app.
   */
  ;

  _proto.setupRemotePlayer = function setupRemotePlayer() {
    // Triggers when the media info or the player state changes
    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.MEDIA_INFO_CHANGED, function (event) {
      var session = cast.framework.CastContext.getInstance().getCurrentSession();

      if (!session) {
        this.mediaInfo = null;
        this.playerHandler.updateDisplay();
        return;
      }

      var media = session.getMediaSession();

      if (!media) {
        this.mediaInfo = null;
        this.playerHandler.updateDisplay();
        return;
      }

      this.apiSession = session;
      this.mediaInfo = media.media;

      if (this.mediaInfo) {
        this.isLiveContent = this.mediaInfo.streamType == chrome.cast.media.StreamType.LIVE;
      }

      if (media.playerState == PLAYER_STATE$1.PLAYING && this.playerState !== PLAYER_STATE$1.PLAYING) {
        this.playerHandler.prepareToPlay();
      }

      this.playerHandler.updateDisplay();
    }.bind(this));
    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.CAN_SEEK_CHANGED, function (event) {//this.enableProgressBar(event.value);
    }.bind(this));
    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.IS_PAUSED_CHANGED, function () {
      if (this.remotePlayer.isPaused) {
        this.playerHandler.pause();
      } else if (this.playerState !== PLAYER_STATE$1.PLAYING) {
        this.playerHandler.play();
      }
    }.bind(this));
    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.IS_MUTED_CHANGED, function () {
      if (this.remotePlayer.isMuted) {
        this.playerHandler.mute();
      } else {
        this.playerHandler.unMute();
      }
    }.bind(this));
    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.VOLUME_LEVEL_CHANGED, function () {
      var newVolume = this.remotePlayer.volumeLevel;
      this.player_.setVolume(newVolume);
    }.bind(this));
    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.IS_PLAYING_BREAK_CHANGED, function (event) {
      this.isPlayingBreak(event.value);
    }.bind(this));
    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.WHEN_SKIPPABLE_CHANGED, function (event) {
      this.onWhenSkippableChanged(event.value);
    }.bind(this));
    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.CURRENT_BREAK_CLIP_TIME_CHANGED, function (event) {
      this.onCurrentBreakClipTimeChanged(event.value);
    }.bind(this));
    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.BREAK_CLIP_ID_CHANGED, function (event) {
      this.onBreakClipIdChanged(event.value);
    }.bind(this));
    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.LIVE_SEEKABLE_RANGE_CHANGED, function (event) {
      videojs.log('LIVE_SEEKABLE_RANGE_CHANGED');
      this.liveSeekableRange = event.value;
    }.bind(this)); // This object will implement PlayerHandler callbacks with
    // remotePlayerController, and makes necessary UI updates specific
    // to remote playback.

    var playerTarget = {};

    playerTarget.play = function () {
      if (this.remotePlayer.isPaused) {
        this.remotePlayerController.playOrPause();
        this.player_.play();
      }
    }.bind(this);

    playerTarget.pause = function () {
      if (!this.remotePlayer.isPaused) {
        this.remotePlayerController.playOrPause();
        this.player_.pause();
      }
    }.bind(this);

    playerTarget.stop = function () {
      this.remotePlayerController.stop();
    }.bind(this); // Load request for local -> remote


    playerTarget.load = function () {
      this.findSources();
      videojs.log('Loading...' + ' test');
      var mediaInfo = new chrome.cast.media.MediaInfo(this.sources.src, this.sources.type);
      mediaInfo.streamType = chrome.cast.media.StreamType.BUFFERED;
      mediaInfo.metadata = new chrome.cast.media.TvShowMediaMetadata();
      mediaInfo.metadata.title = 'test';
      mediaInfo.metadata.subtitle = 'subtest';
      var poster = this.player_.poster();

      if (poster) {
        image = new chrome.cast.Image(poster);
        mediaInfo.metadata.images = [{
          'url': image
        }];
      }

      var request = new chrome.cast.media.LoadRequest(mediaInfo);
      request.currentTime = this.currentMediaTime; // Do not immediately start playing if the player was previously PAUSED.

      if (!this.playerStateBeforeSwitch || this.playerStateBeforeSwitch == PLAYER_STATE$1.PAUSED) {
        request.autoplay = false;
      } else {
        request.autoplay = true;
      }

      cast.framework.CastContext.getInstance().getCurrentSession().loadMedia(request).then(function () {
        this.casting = true;
        videojs.log('Remote media loaded');
      }.bind(this), function (errorCode) {
        this.playerState = PLAYER_STATE$1.IDLE;
        videojs.log('Remote media load error: ' + this.getErrorMessage(errorCode));
        this.playerHandler.updateDisplay();
      }.bind(this));
    }.bind(this);

    playerTarget.isMediaLoaded = function () {
      var session = cast.framework.CastContext.getInstance().getCurrentSession();
      if (!session) return false;
      var media = session.getMediaSession();
      if (!media) return false;

      if (media.playerState == PLAYER_STATE$1.IDLE) {
        return false;
      }

      this.apiSession = session; // No need to verify local mediaIndex content.

      return true;
    }.bind(this);
    /**
     * @return {number?} Current media time for the content. Always returns
     *      media time even if in clock time (conversion done when displaying).
     */


    playerTarget.getCurrentMediaTime = function () {
      return this.remotePlayer.currentTime;
    }.bind(this);
    /**
     * @return {number?} media time duration for the content. Always returns
     *      media time even if in clock time (conversion done when displaying).
     */


    playerTarget.getMediaDuration = function () {
      return this.remotePlayer.duration;
    }.bind(this);

    playerTarget.updateDisplay = function () {
      var castSession = cast.framework.CastContext.getInstance().getCurrentSession();

      if (castSession && castSession.getMediaSession() && castSession.getMediaSession().media) {
        var media = castSession.getMediaSession();
        var mediaInfo = media.media;
        var mediaTitle = '';
        var mediaEpisodeTitle = '';
        var mediaSubtitle = '';

        if (mediaInfo.metadata) {
          mediaTitle = mediaInfo.metadata.title;
          mediaEpisodeTitle = mediaInfo.metadata.episodeTitle;
          mediaTitle = mediaEpisodeTitle ? mediaTitle + ': ' + mediaEpisodeTitle : mediaTitle;
          mediaTitle = mediaTitle ? mediaTitle + ' ' : '';
          mediaSubtitle = mediaInfo.metadata.subtitle;
          mediaSubtitle = mediaSubtitle ? mediaSubtitle + ' ' : '';
        }
      } else {
        // playerstate view
        // switch to local player
        this.currentTech.dispose();
        this.casting = false;
        var time = this.player_.currentTime();
        this.removeClass('connected');
        this.player_.src(this.player_.options_['sources']);

        if (!this.player_.paused()) {
          this.player_.one('seeked', function () {
            return this.player_.play();
          });
        }

        this.player_.currentTime(time);
        this.player_.options_.inactivityTimeout = this.inactivityTimeout; //this.apiSession = null;
      }
    }.bind(this);

    playerTarget.updateCurrentTimeDisplay = function () {
      this.playerHandler.setTimeString(this.playerHandler.getCurrentMediaTime());
    }.bind(this);

    playerTarget.updateDurationDisplay = function () {
      this.playerHandler.setTimeString(this.playerHandler.getMediaDuration());
    }.bind(this);

    playerTarget.setTimeString = function (time) {
      var currentTimeString = this.getMediaTimeString(time);
    }.bind(this);

    playerTarget.setVolume = function (volumePosition) {
      var currentVolume = this.remotePlayer.volumeLevel;

      if (volumePosition > 1) {
        currentVolume = 1;
      } else {
        currentVolume = volumePosition;
      }

      this.remotePlayer.volumeLevel = currentVolume;
      this.remotePlayerController.setVolumeLevel();
    }.bind(this);

    playerTarget.mute = function () {
      if (!this.remotePlayer.isMuted) {
        this.remotePlayerController.muteOrUnmute();
      }
    }.bind(this);

    playerTarget.unMute = function () {
      if (this.remotePlayer.isMuted) {
        this.remotePlayerController.muteOrUnmute();
      }
    }.bind(this);

    playerTarget.isMuted = function () {
      return this.remotePlayer.isMuted;
    }.bind(this);

    playerTarget.seekTo = function (time) {
      this.remotePlayer.currentTime = time;
      this.remotePlayerController.seek();
    }.bind(this);

    this.playerHandler.setTarget(playerTarget); // Setup remote player properties on setup

    if (this.remotePlayer.isMuted) {
      this.playerHandler.mute();
    } // The remote player may have had a volume set from previous playback
    //var currentVolume = this.remotePlayer.volumeLevel;
    //this.player_.setVolume(currentVolume);
    // Show media_control


    this.apiSession = cast.framework.CastContext.getInstance().getCurrentSession();
    this.player_.loadTech_('ChromecastTech', {
      cast_: this,
      apiSession: this.apiSession
    }); // If resuming a session, take the remote properties and continue the existing playback. Otherwise, load local content.

    if (this.apiSession == cast.framework.SessionState.SESSION_RESUMED) {
      videojs.log('Resuming session');
      this.playerHandler.prepareToPlay();
    } else {
      this.playerHandler.load();
    }
  };

  _proto.setupLocalPlayer = function setupLocalPlayer() {
    // This object will implement PlayerHandler callbacks with localPlayer
    var playerTarget = {};

    var _this = this;

    playerTarget.play = function () {
      //this.play();
      videojs.log("local player play");
    };

    playerTarget.pause = function () {
      //this.pause();
      videojs.log("local player pause");
    };

    playerTarget.stop = function () {
      //this.stop();
      videojs.log("local player stop");
    };

    playerTarget.load = function () {
      videojs.log("local player load");
    }.bind(this);

    playerTarget.isMediaLoaded = function () {
      this.findSources();
      return this.sources.src;
    }.bind(this);

    playerTarget.getCurrentMediaTime = function () {
      if (this.player_ !== undefined) {
        return this.player_.currentTime();
      } else if (_this.player_ !== undefined) {
        return _this.player_.currentTime();
      }
    };

    playerTarget.getMediaDuration = function () {
      if (this.player_ !== undefined) {
        return this.player_.duration();
      } else if (_this.player_ !== undefined) {
        return _this.player_.duration();
      }
    };

    playerTarget.updateDisplay = function () {// Do we need to change something in front view ?
    };

    playerTarget.updateCurrentTimeDisplay = function () {
      // Increment for local playback
      this.currentMediaTime += 1;
      this.playerHandler.setTimeString(this.currentMediaTime);
    }.bind(this);

    playerTarget.updateDurationDisplay = function () {
      this.playerHandler.setTimeString(this.mediaDuration);
    }.bind(this);

    playerTarget.setTimeString = function (time) {
      var currentTimeString = this.getMediaTimeString(time);
    }.bind(this);

    playerTarget.setVolume = function (volumePosition) {
      if (this.player_ !== undefined) {
        return this.player_.volume(volumePosition);
      } else if (_this.player_ !== undefined) {
        return _this.player_.volume(volumePosition);
      }
    };

    playerTarget.mute = function () {
      if (this.player_ !== undefined) {
        return this.player_.mute(true);
      } else if (_this.player_ !== undefined) {
        return _this.player_.mute(true);
      }
    };

    playerTarget.unMute = function () {
      if (this.player_ !== undefined) {
        return this.player_.mute(false);
      } else if (_this.player_ !== undefined) {
        return _this.player_.mute(false);
      }
    };

    playerTarget.isMuted = function () {
      if (this.player_ !== undefined) {
        return this.player_.mute();
      } else if (_this.player_ !== undefined) {
        return _this.player_.mute();
      }
    };

    playerTarget.seekTo = function (time) {
      if (this.player_ !== undefined) {
        return this.player_.currentTime(time);
      } else if (_this.player_ !== undefined) {
        return _this.player_.currentTime(time);
      }
    };

    this.playerHandler.setTarget(playerTarget);
    this.playerHandler.setVolume(DEFAULT_VOLUME * FULL_VOLUME_HEIGHT); //this.enableProgressBar(true);

    if (this.currentMediaTime > 0) {
      this.playerHandler.load();
      this.playerHandler.play();
    }
  };

  _proto.onMediaLoadedLocally = function onMediaLoadedLocally() {
    this.player_.currentTime(this.currentMediaTime);
    this.playerHandler.prepareToPlay();
  };

  _proto.addVideoThumbs = function addVideoThumbs() {
    /* Prepare thumbnails if we want to set them */
    // const poster = this.player_.poster();
  };

  _proto.seekMedia = function seekMedia(seekTime) {
    if (this.mediaDuration == null || cast.framework.CastContext.getInstance().getCurrentSession() && !this.remotePlayer.canSeek) {
      videojs.log('Error - Not seekable');
      return;
    }

    if (this.playerState === PLAYER_STATE$1.PLAYING || this.playerState === PLAYER_STATE$1.PAUSED) {
      this.currentMediaTime = seekTime;
    }

    this.playerHandler.seekTo(seekTime);
  };

  _proto.getErrorMessage = function getErrorMessage(error) {
    switch (error.code) {
      case chrome.cast.ErrorCode.API_NOT_INITIALIZED:
        return 'The API is not initialized.' + (error.description ? ' :' + error.description : '');

      case chrome.cast.ErrorCode.CANCEL:
        return 'The operation was canceled by the user' + (error.description ? ' :' + error.description : '');

      case chrome.cast.ErrorCode.CHANNEL_ERROR:
        return 'A channel to the receiver is not available.' + (error.description ? ' :' + error.description : '');

      case chrome.cast.ErrorCode.EXTENSION_MISSING:
        return 'The Cast extension is not available.' + (error.description ? ' :' + error.description : '');

      case chrome.cast.ErrorCode.INVALID_PARAMETER:
        return 'The parameters to the operation were not valid.' + (error.description ? ' :' + error.description : '');

      case chrome.cast.ErrorCode.RECEIVER_UNAVAILABLE:
        return 'No receiver was compatible with the session request.' + (error.description ? ' :' + error.description : '');

      case chrome.cast.ErrorCode.SESSION_ERROR:
        return 'A session could not be created, or a session was invalid.' + (error.description ? ' :' + error.description : '');

      case chrome.cast.ErrorCode.TIMEOUT:
        return 'The operation timed out.' + (error.description ? ' :' + error.description : '');

      default:
        return error;
    }
  };

  _proto.endPlayback = function endPlayback() {
    this.currentMediaTime = 0;
    this.playerState = PLAYER_STATE$1.IDLE;
    this.this.updateDisplay();
  };

  _proto.getMediaTimeString = function getMediaTimeString(timestamp) {
    if (timestamp == undefined || timestamp == null) {
      return null;
    }

    var isNegative = false;

    if (timestamp < 0) {
      isNegative = true;
      timestamp *= -1;
    }

    var hours = Math.floor(timestamp / 3600);
    var minutes = Math.floor((timestamp - hours * 3600) / 60);
    var seconds = Math.floor(timestamp - hours * 3600 - minutes * 60);
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    return (isNegative ? '-' : '') + hours + ':' + minutes + ':' + seconds;
  };

  _proto.getClockTimeString = function getClockTimeString(timestamp) {
    if (!timestamp) return "0:00:00";
    var date = new Date(timestamp * 1000);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12; // Hour '0' should be '12'

    hours = hours ? hours : 12;
    minutes = ('0' + minutes).slice(-2);
    seconds = ('0' + seconds).slice(-2);
    var clockTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    return clockTime;
  };

  _proto.incrementMediaTime = function incrementMediaTime() {
    // First sync with the current player's time
    this.currentMediaTime = this.playerHandler.getCurrentMediaTime();
    this.mediaDuration = this.playerHandler.getMediaDuration();
    this.playerHandler.updateDurationDisplay();

    if (this.mediaDuration == null || this.currentMediaTime < this.mediaDuration) {
      this.playerHandler.updateCurrentTimeDisplay();
    } else if (this.mediaDuration > 0) {
      this.endPlayback();
    }
  };

  return ChromecastButton;
}(Button$1);

ChromecastButton.prototype.tryingReconnect = 0;
ChromecastButton.prototype.inactivityTimeout = 2000;
ChromecastButton.prototype.controlText_ = 'Chromecast';
ControlBar$1.prototype.options_.children.splice(ControlBar$1.prototype.options_.children.length - 1, 0, 'chromeCastButton');

if (typeof Component$1.getComponent('ChromecastButton') === 'undefined') {
  Component$1.registerComponent('ChromecastButton', ChromecastButton);
}

var Component$2 = videojs.getComponent('Component');
var ControlBar$2 = videojs.getComponent('ControlBar');
var Button$2 = videojs.getComponent('Button');
var Tech$2 = videojs.getComponent('Tech');

var Chromecast = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Chromecast, _Component);

  function Chromecast(player, options) {
    var _this;

    _this = _Component.call(this, player, options) || this;
    var buttonChromecast = new ChromecastButton(player, options);

    window['__onGCastApiAvailable'] = function (isAvailable) {
      if (isAvailable) {
        buttonChromecast.initCastPlayer();
      }
    };

    return _this;
  }

  return Chromecast;
}(Component$2);

Chromecast.prototype.options_ = {};
videojs.options.children.push('chromecast');
videojs.addLanguage('en', {
  'CASTING TO': 'CASTING TO'
}); // Register the compnent with video.js, avoid double registration

if (typeof Component$2.getComponent('Chromecast') === 'undefined') {
  Component$2.registerComponent('Chromecast', Chromecast);
}

/**
 * Google Chromecast for VideoJS
 *
 * @function chromecast
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */

var chromecast = function chromecast(options) {
  var player = this;

  if (options === false || options && options.enabled === false) {
    return;
  }

  if (options.mdns !== undefined || options.mdns) {
    var mdns = new Mdns();
    var browser = mdns.createBrowser(mdns.getLibrary().tcp('googlecast'));
    browser.on('serviceUp', function (service) {
      console.log(service);
    });
    browser.on('serviceDown', function (service) {
      console.log(service);
    });

    if (browser.ready) {
      browser.browse();
    } else {
      browser.once('ready', function () {
        browser.browse();
      });
    }
  }

  var allowedOptions = ["appId", "altSource", "onStop", "onError"];
  allowedOptions.forEach(function (opt) {
    if (player.options_.chromecast === undefined) {
      player.options_.chromecast = [];
    }

    if (player.options_.chromecast[opt] === undefined) {
      options[opt] = '';
    } else {
      options[opt] = player.options_.chromecast[opt];
    }
  });
  var googleCast = new Chromecast(player, options);
}; // Cross-compatibility for Video.js 5 and 6.


var registerPlugin = videojs.registerPlugin || videojs.plugin; // Register the plugin with video.js, avoid double registration

if (typeof videojs.getPlugin('chromecast') === 'undefined') {
  registerPlugin('chromecast', chromecast);
} // Include the version number.


chromecast.VERSION = version;

module.exports = chromecast;
