const example = [
  {
    id: '1',
    label: 'All Mail',
    icon: 'MailIcon'
  },
  {
    id: '2',
    label: 'Trash',
    icon: 'DeleteIcon'
  },
  {
    id: '3',
    label: 'Categories',
    children: [
      {
        id: '5',
        label: 'Social',
        icon: 'SupervisorAccountIcon',
        labelInfo: '90',
        color: '#1a73e8',
        bgColor: '#e8f0fe'
      },
      {
        id: '6',
        label: 'Updates',
        icon: 'InfoIcon',
        labelInfo: '2,294',
        color: '#e3742f',
        bgColor: '#fcefe3'
      },
      {
        id: '7',
        label: 'Forums',
        icon: 'ForumIcon',
        labelInfo: '3,566',
        color: '#a250f5',
        bgColor: '#f3e8fd'
      },
      {
        id: '8',
        label: 'Promotions',
        icon: 'LocalOfferIcon',
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

const data1 = [
  {
    id: '1',
    label: '诗',
    children: [
      {
        id: '11',
        label: '律诗'
      },
      {
        id: '12',
        label: '绝句'
      },
      {
        id: '13',
        label: '乐府'
      }
    ]
  },
  {
    id: '2',
    label: '词',
    children: [
      {
        id: '21',
        label: '菩萨蛮'
      },
      {
        id: '22',
        label: '清平乐'
      },      {
        id: '23',
        label: '浣溪沙'
      }
    ]
  },
  {
    id: '3',
    label: '曲'
  },
  {
    id: '4',
    label: '散文'
  },
  {
    id: '5',
    label: '赋'
  }
]

module.exports = {
  example,
  data1
}