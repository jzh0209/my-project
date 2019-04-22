import Taro, { Component } from '@tarojs/taro'
import { View, Text, Map, Image, CoverView, CoverImage } from '@tarojs/components'
import './index.css';
import my from '../../images/my.png'
import location from '../../images/location.png'
import mine from '../../images/add.png'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props){
    super(props)
    this.state = {
      markers: [{
        iconPath: 'mine',
        id: 0,
        latitude: 116.300278,
        longitude: 40.040848,
        width: 50,
        height: 50
      }]
    }
  }

  render () {
    return (
      <View className='wrap'>
        <Map
          id="map"
          latitude="40.0403270000"
          scale="14"
          markers="markers"
          show-location
          style="width: 100%; height: 100%;"
          ></Map>
        <View className="add" onClick={this.add.bind(this)}>添加面试</View>
        <View className="personal" onClick={this.personal.bind(this)}>
          <CoverView class='play' onClick='play'>
            <CoverImage class='my' src={my} />
          </CoverView>
        </View>
        <View className="plat" onClick={this.plat.bind(this)}>
          <CoverView class='location' onClick='plat'>
            <CoverImage class='location' src={location} />
          </CoverView>
        </View>
        <View className="mine" onClick={this.mine.bind(this)}>
          <CoverView class='my' onClick='plat'>
            <CoverImage class='mine' src={mine} />
          </CoverView>
        </View>
      </View>
    )
  }
  
  //点击跳转添加面试页面
  add(){
    wx.navigateTo({
      url: '/pages/add/index',
    })
  }

  //点击跳转到个人中心页面
  personal(){
    wx.navigateTo({
      url: '/pages/personal/index',
    })
  }

  //点击回到原来位置
  plat(){
    let mpCtx = wx.createMapContext("map");
    mpCtx.moveToLocation();
  }

  // onLoad () {
  //   console.log('地图定位！')
  //   var that = this
  //   wx.getLocation({
  //     type: 'gcj02', //返回可以用于wx.openLocation的经纬度
  //     success: function (res) {
  //       var latitude = res.latitude;
  //       var longitude = res.longitude;
  //       wx.openLocation({
  //         latitude: latitude,
  //         longitude: longitude,
  //         scale: 1
  //       })
  //     }
  //   });
  // }

}
