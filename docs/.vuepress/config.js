const { path } = require('@vuepress/utils')
module.exports = {
  plugins: [
    [
      '@vuepress/register-components',
      {
        components: {
          Home: path.resolve(__dirname, './vue/home.vue'),
          ProjectREADME: path.resolve(__dirname, './vue/projectREADME.vue'),
          VueQrDiY: path.resolve(__dirname, './vue/vuediys.vue'),
          VueCropperDIY:path.resolve(__dirname, './vue/VueCropperDIY.vue'),
          Editjs:path.resolve(__dirname, './vue/Editjs.vue'),
          EchartsDemo:path.resolve(__dirname, './vue/EchartsDemo.vue'),
        },
      },
    ],
    [
      '@vuepress/plugin-search',
      {
        getExtraFields: (page) => {
          return page.frontmatter.tags ?? []
        },
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ],
    lang: 'zh-CN',
    base:"/low-code-document/",
    title: 'vue代码生成器-后台管理',
    description: '进一步降低前段工作量 变向提高收入比',
    home:true,
    themeConfig: {
      repo:"https://gitee.com/blueskyliu/low-code-document",
      logo: 'https://cn.vuejs.org/images/logo.svg',
      navbar: [
        // NavbarItem
        {
          text: '指南',
          link: '/page/project/Frontmatter'
        },
      
        {
          text: '模板文档',
          link: 'https://blueskyliu.gitee.io/admin-tempalte-document/'
        },
        {
          text: '下载',
          link: 'https://gitee.com/blueskyliu/low-code-document.git',
      },
        {
            text: 'Issues',
            link: 'https://gitee.com/blueskyliu/low-code-document/issues',
        },
      ],
      // sidebar: [
   
      // ],
    },
    
  }