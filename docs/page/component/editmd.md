<EchartsDemo   />

## 示例
```html
<template>
  <div>
      <Editjs :option="state.option" @handleRun="handleRun">
        <template #component>
         <div :ref="echartsMap" id="mainChina"></div>
        </template>
      </Editjs>
   
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, nextTick, onMounted, watch } from "vue";
import * as echarts from "echarts";
/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/
const state = reactive({
  option:  {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    },
});
let echartsMapel: any = ref("");
 let opt=null;
const echartsMap = (e: any) => (echartsMapel.value = e);
  const init=()=>{
  let myChart = echarts.init(echartsMapel.value);
  myChart.setOption(state.option);
  const setOption = (dataObj:any)=>{
  let opt =   myChart.getOption()
   Object.assign(opt,dataObj)
     myChart.setOption(opt);
  }
  return setOption
};
const handleRun = (val)=>{
  opt(val)
}
onMounted(() => {
  setTimeout(() => {
   opt = init()
  }, 500);
});
</script>

<style scoped lang="scss">
#mainChina {
  width: 100%;
  height: 400px;
}
</style>

```
## Editjs 属性

| 属性名 | 数据类型 |说明 |
|--|--|--|
| title |  string |演示的组件名字 |
| option|  Object | 演示组件的参数对象 |
## Editjs 方法

| 方法名 | 回调参数 |说明 |
|--|--|--|
| handleRun |  编辑后返回的json对象 |用户点击运行后触发 |
