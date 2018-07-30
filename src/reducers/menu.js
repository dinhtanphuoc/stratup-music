const initialState = {
  menu: [
    {
      key: '1',
      icon: 'pie-chart',
      name: 'Tổng quan',
      path: '/tong-quan',
      subMenu: []
    },
    {
      key: '2',
      icon: 'pie-chart',
      name: 'Tổng quan',
      path: '/tong-quan',
      subMenu: []
    },
    {
      key: '3',
      icon: 'pie-chart',
      name: 'Tổng quan',
      path: '/tong-quan',
      subMenu: []
    },
    {
      key: '4',
      icon: 'pie-chart',
      name: 'Tổng quan',
      path: '/tong-quan',
      subMenu: [
        {
          key: '6',
          icon: 'pie-chart',
          name: 'Tổng quan',
          path: '/tong-quan',
          subMenu: []
        },
        {
          key: '7',
          icon: 'pie-chart',
          name: 'Tổng quan',
          path: '/tong-quan',
          subMenu: []
        },
      ]
    },
    {
      key: '5',
      icon: 'pie-chart',
      name: 'Tổng quan',
      path: '/tong-quan',
      subMenu: [
        {
          key: '9',
          icon: 'pie-chart',
          name: 'Tổng quan',
          path: '/tong-quan',
          subMenu: []
        },
        {
          key: '10',
          icon: 'pie-chart',
          name: 'Tổng quan',
          path: '/tong-quan',
          subMenu: []
        },
        {
          key: '11',
          icon: 'pie-chart',
          name: 'Tổng quan',
          path: '/tong-quan',
          subMenu: []
        },
        {
          key: '12',
          icon: 'pie-chart',
          name: 'Tổng quan',
          path: '/tong-quan',
          subMenu: []
        },
        {
          key: '13',
          icon: 'pie-chart',
          name: 'Tổng quan',
          path: '/tong-quan',
          subMenu: []
        },
        {
          key: '14',
          icon: 'pie-chart',
          name: 'Tổng quan',
          path: '/tong-quan',
          subMenu: []
        },
      ]
    }
  ]
}

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}