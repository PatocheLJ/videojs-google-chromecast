(function () {
  var e = function (a) {
    return !!document.currentScript && (document.currentScript.src.indexOf('?' + a) != -1 || document.currentScript.src.indexOf('&' + a) != -1)
  }
  var f = e('loadGamesSDK') ? '/cast_game_sender.js' : '/cast_sender.js'
  var g = e('loadCastFramework') || e('loadCastApplicationFramework')
  var h = function () {
    return typeof window.__onGCastApiAvailable === 'function' ? window.__onGCastApiAvailable : null
  }
  var k = ['pkedcjkdefgpdelpbcmbmeomcjbeemfm', 'enhhojjnijigcajfphajepfemndkmdlo']
  var m = function (a) {
    a.length ? l(a.shift(), function () {
      m(a)
    }) : n()
  }
  var p = function (a) {
    return 'chrome-extension://' + a + f
  }
  var l = function (a, c, b) {
    var d = document.createElement('script')
    d.onerror = c
    b && (d.onload = b)
    d.src = a;
    (document.head || document.documentElement).appendChild(d)
  }
  var n = function () {
    var a = h()
    a && a(!1, 'No cast extension found')
  }
  var q = function () {
    if (g) {
      var a = 2
      var c = h()
      var b = function () {
        a--
        a == 0 && c && c(!0)
      }
      window.__onGCastApiAvailable = b
      l('//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js', n, b)
    }
  }
  if (/* 0 <= window.navigator.userAgent.indexOf("Android") && */ window.navigator.userAgent.indexOf('Chrome/') >= 0 && window.navigator.presentation) {
    q()
    var r = ['Chrome', '81']
    m(['//www.gstatic.com/eureka/clank/' + (r ? parseInt(r[1], 10) : 0) + f, '//www.gstatic.com/eureka/clank' + f])
  } else !window.chrome || !window.navigator.presentation || window.navigator.userAgent.indexOf('Edge') >= 0 ? n() : (q(), m(k.map(p)))
})()
