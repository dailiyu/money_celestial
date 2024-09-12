"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  const _easycom_uni_calendar2 = common_vendor.resolveComponent("uni-calendar");
  (_easycom_navBar2 + _easycom_uni_calendar2)();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
const _easycom_uni_calendar = () => "../../uni_modules/uni-calendar/components/uni-calendar/uni-calendar.js";
if (!Math) {
  (_easycom_navBar + _easycom_uni_calendar)();
}
const _sfc_main = {
  __name: "more_info",
  setup(__props) {
    const skip = () => {
      console.log(111);
    };
    const gender = common_vendor.ref("");
    const getGender = () => {
      common_vendor.index.showActionSheet({
        itemList: ["男", "女"],
        success(res) {
          if (res.tapIndex == 0) {
            gender.value = "男";
          } else {
            gender.value = "女";
          }
        }
      });
    };
    const birthday = common_vendor.ref("");
    const calendar = common_vendor.ref();
    const openCalendar = () => {
      calendar._rawValue.open();
    };
    const confirm = (e) => {
      birthday.value = e.fulldate;
    };
    const lat = common_vendor.ref("");
    const lon = common_vendor.ref("");
    const address = common_vendor.ref("");
    const getLocation = () => {
      common_vendor.index.chooseLocation({
        success(res) {
          lat.value = res.latitude;
          lon.value = res.longitude;
          address.value = res.address + res.name;
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(skip),
        b: common_vendor.p({
          title: "完善信息",
          bgc: "#1B46CC",
          isSkip: true
        }),
        c: common_assets._imports_0$3,
        d: common_assets._imports_0$3,
        e: common_assets._imports_0$3,
        f: common_vendor.t(gender.value ? gender.value : "选择"),
        g: common_assets._imports_0$3,
        h: common_vendor.o(getGender),
        i: common_vendor.t(birthday.value),
        j: common_assets._imports_0$3,
        k: common_vendor.o(openCalendar),
        l: common_vendor.t(address.value),
        m: common_assets._imports_0$3,
        n: common_vendor.o(getLocation),
        o: common_vendor.sr(calendar, "dc27228e-1", {
          "k": "calendar"
        }),
        p: common_vendor.o(confirm),
        q: common_vendor.p({
          insert: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-dc27228e"], ["__file", "D:/code/money_celestial/pages/login/more_info.vue"]]);
wx.createPage(MiniProgramPage);
