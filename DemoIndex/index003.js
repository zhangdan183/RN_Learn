import React, { Component} from 'react';
import {AppState, Text} from 'react-native';

export default class index003 extends Component{

    state = {
        appState: AppState.currentState,//自定义函数，监听组件变化
        name: '张丹'//初始化数值，下面的页面渲染之后 可以通过 this.setState 来动态的修改里面的数值，可以模仿VUE来进行操作
    }

    //验证生命周期的作用
    constructor(props){
        super(props);
        console.log("构造函数");
    }

    componentWillMount(){
        console.log('渲染前触发');
    }

    render(){
        return(
            <Text>{ this.state.name}</Text>
        );
    }

    componentDidMount(){
        console.log('页面加载完成');
        AppState.addEventListener('change', this._handleAppStateChange);

        this.timeer = setTimeout(()=>{
            this.setState({name: '张楠'});
        }, 3000);
    }

    componentWillUnmount(){
        console.log('页面结束了');
        AppState.removeEventListener('change', this._handleAppStateChange);
        this.timeer && clearTimeout(this.timeer);

        //结束页面 回调页面函数
        const {goBack,state} = this.props.navigation;

        console.log(goBack);
        console.log(state);

        //{"state":{"params":{"title":"详情页面图标"},"routeName":"Details","key":"id-1539683147635-1"},"actions":{}}
        //console.log("看看是什么:" + JSON.stringify(this.props.navigation));
        state.params.callback('回调参数');
        goBack();

    }
    //页面是否在最前面的测试方法 随时随地的监听当前APP的状态
    _handleAppStateChange = (nextAppState) =>{

        if(this.state.appState.match(/inactive|background/) && nextAppState == 'active'){
            console.log('App has come to the foreground!');
        }
        console.log(nextAppState);
    }


}