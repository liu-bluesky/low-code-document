import { defineClientAppEnhance } from '@vuepress/client'
import CustomLayout from './vue/CustomLayout.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'//1.1.0-beta.10 版本
// 国际化
export default defineClientAppEnhance(({ app }) => {
    app.use(ElementPlus)//element-plus挂载

})