## 演示效果


<VueCropperDIY />


## 示例代码

```html
<template>
  <!-- tablecommon -->
  <div class="commonBoxmp white-bg">
    <div class="">
      <VueCropper
      :ref="CropperRef"
        style="width: 500px; height: 500px"
        :img="state.option.img"
        :outputSize="state.option.size"
        :outputType="state.option.outputType"
        @realTime="realTime"
        :autoCrop="true"
        @imgLoad="imgLoad"
      ></VueCropper>
      <div class="mt30 overhide" :style="state.previews.div">
        <img :src="state.previews.url" :style="state.previews.img" alt="" />
      </div>
    </div>
    <img v-if="state.img" class="mt30" :style="state.previews.div" :src="state.img" alt="">
    <div>
      <el-button @click="handleCropper" type="primary">裁剪</el-button>
      <el-button @click="clearCropper" type="primary">清楚图片数据</el-button>
      <el-button type="success">上传服务器</el-button>
    </div>
  </div>
</template>

<script setup >
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

const state = reactive({
  option: {
    outputType: "webp",
    img: "https://p0.ssl.img.360kuai.com/t0194ef4016c96eea82.webp",
  },
  previews: "",
  img:""
});
let Cropper = "";
let CropperRef = (e )=>Cropper = e;
/**
 * 裁剪成功回调
 */
const imgLoad = (e) => {
  console.log("e :>> ", e);
  //    state.previews = e;
};
/**
 * 预览
 */
const realTime = (e) => {
  console.log("e1111 :>> ", e);
  state.previews = e;
};
/**
 * 预览
 */
const handleCropper = (e) => {
Cropper.getCropData((data ) => {
  // do something
  console.log(data)  
  state.img=data
})
};
const clearCropper = (e) => {
state.previews = ""
state.img = ""
};


</script>

<style  scoped lang="scss" >
.overhide {
  overflow: hidden;
  margin-left: 60px;
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
.mt30{
  margin-top: 30px;
}
</style>

```

## 安装插件

```shell
npm install vue-cropper
yarn add vue-cropper
```
### 引入
```js
import { VueCropper } from "vue-cropper";
import 'vue-cropper/dist/index.css'//剪接
new Vue({
    components: {VueCropper}
})
```