"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/merchant/merchant_intro.js";
  "./pages/merchant/settle_notice.js";
  "./pages/merchant/merchant_set_info.js";
  "./pages/merchant/merchant_management.js";
  "./pages/merchant/merchant_edit_info.js";
  "./pages/merchant/point_gift.js";
  "./pages/merchant/merchant_code_authentication.js";
  "./pages/merchant/security_deposit.js";
  "./pages/merchant/deposit_record.js";
  "./pages/merchant/add_deposit.js";
  "./pages/merchant/remove_deposit.js";
  "./pages/merchant/upload_goods.js";
  "./pages/agent/agent_intro.js";
  "./pages/agent/agent_management.js";
  "./pages/recommend/recommend_intro.js";
  "./pages/recommend/recommend_management.js";
  "./pages/merchant/all_merchant.js";
  "./pages/agent/merchant_code_authentication.js";
  "./pages/recommend/merchant_code_authentication.js";
  "./pages/recommend/security_deposit.js";
  "./pages/agent/security_deposit.js";
  "./pages/myAccount/myAccount.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
