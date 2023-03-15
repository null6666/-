Page({
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "上衣",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '常服',
            price: 200,
            image: "/scr/img/常服/常服.jpg"
          },
          {
            child_id: 2,
            name: '冬大衣',
            price: 200,
            image: "/scr/img/冬大衣/冬大衣.jpg"
          },
          {
            child_id: 3,
            name: '内衬',
            price: 100,
            image: "/scr/img/内衬/内衬.jpg"
          },
          {
            child_id: 4,
            name: '长衬',
            price: 100,
            image: "/scr/img/长衬/长衬.jpg"
          },
          {
            child_id: 5,
            name: 'v领毛衣',
            price: 100,
            image: "/scr/img/v领毛衣/v领毛衣.jpg"
          },
          {
            child_id: 6,
            name: 'v领长袖毛衣',
            price: 100,
            image: "/scr/img/v领长袖毛衣/v领长袖毛衣.jpg"
          },
          {
            child_id: 7,
            name: '短袖',
            price: 50,
            image: "/scr/img/短袖/短袖.jpg"
          }
        ]
      },
      {
        cate_id: 2,
        cate_name: "裤子",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '常服裤子',
            price: 100,
            image: "/scr/img/常服裤子/常服裤子.jpg"
          },
          {
            child_id: 2,
            name: '执勤裤子',
            price: 100,
            image: "/scr/img/执勤裤子/执勤裤子.jpg"
          },
          {
            child_id: 3,
            name: '警用冬裤',
            price: 100,
            image: "/scr/img/警用冬裤/警用冬裤.jpg"
          }
        ]
      },
      {
        cate_id: 3,
        cate_name: "鞋子",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '警用皮鞋',
            price: 100,
            image: "/scr/img/警用皮鞋/警用皮鞋.jpg"
          },
          {
            child_id: 2,
            name: '作训鞋',
            price: 100,
            image: "/scr/img/作训鞋/作训鞋.jpg"
          }
        ]
      },
      {
        cate_id: 4,
        cate_name: "其他",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '公大书包',
            price: 100,
            image: "/scr/img/公大书包/公大书包.jpg"
          },
          {
            child_id: 2,
            name: '警帽',
            price: 50,
            image: "/scr/img/警帽/警帽.jpg"
          },
          {
            child_id: 3,
            name: '手电筒',
            price: 50,
            image: "/scr/img/手电筒/手电筒.jpg"
          },
          {
            child_id: 4,
            name: '腰带',
            price: 50,
            image: "/scr/img/腰带/腰带.jpg"
          }
        ]
      }
    ],
    curNav: 1,
    curIndex: 0
  }, 
  switchLeftTab(e) { 
    let id = e.target.dataset.id
    let index = parseInt(e.target.dataset.index)
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})  