/**
 * 研究如何封装函数方法，让所有的地方都可以调用，且有回调方法
 * */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {mealert} from './script/tools01';
import DeviceStorage from './script/storage';


export default class index005 extends React.Component {
    constructor(props) {
        super(props);
        mealert(callback = (ret) => {
            console.log(ret);
        });
    }

    render() {
        return (
            <View>
                <Text style={styles.cunchustyle} onPress={cunchu}>存储</Text>
                <Text style={styles.tiqustyle} onPress={tiqu}>提取</Text>
            </View>
        );
    }

}

const cunchu = () => {
    // alert("存储");
    DeviceStorage.save("zhang", "dan")
    console.log('易储存');
}

const tiqu = () =>{
    // alert("提取");
    let map = DeviceStorage.get("zhang");
    console.log(JSON.stringify(map));
}

const styles = StyleSheet.create({
    cunchustyle:{
        width: '100%',
        height: 30,
        lineHeight: 30,
        fontSize: 20,
        marginBottom: 30,
        backgroundColor: '#ff0000'
    },
    tiqustyle:{
        width: '100%',
        height: 30,
        lineHeight: 30,
        fontSize: 20,
        backgroundColor: '#ffff00'
    }
});

