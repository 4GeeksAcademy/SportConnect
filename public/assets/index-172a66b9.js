function Nc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function Pc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var jc = { exports: {} },
  Fi = {},
  _c = { exports: {} },
  Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vl = Symbol.for("react.element"),
  Np = Symbol.for("react.portal"),
  Pp = Symbol.for("react.fragment"),
  jp = Symbol.for("react.strict_mode"),
  _p = Symbol.for("react.profiler"),
  Rp = Symbol.for("react.provider"),
  Lp = Symbol.for("react.context"),
  Tp = Symbol.for("react.forward_ref"),
  Dp = Symbol.for("react.suspense"),
  Mp = Symbol.for("react.memo"),
  zp = Symbol.for("react.lazy"),
  Qu = Symbol.iterator;
function Op(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Qu && e[Qu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Rc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Lc = Object.assign,
  Tc = {};
function mr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Tc),
    (this.updater = n || Rc);
}
mr.prototype.isReactComponent = {};
mr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
mr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Dc() {}
Dc.prototype = mr.prototype;
function Ma(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Tc),
    (this.updater = n || Rc);
}
var za = (Ma.prototype = new Dc());
za.constructor = Ma;
Lc(za, mr.prototype);
za.isPureReactComponent = !0;
var Ku = Array.isArray,
  Mc = Object.prototype.hasOwnProperty,
  Oa = { current: null },
  zc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Oc(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Mc.call(t, r) && !zc.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: vl,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Oa.current,
  };
}
function Fp(e, t) {
  return {
    $$typeof: vl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Fa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === vl;
}
function Ip(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Yu = /\/+/g;
function oo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Ip("" + e.key)
    : t.toString(36);
}
function Xl(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case vl:
          case Np:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + oo(o, 0) : r),
      Ku(l)
        ? ((n = ""),
          e != null && (n = e.replace(Yu, "$&/") + "/"),
          Xl(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (Fa(l) &&
            (l = Fp(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Yu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Ku(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var u = r + oo(i, a);
      o += Xl(i, t, n, u, l);
    }
  else if (((u = Op(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + oo(i, a++)), (o += Xl(i, t, n, u, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Ll(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Xl(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Up(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ae = { current: null },
  Gl = { transition: null },
  Ap = {
    ReactCurrentDispatcher: Ae,
    ReactCurrentBatchConfig: Gl,
    ReactCurrentOwner: Oa,
  };
function Fc() {
  throw Error("act(...) is not supported in production builds of React.");
}
Y.Children = {
  map: Ll,
  forEach: function (e, t, n) {
    Ll(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ll(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ll(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Fa(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Y.Component = mr;
Y.Fragment = Pp;
Y.Profiler = _p;
Y.PureComponent = Ma;
Y.StrictMode = jp;
Y.Suspense = Dp;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ap;
Y.act = Fc;
Y.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Lc({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Oa.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      Mc.call(t, u) &&
        !zc.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: vl, type: e.type, key: l, ref: i, props: r, _owner: o };
};
Y.createContext = function (e) {
  return (
    (e = {
      $$typeof: Lp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Rp, _context: e }),
    (e.Consumer = e)
  );
};
Y.createElement = Oc;
Y.createFactory = function (e) {
  var t = Oc.bind(null, e);
  return (t.type = e), t;
};
Y.createRef = function () {
  return { current: null };
};
Y.forwardRef = function (e) {
  return { $$typeof: Tp, render: e };
};
Y.isValidElement = Fa;
Y.lazy = function (e) {
  return { $$typeof: zp, _payload: { _status: -1, _result: e }, _init: Up };
};
Y.memo = function (e, t) {
  return { $$typeof: Mp, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function (e) {
  var t = Gl.transition;
  Gl.transition = {};
  try {
    e();
  } finally {
    Gl.transition = t;
  }
};
Y.unstable_act = Fc;
Y.useCallback = function (e, t) {
  return Ae.current.useCallback(e, t);
};
Y.useContext = function (e) {
  return Ae.current.useContext(e);
};
Y.useDebugValue = function () {};
Y.useDeferredValue = function (e) {
  return Ae.current.useDeferredValue(e);
};
Y.useEffect = function (e, t) {
  return Ae.current.useEffect(e, t);
};
Y.useId = function () {
  return Ae.current.useId();
};
Y.useImperativeHandle = function (e, t, n) {
  return Ae.current.useImperativeHandle(e, t, n);
};
Y.useInsertionEffect = function (e, t) {
  return Ae.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function (e, t) {
  return Ae.current.useLayoutEffect(e, t);
};
Y.useMemo = function (e, t) {
  return Ae.current.useMemo(e, t);
};
Y.useReducer = function (e, t, n) {
  return Ae.current.useReducer(e, t, n);
};
Y.useRef = function (e) {
  return Ae.current.useRef(e);
};
Y.useState = function (e) {
  return Ae.current.useState(e);
};
Y.useSyncExternalStore = function (e, t, n) {
  return Ae.current.useSyncExternalStore(e, t, n);
};
Y.useTransition = function () {
  return Ae.current.useTransition();
};
Y.version = "18.3.1";
_c.exports = Y;
var N = _c.exports;
const Lt = Pc(N),
  Bp = Nc({ __proto__: null, default: Lt }, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $p = N,
  Hp = Symbol.for("react.element"),
  Vp = Symbol.for("react.fragment"),
  Wp = Object.prototype.hasOwnProperty,
  Qp = $p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Kp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ic(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Wp.call(t, r) && !Kp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Hp,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Qp.current,
  };
}
Fi.Fragment = Vp;
Fi.jsx = Ic;
Fi.jsxs = Ic;
jc.exports = Fi;
var g = jc.exports,
  Fo = {},
  Uc = { exports: {} },
  be = {},
  Ac = { exports: {} },
  Bc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, H) {
    var V = L.length;
    L.push(H);
    e: for (; 0 < V; ) {
      var te = (V - 1) >>> 1,
        ne = L[te];
      if (0 < l(ne, H)) (L[te] = H), (L[V] = ne), (V = te);
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var H = L[0],
      V = L.pop();
    if (V !== H) {
      L[0] = V;
      e: for (var te = 0, ne = L.length, st = ne >>> 1; te < st; ) {
        var Ye = 2 * (te + 1) - 1,
          ze = L[Ye],
          Oe = Ye + 1,
          tt = L[Oe];
        if (0 > l(ze, V))
          Oe < ne && 0 > l(tt, ze)
            ? ((L[te] = tt), (L[Oe] = V), (te = Oe))
            : ((L[te] = ze), (L[Ye] = V), (te = Ye));
        else if (Oe < ne && 0 > l(tt, V)) (L[te] = tt), (L[Oe] = V), (te = Oe);
        else break e;
      }
    }
    return H;
  }
  function l(L, H) {
    var V = L.sortIndex - H.sortIndex;
    return V !== 0 ? V : L.id - H.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var u = [],
    s = [],
    f = 1,
    d = null,
    h = 3,
    x = !1,
    E = !1,
    k = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(L) {
    for (var H = n(s); H !== null; ) {
      if (H.callback === null) r(s);
      else if (H.startTime <= L)
        r(s), (H.sortIndex = H.expirationTime), t(u, H);
      else break;
      H = n(s);
    }
  }
  function C(L) {
    if (((k = !1), v(L), !E))
      if (n(u) !== null) (E = !0), At(j);
      else {
        var H = n(s);
        H !== null && Bt(C, H.startTime - L);
      }
  }
  function j(L, H) {
    (E = !1), k && ((k = !1), p(_), (_ = -1)), (x = !0);
    var V = h;
    try {
      for (
        v(H), d = n(u);
        d !== null && (!(d.expirationTime > H) || (L && !ee()));

      ) {
        var te = d.callback;
        if (typeof te == "function") {
          (d.callback = null), (h = d.priorityLevel);
          var ne = te(d.expirationTime <= H);
          (H = e.unstable_now()),
            typeof ne == "function" ? (d.callback = ne) : d === n(u) && r(u),
            v(H);
        } else r(u);
        d = n(u);
      }
      if (d !== null) var st = !0;
      else {
        var Ye = n(s);
        Ye !== null && Bt(C, Ye.startTime - H), (st = !1);
      }
      return st;
    } finally {
      (d = null), (h = V), (x = !1);
    }
  }
  var z = !1,
    y = null,
    _ = -1,
    $ = 5,
    D = -1;
  function ee() {
    return !(e.unstable_now() - D < $);
  }
  function re() {
    if (y !== null) {
      var L = e.unstable_now();
      D = L;
      var H = !0;
      try {
        H = y(!0, L);
      } finally {
        H ? xe() : ((z = !1), (y = null));
      }
    } else z = !1;
  }
  var xe;
  if (typeof c == "function")
    xe = function () {
      c(re);
    };
  else if (typeof MessageChannel < "u") {
    var Ne = new MessageChannel(),
      ut = Ne.port2;
    (Ne.port1.onmessage = re),
      (xe = function () {
        ut.postMessage(null);
      });
  } else
    xe = function () {
      T(re, 0);
    };
  function At(L) {
    (y = L), z || ((z = !0), xe());
  }
  function Bt(L, H) {
    _ = T(function () {
      L(e.unstable_now());
    }, H);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      E || x || ((E = !0), At(j));
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : ($ = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (L) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = h;
      }
      var V = h;
      h = H;
      try {
        return L();
      } finally {
        h = V;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, H) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var V = h;
      h = L;
      try {
        return H();
      } finally {
        h = V;
      }
    }),
    (e.unstable_scheduleCallback = function (L, H, V) {
      var te = e.unstable_now();
      switch (
        (typeof V == "object" && V !== null
          ? ((V = V.delay), (V = typeof V == "number" && 0 < V ? te + V : te))
          : (V = te),
        L)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = V + ne),
        (L = {
          id: f++,
          callback: H,
          priorityLevel: L,
          startTime: V,
          expirationTime: ne,
          sortIndex: -1,
        }),
        V > te
          ? ((L.sortIndex = V),
            t(s, L),
            n(u) === null &&
              L === n(s) &&
              (k ? (p(_), (_ = -1)) : (k = !0), Bt(C, V - te)))
          : ((L.sortIndex = ne), t(u, L), E || x || ((E = !0), At(j))),
        L
      );
    }),
    (e.unstable_shouldYield = ee),
    (e.unstable_wrapCallback = function (L) {
      var H = h;
      return function () {
        var V = h;
        h = H;
        try {
          return L.apply(this, arguments);
        } finally {
          h = V;
        }
      };
    });
})(Bc);
Ac.exports = Bc;
var Yp = Ac.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xp = N,
  qe = Yp;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var $c = new Set(),
  Gr = {};
function zn(e, t) {
  ar(e, t), ar(e + "Capture", t);
}
function ar(e, t) {
  for (Gr[e] = t, e = 0; e < t.length; e++) $c.add(t[e]);
}
var Mt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Io = Object.prototype.hasOwnProperty,
  Gp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Xu = {},
  Gu = {};
function Jp(e) {
  return Io.call(Gu, e)
    ? !0
    : Io.call(Xu, e)
    ? !1
    : Gp.test(e)
    ? (Gu[e] = !0)
    : ((Xu[e] = !0), !1);
}
function Zp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function qp(e, t, n, r) {
  if (t === null || typeof t > "u" || Zp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Be(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var Re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Re[e] = new Be(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Re[t] = new Be(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Re[e] = new Be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Re[e] = new Be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Re[e] = new Be(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Re[e] = new Be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Re[e] = new Be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Re[e] = new Be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Re[e] = new Be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ia = /[\-:]([a-z])/g;
function Ua(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ia, Ua);
    Re[t] = new Be(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ia, Ua);
    Re[t] = new Be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ia, Ua);
  Re[t] = new Be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Re[e] = new Be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Re.xlinkHref = new Be(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Re[e] = new Be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Aa(e, t, n, r) {
  var l = Re.hasOwnProperty(t) ? Re[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (qp(t, n, l, r) && (n = null),
    r || l === null
      ? Jp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var It = Xp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Tl = Symbol.for("react.element"),
  Vn = Symbol.for("react.portal"),
  Wn = Symbol.for("react.fragment"),
  Ba = Symbol.for("react.strict_mode"),
  Uo = Symbol.for("react.profiler"),
  Hc = Symbol.for("react.provider"),
  Vc = Symbol.for("react.context"),
  $a = Symbol.for("react.forward_ref"),
  Ao = Symbol.for("react.suspense"),
  Bo = Symbol.for("react.suspense_list"),
  Ha = Symbol.for("react.memo"),
  Qt = Symbol.for("react.lazy"),
  Wc = Symbol.for("react.offscreen"),
  Ju = Symbol.iterator;
function Cr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ju && e[Ju]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var fe = Object.assign,
  ao;
function Or(e) {
  if (ao === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ao = (t && t[1]) || "";
    }
  return (
    `
` +
    ao +
    e
  );
}
var uo = !1;
function so(e, t) {
  if (!e || uo) return "";
  uo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && l[o] !== i[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (l[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || l[o] !== i[a])) {
                var u =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (uo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Or(e) : "";
}
function bp(e) {
  switch (e.tag) {
    case 5:
      return Or(e.type);
    case 16:
      return Or("Lazy");
    case 13:
      return Or("Suspense");
    case 19:
      return Or("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = so(e.type, !1)), e;
    case 11:
      return (e = so(e.type.render, !1)), e;
    case 1:
      return (e = so(e.type, !0)), e;
    default:
      return "";
  }
}
function $o(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Wn:
      return "Fragment";
    case Vn:
      return "Portal";
    case Uo:
      return "Profiler";
    case Ba:
      return "StrictMode";
    case Ao:
      return "Suspense";
    case Bo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Vc:
        return (e.displayName || "Context") + ".Consumer";
      case Hc:
        return (e._context.displayName || "Context") + ".Provider";
      case $a:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ha:
        return (
          (t = e.displayName || null), t !== null ? t : $o(e.type) || "Memo"
        );
      case Qt:
        (t = e._payload), (e = e._init);
        try {
          return $o(e(t));
        } catch {}
    }
  return null;
}
function eh(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return $o(t);
    case 8:
      return t === Ba ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function un(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Qc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function th(e) {
  var t = Qc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Dl(e) {
  e._valueTracker || (e._valueTracker = th(e));
}
function Kc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Qc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ai(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ho(e, t) {
  var n = t.checked;
  return fe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Zu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = un(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Yc(e, t) {
  (t = t.checked), t != null && Aa(e, "checked", t, !1);
}
function Vo(e, t) {
  Yc(e, t);
  var n = un(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Wo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Wo(e, t.type, un(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function qu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Wo(e, t, n) {
  (t !== "number" || ai(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Fr = Array.isArray;
function tr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + un(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Qo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return fe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function bu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (Fr(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: un(n) };
}
function Xc(e, t) {
  var n = un(t.value),
    r = un(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function es(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Gc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ko(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Gc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ml,
  Jc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ml = Ml || document.createElement("div"),
          Ml.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ml.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Jr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Br = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  nh = ["Webkit", "ms", "Moz", "O"];
Object.keys(Br).forEach(function (e) {
  nh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Br[t] = Br[e]);
  });
});
function Zc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Br.hasOwnProperty(e) && Br[e])
    ? ("" + t).trim()
    : t + "px";
}
function qc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Zc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var rh = fe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Yo(e, t) {
  if (t) {
    if (rh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function Xo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Go = null;
function Va(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Jo = null,
  nr = null,
  rr = null;
function ts(e) {
  if ((e = wl(e))) {
    if (typeof Jo != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = $i(t)), Jo(e.stateNode, e.type, t));
  }
}
function bc(e) {
  nr ? (rr ? rr.push(e) : (rr = [e])) : (nr = e);
}
function ed() {
  if (nr) {
    var e = nr,
      t = rr;
    if (((rr = nr = null), ts(e), t)) for (e = 0; e < t.length; e++) ts(t[e]);
  }
}
function td(e, t) {
  return e(t);
}
function nd() {}
var co = !1;
function rd(e, t, n) {
  if (co) return e(t, n);
  co = !0;
  try {
    return td(e, t, n);
  } finally {
    (co = !1), (nr !== null || rr !== null) && (nd(), ed());
  }
}
function Zr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = $i(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var Zo = !1;
if (Mt)
  try {
    var Nr = {};
    Object.defineProperty(Nr, "passive", {
      get: function () {
        Zo = !0;
      },
    }),
      window.addEventListener("test", Nr, Nr),
      window.removeEventListener("test", Nr, Nr);
  } catch {
    Zo = !1;
  }
function lh(e, t, n, r, l, i, o, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (f) {
    this.onError(f);
  }
}
var $r = !1,
  ui = null,
  si = !1,
  qo = null,
  ih = {
    onError: function (e) {
      ($r = !0), (ui = e);
    },
  };
function oh(e, t, n, r, l, i, o, a, u) {
  ($r = !1), (ui = null), lh.apply(ih, arguments);
}
function ah(e, t, n, r, l, i, o, a, u) {
  if ((oh.apply(this, arguments), $r)) {
    if ($r) {
      var s = ui;
      ($r = !1), (ui = null);
    } else throw Error(R(198));
    si || ((si = !0), (qo = s));
  }
}
function On(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ld(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ns(e) {
  if (On(e) !== e) throw Error(R(188));
}
function uh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = On(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return ns(l), e;
        if (i === r) return ns(l), t;
        i = i.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, a = l.child; a; ) {
        if (a === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (a === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (a === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function id(e) {
  return (e = uh(e)), e !== null ? od(e) : null;
}
function od(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = od(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ad = qe.unstable_scheduleCallback,
  rs = qe.unstable_cancelCallback,
  sh = qe.unstable_shouldYield,
  ch = qe.unstable_requestPaint,
  ge = qe.unstable_now,
  dh = qe.unstable_getCurrentPriorityLevel,
  Wa = qe.unstable_ImmediatePriority,
  ud = qe.unstable_UserBlockingPriority,
  ci = qe.unstable_NormalPriority,
  fh = qe.unstable_LowPriority,
  sd = qe.unstable_IdlePriority,
  Ii = null,
  Et = null;
function ph(e) {
  if (Et && typeof Et.onCommitFiberRoot == "function")
    try {
      Et.onCommitFiberRoot(Ii, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var mt = Math.clz32 ? Math.clz32 : vh,
  hh = Math.log,
  mh = Math.LN2;
function vh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((hh(e) / mh) | 0)) | 0;
}
var zl = 64,
  Ol = 4194304;
function Ir(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function di(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~l;
    a !== 0 ? (r = Ir(a)) : ((i &= o), i !== 0 && (r = Ir(i)));
  } else (o = n & ~l), o !== 0 ? (r = Ir(o)) : i !== 0 && (r = Ir(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - mt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function gh(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function yh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - mt(i),
      a = 1 << o,
      u = l[o];
    u === -1
      ? (!(a & n) || a & r) && (l[o] = gh(a, t))
      : u <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function bo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function cd() {
  var e = zl;
  return (zl <<= 1), !(zl & 4194240) && (zl = 64), e;
}
function fo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function gl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - mt(t)),
    (e[t] = n);
}
function wh(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - mt(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Qa(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - mt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var b = 0;
function dd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var fd,
  Ka,
  pd,
  hd,
  md,
  ea = !1,
  Fl = [],
  bt = null,
  en = null,
  tn = null,
  qr = new Map(),
  br = new Map(),
  Xt = [],
  xh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ls(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      bt = null;
      break;
    case "dragenter":
    case "dragleave":
      en = null;
      break;
    case "mouseover":
    case "mouseout":
      tn = null;
      break;
    case "pointerover":
    case "pointerout":
      qr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      br.delete(t.pointerId);
  }
}
function Pr(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = wl(t)), t !== null && Ka(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Sh(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (bt = Pr(bt, e, t, n, r, l)), !0;
    case "dragenter":
      return (en = Pr(en, e, t, n, r, l)), !0;
    case "mouseover":
      return (tn = Pr(tn, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return qr.set(i, Pr(qr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), br.set(i, Pr(br.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function vd(e) {
  var t = En(e.target);
  if (t !== null) {
    var n = On(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ld(n)), t !== null)) {
          (e.blockedOn = t),
            md(e.priority, function () {
              pd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Jl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ta(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Go = r), n.target.dispatchEvent(r), (Go = null);
    } else return (t = wl(n)), t !== null && Ka(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function is(e, t, n) {
  Jl(e) && n.delete(t);
}
function Eh() {
  (ea = !1),
    bt !== null && Jl(bt) && (bt = null),
    en !== null && Jl(en) && (en = null),
    tn !== null && Jl(tn) && (tn = null),
    qr.forEach(is),
    br.forEach(is);
}
function jr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ea ||
      ((ea = !0),
      qe.unstable_scheduleCallback(qe.unstable_NormalPriority, Eh)));
}
function el(e) {
  function t(l) {
    return jr(l, e);
  }
  if (0 < Fl.length) {
    jr(Fl[0], e);
    for (var n = 1; n < Fl.length; n++) {
      var r = Fl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    bt !== null && jr(bt, e),
      en !== null && jr(en, e),
      tn !== null && jr(tn, e),
      qr.forEach(t),
      br.forEach(t),
      n = 0;
    n < Xt.length;
    n++
  )
    (r = Xt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Xt.length && ((n = Xt[0]), n.blockedOn === null); )
    vd(n), n.blockedOn === null && Xt.shift();
}
var lr = It.ReactCurrentBatchConfig,
  fi = !0;
function kh(e, t, n, r) {
  var l = b,
    i = lr.transition;
  lr.transition = null;
  try {
    (b = 1), Ya(e, t, n, r);
  } finally {
    (b = l), (lr.transition = i);
  }
}
function Ch(e, t, n, r) {
  var l = b,
    i = lr.transition;
  lr.transition = null;
  try {
    (b = 4), Ya(e, t, n, r);
  } finally {
    (b = l), (lr.transition = i);
  }
}
function Ya(e, t, n, r) {
  if (fi) {
    var l = ta(e, t, n, r);
    if (l === null) Eo(e, t, r, pi, n), ls(e, r);
    else if (Sh(l, e, t, n, r)) r.stopPropagation();
    else if ((ls(e, r), t & 4 && -1 < xh.indexOf(e))) {
      for (; l !== null; ) {
        var i = wl(l);
        if (
          (i !== null && fd(i),
          (i = ta(e, t, n, r)),
          i === null && Eo(e, t, r, pi, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Eo(e, t, r, null, n);
  }
}
var pi = null;
function ta(e, t, n, r) {
  if (((pi = null), (e = Va(r)), (e = En(e)), e !== null))
    if (((t = On(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ld(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (pi = e), null;
}
function gd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (dh()) {
        case Wa:
          return 1;
        case ud:
          return 4;
        case ci:
        case fh:
          return 16;
        case sd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Jt = null,
  Xa = null,
  Zl = null;
function yd() {
  if (Zl) return Zl;
  var e,
    t = Xa,
    n = t.length,
    r,
    l = "value" in Jt ? Jt.value : Jt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Zl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function ql(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Il() {
  return !0;
}
function os() {
  return !1;
}
function et(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Il
        : os),
      (this.isPropagationStopped = os),
      this
    );
  }
  return (
    fe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Il));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Il));
      },
      persist: function () {},
      isPersistent: Il,
    }),
    t
  );
}
var vr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ga = et(vr),
  yl = fe({}, vr, { view: 0, detail: 0 }),
  Nh = et(yl),
  po,
  ho,
  _r,
  Ui = fe({}, yl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ja,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== _r &&
            (_r && e.type === "mousemove"
              ? ((po = e.screenX - _r.screenX), (ho = e.screenY - _r.screenY))
              : (ho = po = 0),
            (_r = e)),
          po);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ho;
    },
  }),
  as = et(Ui),
  Ph = fe({}, Ui, { dataTransfer: 0 }),
  jh = et(Ph),
  _h = fe({}, yl, { relatedTarget: 0 }),
  mo = et(_h),
  Rh = fe({}, vr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Lh = et(Rh),
  Th = fe({}, vr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Dh = et(Th),
  Mh = fe({}, vr, { data: 0 }),
  us = et(Mh),
  zh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Oh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Fh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Ih(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Fh[e]) ? !!t[e] : !1;
}
function Ja() {
  return Ih;
}
var Uh = fe({}, yl, {
    key: function (e) {
      if (e.key) {
        var t = zh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ql(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Oh[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ja,
    charCode: function (e) {
      return e.type === "keypress" ? ql(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ql(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Ah = et(Uh),
  Bh = fe({}, Ui, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ss = et(Bh),
  $h = fe({}, yl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ja,
  }),
  Hh = et($h),
  Vh = fe({}, vr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Wh = et(Vh),
  Qh = fe({}, Ui, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Kh = et(Qh),
  Yh = [9, 13, 27, 32],
  Za = Mt && "CompositionEvent" in window,
  Hr = null;
Mt && "documentMode" in document && (Hr = document.documentMode);
var Xh = Mt && "TextEvent" in window && !Hr,
  wd = Mt && (!Za || (Hr && 8 < Hr && 11 >= Hr)),
  cs = String.fromCharCode(32),
  ds = !1;
function xd(e, t) {
  switch (e) {
    case "keyup":
      return Yh.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Sd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Qn = !1;
function Gh(e, t) {
  switch (e) {
    case "compositionend":
      return Sd(t);
    case "keypress":
      return t.which !== 32 ? null : ((ds = !0), cs);
    case "textInput":
      return (e = t.data), e === cs && ds ? null : e;
    default:
      return null;
  }
}
function Jh(e, t) {
  if (Qn)
    return e === "compositionend" || (!Za && xd(e, t))
      ? ((e = yd()), (Zl = Xa = Jt = null), (Qn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return wd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Zh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function fs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Zh[e.type] : t === "textarea";
}
function Ed(e, t, n, r) {
  bc(r),
    (t = hi(t, "onChange")),
    0 < t.length &&
      ((n = new Ga("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Vr = null,
  tl = null;
function qh(e) {
  Md(e, 0);
}
function Ai(e) {
  var t = Xn(e);
  if (Kc(t)) return e;
}
function bh(e, t) {
  if (e === "change") return t;
}
var kd = !1;
if (Mt) {
  var vo;
  if (Mt) {
    var go = "oninput" in document;
    if (!go) {
      var ps = document.createElement("div");
      ps.setAttribute("oninput", "return;"),
        (go = typeof ps.oninput == "function");
    }
    vo = go;
  } else vo = !1;
  kd = vo && (!document.documentMode || 9 < document.documentMode);
}
function hs() {
  Vr && (Vr.detachEvent("onpropertychange", Cd), (tl = Vr = null));
}
function Cd(e) {
  if (e.propertyName === "value" && Ai(tl)) {
    var t = [];
    Ed(t, tl, e, Va(e)), rd(qh, t);
  }
}
function em(e, t, n) {
  e === "focusin"
    ? (hs(), (Vr = t), (tl = n), Vr.attachEvent("onpropertychange", Cd))
    : e === "focusout" && hs();
}
function tm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ai(tl);
}
function nm(e, t) {
  if (e === "click") return Ai(t);
}
function rm(e, t) {
  if (e === "input" || e === "change") return Ai(t);
}
function lm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var gt = typeof Object.is == "function" ? Object.is : lm;
function nl(e, t) {
  if (gt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Io.call(t, l) || !gt(e[l], t[l])) return !1;
  }
  return !0;
}
function ms(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function vs(e, t) {
  var n = ms(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ms(n);
  }
}
function Nd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Nd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Pd() {
  for (var e = window, t = ai(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ai(e.document);
  }
  return t;
}
function qa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function im(e) {
  var t = Pd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Nd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && qa(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = vs(n, i));
        var o = vs(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var om = Mt && "documentMode" in document && 11 >= document.documentMode,
  Kn = null,
  na = null,
  Wr = null,
  ra = !1;
function gs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ra ||
    Kn == null ||
    Kn !== ai(r) ||
    ((r = Kn),
    "selectionStart" in r && qa(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Wr && nl(Wr, r)) ||
      ((Wr = r),
      (r = hi(na, "onSelect")),
      0 < r.length &&
        ((t = new Ga("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Kn))));
}
function Ul(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Yn = {
    animationend: Ul("Animation", "AnimationEnd"),
    animationiteration: Ul("Animation", "AnimationIteration"),
    animationstart: Ul("Animation", "AnimationStart"),
    transitionend: Ul("Transition", "TransitionEnd"),
  },
  yo = {},
  jd = {};
Mt &&
  ((jd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Yn.animationend.animation,
    delete Yn.animationiteration.animation,
    delete Yn.animationstart.animation),
  "TransitionEvent" in window || delete Yn.transitionend.transition);
function Bi(e) {
  if (yo[e]) return yo[e];
  if (!Yn[e]) return e;
  var t = Yn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in jd) return (yo[e] = t[n]);
  return e;
}
var _d = Bi("animationend"),
  Rd = Bi("animationiteration"),
  Ld = Bi("animationstart"),
  Td = Bi("transitionend"),
  Dd = new Map(),
  ys =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function cn(e, t) {
  Dd.set(e, t), zn(t, [e]);
}
for (var wo = 0; wo < ys.length; wo++) {
  var xo = ys[wo],
    am = xo.toLowerCase(),
    um = xo[0].toUpperCase() + xo.slice(1);
  cn(am, "on" + um);
}
cn(_d, "onAnimationEnd");
cn(Rd, "onAnimationIteration");
cn(Ld, "onAnimationStart");
cn("dblclick", "onDoubleClick");
cn("focusin", "onFocus");
cn("focusout", "onBlur");
cn(Td, "onTransitionEnd");
ar("onMouseEnter", ["mouseout", "mouseover"]);
ar("onMouseLeave", ["mouseout", "mouseover"]);
ar("onPointerEnter", ["pointerout", "pointerover"]);
ar("onPointerLeave", ["pointerout", "pointerover"]);
zn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
zn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
zn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
zn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
zn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ur =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  sm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));
function ws(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), ah(r, t, void 0, e), (e.currentTarget = null);
}
function Md(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== i && l.isPropagationStopped())) break e;
          ws(l, a, s), (i = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== i && l.isPropagationStopped())
          )
            break e;
          ws(l, a, s), (i = u);
        }
    }
  }
  if (si) throw ((e = qo), (si = !1), (qo = null), e);
}
function oe(e, t) {
  var n = t[ua];
  n === void 0 && (n = t[ua] = new Set());
  var r = e + "__bubble";
  n.has(r) || (zd(t, e, 2, !1), n.add(r));
}
function So(e, t, n) {
  var r = 0;
  t && (r |= 4), zd(n, e, r, t);
}
var Al = "_reactListening" + Math.random().toString(36).slice(2);
function rl(e) {
  if (!e[Al]) {
    (e[Al] = !0),
      $c.forEach(function (n) {
        n !== "selectionchange" && (sm.has(n) || So(n, !1, e), So(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Al] || ((t[Al] = !0), So("selectionchange", !1, t));
  }
}
function zd(e, t, n, r) {
  switch (gd(t)) {
    case 1:
      var l = kh;
      break;
    case 4:
      l = Ch;
      break;
    default:
      l = Ya;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Zo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Eo(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = En(a)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  rd(function () {
    var s = i,
      f = Va(n),
      d = [];
    e: {
      var h = Dd.get(e);
      if (h !== void 0) {
        var x = Ga,
          E = e;
        switch (e) {
          case "keypress":
            if (ql(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Ah;
            break;
          case "focusin":
            (E = "focus"), (x = mo);
            break;
          case "focusout":
            (E = "blur"), (x = mo);
            break;
          case "beforeblur":
          case "afterblur":
            x = mo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = as;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = jh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Hh;
            break;
          case _d:
          case Rd:
          case Ld:
            x = Lh;
            break;
          case Td:
            x = Wh;
            break;
          case "scroll":
            x = Nh;
            break;
          case "wheel":
            x = Kh;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Dh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = ss;
        }
        var k = (t & 4) !== 0,
          T = !k && e === "scroll",
          p = k ? (h !== null ? h + "Capture" : null) : h;
        k = [];
        for (var c = s, v; c !== null; ) {
          v = c;
          var C = v.stateNode;
          if (
            (v.tag === 5 &&
              C !== null &&
              ((v = C),
              p !== null && ((C = Zr(c, p)), C != null && k.push(ll(c, C, v)))),
            T)
          )
            break;
          c = c.return;
        }
        0 < k.length &&
          ((h = new x(h, E, null, n, f)), d.push({ event: h, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Go &&
            (E = n.relatedTarget || n.fromElement) &&
            (En(E) || E[zt]))
        )
          break e;
        if (
          (x || h) &&
          ((h =
            f.window === f
              ? f
              : (h = f.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          x
            ? ((E = n.relatedTarget || n.toElement),
              (x = s),
              (E = E ? En(E) : null),
              E !== null &&
                ((T = On(E)), E !== T || (E.tag !== 5 && E.tag !== 6)) &&
                (E = null))
            : ((x = null), (E = s)),
          x !== E)
        ) {
          if (
            ((k = as),
            (C = "onMouseLeave"),
            (p = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = ss),
              (C = "onPointerLeave"),
              (p = "onPointerEnter"),
              (c = "pointer")),
            (T = x == null ? h : Xn(x)),
            (v = E == null ? h : Xn(E)),
            (h = new k(C, c + "leave", x, n, f)),
            (h.target = T),
            (h.relatedTarget = v),
            (C = null),
            En(f) === s &&
              ((k = new k(p, c + "enter", E, n, f)),
              (k.target = v),
              (k.relatedTarget = T),
              (C = k)),
            (T = C),
            x && E)
          )
            t: {
              for (k = x, p = E, c = 0, v = k; v; v = Bn(v)) c++;
              for (v = 0, C = p; C; C = Bn(C)) v++;
              for (; 0 < c - v; ) (k = Bn(k)), c--;
              for (; 0 < v - c; ) (p = Bn(p)), v--;
              for (; c--; ) {
                if (k === p || (p !== null && k === p.alternate)) break t;
                (k = Bn(k)), (p = Bn(p));
              }
              k = null;
            }
          else k = null;
          x !== null && xs(d, h, x, k, !1),
            E !== null && T !== null && xs(d, T, E, k, !0);
        }
      }
      e: {
        if (
          ((h = s ? Xn(s) : window),
          (x = h.nodeName && h.nodeName.toLowerCase()),
          x === "select" || (x === "input" && h.type === "file"))
        )
          var j = bh;
        else if (fs(h))
          if (kd) j = rm;
          else {
            j = tm;
            var z = em;
          }
        else
          (x = h.nodeName) &&
            x.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (j = nm);
        if (j && (j = j(e, s))) {
          Ed(d, j, n, f);
          break e;
        }
        z && z(e, h, s),
          e === "focusout" &&
            (z = h._wrapperState) &&
            z.controlled &&
            h.type === "number" &&
            Wo(h, "number", h.value);
      }
      switch (((z = s ? Xn(s) : window), e)) {
        case "focusin":
          (fs(z) || z.contentEditable === "true") &&
            ((Kn = z), (na = s), (Wr = null));
          break;
        case "focusout":
          Wr = na = Kn = null;
          break;
        case "mousedown":
          ra = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ra = !1), gs(d, n, f);
          break;
        case "selectionchange":
          if (om) break;
        case "keydown":
        case "keyup":
          gs(d, n, f);
      }
      var y;
      if (Za)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        Qn
          ? xd(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (wd &&
          n.locale !== "ko" &&
          (Qn || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && Qn && (y = yd())
            : ((Jt = f),
              (Xa = "value" in Jt ? Jt.value : Jt.textContent),
              (Qn = !0))),
        (z = hi(s, _)),
        0 < z.length &&
          ((_ = new us(_, e, null, n, f)),
          d.push({ event: _, listeners: z }),
          y ? (_.data = y) : ((y = Sd(n)), y !== null && (_.data = y)))),
        (y = Xh ? Gh(e, n) : Jh(e, n)) &&
          ((s = hi(s, "onBeforeInput")),
          0 < s.length &&
            ((f = new us("onBeforeInput", "beforeinput", null, n, f)),
            d.push({ event: f, listeners: s }),
            (f.data = y)));
    }
    Md(d, t);
  });
}
function ll(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function hi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Zr(e, n)),
      i != null && r.unshift(ll(e, i, l)),
      (i = Zr(e, t)),
      i != null && r.push(ll(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Bn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function xs(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      l
        ? ((u = Zr(n, i)), u != null && o.unshift(ll(n, u, a)))
        : l || ((u = Zr(n, i)), u != null && o.push(ll(n, u, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var cm = /\r\n?/g,
  dm = /\u0000|\uFFFD/g;
function Ss(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      cm,
      `
`
    )
    .replace(dm, "");
}
function Bl(e, t, n) {
  if (((t = Ss(t)), Ss(e) !== t && n)) throw Error(R(425));
}
function mi() {}
var la = null,
  ia = null;
function oa(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var aa = typeof setTimeout == "function" ? setTimeout : void 0,
  fm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Es = typeof Promise == "function" ? Promise : void 0,
  pm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Es < "u"
      ? function (e) {
          return Es.resolve(null).then(e).catch(hm);
        }
      : aa;
function hm(e) {
  setTimeout(function () {
    throw e;
  });
}
function ko(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), el(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  el(t);
}
function nn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ks(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var gr = Math.random().toString(36).slice(2),
  St = "__reactFiber$" + gr,
  il = "__reactProps$" + gr,
  zt = "__reactContainer$" + gr,
  ua = "__reactEvents$" + gr,
  mm = "__reactListeners$" + gr,
  vm = "__reactHandles$" + gr;
function En(e) {
  var t = e[St];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[zt] || n[St])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ks(e); e !== null; ) {
          if ((n = e[St])) return n;
          e = ks(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function wl(e) {
  return (
    (e = e[St] || e[zt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Xn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function $i(e) {
  return e[il] || null;
}
var sa = [],
  Gn = -1;
function dn(e) {
  return { current: e };
}
function ae(e) {
  0 > Gn || ((e.current = sa[Gn]), (sa[Gn] = null), Gn--);
}
function ie(e, t) {
  Gn++, (sa[Gn] = e.current), (e.current = t);
}
var sn = {},
  Me = dn(sn),
  We = dn(!1),
  _n = sn;
function ur(e, t) {
  var n = e.type.contextTypes;
  if (!n) return sn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Qe(e) {
  return (e = e.childContextTypes), e != null;
}
function vi() {
  ae(We), ae(Me);
}
function Cs(e, t, n) {
  if (Me.current !== sn) throw Error(R(168));
  ie(Me, t), ie(We, n);
}
function Od(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(R(108, eh(e) || "Unknown", l));
  return fe({}, n, r);
}
function gi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || sn),
    (_n = Me.current),
    ie(Me, e),
    ie(We, We.current),
    !0
  );
}
function Ns(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = Od(e, t, _n)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ae(We),
      ae(Me),
      ie(Me, e))
    : ae(We),
    ie(We, n);
}
var jt = null,
  Hi = !1,
  Co = !1;
function Fd(e) {
  jt === null ? (jt = [e]) : jt.push(e);
}
function gm(e) {
  (Hi = !0), Fd(e);
}
function fn() {
  if (!Co && jt !== null) {
    Co = !0;
    var e = 0,
      t = b;
    try {
      var n = jt;
      for (b = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (jt = null), (Hi = !1);
    } catch (l) {
      throw (jt !== null && (jt = jt.slice(e + 1)), ad(Wa, fn), l);
    } finally {
      (b = t), (Co = !1);
    }
  }
  return null;
}
var Jn = [],
  Zn = 0,
  yi = null,
  wi = 0,
  nt = [],
  rt = 0,
  Rn = null,
  _t = 1,
  Rt = "";
function yn(e, t) {
  (Jn[Zn++] = wi), (Jn[Zn++] = yi), (yi = e), (wi = t);
}
function Id(e, t, n) {
  (nt[rt++] = _t), (nt[rt++] = Rt), (nt[rt++] = Rn), (Rn = e);
  var r = _t;
  e = Rt;
  var l = 32 - mt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - mt(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (_t = (1 << (32 - mt(t) + l)) | (n << l) | r),
      (Rt = i + e);
  } else (_t = (1 << i) | (n << l) | r), (Rt = e);
}
function ba(e) {
  e.return !== null && (yn(e, 1), Id(e, 1, 0));
}
function eu(e) {
  for (; e === yi; )
    (yi = Jn[--Zn]), (Jn[Zn] = null), (wi = Jn[--Zn]), (Jn[Zn] = null);
  for (; e === Rn; )
    (Rn = nt[--rt]),
      (nt[rt] = null),
      (Rt = nt[--rt]),
      (nt[rt] = null),
      (_t = nt[--rt]),
      (nt[rt] = null);
}
var Ze = null,
  Je = null,
  se = !1,
  ht = null;
function Ud(e, t) {
  var n = lt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ps(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ze = e), (Je = nn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ze = e), (Je = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Rn !== null ? { id: _t, overflow: Rt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = lt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ze = e),
            (Je = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ca(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function da(e) {
  if (se) {
    var t = Je;
    if (t) {
      var n = t;
      if (!Ps(e, t)) {
        if (ca(e)) throw Error(R(418));
        t = nn(n.nextSibling);
        var r = Ze;
        t && Ps(e, t)
          ? Ud(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (se = !1), (Ze = e));
      }
    } else {
      if (ca(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (se = !1), (Ze = e);
    }
  }
}
function js(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ze = e;
}
function $l(e) {
  if (e !== Ze) return !1;
  if (!se) return js(e), (se = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !oa(e.type, e.memoizedProps))),
    t && (t = Je))
  ) {
    if (ca(e)) throw (Ad(), Error(R(418)));
    for (; t; ) Ud(e, t), (t = nn(t.nextSibling));
  }
  if ((js(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Je = nn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Je = null;
    }
  } else Je = Ze ? nn(e.stateNode.nextSibling) : null;
  return !0;
}
function Ad() {
  for (var e = Je; e; ) e = nn(e.nextSibling);
}
function sr() {
  (Je = Ze = null), (se = !1);
}
function tu(e) {
  ht === null ? (ht = [e]) : ht.push(e);
}
var ym = It.ReactCurrentBatchConfig;
function Rr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = l.refs;
            o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function Hl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function _s(e) {
  var t = e._init;
  return t(e._payload);
}
function Bd(e) {
  function t(p, c) {
    if (e) {
      var v = p.deletions;
      v === null ? ((p.deletions = [c]), (p.flags |= 16)) : v.push(c);
    }
  }
  function n(p, c) {
    if (!e) return null;
    for (; c !== null; ) t(p, c), (c = c.sibling);
    return null;
  }
  function r(p, c) {
    for (p = new Map(); c !== null; )
      c.key !== null ? p.set(c.key, c) : p.set(c.index, c), (c = c.sibling);
    return p;
  }
  function l(p, c) {
    return (p = an(p, c)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, c, v) {
    return (
      (p.index = v),
      e
        ? ((v = p.alternate),
          v !== null
            ? ((v = v.index), v < c ? ((p.flags |= 2), c) : v)
            : ((p.flags |= 2), c))
        : ((p.flags |= 1048576), c)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, c, v, C) {
    return c === null || c.tag !== 6
      ? ((c = To(v, p.mode, C)), (c.return = p), c)
      : ((c = l(c, v)), (c.return = p), c);
  }
  function u(p, c, v, C) {
    var j = v.type;
    return j === Wn
      ? f(p, c, v.props.children, C, v.key)
      : c !== null &&
        (c.elementType === j ||
          (typeof j == "object" &&
            j !== null &&
            j.$$typeof === Qt &&
            _s(j) === c.type))
      ? ((C = l(c, v.props)), (C.ref = Rr(p, c, v)), (C.return = p), C)
      : ((C = ii(v.type, v.key, v.props, null, p.mode, C)),
        (C.ref = Rr(p, c, v)),
        (C.return = p),
        C);
  }
  function s(p, c, v, C) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== v.containerInfo ||
      c.stateNode.implementation !== v.implementation
      ? ((c = Do(v, p.mode, C)), (c.return = p), c)
      : ((c = l(c, v.children || [])), (c.return = p), c);
  }
  function f(p, c, v, C, j) {
    return c === null || c.tag !== 7
      ? ((c = jn(v, p.mode, C, j)), (c.return = p), c)
      : ((c = l(c, v)), (c.return = p), c);
  }
  function d(p, c, v) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = To("" + c, p.mode, v)), (c.return = p), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Tl:
          return (
            (v = ii(c.type, c.key, c.props, null, p.mode, v)),
            (v.ref = Rr(p, null, c)),
            (v.return = p),
            v
          );
        case Vn:
          return (c = Do(c, p.mode, v)), (c.return = p), c;
        case Qt:
          var C = c._init;
          return d(p, C(c._payload), v);
      }
      if (Fr(c) || Cr(c))
        return (c = jn(c, p.mode, v, null)), (c.return = p), c;
      Hl(p, c);
    }
    return null;
  }
  function h(p, c, v, C) {
    var j = c !== null ? c.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return j !== null ? null : a(p, c, "" + v, C);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Tl:
          return v.key === j ? u(p, c, v, C) : null;
        case Vn:
          return v.key === j ? s(p, c, v, C) : null;
        case Qt:
          return (j = v._init), h(p, c, j(v._payload), C);
      }
      if (Fr(v) || Cr(v)) return j !== null ? null : f(p, c, v, C, null);
      Hl(p, v);
    }
    return null;
  }
  function x(p, c, v, C, j) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return (p = p.get(v) || null), a(c, p, "" + C, j);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case Tl:
          return (p = p.get(C.key === null ? v : C.key) || null), u(c, p, C, j);
        case Vn:
          return (p = p.get(C.key === null ? v : C.key) || null), s(c, p, C, j);
        case Qt:
          var z = C._init;
          return x(p, c, v, z(C._payload), j);
      }
      if (Fr(C) || Cr(C)) return (p = p.get(v) || null), f(c, p, C, j, null);
      Hl(c, C);
    }
    return null;
  }
  function E(p, c, v, C) {
    for (
      var j = null, z = null, y = c, _ = (c = 0), $ = null;
      y !== null && _ < v.length;
      _++
    ) {
      y.index > _ ? (($ = y), (y = null)) : ($ = y.sibling);
      var D = h(p, y, v[_], C);
      if (D === null) {
        y === null && (y = $);
        break;
      }
      e && y && D.alternate === null && t(p, y),
        (c = i(D, c, _)),
        z === null ? (j = D) : (z.sibling = D),
        (z = D),
        (y = $);
    }
    if (_ === v.length) return n(p, y), se && yn(p, _), j;
    if (y === null) {
      for (; _ < v.length; _++)
        (y = d(p, v[_], C)),
          y !== null &&
            ((c = i(y, c, _)), z === null ? (j = y) : (z.sibling = y), (z = y));
      return se && yn(p, _), j;
    }
    for (y = r(p, y); _ < v.length; _++)
      ($ = x(y, p, _, v[_], C)),
        $ !== null &&
          (e && $.alternate !== null && y.delete($.key === null ? _ : $.key),
          (c = i($, c, _)),
          z === null ? (j = $) : (z.sibling = $),
          (z = $));
    return (
      e &&
        y.forEach(function (ee) {
          return t(p, ee);
        }),
      se && yn(p, _),
      j
    );
  }
  function k(p, c, v, C) {
    var j = Cr(v);
    if (typeof j != "function") throw Error(R(150));
    if (((v = j.call(v)), v == null)) throw Error(R(151));
    for (
      var z = (j = null), y = c, _ = (c = 0), $ = null, D = v.next();
      y !== null && !D.done;
      _++, D = v.next()
    ) {
      y.index > _ ? (($ = y), (y = null)) : ($ = y.sibling);
      var ee = h(p, y, D.value, C);
      if (ee === null) {
        y === null && (y = $);
        break;
      }
      e && y && ee.alternate === null && t(p, y),
        (c = i(ee, c, _)),
        z === null ? (j = ee) : (z.sibling = ee),
        (z = ee),
        (y = $);
    }
    if (D.done) return n(p, y), se && yn(p, _), j;
    if (y === null) {
      for (; !D.done; _++, D = v.next())
        (D = d(p, D.value, C)),
          D !== null &&
            ((c = i(D, c, _)), z === null ? (j = D) : (z.sibling = D), (z = D));
      return se && yn(p, _), j;
    }
    for (y = r(p, y); !D.done; _++, D = v.next())
      (D = x(y, p, _, D.value, C)),
        D !== null &&
          (e && D.alternate !== null && y.delete(D.key === null ? _ : D.key),
          (c = i(D, c, _)),
          z === null ? (j = D) : (z.sibling = D),
          (z = D));
    return (
      e &&
        y.forEach(function (re) {
          return t(p, re);
        }),
      se && yn(p, _),
      j
    );
  }
  function T(p, c, v, C) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Wn &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Tl:
          e: {
            for (var j = v.key, z = c; z !== null; ) {
              if (z.key === j) {
                if (((j = v.type), j === Wn)) {
                  if (z.tag === 7) {
                    n(p, z.sibling),
                      (c = l(z, v.props.children)),
                      (c.return = p),
                      (p = c);
                    break e;
                  }
                } else if (
                  z.elementType === j ||
                  (typeof j == "object" &&
                    j !== null &&
                    j.$$typeof === Qt &&
                    _s(j) === z.type)
                ) {
                  n(p, z.sibling),
                    (c = l(z, v.props)),
                    (c.ref = Rr(p, z, v)),
                    (c.return = p),
                    (p = c);
                  break e;
                }
                n(p, z);
                break;
              } else t(p, z);
              z = z.sibling;
            }
            v.type === Wn
              ? ((c = jn(v.props.children, p.mode, C, v.key)),
                (c.return = p),
                (p = c))
              : ((C = ii(v.type, v.key, v.props, null, p.mode, C)),
                (C.ref = Rr(p, c, v)),
                (C.return = p),
                (p = C));
          }
          return o(p);
        case Vn:
          e: {
            for (z = v.key; c !== null; ) {
              if (c.key === z)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === v.containerInfo &&
                  c.stateNode.implementation === v.implementation
                ) {
                  n(p, c.sibling),
                    (c = l(c, v.children || [])),
                    (c.return = p),
                    (p = c);
                  break e;
                } else {
                  n(p, c);
                  break;
                }
              else t(p, c);
              c = c.sibling;
            }
            (c = Do(v, p.mode, C)), (c.return = p), (p = c);
          }
          return o(p);
        case Qt:
          return (z = v._init), T(p, c, z(v._payload), C);
      }
      if (Fr(v)) return E(p, c, v, C);
      if (Cr(v)) return k(p, c, v, C);
      Hl(p, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        c !== null && c.tag === 6
          ? (n(p, c.sibling), (c = l(c, v)), (c.return = p), (p = c))
          : (n(p, c), (c = To(v, p.mode, C)), (c.return = p), (p = c)),
        o(p))
      : n(p, c);
  }
  return T;
}
var cr = Bd(!0),
  $d = Bd(!1),
  xi = dn(null),
  Si = null,
  qn = null,
  nu = null;
function ru() {
  nu = qn = Si = null;
}
function lu(e) {
  var t = xi.current;
  ae(xi), (e._currentValue = t);
}
function fa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ir(e, t) {
  (Si = e),
    (nu = qn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ve = !0), (e.firstContext = null));
}
function ot(e) {
  var t = e._currentValue;
  if (nu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), qn === null)) {
      if (Si === null) throw Error(R(308));
      (qn = e), (Si.dependencies = { lanes: 0, firstContext: e });
    } else qn = qn.next = e;
  return t;
}
var kn = null;
function iu(e) {
  kn === null ? (kn = [e]) : kn.push(e);
}
function Hd(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), iu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ot(e, r)
  );
}
function Ot(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Kt = !1;
function ou(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Vd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Tt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function rn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), G & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ot(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), iu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ot(e, n)
  );
}
function bl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Qa(e, n);
  }
}
function Rs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ei(e, t, n, r) {
  var l = e.updateQueue;
  Kt = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), o === null ? (i = s) : (o.next = s), (o = u);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== o &&
        (a === null ? (f.firstBaseUpdate = s) : (a.next = s),
        (f.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var d = l.baseState;
    (o = 0), (f = s = u = null), (a = i);
    do {
      var h = a.lane,
        x = a.eventTime;
      if ((r & h) === h) {
        f !== null &&
          (f = f.next =
            {
              eventTime: x,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var E = e,
            k = a;
          switch (((h = t), (x = n), k.tag)) {
            case 1:
              if (((E = k.payload), typeof E == "function")) {
                d = E.call(x, d, h);
                break e;
              }
              d = E;
              break e;
            case 3:
              E.flags = (E.flags & -65537) | 128;
            case 0:
              if (
                ((E = k.payload),
                (h = typeof E == "function" ? E.call(x, d, h) : E),
                h == null)
              )
                break e;
              d = fe({}, d, h);
              break e;
            case 2:
              Kt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [a]) : h.push(a));
      } else
        (x = {
          eventTime: x,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((s = f = x), (u = d)) : (f = f.next = x),
          (o |= h);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (f === null && (u = d),
      (l.baseState = u),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = f),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Tn |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function Ls(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(R(191, l));
        l.call(r);
      }
    }
}
var xl = {},
  kt = dn(xl),
  ol = dn(xl),
  al = dn(xl);
function Cn(e) {
  if (e === xl) throw Error(R(174));
  return e;
}
function au(e, t) {
  switch ((ie(al, t), ie(ol, e), ie(kt, xl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ko(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ko(t, e));
  }
  ae(kt), ie(kt, t);
}
function dr() {
  ae(kt), ae(ol), ae(al);
}
function Wd(e) {
  Cn(al.current);
  var t = Cn(kt.current),
    n = Ko(t, e.type);
  t !== n && (ie(ol, e), ie(kt, n));
}
function uu(e) {
  ol.current === e && (ae(kt), ae(ol));
}
var ce = dn(0);
function ki(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var No = [];
function su() {
  for (var e = 0; e < No.length; e++)
    No[e]._workInProgressVersionPrimary = null;
  No.length = 0;
}
var ei = It.ReactCurrentDispatcher,
  Po = It.ReactCurrentBatchConfig,
  Ln = 0,
  de = null,
  Se = null,
  ke = null,
  Ci = !1,
  Qr = !1,
  ul = 0,
  wm = 0;
function Le() {
  throw Error(R(321));
}
function cu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!gt(e[n], t[n])) return !1;
  return !0;
}
function du(e, t, n, r, l, i) {
  if (
    ((Ln = i),
    (de = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ei.current = e === null || e.memoizedState === null ? km : Cm),
    (e = n(r, l)),
    Qr)
  ) {
    i = 0;
    do {
      if (((Qr = !1), (ul = 0), 25 <= i)) throw Error(R(301));
      (i += 1),
        (ke = Se = null),
        (t.updateQueue = null),
        (ei.current = Nm),
        (e = n(r, l));
    } while (Qr);
  }
  if (
    ((ei.current = Ni),
    (t = Se !== null && Se.next !== null),
    (Ln = 0),
    (ke = Se = de = null),
    (Ci = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function fu() {
  var e = ul !== 0;
  return (ul = 0), e;
}
function xt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ke === null ? (de.memoizedState = ke = e) : (ke = ke.next = e), ke;
}
function at() {
  if (Se === null) {
    var e = de.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Se.next;
  var t = ke === null ? de.memoizedState : ke.next;
  if (t !== null) (ke = t), (Se = e);
  else {
    if (e === null) throw Error(R(310));
    (Se = e),
      (e = {
        memoizedState: Se.memoizedState,
        baseState: Se.baseState,
        baseQueue: Se.baseQueue,
        queue: Se.queue,
        next: null,
      }),
      ke === null ? (de.memoizedState = ke = e) : (ke = ke.next = e);
  }
  return ke;
}
function sl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function jo(e) {
  var t = at(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = Se,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var a = (o = null),
      u = null,
      s = i;
    do {
      var f = s.lane;
      if ((Ln & f) === f)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var d = {
          lane: f,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = d), (o = r)) : (u = u.next = d),
          (de.lanes |= f),
          (Tn |= f);
      }
      s = s.next;
    } while (s !== null && s !== i);
    u === null ? (o = r) : (u.next = a),
      gt(r, t.memoizedState) || (Ve = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (de.lanes |= i), (Tn |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function _o(e) {
  var t = at(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    gt(i, t.memoizedState) || (Ve = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Qd() {}
function Kd(e, t) {
  var n = de,
    r = at(),
    l = t(),
    i = !gt(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (Ve = !0)),
    (r = r.queue),
    pu(Gd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ke !== null && ke.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      cl(9, Xd.bind(null, n, r, l, t), void 0, null),
      Ce === null)
    )
      throw Error(R(349));
    Ln & 30 || Yd(n, t, l);
  }
  return l;
}
function Yd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Xd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Jd(t) && Zd(e);
}
function Gd(e, t, n) {
  return n(function () {
    Jd(t) && Zd(e);
  });
}
function Jd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !gt(e, n);
  } catch {
    return !0;
  }
}
function Zd(e) {
  var t = Ot(e, 1);
  t !== null && vt(t, e, 1, -1);
}
function Ts(e) {
  var t = xt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: sl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Em.bind(null, de, e)),
    [t.memoizedState, e]
  );
}
function cl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function qd() {
  return at().memoizedState;
}
function ti(e, t, n, r) {
  var l = xt();
  (de.flags |= e),
    (l.memoizedState = cl(1 | t, n, void 0, r === void 0 ? null : r));
}
function Vi(e, t, n, r) {
  var l = at();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Se !== null) {
    var o = Se.memoizedState;
    if (((i = o.destroy), r !== null && cu(r, o.deps))) {
      l.memoizedState = cl(t, n, i, r);
      return;
    }
  }
  (de.flags |= e), (l.memoizedState = cl(1 | t, n, i, r));
}
function Ds(e, t) {
  return ti(8390656, 8, e, t);
}
function pu(e, t) {
  return Vi(2048, 8, e, t);
}
function bd(e, t) {
  return Vi(4, 2, e, t);
}
function ef(e, t) {
  return Vi(4, 4, e, t);
}
function tf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function nf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Vi(4, 4, tf.bind(null, t, e), n)
  );
}
function hu() {}
function rf(e, t) {
  var n = at();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && cu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function lf(e, t) {
  var n = at();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && cu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function of(e, t, n) {
  return Ln & 21
    ? (gt(n, t) || ((n = cd()), (de.lanes |= n), (Tn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ve = !0)), (e.memoizedState = n));
}
function xm(e, t) {
  var n = b;
  (b = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Po.transition;
  Po.transition = {};
  try {
    e(!1), t();
  } finally {
    (b = n), (Po.transition = r);
  }
}
function af() {
  return at().memoizedState;
}
function Sm(e, t, n) {
  var r = on(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    uf(e))
  )
    sf(t, n);
  else if (((n = Hd(e, t, n, r)), n !== null)) {
    var l = Ue();
    vt(n, e, r, l), cf(n, t, r);
  }
}
function Em(e, t, n) {
  var r = on(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (uf(e)) sf(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), gt(a, o))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), iu(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Hd(e, t, l, r)),
      n !== null && ((l = Ue()), vt(n, e, r, l), cf(n, t, r));
  }
}
function uf(e) {
  var t = e.alternate;
  return e === de || (t !== null && t === de);
}
function sf(e, t) {
  Qr = Ci = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function cf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Qa(e, n);
  }
}
var Ni = {
    readContext: ot,
    useCallback: Le,
    useContext: Le,
    useEffect: Le,
    useImperativeHandle: Le,
    useInsertionEffect: Le,
    useLayoutEffect: Le,
    useMemo: Le,
    useReducer: Le,
    useRef: Le,
    useState: Le,
    useDebugValue: Le,
    useDeferredValue: Le,
    useTransition: Le,
    useMutableSource: Le,
    useSyncExternalStore: Le,
    useId: Le,
    unstable_isNewReconciler: !1,
  },
  km = {
    readContext: ot,
    useCallback: function (e, t) {
      return (xt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ot,
    useEffect: Ds,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ti(4194308, 4, tf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ti(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ti(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = xt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = xt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Sm.bind(null, de, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = xt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ts,
    useDebugValue: hu,
    useDeferredValue: function (e) {
      return (xt().memoizedState = e);
    },
    useTransition: function () {
      var e = Ts(!1),
        t = e[0];
      return (e = xm.bind(null, e[1])), (xt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = de,
        l = xt();
      if (se) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), Ce === null)) throw Error(R(349));
        Ln & 30 || Yd(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Ds(Gd.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        cl(9, Xd.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = xt(),
        t = Ce.identifierPrefix;
      if (se) {
        var n = Rt,
          r = _t;
        (n = (r & ~(1 << (32 - mt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ul++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = wm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Cm = {
    readContext: ot,
    useCallback: rf,
    useContext: ot,
    useEffect: pu,
    useImperativeHandle: nf,
    useInsertionEffect: bd,
    useLayoutEffect: ef,
    useMemo: lf,
    useReducer: jo,
    useRef: qd,
    useState: function () {
      return jo(sl);
    },
    useDebugValue: hu,
    useDeferredValue: function (e) {
      var t = at();
      return of(t, Se.memoizedState, e);
    },
    useTransition: function () {
      var e = jo(sl)[0],
        t = at().memoizedState;
      return [e, t];
    },
    useMutableSource: Qd,
    useSyncExternalStore: Kd,
    useId: af,
    unstable_isNewReconciler: !1,
  },
  Nm = {
    readContext: ot,
    useCallback: rf,
    useContext: ot,
    useEffect: pu,
    useImperativeHandle: nf,
    useInsertionEffect: bd,
    useLayoutEffect: ef,
    useMemo: lf,
    useReducer: _o,
    useRef: qd,
    useState: function () {
      return _o(sl);
    },
    useDebugValue: hu,
    useDeferredValue: function (e) {
      var t = at();
      return Se === null ? (t.memoizedState = e) : of(t, Se.memoizedState, e);
    },
    useTransition: function () {
      var e = _o(sl)[0],
        t = at().memoizedState;
      return [e, t];
    },
    useMutableSource: Qd,
    useSyncExternalStore: Kd,
    useId: af,
    unstable_isNewReconciler: !1,
  };
function dt(e, t) {
  if (e && e.defaultProps) {
    (t = fe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function pa(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : fe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Wi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? On(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ue(),
      l = on(e),
      i = Tt(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = rn(e, i, l)),
      t !== null && (vt(t, e, l, r), bl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ue(),
      l = on(e),
      i = Tt(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = rn(e, i, l)),
      t !== null && (vt(t, e, l, r), bl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ue(),
      r = on(e),
      l = Tt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = rn(e, l, r)),
      t !== null && (vt(t, e, r, n), bl(t, e, r));
  },
};
function Ms(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !nl(n, r) || !nl(l, i)
      : !0
  );
}
function df(e, t, n) {
  var r = !1,
    l = sn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = ot(i))
      : ((l = Qe(t) ? _n : Me.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? ur(e, l) : sn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Wi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function zs(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Wi.enqueueReplaceState(t, t.state, null);
}
function ha(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), ou(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = ot(i))
    : ((i = Qe(t) ? _n : Me.current), (l.context = ur(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (pa(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Wi.enqueueReplaceState(l, l.state, null),
      Ei(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function fr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += bp(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ro(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ma(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Pm = typeof WeakMap == "function" ? WeakMap : Map;
function ff(e, t, n) {
  (n = Tt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ji || ((ji = !0), (Na = r)), ma(e, t);
    }),
    n
  );
}
function pf(e, t, n) {
  (n = Tt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        ma(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        ma(e, t),
          typeof r != "function" &&
            (ln === null ? (ln = new Set([this])) : ln.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Os(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Pm();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Bm.bind(null, e, t, n)), t.then(e, e));
}
function Fs(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Is(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Tt(-1, 1)), (t.tag = 2), rn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var jm = It.ReactCurrentOwner,
  Ve = !1;
function Ie(e, t, n, r) {
  t.child = e === null ? $d(t, null, n, r) : cr(t, e.child, n, r);
}
function Us(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    ir(t, l),
    (r = du(e, t, n, r, i, l)),
    (n = fu()),
    e !== null && !Ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ft(e, t, l))
      : (se && n && ba(t), (t.flags |= 1), Ie(e, t, r, l), t.child)
  );
}
function As(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Eu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), hf(e, t, i, r, l))
      : ((e = ii(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : nl), n(o, r) && e.ref === t.ref)
    )
      return Ft(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = an(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function hf(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (nl(i, r) && e.ref === t.ref)
      if (((Ve = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ve = !0);
      else return (t.lanes = e.lanes), Ft(e, t, l);
  }
  return va(e, t, n, r, l);
}
function mf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ie(er, Xe),
        (Xe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ie(er, Xe),
          (Xe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ie(er, Xe),
        (Xe |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ie(er, Xe),
      (Xe |= r);
  return Ie(e, t, l, n), t.child;
}
function vf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function va(e, t, n, r, l) {
  var i = Qe(n) ? _n : Me.current;
  return (
    (i = ur(t, i)),
    ir(t, l),
    (n = du(e, t, n, r, i, l)),
    (r = fu()),
    e !== null && !Ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ft(e, t, l))
      : (se && r && ba(t), (t.flags |= 1), Ie(e, t, n, l), t.child)
  );
}
function Bs(e, t, n, r, l) {
  if (Qe(n)) {
    var i = !0;
    gi(t);
  } else i = !1;
  if ((ir(t, l), t.stateNode === null))
    ni(e, t), df(t, n, r), ha(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var u = o.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = ot(s))
      : ((s = Qe(n) ? _n : Me.current), (s = ur(t, s)));
    var f = n.getDerivedStateFromProps,
      d =
        typeof f == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || u !== s) && zs(t, o, r, s)),
      (Kt = !1);
    var h = t.memoizedState;
    (o.state = h),
      Ei(t, r, o, l),
      (u = t.memoizedState),
      a !== r || h !== u || We.current || Kt
        ? (typeof f == "function" && (pa(t, n, f, r), (u = t.memoizedState)),
          (a = Kt || Ms(t, n, a, r, h, u, s))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = s),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Vd(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : dt(t.type, a)),
      (o.props = s),
      (d = t.pendingProps),
      (h = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = ot(u))
        : ((u = Qe(n) ? _n : Me.current), (u = ur(t, u)));
    var x = n.getDerivedStateFromProps;
    (f =
      typeof x == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || h !== u) && zs(t, o, r, u)),
      (Kt = !1),
      (h = t.memoizedState),
      (o.state = h),
      Ei(t, r, o, l);
    var E = t.memoizedState;
    a !== d || h !== E || We.current || Kt
      ? (typeof x == "function" && (pa(t, n, x, r), (E = t.memoizedState)),
        (s = Kt || Ms(t, n, s, r, h, E, u) || !1)
          ? (f ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, E, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, E, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = E)),
        (o.props = r),
        (o.state = E),
        (o.context = u),
        (r = s))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ga(e, t, n, r, i, l);
}
function ga(e, t, n, r, l, i) {
  vf(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Ns(t, n, !1), Ft(e, t, i);
  (r = t.stateNode), (jm.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = cr(t, e.child, null, i)), (t.child = cr(t, null, a, i)))
      : Ie(e, t, a, i),
    (t.memoizedState = r.state),
    l && Ns(t, n, !0),
    t.child
  );
}
function gf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Cs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Cs(e, t.context, !1),
    au(e, t.containerInfo);
}
function $s(e, t, n, r, l) {
  return sr(), tu(l), (t.flags |= 256), Ie(e, t, n, r), t.child;
}
var ya = { dehydrated: null, treeContext: null, retryLane: 0 };
function wa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function yf(e, t, n) {
  var r = t.pendingProps,
    l = ce.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    ie(ce, l & 1),
    e === null)
  )
    return (
      da(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Yi(o, r, 0, null)),
              (e = jn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = wa(n)),
              (t.memoizedState = ya),
              e)
            : mu(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return _m(e, t, o, r, a, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = an(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (i = an(a, i)) : ((i = jn(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? wa(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ya),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = an(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function mu(e, t) {
  return (
    (t = Yi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Vl(e, t, n, r) {
  return (
    r !== null && tu(r),
    cr(t, e.child, null, n),
    (e = mu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function _m(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ro(Error(R(422)))), Vl(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = Yi({ mode: "visible", children: r.children }, l, 0, null)),
        (i = jn(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && cr(t, e.child, null, o),
        (t.child.memoizedState = wa(o)),
        (t.memoizedState = ya),
        i);
  if (!(t.mode & 1)) return Vl(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(R(419))), (r = Ro(i, r, void 0)), Vl(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), Ve || a)) {
    if (((r = Ce), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Ot(e, l), vt(r, e, l, -1));
    }
    return Su(), (r = Ro(Error(R(421)))), Vl(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = $m.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Je = nn(l.nextSibling)),
      (Ze = t),
      (se = !0),
      (ht = null),
      e !== null &&
        ((nt[rt++] = _t),
        (nt[rt++] = Rt),
        (nt[rt++] = Rn),
        (_t = e.id),
        (Rt = e.overflow),
        (Rn = t)),
      (t = mu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Hs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), fa(e.return, t, n);
}
function Lo(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function wf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((Ie(e, t, r.children, n), (r = ce.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Hs(e, n, t);
        else if (e.tag === 19) Hs(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ie(ce, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ki(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Lo(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ki(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Lo(t, !0, n, null, i);
        break;
      case "together":
        Lo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ni(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ft(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Tn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = an(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = an(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Rm(e, t, n) {
  switch (t.tag) {
    case 3:
      gf(t), sr();
      break;
    case 5:
      Wd(t);
      break;
    case 1:
      Qe(t.type) && gi(t);
      break;
    case 4:
      au(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      ie(xi, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ie(ce, ce.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? yf(e, t, n)
          : (ie(ce, ce.current & 1),
            (e = Ft(e, t, n)),
            e !== null ? e.sibling : null);
      ie(ce, ce.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return wf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        ie(ce, ce.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), mf(e, t, n);
  }
  return Ft(e, t, n);
}
var xf, xa, Sf, Ef;
xf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
xa = function () {};
Sf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Cn(kt.current);
    var i = null;
    switch (n) {
      case "input":
        (l = Ho(e, l)), (r = Ho(e, r)), (i = []);
        break;
      case "select":
        (l = fe({}, l, { value: void 0 })),
          (r = fe({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = Qo(e, l)), (r = Qo(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = mi);
    }
    Yo(n, r);
    var o;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var a = l[s];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Gr.hasOwnProperty(s)
              ? i || (i = [])
              : (i = i || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((a = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                a[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (i || (i = []), i.push(s, n)), (n = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (i = i || []).push(s, u))
            : s === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (i = i || []).push(s, "" + u)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (Gr.hasOwnProperty(s)
                ? (u != null && s === "onScroll" && oe("scroll", e),
                  i || a === u || (i = []))
                : (i = i || []).push(s, u));
    }
    n && (i = i || []).push("style", n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Ef = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Lr(e, t) {
  if (!se)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Te(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Lm(e, t, n) {
  var r = t.pendingProps;
  switch ((eu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Te(t), null;
    case 1:
      return Qe(t.type) && vi(), Te(t), null;
    case 3:
      return (
        (r = t.stateNode),
        dr(),
        ae(We),
        ae(Me),
        su(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          ($l(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ht !== null && (_a(ht), (ht = null)))),
        xa(e, t),
        Te(t),
        null
      );
    case 5:
      uu(t);
      var l = Cn(al.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Sf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return Te(t), null;
        }
        if (((e = Cn(kt.current)), $l(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[St] = t), (r[il] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              oe("cancel", r), oe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              oe("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Ur.length; l++) oe(Ur[l], r);
              break;
            case "source":
              oe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              oe("error", r), oe("load", r);
              break;
            case "details":
              oe("toggle", r);
              break;
            case "input":
              Zu(r, i), oe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                oe("invalid", r);
              break;
            case "textarea":
              bu(r, i), oe("invalid", r);
          }
          Yo(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Bl(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Bl(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : Gr.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  oe("scroll", r);
            }
          switch (n) {
            case "input":
              Dl(r), qu(r, i, !0);
              break;
            case "textarea":
              Dl(r), es(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = mi);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Gc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[St] = t),
            (e[il] = r),
            xf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Xo(n, r)), n)) {
              case "dialog":
                oe("cancel", e), oe("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                oe("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Ur.length; l++) oe(Ur[l], e);
                l = r;
                break;
              case "source":
                oe("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                oe("error", e), oe("load", e), (l = r);
                break;
              case "details":
                oe("toggle", e), (l = r);
                break;
              case "input":
                Zu(e, r), (l = Ho(e, r)), oe("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = fe({}, r, { value: void 0 })),
                  oe("invalid", e);
                break;
              case "textarea":
                bu(e, r), (l = Qo(e, r)), oe("invalid", e);
                break;
              default:
                l = r;
            }
            Yo(n, l), (a = l);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var u = a[i];
                i === "style"
                  ? qc(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Jc(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Jr(e, u)
                    : typeof u == "number" && Jr(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Gr.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && oe("scroll", e)
                      : u != null && Aa(e, i, u, o));
              }
            switch (n) {
              case "input":
                Dl(e), qu(e, r, !1);
                break;
              case "textarea":
                Dl(e), es(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + un(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? tr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      tr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = mi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Te(t), null;
    case 6:
      if (e && t.stateNode != null) Ef(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = Cn(al.current)), Cn(kt.current), $l(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[St] = t),
            (i = r.nodeValue !== n) && ((e = Ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                Bl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Bl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[St] = t),
            (t.stateNode = r);
      }
      return Te(t), null;
    case 13:
      if (
        (ae(ce),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (se && Je !== null && t.mode & 1 && !(t.flags & 128))
          Ad(), sr(), (t.flags |= 98560), (i = !1);
        else if (((i = $l(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(R(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(R(317));
            i[St] = t;
          } else
            sr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Te(t), (i = !1);
        } else ht !== null && (_a(ht), (ht = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ce.current & 1 ? Ee === 0 && (Ee = 3) : Su())),
          t.updateQueue !== null && (t.flags |= 4),
          Te(t),
          null);
    case 4:
      return (
        dr(), xa(e, t), e === null && rl(t.stateNode.containerInfo), Te(t), null
      );
    case 10:
      return lu(t.type._context), Te(t), null;
    case 17:
      return Qe(t.type) && vi(), Te(t), null;
    case 19:
      if ((ae(ce), (i = t.memoizedState), i === null)) return Te(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Lr(i, !1);
        else {
          if (Ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = ki(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Lr(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ie(ce, (ce.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ge() > pr &&
            ((t.flags |= 128), (r = !0), Lr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ki(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Lr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !se)
            )
              return Te(t), null;
          } else
            2 * ge() - i.renderingStartTime > pr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Lr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ge()),
          (t.sibling = null),
          (n = ce.current),
          ie(ce, r ? (n & 1) | 2 : n & 1),
          t)
        : (Te(t), null);
    case 22:
    case 23:
      return (
        xu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Xe & 1073741824 && (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Te(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function Tm(e, t) {
  switch ((eu(t), t.tag)) {
    case 1:
      return (
        Qe(t.type) && vi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        dr(),
        ae(We),
        ae(Me),
        su(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return uu(t), null;
    case 13:
      if (
        (ae(ce), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        sr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ae(ce), null;
    case 4:
      return dr(), null;
    case 10:
      return lu(t.type._context), null;
    case 22:
    case 23:
      return xu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Wl = !1,
  De = !1,
  Dm = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function bn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        me(e, t, r);
      }
    else n.current = null;
}
function Sa(e, t, n) {
  try {
    n();
  } catch (r) {
    me(e, t, r);
  }
}
var Vs = !1;
function Mm(e, t) {
  if (((la = fi), (e = Pd()), qa(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            u = -1,
            s = 0,
            f = 0,
            d = e,
            h = null;
          t: for (;;) {
            for (
              var x;
              d !== n || (l !== 0 && d.nodeType !== 3) || (a = o + l),
                d !== i || (r !== 0 && d.nodeType !== 3) || (u = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (x = d.firstChild) !== null;

            )
              (h = d), (d = x);
            for (;;) {
              if (d === e) break t;
              if (
                (h === n && ++s === l && (a = o),
                h === i && ++f === r && (u = o),
                (x = d.nextSibling) !== null)
              )
                break;
              (d = h), (h = d.parentNode);
            }
            d = x;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ia = { focusedElem: e, selectionRange: n }, fi = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
        try {
          var E = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (E !== null) {
                  var k = E.memoizedProps,
                    T = E.memoizedState,
                    p = t.stateNode,
                    c = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : dt(t.type, k),
                      T
                    );
                  p.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (C) {
          me(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (E = Vs), (Vs = !1), E;
}
function Kr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Sa(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Qi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ea(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function kf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), kf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[St], delete t[il], delete t[ua], delete t[mm], delete t[vm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Cf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ws(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Cf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ka(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = mi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ka(e, t, n), e = e.sibling; e !== null; ) ka(e, t, n), (e = e.sibling);
}
function Ca(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ca(e, t, n), e = e.sibling; e !== null; ) Ca(e, t, n), (e = e.sibling);
}
var je = null,
  ft = !1;
function Vt(e, t, n) {
  for (n = n.child; n !== null; ) Nf(e, t, n), (n = n.sibling);
}
function Nf(e, t, n) {
  if (Et && typeof Et.onCommitFiberUnmount == "function")
    try {
      Et.onCommitFiberUnmount(Ii, n);
    } catch {}
  switch (n.tag) {
    case 5:
      De || bn(n, t);
    case 6:
      var r = je,
        l = ft;
      (je = null),
        Vt(e, t, n),
        (je = r),
        (ft = l),
        je !== null &&
          (ft
            ? ((e = je),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : je.removeChild(n.stateNode));
      break;
    case 18:
      je !== null &&
        (ft
          ? ((e = je),
            (n = n.stateNode),
            e.nodeType === 8
              ? ko(e.parentNode, n)
              : e.nodeType === 1 && ko(e, n),
            el(e))
          : ko(je, n.stateNode));
      break;
    case 4:
      (r = je),
        (l = ft),
        (je = n.stateNode.containerInfo),
        (ft = !0),
        Vt(e, t, n),
        (je = r),
        (ft = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !De &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Sa(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Vt(e, t, n);
      break;
    case 1:
      if (
        !De &&
        (bn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          me(n, t, a);
        }
      Vt(e, t, n);
      break;
    case 21:
      Vt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((De = (r = De) || n.memoizedState !== null), Vt(e, t, n), (De = r))
        : Vt(e, t, n);
      break;
    default:
      Vt(e, t, n);
  }
}
function Qs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Dm()),
      t.forEach(function (r) {
        var l = Hm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ct(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (je = a.stateNode), (ft = !1);
              break e;
            case 3:
              (je = a.stateNode.containerInfo), (ft = !0);
              break e;
            case 4:
              (je = a.stateNode.containerInfo), (ft = !0);
              break e;
          }
          a = a.return;
        }
        if (je === null) throw Error(R(160));
        Nf(i, o, l), (je = null), (ft = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (s) {
        me(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Pf(t, e), (t = t.sibling);
}
function Pf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ct(t, e), wt(e), r & 4)) {
        try {
          Kr(3, e, e.return), Qi(3, e);
        } catch (k) {
          me(e, e.return, k);
        }
        try {
          Kr(5, e, e.return);
        } catch (k) {
          me(e, e.return, k);
        }
      }
      break;
    case 1:
      ct(t, e), wt(e), r & 512 && n !== null && bn(n, n.return);
      break;
    case 5:
      if (
        (ct(t, e),
        wt(e),
        r & 512 && n !== null && bn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Jr(l, "");
        } catch (k) {
          me(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Yc(l, i),
              Xo(a, o);
            var s = Xo(a, i);
            for (o = 0; o < u.length; o += 2) {
              var f = u[o],
                d = u[o + 1];
              f === "style"
                ? qc(l, d)
                : f === "dangerouslySetInnerHTML"
                ? Jc(l, d)
                : f === "children"
                ? Jr(l, d)
                : Aa(l, f, d, s);
            }
            switch (a) {
              case "input":
                Vo(l, i);
                break;
              case "textarea":
                Xc(l, i);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var x = i.value;
                x != null
                  ? tr(l, !!i.multiple, x, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? tr(l, !!i.multiple, i.defaultValue, !0)
                      : tr(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[il] = i;
          } catch (k) {
            me(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((ct(t, e), wt(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (k) {
          me(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (ct(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          el(t.containerInfo);
        } catch (k) {
          me(e, e.return, k);
        }
      break;
    case 4:
      ct(t, e), wt(e);
      break;
    case 13:
      ct(t, e),
        wt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (yu = ge())),
        r & 4 && Qs(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((De = (s = De) || f), ct(t, e), (De = s)) : ct(t, e),
        wt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !f && e.mode & 1)
        )
          for (O = e, f = e.child; f !== null; ) {
            for (d = O = f; O !== null; ) {
              switch (((h = O), (x = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Kr(4, h, h.return);
                  break;
                case 1:
                  bn(h, h.return);
                  var E = h.stateNode;
                  if (typeof E.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (E.props = t.memoizedProps),
                        (E.state = t.memoizedState),
                        E.componentWillUnmount();
                    } catch (k) {
                      me(r, n, k);
                    }
                  }
                  break;
                case 5:
                  bn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Ys(d);
                    continue;
                  }
              }
              x !== null ? ((x.return = h), (O = x)) : Ys(d);
            }
            f = f.sibling;
          }
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d;
              try {
                (l = d.stateNode),
                  s
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = d.stateNode),
                      (u = d.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = Zc("display", o)));
              } catch (k) {
                me(e, e.return, k);
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = s ? "" : d.memoizedProps;
              } catch (k) {
                me(e, e.return, k);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            f === d && (f = null), (d = d.return);
          }
          f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      ct(t, e), wt(e), r & 4 && Qs(e);
      break;
    case 21:
      break;
    default:
      ct(t, e), wt(e);
  }
}
function wt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Cf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Jr(l, ""), (r.flags &= -33));
          var i = Ws(e);
          Ca(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Ws(e);
          ka(e, a, o);
          break;
        default:
          throw Error(R(161));
      }
    } catch (u) {
      me(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function zm(e, t, n) {
  (O = e), jf(e);
}
function jf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var l = O,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Wl;
      if (!o) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || De;
        a = Wl;
        var s = De;
        if (((Wl = o), (De = u) && !s))
          for (O = l; O !== null; )
            (o = O),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Xs(l)
                : u !== null
                ? ((u.return = o), (O = u))
                : Xs(l);
        for (; i !== null; ) (O = i), jf(i), (i = i.sibling);
        (O = l), (Wl = a), (De = s);
      }
      Ks(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (O = i)) : Ks(e);
  }
}
function Ks(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              De || Qi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !De)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : dt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Ls(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ls(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var f = s.memoizedState;
                  if (f !== null) {
                    var d = f.dehydrated;
                    d !== null && el(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        De || (t.flags & 512 && Ea(t));
      } catch (h) {
        me(t, t.return, h);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function Ys(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function Xs(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Qi(4, t);
          } catch (u) {
            me(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              me(t, l, u);
            }
          }
          var i = t.return;
          try {
            Ea(t);
          } catch (u) {
            me(t, i, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ea(t);
          } catch (u) {
            me(t, o, u);
          }
      }
    } catch (u) {
      me(t, t.return, u);
    }
    if (t === e) {
      O = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (O = a);
      break;
    }
    O = t.return;
  }
}
var Om = Math.ceil,
  Pi = It.ReactCurrentDispatcher,
  vu = It.ReactCurrentOwner,
  it = It.ReactCurrentBatchConfig,
  G = 0,
  Ce = null,
  we = null,
  _e = 0,
  Xe = 0,
  er = dn(0),
  Ee = 0,
  dl = null,
  Tn = 0,
  Ki = 0,
  gu = 0,
  Yr = null,
  He = null,
  yu = 0,
  pr = 1 / 0,
  Pt = null,
  ji = !1,
  Na = null,
  ln = null,
  Ql = !1,
  Zt = null,
  _i = 0,
  Xr = 0,
  Pa = null,
  ri = -1,
  li = 0;
function Ue() {
  return G & 6 ? ge() : ri !== -1 ? ri : (ri = ge());
}
function on(e) {
  return e.mode & 1
    ? G & 2 && _e !== 0
      ? _e & -_e
      : ym.transition !== null
      ? (li === 0 && (li = cd()), li)
      : ((e = b),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : gd(e.type))),
        e)
    : 1;
}
function vt(e, t, n, r) {
  if (50 < Xr) throw ((Xr = 0), (Pa = null), Error(R(185)));
  gl(e, n, r),
    (!(G & 2) || e !== Ce) &&
      (e === Ce && (!(G & 2) && (Ki |= n), Ee === 4 && Gt(e, _e)),
      Ke(e, r),
      n === 1 && G === 0 && !(t.mode & 1) && ((pr = ge() + 500), Hi && fn()));
}
function Ke(e, t) {
  var n = e.callbackNode;
  yh(e, t);
  var r = di(e, e === Ce ? _e : 0);
  if (r === 0)
    n !== null && rs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && rs(n), t === 1))
      e.tag === 0 ? gm(Gs.bind(null, e)) : Fd(Gs.bind(null, e)),
        pm(function () {
          !(G & 6) && fn();
        }),
        (n = null);
    else {
      switch (dd(r)) {
        case 1:
          n = Wa;
          break;
        case 4:
          n = ud;
          break;
        case 16:
          n = ci;
          break;
        case 536870912:
          n = sd;
          break;
        default:
          n = ci;
      }
      n = Of(n, _f.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function _f(e, t) {
  if (((ri = -1), (li = 0), G & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (or() && e.callbackNode !== n) return null;
  var r = di(e, e === Ce ? _e : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ri(e, r);
  else {
    t = r;
    var l = G;
    G |= 2;
    var i = Lf();
    (Ce !== e || _e !== t) && ((Pt = null), (pr = ge() + 500), Pn(e, t));
    do
      try {
        Um();
        break;
      } catch (a) {
        Rf(e, a);
      }
    while (1);
    ru(),
      (Pi.current = i),
      (G = l),
      we !== null ? (t = 0) : ((Ce = null), (_e = 0), (t = Ee));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = bo(e)), l !== 0 && ((r = l), (t = ja(e, l)))), t === 1)
    )
      throw ((n = dl), Pn(e, 0), Gt(e, r), Ke(e, ge()), n);
    if (t === 6) Gt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Fm(l) &&
          ((t = Ri(e, r)),
          t === 2 && ((i = bo(e)), i !== 0 && ((r = i), (t = ja(e, i)))),
          t === 1))
      )
        throw ((n = dl), Pn(e, 0), Gt(e, r), Ke(e, ge()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          wn(e, He, Pt);
          break;
        case 3:
          if (
            (Gt(e, r), (r & 130023424) === r && ((t = yu + 500 - ge()), 10 < t))
          ) {
            if (di(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Ue(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = aa(wn.bind(null, e, He, Pt), t);
            break;
          }
          wn(e, He, Pt);
          break;
        case 4:
          if ((Gt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - mt(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = ge() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Om(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = aa(wn.bind(null, e, He, Pt), r);
            break;
          }
          wn(e, He, Pt);
          break;
        case 5:
          wn(e, He, Pt);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Ke(e, ge()), e.callbackNode === n ? _f.bind(null, e) : null;
}
function ja(e, t) {
  var n = Yr;
  return (
    e.current.memoizedState.isDehydrated && (Pn(e, t).flags |= 256),
    (e = Ri(e, t)),
    e !== 2 && ((t = He), (He = n), t !== null && _a(t)),
    e
  );
}
function _a(e) {
  He === null ? (He = e) : He.push.apply(He, e);
}
function Fm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!gt(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Gt(e, t) {
  for (
    t &= ~gu,
      t &= ~Ki,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - mt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Gs(e) {
  if (G & 6) throw Error(R(327));
  or();
  var t = di(e, 0);
  if (!(t & 1)) return Ke(e, ge()), null;
  var n = Ri(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = bo(e);
    r !== 0 && ((t = r), (n = ja(e, r)));
  }
  if (n === 1) throw ((n = dl), Pn(e, 0), Gt(e, t), Ke(e, ge()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    wn(e, He, Pt),
    Ke(e, ge()),
    null
  );
}
function wu(e, t) {
  var n = G;
  G |= 1;
  try {
    return e(t);
  } finally {
    (G = n), G === 0 && ((pr = ge() + 500), Hi && fn());
  }
}
function Dn(e) {
  Zt !== null && Zt.tag === 0 && !(G & 6) && or();
  var t = G;
  G |= 1;
  var n = it.transition,
    r = b;
  try {
    if (((it.transition = null), (b = 1), e)) return e();
  } finally {
    (b = r), (it.transition = n), (G = t), !(G & 6) && fn();
  }
}
function xu() {
  (Xe = er.current), ae(er);
}
function Pn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), fm(n)), we !== null))
    for (n = we.return; n !== null; ) {
      var r = n;
      switch ((eu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && vi();
          break;
        case 3:
          dr(), ae(We), ae(Me), su();
          break;
        case 5:
          uu(r);
          break;
        case 4:
          dr();
          break;
        case 13:
          ae(ce);
          break;
        case 19:
          ae(ce);
          break;
        case 10:
          lu(r.type._context);
          break;
        case 22:
        case 23:
          xu();
      }
      n = n.return;
    }
  if (
    ((Ce = e),
    (we = e = an(e.current, null)),
    (_e = Xe = t),
    (Ee = 0),
    (dl = null),
    (gu = Ki = Tn = 0),
    (He = Yr = null),
    kn !== null)
  ) {
    for (t = 0; t < kn.length; t++)
      if (((n = kn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    kn = null;
  }
  return e;
}
function Rf(e, t) {
  do {
    var n = we;
    try {
      if ((ru(), (ei.current = Ni), Ci)) {
        for (var r = de.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Ci = !1;
      }
      if (
        ((Ln = 0),
        (ke = Se = de = null),
        (Qr = !1),
        (ul = 0),
        (vu.current = null),
        n === null || n.return === null)
      ) {
        (Ee = 1), (dl = t), (we = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          u = t;
        if (
          ((t = _e),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            f = a,
            d = f.tag;
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = f.alternate;
            h
              ? ((f.updateQueue = h.updateQueue),
                (f.memoizedState = h.memoizedState),
                (f.lanes = h.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var x = Fs(o);
          if (x !== null) {
            (x.flags &= -257),
              Is(x, o, a, i, t),
              x.mode & 1 && Os(i, s, t),
              (t = x),
              (u = s);
            var E = t.updateQueue;
            if (E === null) {
              var k = new Set();
              k.add(u), (t.updateQueue = k);
            } else E.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Os(i, s, t), Su();
              break e;
            }
            u = Error(R(426));
          }
        } else if (se && a.mode & 1) {
          var T = Fs(o);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              Is(T, o, a, i, t),
              tu(fr(u, a));
            break e;
          }
        }
        (i = u = fr(u, a)),
          Ee !== 4 && (Ee = 2),
          Yr === null ? (Yr = [i]) : Yr.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = ff(i, u, t);
              Rs(i, p);
              break e;
            case 1:
              a = u;
              var c = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (ln === null || !ln.has(v))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var C = pf(i, a, t);
                Rs(i, C);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Df(n);
    } catch (j) {
      (t = j), we === n && n !== null && (we = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Lf() {
  var e = Pi.current;
  return (Pi.current = Ni), e === null ? Ni : e;
}
function Su() {
  (Ee === 0 || Ee === 3 || Ee === 2) && (Ee = 4),
    Ce === null || (!(Tn & 268435455) && !(Ki & 268435455)) || Gt(Ce, _e);
}
function Ri(e, t) {
  var n = G;
  G |= 2;
  var r = Lf();
  (Ce !== e || _e !== t) && ((Pt = null), Pn(e, t));
  do
    try {
      Im();
      break;
    } catch (l) {
      Rf(e, l);
    }
  while (1);
  if ((ru(), (G = n), (Pi.current = r), we !== null)) throw Error(R(261));
  return (Ce = null), (_e = 0), Ee;
}
function Im() {
  for (; we !== null; ) Tf(we);
}
function Um() {
  for (; we !== null && !sh(); ) Tf(we);
}
function Tf(e) {
  var t = zf(e.alternate, e, Xe);
  (e.memoizedProps = e.pendingProps),
    t === null ? Df(e) : (we = t),
    (vu.current = null);
}
function Df(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Tm(n, t)), n !== null)) {
        (n.flags &= 32767), (we = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ee = 6), (we = null);
        return;
      }
    } else if (((n = Lm(n, t, Xe)), n !== null)) {
      we = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      we = t;
      return;
    }
    we = t = e;
  } while (t !== null);
  Ee === 0 && (Ee = 5);
}
function wn(e, t, n) {
  var r = b,
    l = it.transition;
  try {
    (it.transition = null), (b = 1), Am(e, t, n, r);
  } finally {
    (it.transition = l), (b = r);
  }
  return null;
}
function Am(e, t, n, r) {
  do or();
  while (Zt !== null);
  if (G & 6) throw Error(R(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (wh(e, i),
    e === Ce && ((we = Ce = null), (_e = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ql ||
      ((Ql = !0),
      Of(ci, function () {
        return or(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = it.transition), (it.transition = null);
    var o = b;
    b = 1;
    var a = G;
    (G |= 4),
      (vu.current = null),
      Mm(e, n),
      Pf(n, e),
      im(ia),
      (fi = !!la),
      (ia = la = null),
      (e.current = n),
      zm(n),
      ch(),
      (G = a),
      (b = o),
      (it.transition = i);
  } else e.current = n;
  if (
    (Ql && ((Ql = !1), (Zt = e), (_i = l)),
    (i = e.pendingLanes),
    i === 0 && (ln = null),
    ph(n.stateNode),
    Ke(e, ge()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ji) throw ((ji = !1), (e = Na), (Na = null), e);
  return (
    _i & 1 && e.tag !== 0 && or(),
    (i = e.pendingLanes),
    i & 1 ? (e === Pa ? Xr++ : ((Xr = 0), (Pa = e))) : (Xr = 0),
    fn(),
    null
  );
}
function or() {
  if (Zt !== null) {
    var e = dd(_i),
      t = it.transition,
      n = b;
    try {
      if (((it.transition = null), (b = 16 > e ? 16 : e), Zt === null))
        var r = !1;
      else {
        if (((e = Zt), (Zt = null), (_i = 0), G & 6)) throw Error(R(331));
        var l = G;
        for (G |= 4, O = e.current; O !== null; ) {
          var i = O,
            o = i.child;
          if (O.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (O = s; O !== null; ) {
                  var f = O;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Kr(8, f, i);
                  }
                  var d = f.child;
                  if (d !== null) (d.return = f), (O = d);
                  else
                    for (; O !== null; ) {
                      f = O;
                      var h = f.sibling,
                        x = f.return;
                      if ((kf(f), f === s)) {
                        O = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = x), (O = h);
                        break;
                      }
                      O = x;
                    }
                }
              }
              var E = i.alternate;
              if (E !== null) {
                var k = E.child;
                if (k !== null) {
                  E.child = null;
                  do {
                    var T = k.sibling;
                    (k.sibling = null), (k = T);
                  } while (k !== null);
                }
              }
              O = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (O = o);
          else
            e: for (; O !== null; ) {
              if (((i = O), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Kr(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (O = p);
                break e;
              }
              O = i.return;
            }
        }
        var c = e.current;
        for (O = c; O !== null; ) {
          o = O;
          var v = o.child;
          if (o.subtreeFlags & 2064 && v !== null) (v.return = o), (O = v);
          else
            e: for (o = c; O !== null; ) {
              if (((a = O), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qi(9, a);
                  }
                } catch (j) {
                  me(a, a.return, j);
                }
              if (a === o) {
                O = null;
                break e;
              }
              var C = a.sibling;
              if (C !== null) {
                (C.return = a.return), (O = C);
                break e;
              }
              O = a.return;
            }
        }
        if (
          ((G = l), fn(), Et && typeof Et.onPostCommitFiberRoot == "function")
        )
          try {
            Et.onPostCommitFiberRoot(Ii, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (b = n), (it.transition = t);
    }
  }
  return !1;
}
function Js(e, t, n) {
  (t = fr(n, t)),
    (t = ff(e, t, 1)),
    (e = rn(e, t, 1)),
    (t = Ue()),
    e !== null && (gl(e, 1, t), Ke(e, t));
}
function me(e, t, n) {
  if (e.tag === 3) Js(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Js(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ln === null || !ln.has(r)))
        ) {
          (e = fr(n, e)),
            (e = pf(t, e, 1)),
            (t = rn(t, e, 1)),
            (e = Ue()),
            t !== null && (gl(t, 1, e), Ke(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Bm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ce === e &&
      (_e & n) === n &&
      (Ee === 4 || (Ee === 3 && (_e & 130023424) === _e && 500 > ge() - yu)
        ? Pn(e, 0)
        : (gu |= n)),
    Ke(e, t);
}
function Mf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ol), (Ol <<= 1), !(Ol & 130023424) && (Ol = 4194304))
      : (t = 1));
  var n = Ue();
  (e = Ot(e, t)), e !== null && (gl(e, t, n), Ke(e, n));
}
function $m(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Mf(e, n);
}
function Hm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), Mf(e, n);
}
var zf;
zf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || We.current) Ve = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ve = !1), Rm(e, t, n);
      Ve = !!(e.flags & 131072);
    }
  else (Ve = !1), se && t.flags & 1048576 && Id(t, wi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ni(e, t), (e = t.pendingProps);
      var l = ur(t, Me.current);
      ir(t, n), (l = du(null, t, r, e, l, n));
      var i = fu();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Qe(r) ? ((i = !0), gi(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            ou(t),
            (l.updater = Wi),
            (t.stateNode = l),
            (l._reactInternals = t),
            ha(t, r, e, n),
            (t = ga(null, t, r, !0, i, n)))
          : ((t.tag = 0), se && i && ba(t), Ie(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ni(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Wm(r)),
          (e = dt(r, e)),
          l)
        ) {
          case 0:
            t = va(null, t, r, e, n);
            break e;
          case 1:
            t = Bs(null, t, r, e, n);
            break e;
          case 11:
            t = Us(null, t, r, e, n);
            break e;
          case 14:
            t = As(null, t, r, dt(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : dt(r, l)),
        va(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : dt(r, l)),
        Bs(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((gf(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Vd(e, t),
          Ei(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = fr(Error(R(423)), t)), (t = $s(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = fr(Error(R(424)), t)), (t = $s(e, t, r, n, l));
            break e;
          } else
            for (
              Je = nn(t.stateNode.containerInfo.firstChild),
                Ze = t,
                se = !0,
                ht = null,
                n = $d(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((sr(), r === l)) {
            t = Ft(e, t, n);
            break e;
          }
          Ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Wd(t),
        e === null && da(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        oa(r, l) ? (o = null) : i !== null && oa(r, i) && (t.flags |= 32),
        vf(e, t),
        Ie(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && da(t), null;
    case 13:
      return yf(e, t, n);
    case 4:
      return (
        au(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = cr(t, null, r, n)) : Ie(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : dt(r, l)),
        Us(e, t, r, l, n)
      );
    case 7:
      return Ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          ie(xi, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (gt(i.value, o)) {
            if (i.children === l.children && !We.current) {
              t = Ft(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = Tt(-1, n & -n)), (u.tag = 2);
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var f = s.pending;
                        f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (s.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      fa(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(R(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  fa(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        Ie(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        ir(t, n),
        (l = ot(l)),
        (r = r(l)),
        (t.flags |= 1),
        Ie(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = dt(r, t.pendingProps)),
        (l = dt(r.type, l)),
        As(e, t, r, l, n)
      );
    case 15:
      return hf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : dt(r, l)),
        ni(e, t),
        (t.tag = 1),
        Qe(r) ? ((e = !0), gi(t)) : (e = !1),
        ir(t, n),
        df(t, r, l),
        ha(t, r, l, n),
        ga(null, t, r, !0, e, n)
      );
    case 19:
      return wf(e, t, n);
    case 22:
      return mf(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function Of(e, t) {
  return ad(e, t);
}
function Vm(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function lt(e, t, n, r) {
  return new Vm(e, t, n, r);
}
function Eu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Wm(e) {
  if (typeof e == "function") return Eu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === $a)) return 11;
    if (e === Ha) return 14;
  }
  return 2;
}
function an(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = lt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ii(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Eu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Wn:
        return jn(n.children, l, i, t);
      case Ba:
        (o = 8), (l |= 8);
        break;
      case Uo:
        return (
          (e = lt(12, n, t, l | 2)), (e.elementType = Uo), (e.lanes = i), e
        );
      case Ao:
        return (e = lt(13, n, t, l)), (e.elementType = Ao), (e.lanes = i), e;
      case Bo:
        return (e = lt(19, n, t, l)), (e.elementType = Bo), (e.lanes = i), e;
      case Wc:
        return Yi(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Hc:
              o = 10;
              break e;
            case Vc:
              o = 9;
              break e;
            case $a:
              o = 11;
              break e;
            case Ha:
              o = 14;
              break e;
            case Qt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = lt(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function jn(e, t, n, r) {
  return (e = lt(7, e, r, t)), (e.lanes = n), e;
}
function Yi(e, t, n, r) {
  return (
    (e = lt(22, e, r, t)),
    (e.elementType = Wc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function To(e, t, n) {
  return (e = lt(6, e, null, t)), (e.lanes = n), e;
}
function Do(e, t, n) {
  return (
    (t = lt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Qm(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = fo(0)),
    (this.expirationTimes = fo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = fo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function ku(e, t, n, r, l, i, o, a, u) {
  return (
    (e = new Qm(e, t, n, a, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = lt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ou(i),
    e
  );
}
function Km(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Vn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ff(e) {
  if (!e) return sn;
  e = e._reactInternals;
  e: {
    if (On(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Qe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Qe(n)) return Od(e, n, t);
  }
  return t;
}
function If(e, t, n, r, l, i, o, a, u) {
  return (
    (e = ku(n, r, !0, e, l, i, o, a, u)),
    (e.context = Ff(null)),
    (n = e.current),
    (r = Ue()),
    (l = on(n)),
    (i = Tt(r, l)),
    (i.callback = t ?? null),
    rn(n, i, l),
    (e.current.lanes = l),
    gl(e, l, r),
    Ke(e, r),
    e
  );
}
function Xi(e, t, n, r) {
  var l = t.current,
    i = Ue(),
    o = on(l);
  return (
    (n = Ff(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Tt(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = rn(l, t, o)),
    e !== null && (vt(e, l, o, i), bl(e, l, o)),
    o
  );
}
function Li(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Zs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Cu(e, t) {
  Zs(e, t), (e = e.alternate) && Zs(e, t);
}
function Ym() {
  return null;
}
var Uf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Nu(e) {
  this._internalRoot = e;
}
Gi.prototype.render = Nu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Xi(e, t, null, null);
};
Gi.prototype.unmount = Nu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Dn(function () {
      Xi(null, e, null, null);
    }),
      (t[zt] = null);
  }
};
function Gi(e) {
  this._internalRoot = e;
}
Gi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = hd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Xt.length && t !== 0 && t < Xt[n].priority; n++);
    Xt.splice(n, 0, e), n === 0 && vd(e);
  }
};
function Pu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ji(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function qs() {}
function Xm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var s = Li(o);
        i.call(s);
      };
    }
    var o = If(t, r, e, 0, null, !1, !1, "", qs);
    return (
      (e._reactRootContainer = o),
      (e[zt] = o.current),
      rl(e.nodeType === 8 ? e.parentNode : e),
      Dn(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var s = Li(u);
      a.call(s);
    };
  }
  var u = ku(e, 0, !1, null, null, !1, !1, "", qs);
  return (
    (e._reactRootContainer = u),
    (e[zt] = u.current),
    rl(e.nodeType === 8 ? e.parentNode : e),
    Dn(function () {
      Xi(t, u, n, r);
    }),
    u
  );
}
function Zi(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = Li(o);
        a.call(u);
      };
    }
    Xi(t, o, e, l);
  } else o = Xm(n, t, e, l, r);
  return Li(o);
}
fd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ir(t.pendingLanes);
        n !== 0 &&
          (Qa(t, n | 1), Ke(t, ge()), !(G & 6) && ((pr = ge() + 500), fn()));
      }
      break;
    case 13:
      Dn(function () {
        var r = Ot(e, 1);
        if (r !== null) {
          var l = Ue();
          vt(r, e, 1, l);
        }
      }),
        Cu(e, 1);
  }
};
Ka = function (e) {
  if (e.tag === 13) {
    var t = Ot(e, 134217728);
    if (t !== null) {
      var n = Ue();
      vt(t, e, 134217728, n);
    }
    Cu(e, 134217728);
  }
};
pd = function (e) {
  if (e.tag === 13) {
    var t = on(e),
      n = Ot(e, t);
    if (n !== null) {
      var r = Ue();
      vt(n, e, t, r);
    }
    Cu(e, t);
  }
};
hd = function () {
  return b;
};
md = function (e, t) {
  var n = b;
  try {
    return (b = e), t();
  } finally {
    b = n;
  }
};
Jo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Vo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = $i(r);
            if (!l) throw Error(R(90));
            Kc(r), Vo(r, l);
          }
        }
      }
      break;
    case "textarea":
      Xc(e, n);
      break;
    case "select":
      (t = n.value), t != null && tr(e, !!n.multiple, t, !1);
  }
};
td = wu;
nd = Dn;
var Gm = { usingClientEntryPoint: !1, Events: [wl, Xn, $i, bc, ed, wu] },
  Tr = {
    findFiberByHostInstance: En,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Jm = {
    bundleType: Tr.bundleType,
    version: Tr.version,
    rendererPackageName: Tr.rendererPackageName,
    rendererConfig: Tr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: It.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = id(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Tr.findFiberByHostInstance || Ym,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Kl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Kl.isDisabled && Kl.supportsFiber)
    try {
      (Ii = Kl.inject(Jm)), (Et = Kl);
    } catch {}
}
be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gm;
be.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Pu(t)) throw Error(R(200));
  return Km(e, t, null, n);
};
be.createRoot = function (e, t) {
  if (!Pu(e)) throw Error(R(299));
  var n = !1,
    r = "",
    l = Uf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = ku(e, 1, !1, null, null, n, !1, r, l)),
    (e[zt] = t.current),
    rl(e.nodeType === 8 ? e.parentNode : e),
    new Nu(t)
  );
};
be.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = id(t)), (e = e === null ? null : e.stateNode), e;
};
be.flushSync = function (e) {
  return Dn(e);
};
be.hydrate = function (e, t, n) {
  if (!Ji(t)) throw Error(R(200));
  return Zi(null, e, t, !0, n);
};
be.hydrateRoot = function (e, t, n) {
  if (!Pu(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = Uf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = If(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[zt] = t.current),
    rl(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Gi(t);
};
be.render = function (e, t, n) {
  if (!Ji(t)) throw Error(R(200));
  return Zi(null, e, t, !1, n);
};
be.unmountComponentAtNode = function (e) {
  if (!Ji(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (Dn(function () {
        Zi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[zt] = null);
        });
      }),
      !0)
    : !1;
};
be.unstable_batchedUpdates = wu;
be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ji(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return Zi(e, t, n, !1, r);
};
be.version = "18.3.1-next-f1338f8080-20240426";
function Af() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Af);
    } catch (e) {
      console.error(e);
    }
}
Af(), (Uc.exports = be);
var ju = Uc.exports;
const Zm = Pc(ju),
  qm = Nc({ __proto__: null, default: Zm }, [ju]);
var bs = ju;
(Fo.createRoot = bs.createRoot), (Fo.hydrateRoot = bs.hydrateRoot);
/**
 * @remix-run/router v1.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ue() {
  return (
    (ue = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ue.apply(this, arguments)
  );
}
var ve;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ve || (ve = {}));
const ec = "popstate";
function bm(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: a } = r.location;
    return fl(
      "",
      { pathname: i, search: o, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : Mn(l);
  }
  return tv(t, n, null, e);
}
function Q(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function hr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function ev() {
  return Math.random().toString(36).substr(2, 8);
}
function tc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function fl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ue(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Ut(t) : t,
      { state: n, key: (t && t.key) || r || ev() }
    )
  );
}
function Mn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Ut(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function tv(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    a = ve.Pop,
    u = null,
    s = f();
  s == null && ((s = 0), o.replaceState(ue({}, o.state, { idx: s }), ""));
  function f() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    a = ve.Pop;
    let T = f(),
      p = T == null ? null : T - s;
    (s = T), u && u({ action: a, location: k.location, delta: p });
  }
  function h(T, p) {
    a = ve.Push;
    let c = fl(k.location, T, p);
    n && n(c, T), (s = f() + 1);
    let v = tc(c, s),
      C = k.createHref(c);
    try {
      o.pushState(v, "", C);
    } catch (j) {
      if (j instanceof DOMException && j.name === "DataCloneError") throw j;
      l.location.assign(C);
    }
    i && u && u({ action: a, location: k.location, delta: 1 });
  }
  function x(T, p) {
    a = ve.Replace;
    let c = fl(k.location, T, p);
    n && n(c, T), (s = f());
    let v = tc(c, s),
      C = k.createHref(c);
    o.replaceState(v, "", C),
      i && u && u({ action: a, location: k.location, delta: 0 });
  }
  function E(T) {
    let p = l.location.origin !== "null" ? l.location.origin : l.location.href,
      c = typeof T == "string" ? T : Mn(T);
    return (
      (c = c.replace(/ $/, "%20")),
      Q(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, p)
    );
  }
  let k = {
    get action() {
      return a;
    },
    get location() {
      return e(l, o);
    },
    listen(T) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(ec, d),
        (u = T),
        () => {
          l.removeEventListener(ec, d), (u = null);
        }
      );
    },
    createHref(T) {
      return t(l, T);
    },
    createURL: E,
    encodeLocation(T) {
      let p = E(T);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: h,
    replace: x,
    go(T) {
      return o.go(T);
    },
  };
  return k;
}
var q;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(q || (q = {}));
const nv = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function rv(e) {
  return e.index === !0;
}
function Ti(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, i) => {
      let o = [...n, String(i)],
        a = typeof l.id == "string" ? l.id : o.join("-");
      if (
        (Q(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route"
        ),
        Q(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        rv(l))
      ) {
        let u = ue({}, l, t(l), { id: a });
        return (r[a] = u), u;
      } else {
        let u = ue({}, l, t(l), { id: a, children: void 0 });
        return (
          (r[a] = u), l.children && (u.children = Ti(l.children, t, o, r)), u
        );
      }
    })
  );
}
function xn(e, t, n) {
  return n === void 0 && (n = "/"), oi(e, t, n, !1);
}
function oi(e, t, n, r) {
  let l = typeof t == "string" ? Ut(t) : t,
    i = yr(l.pathname || "/", n);
  if (i == null) return null;
  let o = Bf(e);
  iv(o);
  let a = null;
  for (let u = 0; a == null && u < o.length; ++u) {
    let s = vv(i);
    a = hv(o[u], s, r);
  }
  return a;
}
function lv(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function Bf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (i, o, a) => {
    let u = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    u.relativePath.startsWith("/") &&
      (Q(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = Dt([r, u.relativePath]),
      f = n.concat(u);
    i.children &&
      i.children.length > 0 &&
      (Q(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".')
      ),
      Bf(i.children, t, f, s)),
      !(i.path == null && !i.index) &&
        t.push({ path: s, score: fv(s, i.index), routesMeta: f });
  };
  return (
    e.forEach((i, o) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) l(i, o);
      else for (let u of $f(i.path)) l(i, o, u);
    }),
    t
  );
}
function $f(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = $f(r.join("/")),
    a = [];
  return (
    a.push(...o.map((u) => (u === "" ? i : [i, u].join("/")))),
    l && a.push(...o),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function iv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : pv(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const ov = /^:[\w-]+$/,
  av = 3,
  uv = 2,
  sv = 1,
  cv = 10,
  dv = -2,
  nc = (e) => e === "*";
function fv(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(nc) && (r += dv),
    t && (r += uv),
    n
      .filter((l) => !nc(l))
      .reduce((l, i) => l + (ov.test(i) ? av : i === "" ? sv : cv), r)
  );
}
function pv(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function hv(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    l = {},
    i = "/",
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let u = r[a],
      s = a === r.length - 1,
      f = i === "/" ? t : t.slice(i.length) || "/",
      d = rc(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        f
      ),
      h = u.route;
    if (
      (!d &&
        s &&
        n &&
        !r[r.length - 1].route.index &&
        (d = rc(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          f
        )),
      !d)
    )
      return null;
    Object.assign(l, d.params),
      o.push({
        params: l,
        pathname: Dt([i, d.pathname]),
        pathnameBase: wv(Dt([i, d.pathnameBase])),
        route: h,
      }),
      d.pathnameBase !== "/" && (i = Dt([i, d.pathnameBase]));
  }
  return o;
}
function rc(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = mv(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    a = l.slice(1);
  return {
    params: r.reduce((s, f, d) => {
      let { paramName: h, isOptional: x } = f;
      if (h === "*") {
        let k = a[d] || "";
        o = i.slice(0, i.length - k.length).replace(/(.)\/+$/, "$1");
      }
      const E = a[d];
      return (
        x && !E ? (s[h] = void 0) : (s[h] = (E || "").replace(/%2F/g, "/")), s
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function mv(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    hr(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function vv(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      hr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function yr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function gv(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Ut(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : yv(n, t)) : t,
    search: xv(r),
    hash: Sv(l),
  };
}
function yv(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Mo(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Hf(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function qi(e, t) {
  let n = Hf(e);
  return t
    ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function bi(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Ut(e))
    : ((l = ue({}, e)),
      Q(
        !l.pathname || !l.pathname.includes("?"),
        Mo("?", "pathname", "search", l)
      ),
      Q(
        !l.pathname || !l.pathname.includes("#"),
        Mo("#", "pathname", "hash", l)
      ),
      Q(!l.search || !l.search.includes("#"), Mo("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    a;
  if (o == null) a = n;
  else {
    let d = t.length - 1;
    if (!r && o.startsWith("..")) {
      let h = o.split("/");
      for (; h[0] === ".."; ) h.shift(), (d -= 1);
      l.pathname = h.join("/");
    }
    a = d >= 0 ? t[d] : "/";
  }
  let u = gv(l, a),
    s = o && o !== "/" && o.endsWith("/"),
    f = (i || o === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (s || f) && (u.pathname += "/"), u;
}
const Dt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  wv = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  xv = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Sv = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Di {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function pl(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Vf = ["post", "put", "patch", "delete"],
  Ev = new Set(Vf),
  kv = ["get", ...Vf],
  Cv = new Set(kv),
  Nv = new Set([301, 302, 303, 307, 308]),
  Pv = new Set([307, 308]),
  zo = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  jv = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Dr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  _u = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  _v = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Wf = "remix-router-transitions";
function Rv(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  Q(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let m = e.detectErrorBoundary;
    l = (w) => ({ hasErrorBoundary: m(w) });
  } else l = _v;
  let i = {},
    o = Ti(e.routes, l, void 0, i),
    a,
    u = e.basename || "/",
    s = e.dataStrategy || Mv,
    f = e.patchRoutesOnNavigation,
    d = ue(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future
    ),
    h = null,
    x = new Set(),
    E = null,
    k = null,
    T = null,
    p = e.hydrationData != null,
    c = xn(o, e.history.location, u),
    v = !1,
    C = null;
  if (c == null && !f) {
    let m = $e(404, { pathname: e.history.location.pathname }),
      { matches: w, route: S } = hc(o);
    (c = w), (C = { [S.id]: m });
  }
  c &&
    !e.hydrationData &&
    Pl(c, o, e.history.location.pathname).active &&
    (c = null);
  let j;
  if (c)
    if (c.some((m) => m.route.lazy)) j = !1;
    else if (!c.some((m) => m.route.loader)) j = !0;
    else if (d.v7_partialHydration) {
      let m = e.hydrationData ? e.hydrationData.loaderData : null,
        w = e.hydrationData ? e.hydrationData.errors : null;
      if (w) {
        let S = c.findIndex((P) => w[P.route.id] !== void 0);
        j = c.slice(0, S + 1).every((P) => !La(P.route, m, w));
      } else j = c.every((S) => !La(S.route, m, w));
    } else j = e.hydrationData != null;
  else if (((j = !1), (c = []), d.v7_partialHydration)) {
    let m = Pl(null, o, e.history.location.pathname);
    m.active && m.matches && ((v = !0), (c = m.matches));
  }
  let z,
    y = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: c,
      initialized: j,
      navigation: zo,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || C,
      fetchers: new Map(),
      blockers: new Map(),
    },
    _ = ve.Pop,
    $ = !1,
    D,
    ee = !1,
    re = new Map(),
    xe = null,
    Ne = !1,
    ut = !1,
    At = [],
    Bt = new Set(),
    L = new Map(),
    H = 0,
    V = -1,
    te = new Map(),
    ne = new Set(),
    st = new Map(),
    Ye = new Map(),
    ze = new Set(),
    Oe = new Map(),
    tt = new Map(),
    kl;
  function up() {
    if (
      ((h = e.history.listen((m) => {
        let { action: w, location: S, delta: P } = m;
        if (kl) {
          kl(), (kl = void 0);
          return;
        }
        hr(
          tt.size === 0 || P != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let M = $u({
          currentLocation: y.location,
          nextLocation: S,
          historyAction: w,
        });
        if (M && P != null) {
          let A = new Promise((W) => {
            kl = W;
          });
          e.history.go(P * -1),
            Nl(M, {
              state: "blocked",
              location: S,
              proceed() {
                Nl(M, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: S,
                }),
                  A.then(() => e.history.go(P));
              },
              reset() {
                let W = new Map(y.blockers);
                W.set(M, Dr), Fe({ blockers: W });
              },
            });
          return;
        }
        return mn(w, S);
      })),
      n)
    ) {
      Yv(t, re);
      let m = () => Xv(t, re);
      t.addEventListener("pagehide", m),
        (xe = () => t.removeEventListener("pagehide", m));
    }
    return y.initialized || mn(ve.Pop, y.location, { initialHydration: !0 }), z;
  }
  function sp() {
    h && h(),
      xe && xe(),
      x.clear(),
      D && D.abort(),
      y.fetchers.forEach((m, w) => Cl(w)),
      y.blockers.forEach((m, w) => Bu(w));
  }
  function cp(m) {
    return x.add(m), () => x.delete(m);
  }
  function Fe(m, w) {
    w === void 0 && (w = {}), (y = ue({}, y, m));
    let S = [],
      P = [];
    d.v7_fetcherPersist &&
      y.fetchers.forEach((M, A) => {
        M.state === "idle" && (ze.has(A) ? P.push(A) : S.push(A));
      }),
      ze.forEach((M) => {
        !y.fetchers.has(M) && !L.has(M) && P.push(M);
      }),
      [...x].forEach((M) =>
        M(y, {
          deletedFetchers: P,
          viewTransitionOpts: w.viewTransitionOpts,
          flushSync: w.flushSync === !0,
        })
      ),
      d.v7_fetcherPersist
        ? (S.forEach((M) => y.fetchers.delete(M)), P.forEach((M) => Cl(M)))
        : P.forEach((M) => ze.delete(M));
  }
  function Fn(m, w, S) {
    var P, M;
    let { flushSync: A } = S === void 0 ? {} : S,
      W =
        y.actionData != null &&
        y.navigation.formMethod != null &&
        pt(y.navigation.formMethod) &&
        y.navigation.state === "loading" &&
        ((P = m.state) == null ? void 0 : P._isRedirect) !== !0,
      I;
    w.actionData
      ? Object.keys(w.actionData).length > 0
        ? (I = w.actionData)
        : (I = null)
      : W
      ? (I = y.actionData)
      : (I = null);
    let U = w.loaderData
        ? fc(y.loaderData, w.loaderData, w.matches || [], w.errors)
        : y.loaderData,
      F = y.blockers;
    F.size > 0 && ((F = new Map(F)), F.forEach((X, Pe) => F.set(Pe, Dr)));
    let B =
      $ === !0 ||
      (y.navigation.formMethod != null &&
        pt(y.navigation.formMethod) &&
        ((M = m.state) == null ? void 0 : M._isRedirect) !== !0);
    a && ((o = a), (a = void 0)),
      Ne ||
        _ === ve.Pop ||
        (_ === ve.Push
          ? e.history.push(m, m.state)
          : _ === ve.Replace && e.history.replace(m, m.state));
    let K;
    if (_ === ve.Pop) {
      let X = re.get(y.location.pathname);
      X && X.has(m.pathname)
        ? (K = { currentLocation: y.location, nextLocation: m })
        : re.has(m.pathname) &&
          (K = { currentLocation: m, nextLocation: y.location });
    } else if (ee) {
      let X = re.get(y.location.pathname);
      X
        ? X.add(m.pathname)
        : ((X = new Set([m.pathname])), re.set(y.location.pathname, X)),
        (K = { currentLocation: y.location, nextLocation: m });
    }
    Fe(
      ue({}, w, {
        actionData: I,
        loaderData: U,
        historyAction: _,
        location: m,
        initialized: !0,
        navigation: zo,
        revalidation: "idle",
        restoreScrollPosition: Vu(m, w.matches || y.matches),
        preventScrollReset: B,
        blockers: F,
      }),
      { viewTransitionOpts: K, flushSync: A === !0 }
    ),
      (_ = ve.Pop),
      ($ = !1),
      (ee = !1),
      (Ne = !1),
      (ut = !1),
      (At = []);
  }
  async function Mu(m, w) {
    if (typeof m == "number") {
      e.history.go(m);
      return;
    }
    let S = Ra(
        y.location,
        y.matches,
        u,
        d.v7_prependBasename,
        m,
        d.v7_relativeSplatPath,
        w == null ? void 0 : w.fromRouteId,
        w == null ? void 0 : w.relative
      ),
      {
        path: P,
        submission: M,
        error: A,
      } = lc(d.v7_normalizeFormMethod, !1, S, w),
      W = y.location,
      I = fl(y.location, P, w && w.state);
    I = ue({}, I, e.history.encodeLocation(I));
    let U = w && w.replace != null ? w.replace : void 0,
      F = ve.Push;
    U === !0
      ? (F = ve.Replace)
      : U === !1 ||
        (M != null &&
          pt(M.formMethod) &&
          M.formAction === y.location.pathname + y.location.search &&
          (F = ve.Replace));
    let B =
        w && "preventScrollReset" in w ? w.preventScrollReset === !0 : void 0,
      K = (w && w.flushSync) === !0,
      X = $u({ currentLocation: W, nextLocation: I, historyAction: F });
    if (X) {
      Nl(X, {
        state: "blocked",
        location: I,
        proceed() {
          Nl(X, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: I,
          }),
            Mu(m, w);
        },
        reset() {
          let Pe = new Map(y.blockers);
          Pe.set(X, Dr), Fe({ blockers: Pe });
        },
      });
      return;
    }
    return await mn(F, I, {
      submission: M,
      pendingError: A,
      preventScrollReset: B,
      replace: w && w.replace,
      enableViewTransition: w && w.viewTransition,
      flushSync: K,
    });
  }
  function dp() {
    if (
      (no(),
      Fe({ revalidation: "loading" }),
      y.navigation.state !== "submitting")
    ) {
      if (y.navigation.state === "idle") {
        mn(y.historyAction, y.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      mn(_ || y.historyAction, y.navigation.location, {
        overrideNavigation: y.navigation,
        enableViewTransition: ee === !0,
      });
    }
  }
  async function mn(m, w, S) {
    D && D.abort(),
      (D = null),
      (_ = m),
      (Ne = (S && S.startUninterruptedRevalidation) === !0),
      Sp(y.location, y.matches),
      ($ = (S && S.preventScrollReset) === !0),
      (ee = (S && S.enableViewTransition) === !0);
    let P = a || o,
      M = S && S.overrideNavigation,
      A =
        S != null &&
        S.initialHydration &&
        y.matches &&
        y.matches.length > 0 &&
        !v
          ? y.matches
          : xn(P, w, u),
      W = (S && S.flushSync) === !0,
      I = Pl(A, P, w.pathname);
    if ((I.active && I.matches && (A = I.matches), !A)) {
      let { error: le, notFoundMatches: Z, route: pe } = ro(w.pathname);
      Fn(
        w,
        { matches: Z, loaderData: {}, errors: { [pe.id]: le } },
        { flushSync: W }
      );
      return;
    }
    if (
      y.initialized &&
      !ut &&
      Av(y.location, w) &&
      !(S && S.submission && pt(S.submission.formMethod))
    ) {
      Fn(w, { matches: A }, { flushSync: W });
      return;
    }
    D = new AbortController();
    let U = $n(e.history, w, D.signal, S && S.submission),
      F;
    if (S && S.pendingError)
      F = [Sn(A).route.id, { type: q.error, error: S.pendingError }];
    else if (S && S.submission && pt(S.submission.formMethod)) {
      let le = await fp(U, w, S.submission, A, I.active, {
        replace: S.replace,
        flushSync: W,
      });
      if (le.shortCircuited) return;
      if (le.pendingActionResult) {
        let [Z, pe] = le.pendingActionResult;
        if (Ge(pe) && pl(pe.error) && pe.error.status === 404) {
          (D = null),
            Fn(w, {
              matches: le.matches,
              loaderData: {},
              errors: { [Z]: pe.error },
            });
          return;
        }
      }
      (A = le.matches || A),
        (F = le.pendingActionResult),
        (M = Oo(w, S.submission)),
        (W = !1),
        (I.active = !1),
        (U = $n(e.history, U.url, U.signal));
    }
    let {
      shortCircuited: B,
      matches: K,
      loaderData: X,
      errors: Pe,
    } = await pp(
      U,
      w,
      A,
      I.active,
      M,
      S && S.submission,
      S && S.fetcherSubmission,
      S && S.replace,
      S && S.initialHydration === !0,
      W,
      F
    );
    B ||
      ((D = null),
      Fn(w, ue({ matches: K || A }, pc(F), { loaderData: X, errors: Pe })));
  }
  async function fp(m, w, S, P, M, A) {
    A === void 0 && (A = {}), no();
    let W = Qv(w, S);
    if ((Fe({ navigation: W }, { flushSync: A.flushSync === !0 }), M)) {
      let F = await jl(P, w.pathname, m.signal);
      if (F.type === "aborted") return { shortCircuited: !0 };
      if (F.type === "error") {
        let B = Sn(F.partialMatches).route.id;
        return {
          matches: F.partialMatches,
          pendingActionResult: [B, { type: q.error, error: F.error }],
        };
      } else if (F.matches) P = F.matches;
      else {
        let { notFoundMatches: B, error: K, route: X } = ro(w.pathname);
        return {
          matches: B,
          pendingActionResult: [X.id, { type: q.error, error: K }],
        };
      }
    }
    let I,
      U = Ar(P, w);
    if (!U.route.action && !U.route.lazy)
      I = {
        type: q.error,
        error: $e(405, {
          method: m.method,
          pathname: w.pathname,
          routeId: U.route.id,
        }),
      };
    else if (
      ((I = (await xr("action", y, m, [U], P, null))[U.route.id]),
      m.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (Nn(I)) {
      let F;
      return (
        A && A.replace != null
          ? (F = A.replace)
          : (F =
              sc(I.response.headers.get("Location"), new URL(m.url), u) ===
              y.location.pathname + y.location.search),
        await vn(m, I, !0, { submission: S, replace: F }),
        { shortCircuited: !0 }
      );
    }
    if (qt(I)) throw $e(400, { type: "defer-action" });
    if (Ge(I)) {
      let F = Sn(P, U.route.id);
      return (
        (A && A.replace) !== !0 && (_ = ve.Push),
        { matches: P, pendingActionResult: [F.route.id, I] }
      );
    }
    return { matches: P, pendingActionResult: [U.route.id, I] };
  }
  async function pp(m, w, S, P, M, A, W, I, U, F, B) {
    let K = M || Oo(w, A),
      X = A || W || vc(K),
      Pe = !Ne && (!d.v7_partialHydration || !U);
    if (P) {
      if (Pe) {
        let he = zu(B);
        Fe(ue({ navigation: K }, he !== void 0 ? { actionData: he } : {}), {
          flushSync: F,
        });
      }
      let J = await jl(S, w.pathname, m.signal);
      if (J.type === "aborted") return { shortCircuited: !0 };
      if (J.type === "error") {
        let he = Sn(J.partialMatches).route.id;
        return {
          matches: J.partialMatches,
          loaderData: {},
          errors: { [he]: J.error },
        };
      } else if (J.matches) S = J.matches;
      else {
        let { error: he, notFoundMatches: Un, route: kr } = ro(w.pathname);
        return { matches: Un, loaderData: {}, errors: { [kr.id]: he } };
      }
    }
    let le = a || o,
      [Z, pe] = oc(
        e.history,
        y,
        S,
        X,
        w,
        d.v7_partialHydration && U === !0,
        d.v7_skipActionErrorRevalidation,
        ut,
        At,
        Bt,
        ze,
        st,
        ne,
        le,
        u,
        B
      );
    if (
      (lo(
        (J) =>
          !(S && S.some((he) => he.route.id === J)) ||
          (Z && Z.some((he) => he.route.id === J))
      ),
      (V = ++H),
      Z.length === 0 && pe.length === 0)
    ) {
      let J = Uu();
      return (
        Fn(
          w,
          ue(
            {
              matches: S,
              loaderData: {},
              errors: B && Ge(B[1]) ? { [B[0]]: B[1].error } : null,
            },
            pc(B),
            J ? { fetchers: new Map(y.fetchers) } : {}
          ),
          { flushSync: F }
        ),
        { shortCircuited: !0 }
      );
    }
    if (Pe) {
      let J = {};
      if (!P) {
        J.navigation = K;
        let he = zu(B);
        he !== void 0 && (J.actionData = he);
      }
      pe.length > 0 && (J.fetchers = hp(pe)), Fe(J, { flushSync: F });
    }
    pe.forEach((J) => {
      Ht(J.key), J.controller && L.set(J.key, J.controller);
    });
    let In = () => pe.forEach((J) => Ht(J.key));
    D && D.signal.addEventListener("abort", In);
    let { loaderResults: Sr, fetcherResults: Nt } = await Ou(y, S, Z, pe, m);
    if (m.signal.aborted) return { shortCircuited: !0 };
    D && D.signal.removeEventListener("abort", In),
      pe.forEach((J) => L.delete(J.key));
    let yt = Yl(Sr);
    if (yt)
      return await vn(m, yt.result, !0, { replace: I }), { shortCircuited: !0 };
    if (((yt = Yl(Nt)), yt))
      return (
        ne.add(yt.key),
        await vn(m, yt.result, !0, { replace: I }),
        { shortCircuited: !0 }
      );
    let { loaderData: io, errors: Er } = dc(y, S, Sr, B, pe, Nt, Oe);
    Oe.forEach((J, he) => {
      J.subscribe((Un) => {
        (Un || J.done) && Oe.delete(he);
      });
    }),
      d.v7_partialHydration && U && y.errors && (Er = ue({}, y.errors, Er));
    let gn = Uu(),
      _l = Au(V),
      Rl = gn || _l || pe.length > 0;
    return ue(
      { matches: S, loaderData: io, errors: Er },
      Rl ? { fetchers: new Map(y.fetchers) } : {}
    );
  }
  function zu(m) {
    if (m && !Ge(m[1])) return { [m[0]]: m[1].data };
    if (y.actionData)
      return Object.keys(y.actionData).length === 0 ? null : y.actionData;
  }
  function hp(m) {
    return (
      m.forEach((w) => {
        let S = y.fetchers.get(w.key),
          P = Mr(void 0, S ? S.data : void 0);
        y.fetchers.set(w.key, P);
      }),
      new Map(y.fetchers)
    );
  }
  function mp(m, w, S, P) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    Ht(m);
    let M = (P && P.flushSync) === !0,
      A = a || o,
      W = Ra(
        y.location,
        y.matches,
        u,
        d.v7_prependBasename,
        S,
        d.v7_relativeSplatPath,
        w,
        P == null ? void 0 : P.relative
      ),
      I = xn(A, W, u),
      U = Pl(I, A, W);
    if ((U.active && U.matches && (I = U.matches), !I)) {
      Ct(m, w, $e(404, { pathname: W }), { flushSync: M });
      return;
    }
    let {
      path: F,
      submission: B,
      error: K,
    } = lc(d.v7_normalizeFormMethod, !0, W, P);
    if (K) {
      Ct(m, w, K, { flushSync: M });
      return;
    }
    let X = Ar(I, F),
      Pe = (P && P.preventScrollReset) === !0;
    if (B && pt(B.formMethod)) {
      vp(m, w, F, X, I, U.active, M, Pe, B);
      return;
    }
    st.set(m, { routeId: w, path: F }), gp(m, w, F, X, I, U.active, M, Pe, B);
  }
  async function vp(m, w, S, P, M, A, W, I, U) {
    no(), st.delete(m);
    function F(ye) {
      if (!ye.route.action && !ye.route.lazy) {
        let An = $e(405, { method: U.formMethod, pathname: S, routeId: w });
        return Ct(m, w, An, { flushSync: W }), !0;
      }
      return !1;
    }
    if (!A && F(P)) return;
    let B = y.fetchers.get(m);
    $t(m, Kv(U, B), { flushSync: W });
    let K = new AbortController(),
      X = $n(e.history, S, K.signal, U);
    if (A) {
      let ye = await jl(M, new URL(X.url).pathname, X.signal);
      if (ye.type === "aborted") return;
      if (ye.type === "error") {
        Ct(m, w, ye.error, { flushSync: W });
        return;
      } else if (ye.matches) {
        if (((M = ye.matches), (P = Ar(M, S)), F(P))) return;
      } else {
        Ct(m, w, $e(404, { pathname: S }), { flushSync: W });
        return;
      }
    }
    L.set(m, K);
    let Pe = H,
      Z = (await xr("action", y, X, [P], M, m))[P.route.id];
    if (X.signal.aborted) {
      L.get(m) === K && L.delete(m);
      return;
    }
    if (d.v7_fetcherPersist && ze.has(m)) {
      if (Nn(Z) || Ge(Z)) {
        $t(m, Wt(void 0));
        return;
      }
    } else {
      if (Nn(Z))
        if ((L.delete(m), V > Pe)) {
          $t(m, Wt(void 0));
          return;
        } else
          return (
            ne.add(m),
            $t(m, Mr(U)),
            vn(X, Z, !1, { fetcherSubmission: U, preventScrollReset: I })
          );
      if (Ge(Z)) {
        Ct(m, w, Z.error);
        return;
      }
    }
    if (qt(Z)) throw $e(400, { type: "defer-action" });
    let pe = y.navigation.location || y.location,
      In = $n(e.history, pe, K.signal),
      Sr = a || o,
      Nt =
        y.navigation.state !== "idle"
          ? xn(Sr, y.navigation.location, u)
          : y.matches;
    Q(Nt, "Didn't find any matches after fetcher action");
    let yt = ++H;
    te.set(m, yt);
    let io = Mr(U, Z.data);
    y.fetchers.set(m, io);
    let [Er, gn] = oc(
      e.history,
      y,
      Nt,
      U,
      pe,
      !1,
      d.v7_skipActionErrorRevalidation,
      ut,
      At,
      Bt,
      ze,
      st,
      ne,
      Sr,
      u,
      [P.route.id, Z]
    );
    gn
      .filter((ye) => ye.key !== m)
      .forEach((ye) => {
        let An = ye.key,
          Wu = y.fetchers.get(An),
          Cp = Mr(void 0, Wu ? Wu.data : void 0);
        y.fetchers.set(An, Cp),
          Ht(An),
          ye.controller && L.set(An, ye.controller);
      }),
      Fe({ fetchers: new Map(y.fetchers) });
    let _l = () => gn.forEach((ye) => Ht(ye.key));
    K.signal.addEventListener("abort", _l);
    let { loaderResults: Rl, fetcherResults: J } = await Ou(y, Nt, Er, gn, In);
    if (K.signal.aborted) return;
    K.signal.removeEventListener("abort", _l),
      te.delete(m),
      L.delete(m),
      gn.forEach((ye) => L.delete(ye.key));
    let he = Yl(Rl);
    if (he) return vn(In, he.result, !1, { preventScrollReset: I });
    if (((he = Yl(J)), he))
      return ne.add(he.key), vn(In, he.result, !1, { preventScrollReset: I });
    let { loaderData: Un, errors: kr } = dc(y, Nt, Rl, void 0, gn, J, Oe);
    if (y.fetchers.has(m)) {
      let ye = Wt(Z.data);
      y.fetchers.set(m, ye);
    }
    Au(yt),
      y.navigation.state === "loading" && yt > V
        ? (Q(_, "Expected pending action"),
          D && D.abort(),
          Fn(y.navigation.location, {
            matches: Nt,
            loaderData: Un,
            errors: kr,
            fetchers: new Map(y.fetchers),
          }))
        : (Fe({
            errors: kr,
            loaderData: fc(y.loaderData, Un, Nt, kr),
            fetchers: new Map(y.fetchers),
          }),
          (ut = !1));
  }
  async function gp(m, w, S, P, M, A, W, I, U) {
    let F = y.fetchers.get(m);
    $t(m, Mr(U, F ? F.data : void 0), { flushSync: W });
    let B = new AbortController(),
      K = $n(e.history, S, B.signal);
    if (A) {
      let Z = await jl(M, new URL(K.url).pathname, K.signal);
      if (Z.type === "aborted") return;
      if (Z.type === "error") {
        Ct(m, w, Z.error, { flushSync: W });
        return;
      } else if (Z.matches) (M = Z.matches), (P = Ar(M, S));
      else {
        Ct(m, w, $e(404, { pathname: S }), { flushSync: W });
        return;
      }
    }
    L.set(m, B);
    let X = H,
      le = (await xr("loader", y, K, [P], M, m))[P.route.id];
    if (
      (qt(le) && (le = (await Ru(le, K.signal, !0)) || le),
      L.get(m) === B && L.delete(m),
      !K.signal.aborted)
    ) {
      if (ze.has(m)) {
        $t(m, Wt(void 0));
        return;
      }
      if (Nn(le))
        if (V > X) {
          $t(m, Wt(void 0));
          return;
        } else {
          ne.add(m), await vn(K, le, !1, { preventScrollReset: I });
          return;
        }
      if (Ge(le)) {
        Ct(m, w, le.error);
        return;
      }
      Q(!qt(le), "Unhandled fetcher deferred data"), $t(m, Wt(le.data));
    }
  }
  async function vn(m, w, S, P) {
    let {
      submission: M,
      fetcherSubmission: A,
      preventScrollReset: W,
      replace: I,
    } = P === void 0 ? {} : P;
    w.response.headers.has("X-Remix-Revalidate") && (ut = !0);
    let U = w.response.headers.get("Location");
    Q(U, "Expected a Location header on the redirect Response"),
      (U = sc(U, new URL(m.url), u));
    let F = fl(y.location, U, { _isRedirect: !0 });
    if (n) {
      let Z = !1;
      if (w.response.headers.has("X-Remix-Reload-Document")) Z = !0;
      else if (_u.test(U)) {
        const pe = e.history.createURL(U);
        Z = pe.origin !== t.location.origin || yr(pe.pathname, u) == null;
      }
      if (Z) {
        I ? t.location.replace(U) : t.location.assign(U);
        return;
      }
    }
    D = null;
    let B =
        I === !0 || w.response.headers.has("X-Remix-Replace")
          ? ve.Replace
          : ve.Push,
      { formMethod: K, formAction: X, formEncType: Pe } = y.navigation;
    !M && !A && K && X && Pe && (M = vc(y.navigation));
    let le = M || A;
    if (Pv.has(w.response.status) && le && pt(le.formMethod))
      await mn(B, F, {
        submission: ue({}, le, { formAction: U }),
        preventScrollReset: W || $,
        enableViewTransition: S ? ee : void 0,
      });
    else {
      let Z = Oo(F, M);
      await mn(B, F, {
        overrideNavigation: Z,
        fetcherSubmission: A,
        preventScrollReset: W || $,
        enableViewTransition: S ? ee : void 0,
      });
    }
  }
  async function xr(m, w, S, P, M, A) {
    let W,
      I = {};
    try {
      W = await zv(s, m, w, S, P, M, A, i, l);
    } catch (U) {
      return (
        P.forEach((F) => {
          I[F.route.id] = { type: q.error, error: U };
        }),
        I
      );
    }
    for (let [U, F] of Object.entries(W))
      if (Bv(F)) {
        let B = F.result;
        I[U] = {
          type: q.redirect,
          response: Iv(B, S, U, M, u, d.v7_relativeSplatPath),
        };
      } else I[U] = await Fv(F);
    return I;
  }
  async function Ou(m, w, S, P, M) {
    let A = m.matches,
      W = xr("loader", m, M, S, w, null),
      I = Promise.all(
        P.map(async (B) => {
          if (B.matches && B.match && B.controller) {
            let X = (
              await xr(
                "loader",
                m,
                $n(e.history, B.path, B.controller.signal),
                [B.match],
                B.matches,
                B.key
              )
            )[B.match.route.id];
            return { [B.key]: X };
          } else
            return Promise.resolve({
              [B.key]: { type: q.error, error: $e(404, { pathname: B.path }) },
            });
        })
      ),
      U = await W,
      F = (await I).reduce((B, K) => Object.assign(B, K), {});
    return (
      await Promise.all([Vv(w, U, M.signal, A, m.loaderData), Wv(w, F, P)]),
      { loaderResults: U, fetcherResults: F }
    );
  }
  function no() {
    (ut = !0),
      At.push(...lo()),
      st.forEach((m, w) => {
        L.has(w) && Bt.add(w), Ht(w);
      });
  }
  function $t(m, w, S) {
    S === void 0 && (S = {}),
      y.fetchers.set(m, w),
      Fe(
        { fetchers: new Map(y.fetchers) },
        { flushSync: (S && S.flushSync) === !0 }
      );
  }
  function Ct(m, w, S, P) {
    P === void 0 && (P = {});
    let M = Sn(y.matches, w);
    Cl(m),
      Fe(
        { errors: { [M.route.id]: S }, fetchers: new Map(y.fetchers) },
        { flushSync: (P && P.flushSync) === !0 }
      );
  }
  function Fu(m) {
    return (
      Ye.set(m, (Ye.get(m) || 0) + 1),
      ze.has(m) && ze.delete(m),
      y.fetchers.get(m) || jv
    );
  }
  function Cl(m) {
    let w = y.fetchers.get(m);
    L.has(m) && !(w && w.state === "loading" && te.has(m)) && Ht(m),
      st.delete(m),
      te.delete(m),
      ne.delete(m),
      d.v7_fetcherPersist && ze.delete(m),
      Bt.delete(m),
      y.fetchers.delete(m);
  }
  function yp(m) {
    let w = (Ye.get(m) || 0) - 1;
    w <= 0
      ? (Ye.delete(m), ze.add(m), d.v7_fetcherPersist || Cl(m))
      : Ye.set(m, w),
      Fe({ fetchers: new Map(y.fetchers) });
  }
  function Ht(m) {
    let w = L.get(m);
    w && (w.abort(), L.delete(m));
  }
  function Iu(m) {
    for (let w of m) {
      let S = Fu(w),
        P = Wt(S.data);
      y.fetchers.set(w, P);
    }
  }
  function Uu() {
    let m = [],
      w = !1;
    for (let S of ne) {
      let P = y.fetchers.get(S);
      Q(P, "Expected fetcher: " + S),
        P.state === "loading" && (ne.delete(S), m.push(S), (w = !0));
    }
    return Iu(m), w;
  }
  function Au(m) {
    let w = [];
    for (let [S, P] of te)
      if (P < m) {
        let M = y.fetchers.get(S);
        Q(M, "Expected fetcher: " + S),
          M.state === "loading" && (Ht(S), te.delete(S), w.push(S));
      }
    return Iu(w), w.length > 0;
  }
  function wp(m, w) {
    let S = y.blockers.get(m) || Dr;
    return tt.get(m) !== w && tt.set(m, w), S;
  }
  function Bu(m) {
    y.blockers.delete(m), tt.delete(m);
  }
  function Nl(m, w) {
    let S = y.blockers.get(m) || Dr;
    Q(
      (S.state === "unblocked" && w.state === "blocked") ||
        (S.state === "blocked" && w.state === "blocked") ||
        (S.state === "blocked" && w.state === "proceeding") ||
        (S.state === "blocked" && w.state === "unblocked") ||
        (S.state === "proceeding" && w.state === "unblocked"),
      "Invalid blocker state transition: " + S.state + " -> " + w.state
    );
    let P = new Map(y.blockers);
    P.set(m, w), Fe({ blockers: P });
  }
  function $u(m) {
    let { currentLocation: w, nextLocation: S, historyAction: P } = m;
    if (tt.size === 0) return;
    tt.size > 1 && hr(!1, "A router only supports one blocker at a time");
    let M = Array.from(tt.entries()),
      [A, W] = M[M.length - 1],
      I = y.blockers.get(A);
    if (
      !(I && I.state === "proceeding") &&
      W({ currentLocation: w, nextLocation: S, historyAction: P })
    )
      return A;
  }
  function ro(m) {
    let w = $e(404, { pathname: m }),
      S = a || o,
      { matches: P, route: M } = hc(S);
    return lo(), { notFoundMatches: P, route: M, error: w };
  }
  function lo(m) {
    let w = [];
    return (
      Oe.forEach((S, P) => {
        (!m || m(P)) && (S.cancel(), w.push(P), Oe.delete(P));
      }),
      w
    );
  }
  function xp(m, w, S) {
    if (((E = m), (T = w), (k = S || null), !p && y.navigation === zo)) {
      p = !0;
      let P = Vu(y.location, y.matches);
      P != null && Fe({ restoreScrollPosition: P });
    }
    return () => {
      (E = null), (T = null), (k = null);
    };
  }
  function Hu(m, w) {
    return (
      (k &&
        k(
          m,
          w.map((P) => lv(P, y.loaderData))
        )) ||
      m.key
    );
  }
  function Sp(m, w) {
    if (E && T) {
      let S = Hu(m, w);
      E[S] = T();
    }
  }
  function Vu(m, w) {
    if (E) {
      let S = Hu(m, w),
        P = E[S];
      if (typeof P == "number") return P;
    }
    return null;
  }
  function Pl(m, w, S) {
    if (f)
      if (m) {
        if (Object.keys(m[0].params).length > 0)
          return { active: !0, matches: oi(w, S, u, !0) };
      } else return { active: !0, matches: oi(w, S, u, !0) || [] };
    return { active: !1, matches: null };
  }
  async function jl(m, w, S) {
    if (!f) return { type: "success", matches: m };
    let P = m;
    for (;;) {
      let M = a == null,
        A = a || o,
        W = i;
      try {
        await f({
          signal: S,
          path: w,
          matches: P,
          patch: (F, B) => {
            S.aborted || uc(F, B, A, W, l);
          },
        });
      } catch (F) {
        return { type: "error", error: F, partialMatches: P };
      } finally {
        M && !S.aborted && (o = [...o]);
      }
      if (S.aborted) return { type: "aborted" };
      let I = xn(A, w, u);
      if (I) return { type: "success", matches: I };
      let U = oi(A, w, u, !0);
      if (
        !U ||
        (P.length === U.length &&
          P.every((F, B) => F.route.id === U[B].route.id))
      )
        return { type: "success", matches: null };
      P = U;
    }
  }
  function Ep(m) {
    (i = {}), (a = Ti(m, l, void 0, i));
  }
  function kp(m, w) {
    let S = a == null;
    uc(m, w, a || o, i, l), S && ((o = [...o]), Fe({}));
  }
  return (
    (z = {
      get basename() {
        return u;
      },
      get future() {
        return d;
      },
      get state() {
        return y;
      },
      get routes() {
        return o;
      },
      get window() {
        return t;
      },
      initialize: up,
      subscribe: cp,
      enableScrollRestoration: xp,
      navigate: Mu,
      fetch: mp,
      revalidate: dp,
      createHref: (m) => e.history.createHref(m),
      encodeLocation: (m) => e.history.encodeLocation(m),
      getFetcher: Fu,
      deleteFetcher: yp,
      dispose: sp,
      getBlocker: wp,
      deleteBlocker: Bu,
      patchRoutes: kp,
      _internalFetchControllers: L,
      _internalActiveDeferreds: Oe,
      _internalSetRoutes: Ep,
    }),
    z
  );
}
function Lv(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Ra(e, t, n, r, l, i, o, a) {
  let u, s;
  if (o) {
    u = [];
    for (let d of t)
      if ((u.push(d), d.route.id === o)) {
        s = d;
        break;
      }
  } else (u = t), (s = t[t.length - 1]);
  let f = bi(l || ".", qi(u, i), yr(e.pathname, n) || e.pathname, a === "path");
  if (
    (l == null && ((f.search = e.search), (f.hash = e.hash)),
    (l == null || l === "" || l === ".") && s)
  ) {
    let d = Lu(f.search);
    if (s.route.index && !d)
      f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index";
    else if (!s.route.index && d) {
      let h = new URLSearchParams(f.search),
        x = h.getAll("index");
      h.delete("index"),
        x.filter((k) => k).forEach((k) => h.append("index", k));
      let E = h.toString();
      f.search = E ? "?" + E : "";
    }
  }
  return (
    r &&
      n !== "/" &&
      (f.pathname = f.pathname === "/" ? n : Dt([n, f.pathname])),
    Mn(f)
  );
}
function lc(e, t, n, r) {
  if (!r || !Lv(r)) return { path: n };
  if (r.formMethod && !Hv(r.formMethod))
    return { path: n, error: $e(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: $e(400, { type: "invalid-body" }) }),
    i = r.formMethod || "get",
    o = e ? i.toUpperCase() : i.toLowerCase(),
    a = Yf(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!pt(o)) return l();
      let h =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((x, E) => {
              let [k, T] = E;
              return (
                "" +
                x +
                k +
                "=" +
                T +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: o,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: h,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!pt(o)) return l();
      try {
        let h = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: h,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  Q(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let u, s;
  if (r.formData) (u = Ta(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (u = Ta(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (s = cc(u));
  else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (s = cc(u));
    } catch {
      return l();
    }
  let f = {
    formMethod: o,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (pt(f.formMethod)) return { path: n, submission: f };
  let d = Ut(n);
  return (
    t && d.search && Lu(d.search) && u.append("index", ""),
    (d.search = "?" + u),
    { path: Mn(d), submission: f }
  );
}
function ic(e, t, n) {
  n === void 0 && (n = !1);
  let r = e.findIndex((l) => l.route.id === t);
  return r >= 0 ? e.slice(0, n ? r + 1 : r) : e;
}
function oc(e, t, n, r, l, i, o, a, u, s, f, d, h, x, E, k) {
  let T = k ? (Ge(k[1]) ? k[1].error : k[1].data) : void 0,
    p = e.createURL(t.location),
    c = e.createURL(l),
    v = n;
  i && t.errors
    ? (v = ic(n, Object.keys(t.errors)[0], !0))
    : k && Ge(k[1]) && (v = ic(n, k[0]));
  let C = k ? k[1].statusCode : void 0,
    j = o && C && C >= 400,
    z = v.filter((_, $) => {
      let { route: D } = _;
      if (D.lazy) return !0;
      if (D.loader == null) return !1;
      if (i) return La(D, t.loaderData, t.errors);
      if (
        Tv(t.loaderData, t.matches[$], _) ||
        u.some((xe) => xe === _.route.id)
      )
        return !0;
      let ee = t.matches[$],
        re = _;
      return ac(
        _,
        ue(
          {
            currentUrl: p,
            currentParams: ee.params,
            nextUrl: c,
            nextParams: re.params,
          },
          r,
          {
            actionResult: T,
            actionStatus: C,
            defaultShouldRevalidate: j
              ? !1
              : a ||
                p.pathname + p.search === c.pathname + c.search ||
                p.search !== c.search ||
                Qf(ee, re),
          }
        )
      );
    }),
    y = [];
  return (
    d.forEach((_, $) => {
      if (i || !n.some((Ne) => Ne.route.id === _.routeId) || f.has($)) return;
      let D = xn(x, _.path, E);
      if (!D) {
        y.push({
          key: $,
          routeId: _.routeId,
          path: _.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let ee = t.fetchers.get($),
        re = Ar(D, _.path),
        xe = !1;
      h.has($)
        ? (xe = !1)
        : s.has($)
        ? (s.delete($), (xe = !0))
        : ee && ee.state !== "idle" && ee.data === void 0
        ? (xe = a)
        : (xe = ac(
            re,
            ue(
              {
                currentUrl: p,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: c,
                nextParams: n[n.length - 1].params,
              },
              r,
              {
                actionResult: T,
                actionStatus: C,
                defaultShouldRevalidate: j ? !1 : a,
              }
            )
          )),
        xe &&
          y.push({
            key: $,
            routeId: _.routeId,
            path: _.path,
            matches: D,
            match: re,
            controller: new AbortController(),
          });
    }),
    [z, y]
  );
}
function La(e, t, n) {
  if (e.lazy) return !0;
  if (!e.loader) return !1;
  let r = t != null && t[e.id] !== void 0,
    l = n != null && n[e.id] !== void 0;
  return !r && l
    ? !1
    : typeof e.loader == "function" && e.loader.hydrate === !0
    ? !0
    : !r && !l;
}
function Tv(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function Qf(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function ac(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
function uc(e, t, n, r, l) {
  var i;
  let o;
  if (e) {
    let s = r[e];
    Q(s, "No route found to patch children into: routeId = " + e),
      s.children || (s.children = []),
      (o = s.children);
  } else o = n;
  let a = t.filter((s) => !o.some((f) => Kf(s, f))),
    u = Ti(
      a,
      l,
      [e || "_", "patch", String(((i = o) == null ? void 0 : i.length) || "0")],
      r
    );
  o.push(...u);
}
function Kf(e, t) {
  return "id" in e && "id" in t && e.id === t.id
    ? !0
    : e.index === t.index &&
      e.path === t.path &&
      e.caseSensitive === t.caseSensitive
    ? (!e.children || e.children.length === 0) &&
      (!t.children || t.children.length === 0)
      ? !0
      : e.children.every((n, r) => {
          var l;
          return (l = t.children) == null ? void 0 : l.some((i) => Kf(n, i));
        })
    : !1;
}
async function Dv(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  Q(l, "No route found in manifest");
  let i = {};
  for (let o in r) {
    let u = l[o] !== void 0 && o !== "hasErrorBoundary";
    hr(
      !u,
      'Route "' +
        l.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.')
    ),
      !u && !nv.has(o) && (i[o] = r[o]);
  }
  Object.assign(l, i), Object.assign(l, ue({}, t(l), { lazy: void 0 }));
}
async function Mv(e) {
  let { matches: t } = e,
    n = t.filter((l) => l.shouldLoad);
  return (await Promise.all(n.map((l) => l.resolve()))).reduce(
    (l, i, o) => Object.assign(l, { [n[o].route.id]: i }),
    {}
  );
}
async function zv(e, t, n, r, l, i, o, a, u, s) {
  let f = i.map((x) => (x.route.lazy ? Dv(x.route, u, a) : void 0)),
    d = i.map((x, E) => {
      let k = f[E],
        T = l.some((c) => c.route.id === x.route.id);
      return ue({}, x, {
        shouldLoad: T,
        resolve: async (c) => (
          c &&
            r.method === "GET" &&
            (x.route.lazy || x.route.loader) &&
            (T = !0),
          T
            ? Ov(t, r, x, k, c, s)
            : Promise.resolve({ type: q.data, result: void 0 })
        ),
      });
    }),
    h = await e({
      matches: d,
      request: r,
      params: i[0].params,
      fetcherKey: o,
      context: s,
    });
  try {
    await Promise.all(f);
  } catch {}
  return h;
}
async function Ov(e, t, n, r, l, i) {
  let o,
    a,
    u = (s) => {
      let f,
        d = new Promise((E, k) => (f = k));
      (a = () => f()), t.signal.addEventListener("abort", a);
      let h = (E) =>
          typeof s != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]")
                )
              )
            : s(
                { request: t, params: n.params, context: i },
                ...(E !== void 0 ? [E] : [])
              ),
        x = (async () => {
          try {
            return { type: "data", result: await (l ? l((k) => h(k)) : h()) };
          } catch (E) {
            return { type: "error", result: E };
          }
        })();
      return Promise.race([x, d]);
    };
  try {
    let s = n.route[e];
    if (r)
      if (s) {
        let f,
          [d] = await Promise.all([
            u(s).catch((h) => {
              f = h;
            }),
            r,
          ]);
        if (f !== void 0) throw f;
        o = d;
      } else if ((await r, (s = n.route[e]), s)) o = await u(s);
      else if (e === "action") {
        let f = new URL(t.url),
          d = f.pathname + f.search;
        throw $e(405, { method: t.method, pathname: d, routeId: n.route.id });
      } else return { type: q.data, result: void 0 };
    else if (s) o = await u(s);
    else {
      let f = new URL(t.url),
        d = f.pathname + f.search;
      throw $e(404, { pathname: d });
    }
    Q(
      o.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (s) {
    return { type: q.error, result: s };
  } finally {
    a && t.signal.removeEventListener("abort", a);
  }
  return o;
}
async function Fv(e) {
  let { result: t, type: n } = e;
  if (Xf(t)) {
    let d;
    try {
      let h = t.headers.get("Content-Type");
      h && /\bapplication\/json\b/.test(h)
        ? t.body == null
          ? (d = null)
          : (d = await t.json())
        : (d = await t.text());
    } catch (h) {
      return { type: q.error, error: h };
    }
    return n === q.error
      ? {
          type: q.error,
          error: new Di(t.status, t.statusText, d),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: q.data, data: d, statusCode: t.status, headers: t.headers };
  }
  if (n === q.error) {
    if (mc(t)) {
      var r, l;
      if (t.data instanceof Error) {
        var i, o;
        return {
          type: q.error,
          error: t.data,
          statusCode: (i = t.init) == null ? void 0 : i.status,
          headers:
            (o = t.init) != null && o.headers
              ? new Headers(t.init.headers)
              : void 0,
        };
      }
      return {
        type: q.error,
        error: new Di(
          ((r = t.init) == null ? void 0 : r.status) || 500,
          void 0,
          t.data
        ),
        statusCode: pl(t) ? t.status : void 0,
        headers:
          (l = t.init) != null && l.headers
            ? new Headers(t.init.headers)
            : void 0,
      };
    }
    return { type: q.error, error: t, statusCode: pl(t) ? t.status : void 0 };
  }
  if ($v(t)) {
    var a, u;
    return {
      type: q.deferred,
      deferredData: t,
      statusCode: (a = t.init) == null ? void 0 : a.status,
      headers:
        ((u = t.init) == null ? void 0 : u.headers) &&
        new Headers(t.init.headers),
    };
  }
  if (mc(t)) {
    var s, f;
    return {
      type: q.data,
      data: t.data,
      statusCode: (s = t.init) == null ? void 0 : s.status,
      headers:
        (f = t.init) != null && f.headers
          ? new Headers(t.init.headers)
          : void 0,
    };
  }
  return { type: q.data, data: t };
}
function Iv(e, t, n, r, l, i) {
  let o = e.headers.get("Location");
  if (
    (Q(
      o,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !_u.test(o))
  ) {
    let a = r.slice(0, r.findIndex((u) => u.route.id === n) + 1);
    (o = Ra(new URL(t.url), a, l, !0, o, i)), e.headers.set("Location", o);
  }
  return e;
}
function sc(e, t, n) {
  if (_u.test(e)) {
    let r = e,
      l = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      i = yr(l.pathname, n) != null;
    if (l.origin === t.origin && i) return l.pathname + l.search + l.hash;
  }
  return e;
}
function $n(e, t, n, r) {
  let l = e.createURL(Yf(t)).toString(),
    i = { signal: n };
  if (r && pt(r.formMethod)) {
    let { formMethod: o, formEncType: a } = r;
    (i.method = o.toUpperCase()),
      a === "application/json"
        ? ((i.headers = new Headers({ "Content-Type": a })),
          (i.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (i.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (i.body = Ta(r.formData))
        : (i.body = r.formData);
  }
  return new Request(l, i);
}
function Ta(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function cc(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function Uv(e, t, n, r, l) {
  let i = {},
    o = null,
    a,
    u = !1,
    s = {},
    f = n && Ge(n[1]) ? n[1].error : void 0;
  return (
    e.forEach((d) => {
      if (!(d.route.id in t)) return;
      let h = d.route.id,
        x = t[h];
      if (
        (Q(!Nn(x), "Cannot handle redirect results in processLoaderData"),
        Ge(x))
      ) {
        let E = x.error;
        if ((f !== void 0 && ((E = f), (f = void 0)), (o = o || {}), l))
          o[h] = E;
        else {
          let k = Sn(e, h);
          o[k.route.id] == null && (o[k.route.id] = E);
        }
        (i[h] = void 0),
          u || ((u = !0), (a = pl(x.error) ? x.error.status : 500)),
          x.headers && (s[h] = x.headers);
      } else
        qt(x)
          ? (r.set(h, x.deferredData),
            (i[h] = x.deferredData.data),
            x.statusCode != null &&
              x.statusCode !== 200 &&
              !u &&
              (a = x.statusCode),
            x.headers && (s[h] = x.headers))
          : ((i[h] = x.data),
            x.statusCode && x.statusCode !== 200 && !u && (a = x.statusCode),
            x.headers && (s[h] = x.headers));
    }),
    f !== void 0 && n && ((o = { [n[0]]: f }), (i[n[0]] = void 0)),
    { loaderData: i, errors: o, statusCode: a || 200, loaderHeaders: s }
  );
}
function dc(e, t, n, r, l, i, o) {
  let { loaderData: a, errors: u } = Uv(t, n, r, o, !1);
  return (
    l.forEach((s) => {
      let { key: f, match: d, controller: h } = s,
        x = i[f];
      if (
        (Q(x, "Did not find corresponding fetcher result"),
        !(h && h.signal.aborted))
      )
        if (Ge(x)) {
          let E = Sn(e.matches, d == null ? void 0 : d.route.id);
          (u && u[E.route.id]) || (u = ue({}, u, { [E.route.id]: x.error })),
            e.fetchers.delete(f);
        } else if (Nn(x)) Q(!1, "Unhandled fetcher revalidation redirect");
        else if (qt(x)) Q(!1, "Unhandled fetcher deferred data");
        else {
          let E = Wt(x.data);
          e.fetchers.set(f, E);
        }
    }),
    { loaderData: a, errors: u }
  );
}
function fc(e, t, n, r) {
  let l = ue({}, t);
  for (let i of n) {
    let o = i.route.id;
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (l[o] = t[o])
        : e[o] !== void 0 && i.route.loader && (l[o] = e[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return l;
}
function pc(e) {
  return e
    ? Ge(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function Sn(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function hc(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function $e(e, t) {
  let {
      pathname: n,
      routeId: r,
      method: l,
      type: i,
      message: o,
    } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    u = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        l && n && r
          ? (u =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action"
          ? (u = "defer() is not supported in actions")
          : i === "invalid-body" && (u = "Unable to encode submission body"))
      : e === 403
      ? ((a = "Forbidden"),
        (u = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((a = "Not Found"), (u = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((a = "Method Not Allowed"),
        l && n && r
          ? (u =
              "You made a " +
              l.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : l && (u = 'Invalid request method "' + l.toUpperCase() + '"')),
    new Di(e || 500, a, new Error(u), !0)
  );
}
function Yl(e) {
  let t = Object.entries(e);
  for (let n = t.length - 1; n >= 0; n--) {
    let [r, l] = t[n];
    if (Nn(l)) return { key: r, result: l };
  }
}
function Yf(e) {
  let t = typeof e == "string" ? Ut(e) : e;
  return Mn(ue({}, t, { hash: "" }));
}
function Av(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function Bv(e) {
  return Xf(e.result) && Nv.has(e.result.status);
}
function qt(e) {
  return e.type === q.deferred;
}
function Ge(e) {
  return e.type === q.error;
}
function Nn(e) {
  return (e && e.type) === q.redirect;
}
function mc(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function $v(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Xf(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function Hv(e) {
  return Cv.has(e.toLowerCase());
}
function pt(e) {
  return Ev.has(e.toLowerCase());
}
async function Vv(e, t, n, r, l) {
  let i = Object.entries(t);
  for (let o = 0; o < i.length; o++) {
    let [a, u] = i[o],
      s = e.find((h) => (h == null ? void 0 : h.route.id) === a);
    if (!s) continue;
    let f = r.find((h) => h.route.id === s.route.id),
      d = f != null && !Qf(f, s) && (l && l[s.route.id]) !== void 0;
    qt(u) &&
      d &&
      (await Ru(u, n, !1).then((h) => {
        h && (t[a] = h);
      }));
  }
}
async function Wv(e, t, n) {
  for (let r = 0; r < n.length; r++) {
    let { key: l, routeId: i, controller: o } = n[r],
      a = t[l];
    e.find((s) => (s == null ? void 0 : s.route.id) === i) &&
      qt(a) &&
      (Q(
        o,
        "Expected an AbortController for revalidating fetcher deferred result"
      ),
      await Ru(a, o.signal, !0).then((s) => {
        s && (t[l] = s);
      }));
  }
}
async function Ru(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: q.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: q.error, error: l };
      }
    return { type: q.data, data: e.deferredData.data };
  }
}
function Lu(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Ar(e, t) {
  let n = typeof t == "string" ? Ut(t).search : t.search;
  if (e[e.length - 1].route.index && Lu(n || "")) return e[e.length - 1];
  let r = Hf(e);
  return r[r.length - 1];
}
function vc(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: i,
    json: o,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function Oo(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Qv(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Mr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function Kv(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Wt(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function Yv(e, t) {
  try {
    let n = e.sessionStorage.getItem(Wf);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, i] of Object.entries(r || {}))
        i && Array.isArray(i) && t.set(l, new Set(i || []));
    }
  } catch {}
}
function Xv(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(Wf, JSON.stringify(n));
    } catch (r) {
      hr(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function hl() {
  return (
    (hl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    hl.apply(this, arguments)
  );
}
const eo = N.createContext(null),
  Gf = N.createContext(null),
  pn = N.createContext(null),
  to = N.createContext(null),
  hn = N.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Jf = N.createContext(null);
function Gv(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  wr() || Q(!1);
  let { basename: r, navigator: l } = N.useContext(pn),
    { hash: i, pathname: o, search: a } = qf(e, { relative: n }),
    u = o;
  return (
    r !== "/" && (u = o === "/" ? r : Dt([r, o])),
    l.createHref({ pathname: u, search: a, hash: i })
  );
}
function wr() {
  return N.useContext(to) != null;
}
function Sl() {
  return wr() || Q(!1), N.useContext(to).location;
}
function Zf(e) {
  N.useContext(pn).static || N.useLayoutEffect(e);
}
function El() {
  let { isDataRoute: e } = N.useContext(hn);
  return e ? ag() : Jv();
}
function Jv() {
  wr() || Q(!1);
  let e = N.useContext(eo),
    { basename: t, future: n, navigator: r } = N.useContext(pn),
    { matches: l } = N.useContext(hn),
    { pathname: i } = Sl(),
    o = JSON.stringify(qi(l, n.v7_relativeSplatPath)),
    a = N.useRef(!1);
  return (
    Zf(() => {
      a.current = !0;
    }),
    N.useCallback(
      function (s, f) {
        if ((f === void 0 && (f = {}), !a.current)) return;
        if (typeof s == "number") {
          r.go(s);
          return;
        }
        let d = bi(s, JSON.parse(o), i, f.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Dt([t, d.pathname])),
          (f.replace ? r.replace : r.push)(d, f.state, f);
      },
      [t, r, o, i, e]
    )
  );
}
function qf(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = N.useContext(pn),
    { matches: l } = N.useContext(hn),
    { pathname: i } = Sl(),
    o = JSON.stringify(qi(l, r.v7_relativeSplatPath));
  return N.useMemo(() => bi(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function Zv(e, t, n, r) {
  wr() || Q(!1);
  let { navigator: l, static: i } = N.useContext(pn),
    { matches: o } = N.useContext(hn),
    a = o[o.length - 1],
    u = a ? a.params : {};
  a && a.pathname;
  let s = a ? a.pathnameBase : "/";
  a && a.route;
  let f = Sl(),
    d;
  if (t) {
    var h;
    let p = typeof t == "string" ? Ut(t) : t;
    s === "/" || ((h = p.pathname) != null && h.startsWith(s)) || Q(!1),
      (d = p);
  } else d = f;
  let x = d.pathname || "/",
    E = x;
  if (s !== "/") {
    let p = s.replace(/^\//, "").split("/");
    E = "/" + x.replace(/^\//, "").split("/").slice(p.length).join("/");
  }
  let k =
      !i && n && n.matches && n.matches.length > 0
        ? n.matches
        : xn(e, { pathname: E }),
    T = ng(
      k &&
        k.map((p) =>
          Object.assign({}, p, {
            params: Object.assign({}, u, p.params),
            pathname: Dt([
              s,
              l.encodeLocation
                ? l.encodeLocation(p.pathname).pathname
                : p.pathname,
            ]),
            pathnameBase:
              p.pathnameBase === "/"
                ? s
                : Dt([
                    s,
                    l.encodeLocation
                      ? l.encodeLocation(p.pathnameBase).pathname
                      : p.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && T
    ? N.createElement(
        to.Provider,
        {
          value: {
            location: hl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: ve.Pop,
          },
        },
        T
      )
    : T;
}
function qv() {
  let e = og(),
    t = pl(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    i = null;
  return N.createElement(
    N.Fragment,
    null,
    N.createElement("h2", null, "Unexpected Application Error!"),
    N.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? N.createElement("pre", { style: l }, n) : null,
    i
  );
}
const bv = N.createElement(qv, null);
class eg extends N.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? N.createElement(
          hn.Provider,
          { value: this.props.routeContext },
          N.createElement(Jf.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function tg(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = N.useContext(eo);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    N.createElement(hn.Provider, { value: t }, r)
  );
}
function ng(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    a = (l = n) == null ? void 0 : l.errors;
  if (a != null) {
    let f = o.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0
    );
    f >= 0 || Q(!1), (o = o.slice(0, Math.min(o.length, f + 1)));
  }
  let u = !1,
    s = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < o.length; f++) {
      let d = o[f];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (s = f),
        d.route.id)
      ) {
        let { loaderData: h, errors: x } = n,
          E =
            d.route.loader &&
            h[d.route.id] === void 0 &&
            (!x || x[d.route.id] === void 0);
        if (d.route.lazy || E) {
          (u = !0), s >= 0 ? (o = o.slice(0, s + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((f, d, h) => {
    let x,
      E = !1,
      k = null,
      T = null;
    n &&
      ((x = a && d.route.id ? a[d.route.id] : void 0),
      (k = d.route.errorElement || bv),
      u &&
        (s < 0 && h === 0
          ? (ug("route-fallback", !1), (E = !0), (T = null))
          : s === h &&
            ((E = !0), (T = d.route.hydrateFallbackElement || null))));
    let p = t.concat(o.slice(0, h + 1)),
      c = () => {
        let v;
        return (
          x
            ? (v = k)
            : E
            ? (v = T)
            : d.route.Component
            ? (v = N.createElement(d.route.Component, null))
            : d.route.element
            ? (v = d.route.element)
            : (v = f),
          N.createElement(tg, {
            match: d,
            routeContext: { outlet: f, matches: p, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || h === 0)
      ? N.createElement(eg, {
          location: n.location,
          revalidation: n.revalidation,
          component: k,
          error: x,
          children: c(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : c();
  }, null);
}
var bf = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(bf || {}),
  Mi = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Mi || {});
function rg(e) {
  let t = N.useContext(eo);
  return t || Q(!1), t;
}
function lg(e) {
  let t = N.useContext(Gf);
  return t || Q(!1), t;
}
function ig(e) {
  let t = N.useContext(hn);
  return t || Q(!1), t;
}
function ep(e) {
  let t = ig(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Q(!1), n.route.id;
}
function og() {
  var e;
  let t = N.useContext(Jf),
    n = lg(Mi.UseRouteError),
    r = ep(Mi.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function ag() {
  let { router: e } = rg(bf.UseNavigateStable),
    t = ep(Mi.UseNavigateStable),
    n = N.useRef(!1);
  return (
    Zf(() => {
      n.current = !0;
    }),
    N.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, hl({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const gc = {};
function ug(e, t, n) {
  !t && !gc[e] && (gc[e] = !0);
}
function sg(e, t) {
  e == null || e.v7_startTransition,
    (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 &&
      (!t || t.v7_relativeSplatPath),
    t &&
      (t.v7_fetcherPersist,
      t.v7_normalizeFormMethod,
      t.v7_partialHydration,
      t.v7_skipActionErrorRevalidation);
}
function cg(e) {
  let { to: t, replace: n, state: r, relative: l } = e;
  wr() || Q(!1);
  let { future: i, static: o } = N.useContext(pn),
    { matches: a } = N.useContext(hn),
    { pathname: u } = Sl(),
    s = El(),
    f = bi(t, qi(a, i.v7_relativeSplatPath), u, l === "path"),
    d = JSON.stringify(f);
  return (
    N.useEffect(
      () => s(JSON.parse(d), { replace: n, state: r, relative: l }),
      [s, d, l, n, r]
    ),
    null
  );
}
function Hn(e) {
  Q(!1);
}
function dg(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = ve.Pop,
    navigator: i,
    static: o = !1,
    future: a,
  } = e;
  wr() && Q(!1);
  let u = t.replace(/^\/*/, "/"),
    s = N.useMemo(
      () => ({
        basename: u,
        navigator: i,
        static: o,
        future: hl({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, i, o]
    );
  typeof r == "string" && (r = Ut(r));
  let {
      pathname: f = "/",
      search: d = "",
      hash: h = "",
      state: x = null,
      key: E = "default",
    } = r,
    k = N.useMemo(() => {
      let T = yr(f, u);
      return T == null
        ? null
        : {
            location: { pathname: T, search: d, hash: h, state: x, key: E },
            navigationType: l,
          };
    }, [u, f, d, h, x, E, l]);
  return k == null
    ? null
    : N.createElement(
        pn.Provider,
        { value: s },
        N.createElement(to.Provider, { children: n, value: k })
      );
}
new Promise(() => {});
function Da(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    N.Children.forEach(e, (r, l) => {
      if (!N.isValidElement(r)) return;
      let i = [...t, l];
      if (r.type === N.Fragment) {
        n.push.apply(n, Da(r.props.children, i));
        return;
      }
      r.type !== Hn && Q(!1), !r.props.index || !r.props.children || Q(!1);
      let o = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = Da(r.props.children, i)), n.push(o);
    }),
    n
  );
}
function fg(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: N.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: N.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: N.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ml() {
  return (
    (ml = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ml.apply(this, arguments)
  );
}
function pg(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function hg(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function mg(e, t) {
  return e.button === 0 && (!t || t === "_self") && !hg(e);
}
const vg = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  gg = "6";
try {
  window.__reactRouterVersion = gg;
} catch {}
function yg(e, t) {
  return Rv({
    basename: t == null ? void 0 : t.basename,
    future: ml({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: bm({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || wg(),
    routes: e,
    mapRouteProperties: fg,
    dataStrategy: t == null ? void 0 : t.dataStrategy,
    patchRoutesOnNavigation: t == null ? void 0 : t.patchRoutesOnNavigation,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function wg() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = ml({}, t, { errors: xg(t.errors) })), t;
}
function xg(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new Di(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let i = window[l.__subType];
        if (typeof i == "function")
          try {
            let o = new i(l.message);
            (o.stack = ""), (n[r] = o);
          } catch {}
      }
      if (n[r] == null) {
        let i = new Error(l.message);
        (i.stack = ""), (n[r] = i);
      }
    } else n[r] = l;
  return n;
}
const Sg = N.createContext({ isTransitioning: !1 }),
  Eg = N.createContext(new Map()),
  kg = "startTransition",
  yc = Bp[kg],
  Cg = "flushSync",
  wc = qm[Cg];
function Ng(e) {
  yc ? yc(e) : e();
}
function zr(e) {
  wc ? wc(e) : e();
}
class Pg {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function jg(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, i] = N.useState(n.state),
    [o, a] = N.useState(),
    [u, s] = N.useState({ isTransitioning: !1 }),
    [f, d] = N.useState(),
    [h, x] = N.useState(),
    [E, k] = N.useState(),
    T = N.useRef(new Map()),
    { v7_startTransition: p } = r || {},
    c = N.useCallback(
      (_) => {
        p ? Ng(_) : _();
      },
      [p]
    ),
    v = N.useCallback(
      (_, $) => {
        let { deletedFetchers: D, flushSync: ee, viewTransitionOpts: re } = $;
        _.fetchers.forEach((Ne, ut) => {
          Ne.data !== void 0 && T.current.set(ut, Ne.data);
        }),
          D.forEach((Ne) => T.current.delete(Ne));
        let xe =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!re || xe) {
          ee ? zr(() => i(_)) : c(() => i(_));
          return;
        }
        if (ee) {
          zr(() => {
            h && (f && f.resolve(), h.skipTransition()),
              s({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: re.currentLocation,
                nextLocation: re.nextLocation,
              });
          });
          let Ne = n.window.document.startViewTransition(() => {
            zr(() => i(_));
          });
          Ne.finished.finally(() => {
            zr(() => {
              d(void 0), x(void 0), a(void 0), s({ isTransitioning: !1 });
            });
          }),
            zr(() => x(Ne));
          return;
        }
        h
          ? (f && f.resolve(),
            h.skipTransition(),
            k({
              state: _,
              currentLocation: re.currentLocation,
              nextLocation: re.nextLocation,
            }))
          : (a(_),
            s({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: re.currentLocation,
              nextLocation: re.nextLocation,
            }));
      },
      [n.window, h, f, T, c]
    );
  N.useLayoutEffect(() => n.subscribe(v), [n, v]),
    N.useEffect(() => {
      u.isTransitioning && !u.flushSync && d(new Pg());
    }, [u]),
    N.useEffect(() => {
      if (f && o && n.window) {
        let _ = o,
          $ = f.promise,
          D = n.window.document.startViewTransition(async () => {
            c(() => i(_)), await $;
          });
        D.finished.finally(() => {
          d(void 0), x(void 0), a(void 0), s({ isTransitioning: !1 });
        }),
          x(D);
      }
    }, [c, o, f, n.window]),
    N.useEffect(() => {
      f && o && l.location.key === o.location.key && f.resolve();
    }, [f, h, l.location, o]),
    N.useEffect(() => {
      !u.isTransitioning &&
        E &&
        (a(E.state),
        s({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: E.currentLocation,
          nextLocation: E.nextLocation,
        }),
        k(void 0));
    }, [u.isTransitioning, E]),
    N.useEffect(() => {}, []);
  let C = N.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (_) => n.navigate(_),
        push: (_, $, D) =>
          n.navigate(_, {
            state: $,
            preventScrollReset: D == null ? void 0 : D.preventScrollReset,
          }),
        replace: (_, $, D) =>
          n.navigate(_, {
            replace: !0,
            state: $,
            preventScrollReset: D == null ? void 0 : D.preventScrollReset,
          }),
      }),
      [n]
    ),
    j = n.basename || "/",
    z = N.useMemo(
      () => ({ router: n, navigator: C, static: !1, basename: j }),
      [n, C, j]
    ),
    y = N.useMemo(
      () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
      [n.future.v7_relativeSplatPath]
    );
  return (
    N.useEffect(() => sg(r, n.future), [r, n.future]),
    N.createElement(
      N.Fragment,
      null,
      N.createElement(
        eo.Provider,
        { value: z },
        N.createElement(
          Gf.Provider,
          { value: l },
          N.createElement(
            Eg.Provider,
            { value: T.current },
            N.createElement(
              Sg.Provider,
              { value: u },
              N.createElement(
                dg,
                {
                  basename: j,
                  location: l.location,
                  navigationType: l.historyAction,
                  navigator: C,
                  future: y,
                },
                l.initialized || n.future.v7_partialHydration
                  ? N.createElement(_g, {
                      routes: n.routes,
                      future: n.future,
                      state: l,
                    })
                  : t
              )
            )
          )
        )
      ),
      null
    )
  );
}
const _g = N.memo(Rg);
function Rg(e) {
  let { routes: t, future: n, state: r } = e;
  return Zv(t, void 0, r, n);
}
const Lg =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Tg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Yt = N.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: a,
        target: u,
        to: s,
        preventScrollReset: f,
        viewTransition: d,
      } = t,
      h = pg(t, vg),
      { basename: x } = N.useContext(pn),
      E,
      k = !1;
    if (typeof s == "string" && Tg.test(s) && ((E = s), Lg))
      try {
        let v = new URL(window.location.href),
          C = s.startsWith("//") ? new URL(v.protocol + s) : new URL(s),
          j = yr(C.pathname, x);
        C.origin === v.origin && j != null
          ? (s = j + C.search + C.hash)
          : (k = !0);
      } catch {}
    let T = Gv(s, { relative: l }),
      p = Dg(s, {
        replace: o,
        state: a,
        target: u,
        preventScrollReset: f,
        relative: l,
        viewTransition: d,
      });
    function c(v) {
      r && r(v), v.defaultPrevented || p(v);
    }
    return N.createElement(
      "a",
      ml({}, h, { href: E || T, onClick: k || i ? r : c, ref: n, target: u })
    );
  });
var xc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(xc || (xc = {}));
var Sc;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Sc || (Sc = {}));
function Dg(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      viewTransition: a,
    } = t === void 0 ? {} : t,
    u = El(),
    s = Sl(),
    f = qf(e, { relative: o });
  return N.useCallback(
    (d) => {
      if (mg(d, n)) {
        d.preventDefault();
        let h = r !== void 0 ? r : Mn(s) === Mn(f);
        u(e, {
          replace: h,
          state: l,
          preventScrollReset: i,
          relative: o,
          viewTransition: a,
        });
      }
    },
    [s, u, f, r, l, n, e, i, o, a]
  );
}
const tp = "https://sportconnect-uk2i.onrender.com/api",
  Mg = async (e) => {
    const t = await fetch(`${tp}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e),
    });
    if (!t.ok) throw new Error("Error al crear usuario");
    return t.json();
  },
  zg = async (e) => {
    const t = await fetch(`${tp}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e),
      credentials: "include",
    });
    if (!t.ok) throw new Error("Error al iniciar sesion");
    return t.json();
  };
var np = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Ec = Lt.createContext && Lt.createContext(np),
  Og = ["attr", "size", "title"];
function Fg(e, t) {
  if (e == null) return {};
  var n = Ig(e, t),
    r,
    l;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (l = 0; l < i.length; l++)
      (r = i[l]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Ig(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function zi() {
  return (
    (zi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    zi.apply(this, arguments)
  );
}
function kc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Oi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? kc(Object(n), !0).forEach(function (r) {
          Ug(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : kc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Ug(e, t, n) {
  return (
    (t = Ag(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Ag(e) {
  var t = Bg(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Bg(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function rp(e) {
  return (
    e &&
    e.map((t, n) =>
      Lt.createElement(t.tag, Oi({ key: n }, t.attr), rp(t.child))
    )
  );
}
function Tu(e) {
  return (t) =>
    Lt.createElement($g, zi({ attr: Oi({}, e.attr) }, t), rp(e.child));
}
function $g(e) {
  var t = (n) => {
    var { attr: r, size: l, title: i } = e,
      o = Fg(e, Og),
      a = l || n.size || "1em",
      u;
    return (
      n.className && (u = n.className),
      e.className && (u = (u ? u + " " : "") + e.className),
      Lt.createElement(
        "svg",
        zi(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: u,
            style: Oi(Oi({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && Lt.createElement("title", null, i),
        e.children
      )
    );
  };
  return Ec !== void 0
    ? Lt.createElement(Ec.Consumer, null, (n) => t(n))
    : t(np);
}
function lp(e) {
  return Tu({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z",
        },
        child: [],
      },
    ],
  })(e);
}
function ip(e) {
  return Tu({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6",
        },
        child: [],
      },
    ],
  })(e);
}
const op = () =>
  g.jsx("nav", {
    className: "navbar navbar-expand-lg navbar-light",
    style: {
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      paddingTop: "0.2rem",
      paddingBottom: "0.2rem",
    },
    children: g.jsxs("div", {
      className: "container-fluid d-flex align-items-center",
      children: [
        g.jsx(Yt, {
          to: "/",
          className: "nav-link-persona me-3",
          children: g.jsx(lp, { size: 28 }),
        }),
        g.jsx("span", {
          className: "nav-link-disabled me-3",
          "data-bs-toggle": "tooltip",
          "data-bs-placement": "bottom",
          title: "Solo para usuarios registrados",
          style: { cursor: "not-allowed" },
          children: g.jsx(ip, { size: 28 }),
        }),
        g.jsx("div", {
          className: "collapse navbar-collapse",
          id: "navbarNav",
          children: g.jsx("div", {
            className: "navbar-nav d-flex flex-row gap-4",
          }),
        }),
        g.jsx("div", {
          className: "navbar-brand ms-auto",
          children: g.jsx("img", {
            src: "/logo_sin_fondo.png",
            alt: "SportConnect",
            height: "50",
            className: "d-inline-block align-top",
          }),
        }),
      ],
    }),
  });
console.log("https://sportconnect-uk2i.onrender.com/api");
const Hg = () => {
    const [e, t] = N.useState(""),
      [n, r] = N.useState(""),
      l = El(),
      i = async (o) => {
        o.preventDefault();
        try {
          const a = await zg({ email: e, password: n });
          localStorage.setItem("isLoggedIn", "true"),
            localStorage.setItem("token", a.token),
            localStorage.setItem("userData", JSON.stringify(a.user)),
            l("/profile");
        } catch (a) {
          console.error("Error al iniciar sesión:", a.message),
            alert("Credenciales inválidas o error en el servidor.");
        }
      };
    return g.jsxs("div", {
      style: { position: "relative", minHeight: "100vh" },
      children: [
        g.jsx(op, {}),
        g.jsxs("div", {
          className:
            "container-fluid vh-100 d-flex flex-column flex-md-row p-0",
          children: [
            g.jsx("div", {
              className: "col-md-6 order-2 order-md-1 d-none d-md-block p-0",
              children: g.jsx("img", {
                src: "/portada.png",
                className: "img-fluid w-100 vh-100 object-fit-cover",
                alt: "Login visual",
              }),
            }),
            g.jsx("div", {
              className:
                "col-md-6 order-1 order-md-2 d-flex flex-column justify-content-center align-items-center text-white",
              children: g.jsxs("div", {
                className: "w-75",
                children: [
                  g.jsx("div", {
                    className:
                      "d-flex align-items-center justify-content-center mb-4 gap-2",
                    children: g.jsx("img", {
                      src: "/logo_sin_fondo.png",
                      alt: "Logo",
                      style: { width: "400px" },
                    }),
                  }),
                  g.jsx("h4", {
                    className: "mb-3 text-black",
                    children: "Log in",
                  }),
                  g.jsxs("form", {
                    onSubmit: i,
                    children: [
                      g.jsxs("div", {
                        className: "mb-3",
                        children: [
                          g.jsx("label", {
                            htmlFor: "email",
                            className: "form-label text-black",
                            children: "Email",
                          }),
                          g.jsx("input", {
                            type: "email",
                            className: "form-control",
                            id: "email",
                            placeholder: "ejemplo@gmail.com",
                            value: e,
                            onChange: (o) => t(o.target.value),
                          }),
                        ],
                      }),
                      g.jsxs("div", {
                        className: "mb-4",
                        children: [
                          g.jsx("label", {
                            htmlFor: "password",
                            className: "form-label text-black",
                            children: "Password",
                          }),
                          g.jsx("input", {
                            type: "password",
                            className: "form-control",
                            id: "password",
                            placeholder: "******",
                            value: n,
                            onChange: (o) => r(o.target.value),
                          }),
                        ],
                      }),
                      g.jsx("button", {
                        type: "submit",
                        className: "btn btn-light w-100 text-white bg-success",
                        children: "Log in",
                      }),
                    ],
                  }),
                  g.jsx("div", {
                    className: "text-center mt-3",
                    children: g.jsx("a", {
                      href: "/register",
                      className: "text-success",
                      children: "Create account",
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  Vg = () =>
    g.jsxs("div", {
      className: "min-vh-100 d-flex flex-column",
      style: {
        backgroundImage: 'url("/Deportistas.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      },
      children: [
        g.jsx(op, {}),
        g.jsx("div", {
          className: "container my-auto text-end",
          children: g.jsxs("div", {
            className: "bg-white p-5 rounded shadow",
            style: { maxWidth: "400px", marginLeft: "auto", opacity: 0.95 },
            children: [
              g.jsx("h2", {
                className: "text-dark mb-4",
                children: "Únete a la comunidad",
              }),
              g.jsx("p", {
                className: "text-muted",
                children:
                  "Regístrate y conecta con personas apasionadas por el deporte.",
              }),
              g.jsx(Yt, {
                to: "/login",
                className: "btn btn-success w-100",
                children: "Ir al Login / Registro",
              }),
            ],
          }),
        }),
      ],
    }),
  Du = () =>
    g.jsx("nav", {
      className: "navbar navbar-expand-lg navbar-light ",
      style: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        paddingTop: "0.2rem",
        paddingBottom: "0.2rem",
        position: "abolute",
      },
      children: g.jsxs("div", {
        className: "container-fluid d-flex align-items-center",
        children: [
          g.jsx(Yt, {
            to: "/",
            className: "nav-link-persona me-3",
            children: g.jsx(lp, { size: 28 }),
          }),
          g.jsx(Yt, {
            to: "/profile",
            className: "nav-link-persona me-3",
            children: g.jsx(ip, { size: 28 }),
          }),
          g.jsx("button", {
            className: "navbar-toggler",
            type: "button",
            "data-bs-toggle": "collapse",
            "data-bs-target": "#navbarNav",
            "aria-controls": "navbarNav",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation",
            children: g.jsx("span", { className: "navbar-toggler-icon" }),
          }),
          g.jsx("div", {
            className: "collapse navbar-collapse",
            id: "navbarNav",
            children: g.jsxs("div", {
              className: "navbar-nav d-flex flex-row gap-4",
              children: [
                g.jsx(Yt, {
                  className: "nav-link",
                  to: "/feed",
                  children: "Escalada",
                }),
                g.jsx(Yt, {
                  className: "nav-link",
                  to: "/feed",
                  children: "Running",
                }),
                g.jsx(Yt, {
                  className: "nav-link",
                  to: "/feed",
                  children: "Ciclismo",
                }),
                g.jsx(Yt, {
                  className: "nav-link",
                  to: "/feed",
                  children: "Fitness",
                }),
              ],
            }),
          }),
          g.jsx("div", {
            className: "navbar-brand ms-auto",
            children: g.jsx("img", {
              src: "/logo_sin_fondo.png",
              alt: "SportConnect",
              height: "50",
              className: "d-inline-block align-top",
            }),
          }),
        ],
      }),
    }),
  Wg = () => {
    const [e, t] = N.useState(!1),
      [n, r] = N.useState({ username: "", email: "", sports: "" }),
      l = (o) => {
        const { name: a, value: u } = o.target;
        r({ ...n, [a]: u });
      },
      i = () => t(!e);
    return g.jsxs("div", {
      style: {
        backgroundImage: "url('/Escalada.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100%",
        position: "relative",
      },
      children: [
        g.jsx(Du, {}),
        g.jsx("div", {
          className: " align-items-center",
          style: {
            minHeight: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            paddingTop: "70px",
            paddingLeft: "70px",
          },
          children: g.jsxs("div", {
            className: "text-center p-5 rounded",
            style: {
              maxWidth: "400px",
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              color: "#2f7d5c",
              width: "100%",
            },
            children: [
              g.jsx("img", {
                src: "/logo_sin_fondo.png",
                alt: "SportConnect",
                height: "50",
                className: "mb-3",
              }),
              e
                ? g.jsxs(g.Fragment, {
                    children: [
                      g.jsx("input", {
                        type: "text",
                        className: "form-control mb-3",
                        name: "username",
                        value: n.username,
                        onChange: l,
                        placeholder: "Name",
                      }),
                      g.jsx("input", {
                        type: "email",
                        className: "form-control mb-3",
                        name: "email",
                        value: n.email,
                        onChange: l,
                        placeholder: "ejemplo@gmail.com",
                      }),
                      g.jsx("input", {
                        type: "text",
                        className: "form-control mb-3",
                        name: "sports",
                        value: n.sports,
                        onChange: l,
                        placeholder: "Deportes favoritos (separados por coma)",
                      }),
                      g.jsx("button", {
                        className: "btn btn-success",
                        onClick: i,
                        children: "Guardar cambios",
                      }),
                    ],
                  })
                : g.jsxs(g.Fragment, {
                    children: [
                      g.jsx("h2", { children: n.username }),
                      g.jsx("p", {
                        className: "text-muted",
                        children: n.email,
                      }),
                      g.jsx("h5", {
                        className: "mt-4",
                        children: "Deportes favoritos",
                      }),
                      g.jsx("ul", {
                        className: "list-inline",
                        children: n.sports.split(",").map((o, a) =>
                          g.jsx(
                            "li",
                            {
                              className:
                                "list-inline-item badge bg-success me-2",
                              children: o.trim(),
                            },
                            a
                          )
                        ),
                      }),
                      g.jsx("button", {
                        className: "btn btn-outline-success mt-4",
                        onClick: i,
                        children: "Editar Perfil",
                      }),
                    ],
                  }),
            ],
          }),
        }),
      ],
    });
  },
  Qg = () => {
    const e = El(),
      [t, n] = N.useState({ name: "", email: "", password: "" }),
      r = (i) => {
        n({ ...t, [i.target.name]: i.target.value });
      },
      l = (i) => {
        i.preventDefault(), Mg(t), e("/profile");
      };
    return g.jsxs("div", {
      style: {
        minHeight: "100vh",
        backgroundImage: "url('/Running.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      },
      children: [
        g.jsx(Du, {}),
        g.jsx("div", {
          className: "d-flex justify-content-center align-items-center",
          style: { height: "calc(100vh - 80px)" },
          children: g.jsxs("div", {
            style: {
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              padding: "40px",
              borderRadius: "10px",
              maxWidth: "400px",
              width: "100%",
            },
            children: [
              g.jsx("h2", {
                className: "text-center mb-4",
                style: { color: "#2f7d5c" },
                children: "Crear cuenta",
              }),
              g.jsxs("form", {
                onSubmit: l,
                children: [
                  g.jsxs("div", {
                    className: "mb-3",
                    children: [
                      g.jsx("label", {
                        htmlFor: "name",
                        className: "form-label",
                        children: "Nombre",
                      }),
                      g.jsx("input", {
                        type: "text",
                        className: "form-control",
                        id: "name",
                        name: "name",
                        placeholder: "Name",
                        value: t.name,
                        onChange: r,
                        required: !0,
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    className: "mb-3",
                    children: [
                      g.jsx("label", {
                        htmlFor: "email",
                        className: "form-label",
                        children: "Correo electrónico",
                      }),
                      g.jsx("input", {
                        type: "email",
                        className: "form-control",
                        id: "email",
                        name: "email",
                        placeholder: "Email",
                        value: t.email,
                        onChange: r,
                        required: !0,
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    className: "mb-3",
                    children: [
                      g.jsx("label", {
                        htmlFor: "password",
                        className: "form-label",
                        children: "Contraseña",
                      }),
                      g.jsx("input", {
                        type: "password",
                        className: "form-control",
                        id: "password",
                        name: "password",
                        placeholder: "xxxxxx",
                        value: t.password,
                        onChange: r,
                        required: !0,
                      }),
                    ],
                  }),
                  g.jsx("button", {
                    type: "submit",
                    className: "btn btn-success w-100",
                    children: "Registrarse",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  };
function Kg(e) {
  return Tu({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",
        },
        child: [],
      },
    ],
  })(e);
}
const Yg = (e) => {
    switch (e) {
      case "Fácil":
        return "bg-success text-white";
      case "Medio":
        return "bg-warning text-dark";
      case "Difícil":
        return "bg-danger text-white";
      default:
        return "bg-secondary text-white";
    }
  },
  Xg = ({ post: e, onToggleFavorite: t, onJoin: n }) =>
    g.jsxs("div", {
      className: "mb-4 p-4 rounded shadow",
      style: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderRadius: "1rem",
      },
      children: [
        g.jsxs("div", {
          className: "d-flex justify-content-between align-items-start mb-2",
          children: [
            g.jsxs("div", {
              children: [
                g.jsx("h5", {
                  className: "mb-0 text-black",
                  children: e.title,
                }),
                g.jsx("span", {
                  className: `badge mt-1 ${Yg(e.difficulty)}`,
                  children: e.difficulty || "Sin dificultad",
                }),
              ],
            }),
            g.jsx("button", {
              className: "btn btn-link text-danger p-0",
              onClick: t,
              children: g.jsx(Kg, {
                size: 20,
                color: e.isFavorite ? "red" : "lightgray",
              }),
            }),
          ],
        }),
        g.jsxs("p", {
          className: "mb-2 text-muted",
          children: [g.jsx("strong", { children: "Deporte:" }), " ", e.sport],
        }),
        g.jsxs("p", {
          className: "mb-2 text-black",
          children: [
            g.jsx("strong", { children: "Descripción:" }),
            " ",
            e.description,
          ],
        }),
        g.jsxs("div", {
          className: "row mb-2 text-black",
          children: [
            g.jsx("div", {
              className: "col-md-6",
              children: g.jsxs("p", {
                className: "mb-1",
                children: [
                  g.jsx("strong", { children: "Fecha:" }),
                  " ",
                  e.date,
                ],
              }),
            }),
            g.jsx("div", {
              className: "col-md-6",
              children: g.jsxs("p", {
                className: "mb-1",
                children: [g.jsx("strong", { children: "Hora:" }), " ", e.time],
              }),
            }),
          ],
        }),
        g.jsxs("p", {
          className: "mb-2 text-black",
          children: [
            g.jsx("strong", { children: "Dirección:" }),
            " ",
            e.address,
          ],
        }),
        g.jsxs("p", {
          className: "mb-2 text-black",
          children: [
            g.jsx("strong", { children: "Capacidad:" }),
            " ",
            e.capacity,
            " personas",
          ],
        }),
        g.jsxs("div", {
          className: "d-flex justify-content-between align-items-center mt-3",
          children: [
            g.jsxs("span", {
              className: "text-muted",
              children: [e.participants, " participantes"],
            }),
            g.jsx("button", {
              className: "btn btn-success",
              onClick: n,
              disabled: e.participants >= e.capacity,
              children:
                e.participants >= e.capacity ? "Cupo lleno" : "Anotarme",
            }),
          ],
        }),
      ],
    }),
  Gg = ({ show: e, onClose: t, setPosts: n }) => {
    const [r, l] = N.useState({
        title: "",
        description: "",
        date: "",
        time: "",
        address: "",
        sport: "",
        capacity: "",
        difficulty: "",
      }),
      i = (a) => {
        l({ ...r, [a.target.name]: a.target.value });
      },
      o = async (a) => {
        a.preventDefault();
        const u = { ...r, capacity: parseInt(r.capacity, 10), participants: 0 };
        try {
          const s = await fetch(`${{}.BACKEND_URL}/api/events`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(u),
          });
          if (!s.ok) throw new Error("Error al crear el evento");
          const f = await s.json();
          n((d) => [f, ...d]),
            l({
              title: "",
              description: "",
              date: "",
              time: "",
              address: "",
              sport: "",
              capacity: "",
              difficulty: "",
            }),
            t();
        } catch (s) {
          console.error("Error al crear el evento:", s),
            alert("Ocurrió un error al crear el evento.");
        }
      };
    return e
      ? g.jsx("div", {
          className: "modal d-block",
          tabIndex: "-1",
          style: { backgroundColor: "rgba(0,0,0,0.5)" },
          children: g.jsx("div", {
            className: "modal-dialog modal-lg",
            children: g.jsxs("div", {
              className: "modal-content",
              children: [
                g.jsxs("div", {
                  className: "modal-header",
                  children: [
                    g.jsx("h5", {
                      className: "modal-title",
                      children: "Crear nueva publicación",
                    }),
                    g.jsx("button", {
                      type: "button",
                      className: "btn-close",
                      onClick: t,
                    }),
                  ],
                }),
                g.jsx("div", {
                  className: "modal-body",
                  children: g.jsxs("form", {
                    onSubmit: o,
                    children: [
                      g.jsxs("div", {
                        className: "row g-3",
                        children: [
                          g.jsx("div", {
                            className: "col-md-6",
                            children: g.jsx("input", {
                              type: "text",
                              name: "title",
                              className: "form-control text-black",
                              placeholder: "Título",
                              value: r.title,
                              onChange: i,
                              required: !0,
                            }),
                          }),
                          g.jsx("div", {
                            className: "col-md-6",
                            children: g.jsxs("select", {
                              name: "sport",
                              className: "form-select text-black",
                              value: r.sport,
                              onChange: i,
                              required: !0,
                              children: [
                                g.jsx("option", {
                                  value: "",
                                  children: "Selecciona un deporte",
                                }),
                                g.jsx("option", {
                                  value: "Escalada",
                                  children: "Escalada",
                                }),
                                g.jsx("option", {
                                  value: "Running",
                                  children: "Running",
                                }),
                                g.jsx("option", {
                                  value: "Ciclismo",
                                  children: "Ciclismo",
                                }),
                                g.jsx("option", {
                                  value: "Fitness",
                                  children: "Fitness",
                                }),
                              ],
                            }),
                          }),
                          g.jsx("div", {
                            className: "col-md-6",
                            children: g.jsx("input", {
                              type: "date",
                              name: "date",
                              className: "form-control text-black",
                              value: r.date,
                              onChange: i,
                              required: !0,
                            }),
                          }),
                          g.jsx("div", {
                            className: "col-md-6",
                            children: g.jsx("input", {
                              type: "time",
                              name: "time",
                              className: "form-control text-black",
                              value: r.time,
                              onChange: i,
                              required: !0,
                            }),
                          }),
                          g.jsx("div", {
                            className: "col-md-6",
                            children: g.jsx("input", {
                              type: "text",
                              name: "address",
                              className: "form-control text-black",
                              placeholder: "Dirección",
                              value: r.address,
                              onChange: i,
                              required: !0,
                            }),
                          }),
                          g.jsx("div", {
                            className: "col-md-6",
                            children: g.jsx("input", {
                              type: "number",
                              name: "capacity",
                              className: "form-control text-black",
                              placeholder: "Capacidad",
                              value: r.capacity,
                              onChange: i,
                              required: !0,
                            }),
                          }),
                          g.jsx("div", {
                            className: "col-md-6",
                            children: g.jsxs("select", {
                              name: "difficulty",
                              className: "form-select text-black",
                              value: r.difficulty,
                              onChange: i,
                              required: !0,
                              children: [
                                g.jsx("option", {
                                  value: "",
                                  children: "Selecciona dificultad",
                                }),
                                g.jsx("option", {
                                  value: "Fácil",
                                  children: "Fácil",
                                }),
                                g.jsx("option", {
                                  value: "Medio",
                                  children: "Medio",
                                }),
                                g.jsx("option", {
                                  value: "Difícil",
                                  children: "Difícil",
                                }),
                              ],
                            }),
                          }),
                          g.jsx("div", {
                            className: "col-12",
                            children: g.jsx("textarea", {
                              name: "description",
                              className: "form-control text-black",
                              placeholder: "Descripción",
                              value: r.description,
                              onChange: i,
                              required: !0,
                            }),
                          }),
                        ],
                      }),
                      g.jsx("button", {
                        type: "submit",
                        className: "btn btn-success mt-3 w-100",
                        children: "Publicar",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        })
      : null;
  },
  Jg = () => {
    const e = El(),
      t = "https://sportconnect-uk2i.onrender.com/api",
      [n, r] = N.useState([]),
      [l, i] = N.useState(!0),
      [o, a] = N.useState("all"),
      [u, s] = N.useState(!1),
      [f, d] = N.useState("all"),
      [h, x] = N.useState("all");
    N.useEffect(() => {
      localStorage.getItem("isLoggedIn") !== "true" && e("/login");
    }, []);
    const E = (c) => {
        const v = n.map((j) =>
          j.id === c ? { ...j, isFavorite: !j.isFavorite } : j
        );
        r(v);
        const C = v.filter((j) => j.isFavorite).map((j) => j.id);
        localStorage.setItem("favoritePosts", JSON.stringify(C));
      },
      k = () => {
        const c = new URLSearchParams();
        f !== "all" && c.append("sport", f),
          h !== "all" && c.append("difficulty", h);
        const v = JSON.parse(localStorage.getItem("favoritePosts")) || [];
        fetch(`${t}/api/events?${c.toString()}`)
          .then((C) => C.json())
          .then((C) => {
            const j = C.map((z) => ({ ...z, isFavorite: v.includes(z.id) }));
            r(j);
          })
          .catch((C) => console.error("Error al obtener eventos:", C));
      };
    N.useEffect(() => {
      k();
    }, [f, h]);
    const T = (c) => {
      r(
        n.map((v) =>
          v.id === c && v.participants < v.capacity
            ? { ...v, participants: v.participants + 1 }
            : v
        )
      );
    };
    let p = [...n];
    return (
      o === "favorites" && (p = p.filter((c) => c.isFavorite)),
      g.jsxs("div", {
        className: "bg-light min-vh-100",
        style: {
          backgroundImage: 'url("/opcionFeed.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        },
        children: [
          g.jsx(Du, {}),
          g.jsxs("div", {
            className: "container mt-5 text-white",
            children: [
              g.jsxs("div", {
                className:
                  "d-flex justify-content-between align-items-center mb-4",
                children: [
                  g.jsxs("div", {
                    className: "btn-group mb-4",
                    children: [
                      g.jsx("button", {
                        className: `btn ${
                          o === "all" ? "btn-success" : "btn-outline-success"
                        } text-black`,
                        onClick: () => a("all"),
                        children: "Todos",
                      }),
                      g.jsx("button", {
                        className: `btn ${
                          o === "favorites"
                            ? "btn-success"
                            : "btn-outline-success"
                        } text-black`,
                        onClick: () => a("favorites"),
                        children: "Favoritos ❤️",
                      }),
                      g.jsxs("div", {
                        className: "dropdown ms-2",
                        children: [
                          g.jsx("button", {
                            className:
                              "btn btn-outline-success dropdown-toggle text-black",
                            type: "button",
                            "data-bs-toggle": "dropdown",
                            children: "Deporte",
                          }),
                          g.jsxs("ul", {
                            className: "dropdown-menu",
                            children: [
                              g.jsx("li", {
                                children: g.jsx("button", {
                                  className: "dropdown-item",
                                  onClick: () => d("all"),
                                  children: "Todos",
                                }),
                              }),
                              [
                                "Escalada",
                                "Running",
                                "Ciclismo",
                                "Fitness",
                              ].map((c) =>
                                g.jsx(
                                  "li",
                                  {
                                    children: g.jsx("button", {
                                      className: "dropdown-item",
                                      onClick: () => d(c),
                                      children: c,
                                    }),
                                  },
                                  c
                                )
                              ),
                            ],
                          }),
                        ],
                      }),
                      g.jsxs("div", {
                        className: "dropdown ms-2",
                        children: [
                          g.jsx("button", {
                            className:
                              "btn btn-outline-success dropdown-toggle text-black",
                            type: "button",
                            "data-bs-toggle": "dropdown",
                            children: "Dificultad",
                          }),
                          g.jsxs("ul", {
                            className: "dropdown-menu",
                            children: [
                              g.jsx("li", {
                                children: g.jsx("button", {
                                  className: "dropdown-item",
                                  onClick: () => x("all"),
                                  children: "Todas",
                                }),
                              }),
                              ["Fácil", "Medio", "Difícil"].map((c) =>
                                g.jsx(
                                  "li",
                                  {
                                    children: g.jsx("button", {
                                      className: "dropdown-item",
                                      onClick: () => x(c),
                                      children: c,
                                    }),
                                  },
                                  c
                                )
                              ),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  l &&
                    g.jsx("button", {
                      className: "btn btn-light text-success",
                      onClick: () => s(!0),
                      children: "Crear evento +",
                    }),
                ],
              }),
              p.length === 0
                ? g.jsx("p", {
                    className: "text-black",
                    children: "No hay publicaciones.",
                  })
                : p.map((c) =>
                    g.jsx(
                      Xg,
                      {
                        post: c,
                        onToggleFavorite: () => E(c.id),
                        onJoin: () => T(c.id),
                      },
                      c.id
                    )
                  ),
            ],
          }),
          l && g.jsx(Gg, { show: u, onClose: () => s(!1), setPosts: r }),
        ],
      })
    );
  },
  ap = N.createContext(),
  Zg = ({ children: e }) => {
    const [t, n] = N.useState(null);
    N.useEffect(() => {
      const i = localStorage.getItem("token");
      i && n({ token: i });
    }, []);
    const r = (i) => {
        localStorage.setItem("token", i), n({ token: i });
      },
      l = () => {
        localStorage.removeItem("token"), n(null);
      };
    return g.jsx(ap.Provider, {
      value: { user: t, login: r, logout: l },
      children: e,
    });
  },
  qg = () => N.useContext(ap),
  Cc = ({ children: e }) => {
    const { user: t } = qg();
    return t ? e : g.jsx(cg, { to: "/login", replace: !0 });
  },
  bg = yg(
    Da(
      g.jsxs(g.Fragment, {
        children: [
          g.jsx(Hn, { path: "/", element: g.jsx(Vg, {}) }),
          g.jsx(Hn, { path: "/login", element: g.jsx(Hg, {}) }),
          g.jsx(Hn, { path: "/register", element: g.jsx(Qg, {}) }),
          g.jsx(Hn, {
            path: "/profile",
            element: g.jsx(Cc, { children: g.jsx(Wg, {}) }),
          }),
          g.jsx(Hn, {
            path: "/feed",
            element: g.jsx(Cc, { children: g.jsx(Jg, {}) }),
          }),
        ],
      })
    )
  ),
  ey = () => ({
    message: null,
    todos: [
      { id: 1, title: "Make the bed", background: null },
      { id: 2, title: "Do my homework", background: null },
    ],
  });
function ty(e, t = {}) {
  switch (t.type) {
    case "set_hello":
      return { ...e, message: t.payload };
    case "add_task":
      const { id: n, color: r } = t.payload;
      return {
        ...e,
        todos: e.todos.map((l) => (l.id === n ? { ...l, background: r } : l)),
      };
    default:
      throw Error("Unknown action.");
  }
}
const ny = N.createContext();
function ry({ children: e }) {
  const [t, n] = N.useReducer(ty, ey());
  return g.jsx(ny.Provider, { value: { store: t, dispatch: n }, children: e });
}
const ly = () =>
  g.jsx(Lt.StrictMode, {
    children: g.jsx(ry, {
      children: g.jsx(Zg, { children: g.jsx(jg, { router: bg }) }),
    }),
  });
Fo.createRoot(document.getElementById("root")).render(g.jsx(ly, {}));
