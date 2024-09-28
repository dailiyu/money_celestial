if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const ON_SHOW = "onShow";
  const ON_LOAD = "onLoad";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onShow = /* @__PURE__ */ createHook(ON_SHOW);
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const fontData = [
    {
      "font_class": "arrow-down",
      "unicode": ""
    },
    {
      "font_class": "arrow-left",
      "unicode": ""
    },
    {
      "font_class": "arrow-right",
      "unicode": ""
    },
    {
      "font_class": "arrow-up",
      "unicode": ""
    },
    {
      "font_class": "auth",
      "unicode": ""
    },
    {
      "font_class": "auth-filled",
      "unicode": ""
    },
    {
      "font_class": "back",
      "unicode": ""
    },
    {
      "font_class": "bars",
      "unicode": ""
    },
    {
      "font_class": "calendar",
      "unicode": ""
    },
    {
      "font_class": "calendar-filled",
      "unicode": ""
    },
    {
      "font_class": "camera",
      "unicode": ""
    },
    {
      "font_class": "camera-filled",
      "unicode": ""
    },
    {
      "font_class": "cart",
      "unicode": ""
    },
    {
      "font_class": "cart-filled",
      "unicode": ""
    },
    {
      "font_class": "chat",
      "unicode": ""
    },
    {
      "font_class": "chat-filled",
      "unicode": ""
    },
    {
      "font_class": "chatboxes",
      "unicode": ""
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": ""
    },
    {
      "font_class": "chatbubble",
      "unicode": ""
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": ""
    },
    {
      "font_class": "checkbox",
      "unicode": ""
    },
    {
      "font_class": "checkbox-filled",
      "unicode": ""
    },
    {
      "font_class": "checkmarkempty",
      "unicode": ""
    },
    {
      "font_class": "circle",
      "unicode": ""
    },
    {
      "font_class": "circle-filled",
      "unicode": ""
    },
    {
      "font_class": "clear",
      "unicode": ""
    },
    {
      "font_class": "close",
      "unicode": ""
    },
    {
      "font_class": "closeempty",
      "unicode": ""
    },
    {
      "font_class": "cloud-download",
      "unicode": ""
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": ""
    },
    {
      "font_class": "color",
      "unicode": ""
    },
    {
      "font_class": "color-filled",
      "unicode": ""
    },
    {
      "font_class": "compose",
      "unicode": ""
    },
    {
      "font_class": "contact",
      "unicode": ""
    },
    {
      "font_class": "contact-filled",
      "unicode": ""
    },
    {
      "font_class": "down",
      "unicode": ""
    },
    {
      "font_class": "bottom",
      "unicode": ""
    },
    {
      "font_class": "download",
      "unicode": ""
    },
    {
      "font_class": "download-filled",
      "unicode": ""
    },
    {
      "font_class": "email",
      "unicode": ""
    },
    {
      "font_class": "email-filled",
      "unicode": ""
    },
    {
      "font_class": "eye",
      "unicode": ""
    },
    {
      "font_class": "eye-filled",
      "unicode": ""
    },
    {
      "font_class": "eye-slash",
      "unicode": ""
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": ""
    },
    {
      "font_class": "fire",
      "unicode": ""
    },
    {
      "font_class": "fire-filled",
      "unicode": ""
    },
    {
      "font_class": "flag",
      "unicode": ""
    },
    {
      "font_class": "flag-filled",
      "unicode": ""
    },
    {
      "font_class": "folder-add",
      "unicode": ""
    },
    {
      "font_class": "folder-add-filled",
      "unicode": ""
    },
    {
      "font_class": "font",
      "unicode": ""
    },
    {
      "font_class": "forward",
      "unicode": ""
    },
    {
      "font_class": "gear",
      "unicode": ""
    },
    {
      "font_class": "gear-filled",
      "unicode": ""
    },
    {
      "font_class": "gift",
      "unicode": ""
    },
    {
      "font_class": "gift-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-down",
      "unicode": ""
    },
    {
      "font_class": "hand-down-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-up",
      "unicode": ""
    },
    {
      "font_class": "hand-up-filled",
      "unicode": ""
    },
    {
      "font_class": "headphones",
      "unicode": ""
    },
    {
      "font_class": "heart",
      "unicode": ""
    },
    {
      "font_class": "heart-filled",
      "unicode": ""
    },
    {
      "font_class": "help",
      "unicode": ""
    },
    {
      "font_class": "help-filled",
      "unicode": ""
    },
    {
      "font_class": "home",
      "unicode": ""
    },
    {
      "font_class": "home-filled",
      "unicode": ""
    },
    {
      "font_class": "image",
      "unicode": ""
    },
    {
      "font_class": "image-filled",
      "unicode": ""
    },
    {
      "font_class": "images",
      "unicode": ""
    },
    {
      "font_class": "images-filled",
      "unicode": ""
    },
    {
      "font_class": "info",
      "unicode": ""
    },
    {
      "font_class": "info-filled",
      "unicode": ""
    },
    {
      "font_class": "left",
      "unicode": ""
    },
    {
      "font_class": "link",
      "unicode": ""
    },
    {
      "font_class": "list",
      "unicode": ""
    },
    {
      "font_class": "location",
      "unicode": ""
    },
    {
      "font_class": "location-filled",
      "unicode": ""
    },
    {
      "font_class": "locked",
      "unicode": ""
    },
    {
      "font_class": "locked-filled",
      "unicode": ""
    },
    {
      "font_class": "loop",
      "unicode": ""
    },
    {
      "font_class": "mail-open",
      "unicode": ""
    },
    {
      "font_class": "mail-open-filled",
      "unicode": ""
    },
    {
      "font_class": "map",
      "unicode": ""
    },
    {
      "font_class": "map-filled",
      "unicode": ""
    },
    {
      "font_class": "map-pin",
      "unicode": ""
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": ""
    },
    {
      "font_class": "medal",
      "unicode": ""
    },
    {
      "font_class": "medal-filled",
      "unicode": ""
    },
    {
      "font_class": "mic",
      "unicode": ""
    },
    {
      "font_class": "mic-filled",
      "unicode": ""
    },
    {
      "font_class": "micoff",
      "unicode": ""
    },
    {
      "font_class": "micoff-filled",
      "unicode": ""
    },
    {
      "font_class": "minus",
      "unicode": ""
    },
    {
      "font_class": "minus-filled",
      "unicode": ""
    },
    {
      "font_class": "more",
      "unicode": ""
    },
    {
      "font_class": "more-filled",
      "unicode": ""
    },
    {
      "font_class": "navigate",
      "unicode": ""
    },
    {
      "font_class": "navigate-filled",
      "unicode": ""
    },
    {
      "font_class": "notification",
      "unicode": ""
    },
    {
      "font_class": "notification-filled",
      "unicode": ""
    },
    {
      "font_class": "paperclip",
      "unicode": ""
    },
    {
      "font_class": "paperplane",
      "unicode": ""
    },
    {
      "font_class": "paperplane-filled",
      "unicode": ""
    },
    {
      "font_class": "person",
      "unicode": ""
    },
    {
      "font_class": "person-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": ""
    },
    {
      "font_class": "phone",
      "unicode": ""
    },
    {
      "font_class": "phone-filled",
      "unicode": ""
    },
    {
      "font_class": "plus",
      "unicode": ""
    },
    {
      "font_class": "plus-filled",
      "unicode": ""
    },
    {
      "font_class": "plusempty",
      "unicode": ""
    },
    {
      "font_class": "pulldown",
      "unicode": ""
    },
    {
      "font_class": "pyq",
      "unicode": ""
    },
    {
      "font_class": "qq",
      "unicode": ""
    },
    {
      "font_class": "redo",
      "unicode": ""
    },
    {
      "font_class": "redo-filled",
      "unicode": ""
    },
    {
      "font_class": "refresh",
      "unicode": ""
    },
    {
      "font_class": "refresh-filled",
      "unicode": ""
    },
    {
      "font_class": "refreshempty",
      "unicode": ""
    },
    {
      "font_class": "reload",
      "unicode": ""
    },
    {
      "font_class": "right",
      "unicode": ""
    },
    {
      "font_class": "scan",
      "unicode": ""
    },
    {
      "font_class": "search",
      "unicode": ""
    },
    {
      "font_class": "settings",
      "unicode": ""
    },
    {
      "font_class": "settings-filled",
      "unicode": ""
    },
    {
      "font_class": "shop",
      "unicode": ""
    },
    {
      "font_class": "shop-filled",
      "unicode": ""
    },
    {
      "font_class": "smallcircle",
      "unicode": ""
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": ""
    },
    {
      "font_class": "sound",
      "unicode": ""
    },
    {
      "font_class": "sound-filled",
      "unicode": ""
    },
    {
      "font_class": "spinner-cycle",
      "unicode": ""
    },
    {
      "font_class": "staff",
      "unicode": ""
    },
    {
      "font_class": "staff-filled",
      "unicode": ""
    },
    {
      "font_class": "star",
      "unicode": ""
    },
    {
      "font_class": "star-filled",
      "unicode": ""
    },
    {
      "font_class": "starhalf",
      "unicode": ""
    },
    {
      "font_class": "trash",
      "unicode": ""
    },
    {
      "font_class": "trash-filled",
      "unicode": ""
    },
    {
      "font_class": "tune",
      "unicode": ""
    },
    {
      "font_class": "tune-filled",
      "unicode": ""
    },
    {
      "font_class": "undo",
      "unicode": ""
    },
    {
      "font_class": "undo-filled",
      "unicode": ""
    },
    {
      "font_class": "up",
      "unicode": ""
    },
    {
      "font_class": "top",
      "unicode": ""
    },
    {
      "font_class": "upload",
      "unicode": ""
    },
    {
      "font_class": "upload-filled",
      "unicode": ""
    },
    {
      "font_class": "videocam",
      "unicode": ""
    },
    {
      "font_class": "videocam-filled",
      "unicode": ""
    },
    {
      "font_class": "vip",
      "unicode": ""
    },
    {
      "font_class": "vip-filled",
      "unicode": ""
    },
    {
      "font_class": "wallet",
      "unicode": ""
    },
    {
      "font_class": "wallet-filled",
      "unicode": ""
    },
    {
      "font_class": "weibo",
      "unicode": ""
    },
    {
      "font_class": "weixin",
      "unicode": ""
    }
  ];
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$16 = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v2) => v2.font_class === this.type);
        if (code) {
          return code.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle($options.styleObj),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_1$5 = /* @__PURE__ */ _export_sfc(_sfc_main$16, [["render", _sfc_render$l], ["__scopeId", "data-v-d31e1c47"], ["__file", "/Users/daily/Desktop/d9/money_celestial/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const _sfc_main$15 = {
    name: "navBar",
    data() {
      return {
        statusBarHeight: ""
      };
    },
    props: {
      title: {
        type: String
      },
      iconShow: {
        type: Boolean,
        default: true
      },
      bgc: {
        type: String,
        default: "#FC5908"
      },
      isShow: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.statusBarHeight = uni.getWindowInfo().statusBarHeight + "px";
    },
    methods: {
      back() {
        uni.navigateBack();
      },
      clickRight() {
        this.$emit("clickRight");
      }
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$5);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        style: vue.normalizeStyle({ "padding-top": "calc(" + $data.statusBarHeight + " + 60rpx)", "backgroundColor": $props.bgc }),
        class: "nav_bar"
      },
      [
        vue.createElementVNode("view", { class: "nav_item" }, [
          $props.iconShow ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            type: "left",
            size: "20",
            color: "#fff",
            onClick: $options.back
          }, null, 8, ["onClick"])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode(
            "view",
            { class: "" },
            vue.toDisplayString($props.title),
            1
            /* TEXT */
          ),
          vue.createCommentVNode(' <view class="skip" v-if="isSkip" @click="skip">\n				跳过\n			</view> ')
        ])
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["render", _sfc_render$k], ["__scopeId", "data-v-fba290dc"], ["__file", "/Users/daily/Desktop/d9/money_celestial/components/navBar/navBar.vue"]]);
  const _imports_0$g = "/static/home/cart.png";
  const _imports_1$8 = "/static/home/bag.png";
  const _imports_2$4 = "/static/home/star.png";
  const _imports_3$2 = "/static/home/profile.png";
  const _imports_1$7 = "/static/locate_orange.png";
  const _imports_5$1 = "/static/home/shop.jpg";
  const _imports_6$1 = "/static/home/benefit.jpg";
  const _imports_7$1 = "/static/home/earn.jpg";
  var isVue2 = false;
  function set(target, key, val) {
    if (Array.isArray(target)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    target[key] = val;
    return val;
  }
  function del(target, key) {
    if (Array.isArray(target)) {
      target.splice(key, 1);
      return;
    }
    delete target[key];
  }
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  let supported;
  let perf;
  function isPerformanceSupported() {
    var _a;
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
      supported = true;
      perf = global.perf_hooks.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
  }
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = Object.assign({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e2) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e2) {
          }
          currentSettings = value;
        },
        now() {
          return now();
        }
      };
      if (hook) {
        hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
          if (pluginId === this.plugin.id) {
            this.fallbacks.setSettings(value);
          }
        });
      }
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor: descriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * pinia v2.1.7
   * (c) 2023 Eduardo San Martin Morote
   * @license MIT
   */
  let activePinia;
  const setActivePinia = (pinia) => activePinia = pinia;
  const piniaSymbol = Symbol("pinia");
  function isPlainObject(o2) {
    return o2 && typeof o2 === "object" && Object.prototype.toString.call(o2) === "[object Object]" && typeof o2.toJSON !== "function";
  }
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  const IS_CLIENT = typeof window !== "undefined";
  const USE_DEVTOOLS = IS_CLIENT;
  const _global = /* @__PURE__ */ (() => typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : typeof globalThis === "object" ? globalThis : { HTMLElement: null })();
  function bom(blob, { autoBom = false } = {}) {
    if (autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
      return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
    }
    return blob;
  }
  function download(url, name, opts) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.onload = function() {
      saveAs(xhr.response, name, opts);
    };
    xhr.onerror = function() {
      console.error("could not download file");
    };
    xhr.send();
  }
  function corsEnabled(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", url, false);
    try {
      xhr.send();
    } catch (e2) {
    }
    return xhr.status >= 200 && xhr.status <= 299;
  }
  function click(node) {
    try {
      node.dispatchEvent(new MouseEvent("click"));
    } catch (e2) {
      const evt = document.createEvent("MouseEvents");
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
      node.dispatchEvent(evt);
    }
  }
  const _navigator = typeof navigator === "object" ? navigator : { userAgent: "" };
  const isMacOSWebView = /* @__PURE__ */ (() => /Macintosh/.test(_navigator.userAgent) && /AppleWebKit/.test(_navigator.userAgent) && !/Safari/.test(_navigator.userAgent))();
  const saveAs = !IS_CLIENT ? () => {
  } : (
    // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
    typeof HTMLAnchorElement !== "undefined" && "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? downloadSaveAs : (
      // Use msSaveOrOpenBlob as a second approach
      "msSaveOrOpenBlob" in _navigator ? msSaveAs : (
        // Fallback to using FileReader and a popup
        fileSaverSaveAs
      )
    )
  );
  function downloadSaveAs(blob, name = "download", opts) {
    const a2 = document.createElement("a");
    a2.download = name;
    a2.rel = "noopener";
    if (typeof blob === "string") {
      a2.href = blob;
      if (a2.origin !== location.origin) {
        if (corsEnabled(a2.href)) {
          download(blob, name, opts);
        } else {
          a2.target = "_blank";
          click(a2);
        }
      } else {
        click(a2);
      }
    } else {
      a2.href = URL.createObjectURL(blob);
      setTimeout(function() {
        URL.revokeObjectURL(a2.href);
      }, 4e4);
      setTimeout(function() {
        click(a2);
      }, 0);
    }
  }
  function msSaveAs(blob, name = "download", opts) {
    if (typeof blob === "string") {
      if (corsEnabled(blob)) {
        download(blob, name, opts);
      } else {
        const a2 = document.createElement("a");
        a2.href = blob;
        a2.target = "_blank";
        setTimeout(function() {
          click(a2);
        });
      }
    } else {
      navigator.msSaveOrOpenBlob(bom(blob, opts), name);
    }
  }
  function fileSaverSaveAs(blob, name, opts, popup) {
    popup = popup || open("", "_blank");
    if (popup) {
      popup.document.title = popup.document.body.innerText = "downloading...";
    }
    if (typeof blob === "string")
      return download(blob, name, opts);
    const force = blob.type === "application/octet-stream";
    const isSafari = /constructor/i.test(String(_global.HTMLElement)) || "safari" in _global;
    const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
      const reader = new FileReader();
      reader.onloadend = function() {
        let url = reader.result;
        if (typeof url !== "string") {
          popup = null;
          throw new Error("Wrong reader.result type");
        }
        url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, "data:attachment/file;");
        if (popup) {
          popup.location.href = url;
        } else {
          location.assign(url);
        }
        popup = null;
      };
      reader.readAsDataURL(blob);
    } else {
      const url = URL.createObjectURL(blob);
      if (popup)
        popup.location.assign(url);
      else
        location.href = url;
      popup = null;
      setTimeout(function() {
        URL.revokeObjectURL(url);
      }, 4e4);
    }
  }
  function toastMessage(message, type) {
    const piniaMessage = "🍍 " + message;
    if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
      __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
    } else if (type === "error") {
      console.error(piniaMessage);
    } else if (type === "warn") {
      console.warn(piniaMessage);
    } else {
      console.log(piniaMessage);
    }
  }
  function isPinia(o2) {
    return "_a" in o2 && "install" in o2;
  }
  function checkClipboardAccess() {
    if (!("clipboard" in navigator)) {
      toastMessage(`Your browser doesn't support the Clipboard API`, "error");
      return true;
    }
  }
  function checkNotFocusedError(error) {
    if (error instanceof Error && error.message.toLowerCase().includes("document is not focused")) {
      toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
      return true;
    }
    return false;
  }
  async function actionGlobalCopyState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(pinia.state.value));
      toastMessage("Global state copied to clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalPasteState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      loadStoresState(pinia, JSON.parse(await navigator.clipboard.readText()));
      toastMessage("Global state pasted from clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalSaveState(pinia) {
    try {
      saveAs(new Blob([JSON.stringify(pinia.state.value)], {
        type: "text/plain;charset=utf-8"
      }), "pinia-state.json");
    } catch (error) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  let fileInput;
  function getFileOpener() {
    if (!fileInput) {
      fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".json";
    }
    function openFile() {
      return new Promise((resolve, reject) => {
        fileInput.onchange = async () => {
          const files = fileInput.files;
          if (!files)
            return resolve(null);
          const file = files.item(0);
          if (!file)
            return resolve(null);
          return resolve({ text: await file.text(), file });
        };
        fileInput.oncancel = () => resolve(null);
        fileInput.onerror = reject;
        fileInput.click();
      });
    }
    return openFile;
  }
  async function actionGlobalOpenStateFile(pinia) {
    try {
      const open2 = getFileOpener();
      const result = await open2();
      if (!result)
        return;
      const { text, file } = result;
      loadStoresState(pinia, JSON.parse(text));
      toastMessage(`Global state imported from "${file.name}".`);
    } catch (error) {
      toastMessage(`Failed to import the state from JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  function loadStoresState(pinia, state) {
    for (const key in state) {
      const storeState = pinia.state.value[key];
      if (storeState) {
        Object.assign(storeState, state[key]);
      } else {
        pinia.state.value[key] = state[key];
      }
    }
  }
  function formatDisplay(display) {
    return {
      _custom: {
        display
      }
    };
  }
  const PINIA_ROOT_LABEL = "🍍 Pinia (root)";
  const PINIA_ROOT_ID = "_root";
  function formatStoreForInspectorTree(store) {
    return isPinia(store) ? {
      id: PINIA_ROOT_ID,
      label: PINIA_ROOT_LABEL
    } : {
      id: store.$id,
      label: store.$id
    };
  }
  function formatStoreForInspectorState(store) {
    if (isPinia(store)) {
      const storeNames = Array.from(store._s.keys());
      const storeMap = store._s;
      const state2 = {
        state: storeNames.map((storeId) => ({
          editable: true,
          key: storeId,
          value: store.state.value[storeId]
        })),
        getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
          const store2 = storeMap.get(id);
          return {
            editable: false,
            key: id,
            value: store2._getters.reduce((getters, key) => {
              getters[key] = store2[key];
              return getters;
            }, {})
          };
        })
      };
      return state2;
    }
    const state = {
      state: Object.keys(store.$state).map((key) => ({
        editable: true,
        key,
        value: store.$state[key]
      }))
    };
    if (store._getters && store._getters.length) {
      state.getters = store._getters.map((getterName) => ({
        editable: false,
        key: getterName,
        value: store[getterName]
      }));
    }
    if (store._customProperties.size) {
      state.customProperties = Array.from(store._customProperties).map((key) => ({
        editable: true,
        key,
        value: store[key]
      }));
    }
    return state;
  }
  function formatEventData(events) {
    if (!events)
      return {};
    if (Array.isArray(events)) {
      return events.reduce((data, event) => {
        data.keys.push(event.key);
        data.operations.push(event.type);
        data.oldValue[event.key] = event.oldValue;
        data.newValue[event.key] = event.newValue;
        return data;
      }, {
        oldValue: {},
        keys: [],
        operations: [],
        newValue: {}
      });
    } else {
      return {
        operation: formatDisplay(events.type),
        key: formatDisplay(events.key),
        oldValue: events.oldValue,
        newValue: events.newValue
      };
    }
  }
  function formatMutationType(type) {
    switch (type) {
      case MutationType.direct:
        return "mutation";
      case MutationType.patchFunction:
        return "$patch";
      case MutationType.patchObject:
        return "$patch";
      default:
        return "unknown";
    }
  }
  let isTimelineActive = true;
  const componentStateTypes = [];
  const MUTATIONS_LAYER_ID = "pinia:mutations";
  const INSPECTOR_ID = "pinia";
  const { assign: assign$1 } = Object;
  const getStoreType = (id) => "🍍 " + id;
  function registerPiniaDevtools(app, pinia) {
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app
    }, (api) => {
      if (typeof api.now !== "function") {
        toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
      }
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: `Pinia 🍍`,
        color: 15064968
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Pinia 🍍",
        icon: "storage",
        treeFilterPlaceholder: "Search stores",
        actions: [
          {
            icon: "content_copy",
            action: () => {
              actionGlobalCopyState(pinia);
            },
            tooltip: "Serialize and copy the state"
          },
          {
            icon: "content_paste",
            action: async () => {
              await actionGlobalPasteState(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Replace the state with the content of your clipboard"
          },
          {
            icon: "save",
            action: () => {
              actionGlobalSaveState(pinia);
            },
            tooltip: "Save the state as a JSON file"
          },
          {
            icon: "folder_open",
            action: async () => {
              await actionGlobalOpenStateFile(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Import the state from a JSON file"
          }
        ],
        nodeActions: [
          {
            icon: "restore",
            tooltip: 'Reset the state (with "$reset")',
            action: (nodeId) => {
              const store = pinia._s.get(nodeId);
              if (!store) {
                toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
              } else if (typeof store.$reset !== "function") {
                toastMessage(`Cannot reset "${nodeId}" store because it doesn't have a "$reset" method implemented.`, "warn");
              } else {
                store.$reset();
                toastMessage(`Store "${nodeId}" reset.`);
              }
            }
          }
        ]
      });
      api.on.inspectComponent((payload, ctx) => {
        const proxy = payload.componentInstance && payload.componentInstance.proxy;
        if (proxy && proxy._pStores) {
          const piniaStores = payload.componentInstance.proxy._pStores;
          Object.values(piniaStores).forEach((store) => {
            payload.instanceData.state.push({
              type: getStoreType(store.$id),
              key: "state",
              editable: true,
              value: store._isOptionsAPI ? {
                _custom: {
                  value: vue.toRaw(store.$state),
                  actions: [
                    {
                      icon: "restore",
                      tooltip: "Reset the state of this store",
                      action: () => store.$reset()
                    }
                  ]
                }
              } : (
                // NOTE: workaround to unwrap transferred refs
                Object.keys(store.$state).reduce((state, key) => {
                  state[key] = store.$state[key];
                  return state;
                }, {})
              )
            });
            if (store._getters && store._getters.length) {
              payload.instanceData.state.push({
                type: getStoreType(store.$id),
                key: "getters",
                editable: false,
                value: store._getters.reduce((getters, key) => {
                  try {
                    getters[key] = store[key];
                  } catch (error) {
                    getters[key] = error;
                  }
                  return getters;
                }, {})
              });
            }
          });
        }
      });
      api.on.getInspectorTree((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          let stores = [pinia];
          stores = stores.concat(Array.from(pinia._s.values()));
          payload.rootNodes = (payload.filter ? stores.filter((store) => "$id" in store ? store.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
        }
      });
      api.on.getInspectorState((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return;
          }
          if (inspectedStore) {
            payload.state = formatStoreForInspectorState(inspectedStore);
          }
        }
      });
      api.on.editInspectorState((payload, ctx) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return toastMessage(`store "${payload.nodeId}" not found`, "error");
          }
          const { path } = payload;
          if (!isPinia(inspectedStore)) {
            if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
              path.unshift("$state");
            }
          } else {
            path.unshift("state");
          }
          isTimelineActive = false;
          payload.set(inspectedStore, path, payload.state.value);
          isTimelineActive = true;
        }
      });
      api.on.editComponentState((payload) => {
        if (payload.type.startsWith("🍍")) {
          const storeId = payload.type.replace(/^🍍\s*/, "");
          const store = pinia._s.get(storeId);
          if (!store) {
            return toastMessage(`store "${storeId}" not found`, "error");
          }
          const { path } = payload;
          if (path[0] !== "state") {
            return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
          }
          path[0] = "$state";
          isTimelineActive = false;
          payload.set(store, path, payload.state.value);
          isTimelineActive = true;
        }
      });
    });
  }
  function addStoreToDevtools(app, store) {
    if (!componentStateTypes.includes(getStoreType(store.$id))) {
      componentStateTypes.push(getStoreType(store.$id));
    }
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app,
      settings: {
        logStoreChanges: {
          label: "Notify about new/deleted stores",
          type: "boolean",
          defaultValue: true
        }
        // useEmojis: {
        //   label: 'Use emojis in messages ⚡️',
        //   type: 'boolean',
        //   defaultValue: true,
        // },
      }
    }, (api) => {
      const now2 = typeof api.now === "function" ? api.now.bind(api) : Date.now;
      store.$onAction(({ after, onError, name, args }) => {
        const groupId = runningActionId++;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🛫 " + name,
            subtitle: "start",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args
            },
            groupId
          }
        });
        after((result) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              title: "🛬 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                result
              },
              groupId
            }
          });
        });
        onError((error) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              logType: "error",
              title: "💥 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                error
              },
              groupId
            }
          });
        });
      }, true);
      store._customProperties.forEach((name) => {
        vue.watch(() => vue.unref(store[name]), (newValue, oldValue) => {
          api.notifyComponentUpdate();
          api.sendInspectorState(INSPECTOR_ID);
          if (isTimelineActive) {
            api.addTimelineEvent({
              layerId: MUTATIONS_LAYER_ID,
              event: {
                time: now2(),
                title: "Change",
                subtitle: name,
                data: {
                  newValue,
                  oldValue
                },
                groupId: activeAction
              }
            });
          }
        }, { deep: true });
      });
      store.$subscribe(({ events, type }, state) => {
        api.notifyComponentUpdate();
        api.sendInspectorState(INSPECTOR_ID);
        if (!isTimelineActive)
          return;
        const eventData = {
          time: now2(),
          title: formatMutationType(type),
          data: assign$1({ store: formatDisplay(store.$id) }, formatEventData(events)),
          groupId: activeAction
        };
        if (type === MutationType.patchFunction) {
          eventData.subtitle = "⤵️";
        } else if (type === MutationType.patchObject) {
          eventData.subtitle = "🧩";
        } else if (events && !Array.isArray(events)) {
          eventData.subtitle = events.type;
        }
        if (events) {
          eventData.data["rawEvent(s)"] = {
            _custom: {
              display: "DebuggerEvent",
              type: "object",
              tooltip: "raw DebuggerEvent[]",
              value: events
            }
          };
        }
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: eventData
        });
      }, { detached: true, flush: "sync" });
      const hotUpdate = store._hotUpdate;
      store._hotUpdate = vue.markRaw((newStore) => {
        hotUpdate(newStore);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🔥 " + store.$id,
            subtitle: "HMR update",
            data: {
              store: formatDisplay(store.$id),
              info: formatDisplay(`HMR update`)
            }
          }
        });
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
      });
      const { $dispose } = store;
      store.$dispose = () => {
        $dispose();
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.getSettings().logStoreChanges && toastMessage(`Disposed "${store.$id}" store 🗑`);
      };
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.getSettings().logStoreChanges && toastMessage(`"${store.$id}" store installed 🆕`);
    });
  }
  let runningActionId = 0;
  let activeAction;
  function patchActionForGrouping(store, actionNames, wrapWithProxy) {
    const actions = actionNames.reduce((storeActions, actionName) => {
      storeActions[actionName] = vue.toRaw(store)[actionName];
      return storeActions;
    }, {});
    for (const actionName in actions) {
      store[actionName] = function() {
        const _actionId = runningActionId;
        const trackedStore = wrapWithProxy ? new Proxy(store, {
          get(...args) {
            activeAction = _actionId;
            return Reflect.get(...args);
          },
          set(...args) {
            activeAction = _actionId;
            return Reflect.set(...args);
          }
        }) : store;
        activeAction = _actionId;
        const retValue = actions[actionName].apply(trackedStore, arguments);
        activeAction = void 0;
        return retValue;
      };
    }
  }
  function devtoolsPlugin({ app, store, options }) {
    if (store.$id.startsWith("__hot:")) {
      return;
    }
    store._isOptionsAPI = !!options.state;
    patchActionForGrouping(store, Object.keys(options.actions), store._isOptionsAPI);
    const originalHotUpdate = store._hotUpdate;
    vue.toRaw(store)._hotUpdate = function(newStore) {
      originalHotUpdate.apply(this, arguments);
      patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions), !!store._isOptionsAPI);
    };
    addStoreToDevtools(
      app,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      store
    );
  }
  function createPinia() {
    const scope = vue.effectScope(true);
    const state = scope.run(() => vue.ref({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia = vue.markRaw({
      install(app) {
        setActivePinia(pinia);
        {
          pinia._a = app;
          app.provide(piniaSymbol, pinia);
          app.config.globalProperties.$pinia = pinia;
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(app, pinia);
          }
          toBeInstalled.forEach((plugin) => _p.push(plugin));
          toBeInstalled = [];
        }
      },
      use(plugin) {
        if (!this._a && !isVue2) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      // it's actually undefined here
      // @ts-expect-error
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
      pinia.use(devtoolsPlugin);
    }
    return pinia;
  }
  function patchObject(newState, oldState) {
    for (const key in oldState) {
      const subPatch = oldState[key];
      if (!(key in newState)) {
        continue;
      }
      const targetValue = newState[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        newState[key] = patchObject(targetValue, subPatch);
      } else {
        {
          newState[key] = subPatch;
        }
      }
    }
    return newState;
  }
  const noop = () => {
  };
  function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
    subscriptions.push(callback);
    const removeSubscription = () => {
      const idx = subscriptions.indexOf(callback);
      if (idx > -1) {
        subscriptions.splice(idx, 1);
        onCleanup();
      }
    };
    if (!detached && vue.getCurrentScope()) {
      vue.onScopeDispose(removeSubscription);
    }
    return removeSubscription;
  }
  function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
      callback(...args);
    });
  }
  const fallbackRunWithContext = (fn) => fn();
  function mergeReactiveObjects(target, patchToApply) {
    if (target instanceof Map && patchToApply instanceof Map) {
      patchToApply.forEach((value, key) => target.set(key, value));
    }
    if (target instanceof Set && patchToApply instanceof Set) {
      patchToApply.forEach(target.add, target);
    }
    for (const key in patchToApply) {
      if (!patchToApply.hasOwnProperty(key))
        continue;
      const subPatch = patchToApply[key];
      const targetValue = target[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        target[key] = mergeReactiveObjects(targetValue, subPatch);
      } else {
        target[key] = subPatch;
      }
    }
    return target;
  }
  const skipHydrateSymbol = Symbol("pinia:skipHydration");
  function shouldHydrate(obj) {
    return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
  }
  const { assign } = Object;
  function isComputed(o2) {
    return !!(vue.isRef(o2) && o2.effect);
  }
  function createOptionsStore(id, options, pinia, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia.state.value[id];
    let store;
    function setup() {
      if (!initialState && !hot) {
        {
          pinia.state.value[id] = state ? state() : {};
        }
      }
      const localState = hot ? (
        // use ref() to unwrap refs inside state TODO: check if this is still necessary
        vue.toRefs(vue.ref(state ? state() : {}).value)
      ) : vue.toRefs(pinia.state.value[id]);
      return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
        if (name in localState) {
          console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
        }
        computedGetters[name] = vue.markRaw(vue.computed(() => {
          setActivePinia(pinia);
          const store2 = pinia._s.get(id);
          return getters[name].call(store2, store2);
        }));
        return computedGetters;
      }, {}));
    }
    store = createSetupStore(id, setup, options, pinia, hot, true);
    return store;
  }
  function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({ actions: {} }, options);
    if (!pinia._e.active) {
      throw new Error("Pinia destroyed");
    }
    const $subscribeOptions = {
      deep: true
      // flush: 'post',
    };
    {
      $subscribeOptions.onTrigger = (event) => {
        if (isListening) {
          debuggerEvents = event;
        } else if (isListening == false && !store._hotUpdating) {
          if (Array.isArray(debuggerEvents)) {
            debuggerEvents.push(event);
          } else {
            console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.");
          }
        }
      };
    }
    let isListening;
    let isSyncListening;
    let subscriptions = [];
    let actionSubscriptions = [];
    let debuggerEvents;
    const initialState = pinia.state.value[$id];
    if (!isOptionsStore && !initialState && !hot) {
      {
        pinia.state.value[$id] = {};
      }
    }
    const hotState = vue.ref({});
    let activeListener;
    function $patch(partialStateOrMutator) {
      let subscriptionMutation;
      isListening = isSyncListening = false;
      {
        debuggerEvents = [];
      }
      if (typeof partialStateOrMutator === "function") {
        partialStateOrMutator(pinia.state.value[$id]);
        subscriptionMutation = {
          type: MutationType.patchFunction,
          storeId: $id,
          events: debuggerEvents
        };
      } else {
        mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
        subscriptionMutation = {
          type: MutationType.patchObject,
          payload: partialStateOrMutator,
          storeId: $id,
          events: debuggerEvents
        };
      }
      const myListenerId = activeListener = Symbol();
      vue.nextTick().then(() => {
        if (activeListener === myListenerId) {
          isListening = true;
        }
      });
      isSyncListening = true;
      triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
    }
    const $reset = isOptionsStore ? function $reset2() {
      const { state } = options;
      const newState = state ? state() : {};
      this.$patch(($state) => {
        assign($state, newState);
      });
    } : (
      /* istanbul ignore next */
      () => {
        throw new Error(`🍍: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
      }
    );
    function $dispose() {
      scope.stop();
      subscriptions = [];
      actionSubscriptions = [];
      pinia._s.delete($id);
    }
    function wrapAction(name, action) {
      return function() {
        setActivePinia(pinia);
        const args = Array.from(arguments);
        const afterCallbackList = [];
        const onErrorCallbackList = [];
        function after(callback) {
          afterCallbackList.push(callback);
        }
        function onError(callback) {
          onErrorCallbackList.push(callback);
        }
        triggerSubscriptions(actionSubscriptions, {
          args,
          name,
          store,
          after,
          onError
        });
        let ret;
        try {
          ret = action.apply(this && this.$id === $id ? this : store, args);
        } catch (error) {
          triggerSubscriptions(onErrorCallbackList, error);
          throw error;
        }
        if (ret instanceof Promise) {
          return ret.then((value) => {
            triggerSubscriptions(afterCallbackList, value);
            return value;
          }).catch((error) => {
            triggerSubscriptions(onErrorCallbackList, error);
            return Promise.reject(error);
          });
        }
        triggerSubscriptions(afterCallbackList, ret);
        return ret;
      };
    }
    const _hmrPayload = /* @__PURE__ */ vue.markRaw({
      actions: {},
      getters: {},
      state: [],
      hotState
    });
    const partialStore = {
      _p: pinia,
      // _s: scope,
      $id,
      $onAction: addSubscription.bind(null, actionSubscriptions),
      $patch,
      $reset,
      $subscribe(callback, options2 = {}) {
        const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
        const stopWatcher = scope.run(() => vue.watch(() => pinia.state.value[$id], (state) => {
          if (options2.flush === "sync" ? isSyncListening : isListening) {
            callback({
              storeId: $id,
              type: MutationType.direct,
              events: debuggerEvents
            }, state);
          }
        }, assign({}, $subscribeOptions, options2)));
        return removeSubscription;
      },
      $dispose
    };
    const store = vue.reactive(assign(
      {
        _hmrPayload,
        _customProperties: vue.markRaw(/* @__PURE__ */ new Set())
        // devtools custom properties
      },
      partialStore
      // must be added later
      // setupStore
    ));
    pinia._s.set($id, store);
    const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
    const setupStore = runWithContext(() => pinia._e.run(() => (scope = vue.effectScope()).run(setup)));
    for (const key in setupStore) {
      const prop = setupStore[key];
      if (vue.isRef(prop) && !isComputed(prop) || vue.isReactive(prop)) {
        if (hot) {
          set(hotState.value, key, vue.toRef(setupStore, key));
        } else if (!isOptionsStore) {
          if (initialState && shouldHydrate(prop)) {
            if (vue.isRef(prop)) {
              prop.value = initialState[key];
            } else {
              mergeReactiveObjects(prop, initialState[key]);
            }
          }
          {
            pinia.state.value[$id][key] = prop;
          }
        }
        {
          _hmrPayload.state.push(key);
        }
      } else if (typeof prop === "function") {
        const actionValue = hot ? prop : wrapAction(key, prop);
        {
          setupStore[key] = actionValue;
        }
        {
          _hmrPayload.actions[key] = prop;
        }
        optionsForPlugin.actions[key] = prop;
      } else {
        if (isComputed(prop)) {
          _hmrPayload.getters[key] = isOptionsStore ? (
            // @ts-expect-error
            options.getters[key]
          ) : prop;
          if (IS_CLIENT) {
            const getters = setupStore._getters || // @ts-expect-error: same
            (setupStore._getters = vue.markRaw([]));
            getters.push(key);
          }
        }
      }
    }
    {
      assign(store, setupStore);
      assign(vue.toRaw(store), setupStore);
    }
    Object.defineProperty(store, "$state", {
      get: () => hot ? hotState.value : pinia.state.value[$id],
      set: (state) => {
        if (hot) {
          throw new Error("cannot set hotState");
        }
        $patch(($state) => {
          assign($state, state);
        });
      }
    });
    {
      store._hotUpdate = vue.markRaw((newStore) => {
        store._hotUpdating = true;
        newStore._hmrPayload.state.forEach((stateKey) => {
          if (stateKey in store.$state) {
            const newStateTarget = newStore.$state[stateKey];
            const oldStateSource = store.$state[stateKey];
            if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
              patchObject(newStateTarget, oldStateSource);
            } else {
              newStore.$state[stateKey] = oldStateSource;
            }
          }
          set(store, stateKey, vue.toRef(newStore.$state, stateKey));
        });
        Object.keys(store.$state).forEach((stateKey) => {
          if (!(stateKey in newStore.$state)) {
            del(store, stateKey);
          }
        });
        isListening = false;
        isSyncListening = false;
        pinia.state.value[$id] = vue.toRef(newStore._hmrPayload, "hotState");
        isSyncListening = true;
        vue.nextTick().then(() => {
          isListening = true;
        });
        for (const actionName in newStore._hmrPayload.actions) {
          const action = newStore[actionName];
          set(store, actionName, wrapAction(actionName, action));
        }
        for (const getterName in newStore._hmrPayload.getters) {
          const getter = newStore._hmrPayload.getters[getterName];
          const getterValue = isOptionsStore ? (
            // special handling of options api
            vue.computed(() => {
              setActivePinia(pinia);
              return getter.call(store, store);
            })
          ) : getter;
          set(store, getterName, getterValue);
        }
        Object.keys(store._hmrPayload.getters).forEach((key) => {
          if (!(key in newStore._hmrPayload.getters)) {
            del(store, key);
          }
        });
        Object.keys(store._hmrPayload.actions).forEach((key) => {
          if (!(key in newStore._hmrPayload.actions)) {
            del(store, key);
          }
        });
        store._hmrPayload = newStore._hmrPayload;
        store._getters = newStore._getters;
        store._hotUpdating = false;
      });
    }
    if (USE_DEVTOOLS) {
      const nonEnumerable = {
        writable: true,
        configurable: true,
        // avoid warning on devtools trying to display this property
        enumerable: false
      };
      ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p2) => {
        Object.defineProperty(store, p2, assign({ value: store[p2] }, nonEnumerable));
      });
    }
    pinia._p.forEach((extender) => {
      if (USE_DEVTOOLS) {
        const extensions = scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        }));
        Object.keys(extensions || {}).forEach((key) => store._customProperties.add(key));
        assign(store, extensions);
      } else {
        assign(store, scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        })));
      }
    });
    if (store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
      console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
    }
    if (initialState && isOptionsStore && options.hydrate) {
      options.hydrate(store.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store;
  }
  function defineStore(idOrOptions, setup, setupOptions) {
    let id;
    let options;
    const isSetupStore = typeof setup === "function";
    if (typeof idOrOptions === "string") {
      id = idOrOptions;
      options = isSetupStore ? setupOptions : setup;
    } else {
      options = idOrOptions;
      id = idOrOptions.id;
      if (typeof id !== "string") {
        throw new Error(`[🍍]: "defineStore()" must be passed a store id as its first argument.`);
      }
    }
    function useStore(pinia, hot) {
      const hasContext = vue.hasInjectionContext();
      pinia = // in test mode, ignore the argument provided as we can always retrieve a
      // pinia instance with getActivePinia()
      pinia || (hasContext ? vue.inject(piniaSymbol, null) : null);
      if (pinia)
        setActivePinia(pinia);
      if (!activePinia) {
        throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
      }
      pinia = activePinia;
      if (!pinia._s.has(id)) {
        if (isSetupStore) {
          createSetupStore(id, setup, options, pinia);
        } else {
          createOptionsStore(id, options, pinia);
        }
        {
          useStore._pinia = pinia;
        }
      }
      const store = pinia._s.get(id);
      if (hot) {
        const hotId = "__hot:" + id;
        const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
        hot._hotUpdate(newStore);
        delete pinia.state.value[hotId];
        pinia._s.delete(hotId);
      }
      if (IS_CLIENT) {
        const currentInstance = vue.getCurrentInstance();
        if (currentInstance && currentInstance.proxy && // avoid adding stores that are just built for hot module replacement
        !hot) {
          const vm = currentInstance.proxy;
          const cache = "_pStores" in vm ? vm._pStores : vm._pStores = {};
          cache[id] = store;
        }
      }
      return store;
    }
    useStore.$id = id;
    return useStore;
  }
  const TIME_OUT = 6e4;
  const BASE_URL = "https://max.q6z4kzhr.uk/api";
  class Request {
    request(url, method, data) {
      return new Promise((resolve, reject) => {
        const accessToken = uni.getStorageSync("accessToken");
        let headers = {};
        if (accessToken) {
          headers["Authorization"] = `Bearer ${accessToken}`;
          if (url == "/users/register/" && method == "POST") {
            headers = {};
          }
          if (url == "/users/login/" && method == "POST") {
            headers = {};
          }
        }
        uni.request({
          url: BASE_URL + url,
          method: method || "GET",
          timeout: TIME_OUT,
          data,
          header: headers,
          success: (res) => {
            if (res.statusCode === 200 || res.statusCode === 201 || res.statusCode === 404) {
              resolve(res.data);
            } else if (res.statusCode === 401) {
              this.refreshToken().then((newAccessToken) => {
                headers["Authorization"] = `Bearer ${newAccessToken}`;
                uni.request({
                  url: BASE_URL + url,
                  method: method || "GET",
                  timeout: TIME_OUT,
                  data,
                  header: headers,
                  success: (retryRes) => {
                    if (retryRes.statusCode === 200 || retryRes.statusCode === 201) {
                      resolve(retryRes.data);
                    } else {
                      reject(retryRes);
                    }
                  },
                  fail: (retryErr) => {
                    reject(retryErr);
                  }
                });
              }).catch((err) => {
                this.logout();
                reject(err);
              });
            } else {
              reject(res);
            }
          },
          fail: (err) => {
            uni.reLaunch({
              url: "/pages/login/login"
            });
            reject(err);
          }
        });
      });
    }
    // 刷新 Token
    refreshToken() {
      return new Promise((resolve, reject) => {
        const refreshToken = uni.getStorageSync("refreshToken");
        if (!refreshToken) {
          reject(new Error("No refresh token available"));
          return;
        }
        uni.request({
          url: `${BASE_URL}/users/token/refresh/`,
          // 刷新 Token 接口
          method: "POST",
          header: {
            "Authorization": `Bearer ${refreshToken}`
          },
          success: (res) => {
            if (res.statusCode === 200) {
              const { accessToken } = res.data;
              uni.setStorageSync("accessToken", accessToken);
              resolve(accessToken);
            } else {
              reject(new Error("Failed to refresh token"));
            }
          },
          fail: (err) => {
            reject(err);
          }
        });
      });
    }
    // 登出逻辑
    logout() {
      uni.removeStorageSync("accessToken");
      uni.removeStorageSync("refreshToken");
      uni.reLaunch({
        url: "/pages/login/login"
      });
    }
    get(url, params) {
      return this.request(url, "GET", params);
    }
    post(url, data) {
      return this.request(url, "POST", data);
    }
    put(url, data) {
      return this.request(url, "PUT", data);
    }
    patch(url, data) {
      return this.request(url, "PATCH", data);
    }
    delete(url, params) {
      return this.request(url, "DELETE", params);
    }
  }
  const http = new Request();
  const uploadShopImg = (data) => {
    return http.post("/shops/images/create/", data);
  };
  const postMerchantSettleIn = (data) => {
    return http.post("/shops/", data);
  };
  const getShopCategories = () => {
    return http.get("/shops/categories/");
  };
  const getShopInfo = (merchant) => {
    return http.get(`/shops/${merchant}/`);
  };
  const getShopList = () => {
    return http.get("/shops/");
  };
  const calculateDistances = (origins, destinations) => {
    return new Promise((resolve, reject) => {
      const url = `https://apis.map.qq.com/ws/distance/v1/matrix?mode=driving&from=${origins.latitude},${origins.longitude}&key=YQRBZ-P4SKQ-2L55P-4NYXP-XK6TH-LXBVA`;
      const destStr = destinations.map((loc) => `${loc.latitude},${loc.longitude}`).join(";");
      uni.request({
        url: `${url}&to=${destStr}`,
        method: "GET",
        success: (res) => {
          if (res.data.status === 0) {
            const distances = res.data.result.rows[0].elements.map((element) => ({
              distance: element.distance
              // 单位为米
            }));
            resolve(distances);
          } else {
            reject("腾讯地图API错误: " + res.data.message);
          }
        },
        fail: (err) => reject("请求失败: " + err)
      });
    });
  };
  const usePublicStore = defineStore("public", {
    state: () => {
      return {
        cateGoryList: [],
        merchantList: [],
        storeList: [],
        ascShopList: [],
        descShopList: []
      };
    },
    actions: {
      async getCateGoryListAction() {
        const res = await getShopCategories();
        uni.setStorageSync("shopCategories", res.results);
        formatAppLog("log", "at store/public.js:24", res.results);
        this.cateGoryList = res.results;
      },
      async getMerchantListAction() {
        const res = await getMerchantList();
        this.merchantList = (res == null ? void 0 : res.results) || [];
      },
      async getStoreListAction() {
        await getShopList();
        await uni.getStorageSync("address_info");
      },
      async fetchAllDataAction() {
        this.getCateGoryListAction();
        this.getStoreListAction();
      }
    }
  });
  const getUerAccountMessage = async (phone_number) => {
    return http.get(`/users/profile/${phone_number}/`);
  };
  const postRegister = async (phone_number, password) => {
    return http.post("/users/register/", {
      phone_number,
      password
    });
  };
  const changeUserInfo = async (userInfo) => {
    return http.put(`/users/profile/${userInfo.phone_number}/`, userInfo);
  };
  const postProfileLogin = async (phone_number, password) => {
    return http.post("/users/login/", {
      phone_number,
      password
    });
  };
  function obj2strClass(obj) {
    let classess = "";
    for (let key in obj) {
      const val = obj[key];
      if (val) {
        classess += `${key} `;
      }
    }
    return classess;
  }
  function obj2strStyle(obj) {
    let style = "";
    for (let key in obj) {
      const val = obj[key];
      style += `${key}:${val};`;
    }
    return style;
  }
  const _sfc_main$14 = {
    name: "uni-easyinput",
    emits: [
      "click",
      "iconClick",
      "update:modelValue",
      "input",
      "focus",
      "blur",
      "confirm",
      "clear",
      "eyes",
      "change",
      "keyboardheightchange"
    ],
    model: {
      prop: "modelValue",
      event: "update:modelValue"
    },
    options: {
      virtualHost: true
    },
    inject: {
      form: {
        from: "uniForm",
        default: null
      },
      formItem: {
        from: "uniFormItem",
        default: null
      }
    },
    props: {
      name: String,
      value: [Number, String],
      modelValue: [Number, String],
      type: {
        type: String,
        default: "text"
      },
      clearable: {
        type: Boolean,
        default: true
      },
      autoHeight: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: " "
      },
      placeholderStyle: String,
      focus: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: [Number, String],
        default: 140
      },
      confirmType: {
        type: String,
        default: "done"
      },
      clearSize: {
        type: [Number, String],
        default: 24
      },
      inputBorder: {
        type: Boolean,
        default: true
      },
      prefixIcon: {
        type: String,
        default: ""
      },
      suffixIcon: {
        type: String,
        default: ""
      },
      trim: {
        type: [Boolean, String],
        default: false
      },
      cursorSpacing: {
        type: Number,
        default: 0
      },
      passwordIcon: {
        type: Boolean,
        default: true
      },
      adjustPosition: {
        type: Boolean,
        default: true
      },
      primaryColor: {
        type: String,
        default: "#2979ff"
      },
      styles: {
        type: Object,
        default() {
          return {
            color: "#333",
            backgroundColor: "#fff",
            disableColor: "#F7F6F6",
            borderColor: "#e5e5e5"
          };
        }
      },
      errorMessage: {
        type: [String, Boolean],
        default: ""
      }
    },
    data() {
      return {
        focused: false,
        val: "",
        showMsg: "",
        border: false,
        isFirstBorder: false,
        showClearIcon: false,
        showPassword: false,
        focusShow: false,
        localMsg: "",
        isEnter: false
        // 用于判断当前是否是使用回车操作
      };
    },
    computed: {
      // 输入框内是否有值
      isVal() {
        const val = this.val;
        if (val || val === 0) {
          return true;
        }
        return false;
      },
      msg() {
        return this.localMsg || this.errorMessage;
      },
      // 因为uniapp的input组件的maxlength组件必须要数值，这里转为数值，用户可以传入字符串数值
      inputMaxlength() {
        return Number(this.maxlength);
      },
      // 处理外层样式的style
      boxStyle() {
        return `color:${this.inputBorder && this.msg ? "#e43d33" : this.styles.color};`;
      },
      // input 内容的类和样式处理
      inputContentClass() {
        return obj2strClass({
          "is-input-border": this.inputBorder,
          "is-input-error-border": this.inputBorder && this.msg,
          "is-textarea": this.type === "textarea",
          "is-disabled": this.disabled,
          "is-focused": this.focusShow
        });
      },
      inputContentStyle() {
        const focusColor = this.focusShow ? this.primaryColor : this.styles.borderColor;
        const borderColor = this.inputBorder && this.msg ? "#dd524d" : focusColor;
        return obj2strStyle({
          "border-color": borderColor || "#e5e5e5",
          "background-color": this.disabled ? this.styles.disableColor : this.styles.backgroundColor
        });
      },
      // input右侧样式
      inputStyle() {
        const paddingRight = this.type === "password" || this.clearable || this.prefixIcon ? "" : "10px";
        return obj2strStyle({
          "padding-right": paddingRight,
          "padding-left": this.prefixIcon ? "" : "10px"
        });
      }
    },
    watch: {
      value(newVal) {
        if (newVal === null) {
          this.val = "";
          return;
        }
        this.val = newVal;
      },
      modelValue(newVal) {
        if (newVal === null) {
          this.val = "";
          return;
        }
        this.val = newVal;
      },
      focus(newVal) {
        this.$nextTick(() => {
          this.focused = this.focus;
          this.focusShow = this.focus;
        });
      }
    },
    created() {
      this.init();
      if (this.form && this.formItem) {
        this.$watch("formItem.errMsg", (newVal) => {
          this.localMsg = newVal;
        });
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.focused = this.focus;
        this.focusShow = this.focus;
      });
    },
    methods: {
      /**
       * 初始化变量值
       */
      init() {
        if (this.value || this.value === 0) {
          this.val = this.value;
        } else if (this.modelValue || this.modelValue === 0 || this.modelValue === "") {
          this.val = this.modelValue;
        } else {
          this.val = "";
        }
      },
      /**
       * 点击图标时触发
       * @param {Object} type
       */
      onClickIcon(type) {
        this.$emit("iconClick", type);
      },
      /**
       * 显示隐藏内容，密码框时生效
       */
      onEyes() {
        this.showPassword = !this.showPassword;
        this.$emit("eyes", this.showPassword);
      },
      /**
       * 输入时触发
       * @param {Object} event
       */
      onInput(event) {
        let value = event.detail.value;
        if (this.trim) {
          if (typeof this.trim === "boolean" && this.trim) {
            value = this.trimStr(value);
          }
          if (typeof this.trim === "string") {
            value = this.trimStr(value, this.trim);
          }
        }
        if (this.errMsg)
          this.errMsg = "";
        this.val = value;
        this.$emit("input", value);
        this.$emit("update:modelValue", value);
      },
      /**
       * 外部调用方法
       * 获取焦点时触发
       * @param {Object} event
       */
      onFocus() {
        this.$nextTick(() => {
          this.focused = true;
        });
        this.$emit("focus", null);
      },
      _Focus(event) {
        this.focusShow = true;
        this.$emit("focus", event);
      },
      /**
       * 外部调用方法
       * 失去焦点时触发
       * @param {Object} event
       */
      onBlur() {
        this.focused = false;
        this.$emit("blur", null);
      },
      _Blur(event) {
        event.detail.value;
        this.focusShow = false;
        this.$emit("blur", event);
        if (this.isEnter === false) {
          this.$emit("change", this.val);
        }
        if (this.form && this.formItem) {
          const { validateTrigger } = this.form;
          if (validateTrigger === "blur") {
            this.formItem.onFieldChange();
          }
        }
      },
      /**
       * 按下键盘的发送键
       * @param {Object} e
       */
      onConfirm(e2) {
        this.$emit("confirm", this.val);
        this.isEnter = true;
        this.$emit("change", this.val);
        this.$nextTick(() => {
          this.isEnter = false;
        });
      },
      /**
       * 清理内容
       * @param {Object} event
       */
      onClear(event) {
        this.val = "";
        this.$emit("input", "");
        this.$emit("update:modelValue", "");
        this.$emit("clear");
      },
      /**
       * 键盘高度发生变化的时候触发此事件
       * 兼容性：微信小程序2.7.0+、App 3.1.0+
       * @param {Object} event
       */
      onkeyboardheightchange(event) {
        this.$emit("keyboardheightchange", event);
      },
      /**
       * 去除空格
       */
      trimStr(str, pos = "both") {
        if (pos === "both") {
          return str.trim();
        } else if (pos === "left") {
          return str.trimLeft();
        } else if (pos === "right") {
          return str.trimRight();
        } else if (pos === "start") {
          return str.trimStart();
        } else if (pos === "end") {
          return str.trimEnd();
        } else if (pos === "all") {
          return str.replace(/\s+/g, "");
        } else if (pos === "none") {
          return str;
        }
        return str;
      }
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$5);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-easyinput", { "uni-easyinput-error": $options.msg }]),
        style: vue.normalizeStyle($options.boxStyle)
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["uni-easyinput__content", $options.inputContentClass]),
            style: vue.normalizeStyle($options.inputContentStyle)
          },
          [
            $props.prefixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
              key: 0,
              class: "content-clear-icon",
              type: $props.prefixIcon,
              color: "#c0c4cc",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClickIcon("prefix")),
              size: "22"
            }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true),
            vue.renderSlot(_ctx.$slots, "left", {}, void 0, true),
            $props.type === "textarea" ? (vue.openBlock(), vue.createElementBlock("textarea", {
              key: 1,
              class: vue.normalizeClass(["uni-easyinput__content-textarea", { "input-padding": $props.inputBorder }]),
              name: $props.name,
              value: $data.val,
              placeholder: $props.placeholder,
              placeholderStyle: $props.placeholderStyle,
              disabled: $props.disabled,
              "placeholder-class": "uni-easyinput__placeholder-class",
              maxlength: $options.inputMaxlength,
              focus: $data.focused,
              autoHeight: $props.autoHeight,
              "cursor-spacing": $props.cursorSpacing,
              "adjust-position": $props.adjustPosition,
              onInput: _cache[1] || (_cache[1] = (...args) => $options.onInput && $options.onInput(...args)),
              onBlur: _cache[2] || (_cache[2] = (...args) => $options._Blur && $options._Blur(...args)),
              onFocus: _cache[3] || (_cache[3] = (...args) => $options._Focus && $options._Focus(...args)),
              onConfirm: _cache[4] || (_cache[4] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
              onKeyboardheightchange: _cache[5] || (_cache[5] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
            }, null, 42, ["name", "value", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "autoHeight", "cursor-spacing", "adjust-position"])) : (vue.openBlock(), vue.createElementBlock("input", {
              key: 2,
              type: $props.type === "password" ? "text" : $props.type,
              class: "uni-easyinput__content-input",
              style: vue.normalizeStyle($options.inputStyle),
              name: $props.name,
              value: $data.val,
              password: !$data.showPassword && $props.type === "password",
              placeholder: $props.placeholder,
              placeholderStyle: $props.placeholderStyle,
              "placeholder-class": "uni-easyinput__placeholder-class",
              disabled: $props.disabled,
              maxlength: $options.inputMaxlength,
              focus: $data.focused,
              confirmType: $props.confirmType,
              "cursor-spacing": $props.cursorSpacing,
              "adjust-position": $props.adjustPosition,
              onFocus: _cache[6] || (_cache[6] = (...args) => $options._Focus && $options._Focus(...args)),
              onBlur: _cache[7] || (_cache[7] = (...args) => $options._Blur && $options._Blur(...args)),
              onInput: _cache[8] || (_cache[8] = (...args) => $options.onInput && $options.onInput(...args)),
              onConfirm: _cache[9] || (_cache[9] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
              onKeyboardheightchange: _cache[10] || (_cache[10] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
            }, null, 44, ["type", "name", "value", "password", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "confirmType", "cursor-spacing", "adjust-position"])),
            $props.type === "password" && $props.passwordIcon ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 3 },
              [
                vue.createCommentVNode(" 开启密码时显示小眼睛 "),
                $options.isVal ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                  type: $data.showPassword ? "eye-slash-filled" : "eye-filled",
                  size: 22,
                  color: $data.focusShow ? $props.primaryColor : "#c0c4cc",
                  onClick: $options.onEyes
                }, null, 8, ["class", "type", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : vue.createCommentVNode("v-if", true),
            $props.suffixIcon ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 4 },
              [
                $props.suffixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: "content-clear-icon",
                  type: $props.suffixIcon,
                  color: "#c0c4cc",
                  onClick: _cache[11] || (_cache[11] = ($event) => $options.onClickIcon("suffix")),
                  size: "22"
                }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 5 },
              [
                $props.clearable && $options.isVal && !$props.disabled && $props.type !== "textarea" ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                  type: "clear",
                  size: $props.clearSize,
                  color: $options.msg ? "#dd524d" : $data.focusShow ? $props.primaryColor : "#c0c4cc",
                  onClick: $options.onClear
                }, null, 8, ["class", "size", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )),
            vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["render", _sfc_render$j], ["__scopeId", "data-v-09fd5285"], ["__file", "/Users/daily/Desktop/d9/money_celestial/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue"]]);
  const _imports_0$f = "/static/logo.png";
  const _imports_1$6 = "/static/phone-grey.png";
  const _imports_2$3 = "/static/lock-grey.png";
  const _sfc_main$13 = {
    __name: "login",
    setup(__props) {
      const userStore = useUserStore();
      const moblie = vue.ref("");
      const password = vue.ref("");
      const toRegister = () => {
        uni.navigateTo({
          url: "/pages/login/register"
        });
      };
      const login = async () => {
        if (!moblie.value)
          return uni.showToast({
            icon: "none",
            title: "请输入手机号"
          });
        if (!password.value)
          return uni.showToast({
            icon: "none",
            title: "请输入密码"
          });
        uni.showLoading({
          title: "登录中"
        });
        userStore.loginAction(moblie.value, password.value).then((res) => {
          formatAppLog("log", "at pages/login/login.vue:62", "登录成功的用户信息", res);
          uni.hideLoading();
          uni.showToast({
            title: "登录成功",
            icon: "success",
            duration: 1e3
          });
          setTimeout(() => {
            uni.navigateTo({
              url: "/pages/index/index"
            });
          }, 1e3);
        }).catch((err) => {
          var _a;
          uni.hideLoading();
          if ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.error) {
            uni.showToast({
              duration: 2e3,
              icon: "error",
              title: "登录失败"
            });
          }
        });
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_1$4);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, {
            title: "用户登录",
            bgc: "#1B46CC"
          }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("image", {
              src: _imports_0$f,
              mode: "widthFix",
              class: "logo"
            }),
            vue.createVNode(_component_uni_easyinput, {
              modelValue: moblie.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => moblie.value = $event),
              placeholder: "请输入手机号",
              maxlength: "11",
              inputBorder: false,
              primaryColor: "#1B46CC",
              type: "number"
            }, {
              left: vue.withCtx(() => [
                vue.createElementVNode("image", {
                  src: _imports_1$6,
                  mode: "widthFix",
                  class: "m_pic"
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            vue.createVNode(_component_uni_easyinput, {
              modelValue: password.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => password.value = $event),
              placeholder: "请输入密码",
              inputBorder: false,
              type: "password",
              primaryColor: "#1B46CC"
            }, {
              left: vue.withCtx(() => [
                vue.createElementVNode("image", {
                  src: _imports_2$3,
                  mode: "widthFix",
                  class: "m_pic"
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            vue.createElementVNode("view", { class: "forget" }, " 忘记密码 "),
            vue.createElementVNode("view", {
              class: "l_btn flex_center",
              onClick: login
            }, " 立即登录 "),
            vue.createElementVNode("view", {
              class: "r_btn flex_center",
              onClick: toRegister
            }, " 注册新用户 "),
            vue.createCommentVNode(' <view class="wx_btn flex_center">\n				<image src="@/static/wechat.png" mode="widthFix" class="wx_logo"></image>\n				<view class="">\n					微信一键登录\n				</view>\n			</view> ')
          ])
        ]);
      };
    }
  };
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["__scopeId", "data-v-e4e4508d"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/login/login.vue"]]);
  const useUserStore = defineStore("user", {
    state: () => {
      return {
        userInfo: {},
        merchantInfo: {},
        storeInfo: {}
      };
    },
    actions: {
      async loginAction(phone_number, password) {
        const results = await postProfileLogin(phone_number, password);
        const { access, refresh } = results;
        uni.setStorageSync("accessToken", access);
        uni.setStorageSync("refreshToken", refresh);
        uni.setStorageSync("userInfo", results);
        await uni.setStorageSync("phoneNumber", phone_number);
        formatAppLog("log", "at store/user.js:25", "登录传入的手机号", phone_number);
        const number = await uni.getStorageSync("phoneNumber");
        formatAppLog("log", "at store/user.js:27", "----", number);
        await this.getUserInfoAction();
        formatAppLog("log", "at store/user.js:29", "accessToken", access);
        formatAppLog("log", "at store/user.js:30", "登录成功的用户信息", results);
      },
      async getUserInfoAction() {
        const phoneNumber = uni.getStorageSync("phoneNumber");
        const res = await getUerAccountMessage(phoneNumber);
        uni.setStorageSync("userInfo", res);
        formatAppLog("log", "at store/user.js:36", "根据token获取到的用户信息", res);
      },
      async getMerchantInfoAction() {
        const res = await getMerchantInfo();
        formatAppLog("log", "at store/user.js:40", "store中获得的店铺信息", res);
      },
      async getStoreInfoAction() {
        const res = await getShopInfo();
        uni.setStorageSync("shopInfo", res);
      },
      async fetchAllDataAction() {
        this.getUserInfoAction();
        this.getStoreInfoAction();
      }
    }
  });
  const getBannerList = async () => {
    return http.get("/banners/");
  };
  const getRecommendOfficerInfo = async (user) => {
    return http.get(`/referral/officers/${user}/`);
  };
  const createRecommendOfficer = async (data) => {
    return http.post("/referral/officers/", data);
  };
  const getOfficerQRCode = async () => {
    return http.get("/referral/qrcode/");
  };
  const _sfc_main$12 = {
    __name: "index",
    setup(__props) {
      vue.ref("");
      const publicStore = usePublicStore();
      const userStore = useUserStore();
      const city = vue.ref("");
      vue.onMounted(async () => {
        const accessToken = uni.getStorageSync("accessToken");
        formatAppLog("log", "at pages/index/index.vue:141", accessToken);
        if (accessToken) {
          await publicStore.fetchAllDataAction(), await userStore.fetchAllDataAction();
        }
        uni.getLocation({
          geocode: true,
          success(res) {
            formatAppLog("log", "at pages/index/index.vue:150", res);
            if (res.address) {
              uni.setStorageSync("address_info", res.address);
              city.value = res.address.city;
            }
          }
        });
        getCategory();
        getBanner();
      });
      const categoryList = vue.ref([]);
      const getCategory = async () => {
        const { results } = await getShopCategories();
        categoryList.value = results;
      };
      const bannerList = vue.ref();
      const getBanner = async () => {
        bannerList.value = await getBannerList();
      };
      const toMerchant = async () => {
        const phoneNumber = await uni.getStorageSync("phoneNumber");
        const userData = uni.getStorageSync("userInfo");
        const shopData = await getShopInfo(phoneNumber);
        formatAppLog("log", "at pages/index/index.vue:204", "进入商家前的用户信息", userData);
        formatAppLog("log", "at pages/index/index.vue:205", "进入商家前的店铺信息", shopData);
        if ((userData == null ? void 0 : userData.is_seller) && (shopData == null ? void 0 : shopData.is_approved)) {
          uni.navigateTo({
            url: "/pages/merchant/merchant_management"
          });
        } else if (!(userData == null ? void 0 : userData.is_seller)) {
          uni.navigateTo({
            url: "/pages/merchant/merchant_intro"
          });
        } else if ((userData == null ? void 0 : userData.is_seller) && !(shopData == null ? void 0 : shopData.is_approved)) {
          uni.navigateTo({
            url: "/pages/merchant/before_create_shop"
          });
        }
      };
      const toAgent = () => {
        if (userStore.userInfo.is_province_agent || userStore.userInfo.is_city_agent) {
          uni.navigateTo({
            url: "/pages/agent/agent_management"
          });
        } else {
          uni.navigateTo({
            url: "/pages/agent/agent_intro"
          });
        }
      };
      const toRecommend = async () => {
        const phoneNumber = uni.getStorageSync("phoneNumber");
        const data = await getRecommendOfficerInfo(phoneNumber);
        formatAppLog("log", "at pages/index/index.vue:239", "进入推荐官页面前的推荐官信息", data);
        if ((data == null ? void 0 : data.is_approved) && (data == null ? void 0 : data.is_visible)) {
          uni.navigateTo({
            url: "/pages/recommend/recommend_management"
          });
        } else if (data == null ? void 0 : data.detail) {
          uni.navigateTo({
            url: "/pages/recommend/recommend_intro"
          });
        } else if (!(data == null ? void 0 : data.is_approved)) {
          uni.navigateTo({
            url: "/pages/recommend/before_create_recommend"
          });
        }
      };
      const toAllMerchant = () => {
        uni.navigateTo({
          url: "/pages/merchant/all_merchant"
        });
      };
      const toMyAccount = () => {
        uni.navigateTo({
          url: "/pages/myAccount/myAccount"
        });
      };
      const toDetail = () => {
        uni.navigateTo({
          url: "/pages/merchant/merchant_detail"
        });
      };
      return (_ctx, _cache) => {
        var _a, _b, _c;
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
          vue.createVNode(_component_navBar, {
            iconShow: false,
            title: "满仓"
          }),
          vue.createCommentVNode(` 	<view class="search_bar flex_between">\r
			<image src="@/static/locate.png" mode="widthFix" class="locate_img"></image>\r
			<view class="location">\r
				{{city?city:'定位中'}}\r
			</view>\r
			<uni-search-bar v-model="keyword" placeholder="请输入你搜索的内容" :radius="100" cancel-text="cancel" cancelButton="none" clearButton="always">\r
				<template v-slot:clearIcon>\r
					<view class="search_btn flex_center" @click.stop="search" >搜索</view>\r
				</template>\r
			</uni-search-bar>\r
		</view> `),
          vue.createElementVNode("swiper", {
            "indicator-dots": true,
            autoplay: true,
            interval: 3e3,
            duration: 1e3,
            "indicator-color": "#a4b8ab",
            "indicator-active-color": "#fc5908",
            circular: true,
            class: "swiper"
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(bannerList.value, (item) => {
                return vue.openBlock(), vue.createElementBlock("swiper-item", {
                  key: item.id
                }, [
                  vue.createElementVNode("image", {
                    src: item.image_url,
                    mode: "widthFix",
                    class: "swipe_img"
                  }, null, 8, ["src"])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          vue.createElementVNode("view", { class: "function_list flex_between" }, [
            vue.createElementVNode("view", {
              class: "function_item",
              onClick: toMerchant
            }, [
              vue.createElementVNode("view", { class: "img_box flex_center" }, [
                vue.createElementVNode("image", {
                  src: _imports_0$g,
                  mode: "widthFix",
                  class: "img_item"
                })
              ]),
              vue.createElementVNode("view", { class: "" }, " 商家 ")
            ]),
            vue.createElementVNode("view", {
              class: "function_item",
              onClick: toAgent
            }, [
              vue.createElementVNode("view", { class: "img_box flex_center" }, [
                vue.createElementVNode("image", {
                  src: _imports_1$8,
                  mode: "widthFix",
                  class: "img_item",
                  style: { "width": "70rpx" }
                })
              ]),
              vue.createElementVNode("view", { class: "" }, " 代理 ")
            ]),
            vue.createElementVNode("view", {
              class: "function_item",
              onClick: toRecommend
            }, [
              vue.createElementVNode("view", { class: "img_box flex_center" }, [
                vue.createElementVNode("image", {
                  src: _imports_2$4,
                  mode: "widthFix",
                  class: "img_item",
                  style: { "width": "56rpx" }
                })
              ]),
              vue.createElementVNode("view", { class: "" }, " 推荐官 ")
            ]),
            vue.createElementVNode("view", {
              class: "function_item",
              onClick: toMyAccount
            }, [
              vue.createElementVNode("view", { class: "img_box flex_center" }, [
                vue.createElementVNode("image", {
                  src: _imports_3$2,
                  mode: "widthFix",
                  class: "img_item",
                  style: { "width": "58rpx" }
                })
              ]),
              vue.createElementVNode("view", { class: "" }, " 我的账户 ")
            ])
          ]),
          vue.createElementVNode("view", { class: "content" }, [
            categoryList.value.length ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "cate_list flex_between"
            }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(categoryList.value, (item) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "cate_item",
                    key: item.id
                  }, [
                    vue.createElementVNode("image", {
                      src: item.icon,
                      mode: "widthFix",
                      class: "cate_img"
                    }, null, 8, ["src"]),
                    vue.createElementVNode(
                      "view",
                      { class: "" },
                      vue.toDisplayString(item.name),
                      1
                      /* TEXT */
                    )
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])) : vue.createCommentVNode("v-if", true),
            vue.unref(userStore).storeInfo && Object.keys(vue.unref(userStore).storeInfo).length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "merchant_box"
            }, [
              vue.createElementVNode("view", { class: "merchant_top flex_between" }, [
                vue.createElementVNode("view", { class: "flex_between" }, [
                  vue.createElementVNode("text", { class: "nearby" }, "附近商家"),
                  vue.createElementVNode("view", { class: "hit" }, " 热门榜 ")
                ]),
                vue.createCommentVNode(' <view class="settle" @click="toSettle" v-if="!(userStore.storeInfo && Object.keys(userStore.storeInfo).length > 0)" >\r\n						我要入驻\r\n					</view> ')
              ]),
              vue.createElementVNode("view", { class: "shop_list" }, [
                vue.createElementVNode("view", {
                  class: "shop_item flex_between",
                  onClick: toDetail
                }, [
                  vue.createElementVNode("image", {
                    src: "",
                    mode: "aspectFill",
                    class: "shop_img"
                  }),
                  vue.createElementVNode("view", { class: "shop_info" }, [
                    vue.createElementVNode(
                      "view",
                      { class: "shop_name" },
                      vue.toDisplayString((_a = vue.unref(publicStore).ascShopList[0]) == null ? void 0 : _a.name),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", { class: "shop_address flex" }, [
                      vue.createElementVNode("image", {
                        src: _imports_1$7,
                        mode: "widthFix",
                        class: "address_img"
                      }),
                      vue.createElementVNode(
                        "view",
                        {
                          class: "",
                          style: { "flex": "1" }
                        },
                        vue.toDisplayString((_b = vue.unref(publicStore).ascShopList[0]) == null ? void 0 : _b.address),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  vue.createElementVNode(
                    "view",
                    { class: "distance" },
                    vue.toDisplayString(((_c = vue.unref(publicStore).ascShopList[0]) == null ? void 0 : _c.distance) / 1e3) + "km ",
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", {
                  class: "more",
                  onClick: toAllMerchant
                }, " 点击查看更多 ")
              ])
            ])) : vue.createCommentVNode("v-if", true)
          ]),
          vue.createCommentVNode(' <view class="headline flex_between">\r\n			<view class="head_title">\r\n				头条\r\n			</view>\r\n			<view class="head_hit">\r\n				热门\r\n			</view>\r\n			<view class="news">\r\n				新闻内容\r\n			</view>\r\n		</view> '),
          vue.createCommentVNode(' <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-color="#a4b8ab" indicator-active-color="#fc5908" :circular="true" class="swiper" style="margin-bottom: 30rpx;">\r\n			<swiper-item>\r\n				<image src="" mode="widthFix" class="swipe_img"></image>\r\n			</swiper-item>\r\n		</swiper> '),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("image", {
              src: _imports_5$1,
              mode: "widthFix",
              class: "shop_pic"
            }),
            vue.createElementVNode("image", {
              src: _imports_6$1,
              mode: "widthFix",
              class: "shop_pic"
            }),
            vue.createElementVNode("image", {
              src: _imports_7$1,
              mode: "widthFix",
              class: "shop_pic"
            })
          ])
        ]);
      };
    }
  };
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["__scopeId", "data-v-1cf27b2a"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/index/index.vue"]]);
  const _imports_0$e = "/static/merchant/merchant-intro.jpg";
  const _sfc_main$11 = {
    __name: "merchant_intro",
    setup(__props) {
      const toNotice = () => {
        uni.navigateTo({
          url: "/pages/merchant/settle_notice"
        });
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "商家" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("image", {
              src: _imports_0$e,
              mode: "widthFix",
              class: "merchant_intro"
            }),
            vue.createElementVNode("view", {
              class: "btn_full",
              onClick: toNotice
            }, " 我要入驻 ")
          ])
        ]);
      };
    }
  };
  const PagesMerchantMerchantIntro = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["__scopeId", "data-v-63c4abfc"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/merchant_intro.vue"]]);
  const createMerchant = async (data) => {
    return http.post("/merchant/", data);
  };
  const getMerchantList$1 = (data) => {
    return http.get("/shops/", data);
  };
  const merchantCodeAuthentication = (data) => {
    return http.post("/users/merchant/code/verification/", data);
  };
  const getCitiesDetail = async (name) => {
    return http.get(`/divisions/cities/${name}/`);
  };
  const _sfc_main$10 = {
    __name: "settle_notice",
    setup(__props) {
      const referral_officer = vue.ref("");
      onLoad((options) => {
        referral_officer.value = options.referral_officer;
      });
      const isChecked = vue.ref(false);
      const changeCheck = () => {
        isChecked.value = !isChecked.value;
      };
      function extractIdFromUrl(url) {
        const match = url.match(/\/(\d+)\/?$/);
        return match ? match[1] : null;
      }
      const extractCityName = (location2) => {
        const parts = location2.split(" ");
        return parts[parts.length - 1];
      };
      const scanCode = () => {
        uni.scanCode({
          onlyFromCamera: true,
          // 只允许从摄像头扫码
          success: async (res) => {
            formatAppLog("log", "at pages/merchant/settle_notice.vue:63", "扫码结果: ", extractIdFromUrl(res.result));
            const recommendPhone = extractIdFromUrl(res.result);
            const phoneNumber = uni.getStorageSync("phoneNumber");
            const address = uni.getStorageSync("userInfo").residence;
            const userName = uni.getStorageSync("userInfo").name;
            const avatar = uni.getStorageSync("userInfo").icon;
            const cityName = extractCityName(address);
            const cityInfo = await getCitiesDetail(cityName);
            formatAppLog("log", "at pages/merchant/settle_notice.vue:71", recommendPhone, phoneNumber, address, cityName, userName, cityInfo);
            uni.showLoading({
              title: "正在创建商家"
            });
            createMerchant({ user: phoneNumber, referral_officer: recommendPhone, city: cityName, name: userName, icon: avatar }).then((res2) => {
              uni.hideLoading();
              uni.showToast({
                title: `创建商家成功`,
                // 显示扫码的结果
                icon: "success"
              });
              uni.navigateTo({
                url: "/pages/merchant/before_create_shop"
              });
            }).catch((err) => {
              formatAppLog("log", "at pages/merchant/settle_notice.vue:85", err);
              uni.hideLoading();
              uni.showToast({
                title: `创建商家失败`,
                // 显示扫码的结果
                icon: "fail"
              });
            });
          },
          fail: (err) => {
            formatAppLog("error", "at pages/merchant/settle_notice.vue:95", "扫码失败: ", err);
            uni.showToast({
              title: "扫码失败",
              icon: "none"
            });
          }
        });
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "商家入驻须知" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "notices" }, [
              vue.createElementVNode("view", { class: "n_title" }, " 欢迎成为满仓商家 "),
              vue.createElementVNode("view", { class: "n_content" }, " 您在使用满仓服务前，应当仔细认真阅读本《满仓用户服务条款》(下称“本条《满仓用户服务协议》及发布的其他服务条款、专项产品款”)中的全部规则、或服务规则或规范(包括但不限于《电商用户服务规则》、《平台售后及争议处理规则》以及《满仓评价规则》等，以下合称“服务规则”)的内容(特别是其中以加粗及/或加下划线标示出的关于满仓服务及用户重大权益的规则，该等规则可能涉及相关方的责任免除或限制、法律适用与争议解决条款，请您重点阅读)，确认对本条款《满仓用户服务协议》及各项服务规则均已知晓、理解并接受，并已同意将其作为确定双方权利义务的依据。如您使用***号账号访问满仓或以其他方式使用或接受满仓的任何服务，即视为您已阅读并与满仓达成协议，自愿接受本条款及服务规则的所有内容的约束。所有服务规则视为本条款不可分割的一部分，与本条款具有同等法律效力。 "),
              vue.createElementVNode("view", { class: "n_content" }, " 本条款的签约双方为满仓服务的实际运营商***号信息咨询有限公司(下称“满仓”)与使用满仓相关服务的使用人(下称“用户”或“您”)，本条款是您与满仓之间关于您使用满仓提供的各项服务所订立的服务条款，具有正式书面合同的效力。本条款为《满仓用户服务协议》》(包括但不限于所附的《满仓隐私政策》)的必要组成部分。《满仓用户服务协议》将同时适用于满仓的各项服务。如本条款与《满仓用户服务协议》文本内容存在冲突之处，则以时间上最新发布的内容为准，发布时间相同的，以本条款为准。本条款有待明确、存在歧义或未规定之处均以《满仓用户服务协议》中的规定为准。您理解并同意，满仓将根据《满仓用户服务协议》的约定，对本条款或各项服务规则不时地进行修改更新。修改更新内容的发布和实施均适用《满仓用户服务协议》的相关约定。 ")
            ]),
            vue.createElementVNode("view", {
              class: "radio",
              onClick: changeCheck
            }, [
              vue.createElementVNode("radio", {
                value: "r1",
                checked: isChecked.value,
                color: "#FC5908"
              }, null, 8, ["checked"]),
              vue.createElementVNode("text", { class: "read" }, "我已阅读并同意"),
              vue.createElementVNode("text", { class: "c_title" }, "《商家入驻须知》")
            ]),
            vue.createElementVNode("view", {
              class: "btn_full",
              onClick: scanCode
            }, " 扫码成为商家 ")
          ])
        ]);
      };
    }
  };
  const PagesMerchantSettleNotice = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["__scopeId", "data-v-37037ead"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/settle_notice.vue"]]);
  const _imports_0$d = "/static/upload.png";
  const _sfc_main$$ = {
    __name: "upload",
    props: {
      amount: {
        type: String,
        default: "1"
      }
    },
    emits: ["tempImgPaths"],
    setup(__props, { emit: __emit }) {
      const emit = __emit;
      const imageTempPaths = vue.ref([]);
      const props = __props;
      const chooseImg = async () => {
        uni.chooseImage({
          count: Number(props.amount),
          success: (res) => {
            const tempFilePaths = res.tempFilePaths;
            imageTempPaths.value = tempFilePaths;
            emit("tempImgPaths", tempFilePaths);
          },
          fail: (err) => {
            formatAppLog("log", "at components/upload/upload.vue:39", "选择图片失败：", err);
          }
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "flex" }, [
          imageTempPaths.value.length != 0 ? (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            { key: 0 },
            vue.renderList(imageTempPaths.value, (image, index) => {
              return vue.openBlock(), vue.createElementBlock("image", {
                key: index,
                src: image,
                mode: "widthFix",
                class: "upload_btn"
              }, null, 8, ["src"]);
            }),
            128
            /* KEYED_FRAGMENT */
          )) : vue.createCommentVNode("v-if", true),
          imageTempPaths.value.length < props.amount ? (vue.openBlock(), vue.createElementBlock("image", {
            key: 1,
            src: _imports_0$d,
            mode: "widthFix",
            class: "upload_btn",
            onClick: chooseImg
          })) : vue.createCommentVNode("v-if", true)
        ]);
      };
    }
  };
  const __easycom_2$5 = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["__scopeId", "data-v-0917ae16"], ["__file", "/Users/daily/Desktop/d9/money_celestial/components/upload/upload.vue"]]);
  const pages = [
    {
      path: "pages/index/index",
      style: {
        navigationBarTitleText: "uni-app",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/login/login",
      style: {
        navigationBarTitleText: "用户登录",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/merchant/merchant_intro",
      style: {
        navigationBarTitleText: "商家",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/merchant/settle_notice",
      style: {
        navigationBarTitleText: "商家入驻须知",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/merchant/merchant_set_info",
      style: {
        navigationBarTitleText: "商家入驻",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/merchant/before_create_shop",
      style: {
        navigationBarTitleText: "商家入驻",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/merchant/merchant_management",
      style: {
        navigationBarTitleText: "商家后台",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/recommend/before_create_recommend",
      style: {
        navigationBarTitleText: "成为推荐官",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/merchant/merchant_edit_info",
      style: {
        navigationBarTitleText: "资料编辑",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/merchant/point_gift",
      style: {
        navigationBarTitleText: "积分赠送",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/merchant/merchant_code_authentication",
      style: {
        navigationBarTitleText: "商家码认证",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/merchant/security_deposit",
      style: {
        navigationBarTitleText: "保证金",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/merchant/deposit_record",
      style: {
        navigationBarTitleText: "保证金记录",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/merchant/add_deposit",
      style: {
        navigationBarTitleText: "增加保证金",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/merchant/remove_deposit",
      style: {
        navigationBarTitleText: "解除保证金",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/merchant/upload_goods",
      style: {
        navigationBarTitleText: "发布商品",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/agent/agent_intro",
      style: {
        navigationBarTitleText: "代理",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/agent/agent_management",
      style: {
        navigationBarTitleText: "代理后台",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/recommend/recommend_intro",
      style: {
        navigationBarTitleText: "推荐官",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/recommend/recommend_management",
      style: {
        navigationBarTitleText: "推荐官后台",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/recommend/qrcodeDetail",
      style: {
        navigationBarTitleText: "推荐官二维码",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/merchant/all_merchant",
      style: {
        navigationBarTitleText: "全部商家",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/agent/merchant_code_authentication",
      style: {
        navigationBarTitleText: "商家码认证",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/recommend/merchant_code_authentication",
      style: {
        navigationBarTitleText: "商家码认证",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/recommend/security_deposit",
      style: {
        navigationBarTitleText: "保证金",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/agent/security_deposit",
      style: {
        navigationBarTitleText: "保证金",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/myAccount/myAccount",
      style: {
        navigationBarTitleText: "我的账户",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/merchant/merchant_detail",
      style: {
        navigationBarTitleText: "门店详情",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/merchant/goods_detail",
      style: {
        navigationBarTitleText: "商品详情",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/login/register",
      style: {
        navigationBarTitleText: "注册",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/login/more_info",
      style: {
        navigationBarTitleText: "完善信息",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/myAccount/my_point",
      style: {
        navigationBarTitleText: "我的积分",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/myAccount/point_available",
      style: {
        navigationBarTitleText: "可用积分",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/myAccount/point_account",
      style: {
        navigationBarTitleText: "积分账号",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/myAccount/bind_account",
      style: {
        navigationBarTitleText: "积分账号",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/myAccount/unbind_account",
      style: {
        navigationBarTitleText: "绑定账号",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/agent/add_deposit",
      style: {
        navigationBarTitleText: "增加保证金",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/agent/remove_deposit",
      style: {
        navigationBarTitleText: "解除保证金",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/agent/deposit_record",
      style: {
        navigationBarTitleText: "保证金记录",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/recommend/add_deposit",
      style: {
        navigationBarTitleText: "增加保证金",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/recommend/remove_deposit",
      style: {
        navigationBarTitleText: "解除保证金",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/recommend/deposit_record",
      style: {
        navigationBarTitleText: "保证金记录",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/agent/merchant_list",
      style: {
        navigationBarTitleText: "商家列表",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/recommend/merchant_list",
      style: {
        navigationBarTitleText: "商家列表",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/recommend/recommend_test",
      style: {
        navigationBarTitleText: "推荐官考试",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/myAccount/exchange_point_step_1",
      style: {
        navigationBarTitleText: "兑换积分",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/myAccount/exchange_point_step_2",
      style: {
        navigationBarTitleText: "兑换积分",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/myAccount/green_point_withdraw",
      style: {
        navigationBarTitleText: "提取积分",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/myAccount/green_point_withdraw_record",
      style: {
        navigationBarTitleText: "提取记录",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/myAccount/red_point_withdraw",
      style: {
        navigationBarTitleText: "提取记录",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/myAccount/red_point_withdraw_record",
      style: {
        navigationBarTitleText: "提取记录",
        navigationStyle: "custom"
      }
    }
  ];
  const globalStyle = {
    navigationBarTextStyle: "white",
    navigationBarTitleText: "uni-app",
    navigationBarBackgroundColor: "#F8F8F8",
    backgroundColor: "#F8F8F8"
  };
  const uniIdRouter = {};
  const condition = {
    current: 0,
    list: [
      {
        name: "",
        path: "",
        query: ""
      }
    ]
  };
  const e = {
    pages,
    globalStyle,
    uniIdRouter,
    condition
  };
  var define_process_env_UNI_SECURE_NETWORK_CONFIG_default = [];
  function t$3(e2) {
    return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
  }
  function n(e2, t2, n2) {
    return e2(n2 = { path: t2, exports: {}, require: function(e3, t3) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t3 && n2.path);
    } }, n2.exports), n2.exports;
  }
  var s = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = n2 || function(e3, t3) {
      var n3 = Object.create || /* @__PURE__ */ function() {
        function e4() {
        }
        return function(t4) {
          var n4;
          return e4.prototype = t4, n4 = new e4(), e4.prototype = null, n4;
        };
      }(), s2 = {}, r2 = s2.lib = {}, i2 = r2.Base = { extend: function(e4) {
        var t4 = n3(this);
        return e4 && t4.mixIn(e4), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
          t4.$super.init.apply(this, arguments);
        }), t4.init.prototype = t4, t4.$super = this, t4;
      }, create: function() {
        var e4 = this.extend();
        return e4.init.apply(e4, arguments), e4;
      }, init: function() {
      }, mixIn: function(e4) {
        for (var t4 in e4)
          e4.hasOwnProperty(t4) && (this[t4] = e4[t4]);
        e4.hasOwnProperty("toString") && (this.toString = e4.toString);
      }, clone: function() {
        return this.init.prototype.extend(this);
      } }, o2 = r2.WordArray = i2.extend({ init: function(e4, n4) {
        e4 = this.words = e4 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e4.length;
      }, toString: function(e4) {
        return (e4 || c2).stringify(this);
      }, concat: function(e4) {
        var t4 = this.words, n4 = e4.words, s3 = this.sigBytes, r3 = e4.sigBytes;
        if (this.clamp(), s3 % 4)
          for (var i3 = 0; i3 < r3; i3++) {
            var o3 = n4[i3 >>> 2] >>> 24 - i3 % 4 * 8 & 255;
            t4[s3 + i3 >>> 2] |= o3 << 24 - (s3 + i3) % 4 * 8;
          }
        else
          for (i3 = 0; i3 < r3; i3 += 4)
            t4[s3 + i3 >>> 2] = n4[i3 >>> 2];
        return this.sigBytes += r3, this;
      }, clamp: function() {
        var t4 = this.words, n4 = this.sigBytes;
        t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e3.ceil(n4 / 4);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4.words = this.words.slice(0), e4;
      }, random: function(t4) {
        for (var n4, s3 = [], r3 = function(t5) {
          t5 = t5;
          var n5 = 987654321, s4 = 4294967295;
          return function() {
            var r4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
            return r4 /= 4294967296, (r4 += 0.5) * (e3.random() > 0.5 ? 1 : -1);
          };
        }, i3 = 0; i3 < t4; i3 += 4) {
          var a3 = r3(4294967296 * (n4 || e3.random()));
          n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
        }
        return new o2.init(s3, t4);
      } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push((i3 >>> 4).toString(16)), s3.push((15 & i3).toString(16));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
          n4[s3 >>> 3] |= parseInt(e4.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
        return new o2.init(n4, t4 / 2);
      } }, u2 = a2.Latin1 = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push(String.fromCharCode(i3));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3++)
          n4[s3 >>> 2] |= (255 & e4.charCodeAt(s3)) << 24 - s3 % 4 * 8;
        return new o2.init(n4, t4);
      } }, h2 = a2.Utf8 = { stringify: function(e4) {
        try {
          return decodeURIComponent(escape(u2.stringify(e4)));
        } catch (e5) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(e4) {
        return u2.parse(unescape(encodeURIComponent(e4)));
      } }, l2 = r2.BufferedBlockAlgorithm = i2.extend({ reset: function() {
        this._data = new o2.init(), this._nDataBytes = 0;
      }, _append: function(e4) {
        "string" == typeof e4 && (e4 = h2.parse(e4)), this._data.concat(e4), this._nDataBytes += e4.sigBytes;
      }, _process: function(t4) {
        var n4 = this._data, s3 = n4.words, r3 = n4.sigBytes, i3 = this.blockSize, a3 = r3 / (4 * i3), c3 = (a3 = t4 ? e3.ceil(a3) : e3.max((0 | a3) - this._minBufferSize, 0)) * i3, u3 = e3.min(4 * c3, r3);
        if (c3) {
          for (var h3 = 0; h3 < c3; h3 += i3)
            this._doProcessBlock(s3, h3);
          var l3 = s3.splice(0, c3);
          n4.sigBytes -= u3;
        }
        return new o2.init(l3, u3);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._data = this._data.clone(), e4;
      }, _minBufferSize: 0 });
      r2.Hasher = l2.extend({ cfg: i2.extend(), init: function(e4) {
        this.cfg = this.cfg.extend(e4), this.reset();
      }, reset: function() {
        l2.reset.call(this), this._doReset();
      }, update: function(e4) {
        return this._append(e4), this._process(), this;
      }, finalize: function(e4) {
        return e4 && this._append(e4), this._doFinalize();
      }, blockSize: 16, _createHelper: function(e4) {
        return function(t4, n4) {
          return new e4.init(n4).finalize(t4);
        };
      }, _createHmacHelper: function(e4) {
        return function(t4, n4) {
          return new d2.HMAC.init(e4, n4).finalize(t4);
        };
      } });
      var d2 = s2.algo = {};
      return s2;
    }(Math), n2);
  }), r = s, i = (n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [];
      !function() {
        for (var t4 = 0; t4 < 64; t4++)
          a2[t4] = 4294967296 * e3.abs(e3.sin(t4 + 1)) | 0;
      }();
      var c2 = o2.MD5 = i2.extend({ _doReset: function() {
        this._hash = new r2.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = 0; n3 < 16; n3++) {
          var s3 = t4 + n3, r3 = e4[s3];
          e4[s3] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8);
        }
        var i3 = this._hash.words, o3 = e4[t4 + 0], c3 = e4[t4 + 1], p2 = e4[t4 + 2], f2 = e4[t4 + 3], g2 = e4[t4 + 4], m2 = e4[t4 + 5], y2 = e4[t4 + 6], _2 = e4[t4 + 7], w2 = e4[t4 + 8], v2 = e4[t4 + 9], I2 = e4[t4 + 10], S2 = e4[t4 + 11], b2 = e4[t4 + 12], k2 = e4[t4 + 13], A2 = e4[t4 + 14], C2 = e4[t4 + 15], P2 = i3[0], T2 = i3[1], x2 = i3[2], O2 = i3[3];
        P2 = u2(P2, T2, x2, O2, o3, 7, a2[0]), O2 = u2(O2, P2, T2, x2, c3, 12, a2[1]), x2 = u2(x2, O2, P2, T2, p2, 17, a2[2]), T2 = u2(T2, x2, O2, P2, f2, 22, a2[3]), P2 = u2(P2, T2, x2, O2, g2, 7, a2[4]), O2 = u2(O2, P2, T2, x2, m2, 12, a2[5]), x2 = u2(x2, O2, P2, T2, y2, 17, a2[6]), T2 = u2(T2, x2, O2, P2, _2, 22, a2[7]), P2 = u2(P2, T2, x2, O2, w2, 7, a2[8]), O2 = u2(O2, P2, T2, x2, v2, 12, a2[9]), x2 = u2(x2, O2, P2, T2, I2, 17, a2[10]), T2 = u2(T2, x2, O2, P2, S2, 22, a2[11]), P2 = u2(P2, T2, x2, O2, b2, 7, a2[12]), O2 = u2(O2, P2, T2, x2, k2, 12, a2[13]), x2 = u2(x2, O2, P2, T2, A2, 17, a2[14]), P2 = h2(P2, T2 = u2(T2, x2, O2, P2, C2, 22, a2[15]), x2, O2, c3, 5, a2[16]), O2 = h2(O2, P2, T2, x2, y2, 9, a2[17]), x2 = h2(x2, O2, P2, T2, S2, 14, a2[18]), T2 = h2(T2, x2, O2, P2, o3, 20, a2[19]), P2 = h2(P2, T2, x2, O2, m2, 5, a2[20]), O2 = h2(O2, P2, T2, x2, I2, 9, a2[21]), x2 = h2(x2, O2, P2, T2, C2, 14, a2[22]), T2 = h2(T2, x2, O2, P2, g2, 20, a2[23]), P2 = h2(P2, T2, x2, O2, v2, 5, a2[24]), O2 = h2(O2, P2, T2, x2, A2, 9, a2[25]), x2 = h2(x2, O2, P2, T2, f2, 14, a2[26]), T2 = h2(T2, x2, O2, P2, w2, 20, a2[27]), P2 = h2(P2, T2, x2, O2, k2, 5, a2[28]), O2 = h2(O2, P2, T2, x2, p2, 9, a2[29]), x2 = h2(x2, O2, P2, T2, _2, 14, a2[30]), P2 = l2(P2, T2 = h2(T2, x2, O2, P2, b2, 20, a2[31]), x2, O2, m2, 4, a2[32]), O2 = l2(O2, P2, T2, x2, w2, 11, a2[33]), x2 = l2(x2, O2, P2, T2, S2, 16, a2[34]), T2 = l2(T2, x2, O2, P2, A2, 23, a2[35]), P2 = l2(P2, T2, x2, O2, c3, 4, a2[36]), O2 = l2(O2, P2, T2, x2, g2, 11, a2[37]), x2 = l2(x2, O2, P2, T2, _2, 16, a2[38]), T2 = l2(T2, x2, O2, P2, I2, 23, a2[39]), P2 = l2(P2, T2, x2, O2, k2, 4, a2[40]), O2 = l2(O2, P2, T2, x2, o3, 11, a2[41]), x2 = l2(x2, O2, P2, T2, f2, 16, a2[42]), T2 = l2(T2, x2, O2, P2, y2, 23, a2[43]), P2 = l2(P2, T2, x2, O2, v2, 4, a2[44]), O2 = l2(O2, P2, T2, x2, b2, 11, a2[45]), x2 = l2(x2, O2, P2, T2, C2, 16, a2[46]), P2 = d2(P2, T2 = l2(T2, x2, O2, P2, p2, 23, a2[47]), x2, O2, o3, 6, a2[48]), O2 = d2(O2, P2, T2, x2, _2, 10, a2[49]), x2 = d2(x2, O2, P2, T2, A2, 15, a2[50]), T2 = d2(T2, x2, O2, P2, m2, 21, a2[51]), P2 = d2(P2, T2, x2, O2, b2, 6, a2[52]), O2 = d2(O2, P2, T2, x2, f2, 10, a2[53]), x2 = d2(x2, O2, P2, T2, I2, 15, a2[54]), T2 = d2(T2, x2, O2, P2, c3, 21, a2[55]), P2 = d2(P2, T2, x2, O2, w2, 6, a2[56]), O2 = d2(O2, P2, T2, x2, C2, 10, a2[57]), x2 = d2(x2, O2, P2, T2, y2, 15, a2[58]), T2 = d2(T2, x2, O2, P2, k2, 21, a2[59]), P2 = d2(P2, T2, x2, O2, g2, 6, a2[60]), O2 = d2(O2, P2, T2, x2, S2, 10, a2[61]), x2 = d2(x2, O2, P2, T2, p2, 15, a2[62]), T2 = d2(T2, x2, O2, P2, v2, 21, a2[63]), i3[0] = i3[0] + P2 | 0, i3[1] = i3[1] + T2 | 0, i3[2] = i3[2] + x2 | 0, i3[3] = i3[3] + O2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        n3[r3 >>> 5] |= 128 << 24 - r3 % 32;
        var i3 = e3.floor(s3 / 4294967296), o3 = s3;
        n3[15 + (r3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), n3[14 + (r3 + 64 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
        for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
          var h3 = c3[u3];
          c3[u3] = 16711935 & (h3 << 8 | h3 >>> 24) | 4278255360 & (h3 << 24 | h3 >>> 8);
        }
        return a3;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      function u2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & n3 | ~t4 & s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function h2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & s3 | n3 & ~s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function l2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 ^ n3 ^ s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function d2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (n3 ^ (t4 | ~s3)) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      t3.MD5 = i2._createHelper(c2), t3.HmacMD5 = i2._createHmacHelper(c2);
    }(Math), n2.MD5);
  }), n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, void function() {
      var e3 = n2, t3 = e3.lib.Base, s2 = e3.enc.Utf8;
      e3.algo.HMAC = t3.extend({ init: function(e4, t4) {
        e4 = this._hasher = new e4.init(), "string" == typeof t4 && (t4 = s2.parse(t4));
        var n3 = e4.blockSize, r2 = 4 * n3;
        t4.sigBytes > r2 && (t4 = e4.finalize(t4)), t4.clamp();
        for (var i2 = this._oKey = t4.clone(), o2 = this._iKey = t4.clone(), a2 = i2.words, c2 = o2.words, u2 = 0; u2 < n3; u2++)
          a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
        i2.sigBytes = o2.sigBytes = r2, this.reset();
      }, reset: function() {
        var e4 = this._hasher;
        e4.reset(), e4.update(this._iKey);
      }, update: function(e4) {
        return this._hasher.update(e4), this;
      }, finalize: function(e4) {
        var t4 = this._hasher, n3 = t4.finalize(e4);
        return t4.reset(), t4.finalize(this._oKey.clone().concat(n3));
      } });
    }());
  }), n(function(e2, t2) {
    e2.exports = r.HmacMD5;
  })), o = n(function(e2, t2) {
    e2.exports = r.enc.Utf8;
  }), a = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function() {
      var e3 = n2, t3 = e3.lib.WordArray;
      function s2(e4, n3, s3) {
        for (var r2 = [], i2 = 0, o2 = 0; o2 < n3; o2++)
          if (o2 % 4) {
            var a2 = s3[e4.charCodeAt(o2 - 1)] << o2 % 4 * 2, c2 = s3[e4.charCodeAt(o2)] >>> 6 - o2 % 4 * 2;
            r2[i2 >>> 2] |= (a2 | c2) << 24 - i2 % 4 * 8, i2++;
          }
        return t3.create(r2, i2);
      }
      e3.enc.Base64 = { stringify: function(e4) {
        var t4 = e4.words, n3 = e4.sigBytes, s3 = this._map;
        e4.clamp();
        for (var r2 = [], i2 = 0; i2 < n3; i2 += 3)
          for (var o2 = (t4[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255) << 16 | (t4[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255) << 8 | t4[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255, a2 = 0; a2 < 4 && i2 + 0.75 * a2 < n3; a2++)
            r2.push(s3.charAt(o2 >>> 6 * (3 - a2) & 63));
        var c2 = s3.charAt(64);
        if (c2)
          for (; r2.length % 4; )
            r2.push(c2);
        return r2.join("");
      }, parse: function(e4) {
        var t4 = e4.length, n3 = this._map, r2 = this._reverseMap;
        if (!r2) {
          r2 = this._reverseMap = [];
          for (var i2 = 0; i2 < n3.length; i2++)
            r2[n3.charCodeAt(i2)] = i2;
        }
        var o2 = n3.charAt(64);
        if (o2) {
          var a2 = e4.indexOf(o2);
          -1 !== a2 && (t4 = a2);
        }
        return s2(e4, t4, r2);
      }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
    }(), n2.enc.Base64);
  });
  const c = "FUNCTION", u = "OBJECT", h = "CLIENT_DB", l = "pending", d = "fulfilled", p = "rejected";
  function f(e2) {
    return Object.prototype.toString.call(e2).slice(8, -1).toLowerCase();
  }
  function g(e2) {
    return "object" === f(e2);
  }
  function m(e2) {
    return "function" == typeof e2;
  }
  function y(e2) {
    return function() {
      try {
        return e2.apply(e2, arguments);
      } catch (e3) {
        console.error(e3);
      }
    };
  }
  const _ = "REJECTED", w = "NOT_PENDING";
  class v {
    constructor({ createPromise: e2, retryRule: t2 = _ } = {}) {
      this.createPromise = e2, this.status = null, this.promise = null, this.retryRule = t2;
    }
    get needRetry() {
      if (!this.status)
        return true;
      switch (this.retryRule) {
        case _:
          return this.status === p;
        case w:
          return this.status !== l;
      }
    }
    exec() {
      return this.needRetry ? (this.status = l, this.promise = this.createPromise().then((e2) => (this.status = d, Promise.resolve(e2)), (e2) => (this.status = p, Promise.reject(e2))), this.promise) : this.promise;
    }
  }
  function I(e2) {
    return e2 && "string" == typeof e2 ? JSON.parse(e2) : e2;
  }
  const S = true, b = "app", A = I(define_process_env_UNI_SECURE_NETWORK_CONFIG_default), C = b, P = I(""), T = I("[]") || [];
  let O = "";
  try {
    O = "__UNI__6FAB407";
  } catch (e2) {
  }
  let E = {};
  function L(e2, t2 = {}) {
    var n2, s2;
    return n2 = E, s2 = e2, Object.prototype.hasOwnProperty.call(n2, s2) || (E[e2] = t2), E[e2];
  }
  E = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {};
  const R = ["invoke", "success", "fail", "complete"], U = L("_globalUniCloudInterceptor");
  function N(e2, t2) {
    U[e2] || (U[e2] = {}), g(t2) && Object.keys(t2).forEach((n2) => {
      R.indexOf(n2) > -1 && function(e3, t3, n3) {
        let s2 = U[e3][t3];
        s2 || (s2 = U[e3][t3] = []), -1 === s2.indexOf(n3) && m(n3) && s2.push(n3);
      }(e2, n2, t2[n2]);
    });
  }
  function D(e2, t2) {
    U[e2] || (U[e2] = {}), g(t2) ? Object.keys(t2).forEach((n2) => {
      R.indexOf(n2) > -1 && function(e3, t3, n3) {
        const s2 = U[e3][t3];
        if (!s2)
          return;
        const r2 = s2.indexOf(n3);
        r2 > -1 && s2.splice(r2, 1);
      }(e2, n2, t2[n2]);
    }) : delete U[e2];
  }
  function M(e2, t2) {
    return e2 && 0 !== e2.length ? e2.reduce((e3, n2) => e3.then(() => n2(t2)), Promise.resolve()) : Promise.resolve();
  }
  function q(e2, t2) {
    return U[e2] && U[e2][t2] || [];
  }
  function F(e2) {
    N("callObject", e2);
  }
  const K = L("_globalUniCloudListener"), j = "response", $ = "needLogin", B = "refreshToken", W = "clientdb", H = "cloudfunction", z = "cloudobject";
  function J(e2) {
    return K[e2] || (K[e2] = []), K[e2];
  }
  function V(e2, t2) {
    const n2 = J(e2);
    n2.includes(t2) || n2.push(t2);
  }
  function G(e2, t2) {
    const n2 = J(e2), s2 = n2.indexOf(t2);
    -1 !== s2 && n2.splice(s2, 1);
  }
  function Y(e2, t2) {
    const n2 = J(e2);
    for (let e3 = 0; e3 < n2.length; e3++) {
      (0, n2[e3])(t2);
    }
  }
  let Q, X = false;
  function Z() {
    return Q || (Q = new Promise((e2) => {
      X && e2(), function t2() {
        if ("function" == typeof getCurrentPages) {
          const t3 = getCurrentPages();
          t3 && t3[0] && (X = true, e2());
        }
        X || setTimeout(() => {
          t2();
        }, 30);
      }();
    }), Q);
  }
  function ee(e2) {
    const t2 = {};
    for (const n2 in e2) {
      const s2 = e2[n2];
      m(s2) && (t2[n2] = y(s2));
    }
    return t2;
  }
  class te extends Error {
    constructor(e2) {
      super(e2.message), this.errMsg = e2.message || e2.errMsg || "unknown system error", this.code = this.errCode = e2.code || e2.errCode || "SYSTEM_ERROR", this.errSubject = this.subject = e2.subject || e2.errSubject, this.cause = e2.cause, this.requestId = e2.requestId;
    }
    toJson(e2 = 0) {
      if (!(e2 >= 10))
        return e2++, { errCode: this.errCode, errMsg: this.errMsg, errSubject: this.errSubject, cause: this.cause && this.cause.toJson ? this.cause.toJson(e2) : this.cause };
    }
  }
  var ne = { request: (e2) => uni.request(e2), uploadFile: (e2) => uni.uploadFile(e2), setStorageSync: (e2, t2) => uni.setStorageSync(e2, t2), getStorageSync: (e2) => uni.getStorageSync(e2), removeStorageSync: (e2) => uni.removeStorageSync(e2), clearStorageSync: () => uni.clearStorageSync(), connectSocket: (e2) => uni.connectSocket(e2) };
  function se(e2) {
    return e2 && se(e2.__v_raw) || e2;
  }
  function re() {
    return { token: ne.getStorageSync("uni_id_token") || ne.getStorageSync("uniIdToken"), tokenExpired: ne.getStorageSync("uni_id_token_expired") };
  }
  function ie({ token: e2, tokenExpired: t2 } = {}) {
    e2 && ne.setStorageSync("uni_id_token", e2), t2 && ne.setStorageSync("uni_id_token_expired", t2);
  }
  let oe, ae;
  function ce() {
    return oe || (oe = uni.getSystemInfoSync()), oe;
  }
  function ue() {
    let e2, t2;
    try {
      if (uni.getLaunchOptionsSync) {
        if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1)
          return;
        const { scene: n2, channel: s2 } = uni.getLaunchOptionsSync();
        e2 = s2, t2 = n2;
      }
    } catch (e3) {
    }
    return { channel: e2, scene: t2 };
  }
  let he = {};
  function le() {
    const e2 = uni.getLocale && uni.getLocale() || "en";
    if (ae)
      return { ...he, ...ae, locale: e2, LOCALE: e2 };
    const t2 = ce(), { deviceId: n2, osName: s2, uniPlatform: r2, appId: i2 } = t2, o2 = ["appId", "appLanguage", "appName", "appVersion", "appVersionCode", "appWgtVersion", "browserName", "browserVersion", "deviceBrand", "deviceId", "deviceModel", "deviceType", "osName", "osVersion", "romName", "romVersion", "ua", "hostName", "hostVersion", "uniPlatform", "uniRuntimeVersion", "uniRuntimeVersionCode", "uniCompilerVersion", "uniCompilerVersionCode"];
    for (const e3 in t2)
      Object.hasOwnProperty.call(t2, e3) && -1 === o2.indexOf(e3) && delete t2[e3];
    return ae = { PLATFORM: r2, OS: s2, APPID: i2, DEVICEID: n2, ...ue(), ...t2 }, { ...he, ...ae, locale: e2, LOCALE: e2 };
  }
  var de = { sign: function(e2, t2) {
    let n2 = "";
    return Object.keys(e2).sort().forEach(function(t3) {
      e2[t3] && (n2 = n2 + "&" + t3 + "=" + e2[t3]);
    }), n2 = n2.slice(1), i(n2, t2).toString();
  }, wrappedRequest: function(e2, t2) {
    return new Promise((n2, s2) => {
      t2(Object.assign(e2, { complete(e3) {
        e3 || (e3 = {});
        const t3 = e3.data && e3.data.header && e3.data.header["x-serverless-request-id"] || e3.header && e3.header["request-id"];
        if (!e3.statusCode || e3.statusCode >= 400) {
          const n3 = e3.data && e3.data.error && e3.data.error.code || "SYS_ERR", r3 = e3.data && e3.data.error && e3.data.error.message || e3.errMsg || "request:fail";
          return s2(new te({ code: n3, message: r3, requestId: t3 }));
        }
        const r2 = e3.data;
        if (r2.error)
          return s2(new te({ code: r2.error.code, message: r2.error.message, requestId: t3 }));
        r2.result = r2.data, r2.requestId = t3, delete r2.data, n2(r2);
      } }));
    });
  }, toBase64: function(e2) {
    return a.stringify(o.parse(e2));
  } };
  var pe = class {
    constructor(e2) {
      ["spaceId", "clientSecret"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new Error(`${t2} required`);
      }), this.config = Object.assign({}, { endpoint: 0 === e2.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com" }, e2), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = ne, this._getAccessTokenPromiseHub = new v({ createPromise: () => this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e3) => {
        if (!e3.result || !e3.result.accessToken)
          throw new te({ code: "AUTH_FAILED", message: "获取accessToken失败" });
        this.setAccessToken(e3.result.accessToken);
      }), retryRule: w });
    }
    get hasAccessToken() {
      return !!this.accessToken;
    }
    setAccessToken(e2) {
      this.accessToken = e2;
    }
    requestWrapped(e2) {
      return de.wrappedRequest(e2, this.adapter.request);
    }
    requestAuth(e2) {
      return this.requestWrapped(e2);
    }
    request(e2, t2) {
      return Promise.resolve().then(() => this.hasAccessToken ? t2 ? this.requestWrapped(e2) : this.requestWrapped(e2).catch((t3) => new Promise((e3, n2) => {
        !t3 || "GATEWAY_INVALID_TOKEN" !== t3.code && "InvalidParameter.InvalidToken" !== t3.code ? n2(t3) : e3();
      }).then(() => this.getAccessToken()).then(() => {
        const t4 = this.rebuildRequest(e2);
        return this.request(t4, true);
      })) : this.getAccessToken().then(() => {
        const t3 = this.rebuildRequest(e2);
        return this.request(t3, true);
      }));
    }
    rebuildRequest(e2) {
      const t2 = Object.assign({}, e2);
      return t2.data.token = this.accessToken, t2.header["x-basement-token"] = this.accessToken, t2.header["x-serverless-sign"] = de.sign(t2.data, this.config.clientSecret), t2;
    }
    setupRequest(e2, t2) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = de.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
    }
    getAccessToken() {
      return this._getAccessTokenPromiseHub.exec();
    }
    async authorize() {
      await this.getAccessToken();
    }
    callFunction(e2) {
      const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e2.name, functionArgs: e2.data || {} }) };
      return this.request(this.setupRequest(t2));
    }
    getOSSUploadOptionsFromPath(e2) {
      const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t2));
    }
    uploadFileToOSS({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e3) {
          e3 && e3.statusCode < 400 ? o2(e3) : a2(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          a2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
          i2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    reportOSSUpload(e2) {
      const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t2));
    }
    async uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", cloudPathAsRealPath: s2 = false, onUploadProgress: r2, config: i2 }) {
      if ("string" !== f(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
      if (!(t2 = t2.trim()))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不可为空" });
      if (/:\/\//.test(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不合法" });
      const o2 = i2 && i2.envType || this.config.envType;
      if (s2 && ("/" !== t2[0] && (t2 = "/" + t2), t2.indexOf("\\") > -1))
        throw new te({ code: "INVALID_PARAM", message: "使用cloudPath作为路径时，cloudPath不可包含“\\”" });
      const a2 = (await this.getOSSUploadOptionsFromPath({ env: o2, filename: s2 ? t2.split("/").pop() : t2, fileId: s2 ? t2 : void 0 })).result, c2 = "https://" + a2.cdnDomain + "/" + a2.ossPath, { securityToken: u2, accessKeyId: h2, signature: l2, host: d2, ossPath: p2, id: g2, policy: m2, ossCallbackUrl: y2 } = a2, _2 = { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: h2, Signature: l2, host: d2, id: g2, key: p2, policy: m2, success_action_status: 200 };
      if (u2 && (_2["x-oss-security-token"] = u2), y2) {
        const e3 = JSON.stringify({ callbackUrl: y2, callbackBody: JSON.stringify({ fileId: g2, spaceId: this.config.spaceId }), callbackBodyType: "application/json" });
        _2.callback = de.toBase64(e3);
      }
      const w2 = { url: "https://" + a2.host, formData: _2, fileName: "file", name: "file", filePath: e2, fileType: n2 };
      if (await this.uploadFileToOSS(Object.assign({}, w2, { onUploadProgress: r2 })), y2)
        return { success: true, filePath: e2, fileID: c2 };
      if ((await this.reportOSSUpload({ id: g2 })).success)
        return { success: true, filePath: e2, fileID: c2 };
      throw new te({ code: "UPLOAD_FAILED", message: "文件上传失败" });
    }
    getTempFileURL({ fileList: e2 } = {}) {
      return new Promise((t2, n2) => {
        Array.isArray(e2) && 0 !== e2.length || n2(new te({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), t2({ fileList: e2.map((e3) => ({ fileID: e3, tempFileURL: e3 })) });
      });
    }
    async getFileInfo({ fileList: e2 } = {}) {
      if (!Array.isArray(e2) || 0 === e2.length)
        throw new te({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
      const t2 = { method: "serverless.file.resource.info", params: JSON.stringify({ id: e2.map((e3) => e3.split("?")[0]).join(",") }) };
      return { fileList: (await this.request(this.setupRequest(t2))).result };
    }
  };
  var fe = { init(e2) {
    const t2 = new pe(e2), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  const ge = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
  var me;
  !function(e2) {
    e2.local = "local", e2.none = "none", e2.session = "session";
  }(me || (me = {}));
  var ye = function() {
  }, _e = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [], c2 = [];
      !function() {
        function t4(t5) {
          for (var n4 = e3.sqrt(t5), s4 = 2; s4 <= n4; s4++)
            if (!(t5 % s4))
              return false;
          return true;
        }
        function n3(e4) {
          return 4294967296 * (e4 - (0 | e4)) | 0;
        }
        for (var s3 = 2, r3 = 0; r3 < 64; )
          t4(s3) && (r3 < 8 && (a2[r3] = n3(e3.pow(s3, 0.5))), c2[r3] = n3(e3.pow(s3, 1 / 3)), r3++), s3++;
      }();
      var u2 = [], h2 = o2.SHA256 = i2.extend({ _doReset: function() {
        this._hash = new r2.init(a2.slice(0));
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = this._hash.words, s3 = n3[0], r3 = n3[1], i3 = n3[2], o3 = n3[3], a3 = n3[4], h3 = n3[5], l2 = n3[6], d2 = n3[7], p2 = 0; p2 < 64; p2++) {
          if (p2 < 16)
            u2[p2] = 0 | e4[t4 + p2];
          else {
            var f2 = u2[p2 - 15], g2 = (f2 << 25 | f2 >>> 7) ^ (f2 << 14 | f2 >>> 18) ^ f2 >>> 3, m2 = u2[p2 - 2], y2 = (m2 << 15 | m2 >>> 17) ^ (m2 << 13 | m2 >>> 19) ^ m2 >>> 10;
            u2[p2] = g2 + u2[p2 - 7] + y2 + u2[p2 - 16];
          }
          var _2 = s3 & r3 ^ s3 & i3 ^ r3 & i3, w2 = (s3 << 30 | s3 >>> 2) ^ (s3 << 19 | s3 >>> 13) ^ (s3 << 10 | s3 >>> 22), v2 = d2 + ((a3 << 26 | a3 >>> 6) ^ (a3 << 21 | a3 >>> 11) ^ (a3 << 7 | a3 >>> 25)) + (a3 & h3 ^ ~a3 & l2) + c2[p2] + u2[p2];
          d2 = l2, l2 = h3, h3 = a3, a3 = o3 + v2 | 0, o3 = i3, i3 = r3, r3 = s3, s3 = v2 + (w2 + _2) | 0;
        }
        n3[0] = n3[0] + s3 | 0, n3[1] = n3[1] + r3 | 0, n3[2] = n3[2] + i3 | 0, n3[3] = n3[3] + o3 | 0, n3[4] = n3[4] + a3 | 0, n3[5] = n3[5] + h3 | 0, n3[6] = n3[6] + l2 | 0, n3[7] = n3[7] + d2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        return n3[r3 >>> 5] |= 128 << 24 - r3 % 32, n3[14 + (r3 + 64 >>> 9 << 4)] = e3.floor(s3 / 4294967296), n3[15 + (r3 + 64 >>> 9 << 4)] = s3, t4.sigBytes = 4 * n3.length, this._process(), this._hash;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      t3.SHA256 = i2._createHelper(h2), t3.HmacSHA256 = i2._createHmacHelper(h2);
    }(Math), n2.SHA256);
  }), we = _e, ve = n(function(e2, t2) {
    e2.exports = r.HmacSHA256;
  });
  const Ie = () => {
    let e2;
    if (!Promise) {
      e2 = () => {
      }, e2.promise = {};
      const t3 = () => {
        throw new te({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });
      };
      return Object.defineProperty(e2.promise, "then", { get: t3 }), Object.defineProperty(e2.promise, "catch", { get: t3 }), e2;
    }
    const t2 = new Promise((t3, n2) => {
      e2 = (e3, s2) => e3 ? n2(e3) : t3(s2);
    });
    return e2.promise = t2, e2;
  };
  function Se(e2) {
    return void 0 === e2;
  }
  function be(e2) {
    return "[object Null]" === Object.prototype.toString.call(e2);
  }
  var ke;
  function Ae(e2) {
    const t2 = (n2 = e2, "[object Array]" === Object.prototype.toString.call(n2) ? e2 : [e2]);
    var n2;
    for (const e3 of t2) {
      const { isMatch: t3, genAdapter: n3, runtime: s2 } = e3;
      if (t3())
        return { adapter: n3(), runtime: s2 };
    }
  }
  !function(e2) {
    e2.WEB = "web", e2.WX_MP = "wx_mp";
  }(ke || (ke = {}));
  const Ce = { adapter: null, runtime: void 0 }, Pe = ["anonymousUuidKey"];
  class Te extends ye {
    constructor() {
      super(), Ce.adapter.root.tcbObject || (Ce.adapter.root.tcbObject = {});
    }
    setItem(e2, t2) {
      Ce.adapter.root.tcbObject[e2] = t2;
    }
    getItem(e2) {
      return Ce.adapter.root.tcbObject[e2];
    }
    removeItem(e2) {
      delete Ce.adapter.root.tcbObject[e2];
    }
    clear() {
      delete Ce.adapter.root.tcbObject;
    }
  }
  function xe(e2, t2) {
    switch (e2) {
      case "local":
        return t2.localStorage || new Te();
      case "none":
        return new Te();
      default:
        return t2.sessionStorage || new Te();
    }
  }
  class Oe {
    constructor(e2) {
      if (!this._storage) {
        this._persistence = Ce.adapter.primaryStorage || e2.persistence, this._storage = xe(this._persistence, Ce.adapter);
        const t2 = `access_token_${e2.env}`, n2 = `access_token_expire_${e2.env}`, s2 = `refresh_token_${e2.env}`, r2 = `anonymous_uuid_${e2.env}`, i2 = `login_type_${e2.env}`, o2 = `user_info_${e2.env}`;
        this.keys = { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: r2, loginTypeKey: i2, userInfoKey: o2 };
      }
    }
    updatePersistence(e2) {
      if (e2 === this._persistence)
        return;
      const t2 = "local" === this._persistence;
      this._persistence = e2;
      const n2 = xe(e2, Ce.adapter);
      for (const e3 in this.keys) {
        const s2 = this.keys[e3];
        if (t2 && Pe.includes(e3))
          continue;
        const r2 = this._storage.getItem(s2);
        Se(r2) || be(r2) || (n2.setItem(s2, r2), this._storage.removeItem(s2));
      }
      this._storage = n2;
    }
    setStore(e2, t2, n2) {
      if (!this._storage)
        return;
      const s2 = { version: n2 || "localCachev1", content: t2 }, r2 = JSON.stringify(s2);
      try {
        this._storage.setItem(e2, r2);
      } catch (e3) {
        throw e3;
      }
    }
    getStore(e2, t2) {
      try {
        if (!this._storage)
          return;
      } catch (e3) {
        return "";
      }
      t2 = t2 || "localCachev1";
      const n2 = this._storage.getItem(e2);
      if (!n2)
        return "";
      if (n2.indexOf(t2) >= 0) {
        return JSON.parse(n2).content;
      }
      return "";
    }
    removeStore(e2) {
      this._storage.removeItem(e2);
    }
  }
  const Ee = {}, Le = {};
  function Re(e2) {
    return Ee[e2];
  }
  class Ue {
    constructor(e2, t2) {
      this.data = t2 || null, this.name = e2;
    }
  }
  class Ne extends Ue {
    constructor(e2, t2) {
      super("error", { error: e2, data: t2 }), this.error = e2;
    }
  }
  const De = new class {
    constructor() {
      this._listeners = {};
    }
    on(e2, t2) {
      return function(e3, t3, n2) {
        n2[e3] = n2[e3] || [], n2[e3].push(t3);
      }(e2, t2, this._listeners), this;
    }
    off(e2, t2) {
      return function(e3, t3, n2) {
        if (n2 && n2[e3]) {
          const s2 = n2[e3].indexOf(t3);
          -1 !== s2 && n2[e3].splice(s2, 1);
        }
      }(e2, t2, this._listeners), this;
    }
    fire(e2, t2) {
      if (e2 instanceof Ne)
        return console.error(e2.error), this;
      const n2 = "string" == typeof e2 ? new Ue(e2, t2 || {}) : e2;
      const s2 = n2.name;
      if (this._listens(s2)) {
        n2.target = this;
        const e3 = this._listeners[s2] ? [...this._listeners[s2]] : [];
        for (const t3 of e3)
          t3.call(this, n2);
      }
      return this;
    }
    _listens(e2) {
      return this._listeners[e2] && this._listeners[e2].length > 0;
    }
  }();
  function Me(e2, t2) {
    De.on(e2, t2);
  }
  function qe(e2, t2 = {}) {
    De.fire(e2, t2);
  }
  function Fe(e2, t2) {
    De.off(e2, t2);
  }
  const Ke = "loginStateChanged", je = "loginStateExpire", $e = "loginTypeChanged", Be = "anonymousConverted", We = "refreshAccessToken";
  var He;
  !function(e2) {
    e2.ANONYMOUS = "ANONYMOUS", e2.WECHAT = "WECHAT", e2.WECHAT_PUBLIC = "WECHAT-PUBLIC", e2.WECHAT_OPEN = "WECHAT-OPEN", e2.CUSTOM = "CUSTOM", e2.EMAIL = "EMAIL", e2.USERNAME = "USERNAME", e2.NULL = "NULL";
  }(He || (He = {}));
  const ze = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"], Je = { "X-SDK-Version": "1.3.5" };
  function Ve(e2, t2, n2) {
    const s2 = e2[t2];
    e2[t2] = function(t3) {
      const r2 = {}, i2 = {};
      n2.forEach((n3) => {
        const { data: s3, headers: o3 } = n3.call(e2, t3);
        Object.assign(r2, s3), Object.assign(i2, o3);
      });
      const o2 = t3.data;
      return o2 && (() => {
        var e3;
        if (e3 = o2, "[object FormData]" !== Object.prototype.toString.call(e3))
          t3.data = { ...o2, ...r2 };
        else
          for (const e4 in r2)
            o2.append(e4, r2[e4]);
      })(), t3.headers = { ...t3.headers || {}, ...i2 }, s2.call(e2, t3);
    };
  }
  function Ge() {
    const e2 = Math.random().toString(16).slice(2);
    return { data: { seqId: e2 }, headers: { ...Je, "x-seqid": e2 } };
  }
  class Ye {
    constructor(e2 = {}) {
      var t2;
      this.config = e2, this._reqClass = new Ce.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `请求在${this.config.timeout / 1e3}s内未完成，已中断`, restrictedMethods: ["post"] }), this._cache = Re(this.config.env), this._localCache = (t2 = this.config.env, Le[t2]), Ve(this._reqClass, "post", [Ge]), Ve(this._reqClass, "upload", [Ge]), Ve(this._reqClass, "download", [Ge]);
    }
    async post(e2) {
      return await this._reqClass.post(e2);
    }
    async upload(e2) {
      return await this._reqClass.upload(e2);
    }
    async download(e2) {
      return await this._reqClass.download(e2);
    }
    async refreshAccessToken() {
      let e2, t2;
      this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
      try {
        e2 = await this._refreshAccessTokenPromise;
      } catch (e3) {
        t2 = e3;
      }
      if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t2)
        throw t2;
      return e2;
    }
    async _refreshAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: r2 } = this._cache.keys;
      this._cache.removeStore(e2), this._cache.removeStore(t2);
      let i2 = this._cache.getStore(n2);
      if (!i2)
        throw new te({ message: "未登录CloudBase" });
      const o2 = { refresh_token: i2 }, a2 = await this.request("auth.fetchAccessTokenWithRefreshToken", o2);
      if (a2.data.code) {
        const { code: e3 } = a2.data;
        if ("SIGN_PARAM_INVALID" === e3 || "REFRESH_TOKEN_EXPIRED" === e3 || "INVALID_REFRESH_TOKEN" === e3) {
          if (this._cache.getStore(s2) === He.ANONYMOUS && "INVALID_REFRESH_TOKEN" === e3) {
            const e4 = this._cache.getStore(r2), t3 = this._cache.getStore(n2), s3 = await this.send("auth.signInAnonymously", { anonymous_uuid: e4, refresh_token: t3 });
            return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
          }
          qe(je), this._cache.removeStore(n2);
        }
        throw new te({ code: a2.data.code, message: `刷新access token失败：${a2.data.code}` });
      }
      if (a2.data.access_token)
        return qe(We), this._cache.setStore(e2, a2.data.access_token), this._cache.setStore(t2, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
      a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
    }
    async getAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2 } = this._cache.keys;
      if (!this._cache.getStore(n2))
        throw new te({ message: "refresh token不存在，登录状态异常" });
      let s2 = this._cache.getStore(e2), r2 = this._cache.getStore(t2), i2 = true;
      return this._shouldRefreshAccessTokenHook && !await this._shouldRefreshAccessTokenHook(s2, r2) && (i2 = false), (!s2 || !r2 || r2 < Date.now()) && i2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: r2 };
    }
    async request(e2, t2, n2) {
      const s2 = `x-tcb-trace_${this.config.env}`;
      let r2 = "application/x-www-form-urlencoded";
      const i2 = { action: e2, env: this.config.env, dataVersion: "2019-08-16", ...t2 };
      if (-1 === ze.indexOf(e2)) {
        const { refreshTokenKey: e3 } = this._cache.keys;
        this._cache.getStore(e3) && (i2.access_token = (await this.getAccessToken()).accessToken);
      }
      let o2;
      if ("storage.uploadFile" === e2) {
        o2 = new FormData();
        for (let e3 in o2)
          o2.hasOwnProperty(e3) && void 0 !== o2[e3] && o2.append(e3, i2[e3]);
        r2 = "multipart/form-data";
      } else {
        r2 = "application/json", o2 = {};
        for (let e3 in i2)
          void 0 !== i2[e3] && (o2[e3] = i2[e3]);
      }
      let a2 = { headers: { "content-type": r2 } };
      n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
      const c2 = this._localCache.getStore(s2);
      c2 && (a2.headers["X-TCB-Trace"] = c2);
      const { parse: u2, inQuery: h2, search: l2 } = t2;
      let d2 = { env: this.config.env };
      u2 && (d2.parse = true), h2 && (d2 = { ...h2, ...d2 });
      let p2 = function(e3, t3, n3 = {}) {
        const s3 = /\?/.test(t3);
        let r3 = "";
        for (let e4 in n3)
          "" === r3 ? !s3 && (t3 += "?") : r3 += "&", r3 += `${e4}=${encodeURIComponent(n3[e4])}`;
        return /^http(s)?\:\/\//.test(t3 += r3) ? t3 : `${e3}${t3}`;
      }(ge, "//tcb-api.tencentcloudapi.com/web", d2);
      l2 && (p2 += l2);
      const f2 = await this.post({ url: p2, data: o2, ...a2 }), g2 = f2.header && f2.header["x-tcb-trace"];
      if (g2 && this._localCache.setStore(s2, g2), 200 !== Number(f2.status) && 200 !== Number(f2.statusCode) || !f2.data)
        throw new te({ code: "NETWORK_ERROR", message: "network request error" });
      return f2;
    }
    async send(e2, t2 = {}) {
      const n2 = await this.request(e2, t2, { onUploadProgress: t2.onUploadProgress });
      if ("ACCESS_TOKEN_EXPIRED" === n2.data.code && -1 === ze.indexOf(e2)) {
        await this.refreshAccessToken();
        const n3 = await this.request(e2, t2, { onUploadProgress: t2.onUploadProgress });
        if (n3.data.code)
          throw new te({ code: n3.data.code, message: n3.data.message });
        return n3.data;
      }
      if (n2.data.code)
        throw new te({ code: n2.data.code, message: n2.data.message });
      return n2.data;
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
  }
  const Qe = {};
  function Xe(e2) {
    return Qe[e2];
  }
  class Ze {
    constructor(e2) {
      this.config = e2, this._cache = Re(e2.env), this._request = Xe(e2.env);
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
    setAccessToken(e2, t2) {
      const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
      this._cache.setStore(n2, e2), this._cache.setStore(s2, t2);
    }
    async refreshUserInfo() {
      const { data: e2 } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e2), e2;
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e2);
    }
  }
  class et {
    constructor(e2) {
      if (!e2)
        throw new te({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._envId = e2, this._cache = Re(this._envId), this._request = Xe(this._envId), this.setUserInfo();
    }
    linkWithTicket(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "ticket must be string" });
      return this._request.send("auth.linkWithTicket", { ticket: e2 });
    }
    linkWithRedirect(e2) {
      e2.signInWithRedirect();
    }
    updatePassword(e2, t2) {
      return this._request.send("auth.updatePassword", { oldPassword: t2, newPassword: e2 });
    }
    updateEmail(e2) {
      return this._request.send("auth.updateEmail", { newEmail: e2 });
    }
    updateUsername(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
      return this._request.send("auth.updateUsername", { username: e2 });
    }
    async getLinkedUidList() {
      const { data: e2 } = await this._request.send("auth.getLinkedUidList", {});
      let t2 = false;
      const { users: n2 } = e2;
      return n2.forEach((e3) => {
        e3.wxOpenId && e3.wxPublicId && (t2 = true);
      }), { users: n2, hasPrimaryUid: t2 };
    }
    setPrimaryUid(e2) {
      return this._request.send("auth.setPrimaryUid", { uid: e2 });
    }
    unlink(e2) {
      return this._request.send("auth.unlink", { platform: e2 });
    }
    async update(e2) {
      const { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 } = e2, { data: a2 } = await this._request.send("auth.updateUserInfo", { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 });
      this.setLocalUserInfo(a2);
    }
    async refresh() {
      const { data: e2 } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e2), e2;
    }
    setUserInfo() {
      const { userInfoKey: e2 } = this._cache.keys, t2 = this._cache.getStore(e2);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e3) => {
        this[e3] = t2[e3];
      }), this.location = { country: t2.country, province: t2.province, city: t2.city };
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e2), this.setUserInfo();
    }
  }
  class tt {
    constructor(e2) {
      if (!e2)
        throw new te({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._cache = Re(e2);
      const { refreshTokenKey: t2, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, r2 = this._cache.getStore(t2), i2 = this._cache.getStore(n2), o2 = this._cache.getStore(s2);
      this.credential = { refreshToken: r2, accessToken: i2, accessTokenExpire: o2 }, this.user = new et(e2);
    }
    get isAnonymousAuth() {
      return this.loginType === He.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === He.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === He.WECHAT || this.loginType === He.WECHAT_OPEN || this.loginType === He.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }
  class nt extends Ze {
    async signIn() {
      this._cache.updatePersistence("local");
      const { anonymousUuidKey: e2, refreshTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2) || void 0, s2 = this._cache.getStore(t2) || void 0, r2 = await this._request.send("auth.signInAnonymously", { anonymous_uuid: n2, refresh_token: s2 });
      if (r2.uuid && r2.refresh_token) {
        this._setAnonymousUUID(r2.uuid), this.setRefreshToken(r2.refresh_token), await this._request.refreshAccessToken(), qe(Ke), qe($e, { env: this.config.env, loginType: He.ANONYMOUS, persistence: "local" });
        const e3 = new tt(this.config.env);
        return await e3.user.refresh(), e3;
      }
      throw new te({ message: "匿名登录失败" });
    }
    async linkAndRetrieveDataWithTicket(e2) {
      const { anonymousUuidKey: t2, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t2), r2 = this._cache.getStore(n2), i2 = await this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: r2, ticket: e2 });
      if (i2.refresh_token)
        return this._clearAnonymousUUID(), this.setRefreshToken(i2.refresh_token), await this._request.refreshAccessToken(), qe(Be, { env: this.config.env }), qe($e, { loginType: He.CUSTOM, persistence: "local" }), { credential: { refreshToken: i2.refresh_token } };
      throw new te({ message: "匿名转化失败" });
    }
    _setAnonymousUUID(e2) {
      const { anonymousUuidKey: t2, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.setStore(t2, e2), this._cache.setStore(n2, He.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }
  class st extends Ze {
    async signIn(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "ticket must be a string" });
      const { refreshTokenKey: t2 } = this._cache.keys, n2 = await this._request.send("auth.signInWithTicket", { ticket: e2, refresh_token: this._cache.getStore(t2) || "" });
      if (n2.refresh_token)
        return this.setRefreshToken(n2.refresh_token), await this._request.refreshAccessToken(), qe(Ke), qe($e, { env: this.config.env, loginType: He.CUSTOM, persistence: this.config.persistence }), await this.refreshUserInfo(), new tt(this.config.env);
      throw new te({ message: "自定义登录失败" });
    }
  }
  class rt extends Ze {
    async signIn(e2, t2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "email must be a string" });
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: "EMAIL", email: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token: i2, access_token_expire: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), i2 && o2 ? this.setAccessToken(i2, o2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), qe(Ke), qe($e, { env: this.config.env, loginType: He.EMAIL, persistence: this.config.persistence }), new tt(this.config.env);
      throw s2.code ? new te({ code: s2.code, message: `邮箱登录失败: ${s2.message}` }) : new te({ message: "邮箱登录失败" });
    }
    async activate(e2) {
      return this._request.send("auth.activateEndUserMail", { token: e2 });
    }
    async resetPasswordWithToken(e2, t2) {
      return this._request.send("auth.resetPasswordWithToken", { token: e2, newPassword: t2 });
    }
  }
  class it extends Ze {
    async signIn(e2, t2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
      "string" != typeof t2 && (t2 = "", console.warn("password is empty"));
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: He.USERNAME, username: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token_expire: i2, access_token: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), o2 && i2 ? this.setAccessToken(o2, i2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), qe(Ke), qe($e, { env: this.config.env, loginType: He.USERNAME, persistence: this.config.persistence }), new tt(this.config.env);
      throw s2.code ? new te({ code: s2.code, message: `用户名密码登录失败: ${s2.message}` }) : new te({ message: "用户名密码登录失败" });
    }
  }
  class ot {
    constructor(e2) {
      this.config = e2, this._cache = Re(e2.env), this._request = Xe(e2.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Me($e, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e2 = this.hasLoginState();
      return e2 && e2.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new nt(this.config);
    }
    customAuthProvider() {
      return new st(this.config);
    }
    emailAuthProvider() {
      return new rt(this.config);
    }
    usernameAuthProvider() {
      return new it(this.config);
    }
    async signInAnonymously() {
      return new nt(this.config).signIn();
    }
    async signInWithEmailAndPassword(e2, t2) {
      return new rt(this.config).signIn(e2, t2);
    }
    signInWithUsernameAndPassword(e2, t2) {
      return new it(this.config).signIn(e2, t2);
    }
    async linkAndRetrieveDataWithTicket(e2) {
      this._anonymousAuthProvider || (this._anonymousAuthProvider = new nt(this.config)), Me(Be, this._onAnonymousConverted);
      return await this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e2);
    }
    async signOut() {
      if (this.loginType === He.ANONYMOUS)
        throw new te({ message: "匿名用户不支持登出操作" });
      const { refreshTokenKey: e2, accessTokenKey: t2, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e2);
      if (!s2)
        return;
      const r2 = await this._request.send("auth.logout", { refresh_token: s2 });
      return this._cache.removeStore(e2), this._cache.removeStore(t2), this._cache.removeStore(n2), qe(Ke), qe($e, { env: this.config.env, loginType: He.NULL, persistence: this.config.persistence }), r2;
    }
    async signUpWithEmailAndPassword(e2, t2) {
      return this._request.send("auth.signUpWithEmailAndPassword", { email: e2, password: t2 });
    }
    async sendPasswordResetEmail(e2) {
      return this._request.send("auth.sendPasswordResetEmail", { email: e2 });
    }
    onLoginStateChanged(e2) {
      Me(Ke, () => {
        const t3 = this.hasLoginState();
        e2.call(this, t3);
      });
      const t2 = this.hasLoginState();
      e2.call(this, t2);
    }
    onLoginStateExpired(e2) {
      Me(je, e2.bind(this));
    }
    onAccessTokenRefreshed(e2) {
      Me(We, e2.bind(this));
    }
    onAnonymousConverted(e2) {
      Me(Be, e2.bind(this));
    }
    onLoginTypeChanged(e2) {
      Me($e, () => {
        const t2 = this.hasLoginState();
        e2.call(this, t2);
      });
    }
    async getAccessToken() {
      return { accessToken: (await this._request.getAccessToken()).accessToken, env: this.config.env };
    }
    hasLoginState() {
      const { refreshTokenKey: e2 } = this._cache.keys;
      return this._cache.getStore(e2) ? new tt(this.config.env) : null;
    }
    async isUsernameRegistered(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
      const { data: t2 } = await this._request.send("auth.isUsernameRegistered", { username: e2 });
      return t2 && t2.isRegistered;
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    async signInWithTicket(e2) {
      return new st(this.config).signIn(e2);
    }
    shouldRefreshAccessToken(e2) {
      this._request._shouldRefreshAccessTokenHook = e2.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e2) => e2.code ? e2 : { ...e2.data, requestId: e2.seqId });
    }
    getAuthHeader() {
      const { refreshTokenKey: e2, accessTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2);
      return { "x-cloudbase-credentials": this._cache.getStore(t2) + "/@@/" + n2 };
    }
    _onAnonymousConverted(e2) {
      const { env: t2 } = e2.data;
      t2 === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
    _onLoginTypeChanged(e2) {
      const { loginType: t2, persistence: n2, env: s2 } = e2.data;
      s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t2));
    }
  }
  const at = function(e2, t2) {
    t2 = t2 || Ie();
    const n2 = Xe(this.config.env), { cloudPath: s2, filePath: r2, onUploadProgress: i2, fileType: o2 = "image" } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: h2, cosFileId: l2 }, requestId: d2 } = e3, p2 = { key: s2, signature: c2, "x-cos-meta-fileid": l2, success_action_status: "201", "x-cos-security-token": u2 };
      n2.upload({ url: a2, data: p2, file: r2, name: s2, fileType: o2, onUploadProgress: i2 }).then((e4) => {
        201 === e4.statusCode ? t2(null, { fileID: h2, requestId: d2 }) : t2(new te({ code: "STORAGE_REQUEST_FAIL", message: `STORAGE_REQUEST_FAIL: ${e4.data}` }));
      }).catch((e4) => {
        t2(e4);
      });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, ct = function(e2, t2) {
    t2 = t2 || Ie();
    const n2 = Xe(this.config.env), { cloudPath: s2 } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      t2(null, e3);
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, ut = function({ fileList: e2 }, t2) {
    if (t2 = t2 || Ie(), !e2 || !Array.isArray(e2))
      return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };
    for (let t3 of e2)
      if (!t3 || "string" != typeof t3)
        return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };
    const n2 = { fileid_list: e2 };
    return Xe(this.config.env).send("storage.batchDeleteFile", n2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.delete_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, ht = function({ fileList: e2 }, t2) {
    t2 = t2 || Ie(), e2 && Array.isArray(e2) || t2(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });
    let n2 = [];
    for (let s3 of e2)
      "object" == typeof s3 ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : "string" == typeof s3 ? n2.push({ fileid: s3 }) : t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });
    const s2 = { file_list: n2 };
    return Xe(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.download_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, lt = async function({ fileID: e2 }, t2) {
    const n2 = (await ht.call(this, { fileList: [{ fileID: e2, maxAge: 600 }] })).fileList[0];
    if ("SUCCESS" !== n2.code)
      return t2 ? t2(n2) : new Promise((e3) => {
        e3(n2);
      });
    const s2 = Xe(this.config.env);
    let r2 = n2.download_url;
    if (r2 = encodeURI(r2), !t2)
      return s2.download({ url: r2 });
    t2(await s2.download({ url: r2 }));
  }, dt = function({ name: e2, data: t2, query: n2, parse: s2, search: r2 }, i2) {
    const o2 = i2 || Ie();
    let a2;
    try {
      a2 = t2 ? JSON.stringify(t2) : "";
    } catch (e3) {
      return Promise.reject(e3);
    }
    if (!e2)
      return Promise.reject(new te({ code: "PARAM_ERROR", message: "函数名不能为空" }));
    const c2 = { inQuery: n2, parse: s2, search: r2, function_name: e2, request_data: a2 };
    return Xe(this.config.env).send("functions.invokeFunction", c2).then((e3) => {
      if (e3.code)
        o2(null, e3);
      else {
        let t3 = e3.data.response_data;
        if (s2)
          o2(null, { result: t3, requestId: e3.requestId });
        else
          try {
            t3 = JSON.parse(e3.data.response_data), o2(null, { result: t3, requestId: e3.requestId });
          } catch (e4) {
            o2(new te({ message: "response data must be json" }));
          }
      }
      return o2.promise;
    }).catch((e3) => {
      o2(e3);
    }), o2.promise;
  }, pt = { timeout: 15e3, persistence: "session" }, ft = {};
  class gt {
    constructor(e2) {
      this.config = e2 || this.config, this.authObj = void 0;
    }
    init(e2) {
      switch (Ce.adapter || (this.requestClient = new Ce.adapter.reqClass({ timeout: e2.timeout || 5e3, timeoutMsg: `请求在${(e2.timeout || 5e3) / 1e3}s内未完成，已中断` })), this.config = { ...pt, ...e2 }, true) {
        case this.config.timeout > 6e5:
          console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
      }
      return new gt(this.config);
    }
    auth({ persistence: e2 } = {}) {
      if (this.authObj)
        return this.authObj;
      const t2 = e2 || Ce.adapter.primaryStorage || pt.persistence;
      var n2;
      return t2 !== this.config.persistence && (this.config.persistence = t2), function(e3) {
        const { env: t3 } = e3;
        Ee[t3] = new Oe(e3), Le[t3] = new Oe({ ...e3, persistence: "local" });
      }(this.config), n2 = this.config, Qe[n2.env] = new Ye(n2), this.authObj = new ot(this.config), this.authObj;
    }
    on(e2, t2) {
      return Me.apply(this, [e2, t2]);
    }
    off(e2, t2) {
      return Fe.apply(this, [e2, t2]);
    }
    callFunction(e2, t2) {
      return dt.apply(this, [e2, t2]);
    }
    deleteFile(e2, t2) {
      return ut.apply(this, [e2, t2]);
    }
    getTempFileURL(e2, t2) {
      return ht.apply(this, [e2, t2]);
    }
    downloadFile(e2, t2) {
      return lt.apply(this, [e2, t2]);
    }
    uploadFile(e2, t2) {
      return at.apply(this, [e2, t2]);
    }
    getUploadMetadata(e2, t2) {
      return ct.apply(this, [e2, t2]);
    }
    registerExtension(e2) {
      ft[e2.name] = e2;
    }
    async invokeExtension(e2, t2) {
      const n2 = ft[e2];
      if (!n2)
        throw new te({ message: `扩展${e2} 必须先注册` });
      return await n2.invoke(t2, this);
    }
    useAdapters(e2) {
      const { adapter: t2, runtime: n2 } = Ae(e2) || {};
      t2 && (Ce.adapter = t2), n2 && (Ce.runtime = n2);
    }
  }
  var mt = new gt();
  function yt(e2, t2, n2) {
    void 0 === n2 && (n2 = {});
    var s2 = /\?/.test(t2), r2 = "";
    for (var i2 in n2)
      "" === r2 ? !s2 && (t2 += "?") : r2 += "&", r2 += i2 + "=" + encodeURIComponent(n2[i2]);
    return /^http(s)?:\/\//.test(t2 += r2) ? t2 : "" + e2 + t2;
  }
  class _t {
    post(e2) {
      const { url: t2, data: n2, headers: s2 } = e2;
      return new Promise((e3, r2) => {
        ne.request({ url: yt("https:", t2), data: n2, method: "POST", header: s2, success(t3) {
          e3(t3);
        }, fail(e4) {
          r2(e4);
        } });
      });
    }
    upload(e2) {
      return new Promise((t2, n2) => {
        const { url: s2, file: r2, data: i2, headers: o2, fileType: a2 } = e2, c2 = ne.uploadFile({ url: yt("https:", s2), name: "file", formData: Object.assign({}, i2), filePath: r2, fileType: a2, header: o2, success(e3) {
          const n3 = { statusCode: e3.statusCode, data: e3.data || {} };
          200 === e3.statusCode && i2.success_action_status && (n3.statusCode = parseInt(i2.success_action_status, 10)), t2(n3);
        }, fail(e3) {
          n2(new Error(e3.errMsg || "uploadFile:fail"));
        } });
        "function" == typeof e2.onUploadProgress && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((t3) => {
          e2.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  }
  const wt = { setItem(e2, t2) {
    ne.setStorageSync(e2, t2);
  }, getItem: (e2) => ne.getStorageSync(e2), removeItem(e2) {
    ne.removeStorageSync(e2);
  }, clear() {
    ne.clearStorageSync();
  } };
  var vt = { genAdapter: function() {
    return { root: {}, reqClass: _t, localStorage: wt, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  mt.useAdapters(vt);
  const It = mt, St = It.init;
  It.init = function(e2) {
    e2.env = e2.spaceId;
    const t2 = St.call(this, e2);
    t2.config.provider = "tencent", t2.config.spaceId = e2.spaceId;
    const n2 = t2.auth;
    return t2.auth = function(e3) {
      const t3 = n2.call(this, e3);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e4) => {
        var n3;
        t3[e4] = (n3 = t3[e4], function(e5) {
          e5 = e5 || {};
          const { success: t4, fail: s2, complete: r2 } = ee(e5);
          if (!(t4 || s2 || r2))
            return n3.call(this, e5);
          n3.call(this, e5).then((e6) => {
            t4 && t4(e6), r2 && r2(e6);
          }, (e6) => {
            s2 && s2(e6), r2 && r2(e6);
          });
        }).bind(t3);
      }), t3;
    }, t2.customAuth = t2.auth, t2;
  };
  var bt = It;
  var kt = class extends pe {
    getAccessToken() {
      return new Promise((e2, t2) => {
        const n2 = "Anonymous_Access_token";
        this.setAccessToken(n2), e2(n2);
      });
    }
    setupRequest(e2, t2) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = de.sign(n2, this.config.clientSecret);
      const r2 = le();
      s2["x-client-info"] = encodeURIComponent(JSON.stringify(r2));
      const { token: i2 } = re();
      return s2["x-client-token"] = i2, { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: JSON.parse(JSON.stringify(s2)) };
    }
    uploadFileToOSS({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, success(e3) {
          e3 && e3.statusCode < 400 ? o2(e3) : a2(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          a2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
          i2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2 }) {
      if (!t2)
        throw new te({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });
      let r2;
      return this.getOSSUploadOptionsFromPath({ cloudPath: t2 }).then((t3) => {
        const { url: i2, formData: o2, name: a2 } = t3.result;
        r2 = t3.result.fileUrl;
        const c2 = { url: i2, formData: o2, name: a2, filePath: e2, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, c2, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ cloudPath: t2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e2, fileID: r2 }) : s3(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
      }));
    }
    deleteFile({ fileList: e2 }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e2 }) };
      return this.request(this.setupRequest(t2)).then((e3) => {
        if (e3.success)
          return e3.result;
        throw new te({ code: "DELETE_FILE_FAILED", message: "删除文件失败" });
      });
    }
    getTempFileURL({ fileList: e2, maxAge: t2 } = {}) {
      if (!Array.isArray(e2) || 0 === e2.length)
        throw new te({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
      const n2 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e2, maxAge: t2 }) };
      return this.request(this.setupRequest(n2)).then((e3) => {
        if (e3.success)
          return { fileList: e3.result.fileList.map((e4) => ({ fileID: e4.fileID, tempFileURL: e4.tempFileURL })) };
        throw new te({ code: "GET_TEMP_FILE_URL_FAILED", message: "获取临时文件链接失败" });
      });
    }
  };
  var At = { init(e2) {
    const t2 = new kt(e2), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } }, Ct = n(function(e2, t2) {
    e2.exports = r.enc.Hex;
  });
  function Pt() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e2) {
      var t2 = 16 * Math.random() | 0;
      return ("x" === e2 ? t2 : 3 & t2 | 8).toString(16);
    });
  }
  function Tt(e2 = "", t2 = {}) {
    const { data: n2, functionName: s2, method: r2, headers: i2, signHeaderKeys: o2 = [], config: a2 } = t2, c2 = Date.now(), u2 = Pt(), h2 = Object.assign({}, i2, { "x-from-app-id": a2.spaceAppId, "x-from-env-id": a2.spaceId, "x-to-env-id": a2.spaceId, "x-from-instance-id": c2, "x-from-function-name": s2, "x-client-timestamp": c2, "x-alipay-source": "client", "x-request-id": u2, "x-alipay-callid": u2, "x-trace-id": u2 }), l2 = ["x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp"].concat(o2), [d2 = "", p2 = ""] = e2.split("?") || [], f2 = function(e3) {
      const t3 = e3.signedHeaders.join(";"), n3 = e3.signedHeaders.map((t4) => `${t4.toLowerCase()}:${e3.headers[t4]}
`).join(""), s3 = we(e3.body).toString(Ct), r3 = `${e3.method.toUpperCase()}
${e3.path}
${e3.query}
${n3}
${t3}
${s3}
`, i3 = we(r3).toString(Ct), o3 = `HMAC-SHA256
${e3.timestamp}
${i3}
`, a3 = ve(o3, e3.secretKey).toString(Ct);
      return `HMAC-SHA256 Credential=${e3.secretId}, SignedHeaders=${t3}, Signature=${a3}`;
    }({ path: d2, query: p2, method: r2, headers: h2, timestamp: c2, body: JSON.stringify(n2), secretId: a2.accessKey, secretKey: a2.secretKey, signedHeaders: l2.sort() });
    return { url: `${a2.endpoint}${e2}`, headers: Object.assign({}, h2, { Authorization: f2 }) };
  }
  function xt({ url: e2, data: t2, method: n2 = "POST", headers: s2 = {} }) {
    return new Promise((r2, i2) => {
      ne.request({ url: e2, method: n2, data: "object" == typeof t2 ? JSON.stringify(t2) : t2, header: s2, dataType: "json", complete: (e3 = {}) => {
        const t3 = s2["x-trace-id"] || "";
        if (!e3.statusCode || e3.statusCode >= 400) {
          const { message: n3, errMsg: s3, trace_id: r3 } = e3.data || {};
          return i2(new te({ code: "SYS_ERR", message: n3 || s3 || "request:fail", requestId: r3 || t3 }));
        }
        r2({ status: e3.statusCode, data: e3.data, headers: e3.header, requestId: t3 });
      } });
    });
  }
  function Ot(e2, t2) {
    const { path: n2, data: s2, method: r2 = "GET" } = e2, { url: i2, headers: o2 } = Tt(n2, { functionName: "", data: s2, method: r2, headers: { "x-alipay-cloud-mode": "oss", "x-data-api-type": "oss", "x-expire-timestamp": Date.now() + 6e4 }, signHeaderKeys: ["x-data-api-type", "x-expire-timestamp"], config: t2 });
    return xt({ url: i2, data: s2, method: r2, headers: o2 }).then((e3) => {
      const t3 = e3.data || {};
      if (!t3.success)
        throw new te({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
      return t3.data || {};
    }).catch((e3) => {
      throw new te({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
    });
  }
  function Et(e2 = "") {
    const t2 = e2.trim().replace(/^cloud:\/\//, ""), n2 = t2.indexOf("/");
    if (n2 <= 0)
      throw new te({ code: "INVALID_PARAM", message: "fileID不合法" });
    const s2 = t2.substring(0, n2), r2 = t2.substring(n2 + 1);
    return s2 !== this.config.spaceId && console.warn("file ".concat(e2, " does not belong to env ").concat(this.config.spaceId)), r2;
  }
  function Lt(e2 = "") {
    return "cloud://".concat(this.config.spaceId, "/").concat(e2.replace(/^\/+/, ""));
  }
  class Rt {
    constructor(e2) {
      this.config = e2;
    }
    signedURL(e2, t2 = {}) {
      const n2 = `/ws/function/${e2}`, s2 = this.config.wsEndpoint.replace(/^ws(s)?:\/\//, ""), r2 = Object.assign({}, t2, { accessKeyId: this.config.accessKey, signatureNonce: Pt(), timestamp: "" + Date.now() }), i2 = [n2, ["accessKeyId", "authorization", "signatureNonce", "timestamp"].sort().map(function(e3) {
        return r2[e3] ? "".concat(e3, "=").concat(r2[e3]) : null;
      }).filter(Boolean).join("&"), `host:${s2}`].join("\n"), o2 = ["HMAC-SHA256", we(i2).toString(Ct)].join("\n"), a2 = ve(o2, this.config.secretKey).toString(Ct), c2 = Object.keys(r2).map((e3) => `${e3}=${encodeURIComponent(r2[e3])}`).join("&");
      return `${this.config.wsEndpoint}${n2}?${c2}&signature=${a2}`;
    }
  }
  var Ut = class {
    constructor(e2) {
      if (["spaceId", "spaceAppId", "accessKey", "secretKey"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new Error(`${t2} required`);
      }), e2.endpoint) {
        if ("string" != typeof e2.endpoint)
          throw new Error("endpoint must be string");
        if (!/^https:\/\//.test(e2.endpoint))
          throw new Error("endpoint must start with https://");
        e2.endpoint = e2.endpoint.replace(/\/$/, "");
      }
      this.config = Object.assign({}, e2, { endpoint: e2.endpoint || `https://${e2.spaceId}.api-hz.cloudbasefunction.cn`, wsEndpoint: e2.wsEndpoint || `wss://${e2.spaceId}.api-hz.cloudbasefunction.cn` }), this._websocket = new Rt(this.config);
    }
    callFunction(e2) {
      return function(e3, t2) {
        const { name: n2, data: s2, async: r2 = false } = e3, i2 = "POST", o2 = { "x-to-function-name": n2 };
        r2 && (o2["x-function-invoke-type"] = "async");
        const { url: a2, headers: c2 } = Tt("/functions/invokeFunction", { functionName: n2, data: s2, method: i2, headers: o2, signHeaderKeys: ["x-to-function-name"], config: t2 });
        return xt({ url: a2, data: s2, method: i2, headers: c2 }).then((e4) => {
          let t3 = 0;
          if (r2) {
            const n3 = e4.data || {};
            t3 = "200" === n3.errCode ? 0 : n3.errCode, e4.data = n3.data || {}, e4.errMsg = n3.errMsg;
          }
          if (0 !== t3)
            throw new te({ code: t3, message: e4.errMsg, requestId: e4.requestId });
          return { errCode: t3, success: 0 === t3, requestId: e4.requestId, result: e4.data };
        }).catch((e4) => {
          throw new te({ code: e4.errCode, message: e4.errMsg, requestId: e4.requestId });
        });
      }(e2, this.config);
    }
    uploadFileToOSS({ url: e2, filePath: t2, fileType: n2, formData: s2, onUploadProgress: r2 }) {
      return new Promise((i2, o2) => {
        const a2 = ne.uploadFile({ url: e2, filePath: t2, fileType: n2, formData: s2, name: "file", success(e3) {
          e3 && e3.statusCode < 400 ? i2(e3) : o2(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          o2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof r2 && a2 && "function" == typeof a2.onProgressUpdate && a2.onProgressUpdate((e3) => {
          r2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    async uploadFile({ filePath: e2, cloudPath: t2 = "", fileType: n2 = "image", onUploadProgress: s2 }) {
      if ("string" !== f(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
      if (!(t2 = t2.trim()))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不可为空" });
      if (/:\/\//.test(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不合法" });
      const r2 = await Ot({ path: "/".concat(t2.replace(/^\//, ""), "?post_url") }, this.config), { file_id: i2, upload_url: o2, form_data: a2 } = r2, c2 = a2 && a2.reduce((e3, t3) => (e3[t3.key] = t3.value, e3), {});
      return this.uploadFileToOSS({ url: o2, filePath: e2, fileType: n2, formData: c2, onUploadProgress: s2 }).then(() => ({ fileID: i2 }));
    }
    async getTempFileURL({ fileList: e2 }) {
      return new Promise((t2, n2) => {
        (!e2 || e2.length < 0) && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList不能为空数组" })), e2.length > 50 && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList数组长度不能超过50" }));
        const s2 = [];
        for (const t3 of e2) {
          "string" !== f(t3) && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList的元素必须是非空的字符串" }));
          const e3 = Et.call(this, t3);
          s2.push({ file_id: e3, expire: 600 });
        }
        Ot({ path: "/?download_url", data: { file_list: s2 }, method: "POST" }, this.config).then((e3) => {
          const { file_list: n3 = [] } = e3;
          t2({ fileList: n3.map((e4) => ({ fileID: Lt.call(this, e4.file_id), tempFileURL: e4.download_url })) });
        }).catch((e3) => n2(e3));
      });
    }
    async connectWebSocket(e2) {
      const { name: t2, query: n2 } = e2;
      return ne.connectSocket({ url: this._websocket.signedURL(t2, n2), complete: () => {
      } });
    }
  };
  var Nt = { init: (e2) => {
    e2.provider = "alipay";
    const t2 = new Ut(e2);
    return t2.auth = function() {
      return { signInAnonymously: function() {
        return Promise.resolve();
      }, getLoginState: function() {
        return Promise.resolve(true);
      } };
    }, t2;
  } };
  function Dt({ data: e2 }) {
    let t2;
    t2 = le();
    const n2 = JSON.parse(JSON.stringify(e2 || {}));
    if (Object.assign(n2, { clientInfo: t2 }), !n2.uniIdToken) {
      const { token: e3 } = re();
      e3 && (n2.uniIdToken = e3);
    }
    return n2;
  }
  async function Mt({ name: e2, data: t2 } = {}) {
    await this.__dev__.initLocalNetwork();
    const { localAddress: n2, localPort: s2 } = this.__dev__, r2 = { aliyun: "aliyun", tencent: "tcb", alipay: "alipay" }[this.config.provider], i2 = this.config.spaceId, o2 = `http://${n2}:${s2}/system/check-function`, a2 = `http://${n2}:${s2}/cloudfunctions/${e2}`;
    return new Promise((t3, n3) => {
      ne.request({ method: "POST", url: o2, data: { name: e2, platform: C, provider: r2, spaceId: i2 }, timeout: 3e3, success(e3) {
        t3(e3);
      }, fail() {
        t3({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });
      } });
    }).then(({ data: e3 } = {}) => {
      const { code: t3, message: n3 } = e3 || {};
      return { code: 0 === t3 ? 0 : t3 || "SYS_ERR", message: n3 || "SYS_ERR" };
    }).then(({ code: n3, message: s3 }) => {
      if (0 !== n3) {
        switch (n3) {
          case "MODULE_ENCRYPTED":
            console.error(`此云函数（${e2}）依赖加密公共模块不可本地调试，自动切换为云端已部署的云函数`);
            break;
          case "FUNCTION_ENCRYPTED":
            console.error(`此云函数（${e2}）已加密不可本地调试，自动切换为云端已部署的云函数`);
            break;
          case "ACTION_ENCRYPTED":
            console.error(s3 || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
            break;
          case "NETWORK_ERROR":
            console.error(s3 || "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下");
            break;
          case "SWITCH_TO_CLOUD":
            break;
          default: {
            const e3 = `检测本地调试服务出现错误：${s3}，请检查网络环境或重启客户端再试`;
            throw console.error(e3), new Error(e3);
          }
        }
        return this._callCloudFunction({ name: e2, data: t2 });
      }
      return new Promise((e3, n4) => {
        const s4 = Dt.call(this, { data: t2 });
        ne.request({ method: "POST", url: a2, data: { provider: r2, platform: C, param: s4 }, success: ({ statusCode: t3, data: s5 } = {}) => !t3 || t3 >= 400 ? n4(new te({ code: s5.code || "SYS_ERR", message: s5.message || "request:fail" })) : e3({ result: s5 }), fail(e4) {
          n4(new te({ code: e4.code || e4.errCode || "SYS_ERR", message: e4.message || e4.errMsg || "request:fail" }));
        } });
      });
    });
  }
  const qt = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间", mode: "append" }];
  var Ft = /[\\^$.*+?()[\]{}|]/g, Kt = RegExp(Ft.source);
  function jt(e2, t2, n2) {
    return e2.replace(new RegExp((s2 = t2) && Kt.test(s2) ? s2.replace(Ft, "\\$&") : s2, "g"), n2);
    var s2;
  }
  const Bt = "request", Wt = "response", Ht = "both";
  const Tn = { code: 2e4, message: "System error" }, xn = { code: 20101, message: "Invalid client" };
  function Ln(e2) {
    const { errSubject: t2, subject: n2, errCode: s2, errMsg: r2, code: i2, message: o2, cause: a2 } = e2 || {};
    return new te({ subject: t2 || n2 || "uni-secure-network", code: s2 || i2 || Tn.code, message: r2 || o2, cause: a2 });
  }
  let Un;
  function Fn({ secretType: e2 } = {}) {
    return e2 === Bt || e2 === Wt || e2 === Ht;
  }
  function Kn({ name: e2, data: t2 = {} } = {}) {
    return "DCloud-clientDB" === e2 && "encryption" === t2.redirectTo && "getAppClientKey" === t2.action;
  }
  function jn({ provider: e2, spaceId: t2, functionName: n2 } = {}) {
    const { appId: s2, uniPlatform: r2, osName: i2 } = ce();
    let o2 = r2;
    "app" === r2 && (o2 = i2);
    const a2 = function({ provider: e3, spaceId: t3 } = {}) {
      const n3 = A;
      if (!n3)
        return {};
      e3 = /* @__PURE__ */ function(e4) {
        return "tencent" === e4 ? "tcb" : e4;
      }(e3);
      const s3 = n3.find((n4) => n4.provider === e3 && n4.spaceId === t3);
      return s3 && s3.config;
    }({ provider: e2, spaceId: t2 });
    if (!a2 || !a2.accessControl || !a2.accessControl.enable)
      return false;
    const c2 = a2.accessControl.function || {}, u2 = Object.keys(c2);
    if (0 === u2.length)
      return true;
    const h2 = function(e3, t3) {
      let n3, s3, r3;
      for (let i3 = 0; i3 < e3.length; i3++) {
        const o3 = e3[i3];
        o3 !== t3 ? "*" !== o3 ? o3.split(",").map((e4) => e4.trim()).indexOf(t3) > -1 && (s3 = o3) : r3 = o3 : n3 = o3;
      }
      return n3 || s3 || r3;
    }(u2, n2);
    if (!h2)
      return false;
    if ((c2[h2] || []).find((e3 = {}) => e3.appId === s2 && (e3.platform || "").toLowerCase() === o2.toLowerCase()))
      return true;
    throw console.error(`此应用[appId: ${s2}, platform: ${o2}]不在云端配置的允许访问的应用列表内，参考：https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client`), Ln(xn);
  }
  function $n({ functionName: e2, result: t2, logPvd: n2 }) {
    if (this.__dev__.debugLog && t2 && t2.requestId) {
      const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e2, requestId: t2.requestId });
      console.log(`[${n2}-request]${s2}[/${n2}-request]`);
    }
  }
  function Bn(e2) {
    const t2 = e2.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = Dt.call(e2, { data: n3.data });
      const r2 = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb", alipay: "alipay" }[this.config.provider], i2 = Fn(n3), o2 = Kn(n3), a2 = i2 || o2;
      return t2.call(this, n3).then((e3) => (e3.errCode = 0, !a2 && $n.call(this, { functionName: s2, result: e3, logPvd: r2 }), Promise.resolve(e3)), (e3) => (!a2 && $n.call(this, { functionName: s2, result: e3, logPvd: r2 }), e3 && e3.message && (e3.message = function({ message: e4 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
        for (let s3 = 0; s3 < n4.length; s3++) {
          const { rule: r3, content: i3, mode: o3 } = n4[s3], a3 = e4.match(r3);
          if (!a3)
            continue;
          let c2 = i3;
          for (let e5 = 1; e5 < a3.length; e5++)
            c2 = jt(c2, `{$${e5}}`, a3[e5]);
          for (const e5 in t3)
            c2 = jt(c2, `{${e5}}`, t3[e5]);
          return "replace" === o3 ? c2 : e4 + c2;
        }
        return e4;
      }({ message: `[${n3.name}]: ${e3.message}`, formatter: qt, extraInfo: { functionName: s2 } })), Promise.reject(e3)));
    };
    e2.callFunction = function(t3) {
      const { provider: s2, spaceId: r2 } = e2.config, i2 = t3.name;
      let o2, a2;
      if (t3.data = t3.data || {}, e2.__dev__.debugInfo && !e2.__dev__.debugInfo.forceRemote && T ? (e2._callCloudFunction || (e2._callCloudFunction = n2, e2._callLocalFunction = Mt), o2 = Mt) : o2 = n2, o2 = o2.bind(e2), Kn(t3))
        a2 = n2.call(e2, t3);
      else if (Fn(t3)) {
        a2 = new Un({ secretType: t3.secretType, uniCloudIns: e2 }).wrapEncryptDataCallFunction(n2.bind(e2))(t3);
      } else if (jn({ provider: s2, spaceId: r2, functionName: i2 })) {
        a2 = new Un({ secretType: t3.secretType, uniCloudIns: e2 }).wrapVerifyClientCallFunction(n2.bind(e2))(t3);
      } else
        a2 = o2(t3);
      return Object.defineProperty(a2, "result", { get: () => (console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), a2.then((e3) => ("undefined" != typeof UTSJSONObject && (e3.result = new UTSJSONObject(e3.result)), e3));
    };
  }
  Un = class {
    constructor() {
      throw Ln({ message: `Platform ${C} is not enabled, please check whether secure network module is enabled in your manifest.json` });
    }
  };
  const Wn = Symbol("CLIENT_DB_INTERNAL");
  function Hn(e2, t2) {
    return e2.then = "DoNotReturnProxyWithAFunctionNamedThen", e2._internalType = Wn, e2.inspect = null, e2.__v_raw = void 0, new Proxy(e2, { get(e3, n2, s2) {
      if ("_uniClient" === n2)
        return null;
      if ("symbol" == typeof n2)
        return e3[n2];
      if (n2 in e3 || "string" != typeof n2) {
        const t3 = e3[n2];
        return "function" == typeof t3 ? t3.bind(e3) : t3;
      }
      return t2.get(e3, n2, s2);
    } });
  }
  function zn(e2) {
    return { on: (t2, n2) => {
      e2[t2] = e2[t2] || [], e2[t2].indexOf(n2) > -1 || e2[t2].push(n2);
    }, off: (t2, n2) => {
      e2[t2] = e2[t2] || [];
      const s2 = e2[t2].indexOf(n2);
      -1 !== s2 && e2[t2].splice(s2, 1);
    } };
  }
  const Jn = ["db.Geo", "db.command", "command.aggregate"];
  function Vn(e2, t2) {
    return Jn.indexOf(`${e2}.${t2}`) > -1;
  }
  function Gn(e2) {
    switch (f(e2 = se(e2))) {
      case "array":
        return e2.map((e3) => Gn(e3));
      case "object":
        return e2._internalType === Wn || Object.keys(e2).forEach((t2) => {
          e2[t2] = Gn(e2[t2]);
        }), e2;
      case "regexp":
        return { $regexp: { source: e2.source, flags: e2.flags } };
      case "date":
        return { $date: e2.toISOString() };
      default:
        return e2;
    }
  }
  function Yn(e2) {
    return e2 && e2.content && e2.content.$method;
  }
  class Qn {
    constructor(e2, t2, n2) {
      this.content = e2, this.prevStage = t2 || null, this.udb = null, this._database = n2;
    }
    toJSON() {
      let e2 = this;
      const t2 = [e2.content];
      for (; e2.prevStage; )
        e2 = e2.prevStage, t2.push(e2.content);
      return { $db: t2.reverse().map((e3) => ({ $method: e3.$method, $param: Gn(e3.$param) })) };
    }
    toString() {
      return JSON.stringify(this.toJSON());
    }
    getAction() {
      const e2 = this.toJSON().$db.find((e3) => "action" === e3.$method);
      return e2 && e2.$param && e2.$param[0];
    }
    getCommand() {
      return { $db: this.toJSON().$db.filter((e2) => "action" !== e2.$method) };
    }
    get isAggregate() {
      let e2 = this;
      for (; e2; ) {
        const t2 = Yn(e2), n2 = Yn(e2.prevStage);
        if ("aggregate" === t2 && "collection" === n2 || "pipeline" === t2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isCommand() {
      let e2 = this;
      for (; e2; ) {
        if ("command" === Yn(e2))
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isAggregateCommand() {
      let e2 = this;
      for (; e2; ) {
        const t2 = Yn(e2), n2 = Yn(e2.prevStage);
        if ("aggregate" === t2 && "command" === n2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    getNextStageFn(e2) {
      const t2 = this;
      return function() {
        return Xn({ $method: e2, $param: Gn(Array.from(arguments)) }, t2, t2._database);
      };
    }
    get count() {
      return this.isAggregate ? this.getNextStageFn("count") : function() {
        return this._send("count", Array.from(arguments));
      };
    }
    get remove() {
      return this.isCommand ? this.getNextStageFn("remove") : function() {
        return this._send("remove", Array.from(arguments));
      };
    }
    get() {
      return this._send("get", Array.from(arguments));
    }
    get add() {
      return this.isCommand ? this.getNextStageFn("add") : function() {
        return this._send("add", Array.from(arguments));
      };
    }
    update() {
      return this._send("update", Array.from(arguments));
    }
    end() {
      return this._send("end", Array.from(arguments));
    }
    get set() {
      return this.isCommand ? this.getNextStageFn("set") : function() {
        throw new Error("JQL禁止使用set方法");
      };
    }
    _send(e2, t2) {
      const n2 = this.getAction(), s2 = this.getCommand();
      if (s2.$db.push({ $method: e2, $param: Gn(t2) }), S) {
        const e3 = s2.$db.find((e4) => "collection" === e4.$method), t3 = e3 && e3.$param;
        t3 && 1 === t3.length && "string" == typeof e3.$param[0] && e3.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");
      }
      return this._database._callCloudFunction({ action: n2, command: s2 });
    }
  }
  function Xn(e2, t2, n2) {
    return Hn(new Qn(e2, t2, n2), { get(e3, t3) {
      let s2 = "db";
      return e3 && e3.content && (s2 = e3.content.$method), Vn(s2, t3) ? Xn({ $method: t3 }, e3, n2) : function() {
        return Xn({ $method: t3, $param: Gn(Array.from(arguments)) }, e3, n2);
      };
    } });
  }
  function Zn({ path: e2, method: t2 }) {
    return class {
      constructor() {
        this.param = Array.from(arguments);
      }
      toJSON() {
        return { $newDb: [...e2.map((e3) => ({ $method: e3 })), { $method: t2, $param: this.param }] };
      }
      toString() {
        return JSON.stringify(this.toJSON());
      }
    };
  }
  function es(e2, t2 = {}) {
    return Hn(new e2(t2), { get: (e3, t3) => Vn("db", t3) ? Xn({ $method: t3 }, null, e3) : function() {
      return Xn({ $method: t3, $param: Gn(Array.from(arguments)) }, null, e3);
    } });
  }
  class ts extends class {
    constructor({ uniClient: e2 = {}, isJQL: t2 = false } = {}) {
      this._uniClient = e2, this._authCallBacks = {}, this._dbCallBacks = {}, e2._isDefault && (this._dbCallBacks = L("_globalUniCloudDatabaseCallback")), t2 || (this.auth = zn(this._authCallBacks)), this._isJQL = t2, Object.assign(this, zn(this._dbCallBacks)), this.env = Hn({}, { get: (e3, t3) => ({ $env: t3 }) }), this.Geo = Hn({}, { get: (e3, t3) => Zn({ path: ["Geo"], method: t3 }) }), this.serverDate = Zn({ path: [], method: "serverDate" }), this.RegExp = Zn({ path: [], method: "RegExp" });
    }
    getCloudEnv(e2) {
      if ("string" != typeof e2 || !e2.trim())
        throw new Error("getCloudEnv参数错误");
      return { $env: e2.replace("$cloudEnv_", "") };
    }
    _callback(e2, t2) {
      const n2 = this._dbCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t2);
      });
    }
    _callbackAuth(e2, t2) {
      const n2 = this._authCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t2);
      });
    }
    multiSend() {
      const e2 = Array.from(arguments), t2 = e2.map((e3) => {
        const t3 = e3.getAction(), n2 = e3.getCommand();
        if ("getTemp" !== n2.$db[n2.$db.length - 1].$method)
          throw new Error("multiSend只支持子命令内使用getTemp");
        return { action: t3, command: n2 };
      });
      return this._callCloudFunction({ multiCommand: t2, queryList: e2 });
    }
  } {
    _parseResult(e2) {
      return this._isJQL ? e2.result : e2;
    }
    _callCloudFunction({ action: e2, command: t2, multiCommand: n2, queryList: s2 }) {
      function r2(e3, t3) {
        if (n2 && s2)
          for (let n3 = 0; n3 < s2.length; n3++) {
            const r3 = s2[n3];
            r3.udb && "function" == typeof r3.udb.setResult && (t3 ? r3.udb.setResult(t3) : r3.udb.setResult(e3.result.dataList[n3]));
          }
      }
      const i2 = this, o2 = this._isJQL ? "databaseForJQL" : "database";
      function a2(e3) {
        return i2._callback("error", [e3]), M(q(o2, "fail"), e3).then(() => M(q(o2, "complete"), e3)).then(() => (r2(null, e3), Y(j, { type: W, content: e3 }), Promise.reject(e3)));
      }
      const c2 = M(q(o2, "invoke")), u2 = this._uniClient;
      return c2.then(() => u2.callFunction({ name: "DCloud-clientDB", type: h, data: { action: e2, command: t2, multiCommand: n2 } })).then((e3) => {
        const { code: t3, message: n3, token: s3, tokenExpired: c3, systemInfo: u3 = [] } = e3.result;
        if (u3)
          for (let e4 = 0; e4 < u3.length; e4++) {
            const { level: t4, message: n4, detail: s4 } = u3[e4], r3 = console["warn" === t4 ? "error" : t4] || console.log;
            let i3 = "[System Info]" + n4;
            s4 && (i3 = `${i3}
详细信息：${s4}`), r3(i3);
          }
        if (t3) {
          return a2(new te({ code: t3, message: n3, requestId: e3.requestId }));
        }
        e3.result.errCode = e3.result.errCode || e3.result.code, e3.result.errMsg = e3.result.errMsg || e3.result.message, s3 && c3 && (ie({ token: s3, tokenExpired: c3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: c3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: c3 }]), Y(B, { token: s3, tokenExpired: c3 }));
        const h2 = [{ prop: "affectedDocs", tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代" }, { prop: "code", tips: "code不再推荐使用，请使用errCode替代" }, { prop: "message", tips: "message不再推荐使用，请使用errMsg替代" }];
        for (let t4 = 0; t4 < h2.length; t4++) {
          const { prop: n4, tips: s4 } = h2[t4];
          if (n4 in e3.result) {
            const t5 = e3.result[n4];
            Object.defineProperty(e3.result, n4, { get: () => (console.warn(s4), t5) });
          }
        }
        return function(e4) {
          return M(q(o2, "success"), e4).then(() => M(q(o2, "complete"), e4)).then(() => {
            r2(e4, null);
            const t4 = i2._parseResult(e4);
            return Y(j, { type: W, content: t4 }), Promise.resolve(t4);
          });
        }(e3);
      }, (e3) => {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e3.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
        return a2(new te({ code: e3.code || "SYSTEM_ERROR", message: e3.message, requestId: e3.requestId }));
      });
    }
  }
  const ns = "token无效，跳转登录页面", ss = "token过期，跳转登录页面", rs = { TOKEN_INVALID_TOKEN_EXPIRED: ss, TOKEN_INVALID_INVALID_CLIENTID: ns, TOKEN_INVALID: ns, TOKEN_INVALID_WRONG_TOKEN: ns, TOKEN_INVALID_ANONYMOUS_USER: ns }, is = { "uni-id-token-expired": ss, "uni-id-check-token-failed": ns, "uni-id-token-not-exist": ns, "uni-id-check-device-feature-failed": ns };
  function os(e2, t2) {
    let n2 = "";
    return n2 = e2 ? `${e2}/${t2}` : t2, n2.replace(/^\//, "");
  }
  function as(e2 = [], t2 = "") {
    const n2 = [], s2 = [];
    return e2.forEach((e3) => {
      true === e3.needLogin ? n2.push(os(t2, e3.path)) : false === e3.needLogin && s2.push(os(t2, e3.path));
    }), { needLoginPage: n2, notNeedLoginPage: s2 };
  }
  function cs(e2) {
    return e2.split("?")[0].replace(/^\//, "");
  }
  function us() {
    return function(e2) {
      let t2 = e2 && e2.$page && e2.$page.fullPath || "";
      return t2 ? ("/" !== t2.charAt(0) && (t2 = "/" + t2), t2) : t2;
    }(function() {
      const e2 = getCurrentPages();
      return e2[e2.length - 1];
    }());
  }
  function hs() {
    return cs(us());
  }
  function ls(e2 = "", t2 = {}) {
    if (!e2)
      return false;
    if (!(t2 && t2.list && t2.list.length))
      return false;
    const n2 = t2.list, s2 = cs(e2);
    return n2.some((e3) => e3.pagePath === s2);
  }
  const ds = !!e.uniIdRouter;
  const { loginPage: ps, routerNeedLogin: fs, resToLogin: gs, needLoginPage: ms, notNeedLoginPage: ys, loginPageInTabBar: _s } = function({ pages: t2 = [], subPackages: n2 = [], uniIdRouter: s2 = {}, tabBar: r2 = {} } = e) {
    const { loginPage: i2, needLogin: o2 = [], resToLogin: a2 = true } = s2, { needLoginPage: c2, notNeedLoginPage: u2 } = as(t2), { needLoginPage: h2, notNeedLoginPage: l2 } = function(e2 = []) {
      const t3 = [], n3 = [];
      return e2.forEach((e3) => {
        const { root: s3, pages: r3 = [] } = e3, { needLoginPage: i3, notNeedLoginPage: o3 } = as(r3, s3);
        t3.push(...i3), n3.push(...o3);
      }), { needLoginPage: t3, notNeedLoginPage: n3 };
    }(n2);
    return { loginPage: i2, routerNeedLogin: o2, resToLogin: a2, needLoginPage: [...c2, ...h2], notNeedLoginPage: [...u2, ...l2], loginPageInTabBar: ls(i2, r2) };
  }();
  if (ms.indexOf(ps) > -1)
    throw new Error(`Login page [${ps}] should not be "needLogin", please check your pages.json`);
  function ws(e2) {
    const t2 = hs();
    if ("/" === e2.charAt(0))
      return e2;
    const [n2, s2] = e2.split("?"), r2 = n2.replace(/^\//, "").split("/"), i2 = t2.split("/");
    i2.pop();
    for (let e3 = 0; e3 < r2.length; e3++) {
      const t3 = r2[e3];
      ".." === t3 ? i2.pop() : "." !== t3 && i2.push(t3);
    }
    return "" === i2[0] && i2.shift(), "/" + i2.join("/") + (s2 ? "?" + s2 : "");
  }
  function vs(e2) {
    const t2 = cs(ws(e2));
    return !(ys.indexOf(t2) > -1) && (ms.indexOf(t2) > -1 || fs.some((t3) => function(e3, t4) {
      return new RegExp(t4).test(e3);
    }(e2, t3)));
  }
  function Is({ redirect: e2 }) {
    const t2 = cs(e2), n2 = cs(ps);
    return hs() !== n2 && t2 !== n2;
  }
  function Ss({ api: e2, redirect: t2 } = {}) {
    if (!t2 || !Is({ redirect: t2 }))
      return;
    const n2 = function(e3, t3) {
      return "/" !== e3.charAt(0) && (e3 = "/" + e3), t3 ? e3.indexOf("?") > -1 ? e3 + `&uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3 + `?uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3;
    }(ps, t2);
    _s ? "navigateTo" !== e2 && "redirectTo" !== e2 || (e2 = "switchTab") : "switchTab" === e2 && (e2 = "navigateTo");
    const s2 = { navigateTo: uni.navigateTo, redirectTo: uni.redirectTo, switchTab: uni.switchTab, reLaunch: uni.reLaunch };
    setTimeout(() => {
      s2[e2]({ url: n2 });
    }, 0);
  }
  function bs({ url: e2 } = {}) {
    const t2 = { abortLoginPageJump: false, autoToLoginPage: false }, n2 = function() {
      const { token: e3, tokenExpired: t3 } = re();
      let n3;
      if (e3) {
        if (t3 < Date.now()) {
          const e4 = "uni-id-token-expired";
          n3 = { errCode: e4, errMsg: is[e4] };
        }
      } else {
        const e4 = "uni-id-check-token-failed";
        n3 = { errCode: e4, errMsg: is[e4] };
      }
      return n3;
    }();
    if (vs(e2) && n2) {
      n2.uniIdRedirectUrl = e2;
      if (J($).length > 0)
        return setTimeout(() => {
          Y($, n2);
        }, 0), t2.abortLoginPageJump = true, t2;
      t2.autoToLoginPage = true;
    }
    return t2;
  }
  function ks() {
    !function() {
      const e3 = us(), { abortLoginPageJump: t2, autoToLoginPage: n2 } = bs({ url: e3 });
      t2 || n2 && Ss({ api: "redirectTo", redirect: e3 });
    }();
    const e2 = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
    for (let t2 = 0; t2 < e2.length; t2++) {
      const n2 = e2[t2];
      uni.addInterceptor(n2, { invoke(e3) {
        const { abortLoginPageJump: t3, autoToLoginPage: s2 } = bs({ url: e3.url });
        return t3 ? e3 : s2 ? (Ss({ api: n2, redirect: ws(e3.url) }), false) : e3;
      } });
    }
  }
  function As() {
    this.onResponse((e2) => {
      const { type: t2, content: n2 } = e2;
      let s2 = false;
      switch (t2) {
        case "cloudobject":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in is;
          }(n2);
          break;
        case "clientdb":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in rs;
          }(n2);
      }
      s2 && function(e3 = {}) {
        const t3 = J($);
        Z().then(() => {
          const n3 = us();
          if (n3 && Is({ redirect: n3 }))
            return t3.length > 0 ? Y($, Object.assign({ uniIdRedirectUrl: n3 }, e3)) : void (ps && Ss({ api: "navigateTo", redirect: n3 }));
        });
      }(n2);
    });
  }
  function Cs(e2) {
    !function(e3) {
      e3.onResponse = function(e4) {
        V(j, e4);
      }, e3.offResponse = function(e4) {
        G(j, e4);
      };
    }(e2), function(e3) {
      e3.onNeedLogin = function(e4) {
        V($, e4);
      }, e3.offNeedLogin = function(e4) {
        G($, e4);
      }, ds && (L("_globalUniCloudStatus").needLoginInit || (L("_globalUniCloudStatus").needLoginInit = true, Z().then(() => {
        ks.call(e3);
      }), gs && As.call(e3)));
    }(e2), function(e3) {
      e3.onRefreshToken = function(e4) {
        V(B, e4);
      }, e3.offRefreshToken = function(e4) {
        G(B, e4);
      };
    }(e2);
  }
  let Ps;
  const Ts = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", xs = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function Os() {
    const e2 = re().token || "", t2 = e2.split(".");
    if (!e2 || 3 !== t2.length)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse((s2 = t2[1], decodeURIComponent(Ps(s2).split("").map(function(e3) {
        return "%" + ("00" + e3.charCodeAt(0).toString(16)).slice(-2);
      }).join(""))));
    } catch (e3) {
      throw new Error("获取当前用户信息出错，详细错误信息为：" + e3.message);
    }
    var s2;
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
  }
  Ps = "function" != typeof atob ? function(e2) {
    if (e2 = String(e2).replace(/[\t\n\f\r ]+/g, ""), !xs.test(e2))
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t2;
    e2 += "==".slice(2 - (3 & e2.length));
    for (var n2, s2, r2 = "", i2 = 0; i2 < e2.length; )
      t2 = Ts.indexOf(e2.charAt(i2++)) << 18 | Ts.indexOf(e2.charAt(i2++)) << 12 | (n2 = Ts.indexOf(e2.charAt(i2++))) << 6 | (s2 = Ts.indexOf(e2.charAt(i2++))), r2 += 64 === n2 ? String.fromCharCode(t2 >> 16 & 255) : 64 === s2 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
    return r2;
  } : atob;
  var Es = n(function(e2, t2) {
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
    function r2(e3, t3) {
      return e3.tempFiles.forEach((e4, n3) => {
        e4.name || (e4.name = e4.path.substring(e4.path.lastIndexOf("/") + 1)), t3 && (e4.fileType = t3), e4.cloudPath = Date.now() + "_" + n3 + e4.name.substring(e4.name.lastIndexOf("."));
      }), e3.tempFilePaths || (e3.tempFilePaths = e3.tempFiles.map((e4) => e4.path)), e3;
    }
    function i2(e3, t3, { onChooseFile: s3, onUploadProgress: r3 }) {
      return t3.then((e4) => {
        if (s3) {
          const t4 = s3(e4);
          if (void 0 !== t4)
            return Promise.resolve(t4).then((t5) => void 0 === t5 ? e4 : t5);
        }
        return e4;
      }).then((t4) => false === t4 ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e4, t5, s4 = 5, r4) {
        (t5 = Object.assign({}, t5)).errMsg = n2;
        const i3 = t5.tempFiles, o2 = i3.length;
        let a2 = 0;
        return new Promise((n3) => {
          for (; a2 < s4; )
            c2();
          function c2() {
            const s5 = a2++;
            if (s5 >= o2)
              return void (!i3.find((e5) => !e5.url && !e5.errMsg) && n3(t5));
            const u2 = i3[s5];
            e4.uploadFile({ provider: u2.provider, filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, cloudPathAsRealPath: u2.cloudPathAsRealPath, onUploadProgress(e5) {
              e5.index = s5, e5.tempFile = u2, e5.tempFilePath = u2.path, r4 && r4(e5);
            } }).then((e5) => {
              u2.url = e5.fileID, s5 < o2 && c2();
            }).catch((e5) => {
              u2.errMsg = e5.errMsg || e5.message, s5 < o2 && c2();
            });
          }
        });
      }(e3, t4, 5, r3));
    }
    t2.initChooseAndUploadFile = function(e3) {
      return function(t3 = { type: "all" }) {
        return "image" === t3.type ? i2(e3, function(e4) {
          const { count: t4, sizeType: n3, sourceType: i3 = ["album", "camera"], extension: o2 } = e4;
          return new Promise((e5, a2) => {
            uni.chooseImage({ count: t4, sizeType: n3, sourceType: i3, extension: o2, success(t5) {
              e5(r2(t5, "image"));
            }, fail(e6) {
              a2({ errMsg: e6.errMsg.replace("chooseImage:fail", s2) });
            } });
          });
        }(t3), t3) : "video" === t3.type ? i2(e3, function(e4) {
          const { camera: t4, compressed: n3, maxDuration: i3, sourceType: o2 = ["album", "camera"], extension: a2 } = e4;
          return new Promise((e5, c2) => {
            uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: i3, sourceType: o2, extension: a2, success(t5) {
              const { tempFilePath: n4, duration: s3, size: i4, height: o3, width: a3 } = t5;
              e5(r2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: i4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: o3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
            }, fail(e6) {
              c2({ errMsg: e6.errMsg.replace("chooseVideo:fail", s2) });
            } });
          });
        }(t3), t3) : i2(e3, function(e4) {
          const { count: t4, extension: n3 } = e4;
          return new Promise((e5, i3) => {
            let o2 = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o2 = wx.chooseMessageFile), "function" != typeof o2)
              return i3({ errMsg: s2 + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });
            o2({ type: "all", count: t4, extension: n3, success(t5) {
              e5(r2(t5));
            }, fail(e6) {
              i3({ errMsg: e6.errMsg.replace("chooseFile:fail", s2) });
            } });
          });
        }(t3), t3);
      };
    };
  }), Ls = t$3(Es);
  const Rs = "manual";
  function Us(e2) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {}, mixinDatacomError: null }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e3 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t2) => {
          e3.push(this[t2]);
        }), e3;
      }, (e3, t2) => {
        if (this.loadtime === Rs)
          return;
        let n2 = false;
        const s2 = [];
        for (let r2 = 2; r2 < e3.length; r2++)
          e3[r2] !== t2[r2] && (s2.push(e3[r2]), n2 = true);
        e3[0] !== t2[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
      });
    }, methods: { onMixinDatacomPropsChange(e3, t2) {
    }, mixinDatacomEasyGet({ getone: e3 = false, success: t2, fail: n2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomError = null, this.mixinDatacomGet().then((n3) => {
        this.mixinDatacomLoading = false;
        const { data: s2, count: r2 } = n3.result;
        this.getcount && (this.mixinDatacomPage.count = r2), this.mixinDatacomHasMore = s2.length < this.pageSize;
        const i2 = e3 ? s2.length ? s2[0] : void 0 : s2;
        this.mixinDatacomResData = i2, t2 && t2(i2);
      }).catch((e4) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e4, this.mixinDatacomError = e4, n2 && n2(e4);
      }));
    }, mixinDatacomGet(t2 = {}) {
      let n2;
      t2 = t2 || {}, n2 = "undefined" != typeof __uniX && __uniX ? e2.databaseForJQL(this.spaceInfo) : e2.database(this.spaceInfo);
      const s2 = t2.action || this.action;
      s2 && (n2 = n2.action(s2));
      const r2 = t2.collection || this.collection;
      n2 = Array.isArray(r2) ? n2.collection(...r2) : n2.collection(r2);
      const i2 = t2.where || this.where;
      i2 && Object.keys(i2).length && (n2 = n2.where(i2));
      const o2 = t2.field || this.field;
      o2 && (n2 = n2.field(o2));
      const a2 = t2.foreignKey || this.foreignKey;
      a2 && (n2 = n2.foreignKey(a2));
      const c2 = t2.groupby || this.groupby;
      c2 && (n2 = n2.groupBy(c2));
      const u2 = t2.groupField || this.groupField;
      u2 && (n2 = n2.groupField(u2));
      true === (void 0 !== t2.distinct ? t2.distinct : this.distinct) && (n2 = n2.distinct());
      const h2 = t2.orderby || this.orderby;
      h2 && (n2 = n2.orderBy(h2));
      const l2 = void 0 !== t2.pageCurrent ? t2.pageCurrent : this.mixinDatacomPage.current, d2 = void 0 !== t2.pageSize ? t2.pageSize : this.mixinDatacomPage.size, p2 = void 0 !== t2.getcount ? t2.getcount : this.getcount, f2 = void 0 !== t2.gettree ? t2.gettree : this.gettree, g2 = void 0 !== t2.gettreepath ? t2.gettreepath : this.gettreepath, m2 = { getCount: p2 }, y2 = { limitLevel: void 0 !== t2.limitlevel ? t2.limitlevel : this.limitlevel, startWith: void 0 !== t2.startwith ? t2.startwith : this.startwith };
      return f2 && (m2.getTree = y2), g2 && (m2.getTreePath = y2), n2 = n2.skip(d2 * (l2 - 1)).limit(d2).get(m2), n2;
    } } };
  }
  function Ns(e2) {
    return function(t2, n2 = {}) {
      n2 = function(e3, t3 = {}) {
        return e3.customUI = t3.customUI || e3.customUI, e3.parseSystemError = t3.parseSystemError || e3.parseSystemError, Object.assign(e3.loadingOptions, t3.loadingOptions), Object.assign(e3.errorOptions, t3.errorOptions), "object" == typeof t3.secretMethods && (e3.secretMethods = t3.secretMethods), e3;
      }({ customUI: false, loadingOptions: { title: "加载中...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
      const { customUI: s2, loadingOptions: r2, errorOptions: i2, parseSystemError: o2 } = n2, a2 = !s2;
      return new Proxy({}, { get(s3, c2) {
        switch (c2) {
          case "toString":
            return "[object UniCloudObject]";
          case "toJSON":
            return {};
        }
        return function({ fn: e3, interceptorName: t3, getCallbackArgs: n3 } = {}) {
          return async function(...s4) {
            const r3 = n3 ? n3({ params: s4 }) : {};
            let i3, o3;
            try {
              return await M(q(t3, "invoke"), { ...r3 }), i3 = await e3(...s4), await M(q(t3, "success"), { ...r3, result: i3 }), i3;
            } catch (e4) {
              throw o3 = e4, await M(q(t3, "fail"), { ...r3, error: o3 }), o3;
            } finally {
              await M(q(t3, "complete"), o3 ? { ...r3, error: o3 } : { ...r3, result: i3 });
            }
          };
        }({ fn: async function s4(...h2) {
          let l2;
          a2 && uni.showLoading({ title: r2.title, mask: r2.mask });
          const d2 = { name: t2, type: u, data: { method: c2, params: h2 } };
          "object" == typeof n2.secretMethods && function(e3, t3) {
            const n3 = t3.data.method, s5 = e3.secretMethods || {}, r3 = s5[n3] || s5["*"];
            r3 && (t3.secretType = r3);
          }(n2, d2);
          let p2 = false;
          try {
            l2 = await e2.callFunction(d2);
          } catch (e3) {
            p2 = true, l2 = { result: new te(e3) };
          }
          const { errSubject: f2, errCode: g2, errMsg: m2, newToken: y2 } = l2.result || {};
          if (a2 && uni.hideLoading(), y2 && y2.token && y2.tokenExpired && (ie(y2), Y(B, { ...y2 })), g2) {
            let e3 = m2;
            if (p2 && o2) {
              e3 = (await o2({ objectName: t2, methodName: c2, params: h2, errSubject: f2, errCode: g2, errMsg: m2 })).errMsg || m2;
            }
            if (a2)
              if ("toast" === i2.type)
                uni.showToast({ title: e3, icon: "none" });
              else {
                if ("modal" !== i2.type)
                  throw new Error(`Invalid errorOptions.type: ${i2.type}`);
                {
                  const { confirm: t3 } = await async function({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3 } = {}) {
                    return new Promise((i3, o3) => {
                      uni.showModal({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3, success(e5) {
                        i3(e5);
                      }, fail() {
                        i3({ confirm: false, cancel: true });
                      } });
                    });
                  }({ title: "提示", content: e3, showCancel: i2.retry, cancelText: "取消", confirmText: i2.retry ? "重试" : "确定" });
                  if (i2.retry && t3)
                    return s4(...h2);
                }
              }
            const n3 = new te({ subject: f2, code: g2, message: m2, requestId: l2.requestId });
            throw n3.detail = l2.result, Y(j, { type: z, content: n3 }), n3;
          }
          return Y(j, { type: z, content: l2.result }), l2.result;
        }, interceptorName: "callObject", getCallbackArgs: function({ params: e3 } = {}) {
          return { objectName: t2, methodName: c2, params: e3 };
        } });
      } });
    };
  }
  function Ds(e2) {
    return L("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e2.config.spaceId));
  }
  async function Ms({ openid: e2, callLoginByWeixin: t2 = false } = {}) {
    Ds(this);
    throw new Error(`[SecureNetwork] API \`initSecureNetworkByWeixin\` is not supported on platform \`${C}\``);
  }
  async function qs(e2) {
    const t2 = Ds(this);
    return t2.initPromise || (t2.initPromise = Ms.call(this, e2).then((e3) => e3).catch((e3) => {
      throw delete t2.initPromise, e3;
    })), t2.initPromise;
  }
  function Fs(e2) {
    return function({ openid: t2, callLoginByWeixin: n2 = false } = {}) {
      return qs.call(e2, { openid: t2, callLoginByWeixin: n2 });
    };
  }
  function Ks(e2) {
    !function(e3) {
      he = e3;
    }(e2);
  }
  function js(e2) {
    const t2 = { getSystemInfo: uni.getSystemInfo, getPushClientId: uni.getPushClientId };
    return function(n2) {
      return new Promise((s2, r2) => {
        t2[e2]({ ...n2, success(e3) {
          s2(e3);
        }, fail(e3) {
          r2(e3);
        } });
      });
    };
  }
  class $s extends class {
    constructor() {
      this._callback = {};
    }
    addListener(e2, t2) {
      this._callback[e2] || (this._callback[e2] = []), this._callback[e2].push(t2);
    }
    on(e2, t2) {
      return this.addListener(e2, t2);
    }
    removeListener(e2, t2) {
      if (!t2)
        throw new Error('The "listener" argument must be of type function. Received undefined');
      const n2 = this._callback[e2];
      if (!n2)
        return;
      const s2 = function(e3, t3) {
        for (let n3 = e3.length - 1; n3 >= 0; n3--)
          if (e3[n3] === t3)
            return n3;
        return -1;
      }(n2, t2);
      n2.splice(s2, 1);
    }
    off(e2, t2) {
      return this.removeListener(e2, t2);
    }
    removeAllListener(e2) {
      delete this._callback[e2];
    }
    emit(e2, ...t2) {
      const n2 = this._callback[e2];
      if (n2)
        for (let e3 = 0; e3 < n2.length; e3++)
          n2[e3](...t2);
    }
  } {
    constructor() {
      super(), this._uniPushMessageCallback = this._receivePushMessage.bind(this), this._currentMessageId = -1, this._payloadQueue = [];
    }
    init() {
      return Promise.all([js("getSystemInfo")(), js("getPushClientId")()]).then(([{ appId: e2 } = {}, { cid: t2 } = {}] = []) => {
        if (!e2)
          throw new Error("Invalid appId, please check the manifest.json file");
        if (!t2)
          throw new Error("Invalid push client id");
        this._appId = e2, this._pushClientId = t2, this._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), this.emit("open"), this._initMessageListener();
      }, (e2) => {
        throw this.emit("error", e2), this.close(), e2;
      });
    }
    async open() {
      return this.init();
    }
    _isUniCloudSSE(e2) {
      if ("receive" !== e2.type)
        return false;
      const t2 = e2 && e2.data && e2.data.payload;
      return !(!t2 || "UNI_CLOUD_SSE" !== t2.channel || t2.seqId !== this._seqId);
    }
    _receivePushMessage(e2) {
      if (!this._isUniCloudSSE(e2))
        return;
      const t2 = e2 && e2.data && e2.data.payload, { action: n2, messageId: s2, message: r2 } = t2;
      this._payloadQueue.push({ action: n2, messageId: s2, message: r2 }), this._consumMessage();
    }
    _consumMessage() {
      for (; ; ) {
        const e2 = this._payloadQueue.find((e3) => e3.messageId === this._currentMessageId + 1);
        if (!e2)
          break;
        this._currentMessageId++, this._parseMessagePayload(e2);
      }
    }
    _parseMessagePayload(e2) {
      const { action: t2, messageId: n2, message: s2 } = e2;
      "end" === t2 ? this._end({ messageId: n2, message: s2 }) : "message" === t2 && this._appendMessage({ messageId: n2, message: s2 });
    }
    _appendMessage({ messageId: e2, message: t2 } = {}) {
      this.emit("message", t2);
    }
    _end({ messageId: e2, message: t2 } = {}) {
      this.emit("end", t2), this.close();
    }
    _initMessageListener() {
      uni.onPushMessage(this._uniPushMessageCallback);
    }
    _destroy() {
      uni.offPushMessage(this._uniPushMessageCallback);
    }
    toJSON() {
      return { appId: this._appId, pushClientId: this._pushClientId, seqId: this._seqId };
    }
    close() {
      this._destroy(), this.emit("close");
    }
  }
  async function Bs(e2, t2) {
    const n2 = `http://${e2}:${t2}/system/ping`;
    try {
      const e3 = await (s2 = { url: n2, timeout: 500 }, new Promise((e4, t3) => {
        ne.request({ ...s2, success(t4) {
          e4(t4);
        }, fail(e5) {
          t3(e5);
        } });
      }));
      return !(!e3.data || 0 !== e3.data.code);
    } catch (e3) {
      return false;
    }
    var s2;
  }
  async function Ws(e2) {
    {
      const { osName: e3, osVersion: t3 } = ce();
      "ios" === e3 && function(e4) {
        if (!e4 || "string" != typeof e4)
          return 0;
        const t4 = e4.match(/^(\d+)./);
        return t4 && t4[1] ? parseInt(t4[1]) : 0;
      }(t3) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发期间需要，发行后不需要）");
    }
    const t2 = e2.__dev__;
    if (!t2.debugInfo)
      return;
    const { address: n2, servePort: s2 } = t2.debugInfo, { address: r2 } = await async function(e3, t3) {
      let n3;
      for (let s3 = 0; s3 < e3.length; s3++) {
        const r3 = e3[s3];
        if (await Bs(r3, t3)) {
          n3 = r3;
          break;
        }
      }
      return { address: n3, port: t3 };
    }(n2, s2);
    if (r2)
      return t2.localAddress = r2, void (t2.localPort = s2);
    const i2 = console["error"];
    let o2 = "";
    if ("remote" === t2.debugInfo.initialLaunchType ? (t2.debugInfo.forceRemote = true, o2 = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : o2 = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", o2 += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", 0 === C.indexOf("mp-") && (o2 += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), !t2.debugInfo.forceRemote)
      throw new Error(o2);
    i2(o2);
  }
  function Hs(e2) {
    e2._initPromiseHub || (e2._initPromiseHub = new v({ createPromise: function() {
      let t2 = Promise.resolve();
      var n2;
      n2 = 1, t2 = new Promise((e3) => {
        setTimeout(() => {
          e3();
        }, n2);
      });
      const s2 = e2.auth();
      return t2.then(() => s2.getLoginState()).then((e3) => e3 ? Promise.resolve() : s2.signInAnonymously());
    } }));
  }
  const zs = { tcb: bt, tencent: bt, aliyun: fe, private: At, alipay: Nt };
  let Js = new class {
    init(e2) {
      let t2 = {};
      const n2 = zs[e2.provider];
      if (!n2)
        throw new Error("未提供正确的provider参数");
      t2 = n2.init(e2), function(e3) {
        const t3 = {};
        e3.__dev__ = t3, t3.debugLog = "app" === C;
        const n3 = P;
        n3 && !n3.code && (t3.debugInfo = n3);
        const s2 = new v({ createPromise: function() {
          return Ws(e3);
        } });
        t3.initLocalNetwork = function() {
          return s2.exec();
        };
      }(t2), Hs(t2), Bn(t2), function(e3) {
        const t3 = e3.uploadFile;
        e3.uploadFile = function(e4) {
          return t3.call(this, e4);
        };
      }(t2), function(e3) {
        e3.database = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).database();
          if (this._database)
            return this._database;
          const n3 = es(ts, { uniClient: e3 });
          return this._database = n3, n3;
        }, e3.databaseForJQL = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).databaseForJQL();
          if (this._databaseForJQL)
            return this._databaseForJQL;
          const n3 = es(ts, { uniClient: e3, isJQL: true });
          return this._databaseForJQL = n3, n3;
        };
      }(t2), function(e3) {
        e3.getCurrentUserInfo = Os, e3.chooseAndUploadFile = Ls.initChooseAndUploadFile(e3), Object.assign(e3, { get mixinDatacom() {
          return Us(e3);
        } }), e3.SSEChannel = $s, e3.initSecureNetworkByWeixin = Fs(e3), e3.setCustomClientInfo = Ks, e3.importObject = Ns(e3);
      }(t2);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e3) => {
        if (!t2[e3])
          return;
        const n3 = t2[e3];
        t2[e3] = function() {
          return n3.apply(t2, Array.from(arguments));
        }, t2[e3] = (/* @__PURE__ */ function(e4, t3) {
          return function(n4) {
            let s2 = false;
            if ("callFunction" === t3) {
              const e5 = n4 && n4.type || c;
              s2 = e5 !== c;
            }
            const r2 = "callFunction" === t3 && !s2, i2 = this._initPromiseHub.exec();
            n4 = n4 || {};
            const { success: o2, fail: a2, complete: u2 } = ee(n4), h2 = i2.then(() => s2 ? Promise.resolve() : M(q(t3, "invoke"), n4)).then(() => e4.call(this, n4)).then((e5) => s2 ? Promise.resolve(e5) : M(q(t3, "success"), e5).then(() => M(q(t3, "complete"), e5)).then(() => (r2 && Y(j, { type: H, content: e5 }), Promise.resolve(e5))), (e5) => s2 ? Promise.reject(e5) : M(q(t3, "fail"), e5).then(() => M(q(t3, "complete"), e5)).then(() => (Y(j, { type: H, content: e5 }), Promise.reject(e5))));
            if (!(o2 || a2 || u2))
              return h2;
            h2.then((e5) => {
              o2 && o2(e5), u2 && u2(e5), r2 && Y(j, { type: H, content: e5 });
            }, (e5) => {
              a2 && a2(e5), u2 && u2(e5), r2 && Y(j, { type: H, content: e5 });
            });
          };
        }(t2[e3], e3)).bind(t2);
      }), t2.init = this.init, t2;
    }
  }();
  (() => {
    const e2 = T;
    let t2 = {};
    if (e2 && 1 === e2.length)
      t2 = e2[0], Js = Js.init(t2), Js._isDefault = true;
    else {
      const t3 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
      let n2;
      n2 = e2 && e2.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在uniCloud目录右键关联服务空间", t3.forEach((e3) => {
        Js[e3] = function() {
          return console.error(n2), Promise.reject(new te({ code: "SYS_ERR", message: n2 }));
        };
      });
    }
    Object.assign(Js, { get mixinDatacom() {
      return Us(Js);
    } }), Cs(Js), Js.addInterceptor = N, Js.removeInterceptor = D, Js.interceptObject = F;
  })();
  var Vs = Js;
  const _sfc_main$_ = {
    name: "uni-data-select",
    mixins: [Vs.mixinDatacom || {}],
    props: {
      localdata: {
        type: Array,
        default() {
          return [];
        }
      },
      value: {
        type: [String, Number],
        default: ""
      },
      modelValue: {
        type: [String, Number],
        default: ""
      },
      label: {
        type: String,
        default: ""
      },
      placeholder: {
        type: String,
        default: "请选择"
      },
      emptyTips: {
        type: String,
        default: "无选项"
      },
      clear: {
        type: Boolean,
        default: true
      },
      defItem: {
        type: Number,
        default: 0
      },
      disabled: {
        type: Boolean,
        default: false
      },
      // 格式化输出 用法 field="_id as value, version as text, uni_platform as label" format="{label} - {text}"
      format: {
        type: String,
        default: ""
      },
      placement: {
        type: String,
        default: "bottom"
      }
    },
    data() {
      return {
        showSelector: false,
        current: "",
        mixinDatacomResData: [],
        apps: [],
        channels: [],
        cacheKey: "uni-data-select-lastSelectedValue"
      };
    },
    created() {
      this.debounceGet = this.debounce(() => {
        this.query();
      }, 300);
      if (this.collection && !this.localdata.length) {
        this.debounceGet();
      }
    },
    computed: {
      typePlaceholder() {
        const text = {
          "opendb-stat-app-versions": "版本",
          "opendb-app-channels": "渠道",
          "opendb-app-list": "应用"
        };
        const common = this.placeholder;
        const placeholder = text[this.collection];
        return placeholder ? common + placeholder : common;
      },
      valueCom() {
        return this.modelValue;
      },
      textShow() {
        let text = this.current;
        if (text.length > 10) {
          return text.slice(0, 25) + "...";
        }
        return text;
      },
      getOffsetByPlacement() {
        switch (this.placement) {
          case "top":
            return "bottom:calc(100% + 12px);";
          case "bottom":
            return "top:calc(100% + 12px);";
        }
      }
    },
    watch: {
      localdata: {
        immediate: true,
        handler(val, old) {
          if (Array.isArray(val) && old !== val) {
            this.mixinDatacomResData = val;
          }
        }
      },
      valueCom(val, old) {
        this.initDefVal();
      },
      mixinDatacomResData: {
        immediate: true,
        handler(val) {
          if (val.length) {
            this.initDefVal();
          }
        }
      }
    },
    methods: {
      debounce(fn, time = 100) {
        let timer = null;
        return function(...args) {
          if (timer)
            clearTimeout(timer);
          timer = setTimeout(() => {
            fn.apply(this, args);
          }, time);
        };
      },
      // 执行数据库查询
      query() {
        this.mixinDatacomEasyGet();
      },
      // 监听查询条件变更事件
      onMixinDatacomPropsChange() {
        if (this.collection) {
          this.debounceGet();
        }
      },
      initDefVal() {
        let defValue = "";
        if ((this.valueCom || this.valueCom === 0) && !this.isDisabled(this.valueCom)) {
          defValue = this.valueCom;
        } else {
          let strogeValue;
          if (this.collection) {
            strogeValue = this.getCache();
          }
          if (strogeValue || strogeValue === 0) {
            defValue = strogeValue;
          } else {
            let defItem = "";
            if (this.defItem > 0 && this.defItem <= this.mixinDatacomResData.length) {
              defItem = this.mixinDatacomResData[this.defItem - 1].value;
            }
            defValue = defItem;
          }
          if (defValue || defValue === 0) {
            this.emit(defValue);
          }
        }
        const def = this.mixinDatacomResData.find((item) => item.value === defValue);
        this.current = def ? this.formatItemName(def) : "";
      },
      /**
       * @param {[String, Number]} value
       * 判断用户给的 value 是否同时为禁用状态
       */
      isDisabled(value) {
        let isDisabled = false;
        this.mixinDatacomResData.forEach((item) => {
          if (item.value === value) {
            isDisabled = item.disable;
          }
        });
        return isDisabled;
      },
      clearVal() {
        this.emit("");
        if (this.collection) {
          this.removeCache();
        }
      },
      change(item) {
        if (!item.disable) {
          this.showSelector = false;
          this.current = this.formatItemName(item);
          this.emit(item.value);
        }
      },
      emit(val) {
        this.$emit("input", val);
        this.$emit("update:modelValue", val);
        this.$emit("change", val);
        if (this.collection) {
          this.setCache(val);
        }
      },
      toggleSelector() {
        if (this.disabled) {
          return;
        }
        this.showSelector = !this.showSelector;
      },
      formatItemName(item) {
        let {
          text,
          value,
          channel_code
        } = item;
        channel_code = channel_code ? `(${channel_code})` : "";
        if (this.format) {
          let str = "";
          str = this.format;
          for (let key in item) {
            str = str.replace(new RegExp(`{${key}}`, "g"), item[key]);
          }
          return str;
        } else {
          return this.collection.indexOf("app-list") > 0 ? `${text}(${value})` : text ? text : `未命名${channel_code}`;
        }
      },
      // 获取当前加载的数据
      getLoadData() {
        return this.mixinDatacomResData;
      },
      // 获取当前缓存key
      getCurrentCacheKey() {
        return this.collection;
      },
      // 获取缓存
      getCache(name = this.getCurrentCacheKey()) {
        let cacheData = uni.getStorageSync(this.cacheKey) || {};
        return cacheData[name];
      },
      // 设置缓存
      setCache(value, name = this.getCurrentCacheKey()) {
        let cacheData = uni.getStorageSync(this.cacheKey) || {};
        cacheData[name] = value;
        uni.setStorageSync(this.cacheKey, cacheData);
      },
      // 删除缓存
      removeCache(name = this.getCurrentCacheKey()) {
        let cacheData = uni.getStorageSync(this.cacheKey) || {};
        delete cacheData[name];
        uni.setStorageSync(this.cacheKey, cacheData);
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$5);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-stat__select" }, [
      $props.label ? (vue.openBlock(), vue.createElementBlock(
        "span",
        {
          key: 0,
          class: "uni-label-text hide-on-phone"
        },
        vue.toDisplayString($props.label + "："),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["uni-stat-box", { "uni-stat__actived": $data.current }])
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["uni-select", { "uni-select--disabled": $props.disabled }])
            },
            [
              vue.createElementVNode("view", {
                class: "uni-select__input-box",
                onClick: _cache[1] || (_cache[1] = (...args) => $options.toggleSelector && $options.toggleSelector(...args))
              }, [
                $data.current ? (vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: 0,
                    class: "uni-select__input-text"
                  },
                  vue.toDisplayString($options.textShow),
                  1
                  /* TEXT */
                )) : (vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: 1,
                    class: "uni-select__input-text uni-select__input-placeholder"
                  },
                  vue.toDisplayString($options.typePlaceholder),
                  1
                  /* TEXT */
                )),
                $data.current && $props.clear && !$props.disabled ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 2,
                  onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.clearVal && $options.clearVal(...args), ["stop"]))
                }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "clear",
                    color: "#c0c4cc",
                    size: "24"
                  })
                ])) : (vue.openBlock(), vue.createElementBlock("view", { key: 3 }, [
                  vue.createVNode(_component_uni_icons, {
                    type: $data.showSelector ? "top" : "bottom",
                    size: "14",
                    color: "#999"
                  }, null, 8, ["type"])
                ]))
              ]),
              $data.showSelector ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-select--mask",
                onClick: _cache[2] || (_cache[2] = (...args) => $options.toggleSelector && $options.toggleSelector(...args))
              })) : vue.createCommentVNode("v-if", true),
              $data.showSelector ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 1,
                  class: "uni-select__selector",
                  style: vue.normalizeStyle($options.getOffsetByPlacement)
                },
                [
                  vue.createElementVNode(
                    "view",
                    {
                      class: vue.normalizeClass($props.placement == "bottom" ? "uni-popper__arrow_bottom" : "uni-popper__arrow_top")
                    },
                    null,
                    2
                    /* CLASS */
                  ),
                  vue.createElementVNode("scroll-view", {
                    "scroll-y": "true",
                    class: "uni-select__selector-scroll"
                  }, [
                    $data.mixinDatacomResData.length === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "uni-select__selector-empty"
                    }, [
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString($props.emptyTips),
                        1
                        /* TEXT */
                      )
                    ])) : (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      { key: 1 },
                      vue.renderList($data.mixinDatacomResData, (item, index) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          class: "uni-select__selector-item",
                          key: index,
                          onClick: ($event) => $options.change(item)
                        }, [
                          vue.createElementVNode(
                            "text",
                            {
                              class: vue.normalizeClass({ "uni-select__selector__disabled": item.disable })
                            },
                            vue.toDisplayString($options.formatItemName(item)),
                            3
                            /* TEXT, CLASS */
                          )
                        ], 8, ["onClick"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])
                ],
                4
                /* STYLE */
              )) : vue.createCommentVNode("v-if", true)
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      )
    ]);
  }
  const __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["render", _sfc_render$i], ["__scopeId", "data-v-ddf9e0a2"], ["__file", "/Users/daily/Desktop/d9/money_celestial/uni_modules/uni-data-select/components/uni-data-select/uni-data-select.vue"]]);
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode2 = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode2 === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode2 === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode2}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater: formater2 }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater2 || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      const options = [
        messages2,
        locale
      ];
      locale = options[0];
      messages2 = options[1];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en$1 = {
    "uni-load-more.contentdown": "Pull up to show more",
    "uni-load-more.contentrefresh": "loading...",
    "uni-load-more.contentnomore": "No more data"
  };
  const zhHans$1 = {
    "uni-load-more.contentdown": "上拉显示更多",
    "uni-load-more.contentrefresh": "正在加载...",
    "uni-load-more.contentnomore": "没有更多数据了"
  };
  const zhHant$1 = {
    "uni-load-more.contentdown": "上拉顯示更多",
    "uni-load-more.contentrefresh": "正在加載...",
    "uni-load-more.contentnomore": "沒有更多數據了"
  };
  const messages = {
    en: en$1,
    "zh-Hans": zhHans$1,
    "zh-Hant": zhHant$1
  };
  let platform;
  setTimeout(() => {
    platform = uni.getSystemInfoSync().platform;
  }, 16);
  const {
    t: t$2
  } = initVueI18n(messages);
  const _sfc_main$Z = {
    name: "UniLoadMore",
    emits: ["clickLoadMore"],
    props: {
      status: {
        // 上拉的状态：more-loading前；loading-loading中；noMore-没有更多了
        type: String,
        default: "more"
      },
      showIcon: {
        type: Boolean,
        default: true
      },
      iconType: {
        type: String,
        default: "auto"
      },
      iconSize: {
        type: Number,
        default: 24
      },
      color: {
        type: String,
        default: "#777777"
      },
      contentText: {
        type: Object,
        default() {
          return {
            contentdown: "",
            contentrefresh: "",
            contentnomore: ""
          };
        }
      },
      showText: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        webviewHide: false,
        platform,
        imgBase64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlBMzU3OTlEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlBMzU3OUFEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUEzNTc5N0Q5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUEzNTc5OEQ5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt+ALSwAAA6CSURBVHja1FsLkFZVHb98LM+F5bHL8khA1iSeiyQBCRM+YGqKUnnJTDLGI0BGZlKDIU2MMglUiDApEZvSsZnQtBRJtKwQNKQMFYeRDR10WOLd8ljYXdh+v8v5fR3Od+797t1dnOnO/Ofce77z+J//+b/P+ZqtXbs2sJ9MJhNUV1cHJ06cCJo3bx7EPc2aNcvpy7pWrVoF+/fvDyoqKoI2bdoE9fX1F7TjN8a+EXBn/fkfvw942Tf+wYMHg9mzZwfjxo0LDhw4EPa1x2MbFw/fOGfPng1qa2tzcCkILsLDydq2bRsunpOTMM7TD/W/tZDZhPdeKD+yGxHhdu3aBV27dg3OnDlzMVANMheLAO3btw8KCwuDmpoaX5OxbgUIMEq7K8IcPnw4KCsrC/r37x8cP378/4cAXAB3vqSkJMuiDhTkw+XcuXNhOWbMmKBly5YhUT8xArhyFvP0BfwRsAuwxJZJsm/nzp2DTp06he/OU+cZ64K6o0ePBkOHDg2GDx8e6gEbJ5Q/NHNuAJQ1hgBeHUDlR7nVTkY8rQAvAi4z34vR/mPs1FoRsaCgIJThI0eOBC1atEiFGGV+5MiRoS45efJkqFjJFXV1dQuA012m2WcwTw98fy6CqBdsaiIO4CScrGPHjvk4odhavPquRtFWXEC25VgkREKOCh/qDSq+vn37htzD/mZTOmOc5U7zKzBPEedygWshcDyWvs30igAbU+6oyMgJBCFhwQE0fccxN60Ay9iebbjoDh06hMowjQxT4fXq1SskArmHZpkArvixp/kWzHdMeArExSJEaiXIjjRjRJ4DaAGWpibLzXN3Fm1vA5teBgh3j1Rv3bp1YgKwPdmf2p9zcyNYYgPKMfY0T5f5nNYdw158nJ8QawW4CLKwiOBSEgO/hok2eBydR+3dYH+PLxA5J8Vv0KBBwenTp0P2JWAx6+yFEBfs8lMY+y0SWMBNI9E4ThKi58VKTg3FQZS1RQF1cz27eC0QHMu+3E0SkUowjhVt5VdaWhp07949ZHv2Qd1EjDXM2cla1M0nl3GxAs3J9yREzyTdFVKVFOaE9qRA8GM0WebRuo9JGZKA7Mv2SeS/Z8+eoQ9BArMfFrLGo6jvxbhHbJZnKX2Rzz1O7QhJJ9Cs2ZMaWIyq/zhdeqPNfIoHd58clIQD+JSXl4dKlyIAuBdVXZwFVWKspSSoxE++h8x4k3uCnEhE4I5KwRiFWGOU0QWKiCYLbdoRMRKAu2kQ9vkfLU6dOhX06NEjlH+yMRZSinnuyWnYosVcji8CEA/6Cg2JF+IIUBqnGKUTCNwtwBN4f89RiK1R96DEgO2o0NDmtEdvVFdVVYV+P3UAPUEs6GFwV3PHmXkD4vh74iDFJysVI/MlaQhwKeBNTLYX5VuA8T4/gZxA4MRGFxDB6R7OmYPfyykGRJbyie+XnGYnQIC/coH9+vULiYrxrkL9ZA9+0ykaHIfEpM7ge8TiJ2CsHYwyMfafAF1yCGBHYIbCVDjDjKt7BeB51D+LgQa6OkG7IDYEEtvQ7lnXLKLtLdLuJBpE4gPUXcW2+PkZwOex+4cGDhwYDBkyRL7/HFcEwUGPo/8uWRUpYnfxGHco8HkewLHLyYmAawAPuIFZxhOpDfJQ8gbUv41yORAptMWBNr6oqMhWird5+u+iHmBb2nhjDV7HWBNQTgK8y11l5NetWzc5ULscAtSj7nbNI0skhWeUZCc0W4nyH/jO4Vz0u1IeYhbk4AiwM6tjxIWByHsoZ9qcIBPJd/y+DwPfBESOmCa/QF3WiZHucLlEDpNxcNhmheEOPgdQNx6/VZFQzFZ5TN08AHXQt2Ii3EdyFuUsPtTcGPhW5iMiCNELvz+Gdn9huG4HUJaW/w3g0wxV0XaG7arG2WeKiUWYM4Y7GO5ezshTARbbWGw/DvXkpp/ivVvE0JVoMxN4rpGzJMhE5Pl+xlATsDIqikP9F9D2z3h9nOksEUFhK+qO4rcPkoalMQ/HqJLIyb3F3JdjrCcw1yZ8joyJLR5gCo54etlag7qIoeNh1N1BRYj3DTFJ0elotxPlVzkGuYAmL0VSJVGAJA41c4Z6A3BzTLfn0HYwYKEI6CUAMzZEWvLsIcQOo1AmmyyM72nHJCfYsogflGV6jEk9vyQZXSuq6w4c16NsGcGZbwOPr+H1RkOk2LEzjNepxQkihHSCQ4ynAYNRx2zMKV92CQMWqj8J0BRE8EShxRFN6YrfCRhC0x3r/Zm4IbQCcmJoV0kMamllccR6FjHqUC5F2R/wS2dcymOlfAKOS4KmzQb5cpNC2MC7JhVn5wjXoJ44rYhLh8n0eXOCorJxa7POjbSlCGVczr34/RsAmrcvo9s+wGp3tzVhntxiXiJ4nvEYb4FJkf0O8HocAePmLvCxnL0AORraVekJk6TYjDabRVXfRE2lCN1h6ZQRN1+InUbsCpKwoBZHh0dODN9JBCUffItXxEavTQkUtnfTVAplCWL3JISz29h4NjotnuSsQKJCk8dF+kJR6RARjrqFVmfPnj3ZbK8cIJ0msd6jgHPGtfVTQ8VLmlvh4mct9sobRmPic0DyDQQnx/NlfYUgyz59+oScsH379pAwXABD32nTpoUHIToESeI5mnbE/UqDdyLcafEBf2MCqgC7NwxIbMREJQ0g4D4sfJwnD+AmRrII05cfMWJE+L1169bQr+fip06dGp4oJ83lmYd5wj/EmMa4TaHivo4EeCguYZBnkB5g2aWA69OIEnUHOaGysjIYMGBAMGnSpODYsWPZwCpFmm4lNq+4gSLQA7jcX8DwtjEyRC8wjabnXEx9kfWnTJkSJkAo90xpJVV+FmcVNeYAF5zWngS4C4O91MBxmAv8blLEpbjI5sz9MTdAhcgkCT1RO8mZkAjfiYpTEvStAS53Uw1vAiUGgZ3GpuQEYvoiBqlIan7kSDHnTwJQFNiPu0+5VxCVYhcZIjNrdXUDdp+Eq5AZ3Gkg8QAyVZRZIk4Tl4QAbF9cXJxNYZMAtAokgs4BrNxEpCtteXg7DDTMDKYNSuQdKsnJBek7HxewvxaosWxLYXtw+cJp18217wql4aKCfBNoEu0O5VU+PhctJ0YeXD4C6JQpyrlpSLTojpGGGN5YwNziChdIZLk4lvLcFJ9jMX3QdiImY9bmGQU+TRUL5CHITTRlgF8D9ouD1MfmLoEPl5xokIumZ2cfgMpHt47IW9N64Hsh7wQYYjyIugWuF5fCqYncXRd5vPMWyizzvhi/32+nvG0dZc9vR6fZOu0md5e+uC408FvKSIOZwXlGvxPv95izA2Vtvg1xKFWARI+vMX66HUhpQQb643uW1bSjuTWyw2SBvDrBvjFic1eGGlz5esq3ko9uSIlBRqPuFcCv8F4WIcN12nVaBd0SaYwI6PDDImR11JkqgHcPmQssjxIn6bUshygDFJUTxPMpHk+jfjPgupgdnYV2R/g7xSjtpah8RJBewhwf0gGK6XI92u4wXFEU40afJ4DN4h5LcAd+40HI3JgJecuT0c062W0i2hQJUTcxan3/CMW1PF2K6bbA+Daz4xRs1D3Br1Cm0OihKCqizW78/nXAF/G5TXrEcVzaNMH6CyMswqsAHqDyDLEyou8lwOXnKF8DjI6KjV3KzMBiXkDH8ij/H214J5A596ekrZ3F0zXlWeL7+P5eUrNo3/QwC15uxthuzidy7DzKRwEDaAViiDgKbTbz7CJnzo0bN7pIfIiid8SuPwn25o3QCmpnyjlZkyxPP8EomCJzrGb7GJMx7tNsq4MT2xMUYaiErZOluTzKsnz3gwCeCZyVRZJfYplNEokEjwrPtxlxjeYAk+F1F74VAzPxQRNYYdtpOUvWs8J1sGhBJMNsb7igN8plJs1eSmLIhLKE4rvaCX27gOhLpLOsIzJ7qn/i+wZzcvSOZ23/du8TZjwV8zHIXoP4R3ifBxiFz1dcVpa3aPntPE+c6TmIWE9EtcMmAcPdWAhYhAXxcLOQi9L1WhD1Sc8p1d2oL7XGiRKp8F4A2i8K/nfI+y/gsTDJ/YC/8+AD5Uh04KHiGl+cIFPnBDDrPMjwRGkLXyxO4VGbfQWnDH2v0bVWE3C9QOXlepbgjEfIJQI6XDG3z5ahD9cw2pS78ipB85wyScNTvsVzlzzhL8/jRrnmVjfFJK/m3m4nj9vbgQTguT8XZTjsm672R5uJKEaQmBI/c58gyus8ZDagLpEVSJBIyHp4jn++xqPV71OgQgJYEWOtZ/haxRtKmWOBu8xdBLftWltsY84zE6WIEy/eIOWL+BaayMx+KHtL7EAkqdNDLiEXmEMUHniedtJqg9HmZtfvt26vNi0BdG3Ft3g8ZOf7PAu59TxtzivLNIekyi+wD1i8CuUiD9FXAa8C+/xS3JPmZnomyc7H+fb4/Se0bk41Fel621r4cgVxbq91V4jVqwB7HTe2M7jgB+QWHavZkDRPmZcASoZEmBx6i75bGjPcMdL4/VKGFAGWZkGzPG0XAbdL9A81G5LOmUnC9hHKJeO7dcUMjblSl12867ElFTtaGl20xvvLGPdVz/8TVuU7y0x1PG7vtNg24oz9Uo/Z412++VFWI7Fcog9tu9Lm6gvRmIPv9x1xmQAu6RDkXtbOtlGEmpgD5Nvnyc0dcv0EE6cfdi1HmhMf9wDF3k3gtRvEedhxjpgfqPb9PU9iEJHnyOUA7bQUXh6kq/D7l2iTjWv7XOD530BDr8jIrus+srXjt4MzumJMHuTsBa63YKE1+RR5lBjEikCCnWKWiHdzOgKO+nRIBAF88za/IFmJ3eMZov4CYxGBabcpGL8EYx+SeMXJeRwHNsV/h+vdxeuhEpN3ZyNY78Gm2fknJxVGhyjixPiQvVkNzT1elD9Py/aTAL64Hb9vcYmC9zfdXdT/C1LeGbg4rnBaAihDFJH12W5ulfNCNe/xTsP3bp8ikzJs5BF+5PNfAQYAPaseTdsEcaYAAAAASUVORK5CYII="
      };
    },
    computed: {
      iconSnowWidth() {
        return (Math.floor(this.iconSize / 24) || 1) * 2;
      },
      contentdownText() {
        return this.contentText.contentdown || t$2("uni-load-more.contentdown");
      },
      contentrefreshText() {
        return this.contentText.contentrefresh || t$2("uni-load-more.contentrefresh");
      },
      contentnomoreText() {
        return this.contentText.contentnomore || t$2("uni-load-more.contentnomore");
      }
    },
    mounted() {
      var pages2 = getCurrentPages();
      var page = pages2[pages2.length - 1];
      var currentWebview = page.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
    },
    methods: {
      onClick() {
        this.$emit("clickLoadMore", {
          detail: {
            status: this.status
          }
        });
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "uni-load-more",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      !$data.webviewHide && ($props.iconType === "circle" || $props.iconType === "auto" && $data.platform === "android") && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
          class: "uni-load-more__img uni-load-more__img--android-MP"
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          )
        ],
        4
        /* STYLE */
      )) : !$data.webviewHide && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 1,
          style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
          class: "uni-load-more__img uni-load-more__img--ios-H5"
        },
        [
          vue.createElementVNode("image", {
            src: $data.imgBase64,
            mode: "widthFix"
          }, null, 8, ["src"])
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true),
      $props.showText ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 2,
          class: "uni-load-more__text",
          style: vue.normalizeStyle({ color: $props.color })
        },
        vue.toDisplayString($props.status === "more" ? $options.contentdownText : $props.status === "loading" ? $options.contentrefreshText : $options.contentnomoreText),
        5
        /* TEXT, STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["render", _sfc_render$h], ["__scopeId", "data-v-9245e42c"], ["__file", "/Users/daily/Desktop/d9/money_celestial/uni_modules/uni-load-more/components/uni-load-more/uni-load-more.vue"]]);
  const dataPicker = {
    props: {
      localdata: {
        type: [Array, Object],
        default() {
          return [];
        }
      },
      spaceInfo: {
        type: Object,
        default() {
          return {};
        }
      },
      collection: {
        type: String,
        default: ""
      },
      action: {
        type: String,
        default: ""
      },
      field: {
        type: String,
        default: ""
      },
      orderby: {
        type: String,
        default: ""
      },
      where: {
        type: [String, Object],
        default: ""
      },
      pageData: {
        type: String,
        default: "add"
      },
      pageCurrent: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 500
      },
      getcount: {
        type: [Boolean, String],
        default: false
      },
      getone: {
        type: [Boolean, String],
        default: false
      },
      gettree: {
        type: [Boolean, String],
        default: false
      },
      manual: {
        type: Boolean,
        default: false
      },
      value: {
        type: [Array, String, Number],
        default() {
          return [];
        }
      },
      modelValue: {
        type: [Array, String, Number],
        default() {
          return [];
        }
      },
      preload: {
        type: Boolean,
        default: false
      },
      stepSearh: {
        type: Boolean,
        default: true
      },
      selfField: {
        type: String,
        default: ""
      },
      parentField: {
        type: String,
        default: ""
      },
      multiple: {
        type: Boolean,
        default: false
      },
      map: {
        type: Object,
        default() {
          return {
            text: "text",
            value: "value"
          };
        }
      }
    },
    data() {
      return {
        loading: false,
        errorMessage: "",
        loadMore: {
          contentdown: "",
          contentrefresh: "",
          contentnomore: ""
        },
        dataList: [],
        selected: [],
        selectedIndex: 0,
        page: {
          current: this.pageCurrent,
          size: this.pageSize,
          count: 0
        }
      };
    },
    computed: {
      isLocalData() {
        return !this.collection.length;
      },
      isCloudData() {
        return this.collection.length > 0;
      },
      isCloudDataList() {
        return this.isCloudData && (!this.parentField && !this.selfField);
      },
      isCloudDataTree() {
        return this.isCloudData && this.parentField && this.selfField;
      },
      dataValue() {
        let isModelValue = Array.isArray(this.modelValue) ? this.modelValue.length > 0 : this.modelValue !== null || this.modelValue !== void 0;
        return isModelValue ? this.modelValue : this.value;
      },
      hasValue() {
        if (typeof this.dataValue === "number") {
          return true;
        }
        return this.dataValue != null && this.dataValue.length > 0;
      }
    },
    created() {
      this.$watch(() => {
        var al = [];
        [
          "pageCurrent",
          "pageSize",
          "spaceInfo",
          "value",
          "modelValue",
          "localdata",
          "collection",
          "action",
          "field",
          "orderby",
          "where",
          "getont",
          "getcount",
          "gettree"
        ].forEach((key) => {
          al.push(this[key]);
        });
        return al;
      }, (newValue, oldValue) => {
        for (let i2 = 2; i2 < newValue.length; i2++) {
          if (newValue[i2] != oldValue[i2]) {
            break;
          }
        }
        if (newValue[0] != oldValue[0]) {
          this.page.current = this.pageCurrent;
        }
        this.page.size = this.pageSize;
        this.onPropsChange();
      });
      this._treeData = [];
    },
    methods: {
      onPropsChange() {
        this._treeData = [];
      },
      // 填充 pickview 数据
      async loadData() {
        if (this.isLocalData) {
          this.loadLocalData();
        } else if (this.isCloudDataList) {
          this.loadCloudDataList();
        } else if (this.isCloudDataTree) {
          this.loadCloudDataTree();
        }
      },
      // 加载本地数据
      async loadLocalData() {
        this._treeData = [];
        this._extractTree(this.localdata, this._treeData);
        let inputValue = this.dataValue;
        if (inputValue === void 0) {
          return;
        }
        if (Array.isArray(inputValue)) {
          inputValue = inputValue[inputValue.length - 1];
          if (typeof inputValue === "object" && inputValue[this.map.value]) {
            inputValue = inputValue[this.map.value];
          }
        }
        this.selected = this._findNodePath(inputValue, this.localdata);
      },
      // 加载 Cloud 数据 (单列)
      async loadCloudDataList() {
        if (this.loading) {
          return;
        }
        this.loading = true;
        try {
          let response = await this.getCommand();
          let responseData = response.result.data;
          this._treeData = responseData;
          this._updateBindData();
          this._updateSelected();
          this.onDataChange();
        } catch (e2) {
          this.errorMessage = e2;
        } finally {
          this.loading = false;
        }
      },
      // 加载 Cloud 数据 (树形)
      async loadCloudDataTree() {
        if (this.loading) {
          return;
        }
        this.loading = true;
        try {
          let commandOptions = {
            field: this._cloudDataPostField(),
            where: this._cloudDataTreeWhere()
          };
          if (this.gettree) {
            commandOptions.startwith = `${this.selfField}=='${this.dataValue}'`;
          }
          let response = await this.getCommand(commandOptions);
          let responseData = response.result.data;
          this._treeData = responseData;
          this._updateBindData();
          this._updateSelected();
          this.onDataChange();
        } catch (e2) {
          this.errorMessage = e2;
        } finally {
          this.loading = false;
        }
      },
      // 加载 Cloud 数据 (节点)
      async loadCloudDataNode(callback) {
        if (this.loading) {
          return;
        }
        this.loading = true;
        try {
          let commandOptions = {
            field: this._cloudDataPostField(),
            where: this._cloudDataNodeWhere()
          };
          let response = await this.getCommand(commandOptions);
          let responseData = response.result.data;
          callback(responseData);
        } catch (e2) {
          this.errorMessage = e2;
        } finally {
          this.loading = false;
        }
      },
      // 回显 Cloud 数据
      getCloudDataValue() {
        if (this.isCloudDataList) {
          return this.getCloudDataListValue();
        }
        if (this.isCloudDataTree) {
          return this.getCloudDataTreeValue();
        }
      },
      // 回显 Cloud 数据 (单列)
      getCloudDataListValue() {
        let where = [];
        let whereField = this._getForeignKeyByField();
        if (whereField) {
          where.push(`${whereField} == '${this.dataValue}'`);
        }
        where = where.join(" || ");
        if (this.where) {
          where = `(${this.where}) && (${where})`;
        }
        return this.getCommand({
          field: this._cloudDataPostField(),
          where
        }).then((res) => {
          this.selected = res.result.data;
          return res.result.data;
        });
      },
      // 回显 Cloud 数据 (树形)
      getCloudDataTreeValue() {
        return this.getCommand({
          field: this._cloudDataPostField(),
          getTreePath: {
            startWith: `${this.selfField}=='${this.dataValue}'`
          }
        }).then((res) => {
          let treePath = [];
          this._extractTreePath(res.result.data, treePath);
          this.selected = treePath;
          return treePath;
        });
      },
      getCommand(options = {}) {
        let db = Vs.database(this.spaceInfo);
        const action = options.action || this.action;
        if (action) {
          db = db.action(action);
        }
        const collection = options.collection || this.collection;
        db = db.collection(collection);
        const where = options.where || this.where;
        if (!(!where || !Object.keys(where).length)) {
          db = db.where(where);
        }
        const field = options.field || this.field;
        if (field) {
          db = db.field(field);
        }
        const orderby = options.orderby || this.orderby;
        if (orderby) {
          db = db.orderBy(orderby);
        }
        const current = options.pageCurrent !== void 0 ? options.pageCurrent : this.page.current;
        const size = options.pageSize !== void 0 ? options.pageSize : this.page.size;
        const getCount = options.getcount !== void 0 ? options.getcount : this.getcount;
        const getTree = options.gettree !== void 0 ? options.gettree : this.gettree;
        const getOptions = {
          getCount,
          getTree
        };
        if (options.getTreePath) {
          getOptions.getTreePath = options.getTreePath;
        }
        db = db.skip(size * (current - 1)).limit(size).get(getOptions);
        return db;
      },
      _cloudDataPostField() {
        let fields = [this.field];
        if (this.parentField) {
          fields.push(`${this.parentField} as parent_value`);
        }
        return fields.join(",");
      },
      _cloudDataTreeWhere() {
        let result = [];
        let selected = this.selected;
        let parentField = this.parentField;
        if (parentField) {
          result.push(`${parentField} == null || ${parentField} == ""`);
        }
        if (selected.length) {
          for (var i2 = 0; i2 < selected.length - 1; i2++) {
            result.push(`${parentField} == '${selected[i2].value}'`);
          }
        }
        let where = [];
        if (this.where) {
          where.push(`(${this.where})`);
        }
        if (result.length) {
          where.push(`(${result.join(" || ")})`);
        }
        return where.join(" && ");
      },
      _cloudDataNodeWhere() {
        let where = [];
        let selected = this.selected;
        if (selected.length) {
          where.push(`${this.parentField} == '${selected[selected.length - 1].value}'`);
        }
        where = where.join(" || ");
        if (this.where) {
          return `(${this.where}) && (${where})`;
        }
        return where;
      },
      _getWhereByForeignKey() {
        let result = [];
        let whereField = this._getForeignKeyByField();
        if (whereField) {
          result.push(`${whereField} == '${this.dataValue}'`);
        }
        if (this.where) {
          return `(${this.where}) && (${result.join(" || ")})`;
        }
        return result.join(" || ");
      },
      _getForeignKeyByField() {
        let fields = this.field.split(",");
        let whereField = null;
        for (let i2 = 0; i2 < fields.length; i2++) {
          const items = fields[i2].split("as");
          if (items.length < 2) {
            continue;
          }
          if (items[1].trim() === "value") {
            whereField = items[0].trim();
            break;
          }
        }
        return whereField;
      },
      _updateBindData(node) {
        const {
          dataList,
          hasNodes
        } = this._filterData(this._treeData, this.selected);
        let isleaf = this._stepSearh === false && !hasNodes;
        if (node) {
          node.isleaf = isleaf;
        }
        this.dataList = dataList;
        this.selectedIndex = dataList.length - 1;
        if (!isleaf && this.selected.length < dataList.length) {
          this.selected.push({
            value: null,
            text: "请选择"
          });
        }
        return {
          isleaf,
          hasNodes
        };
      },
      _updateSelected() {
        let dl = this.dataList;
        let sl = this.selected;
        let textField = this.map.text;
        let valueField = this.map.value;
        for (let i2 = 0; i2 < sl.length; i2++) {
          let value = sl[i2].value;
          let dl2 = dl[i2];
          for (let j2 = 0; j2 < dl2.length; j2++) {
            let item2 = dl2[j2];
            if (item2[valueField] === value) {
              sl[i2].text = item2[textField];
              break;
            }
          }
        }
      },
      _filterData(data, paths) {
        let dataList = [];
        let hasNodes = true;
        dataList.push(data.filter((item) => {
          return item.parent_value === null || item.parent_value === void 0 || item.parent_value === "";
        }));
        for (let i2 = 0; i2 < paths.length; i2++) {
          let value = paths[i2].value;
          let nodes = data.filter((item) => {
            return item.parent_value === value;
          });
          if (nodes.length) {
            dataList.push(nodes);
          } else {
            hasNodes = false;
          }
        }
        return {
          dataList,
          hasNodes
        };
      },
      _extractTree(nodes, result, parent_value) {
        let valueField = this.map.value;
        for (let i2 = 0; i2 < nodes.length; i2++) {
          let node = nodes[i2];
          let child = {};
          for (let key in node) {
            if (key !== "children") {
              child[key] = node[key];
            }
          }
          if (parent_value !== null && parent_value !== void 0 && parent_value !== "") {
            child.parent_value = parent_value;
          }
          result.push(child);
          let children = node.children;
          if (children) {
            this._extractTree(children, result, node[valueField]);
          }
        }
      },
      _extractTreePath(nodes, result) {
        for (let i2 = 0; i2 < nodes.length; i2++) {
          let node = nodes[i2];
          let child = {};
          for (let key in node) {
            if (key !== "children") {
              child[key] = node[key];
            }
          }
          result.push(child);
          let children = node.children;
          if (children) {
            this._extractTreePath(children, result);
          }
        }
      },
      _findNodePath(key, nodes, path = []) {
        let textField = this.map.text;
        let valueField = this.map.value;
        for (let i2 = 0; i2 < nodes.length; i2++) {
          let node = nodes[i2];
          let children = node.children;
          let text = node[textField];
          let value = node[valueField];
          path.push({
            value,
            text
          });
          if (value === key) {
            return path;
          }
          if (children) {
            const p2 = this._findNodePath(key, children, path);
            if (p2.length) {
              return p2;
            }
          }
          path.pop();
        }
        return [];
      }
    }
  };
  const _sfc_main$Y = {
    name: "UniDataPickerView",
    emits: ["nodeclick", "change", "datachange", "update:modelValue"],
    mixins: [dataPicker],
    props: {
      managedMode: {
        type: Boolean,
        default: false
      },
      ellipsis: {
        type: Boolean,
        default: true
      }
    },
    created() {
      if (!this.managedMode) {
        this.$nextTick(() => {
          this.loadData();
        });
      }
    },
    methods: {
      onPropsChange() {
        this._treeData = [];
        this.selectedIndex = 0;
        this.$nextTick(() => {
          this.loadData();
        });
      },
      handleSelect(index) {
        this.selectedIndex = index;
      },
      handleNodeClick(item, i2, j2) {
        if (item.disable) {
          return;
        }
        const node = this.dataList[i2][j2];
        const text = node[this.map.text];
        const value = node[this.map.value];
        if (i2 < this.selected.length - 1) {
          this.selected.splice(i2, this.selected.length - i2);
          this.selected.push({
            text,
            value
          });
        } else if (i2 === this.selected.length - 1) {
          this.selected.splice(i2, 1, {
            text,
            value
          });
        }
        if (node.isleaf) {
          this.onSelectedChange(node, node.isleaf);
          return;
        }
        const {
          isleaf,
          hasNodes
        } = this._updateBindData();
        if (this.isLocalData) {
          this.onSelectedChange(node, !hasNodes || isleaf);
        } else if (this.isCloudDataList) {
          this.onSelectedChange(node, true);
        } else if (this.isCloudDataTree) {
          if (isleaf) {
            this.onSelectedChange(node, node.isleaf);
          } else if (!hasNodes) {
            this.loadCloudDataNode((data) => {
              if (!data.length) {
                node.isleaf = true;
              } else {
                this._treeData.push(...data);
                this._updateBindData(node);
              }
              this.onSelectedChange(node, node.isleaf);
            });
          }
        }
      },
      updateData(data) {
        this._treeData = data.treeData;
        this.selected = data.selected;
        if (!this._treeData.length) {
          this.loadData();
        } else {
          this._updateBindData();
        }
      },
      onDataChange() {
        this.$emit("datachange");
      },
      onSelectedChange(node, isleaf) {
        if (isleaf) {
          this._dispatchEvent();
        }
        if (node) {
          this.$emit("nodeclick", node);
        }
      },
      _dispatchEvent() {
        this.$emit("change", this.selected.slice(0));
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_3$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-data-pickerview" }, [
      !_ctx.isCloudDataList ? (vue.openBlock(), vue.createElementBlock("scroll-view", {
        key: 0,
        class: "selected-area",
        "scroll-x": "true"
      }, [
        vue.createElementVNode("view", { class: "selected-list" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(_ctx.selected, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: vue.normalizeClass(["selected-item", {
                  "selected-item-active": index == _ctx.selectedIndex
                }]),
                key: index,
                onClick: ($event) => $options.handleSelect(index)
              }, [
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString(item.text || ""),
                  1
                  /* TEXT */
                )
              ], 10, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", { class: "tab-c" }, [
        vue.createElementVNode("scroll-view", {
          class: "list",
          "scroll-y": true
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(_ctx.dataList[_ctx.selectedIndex], (item, j2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: vue.normalizeClass(["item", { "is-disabled": !!item.disable }]),
                key: j2,
                onClick: ($event) => $options.handleNodeClick(item, _ctx.selectedIndex, j2)
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "item-text" },
                  vue.toDisplayString(item[_ctx.map.text]),
                  1
                  /* TEXT */
                ),
                _ctx.selected.length > _ctx.selectedIndex && item[_ctx.map.value] == _ctx.selected[_ctx.selectedIndex].value ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "check"
                })) : vue.createCommentVNode("v-if", true)
              ], 10, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _ctx.loading ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "loading-cover"
        }, [
          vue.createVNode(_component_uni_load_more, {
            class: "load-more",
            contentText: _ctx.loadMore,
            status: "loading"
          }, null, 8, ["contentText"])
        ])) : vue.createCommentVNode("v-if", true),
        _ctx.errorMessage ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "error-message"
        }, [
          vue.createElementVNode(
            "text",
            { class: "error-text" },
            vue.toDisplayString(_ctx.errorMessage),
            1
            /* TEXT */
          )
        ])) : vue.createCommentVNode("v-if", true)
      ])
    ]);
  }
  const DataPickerView = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["render", _sfc_render$g], ["__scopeId", "data-v-91ec6a82"], ["__file", "/Users/daily/Desktop/d9/money_celestial/uni_modules/uni-data-picker/components/uni-data-pickerview/uni-data-pickerview.vue"]]);
  const _sfc_main$X = {
    name: "UniDataPicker",
    emits: ["popupopened", "popupclosed", "nodeclick", "input", "change", "update:modelValue", "inputclick"],
    mixins: [dataPicker],
    components: {
      DataPickerView
    },
    props: {
      options: {
        type: [Object, Array],
        default() {
          return {};
        }
      },
      popupTitle: {
        type: String,
        default: "请选择"
      },
      placeholder: {
        type: String,
        default: "请选择"
      },
      heightMobile: {
        type: String,
        default: ""
      },
      readonly: {
        type: Boolean,
        default: false
      },
      clearIcon: {
        type: Boolean,
        default: true
      },
      border: {
        type: Boolean,
        default: true
      },
      split: {
        type: String,
        default: "/"
      },
      ellipsis: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        isOpened: false,
        inputSelected: []
      };
    },
    created() {
      this.$nextTick(() => {
        this.load();
      });
    },
    watch: {
      localdata: {
        handler() {
          this.load();
        },
        deep: true
      }
    },
    methods: {
      clear() {
        this._dispatchEvent([]);
      },
      onPropsChange() {
        this._treeData = [];
        this.selectedIndex = 0;
        this.load();
      },
      load() {
        if (this.readonly) {
          this._processReadonly(this.localdata, this.dataValue);
          return;
        }
        if (this.isLocalData) {
          this.loadData();
          this.inputSelected = this.selected.slice(0);
        } else if (this.isCloudDataList || this.isCloudDataTree) {
          this.loading = true;
          this.getCloudDataValue().then((res) => {
            this.loading = false;
            this.inputSelected = res;
          }).catch((err) => {
            this.loading = false;
            this.errorMessage = err;
          });
        }
      },
      show() {
        this.isOpened = true;
        setTimeout(() => {
          this.$refs.pickerView.updateData({
            treeData: this._treeData,
            selected: this.selected,
            selectedIndex: this.selectedIndex
          });
        }, 200);
        this.$emit("popupopened");
      },
      hide() {
        this.isOpened = false;
        this.$emit("popupclosed");
      },
      handleInput() {
        if (this.readonly) {
          this.$emit("inputclick");
          return;
        }
        this.show();
      },
      handleClose(e2) {
        this.hide();
      },
      onnodeclick(e2) {
        this.$emit("nodeclick", e2);
      },
      ondatachange(e2) {
        this._treeData = this.$refs.pickerView._treeData;
      },
      onchange(e2) {
        this.hide();
        this.$nextTick(() => {
          this.inputSelected = e2;
        });
        this._dispatchEvent(e2);
      },
      _processReadonly(dataList, value) {
        var isTree = dataList.findIndex((item2) => {
          return item2.children;
        });
        if (isTree > -1) {
          let inputValue;
          if (Array.isArray(value)) {
            inputValue = value[value.length - 1];
            if (typeof inputValue === "object" && inputValue.value) {
              inputValue = inputValue.value;
            }
          } else {
            inputValue = value;
          }
          this.inputSelected = this._findNodePath(inputValue, this.localdata);
          return;
        }
        if (!this.hasValue) {
          this.inputSelected = [];
          return;
        }
        let result = [];
        for (let i2 = 0; i2 < value.length; i2++) {
          var val = value[i2];
          var item = dataList.find((v2) => {
            return v2.value == val;
          });
          if (item) {
            result.push(item);
          }
        }
        if (result.length) {
          this.inputSelected = result;
        }
      },
      _filterForArray(data, valueArray) {
        var result = [];
        for (let i2 = 0; i2 < valueArray.length; i2++) {
          var value = valueArray[i2];
          var found = data.find((item) => {
            return item.value == value;
          });
          if (found) {
            result.push(found);
          }
        }
        return result;
      },
      _dispatchEvent(selected) {
        let item = {};
        if (selected.length) {
          var value = new Array(selected.length);
          for (var i2 = 0; i2 < selected.length; i2++) {
            value[i2] = selected[i2].value;
          }
          item = selected[selected.length - 1];
        } else {
          item.value = "";
        }
        if (this.formItem) {
          this.formItem.setValue(item.value);
        }
        this.$emit("input", item.value);
        this.$emit("update:modelValue", item.value);
        this.$emit("change", {
          detail: {
            value: selected
          }
        });
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_3$1);
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$5);
    const _component_data_picker_view = vue.resolveComponent("data-picker-view");
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-data-tree" }, [
      vue.createElementVNode("view", {
        class: "uni-data-tree-input",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.handleInput && $options.handleInput(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {
          options: $props.options,
          data: $data.inputSelected,
          error: _ctx.errorMessage
        }, () => [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["input-value", { "input-value-border": $props.border }])
            },
            [
              _ctx.errorMessage ? (vue.openBlock(), vue.createElementBlock(
                "text",
                {
                  key: 0,
                  class: "selected-area error-text"
                },
                vue.toDisplayString(_ctx.errorMessage),
                1
                /* TEXT */
              )) : _ctx.loading && !$data.isOpened ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "selected-area"
              }, [
                vue.createVNode(_component_uni_load_more, {
                  class: "load-more",
                  contentText: _ctx.loadMore,
                  status: "loading"
                }, null, 8, ["contentText"])
              ])) : $data.inputSelected.length ? (vue.openBlock(), vue.createElementBlock("scroll-view", {
                key: 2,
                class: "selected-area",
                "scroll-x": "true"
              }, [
                vue.createElementVNode("view", { class: "selected-list" }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList($data.inputSelected, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: "selected-item",
                        key: index
                      }, [
                        vue.createElementVNode(
                          "text",
                          { class: "text-color" },
                          vue.toDisplayString(item.text),
                          1
                          /* TEXT */
                        ),
                        index < $data.inputSelected.length - 1 ? (vue.openBlock(), vue.createElementBlock(
                          "text",
                          {
                            key: 0,
                            class: "input-split-line"
                          },
                          vue.toDisplayString($props.split),
                          1
                          /* TEXT */
                        )) : vue.createCommentVNode("v-if", true)
                      ]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ])) : (vue.openBlock(), vue.createElementBlock(
                "text",
                {
                  key: 3,
                  class: "selected-area placeholder"
                },
                vue.toDisplayString($props.placeholder),
                1
                /* TEXT */
              )),
              $props.clearIcon && !$props.readonly && $data.inputSelected.length ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 4,
                class: "icon-clear",
                onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.clear && $options.clear(...args), ["stop"]))
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "clear",
                  color: "#c0c4cc",
                  size: "24"
                })
              ])) : vue.createCommentVNode("v-if", true),
              (!$props.clearIcon || !$data.inputSelected.length) && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 5,
                class: "arrow-area"
              }, [
                vue.createElementVNode("view", { class: "input-arrow" })
              ])) : vue.createCommentVNode("v-if", true)
            ],
            2
            /* CLASS */
          )
        ], true)
      ]),
      $data.isOpened ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-data-tree-cover",
        onClick: _cache[2] || (_cache[2] = (...args) => $options.handleClose && $options.handleClose(...args))
      })) : vue.createCommentVNode("v-if", true),
      $data.isOpened ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-data-tree-dialog"
      }, [
        vue.createElementVNode("view", { class: "uni-popper__arrow" }),
        vue.createElementVNode("view", { class: "dialog-caption" }, [
          vue.createElementVNode("view", { class: "title-area" }, [
            vue.createElementVNode(
              "text",
              { class: "dialog-title" },
              vue.toDisplayString($props.popupTitle),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", {
            class: "dialog-close",
            onClick: _cache[3] || (_cache[3] = (...args) => $options.handleClose && $options.handleClose(...args))
          }, [
            vue.createElementVNode("view", {
              class: "dialog-close-plus",
              "data-id": "close"
            }),
            vue.createElementVNode("view", {
              class: "dialog-close-plus dialog-close-rotate",
              "data-id": "close"
            })
          ])
        ]),
        vue.createVNode(_component_data_picker_view, {
          class: "picker-view",
          ref: "pickerView",
          modelValue: _ctx.dataValue,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.dataValue = $event),
          localdata: _ctx.localdata,
          preload: _ctx.preload,
          collection: _ctx.collection,
          field: _ctx.field,
          orderby: _ctx.orderby,
          where: _ctx.where,
          "step-searh": _ctx.stepSearh,
          "self-field": _ctx.selfField,
          "parent-field": _ctx.parentField,
          "managed-mode": true,
          map: _ctx.map,
          ellipsis: $props.ellipsis,
          onChange: $options.onchange,
          onDatachange: $options.ondatachange,
          onNodeclick: $options.onnodeclick
        }, null, 8, ["modelValue", "localdata", "preload", "collection", "field", "orderby", "where", "step-searh", "self-field", "parent-field", "map", "ellipsis", "onChange", "onDatachange", "onNodeclick"])
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_2$4 = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["render", _sfc_render$f], ["__scopeId", "data-v-2653531e"], ["__file", "/Users/daily/Desktop/d9/money_celestial/uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker.vue"]]);
  const uploadUrl = "https://max.q6z4kzhr.uk/api/upload/image/";
  const uploadImage = async (filePath) => {
    formatAppLog("log", "at utils/index.js:4", filePath);
    const token = uni.getStorageSync("accessToken");
    return new Promise((resolve, reject) => {
      uni.uploadFile({
        url: uploadUrl,
        // 上传接口 URL
        filePath,
        // 需要上传的文件路径
        name: "image",
        // 后台接收文件的字段名
        header: {
          "Authorization": `Bearer ${token}`
          // JWT Token 添加到 Authorization 请求头
        },
        success: (uploadFileRes) => {
          if (uploadFileRes.statusCode == 201) {
            const data = JSON.parse(uploadFileRes.data);
            formatAppLog("log", "at utils/index.js:21", "上传成功！");
            formatAppLog("log", "at utils/index.js:22", "上传的图片 URL:", data.image_url);
            resolve(data.image_url);
          } else {
            formatAppLog("log", "at utils/index.js:25", "上传失败，状态码：", uploadFileRes.statusCode);
            reject(new Error(`上传失败，状态码：${uploadFileRes.statusCode}`));
          }
        },
        fail: (err) => {
          formatAppLog("error", "at utils/index.js:30", "上传文件出错:", err);
          reject(err);
        }
      });
    });
  };
  const convertTime = (timeStamp, format = "yyyy/MM/dd hh:mm:ss") => {
    const date = new Date(timeStamp);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);
    return format.replace("yyyy", year).replace("MM", month).replace("dd", day).replace("hh", hours).replace("mm", minutes).replace("ss", seconds);
  };
  const cityDataJson = [
    {
      text: "北京市",
      value: "110000",
      children: [
        {
          text: "北京市",
          value: "110100"
        }
      ]
    },
    {
      text: "天津市",
      value: "120000",
      children: [
        {
          text: "天津市",
          value: "120100"
        }
      ]
    },
    {
      text: "河北省",
      value: "130000",
      children: [
        {
          text: "石家庄市",
          value: "130100"
        },
        {
          text: "唐山市",
          value: "130200"
        },
        {
          text: "秦皇岛市",
          value: "130300"
        },
        {
          text: "邯郸市",
          value: "130400"
        },
        {
          text: "邢台市",
          value: "130500"
        },
        {
          text: "保定市",
          value: "130600"
        },
        {
          text: "张家口市",
          value: "130700"
        },
        {
          text: "承德市",
          value: "130800"
        },
        {
          text: "沧州市",
          value: "130900"
        },
        {
          text: "廊坊市",
          value: "131000"
        },
        {
          text: "衡水市",
          value: "131100"
        }
      ]
    },
    {
      text: "山西省",
      value: "140000",
      children: [
        {
          text: "太原市",
          value: "140100"
        },
        {
          text: "大同市",
          value: "140200"
        },
        {
          text: "阳泉市",
          value: "140300"
        },
        {
          text: "长治市",
          value: "140400"
        },
        {
          text: "晋城市",
          value: "140500"
        },
        {
          text: "朔州市",
          value: "140600"
        },
        {
          text: "晋中市",
          value: "140700"
        },
        {
          text: "运城市",
          value: "140800"
        },
        {
          text: "忻州市",
          value: "140900"
        },
        {
          text: "临汾市",
          value: "141000"
        },
        {
          text: "吕梁市",
          value: "141100"
        }
      ]
    },
    {
      text: "内蒙古自治区",
      value: "150000",
      children: [
        {
          text: "呼和浩特市",
          value: "150100"
        },
        {
          text: "包头市",
          value: "150200"
        },
        {
          text: "乌海市",
          value: "150300"
        },
        {
          text: "赤峰市",
          value: "150400"
        },
        {
          text: "通辽市",
          value: "150500"
        },
        {
          text: "鄂尔多斯市",
          value: "150600"
        },
        {
          text: "呼伦贝尔市",
          value: "150700"
        },
        {
          text: "巴彦淖尔市",
          value: "150800"
        },
        {
          text: "乌兰察布市",
          value: "150900"
        }
      ]
    },
    {
      text: "辽宁省",
      value: "210000",
      children: [
        {
          text: "沈阳市",
          value: "210100"
        },
        {
          text: "大连市",
          value: "210200"
        },
        {
          text: "鞍山市",
          value: "210300"
        },
        {
          text: "抚顺市",
          value: "210400"
        },
        {
          text: "本溪市",
          value: "210500"
        },
        {
          text: "丹东市",
          value: "210600"
        },
        {
          text: "锦州市",
          value: "210700"
        },
        {
          text: "营口市",
          value: "210800"
        },
        {
          text: "阜新市",
          value: "210900"
        },
        {
          text: "辽阳市",
          value: "211000"
        },
        {
          text: "盘锦市",
          value: "211100"
        },
        {
          text: "铁岭市",
          value: "211200"
        },
        {
          text: "朝阳市",
          value: "211300"
        },
        {
          text: "葫芦岛市",
          value: "211400"
        }
      ]
    },
    {
      text: "吉林省",
      value: "220000",
      children: [
        {
          text: "长春市",
          value: "220100"
        },
        {
          text: "吉林市",
          value: "220200"
        },
        {
          text: "四平市",
          value: "220300"
        },
        {
          text: "辽源市",
          value: "220400"
        },
        {
          text: "通化市",
          value: "220500"
        },
        {
          text: "白山市",
          value: "220600"
        },
        {
          text: "松原市",
          value: "220700"
        },
        {
          text: "白城市",
          value: "220800"
        }
      ]
    },
    {
      text: "黑龙江省",
      value: "230000",
      children: [
        {
          text: "哈尔滨市",
          value: "230100"
        },
        {
          text: "齐齐哈尔市",
          value: "230200"
        },
        {
          text: "鸡西市",
          value: "230300"
        },
        {
          text: "鹤岗市",
          value: "230400"
        },
        {
          text: "双鸭山市",
          value: "230500"
        },
        {
          text: "大庆市",
          value: "230600"
        },
        {
          text: "伊春市",
          value: "230700"
        },
        {
          text: "佳木斯市",
          value: "230800"
        },
        {
          text: "七台河市",
          value: "230900"
        },
        {
          text: "牡丹江市",
          value: "231000"
        },
        {
          text: "黑河市",
          value: "231100"
        },
        {
          text: "绥化市",
          value: "231200"
        }
      ]
    },
    {
      text: "上海市",
      value: "310000",
      children: [
        {
          text: "上海市",
          value: "310100"
        }
      ]
    },
    {
      text: "江苏省",
      value: "320000",
      children: [
        {
          text: "南京市",
          value: "320100"
        },
        {
          text: "无锡市",
          value: "320200"
        },
        {
          text: "徐州市",
          value: "320300"
        },
        {
          text: "常州市",
          value: "320400"
        },
        {
          text: "苏州市",
          value: "320500"
        },
        {
          text: "南通市",
          value: "320600"
        },
        {
          text: "连云港市",
          value: "320700"
        },
        {
          text: "淮安市",
          value: "320800"
        },
        {
          text: "盐城市",
          value: "320900"
        },
        {
          text: "扬州市",
          value: "321000"
        },
        {
          text: "镇江市",
          value: "321100"
        },
        {
          text: "泰州市",
          value: "321200"
        },
        {
          text: "宿迁市",
          value: "321300"
        }
      ]
    },
    {
      text: "浙江省",
      value: "330000",
      children: [
        {
          text: "杭州市",
          value: "330100"
        },
        {
          text: "宁波市",
          value: "330200"
        },
        {
          text: "温州市",
          value: "330300"
        },
        {
          text: "嘉兴市",
          value: "330400"
        },
        {
          text: "湖州市",
          value: "330500"
        },
        {
          text: "绍兴市",
          value: "330600"
        },
        {
          text: "金华市",
          value: "330700"
        },
        {
          text: "衢州市",
          value: "330800"
        },
        {
          text: "舟山市",
          value: "330900"
        },
        {
          text: "台州市",
          value: "331000"
        },
        {
          text: "丽水市",
          value: "331100"
        }
      ]
    },
    {
      text: "安徽省",
      value: "340000",
      children: [
        {
          text: "合肥市",
          value: "340100"
        },
        {
          text: "芜湖市",
          value: "340200"
        },
        {
          text: "蚌埠市",
          value: "340300"
        },
        {
          text: "淮南市",
          value: "340400"
        },
        {
          text: "马鞍山市",
          value: "340500"
        },
        {
          text: "淮北市",
          value: "340600"
        },
        {
          text: "铜陵市",
          value: "340700"
        },
        {
          text: "安庆市",
          value: "340800"
        },
        {
          text: "黄山市",
          value: "341000"
        },
        {
          text: "滁州市",
          value: "341100"
        },
        {
          text: "阜阳市",
          value: "341200"
        },
        {
          text: "宿州市",
          value: "341300"
        },
        {
          text: "六安市",
          value: "341500"
        },
        {
          text: "亳州市",
          value: "341600"
        },
        {
          text: "池州市",
          value: "341700"
        },
        {
          text: "宣城市",
          value: "341800"
        }
      ]
    },
    {
      text: "福建省",
      value: "350000",
      children: [
        {
          text: "福州市",
          value: "350100"
        },
        {
          text: "厦门市",
          value: "350200"
        },
        {
          text: "莆田市",
          value: "350300"
        },
        {
          text: "三明市",
          value: "350400"
        },
        {
          text: "泉州市",
          value: "350500"
        },
        {
          text: "漳州市",
          value: "350600"
        },
        {
          text: "南平市",
          value: "350700"
        },
        {
          text: "龙岩市",
          value: "350800"
        },
        {
          text: "宁德市",
          value: "350900"
        }
      ]
    },
    {
      text: "江西省",
      value: "360000",
      children: [
        {
          text: "南昌市",
          value: "360100"
        },
        {
          text: "景德镇市",
          value: "360200"
        },
        {
          text: "萍乡市",
          value: "360300"
        },
        {
          text: "九江市",
          value: "360400"
        },
        {
          text: "新余市",
          value: "360500"
        },
        {
          text: "鹰潭市",
          value: "360600"
        },
        {
          text: "赣州市",
          value: "360700"
        },
        {
          text: "吉安市",
          value: "360800"
        },
        {
          text: "宜春市",
          value: "360900"
        },
        {
          text: "抚州市",
          value: "361000"
        },
        {
          text: "上饶市",
          value: "361100"
        }
      ]
    },
    {
      text: "山东省",
      value: "370000",
      children: [
        {
          text: "济南市",
          value: "370100"
        },
        {
          text: "青岛市",
          value: "370200"
        },
        {
          text: "淄博市",
          value: "370300"
        },
        {
          text: "枣庄市",
          value: "370400"
        },
        {
          text: "东营市",
          value: "370500"
        },
        {
          text: "烟台市",
          value: "370600"
        },
        {
          text: "潍坊市",
          value: "370700"
        },
        {
          text: "济宁市",
          value: "370800"
        },
        {
          text: "泰安市",
          value: "370900"
        },
        {
          text: "威海市",
          value: "371000"
        },
        {
          text: "日照市",
          value: "371100"
        },
        {
          text: "临沂市",
          value: "371300"
        },
        {
          text: "德州市",
          value: "371400"
        },
        {
          text: "聊城市",
          value: "371500"
        },
        {
          text: "滨州市",
          value: "371600"
        },
        {
          text: "菏泽市",
          value: "371700"
        }
      ]
    },
    {
      text: "河南省",
      value: "410000",
      children: [
        {
          text: "郑州市",
          value: "410100"
        },
        {
          text: "开封市",
          value: "410200"
        },
        {
          text: "洛阳市",
          value: "410300"
        },
        {
          text: "平顶山市",
          value: "410400"
        },
        {
          text: "安阳市",
          value: "410500"
        },
        {
          text: "鹤壁市",
          value: "410600"
        },
        {
          text: "新乡市",
          value: "410700"
        },
        {
          text: "焦作市",
          value: "410800"
        },
        {
          text: "濮阳市",
          value: "410900"
        },
        {
          text: "许昌市",
          value: "411000"
        },
        {
          text: "漯河市",
          value: "411100"
        },
        {
          text: "三门峡市",
          value: "411200"
        },
        {
          text: "南阳市",
          value: "411300"
        },
        {
          text: "商丘市",
          value: "411400"
        },
        {
          text: "信阳市",
          value: "411500"
        },
        {
          text: "周口市",
          value: "411600"
        },
        {
          text: "驻马店市",
          value: "411700"
        }
      ]
    },
    {
      text: "湖北省",
      value: "420000",
      children: [
        {
          text: "武汉市",
          value: "420100"
        },
        {
          text: "黄石市",
          value: "420200"
        },
        {
          text: "十堰市",
          value: "420300"
        },
        {
          text: "宜昌市",
          value: "420500"
        },
        {
          text: "襄阳市",
          value: "420600"
        },
        {
          text: "鄂州市",
          value: "420700"
        },
        {
          text: "荆门市",
          value: "420800"
        },
        {
          text: "孝感市",
          value: "420900"
        },
        {
          text: "荆州市",
          value: "421000"
        },
        {
          text: "黄冈市",
          value: "421100"
        },
        {
          text: "咸宁市",
          value: "421200"
        },
        {
          text: "随州市",
          value: "421300"
        }
      ]
    },
    {
      text: "湖南省",
      value: "430000",
      children: [
        {
          text: "长沙市",
          value: "430100"
        },
        {
          text: "株洲市",
          value: "430200"
        },
        {
          text: "湘潭市",
          value: "430300"
        },
        {
          text: "衡阳市",
          value: "430400"
        },
        {
          text: "邵阳市",
          value: "430500"
        },
        {
          text: "岳阳市",
          value: "430600"
        },
        {
          text: "常德市",
          value: "430700"
        },
        {
          text: "张家界市",
          value: "430800"
        },
        {
          text: "益阳市",
          value: "430900"
        },
        {
          text: "郴州市",
          value: "431000"
        },
        {
          text: "永州市",
          value: "431100"
        },
        {
          text: "怀化市",
          value: "431200"
        },
        {
          text: "娄底市",
          value: "431300"
        }
      ]
    },
    {
      text: "广东省",
      value: "440000",
      children: [
        {
          text: "广州市",
          value: "440100"
        },
        {
          text: "韶关市",
          value: "440200"
        },
        {
          text: "深圳市",
          value: "440300"
        },
        {
          text: "珠海市",
          value: "440400"
        },
        {
          text: "汕头市",
          value: "440500"
        },
        {
          text: "佛山市",
          value: "440600"
        },
        {
          text: "江门市",
          value: "440700"
        },
        {
          text: "湛江市",
          value: "440800"
        },
        {
          text: "茂名市",
          value: "440900"
        },
        {
          text: "肇庆市",
          value: "441200"
        },
        {
          text: "惠州市",
          value: "441300"
        },
        {
          text: "梅州市",
          value: "441400"
        },
        {
          text: "汕尾市",
          value: "441500"
        },
        {
          text: "河源市",
          value: "441600"
        },
        {
          text: "阳江市",
          value: "441700"
        },
        {
          text: "清远市",
          value: "441800"
        },
        {
          text: "东莞市",
          value: "441900"
        },
        {
          text: "中山市",
          value: "442000"
        }
      ]
    },
    {
      text: "广西壮族自治区",
      value: "450000",
      children: [
        {
          text: "南宁市",
          value: "450100"
        },
        {
          text: "柳州市",
          value: "450200"
        },
        {
          text: "桂林市",
          value: "450300"
        },
        {
          text: "梧州市",
          value: "450400"
        },
        {
          text: "北海市",
          value: "450500"
        },
        {
          text: "防城港市",
          value: "450600"
        },
        {
          text: "钦州市",
          value: "450700"
        },
        {
          text: "贵港市",
          value: "450800"
        },
        {
          text: "玉林市",
          value: "450900"
        },
        {
          text: "百色市",
          value: "451000"
        },
        {
          text: "贺州市",
          value: "451100"
        },
        {
          text: "河池市",
          value: "451200"
        },
        {
          text: "来宾市",
          value: "451300"
        },
        {
          text: "崇左市",
          value: "451400"
        }
      ]
    },
    {
      text: "海南省",
      value: "460000",
      children: [
        {
          text: "海口市",
          value: "460100"
        },
        {
          text: "三亚市",
          value: "460200"
        },
        {
          text: "三沙市",
          value: "460300"
        },
        {
          text: "儋州市",
          value: "460400"
        }
      ]
    },
    {
      text: "重庆市",
      value: "500000",
      children: [
        {
          text: "重庆市",
          value: "500100"
        }
      ]
    },
    {
      text: "四川省",
      value: "510000",
      children: [
        {
          text: "成都市",
          value: "510100"
        },
        {
          text: "自贡市",
          value: "510300"
        },
        {
          text: "攀枝花市",
          value: "510400"
        },
        {
          text: "泸州市",
          value: "510500"
        },
        {
          text: "德阳市",
          value: "510600"
        },
        {
          text: "绵阳市",
          value: "510700"
        },
        {
          text: "广元市",
          value: "510800"
        },
        {
          text: "遂宁市",
          value: "510900"
        },
        {
          text: "内江市",
          value: "511000"
        },
        {
          text: "乐山市",
          value: "511100"
        },
        {
          text: "南充市",
          value: "511300"
        },
        {
          text: "眉山市",
          value: "511400"
        },
        {
          text: "宜宾市",
          value: "511500"
        },
        {
          text: "广安市",
          value: "511600"
        },
        {
          text: "达州市",
          value: "511700"
        },
        {
          text: "雅安市",
          value: "511800"
        },
        {
          text: "巴中市",
          value: "511900"
        },
        {
          text: "资阳市",
          value: "512000"
        }
      ]
    },
    {
      text: "贵州省",
      value: "520000",
      children: [
        {
          text: "贵阳市",
          value: "520100"
        },
        {
          text: "六盘水市",
          value: "520200"
        },
        {
          text: "遵义市",
          value: "520300"
        },
        {
          text: "安顺市",
          value: "520400"
        },
        {
          text: "毕节市",
          value: "520500"
        },
        {
          text: "铜仁市",
          value: "520600"
        }
      ]
    },
    {
      text: "云南省",
      value: "530000",
      children: [
        {
          text: "昆明市",
          value: "530100"
        },
        {
          text: "曲靖市",
          value: "530300"
        },
        {
          text: "玉溪市",
          value: "530400"
        },
        {
          text: "保山市",
          value: "530500"
        },
        {
          text: "昭通市",
          value: "530600"
        },
        {
          text: "丽江市",
          value: "530700"
        },
        {
          text: "普洱市",
          value: "530800"
        },
        {
          text: "临沧市",
          value: "530900"
        }
      ]
    },
    {
      text: "西藏自治区",
      value: "540000",
      children: [
        {
          text: "拉萨市",
          value: "540100"
        },
        {
          text: "日喀则市",
          value: "540200"
        },
        {
          text: "昌都市",
          value: "540300"
        },
        {
          text: "林芝市",
          value: "540400"
        },
        {
          text: "山南市",
          value: "540500"
        },
        {
          text: "那曲市",
          value: "540600"
        }
      ]
    },
    {
      text: "陕西省",
      value: "610000",
      children: [
        {
          text: "西安市",
          value: "610100"
        },
        {
          text: "铜川市",
          value: "610200"
        },
        {
          text: "宝鸡市",
          value: "610300"
        },
        {
          text: "咸阳市",
          value: "610400"
        },
        {
          text: "渭南市",
          value: "610500"
        },
        {
          text: "延安市",
          value: "610600"
        },
        {
          text: "汉中市",
          value: "610700"
        },
        {
          text: "榆林市",
          value: "610800"
        },
        {
          text: "安康市",
          value: "610900"
        },
        {
          text: "商洛市",
          value: "611000"
        }
      ]
    },
    {
      text: "甘肃省",
      value: "620000",
      children: [
        {
          text: "兰州市",
          value: "620100"
        },
        {
          text: "嘉峪关市",
          value: "620200"
        },
        {
          text: "金昌市",
          value: "620300"
        },
        {
          text: "白银市",
          value: "620400"
        },
        {
          text: "天水市",
          value: "620500"
        },
        {
          text: "武威市",
          value: "620600"
        },
        {
          text: "张掖市",
          value: "620700"
        },
        {
          text: "平凉市",
          value: "620800"
        },
        {
          text: "酒泉市",
          value: "620900"
        },
        {
          text: "庆阳市",
          value: "621000"
        },
        {
          text: "定西市",
          value: "621100"
        },
        {
          text: "陇南市",
          value: "621200"
        }
      ]
    },
    {
      text: "青海省",
      value: "630000",
      children: [
        {
          text: "西宁市",
          value: "630100"
        },
        {
          text: "海东市",
          value: "630200"
        }
      ]
    },
    {
      text: "宁夏回族自治区",
      value: "640000",
      children: [
        {
          text: "银川市",
          value: "640100"
        },
        {
          text: "石嘴山市",
          value: "640200"
        },
        {
          text: "吴忠市",
          value: "640300"
        },
        {
          text: "固原市",
          value: "640400"
        },
        {
          text: "中卫市",
          value: "640500"
        }
      ]
    },
    {
      text: "新疆维吾尔自治区",
      value: "650000",
      children: [
        {
          text: "乌鲁木齐市",
          value: "650100"
        },
        {
          text: "克拉玛依市",
          value: "650200"
        }
      ]
    },
    {
      text: "香港特别行政区",
      value: "810000",
      children: [
        {
          text: "香港岛",
          value: "810100"
        },
        {
          text: "九龙",
          value: "810200"
        },
        {
          text: "新界",
          value: "810300"
        }
      ]
    },
    {
      text: "澳门特别行政区",
      value: "820000",
      children: [
        {
          text: "澳门半岛",
          value: "820100"
        },
        {
          text: "离岛",
          value: "820200"
        }
      ]
    },
    {
      text: "台湾省",
      value: "710000",
      children: [
        {
          text: "台北市",
          value: "710100"
        },
        {
          text: "高雄市",
          value: "710200"
        },
        {
          text: "台南市",
          value: "710300"
        },
        {
          text: "台中市",
          value: "710400"
        }
      ]
    }
  ];
  const _sfc_main$W = {
    __name: "merchant_set_info",
    setup(__props) {
      const referral_officer = vue.ref("");
      onLoad((options) => {
        referral_officer.value = options.referral_officer;
      });
      const publicStore = usePublicStore();
      useUserStore();
      const shopIntro = vue.ref("");
      const shopName = vue.ref("");
      const businessRange = vue.ref("");
      vue.ref("");
      const temBannerImgPaths = vue.ref([]);
      const temProfileImgPaths = vue.ref([]);
      const temDetailImgPaths = vue.ref([]);
      const range = vue.computed(() => {
        return publicStore.cateGoryList.map((item) => {
          return {
            value: item.id,
            // value 为 id
            text: item.name
            // text 为 name
          };
        });
      });
      vue.ref([]);
      const selectedProvince = vue.ref("");
      const selectedCity = vue.ref("");
      const cityData = vue.ref(cityDataJson);
      const onChange = (e2) => {
        var _a;
        const selected = e2.detail.value;
        const province = cityData.value.find((item) => item.value === selected[0]);
        (_a = province == null ? void 0 : province.children) == null ? void 0 : _a.find((item) => item.value === selected[1]);
        selectedProvince.value = e2.detail.value[0].text || "";
        selectedCity.value = e2.detail.value[1].text || "";
        formatAppLog("log", "at pages/merchant/merchant_set_info.vue:178", selectedProvince.value, selectedCity.value);
      };
      const isChecked = vue.ref(false);
      const changeCheck = () => {
        isChecked.value = !isChecked.value;
        formatAppLog("log", "at pages/merchant/merchant_set_info.vue:186", isChecked.value);
      };
      const changeRange = (e2) => {
        businessRange.value = e2;
        formatAppLog("log", "at pages/merchant/merchant_set_info.vue:191", e2);
      };
      const acceptTempBannerImgPath = async (ImgPaths) => {
        temBannerImgPaths.value = ImgPaths;
        formatAppLog("log", "at pages/merchant/merchant_set_info.vue:212", temBannerImgPaths.value);
      };
      const acceptTempProfileImgPath = async (ImgPaths) => {
        temProfileImgPaths.value = ImgPaths;
        formatAppLog("log", "at pages/merchant/merchant_set_info.vue:217", "tem", temProfileImgPaths.value);
      };
      const acceptTempDetailImgPath = async (ImgPaths) => {
        temDetailImgPaths.value = ImgPaths;
        formatAppLog("log", "at pages/merchant/merchant_set_info.vue:222", temDetailImgPaths.value);
      };
      const bannerListUrl = vue.ref([]);
      const upLoadBannerImg = async (shop) => {
        for (let i2 = 0; i2 < temBannerImgPaths.value.length; i2++) {
          const url = await uploadImage(temBannerImgPaths.value[i2]);
          await uploadShopImg({ image_url: url, image_type: "banner" });
          bannerListUrl.value.push(url);
        }
      };
      const detailListUrl = vue.ref([]);
      const upLoadDetailImg = async (shop) => {
        for (let i2 = 0; i2 < temDetailImgPaths.value.length; i2++) {
          const url = await uploadImage(temDetailImgPaths.value[i2]);
          await uploadShopImg({ image_url: url, image_type: "other" });
          detailListUrl.value.push(url);
        }
      };
      const profileUrl = vue.ref("");
      const uploadProfileImg = async () => {
        formatAppLog("log", "at pages/merchant/merchant_set_info.vue:251", temProfileImgPaths.value[0]);
        const url = await uploadImage(temProfileImgPaths.value[0]);
        formatAppLog("log", "at pages/merchant/merchant_set_info.vue:253", url);
        profileUrl.value = url;
      };
      const lat = vue.ref("");
      const lon = vue.ref("");
      const address = vue.ref("");
      const getLocation = () => {
        uni.chooseLocation({
          success(res) {
            lat.value = res.latitude;
            lon.value = res.longitude;
            address.value = res.address + res.name;
          }
        });
      };
      const merchantSettleIn = async () => {
        if (!isChecked.value)
          return uni.showToast({
            icon: "none",
            title: "请阅读完须知后勾选同意"
          });
        formatAppLog(
          "log",
          "at pages/merchant/merchant_set_info.vue:281",
          !shopName.value,
          !address.value,
          !shopIntro.value,
          temDetailImgPaths.value.length === 0,
          temProfileImgPaths.value.length === 0,
          temBannerImgPaths.value.length === 0
        );
        formatAppLog(
          "log",
          "at pages/merchant/merchant_set_info.vue:288",
          shopIntro.value,
          shopName.value,
          address.value,
          temDetailImgPaths.value.length,
          temProfileImgPaths.value.length,
          temBannerImgPaths.value.length
        );
        if (!shopName.value || !address.value || !shopIntro.value || temDetailImgPaths.value.length.length === 0 || temBannerImgPaths.value.length === 0 || temProfileImgPaths.value.length === 0) {
          return uni.showToast({
            icon: "none",
            title: "请填入完整信息"
          });
        }
        try {
          uni.showLoading({
            title: "正在入驻中..."
          });
          const phoneNumber = uni.getStorageSync("phoneNumber");
          formatAppLog("log", "at pages/merchant/merchant_set_info.vue:317", "-----");
          await uploadProfileImg();
          formatAppLog("log", "at pages/merchant/merchant_set_info.vue:319", { merchant: phoneNumber, categories: [businessRange.value], city: selectedCity.value, name: shopName.value, description: shopIntro.value, avatar: profileUrl.value || "https://example.com/image.png", address: address.value });
          const res = await postMerchantSettleIn({ merchant: phoneNumber, categories: [businessRange.value], city: selectedCity.value, name: shopName.value, description: shopIntro.value, avatar: profileUrl.value, address: address.value });
          formatAppLog("log", "at pages/merchant/merchant_set_info.vue:322", "-----!!!", res);
          await upLoadDetailImg(res == null ? void 0 : res.id);
          await upLoadBannerImg(res == null ? void 0 : res.id);
          uni.hideLoading();
          uni.showToast({
            title: "入驻成功",
            duration: 600,
            icon: "success"
          });
          setTimeout(() => {
            uni.navigateTo({
              url: "/pages/merchant/merchant_management"
            });
          }, 700);
        } catch (e2) {
          formatAppLog("log", "at pages/merchant/merchant_set_info.vue:343", e2);
          uni.showToast({
            title: "出现错误",
            duration: 1e3,
            icon: "error"
          });
        }
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        const _component_upload = resolveEasycom(vue.resolveDynamicComponent("upload"), __easycom_2$5);
        const _component_uni_data_select = resolveEasycom(vue.resolveDynamicComponent("uni-data-select"), __easycom_1$3);
        const _component_uni_data_picker = resolveEasycom(vue.resolveDynamicComponent("uni-data-picker"), __easycom_2$4);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "店铺开通" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", {
              class: "head_box flex_between",
              style: { "align-items": "flex-start" }
            }, [
              vue.createElementVNode("view", { class: "" }, [
                vue.createElementVNode("view", { class: "h_title" }, " 店铺头像 "),
                vue.createElementVNode("view", {
                  class: "h_text",
                  style: { "margin-top": "42rpx" }
                }, " 可上传店铺照片或LOGO ")
              ]),
              vue.createVNode(_component_upload, {
                amount: "1",
                onTempImgPaths: acceptTempProfileImgPath
              })
            ]),
            vue.createElementVNode("view", { class: "head_box" }, [
              vue.createElementVNode("view", {
                class: "flex_between",
                style: { "margin-bottom": "54rpx" }
              }, [
                vue.createElementVNode("view", { class: "h_title" }, " 店铺轮播图 "),
                vue.createElementVNode(
                  "view",
                  { class: "h_text" },
                  " 已选择" + vue.toDisplayString(temBannerImgPaths.value.length) + "张 ",
                  1
                  /* TEXT */
                )
              ]),
              vue.createVNode(_component_upload, {
                amount: "6",
                onTempImgPaths: acceptTempBannerImgPath
              })
            ]),
            vue.createElementVNode("view", { class: "head_box" }, [
              vue.createElementVNode("view", { class: "shop_intro" }, [
                vue.createElementVNode("view", {
                  class: "h_title",
                  style: { "margin-bottom": "34rpx" }
                }, " 店铺介绍 "),
                vue.withDirectives(vue.createElementVNode(
                  "textarea",
                  {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => shopIntro.value = $event),
                    placeholder: "请输入店铺介绍",
                    style: { "width": "100%", "height": "146rpx" },
                    "placeholder-style": "font-size: 24rpx;color:#aaaaaa;"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, shopIntro.value]
                ])
              ]),
              vue.createElementVNode("view", {
                class: "flex_between",
                style: { "margin-bottom": "54rpx" }
              }, [
                vue.createElementVNode("view", { class: "h_title" }, " 店铺详情图） "),
                vue.createElementVNode(
                  "view",
                  { class: "h_text" },
                  " 已选择" + vue.toDisplayString(temDetailImgPaths.value.length) + "张 ",
                  1
                  /* TEXT */
                )
              ]),
              vue.createVNode(_component_upload, {
                amount: "6",
                onTempImgPaths: acceptTempDetailImgPath
              })
            ]),
            vue.createElementVNode("view", { class: "shop_info" }, [
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 店铺名称 "),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => shopName.value = $event),
                    class: "uni-input",
                    placeholder: "请输入商家名称",
                    "placeholder-class": "placeholder_class"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, shopName.value]
                ])
              ]),
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 经营范围 "),
                vue.createCommentVNode(' <input v-model="businessRange" class="uni-input" placeholder="请输入商家经营的产品或业务" placeholder-class="placeholder_class" /> '),
                vue.createVNode(_component_uni_data_select, {
                  modelValue: businessRange.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => businessRange.value = $event),
                  localdata: range.value,
                  placeholder: "请选择",
                  clear: false,
                  onChange: changeRange
                }, null, 8, ["modelValue", "localdata"])
              ]),
              vue.createElementVNode("view", {
                class: "info_item flex_between",
                style: { "flex": "1" }
              }, [
                vue.createElementVNode("view", {
                  class: "title",
                  style: { "margin-right": "45rpx" }
                }, " 常居地 "),
                vue.createVNode(_component_uni_data_picker, {
                  localdata: cityData.value,
                  "clear-icon": false,
                  mode: "region",
                  onChange,
                  title: "请选择省市"
                }, null, 8, ["localdata"])
              ]),
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 具体位置 "),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => address.value = $event),
                    class: "uni-input",
                    placeholder: "输入地址或点击地图选择",
                    "placeholder-class": "placeholder_class"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, address.value]
                ]),
                vue.createElementVNode("image", {
                  src: _imports_1$7,
                  mode: "widthFix",
                  class: "lo_pic",
                  onClick: getLocation
                })
              ])
            ]),
            vue.createElementVNode("view", {
              class: "radio",
              onClick: changeCheck
            }, [
              vue.createElementVNode("radio", {
                value: "r1",
                checked: isChecked.value,
                color: "#FC5908"
              }, null, 8, ["checked"]),
              vue.createElementVNode("text", { class: "read" }, "我已阅读并同意"),
              vue.createElementVNode("text", { class: "c_title" }, "《商家入驻须知》")
            ]),
            vue.createElementVNode("view", {
              class: "btn_full",
              onClick: merchantSettleIn
            }, " 申请入驻 ")
          ])
        ]);
      };
    }
  };
  const PagesMerchantMerchantSetInfo = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["__scopeId", "data-v-34ea46dc"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/merchant_set_info.vue"]]);
  const _imports_0$c = "/static/success.jpg";
  const _sfc_main$V = {
    __name: "before_create_shop",
    setup(__props) {
      const toCreateShop = async () => {
        uni.navigateTo({
          url: "merchant_set_info"
        });
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
          vue.createVNode(_component_navBar, { title: "商家入驻" }),
          vue.createElementVNode("view", { class: "img-box" }, [
            vue.createElementVNode("image", {
              class: "img",
              src: _imports_0$c,
              mode: "aspectFit"
            })
          ]),
          vue.createElementVNode("view", { class: "text-box" }, [
            vue.createElementVNode("view", { class: "text" }, "恭喜你，已经成为满仓商家！")
          ]),
          vue.createElementVNode("view", { class: "buttom-box" }, [
            vue.createElementVNode("view", {
              class: "buttom",
              onClick: toCreateShop
            }, "创建店铺")
          ])
        ]);
      };
    }
  };
  const PagesMerchantBeforeCreateShop = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["__scopeId", "data-v-cf075c43"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/before_create_shop.vue"]]);
  const _imports_0$b = "/static/star.png";
  const _imports_0$a = "/static/arrow-right.png";
  const _sfc_main$U = {
    __name: "merchant_management",
    setup(__props) {
      const userStore = useUserStore();
      const toEdit = () => {
        uni.navigateTo({
          url: "/pages/merchant/merchant_edit_info"
        });
      };
      const toPoinGift = () => {
        uni.navigateTo({
          url: "/pages/merchant/point_gift"
        });
      };
      const toCode = () => {
        uni.navigateTo({
          url: "/pages/merchant/merchant_code_authentication"
        });
      };
      const toSecurityDeposit = () => {
        uni.navigateTo({
          url: "/pages/merchant/security_deposit"
        });
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "商家后台" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "merchant_info flex" }, [
              vue.createElementVNode("image", {
                src: vue.unref(userStore).storeInfo.avatar,
                mode: "aspectFill",
                class: "head"
              }, null, 8, ["src"]),
              vue.createElementVNode("view", { class: "" }, [
                vue.createElementVNode("view", { class: "name flex" }, [
                  vue.createElementVNode(
                    "view",
                    { class: "" },
                    vue.toDisplayString(vue.unref(userStore).storeInfo.name),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("view", { class: "level" }, " Lv.5 ")
                ]),
                vue.createElementVNode("view", { class: "flex" }, [
                  vue.createCommentVNode(' <uni-rate :readonly="true" :value="2" active-color="#fc5908" size="12" /> '),
                  vue.createElementVNode("view", { class: "flex" }, [
                    (vue.openBlock(), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(5, (item, index) => {
                        return vue.createElementVNode("image", {
                          src: _imports_0$b,
                          mode: "widthFix",
                          class: "star_pic",
                          key: index
                        });
                      }),
                      64
                      /* STABLE_FRAGMENT */
                    ))
                  ]),
                  vue.createElementVNode("view", { class: "point" }, " 5 ")
                ])
              ])
            ]),
            vue.createElementVNode("view", { class: "list_box" }, [
              vue.createElementVNode("view", {
                class: "list_item flex_between",
                onClick: toEdit
              }, [
                vue.createElementVNode("view", { class: "" }, " 资料编辑 "),
                vue.createElementVNode("image", {
                  src: _imports_0$a,
                  mode: "widthFix",
                  class: "arrow_pic"
                })
              ]),
              vue.createElementVNode("view", {
                class: "list_item flex_between",
                onClick: toPoinGift
              }, [
                vue.createElementVNode("view", { class: "" }, " 积分赠送 "),
                vue.createElementVNode("image", {
                  src: _imports_0$a,
                  mode: "widthFix",
                  class: "arrow_pic"
                })
              ]),
              vue.createElementVNode("view", {
                class: "list_item flex_between",
                onClick: toCode
              }, [
                vue.createElementVNode("view", { class: "" }, " 商家码认证 "),
                vue.createElementVNode("image", {
                  src: _imports_0$a,
                  mode: "widthFix",
                  class: "arrow_pic"
                })
              ]),
              vue.createElementVNode("view", {
                class: "list_item flex_between",
                onClick: toSecurityDeposit
              }, [
                vue.createElementVNode("view", { class: "" }, " 保证金 "),
                vue.createElementVNode("image", {
                  src: _imports_0$a,
                  mode: "widthFix",
                  class: "arrow_pic"
                })
              ]),
              vue.createCommentVNode(' <view class="list_item flex_between" @click="toUploadGoods">\n					<view class="">\n						上传产品\n					</view>\n					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pic"></image>\n				</view> '),
              vue.createCommentVNode(' <view class="list_item flex_between">\n					<view class="">\n						编辑产品\n					</view>\n					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pic"></image>\n				</view> ')
            ])
          ])
        ]);
      };
    }
  };
  const PagesMerchantMerchantManagement = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["__scopeId", "data-v-a81a7219"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/merchant_management.vue"]]);
  const _sfc_main$T = {};
  function _sfc_render$e(_ctx, _cache) {
    const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createVNode(_component_navBar, { title: "推荐官" }),
      vue.createElementVNode("view", { class: "img-box" }, [
        vue.createElementVNode("image", {
          class: "img",
          src: _imports_0$c,
          mode: "aspectFit"
        })
      ]),
      vue.createElementVNode("view", { class: "text-box" }, [
        vue.createElementVNode("view", { class: "text" }, "已经申请成为推荐官，正在审核中！")
      ])
    ]);
  }
  const PagesRecommendBeforeCreateRecommend = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["render", _sfc_render$e], ["__scopeId", "data-v-3e5f301f"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/recommend/before_create_recommend.vue"]]);
  const _sfc_main$S = {
    __name: "merchant_edit_info",
    setup(__props) {
      const publicStore = usePublicStore();
      const userStore = useUserStore();
      const shopIntro = vue.ref("");
      const shopName = vue.ref("");
      const businessRange = vue.ref("");
      const code = vue.ref("");
      const temBannerImgPaths = vue.ref([]);
      const temProfileImgPaths = vue.ref([]);
      const temDetailImgPaths = vue.ref([]);
      const range = vue.computed(() => {
        return publicStore.cateGoryList.map((item) => {
          formatAppLog("log", "at pages/merchant/merchant_edit_info.vue:140", {
            value: item.id,
            // value 为 id
            text: item.name
            // text 为 name
          });
          return {
            value: item.id,
            // value 为 id
            text: item.name
            // text 为 name
          };
        });
      });
      vue.ref(false);
      const changeRange = (e2) => {
        businessRange.value = e2;
        formatAppLog("log", "at pages/merchant/merchant_edit_info.vue:160", e2);
      };
      const acceptTempProfileImgPath = async (ImgPaths) => {
        temProfileImgPaths.value = ImgPaths;
        formatAppLog("log", "at pages/merchant/merchant_edit_info.vue:186", "tem", temProfileImgPaths.value);
      };
      vue.ref([]);
      vue.ref([]);
      const profileUrl = vue.ref("");
      const uploadProfileImg = async () => {
        formatAppLog("log", "at pages/merchant/merchant_edit_info.vue:220", temProfileImgPaths.value[0]);
        const url = await uploadImage(temProfileImgPaths.value[0]);
        formatAppLog("log", "at pages/merchant/merchant_edit_info.vue:222", url);
        profileUrl.value = url;
      };
      const lat = vue.ref("");
      const lon = vue.ref("");
      const address = vue.ref("");
      const getLocation = () => {
        uni.chooseLocation({
          success(res) {
            lat.value = res.latitude;
            lon.value = res.longitude;
            address.value = res.address + res.name;
          }
        });
      };
      const saveStoreInfo = async () => {
        formatAppLog(
          "log",
          "at pages/merchant/merchant_edit_info.vue:247",
          !shopName.value,
          !address.value,
          !shopIntro.value,
          temDetailImgPaths.value.length === 0,
          temProfileImgPaths.value.length === 0,
          temBannerImgPaths.value.length === 0
        );
        formatAppLog(
          "log",
          "at pages/merchant/merchant_edit_info.vue:254",
          shopIntro.value,
          shopName.value,
          address.value,
          temDetailImgPaths.value.length,
          temProfileImgPaths.value.length,
          temBannerImgPaths.value.length
        );
        if (!shopName.value || !address.value || !shopIntro.value || temProfileImgPaths.value.length === 0) {
          return uni.showToast({
            icon: "none",
            title: "请填入完整信息"
          });
        }
        try {
          uni.showLoading({
            title: "正在保存中..."
          });
          const cityDetail = await getCitiesDetail("广州");
          const { location: location2 } = await uni.getStorageSync("address_info");
          await uploadProfileImg();
          formatAppLog("log", "at pages/merchant/merchant_edit_info.vue:281", "-----");
          formatAppLog("log", "at pages/merchant/merchant_edit_info.vue:282", shopName.value, shopIntro.value, [businessRange.value], profileUrl.value, address.value, location2.lat, location2.lng, cityDetail[0].id);
          const res = await updateShopInfo(shopName.value, shopIntro.value, [businessRange.value], profileUrl.value, address.value, location2.lat, location2.lng, cityDetail[0].id);
          formatAppLog("log", "at pages/merchant/merchant_edit_info.vue:284", "-----!!!", res);
          uni.hideLoading();
          uni.showToast({
            title: "保存成功",
            duration: 600,
            icon: "success"
          });
          await userStore.fetchAllDataAction();
          setTimeout(() => {
            uni.navigateBack();
          }, 700);
        } catch (e2) {
          formatAppLog("log", "at pages/merchant/merchant_edit_info.vue:304", e2);
          uni.showToast({
            title: "出现错误",
            duration: 1e3,
            icon: "fail"
          });
        }
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        const _component_upload = resolveEasycom(vue.resolveDynamicComponent("upload"), __easycom_2$5);
        const _component_uni_data_select = resolveEasycom(vue.resolveDynamicComponent("uni-data-select"), __easycom_1$3);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "商家入驻" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", {
              class: "head_box flex_between",
              style: { "align-items": "flex-start" }
            }, [
              vue.createElementVNode("view", { class: "" }, [
                vue.createElementVNode("view", { class: "h_title" }, " 商家头像（200*200） "),
                vue.createElementVNode("view", {
                  class: "h_text",
                  style: { "margin-top": "42rpx" }
                }, " 可上传店铺照片或LOGO ")
              ]),
              vue.createVNode(_component_upload, {
                amount: 1,
                onTempImgPaths: acceptTempProfileImgPath
              })
            ]),
            vue.createCommentVNode(' 	<view class="head_box">\n				<view class="flex_between" style="margin-bottom: 54rpx;">\n					<view class="h_title">\n						商家轮播图（750*340）\n					</view>\n					<view class="h_text">\n						已选择{{temBannerImgPaths.length}}张\n					</view>\n				</view>\n				<upload amount="6" @tempImgPaths="acceptTempBannerImgPath"></upload>\n			</view> '),
            vue.createElementVNode("view", { class: "head_box" }, [
              vue.createElementVNode("view", { class: "shop_intro" }, [
                vue.createElementVNode("view", {
                  class: "h_title",
                  style: { "margin-bottom": "34rpx" }
                }, " 企业介绍 "),
                vue.withDirectives(vue.createElementVNode(
                  "textarea",
                  {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => shopIntro.value = $event),
                    placeholder: "请输入商家介绍",
                    style: { "width": "100%", "height": "146rpx" },
                    "placeholder-style": "font-size: 24rpx;color:#aaaaaa;"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, shopIntro.value]
                ])
              ]),
              vue.createCommentVNode(' 		<view class="flex_between" style="margin-bottom: 54rpx;">\n					<view class="h_title">\n						商家详情图（750*340）\n					</view>\n					<view class="h_text">\n						已选择{{temDetailImgPaths.length}}张\n					</view>\n				</view>\n				<upload :amount="6" @tempImgPaths="acceptTempDetailImgPath"></upload> ')
            ]),
            vue.createElementVNode("view", { class: "shop_info" }, [
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 商家名称 "),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => shopName.value = $event),
                    class: "uni-input",
                    placeholder: "请输入商家名称",
                    "placeholder-class": "placeholder_class"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, shopName.value]
                ])
              ]),
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 经营范围 "),
                vue.createCommentVNode(' <input v-model="businessRange" class="uni-input" placeholder="请输入商家经营的产品或业务" placeholder-class="placeholder_class" /> '),
                vue.createVNode(_component_uni_data_select, {
                  modelValue: businessRange.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => businessRange.value = $event),
                  localdata: range.value,
                  placeholder: "请选择",
                  clear: false,
                  onChange: changeRange
                }, null, 8, ["modelValue", "localdata"])
              ]),
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 手机验证 "),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => code.value = $event),
                    class: "uni-input",
                    placeholder: "请输入验证码",
                    "placeholder-class": "placeholder_class"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, code.value]
                ]),
                vue.createElementVNode("view", { class: "validate_code" }, " 获取验证码 ")
              ]),
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 具体位置 "),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => address.value = $event),
                    class: "uni-input",
                    placeholder: "输入地址或点击地图选择",
                    "placeholder-class": "placeholder_class"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, address.value]
                ]),
                vue.createElementVNode("image", {
                  src: _imports_1$7,
                  mode: "widthFix",
                  class: "lo_pic",
                  onClick: getLocation
                })
              ])
            ]),
            vue.createCommentVNode(' 	<view class="radio" @click="changeCheck">\n				<radio value="r1" :checked="isChecked" color="#FC5908" />\n				<text class="read">我已阅读并同意</text>\n				<text class="c_title">《商家入驻须知》</text>\n			</view> '),
            vue.createElementVNode("view", {
              class: "btn_full",
              onClick: saveStoreInfo
            }, " 保存 ")
          ])
        ]);
      };
    }
  };
  const PagesMerchantMerchantEditInfo = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["__scopeId", "data-v-aaffa612"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/merchant_edit_info.vue"]]);
  const bindPointAccount = async (data) => {
    return http.post("/wallets/wallet/bind/points/account/", data);
  };
  const unbindPointAccount = async (data) => {
    return http.post("/wallets/wallet/unbind/points/account/", data);
  };
  const withdrawPoint = async (data) => {
    return http.post("/wallets/convert/green-to-red/points/", data);
  };
  const giftPoint = async (data) => {
    return http.post("/wallets/gift/green/point/", data);
  };
  const getAllPoint = async () => {
    return http.get("/wallets/");
  };
  const getPointBindedAccount = async () => {
    return http.get("/wallets/");
  };
  const _sfc_main$R = {
    __name: "point_gift",
    setup(__props) {
      const totalPoints = vue.ref(0);
      const balance = vue.ref(0);
      vue.onMounted(async () => {
        const data = await getAllPoint();
        totalPoints.value = data.green_points + data.red_points;
        balance.value = data.collateral;
      });
      const address = vue.ref("");
      const number = vue.ref("");
      const isChecked = vue.ref(false);
      const changeCheck = () => {
        isChecked.value = !isChecked.value;
      };
      const confirm = async () => {
        if (!isChecked.value)
          return uni.showToast({
            icon: "none",
            title: "请阅读完须知后勾选同意"
          });
        if (!address.value)
          return uni.showToast({
            icon: "none",
            title: "请输入手机号"
          });
        if (!number.value)
          return uni.showToast({
            icon: "none",
            title: "请输入赠送数量"
          });
        try {
          uni.showLoading({
            title: "赠送中"
          });
          await giftPoint({ to_user: address.value, amount: number.value });
          uni.hideLoading();
          uni.showToast({
            icon: "none",
            title: "赠送成功"
          });
        } catch (e2) {
          uni.showToast({
            icon: "none",
            title: "赠送失败"
          });
        }
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "积分赠送" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "shop_info" }, [
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 赠送账号 "),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => address.value = $event),
                    class: "uni-input",
                    placeholder: "请输入手机号",
                    "placeholder-class": "placeholder_class"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, address.value]
                ]),
                vue.createCommentVNode(' <image src="@/static/scan.png" mode="widthFix" class="scan_pic" @click="scan"></image> ')
              ])
            ]),
            vue.createElementVNode("view", { class: "shop_info" }, [
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 赠送数量 "),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => number.value = $event),
                    type: "number",
                    class: "uni-input",
                    placeholder: "请输入积分数量",
                    "placeholder-class": "placeholder_class"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, number.value]
                ])
              ]),
              vue.createElementVNode("view", { class: "info_item flex" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 到账积分 "),
                vue.createElementVNode("view", {
                  class: "s_num",
                  style: { "color": "#999999" }
                }, " 1000 ")
              ]),
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_text" }, " 最多可赠送金额 "),
                vue.createElementVNode(
                  "view",
                  { class: "s_num" },
                  vue.toDisplayString(totalPoints.value),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_text" }, " 消耗 "),
                vue.createElementVNode("view", { class: "s_num" }, " 100可用积分+10保证金 ")
              ]),
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_text" }, " 保证金余额 "),
                vue.createElementVNode(
                  "view",
                  { class: "s_num" },
                  vue.toDisplayString(balance.value),
                  1
                  /* TEXT */
                )
              ])
            ]),
            vue.createElementVNode("view", {
              class: "radio",
              onClick: changeCheck
            }, [
              vue.createElementVNode("radio", {
                value: "r1",
                checked: isChecked.value,
                color: "#FC5908"
              }, null, 8, ["checked"]),
              vue.createElementVNode("text", { class: "read" }, "我已阅读并同意"),
              vue.createElementVNode("text", { class: "c_title" }, "《积分赠送须知》")
            ]),
            vue.createElementVNode("view", {
              class: "btn_full",
              onClick: confirm
            }, " 确认赠送 ")
          ])
        ]);
      };
    }
  };
  const PagesMerchantPointGift = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["__scopeId", "data-v-976eb3a4"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/point_gift.vue"]]);
  const _sfc_main$Q = {
    __name: "merchant_code_authentication",
    setup(__props) {
      const address = vue.ref("");
      const confirm = async () => {
        if (!address.value)
          return uni.showToast({
            icon: "none",
            title: "请输入商家码地址"
          });
        uni.showLoading({
          title: "认证中"
        });
        await merchantCodeAuthentication({ username: address.value });
        uni.hideLoading();
        uni.showToast({
          icon: "none",
          title: "认证成功"
        });
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "商家码认证" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "shop_info" }, [
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 积分账号 "),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => address.value = $event),
                    class: "uni-input",
                    placeholder: "请输入手机号",
                    "placeholder-class": "placeholder_class"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, address.value]
                ])
              ])
            ]),
            vue.createElementVNode("view", {
              class: "btn_full",
              onClick: confirm
            }, " 认证 ")
          ])
        ]);
      };
    }
  };
  const PagesMerchantMerchantCodeAuthentication = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-0f661089"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/merchant_code_authentication.vue"]]);
  const _sfc_main$P = {
    __name: "security_deposit",
    setup(__props) {
      const toRecord = () => {
        uni.navigateTo({
          url: "/pages/merchant/deposit_record"
        });
      };
      const toAdd = () => {
        uni.navigateTo({
          url: "/pages/merchant/add_deposit"
        });
      };
      const toRemove = () => {
        uni.navigateTo({
          url: "/pages/merchant/remove_deposit"
        });
      };
      const amount = vue.ref("");
      onShow(async () => {
        const { collateral } = await getAllPoint();
        amount.value = collateral;
      });
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "保证金" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "c_title" }, " 我的保证金 "),
            vue.createElementVNode(
              "view",
              { class: "number flex_center" },
              vue.toDisplayString(amount.value || 0),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "list_box" }, [
              vue.createElementVNode("view", {
                class: "list_item flex_between",
                onClick: toRecord
              }, [
                vue.createElementVNode("view", { class: "" }, " 保证金记录 "),
                vue.createElementVNode("image", {
                  src: _imports_0$a,
                  mode: "widthFix",
                  class: "arrow_pic"
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "btns flex_between" }, [
              vue.createElementVNode("view", {
                class: "add_btn flex_center",
                onClick: toAdd
              }, " 增加保证金 "),
              vue.createElementVNode("view", {
                class: "cancel_btn flex_center",
                onClick: toRemove
              }, " 解除保证金 ")
            ])
          ])
        ]);
      };
    }
  };
  const PagesMerchantSecurityDeposit = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__scopeId", "data-v-3efa2ea6"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/security_deposit.vue"]]);
  const ComponentClass$1 = "uni-col";
  const _sfc_main$O = {
    name: "uniCol",
    props: {
      span: {
        type: Number,
        default: 24
      },
      offset: {
        type: Number,
        default: -1
      },
      pull: {
        type: Number,
        default: -1
      },
      push: {
        type: Number,
        default: -1
      },
      xs: [Number, Object],
      sm: [Number, Object],
      md: [Number, Object],
      lg: [Number, Object],
      xl: [Number, Object]
    },
    data() {
      return {
        gutter: 0,
        sizeClass: "",
        parentWidth: 0,
        nvueWidth: 0,
        marginLeft: 0,
        right: 0,
        left: 0
      };
    },
    created() {
      let parent = this.$parent;
      while (parent && parent.$options.componentName !== "uniRow") {
        parent = parent.$parent;
      }
      this.updateGutter(parent.gutter);
      parent.$watch("gutter", (gutter) => {
        this.updateGutter(gutter);
      });
    },
    computed: {
      sizeList() {
        let {
          span,
          offset,
          pull,
          push
        } = this;
        return {
          span,
          offset,
          pull,
          push
        };
      },
      pointClassList() {
        let classList = [];
        ["xs", "sm", "md", "lg", "xl"].forEach((point) => {
          const props = this[point];
          if (typeof props === "number") {
            classList.push(`${ComponentClass$1}-${point}-${props}`);
          } else if (typeof props === "object" && props) {
            Object.keys(props).forEach((pointProp) => {
              classList.push(
                pointProp === "span" ? `${ComponentClass$1}-${point}-${props[pointProp]}` : `${ComponentClass$1}-${point}-${pointProp}-${props[pointProp]}`
              );
            });
          }
        });
        return classList.join(" ");
      }
    },
    methods: {
      updateGutter(parentGutter) {
        parentGutter = Number(parentGutter);
        if (!isNaN(parentGutter)) {
          this.gutter = parentGutter / 2;
        }
      }
    },
    watch: {
      sizeList: {
        immediate: true,
        handler(newVal) {
          let classList = [];
          for (let size in newVal) {
            const curSize = newVal[size];
            if ((curSize || curSize === 0) && curSize !== -1) {
              classList.push(
                size === "span" ? `${ComponentClass$1}-${curSize}` : `${ComponentClass$1}-${size}-${curSize}`
              );
            }
          }
          this.sizeClass = classList.join(" ");
        }
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-col", $data.sizeClass, $options.pointClassList]),
        style: vue.normalizeStyle({
          paddingLeft: `${Number($data.gutter)}rpx`,
          paddingRight: `${Number($data.gutter)}rpx`
        })
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["render", _sfc_render$d], ["__scopeId", "data-v-28ff6624"], ["__file", "/Users/daily/Desktop/d9/money_celestial/uni_modules/uni-row/components/uni-col/uni-col.vue"]]);
  const ComponentClass = "uni-row";
  const modifierSeparator = "--";
  const _sfc_main$N = {
    name: "uniRow",
    componentName: "uniRow",
    props: {
      type: String,
      gutter: Number,
      justify: {
        type: String,
        default: "start"
      },
      align: {
        type: String,
        default: "top"
      },
      // nvue如果使用span等属性，需要配置宽度
      width: {
        type: [String, Number],
        default: 750
      }
    },
    created() {
    },
    computed: {
      marginValue() {
        if (this.gutter) {
          return -(this.gutter / 2);
        }
        return 0;
      },
      typeClass() {
        return this.type === "flex" ? `${ComponentClass + modifierSeparator}flex` : "";
      },
      justifyClass() {
        return this.justify !== "start" ? `${ComponentClass + modifierSeparator}flex-justify-${this.justify}` : "";
      },
      alignClass() {
        return this.align !== "top" ? `${ComponentClass + modifierSeparator}flex-align-${this.align}` : "";
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-row", $options.typeClass, $options.justifyClass, $options.alignClass]),
        style: vue.normalizeStyle({
          marginLeft: `${Number($options.marginValue)}rpx`,
          marginRight: `${Number($options.marginValue)}rpx`
        })
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_2$3 = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["render", _sfc_render$c], ["__scopeId", "data-v-097353af"], ["__file", "/Users/daily/Desktop/d9/money_celestial/uni_modules/uni-row/components/uni-row/uni-row.vue"]]);
  const addDeposit = (data) => {
    return http.post("/wallets/add/collateral/", data);
  };
  const removeDeposit = (data) => {
    return http.post("/wallets/remove/collateral/", data);
  };
  const getRecords = (data) => {
    return http.get("/wallets/transactions/", data);
  };
  const _sfc_main$M = {
    __name: "deposit_record",
    setup(__props) {
      vue.onMounted(() => {
        getRecordList();
      });
      const recordList = vue.ref([]);
      const status = vue.ref("loading");
      const page = vue.ref(1);
      const getRecordList = async () => {
        status.value = "loading";
        const { transactions, total_amount } = await getRecords({ transaction_type: "collateral" });
        status.value = "no-more";
        recordList.value.push(...transactions);
      };
      const loadMore = () => {
        if (status.value == "more") {
          page.value++;
          getRecordList();
        }
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        const _component_uni_col = resolveEasycom(vue.resolveDynamicComponent("uni-col"), __easycom_1$2);
        const _component_uni_row = resolveEasycom(vue.resolveDynamicComponent("uni-row"), __easycom_2$3);
        const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_3$1);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "保证金记录" }),
          vue.createVNode(_component_uni_row, { class: "title_row" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_col, { span: 3 }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "title" }, "序号")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_uni_col, { span: 9 }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "title" }, "地址")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_uni_col, { span: 6 }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "title" }, "保证金")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_uni_col, { span: 6 }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "title" }, "提取时间")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(recordList.value, (item, index) => {
              return vue.openBlock(), vue.createBlock(
                _component_uni_row,
                {
                  key: item.id
                },
                {
                  default: vue.withCtx(() => [
                    vue.createVNode(
                      _component_uni_col,
                      { span: 3 },
                      {
                        default: vue.withCtx(() => [
                          vue.createElementVNode(
                            "view",
                            null,
                            vue.toDisplayString(index + 1),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    ),
                    vue.createVNode(
                      _component_uni_col,
                      { span: 9 },
                      {
                        default: vue.withCtx(() => [
                          vue.createElementVNode(
                            "view",
                            null,
                            vue.toDisplayString(item.from_user),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    ),
                    vue.createVNode(
                      _component_uni_col,
                      { span: 6 },
                      {
                        default: vue.withCtx(() => [
                          item.static == "add" ? (vue.openBlock(), vue.createElementBlock(
                            "view",
                            {
                              key: 0,
                              style: { "color": "#4cbe61" }
                            },
                            "+" + vue.toDisplayString(item.amount),
                            1
                            /* TEXT */
                          )) : vue.createCommentVNode("v-if", true),
                          item.static == "remove" ? (vue.openBlock(), vue.createElementBlock(
                            "view",
                            {
                              key: 1,
                              style: { "color": "#fd8c31" }
                            },
                            "-" + vue.toDisplayString(item.amount),
                            1
                            /* TEXT */
                          )) : vue.createCommentVNode("v-if", true)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    ),
                    vue.createVNode(
                      _component_uni_col,
                      { span: 6 },
                      {
                        default: vue.withCtx(() => [
                          vue.createElementVNode(
                            "view",
                            null,
                            vue.toDisplayString(vue.unref(convertTime)(item.created_at, "yyyy-MM-dd hh:mm:ss")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                },
                1024
                /* DYNAMIC_SLOTS */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          vue.createVNode(_component_uni_load_more, {
            status: status.value,
            onClickLoadMore: loadMore
          }, null, 8, ["status"])
        ]);
      };
    }
  };
  const PagesMerchantDepositRecord = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-d6fe0577"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/deposit_record.vue"]]);
  const _sfc_main$L = {
    __name: "add_deposit",
    setup(__props) {
      const address = vue.ref("");
      const number = vue.ref("");
      vue.onMounted(() => {
        getDepositInfo();
      });
      const amount = vue.ref(0);
      const getDepositInfo = async () => {
        const { collateral } = await getAllPoint();
        amount.value = collateral;
      };
      const isChecked = vue.ref(false);
      const changeCheck = () => {
        isChecked.value = !isChecked.value;
      };
      const confirm = async () => {
        if (!isChecked.value)
          return uni.showToast({
            icon: "none",
            title: "请阅读完须知后勾选同意"
          });
        if (!address.value)
          return uni.showToast({
            icon: "none",
            title: "请输入账号"
          });
        if (!number.value)
          return uni.showToast({
            icon: "none",
            title: "请输入金额"
          });
        try {
          uni.showLoading({
            title: "正在提交"
          });
          await addDeposit({ amount: number.value, to_user: address.value });
          getDepositInfo();
          uni.hideLoading();
          uni.showToast({
            icon: "none",
            title: "增加成功"
          });
        } catch (e2) {
          uni.showToast({
            icon: "none",
            title: "出错了"
          });
        }
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "增加保证金" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "shop_info" }, [
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 增加账号 "),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => address.value = $event),
                    class: "uni-input",
                    placeholder: "请输入手机号",
                    "placeholder-class": "placeholder_class"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, address.value]
                ]),
                vue.createCommentVNode(' <image src="@/static/scan.png" mode="widthFix" class="scan_pic" @click="scan"></image> ')
              ])
            ]),
            vue.createElementVNode("view", { class: "shop_info" }, [
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 增加金额 "),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => number.value = $event),
                    type: "number",
                    class: "uni-input",
                    placeholder: "请输入金额",
                    "placeholder-class": "placeholder_class"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, number.value]
                ])
              ]),
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_text" }, " 保证金余额 "),
                vue.createElementVNode(
                  "view",
                  { class: "s_num" },
                  vue.toDisplayString(amount.value),
                  1
                  /* TEXT */
                )
              ])
            ]),
            vue.createElementVNode("view", {
              class: "radio",
              onClick: changeCheck
            }, [
              vue.createElementVNode("radio", {
                value: "r1",
                checked: isChecked.value,
                color: "#FC5908"
              }, null, 8, ["checked"]),
              vue.createElementVNode("text", { class: "read" }, "我已阅读并同意"),
              vue.createElementVNode("text", { class: "c_title" }, "《保证金须知》")
            ]),
            vue.createElementVNode("view", {
              class: "btn_full",
              onClick: confirm
            }, " 确认增加 ")
          ])
        ]);
      };
    }
  };
  const PagesMerchantAddDeposit = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["__scopeId", "data-v-4a198a90"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/add_deposit.vue"]]);
  const _sfc_main$K = {
    __name: "remove_deposit",
    setup(__props) {
      vue.onMounted(() => {
        getDepositInfo();
      });
      const amount = vue.ref(0);
      const getDepositInfo = async () => {
        const { collateral } = await getAllPoint();
        amount.value = collateral;
      };
      const address = vue.ref("");
      const number = vue.ref("");
      const isChecked = vue.ref(false);
      const changeCheck = () => {
        isChecked.value = !isChecked.value;
      };
      const confirm = async () => {
        if (!isChecked.value)
          return uni.showToast({
            icon: "none",
            title: "请阅读完须知后勾选同意"
          });
        if (!address.value)
          return uni.showToast({
            icon: "none",
            title: "请输入地址"
          });
        if (!number.value)
          return uni.showToast({
            icon: "none",
            title: "请输入金额"
          });
        if (number.value > info.value.amount)
          return uni.showToast({
            icon: "none",
            title: "可解除余额不足"
          });
        uni.showLoading({
          title: "解除中"
        });
        await removeDeposit({ to_user: address.value, amount: number.value });
        getDepositInfo();
        uni.hideLoading();
        uni.showToast({
          icon: "none",
          title: "解除成功"
        });
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "解除保证金" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "shop_info" }, [
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 解除账号 "),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => address.value = $event),
                    class: "uni-input",
                    placeholder: "请输入手机号",
                    "placeholder-class": "placeholder_class"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, address.value]
                ]),
                vue.createCommentVNode(' <image src="@/static/scan.png" mode="widthFix" class="scan_pic" @click="scan"></image> ')
              ])
            ]),
            vue.createElementVNode("view", { class: "shop_info" }, [
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 解除金额 "),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => number.value = $event),
                    type: "number",
                    class: "uni-input",
                    placeholder: "请输入金额",
                    "placeholder-class": "placeholder_class"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, number.value]
                ])
              ]),
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_text" }, " 可解除余额 "),
                vue.createElementVNode(
                  "view",
                  { class: "s_num" },
                  vue.toDisplayString(amount.value),
                  1
                  /* TEXT */
                )
              ])
            ]),
            vue.createElementVNode("view", {
              class: "radio",
              onClick: changeCheck
            }, [
              vue.createElementVNode("radio", {
                value: "r1",
                checked: isChecked.value,
                color: "#FC5908"
              }, null, 8, ["checked"]),
              vue.createElementVNode("text", { class: "read" }, "我已阅读并同意"),
              vue.createElementVNode("text", { class: "c_title" }, "《保证金须知》")
            ]),
            vue.createElementVNode("view", {
              class: "btn_full",
              onClick: confirm
            }, " 确认解除 ")
          ])
        ]);
      };
    }
  };
  const PagesMerchantRemoveDeposit = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["__scopeId", "data-v-930acddc"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/remove_deposit.vue"]]);
  const _sfc_main$J = {
    __name: "upload_goods",
    setup(__props) {
      const shopIntro = vue.ref("");
      const goodsName = vue.ref("");
      const businessRange = vue.ref("");
      vue.ref("");
      vue.ref("");
      const range = vue.ref([
        { value: "篮球", text: "篮球" },
        { value: "足球", text: "足球" },
        { value: "游泳", text: "游泳" }
      ]);
      const changeRange = (e2) => {
        businessRange.value = e2;
        formatAppLog("log", "at pages/merchant/upload_goods.vue:80", e2);
      };
      const isChecked = vue.ref(false);
      const changeCheck = () => {
        isChecked.value = !isChecked.value;
      };
      const confirm = () => {
        if (!isChecked.value)
          return uni.showToast({
            icon: "none",
            title: "请阅读完须知后勾选同意"
          });
      };
      const temProductImgPaths = vue.ref([]);
      const acceptTempProductImgPath = async (ImgPaths) => {
        temProductImgPaths.value = ImgPaths;
      };
      const temDetailImgPath = vue.ref([]);
      const acceptTemDetailImgPath = async (ImgPaths) => {
        temDetailImgPath.value = ImgPaths;
      };
      vue.ref([]);
      vue.ref([]);
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        const _component_uni_data_select = resolveEasycom(vue.resolveDynamicComponent("uni-data-select"), __easycom_1$3);
        const _component_upload = resolveEasycom(vue.resolveDynamicComponent("upload"), __easycom_2$5);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "发布商品" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "shop_info" }, [
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 商品名称 "),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => goodsName.value = $event),
                    class: "uni-input",
                    placeholder: "请输入商品名称",
                    "placeholder-class": "placeholder_class"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, goodsName.value]
                ])
              ]),
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 商品分类 "),
                vue.createVNode(_component_uni_data_select, {
                  modelValue: businessRange.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => businessRange.value = $event),
                  localdata: range.value,
                  placeholder: "请选择",
                  clear: false,
                  onChange: changeRange
                }, null, 8, ["modelValue", "localdata"]),
                vue.createCommentVNode(' <input v-model="address" class="uni-input" placeholder="选择商品分类" placeholder-class="placeholder_class" />\n					<image src="@/static/arrow-right.png" mode="widthFix" class="lo_pic"></image> ')
              ])
            ]),
            vue.createElementVNode("view", { class: "head_box" }, [
              vue.createElementVNode("view", {
                class: "flex_between",
                style: { "margin-bottom": "54rpx" }
              }, [
                vue.createElementVNode("view", { class: "h_title" }, " 商品主图 "),
                vue.createElementVNode(
                  "view",
                  { class: "h_text" },
                  " 已选择" + vue.toDisplayString(temProductImgPaths.value.length) + "张 ",
                  1
                  /* TEXT */
                )
              ]),
              vue.createVNode(_component_upload, {
                amount: 6,
                onTempImgPaths: acceptTempProductImgPath
              })
            ]),
            vue.createElementVNode("view", { class: "head_box" }, [
              vue.createElementVNode("view", { class: "shop_intro" }, [
                vue.createElementVNode("view", {
                  class: "flex_between",
                  style: { "margin-bottom": "54rpx" }
                }, [
                  vue.createElementVNode("view", { class: "h_title" }, " 详情描述 "),
                  vue.createElementVNode(
                    "view",
                    { class: "h_text" },
                    " 已选择" + vue.toDisplayString(temDetailImgPath.value.length) + "张 ",
                    1
                    /* TEXT */
                  )
                ]),
                vue.withDirectives(vue.createElementVNode(
                  "textarea",
                  {
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => shopIntro.value = $event),
                    placeholder: "请输入商品描述",
                    style: { "width": "100%", "height": "146rpx" },
                    "placeholder-style": "font-size: 24rpx;color:#aaaaaa;"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, shopIntro.value]
                ])
              ]),
              vue.createVNode(_component_upload, {
                amount: 6,
                onTempImgPaths: acceptTemDetailImgPath
              })
            ]),
            vue.createElementVNode("view", {
              class: "radio",
              onClick: changeCheck
            }, [
              vue.createElementVNode("radio", {
                value: "r1",
                checked: isChecked.value,
                color: "#FC5908"
              }, null, 8, ["checked"]),
              vue.createElementVNode("text", { class: "read" }, "我已阅读并同意"),
              vue.createElementVNode("text", { class: "c_title" }, "《发布须知》")
            ]),
            vue.createElementVNode("view", {
              class: "btn_full",
              onClick: confirm
            }, " 发布商品 ")
          ])
        ]);
      };
    }
  };
  const PagesMerchantUploadGoods = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["__scopeId", "data-v-452b451b"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/upload_goods.vue"]]);
  const _imports_0$9 = "/static/agent/agent-intro.jpg";
  const _sfc_main$I = {};
  function _sfc_render$b(_ctx, _cache) {
    const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_navBar, { title: "代理" }),
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("image", {
          src: _imports_0$9,
          mode: "widthFix",
          class: "merchant_intro"
        }),
        vue.createElementVNode("view", { class: "btn_full" }, " 联系满仓 ")
      ])
    ]);
  }
  const PagesAgentAgentIntro = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$b], ["__scopeId", "data-v-4d11c0d1"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/agent/agent_intro.vue"]]);
  const _imports_0$8 = "/static/agent/agent-bg.png";
  const getAgentShopList = async (id, data) => {
    return http.get(`/divisions/merchants/province/${id}/list/`, data);
  };
  const getRecommendOfficerAmount = async (id) => {
    return http.get(`/divisions/referral-officers/province/${id}/list/`);
  };
  const getProvinceId = async () => {
    return http.get("/agent/province/");
  };
  const _sfc_main$H = {
    __name: "agent_management",
    setup(__props) {
      const provinceId = vue.ref();
      vue.onMounted(async () => {
        const { province } = await getProvinceId();
        provinceId.value = province;
        getShopAmount();
        getOfficerAmount();
        getAgentPoint();
      });
      const merchantAmount = vue.ref(0);
      const cityAgent = vue.ref("");
      const getShopAmount = async () => {
        const { count, results } = await getAgentShopList(provinceId.value);
        merchantAmount.value = count;
        cityAgent.value = results[0].city;
      };
      const officerAmount = vue.ref(0);
      const getOfficerAmount = async () => {
        const { count } = await getRecommendOfficerAmount(provinceId.value);
        officerAmount.value = count;
      };
      const agentPoint = vue.ref(0);
      const getAgentPoint = async () => {
        const { total_amount } = await getRecords({ transaction_type: "bonus" });
        agentPoint.value = total_amount;
      };
      const toMerchantList = () => {
        if (!provinceId.value)
          return;
        uni.navigateTo({
          url: "/pages/agent/merchant_list?provinceId=" + provinceId.value
        });
      };
      const toMerchantCode = () => {
        uni.navigateTo({
          url: "/pages/merchant/merchant_code_authentication"
        });
      };
      const toSecurityDeposit = () => {
        uni.navigateTo({
          url: "/pages/merchant/security_deposit"
        });
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "代理后台" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "total_data" }, [
              vue.createElementVNode("image", {
                src: _imports_0$8,
                mode: "widthFix",
                class: "agent_pic"
              }),
              vue.createElementVNode("view", { class: "data_item" }, [
                vue.createElementVNode("view", { class: "location" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "city" },
                    vue.toDisplayString(cityAgent.value),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("text", null, "代理")
                ]),
                vue.createElementVNode("view", { class: "point_box flex" }, [
                  vue.createElementVNode("view", { class: "point_text" }, " 获得积分 "),
                  vue.createElementVNode(
                    "view",
                    { class: "point_num" },
                    vue.toDisplayString(agentPoint.value),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "flex" }, [
                  vue.createElementVNode("view", {
                    class: "",
                    style: { "margin-right": "112rpx" }
                  }, [
                    vue.createElementVNode("view", { class: "data_text" }, " 商家数量 "),
                    vue.createElementVNode(
                      "view",
                      { class: "data_num" },
                      vue.toDisplayString(merchantAmount.value),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "" }, [
                    vue.createElementVNode("view", { class: "data_text" }, " 推荐官数量 "),
                    vue.createElementVNode(
                      "view",
                      { class: "data_num" },
                      vue.toDisplayString(officerAmount.value),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ])
            ]),
            vue.createElementVNode("view", { class: "list_box" }, [
              vue.createElementVNode("view", {
                class: "list_item flex_between",
                onClick: toMerchantList
              }, [
                vue.createElementVNode("view", { class: "" }, " 商家列表 "),
                vue.createElementVNode("image", {
                  src: _imports_0$a,
                  mode: "widthFix",
                  class: "arrow_pic"
                })
              ]),
              vue.createElementVNode("view", {
                class: "list_item flex_between",
                onClick: toMerchantCode
              }, [
                vue.createElementVNode("view", { class: "" }, " 商家码认证 "),
                vue.createElementVNode("image", {
                  src: _imports_0$a,
                  mode: "widthFix",
                  class: "arrow_pic"
                })
              ]),
              vue.createElementVNode("view", {
                class: "list_item flex_between",
                onClick: toSecurityDeposit
              }, [
                vue.createElementVNode("view", { class: "" }, " 保证金 "),
                vue.createElementVNode("image", {
                  src: _imports_0$a,
                  mode: "widthFix",
                  class: "arrow_pic"
                })
              ])
            ])
          ])
        ]);
      };
    }
  };
  const PagesAgentAgentManagement = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__scopeId", "data-v-aa1b4823"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/agent/agent_management.vue"]]);
  const _imports_0$7 = "/static/recommend/recommend-intro.jpg";
  const _sfc_main$G = {
    __name: "recommend_intro",
    setup(__props) {
      const toNext = () => {
        uni.navigateTo({
          // url: '/pages/recommend/recommend_management'
          url: "/pages/recommend/recommend_test"
        });
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "推荐官" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("image", {
              src: _imports_0$7,
              mode: "widthFix",
              class: "merchant_intro"
            }),
            vue.createElementVNode("view", {
              class: "btn_full",
              onClick: toNext
            }, " 我要成为推荐官 ")
          ])
        ]);
      };
    }
  };
  const PagesRecommendRecommendIntro = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-87fd30d1"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/recommend/recommend_intro.vue"]]);
  const _imports_0$6 = "/static/recommend/recommend_bg.png";
  const _imports_1$5 = "/static/recommend/lv1.png";
  const _imports_2$2 = "/static/recommend/code.png";
  const _sfc_main$F = {
    __name: "recommend_management",
    setup(__props) {
      const info2 = vue.ref({});
      vue.onMounted(async () => {
      });
      const toMerchantList = () => {
        uni.navigateTo({
          url: "/pages/recommend/merchant_list"
        });
      };
      const toMerchantCode = () => {
        uni.navigateTo({
          url: "/pages/merchant/merchant_code_authentication"
        });
      };
      const toSecurityDeposit = () => {
        uni.navigateTo({
          url: "/pages/merchant/security_deposit"
        });
      };
      const toqrDetail = () => {
        uni.navigateTo({
          url: "/pages/recommend/qrcodeDetail"
        });
      };
      return (_ctx, _cache) => {
        var _a, _b, _c, _d;
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "推荐官后台" }),
          vue.createElementVNode("view", { class: "total_data" }, [
            vue.createElementVNode("image", {
              src: _imports_0$6,
              mode: "widthFix",
              class: "agent_pic"
            }),
            vue.createElementVNode("view", { class: "data_item" }, [
              vue.createElementVNode("image", {
                src: _imports_1$5,
                mode: "widthFix",
                class: "lv_pic"
              }),
              vue.createElementVNode("view", { class: "lv_name" }, " 荣耀推荐官 "),
              vue.createElementVNode("view", { class: "flex_center" }, [
                vue.createElementVNode(
                  "view",
                  { class: "name" },
                  vue.toDisplayString(((_a = info2.value) == null ? void 0 : _a.results) && ((_d = (_c = (_b = info2.value) == null ? void 0 : _b.results[0]) == null ? void 0 : _c.owner) == null ? void 0 : _d.username)),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("image", {
                  src: _imports_2$2,
                  mode: "widthFix",
                  class: "code_pic",
                  onClick: toqrDetail
                })
              ]),
              vue.createElementVNode("view", { class: "total_item flex_center" }, [
                vue.createElementVNode("view", { class: "" }, [
                  vue.createElementVNode("view", { class: "total_text" }, " 已推荐商家数 "),
                  vue.createElementVNode(
                    "view",
                    { class: "total_num" },
                    vue.toDisplayString(info2.value.count || 0),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createCommentVNode(' <view class="">\n						<view class="total_text">\n							已获得积分\n						</view>\n						<view class="total_num">\n							15,328,872,819\n						</view>\n					</view> ')
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "list_box" }, [
              vue.createElementVNode("view", {
                class: "list_item flex_between",
                onClick: toMerchantList
              }, [
                vue.createElementVNode("view", { class: "" }, " 推荐商家列表 "),
                vue.createElementVNode("image", {
                  src: _imports_0$a,
                  mode: "widthFix",
                  class: "arrow_pic"
                })
              ]),
              vue.createElementVNode("view", {
                class: "list_item flex_between",
                onClick: toMerchantCode
              }, [
                vue.createElementVNode("view", { class: "" }, " 商家码认证 "),
                vue.createElementVNode("image", {
                  src: _imports_0$a,
                  mode: "widthFix",
                  class: "arrow_pic"
                })
              ]),
              vue.createElementVNode("view", {
                class: "list_item flex_between",
                onClick: toSecurityDeposit
              }, [
                vue.createElementVNode("view", { class: "" }, " 保证金 "),
                vue.createElementVNode("image", {
                  src: _imports_0$a,
                  mode: "widthFix",
                  class: "arrow_pic"
                })
              ])
            ])
          ]),
          vue.createElementVNode("canvas", {
            style: { "width": "200px", "height": "200px" },
            "canvas-id": "myQrcode"
          })
        ]);
      };
    }
  };
  const PagesRecommendRecommendManagement = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__scopeId", "data-v-6eb3b4f4"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/recommend/recommend_management.vue"]]);
  var browser = {};
  var canPromise$1 = function() {
    return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
  };
  var qrcode = {};
  var utils$1 = {};
  let toSJISFunction;
  const CODEWORDS_COUNT = [
    0,
    // Not used
    26,
    44,
    70,
    100,
    134,
    172,
    196,
    242,
    292,
    346,
    404,
    466,
    532,
    581,
    655,
    733,
    815,
    901,
    991,
    1085,
    1156,
    1258,
    1364,
    1474,
    1588,
    1706,
    1828,
    1921,
    2051,
    2185,
    2323,
    2465,
    2611,
    2761,
    2876,
    3034,
    3196,
    3362,
    3532,
    3706
  ];
  utils$1.getSymbolSize = function getSymbolSize2(version2) {
    if (!version2)
      throw new Error('"version" cannot be null or undefined');
    if (version2 < 1 || version2 > 40)
      throw new Error('"version" should be in range from 1 to 40');
    return version2 * 4 + 17;
  };
  utils$1.getSymbolTotalCodewords = function getSymbolTotalCodewords(version2) {
    return CODEWORDS_COUNT[version2];
  };
  utils$1.getBCHDigit = function(data) {
    let digit = 0;
    while (data !== 0) {
      digit++;
      data >>>= 1;
    }
    return digit;
  };
  utils$1.setToSJISFunction = function setToSJISFunction(f2) {
    if (typeof f2 !== "function") {
      throw new Error('"toSJISFunc" is not a valid function.');
    }
    toSJISFunction = f2;
  };
  utils$1.isKanjiModeEnabled = function() {
    return typeof toSJISFunction !== "undefined";
  };
  utils$1.toSJIS = function toSJIS(kanji2) {
    return toSJISFunction(kanji2);
  };
  var errorCorrectionLevel = {};
  (function(exports) {
    exports.L = { bit: 1 };
    exports.M = { bit: 0 };
    exports.Q = { bit: 3 };
    exports.H = { bit: 2 };
    function fromString(string) {
      if (typeof string !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string.toLowerCase();
      switch (lcStr) {
        case "l":
        case "low":
          return exports.L;
        case "m":
        case "medium":
          return exports.M;
        case "q":
        case "quartile":
          return exports.Q;
        case "h":
        case "high":
          return exports.H;
        default:
          throw new Error("Unknown EC Level: " + string);
      }
    }
    exports.isValid = function isValid(level) {
      return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
    };
    exports.from = function from(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString(value);
      } catch (e2) {
        return defaultValue;
      }
    };
  })(errorCorrectionLevel);
  function BitBuffer$1() {
    this.buffer = [];
    this.length = 0;
  }
  BitBuffer$1.prototype = {
    get: function(index) {
      const bufIndex = Math.floor(index / 8);
      return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
    },
    put: function(num, length) {
      for (let i2 = 0; i2 < length; i2++) {
        this.putBit((num >>> length - i2 - 1 & 1) === 1);
      }
    },
    getLengthInBits: function() {
      return this.length;
    },
    putBit: function(bit) {
      const bufIndex = Math.floor(this.length / 8);
      if (this.buffer.length <= bufIndex) {
        this.buffer.push(0);
      }
      if (bit) {
        this.buffer[bufIndex] |= 128 >>> this.length % 8;
      }
      this.length++;
    }
  };
  var bitBuffer = BitBuffer$1;
  function BitMatrix$1(size) {
    if (!size || size < 1) {
      throw new Error("BitMatrix size must be defined and greater than 0");
    }
    this.size = size;
    this.data = new Uint8Array(size * size);
    this.reservedBit = new Uint8Array(size * size);
  }
  BitMatrix$1.prototype.set = function(row, col, value, reserved) {
    const index = row * this.size + col;
    this.data[index] = value;
    if (reserved)
      this.reservedBit[index] = true;
  };
  BitMatrix$1.prototype.get = function(row, col) {
    return this.data[row * this.size + col];
  };
  BitMatrix$1.prototype.xor = function(row, col, value) {
    this.data[row * this.size + col] ^= value;
  };
  BitMatrix$1.prototype.isReserved = function(row, col) {
    return this.reservedBit[row * this.size + col];
  };
  var bitMatrix = BitMatrix$1;
  var alignmentPattern = {};
  (function(exports) {
    const getSymbolSize2 = utils$1.getSymbolSize;
    exports.getRowColCoords = function getRowColCoords(version2) {
      if (version2 === 1)
        return [];
      const posCount = Math.floor(version2 / 7) + 2;
      const size = getSymbolSize2(version2);
      const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
      const positions = [size - 7];
      for (let i2 = 1; i2 < posCount - 1; i2++) {
        positions[i2] = positions[i2 - 1] - intervals;
      }
      positions.push(6);
      return positions.reverse();
    };
    exports.getPositions = function getPositions(version2) {
      const coords = [];
      const pos = exports.getRowColCoords(version2);
      const posLength = pos.length;
      for (let i2 = 0; i2 < posLength; i2++) {
        for (let j2 = 0; j2 < posLength; j2++) {
          if (i2 === 0 && j2 === 0 || // top-left
          i2 === 0 && j2 === posLength - 1 || // bottom-left
          i2 === posLength - 1 && j2 === 0) {
            continue;
          }
          coords.push([pos[i2], pos[j2]]);
        }
      }
      return coords;
    };
  })(alignmentPattern);
  var finderPattern = {};
  const getSymbolSize = utils$1.getSymbolSize;
  const FINDER_PATTERN_SIZE = 7;
  finderPattern.getPositions = function getPositions(version2) {
    const size = getSymbolSize(version2);
    return [
      // top-left
      [0, 0],
      // top-right
      [size - FINDER_PATTERN_SIZE, 0],
      // bottom-left
      [0, size - FINDER_PATTERN_SIZE]
    ];
  };
  var maskPattern = {};
  (function(exports) {
    exports.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    const PenaltyScores = {
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    };
    exports.isValid = function isValid(mask) {
      return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
    };
    exports.from = function from(value) {
      return exports.isValid(value) ? parseInt(value, 10) : void 0;
    };
    exports.getPenaltyN1 = function getPenaltyN1(data) {
      const size = data.size;
      let points = 0;
      let sameCountCol = 0;
      let sameCountRow = 0;
      let lastCol = null;
      let lastRow = null;
      for (let row = 0; row < size; row++) {
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;
        for (let col = 0; col < size; col++) {
          let module = data.get(row, col);
          if (module === lastCol) {
            sameCountCol++;
          } else {
            if (sameCountCol >= 5)
              points += PenaltyScores.N1 + (sameCountCol - 5);
            lastCol = module;
            sameCountCol = 1;
          }
          module = data.get(col, row);
          if (module === lastRow) {
            sameCountRow++;
          } else {
            if (sameCountRow >= 5)
              points += PenaltyScores.N1 + (sameCountRow - 5);
            lastRow = module;
            sameCountRow = 1;
          }
        }
        if (sameCountCol >= 5)
          points += PenaltyScores.N1 + (sameCountCol - 5);
        if (sameCountRow >= 5)
          points += PenaltyScores.N1 + (sameCountRow - 5);
      }
      return points;
    };
    exports.getPenaltyN2 = function getPenaltyN2(data) {
      const size = data.size;
      let points = 0;
      for (let row = 0; row < size - 1; row++) {
        for (let col = 0; col < size - 1; col++) {
          const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
          if (last === 4 || last === 0)
            points++;
        }
      }
      return points * PenaltyScores.N2;
    };
    exports.getPenaltyN3 = function getPenaltyN3(data) {
      const size = data.size;
      let points = 0;
      let bitsCol = 0;
      let bitsRow = 0;
      for (let row = 0; row < size; row++) {
        bitsCol = bitsRow = 0;
        for (let col = 0; col < size; col++) {
          bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
          if (col >= 10 && (bitsCol === 1488 || bitsCol === 93))
            points++;
          bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
          if (col >= 10 && (bitsRow === 1488 || bitsRow === 93))
            points++;
        }
      }
      return points * PenaltyScores.N3;
    };
    exports.getPenaltyN4 = function getPenaltyN4(data) {
      let darkCount = 0;
      const modulesCount = data.data.length;
      for (let i2 = 0; i2 < modulesCount; i2++)
        darkCount += data.data[i2];
      const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
      return k * PenaltyScores.N4;
    };
    function getMaskAt(maskPattern2, i2, j2) {
      switch (maskPattern2) {
        case exports.Patterns.PATTERN000:
          return (i2 + j2) % 2 === 0;
        case exports.Patterns.PATTERN001:
          return i2 % 2 === 0;
        case exports.Patterns.PATTERN010:
          return j2 % 3 === 0;
        case exports.Patterns.PATTERN011:
          return (i2 + j2) % 3 === 0;
        case exports.Patterns.PATTERN100:
          return (Math.floor(i2 / 2) + Math.floor(j2 / 3)) % 2 === 0;
        case exports.Patterns.PATTERN101:
          return i2 * j2 % 2 + i2 * j2 % 3 === 0;
        case exports.Patterns.PATTERN110:
          return (i2 * j2 % 2 + i2 * j2 % 3) % 2 === 0;
        case exports.Patterns.PATTERN111:
          return (i2 * j2 % 3 + (i2 + j2) % 2) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + maskPattern2);
      }
    }
    exports.applyMask = function applyMask(pattern, data) {
      const size = data.size;
      for (let col = 0; col < size; col++) {
        for (let row = 0; row < size; row++) {
          if (data.isReserved(row, col))
            continue;
          data.xor(row, col, getMaskAt(pattern, row, col));
        }
      }
    };
    exports.getBestMask = function getBestMask(data, setupFormatFunc) {
      const numPatterns = Object.keys(exports.Patterns).length;
      let bestPattern = 0;
      let lowerPenalty = Infinity;
      for (let p2 = 0; p2 < numPatterns; p2++) {
        setupFormatFunc(p2);
        exports.applyMask(p2, data);
        const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
        exports.applyMask(p2, data);
        if (penalty < lowerPenalty) {
          lowerPenalty = penalty;
          bestPattern = p2;
        }
      }
      return bestPattern;
    };
  })(maskPattern);
  var errorCorrectionCode = {};
  const ECLevel$1 = errorCorrectionLevel;
  const EC_BLOCKS_TABLE = [
    // L  M  Q  H
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    1,
    2,
    2,
    4,
    1,
    2,
    4,
    4,
    2,
    4,
    4,
    4,
    2,
    4,
    6,
    5,
    2,
    4,
    6,
    6,
    2,
    5,
    8,
    8,
    4,
    5,
    8,
    8,
    4,
    5,
    8,
    11,
    4,
    8,
    10,
    11,
    4,
    9,
    12,
    16,
    4,
    9,
    16,
    16,
    6,
    10,
    12,
    18,
    6,
    10,
    17,
    16,
    6,
    11,
    16,
    19,
    6,
    13,
    18,
    21,
    7,
    14,
    21,
    25,
    8,
    16,
    20,
    25,
    8,
    17,
    23,
    25,
    9,
    17,
    23,
    34,
    9,
    18,
    25,
    30,
    10,
    20,
    27,
    32,
    12,
    21,
    29,
    35,
    12,
    23,
    34,
    37,
    12,
    25,
    34,
    40,
    13,
    26,
    35,
    42,
    14,
    28,
    38,
    45,
    15,
    29,
    40,
    48,
    16,
    31,
    43,
    51,
    17,
    33,
    45,
    54,
    18,
    35,
    48,
    57,
    19,
    37,
    51,
    60,
    19,
    38,
    53,
    63,
    20,
    40,
    56,
    66,
    21,
    43,
    59,
    70,
    22,
    45,
    62,
    74,
    24,
    47,
    65,
    77,
    25,
    49,
    68,
    81
  ];
  const EC_CODEWORDS_TABLE = [
    // L  M  Q  H
    7,
    10,
    13,
    17,
    10,
    16,
    22,
    28,
    15,
    26,
    36,
    44,
    20,
    36,
    52,
    64,
    26,
    48,
    72,
    88,
    36,
    64,
    96,
    112,
    40,
    72,
    108,
    130,
    48,
    88,
    132,
    156,
    60,
    110,
    160,
    192,
    72,
    130,
    192,
    224,
    80,
    150,
    224,
    264,
    96,
    176,
    260,
    308,
    104,
    198,
    288,
    352,
    120,
    216,
    320,
    384,
    132,
    240,
    360,
    432,
    144,
    280,
    408,
    480,
    168,
    308,
    448,
    532,
    180,
    338,
    504,
    588,
    196,
    364,
    546,
    650,
    224,
    416,
    600,
    700,
    224,
    442,
    644,
    750,
    252,
    476,
    690,
    816,
    270,
    504,
    750,
    900,
    300,
    560,
    810,
    960,
    312,
    588,
    870,
    1050,
    336,
    644,
    952,
    1110,
    360,
    700,
    1020,
    1200,
    390,
    728,
    1050,
    1260,
    420,
    784,
    1140,
    1350,
    450,
    812,
    1200,
    1440,
    480,
    868,
    1290,
    1530,
    510,
    924,
    1350,
    1620,
    540,
    980,
    1440,
    1710,
    570,
    1036,
    1530,
    1800,
    570,
    1064,
    1590,
    1890,
    600,
    1120,
    1680,
    1980,
    630,
    1204,
    1770,
    2100,
    660,
    1260,
    1860,
    2220,
    720,
    1316,
    1950,
    2310,
    750,
    1372,
    2040,
    2430
  ];
  errorCorrectionCode.getBlocksCount = function getBlocksCount(version2, errorCorrectionLevel2) {
    switch (errorCorrectionLevel2) {
      case ECLevel$1.L:
        return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 0];
      case ECLevel$1.M:
        return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 1];
      case ECLevel$1.Q:
        return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 2];
      case ECLevel$1.H:
        return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 3];
      default:
        return void 0;
    }
  };
  errorCorrectionCode.getTotalCodewordsCount = function getTotalCodewordsCount(version2, errorCorrectionLevel2) {
    switch (errorCorrectionLevel2) {
      case ECLevel$1.L:
        return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 0];
      case ECLevel$1.M:
        return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 1];
      case ECLevel$1.Q:
        return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 2];
      case ECLevel$1.H:
        return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 3];
      default:
        return void 0;
    }
  };
  var polynomial = {};
  var galoisField = {};
  const EXP_TABLE = new Uint8Array(512);
  const LOG_TABLE = new Uint8Array(256);
  (function initTables() {
    let x = 1;
    for (let i2 = 0; i2 < 255; i2++) {
      EXP_TABLE[i2] = x;
      LOG_TABLE[x] = i2;
      x <<= 1;
      if (x & 256) {
        x ^= 285;
      }
    }
    for (let i2 = 255; i2 < 512; i2++) {
      EXP_TABLE[i2] = EXP_TABLE[i2 - 255];
    }
  })();
  galoisField.log = function log(n2) {
    if (n2 < 1)
      throw new Error("log(" + n2 + ")");
    return LOG_TABLE[n2];
  };
  galoisField.exp = function exp(n2) {
    return EXP_TABLE[n2];
  };
  galoisField.mul = function mul(x, y2) {
    if (x === 0 || y2 === 0)
      return 0;
    return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y2]];
  };
  (function(exports) {
    const GF = galoisField;
    exports.mul = function mul(p1, p2) {
      const coeff = new Uint8Array(p1.length + p2.length - 1);
      for (let i2 = 0; i2 < p1.length; i2++) {
        for (let j2 = 0; j2 < p2.length; j2++) {
          coeff[i2 + j2] ^= GF.mul(p1[i2], p2[j2]);
        }
      }
      return coeff;
    };
    exports.mod = function mod(divident, divisor) {
      let result = new Uint8Array(divident);
      while (result.length - divisor.length >= 0) {
        const coeff = result[0];
        for (let i2 = 0; i2 < divisor.length; i2++) {
          result[i2] ^= GF.mul(divisor[i2], coeff);
        }
        let offset = 0;
        while (offset < result.length && result[offset] === 0)
          offset++;
        result = result.slice(offset);
      }
      return result;
    };
    exports.generateECPolynomial = function generateECPolynomial(degree) {
      let poly = new Uint8Array([1]);
      for (let i2 = 0; i2 < degree; i2++) {
        poly = exports.mul(poly, new Uint8Array([1, GF.exp(i2)]));
      }
      return poly;
    };
  })(polynomial);
  const Polynomial = polynomial;
  function ReedSolomonEncoder$1(degree) {
    this.genPoly = void 0;
    this.degree = degree;
    if (this.degree)
      this.initialize(this.degree);
  }
  ReedSolomonEncoder$1.prototype.initialize = function initialize(degree) {
    this.degree = degree;
    this.genPoly = Polynomial.generateECPolynomial(this.degree);
  };
  ReedSolomonEncoder$1.prototype.encode = function encode(data) {
    if (!this.genPoly) {
      throw new Error("Encoder not initialized");
    }
    const paddedData = new Uint8Array(data.length + this.degree);
    paddedData.set(data);
    const remainder = Polynomial.mod(paddedData, this.genPoly);
    const start = this.degree - remainder.length;
    if (start > 0) {
      const buff = new Uint8Array(this.degree);
      buff.set(remainder, start);
      return buff;
    }
    return remainder;
  };
  var reedSolomonEncoder = ReedSolomonEncoder$1;
  var version = {};
  var mode = {};
  var versionCheck = {};
  versionCheck.isValid = function isValid(version2) {
    return !isNaN(version2) && version2 >= 1 && version2 <= 40;
  };
  var regex = {};
  const numeric = "[0-9]+";
  const alphanumeric = "[A-Z $%*+\\-./:]+";
  let kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
  kanji = kanji.replace(/u/g, "\\u");
  const byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
  regex.KANJI = new RegExp(kanji, "g");
  regex.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
  regex.BYTE = new RegExp(byte, "g");
  regex.NUMERIC = new RegExp(numeric, "g");
  regex.ALPHANUMERIC = new RegExp(alphanumeric, "g");
  const TEST_KANJI = new RegExp("^" + kanji + "$");
  const TEST_NUMERIC = new RegExp("^" + numeric + "$");
  const TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
  regex.testKanji = function testKanji(str) {
    return TEST_KANJI.test(str);
  };
  regex.testNumeric = function testNumeric(str) {
    return TEST_NUMERIC.test(str);
  };
  regex.testAlphanumeric = function testAlphanumeric(str) {
    return TEST_ALPHANUMERIC.test(str);
  };
  (function(exports) {
    const VersionCheck = versionCheck;
    const Regex = regex;
    exports.NUMERIC = {
      id: "Numeric",
      bit: 1 << 0,
      ccBits: [10, 12, 14]
    };
    exports.ALPHANUMERIC = {
      id: "Alphanumeric",
      bit: 1 << 1,
      ccBits: [9, 11, 13]
    };
    exports.BYTE = {
      id: "Byte",
      bit: 1 << 2,
      ccBits: [8, 16, 16]
    };
    exports.KANJI = {
      id: "Kanji",
      bit: 1 << 3,
      ccBits: [8, 10, 12]
    };
    exports.MIXED = {
      bit: -1
    };
    exports.getCharCountIndicator = function getCharCountIndicator(mode2, version2) {
      if (!mode2.ccBits)
        throw new Error("Invalid mode: " + mode2);
      if (!VersionCheck.isValid(version2)) {
        throw new Error("Invalid version: " + version2);
      }
      if (version2 >= 1 && version2 < 10)
        return mode2.ccBits[0];
      else if (version2 < 27)
        return mode2.ccBits[1];
      return mode2.ccBits[2];
    };
    exports.getBestModeForData = function getBestModeForData(dataStr) {
      if (Regex.testNumeric(dataStr))
        return exports.NUMERIC;
      else if (Regex.testAlphanumeric(dataStr))
        return exports.ALPHANUMERIC;
      else if (Regex.testKanji(dataStr))
        return exports.KANJI;
      else
        return exports.BYTE;
    };
    exports.toString = function toString(mode2) {
      if (mode2 && mode2.id)
        return mode2.id;
      throw new Error("Invalid mode");
    };
    exports.isValid = function isValid(mode2) {
      return mode2 && mode2.bit && mode2.ccBits;
    };
    function fromString(string) {
      if (typeof string !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string.toLowerCase();
      switch (lcStr) {
        case "numeric":
          return exports.NUMERIC;
        case "alphanumeric":
          return exports.ALPHANUMERIC;
        case "kanji":
          return exports.KANJI;
        case "byte":
          return exports.BYTE;
        default:
          throw new Error("Unknown mode: " + string);
      }
    }
    exports.from = function from(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString(value);
      } catch (e2) {
        return defaultValue;
      }
    };
  })(mode);
  (function(exports) {
    const Utils2 = utils$1;
    const ECCode2 = errorCorrectionCode;
    const ECLevel2 = errorCorrectionLevel;
    const Mode2 = mode;
    const VersionCheck = versionCheck;
    const G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
    const G18_BCH = Utils2.getBCHDigit(G18);
    function getBestVersionForDataLength(mode2, length, errorCorrectionLevel2) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel2, mode2)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    function getReservedBitsCount(mode2, version2) {
      return Mode2.getCharCountIndicator(mode2, version2) + 4;
    }
    function getTotalBitsFromDataArray(segments2, version2) {
      let totalBits = 0;
      segments2.forEach(function(data) {
        const reservedBits = getReservedBitsCount(data.mode, version2);
        totalBits += reservedBits + data.getBitsLength();
      });
      return totalBits;
    }
    function getBestVersionForMixedData(segments2, errorCorrectionLevel2) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        const length = getTotalBitsFromDataArray(segments2, currentVersion);
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel2, Mode2.MIXED)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    exports.from = function from(value, defaultValue) {
      if (VersionCheck.isValid(value)) {
        return parseInt(value, 10);
      }
      return defaultValue;
    };
    exports.getCapacity = function getCapacity(version2, errorCorrectionLevel2, mode2) {
      if (!VersionCheck.isValid(version2)) {
        throw new Error("Invalid QR Code version");
      }
      if (typeof mode2 === "undefined")
        mode2 = Mode2.BYTE;
      const totalCodewords = Utils2.getSymbolTotalCodewords(version2);
      const ecTotalCodewords = ECCode2.getTotalCodewordsCount(version2, errorCorrectionLevel2);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (mode2 === Mode2.MIXED)
        return dataTotalCodewordsBits;
      const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode2, version2);
      switch (mode2) {
        case Mode2.NUMERIC:
          return Math.floor(usableBits / 10 * 3);
        case Mode2.ALPHANUMERIC:
          return Math.floor(usableBits / 11 * 2);
        case Mode2.KANJI:
          return Math.floor(usableBits / 13);
        case Mode2.BYTE:
        default:
          return Math.floor(usableBits / 8);
      }
    };
    exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel2) {
      let seg;
      const ecl = ECLevel2.from(errorCorrectionLevel2, ECLevel2.M);
      if (Array.isArray(data)) {
        if (data.length > 1) {
          return getBestVersionForMixedData(data, ecl);
        }
        if (data.length === 0) {
          return 1;
        }
        seg = data[0];
      } else {
        seg = data;
      }
      return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
    };
    exports.getEncodedBits = function getEncodedBits(version2) {
      if (!VersionCheck.isValid(version2) || version2 < 7) {
        throw new Error("Invalid QR Code version");
      }
      let d2 = version2 << 12;
      while (Utils2.getBCHDigit(d2) - G18_BCH >= 0) {
        d2 ^= G18 << Utils2.getBCHDigit(d2) - G18_BCH;
      }
      return version2 << 12 | d2;
    };
  })(version);
  var formatInfo = {};
  const Utils$3 = utils$1;
  const G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
  const G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
  const G15_BCH = Utils$3.getBCHDigit(G15);
  formatInfo.getEncodedBits = function getEncodedBits(errorCorrectionLevel2, mask) {
    const data = errorCorrectionLevel2.bit << 3 | mask;
    let d2 = data << 10;
    while (Utils$3.getBCHDigit(d2) - G15_BCH >= 0) {
      d2 ^= G15 << Utils$3.getBCHDigit(d2) - G15_BCH;
    }
    return (data << 10 | d2) ^ G15_MASK;
  };
  var segments = {};
  const Mode$4 = mode;
  function NumericData(data) {
    this.mode = Mode$4.NUMERIC;
    this.data = data.toString();
  }
  NumericData.getBitsLength = function getBitsLength(length) {
    return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
  };
  NumericData.prototype.getLength = function getLength() {
    return this.data.length;
  };
  NumericData.prototype.getBitsLength = function getBitsLength() {
    return NumericData.getBitsLength(this.data.length);
  };
  NumericData.prototype.write = function write(bitBuffer2) {
    let i2, group, value;
    for (i2 = 0; i2 + 3 <= this.data.length; i2 += 3) {
      group = this.data.substr(i2, 3);
      value = parseInt(group, 10);
      bitBuffer2.put(value, 10);
    }
    const remainingNum = this.data.length - i2;
    if (remainingNum > 0) {
      group = this.data.substr(i2);
      value = parseInt(group, 10);
      bitBuffer2.put(value, remainingNum * 3 + 1);
    }
  };
  var numericData = NumericData;
  const Mode$3 = mode;
  const ALPHA_NUM_CHARS = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
    "$",
    "%",
    "*",
    "+",
    "-",
    ".",
    "/",
    ":"
  ];
  function AlphanumericData(data) {
    this.mode = Mode$3.ALPHANUMERIC;
    this.data = data;
  }
  AlphanumericData.getBitsLength = function getBitsLength(length) {
    return 11 * Math.floor(length / 2) + 6 * (length % 2);
  };
  AlphanumericData.prototype.getLength = function getLength() {
    return this.data.length;
  };
  AlphanumericData.prototype.getBitsLength = function getBitsLength() {
    return AlphanumericData.getBitsLength(this.data.length);
  };
  AlphanumericData.prototype.write = function write(bitBuffer2) {
    let i2;
    for (i2 = 0; i2 + 2 <= this.data.length; i2 += 2) {
      let value = ALPHA_NUM_CHARS.indexOf(this.data[i2]) * 45;
      value += ALPHA_NUM_CHARS.indexOf(this.data[i2 + 1]);
      bitBuffer2.put(value, 11);
    }
    if (this.data.length % 2) {
      bitBuffer2.put(ALPHA_NUM_CHARS.indexOf(this.data[i2]), 6);
    }
  };
  var alphanumericData = AlphanumericData;
  const Mode$2 = mode;
  function ByteData(data) {
    this.mode = Mode$2.BYTE;
    if (typeof data === "string") {
      this.data = new TextEncoder().encode(data);
    } else {
      this.data = new Uint8Array(data);
    }
  }
  ByteData.getBitsLength = function getBitsLength(length) {
    return length * 8;
  };
  ByteData.prototype.getLength = function getLength() {
    return this.data.length;
  };
  ByteData.prototype.getBitsLength = function getBitsLength() {
    return ByteData.getBitsLength(this.data.length);
  };
  ByteData.prototype.write = function(bitBuffer2) {
    for (let i2 = 0, l2 = this.data.length; i2 < l2; i2++) {
      bitBuffer2.put(this.data[i2], 8);
    }
  };
  var byteData = ByteData;
  const Mode$1 = mode;
  const Utils$2 = utils$1;
  function KanjiData(data) {
    this.mode = Mode$1.KANJI;
    this.data = data;
  }
  KanjiData.getBitsLength = function getBitsLength(length) {
    return length * 13;
  };
  KanjiData.prototype.getLength = function getLength() {
    return this.data.length;
  };
  KanjiData.prototype.getBitsLength = function getBitsLength() {
    return KanjiData.getBitsLength(this.data.length);
  };
  KanjiData.prototype.write = function(bitBuffer2) {
    let i2;
    for (i2 = 0; i2 < this.data.length; i2++) {
      let value = Utils$2.toSJIS(this.data[i2]);
      if (value >= 33088 && value <= 40956) {
        value -= 33088;
      } else if (value >= 57408 && value <= 60351) {
        value -= 49472;
      } else {
        throw new Error(
          "Invalid SJIS character: " + this.data[i2] + "\nMake sure your charset is UTF-8"
        );
      }
      value = (value >>> 8 & 255) * 192 + (value & 255);
      bitBuffer2.put(value, 13);
    }
  };
  var kanjiData = KanjiData;
  var dijkstra = { exports: {} };
  (function(module) {
    var dijkstra2 = {
      single_source_shortest_paths: function(graph, s2, d2) {
        var predecessors = {};
        var costs = {};
        costs[s2] = 0;
        var open2 = dijkstra2.PriorityQueue.make();
        open2.push(s2, 0);
        var closest, u2, v2, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
        while (!open2.empty()) {
          closest = open2.pop();
          u2 = closest.value;
          cost_of_s_to_u = closest.cost;
          adjacent_nodes = graph[u2] || {};
          for (v2 in adjacent_nodes) {
            if (adjacent_nodes.hasOwnProperty(v2)) {
              cost_of_e = adjacent_nodes[v2];
              cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
              cost_of_s_to_v = costs[v2];
              first_visit = typeof costs[v2] === "undefined";
              if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                costs[v2] = cost_of_s_to_u_plus_cost_of_e;
                open2.push(v2, cost_of_s_to_u_plus_cost_of_e);
                predecessors[v2] = u2;
              }
            }
          }
        }
        if (typeof d2 !== "undefined" && typeof costs[d2] === "undefined") {
          var msg = ["Could not find a path from ", s2, " to ", d2, "."].join("");
          throw new Error(msg);
        }
        return predecessors;
      },
      extract_shortest_path_from_predecessor_list: function(predecessors, d2) {
        var nodes = [];
        var u2 = d2;
        while (u2) {
          nodes.push(u2);
          predecessors[u2];
          u2 = predecessors[u2];
        }
        nodes.reverse();
        return nodes;
      },
      find_path: function(graph, s2, d2) {
        var predecessors = dijkstra2.single_source_shortest_paths(graph, s2, d2);
        return dijkstra2.extract_shortest_path_from_predecessor_list(
          predecessors,
          d2
        );
      },
      /**
       * A very naive priority queue implementation.
       */
      PriorityQueue: {
        make: function(opts) {
          var T2 = dijkstra2.PriorityQueue, t2 = {}, key;
          opts = opts || {};
          for (key in T2) {
            if (T2.hasOwnProperty(key)) {
              t2[key] = T2[key];
            }
          }
          t2.queue = [];
          t2.sorter = opts.sorter || T2.default_sorter;
          return t2;
        },
        default_sorter: function(a2, b2) {
          return a2.cost - b2.cost;
        },
        /**
         * Add a new item to the queue and ensure the highest priority element
         * is at the front of the queue.
         */
        push: function(value, cost) {
          var item = { value, cost };
          this.queue.push(item);
          this.queue.sort(this.sorter);
        },
        /**
         * Return the highest priority element in the queue.
         */
        pop: function() {
          return this.queue.shift();
        },
        empty: function() {
          return this.queue.length === 0;
        }
      }
    };
    {
      module.exports = dijkstra2;
    }
  })(dijkstra);
  var dijkstraExports = dijkstra.exports;
  (function(exports) {
    const Mode2 = mode;
    const NumericData2 = numericData;
    const AlphanumericData2 = alphanumericData;
    const ByteData2 = byteData;
    const KanjiData2 = kanjiData;
    const Regex = regex;
    const Utils2 = utils$1;
    const dijkstra2 = dijkstraExports;
    function getStringByteLength(str) {
      return unescape(encodeURIComponent(str)).length;
    }
    function getSegments(regex2, mode2, str) {
      const segments2 = [];
      let result;
      while ((result = regex2.exec(str)) !== null) {
        segments2.push({
          data: result[0],
          index: result.index,
          mode: mode2,
          length: result[0].length
        });
      }
      return segments2;
    }
    function getSegmentsFromString(dataStr) {
      const numSegs = getSegments(Regex.NUMERIC, Mode2.NUMERIC, dataStr);
      const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode2.ALPHANUMERIC, dataStr);
      let byteSegs;
      let kanjiSegs;
      if (Utils2.isKanjiModeEnabled()) {
        byteSegs = getSegments(Regex.BYTE, Mode2.BYTE, dataStr);
        kanjiSegs = getSegments(Regex.KANJI, Mode2.KANJI, dataStr);
      } else {
        byteSegs = getSegments(Regex.BYTE_KANJI, Mode2.BYTE, dataStr);
        kanjiSegs = [];
      }
      const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
      return segs.sort(function(s1, s2) {
        return s1.index - s2.index;
      }).map(function(obj) {
        return {
          data: obj.data,
          mode: obj.mode,
          length: obj.length
        };
      });
    }
    function getSegmentBitsLength(length, mode2) {
      switch (mode2) {
        case Mode2.NUMERIC:
          return NumericData2.getBitsLength(length);
        case Mode2.ALPHANUMERIC:
          return AlphanumericData2.getBitsLength(length);
        case Mode2.KANJI:
          return KanjiData2.getBitsLength(length);
        case Mode2.BYTE:
          return ByteData2.getBitsLength(length);
      }
    }
    function mergeSegments(segs) {
      return segs.reduce(function(acc, curr) {
        const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
        if (prevSeg && prevSeg.mode === curr.mode) {
          acc[acc.length - 1].data += curr.data;
          return acc;
        }
        acc.push(curr);
        return acc;
      }, []);
    }
    function buildNodes(segs) {
      const nodes = [];
      for (let i2 = 0; i2 < segs.length; i2++) {
        const seg = segs[i2];
        switch (seg.mode) {
          case Mode2.NUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode2.ALPHANUMERIC, length: seg.length },
              { data: seg.data, mode: Mode2.BYTE, length: seg.length }
            ]);
            break;
          case Mode2.ALPHANUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode2.BYTE, length: seg.length }
            ]);
            break;
          case Mode2.KANJI:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode2.BYTE, length: getStringByteLength(seg.data) }
            ]);
            break;
          case Mode2.BYTE:
            nodes.push([
              { data: seg.data, mode: Mode2.BYTE, length: getStringByteLength(seg.data) }
            ]);
        }
      }
      return nodes;
    }
    function buildGraph(nodes, version2) {
      const table = {};
      const graph = { start: {} };
      let prevNodeIds = ["start"];
      for (let i2 = 0; i2 < nodes.length; i2++) {
        const nodeGroup = nodes[i2];
        const currentNodeIds = [];
        for (let j2 = 0; j2 < nodeGroup.length; j2++) {
          const node = nodeGroup[j2];
          const key = "" + i2 + j2;
          currentNodeIds.push(key);
          table[key] = { node, lastCount: 0 };
          graph[key] = {};
          for (let n2 = 0; n2 < prevNodeIds.length; n2++) {
            const prevNodeId = prevNodeIds[n2];
            if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
              graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
              table[prevNodeId].lastCount += node.length;
            } else {
              if (table[prevNodeId])
                table[prevNodeId].lastCount = node.length;
              graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode2.getCharCountIndicator(node.mode, version2);
            }
          }
        }
        prevNodeIds = currentNodeIds;
      }
      for (let n2 = 0; n2 < prevNodeIds.length; n2++) {
        graph[prevNodeIds[n2]].end = 0;
      }
      return { map: graph, table };
    }
    function buildSingleSegment(data, modesHint) {
      let mode2;
      const bestMode = Mode2.getBestModeForData(data);
      mode2 = Mode2.from(modesHint, bestMode);
      if (mode2 !== Mode2.BYTE && mode2.bit < bestMode.bit) {
        throw new Error('"' + data + '" cannot be encoded with mode ' + Mode2.toString(mode2) + ".\n Suggested mode is: " + Mode2.toString(bestMode));
      }
      if (mode2 === Mode2.KANJI && !Utils2.isKanjiModeEnabled()) {
        mode2 = Mode2.BYTE;
      }
      switch (mode2) {
        case Mode2.NUMERIC:
          return new NumericData2(data);
        case Mode2.ALPHANUMERIC:
          return new AlphanumericData2(data);
        case Mode2.KANJI:
          return new KanjiData2(data);
        case Mode2.BYTE:
          return new ByteData2(data);
      }
    }
    exports.fromArray = function fromArray(array) {
      return array.reduce(function(acc, seg) {
        if (typeof seg === "string") {
          acc.push(buildSingleSegment(seg, null));
        } else if (seg.data) {
          acc.push(buildSingleSegment(seg.data, seg.mode));
        }
        return acc;
      }, []);
    };
    exports.fromString = function fromString(data, version2) {
      const segs = getSegmentsFromString(data, Utils2.isKanjiModeEnabled());
      const nodes = buildNodes(segs);
      const graph = buildGraph(nodes, version2);
      const path = dijkstra2.find_path(graph.map, "start", "end");
      const optimizedSegs = [];
      for (let i2 = 1; i2 < path.length - 1; i2++) {
        optimizedSegs.push(graph.table[path[i2]].node);
      }
      return exports.fromArray(mergeSegments(optimizedSegs));
    };
    exports.rawSplit = function rawSplit(data) {
      return exports.fromArray(
        getSegmentsFromString(data, Utils2.isKanjiModeEnabled())
      );
    };
  })(segments);
  const Utils$1 = utils$1;
  const ECLevel = errorCorrectionLevel;
  const BitBuffer = bitBuffer;
  const BitMatrix = bitMatrix;
  const AlignmentPattern = alignmentPattern;
  const FinderPattern = finderPattern;
  const MaskPattern = maskPattern;
  const ECCode = errorCorrectionCode;
  const ReedSolomonEncoder = reedSolomonEncoder;
  const Version = version;
  const FormatInfo = formatInfo;
  const Mode = mode;
  const Segments = segments;
  function setupFinderPattern(matrix, version2) {
    const size = matrix.size;
    const pos = FinderPattern.getPositions(version2);
    for (let i2 = 0; i2 < pos.length; i2++) {
      const row = pos[i2][0];
      const col = pos[i2][1];
      for (let r2 = -1; r2 <= 7; r2++) {
        if (row + r2 <= -1 || size <= row + r2)
          continue;
        for (let c2 = -1; c2 <= 7; c2++) {
          if (col + c2 <= -1 || size <= col + c2)
            continue;
          if (r2 >= 0 && r2 <= 6 && (c2 === 0 || c2 === 6) || c2 >= 0 && c2 <= 6 && (r2 === 0 || r2 === 6) || r2 >= 2 && r2 <= 4 && c2 >= 2 && c2 <= 4) {
            matrix.set(row + r2, col + c2, true, true);
          } else {
            matrix.set(row + r2, col + c2, false, true);
          }
        }
      }
    }
  }
  function setupTimingPattern(matrix) {
    const size = matrix.size;
    for (let r2 = 8; r2 < size - 8; r2++) {
      const value = r2 % 2 === 0;
      matrix.set(r2, 6, value, true);
      matrix.set(6, r2, value, true);
    }
  }
  function setupAlignmentPattern(matrix, version2) {
    const pos = AlignmentPattern.getPositions(version2);
    for (let i2 = 0; i2 < pos.length; i2++) {
      const row = pos[i2][0];
      const col = pos[i2][1];
      for (let r2 = -2; r2 <= 2; r2++) {
        for (let c2 = -2; c2 <= 2; c2++) {
          if (r2 === -2 || r2 === 2 || c2 === -2 || c2 === 2 || r2 === 0 && c2 === 0) {
            matrix.set(row + r2, col + c2, true, true);
          } else {
            matrix.set(row + r2, col + c2, false, true);
          }
        }
      }
    }
  }
  function setupVersionInfo(matrix, version2) {
    const size = matrix.size;
    const bits = Version.getEncodedBits(version2);
    let row, col, mod;
    for (let i2 = 0; i2 < 18; i2++) {
      row = Math.floor(i2 / 3);
      col = i2 % 3 + size - 8 - 3;
      mod = (bits >> i2 & 1) === 1;
      matrix.set(row, col, mod, true);
      matrix.set(col, row, mod, true);
    }
  }
  function setupFormatInfo(matrix, errorCorrectionLevel2, maskPattern2) {
    const size = matrix.size;
    const bits = FormatInfo.getEncodedBits(errorCorrectionLevel2, maskPattern2);
    let i2, mod;
    for (i2 = 0; i2 < 15; i2++) {
      mod = (bits >> i2 & 1) === 1;
      if (i2 < 6) {
        matrix.set(i2, 8, mod, true);
      } else if (i2 < 8) {
        matrix.set(i2 + 1, 8, mod, true);
      } else {
        matrix.set(size - 15 + i2, 8, mod, true);
      }
      if (i2 < 8) {
        matrix.set(8, size - i2 - 1, mod, true);
      } else if (i2 < 9) {
        matrix.set(8, 15 - i2 - 1 + 1, mod, true);
      } else {
        matrix.set(8, 15 - i2 - 1, mod, true);
      }
    }
    matrix.set(size - 8, 8, 1, true);
  }
  function setupData(matrix, data) {
    const size = matrix.size;
    let inc = -1;
    let row = size - 1;
    let bitIndex = 7;
    let byteIndex = 0;
    for (let col = size - 1; col > 0; col -= 2) {
      if (col === 6)
        col--;
      while (true) {
        for (let c2 = 0; c2 < 2; c2++) {
          if (!matrix.isReserved(row, col - c2)) {
            let dark = false;
            if (byteIndex < data.length) {
              dark = (data[byteIndex] >>> bitIndex & 1) === 1;
            }
            matrix.set(row, col - c2, dark);
            bitIndex--;
            if (bitIndex === -1) {
              byteIndex++;
              bitIndex = 7;
            }
          }
        }
        row += inc;
        if (row < 0 || size <= row) {
          row -= inc;
          inc = -inc;
          break;
        }
      }
    }
  }
  function createData(version2, errorCorrectionLevel2, segments2) {
    const buffer = new BitBuffer();
    segments2.forEach(function(data) {
      buffer.put(data.mode.bit, 4);
      buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version2));
      data.write(buffer);
    });
    const totalCodewords = Utils$1.getSymbolTotalCodewords(version2);
    const ecTotalCodewords = ECCode.getTotalCodewordsCount(version2, errorCorrectionLevel2);
    const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
      buffer.put(0, 4);
    }
    while (buffer.getLengthInBits() % 8 !== 0) {
      buffer.putBit(0);
    }
    const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
    for (let i2 = 0; i2 < remainingByte; i2++) {
      buffer.put(i2 % 2 ? 17 : 236, 8);
    }
    return createCodewords(buffer, version2, errorCorrectionLevel2);
  }
  function createCodewords(bitBuffer2, version2, errorCorrectionLevel2) {
    const totalCodewords = Utils$1.getSymbolTotalCodewords(version2);
    const ecTotalCodewords = ECCode.getTotalCodewordsCount(version2, errorCorrectionLevel2);
    const dataTotalCodewords = totalCodewords - ecTotalCodewords;
    const ecTotalBlocks = ECCode.getBlocksCount(version2, errorCorrectionLevel2);
    const blocksInGroup2 = totalCodewords % ecTotalBlocks;
    const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
    const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
    const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
    const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
    const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
    const rs2 = new ReedSolomonEncoder(ecCount);
    let offset = 0;
    const dcData = new Array(ecTotalBlocks);
    const ecData = new Array(ecTotalBlocks);
    let maxDataSize = 0;
    const buffer = new Uint8Array(bitBuffer2.buffer);
    for (let b2 = 0; b2 < ecTotalBlocks; b2++) {
      const dataSize = b2 < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
      dcData[b2] = buffer.slice(offset, offset + dataSize);
      ecData[b2] = rs2.encode(dcData[b2]);
      offset += dataSize;
      maxDataSize = Math.max(maxDataSize, dataSize);
    }
    const data = new Uint8Array(totalCodewords);
    let index = 0;
    let i2, r2;
    for (i2 = 0; i2 < maxDataSize; i2++) {
      for (r2 = 0; r2 < ecTotalBlocks; r2++) {
        if (i2 < dcData[r2].length) {
          data[index++] = dcData[r2][i2];
        }
      }
    }
    for (i2 = 0; i2 < ecCount; i2++) {
      for (r2 = 0; r2 < ecTotalBlocks; r2++) {
        data[index++] = ecData[r2][i2];
      }
    }
    return data;
  }
  function createSymbol(data, version2, errorCorrectionLevel2, maskPattern2) {
    let segments2;
    if (Array.isArray(data)) {
      segments2 = Segments.fromArray(data);
    } else if (typeof data === "string") {
      let estimatedVersion = version2;
      if (!estimatedVersion) {
        const rawSegments = Segments.rawSplit(data);
        estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel2);
      }
      segments2 = Segments.fromString(data, estimatedVersion || 40);
    } else {
      throw new Error("Invalid data");
    }
    const bestVersion = Version.getBestVersionForData(segments2, errorCorrectionLevel2);
    if (!bestVersion) {
      throw new Error("The amount of data is too big to be stored in a QR Code");
    }
    if (!version2) {
      version2 = bestVersion;
    } else if (version2 < bestVersion) {
      throw new Error(
        "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n"
      );
    }
    const dataBits = createData(version2, errorCorrectionLevel2, segments2);
    const moduleCount = Utils$1.getSymbolSize(version2);
    const modules = new BitMatrix(moduleCount);
    setupFinderPattern(modules, version2);
    setupTimingPattern(modules);
    setupAlignmentPattern(modules, version2);
    setupFormatInfo(modules, errorCorrectionLevel2, 0);
    if (version2 >= 7) {
      setupVersionInfo(modules, version2);
    }
    setupData(modules, dataBits);
    if (isNaN(maskPattern2)) {
      maskPattern2 = MaskPattern.getBestMask(
        modules,
        setupFormatInfo.bind(null, modules, errorCorrectionLevel2)
      );
    }
    MaskPattern.applyMask(maskPattern2, modules);
    setupFormatInfo(modules, errorCorrectionLevel2, maskPattern2);
    return {
      modules,
      version: version2,
      errorCorrectionLevel: errorCorrectionLevel2,
      maskPattern: maskPattern2,
      segments: segments2
    };
  }
  qrcode.create = function create(data, options) {
    if (typeof data === "undefined" || data === "") {
      throw new Error("No input text");
    }
    let errorCorrectionLevel2 = ECLevel.M;
    let version2;
    let mask;
    if (typeof options !== "undefined") {
      errorCorrectionLevel2 = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
      version2 = Version.from(options.version);
      mask = MaskPattern.from(options.maskPattern);
      if (options.toSJISFunc) {
        Utils$1.setToSJISFunction(options.toSJISFunc);
      }
    }
    return createSymbol(data, version2, errorCorrectionLevel2, mask);
  };
  var canvas = {};
  var utils = {};
  (function(exports) {
    function hex2rgba(hex) {
      if (typeof hex === "number") {
        hex = hex.toString();
      }
      if (typeof hex !== "string") {
        throw new Error("Color should be defined as hex string");
      }
      let hexCode = hex.slice().replace("#", "").split("");
      if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
        throw new Error("Invalid hex color: " + hex);
      }
      if (hexCode.length === 3 || hexCode.length === 4) {
        hexCode = Array.prototype.concat.apply([], hexCode.map(function(c2) {
          return [c2, c2];
        }));
      }
      if (hexCode.length === 6)
        hexCode.push("F", "F");
      const hexValue = parseInt(hexCode.join(""), 16);
      return {
        r: hexValue >> 24 & 255,
        g: hexValue >> 16 & 255,
        b: hexValue >> 8 & 255,
        a: hexValue & 255,
        hex: "#" + hexCode.slice(0, 6).join("")
      };
    }
    exports.getOptions = function getOptions(options) {
      if (!options)
        options = {};
      if (!options.color)
        options.color = {};
      const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
      const width = options.width && options.width >= 21 ? options.width : void 0;
      const scale = options.scale || 4;
      return {
        width,
        scale: width ? 4 : scale,
        margin,
        color: {
          dark: hex2rgba(options.color.dark || "#000000ff"),
          light: hex2rgba(options.color.light || "#ffffffff")
        },
        type: options.type,
        rendererOpts: options.rendererOpts || {}
      };
    };
    exports.getScale = function getScale(qrSize, opts) {
      return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
    };
    exports.getImageWidth = function getImageWidth(qrSize, opts) {
      const scale = exports.getScale(qrSize, opts);
      return Math.floor((qrSize + opts.margin * 2) * scale);
    };
    exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
      const size = qr.modules.size;
      const data = qr.modules.data;
      const scale = exports.getScale(size, opts);
      const symbolSize = Math.floor((size + opts.margin * 2) * scale);
      const scaledMargin = opts.margin * scale;
      const palette = [opts.color.light, opts.color.dark];
      for (let i2 = 0; i2 < symbolSize; i2++) {
        for (let j2 = 0; j2 < symbolSize; j2++) {
          let posDst = (i2 * symbolSize + j2) * 4;
          let pxColor = opts.color.light;
          if (i2 >= scaledMargin && j2 >= scaledMargin && i2 < symbolSize - scaledMargin && j2 < symbolSize - scaledMargin) {
            const iSrc = Math.floor((i2 - scaledMargin) / scale);
            const jSrc = Math.floor((j2 - scaledMargin) / scale);
            pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
          }
          imgData[posDst++] = pxColor.r;
          imgData[posDst++] = pxColor.g;
          imgData[posDst++] = pxColor.b;
          imgData[posDst] = pxColor.a;
        }
      }
    };
  })(utils);
  (function(exports) {
    const Utils2 = utils;
    function clearCanvas(ctx, canvas2, size) {
      ctx.clearRect(0, 0, canvas2.width, canvas2.height);
      if (!canvas2.style)
        canvas2.style = {};
      canvas2.height = size;
      canvas2.width = size;
      canvas2.style.height = size + "px";
      canvas2.style.width = size + "px";
    }
    function getCanvasElement() {
      try {
        return document.createElement("canvas");
      } catch (e2) {
        throw new Error("You need to specify a canvas element");
      }
    }
    exports.render = function render(qrData, canvas2, options) {
      let opts = options;
      let canvasEl = canvas2;
      if (typeof opts === "undefined" && (!canvas2 || !canvas2.getContext)) {
        opts = canvas2;
        canvas2 = void 0;
      }
      if (!canvas2) {
        canvasEl = getCanvasElement();
      }
      opts = Utils2.getOptions(opts);
      const size = Utils2.getImageWidth(qrData.modules.size, opts);
      const ctx = canvasEl.getContext("2d");
      const image = ctx.createImageData(size, size);
      Utils2.qrToImageData(image.data, qrData, opts);
      clearCanvas(ctx, canvasEl, size);
      ctx.putImageData(image, 0, 0);
      return canvasEl;
    };
    exports.renderToDataURL = function renderToDataURL(qrData, canvas2, options) {
      let opts = options;
      if (typeof opts === "undefined" && (!canvas2 || !canvas2.getContext)) {
        opts = canvas2;
        canvas2 = void 0;
      }
      if (!opts)
        opts = {};
      const canvasEl = exports.render(qrData, canvas2, opts);
      const type = opts.type || "image/png";
      const rendererOpts = opts.rendererOpts || {};
      return canvasEl.toDataURL(type, rendererOpts.quality);
    };
  })(canvas);
  var svgTag = {};
  const Utils = utils;
  function getColorAttrib(color, attrib) {
    const alpha = color.a / 255;
    const str = attrib + '="' + color.hex + '"';
    return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
  }
  function svgCmd(cmd, x, y2) {
    let str = cmd + x;
    if (typeof y2 !== "undefined")
      str += " " + y2;
    return str;
  }
  function qrToPath(data, size, margin) {
    let path = "";
    let moveBy = 0;
    let newRow = false;
    let lineLength = 0;
    for (let i2 = 0; i2 < data.length; i2++) {
      const col = Math.floor(i2 % size);
      const row = Math.floor(i2 / size);
      if (!col && !newRow)
        newRow = true;
      if (data[i2]) {
        lineLength++;
        if (!(i2 > 0 && col > 0 && data[i2 - 1])) {
          path += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
          moveBy = 0;
          newRow = false;
        }
        if (!(col + 1 < size && data[i2 + 1])) {
          path += svgCmd("h", lineLength);
          lineLength = 0;
        }
      } else {
        moveBy++;
      }
    }
    return path;
  }
  svgTag.render = function render(qrData, options, cb) {
    const opts = Utils.getOptions(options);
    const size = qrData.modules.size;
    const data = qrData.modules.data;
    const qrcodesize = size + opts.margin * 2;
    const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
    const path = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
    const viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
    const width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
    const svgTag2 = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + "</svg>\n";
    if (typeof cb === "function") {
      cb(null, svgTag2);
    }
    return svgTag2;
  };
  const canPromise = canPromise$1;
  const QRCode = qrcode;
  const CanvasRenderer = canvas;
  const SvgRenderer = svgTag;
  function renderCanvas(renderFunc, canvas2, text, opts, cb) {
    const args = [].slice.call(arguments, 1);
    const argsNum = args.length;
    const isLastArgCb = typeof args[argsNum - 1] === "function";
    if (!isLastArgCb && !canPromise()) {
      throw new Error("Callback required as last argument");
    }
    if (isLastArgCb) {
      if (argsNum < 2) {
        throw new Error("Too few arguments provided");
      }
      if (argsNum === 2) {
        cb = text;
        text = canvas2;
        canvas2 = opts = void 0;
      } else if (argsNum === 3) {
        if (canvas2.getContext && typeof cb === "undefined") {
          cb = opts;
          opts = void 0;
        } else {
          cb = opts;
          opts = text;
          text = canvas2;
          canvas2 = void 0;
        }
      }
    } else {
      if (argsNum < 1) {
        throw new Error("Too few arguments provided");
      }
      if (argsNum === 1) {
        text = canvas2;
        canvas2 = opts = void 0;
      } else if (argsNum === 2 && !canvas2.getContext) {
        opts = text;
        text = canvas2;
        canvas2 = void 0;
      }
      return new Promise(function(resolve, reject) {
        try {
          const data = QRCode.create(text, opts);
          resolve(renderFunc(data, canvas2, opts));
        } catch (e2) {
          reject(e2);
        }
      });
    }
    try {
      const data = QRCode.create(text, opts);
      cb(null, renderFunc(data, canvas2, opts));
    } catch (e2) {
      cb(e2);
    }
  }
  browser.create = QRCode.create;
  browser.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
  browser.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
  browser.toString = renderCanvas.bind(null, function(data, _2, opts) {
    return SvgRenderer.render(data, opts);
  });
  const _sfc_main$E = {
    __name: "qrcodeDetail",
    setup(__props) {
      const qrcode2 = vue.ref("");
      vue.onMounted(async () => {
        const { referral_url } = await getOfficerQRCode();
        qrcode2.value = referral_url;
        await generateQRCode(referral_url);
      });
      const qrCodeUrl = vue.ref("");
      const generateQRCode = async (url) => {
        try {
          const qrCodeDataUrl = await browser.toDataURL(url, {
            width: 200,
            // 二维码宽度
            height: 200
            // 二维码高度
          });
          qrCodeUrl.value = qrCodeDataUrl;
        } catch (err) {
          formatAppLog("error", "at pages/recommend/qrcodeDetail.vue:35", "二维码生成失败:", err);
        }
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
          vue.createVNode(_component_navBar, { title: "推荐官二维码" }),
          vue.createElementVNode("div", { class: "content" }, [
            qrCodeUrl.value ? (vue.openBlock(), vue.createElementBlock("img", {
              key: 0,
              class: "img",
              src: qrCodeUrl.value,
              alt: "QR Code"
            }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true)
          ])
        ]);
      };
    }
  };
  const PagesRecommendQrcodeDetail = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["__scopeId", "data-v-49865422"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/recommend/qrcodeDetail.vue"]]);
  const _sfc_main$D = {
    __name: "shopList",
    props: {
      sort: {
        type: String,
        default: "asc"
      },
      shopType: {
        type: Number,
        default: -1
      }
    },
    setup(__props) {
      const props = __props;
      const publicStore = usePublicStore();
      vue.onMounted(async () => {
      });
      const curShopList = vue.computed(() => {
        if (props.sort == "desc") {
          return publicStore.descShopList;
        } else {
          return publicStore.ascShopList;
        }
      });
      const filterShopsByCategoryId = (shops, categoryId) => {
        if (categoryId == -1) {
          return shops;
        }
        return shops.filter((shop) => {
          return shop.categories.some((category) => category.id == categoryId);
        });
      };
      const seletedShop = vue.computed(() => {
        return filterShopsByCategoryId(curShopList.value, props.shopType);
      });
      const toDetail = () => {
        uni.navigateTo({
          url: "/pages/merchant/merchant_detail"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createElementVNode("view", { class: "shop_list" }, [
            vue.unref(publicStore).storeList.length !== 0 ? (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              { key: 0 },
              vue.renderList(seletedShop.value, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "shop_item flex",
                  onClick: toDetail
                }, [
                  vue.createElementVNode("image", {
                    src: item.avatar,
                    mode: "aspectFill",
                    class: "shop_pic"
                  }, null, 8, ["src"]),
                  vue.createElementVNode("view", {
                    class: "",
                    style: { "flex": "1" }
                  }, [
                    vue.createElementVNode(
                      "view",
                      { class: "shop_name" },
                      vue.toDisplayString(item.name),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", { class: "pic_box flex" }, [
                      (vue.openBlock(), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(5, (star, i2) => {
                          return vue.createElementVNode("image", {
                            src: _imports_0$b,
                            mode: "widthFix",
                            class: "star_pic",
                            key: i2
                          });
                        }),
                        64
                        /* STABLE_FRAGMENT */
                      )),
                      vue.createElementVNode("view", { class: "point" }, " 5 ")
                    ]),
                    vue.createElementVNode("view", { class: "flex" }, [
                      vue.createElementVNode("image", {
                        src: _imports_1$7,
                        mode: "widthFix",
                        class: "location_pic"
                      }),
                      vue.createElementVNode(
                        "view",
                        { class: "district" },
                        vue.toDisplayString(item.address),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  vue.createElementVNode(
                    "view",
                    { class: "distance" },
                    vue.toDisplayString(item.distance / 1e3) + "km ",
                    1
                    /* TEXT */
                  )
                ]);
              }),
              256
              /* UNKEYED_FRAGMENT */
            )) : vue.createCommentVNode("v-if", true)
          ])
        ]);
      };
    }
  };
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__scopeId", "data-v-69f4d838"], ["__file", "/Users/daily/Desktop/d9/money_celestial/components/shopList/shopList.vue"]]);
  const _imports_0$5 = "/static/category.png";
  const _imports_1$4 = "/static/arrow-active.png";
  const _imports_2$1 = "/static/arrow-inactive.png";
  const _sfc_main$C = {
    __name: "all_merchant",
    setup(__props) {
      const publicStore = usePublicStore();
      const range = vue.computed(() => {
        return publicStore.cateGoryList.map((item) => {
          formatAppLog("log", "at pages/merchant/all_merchant.vue:54", {
            value: item.id,
            // value 为 id
            text: item.name
            // text 为 name
          });
          return {
            value: item.id,
            // value 为 id
            text: item.name
            // text 为 name
          };
        });
      });
      const categoryTextList = vue.computed(() => {
        return publicStore.cateGoryList.map((item) => {
          return item.name;
        });
      });
      const index = vue.ref(0);
      const getType = () => {
        uni.showActionSheet({
          itemList: ["全部", ...categoryTextList.value],
          success(res) {
            index.value = res.tapIndex;
          }
        });
      };
      const distance = vue.ref("asc");
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        const _component_shopList = resolveEasycom(vue.resolveDynamicComponent("shopList"), __easycom_1$1);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "全部商家" }),
          vue.createElementVNode("view", { class: "filter_list flex_between" }, [
            vue.createElementVNode("view", {
              class: "flex_center",
              onClick: getType
            }, [
              vue.createElementVNode("image", {
                src: _imports_0$5,
                mode: "widthFix",
                class: "type_pic"
              }),
              vue.createElementVNode("view", null, " 类目 ")
            ]),
            vue.createElementVNode("view", null, " 热门 "),
            vue.createElementVNode("view", null, " 好评 "),
            vue.createElementVNode("view", { class: "flex_center" }, [
              vue.createElementVNode("view", { class: "" }, " 距离 "),
              distance.value == "desc" ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "",
                onClick: _cache[0] || (_cache[0] = ($event) => distance.value = "asc")
              }, [
                vue.createElementVNode("image", {
                  src: _imports_1$4,
                  mode: "widthFix",
                  class: "arrow_fill"
                }),
                vue.createElementVNode("image", {
                  src: _imports_2$1,
                  mode: "widthFix",
                  class: "arrow_fill"
                })
              ])) : vue.createCommentVNode("v-if", true),
              distance.value == "asc" ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "",
                onClick: _cache[1] || (_cache[1] = ($event) => distance.value = "desc")
              }, [
                vue.createElementVNode("image", {
                  src: _imports_2$1,
                  mode: "widthFix",
                  class: "arrow_fill",
                  style: { "transform": "rotate(180deg)" }
                }),
                vue.createElementVNode("image", {
                  src: _imports_1$4,
                  mode: "widthFix",
                  class: "arrow_fill",
                  style: { "transform": "rotate(180deg)" }
                })
              ])) : vue.createCommentVNode("v-if", true)
            ])
          ]),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createCommentVNode(' 	<view class="settle_box flex_between">\n				<view class="c_text">\n					<text>\n						恭喜【<text class="company">佛山英朗电器有限公司</text>】成功入驻\n					</text>\n				</view>\n				<view class="s_text" @click="toSettle">\n					我要入驻\n				</view>\n			</view> '),
            vue.createVNode(_component_shopList, {
              sort: distance.value,
              shopType: index.value == 0 ? -1 : range.value[index.value - 1].value
            }, null, 8, ["sort", "shopType"])
          ])
        ]);
      };
    }
  };
  const PagesMerchantAllMerchant = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__scopeId", "data-v-2d911691"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/all_merchant.vue"]]);
  const _sfc_main$B = {
    __name: "merchant_code_authentication",
    setup(__props) {
      const address = vue.ref("");
      const isChecked = vue.ref(false);
      const confirm = () => {
        if (!isChecked.value)
          return uni.showToast({
            icon: "none",
            title: "请阅读完须知后勾选同意"
          });
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "商家码认证" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "shop_info" }, [
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 商家码地址 "),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => address.value = $event),
                    class: "uni-input",
                    placeholder: "请输入商家码地址",
                    "placeholder-class": "placeholder_class"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, address.value]
                ])
              ])
            ]),
            vue.createElementVNode("view", {
              class: "btn_full",
              onClick: confirm
            }, " 认证 ")
          ])
        ]);
      };
    }
  };
  const PagesAgentMerchantCodeAuthentication = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-954048b2"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/agent/merchant_code_authentication.vue"]]);
  const _sfc_main$A = {
    __name: "merchant_code_authentication",
    setup(__props) {
      const address = vue.ref("");
      const isChecked = vue.ref(false);
      const confirm = () => {
        if (!isChecked.value)
          return uni.showToast({
            icon: "none",
            title: "请阅读完须知后勾选同意"
          });
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "商家码认证" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "shop_info" }, [
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 商家码地址 "),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => address.value = $event),
                    class: "uni-input",
                    placeholder: "请输入商家码地址",
                    "placeholder-class": "placeholder_class"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, address.value]
                ])
              ])
            ]),
            vue.createElementVNode("view", {
              class: "btn_full",
              onClick: confirm
            }, " 认证 ")
          ])
        ]);
      };
    }
  };
  const PagesRecommendMerchantCodeAuthentication = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-c32e0b38"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/recommend/merchant_code_authentication.vue"]]);
  const _sfc_main$z = {
    __name: "security_deposit",
    setup(__props) {
      const toRecord = () => {
        uni.navigateTo({
          url: "/pages/recommend/deposit_record"
        });
      };
      const toAdd = () => {
        uni.navigateTo({
          url: "/pages/recommend/add_deposit"
        });
      };
      const toRemove = () => {
        uni.navigateTo({
          url: "/pages/recommend/remove_deposit"
        });
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "保证金" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "c_title" }, " 我的保证金 "),
            vue.createElementVNode("view", { class: "number flex_center" }, " 10,203.02 "),
            vue.createElementVNode("view", { class: "list_box" }, [
              vue.createElementVNode("view", {
                class: "list_item flex_between",
                onClick: toRecord
              }, [
                vue.createElementVNode("view", { class: "" }, " 保证金记录 "),
                vue.createElementVNode("image", {
                  src: _imports_0$a,
                  mode: "widthFix",
                  class: "arrow_pic"
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "btns flex_between" }, [
              vue.createElementVNode("view", {
                class: "add_btn flex_center",
                onClick: toAdd
              }, " 增加保证金 "),
              vue.createElementVNode("view", {
                class: "cancel_btn flex_center",
                onClick: toRemove
              }, " 解除保证金 ")
            ])
          ])
        ]);
      };
    }
  };
  const PagesRecommendSecurityDeposit = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-f039c67b"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/recommend/security_deposit.vue"]]);
  const _sfc_main$y = {
    __name: "security_deposit",
    setup(__props) {
      const toRecord = () => {
        uni.navigateTo({
          url: "/pages/agent/deposit_record"
        });
      };
      const toAdd = () => {
        uni.navigateTo({
          url: "/pages/agent/add_deposit"
        });
      };
      const toRemove = () => {
        uni.navigateTo({
          url: "/pages/agent/remove_deposit"
        });
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "保证金" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "c_title" }, " 我的保证金 "),
            vue.createElementVNode("view", { class: "number flex_center" }, " 10,203.02 "),
            vue.createElementVNode("view", { class: "list_box" }, [
              vue.createElementVNode("view", {
                class: "list_item flex_between",
                onClick: toRecord
              }, [
                vue.createElementVNode("view", { class: "" }, " 保证金记录 "),
                vue.createElementVNode("image", {
                  src: _imports_0$a,
                  mode: "widthFix",
                  class: "arrow_pic"
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "btns flex_between" }, [
              vue.createElementVNode("view", {
                class: "add_btn flex_center",
                onClick: toAdd
              }, " 增加保证金 "),
              vue.createElementVNode("view", {
                class: "cancel_btn flex_center",
                onClick: toRemove
              }, " 解除保证金 ")
            ])
          ])
        ]);
      };
    }
  };
  const PagesAgentSecurityDeposit = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-151545ee"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/agent/security_deposit.vue"]]);
  const _imports_0$4 = "/static/my/bg_my.png";
  const _imports_1$3 = "/static/my/my_credits.png";
  const _imports_2 = "/static/my/available_credits.png";
  const _imports_3$1 = "/static/my/credits_account.png";
  const _imports_5 = "/static/my/info.png";
  const _imports_6 = "/static/my/record.png";
  const _imports_7 = "/static/my/collect.png";
  const _imports_8 = "/static/my/help.png";
  const _imports_9 = "/static/my/us.png";
  const _imports_10 = "/static/my/service.png";
  const _imports_11 = "/static/my/settle.png";
  const _imports_12 = "/static/my/entrance.png";
  const _sfc_main$x = {
    __name: "myAccount",
    setup(__props) {
      useUserStore();
      const accessToken = uni.getStorageSync("accessToken");
      const ionc_url = uni.getStorageSync("userInfo").icon;
      const user_name = uni.getStorageSync("userInfo").name;
      vue.onMounted(() => {
        if (accessToken) {
          getPointInfo();
        }
      });
      const green_points = vue.ref(0);
      const red_points = vue.ref(0);
      const user = vue.ref("");
      const getPointInfo = async () => {
        const res = await getAllPoint();
        green_points.value = res.green_points;
        red_points.value = res.red_points;
        user.value = res.user;
      };
      const toLogin = () => {
        uni.navigateTo({
          url: "/pages/login/login"
        });
      };
      const toMyPoint = () => {
        uni.navigateTo({
          url: "/pages/myAccount/my_point"
        });
      };
      const toPointAvailable = () => {
        uni.navigateTo({
          url: "/pages/myAccount/point_available"
        });
      };
      const toPointAccount = () => {
        uni.navigateTo({
          url: "/pages/myAccount/point_account"
        });
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(_component_navBar, { title: "我的账户" }),
            vue.createElementVNode("view", { class: "page" }, [
              vue.createElementVNode("view", { class: "img-box" }, [
                vue.createElementVNode("image", {
                  src: _imports_0$4,
                  class: "img"
                })
              ]),
              vue.createElementVNode("view", { class: "content" }, [
                vue.createElementVNode("view", {
                  class: "profile",
                  onClick: toLogin
                }, [
                  vue.createElementVNode("view", { class: "avtar" }, [
                    vue.createElementVNode("image", {
                      class: "img",
                      src: vue.unref(ionc_url),
                      mode: ""
                    }, null, 8, ["src"])
                  ]),
                  vue.createElementVNode(
                    "view",
                    { class: "name" },
                    vue.toDisplayString(vue.unref(user_name) || "点击登录"),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "points-box" }, [
                  vue.createElementVNode("view", {
                    class: "item",
                    onClick: toMyPoint
                  }, [
                    vue.createElementVNode("image", {
                      class: "img",
                      src: _imports_1$3
                    }),
                    vue.createElementVNode("text", { class: "text" }, "我的积分"),
                    vue.createElementVNode(
                      "div",
                      { class: "text number" },
                      vue.toDisplayString(green_points.value),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", {
                    class: "item",
                    onClick: toPointAvailable
                  }, [
                    vue.createElementVNode("image", {
                      class: "img",
                      src: _imports_2
                    }),
                    vue.createElementVNode("text", { class: "text" }, "可用积分"),
                    vue.createElementVNode(
                      "div",
                      { class: "text number" },
                      vue.toDisplayString(red_points.value),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", {
                    class: "item",
                    onClick: toPointAccount
                  }, [
                    vue.createElementVNode("image", {
                      class: "img",
                      src: _imports_3$1
                    }),
                    vue.createElementVNode("text", { class: "text" }, "积分账号"),
                    vue.createElementVNode(
                      "div",
                      { class: "text number" },
                      vue.toDisplayString(user.value),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                vue.createElementVNode("view", { class: "services" }, [
                  vue.createElementVNode("view", { class: "service_title flex" }, [
                    vue.createElementVNode("image", {
                      src: _imports_0$b,
                      mode: "widthFix",
                      class: "star_pic"
                    }),
                    vue.createElementVNode("view", { class: "" }, " 我的服务 ")
                  ]),
                  vue.createElementVNode("view", { class: "service_bottom flex" }, [
                    vue.createElementVNode("view", { class: "service_item" }, [
                      vue.createElementVNode("image", {
                        src: _imports_5,
                        mode: "widthFix",
                        class: "service_pic"
                      }),
                      vue.createElementVNode("view", { class: "" }, " 我的信息 ")
                    ]),
                    vue.createElementVNode("view", { class: "service_item" }, [
                      vue.createElementVNode("image", {
                        src: _imports_6,
                        mode: "widthFix",
                        class: "service_pic"
                      }),
                      vue.createElementVNode("view", { class: "" }, " 我的记录 ")
                    ]),
                    vue.createElementVNode("view", { class: "service_item" }, [
                      vue.createElementVNode("image", {
                        src: _imports_7,
                        mode: "widthFix",
                        class: "service_pic"
                      }),
                      vue.createElementVNode("view", { class: "" }, " 我的收藏 ")
                    ])
                  ])
                ]),
                vue.createElementVNode("view", { class: "services" }, [
                  vue.createElementVNode("view", { class: "service_title flex" }, [
                    vue.createElementVNode("image", {
                      src: _imports_0$b,
                      mode: "widthFix",
                      class: "star_pic"
                    }),
                    vue.createElementVNode("view", { class: "" }, " 平台服务 ")
                  ]),
                  vue.createElementVNode("view", { class: "service_bottom flex" }, [
                    vue.createElementVNode("view", { class: "service_item" }, [
                      vue.createElementVNode("image", {
                        src: _imports_8,
                        mode: "widthFix",
                        class: "service_pic"
                      }),
                      vue.createElementVNode("view", { class: "" }, " 帮助中心 ")
                    ]),
                    vue.createElementVNode("view", { class: "service_item" }, [
                      vue.createElementVNode("image", {
                        src: _imports_9,
                        mode: "widthFix",
                        class: "service_pic"
                      }),
                      vue.createElementVNode("view", { class: "" }, " 关于我们 ")
                    ]),
                    vue.createElementVNode("view", { class: "service_item" }, [
                      vue.createElementVNode("image", {
                        src: _imports_10,
                        mode: "widthFix",
                        class: "service_pic"
                      }),
                      vue.createElementVNode("view", { class: "" }, " 联系客服 ")
                    ])
                  ])
                ]),
                vue.createElementVNode("view", { class: "services" }, [
                  vue.createElementVNode("view", { class: "service_title flex" }, [
                    vue.createElementVNode("image", {
                      src: _imports_0$b,
                      mode: "widthFix",
                      class: "star_pic"
                    }),
                    vue.createElementVNode("view", { class: "" }, " 商家服务 ")
                  ]),
                  vue.createElementVNode("view", { class: "service_bottom flex" }, [
                    vue.createElementVNode("view", { class: "service_item" }, [
                      vue.createElementVNode("image", {
                        src: _imports_11,
                        mode: "widthFix",
                        class: "service_pic"
                      }),
                      vue.createElementVNode("view", { class: "" }, " 我要入驻 ")
                    ]),
                    vue.createElementVNode("view", { class: "service_item" }, [
                      vue.createElementVNode("image", {
                        src: _imports_12,
                        mode: "widthFix",
                        class: "service_pic"
                      }),
                      vue.createElementVNode("view", { class: "" }, " 商家入口 ")
                    ])
                  ])
                ])
              ])
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesMyAccountMyAccount = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__file", "/Users/daily/Desktop/d9/money_celestial/pages/myAccount/myAccount.vue"]]);
  const _sfc_main$w = {
    name: "UniSegmentedControl",
    emits: ["clickItem"],
    props: {
      current: {
        type: Number,
        default: 0
      },
      values: {
        type: Array,
        default() {
          return [];
        }
      },
      activeColor: {
        type: String,
        default: "#2979FF"
      },
      inActiveColor: {
        type: String,
        default: "transparent"
      },
      styleType: {
        type: String,
        default: "button"
      }
    },
    data() {
      return {
        currentIndex: 0
      };
    },
    watch: {
      current(val) {
        if (val !== this.currentIndex) {
          this.currentIndex = val;
        }
      }
    },
    computed: {},
    created() {
      this.currentIndex = this.current;
    },
    methods: {
      _onClick(index) {
        if (this.currentIndex !== index) {
          this.currentIndex = index;
          this.$emit("clickItem", {
            currentIndex: index
          });
        }
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass([[$props.styleType === "text" ? "segmented-control--text" : "segmented-control--button"], "segmented-control"]),
        style: vue.normalizeStyle({ borderColor: $props.styleType === "text" ? "" : $props.activeColor })
      },
      [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($props.values, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: vue.normalizeClass([[
                $props.styleType === "text" ? "" : "segmented-control__item--button",
                index === 0 && $props.styleType === "button" ? "segmented-control__item--button--first" : "",
                index === $props.values.length - 1 && $props.styleType === "button" ? "segmented-control__item--button--last" : ""
              ], "segmented-control__item"]),
              key: index,
              style: vue.normalizeStyle({ backgroundColor: index === $data.currentIndex && $props.styleType === "button" ? $props.activeColor : $props.styleType === "button" ? $props.inActiveColor : "transparent", borderColor: index === $data.currentIndex && $props.styleType === "text" || $props.styleType === "button" ? $props.activeColor : $props.inActiveColor }),
              onClick: ($event) => $options._onClick(index)
            }, [
              vue.createElementVNode("view", null, [
                vue.createElementVNode(
                  "text",
                  {
                    style: vue.normalizeStyle({ color: index === $data.currentIndex ? $props.styleType === "text" ? $props.activeColor : "#fff" : $props.styleType === "text" ? "#000" : $props.activeColor }),
                    class: vue.normalizeClass(["segmented-control__text", $props.styleType === "text" && index === $data.currentIndex ? "segmented-control__item--text" : ""])
                  },
                  vue.toDisplayString(item),
                  7
                  /* TEXT, CLASS, STYLE */
                )
              ])
            ], 14, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$a], ["__scopeId", "data-v-86aa1171"], ["__file", "/Users/daily/Desktop/d9/money_celestial/uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue"]]);
  const _sfc_main$v = {
    __name: "goodsList",
    setup(__props) {
      const _this = vue.getCurrentInstance();
      const flowData = vue.reactive({
        list: [],
        // 数据值
        column: 2,
        // 瀑布列数
        columnSpace: 2
        // 瀑布列宽间距
      });
      flowData.list = [
        {
          imgUrl: "https://www.logosc.cn/uploads/resources/2023/03/17/1679045108_thumb.jpg",
          title: "自动驾驶汽车对交通和城市规划的未来影响与挑战",
          point: "50",
          name: "洛龙区宝龙店"
        },
        {
          imgUrl: "https://www.logosc.cn/uploads/resources/2023/03/17/1679044581_thumb.jpg",
          title: "可持续城市发展：构建环保城市的策略和实践",
          point: "50",
          name: "洛龙区宝龙店"
        },
        {
          imgUrl: "https://www.logosc.cn/uploads/resources/2023/03/17/1679045190_thumb.jpg",
          title: "消灭传染病：全球卫生领域的挑战与创新",
          point: "50",
          name: "洛龙区宝龙店"
        }
      ];
      for (let i2 = 1; i2 <= flowData.column; i2++) {
        flowData[`column_${i2}`] = [];
      }
      vue.onMounted(() => {
        initValue(0);
      });
      const widthCalc = vue.computed(() => {
        return `${100 / flowData.column - flowData.columnSpace}%`;
      });
      const marginCalc = vue.computed(() => {
        const columnWidth = 100 / flowData.column - flowData.columnSpace;
        return `${(100 - columnWidth.toFixed(5) * flowData.column) / (flowData.column - 1)}%`;
      });
      const getMinObj = (a2, s2) => {
        let m2 = a2[0][s2];
        let mo = a2[0];
        for (let i2 = a2.length - 1; i2 >= 0; i2--) {
          if (a2[i2][s2] < m2)
            m2 = a2[i2][s2];
        }
        mo = a2.filter((i2) => i2[s2] === m2);
        return mo[0];
      };
      function getMinColumnHeight() {
        return new Promise((resolve) => {
          const heightArr = [];
          for (let i2 = 1; i2 <= flowData.column; i2++) {
            uni.createSelectorQuery().in(_this).select(`#cont_${i2}`).boundingClientRect((res) => {
              heightArr.push({ column: i2, height: res.height });
            }).exec(() => {
              if (flowData.column <= heightArr.length) {
                resolve(getMinObj(heightArr, "height"));
              }
            });
          }
        });
      }
      async function initValue(i2) {
        if (i2 >= flowData.list.length)
          return false;
        const minHeightRes = await getMinColumnHeight();
        flowData[`column_${minHeightRes.column}`].push({
          ...flowData.list[i2],
          index: i2
        });
      }
      function imgLoad(item) {
        const i2 = item.index;
        initValue(i2 + 1);
      }
      function imgError(item) {
        const i2 = item.index;
        initValue(i2 + 1);
      }
      const toDetail = () => {
        uni.navigateTo({
          url: "/pages/merchant/goods_detail"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(flowData.column, (numVal, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                id: `cont_${index + 1}`,
                class: "cont-box",
                style: vue.normalizeStyle({ width: widthCalc.value, "margin-left": index === 0 ? 0 : marginCalc.value }),
                key: numVal
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(flowData[`column_${index + 1}`], (item, j2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "item-box",
                      key: j2,
                      onClick: toDetail
                    }, [
                      vue.createElementVNode("image", {
                        class: "img-tip",
                        src: item.imgUrl,
                        mode: "widthFix",
                        "lazy-load": "",
                        onLoad: ($event) => imgLoad(item),
                        onError: ($event) => imgError(item)
                      }, null, 40, ["src", "onLoad", "onError"]),
                      vue.createElementVNode(
                        "view",
                        { class: "tit-tip multi-line-omit" },
                        vue.toDisplayString(item.title),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("view", { class: "desc-tip multi-line-omit" }, [
                        vue.createElementVNode(
                          "text",
                          { class: "point_num" },
                          vue.toDisplayString(item.point),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode("text", { class: "point_text" }, "积分")
                      ]),
                      vue.createElementVNode("view", {
                        class: "flex",
                        style: { "padding": "0 20rpx" }
                      }, [
                        vue.createElementVNode("image", {
                          src: "",
                          mode: "aspectFill",
                          class: "head"
                        }),
                        vue.createElementVNode(
                          "view",
                          { class: "shop_name" },
                          vue.toDisplayString(item.name),
                          1
                          /* TEXT */
                        )
                      ])
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ], 12, ["id"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]);
      };
    }
  };
  const __easycom_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-feddcdaa"], ["__file", "/Users/daily/Desktop/d9/money_celestial/components/goodsList/goodsList.vue"]]);
  const _imports_1$2 = "/static/star-plain.png";
  const _imports_3 = "/static/time.png";
  const _imports_4 = "/static/phone.png";
  const _sfc_main$u = {
    __name: "merchant_detail",
    setup(__props) {
      const current = vue.ref(0);
      const items = vue.ref(["本店商品", "商家介绍", "评价"]);
      const onClickItem = (e2) => {
        if (current.value !== e2.currentIndex) {
          current.value = e2.currentIndex;
        }
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        const _component_uni_segmented_control = resolveEasycom(vue.resolveDynamicComponent("uni-segmented-control"), __easycom_1);
        const _component_goodsList = resolveEasycom(vue.resolveDynamicComponent("goodsList"), __easycom_2$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "门店详情" }),
          vue.createElementVNode("image", {
            src: "",
            mode: "widthFix",
            class: "shop_pic"
          }),
          vue.createElementVNode("view", { class: "shop_info" }, [
            vue.createElementVNode("view", { class: "info_item flex" }, [
              vue.createElementVNode("image", {
                src: "",
                mode: "aspectFill",
                class: "shop_head"
              }),
              vue.createElementVNode("view", {
                class: "",
                style: { "flex": "1" }
              }, [
                vue.createElementVNode("view", { class: "flex" }, [
                  vue.createElementVNode("view", { class: "shop_name" }, " 佛山英朗达百货超市西城店 "),
                  vue.createElementVNode("view", { class: "level" }, " Lv.5 ")
                ]),
                vue.createElementVNode("view", { class: "rate_box flex" }, [
                  vue.createElementVNode("view", { class: "flex" }, [
                    vue.createElementVNode("image", {
                      src: _imports_0$b,
                      mode: "widthFix",
                      class: "star_pic"
                    })
                  ]),
                  vue.createElementVNode("view", { class: "point" }, " 4.9 ")
                ]),
                vue.createElementVNode("view", { class: "note" }, " 本店主要经营各类百货商品、生鲜蛋肉类产品 ")
              ]),
              vue.createElementVNode("image", {
                src: _imports_1$2,
                mode: "widthFix",
                class: "star_plain"
              })
            ]),
            vue.createElementVNode("view", { class: "info_item" }, [
              vue.createElementVNode("view", { class: "flex" }, [
                vue.createElementVNode("image", {
                  src: _imports_1$7,
                  mode: "widthFix",
                  class: "lo_pic"
                }),
                vue.createElementVNode("view", { class: "address" }, " 浙江省金华市永康西城服装产业园区工厂区68号 ")
              ]),
              vue.createElementVNode("view", { class: "time_box flex" }, [
                vue.createElementVNode("image", {
                  src: _imports_3,
                  mode: "widthFix",
                  class: "time_pic"
                }),
                vue.createElementVNode("view", { class: "time_text" }, " 营业时间：09:00-19:00 ")
              ]),
              vue.createElementVNode("view", { class: "flex" }, [
                vue.createElementVNode("image", {
                  src: _imports_4,
                  mode: "widthFix",
                  class: "phone_pic"
                }),
                vue.createElementVNode("view", { class: "time_text" }, " 联系方式：18642222222 ")
              ])
            ])
          ]),
          vue.createVNode(_component_uni_segmented_control, {
            current: current.value,
            values: items.value,
            "style-type": "text",
            "active-color": "#FC5908",
            onClickItem
          }, null, 8, ["current", "values"]),
          vue.createVNode(_component_goodsList)
        ]);
      };
    }
  };
  const PagesMerchantMerchantDetail = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-1771cf06"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/merchant_detail.vue"]]);
  const _sfc_main$t = {};
  function _sfc_render$9(_ctx, _cache) {
    const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_navBar, { title: "商品详情" }),
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("swiper", {
          "indicator-dots": true,
          autoplay: true,
          interval: 3e3,
          duration: 1e3,
          class: "swiper"
        }, [
          vue.createElementVNode("swiper-item", null, [
            vue.createElementVNode("image", {
              src: "",
              mode: "widthFix",
              class: "swipe_pic"
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "goods_info" }, [
          vue.createElementVNode("view", { class: "goods_title" }, " 黑茶羊楼洞赤壁青砖茶120g单罐湖北特产青砖茶 "),
          vue.createElementVNode("view", { class: "desc" }, " 红茶性温，擅温中驱寒，温胃驱寒，能化痰、消食、开胃。单笔订单满20盒西安市内免运费，详情请咨询400-0029-777； "),
          vue.createElementVNode("view", { class: "flex" }, [
            vue.createElementVNode("view", { class: "point_text" }, " 送积分 "),
            vue.createElementVNode("view", { class: "point_num" }, " ¥230 ")
          ])
        ]),
        vue.createElementVNode("view", { class: "detail flex_between" }, [
          vue.createElementVNode("view", { class: "line" }),
          vue.createElementVNode("view", { class: "" }, " 商品信息 "),
          vue.createElementVNode("view", { class: "line" })
        ]),
        vue.createElementVNode("view", { class: "goods_pic" }, [
          vue.createElementVNode("image", {
            src: "",
            mode: "widthFix",
            class: "pic_item"
          })
        ])
      ])
    ]);
  }
  const PagesMerchantGoodsDetail = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$9], ["__scopeId", "data-v-2276b552"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/goods_detail.vue"]]);
  const _sfc_main$s = {
    __name: "register",
    setup(__props) {
      const userStore = useUserStore();
      const mobile = vue.ref("");
      vue.ref("");
      const password = vue.ref("");
      const password2 = vue.ref("");
      const toRegister = async () => {
        if (password.value.length < 8 || password2.value.length < 8)
          return uni.showToast({
            icon: "none",
            title: "密码长度最低8位"
          });
        if (password.value == password2.value) {
          uni.showLoading({});
          uni.showLoading({
            title: "正在注册中..."
          });
          postRegister(mobile.value, password.value).then((res) => {
            formatAppLog("log", "at pages/login/register.vue:68", "刚注册的用户信息", res);
            uni.hideLoading();
            uni.showToast({
              duration: 2e3,
              icon: "success",
              title: "注册成功"
            });
            userStore.loginAction(mobile.value, password.value);
            uni.setStorageSync("phoneNumber", mobile.value);
            setTimeout(() => {
              uni.navigateTo({
                url: "/pages/login/more_info"
              });
            }, 2e3);
          }).catch((err) => {
            uni.showToast({
              duration: 2e3,
              icon: "none",
              title: "注册失败"
            });
          });
        } else {
          uni.showToast({
            duration: 2e3,
            icon: "fail",
            title: "密码不一致"
          });
        }
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_1$4);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, {
            title: "注册",
            bgc: "#1B46CC"
          }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "title" }, " 手机号： "),
            vue.createVNode(_component_uni_easyinput, {
              modelValue: mobile.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => mobile.value = $event),
              maxlength: "11",
              placeholder: "请输入手机号",
              inputBorder: false,
              primaryColor: "#1B46CC",
              type: "number"
            }, null, 8, ["modelValue"]),
            vue.createCommentVNode(' <uni-easyinput v-model="code" placeholder="请输入验证码" :inputBorder="false" type="number" primaryColor="#1B46CC">\r\n				<template #right>\r\n					<view class="send_btn flex_center">\r\n						发送验证码\r\n					</view>\r\n				</template>\r\n			</uni-easyinput> '),
            vue.createElementVNode("view", { class: "title" }, " 密码： "),
            vue.createVNode(_component_uni_easyinput, {
              modelValue: password.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => password.value = $event),
              placeholder: "密码长度最低8位",
              inputBorder: false,
              primaryColor: "#1B46CC",
              type: "password"
            }, null, 8, ["modelValue"]),
            vue.createElementVNode("view", { class: "title" }, " 确认密码： "),
            vue.createVNode(_component_uni_easyinput, {
              modelValue: password2.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => password2.value = $event),
              placeholder: "再次输入密码",
              inputBorder: false,
              primaryColor: "#1B46CC",
              type: "password"
            }, null, 8, ["modelValue"]),
            vue.createElementVNode("view", {
              class: "btn flex_center",
              onClick: toRegister
            }, " 立即注册 ")
          ])
        ]);
      };
    }
  };
  const PagesLoginRegister = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-838b72c9"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/login/register.vue"]]);
  var calendar = {
    /**
        * 农历1900-2100的润大小信息表
        * @Array Of Property
        * @return Hex
        */
    lunarInfo: [
      19416,
      19168,
      42352,
      21717,
      53856,
      55632,
      91476,
      22176,
      39632,
      21970,
      // 1900-1909
      19168,
      42422,
      42192,
      53840,
      119381,
      46400,
      54944,
      44450,
      38320,
      84343,
      // 1910-1919
      18800,
      42160,
      46261,
      27216,
      27968,
      109396,
      11104,
      38256,
      21234,
      18800,
      // 1920-1929
      25958,
      54432,
      59984,
      28309,
      23248,
      11104,
      100067,
      37600,
      116951,
      51536,
      // 1930-1939
      54432,
      120998,
      46416,
      22176,
      107956,
      9680,
      37584,
      53938,
      43344,
      46423,
      // 1940-1949
      27808,
      46416,
      86869,
      19872,
      42416,
      83315,
      21168,
      43432,
      59728,
      27296,
      // 1950-1959
      44710,
      43856,
      19296,
      43748,
      42352,
      21088,
      62051,
      55632,
      23383,
      22176,
      // 1960-1969
      38608,
      19925,
      19152,
      42192,
      54484,
      53840,
      54616,
      46400,
      46752,
      103846,
      // 1970-1979
      38320,
      18864,
      43380,
      42160,
      45690,
      27216,
      27968,
      44870,
      43872,
      38256,
      // 1980-1989
      19189,
      18800,
      25776,
      29859,
      59984,
      27480,
      23232,
      43872,
      38613,
      37600,
      // 1990-1999
      51552,
      55636,
      54432,
      55888,
      30034,
      22176,
      43959,
      9680,
      37584,
      51893,
      // 2000-2009
      43344,
      46240,
      47780,
      44368,
      21977,
      19360,
      42416,
      86390,
      21168,
      43312,
      // 2010-2019
      31060,
      27296,
      44368,
      23378,
      19296,
      42726,
      42208,
      53856,
      60005,
      54576,
      // 2020-2029
      23200,
      30371,
      38608,
      19195,
      19152,
      42192,
      118966,
      53840,
      54560,
      56645,
      // 2030-2039
      46496,
      22224,
      21938,
      18864,
      42359,
      42160,
      43600,
      111189,
      27936,
      44448,
      // 2040-2049
      /** Add By JJonline@JJonline.Cn**/
      84835,
      37744,
      18936,
      18800,
      25776,
      92326,
      59984,
      27424,
      108228,
      43744,
      // 2050-2059
      41696,
      53987,
      51552,
      54615,
      54432,
      55888,
      23893,
      22176,
      42704,
      21972,
      // 2060-2069
      21200,
      43448,
      43344,
      46240,
      46758,
      44368,
      21920,
      43940,
      42416,
      21168,
      // 2070-2079
      45683,
      26928,
      29495,
      27296,
      44368,
      84821,
      19296,
      42352,
      21732,
      53600,
      // 2080-2089
      59752,
      54560,
      55968,
      92838,
      22224,
      19168,
      43476,
      41680,
      53584,
      62034,
      // 2090-2099
      54560
    ],
    // 2100
    /**
        * 公历每个月份的天数普通表
        * @Array Of Property
        * @return Number
        */
    solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    /**
        * 天干地支之天干速查表
        * @Array Of Property trans["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
        * @return Cn string
        */
    Gan: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"],
    /**
        * 天干地支之地支速查表
        * @Array Of Property
        * @trans["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
        * @return Cn string
        */
    Zhi: ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"],
    /**
        * 天干地支之地支速查表<=>生肖
        * @Array Of Property
        * @trans["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
        * @return Cn string
        */
    Animals: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"],
    /**
        * 24节气速查表
        * @Array Of Property
        * @trans["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
        * @return Cn string
        */
    solarTerm: ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"],
    /**
        * 1900-2100各年的24节气日期速查表
        * @Array Of Property
        * @return 0x string For splice
        */
    sTermInfo: [
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c3598082c95f8c965cc920f",
      "97bd0b06bdb0722c965ce1cfcc920f",
      "b027097bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd0b06bdb0722c965ce1cfcc920f",
      "b027097bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd0b06bdb0722c965ce1cfcc920f",
      "b027097bd097c36b0b6fc9274c91aa",
      "9778397bd19801ec9210c965cc920e",
      "97b6b97bd19801ec95f8c965cc920f",
      "97bd09801d98082c95f8e1cfcc920f",
      "97bd097bd097c36b0b6fc9210c8dc2",
      "9778397bd197c36c9210c9274c91aa",
      "97b6b97bd19801ec95f8c965cc920e",
      "97bd09801d98082c95f8e1cfcc920f",
      "97bd097bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c91aa",
      "97b6b97bd19801ec95f8c965cc920e",
      "97bcf97c3598082c95f8e1cfcc920f",
      "97bd097bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c3598082c95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c3598082c95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd097bd07f595b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9210c8dc2",
      "9778397bd19801ec9210c9274c920e",
      "97b6b97bd19801ec95f8c965cc920f",
      "97bd07f5307f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c920e",
      "97b6b97bd19801ec95f8c965cc920f",
      "97bd07f5307f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bd07f1487f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c9274c920e",
      "97bcf7f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c91aa",
      "97b6b97bd197c36c9210c9274c920e",
      "97bcf7f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c920e",
      "97b6b7f0e47f531b0723b0b6fb0722",
      "7f0e37f5307f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36b0b70c9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e37f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc9210c8dc2",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0787b0721",
      "7f0e27f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c91aa",
      "97b6b7f0e47f149b0723b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c8dc2",
      "977837f0e37f149b0723b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e37f5307f595b0b0bc920fb0722",
      "7f0e397bd097c35b0b6fc9210c8dc2",
      "977837f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e37f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc9210c8dc2",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f149b0723b0787b0721",
      "7f0e27f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14998082b0723b06bd",
      "7f07e7f0e37f149b0723b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e37f1487f595b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e37f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e37f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f149b0723b0787b0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14998082b0723b06bd",
      "7f07e7f0e47f149b0723b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14998082b0723b06bd",
      "7f07e7f0e37f14998083b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14898082b0723b02d5",
      "7f07e7f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e36665b66aa89801e9808297c35",
      "665f67f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e36665b66a449801e9808297c35",
      "665f67f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e36665b66a449801e9808297c35",
      "665f67f0e37f14898082b072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e26665b66a449801e9808297c35",
      "665f67f0e37f1489801eb072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722"
    ],
    /**
        * 数字转中文速查表
        * @Array Of Property
        * @trans ['日','一','二','三','四','五','六','七','八','九','十']
        * @return Cn string
        */
    nStr1: ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
    /**
        * 日期转农历称呼速查表
        * @Array Of Property
        * @trans ['初','十','廿','卅']
        * @return Cn string
        */
    nStr2: ["初", "十", "廿", "卅"],
    /**
        * 月份转农历称呼速查表
        * @Array Of Property
        * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
        * @return Cn string
        */
    nStr3: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"],
    /**
        * 返回农历y年一整年的总天数
        * @param lunar Year
        * @return Number
        * @eg:var count = calendar.lYearDays(1987) ;//count=387
        */
    lYearDays: function(y2) {
      var i2;
      var sum = 348;
      for (i2 = 32768; i2 > 8; i2 >>= 1) {
        sum += this.lunarInfo[y2 - 1900] & i2 ? 1 : 0;
      }
      return sum + this.leapDays(y2);
    },
    /**
        * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
        * @param lunar Year
        * @return Number (0-12)
        * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
        */
    leapMonth: function(y2) {
      return this.lunarInfo[y2 - 1900] & 15;
    },
    /**
        * 返回农历y年闰月的天数 若该年没有闰月则返回0
        * @param lunar Year
        * @return Number (0、29、30)
        * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
        */
    leapDays: function(y2) {
      if (this.leapMonth(y2)) {
        return this.lunarInfo[y2 - 1900] & 65536 ? 30 : 29;
      }
      return 0;
    },
    /**
        * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
        * @param lunar Year
        * @return Number (-1、29、30)
        * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
        */
    monthDays: function(y2, m2) {
      if (m2 > 12 || m2 < 1) {
        return -1;
      }
      return this.lunarInfo[y2 - 1900] & 65536 >> m2 ? 30 : 29;
    },
    /**
        * 返回公历(!)y年m月的天数
        * @param solar Year
        * @return Number (-1、28、29、30、31)
        * @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
        */
    solarDays: function(y2, m2) {
      if (m2 > 12 || m2 < 1) {
        return -1;
      }
      var ms2 = m2 - 1;
      if (ms2 == 1) {
        return y2 % 4 == 0 && y2 % 100 != 0 || y2 % 400 == 0 ? 29 : 28;
      } else {
        return this.solarMonth[ms2];
      }
    },
    /**
       * 农历年份转换为干支纪年
       * @param  lYear 农历年的年份数
       * @return Cn string
       */
    toGanZhiYear: function(lYear) {
      var ganKey = (lYear - 3) % 10;
      var zhiKey = (lYear - 3) % 12;
      if (ganKey == 0)
        ganKey = 10;
      if (zhiKey == 0)
        zhiKey = 12;
      return this.Gan[ganKey - 1] + this.Zhi[zhiKey - 1];
    },
    /**
       * 公历月、日判断所属星座
       * @param  cMonth [description]
       * @param  cDay [description]
       * @return Cn string
       */
    toAstro: function(cMonth, cDay) {
      var s2 = "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯";
      var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
      return s2.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + "座";
    },
    /**
        * 传入offset偏移量返回干支
        * @param offset 相对甲子的偏移量
        * @return Cn string
        */
    toGanZhi: function(offset) {
      return this.Gan[offset % 10] + this.Zhi[offset % 12];
    },
    /**
        * 传入公历(!)y年获得该年第n个节气的公历日期
        * @param y公历年(1900-2100)；n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起
        * @return day Number
        * @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
        */
    getTerm: function(y2, n2) {
      if (y2 < 1900 || y2 > 2100) {
        return -1;
      }
      if (n2 < 1 || n2 > 24) {
        return -1;
      }
      var _table = this.sTermInfo[y2 - 1900];
      var _info = [
        parseInt("0x" + _table.substr(0, 5)).toString(),
        parseInt("0x" + _table.substr(5, 5)).toString(),
        parseInt("0x" + _table.substr(10, 5)).toString(),
        parseInt("0x" + _table.substr(15, 5)).toString(),
        parseInt("0x" + _table.substr(20, 5)).toString(),
        parseInt("0x" + _table.substr(25, 5)).toString()
      ];
      var _calday = [
        _info[0].substr(0, 1),
        _info[0].substr(1, 2),
        _info[0].substr(3, 1),
        _info[0].substr(4, 2),
        _info[1].substr(0, 1),
        _info[1].substr(1, 2),
        _info[1].substr(3, 1),
        _info[1].substr(4, 2),
        _info[2].substr(0, 1),
        _info[2].substr(1, 2),
        _info[2].substr(3, 1),
        _info[2].substr(4, 2),
        _info[3].substr(0, 1),
        _info[3].substr(1, 2),
        _info[3].substr(3, 1),
        _info[3].substr(4, 2),
        _info[4].substr(0, 1),
        _info[4].substr(1, 2),
        _info[4].substr(3, 1),
        _info[4].substr(4, 2),
        _info[5].substr(0, 1),
        _info[5].substr(1, 2),
        _info[5].substr(3, 1),
        _info[5].substr(4, 2)
      ];
      return parseInt(_calday[n2 - 1]);
    },
    /**
        * 传入农历数字月份返回汉语通俗表示法
        * @param lunar month
        * @return Cn string
        * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
        */
    toChinaMonth: function(m2) {
      if (m2 > 12 || m2 < 1) {
        return -1;
      }
      var s2 = this.nStr3[m2 - 1];
      s2 += "月";
      return s2;
    },
    /**
        * 传入农历日期数字返回汉字表示法
        * @param lunar day
        * @return Cn string
        * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
        */
    toChinaDay: function(d2) {
      var s2;
      switch (d2) {
        case 10:
          s2 = "初十";
          break;
        case 20:
          s2 = "二十";
          break;
        case 30:
          s2 = "三十";
          break;
        default:
          s2 = this.nStr2[Math.floor(d2 / 10)];
          s2 += this.nStr1[d2 % 10];
      }
      return s2;
    },
    /**
        * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
        * @param y year
        * @return Cn string
        * @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
        */
    getAnimal: function(y2) {
      return this.Animals[(y2 - 4) % 12];
    },
    /**
        * 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
        * @param y  solar year
        * @param m  solar month
        * @param d  solar day
        * @return JSON object
        * @eg:__f__('log','at uni_modules/uni-calendar/components/uni-calendar/calendar.js:381',calendar.solar2lunar(1987,11,01));
        */
    solar2lunar: function(y2, m2, d2) {
      if (y2 < 1900 || y2 > 2100) {
        return -1;
      }
      if (y2 == 1900 && m2 == 1 && d2 < 31) {
        return -1;
      }
      if (!y2) {
        var objDate = /* @__PURE__ */ new Date();
      } else {
        var objDate = new Date(y2, parseInt(m2) - 1, d2);
      }
      var i2;
      var leap = 0;
      var temp = 0;
      var y2 = objDate.getFullYear();
      var m2 = objDate.getMonth() + 1;
      var d2 = objDate.getDate();
      var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 864e5;
      for (i2 = 1900; i2 < 2101 && offset > 0; i2++) {
        temp = this.lYearDays(i2);
        offset -= temp;
      }
      if (offset < 0) {
        offset += temp;
        i2--;
      }
      var isTodayObj = /* @__PURE__ */ new Date();
      var isToday = false;
      if (isTodayObj.getFullYear() == y2 && isTodayObj.getMonth() + 1 == m2 && isTodayObj.getDate() == d2) {
        isToday = true;
      }
      var nWeek = objDate.getDay();
      var cWeek = this.nStr1[nWeek];
      if (nWeek == 0) {
        nWeek = 7;
      }
      var year = i2;
      var leap = this.leapMonth(i2);
      var isLeap = false;
      for (i2 = 1; i2 < 13 && offset > 0; i2++) {
        if (leap > 0 && i2 == leap + 1 && isLeap == false) {
          --i2;
          isLeap = true;
          temp = this.leapDays(year);
        } else {
          temp = this.monthDays(year, i2);
        }
        if (isLeap == true && i2 == leap + 1) {
          isLeap = false;
        }
        offset -= temp;
      }
      if (offset == 0 && leap > 0 && i2 == leap + 1) {
        if (isLeap) {
          isLeap = false;
        } else {
          isLeap = true;
          --i2;
        }
      }
      if (offset < 0) {
        offset += temp;
        --i2;
      }
      var month = i2;
      var day = offset + 1;
      var sm = m2 - 1;
      var gzY = this.toGanZhiYear(year);
      var firstNode = this.getTerm(y2, m2 * 2 - 1);
      var secondNode = this.getTerm(y2, m2 * 2);
      var gzM = this.toGanZhi((y2 - 1900) * 12 + m2 + 11);
      if (d2 >= firstNode) {
        gzM = this.toGanZhi((y2 - 1900) * 12 + m2 + 12);
      }
      var isTerm = false;
      var Term = null;
      if (firstNode == d2) {
        isTerm = true;
        Term = this.solarTerm[m2 * 2 - 2];
      }
      if (secondNode == d2) {
        isTerm = true;
        Term = this.solarTerm[m2 * 2 - 1];
      }
      var dayCyclical = Date.UTC(y2, sm, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10;
      var gzD = this.toGanZhi(dayCyclical + d2 - 1);
      var astro = this.toAstro(m2, d2);
      return { "lYear": year, "lMonth": month, "lDay": day, "Animal": this.getAnimal(year), "IMonthCn": (isLeap ? "闰" : "") + this.toChinaMonth(month), "IDayCn": this.toChinaDay(day), "cYear": y2, "cMonth": m2, "cDay": d2, "gzYear": gzY, "gzMonth": gzM, "gzDay": gzD, "isToday": isToday, "isLeap": isLeap, "nWeek": nWeek, "ncWeek": "星期" + cWeek, "isTerm": isTerm, "Term": Term, "astro": astro };
    },
    /**
        * 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON
        * @param y  lunar year
        * @param m  lunar month
        * @param d  lunar day
        * @param isLeapMonth  lunar month is leap or not.[如果是农历闰月第四个参数赋值true即可]
        * @return JSON object
        * @eg:__f__('log','at uni_modules/uni-calendar/components/uni-calendar/calendar.js:500',calendar.lunar2solar(1987,9,10));
        */
    lunar2solar: function(y2, m2, d2, isLeapMonth) {
      var isLeapMonth = !!isLeapMonth;
      var leapMonth = this.leapMonth(y2);
      this.leapDays(y2);
      if (isLeapMonth && leapMonth != m2) {
        return -1;
      }
      if (y2 == 2100 && m2 == 12 && d2 > 1 || y2 == 1900 && m2 == 1 && d2 < 31) {
        return -1;
      }
      var day = this.monthDays(y2, m2);
      var _day = day;
      if (isLeapMonth) {
        _day = this.leapDays(y2, m2);
      }
      if (y2 < 1900 || y2 > 2100 || d2 > _day) {
        return -1;
      }
      var offset = 0;
      for (var i2 = 1900; i2 < y2; i2++) {
        offset += this.lYearDays(i2);
      }
      var leap = 0;
      var isAdd = false;
      for (var i2 = 1; i2 < m2; i2++) {
        leap = this.leapMonth(y2);
        if (!isAdd) {
          if (leap <= i2 && leap > 0) {
            offset += this.leapDays(y2);
            isAdd = true;
          }
        }
        offset += this.monthDays(y2, i2);
      }
      if (isLeapMonth) {
        offset += day;
      }
      var stmap = Date.UTC(1900, 1, 30, 0, 0, 0);
      var calObj = new Date((offset + d2 - 31) * 864e5 + stmap);
      var cY = calObj.getUTCFullYear();
      var cM = calObj.getUTCMonth() + 1;
      var cD = calObj.getUTCDate();
      return this.solar2lunar(cY, cM, cD);
    }
  };
  class Calendar {
    constructor({
      date,
      selected,
      startDate,
      endDate,
      range
    } = {}) {
      this.date = this.getDate(/* @__PURE__ */ new Date());
      this.selected = selected || [];
      this.startDate = startDate;
      this.endDate = endDate;
      this.range = range;
      this.cleanMultipleStatus();
      this.weeks = {};
    }
    /**
     * 设置日期
     * @param {Object} date
     */
    setDate(date) {
      this.selectDate = this.getDate(date);
      this._getWeek(this.selectDate.fullDate);
    }
    /**
     * 清理多选状态
     */
    cleanMultipleStatus() {
      this.multipleStatus = {
        before: "",
        after: "",
        data: []
      };
    }
    /**
     * 重置开始日期
     */
    resetSatrtDate(startDate) {
      this.startDate = startDate;
    }
    /**
     * 重置结束日期
     */
    resetEndDate(endDate) {
      this.endDate = endDate;
    }
    /**
     * 获取任意时间
     */
    getDate(date, AddDayCount = 0, str = "day") {
      if (!date) {
        date = /* @__PURE__ */ new Date();
      }
      if (typeof date !== "object") {
        date = date.replace(/-/g, "/");
      }
      const dd = new Date(date);
      switch (str) {
        case "day":
          dd.setDate(dd.getDate() + AddDayCount);
          break;
        case "month":
          if (dd.getDate() === 31 && AddDayCount > 0) {
            dd.setDate(dd.getDate() + AddDayCount);
          } else {
            const preMonth = dd.getMonth();
            dd.setMonth(preMonth + AddDayCount);
            const nextMonth = dd.getMonth();
            if (AddDayCount < 0 && preMonth !== 0 && nextMonth - preMonth > AddDayCount) {
              dd.setMonth(nextMonth + (nextMonth - preMonth + AddDayCount));
            }
            if (AddDayCount > 0 && nextMonth - preMonth > AddDayCount) {
              dd.setMonth(nextMonth - (nextMonth - preMonth - AddDayCount));
            }
          }
          break;
        case "year":
          dd.setFullYear(dd.getFullYear() + AddDayCount);
          break;
      }
      const y2 = dd.getFullYear();
      const m2 = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
      const d2 = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
      return {
        fullDate: y2 + "-" + m2 + "-" + d2,
        year: y2,
        month: m2,
        date: d2,
        day: dd.getDay()
      };
    }
    /**
     * 获取上月剩余天数
     */
    _getLastMonthDays(firstDay, full) {
      let dateArr = [];
      for (let i2 = firstDay; i2 > 0; i2--) {
        const beforeDate = new Date(full.year, full.month - 1, -i2 + 1).getDate();
        dateArr.push({
          date: beforeDate,
          month: full.month - 1,
          lunar: this.getlunar(full.year, full.month - 1, beforeDate),
          disable: true
        });
      }
      return dateArr;
    }
    /**
     * 获取本月天数
     */
    _currentMonthDys(dateData, full) {
      let dateArr = [];
      let fullDate = this.date.fullDate;
      for (let i2 = 1; i2 <= dateData; i2++) {
        let nowDate = full.year + "-" + (full.month < 10 ? full.month : full.month) + "-" + (i2 < 10 ? "0" + i2 : i2);
        let isDay = fullDate === nowDate;
        let info2 = this.selected && this.selected.find((item) => {
          if (this.dateEqual(nowDate, item.date)) {
            return item;
          }
        });
        let disableBefore = true;
        let disableAfter = true;
        if (this.startDate) {
          disableBefore = this.dateCompare(this.startDate, nowDate);
        }
        if (this.endDate) {
          disableAfter = this.dateCompare(nowDate, this.endDate);
        }
        let multiples = this.multipleStatus.data;
        let checked = false;
        let multiplesStatus = -1;
        if (this.range) {
          if (multiples) {
            multiplesStatus = multiples.findIndex((item) => {
              return this.dateEqual(item, nowDate);
            });
          }
          if (multiplesStatus !== -1) {
            checked = true;
          }
        }
        let data = {
          fullDate: nowDate,
          year: full.year,
          date: i2,
          multiple: this.range ? checked : false,
          beforeMultiple: this.dateEqual(this.multipleStatus.before, nowDate),
          afterMultiple: this.dateEqual(this.multipleStatus.after, nowDate),
          month: full.month,
          lunar: this.getlunar(full.year, full.month, i2),
          disable: !(disableBefore && disableAfter),
          isDay
        };
        if (info2) {
          data.extraInfo = info2;
        }
        dateArr.push(data);
      }
      return dateArr;
    }
    /**
     * 获取下月天数
     */
    _getNextMonthDays(surplus, full) {
      let dateArr = [];
      for (let i2 = 1; i2 < surplus + 1; i2++) {
        dateArr.push({
          date: i2,
          month: Number(full.month) + 1,
          lunar: this.getlunar(full.year, Number(full.month) + 1, i2),
          disable: true
        });
      }
      return dateArr;
    }
    /**
     * 获取当前日期详情
     * @param {Object} date
     */
    getInfo(date) {
      if (!date) {
        date = /* @__PURE__ */ new Date();
      }
      const dateInfo = this.canlender.find((item) => item.fullDate === this.getDate(date).fullDate);
      return dateInfo;
    }
    /**
     * 比较时间大小
     */
    dateCompare(startDate, endDate) {
      startDate = new Date(startDate.replace("-", "/").replace("-", "/"));
      endDate = new Date(endDate.replace("-", "/").replace("-", "/"));
      if (startDate <= endDate) {
        return true;
      } else {
        return false;
      }
    }
    /**
     * 比较时间是否相等
     */
    dateEqual(before, after) {
      before = new Date(before.replace("-", "/").replace("-", "/"));
      after = new Date(after.replace("-", "/").replace("-", "/"));
      if (before.getTime() - after.getTime() === 0) {
        return true;
      } else {
        return false;
      }
    }
    /**
     * 获取日期范围内所有日期
     * @param {Object} begin
     * @param {Object} end
     */
    geDateAll(begin, end) {
      var arr = [];
      var ab = begin.split("-");
      var ae2 = end.split("-");
      var db = /* @__PURE__ */ new Date();
      db.setFullYear(ab[0], ab[1] - 1, ab[2]);
      var de2 = /* @__PURE__ */ new Date();
      de2.setFullYear(ae2[0], ae2[1] - 1, ae2[2]);
      var unixDb = db.getTime() - 24 * 60 * 60 * 1e3;
      var unixDe = de2.getTime() - 24 * 60 * 60 * 1e3;
      for (var k = unixDb; k <= unixDe; ) {
        k = k + 24 * 60 * 60 * 1e3;
        arr.push(this.getDate(new Date(parseInt(k))).fullDate);
      }
      return arr;
    }
    /**
     * 计算阴历日期显示
     */
    getlunar(year, month, date) {
      return calendar.solar2lunar(year, month, date);
    }
    /**
     * 设置打点
     */
    setSelectInfo(data, value) {
      this.selected = value;
      this._getWeek(data);
    }
    /**
     *  获取多选状态
     */
    setMultiple(fullDate) {
      let {
        before,
        after
      } = this.multipleStatus;
      if (!this.range)
        return;
      if (before && after) {
        this.multipleStatus.before = "";
        this.multipleStatus.after = "";
        this.multipleStatus.data = [];
      } else {
        if (!before) {
          this.multipleStatus.before = fullDate;
        } else {
          this.multipleStatus.after = fullDate;
          if (this.dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
          } else {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
          }
        }
      }
      this._getWeek(fullDate);
    }
    /**
     * 获取每周数据
     * @param {Object} dateData
     */
    _getWeek(dateData) {
      const {
        year,
        month
      } = this.getDate(dateData);
      let firstDay = new Date(year, month - 1, 1).getDay();
      let currentDay = new Date(year, month, 0).getDate();
      let dates = {
        lastMonthDays: this._getLastMonthDays(firstDay, this.getDate(dateData)),
        // 上个月末尾几天
        currentMonthDys: this._currentMonthDys(currentDay, this.getDate(dateData)),
        // 本月天数
        nextMonthDays: [],
        // 下个月开始几天
        weeks: []
      };
      let canlender = [];
      const surplus = 42 - (dates.lastMonthDays.length + dates.currentMonthDys.length);
      dates.nextMonthDays = this._getNextMonthDays(surplus, this.getDate(dateData));
      canlender = canlender.concat(dates.lastMonthDays, dates.currentMonthDys, dates.nextMonthDays);
      let weeks = {};
      for (let i2 = 0; i2 < canlender.length; i2++) {
        if (i2 % 7 === 0) {
          weeks[parseInt(i2 / 7)] = new Array(7);
        }
        weeks[parseInt(i2 / 7)][i2 % 7] = canlender[i2];
      }
      this.canlender = canlender;
      this.weeks = weeks;
    }
    //静态方法
    // static init(date) {
    // 	if (!this.instance) {
    // 		this.instance = new Calendar(date);
    // 	}
    // 	return this.instance;
    // }
  }
  const en = {
    "uni-calender.ok": "ok",
    "uni-calender.cancel": "cancel",
    "uni-calender.today": "today",
    "uni-calender.MON": "MON",
    "uni-calender.TUE": "TUE",
    "uni-calender.WED": "WED",
    "uni-calender.THU": "THU",
    "uni-calender.FRI": "FRI",
    "uni-calender.SAT": "SAT",
    "uni-calender.SUN": "SUN"
  };
  const zhHans = {
    "uni-calender.ok": "确定",
    "uni-calender.cancel": "取消",
    "uni-calender.today": "今日",
    "uni-calender.SUN": "日",
    "uni-calender.MON": "一",
    "uni-calender.TUE": "二",
    "uni-calender.WED": "三",
    "uni-calender.THU": "四",
    "uni-calender.FRI": "五",
    "uni-calender.SAT": "六"
  };
  const zhHant = {
    "uni-calender.ok": "確定",
    "uni-calender.cancel": "取消",
    "uni-calender.today": "今日",
    "uni-calender.SUN": "日",
    "uni-calender.MON": "一",
    "uni-calender.TUE": "二",
    "uni-calender.WED": "三",
    "uni-calender.THU": "四",
    "uni-calender.FRI": "五",
    "uni-calender.SAT": "六"
  };
  const i18nMessages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const { t: t$1 } = initVueI18n(i18nMessages);
  const _sfc_main$r = {
    emits: ["change"],
    props: {
      weeks: {
        type: Object,
        default() {
          return {};
        }
      },
      calendar: {
        type: Object,
        default: () => {
          return {};
        }
      },
      selected: {
        type: Array,
        default: () => {
          return [];
        }
      },
      lunar: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      todayText() {
        return t$1("uni-calender.today");
      }
    },
    methods: {
      choiceDate(weeks) {
        this.$emit("change", weeks);
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-calendar-item__weeks-box", {
          "uni-calendar-item--disable": $props.weeks.disable,
          "uni-calendar-item--isDay": $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay,
          "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay,
          "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
          "uni-calendar-item--multiple": $props.weeks.multiple,
          "uni-calendar-item--after-checked": $props.weeks.afterMultiple
        }]),
        onClick: _cache[0] || (_cache[0] = ($event) => $options.choiceDate($props.weeks))
      },
      [
        vue.createElementVNode("view", { class: "uni-calendar-item__weeks-box-item" }, [
          $props.selected && $props.weeks.extraInfo ? (vue.openBlock(), vue.createElementBlock("text", {
            key: 0,
            class: "uni-calendar-item__weeks-box-circle"
          })) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode(
            "text",
            {
              class: vue.normalizeClass(["uni-calendar-item__weeks-box-text", {
                "uni-calendar-item--isDay-text": $props.weeks.isDay,
                "uni-calendar-item--isDay": $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay,
                "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay,
                "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
                "uni-calendar-item--multiple": $props.weeks.multiple,
                "uni-calendar-item--after-checked": $props.weeks.afterMultiple,
                "uni-calendar-item--disable": $props.weeks.disable
              }])
            },
            vue.toDisplayString($props.weeks.date),
            3
            /* TEXT, CLASS */
          ),
          !$props.lunar && !$props.weeks.extraInfo && $props.weeks.isDay ? (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 1,
              class: vue.normalizeClass(["uni-calendar-item__weeks-lunar-text", {
                "uni-calendar-item--isDay-text": $props.weeks.isDay,
                "uni-calendar-item--isDay": $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay,
                "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay,
                "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
                "uni-calendar-item--multiple": $props.weeks.multiple,
                "uni-calendar-item--after-checked": $props.weeks.afterMultiple
              }])
            },
            vue.toDisplayString($options.todayText),
            3
            /* TEXT, CLASS */
          )) : vue.createCommentVNode("v-if", true),
          $props.lunar && !$props.weeks.extraInfo ? (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 2,
              class: vue.normalizeClass(["uni-calendar-item__weeks-lunar-text", {
                "uni-calendar-item--isDay-text": $props.weeks.isDay,
                "uni-calendar-item--isDay": $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay,
                "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay,
                "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
                "uni-calendar-item--multiple": $props.weeks.multiple,
                "uni-calendar-item--after-checked": $props.weeks.afterMultiple,
                "uni-calendar-item--disable": $props.weeks.disable
              }])
            },
            vue.toDisplayString($props.weeks.isDay ? $options.todayText : $props.weeks.lunar.IDayCn === "初一" ? $props.weeks.lunar.IMonthCn : $props.weeks.lunar.IDayCn),
            3
            /* TEXT, CLASS */
          )) : vue.createCommentVNode("v-if", true),
          $props.weeks.extraInfo && $props.weeks.extraInfo.info ? (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 3,
              class: vue.normalizeClass(["uni-calendar-item__weeks-lunar-text", {
                "uni-calendar-item--extra": $props.weeks.extraInfo.info,
                "uni-calendar-item--isDay-text": $props.weeks.isDay,
                "uni-calendar-item--isDay": $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay,
                "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay,
                "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
                "uni-calendar-item--multiple": $props.weeks.multiple,
                "uni-calendar-item--after-checked": $props.weeks.afterMultiple,
                "uni-calendar-item--disable": $props.weeks.disable
              }])
            },
            vue.toDisplayString($props.weeks.extraInfo.info),
            3
            /* TEXT, CLASS */
          )) : vue.createCommentVNode("v-if", true)
        ])
      ],
      2
      /* CLASS */
    );
  }
  const CalendarItem = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$8], ["__scopeId", "data-v-65626c58"], ["__file", "/Users/daily/Desktop/d9/money_celestial/uni_modules/uni-calendar/components/uni-calendar/uni-calendar-item.vue"]]);
  const { t } = initVueI18n(i18nMessages);
  const _sfc_main$q = {
    components: {
      CalendarItem
    },
    emits: ["close", "confirm", "change", "monthSwitch"],
    props: {
      date: {
        type: String,
        default: ""
      },
      selected: {
        type: Array,
        default() {
          return [];
        }
      },
      lunar: {
        type: Boolean,
        default: false
      },
      startDate: {
        type: String,
        default: ""
      },
      endDate: {
        type: String,
        default: ""
      },
      range: {
        type: Boolean,
        default: false
      },
      insert: {
        type: Boolean,
        default: true
      },
      showMonth: {
        type: Boolean,
        default: true
      },
      clearDate: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        show: false,
        weeks: [],
        calendar: {},
        nowDate: "",
        aniMaskShow: false
      };
    },
    computed: {
      /**
       * for i18n
       */
      okText() {
        return t("uni-calender.ok");
      },
      cancelText() {
        return t("uni-calender.cancel");
      },
      todayText() {
        return t("uni-calender.today");
      },
      monText() {
        return t("uni-calender.MON");
      },
      TUEText() {
        return t("uni-calender.TUE");
      },
      WEDText() {
        return t("uni-calender.WED");
      },
      THUText() {
        return t("uni-calender.THU");
      },
      FRIText() {
        return t("uni-calender.FRI");
      },
      SATText() {
        return t("uni-calender.SAT");
      },
      SUNText() {
        return t("uni-calender.SUN");
      }
    },
    watch: {
      date(newVal) {
        this.init(newVal);
      },
      startDate(val) {
        this.cale.resetSatrtDate(val);
        this.cale.setDate(this.nowDate.fullDate);
        this.weeks = this.cale.weeks;
      },
      endDate(val) {
        this.cale.resetEndDate(val);
        this.cale.setDate(this.nowDate.fullDate);
        this.weeks = this.cale.weeks;
      },
      selected(newVal) {
        this.cale.setSelectInfo(this.nowDate.fullDate, newVal);
        this.weeks = this.cale.weeks;
      }
    },
    created() {
      this.cale = new Calendar({
        selected: this.selected,
        startDate: this.startDate,
        endDate: this.endDate,
        range: this.range
      });
      this.init(this.date);
    },
    methods: {
      // 取消穿透
      clean() {
      },
      bindDateChange(e2) {
        const value = e2.detail.value + "-1";
        this.setDate(value);
        const { year, month } = this.cale.getDate(value);
        this.$emit("monthSwitch", {
          year,
          month
        });
      },
      /**
       * 初始化日期显示
       * @param {Object} date
       */
      init(date) {
        this.cale.setDate(date);
        this.weeks = this.cale.weeks;
        this.nowDate = this.calendar = this.cale.getInfo(date);
      },
      /**
       * 打开日历弹窗
       */
      open() {
        if (this.clearDate && !this.insert) {
          this.cale.cleanMultipleStatus();
          this.init(this.date);
        }
        this.show = true;
        this.$nextTick(() => {
          setTimeout(() => {
            this.aniMaskShow = true;
          }, 50);
        });
      },
      /**
       * 关闭日历弹窗
       */
      close() {
        this.aniMaskShow = false;
        this.$nextTick(() => {
          setTimeout(() => {
            this.show = false;
            this.$emit("close");
          }, 300);
        });
      },
      /**
       * 确认按钮
       */
      confirm() {
        this.setEmit("confirm");
        this.close();
      },
      /**
       * 变化触发
       */
      change() {
        if (!this.insert)
          return;
        this.setEmit("change");
      },
      /**
       * 选择月份触发
       */
      monthSwitch() {
        let {
          year,
          month
        } = this.nowDate;
        this.$emit("monthSwitch", {
          year,
          month: Number(month)
        });
      },
      /**
       * 派发事件
       * @param {Object} name
       */
      setEmit(name) {
        let {
          year,
          month,
          date,
          fullDate,
          lunar,
          extraInfo
        } = this.calendar;
        this.$emit(name, {
          range: this.cale.multipleStatus,
          year,
          month,
          date,
          fulldate: fullDate,
          lunar,
          extraInfo: extraInfo || {}
        });
      },
      /**
       * 选择天触发
       * @param {Object} weeks
       */
      choiceDate(weeks) {
        if (weeks.disable)
          return;
        this.calendar = weeks;
        this.cale.setMultiple(this.calendar.fullDate);
        this.weeks = this.cale.weeks;
        this.change();
      },
      /**
       * 回到今天
       */
      backToday() {
        const nowYearMonth = `${this.nowDate.year}-${this.nowDate.month}`;
        const date = this.cale.getDate(/* @__PURE__ */ new Date());
        const todayYearMonth = `${date.year}-${date.month}`;
        this.init(date.fullDate);
        if (nowYearMonth !== todayYearMonth) {
          this.monthSwitch();
        }
        this.change();
      },
      /**
       * 上个月
       */
      pre() {
        const preDate = this.cale.getDate(this.nowDate.fullDate, -1, "month").fullDate;
        this.setDate(preDate);
        this.monthSwitch();
      },
      /**
       * 下个月
       */
      next() {
        const nextDate = this.cale.getDate(this.nowDate.fullDate, 1, "month").fullDate;
        this.setDate(nextDate);
        this.monthSwitch();
      },
      /**
       * 设置日期
       * @param {Object} date
       */
      setDate(date) {
        this.cale.setDate(date);
        this.weeks = this.cale.weeks;
        this.nowDate = this.cale.getInfo(date);
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_calendar_item = vue.resolveComponent("calendar-item");
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-calendar" }, [
      !$props.insert && $data.show ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: vue.normalizeClass(["uni-calendar__mask", { "uni-calendar--mask-show": $data.aniMaskShow }]),
          onClick: _cache[0] || (_cache[0] = (...args) => $options.clean && $options.clean(...args))
        },
        null,
        2
        /* CLASS */
      )) : vue.createCommentVNode("v-if", true),
      $props.insert || $data.show ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 1,
          class: vue.normalizeClass(["uni-calendar__content", { "uni-calendar--fixed": !$props.insert, "uni-calendar--ani-show": $data.aniMaskShow }])
        },
        [
          !$props.insert ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-calendar__header uni-calendar--fixed-top"
          }, [
            vue.createElementVNode("view", {
              class: "uni-calendar__header-btn-box",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.close && $options.close(...args))
            }, [
              vue.createElementVNode(
                "text",
                { class: "uni-calendar__header-text uni-calendar--fixed-width" },
                vue.toDisplayString($options.cancelText),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", {
              class: "uni-calendar__header-btn-box",
              onClick: _cache[2] || (_cache[2] = (...args) => $options.confirm && $options.confirm(...args))
            }, [
              vue.createElementVNode(
                "text",
                { class: "uni-calendar__header-text uni-calendar--fixed-width" },
                vue.toDisplayString($options.okText),
                1
                /* TEXT */
              )
            ])
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", { class: "uni-calendar__header" }, [
            vue.createElementVNode("view", {
              class: "uni-calendar__header-btn-box",
              onClick: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.pre && $options.pre(...args), ["stop"]))
            }, [
              vue.createElementVNode("view", { class: "uni-calendar__header-btn uni-calendar--left" })
            ]),
            vue.createElementVNode("picker", {
              mode: "date",
              value: $props.date,
              fields: "month",
              onChange: _cache[4] || (_cache[4] = (...args) => $options.bindDateChange && $options.bindDateChange(...args))
            }, [
              vue.createElementVNode(
                "text",
                { class: "uni-calendar__header-text" },
                vue.toDisplayString(($data.nowDate.year || "") + " / " + ($data.nowDate.month || "")),
                1
                /* TEXT */
              )
            ], 40, ["value"]),
            vue.createElementVNode("view", {
              class: "uni-calendar__header-btn-box",
              onClick: _cache[5] || (_cache[5] = vue.withModifiers((...args) => $options.next && $options.next(...args), ["stop"]))
            }, [
              vue.createElementVNode("view", { class: "uni-calendar__header-btn uni-calendar--right" })
            ]),
            vue.createElementVNode(
              "text",
              {
                class: "uni-calendar__backtoday",
                onClick: _cache[6] || (_cache[6] = (...args) => $options.backToday && $options.backToday(...args))
              },
              vue.toDisplayString($options.todayText),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "uni-calendar__box" }, [
            $props.showMonth ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "uni-calendar__box-bg"
            }, [
              vue.createElementVNode(
                "text",
                { class: "uni-calendar__box-bg-text" },
                vue.toDisplayString($data.nowDate.month),
                1
                /* TEXT */
              )
            ])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", { class: "uni-calendar__weeks" }, [
              vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-calendar__weeks-day-text" },
                  vue.toDisplayString($options.SUNText),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-calendar__weeks-day-text" },
                  vue.toDisplayString($options.monText),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-calendar__weeks-day-text" },
                  vue.toDisplayString($options.TUEText),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-calendar__weeks-day-text" },
                  vue.toDisplayString($options.WEDText),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-calendar__weeks-day-text" },
                  vue.toDisplayString($options.THUText),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-calendar__weeks-day-text" },
                  vue.toDisplayString($options.FRIText),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-calendar__weeks-day-text" },
                  vue.toDisplayString($options.SATText),
                  1
                  /* TEXT */
                )
              ])
            ]),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.weeks, (item, weekIndex) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "uni-calendar__weeks",
                  key: weekIndex
                }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(item, (weeks, weeksIndex) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: "uni-calendar__weeks-item",
                        key: weeksIndex
                      }, [
                        vue.createVNode(_component_calendar_item, {
                          class: "uni-calendar-item--hook",
                          weeks,
                          calendar: $data.calendar,
                          selected: $props.selected,
                          lunar: $props.lunar,
                          onChange: $options.choiceDate
                        }, null, 8, ["weeks", "calendar", "selected", "lunar", "onChange"])
                      ]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ],
        2
        /* CLASS */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$7], ["__scopeId", "data-v-b6ab2cfb"], ["__file", "/Users/daily/Desktop/d9/money_celestial/uni_modules/uni-calendar/components/uni-calendar/uni-calendar.vue"]]);
  const _sfc_main$p = {
    __name: "more_info",
    setup(__props) {
      const selectedValues = vue.ref([]);
      const selectedProvince = vue.ref("");
      const selectedCity = vue.ref("");
      const cityData = vue.ref(cityDataJson);
      const onChange = (e2) => {
        var _a;
        const selected = e2.detail.value;
        const province = cityData.value.find((item) => item.value === selected[0]);
        (_a = province == null ? void 0 : province.children) == null ? void 0 : _a.find((item) => item.value === selected[1]);
        selectedProvince.value = e2.detail.value[0].text || "";
        selectedCity.value = e2.detail.value[1].text || "";
        formatAppLog("log", "at pages/login/more_info.vue:108", selectedProvince.value, selectedCity.value);
      };
      const skip = () => {
        uni.reLaunch({
          url: "/pages/index/index"
        });
      };
      const name = vue.ref("");
      const imagePath = vue.ref("");
      const gender = vue.ref("");
      const email = vue.ref("");
      const uploadSuccessUrl = vue.ref("");
      const getGender = () => {
        uni.showActionSheet({
          itemList: ["男", "女"],
          success(res) {
            if (res.tapIndex == 0) {
              gender.value = "male";
            } else {
              gender.value = "female";
            }
          }
        });
      };
      const chooseImg = async () => {
        uni.chooseImage({
          count: 1,
          // 限制用户只能选择一张图片
          success: (res) => {
            const tempFilePaths = res.tempFilePaths;
            imagePath.value = tempFilePaths[0];
            formatAppLog("log", "at pages/login/more_info.vue:144", "-----选择的图片路径：", tempFilePaths[0]);
            uploadImage2(tempFilePaths[0]);
          },
          fail: (err) => {
            formatAppLog("log", "at pages/login/more_info.vue:149", "选择图片失败：", err);
          }
        });
      };
      const token = uni.getStorageSync("accessToken");
      function uploadImage2(filePath) {
        formatAppLog("log", "at pages/login/more_info.vue:158", filePath);
        uni.uploadFile({
          url: uploadUrl,
          // 上传接口 URL
          filePath,
          // 需要上传的文件路径
          name: "image",
          // 后台接收文件的字段名 (根据实际需求)
          header: {
            "Authorization": `Bearer ${token}`
            // 将 JWT Token 添加到 Authorization 请求头中
          },
          success: (uploadFileRes) => {
            if (uploadFileRes.statusCode === 201) {
              const data = JSON.parse(uploadFileRes.data);
              formatAppLog("log", "at pages/login/more_info.vue:174", "上传成功！");
              formatAppLog("log", "at pages/login/more_info.vue:175", "上传的图片 URL:", data);
              uploadSuccessUrl.value = data.image_url;
            } else {
              formatAppLog("log", "at pages/login/more_info.vue:178", "上传失败，状态码：", uploadFileRes.statusCode);
            }
          },
          fail: (err) => {
            formatAppLog("log", "at pages/login/more_info.vue:182", err);
            formatAppLog("error", "at pages/login/more_info.vue:183", "上传文件出错:", err);
          }
        });
      }
      const validateEmail = (email2) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email2);
      };
      const saveMessage = async () => {
        formatAppLog("log", "at pages/login/more_info.vue:202", validateEmail(email.value));
        if (!validateEmail(email.value)) {
          return uni.showToast({
            title: "请输入正确的邮箱",
            icon: "fail",
            duration: 700
          });
        }
        uni.showLoading({
          title: "正在保存中"
        });
        const phoneNumber = uni.getStorageSync("phoneNumber");
        changeUserInfo({ phone_number: phoneNumber, name: name.value || "", icon: uploadSuccessUrl.value || "", gender: gender.value || "", birthdate: birthday.value || "", residence: selectedProvince.value + " " + selectedCity.value || "", email: email.value || "" }).then((res) => {
          uni.setStorageSync("保存的最新用户信息", res);
          uni.hideLoading();
          uni.showToast({
            duration: 1e3,
            icon: "success",
            title: "保存成功"
          });
          setTimeout(() => {
            uni.navigateTo({
              url: "/pages/index/index"
            });
          }, 1e3);
        }).catch((err) => {
          uni.showToast({
            duration: 1e3,
            icon: "fail",
            title: "保存失败"
          });
        });
      };
      const birthday = vue.ref("");
      const calendar2 = vue.ref();
      const openCalendar = () => {
        calendar2._rawValue.open();
      };
      const confirm = (e2) => {
        birthday.value = e2.fulldate;
      };
      vue.ref("");
      vue.ref("");
      vue.ref("");
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_1$4);
        const _component_uni_data_picker = resolveEasycom(vue.resolveDynamicComponent("uni-data-picker"), __easycom_2$4);
        const _component_uni_calendar = resolveEasycom(vue.resolveDynamicComponent("uni-calendar"), __easycom_3);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, {
            title: "完善信息",
            bgc: "#1B46CC",
            isShow: true,
            onClickRight: skip
          }, {
            right: vue.withCtx(() => [
              vue.createTextVNode(" 跳过 ")
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "info_item flex_between" }, [
              vue.createElementVNode("view", { class: "title" }, " 头像 "),
              vue.createElementVNode("view", {
                class: "flex_center",
                onClick: chooseImg
              }, [
                vue.createElementVNode("image", {
                  src: imagePath.value,
                  mode: "aspectFill",
                  class: "head"
                }, null, 8, ["src"]),
                vue.createElementVNode("image", {
                  src: _imports_0$a,
                  mode: "widthFix",
                  class: "arrow_pix"
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "info_item flex_between" }, [
              vue.createElementVNode("view", { class: "title" }, " 昵称 "),
              vue.createVNode(_component_uni_easyinput, {
                class: "uni-mt-5",
                modelValue: name.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => name.value = $event)
              }, null, 8, ["modelValue"])
            ]),
            vue.createElementVNode("view", { class: "info_item flex_between" }, [
              vue.createElementVNode("view", { class: "title" }, " 邮箱 "),
              vue.createVNode(_component_uni_easyinput, {
                class: "uni-mt-5",
                modelValue: email.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => email.value = $event)
              }, null, 8, ["modelValue"])
            ]),
            vue.createElementVNode("view", { class: "info_item flex_between" }, [
              vue.createElementVNode("view", { class: "title" }, " 性别 "),
              vue.createElementVNode("view", {
                class: "flex_center",
                onClick: getGender
              }, [
                vue.createElementVNode(
                  "view",
                  { class: "email" },
                  vue.toDisplayString(gender.value ? gender.value == "male" ? "男" : "女" : "选择"),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("image", {
                  src: _imports_0$a,
                  mode: "widthFix",
                  class: "arrow_pix"
                })
              ])
            ]),
            vue.createElementVNode("view", {
              class: "info_item flex_between",
              onClick: openCalendar
            }, [
              vue.createElementVNode("view", { class: "title" }, " 生日 "),
              vue.createElementVNode("view", { class: "flex_center" }, [
                vue.createElementVNode(
                  "view",
                  { class: "email" },
                  vue.toDisplayString(birthday.value),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("image", {
                  src: _imports_0$a,
                  mode: "widthFix",
                  class: "arrow_pix"
                })
              ])
            ]),
            vue.createElementVNode("view", {
              class: "info_item flex_between",
              style: { "flex": "1" }
            }, [
              vue.createElementVNode("view", { class: "title" }, " 常居地 "),
              vue.createVNode(_component_uni_data_picker, {
                localdata: cityData.value,
                value: selectedValues.value,
                "clear-icon": false,
                mode: "region",
                onChange,
                title: "请选择省市"
              }, null, 8, ["localdata", "value"])
            ]),
            vue.createElementVNode("view", {
              class: "btn flex_center",
              onClick: saveMessage
            }, " 保存信息 ")
          ]),
          vue.createVNode(
            _component_uni_calendar,
            {
              ref_key: "calendar",
              ref: calendar2,
              insert: false,
              onConfirm: confirm
            },
            null,
            512
            /* NEED_PATCH */
          )
        ]);
      };
    }
  };
  const PagesLoginMoreInfo = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-dc27228e"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/login/more_info.vue"]]);
  const _sfc_main$o = {
    __name: "my_point",
    setup(__props) {
      const toWithdrawPoint = () => {
        uni.navigateTo({
          url: "/pages/myAccount/green_point_withdraw"
        });
      };
      const toWithdrawRecord = () => {
        uni.navigateTo({
          url: "/pages/myAccount/green_point_withdraw_record"
        });
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "我的积分" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "list_box" }, [
              vue.createElementVNode("view", {
                class: "list_item flex_between",
                onClick: toWithdrawPoint
              }, [
                vue.createElementVNode("view", { class: "" }, " 提取积分 "),
                vue.createElementVNode("image", {
                  src: _imports_0$a,
                  mode: "widthFix",
                  class: "arrow_pic"
                })
              ]),
              vue.createElementVNode("view", {
                class: "list_item flex_between",
                onClick: toWithdrawRecord
              }, [
                vue.createElementVNode("view", { class: "" }, " 提取记录 "),
                vue.createElementVNode("image", {
                  src: _imports_0$a,
                  mode: "widthFix",
                  class: "arrow_pic"
                })
              ])
            ])
          ])
        ]);
      };
    }
  };
  const PagesMyAccountMyPoint = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-c4092873"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/myAccount/my_point.vue"]]);
  const _sfc_main$n = {
    __name: "point_available",
    setup(__props) {
      const toWithdrawRecord = () => {
        uni.navigateTo({
          url: "/pages/myAccount/red_point_withdraw_record"
        });
      };
      const toStepOne = () => {
        uni.navigateTo({
          url: "/pages/myAccount/exchange_point_step_1"
        });
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "可用积分" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "c_title" }, " 当前可用积分 "),
            vue.createElementVNode("view", { class: "number flex_center" }, " 10,203 "),
            vue.createElementVNode("view", { class: "btns flex_between" }, [
              vue.createElementVNode("view", {
                class: "cancel_btn flex_center",
                onClick: toStepOne
              }, " 兑换积分 "),
              vue.createElementVNode("view", { class: "add_btn flex_center" }, " 提取积分 ")
            ]),
            vue.createElementVNode("view", { class: "list_box" }, [
              vue.createElementVNode("view", { class: "list_item flex_between" }, [
                vue.createElementVNode("view", { class: "" }, " 兑换积分 "),
                vue.createElementVNode("image", {
                  src: _imports_0$a,
                  mode: "widthFix",
                  class: "arrow_pic"
                })
              ]),
              vue.createCommentVNode(' <view class="list_item flex_between">\n					<view class="">\n						兑换商品\n					</view>\n					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pic"></image>\n				</view>\n				<view class="list_item flex_between" @click="toWithdrawPoint">\n					<view class="">\n						提取积分\n					</view>\n					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pic"></image>\n				</view> '),
              vue.createElementVNode("view", {
                class: "list_item flex_between",
                onClick: toWithdrawRecord
              }, [
                vue.createElementVNode("view", { class: "" }, " 积分记录 "),
                vue.createElementVNode("image", {
                  src: _imports_0$a,
                  mode: "widthFix",
                  class: "arrow_pic"
                })
              ])
            ])
          ])
        ]);
      };
    }
  };
  const PagesMyAccountPointAvailable = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-98cb4a56"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/myAccount/point_available.vue"]]);
  const _sfc_main$m = {
    __name: "point_account",
    setup(__props) {
      const toBindAccount = () => {
        uni.navigateTo({
          url: "/pages/myAccount/bind_account"
        });
      };
      const toUnbindAccount = () => {
        uni.navigateTo({
          url: "/pages/myAccount/unbind_account"
        });
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "可用积分" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "list_box" }, [
              vue.createElementVNode("view", {
                class: "list_item flex_between",
                onClick: toBindAccount
              }, [
                vue.createElementVNode("view", { class: "" }, " 绑定账号 "),
                vue.createElementVNode("image", {
                  src: _imports_0$a,
                  mode: "widthFix",
                  class: "arrow_pic"
                })
              ]),
              vue.createElementVNode("view", {
                class: "list_item flex_between",
                onClick: toUnbindAccount
              }, [
                vue.createElementVNode("view", { class: "" }, " 解除绑定 "),
                vue.createElementVNode("image", {
                  src: _imports_0$a,
                  mode: "widthFix",
                  class: "arrow_pic"
                })
              ])
            ])
          ])
        ]);
      };
    }
  };
  const PagesMyAccountPointAccount = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-9711af29"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/myAccount/point_account.vue"]]);
  const _sfc_main$l = {
    __name: "bind_account",
    setup(__props) {
      const userStore = useUserStore();
      const number = vue.ref("");
      const account = vue.ref("");
      account.value = userStore.userInfo.username;
      vue.onMounted(async () => {
      });
      const isChecked = vue.ref(false);
      const changeCheck = () => {
        isChecked.value = !isChecked.value;
      };
      const confirm = async () => {
        if (!isChecked.value)
          return uni.showToast({
            icon: "none",
            title: "请阅读完须知后勾选同意"
          });
        if (!number.value)
          return uni.showToast({
            icon: "none",
            title: "请输入绑定账号"
          });
        try {
          uni.showLoading({
            title: "绑定中"
          });
          await bindPointAccount({ points_account: number.value });
          account.value = number.value;
          uni.hideLoading();
          uni.showToast({
            icon: "none",
            title: "绑定成功"
          });
        } catch (e2) {
          uni.showToast({
            icon: "none",
            title: "绑定失败"
          });
        }
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "绑定账号" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "shop_info" }, [
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 绑定账号 "),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => number.value = $event),
                    type: "number",
                    class: "uni-input",
                    placeholder: "请输入你的积分账号",
                    "placeholder-class": "placeholder_class"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, number.value]
                ])
              ])
            ]),
            vue.createElementVNode("view", {
              class: "radio",
              onClick: changeCheck
            }, [
              vue.createElementVNode("radio", {
                value: "r1",
                checked: isChecked.value,
                color: "#FC5908"
              }, null, 8, ["checked"]),
              vue.createElementVNode("text", { class: "read" }, "我已阅读并同意"),
              vue.createElementVNode("text", { class: "c_title" }, "《绑定须知》")
            ]),
            vue.createElementVNode("view", {
              class: "btn_full",
              onClick: confirm
            }, " 绑定 ")
          ])
        ]);
      };
    }
  };
  const PagesMyAccountBindAccount = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-bbd33f9d"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/myAccount/bind_account.vue"]]);
  const _sfc_main$k = {
    __name: "unbind_account",
    setup(__props) {
      const userStore = useUserStore();
      const account = vue.ref("");
      vue.ref("");
      account.value = userStore.userInfo.username;
      vue.onMounted(async () => {
      });
      const isChecked = vue.ref(false);
      const changeCheck = () => {
        isChecked.value = !isChecked.value;
      };
      const confirm = async () => {
        if (!isChecked.value)
          return uni.showToast({
            icon: "none",
            title: "请阅读完须知后勾选同意"
          });
        if (!account.value)
          return uni.showToast({
            icon: "none",
            title: "未绑定积分账号，请先绑定"
          });
        try {
          uni.showLoading({
            title: "解绑中"
          });
          await unbindPointAccount({ confirm: true });
          uni.hideLoading();
          uni.showToast({
            icon: "none",
            title: "解绑成功"
          });
          account.value = "";
        } catch (e2) {
          uni.showToast({
            icon: "none",
            title: "解绑失败"
          });
        }
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "解除绑定" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "a_title flex_between" }, [
              vue.createElementVNode("view", { class: "" }, " 已绑定的积分账号 ")
            ]),
            vue.createElementVNode(
              "view",
              { class: "account_box" },
              vue.toDisplayString(account.value),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", {
              class: "radio",
              onClick: changeCheck
            }, [
              vue.createElementVNode("radio", {
                value: "r1",
                checked: isChecked.value,
                color: "#FC5908"
              }, null, 8, ["checked"]),
              vue.createElementVNode("text", { class: "read" }, "我已阅读并同意"),
              vue.createElementVNode("text", { class: "c_title" }, "《解除绑定须知》")
            ]),
            vue.createElementVNode("view", {
              class: "btn_full",
              onClick: confirm
            }, " 解除绑定 ")
          ])
        ]);
      };
    }
  };
  const PagesMyAccountUnbindAccount = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-05706c93"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/myAccount/unbind_account.vue"]]);
  const _imports_0$3 = "/static/scan.png";
  const _sfc_main$j = {
    __name: "add_deposit",
    setup(__props) {
      const address = vue.ref("");
      const number = vue.ref("");
      const scan = () => {
        uni.scanCode({
          scanType: ["qrCode"],
          success(res) {
            formatAppLog("log", "at pages/agent/add_deposit.vue:51", res);
          }
        });
      };
      const isChecked = vue.ref(false);
      const changeCheck = () => {
        isChecked.value = !isChecked.value;
      };
      const confirm = () => {
        if (!isChecked.value)
          return uni.showToast({
            icon: "none",
            title: "请阅读完须知后勾选同意"
          });
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "增加保证金" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "shop_info" }, [
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 增加账号 "),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => address.value = $event),
                    class: "uni-input",
                    placeholder: "请输入接收地址",
                    "placeholder-class": "placeholder_class"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, address.value]
                ]),
                vue.createElementVNode("image", {
                  src: _imports_0$3,
                  mode: "widthFix",
                  class: "scan_pic",
                  onClick: scan
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "shop_info" }, [
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 增加金额 "),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => number.value = $event),
                    type: "number",
                    class: "uni-input",
                    placeholder: "请输入金额",
                    "placeholder-class": "placeholder_class"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, number.value]
                ])
              ]),
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_text" }, " 保证金余额 "),
                vue.createElementVNode("view", { class: "s_num" }, " 1100010 ")
              ])
            ]),
            vue.createElementVNode("view", {
              class: "radio",
              onClick: changeCheck
            }, [
              vue.createElementVNode("radio", {
                value: "r1",
                checked: isChecked.value,
                color: "#FC5908"
              }, null, 8, ["checked"]),
              vue.createElementVNode("text", { class: "read" }, "我已阅读并同意"),
              vue.createElementVNode("text", { class: "c_title" }, "《保证金须知》")
            ]),
            vue.createElementVNode("view", {
              class: "btn_full",
              onClick: confirm
            }, " 确认增加 ")
          ])
        ]);
      };
    }
  };
  const PagesAgentAddDeposit = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-a9b824e0"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/agent/add_deposit.vue"]]);
  const _sfc_main$i = {
    __name: "remove_deposit",
    setup(__props) {
      const address = vue.ref("");
      const number = vue.ref("");
      const scan = () => {
        uni.scanCode({
          scanType: ["qrCode"],
          success(res) {
            formatAppLog("log", "at pages/agent/remove_deposit.vue:51", res);
          }
        });
      };
      const isChecked = vue.ref(false);
      const changeCheck = () => {
        isChecked.value = !isChecked.value;
      };
      const confirm = () => {
        if (!isChecked.value)
          return uni.showToast({
            icon: "none",
            title: "请阅读完须知后勾选同意"
          });
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "解除保证金" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "shop_info" }, [
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 解除账号 "),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => address.value = $event),
                    class: "uni-input",
                    placeholder: "请输入接收地址",
                    "placeholder-class": "placeholder_class"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, address.value]
                ]),
                vue.createElementVNode("image", {
                  src: _imports_0$3,
                  mode: "widthFix",
                  class: "scan_pic",
                  onClick: scan
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "shop_info" }, [
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 解除金额 "),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => number.value = $event),
                    type: "number",
                    class: "uni-input",
                    placeholder: "请输入金额",
                    "placeholder-class": "placeholder_class"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, number.value]
                ])
              ]),
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_text" }, " 可解除余额 "),
                vue.createElementVNode("view", { class: "s_num" }, " 1100010 ")
              ])
            ]),
            vue.createElementVNode("view", {
              class: "radio",
              onClick: changeCheck
            }, [
              vue.createElementVNode("radio", {
                value: "r1",
                checked: isChecked.value,
                color: "#FC5908"
              }, null, 8, ["checked"]),
              vue.createElementVNode("text", { class: "read" }, "我已阅读并同意"),
              vue.createElementVNode("text", { class: "c_title" }, "《保证金须知》")
            ]),
            vue.createElementVNode("view", {
              class: "btn_full",
              onClick: confirm
            }, " 确认解除 ")
          ])
        ]);
      };
    }
  };
  const PagesAgentRemoveDeposit = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-f9cb8c94"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/agent/remove_deposit.vue"]]);
  const _sfc_main$h = {};
  function _sfc_render$6(_ctx, _cache) {
    const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
    const _component_uni_col = resolveEasycom(vue.resolveDynamicComponent("uni-col"), __easycom_1$2);
    const _component_uni_row = resolveEasycom(vue.resolveDynamicComponent("uni-row"), __easycom_2$3);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_navBar, { title: "保证金记录" }),
      vue.createVNode(_component_uni_row, { class: "title_row" }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_col, { span: 3 }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "title" }, "序号")
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_col, { span: 9 }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "title" }, "地址")
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_col, { span: 6 }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "title" }, "保证金")
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_col, { span: 6 }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "title" }, "提取时间")
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_uni_row, null, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_col, { span: 3 }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", null, "1")
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_col, { span: 9 }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", null, "DAUS******SDF7A23G22")
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_col, { span: 6 }, {
            default: vue.withCtx(() => [
              vue.createCommentVNode(' <view style="color: #4cbe61;">+100,289,312</view> '),
              vue.createElementVNode("view", { style: { "color": "#fd8c31" } }, "-189,312")
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_col, { span: 6 }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", null, "2024/08/24/18:00")
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]);
  }
  const PagesAgentDepositRecord = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$6], ["__scopeId", "data-v-a1272888"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/agent/deposit_record.vue"]]);
  const _sfc_main$g = {
    __name: "add_deposit",
    setup(__props) {
      const address = vue.ref("");
      const number = vue.ref("");
      const scan = () => {
        uni.scanCode({
          scanType: ["qrCode"],
          success(res) {
            formatAppLog("log", "at pages/recommend/add_deposit.vue:51", res);
          }
        });
      };
      const isChecked = vue.ref(false);
      const changeCheck = () => {
        isChecked.value = !isChecked.value;
      };
      const confirm = () => {
        if (!isChecked.value)
          return uni.showToast({
            icon: "none",
            title: "请阅读完须知后勾选同意"
          });
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "增加保证金" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "shop_info" }, [
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 增加账号 "),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => address.value = $event),
                    class: "uni-input",
                    placeholder: "请输入接收地址",
                    "placeholder-class": "placeholder_class"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, address.value]
                ]),
                vue.createElementVNode("image", {
                  src: _imports_0$3,
                  mode: "widthFix",
                  class: "scan_pic",
                  onClick: scan
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "shop_info" }, [
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 增加金额 "),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => number.value = $event),
                    type: "number",
                    class: "uni-input",
                    placeholder: "请输入金额",
                    "placeholder-class": "placeholder_class"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, number.value]
                ])
              ]),
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_text" }, " 保证金余额 "),
                vue.createElementVNode("view", { class: "s_num" }, " 1100010 ")
              ])
            ]),
            vue.createElementVNode("view", {
              class: "radio",
              onClick: changeCheck
            }, [
              vue.createElementVNode("radio", {
                value: "r1",
                checked: isChecked.value,
                color: "#FC5908"
              }, null, 8, ["checked"]),
              vue.createElementVNode("text", { class: "read" }, "我已阅读并同意"),
              vue.createElementVNode("text", { class: "c_title" }, "《保证金须知》")
            ]),
            vue.createElementVNode("view", {
              class: "btn_full",
              onClick: confirm
            }, " 确认增加 ")
          ])
        ]);
      };
    }
  };
  const PagesRecommendAddDeposit = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-4fd6a1b1"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/recommend/add_deposit.vue"]]);
  const _sfc_main$f = {
    __name: "remove_deposit",
    setup(__props) {
      const address = vue.ref("");
      const number = vue.ref("");
      const scan = () => {
        uni.scanCode({
          scanType: ["qrCode"],
          success(res) {
            formatAppLog("log", "at pages/recommend/remove_deposit.vue:51", res);
          }
        });
      };
      const isChecked = vue.ref(false);
      const changeCheck = () => {
        isChecked.value = !isChecked.value;
      };
      const confirm = () => {
        if (!isChecked.value)
          return uni.showToast({
            icon: "none",
            title: "请阅读完须知后勾选同意"
          });
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "解除保证金" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "shop_info" }, [
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 解除账号 "),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => address.value = $event),
                    class: "uni-input",
                    placeholder: "请输入接收地址",
                    "placeholder-class": "placeholder_class"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, address.value]
                ]),
                vue.createElementVNode("image", {
                  src: _imports_0$3,
                  mode: "widthFix",
                  class: "scan_pic",
                  onClick: scan
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "shop_info" }, [
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 解除金额 "),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => number.value = $event),
                    type: "number",
                    class: "uni-input",
                    placeholder: "请输入金额",
                    "placeholder-class": "placeholder_class"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, number.value]
                ])
              ]),
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_text" }, " 可解除余额 "),
                vue.createElementVNode("view", { class: "s_num" }, " 1100010 ")
              ])
            ]),
            vue.createElementVNode("view", {
              class: "radio",
              onClick: changeCheck
            }, [
              vue.createElementVNode("radio", {
                value: "r1",
                checked: isChecked.value,
                color: "#FC5908"
              }, null, 8, ["checked"]),
              vue.createElementVNode("text", { class: "read" }, "我已阅读并同意"),
              vue.createElementVNode("text", { class: "c_title" }, "《保证金须知》")
            ]),
            vue.createElementVNode("view", {
              class: "btn_full",
              onClick: confirm
            }, " 确认解除 ")
          ])
        ]);
      };
    }
  };
  const PagesRecommendRemoveDeposit = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-620816bd"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/recommend/remove_deposit.vue"]]);
  const _sfc_main$e = {};
  function _sfc_render$5(_ctx, _cache) {
    const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
    const _component_uni_col = resolveEasycom(vue.resolveDynamicComponent("uni-col"), __easycom_1$2);
    const _component_uni_row = resolveEasycom(vue.resolveDynamicComponent("uni-row"), __easycom_2$3);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_navBar, { title: "保证金记录" }),
      vue.createVNode(_component_uni_row, { class: "title_row" }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_col, { span: 3 }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "title" }, "序号")
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_col, { span: 9 }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "title" }, "地址")
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_col, { span: 6 }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "title" }, "保证金")
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_col, { span: 6 }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "title" }, "提取时间")
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_uni_row, null, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_col, { span: 3 }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", null, "1")
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_col, { span: 9 }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", null, "DAUS******SDF7A23G22")
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_col, { span: 6 }, {
            default: vue.withCtx(() => [
              vue.createCommentVNode(' <view style="color: #4cbe61;">+100,289,312</view> '),
              vue.createElementVNode("view", { style: { "color": "#fd8c31" } }, "-189,312")
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_col, { span: 6 }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", null, "2024/08/24/18:00")
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]);
  }
  const PagesRecommendDepositRecord = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$5], ["__scopeId", "data-v-f3fe22dd"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/recommend/deposit_record.vue"]]);
  const _sfc_main$d = {
    __name: "publicShopList",
    props: {
      list: {
        type: Array
      }
    },
    setup(__props) {
      vue.onMounted(async () => {
      });
      const toDetail = () => {
        uni.navigateTo({
          url: "/pages/merchant/merchant_detail"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createElementVNode("view", { class: "shop_list" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(__props.list, (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "shop_item flex",
                  onClick: toDetail,
                  key: item.id
                }, [
                  vue.createElementVNode("image", {
                    src: item.avatar,
                    mode: "aspectFill",
                    class: "shop_pic"
                  }, null, 8, ["src"]),
                  vue.createElementVNode("view", {
                    class: "",
                    style: { "flex": "1" }
                  }, [
                    vue.createElementVNode(
                      "view",
                      { class: "shop_name" },
                      vue.toDisplayString(item.name),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", { class: "pic_box flex" }, [
                      (vue.openBlock(), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(5, (star, i2) => {
                          return vue.createElementVNode("image", {
                            src: _imports_0$b,
                            mode: "widthFix",
                            class: "star_pic",
                            key: i2
                          });
                        }),
                        64
                        /* STABLE_FRAGMENT */
                      )),
                      vue.createElementVNode("view", { class: "point" }, " 5 ")
                    ]),
                    vue.createElementVNode("view", { class: "flex" }, [
                      vue.createElementVNode("image", {
                        src: _imports_1$7,
                        mode: "widthFix",
                        class: "location_pic"
                      }),
                      vue.createElementVNode(
                        "view",
                        { class: "district" },
                        vue.toDisplayString(item.address),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  vue.createCommentVNode(' <view class="distance">\n					{{item.distance/1000}}km\n				</view> ')
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]);
      };
    }
  };
  const __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-ad76e2db"], ["__file", "/Users/daily/Desktop/d9/money_celestial/components/publicShopList/publicShopList.vue"]]);
  const _sfc_main$c = {
    __name: "merchant_list",
    setup(__props) {
      const range = vue.ref({});
      const provinceId = vue.ref();
      vue.onMounted(async () => {
        let routes = getCurrentPages();
        routes[routes.length - 1].route;
        let curParam = routes[routes.length - 1].options;
        provinceId.value = curParam.provinceId;
        getShopList2();
        const { results } = await getShopCategories();
        range.value = results.map((i2) => {
          return {
            text: i2.name,
            value: i2.id,
            disable: false
          };
        });
      });
      const time = vue.ref("created_at");
      const categoryId = vue.ref("");
      const shopList = vue.ref([]);
      uni.getStorageSync("address_info");
      const getShopList2 = async () => {
        const params = vue.ref({
          ordering: time.value,
          category_id: categoryId.value
        });
        uni.showLoading({
          title: "加载中"
        });
        const { results } = await getAgentShopList(provinceId.value, params.value);
        shopList.value = results;
        uni.hideLoading();
      };
      const filterTime = (i2) => {
        time.value = i2;
        shopList.value = [];
        getShopList2();
      };
      const category = vue.ref("");
      const changeRange = (e2) => {
        categoryId.value = e2;
        shopList.value = [];
        getShopList2();
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        const _component_uni_data_select = resolveEasycom(vue.resolveDynamicComponent("uni-data-select"), __easycom_1$3);
        const _component_publicShopList = resolveEasycom(vue.resolveDynamicComponent("publicShopList"), __easycom_2$1);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "商家列表" }),
          vue.createElementVNode("view", { class: "filter_list" }, [
            vue.createElementVNode("view", {
              class: "flex_center",
              style: { "flex": "1" }
            }, [
              vue.createElementVNode("view", {
                class: "",
                style: { "flex": "1", "text-align": "right" }
              }, [
                vue.createElementVNode("image", {
                  src: _imports_0$5,
                  mode: "widthFix",
                  class: "type_pic"
                })
              ]),
              vue.createCommentVNode(" <view>\n					类目\n				</view> "),
              vue.createVNode(_component_uni_data_select, {
                modelValue: category.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => category.value = $event),
                localdata: range.value,
                placeholder: "类目",
                clear: false,
                onChange: changeRange
              }, null, 8, ["modelValue", "localdata"])
            ]),
            vue.createElementVNode("view", {
              class: "flex_center",
              style: { "flex": "1" }
            }, [
              vue.createElementVNode("view", { class: "" }, " 入驻时间 "),
              time.value == "created_at" ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "",
                onClick: _cache[1] || (_cache[1] = ($event) => filterTime("-created_at"))
              }, [
                vue.createElementVNode("image", {
                  src: _imports_1$4,
                  mode: "widthFix",
                  class: "arrow_fill"
                }),
                vue.createElementVNode("image", {
                  src: _imports_2$1,
                  mode: "widthFix",
                  class: "arrow_fill"
                })
              ])) : vue.createCommentVNode("v-if", true),
              time.value == "-created_at" ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "",
                onClick: _cache[2] || (_cache[2] = ($event) => filterTime("created_at"))
              }, [
                vue.createElementVNode("image", {
                  src: _imports_2$1,
                  mode: "widthFix",
                  class: "arrow_fill",
                  style: { "transform": "rotate(180deg)" }
                }),
                vue.createElementVNode("image", {
                  src: _imports_1$4,
                  mode: "widthFix",
                  class: "arrow_fill",
                  style: { "transform": "rotate(180deg)" }
                })
              ])) : vue.createCommentVNode("v-if", true)
            ])
          ]),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createVNode(_component_publicShopList, { list: shopList.value }, null, 8, ["list"])
          ])
        ]);
      };
    }
  };
  const PagesAgentMerchantList = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-017395ae"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/agent/merchant_list.vue"]]);
  const _sfc_main$b = {
    __name: "merchant_list",
    setup(__props) {
      const range = vue.ref({});
      vue.onMounted(async () => {
        getShopList2();
        const { results } = await getShopCategories();
        range.value = results.map((i2) => {
          return {
            text: i2.name,
            value: i2.id,
            disable: false
          };
        });
      });
      const time = vue.ref("created_at");
      const categoryId = vue.ref("");
      const shopList = vue.ref([]);
      const { location: location2 } = uni.getStorageSync("address_info");
      const getShopList2 = async () => {
        const params = vue.ref({
          ordering: time.value
        });
        if (categoryId.value) {
          params.value.categories = categoryId.value;
        }
        uni.showLoading({
          title: "加载中"
        });
        const { results } = await getRecommendOfficerInfo(params.value);
        const locaList = results.map((shop) => ({ latitude: shop.latitude, longitude: shop.longitude }));
        shopList.value = await calculateDistances({ latitude: location2.lat, longitude: location2.lng }, locaList);
        uni.hideLoading();
      };
      const filterTime = (i2) => {
        time.value = i2;
        shopList.value = [];
        getShopList2();
      };
      const category = vue.ref("");
      const changeRange = (e2) => {
        categoryId.value = e2;
        shopList.value = [];
        getShopList2();
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        const _component_uni_data_select = resolveEasycom(vue.resolveDynamicComponent("uni-data-select"), __easycom_1$3);
        const _component_publicShopList = resolveEasycom(vue.resolveDynamicComponent("publicShopList"), __easycom_2$1);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "商家列表" }),
          vue.createElementVNode("view", { class: "filter_list" }, [
            vue.createElementVNode("view", {
              class: "flex_center",
              style: { "flex": "1" }
            }, [
              vue.createElementVNode("view", {
                class: "",
                style: { "flex": "1", "text-align": "right" }
              }, [
                vue.createElementVNode("image", {
                  src: _imports_0$5,
                  mode: "widthFix",
                  class: "type_pic"
                })
              ]),
              vue.createCommentVNode(" <view>\n					类目\n				</view> "),
              vue.createVNode(_component_uni_data_select, {
                modelValue: category.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => category.value = $event),
                localdata: range.value,
                placeholder: "类目",
                clear: false,
                onChange: changeRange
              }, null, 8, ["modelValue", "localdata"])
            ]),
            vue.createElementVNode("view", {
              class: "flex_center",
              style: { "flex": "1" }
            }, [
              vue.createElementVNode("view", { class: "" }, " 入驻时间 "),
              time.value == "created_at" ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "",
                onClick: _cache[1] || (_cache[1] = ($event) => filterTime("-created_at"))
              }, [
                vue.createElementVNode("image", {
                  src: _imports_1$4,
                  mode: "widthFix",
                  class: "arrow_fill"
                }),
                vue.createElementVNode("image", {
                  src: _imports_2$1,
                  mode: "widthFix",
                  class: "arrow_fill"
                })
              ])) : vue.createCommentVNode("v-if", true),
              time.value == "-created_at" ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "",
                onClick: _cache[2] || (_cache[2] = ($event) => filterTime("created_at"))
              }, [
                vue.createElementVNode("image", {
                  src: _imports_2$1,
                  mode: "widthFix",
                  class: "arrow_fill",
                  style: { "transform": "rotate(180deg)" }
                }),
                vue.createElementVNode("image", {
                  src: _imports_1$4,
                  mode: "widthFix",
                  class: "arrow_fill",
                  style: { "transform": "rotate(180deg)" }
                })
              ])) : vue.createCommentVNode("v-if", true)
            ])
          ]),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createVNode(_component_publicShopList, { list: shopList.value }, null, 8, ["list"])
          ])
        ]);
      };
    }
  };
  const PagesRecommendMerchantList = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-d3cd92c3"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/recommend/merchant_list.vue"]]);
  const questions = [
    {
      question: "满仓体系的核心逻辑是什么？",
      options: [
        "A. 商家数量的增加与用户参与",
        "B. 平台广告收入的增加",
        "C. 用户对平台的黏性",
        "D. 平台技术的提升"
      ],
      correct_answer: "A",
      answer: "商家数量的增加与用户参与"
    },
    {
      question: "商家推荐官的主要职责是什么？",
      options: [
        "A. 购买满仓的服务",
        "B. 识别并推荐优质商家加入平台",
        "C. 为平台撰写推广文章",
        "D. 管理平台的日常运营"
      ],
      correct_answer: "B",
      answer: "识别并推荐优质商家加入平台"
    },
    {
      question: "满仓生态的推广策略包括以下哪项？",
      options: [
        "A. 大规模电视广告",
        "B. 通过地推团队吸引更多商家",
        "C. 社交媒体的广泛推广",
        "D. 线上促销活动"
      ],
      correct_answer: "B",
      answer: "通过地推团队吸引更多商家"
    },
    {
      question: "商家推荐官通过什么方式获得收益？",
      options: [
        "A. 销售广告位",
        "B. 推广商品",
        "C. 推荐商家并协助其运营",
        "D. 提供咨询服务"
      ],
      correct_answer: "C",
      answer: "推荐商家并协助其运营"
    },
    {
      question: "满仓生态的代理模式包括以下哪一项？",
      options: [
        "A. 代理商自行定价商品",
        "B. 代理商需要购买满仓的服务并取得代理资格",
        "C. 代理商提供技术支持",
        "D. 代理商负责管理用户账户"
      ],
      correct_answer: "B",
      answer: "代理商需要购买满仓的服务并取得代理资格"
    },
    {
      question: "商家推荐官的角色是什么？",
      options: [
        "A. 平台的内容创作者",
        "B. 商家与平台之间的重要纽带",
        "C. 平台的技术支持人员",
        "D. 商家的财务顾问"
      ],
      correct_answer: "B",
      answer: "商家与平台之间的重要纽带"
    },
    {
      question: "满仓体系的结构是什么？",
      options: [
        "A. 平台内部管理层次",
        "B. 商家与代理节点的股份化管理",
        "C. 用户反馈机制",
        "D. 广告推广体系"
      ],
      correct_answer: "B",
      answer: "商家与代理节点的股份化管理"
    },
    {
      question: "成为商家推荐官的第一步是什么？",
      options: [
        "A. 购买满仓产品",
        "B. 申请并通过平台的考核",
        "C. 提交市场分析报告",
        "D. 注册成为满仓用户"
      ],
      correct_answer: "B",
      answer: "申请并通过平台的考核"
    },
    {
      question: "满仓生态的成立是基于什么样的商业逻辑？",
      options: [
        "A. 用户参与和商家数量的增长",
        "B. 平台技术的提升",
        "C. 广告投放的增加",
        "D. 扩展国际市场"
      ],
      correct_answer: "A",
      answer: "用户参与和商家数量的增长"
    },
    {
      question: "商家推荐官如何扩展自己的推荐网络？",
      options: [
        "A. 提供市场分析服务",
        "B. 推荐其他人成为推荐官",
        "C. 为商家提供技术支持",
        "D. 管理平台的广告投放"
      ],
      correct_answer: "B",
      answer: "推荐其他人成为推荐官"
    },
    {
      question: "满仓生态提供的综合服务不包括以下哪项？",
      options: [
        "A. 拍摄专业宣传片",
        "B. 连锁经营辅导",
        "C. 提供物流配送",
        "D. 专业咨询服务"
      ],
      correct_answer: "C",
      answer: "提供物流配送"
    },
    {
      question: "满仓体系的推广效果主要依靠什么手段？",
      options: [
        "A. 社交媒体营销",
        "B. 大数据分析和精准营销",
        "C. 传统媒体广告",
        "D. 用户口碑传播"
      ],
      correct_answer: "B",
      answer: "大数据分析和精准营销"
    },
    {
      question: "商家推荐官的持续支持包括以下哪项内容？",
      options: [
        "A. 提供财务管理建议",
        "B. 定期检查商家的运营状况",
        "C. 提供商铺装修建议",
        "D. 代理商的考核和评估"
      ],
      correct_answer: "B",
      answer: "定期检查商家的运营状况"
    },
    {
      question: "满仓生态的去中心化特性通过什么方式实现？",
      options: [
        "A. 使用第三方支付平台",
        "B. 区块链技术",
        "C. 依赖平台的中心服务器",
        "D. 通过社交媒体管理"
      ],
      correct_answer: "B",
      answer: "区块链技术"
    },
    {
      question: "满仓体系的代理模式主要通过什么方式实现分润？",
      options: [
        "A. 商家购买服务后直接支付",
        "B. 市级代理从商家的收益中获得分润",
        "C. 平台内部管理层决定",
        "D. 用户对代理商的直接付款"
      ],
      correct_answer: "B",
      answer: "市级代理从商家的收益中获得分润"
    },
    {
      question: "商家推荐官在商家成功后可以获得什么奖励？",
      options: [
        "A. 现金奖励",
        "B. 交易收益的一部分",
        "C. 平台股票",
        "D. 商家的广告收入"
      ],
      correct_answer: "B",
      answer: "交易收益的一部分"
    },
    {
      question: "满仓生态未来的重点发展方向不包括以下哪项？",
      options: [
        "A. 技术创新",
        "B. 商业模式创新",
        "C. 传统营销手段扩展",
        "D. 全球化发展"
      ],
      correct_answer: "C",
      answer: "传统营销手段扩展"
    },
    {
      question: "满仓体系中的商家如何分润？",
      options: [
        "A. 与代理和参与节点分润",
        "B. 与所有平台用户分润",
        "C. 独享所有收益",
        "D. 通过平台审核分润"
      ],
      correct_answer: "A",
      answer: "与代理和参与节点分润"
    },
    {
      question: "满仓生态中的区块链技术不包括以下哪一功能？",
      options: [
        "A. 数据透明与安全",
        "B. 商家与用户的直接连接",
        "C. 广告投放的管理",
        "D. 智能合约与自动化"
      ],
      correct_answer: "C",
      answer: "广告投放的管理"
    },
    {
      question: "商家推荐官的晋升途径是什么？",
      options: [
        "A. 成为平台股东",
        "B. 晋升为高级推荐官",
        "C. 成为商家的财务顾问",
        "D. 管理平台的市场推广团队"
      ],
      correct_answer: "B",
      answer: "晋升为高级推荐官"
    },
    {
      question: "满仓体系的成立背景是什么？",
      options: [
        "A. 电商平台的扩展",
        "B. 商家和用户数量的增加",
        "C. 盈利模式的优化",
        "D. 地价的提升"
      ],
      correct_answer: "C",
      answer: "盈利模式的优化"
    },
    {
      question: "商家推荐官的市场分析能力为何重要？",
      options: [
        "A. 增加个人收益",
        "B. 改善平台的用户体验",
        "C. 识别并推荐适合的商家",
        "D. 优化商家的财务状况"
      ],
      correct_answer: "C",
      answer: "识别并推荐适合的商家"
    },
    {
      question: "满仓生态的目标是什么？",
      options: [
        "A. 提高平台的广告收入",
        "B. 打造繁荣的商业生态系统",
        "C. 吸引投资者入驻",
        "D. 提供更多物流支持"
      ],
      correct_answer: "B",
      answer: "打造繁荣的商业生态系统"
    },
    {
      question: "商家推荐官需要具备哪种能力？",
      options: [
        "A. 技术编程能力",
        "B. 运营管理能力",
        "C. 市场推广能力",
        "D. 产品开发能力"
      ],
      correct_answer: "C",
      answer: "市场推广能力"
    },
    {
      question: "满仓体系的收益分配模式是怎样的？",
      options: [
        "A. 商家与用户按比例分成",
        "B. 商家与代理商分润",
        "C. 平台独占收益",
        "D. 商家独享收益"
      ],
      correct_answer: "B",
      answer: "商家与代理商分润"
    },
    {
      question: "商家推荐官的考核内容是什么？",
      options: [
        "A. 平台规则的理解",
        "B. 广告投放效果",
        "C. 商家运营状况",
        "D. 用户评价"
      ],
      correct_answer: "A",
      answer: "平台规则的理解"
    },
    {
      question: "商家推荐官如何提升推荐商家的成功率？",
      options: [
        "A. 提供财务支持",
        "B. 提供市场推广建议",
        "C. 提供技术支持",
        "D. 提供法律咨询"
      ],
      correct_answer: "B",
      answer: "提供市场推广建议"
    },
    {
      question: "满仓生态的商业模式创新包括以下哪项？",
      options: [
        "A. 提供线下推广活动",
        "B. 引入去中心化自治组织（DAO）",
        "C. 增加广告投放",
        "D. 扩展物流配送服务"
      ],
      correct_answer: "B",
      answer: "引入去中心化自治组织（DAO）"
    },
    {
      question: "满仓生态的未来展望不包括以下哪项？",
      options: [
        "A. 继续优化和扩展功能与服务",
        "B. 提升商家的市场竞争力",
        "C. 推广传统商业模式",
        "D. 引入前沿区块链技术"
      ],
      correct_answer: "C",
      answer: "推广传统商业模式"
    },
    {
      question: "商家推荐官的持续收益来源是什么？",
      options: [
        "A. 单次交易",
        "B. 推荐多个商家并协助其运营",
        "C. 平台的广告收入",
        "D. 用户的直接付款"
      ],
      correct_answer: "B",
      answer: "推荐多个商家并协助其运营"
    },
    {
      question: "满仓生态在D9商家联盟中的地位如何？",
      options: [
        "A. 次要功能",
        "B. 主要支持平台",
        "C. 独立运营的子平台",
        "D. 商家与用户的桥梁"
      ],
      correct_answer: "B",
      answer: "主要支持平台"
    },
    {
      question: "满仓体系如何帮助商家提升盈利？",
      options: [
        "A. 提供用户流量支持",
        "B. 提供技术支持",
        "C. 提供市场推广策略",
        "D. 提供财务管理"
      ],
      correct_answer: "C",
      answer: "提供市场推广策略"
    },
    {
      question: "商家推荐官在平台中的作用是什么？",
      options: [
        "A. 优化平台用户体验",
        "B. 提高平台的技术水平",
        "C. 扩展商家基础",
        "D. 管理商家的财务状况"
      ],
      correct_answer: "C",
      answer: "扩展商家基础"
    },
    {
      question: "满仓生态通过哪种技术提高了数据的透明性和安全性？",
      options: [
        "A. 人工智能",
        "B. 区块链技术",
        "C. 大数据分析",
        "D. 云计算"
      ],
      correct_answer: "B",
      answer: "区块链技术"
    },
    {
      question: "商家推荐官如何通过平台获得晋升？",
      options: [
        "A. 增加推荐商家的数量和质量",
        "B. 提供技术支持",
        "C. 提高平台的广告收入",
        "D. 优化商家的财务状况"
      ],
      correct_answer: "A",
      answer: "增加推荐商家的数量和质量"
    },
    {
      question: "满仓生态的推广主要依赖于什么？",
      options: [
        "A. 社交媒体营销",
        "B. 地推团队的建立",
        "C. 广告投放",
        "D. 用户口碑"
      ],
      correct_answer: "B",
      answer: "地推团队的建立"
    },
    {
      question: "商家推荐官在推荐商家时需要做什么？",
      options: [
        "A. 编写平台使用手册",
        "B. 深入了解商家的业务模式和需求",
        "C. 提供财务支持",
        "D. 提供物流服务"
      ],
      correct_answer: "B",
      answer: "深入了解商家的业务模式和需求"
    },
    {
      question: "满仓生态在区块链技术上的未来展望不包括以下哪项？",
      options: [
        "A. 零知识证明",
        "B. 多方计算",
        "C. 中心化数据处理",
        "D. 智能合约优化"
      ],
      correct_answer: "C",
      answer: "中心化数据处理"
    },
    {
      question: "商家推荐官如何管理商家的店铺？",
      options: [
        "A. 提供技术支持",
        "B. 优化商品展示",
        "C. 提供财务建议",
        "D. 提供法律咨询"
      ],
      correct_answer: "B",
      answer: "优化商品展示"
    },
    {
      question: "满仓生态通过什么方式吸引全球商业伙伴的参与？",
      options: [
        "A. 提供物流支持",
        "B. 举办国际性的发布会和演讲活动",
        "C. 提供用户流量",
        "D. 提高平台广告收入"
      ],
      correct_answer: "B",
      answer: "举办国际性的发布会和演讲活动"
    }
  ];
  const questionsData = {
    questions
  };
  const _sfc_main$a = {
    setup() {
      const allQuestions = vue.ref([]);
      const currentQuestions = vue.ref([]);
      const selectedAnswers = vue.ref([]);
      const incorrectQuestions = vue.ref([]);
      const showAnswers = vue.ref(false);
      const isSubmitted = vue.ref(false);
      const userStore = useUserStore();
      const userAddress = uni.getStorageSync("userInfo").residence;
      const userName = uni.getStorageSync("userInfo").name;
      const initQuestions = () => {
        allQuestions.value = questionsData.questions;
        currentQuestions.value = getRandomQuestions(5);
        selectedAnswers.value = Array(5).fill("");
        showAnswers.value = false;
        isSubmitted.value = false;
      };
      const getRandomQuestions = (count) => {
        let questionsCopy = [...allQuestions.value];
        let selected = [];
        while (selected.length < count) {
          const randomIndex = Math.floor(Math.random() * questionsCopy.length);
          selected.push(questionsCopy.splice(randomIndex, 1)[0]);
        }
        return selected;
      };
      const extractCityName = (location2) => {
        const parts = location2.split(" ");
        return parts[parts.length - 1];
      };
      const selectAnswer = (questionIndex, selectedOption) => {
        selectedAnswers.value[questionIndex] = selectedOption;
      };
      const submitAnswers = async () => {
        incorrectQuestions.value = [];
        currentQuestions.value.forEach((question, index) => {
          if (selectedAnswers.value[index] !== question.correct_answer + ". " + question.answer) {
            incorrectQuestions.value.push(question);
          }
        });
        isSubmitted.value = true;
        if (incorrectQuestions.value.length > 0) {
          uni.showToast({
            title: "有答错的题目，点击查看答案！",
            icon: "none"
          });
        } else {
          uni.showToast({
            title: "恭喜，全部正确！",
            icon: "success"
          });
          try {
            uni.showLoading({
              title: "提交中"
            });
            const username = userStore.userInfo.username;
            const { results } = await getMerchantList$1();
            const cityName = await extractCityName(userAddress);
            formatAppLog("log", "at pages/recommend/recommend_test.vue:116", "推荐官所在地 ", cityName);
            const res = await getCitiesDetail(cityName);
            const cityCode = res.code;
            formatAppLog("log", "at pages/recommend/recommend_test.vue:119", "推荐官所在城市代码 ", cityCode);
            const phoneNumber = uni.getStorageSync("phoneNumber");
            formatAppLog("log", "at pages/recommend/recommend_test.vue:121", "手机号码", phoneNumber);
            await createRecommendOfficer({ user: phoneNumber, name: userName, city: cityName });
            uni.hideLoading();
            uni.navigateTo({
              url: "/pages/recommend/recommend_management"
            });
          } catch (e2) {
            uni.showToast({
              title: "出错啦",
              icon: "none"
            });
          }
        }
      };
      const showCorrectAnswers = () => {
        showAnswers.value = true;
      };
      const resetQuiz = () => {
        initQuestions();
      };
      vue.onMounted(() => {
        initQuestions();
      });
      return {
        currentQuestions,
        selectedAnswers,
        showAnswers,
        isSubmitted,
        selectAnswer,
        submitAnswers,
        showCorrectAnswers,
        resetQuiz,
        extractCityName
      };
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_navBar, { title: "推荐官考试" }),
      vue.createElementVNode("view", { class: "content" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($setup.currentQuestions, (question, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              class: "question-card"
            }, [
              vue.createElementVNode(
                "text",
                { class: "title" },
                vue.toDisplayString(index + 1) + ". " + vue.toDisplayString(question.question),
                1
                /* TEXT */
              ),
              vue.createElementVNode("radio-group", {
                onChange: ($event) => $setup.selectAnswer(index, $event.detail.value)
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(question.options, (option, i2) => {
                    return vue.openBlock(), vue.createElementBlock("view", { key: i2 }, [
                      vue.createElementVNode("label", null, [
                        vue.createElementVNode("radio", {
                          value: option,
                          checked: $setup.selectedAnswers[index] === option,
                          disabled: $setup.showAnswers,
                          color: "#FC5908"
                        }, null, 8, ["value", "checked", "disabled"]),
                        vue.createTextVNode(
                          vue.toDisplayString(option),
                          1
                          /* TEXT */
                        )
                      ])
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ], 40, ["onChange"]),
              vue.createCommentVNode(" 答案展示 "),
              vue.createElementVNode(
                "view",
                { class: "answer" },
                " 正确答案：" + vue.toDisplayString(question.correct_answer),
                1
                /* TEXT */
              )
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        )),
        !$setup.showAnswers ? (vue.openBlock(), vue.createElementBlock("button", {
          key: 0,
          onClick: _cache[0] || (_cache[0] = (...args) => $setup.submitAnswers && $setup.submitAnswers(...args)),
          class: "btn_full"
        }, "提交答案")) : vue.createCommentVNode("v-if", true),
        !$setup.showAnswers && $setup.isSubmitted ? (vue.openBlock(), vue.createElementBlock("button", {
          key: 1,
          onClick: _cache[1] || (_cache[1] = (...args) => $setup.showCorrectAnswers && $setup.showCorrectAnswers(...args)),
          class: "btn_plain"
        }, "查看答案")) : vue.createCommentVNode("v-if", true),
        $setup.showAnswers ? (vue.openBlock(), vue.createElementBlock("button", {
          key: 2,
          onClick: _cache[2] || (_cache[2] = (...args) => $setup.resetQuiz && $setup.resetQuiz(...args)),
          class: "btn_full"
        }, "重新答题")) : vue.createCommentVNode("v-if", true)
      ])
    ]);
  }
  const PagesRecommendRecommendTest = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$4], ["__scopeId", "data-v-f9f250b0"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/recommend/recommend_test.vue"]]);
  const _imports_0$2 = "/static/record.png";
  const _imports_1$1 = "/static/copy.png";
  const _sfc_main$9 = {
    __name: "exchange_point_step_1",
    setup(__props) {
      const toNext = () => {
        uni.navigateTo({
          url: "/pages/myAccount/exchange_point_step_2"
        });
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, {
            title: "兑换积分",
            isShow: true
          }, {
            right: vue.withCtx(() => [
              vue.createElementVNode("image", {
                src: _imports_0$2,
                mode: "widthFix",
                class: "record_pic"
              })
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "tip" }, " 兑换积分前，请先复制下方地址，确保充值完成后，提交您的兑换记录。 "),
            vue.createElementVNode("view", { class: "copy_box flex_between" }, [
              vue.createElementVNode("view", { class: "" }, " AGxdhfdjfdk3432gewtw234532rdfd3 "),
              vue.createElementVNode("image", {
                src: _imports_1$1,
                mode: "widthFix",
                class: "copy_pic"
              })
            ]),
            vue.createElementVNode("view", { class: "text_box" }, [
              vue.createElementVNode("view", {
                class: "",
                style: { "color": "#FC5908" }
              }, " · 请复制您充值时的哈希值 "),
              vue.createElementVNode("view", { class: "" }, " · 兑换时间：AM 9:00 ~ pm 9:00 ")
            ]),
            vue.createElementVNode("view", {
              class: "btn_full",
              onClick: toNext
            }, " 我要兑换 ")
          ])
        ]);
      };
    }
  };
  const PagesMyAccountExchangePointStep1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-cc2f4566"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/myAccount/exchange_point_step_1.vue"]]);
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation({
        ...options
      });
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, {
          styles,
          ...config
        }, (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config
        } = obj;
        this._animateRun(styles, config).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config = {}) {
      this.animation.step(config);
      return this;
    }
    run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn === "function" && fn();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$8 = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      },
      onceRender: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      // 生成样式数据
      stylesObject() {
        let styles = {
          ...this.styles,
          "transition-duration": this.duration / 1e3 + "s"
        };
        let transform = "";
        for (let i2 in styles) {
          let line = this.toLine(i2);
          transform += line + ":" + styles[i2] + ";";
        }
        return transform;
      },
      // 初始化动画条件
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      /**
       *  ref 触发 初始化动画
       */
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      /**
       * 点击组件触发回调
       */
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      /**
       * ref 触发 动画分组
       * @param {Object} obj
       */
      step(obj, config = {}) {
        if (!this.animation)
          return;
        for (let i2 in obj) {
          try {
            if (typeof obj[i2] === "object") {
              this.animation[i2](...obj[i2]);
            } else {
              this.animation[i2](obj[i2]);
            }
          } catch (e2) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:148", `方法 ${i2} 不存在`);
          }
        }
        this.animation.step(config);
        return this;
      },
      /**
       *  ref 触发 执行动画
       */
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      // 开始过度动画
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      // 关闭过度动画
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      // 处理动画开始前的默认样式
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode2) => {
          if (mode2 === "fade") {
            styles.opacity = this.animationType(type2)[mode2];
          } else {
            styles.transform += this.animationType(type2)[mode2] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode2) => {
            buildStyle(type, mode2);
          });
        }
        return styles;
      },
      // 处理内置组合动画
      tranfromInit(type) {
        let buildTranfrom = (type2, mode2) => {
          let aniNum = null;
          if (mode2 === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode2 === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode2 === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode2 === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode2 === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode2]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode2) => {
            buildTranfrom(type, mode2);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 0 : 1,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      // 内置动画类型与实际动画对应字典
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      // 驼峰转中横线
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])), [
      [vue.vShow, $data.isShow]
    ]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$3], ["__file", "/Users/daily/Desktop/d9/money_celestial/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$7 = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      // 开启动画
      animation: {
        type: Boolean,
        default: true
      },
      // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
      // message: 消息提示 ; dialog : 对话框
      type: {
        type: String,
        default: "center"
      },
      // maskClick
      isMaskClick: {
        type: Boolean,
        default: null
      },
      // TODO 2 个版本后废弃属性 ，使用 isMaskClick
      maskClick: {
        type: Boolean,
        default: null
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maskBackgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.4)"
      },
      borderRadius: {
        type: String
      }
    },
    watch: {
      /**
       * 监听type类型
       */
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      /**
       * 监听遮罩是否可点击
       * @param {Object} val
       */
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      isMaskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      // H5 下禁止底部滚动
      showPopup(show) {
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          backgroundColor: "transparent",
          borderRadius: this.borderRadius || "0",
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: "top"
      };
    },
    computed: {
      getStyles() {
        let res = { backgroundColor: this.bg };
        if (this.borderRadius || "0") {
          res = Object.assign(res, { borderRadius: this.borderRadius });
        }
        return res;
      },
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const {
          windowWidth,
          windowHeight,
          windowTop,
          safeArea,
          screenHeight,
          safeAreaInsets
        } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth;
        this.popupHeight = windowHeight + (windowTop || 0);
        if (safeArea && this.safeArea) {
          this.safeAreaInsets = safeAreaInsets.bottom;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    // TODO vue3
    unmounted() {
      this.setH5Visible();
    },
    activated() {
      this.setH5Visible(!this.showPopup);
    },
    deactivated() {
      this.setH5Visible(true);
    },
    created() {
      if (this.isMaskClick === null && this.maskClick === null) {
        this.mkclick = true;
      } else {
        this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
      }
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
      this.maskClass.backgroundColor = this.maskBackgroundColor;
    },
    methods: {
      setH5Visible(visible = true) {
      },
      /**
       * 公用方法，不显示遮罩层
       */
      closeMask() {
        this.maskShow = false;
      },
      /**
       * 公用方法，遮罩层禁止点击
       */
      disableMask() {
        this.mkclick = false;
      },
      // TODO nvue 取消冒泡
      clear(e2) {
        e2.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        if (this.showPopup) {
          return;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:298", "缺少类型：", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      /**
       * 顶部弹出样式处理
       */
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      /**
       * 底部弹出样式处理
       */
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: this.safeAreaInsets + "px",
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      /**
       * 中间弹出样式处理
       */
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0",
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0",
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0$1);
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]])
      },
      [
        vue.createElementVNode(
          "view",
          {
            onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
          },
          [
            $data.maskShow ? (vue.openBlock(), vue.createBlock(_component_uni_transition, {
              key: "1",
              name: "mask",
              "mode-class": "fade",
              styles: $data.maskClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, null, 8, ["styles", "duration", "show", "onClick"])) : vue.createCommentVNode("v-if", true),
            vue.createVNode(_component_uni_transition, {
              key: "2",
              "mode-class": $data.ani,
              name: "content",
              styles: $data.transClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
                    style: vue.normalizeStyle($options.getStyles),
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
          ],
          32
          /* NEED_HYDRATION */
        )
      ],
      2
      /* CLASS */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$2], ["__scopeId", "data-v-4dd3c44b"], ["__file", "/Users/daily/Desktop/d9/money_celestial/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
  const _imports_0$1 = "/static/success.png";
  const _imports_1 = "/static/fail.png";
  const _sfc_main$6 = {
    name: "popup",
    data() {
      return {};
    },
    props: {
      status: {
        type: String
      }
    },
    mounted() {
    },
    methods: {
      close() {
        this.$refs.popup.close();
      },
      open() {
        this.$refs.popup.open();
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(
        _component_uni_popup,
        {
          ref: "popup",
          "border-radius": "30rpx",
          "background-color": "#fff"
        },
        {
          default: vue.withCtx(() => [
            $props.status == "success" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "success_pop"
            }, [
              vue.createElementVNode("image", {
                src: _imports_0$1,
                mode: "widthFix",
                class: "su_icon"
              }),
              vue.createElementVNode("view", { class: "su_text" }, " 兑换提交成功 "),
              vue.createElementVNode("view", { class: "su_content" }, [
                vue.createElementVNode("view", { class: "" }, " 我们2h内对您的兑换请求进行验证 "),
                vue.createElementVNode("view", { class: "" }, " 您可以在兑换记录里进行查看 ")
              ]),
              vue.createElementVNode("view", {
                class: "btn_plain",
                onClick: _cache[0] || (_cache[0] = (...args) => $options.close && $options.close(...args))
              }, " 我知道了 ")
            ])) : vue.createCommentVNode("v-if", true),
            $props.status == "fail" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "success_pop"
            }, [
              vue.createElementVNode("image", {
                src: _imports_1,
                mode: "widthFix",
                class: "su_icon"
              }),
              vue.createElementVNode("view", { class: "su_content" }, [
                vue.createElementVNode("view", { class: "" }, " 兑换账号不存在，请输入正确的 "),
                vue.createElementVNode("view", { class: "" }, " 兑换账户地址 ")
              ]),
              vue.createElementVNode("view", {
                class: "btn_plain",
                onClick: _cache[1] || (_cache[1] = (...args) => $options.close && $options.close(...args))
              }, " 我知道了 ")
            ])) : vue.createCommentVNode("v-if", true)
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$1], ["__scopeId", "data-v-4bcd74eb"], ["__file", "/Users/daily/Desktop/d9/money_celestial/components/popup/popup.vue"]]);
  const _sfc_main$5 = {
    __name: "exchange_point_step_2",
    setup(__props) {
      const address = vue.ref("");
      const isChecked = vue.ref(false);
      const changeCheck = () => {
        isChecked.value = !isChecked.value;
      };
      const pop = vue.ref();
      const confirm = async () => {
        if (!isChecked.value)
          return uni.showToast({
            icon: "none",
            title: "请阅读完须知后勾选同意"
          });
        pop.value.open();
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_1$4);
        const _component_popup = resolveEasycom(vue.resolveDynamicComponent("popup"), __easycom_2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "兑换积分" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "shop_info" }, [
              vue.createElementVNode("view", { class: "info_item error flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 钱包地址 "),
                vue.createVNode(_component_uni_easyinput, {
                  modelValue: address.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => address.value = $event),
                  type: "number",
                  inputBorder: false,
                  class: "uni-input",
                  placeholder: "请输入充值钱包地址",
                  "placeholder-class": "placeholder_class",
                  styles: { "padding": "0" }
                }, {
                  right: vue.withCtx(() => [
                    vue.createElementVNode("view", { class: "error_text" }, " 格式错误 ")
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue"])
              ]),
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 充值订单 "),
                vue.createVNode(_component_uni_easyinput, {
                  modelValue: address.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => address.value = $event),
                  type: "number",
                  inputBorder: false,
                  class: "uni-input",
                  placeholder: "请输入充值订单哈希值",
                  "placeholder-class": "placeholder_class"
                }, {
                  right: vue.withCtx(() => [
                    vue.createElementVNode("view", { class: "error_text" }, " 格式错误 ")
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue"])
              ]),
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 兑换账号 "),
                vue.createVNode(_component_uni_easyinput, {
                  modelValue: address.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => address.value = $event),
                  maxlength: "11",
                  type: "number",
                  inputBorder: false,
                  class: "uni-input",
                  placeholder: "请输入账号",
                  "placeholder-class": "placeholder_class"
                }, {
                  right: vue.withCtx(() => [
                    vue.createElementVNode("view", {
                      class: "",
                      style: { "text-align": "right" }
                    }, [
                      vue.createElementVNode("view", { class: "error_text" }, " 手机号错误 "),
                      vue.createElementVNode("view", { class: "error_text" }, " 请输入正确的手机号 ")
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue"])
              ])
            ]),
            vue.createElementVNode("view", { class: "tip" }, " · 您可以选择将积分兑换到自己或者他人账户里，输入的账号为满仓用户的注册手机号 "),
            vue.createElementVNode("view", {
              class: "radio",
              onClick: changeCheck
            }, [
              vue.createElementVNode("radio", {
                value: "r1",
                checked: isChecked.value,
                color: "#FC5908"
              }, null, 8, ["checked"]),
              vue.createElementVNode("text", { class: "read" }, "我已阅读并同意"),
              vue.createElementVNode("text", { class: "c_title" }, "《兑换须知》")
            ]),
            vue.createElementVNode("view", {
              class: "btn_full",
              onClick: confirm
            }, " 兑换 ")
          ]),
          vue.createVNode(
            _component_popup,
            {
              ref_key: "pop",
              ref: pop,
              status: "fail"
            },
            null,
            512
            /* NEED_PATCH */
          )
        ]);
      };
    }
  };
  const PagesMyAccountExchangePointStep2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-f592e420"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/myAccount/exchange_point_step_2.vue"]]);
  const _imports_0 = "/static/account.png";
  const _sfc_main$4 = {
    __name: "green_point_withdraw",
    setup(__props) {
      const number = vue.ref("");
      const account = vue.ref("");
      const pointBalance = vue.ref("");
      vue.onMounted(async () => {
        getPointInfo();
      });
      const getPointInfo = async () => {
        const { user, red_points } = await getPointBindedAccount();
        account.value = user;
        pointBalance.value = red_points;
      };
      const isChecked = vue.ref(false);
      const changeCheck = () => {
        isChecked.value = !isChecked.value;
      };
      const confirm = async () => {
        if (!isChecked.value)
          return uni.showToast({
            icon: "none",
            title: "请阅读完须知后勾选同意"
          });
        if (!account.value)
          return uni.showToast({
            icon: "none",
            title: "请先绑定积分账号"
          });
        if (!number.value)
          return uni.showToast({
            icon: "none",
            title: "请输入提取数量"
          });
        if (number.value > pointBalance.value)
          return uni.showToast({
            icon: "none",
            title: "积分余额不足"
          });
        uni.showLoading({
          title: "提取中"
        });
        await withdrawPoint({ amount: number.value, to_user: account.value });
        getPointInfo();
        uni.hideLoading();
        uni.showToast({
          icon: "none",
          title: "提取成功"
        });
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "提取积分" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "a_title flex_between" }, [
              vue.createElementVNode("view", { class: "" }, " 积分账号 "),
              vue.createElementVNode("image", {
                src: _imports_0,
                mode: "widthFix",
                class: "a_pic"
              })
            ]),
            vue.createElementVNode(
              "view",
              { class: "account_box" },
              vue.toDisplayString(account.value),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "shop_info" }, [
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 提取数量 "),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => number.value = $event),
                    type: "number",
                    class: "uni-input",
                    placeholder: "请输入积分数量",
                    "placeholder-class": "placeholder_class"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, number.value]
                ])
              ]),
              vue.createElementVNode("view", { class: "info_item flex" }, [
                vue.createElementVNode("view", { class: "s_text" }, " 积分余额 "),
                vue.createElementVNode(
                  "view",
                  { class: "s_num" },
                  vue.toDisplayString(pointBalance.value || 0),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "info_item flex" }, [
                vue.createElementVNode("view", { class: "s_text" }, " 到账数量 "),
                vue.createElementVNode(
                  "view",
                  {
                    class: "s_num",
                    style: { "color": "#999999" }
                  },
                  vue.toDisplayString(number.value || 0),
                  1
                  /* TEXT */
                )
              ])
            ]),
            vue.createElementVNode("view", {
              class: "radio",
              onClick: changeCheck
            }, [
              vue.createElementVNode("radio", {
                value: "r1",
                checked: isChecked.value,
                color: "#FC5908"
              }, null, 8, ["checked"]),
              vue.createElementVNode("text", { class: "read" }, "我已阅读并同意"),
              vue.createElementVNode("text", { class: "c_title" }, "《提取须知》")
            ]),
            vue.createElementVNode("view", {
              class: "btn_full",
              onClick: confirm
            }, " 提取 ")
          ])
        ]);
      };
    }
  };
  const PagesMyAccountGreenPointWithdraw = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-e60c3880"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/myAccount/green_point_withdraw.vue"]]);
  const _sfc_main$3 = {
    __name: "green_point_withdraw_record",
    setup(__props) {
      vue.onMounted(() => {
        getRecordList();
      });
      const recordList = vue.ref([]);
      const status = vue.ref("loading");
      const page = vue.ref(1);
      const getRecordList = async () => {
        status.value = "loading";
        const { transactions, total_amount } = await getRecords({ transaction_type: "green_point" });
        status.value = "no-more";
        recordList.value.push(...transactions);
      };
      const loadMore = () => {
        if (status.value == "more") {
          page.value++;
          getRecordList();
        }
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        const _component_uni_col = resolveEasycom(vue.resolveDynamicComponent("uni-col"), __easycom_1$2);
        const _component_uni_row = resolveEasycom(vue.resolveDynamicComponent("uni-row"), __easycom_2$3);
        const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_3$1);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "提取记录" }),
          vue.createVNode(_component_uni_row, { class: "title_row" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_col, { span: 3 }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "title" }, "序号")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_uni_col, { span: 9 }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "title" }, "提取地址")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_uni_col, { span: 6 }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "title" }, "提取数量")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_uni_col, { span: 6 }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "title" }, "提取时间")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(recordList.value, (item, index) => {
              return vue.openBlock(), vue.createBlock(
                _component_uni_row,
                {
                  key: item.id
                },
                {
                  default: vue.withCtx(() => [
                    vue.createVNode(
                      _component_uni_col,
                      { span: 3 },
                      {
                        default: vue.withCtx(() => [
                          vue.createElementVNode(
                            "view",
                            null,
                            vue.toDisplayString(index + 1),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    ),
                    vue.createVNode(
                      _component_uni_col,
                      { span: 9 },
                      {
                        default: vue.withCtx(() => [
                          vue.createElementVNode(
                            "view",
                            null,
                            vue.toDisplayString(item.from_user),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    ),
                    vue.createVNode(
                      _component_uni_col,
                      { span: 6 },
                      {
                        default: vue.withCtx(() => [
                          vue.createElementVNode(
                            "view",
                            null,
                            vue.toDisplayString(item.amount),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    ),
                    vue.createVNode(
                      _component_uni_col,
                      { span: 6 },
                      {
                        default: vue.withCtx(() => [
                          vue.createElementVNode(
                            "view",
                            null,
                            vue.toDisplayString(vue.unref(convertTime)(item.created_at, "yyyy-MM-dd hh:mm:ss")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                },
                1024
                /* DYNAMIC_SLOTS */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          vue.createVNode(_component_uni_load_more, {
            status: status.value,
            onClickLoadMore: loadMore
          }, null, 8, ["status"])
        ]);
      };
    }
  };
  const PagesMyAccountGreenPointWithdrawRecord = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-1c8e9c11"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/myAccount/green_point_withdraw_record.vue"]]);
  const _sfc_main$2 = {
    __name: "red_point_withdraw",
    setup(__props) {
      const userStore = useUserStore();
      const number = vue.ref("");
      const account = vue.ref("");
      const pointBalance = vue.ref("");
      account.value = userStore.userInfo.username;
      vue.onMounted(async () => {
        getPointInfo();
      });
      const getPointInfo = async () => {
        const { green_points } = await getAllPoint();
        pointBalance.value = green_points;
      };
      const isChecked = vue.ref(false);
      const changeCheck = () => {
        isChecked.value = !isChecked.value;
      };
      const confirm = async () => {
        if (!isChecked.value)
          return uni.showToast({
            icon: "none",
            title: "请阅读完须知后勾选同意"
          });
        if (!account.value)
          return uni.showToast({
            icon: "none",
            title: "请先绑定积分账号"
          });
        if (!number.value)
          return uni.showToast({
            icon: "none",
            title: "请输入提取数量"
          });
        if (number.value > pointBalance.value)
          return uni.showToast({
            icon: "none",
            title: "积分余额不足"
          });
        uni.showLoading({
          title: "提取中"
        });
        await withdrawPoint({ points: number.value });
        getPointInfo();
        uni.hideLoading();
        uni.showToast({
          icon: "none",
          title: "提取成功"
        });
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "提取积分" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "a_title flex_between" }, [
              vue.createElementVNode("view", { class: "" }, " 积分账号 "),
              vue.createElementVNode("image", {
                src: _imports_0,
                mode: "widthFix",
                class: "a_pic"
              })
            ]),
            vue.createElementVNode(
              "view",
              { class: "account_box" },
              vue.toDisplayString(account.value),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "shop_info" }, [
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_title" }, " 提取数量 "),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => number.value = $event),
                    type: "number",
                    class: "uni-input",
                    placeholder: "请输入积分数量",
                    "placeholder-class": "placeholder_class"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, number.value]
                ])
              ]),
              vue.createElementVNode("view", { class: "info_item flex" }, [
                vue.createElementVNode("view", { class: "s_text" }, " 积分余额 "),
                vue.createElementVNode(
                  "view",
                  { class: "s_num" },
                  vue.toDisplayString(pointBalance.value || 0),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "info_item flex" }, [
                vue.createElementVNode("view", { class: "s_text" }, " 到账数量 "),
                vue.createElementVNode(
                  "view",
                  {
                    class: "s_num",
                    style: { "color": "#999999" }
                  },
                  vue.toDisplayString(number.value || 0),
                  1
                  /* TEXT */
                )
              ])
            ]),
            vue.createElementVNode("view", {
              class: "radio",
              onClick: changeCheck
            }, [
              vue.createElementVNode("radio", {
                value: "r1",
                checked: isChecked.value,
                color: "#FC5908"
              }, null, 8, ["checked"]),
              vue.createElementVNode("text", { class: "read" }, "我已阅读并同意"),
              vue.createElementVNode("text", { class: "c_title" }, "《提取须知》")
            ]),
            vue.createElementVNode("view", {
              class: "btn_full",
              onClick: confirm
            }, " 提取 ")
          ])
        ]);
      };
    }
  };
  const PagesMyAccountRedPointWithdraw = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-0cfd1d72"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/myAccount/red_point_withdraw.vue"]]);
  const _sfc_main$1 = {
    __name: "red_point_withdraw_record",
    setup(__props) {
      vue.onMounted(() => {
        getRecordList();
      });
      const recordList = vue.ref([]);
      const status = vue.ref("loading");
      const page = vue.ref(1);
      const getRecordList = async () => {
        status.value = "loading";
        const { transactions, total_amount } = await getRecords({ transaction_type: "red_point" });
        status.value = "no-more";
        recordList.value.push(...transactions);
      };
      const loadMore = () => {
        if (status.value == "more") {
          page.value++;
          getRecordList();
        }
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0$2);
        const _component_uni_col = resolveEasycom(vue.resolveDynamicComponent("uni-col"), __easycom_1$2);
        const _component_uni_row = resolveEasycom(vue.resolveDynamicComponent("uni-row"), __easycom_2$3);
        const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_3$1);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "提取记录" }),
          vue.createVNode(_component_uni_row, { class: "title_row" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_col, { span: 3 }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "title" }, "序号")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_uni_col, { span: 9 }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "title" }, "提取地址")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_uni_col, { span: 6 }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "title" }, "提取数量")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_uni_col, { span: 6 }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "title" }, "提取时间")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(recordList.value, (item, index) => {
              return vue.openBlock(), vue.createBlock(
                _component_uni_row,
                {
                  key: item.id
                },
                {
                  default: vue.withCtx(() => [
                    vue.createVNode(
                      _component_uni_col,
                      { span: 3 },
                      {
                        default: vue.withCtx(() => [
                          vue.createElementVNode(
                            "view",
                            null,
                            vue.toDisplayString(index + 1),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    ),
                    vue.createVNode(
                      _component_uni_col,
                      { span: 9 },
                      {
                        default: vue.withCtx(() => [
                          vue.createElementVNode(
                            "view",
                            null,
                            vue.toDisplayString(item.from_user),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    ),
                    vue.createVNode(
                      _component_uni_col,
                      { span: 6 },
                      {
                        default: vue.withCtx(() => [
                          vue.createElementVNode(
                            "view",
                            null,
                            vue.toDisplayString(item.amount),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    ),
                    vue.createVNode(
                      _component_uni_col,
                      { span: 6 },
                      {
                        default: vue.withCtx(() => [
                          vue.createElementVNode(
                            "view",
                            null,
                            vue.toDisplayString(vue.unref(convertTime)(item.created_at, "yyyy-MM-dd hh:mm:ss")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                },
                1024
                /* DYNAMIC_SLOTS */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          vue.createVNode(_component_uni_load_more, {
            status: status.value,
            onClickLoadMore: loadMore
          }, null, 8, ["status"])
        ]);
      };
    }
  };
  const PagesMyAccountRedPointWithdrawRecord = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9696e8d7"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/myAccount/red_point_withdraw_record.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/merchant/merchant_intro", PagesMerchantMerchantIntro);
  __definePage("pages/merchant/settle_notice", PagesMerchantSettleNotice);
  __definePage("pages/merchant/merchant_set_info", PagesMerchantMerchantSetInfo);
  __definePage("pages/merchant/before_create_shop", PagesMerchantBeforeCreateShop);
  __definePage("pages/merchant/merchant_management", PagesMerchantMerchantManagement);
  __definePage("pages/recommend/before_create_recommend", PagesRecommendBeforeCreateRecommend);
  __definePage("pages/merchant/merchant_edit_info", PagesMerchantMerchantEditInfo);
  __definePage("pages/merchant/point_gift", PagesMerchantPointGift);
  __definePage("pages/merchant/merchant_code_authentication", PagesMerchantMerchantCodeAuthentication);
  __definePage("pages/merchant/security_deposit", PagesMerchantSecurityDeposit);
  __definePage("pages/merchant/deposit_record", PagesMerchantDepositRecord);
  __definePage("pages/merchant/add_deposit", PagesMerchantAddDeposit);
  __definePage("pages/merchant/remove_deposit", PagesMerchantRemoveDeposit);
  __definePage("pages/merchant/upload_goods", PagesMerchantUploadGoods);
  __definePage("pages/agent/agent_intro", PagesAgentAgentIntro);
  __definePage("pages/agent/agent_management", PagesAgentAgentManagement);
  __definePage("pages/recommend/recommend_intro", PagesRecommendRecommendIntro);
  __definePage("pages/recommend/recommend_management", PagesRecommendRecommendManagement);
  __definePage("pages/recommend/qrcodeDetail", PagesRecommendQrcodeDetail);
  __definePage("pages/merchant/all_merchant", PagesMerchantAllMerchant);
  __definePage("pages/agent/merchant_code_authentication", PagesAgentMerchantCodeAuthentication);
  __definePage("pages/recommend/merchant_code_authentication", PagesRecommendMerchantCodeAuthentication);
  __definePage("pages/recommend/security_deposit", PagesRecommendSecurityDeposit);
  __definePage("pages/agent/security_deposit", PagesAgentSecurityDeposit);
  __definePage("pages/myAccount/myAccount", PagesMyAccountMyAccount);
  __definePage("pages/merchant/merchant_detail", PagesMerchantMerchantDetail);
  __definePage("pages/merchant/goods_detail", PagesMerchantGoodsDetail);
  __definePage("pages/login/register", PagesLoginRegister);
  __definePage("pages/login/more_info", PagesLoginMoreInfo);
  __definePage("pages/myAccount/my_point", PagesMyAccountMyPoint);
  __definePage("pages/myAccount/point_available", PagesMyAccountPointAvailable);
  __definePage("pages/myAccount/point_account", PagesMyAccountPointAccount);
  __definePage("pages/myAccount/bind_account", PagesMyAccountBindAccount);
  __definePage("pages/myAccount/unbind_account", PagesMyAccountUnbindAccount);
  __definePage("pages/agent/add_deposit", PagesAgentAddDeposit);
  __definePage("pages/agent/remove_deposit", PagesAgentRemoveDeposit);
  __definePage("pages/agent/deposit_record", PagesAgentDepositRecord);
  __definePage("pages/recommend/add_deposit", PagesRecommendAddDeposit);
  __definePage("pages/recommend/remove_deposit", PagesRecommendRemoveDeposit);
  __definePage("pages/recommend/deposit_record", PagesRecommendDepositRecord);
  __definePage("pages/agent/merchant_list", PagesAgentMerchantList);
  __definePage("pages/recommend/merchant_list", PagesRecommendMerchantList);
  __definePage("pages/recommend/recommend_test", PagesRecommendRecommendTest);
  __definePage("pages/myAccount/exchange_point_step_1", PagesMyAccountExchangePointStep1);
  __definePage("pages/myAccount/exchange_point_step_2", PagesMyAccountExchangePointStep2);
  __definePage("pages/myAccount/green_point_withdraw", PagesMyAccountGreenPointWithdraw);
  __definePage("pages/myAccount/green_point_withdraw_record", PagesMyAccountGreenPointWithdrawRecord);
  __definePage("pages/myAccount/red_point_withdraw", PagesMyAccountRedPointWithdraw);
  __definePage("pages/myAccount/red_point_withdraw_record", PagesMyAccountRedPointWithdrawRecord);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:8", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:11", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:14", "App Hide");
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return null;
  }
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/daily/Desktop/d9/money_celestial/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    const pinia = createPinia();
    app.use(pinia);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
