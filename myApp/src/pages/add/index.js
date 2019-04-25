import Taro, { Component } from '@tarojs/taro'
import { View, Text, Map, Textarea, Button } from '@tarojs/components'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '添加面试'
  }

  componentWillMount() { 
    // console.log(this.$router.params.address)
    this.setState({
      address:this.$router.params.address
    })
  }

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
      value:['9999','1','1'],
      hidden:true,
      company:'',
      phone:0,
      description:'',
      arr:[],
      address:'',
      time:''
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
              <Input className="oinput" placeholder="请输入公司名称" onInput={this.company.bind(this)}/>
            </View>
            <View className="oli">
              <View className="oh3">公司电话</View>
              <Input className="oinput" placeholder="请输入面试联系人电话" onChange={this.phone.bind(this)}/>
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
              <Input className="oinput" placeholder="请选择面试地址" onClick={this.site.bind(this)} value={this.state.address} />
            </View>
          </View>
          <View className="op">备注信息</View>
          <View className="content">
            <Textarea className="textarea" placeholder="备注信息(可选,100个以内)" onInput={this.description.bind(this)}></Textarea>
          </View>
          <Button className="order" onClick={this.order.bind(this)}>确认</Button>
        </View>
        <View className="time" hidden={this.state.hidden}>
          <PickerView indicatorStyle='height: 50px;' style='width: 100%; height: 300px;' value={this.state.value} onChange={this.onChange.bind(this)}>
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
    // console.log(val)
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

  //获取公司名字
  company(e){
    // console.log(e.detail.value)
    this.setState({
      company:e.detail.value
    })
  }
  
  //获取公司电话
  phone(e){
    // console.log(e.detail.value.length)
    this.setState({
      phone:e.detail.value
    })
    if(this.state.phone.length > 11 || this.state.phone.length < 11){
      wx.showToast({
        title: '号码长度不符',
        success:'success',
        duration:2000
      })
    }
  }

  //获取备注
  description(e){
    // console.log(e.detail.value)
    this.setState({
      description: e.detail.value
    })
    if(this.state.description.length >= 100){
      
    }
  }

  //点击跳转面试列表 并 分状态进行
  order(){
    let time = this.state.year + '年' + this.state.month + '月' + this.state.day + '日'
    this.setState({
      time:time
    })
    this.state.arr.push({company:this.state.company,phone:this.state.phone,description:this.state.description,time:time,address:this.state.address,status:this.state.status})
    this.setState({
      arr:this.state.arr
    })
    Taro.request({
      url:'http://localhost:3000/addData',
      header:{
          'content-type':'application/json'
      },
      method:"POST",
      data:{
        name:this.state.company,
        phone:this.state.phone,
        description:this.state.description,
        time:time,
        address:this.state.address,
        type:"0",
        status:'未开始'
      },
      dataType:'json',
      success:(res)=>{
        // console.log(res.data);
      }
    })
    wx.showModal({
      title: '温馨提示',
      content: '添加面试成功',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#3CC51F',
      success: (result) => {
        if (result.confirm) {
          wx.navigateTo({
            url: '/pages/listbox/index',
          })
          // wx.navigateTo({
          //   url: '/pages/listbox/index?arr=' + JSON.stringify(this.state.arr),
          // })
        }
      },
      fail: () => { },
      complete: () => { }
    });

    // wx.setStorage({
    //   key: 'arr',
    //   data: this.state.arr,
    //   success: (result)=>{

    //   },
    //   fail: ()=>{},
    //   complete: ()=>{}
    // });
  }
}
