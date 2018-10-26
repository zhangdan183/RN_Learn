/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import { createStackNavigator} from 'react-navigation';
import index001 from './DemoIndex/index001';
import index003 from './DemoIndex/index003';
import index004_url from './DemoIndex/index004url';
import index005 from './DemoIndex/index005';
import createBottomTabNavigator from './DemoIndex/index002';

//在主页面的构造函数中引用路由器
export default class App extends Component {
    render() {
        return (
            <RootStack/>
        );
    }
}

//定义主页的页面内容 以及点击跳转的内容
class homescreen extends React.Component{
    render(){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details',{
                        title: "详情页面图标",
                        callback: (data)=>{
                            console.log(data);
                        }
                    })}
                />
            </View>
        );
    }
}

//定义即将跳转到的页面的布局页面内容
class otherscreen extends React.Component{
    // static navigationOptions = {
    //     title: "详情信息"
    // };

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', 'A Nested Details Screen'),//获取传递过来的参数然后赋值给名字，如果没有获取到则使用后面的默认的名称
        };
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
            </View>
        );
    }
}
//页面的路由器 用来跳转页面 但是不知道页面内跳转还是跳转到另外一个页面
const RootStack = createStackNavigator(
    {
        Home: homescreen,
        Details: index005,
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle:{
                backgroundColor: "#FFC001"
            }
        }
    }
);




