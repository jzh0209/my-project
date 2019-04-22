import Taro, { Component } from '@tarojs/taro'
import { View, Text, Map, Image, CoverView, CoverImage } from '@tarojs/components'
import './index.css';

export default class Index extends Component {

  config = {
    navigationBarTitleText: '面试列表'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props){
    super(props)
    this.state = {
       
    }
  }

  render () {
    return (
      <View className='wrap'>
        <View className='box'>
          <View className='list'>
            <Text>未开始</Text>
            <Text>已打卡</Text>
            <Text>已放弃</Text>
            <Text>全部</Text>
          </View>
          <View className='content'>
            <View className='oli'>
              <View className='oh3'>
                <View>八维</View>
                <View>未开始</View>
              </View>
              <View className='ospan'>
                北京海淀上地七街
              </View>
              <View className='op'>
                <View>面试时间:2019-4-20</View>
                <View>未提醒</View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
