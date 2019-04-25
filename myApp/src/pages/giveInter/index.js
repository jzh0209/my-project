import Taro, { Component } from '@tarojs/taro'
import { View, Text, Map, Textarea, Button } from '@tarojs/components'
import './index.css'
import { timingSafeEqual } from 'crypto';

export default class Index extends Component {

  config = {
    navigationBarTitleText: '张嫚嫚'
  }

  componentWillMount() { 
    // console.log(JSON.parse(this.$router.params.item))
    this.setState({
      arr:JSON.parse(this.$router.params.item)
    })
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  constructor(props) {
    super(props)
    this.state = {
      arr:[]
    }
  }

  render() {
    return (
      <View className='wrap'>
          {
              this.state.arr.status == '已放弃' ? <View className="list">
              <View className="oli">
                <View className="oh3">面试地址:</View>
                <View className="op">{this.state.arr.address}</View>
              </View>
              <View className="oli">
                <View className="oh3">面试时间:</View>
                <View className="op">{this.state.arr.time}</View>
              </View>
              <View className="oli">
                <View className="oh3">联系方式:</View>
                <View className="op">{this.state.arr.phone}</View>
              </View>
              <View className="oli">
                <View className="oh3">是否提醒:</View>
                <View className="op">未提醒</View>
              </View>
              <View className="oli">
                <View className="oh3">面试状态:</View>
                <View className="op">{this.state.arr.status}</View>
              </View>
            </View>:<View className='box'>
                <View className="list">
                  <View className="oli">
                    <View className="oh3">面试地址:</View>
                    <View className="op">{this.state.arr.address}</View>
                  </View>
                  <View className="oli">
                    <View className="oh3">面试时间:</View>
                    <View className="op">{this.state.arr.time}</View>
                  </View>
                  <View className="oli">
                    <View className="oh3">联系方式:</View>
                    <View className="op">{this.state.arr.phone}</View>
                  </View>
                  <View className="oli">
                    <View className="oh3">是否提醒:</View>
                    <View className="op">未提醒</View>
                  </View>
                  <View className="oli">
                    <View className="oh3">面试状态:</View>
                    <View className="op">{this.state.arr.status}</View>
                  </View>
                </View>
                <View className="give">
                  <Button size="mini" type="primary" onClick={this.insertUp.bind(this,this.state.arr._id,this.state.arr.type,this.state.arr.status)}>去打卡</Button>
                  <Button size="mini" type="warn" onClick={this.giveUp.bind(this,this.state.arr._id,this.state.arr.type,this.state.arr.status)}>放弃面试</Button>
                </View>
            </View>
          }
      </View>
    )
  }

  //点击去打卡
  insertUp(id,type,status){
    // console.log(id,type,status)
    wx.request({
      url: 'http://localhost:3000/insertData',
      data: {
        _id:id,
        type:type,
        status:status
      },
      header: {'content-type':'application/json'},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        // console.log(result)
      },
      fail: ()=>{},
      complete: ()=>{}
    });
    wx.showModal({
      title: '温馨提示',
      content: '确定要打卡',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#3CC51F',
      success: (result) => {
        if(result.confirm){
          wx.navigateTo({
            url:'/pages/listbox/index'
          })
        }
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  }

  //点击放弃面试
  giveUp(id,type,status){
    // console.log(id,type,status)
    wx.request({
      url: 'http://localhost:3000/upData',
      data: {
        _id:id,
        type:type,
        status:status
      },
      header: {'content-type':'application/json'},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        // console.log(result)
      },
      fail: ()=>{},
      complete: ()=>{}
    });
    wx.showModal({
      title: '温馨提示',
      content: '确定要放弃本次面试',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#3CC51F',
      success: (result) => {
        if(result.confirm){
          wx.navigateTo({
            url:'/pages/listbox/index'
          })
        }
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  }
}
