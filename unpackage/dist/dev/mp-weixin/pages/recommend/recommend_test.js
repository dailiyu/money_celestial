"use strict";
const common_vendor = require("../../common/vendor.js");
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
const _sfc_main = {
  setup() {
    const allQuestions = common_vendor.ref([]);
    const currentQuestions = common_vendor.ref([]);
    const selectedAnswers = common_vendor.ref([]);
    const incorrectQuestions = common_vendor.ref([]);
    const showAnswers = common_vendor.ref(false);
    const isSubmitted = common_vendor.ref(false);
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
    const submitAnswers = () => {
      incorrectQuestions.value = [];
      currentQuestions.value.forEach((question, index) => {
        if (selectedAnswers.value[index] !== question.correct_answer) {
          incorrectQuestions.value.push(question);
        }
      });
      isSubmitted.value = true;
      if (incorrectQuestions.value.length > 0) {
        common_vendor.index.showToast({
          title: "有答错的题目，点击查看答案！",
          icon: "none"
        });
      } else {
        common_vendor.index.showToast({
          title: "恭喜，全部正确！",
          icon: "success"
        });
        common_vendor.index.navigateTo({
          url: "/pages/recommend/recommend_management"
        });
      }
    };
    const showCorrectAnswers = () => {
      showAnswers.value = true;
    };
    const resetQuiz = () => {
      initQuestions();
    };
    common_vendor.onMounted(() => {
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
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  _easycom_navBar2();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
if (!Math) {
  _easycom_navBar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      title: "推荐官考试"
    }),
    b: common_vendor.f($setup.currentQuestions, (question, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(index + 1),
        b: common_vendor.t(question.question),
        c: common_vendor.f(question.options, (option, i, i1) => {
          return {
            a: option,
            b: $setup.selectedAnswers[index] === option,
            c: common_vendor.t(option),
            d: i
          };
        }),
        d: common_vendor.o(($event) => $setup.selectAnswer(index, $event.detail.value), index)
      }, $setup.showAnswers ? {
        e: common_vendor.t(question.correct_answer)
      } : {}, {
        f: index
      });
    }),
    c: $setup.showAnswers,
    d: $setup.showAnswers,
    e: !$setup.showAnswers
  }, !$setup.showAnswers ? {
    f: common_vendor.o((...args) => $setup.submitAnswers && $setup.submitAnswers(...args))
  } : {}, {
    g: !$setup.showAnswers && $setup.isSubmitted
  }, !$setup.showAnswers && $setup.isSubmitted ? {
    h: common_vendor.o((...args) => $setup.showCorrectAnswers && $setup.showCorrectAnswers(...args))
  } : {}, {
    i: $setup.showAnswers
  }, $setup.showAnswers ? {
    j: common_vendor.o((...args) => $setup.resetQuiz && $setup.resetQuiz(...args))
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f9f250b0"], ["__file", "D:/code/money_celestial/pages/recommend/recommend_test.vue"]]);
wx.createPage(MiniProgramPage);