import Taro, { Component } from '@tarojs/taro'
import { View, Text, Map, Textarea, Button, CoverView, CoverImage  } from '@tarojs/components'
import './index.css'
import location from '../../images/location.svg'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '添加面试地址'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View className='wrap'>
        <View className='box'>
          <View className="oinput">
            <View className="oh3">北京</View>
            <Input className="oinp" placeholder="请输入面试地址" />
          </View>
          <View className="list">
            <View className="oli">
              <View className="oimage">
                <CoverView class='play' onClick='play'>
                  <CoverImage class='location' src={location} />
                </CoverView>
              </View>
              <View className="op">请输入公司名称</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
