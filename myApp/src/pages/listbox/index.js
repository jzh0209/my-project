import Taro, { Component } from '@tarojs/taro'
import { View, Text, Map, Image, CoverView, CoverImage, ScrollView } from '@tarojs/components'
import './index.css';

export default class Index extends Component {

  config = {
    navigationBarTitleText: '面试列表'
  }

  componentWillMount () { 
    // console.log(JSON.parse(this.$router.params.arr))
  }

  componentDidMount () { 
    Taro.request({
      url:'http://localhost:3000/getData',
      header:{
          'content-type':'application/json'
      },
      method:"GET",
      data:{},
      dataType:'json',
      success:(res)=>{
        // console.log(res.data.data);
        this.setState({
          arr:res.data.data
        })
        let list = res.data.data.filter((item)=>{
          if(item.type * 1 == 0){
            return item
          }
        })
        this.setState({
          newArr:list
        })
      }
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props){
    super(props)
    this.state = {
      arr:[],
      list : ['未开始','已打卡','已放弃','全部'],
      ind:0,
      newArr:[]
    }
  }

  render () {
    return (
      <View className='wrap'>
        <View className='box'>
          <View className='list'>
            {
              this.state.list.map((item,index)=>{
                return <Text key={index} className={this.state.ind == index ? 'active' : ''} onClick={this.tab.bind(this,index)}>{item}</Text>
              })
            }
          </View>
              <ScrollView scrollY="true" style="height:1100rpx;" className='content'>
                {
                  this.state.newArr && this.state.newArr.map((item,index)=>{
                    return <View className='oli' key={index} onClick={this.interDetail.bind(this,item)}>
                            <View className='oh3'>
                              <View>{item.name}</View>
                              <View>{item.status}</View>
                            </View>
                            <View className='ospan'>{item.address}</View>
                            <View className='op'>
                              <View key={index}>面试时间:{item.time}</View>
                              <View>未提醒</View>
                            </View>
                          </View>
                        })
                }
              </ScrollView>
              
          
        </View>
      </View>
    )
  }

  //跳转面试详情
  interDetail(item){
    wx.navigateTo({
      url: '/pages/giveInter/index?item=' + JSON.stringify(item),
    })
  }

  tab(index){
    // console.log(index)
    this.setState({
      ind:index
    })
    let newArr = this.state.arr.filter((item)=>{
      if(item.type * 1 == index){
        return item
      }else if(index == 3){
        return item
      }
    })
    this.setState({
      newArr:newArr
    })
  }
}
