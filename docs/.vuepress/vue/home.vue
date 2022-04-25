<template>
  <!-- tablecommon -->
  <div>
      <div class="botton">
           <router-link to="/page/project/Frontmatter">
          <div class="left">
             
              快速上手</div>
              </router-link>
          <!-- <div class="right">项目简介</div> -->
      </div>
    <div class="homeDiy">
      <div class="item">
        <h1 class="h1">丰富功能</h1>
        <div class="content">提炼了典型的业务模型，提供了丰富的功能组件</div>
      </div>
      <div class="item">
        <h1 class="h1">最佳实践</h1>
        <div class="content">生成的模板：合理的框架选择，良好的工程实践助你持续产出高质量代码</div>
      </div>
      <div class="item">
        <h1 class="h1">最新技术栈</h1>
        <div class="content">
        生成的模板：  Vue 3 + Typescript + Vite+ script setup语法糖+element-plus UI
        </div>
      </div>
      <div class="item">
        <h1 class="h1">拖拽搭建</h1>
        <div class="content">根据搭积木思想搭建项目</div>
      </div>
      <div class="item">
        <h1 class="h1">国际化</h1>
        <div class="content">生成的模板：内建业界通用的国际化方案</div>
      </div>
      <div class="item">
        <h1 class="h1">主题</h1>
        <div class="content">生成的模板：支持多种动态换肤功能</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
onMounted(() => {});
/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/
const count = ref(0);
const state = reactive({});
</script>

<style scoped lang="scss">
.botton{
    display: flex;
    align-items: center;
     justify-content: center;
     padding-bottom: 40px;
    .left{
        color: white;
        cursor: pointer;
display: inline-block;
border-radius: 6px;
transition: background-color .1s ease;
background-color: var(--back-to-top-color);
padding: 0 24px;
line-height: 52px;
font-size: 1.2rem;
font-weight: 500;
border: 2px solid var(--back-to-top-color);
    }
     .right{
         margin-left: 30px;
         cursor: pointer;
        background-color:#FFF;
color: var(--back-to-top-color);
padding: 0 24px;
line-height: 52px;
font-size: 1.2rem;
font-weight: 500;
border-radius: 6px;
border: 2px solid var(--back-to-top-color);
transition: background-color .1s ease;
    }
    .right:hover{
         cursor: pointer;
        background-color:var(--back-to-top-color);
color: #FFF;
    }
}
.homeDiy {
  border-top: 1px solid #eee;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .item {
    padding-top: 10px;
    width: 30%;
    box-sizing: border-box;
    .h1 {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
      color: #3a5169;
    }
    .content {
      color: #4e6e8e;
      line-height: 1.7;
    }
  }
}
</style>
