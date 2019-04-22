import Taro, { Component } from '@tarojs/taro'
import { View, Text, Map, Textarea, Button } from '@tarojs/components'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '添加面试'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  constructor(props) {
    super(props)
    super(...arguments)
    const date = new Date()
    const years = []
    const months = []
    const days = []
    for (let i = 1990; i <= date.getFullYear(); i++) {
      years.push(i)
    }
    for (let i = 1; i <= 12; i++) {
      months.push(i)
    }
    for (let i = 1; i <= 31; i++) {
      days.push(i)
    }
    this.state = {
      years: years,
      year: date.getFullYear(),
      months: months,
      month: 2,
      days: days,
      day: 2,
      value: [9999, 1, 1],
      hidden:true
    }
  }

  render() {
    return (
      <View className='wrap'>
        <View className='box'>
          <View className="op">面试信息</View>
          <View className="list">
            <View className="oli">
              <View className="oh3">公司名称</View>
              <Input className="oinput" placeholder="请输入公司名称"/>
            </View>
            <View className="oli">
              <View className="oh3">公司电话</View>
              <Input className="oinput" placeholder="请输入面试联系人电话" />
            </View>
            <View className="oli" onClick={()=>{
              this.setState({
                hidden:!this.state.hidden
              })
            }}>
              <View className="oh3">面试时间</View>
              <View className="oinput">{this.state.year}年{this.state.month}月{this.state.day}日</View>
            </View>
            <View className="oli">
              <View className="oh3">面试地址</View>
              <Input className="oinput" placeholder="请选择面试地址" onClick={this.site.bind(this)} />
            </View>
          </View>
          <View className="op">备注信息</View>
          <View className="content">
            <Textarea className="textarea" placeholder="备注信息(可选,100个以内)"></Textarea>
          </View>
          <Button className="order" onClick={this.order.bind(this)}>确认</Button>
        </View>
        <View className="time" hidden={this.state.hidden}>
          <PickerView indicatorStyle='height: 50px;' style='width: 100%; height: 300px;' value={this.state.value} onChange={this.onChange}>
            <PickerViewColumn>
              {this.state.years.map(item => {
                return (
                  <View>{item}年</View>
                );
              })}
            </PickerViewColumn>
            <PickerViewColumn>
              {this.state.months.map(item => {
                return (
                  <View>{item}月</View>
                )
              })}
            </PickerViewColumn>
            <PickerViewColumn>
              {this.state.days.map(item => {
                return (
                  <View>{item}日</View>
                )
              })}
            </PickerViewColumn>
          </PickerView>
        </View>
      </View>
    )
  }

  //点击日期
  onChange = (e) => {
    const val = e.detail.value
    this.setState({
      year: this.state.years[val[0]],
      month: this.state.months[val[1]],
      day: this.state.days[val[2]],
      value: val
    })
  }
  
  //点击跳转添加面试地址
  site(){
    wx.navigateTo({
      url: '/pages/site/index',
    })
  }

  //点击跳转面试列表 并 分状态进行
  order(){
    wx.navigateTo({
      url: '/pages/listbox/index',
    })
  }
}
