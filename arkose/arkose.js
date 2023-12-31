'use strict'
;(() => {
  var G = Object.create
  var N = Object.defineProperty
  var Z = Object.getOwnPropertyDescriptor
  var z = Object.getOwnPropertyNames
  var H = Object.getPrototypeOf,
    V = Object.prototype.hasOwnProperty
  var K = (i, s) => () => (s || i((s = { exports: {} }).exports, s), s.exports)
  var J = (i, s, a, A) => {
    if ((s && typeof s == 'object') || typeof s == 'function')
      for (let u of z(s))
        !V.call(i, u) &&
          u !== a &&
          N(i, u, {
            get: () => s[u],
            enumerable: !(A = Z(s, u)) || A.enumerable,
          })
    return i
  }
  var B = (i, s, a) => (
    (a = i != null ? G(H(i)) : {}),
    J(s || !i || !i.__esModule ? N(a, 'default', { value: i, enumerable: !0 }) : a, i)
  )
  var C = K((T, L) => {
    ;(function (i, s) {
      if (typeof define == 'function' && define.amd) define('webextension-polyfill', ['module'], s)
      else if (typeof T < 'u') s(L)
      else {
        var a = { exports: {} }
        s(a), (i.browser = a.exports)
      }
    })(typeof globalThis < 'u' ? globalThis : typeof self < 'u' ? self : T, function (i) {
      'use strict'
      if (!globalThis.chrome?.runtime?.id)
        throw new Error('This script should only be loaded in a browser extension.')
      if (
        typeof globalThis.browser > 'u' ||
        Object.getPrototypeOf(globalThis.browser) !== Object.prototype
      ) {
        let s = 'The message port closed before a response was received.',
          a = (A) => {
            let u = {
              alarms: {
                clear: { minArgs: 0, maxArgs: 1 },
                clearAll: { minArgs: 0, maxArgs: 0 },
                get: { minArgs: 0, maxArgs: 1 },
                getAll: { minArgs: 0, maxArgs: 0 },
              },
              bookmarks: {
                create: { minArgs: 1, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 1 },
                getChildren: { minArgs: 1, maxArgs: 1 },
                getRecent: { minArgs: 1, maxArgs: 1 },
                getSubTree: { minArgs: 1, maxArgs: 1 },
                getTree: { minArgs: 0, maxArgs: 0 },
                move: { minArgs: 2, maxArgs: 2 },
                remove: { minArgs: 1, maxArgs: 1 },
                removeTree: { minArgs: 1, maxArgs: 1 },
                search: { minArgs: 1, maxArgs: 1 },
                update: { minArgs: 2, maxArgs: 2 },
              },
              browserAction: {
                disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                getBadgeText: { minArgs: 1, maxArgs: 1 },
                getPopup: { minArgs: 1, maxArgs: 1 },
                getTitle: { minArgs: 1, maxArgs: 1 },
                openPopup: { minArgs: 0, maxArgs: 0 },
                setBadgeBackgroundColor: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0,
                },
                setBadgeText: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0,
                },
                setIcon: { minArgs: 1, maxArgs: 1 },
                setPopup: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0,
                },
                setTitle: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0,
                },
              },
              browsingData: {
                remove: { minArgs: 2, maxArgs: 2 },
                removeCache: { minArgs: 1, maxArgs: 1 },
                removeCookies: { minArgs: 1, maxArgs: 1 },
                removeDownloads: { minArgs: 1, maxArgs: 1 },
                removeFormData: { minArgs: 1, maxArgs: 1 },
                removeHistory: { minArgs: 1, maxArgs: 1 },
                removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                removePasswords: { minArgs: 1, maxArgs: 1 },
                removePluginData: { minArgs: 1, maxArgs: 1 },
                settings: { minArgs: 0, maxArgs: 0 },
              },
              commands: { getAll: { minArgs: 0, maxArgs: 0 } },
              contextMenus: {
                remove: { minArgs: 1, maxArgs: 1 },
                removeAll: { minArgs: 0, maxArgs: 0 },
                update: { minArgs: 2, maxArgs: 2 },
              },
              cookies: {
                get: { minArgs: 1, maxArgs: 1 },
                getAll: { minArgs: 1, maxArgs: 1 },
                getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                remove: { minArgs: 1, maxArgs: 1 },
                set: { minArgs: 1, maxArgs: 1 },
              },
              devtools: {
                inspectedWindow: {
                  eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 },
                },
                panels: {
                  create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 },
                  elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } },
                },
              },
              downloads: {
                cancel: { minArgs: 1, maxArgs: 1 },
                download: { minArgs: 1, maxArgs: 1 },
                erase: { minArgs: 1, maxArgs: 1 },
                getFileIcon: { minArgs: 1, maxArgs: 2 },
                open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                pause: { minArgs: 1, maxArgs: 1 },
                removeFile: { minArgs: 1, maxArgs: 1 },
                resume: { minArgs: 1, maxArgs: 1 },
                search: { minArgs: 1, maxArgs: 1 },
                show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              },
              extension: {
                isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 },
              },
              history: {
                addUrl: { minArgs: 1, maxArgs: 1 },
                deleteAll: { minArgs: 0, maxArgs: 0 },
                deleteRange: { minArgs: 1, maxArgs: 1 },
                deleteUrl: { minArgs: 1, maxArgs: 1 },
                getVisits: { minArgs: 1, maxArgs: 1 },
                search: { minArgs: 1, maxArgs: 1 },
              },
              i18n: {
                detectLanguage: { minArgs: 1, maxArgs: 1 },
                getAcceptLanguages: { minArgs: 0, maxArgs: 0 },
              },
              identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
              idle: { queryState: { minArgs: 1, maxArgs: 1 } },
              management: {
                get: { minArgs: 1, maxArgs: 1 },
                getAll: { minArgs: 0, maxArgs: 0 },
                getSelf: { minArgs: 0, maxArgs: 0 },
                setEnabled: { minArgs: 2, maxArgs: 2 },
                uninstallSelf: { minArgs: 0, maxArgs: 1 },
              },
              notifications: {
                clear: { minArgs: 1, maxArgs: 1 },
                create: { minArgs: 1, maxArgs: 2 },
                getAll: { minArgs: 0, maxArgs: 0 },
                getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                update: { minArgs: 2, maxArgs: 2 },
              },
              pageAction: {
                getPopup: { minArgs: 1, maxArgs: 1 },
                getTitle: { minArgs: 1, maxArgs: 1 },
                hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setIcon: { minArgs: 1, maxArgs: 1 },
                setPopup: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0,
                },
                setTitle: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0,
                },
                show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              },
              permissions: {
                contains: { minArgs: 1, maxArgs: 1 },
                getAll: { minArgs: 0, maxArgs: 0 },
                remove: { minArgs: 1, maxArgs: 1 },
                request: { minArgs: 1, maxArgs: 1 },
              },
              runtime: {
                getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                openOptionsPage: { minArgs: 0, maxArgs: 0 },
                requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                sendMessage: { minArgs: 1, maxArgs: 3 },
                sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                setUninstallURL: { minArgs: 1, maxArgs: 1 },
              },
              sessions: {
                getDevices: { minArgs: 0, maxArgs: 1 },
                getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
                restore: { minArgs: 0, maxArgs: 1 },
              },
              storage: {
                local: {
                  clear: { minArgs: 0, maxArgs: 0 },
                  get: { minArgs: 0, maxArgs: 1 },
                  getBytesInUse: { minArgs: 0, maxArgs: 1 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                },
                managed: {
                  get: { minArgs: 0, maxArgs: 1 },
                  getBytesInUse: { minArgs: 0, maxArgs: 1 },
                },
                sync: {
                  clear: { minArgs: 0, maxArgs: 0 },
                  get: { minArgs: 0, maxArgs: 1 },
                  getBytesInUse: { minArgs: 0, maxArgs: 1 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                },
              },
              tabs: {
                captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                create: { minArgs: 1, maxArgs: 1 },
                detectLanguage: { minArgs: 0, maxArgs: 1 },
                discard: { minArgs: 0, maxArgs: 1 },
                duplicate: { minArgs: 1, maxArgs: 1 },
                executeScript: { minArgs: 1, maxArgs: 2 },
                get: { minArgs: 1, maxArgs: 1 },
                getCurrent: { minArgs: 0, maxArgs: 0 },
                getZoom: { minArgs: 0, maxArgs: 1 },
                getZoomSettings: { minArgs: 0, maxArgs: 1 },
                goBack: { minArgs: 0, maxArgs: 1 },
                goForward: { minArgs: 0, maxArgs: 1 },
                highlight: { minArgs: 1, maxArgs: 1 },
                insertCSS: { minArgs: 1, maxArgs: 2 },
                move: { minArgs: 2, maxArgs: 2 },
                query: { minArgs: 1, maxArgs: 1 },
                reload: { minArgs: 0, maxArgs: 2 },
                remove: { minArgs: 1, maxArgs: 1 },
                removeCSS: { minArgs: 1, maxArgs: 2 },
                sendMessage: { minArgs: 2, maxArgs: 3 },
                setZoom: { minArgs: 1, maxArgs: 2 },
                setZoomSettings: { minArgs: 1, maxArgs: 2 },
                update: { minArgs: 1, maxArgs: 2 },
              },
              topSites: { get: { minArgs: 0, maxArgs: 0 } },
              webNavigation: {
                getAllFrames: { minArgs: 1, maxArgs: 1 },
                getFrame: { minArgs: 1, maxArgs: 1 },
              },
              webRequest: {
                handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 },
              },
              windows: {
                create: { minArgs: 0, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 2 },
                getAll: { minArgs: 0, maxArgs: 1 },
                getCurrent: { minArgs: 0, maxArgs: 1 },
                getLastFocused: { minArgs: 0, maxArgs: 1 },
                remove: { minArgs: 1, maxArgs: 1 },
                update: { minArgs: 2, maxArgs: 2 },
              },
            }
            if (Object.keys(u).length === 0)
              throw new Error('api-metadata.json has not been included in browser-polyfill')
            class S extends WeakMap {
              constructor(r, t = void 0) {
                super(t), (this.createItem = r)
              }
              get(r) {
                return this.has(r) || this.set(r, this.createItem(r)), super.get(r)
              }
            }
            let D = (e) => e && typeof e == 'object' && typeof e.then == 'function',
              M =
                (e, r) =>
                (...t) => {
                  A.runtime.lastError
                    ? e.reject(new Error(A.runtime.lastError.message))
                    : r.singleCallbackArg || (t.length <= 1 && r.singleCallbackArg !== !1)
                    ? e.resolve(t[0])
                    : e.resolve(t)
                },
              h = (e) => (e == 1 ? 'argument' : 'arguments'),
              W = (e, r) =>
                function (g, ...o) {
                  if (o.length < r.minArgs)
                    throw new Error(
                      `Expected at least ${r.minArgs} ${h(r.minArgs)} for ${e}(), got ${o.length}`,
                    )
                  if (o.length > r.maxArgs)
                    throw new Error(
                      `Expected at most ${r.maxArgs} ${h(r.maxArgs)} for ${e}(), got ${o.length}`,
                    )
                  return new Promise((l, c) => {
                    if (r.fallbackToNoCallback)
                      try {
                        g[e](...o, M({ resolve: l, reject: c }, r))
                      } catch {
                        g[e](...o), (r.fallbackToNoCallback = !1), (r.noCallback = !0), l()
                      }
                    else
                      r.noCallback ? (g[e](...o), l()) : g[e](...o, M({ resolve: l, reject: c }, r))
                  })
                },
              R = (e, r, t) =>
                new Proxy(r, {
                  apply(g, o, l) {
                    return t.call(o, e, ...l)
                  },
                }),
              p = Function.call.bind(Object.prototype.hasOwnProperty),
              k = (e, r = {}, t = {}) => {
                let g = Object.create(null),
                  o = {
                    has(c, n) {
                      return n in e || n in g
                    },
                    get(c, n, x) {
                      if (n in g) return g[n]
                      if (!(n in e)) return
                      let m = e[n]
                      if (typeof m == 'function')
                        if (typeof r[n] == 'function') m = R(e, e[n], r[n])
                        else if (p(t, n)) {
                          let f = W(n, t[n])
                          m = R(e, e[n], f)
                        } else m = m.bind(e)
                      else if (typeof m == 'object' && m !== null && (p(r, n) || p(t, n)))
                        m = k(m, r[n], t[n])
                      else if (p(t, '*')) m = k(m, r[n], t['*'])
                      else
                        return (
                          Object.defineProperty(g, n, {
                            configurable: !0,
                            enumerable: !0,
                            get() {
                              return e[n]
                            },
                            set(f) {
                              e[n] = f
                            },
                          }),
                          m
                        )
                      return (g[n] = m), m
                    },
                    set(c, n, x, m) {
                      return n in g ? (g[n] = x) : (e[n] = x), !0
                    },
                    defineProperty(c, n, x) {
                      return Reflect.defineProperty(g, n, x)
                    },
                    deleteProperty(c, n) {
                      return Reflect.deleteProperty(g, n)
                    },
                  },
                  l = Object.create(e)
                return new Proxy(l, o)
              },
              w = (e) => ({
                addListener(r, t, ...g) {
                  r.addListener(e.get(t), ...g)
                },
                hasListener(r, t) {
                  return r.hasListener(e.get(t))
                },
                removeListener(r, t) {
                  r.removeListener(e.get(t))
                },
              }),
              q = new S((e) =>
                typeof e != 'function'
                  ? e
                  : function (t) {
                      let g = k(t, {}, { getContent: { minArgs: 0, maxArgs: 0 } })
                      e(g)
                    },
              ),
              F = new S((e) =>
                typeof e != 'function'
                  ? e
                  : function (t, g, o) {
                      let l = !1,
                        c,
                        n = new Promise((b) => {
                          c = function (d) {
                            ;(l = !0), b(d)
                          }
                        }),
                        x
                      try {
                        x = e(t, g, c)
                      } catch (b) {
                        x = Promise.reject(b)
                      }
                      let m = x !== !0 && D(x)
                      if (x !== !0 && !m && !l) return !1
                      let f = (b) => {
                        b.then(
                          (d) => {
                            o(d)
                          },
                          (d) => {
                            let E
                            d && (d instanceof Error || typeof d.message == 'string')
                              ? (E = d.message)
                              : (E = 'An unexpected error occurred'),
                              o({
                                __mozWebExtensionPolyfillReject__: !0,
                                message: E,
                              })
                          },
                        ).catch((d) => {})
                      }
                      return f(m ? x : n), !0
                    },
              ),
              U = ({ reject: e, resolve: r }, t) => {
                A.runtime.lastError
                  ? A.runtime.lastError.message === s
                    ? r()
                    : e(new Error(A.runtime.lastError.message))
                  : t && t.__mozWebExtensionPolyfillReject__
                  ? e(new Error(t.message))
                  : r(t)
              },
              j = (e, r, t, ...g) => {
                if (g.length < r.minArgs)
                  throw new Error(
                    `Expected at least ${r.minArgs} ${h(r.minArgs)} for ${e}(), got ${g.length}`,
                  )
                if (g.length > r.maxArgs)
                  throw new Error(
                    `Expected at most ${r.maxArgs} ${h(r.maxArgs)} for ${e}(), got ${g.length}`,
                  )
                return new Promise((o, l) => {
                  let c = U.bind(null, { resolve: o, reject: l })
                  g.push(c), t.sendMessage(...g)
                })
              },
              I = {
                devtools: { network: { onRequestFinished: w(q) } },
                runtime: {
                  onMessage: w(F),
                  onMessageExternal: w(F),
                  sendMessage: j.bind(null, 'sendMessage', {
                    minArgs: 1,
                    maxArgs: 3,
                  }),
                },
                tabs: {
                  sendMessage: j.bind(null, 'sendMessage', {
                    minArgs: 2,
                    maxArgs: 3,
                  }),
                },
              },
              y = {
                clear: { minArgs: 1, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 1 },
                set: { minArgs: 1, maxArgs: 1 },
              }
            return (
              (u.privacy = {
                network: { '*': y },
                services: { '*': y },
                websites: { '*': y },
              }),
              k(A, I, u)
            )
          }
        i.exports = a(chrome)
      } else i.exports = globalThis.browser
    })
  })
  var _ = B(C())
  var $ = B(C()),
    P = null,
    v = class {
      constructor() {
        ;(this.enforcement = void 0),
          (this.pendingPromises = []),
          (window.useArkoseSetupEnforcement = this.useArkoseSetupEnforcement.bind(this)),
          (this.enforcementPromise = new Promise((s) => {
            P = s
          })),
          this.injectScript()
      }
      useArkoseSetupEnforcement(s) {
        ;(this.enforcement = s),
          s.setConfig({
            onCompleted: (a) => {
              this.pendingPromises.forEach((A) => {
                A.resolve(a.token)
              }),
                (this.pendingPromises = [])
            },
            onReady: () => {
              P?.(), (P = null)
            },
            onError: (a) => {},
            onFailed: (a) => {
              this.pendingPromises.forEach((A) => {
                A.reject(new Error('Failed to generate arkose token'))
              })
            },
          })
      }
      injectScript() {
        let s = document.createElement('script')
        ;(s.src = $.default.runtime.getURL(
          '/arkose/js/v2/35536E1E-65B4-4D96-9D97-6ADB7EFF8147/api.js',
        )),
          (s.async = !0),
          (s.defer = !0),
          s.setAttribute('data-callback', 'useArkoseSetupEnforcement'),
          document.body.appendChild(s)
      }
      async generate() {
        let s = !1,
          a = setTimeout(() => {
            s = !0
          }, 1e4)
        try {
          await this.enforcementPromise
        } catch {
          throw new Error('Failed to generate arkose token')
        }
        if ((clearTimeout(a), s)) throw new Error('Generate arkose token timeout')
        return new Promise((A) => {
          ;(this.pendingPromises = [{ resolve: A }]), this.enforcement.run()
        })
      }
    },
    O = new v()
  async function Q() {
    let i = await O.generate()
    return i || null
  }
  _.default.runtime.onMessage.addListener((i) => {
    if (i.type === 'getArkoseToken') {
      return Q().then((s) => {
        console.log('🚀 ~ file: arkose.js:550 ~ _.default.runtime.onMessage.addListener ~ s:', s)
        return s
      })
    }

    return true
  })

  async function getToken() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Q()
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      }, 0.1 * 1000)
    })
  }

  var port = _.default.runtime.connect({ name: 'getArkoseToken' })
  // port.postMessage({ type: 'request' })

  port.onMessage.addListener(async (msg) => {
    if (msg.type === 'get') {
      try {
        const result = await getToken()
        port.postMessage({ status: 'success', type: 'token', token: result })
      } catch (error) {
        port.postMessage({ status: 'error', type: 'token', token: error })
      }
    }

    return true
  })
})()
