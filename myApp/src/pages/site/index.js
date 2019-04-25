import Taro, { Component } from '@tarojs/taro'
import { View, Text, Map, Textarea, Button, CoverView, CoverImage  } from '@tarojs/components'
import './index.css'
import location from '../../images/location.svg'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '添加面试地址'
  }

  componentWillMount() { 
    
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  constructor(props) {
    super(props)
    this.state = {
      address:'',
      name:'北京'
    }
  }

  render() {
    return (
      <View className='wrap'>
        <View className='box'>
          <View className="oinput">
            <View className="oh3">北京</View>
            <Input className="oinp" placeholder="请输入面试地址" onInput={this.address.bind(this)}/>
          </View>
          <View className="list">
            {
              this.state.arr.map((item,index)=>{
                return <View className="oli" key={index} onClick={this.selectAddress.bind(this,item.address)}>
                          <View className="oimage">
                            <CoverView class='play' onClick='play'>
                              <CoverImage class='location' src={location} />
                            </CoverView>
                          </View>
                          <View className="op">
                            <View className="ospan">{item.title}</View>
                            <View className="ospan">{item.address}</View>
                          </View>
                        </View>
              })
            }
          </View>
        </View>
      </View>
    )
  }

  //获取面试地址
  address(e){
    // console.log(e.detail.value)
    this.setState({
      address:e.detail.value
    })

    Taro.request({
      url: 'https://apis.map.qq.com/ws/place/v1/suggestion/?region=' + this.state.name + '&keyword=' + this.state.address + '&key=MNHBZ-TDA64-7RLUB-XETQF-TSGX7-XFF4F',
      data: {},
      header: { 'content-type': 'application/json' },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        // console.log(result.data.data)
        this.setState({
          arr: result.data.data
        })
      },
      fail: () => { },
      complete: () => { }
    });
  }

  //选择一个地址
  selectAddress(address){
    // console.log(address)
    wx.navigateTo({
      url: '/pages/add/index?address=' + address,
    })
  }
}
