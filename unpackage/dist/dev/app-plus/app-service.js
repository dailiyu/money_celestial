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
  const _sfc_main$V = {
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
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["render", _sfc_render$g], ["__scopeId", "data-v-d31e1c47"], ["__file", "/Users/daily/Desktop/d9/money_celestial/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const _sfc_main$U = {
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
      isSkip: {
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
      skip() {
        this.$emit("skip");
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
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
          $props.isSkip ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "skip",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.skip && $options.skip(...args))
          }, " 跳过 ")) : vue.createCommentVNode("v-if", true)
        ])
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["render", _sfc_render$f], ["__scopeId", "data-v-fba290dc"], ["__file", "/Users/daily/Desktop/d9/money_celestial/components/navBar/navBar.vue"]]);
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
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
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
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
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
  const en$2 = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "Search enter content"
  };
  const zhHans$2 = {
    "uni-search-bar.cancel": "取消",
    "uni-search-bar.placeholder": "请输入搜索内容"
  };
  const zhHant$2 = {
    "uni-search-bar.cancel": "取消",
    "uni-search-bar.placeholder": "請輸入搜索內容"
  };
  const messages$1 = {
    en: en$2,
    "zh-Hans": zhHans$2,
    "zh-Hant": zhHant$2
  };
  const {
    t: t$4
  } = initVueI18n(messages$1);
  const _sfc_main$T = {
    name: "UniSearchBar",
    emits: ["input", "update:modelValue", "clear", "cancel", "confirm", "blur", "focus"],
    props: {
      placeholder: {
        type: String,
        default: ""
      },
      radius: {
        type: [Number, String],
        default: 5
      },
      clearButton: {
        type: String,
        default: "auto"
      },
      cancelButton: {
        type: String,
        default: "auto"
      },
      cancelText: {
        type: String,
        default: ""
      },
      bgColor: {
        type: String,
        default: "#F8F8F8"
      },
      textColor: {
        type: String,
        default: "#000000"
      },
      maxlength: {
        type: [Number, String],
        default: 100
      },
      value: {
        type: [Number, String],
        default: ""
      },
      modelValue: {
        type: [Number, String],
        default: ""
      },
      focus: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false,
        showSync: false,
        searchVal: ""
      };
    },
    computed: {
      cancelTextI18n() {
        return this.cancelText || t$4("uni-search-bar.cancel");
      },
      placeholderText() {
        return this.placeholder || t$4("uni-search-bar.placeholder");
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal) {
          this.searchVal = newVal;
          if (newVal) {
            this.show = true;
          }
        }
      },
      focus: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            if (this.readonly)
              return;
            this.show = true;
            this.$nextTick(() => {
              this.showSync = true;
            });
          }
        }
      },
      searchVal(newVal, oldVal) {
        this.$emit("input", newVal);
        this.$emit("update:modelValue", newVal);
      }
    },
    methods: {
      searchClick() {
        if (this.readonly)
          return;
        if (this.show) {
          return;
        }
        this.show = true;
        this.$nextTick(() => {
          this.showSync = true;
        });
      },
      clear() {
        this.searchVal = "";
        this.$nextTick(() => {
          this.$emit("clear", { value: "" });
        });
      },
      cancel() {
        if (this.readonly)
          return;
        this.$emit("cancel", {
          value: this.searchVal
        });
        this.searchVal = "";
        this.show = false;
        this.showSync = false;
        plus.key.hideSoftKeybord();
      },
      confirm() {
        plus.key.hideSoftKeybord();
        this.$emit("confirm", {
          value: this.searchVal
        });
      },
      blur() {
        plus.key.hideSoftKeybord();
        this.$emit("blur", {
          value: this.searchVal
        });
      },
      emitFocus(e2) {
        this.$emit("focus", e2.detail);
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-searchbar" }, [
      vue.createElementVNode(
        "view",
        {
          style: vue.normalizeStyle({ borderRadius: $props.radius + "px", backgroundColor: $props.bgColor }),
          class: "uni-searchbar__box",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.searchClick && $options.searchClick(...args))
        },
        [
          vue.createElementVNode("view", { class: "uni-searchbar__box-icon-search" }, [
            vue.renderSlot(_ctx.$slots, "searchIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "18",
                type: "search"
              })
            ], true)
          ]),
          $data.show || $data.searchVal ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
            key: 0,
            focus: $data.showSync,
            disabled: $props.readonly,
            placeholder: $options.placeholderText,
            maxlength: $props.maxlength,
            class: "uni-searchbar__box-search-input",
            "confirm-type": "search",
            type: "text",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchVal = $event),
            style: vue.normalizeStyle({ color: $props.textColor }),
            onConfirm: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
            onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
            onFocus: _cache[3] || (_cache[3] = (...args) => $options.emitFocus && $options.emitFocus(...args))
          }, null, 44, ["focus", "disabled", "placeholder", "maxlength"])), [
            [vue.vModelText, $data.searchVal]
          ]) : (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 1,
              class: "uni-searchbar__text-placeholder"
            },
            vue.toDisplayString($props.placeholder),
            1
            /* TEXT */
          )),
          $data.show && ($props.clearButton === "always" || $props.clearButton === "auto" && $data.searchVal !== "") && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "uni-searchbar__box-icon-clear",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "clearIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "20",
                type: "clear"
              })
            ], true)
          ])) : vue.createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      ),
      $props.cancelButton === "always" || $data.show && $props.cancelButton === "auto" ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          onClick: _cache[6] || (_cache[6] = (...args) => $options.cancel && $options.cancel(...args)),
          class: "uni-searchbar__cancel"
        },
        vue.toDisplayString($options.cancelTextI18n),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1$5 = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["render", _sfc_render$e], ["__scopeId", "data-v-f07ef577"], ["__file", "/Users/daily/Desktop/d9/money_celestial/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);
  const _imports_0$c = "/static/locate.png";
  const _imports_1$6 = "/static/home/cart.png";
  const _imports_2$4 = "/static/home/bag.png";
  const _imports_3$2 = "/static/home/star.png";
  const _imports_4$1 = "/static/home/profile.png";
  const _imports_1$5 = "/static/locate_orange.png";
  const _imports_6$1 = "/static/home/shop.jpg";
  const _imports_7$1 = "/static/home/benefit.jpg";
  const _imports_8$1 = "/static/home/earn.jpg";
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
        const headers = {};
        if (accessToken) {
          headers["Authorization"] = `Bearer ${accessToken}`;
        }
        uni.request({
          url: BASE_URL + url,
          method: method || "GET",
          timeout: TIME_OUT,
          data,
          header: headers,
          success: (res) => {
            if (res.statusCode === 200 || res.statusCode === 201) {
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
  const uploadShopImg = (image_url, image_type, shop) => {
    return http.post("/shops/images/create/", {
      image_url,
      image_type,
      shop
    });
  };
  const postMerchantSettleIn = (name, description, category_ids, avatar, address, latitude, longitude, city) => {
    return http.post("/shops/create/", {
      name,
      description,
      category_ids,
      avatar,
      address,
      latitude,
      longitude,
      city
    });
  };
  const updateShopInfo = async (name, description, category_ids, avatar, address, latitude, longitude, city) => {
    return http.put("/shops/update/", {
      name,
      description,
      category_ids,
      avatar,
      address,
      latitude,
      longitude,
      city
    });
  };
  const getShopCategories = () => {
    return http.get("/shops/categories/");
  };
  const getShopInfo = () => {
    return http.get("/shops/mine/");
  };
  const getShopList = () => {
    return http.get("/shops/");
  };
  const sortShopsByDistance = async (origins, shopList, order = "asc") => {
    try {
      const distances = await calculateDistances(
        origins,
        shopList.map((shop) => ({ latitude: shop.latitude, longitude: shop.longitude }))
      );
      shopList.forEach((shop, index) => {
        shop.distance = distances[index].distance;
      });
      const sortedShopList = [...shopList].sort((a2, b2) => {
        if (a2.distance === void 0 || b2.distance === void 0) {
          return 0;
        }
        if (order === "asc") {
          return a2.distance - b2.distance;
        } else if (order === "desc") {
          return b2.distance - a2.distance;
        }
        return 0;
      });
      return sortedShopList;
    } catch (error) {
      formatAppLog("error", "at utils/distanceSorting.js:34", "Error sorting shops by distance:", error);
      throw error;
    }
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
        formatAppLog("log", "at store/public.js:23", res.results);
        this.cateGoryList = res.results;
      },
      async getMerchantListAction() {
        const res = await getMerchantList();
        this.merchantList = (res == null ? void 0 : res.results) || [];
      },
      async getStoreListAction() {
        const res = await getShopList();
        const { location: location2 } = await uni.getStorageSync("address_info");
        this.storeList = (res == null ? void 0 : res.results) || [];
        this.ascShopList = await sortShopsByDistance({ latitude: location2.lat, longitude: location2.lng }, this.storeList, "asc");
        this.descShopList = await sortShopsByDistance({ latitude: location2.lat, longitude: location2.lng }, this.storeList, "desc");
      },
      async fetchAllDataAction() {
        this.getCateGoryListAction();
        this.getStoreListAction();
      }
    }
  });
  const getUerAccountMessage = async () => {
    return http.get("/users/");
  };
  const postRegister = async (phone_number, password, username) => {
    return http.post("/users/register/", {
      phone_number,
      password,
      username: phone_number
    });
  };
  const changeUserInfo = async (userInfo) => {
    return http.put("/users/update/", userInfo);
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
  const _sfc_main$S = {
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
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
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
  const __easycom_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["render", _sfc_render$d], ["__scopeId", "data-v-09fd5285"], ["__file", "/Users/daily/Desktop/d9/money_celestial/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue"]]);
  const _imports_0$b = "/static/logo.png";
  const _imports_1$4 = "/static/phone-grey.png";
  const _imports_2$3 = "/static/lock-grey.png";
  const _sfc_main$R = {
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
          uni.hideLoading();
          uni.showToast({
            title: "登录成功",
            icon: "success",
            duration: 1e3
          });
          setTimeout(() => {
            uni.reLaunch({
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
        const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_1$4);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, {
            title: "用户登录",
            bgc: "#1B46CC"
          }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("image", {
              src: _imports_0$b,
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
                  src: _imports_1$4,
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
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["__scopeId", "data-v-e4e4508d"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/login/login.vue"]]);
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
      },
      async getUserInfoAction() {
        const res = await getUerAccountMessage();
        formatAppLog("log", "at store/user.js:26", res);
        const { id } = res || {};
        this.userInfo = res;
        uni.setStorageSync("userId", id);
      },
      async getMerchantInfoAction() {
        var _a;
        const res = await getMerchantInfo();
        this.merchantInfo = (res == null ? void 0 : res.data) || {};
        uni.setStorageSync("merchantId", (_a = res.data) == null ? void 0 : _a.id);
      },
      async getStoreInfoAction() {
        const res = await getShopInfo();
        this.storeInfo = res;
        formatAppLog("log", "at store/user.js:39", res);
        uni.setStorageSync("storeId", res.id);
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
  const _sfc_main$Q = {
    __name: "index",
    setup(__props) {
      const keyword = vue.ref("");
      const publicStore = usePublicStore();
      const userStore = useUserStore();
      const city = vue.ref("");
      vue.onMounted(async () => {
        const accessToken = uni.getStorageSync("accessToken");
        if (accessToken) {
          await publicStore.fetchAllDataAction(), await userStore.fetchAllDataAction();
        }
        uni.getLocation({
          geocode: true,
          success(res) {
            formatAppLog("log", "at pages/index/index.vue:148", res);
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
      const search = () => {
        formatAppLog("log", "at pages/index/index.vue:191", keyword.value);
      };
      const toMerchant = () => {
        if (userStore.storeInfo && Object.keys(userStore.storeInfo).length > 0) {
          formatAppLog("log", "at pages/index/index.vue:200", userStore.storeInfo);
          uni.navigateTo({
            url: "/pages/merchant/merchant_management"
          });
        } else {
          uni.navigateTo({
            url: "/pages/merchant/merchant_intro"
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
      const toRecommend = () => {
        if (userStore.userInfo.is_referral_officer) {
          uni.navigateTo({
            url: "/pages/recommend/recommend_management"
          });
        } else {
          uni.navigateTo({
            url: "/pages/recommend/recommend_intro"
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
        const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_1$5);
        return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
          vue.createVNode(_component_navBar, {
            iconShow: false,
            title: "满仓"
          }),
          vue.createElementVNode("view", { class: "search_bar flex_between" }, [
            vue.createElementVNode("image", {
              src: _imports_0$c,
              mode: "widthFix",
              class: "locate_img"
            }),
            vue.createElementVNode(
              "view",
              { class: "location" },
              vue.toDisplayString(city.value ? city.value : "定位中"),
              1
              /* TEXT */
            ),
            vue.createVNode(_component_uni_search_bar, {
              modelValue: keyword.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => keyword.value = $event),
              placeholder: "请输入你搜索的内容",
              radius: 100,
              "cancel-text": "cancel",
              cancelButton: "none",
              clearButton: "always"
            }, {
              clearIcon: vue.withCtx(() => [
                vue.createElementVNode("view", {
                  class: "search_btn flex_center",
                  onClick: vue.withModifiers(search, ["stop"])
                }, "搜索")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
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
                  src: _imports_1$6,
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
                  src: _imports_2$4,
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
                  src: _imports_3$2,
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
                  src: _imports_4$1,
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
                        src: _imports_1$5,
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
              src: _imports_6$1,
              mode: "widthFix",
              class: "shop_pic"
            }),
            vue.createElementVNode("image", {
              src: _imports_7$1,
              mode: "widthFix",
              class: "shop_pic"
            }),
            vue.createElementVNode("image", {
              src: _imports_8$1,
              mode: "widthFix",
              class: "shop_pic"
            })
          ])
        ]);
      };
    }
  };
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-1cf27b2a"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/index/index.vue"]]);
  const _imports_0$a = "/static/merchant/merchant-intro.jpg";
  const _sfc_main$P = {
    __name: "merchant_intro",
    setup(__props) {
      const toNotice = () => {
        uni.navigateTo({
          url: "/pages/merchant/settle_notice"
        });
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "商家" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("image", {
              src: _imports_0$a,
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
  const PagesMerchantMerchantIntro = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__scopeId", "data-v-63c4abfc"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/merchant_intro.vue"]]);
  const _sfc_main$O = {
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
      const toSetInfo = () => {
        if (!isChecked.value)
          return uni.showToast({
            icon: "none",
            title: "请阅读完须知后勾选同意"
          });
        uni.navigateTo({
          url: "/pages/merchant/merchant_set_info?referral_officer=" + referral_officer
        });
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
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
              onClick: toSetInfo
            }, " 扫码提交资料 ")
          ])
        ]);
      };
    }
  };
  const PagesMerchantSettleNotice = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["__scopeId", "data-v-37037ead"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/settle_notice.vue"]]);
  const _imports_0$9 = "/static/upload.png";
  const _sfc_main$N = {
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
            src: _imports_0$9,
            mode: "widthFix",
            class: "upload_btn",
            onClick: chooseImg
          })) : vue.createCommentVNode("v-if", true)
        ]);
      };
    }
  };
  const __easycom_2$4 = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["__scopeId", "data-v-0917ae16"], ["__file", "/Users/daily/Desktop/d9/money_celestial/components/upload/upload.vue"]]);
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
      path: "pages/merchant/merchant_management",
      style: {
        navigationBarTitleText: "商家后台",
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
  const _sfc_main$M = {
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
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
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
  const __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["render", _sfc_render$c], ["__scopeId", "data-v-ddf9e0a2"], ["__file", "/Users/daily/Desktop/d9/money_celestial/uni_modules/uni-data-select/components/uni-data-select/uni-data-select.vue"]]);
  const getMerchantList$1 = (data) => {
    return http.get("/shops/", data);
  };
  const merchantCodeAuthentication = (data) => {
    return http.post("/users/merchant/code/verification/", data);
  };
  const getCitiesDetail = async () => {
    const { city } = await uni.getStorageSync("address_info");
    formatAppLog("log", "at service/divisions.js:36", city);
    return http.post("/divisions/citys/wechat/", {
      filters: {
        name: city
      }
    });
  };
  const uploadUrl = "https://max.q6z4kzhr.uk/api/upload/image/";
  const uploadImage = async (filePath) => {
    formatAppLog("log", "at utils/index.js:4", filePath);
    const token = uni.getStorageSync("accessToken");
    const randomFileName = `file_${Date.now()}_${Math.floor(Math.random() * 1e4)}`;
    return new Promise((resolve, reject) => {
      uni.uploadFile({
        url: uploadUrl,
        // 上传接口 URL
        filePath,
        // 需要上传的文件路径
        name: "image_url",
        // 后台接收文件的字段名
        header: {
          "Authorization": `Bearer ${token}`,
          // JWT Token 添加到 Authorization 请求头
          "Content-Type": "multipart/form-data"
        },
        formData: {
          "file_name": randomFileName
          // 生成的随机文件名
        },
        success: (uploadFileRes) => {
          if (uploadFileRes.statusCode == 201) {
            const data = JSON.parse(uploadFileRes.data);
            formatAppLog("log", "at utils/index.js:24", "上传成功！");
            formatAppLog("log", "at utils/index.js:25", "上传的图片 URL:", data.image_url);
            resolve(data.image_url);
          } else {
            formatAppLog("log", "at utils/index.js:28", "上传失败，状态码：", uploadFileRes.statusCode);
            reject(new Error(`上传失败，状态码：${uploadFileRes.statusCode}`));
          }
        },
        fail: (err) => {
          formatAppLog("error", "at utils/index.js:33", "上传文件出错:", err);
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
  const _sfc_main$L = {
    __name: "merchant_set_info",
    setup(__props) {
      const referral_officer = vue.ref("");
      onLoad((options) => {
        referral_officer.value = options.referral_officer;
      });
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
          formatAppLog("log", "at pages/merchant/merchant_set_info.vue:142", {
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
      const isChecked = vue.ref(false);
      const changeCheck = () => {
        isChecked.value = !isChecked.value;
      };
      const changeRange = (e2) => {
        businessRange.value = e2;
        formatAppLog("log", "at pages/merchant/merchant_set_info.vue:162", e2);
      };
      const acceptTempBannerImgPath = async (ImgPaths) => {
        temBannerImgPaths.value = ImgPaths;
        formatAppLog("log", "at pages/merchant/merchant_set_info.vue:183", temBannerImgPaths.value);
      };
      const acceptTempProfileImgPath = async (ImgPaths) => {
        temProfileImgPaths.value = ImgPaths;
        formatAppLog("log", "at pages/merchant/merchant_set_info.vue:188", "tem", temProfileImgPaths.value);
      };
      const acceptTempDetailImgPath = async (ImgPaths) => {
        temDetailImgPaths.value = ImgPaths;
        formatAppLog("log", "at pages/merchant/merchant_set_info.vue:193", temDetailImgPaths.value);
      };
      const bannerListUrl = vue.ref([]);
      const upLoadBannerImg = async (shop) => {
        for (let i2 = 0; i2 < temBannerImgPaths.value.length; i2++) {
          const url = await uploadImage(temBannerImgPaths.value[i2]);
          await uploadShopImg(url, "banner", shop);
          bannerListUrl.value.push(url);
        }
      };
      const detailListUrl = vue.ref([]);
      const upLoadDetailImg = async (shop) => {
        for (let i2 = 0; i2 < temDetailImgPaths.value.length; i2++) {
          const url = await uploadImage(temDetailImgPaths.value[i2]);
          await uploadShopImg(url, "avatar", shop);
          detailListUrl.value.push(url);
        }
      };
      const profileUrl = vue.ref("");
      const uploadProfileImg = async () => {
        formatAppLog("log", "at pages/merchant/merchant_set_info.vue:222", temProfileImgPaths.value[0]);
        const url = await uploadImage(temProfileImgPaths.value[0]);
        formatAppLog("log", "at pages/merchant/merchant_set_info.vue:224", url);
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
          "at pages/merchant/merchant_set_info.vue:252",
          !shopName.value,
          !address.value,
          !shopIntro.value,
          temDetailImgPaths.value.length === 0,
          temProfileImgPaths.value.length === 0,
          temBannerImgPaths.value.length === 0
        );
        formatAppLog(
          "log",
          "at pages/merchant/merchant_set_info.vue:259",
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
          const cityDetail = await getCitiesDetail();
          const { location: location2 } = await uni.getStorageSync("address_info");
          await uploadProfileImg();
          formatAppLog("log", "at pages/merchant/merchant_set_info.vue:287", "-----");
          formatAppLog("log", "at pages/merchant/merchant_set_info.vue:288", shopName.value, shopIntro.value, [businessRange.value], profileUrl.value, address.value, location2.lat, location2.lng, cityDetail[0].id);
          const res = await postMerchantSettleIn(shopName.value, shopIntro.value, [businessRange.value], profileUrl.value, address.value, location2.lat, location2.lng, cityDetail[0].id);
          formatAppLog("log", "at pages/merchant/merchant_set_info.vue:290", "-----!!!", res);
          await upLoadDetailImg(res == null ? void 0 : res.id);
          await upLoadBannerImg(res == null ? void 0 : res.id);
          await userStore.fetchAllDataAction();
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
          formatAppLog("log", "at pages/merchant/merchant_set_info.vue:312", e2);
          uni.showToast({
            title: "出现错误",
            duration: 1e3,
            icon: "fail"
          });
        }
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
        const _component_upload = resolveEasycom(vue.resolveDynamicComponent("upload"), __easycom_2$4);
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
            vue.createElementVNode("view", { class: "head_box" }, [
              vue.createElementVNode("view", {
                class: "flex_between",
                style: { "margin-bottom": "54rpx" }
              }, [
                vue.createElementVNode("view", { class: "h_title" }, " 商家轮播图（750*340） "),
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
              vue.createElementVNode("view", {
                class: "flex_between",
                style: { "margin-bottom": "54rpx" }
              }, [
                vue.createElementVNode("view", { class: "h_title" }, " 商家详情图（750*340） "),
                vue.createElementVNode(
                  "view",
                  { class: "h_text" },
                  " 已选择" + vue.toDisplayString(temDetailImgPaths.value.length) + "张 ",
                  1
                  /* TEXT */
                )
              ]),
              vue.createVNode(_component_upload, {
                amount: 6,
                onTempImgPaths: acceptTempDetailImgPath
              })
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
                  src: _imports_1$5,
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
  const PagesMerchantMerchantSetInfo = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["__scopeId", "data-v-34ea46dc"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/merchant_set_info.vue"]]);
  const _imports_0$8 = "/static/star.png";
  const _imports_0$7 = "/static/arrow-right.png";
  const _sfc_main$K = {
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
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
                          src: _imports_0$8,
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
                  src: _imports_0$7,
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
                  src: _imports_0$7,
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
                  src: _imports_0$7,
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
                  src: _imports_0$7,
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
  const PagesMerchantMerchantManagement = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["__scopeId", "data-v-a81a7219"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/merchant_management.vue"]]);
  const _sfc_main$J = {
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
          const cityDetail = await getCitiesDetail();
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
        const _component_upload = resolveEasycom(vue.resolveDynamicComponent("upload"), __easycom_2$4);
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
                  src: _imports_1$5,
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
  const PagesMerchantMerchantEditInfo = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["__scopeId", "data-v-aaffa612"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/merchant_edit_info.vue"]]);
  const bindPointAccount = async (data) => {
    return http.post("/wallets/wallet/bind/points/account/", data);
  };
  const unbindPointAccount = async (data) => {
    return http.post("/wallets/wallet/unbind/points/account/", data);
  };
  const giftPoint = async (data) => {
    return http.post("/wallets/gift/green/point/", data);
  };
  const getAllPoint = async () => {
    return http.get("/wallets/");
  };
  const _sfc_main$I = {
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
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
              vue.createElementVNode("view", { class: "info_item flex_between" }, [
                vue.createElementVNode("view", { class: "s_text" }, " 最多可赠送数量 "),
                vue.createElementVNode(
                  "view",
                  { class: "s_num" },
                  vue.toDisplayString(totalPoints.value),
                  1
                  /* TEXT */
                )
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
  const PagesMerchantPointGift = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["__scopeId", "data-v-976eb3a4"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/point_gift.vue"]]);
  const _sfc_main$H = {
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
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
  const PagesMerchantMerchantCodeAuthentication = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__scopeId", "data-v-0f661089"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/merchant_code_authentication.vue"]]);
  const _sfc_main$G = {
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
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
                  src: _imports_0$7,
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
  const PagesMerchantSecurityDeposit = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-3efa2ea6"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/security_deposit.vue"]]);
  const ComponentClass$1 = "uni-col";
  const _sfc_main$F = {
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
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$b], ["__scopeId", "data-v-28ff6624"], ["__file", "/Users/daily/Desktop/d9/money_celestial/uni_modules/uni-row/components/uni-col/uni-col.vue"]]);
  const ComponentClass = "uni-row";
  const modifierSeparator = "--";
  const _sfc_main$E = {
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
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_2$3 = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$a], ["__scopeId", "data-v-097353af"], ["__file", "/Users/daily/Desktop/d9/money_celestial/uni_modules/uni-row/components/uni-row/uni-row.vue"]]);
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
  const _sfc_main$D = {
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
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$9], ["__scopeId", "data-v-9245e42c"], ["__file", "/Users/daily/Desktop/d9/money_celestial/uni_modules/uni-load-more/components/uni-load-more/uni-load-more.vue"]]);
  const addDeposit = (data) => {
    return http.post("/wallets/add/collateral/", data);
  };
  const removeDeposit = (data) => {
    return http.post("/wallets/remove/collateral/", data);
  };
  const getRecords = (data) => {
    return http.get("/wallets/transactions/", data);
  };
  const _sfc_main$C = {
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
        const _component_uni_col = resolveEasycom(vue.resolveDynamicComponent("uni-col"), __easycom_1$2);
        const _component_uni_row = resolveEasycom(vue.resolveDynamicComponent("uni-row"), __easycom_2$3);
        const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_3);
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
  const PagesMerchantDepositRecord = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__scopeId", "data-v-d6fe0577"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/deposit_record.vue"]]);
  const _sfc_main$B = {
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
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
  const PagesMerchantAddDeposit = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-4a198a90"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/add_deposit.vue"]]);
  const _sfc_main$A = {
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
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
  const PagesMerchantRemoveDeposit = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-930acddc"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/remove_deposit.vue"]]);
  const _sfc_main$z = {
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
        const _component_uni_data_select = resolveEasycom(vue.resolveDynamicComponent("uni-data-select"), __easycom_1$3);
        const _component_upload = resolveEasycom(vue.resolveDynamicComponent("upload"), __easycom_2$4);
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
  const PagesMerchantUploadGoods = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-452b451b"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/upload_goods.vue"]]);
  const _imports_0$6 = "/static/agent/agent-intro.jpg";
  const _sfc_main$y = {};
  function _sfc_render$8(_ctx, _cache) {
    const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_navBar, { title: "代理" }),
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("image", {
          src: _imports_0$6,
          mode: "widthFix",
          class: "merchant_intro"
        }),
        vue.createElementVNode("view", { class: "btn_full" }, " 联系满仓 ")
      ])
    ]);
  }
  const PagesAgentAgentIntro = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$8], ["__scopeId", "data-v-4d11c0d1"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/agent/agent_intro.vue"]]);
  const _imports_0$5 = "/static/agent/agent-bg.png";
  const getAgentShopList = async (data) => {
    return http.get("/agent/province/shops/", data);
  };
  const getAgentShopAmount = async () => {
    return http.get("/agent/province/shops/");
  };
  const getRecommendOfficerAmount = async () => {
    return http.get("/agent/province/referral/officers/");
  };
  const _sfc_main$x = {
    __name: "agent_management",
    setup(__props) {
      vue.onMounted(() => {
        getShopAmount();
        getOfficerAmount();
        getAgentPoint();
      });
      const merchantAmount = vue.ref(0);
      const cityAgent = vue.ref("");
      const getShopAmount = async () => {
        const { count, results } = await getAgentShopAmount();
        merchantAmount.value = count;
        cityAgent.value = results[0].city;
      };
      const officerAmount = vue.ref(0);
      const getOfficerAmount = async () => {
        const result = await getRecommendOfficerAmount();
        officerAmount.value = result.count;
      };
      const agentPoint = vue.ref(0);
      const getAgentPoint = async () => {
        const { total_amount } = await getRecords({ transaction_type: "bonus" });
        agentPoint.value = total_amount;
      };
      const toMerchantList = () => {
        uni.navigateTo({
          url: "/pages/agent/merchant_list"
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "代理后台" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "total_data" }, [
              vue.createElementVNode("image", {
                src: _imports_0$5,
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
                  src: _imports_0$7,
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
                  src: _imports_0$7,
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
                  src: _imports_0$7,
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
  const PagesAgentAgentManagement = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-aa1b4823"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/agent/agent_management.vue"]]);
  const _imports_0$4 = "/static/recommend/recommend-intro.jpg";
  const _sfc_main$w = {
    __name: "recommend_intro",
    setup(__props) {
      const toNext = () => {
        uni.navigateTo({
          // url: '/pages/recommend/recommend_management'
          url: "/pages/recommend/recommend_test"
        });
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "推荐官" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("image", {
              src: _imports_0$4,
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
  const PagesRecommendRecommendIntro = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-87fd30d1"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/recommend/recommend_intro.vue"]]);
  const _imports_0$3 = "/static/recommend/recommend_bg.png";
  const _imports_1$3 = "/static/recommend/lv1.png";
  const _imports_2$2 = "/static/recommend/code.png";
  const getRecommendOfficerInfo = async () => {
    return http.get("/referral/officer/shops/");
  };
  const createRecommendOfficer = async (data) => {
    return http.post("/referral/officer/create/", data);
  };
  const getOfficerQRCode = async (data) => {
    return http.post("/referral/qrcode/", data);
  };
  const _sfc_main$v = {
    __name: "recommend_management",
    setup(__props) {
      const info2 = vue.ref({});
      vue.onMounted(async () => {
        info2.value = await getRecommendOfficerInfo();
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
      const qrcode = vue.ref("");
      const getQRCode = async () => {
        if (!qrcode.value) {
          const { image_url } = await getOfficerQRCode({ path: "/pages/merchant/settle_notice" });
          qrcode.value = image_url;
        }
        uni.previewImage({
          urls: [qrcode.value],
          current: qrcode.value
        });
      };
      return (_ctx, _cache) => {
        var _a, _b, _c, _d;
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "推荐官后台" }),
          vue.createElementVNode("view", { class: "total_data" }, [
            vue.createElementVNode("image", {
              src: _imports_0$3,
              mode: "widthFix",
              class: "agent_pic"
            }),
            vue.createElementVNode("view", { class: "data_item" }, [
              vue.createElementVNode("image", {
                src: _imports_1$3,
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
                  onClick: getQRCode
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
                  src: _imports_0$7,
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
                  src: _imports_0$7,
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
                  src: _imports_0$7,
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
  const PagesRecommendRecommendManagement = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-6eb3b4f4"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/recommend/recommend_management.vue"]]);
  const _sfc_main$u = {
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
                            src: _imports_0$8,
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
                        src: _imports_1$5,
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
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-69f4d838"], ["__file", "/Users/daily/Desktop/d9/money_celestial/components/shopList/shopList.vue"]]);
  const _imports_0$2 = "/static/category.png";
  const _imports_1$2 = "/static/arrow-active.png";
  const _imports_2$1 = "/static/arrow-inactive.png";
  const _sfc_main$t = {
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
        const _component_shopList = resolveEasycom(vue.resolveDynamicComponent("shopList"), __easycom_1$1);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "全部商家" }),
          vue.createElementVNode("view", { class: "filter_list flex_between" }, [
            vue.createElementVNode("view", {
              class: "flex_center",
              onClick: getType
            }, [
              vue.createElementVNode("image", {
                src: _imports_0$2,
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
                  src: _imports_1$2,
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
                  src: _imports_1$2,
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
  const PagesMerchantAllMerchant = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-2d911691"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/all_merchant.vue"]]);
  const _sfc_main$s = {
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
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
  const PagesAgentMerchantCodeAuthentication = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-954048b2"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/agent/merchant_code_authentication.vue"]]);
  const _sfc_main$r = {
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
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
  const PagesRecommendMerchantCodeAuthentication = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-c32e0b38"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/recommend/merchant_code_authentication.vue"]]);
  const _sfc_main$q = {
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
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
                  src: _imports_0$7,
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
  const PagesRecommendSecurityDeposit = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-f039c67b"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/recommend/security_deposit.vue"]]);
  const _sfc_main$p = {
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
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
                  src: _imports_0$7,
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
  const PagesAgentSecurityDeposit = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-151545ee"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/agent/security_deposit.vue"]]);
  const _imports_0$1 = "/static/my/bg_my.png";
  const _imports_1$1 = "/static/my/my_credits.png";
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
  const _sfc_main$o = {
    __name: "myAccount",
    setup(__props) {
      const userStore = useUserStore();
      const accessToken = uni.getStorageSync("accessToken");
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(_component_navBar, { title: "我的账户" }),
            vue.createElementVNode("view", { class: "page" }, [
              vue.createElementVNode("view", { class: "img-box" }, [
                vue.createElementVNode("image", {
                  src: _imports_0$1,
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
                      src: vue.unref(userStore).userInfo.icon,
                      mode: ""
                    }, null, 8, ["src"])
                  ]),
                  vue.createElementVNode(
                    "view",
                    { class: "name" },
                    vue.toDisplayString(vue.unref(userStore).userInfo.username || "点击登录"),
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
                      src: _imports_1$1
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
                      src: _imports_0$8,
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
                      src: _imports_0$8,
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
                      src: _imports_0$8,
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
  const PagesMyAccountMyAccount = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__file", "/Users/daily/Desktop/d9/money_celestial/pages/myAccount/myAccount.vue"]]);
  const _sfc_main$n = {
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
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$7], ["__scopeId", "data-v-86aa1171"], ["__file", "/Users/daily/Desktop/d9/money_celestial/uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue"]]);
  const _sfc_main$m = {
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
  const __easycom_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-feddcdaa"], ["__file", "/Users/daily/Desktop/d9/money_celestial/components/goodsList/goodsList.vue"]]);
  const _imports_1 = "/static/star-plain.png";
  const _imports_3 = "/static/time.png";
  const _imports_4 = "/static/phone.png";
  const _sfc_main$l = {
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
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
                      src: _imports_0$8,
                      mode: "widthFix",
                      class: "star_pic"
                    })
                  ]),
                  vue.createElementVNode("view", { class: "point" }, " 4.9 ")
                ]),
                vue.createElementVNode("view", { class: "note" }, " 本店主要经营各类百货商品、生鲜蛋肉类产品 ")
              ]),
              vue.createElementVNode("image", {
                src: _imports_1,
                mode: "widthFix",
                class: "star_plain"
              })
            ]),
            vue.createElementVNode("view", { class: "info_item" }, [
              vue.createElementVNode("view", { class: "flex" }, [
                vue.createElementVNode("image", {
                  src: _imports_1$5,
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
  const PagesMerchantMerchantDetail = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-1771cf06"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/merchant_detail.vue"]]);
  const _sfc_main$k = {};
  function _sfc_render$6(_ctx, _cache) {
    const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
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
  const PagesMerchantGoodsDetail = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$6], ["__scopeId", "data-v-2276b552"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/merchant/goods_detail.vue"]]);
  const _sfc_main$j = {
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
          postRegister(mobile.value, password.value).then((res) => {
            formatAppLog("log", "at pages/login/register.vue:62", res);
            uni.showToast({
              duration: 2e3,
              icon: "success",
              title: "注册成功"
            });
            userStore.loginAction(mobile.value, password.value);
            setTimeout(() => {
              uni.navigateTo({
                url: "/pages/login/more_info"
              });
            }, 2e3);
          }).catch((err) => {
            uni.showToast({
              duration: 2e3,
              icon: "fail",
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
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
  const PagesLoginRegister = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-838b72c9"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/login/register.vue"]]);
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
  const _sfc_main$i = {
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
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
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
  const CalendarItem = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$5], ["__scopeId", "data-v-65626c58"], ["__file", "/Users/daily/Desktop/d9/money_celestial/uni_modules/uni-calendar/components/uni-calendar/uni-calendar-item.vue"]]);
  const { t } = initVueI18n(i18nMessages);
  const _sfc_main$h = {
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
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$4], ["__scopeId", "data-v-b6ab2cfb"], ["__file", "/Users/daily/Desktop/d9/money_celestial/uni_modules/uni-calendar/components/uni-calendar/uni-calendar.vue"]]);
  const _sfc_main$g = {
    __name: "more_info",
    setup(__props) {
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
            formatAppLog("log", "at pages/login/more_info.vue:111", "-----选择的图片路径：", tempFilePaths[0]);
            uploadImage2(tempFilePaths[0]);
          },
          fail: (err) => {
            formatAppLog("log", "at pages/login/more_info.vue:116", "选择图片失败：", err);
          }
        });
      };
      const token = uni.getStorageSync("accessToken");
      function uploadImage2(filePath) {
        formatAppLog("log", "at pages/login/more_info.vue:125", filePath);
        const randomFileName = `file_${Date.now()}_${Math.floor(Math.random() * 1e4)}`;
        uni.uploadFile({
          url: uploadUrl,
          // 上传接口 URL
          filePath,
          // 需要上传的文件路径
          name: "image_url",
          // 后台接收文件的字段名 (根据实际需求)
          header: {
            "Authorization": `Bearer ${token}`,
            // 将 JWT Token 添加到 Authorization 请求头中
            "Content-Type": "multipart/form-data"
          },
          formData: {
            "file_name": randomFileName
            // 生成的随机文件名
          },
          success: (uploadFileRes) => {
            if (uploadFileRes.statusCode === 201) {
              const data = JSON.parse(uploadFileRes.data);
              formatAppLog("log", "at pages/login/more_info.vue:144", "上传成功！");
              formatAppLog("log", "at pages/login/more_info.vue:145", "上传的图片 URL:", data);
              uploadSuccessUrl.value = data.image_url;
            } else {
              formatAppLog("log", "at pages/login/more_info.vue:148", "上传失败，状态码：", uploadFileRes.statusCode);
            }
          },
          fail: (err) => {
            formatAppLog("log", "at pages/login/more_info.vue:152", err);
            formatAppLog("error", "at pages/login/more_info.vue:153", "上传文件出错:", err);
          }
        });
      }
      const validateEmail = (email2) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email2);
      };
      const saveMessage = async () => {
        formatAppLog("log", "at pages/login/more_info.vue:172", validateEmail(email.value));
        if (!validateEmail(email.value)) {
          return uni.showToast({
            title: "请输入正确的邮箱",
            icon: "fail",
            duration: 700
          });
        }
        changeUserInfo({ name: name.value || "", icon: uploadSuccessUrl.value || "", gender: gender.value || "", birthdate: birthday.value || "", residence: address.value || "", email: email.value || "" }).then((res) => {
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
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
        const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_1$4);
        const _component_uni_calendar = resolveEasycom(vue.resolveDynamicComponent("uni-calendar"), __easycom_2$1);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, {
            title: "完善信息",
            bgc: "#1B46CC",
            isSkip: true,
            onSkip: skip
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
                  src: _imports_0$7,
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
                  src: _imports_0$7,
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
                  src: _imports_0$7,
                  mode: "widthFix",
                  class: "arrow_pix"
                })
              ])
            ]),
            vue.createElementVNode("view", {
              class: "info_item flex_between",
              style: { "flex": "1" },
              onClick: getLocation
            }, [
              vue.createElementVNode("view", { class: "title" }, " 常居地 "),
              vue.createElementVNode("view", {
                class: "flex_center",
                style: { "flex": "1", "justify-content": "flex-end" }
              }, [
                vue.createElementVNode(
                  "view",
                  {
                    class: "email",
                    style: { "flex": "1" }
                  },
                  vue.toDisplayString(address.value),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("image", {
                  src: _imports_0$7,
                  mode: "widthFix",
                  class: "arrow_pix"
                })
              ])
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
  const PagesLoginMoreInfo = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-dc27228e"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/login/more_info.vue"]]);
  const _sfc_main$f = {
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
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
                  src: _imports_0$7,
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
                  src: _imports_0$7,
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
  const PagesMyAccountMyPoint = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-c4092873"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/myAccount/my_point.vue"]]);
  const _sfc_main$e = {
    __name: "point_available",
    setup(__props) {
      const toWithdrawRecord = () => {
        uni.navigateTo({
          url: "/pages/myAccount/red_point_withdraw_record"
        });
      };
      return (_ctx, _cache) => {
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_navBar, { title: "可用积分" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "list_box" }, [
              vue.createCommentVNode(' <view class="list_item flex_between">\n					<view class="">\n						兑换商品\n					</view>\n					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pic"></image>\n				</view>\n				<view class="list_item flex_between" @click="toWithdrawPoint">\n					<view class="">\n						提取积分\n					</view>\n					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pic"></image>\n				</view> '),
              vue.createElementVNode("view", {
                class: "list_item flex_between",
                onClick: toWithdrawRecord
              }, [
                vue.createElementVNode("view", { class: "" }, " 提取记录 "),
                vue.createElementVNode("image", {
                  src: _imports_0$7,
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
  const PagesMyAccountPointAvailable = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-98cb4a56"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/myAccount/point_available.vue"]]);
  const _sfc_main$d = {
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
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
                  src: _imports_0$7,
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
                  src: _imports_0$7,
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
  const PagesMyAccountPointAccount = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-9711af29"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/myAccount/point_account.vue"]]);
  const _sfc_main$c = {
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
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
  const PagesMyAccountBindAccount = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-bbd33f9d"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/myAccount/bind_account.vue"]]);
  const _sfc_main$b = {
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
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
  const PagesMyAccountUnbindAccount = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-05706c93"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/myAccount/unbind_account.vue"]]);
  const _imports_0 = "/static/scan.png";
  const _sfc_main$a = {
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
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
                  src: _imports_0,
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
  const PagesAgentAddDeposit = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-a9b824e0"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/agent/add_deposit.vue"]]);
  const _sfc_main$9 = {
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
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
                  src: _imports_0,
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
  const PagesAgentRemoveDeposit = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-f9cb8c94"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/agent/remove_deposit.vue"]]);
  const _sfc_main$8 = {};
  function _sfc_render$3(_ctx, _cache) {
    const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
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
  const PagesAgentDepositRecord = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$3], ["__scopeId", "data-v-a1272888"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/agent/deposit_record.vue"]]);
  const _sfc_main$7 = {
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
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
                  src: _imports_0,
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
  const PagesRecommendAddDeposit = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-4fd6a1b1"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/recommend/add_deposit.vue"]]);
  const _sfc_main$6 = {
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
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
                  src: _imports_0,
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
  const PagesRecommendRemoveDeposit = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-620816bd"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/recommend/remove_deposit.vue"]]);
  const _sfc_main$5 = {};
  function _sfc_render$2(_ctx, _cache) {
    const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
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
  const PagesRecommendDepositRecord = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$2], ["__scopeId", "data-v-f3fe22dd"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/recommend/deposit_record.vue"]]);
  const _sfc_main$4 = {
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
                            src: _imports_0$8,
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
                        src: _imports_1$5,
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
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]);
      };
    }
  };
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-ad76e2db"], ["__file", "/Users/daily/Desktop/d9/money_celestial/components/publicShopList/publicShopList.vue"]]);
  const _sfc_main$3 = {
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
        const { results } = await getAgentShopList(params.value);
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
        const _component_uni_data_select = resolveEasycom(vue.resolveDynamicComponent("uni-data-select"), __easycom_1$3);
        const _component_publicShopList = resolveEasycom(vue.resolveDynamicComponent("publicShopList"), __easycom_2);
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
                  src: _imports_0$2,
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
                  src: _imports_1$2,
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
                  src: _imports_1$2,
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
  const PagesAgentMerchantList = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-017395ae"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/agent/merchant_list.vue"]]);
  const _sfc_main$2 = {
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
        const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
        const _component_uni_data_select = resolveEasycom(vue.resolveDynamicComponent("uni-data-select"), __easycom_1$3);
        const _component_publicShopList = resolveEasycom(vue.resolveDynamicComponent("publicShopList"), __easycom_2);
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
                  src: _imports_0$2,
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
                  src: _imports_1$2,
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
                  src: _imports_1$2,
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
  const PagesRecommendMerchantList = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-d3cd92c3"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/recommend/merchant_list.vue"]]);
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
  const _sfc_main$1 = {
    setup() {
      const allQuestions = vue.ref([]);
      const currentQuestions = vue.ref([]);
      const selectedAnswers = vue.ref([]);
      const incorrectQuestions = vue.ref([]);
      const showAnswers = vue.ref(false);
      const isSubmitted = vue.ref(false);
      const userStore = useUserStore();
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
      const selectAnswer = (questionIndex, selectedOption) => {
        selectedAnswers.value[questionIndex] = selectedOption;
      };
      const submitAnswers = async () => {
        incorrectQuestions.value = [];
        currentQuestions.value.forEach((question, index) => {
          if (selectedAnswers.value[index] !== question.correct_answer) {
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
            await createRecommendOfficer({ shops: results, name: username });
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
        resetQuiz
      };
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_navBar = resolveEasycom(vue.resolveDynamicComponent("navBar"), __easycom_0);
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
              $setup.showAnswers ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 0,
                  class: "answer"
                },
                " 正确答案：" + vue.toDisplayString(question.correct_answer),
                1
                /* TEXT */
              )) : vue.createCommentVNode("v-if", true)
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
  const PagesRecommendRecommendTest = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-f9f250b0"], ["__file", "/Users/daily/Desktop/d9/money_celestial/pages/recommend/recommend_test.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/merchant/merchant_intro", PagesMerchantMerchantIntro);
  __definePage("pages/merchant/settle_notice", PagesMerchantSettleNotice);
  __definePage("pages/merchant/merchant_set_info", PagesMerchantMerchantSetInfo);
  __definePage("pages/merchant/merchant_management", PagesMerchantMerchantManagement);
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
