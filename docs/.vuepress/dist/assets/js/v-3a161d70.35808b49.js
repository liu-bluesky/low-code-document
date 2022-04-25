"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[325],{9951:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-3a161d70",path:"/page/component/Frontmatter.html",title:"基础",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"建议",slug:"建议",children:[]},{level:2,title:"介绍",slug:"介绍",children:[{level:3,title:"功能",slug:"功能",children:[]},{level:3,title:"前序准备",slug:"前序准备",children:[]},{level:3,title:"目录结构",slug:"目录结构",children:[]},{level:3,title:"安装",slug:"安装",children:[]},{level:3,title:"Contribution",slug:"contribution",children:[]},{level:3,title:"新增路由",slug:"新增路由",children:[]},{level:3,title:"新增页面",slug:"新增页面",children:[]},{level:3,title:"新增组件",slug:"新增组件",children:[]}]},{level:2,title:"进阶",slug:"进阶",children:[{level:3,title:"样式/主题",slug:"样式-主题",children:[]},{level:3,title:"国际化",slug:"国际化",children:[]},{level:3,title:"vite指南",slug:"vite指南",children:[]}]},{level:2,title:"其他",slug:"其他",children:[{level:3,title:"常见问题",slug:"常见问题",children:[]}]}],filePathRelative:"page/component/Frontmatter.md",git:{updatedTime:1650857803e3,contributors:[{name:"llt18336465466",email:"229236940@qq.com",commits:1}]}}},5106:(n,s,a)=>{a.r(s),a.d(s,{default:()=>C});var e=a(6252);const p=(0,e._)("h1",{id:"基础",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#基础","aria-hidden":"true"},"#"),(0,e.Uk)(" 基础")],-1),t=(0,e.Uk)(" [vue-admin-tempalte](https://gitee.com/blueskyliu/admin-tempalte) 是一个后台前端解决方案，它基于 vue 、typescript、 element-ui、vite、setup语法糖实现。它使用了最新的前端技术栈，动态路由，权限验证，提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。相信不管你的需求是什么，本项目都能帮助到你。 "),l=(0,e._)("h3",{id:"建议",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#建议","aria-hidden":"true"},"#"),(0,e.Uk)(" 建议")],-1),c=(0,e._)("p",null,"本项目的定位是独立的后台模板 没有结合后台框架 特别适合DIY开发",-1),o=(0,e.Uk)("基础版本 "),r={href:"https://gitee.com/blueskyliu/llt-admin-base",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Uk)("vue-admin-base"),i=(0,e.Uk)("完整版本 "),b={href:"https://gitee.com/blueskyliu/admin-tempalte",target:"_blank",rel:"noopener noreferrer"},k=(0,e.Uk)("vue-admin-tempalte"),m=(0,e.Uk)("桌面终端 "),d={href:"https://gitee.com/blueskyliu/admin-tempalte",target:"_blank",rel:"noopener noreferrer"},g=(0,e.Uk)("vue-admin-tempalte 分支electron"),h=(0,e.uE)('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><h3 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- 登录 \n- 权限验证\n  - 指令权限\n- 全局功能\n  - 多种动态换肤\n  - 动态侧边栏（支持多级路由嵌套）\n  - 动态面包屑\n  - 快捷导航(标签页)\n  - Screenfull全屏\n  - 自适应收缩侧边栏\n- Excel\n  - 导入excel\n- 表格\n  - 动态表格\n  - 拖拽表格\n- 思维导图\n- ECharts 图表\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="前序准备" tabindex="-1"><a class="header-anchor" href="#前序准备" aria-hidden="true">#</a> 前序准备</h3><p>你需要在本地安装 node 和 git</p><h3 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>|—— dist                     # 打包路径\n|—— public                   # 公共文件\n|—— scr                      # 源代码\n|   |—— assets               # 静态文件\n|   |—— axion                # api 配置 以及接口封装\n|   |—— components           # 组件\n|   |—— directive            # 自定义指令模块\n|   |—— enums                # 接口枚举\n|   |—— hooks                # hooks风格函数\n|   |—— layouts              # 布局模块\n|   |—— plugins              # 插件模块\n|   |—— router               # 路由模块\n|         |—— routes         # 项目所有路由\n|             |—— modules    # 左侧菜单路由\n|   |—— store                # 全局 store管理\n|   |—— views                # 页面模块\n|   |—— App.vue              # 页面入口\n|   |—— init.scss            # css初始化 主题初始化\n|   |—— main.ts              # 入口文件 加载组件 初始化等\n|   |—— shims-vue.d.ts       # 全局文件解析声明\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 克隆项目</span>\n<span class="token function">git</span> clone https://gitee.com/blueskyliu/admin-tempalte.git\n\n<span class="token comment"># 进入项目目录</span>\n<span class="token builtin class-name">cd</span> admin-tempalte\n\n<span class="token comment"># 安装依赖</span>\n<span class="token function">yarn</span> <span class="token function">install</span>\n\n\n<span class="token comment"># 本地开发 启动项目</span>\n<span class="token function">yarn</span> dev\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="contribution" tabindex="-1"><a class="header-anchor" href="#contribution" aria-hidden="true">#</a> Contribution</h3>',10),v=(0,e.Uk)("本文档项目地址 admin-document 基于 "),f={href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},y=(0,e.Uk)("vuepress"),x=(0,e.Uk)("开发。"),q=(0,e._)("p",null,"有任何修改和建议都可以该项目 pr 和 issue",-1),_=(0,e.Uk)("vue-admin-tempalte还在持续迭代中，逐步沉淀和总结出更多功能和相应的实现代码，总结中后台产品模板/组件/业务场景的最佳实践。本项目也十分期待你的参与和"),w={href:"https://gitee.com/blueskyliu/admin-tempalte/issues",target:"_blank",rel:"noopener noreferrer"},U=(0,e.Uk)("反馈"),R=(0,e.Uk)("。"),E=(0,e.uE)('<h3 id="新增路由" tabindex="-1"><a class="header-anchor" href="#新增路由" aria-hidden="true">#</a> 新增路由</h3><blockquote><p>在 /scr/router/routes/modules 新建 .ts文件</p></blockquote><p>文件基础模板示例</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AppRouteModule<span class="token punctuation">,</span> AppRouteRecordRaw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;/@ts/router/types&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> routeMenuList<span class="token operator">:</span> AppRouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n   <span class="token punctuation">{</span>\n       path<span class="token operator">:</span><span class="token string">&quot;/system&quot;</span><span class="token punctuation">,</span>\n       name<span class="token operator">:</span><span class="token string">&quot;system&quot;</span><span class="token punctuation">,</span>\n       meta<span class="token operator">:</span><span class="token punctuation">{</span>\n           title<span class="token operator">:</span><span class="token string">&quot;系统管理&quot;</span><span class="token punctuation">,</span>\n           icon<span class="token operator">:</span><span class="token string">&quot;el-icon-s-tools&quot;</span>\n       <span class="token punctuation">}</span><span class="token punctuation">,</span>\n       children<span class="token operator">:</span><span class="token punctuation">[</span>\n           <span class="token punctuation">{</span>\n               path<span class="token operator">:</span><span class="token string">&quot;/system/account&quot;</span><span class="token punctuation">,</span>\n               name<span class="token operator">:</span><span class="token string">&quot;systemAccount&quot;</span><span class="token punctuation">,</span>\n               meta<span class="token operator">:</span><span class="token punctuation">{</span>\n                   title<span class="token operator">:</span><span class="token string">&quot;账号管理&quot;</span><span class="token punctuation">,</span>\n               <span class="token punctuation">}</span><span class="token punctuation">,</span>\n               <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/views/sys/account/account.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n           <span class="token punctuation">}</span>\n   <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> routeMenuList\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="新增页面" tabindex="-1"><a class="header-anchor" href="#新增页面" aria-hidden="true">#</a> 新增页面</h3><blockquote><p>在 /scr/views 新建 .vue文件</p></blockquote><p>文件基础模板示例</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!-- tablecommon --&gt;</span>\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>commonBoxmp white-bg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  {{state.value}}\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span>reactive<span class="token punctuation">,</span>onMounted<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>useRouter<span class="token punctuation">,</span>useRoute<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>\n  <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n   <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n   <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">/*\n基本数据类型\n引用数据类型（复杂类型） 个人建议 ref初始化变量 \nref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, \nref定义的数据访问的时候要多一个.value\n*/</span>\n<span class="token keyword">const</span> count <span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    value<span class="token operator">:</span><span class="token string">&quot;123&quot;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span>  <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h3 id="新增组件" tabindex="-1"><a class="header-anchor" href="#新增组件" aria-hidden="true">#</a> 新增组件</h3><blockquote><p>在 /scr/components 新建 .vue文件</p></blockquote><p>文件基础模板示例</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span>reactive<span class="token punctuation">,</span>defineEmits<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token comment">/*\n基本数据类型\n引用数据类型（复杂类型） 个人建议 ref初始化变量 \nref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, \nref定义的数据访问的时候要多一个.value\n*/</span>\n\n<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n msg<span class="token operator">:</span>  <span class="token punctuation">{</span>\n     type<span class="token operator">:</span> String<span class="token punctuation">,</span>\n     required<span class="token operator">:</span> <span class="token boolean">true</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span>  <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="进阶" tabindex="-1"><a class="header-anchor" href="#进阶" aria-hidden="true">#</a> 进阶</h2><h3 id="样式-主题" tabindex="-1"><a class="header-anchor" href="#样式-主题" aria-hidden="true">#</a> 样式/主题</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>commonBoxmp white-bg 页面初始化样式 \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>效果 撑满屏幕</p><p><img src="https://img-blog.csdnimg.cn/59398aa368c94c908268f6239197596c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQkxVRVNLWUhPU1Q=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述"></p><p>主题配色 /scr/init.scss 搜索 “初始化 element-plus css start” 这里面的样式是初始化element-plus css 用来设置自己的自定义主题</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">html</span><span class="token punctuation">{</span>\n    <span class="token comment">/* 设置主题颜色 采用rgb */</span>\n    <span class="token property">--color-red</span><span class="token punctuation">:</span>9<span class="token punctuation">;</span>\n    <span class="token property">--color-green</span><span class="token punctuation">:</span>96<span class="token punctuation">;</span>\n    <span class="token property">--color-blue</span><span class="token punctuation">:</span>189<span class="token punctuation">;</span>\n    <span class="token comment">/* 使用案例 */</span>\n     <span class="token property">border-color</span><span class="token punctuation">:</span><span class="token function">rgba</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--color-red<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">var</span><span class="token punctuation">(</span>--color-green<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">var</span><span class="token punctuation">(</span>--color-blue<span class="token punctuation">)</span><span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="国际化" tabindex="-1"><a class="header-anchor" href="#国际化" aria-hidden="true">#</a> 国际化</h3><p>建议采用 vue-i18n</p><h3 id="vite指南" tabindex="-1"><a class="header-anchor" href="#vite指南" aria-hidden="true">#</a> vite指南</h3>',22),F={href:"https://vitejs.cn/",target:"_blank",rel:"noopener noreferrer"},W=(0,e.Uk)("vite中文文档"),j=(0,e.uE)('<h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><h3 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h3><h4 id="打包内存溢出" tabindex="-1"><a class="header-anchor" href="#打包内存溢出" aria-hidden="true">#</a> 打包内存溢出</h4><p>方案1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token comment"># 在git bash 命令行执行  </span>\n <span class="token builtin class-name">export</span> <span class="token assign-left variable">NODE_OPTIONS</span><span class="token operator">=</span>--max_old_space_size<span class="token operator">=</span><span class="token number">4096</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>方案2</p><blockquote><p>vite.config.ts 分包打包</p></blockquote><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>  build<span class="token operator">:</span><span class="token punctuation">{</span>\n    brotliSize<span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>\n    chunkSizeWarningLimit<span class="token operator">:</span><span class="token number">2000</span><span class="token punctuation">,</span>\n    rollupOptions<span class="token operator">:</span><span class="token punctuation">{</span>\n      output<span class="token operator">:</span><span class="token punctuation">{</span>\n        manualChunks(id)<span class="token punctuation">{</span> <span class="token comment">// 分包</span>\n          if(id.includes(&#39;node_modules&#39;))<span class="token punctuation">{</span>\n            return id.toString().split(&#39;node_modules/&#39;)<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>.split(&#39;/&#39;)<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>.toString();\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>',8),A={},C=(0,a(3744).Z)(A,[["render",function(n,s){const a=(0,e.up)("ProjectREADME"),A=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,(0,e.Wm)(a),t,(0,e._)("blockquote",null,[l,c,(0,e._)("ul",null,[(0,e._)("li",null,[o,(0,e._)("a",r,[u,(0,e.Wm)(A)])]),(0,e._)("li",null,[i,(0,e._)("a",b,[k,(0,e.Wm)(A)])]),(0,e._)("li",null,[m,(0,e._)("a",d,[g,(0,e.Wm)(A)])])])]),h,(0,e._)("p",null,[v,(0,e._)("a",f,[y,(0,e.Wm)(A)]),x]),q,(0,e._)("p",null,[_,(0,e._)("a",w,[U,(0,e.Wm)(A)]),R]),E,(0,e._)("p",null,[(0,e._)("a",F,[W,(0,e.Wm)(A)])]),j],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);