<template>
  <view>
	<navBar title="推荐官考试"></navBar>
    <view class="content">
    	<view v-for="(question, index) in currentQuestions" :key="index" class="question-card">
    	  <text class="title">{{ index + 1 }}. {{ question.question }}</text>
    	  <radio-group @change="selectAnswer(index, $event.detail.value)">
    	    <view v-for="(option, i) in question.options" :key="i">
    	      <label>
    	        <radio
    	          :value="option"
    	          :checked="selectedAnswers[index] === option"
    	          :disabled="showAnswers"
				  color="#FC5908"
    	        />{{ option }}
    	      </label>
    	    </view>
    	  </radio-group>
    	  <!-- 答案展示 -->
    	  <view v-if="showAnswers" class="answer">
    	    正确答案：{{ question.correct_answer }}
    	  </view>
    	</view>
    	
    	<button @click="submitAnswers" v-if="!showAnswers" class="btn_full">提交答案</button>
    	<button @click="showCorrectAnswers" v-if="!showAnswers && isSubmitted" class="btn_plain">查看答案</button>
    	<button @click="resetQuiz" v-if="showAnswers" class="btn_full">重新答题</button>
    </view>
  </view>
</template>

<script>
import { ref, onMounted } from 'vue';
import questionsData from './question/index.json';
import { createRecommendOfficer } from '@/service/recommend.js'
import { getMerchantList } from '@/service/merchant.js'
import { useUserStore } from '../../store/user';


export default {
  setup() {
    const allQuestions = ref([]);  // 全部题目
    const currentQuestions = ref([]);  // 当前5道题目
    const selectedAnswers = ref([]);  // 用户选择的答案
    const incorrectQuestions = ref([]);  // 答错的题目
    const showAnswers = ref(false);  // 是否显示答案
    const isSubmitted = ref(false);  // 是否已经提交过
	const userStore = useUserStore()

    // 初始化随机获取5道题目
    const initQuestions = () => {
      allQuestions.value = questionsData.questions;
      currentQuestions.value = getRandomQuestions(5);
      selectedAnswers.value = Array(5).fill(''); // 清空并重置选择答案
      showAnswers.value = false; // 不显示答案
      isSubmitted.value = false; // 还未提交
    };

    // 随机获取指定数量的题目
    const getRandomQuestions = (count) => {
      let questionsCopy = [...allQuestions.value];
      let selected = [];
      while (selected.length < count) {
        const randomIndex = Math.floor(Math.random() * questionsCopy.length);
        selected.push(questionsCopy.splice(randomIndex, 1)[0]);
      }
      return selected;
    };

    // 用户选择答案
    const selectAnswer = (questionIndex, selectedOption) => {
      selectedAnswers.value[questionIndex] = selectedOption;
    };

    // 提交答案并检查是否答错
    const submitAnswers = async() => {
      incorrectQuestions.value = [];
      currentQuestions.value.forEach((question, index) => {
        if (selectedAnswers.value[index] !== question.correct_answer) {
          incorrectQuestions.value.push(question);
        }
      });
      isSubmitted.value = true;
      if (incorrectQuestions.value.length > 0) {
        // 有答错的题目
        uni.showToast({
          title: '有答错的题目，点击查看答案！',
          icon: 'none'
        });
      } else {
        uni.showToast({
          title: '恭喜，全部正确！',
          icon: 'success'
        });
		
		try{
			uni.showLoading({
				title: '提交中'
			})
			const username = userStore.userInfo.username
			const {results} = await getMerchantList()
			await createRecommendOfficer({shops:results, name:username})
			uni.hideLoading()
			uni.navigateTo({
				url: '/pages/recommend/recommend_management'
			})
		}catch(e){
			uni.showToast({
				title: '出错啦',
				icon: 'none'
			})
		}
      }
    };

    // 查看正确答案
    const showCorrectAnswers = () => {
      showAnswers.value = true;
    };

    // 重新生成5道题目并清空答案
    const resetQuiz = () => {
      initQuestions(); // 重新初始化题目
	  
    };

    // 页面加载时初始化
    onMounted(() => {
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
</script>

<style lang="scss" scoped>
.question-card {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  .title {
	  font-size: 27rpx;
  }
  radio-group {
	  font-size: 24rpx;
	  color: #999999;
  }
  radio {
	  transform:scale(0.6)
  }
}

.answer {
  color: green;
  margin-top: 10px;
}

.btn_full {
  margin-top: 20px;
}
.btn_plain {
	margin-top: 20px;
}
</style>
