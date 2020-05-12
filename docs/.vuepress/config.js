module.exports = {
  title: '摸鱼手册',
  description: '简单blog',
  themeConfig: {
    nav: [
      { text: 'XDUNA', link: '/xduna/' },
      { text: 'Blogs', link: '/blogs/' },
      { text: 'Tools', link: '/tools/' },
    ],
    logo: './logo.png',
    sidebar:{
      '/tools/': [{
        title:"Tools",
        collapsable: false,
        children:[
          {title:"作业统计", path:"/tools/zuoyetongji"}
        ]
      }]
    }
  }
}
