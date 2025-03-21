<template>
  <view>
    <button @click="currentView = 'HomeComponent'">首页</button>
    <button @click="currentView = 'ProfileComponent'">个人中心</button>

    <!-- 动态组件切换，类似 router-view -->
    <component :is="currentView"></component>
  </view>
</template>

<script setup>
import { ref, shallowRef } from 'vue';
import HomeComponent from '@/components/HomeComponent.vue';
import ProfileComponent from '@/components/ProfileComponent.vue';

const currentView = ref('HomeComponent');

// 组件注册（shallowRef 避免性能损耗）
const components = {
  HomeComponent,
  ProfileComponent,
};
</script>
