const example = [
  {
    id: '1',
    label: 'All Mail',
  },
  {
    id: '2',
    label: 'Trash',
  },
  {
    id: '3',
    label: 'Categories',
    children: [
      {
        id: '5',
        label: 'Social',
        labelInfo: '90',
        color: '#1a73e8',
        bgColor: '#e8f0fe'
      },
      {
        id: '6',
        label: 'Updates',
        labelInfo: '2,294',
        color: '#e3742f',
        bgColor: '#fcefe3'
      },
      {
        id: '7',
        label: 'Forums',
        labelInfo: '3,566',
        color: '#a250f5',
        bgColor: '#f3e8fd'
      },
      {
        id: '8',
        label: 'Promotions',
        labelInfo: '733',
        color: '#3c8039',
        bgColor: '#e6f4ea'
      }
    ]
  },
  {
    id: '4',
    label: 'History'
  }
]

const data = [
  {
    id: 'author',
    label: '作者',
    children: [
      {
        id: 'author_LaoZi',
        label: '老子',
      },
      {
        id: 'author_KongZi',
        label: '孔子',
      },
      {
        id: 'author_LiSi',
        label: '李斯'
      },
      {
        id: 'author_JiaYi',
        label: '贾谊'
      },
      {
        id: 'author_CaiYong',
        label: '蔡邕'
      },
      {
        id: 'author_CaoCao',
        label: '曹操'
      },
      {
        id: 'author_ZhiGeLiang',
        label: '诸葛亮'
      },
    ]
  },
  {
    id: 'period',
    label: '朝代',
    children: [
      {
        id: 'period_chunqiu',
        label: '春秋战国'
      },
      {
        id: 'period_2',
        label: '秦'
      },
      {
        id: 'period_3',
        label: '汉',
        children: [
          {
            id: 'period_31',
            label: '西汉'
          },
          {
            id: 'period_32',
            label: '东汉'
          },
          {
            id: 'period_33',
            label: '三国'
          },
        ]
      },
    ]
  },
  {
    id: 'genre',
    label: '体裁',
    children: [
      {
        id: 'genre_1',
        label: '诗歌',
        children: [
          {
            id: 'genre_11',
            label: '律诗'
          },
          {
            id: 'genre_12',
            label: '绝句'
          },
          {
            id: 'genre_13',
            label: '乐府'
          },
        ]
      },
      {
        id: 'genre_2',
        label: '词',
        children: [
          {
            id: 'genre_21',
            label: '菩萨蛮'
          },
          {
            id: 'genre_22',
            label: '清平乐'
          },      {
            id: 'genre_23',
            label: '浣溪沙'
          },
        ]
      },
      {
        id: 'genre_3',
        label: '曲'
      },
      {
        id: 'genre_4',
        label: '散文'
      },
      {
        id: 'genre_5',
        label: '赋'
      }
    ]
  },
]

module.exports = {
  example,
  data
}