/**
 * 书写完全硬更新，包括检测是否有更新，检测之后提示更新，强制更新，手动更新
 * 接口需要设置返回参数为 返回版本号：个位数即可，更新信息：文字信息， 对应的版本信息：用于记录当前APP的详细版本(可有可无)
 * 安卓更新地址： ，苹果更新地址: .
 *
 * 更新完成之后上报一下应用版本号到应用数据库
 *
 * 应用重新打开以及从后台进到前台是否都要监听一下是否还需要版本更新
 * */

import React from 'react';
import {Alert, Platform, Linking} from 'react-native';

const androidurl = 'android';
const iosurl = 'ios';

class updateapp {
    static GetVersion(version, callback){
        callback(version);
    }

    static show_update(version, msg){
        console.log(version);
        Alert.alert('更新提示', msg, [
            {
                text: '知道了',
                onPress: () => {
                    console.log('点击了知道了');
                },
                style: 'cancel'
            },
            {
                text: '更新',
                onPress: () => {
                    console.log('开始更新');
                    this.updateAPP();
                }
            }
        ]);
    }

    static must_update(version){

    }
    static updateAPP() {
        let updateUrl = Platform.OS === 'ios' ? iosurl : androidurl;
        Linking.openURL('http://www.baidu.com').catch(err => console.log(err));
        console.log(updateUrl);
    }
}

export default updateapp;

