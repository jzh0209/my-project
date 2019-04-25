import Taro, { Component } from '@tarojs/taro'
import { View, Text, Map, Image } from '@tarojs/components'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '个人中心'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props){
    super(props)
  }

  render () {
    return (
      <View className='wrap'>
        <View className='nav'>
          <Image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1220476279,33108505&fm=27&gp=0.jpg" />
        </View>
        <View className='list'>
          <View className='oli' onClick={this.myInter.bind(this)}>我的面试</View>
          <View className='oli'>客服中心</View>
        </View>
      </View>
    )
  }

  //点击跳转我的面试
  myInter(){
    wx.navigateTo({
      url: '/pages/listbox/index',
    })
  }
}
