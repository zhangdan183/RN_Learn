import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { createBottomTabNavigator} from 'react-navigation';

export default class index001 extends Component{

    constructor(props){
        super(props);
        // const name = props.getParam('title', "不知道的页面");
        alert(props.navigation.state.params.title);
    }

    render(){
        return(
            createBottomTabNavigator({
                Home: { screen: oneitem},
                Settings: { screen: twoitem}
            })
        );
    }
}

class oneitem extends React.Component{
    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
            </View>
        );
    }
}

class twoitem extends React.Component{
    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>other!</Text>
            </View>
        );
    }
}

