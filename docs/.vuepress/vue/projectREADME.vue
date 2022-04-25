<template>
  <!-- tablecommon -->
  <div class="aic projectREADME">
        <div class="aic mx">
            <div class="name">vue</div>
            <div class="value">^3.2.6</div>
        </div>

         <div class="aic mx">
            <div class="name">vite</div>
            <div class="value">^2.3.3</div>
        </div>

          <div class="aic mx">
            <div class="name">element-plus</div>
            <div class="value">^1.1.0-beta.10</div>
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
.projectREADME{
    margin-top: 30px;
    margin-bottom: 30px;
}
.fd,.aic,.jcc,.jcb,.jca,.fdc,.jcfend{
    display: flex;
}
.aic{
align-items: center;
}
.jcc{
    justify-content: center;
}
.jcb{
    justify-content: space-between; 
}
.jca{
    justify-content: space-around; 
}
.mx{
    margin: 0 5px;
}
.name{
    border-top-left-radius:4px;
    border-bottom-left-radius:4px;
    font-size: 12px;
    color: #ffffff;
    padding:2px 5px;
    background-color: #5c5c5c;
}
.value{
     font-size: 12px;
       padding:2px 5px;
    color: #FFF;
    background-color: #4dc71f;
 border-top-right-radius:4px;
    border-bottom-right-radius:4px;
}
</style>
