module.exports = {
    title: 'blog',
    description: 'Just playing around',
    configureWebpack: {
        resolve: {
            alias: {
                '@': 'path/to/some/dir'
            }
        }
    }
  }
  module.exports = {
    title: '零°天空Blog',
    description: 'Analysis vue.js deeply',
    head: [
    //   ['link', { rel: 'icon', href: `/logo.png` }],
    //   ['link', { rel: 'manifest', href: '/manifest.json' }],
    //   ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    //   ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    //   ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    //   ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    //   ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    //   ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    //   ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    // serviceWorker: false,
    themeConfig: {
    //   repo: 'ustbhuangyi/vue-analysis',
    //   editLinks: true,
      docsDir: 'docs',
    //   editLinkText: '在 GitHub 上编辑此页',
    //   lastUpdated: '上次更新',
      nav: [
        {
          text: 'blog',
          link: '/blog/'
        },
      ],
      sidebar: {
        '/blog/': [
          {
            title: 'HTML',
            collapsable: false,
            children: [
                'html'
            ]
          },
          {
            title: 'css',
            collapsable: false,
            children: [
                '盒模型'
            ]
          },
          {
            title: 'Javascript',
            collapsable: false,
            children: [
                ['javascript/es6', '哈哈']
            ]
          }
        ]
      }
    }
  }