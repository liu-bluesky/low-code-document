<template>
  <!-- tablecommon -->
  <div class="commonBoxmp white-bg aic jcb " >
    <div class="left">
      <el-card :body-style="{ padding: '0px' }" class="box-card">
        <template #header>
          <div class="jcb aic">
            <span>{{title}}</span>
          
            <div class="aic">
    <el-button type="primary" @click="handleRun" class="button">运行</el-button>
            </div>
          </div>
        </template>
      <div class="aic">
        <div class="edit-box" :ref="EditrefF" contenteditable >
            <pre  class="editjs-pre hljs" v-html="state.option"></pre>
        </div>
          <slot name="component"> </slot>
        </div>
      </el-card>
      <div>
             <!-- <pre  class="editjs-pre hljs" v-html="state.htmldata"></pre> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted,watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import beautify from 'js-beautify';
import highlighter from 'highlighter';
let props = defineProps({
  title:{
    type: String,
    default:"demo组件"
  },
  option: {
    type: String,
    default:{
    },
  },
});
const count = ref(0);
const state = reactive({
        option:{},htmldata:""
});

watch(
  () => props.option,
  (val, old) => {
    state.option =highlighter()(beautify.js_beautify(JSON.stringify(val), { 
      indent_size: 2, space_in_empty_paren: true }),"json")
  },
  {
    immediate: true,
    deep: true,
  }
);

const router = useRouter();
const route = useRoute();
const emit = defineEmits(["handleRun"]);
let EditRef = ref();
const EditrefF = (e: any) => (EditRef.value = e);
const handleRun = () => {
  let content = EditRef.value.innerText;
  emit("handleRun",JSON.parse(content) );
};
onMounted(() => {
 
});
/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/

</script>

<style  lang="scss">
@import url("highlight.js/styles/vs2015.css");
.theme-default-content:not(.custom){
    max-width: 100%;
}
.editjs-icon{
  width: 20px;
  padding: 5px;
  cursor: pointer;
  margin-right:10px;
  color: #303133;
  height: 20px;
}
.editjs-pre{
  height: 100%;
  padding: 10px !important;
  margin: 0!important;
  border-radius: 0 !important;
}
.box-card {
    
  .edit-box {
    height: 500px;
    background-color: #eee;
  }
}
.left {
    flex: 1;

}
.fd,
.aic,
.jcc,
.jcb,
.jca,
.fdc,
.jcfend {
  display: flex;
}
.aic {
  align-items: center;
}
.jcc {
  justify-content: center;
}
.jcb {
  justify-content: space-between;
}
.jca {
  justify-content: space-around;
}

</style>
