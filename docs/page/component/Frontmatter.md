# 基础
<ProjectREADME />
[vue-admin-tempalte](https://gitee.com/blueskyliu/admin-tempalte)  是一个后台前端解决方案，它基于 vue 、typescript、 element-ui、vite、setup语法糖实现。它使用了最新的前端技术栈，动态路由，权限验证，提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。相信不管你的需求是什么，本项目都能帮助到你。

> ### 建议
> 本项目的定位是独立的后台模板 没有结合后台框架 特别适合DIY开发
> * 基础版本  [vue-admin-base](https://gitee.com/blueskyliu/llt-admin-base) 
> * 完整版本  [vue-admin-tempalte](https://gitee.com/blueskyliu/admin-tempalte) 
> * 桌面终端  [vue-admin-tempalte 分支electron](https://gitee.com/blueskyliu/admin-tempalte) 
## 介绍
### 功能
```
- 登录 
- 权限验证
  - 指令权限
- 全局功能
  - 多种动态换肤
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - 快捷导航(标签页)
  - Screenfull全屏
  - 自适应收缩侧边栏
- Excel
  - 导入excel
- 表格
  - 动态表格
  - 拖拽表格
- 思维导图
- ECharts 图表
```
### 前序准备
你需要在本地安装 node 和 git
### 目录结构
```
|—— dist                     # 打包路径
|—— public                   # 公共文件
|—— scr                      # 源代码
|   |—— assets               # 静态文件
|   |—— axion                # api 配置 以及接口封装
|   |—— components           # 组件
|   |—— directive            # 自定义指令模块
|   |—— enums                # 接口枚举
|   |—— hooks                # hooks风格函数
|   |—— layouts              # 布局模块
|   |—— plugins              # 插件模块
|   |—— router               # 路由模块
|         |—— routes         # 项目所有路由
|             |—— modules    # 左侧菜单路由
|   |—— store                # 全局 store管理
|   |—— views                # 页面模块
|   |—— App.vue              # 页面入口
|   |—— init.scss            # css初始化 主题初始化
|   |—— main.ts              # 入口文件 加载组件 初始化等
|   |—— shims-vue.d.ts       # 全局文件解析声明

```
### 安装
```shell
# 克隆项目
git clone https://gitee.com/blueskyliu/admin-tempalte.git

# 进入项目目录
cd admin-tempalte

# 安装依赖
yarn install


# 本地开发 启动项目
yarn dev
```
###  Contribution

本文档项目地址 admin-document 基于 [vuepress](https://vuepress.vuejs.org/)开发。

有任何修改和建议都可以该项目 pr 和 issue

 vue-admin-tempalte还在持续迭代中，逐步沉淀和总结出更多功能和相应的实现代码，总结中后台产品模板/组件/业务场景的最佳实践。本项目也十分期待你的参与和[反馈](https://gitee.com/blueskyliu/admin-tempalte/issues)。


### 新增路由

 > 在 /scr/router/routes/modules 新建 .ts文件
 
 文件基础模板示例

 ```ts
import { AppRouteModule, AppRouteRecordRaw } from "/@ts/router/types";

const routeMenuList: AppRouteRecordRaw[] = [
    {
        path:"/system",
        name:"system",
        meta:{
            title:"系统管理",
            icon:"el-icon-s-tools"
        },
        children:[
            {
                path:"/system/account",
                name:"systemAccount",
                meta:{
                    title:"账号管理",
                },
                component: () => import('/@/views/sys/account/account.vue'),
            }
    },
];
export default routeMenuList
 ```
### 新增页面

> 在 /scr/views 新建 .vue文件
 
 文件基础模板示例

 ```vue
<template>
<!-- tablecommon -->
  <div class="commonBoxmp white-bg">
   {{state.value}}
  </div>
</template>

<script setup lang="ts">
import {ref,reactive,onMounted} from 'vue';
import {useRouter,useRoute} from 'vue-router'
   const router = useRouter()
   const route = useRoute()
    onMounted(()=>{
    })
/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/
 const count =ref(0);
 const state = reactive({
     value:"123"
 })
</script>

<style  scoped lang="scss" >

</style>

 ```
 
### 新增组件

 > 在 /scr/components 新建 .vue文件
 
 文件基础模板示例

 ```vue
<template>
  <div>
  </div>
</template>

<script setup lang="ts">
import {ref,reactive,defineEmits, onMounted } from 'vue';
/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/

 const state = reactive({
 })

 defineProps({
  msg:  {
      type: String,
      required: true
    }
})

</script>

<style  scoped lang="scss" >

</style>


 ```
 ## 进阶
 ### 样式/主题

```css
commonBoxmp white-bg 页面初始化样式 
```
效果 撑满屏幕

![在这里插入图片描述](https://img-blog.csdnimg.cn/59398aa368c94c908268f6239197596c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQkxVRVNLWUhPU1Q=,size_20,color_FFFFFF,t_70,g_se,x_16)

主题配色 /scr/init.scss 搜索 “初始化 element-plus css start” 这里面的样式是初始化element-plus css 用来设置自己的自定义主题

```css
html{
    /* 设置主题颜色 采用rgb */
    --color-red:9;
    --color-green:96;
    --color-blue:189;
    /* 使用案例 */
     border-color:rgba(var(--color-red), var(--color-green), var(--color-blue), 1);
}
```

### 国际化

建议采用 vue-i18n

### vite指南

[vite中文文档](https://vitejs.cn/)

## 其他

### 常见问题
#### 打包内存溢出
方案1
```shell
 # 在git bash 命令行执行  
 export NODE_OPTIONS=--max_old_space_size=4096
```
方案2
> vite.config.ts 分包打包
```json
  build:{
    brotliSize:false,
    chunkSizeWarningLimit:2000,
    rollupOptions:{
      output:{
        manualChunks(id){ // 分包
          if(id.includes('node_modules')){
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  },
```