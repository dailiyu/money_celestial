"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const service_uer_profile = require("../../service/uer_profile.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_calendar2 = common_vendor.resolveComponent("uni-calendar");
  (_easycom_navBar2 + _easycom_uni_easyinput2 + _easycom_uni_calendar2)();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_calendar = () => "../../uni_modules/uni-calendar/components/uni-calendar/uni-calendar.js";
if (!Math) {
  (_easycom_navBar + _easycom_uni_easyinput + _easycom_uni_calendar)();
}
const uploadUrl = "https://max.q6z4kzhr.uk/api/image/upload/";
const _sfc_main = {
  __name: "more_info",
  setup(__props) {
    const skip = () => {
      console.log(111);
    };
    const name = common_vendor.ref("");
    const imagePath = common_vendor.ref("");
    const gender = common_vendor.ref("");
    const email = common_vendor.ref("");
    const uploadSuccessUrl = common_vendor.ref("");
    const getGender = () => {
      common_vendor.index.showActionSheet({
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
      common_vendor.index.chooseImage({
        count: 1,
        // 限制用户只能选择一张图片
        success: (res) => {
          const tempFilePaths = res.tempFilePaths;
          imagePath.value = tempFilePaths[0];
          console.log("-----选择的图片路径：", tempFilePaths[0]);
          uploadImage(tempFilePaths[0]);
        },
        fail: (err) => {
          console.log("选择图片失败：", err);
        }
      });
    };
    const token = common_vendor.index.getStorageSync("accessToken");
    function uploadImage(filePath) {
      common_vendor.index.uploadFile({
        url: uploadUrl,
        // 上传接口 URL
        filePath,
        // 需要上传的文件路径
        name: "image",
        // 后台接收文件的字段名 (根据实际需求)
        header: {
          "Authorization": `Bearer ${token}`,
          // 将 JWT Token 添加到 Authorization 请求头中
          "Content-Type": "multipart/form-data"
        },
        success: (uploadFileRes) => {
          if (uploadFileRes.statusCode === 201) {
            const data = JSON.parse(uploadFileRes.data);
            console.log("上传成功！");
            console.log("上传的图片 URL:", data);
            uploadSuccessUrl.value = data.image_url;
          } else {
            console.log("上传失败，状态码：", uploadFileRes.statusCode);
          }
        },
        fail: (err) => {
          console.log(err);
          console.error("上传文件出错:", err);
        }
      });
    }
    const saveMessage = async () => {
      service_uer_profile.updateUserProfile(uploadSuccessUrl.value, name.value, email.value, gender.value, birthday.value, address.value).then((res) => {
        common_vendor.index.showToast({
          duration: 1e3,
          icon: "success",
          title: "保存成功"
        });
        setTimeout(() => {
          common_vendor.index.navigateTo({
            url: "/pages/index/index"
          });
        }, 1e3);
      }).catch((err) => {
        common_vendor.index.showToast({
          duration: 1e3,
          icon: "fail",
          title: "保存失败"
        });
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
        c: imagePath.value,
        d: common_assets._imports_0$4,
        e: common_vendor.o(chooseImg),
        f: common_vendor.o(($event) => name.value = $event),
        g: common_vendor.p({
          modelValue: name.value
        }),
        h: common_vendor.o(($event) => email.value = $event),
        i: common_vendor.p({
          modelValue: email.value
        }),
        j: common_vendor.t(gender.value ? gender.value == "male" ? "男" : "女" : "选择"),
        k: common_assets._imports_0$4,
        l: common_vendor.o(getGender),
        m: common_vendor.t(birthday.value),
        n: common_assets._imports_0$4,
        o: common_vendor.o(openCalendar),
        p: common_vendor.t(address.value),
        q: common_assets._imports_0$4,
        r: common_vendor.o(getLocation),
        s: common_vendor.o(saveMessage),
        t: common_vendor.sr(calendar, "dc27228e-3", {
          "k": "calendar"
        }),
        v: common_vendor.o(confirm),
        w: common_vendor.p({
          insert: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-dc27228e"], ["__file", "D:/code/money_celestial/pages/login/more_info.vue"]]);
wx.createPage(MiniProgramPage);
