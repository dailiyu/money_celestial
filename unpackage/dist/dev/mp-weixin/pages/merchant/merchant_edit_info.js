"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const service_merchant = require("../../service/merchant.js");
const store_user = require("../../store/user.js");
const utils_index = require("../../utils/index.js");
const store_public = require("../../store/public.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  const _easycom_upload2 = common_vendor.resolveComponent("upload");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  (_easycom_navBar2 + _easycom_upload2 + _easycom_uni_data_select2)();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
const _easycom_upload = () => "../../components/upload/upload.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
if (!Math) {
  (_easycom_navBar + _easycom_upload + _easycom_uni_data_select)();
}
const _sfc_main = {
  __name: "merchant_edit_info",
  setup(__props) {
    const publicStore = store_public.usePublicStore();
    const userStore = store_user.useUserStore();
    const shopIntro = common_vendor.ref("");
    const shopName = common_vendor.ref("");
    const businessRange = common_vendor.ref("");
    const code = common_vendor.ref("");
    const temBannerImgPaths = common_vendor.ref([]);
    const temProfileImgPaths = common_vendor.ref([]);
    const temDetailImgPaths = common_vendor.ref([]);
    const range = common_vendor.computed(() => {
      return publicStore.cateGoryList.map((item) => {
        console.log({
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
    common_vendor.ref(false);
    const changeRange = (e) => {
      businessRange.value = e;
      console.log(e);
    };
    const acceptTempBannerImgPath = async (ImgPaths) => {
      temBannerImgPaths.value = ImgPaths;
      console.log(temBannerImgPaths.value);
    };
    const acceptTempProfileImgPath = async (ImgPaths) => {
      temProfileImgPaths.value = ImgPaths;
      console.log("tem", temProfileImgPaths.value);
    };
    const acceptTempDetailImgPath = async (ImgPaths) => {
      temDetailImgPaths.value = ImgPaths;
      console.log(temDetailImgPaths.value);
    };
    const bannerListUrl = common_vendor.ref([]);
    const upLoadBannerImg = async () => {
      for (let i = 0; i < temBannerImgPaths.value.length; i++) {
        const url = await utils_index.uploadImage(temBannerImgPaths.value[i]);
        await service_merchant.uploadMerchantBanner(url);
        bannerListUrl.value.push(url);
      }
    };
    const detailListUrl = common_vendor.ref([]);
    const upLoadDetailImg = async () => {
      for (let i = 0; i < temDetailImgPaths.value.length; i++) {
        const url = await utils_index.uploadImage(temDetailImgPaths.value[i]);
        await service_merchant.uploadMerchantDetail(url);
        detailListUrl.value.push(url);
      }
    };
    const profileUrl = common_vendor.ref("");
    const uploadProfileImg = async () => {
      console.log(temProfileImgPaths.value[0]);
      const url = await utils_index.uploadImage(temProfileImgPaths.value[0]);
      console.log("-------", url);
      profileUrl.value = url;
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
    const saveStoreInfo = async () => {
      console.log(
        !shopName.value,
        !address.value,
        !shopIntro.value,
        temDetailImgPaths.value.length === 0,
        temProfileImgPaths.value.length === 0,
        temBannerImgPaths.value.length === 0
      );
      console.log(
        shopIntro.value,
        shopName.value,
        address.value,
        temDetailImgPaths.value.length,
        temProfileImgPaths.value.length,
        temBannerImgPaths.value.length
      );
      if (!shopName.value || !address.value || !shopIntro.value || temDetailImgPaths.value.length.length === 0 || temBannerImgPaths.value.length === 0 || temProfileImgPaths.value.length === 0) {
        return common_vendor.index.showToast({
          icon: "none",
          title: "请填入完整信息"
        });
      }
      try {
        common_vendor.index.showLoading({
          title: "正在保存中..."
        });
        await uploadProfileImg();
        await upLoadBannerImg();
        await upLoadDetailImg();
        const res = await service_merchant.updataStoreInfo(profileUrl.value, shopName.value, address.value, shopIntro.value);
        console.log(res);
        common_vendor.index.hideLoading();
        common_vendor.index.showToast({
          title: "保存成功",
          duration: 600,
          icon: "success"
        });
        await userStore.fetchAllDataAction();
        setTimeout(() => {
          common_vendor.index.navigateBack();
        }, 700);
      } catch (e) {
        common_vendor.index.showToast({
          title: "出现错误",
          duration: 1e3,
          icon: "fail"
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "商家入驻"
        }),
        b: common_vendor.o(acceptTempProfileImgPath),
        c: common_vendor.p({
          amount: 1
        }),
        d: common_vendor.t(temBannerImgPaths.value.length),
        e: common_vendor.o(acceptTempBannerImgPath),
        f: common_vendor.p({
          amount: "6"
        }),
        g: shopIntro.value,
        h: common_vendor.o(($event) => shopIntro.value = $event.detail.value),
        i: common_vendor.t(temDetailImgPaths.value.length),
        j: common_vendor.o(acceptTempDetailImgPath),
        k: common_vendor.p({
          amount: 6
        }),
        l: shopName.value,
        m: common_vendor.o(($event) => shopName.value = $event.detail.value),
        n: common_vendor.o(changeRange),
        o: common_vendor.o(($event) => businessRange.value = $event),
        p: common_vendor.p({
          localdata: range.value,
          placeholder: "请选择",
          clear: false,
          modelValue: businessRange.value
        }),
        q: code.value,
        r: common_vendor.o(($event) => code.value = $event.detail.value),
        s: address.value,
        t: common_vendor.o(($event) => address.value = $event.detail.value),
        v: common_assets._imports_2$2,
        w: common_vendor.o(getLocation),
        x: common_vendor.o(saveStoreInfo)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-aaffa612"]]);
wx.createPage(MiniProgramPage);
