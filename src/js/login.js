import React from 'react';
import {View, Text} from 'react-native';
import appupdate from '../../DemoIndex/index006update'
import Storage from '../../DemoIndex/storage'

export default class login extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text style={{width: 100, height: 50}} onPress={huidoao}>新测试</Text>
                <Text style={{width: 100, height: 50}} onPress={baocun}>保存</Text>
                <Text style={{width: 100, height: 50}} onPress={baocun1}>保存1</Text>
                <Text style={{width: 100, height: 50}} onPress={duqu}>读取</Text>
                <Text style={{width: 100, height: 50}} onPress={duqu1}>读取1</Text>
                <Text style={{width: 100, height: 50}} onPress={shanchu}>删除</Text>
            </View>
        );
    }
}

const huidoao=()=>{
    appupdate.GetVersion("1.1.1", callback = (version)=>{
        alert(version);
    });
}

const baocun=()=>{
    console.log('点击保存');
    Storage.putStorage('zhang', 'dan', function (ret) {
        console.log('保存成功' + JSON.stringify(ret));
    })
}

const baocun1=()=>{
    console.log('点击保存');
    // Storage.putStorage('wang', 'qiang', function (ret) {
    //     console.log('保存成功' + JSON.stringify(ret));
    // })

    Storage.setAllStorage([['1', '1'], ['2', '2']], function (ret) {
        console.log('保存成功' + JSON.stringify(ret));
    });
}

const duqu=()=>{
    console.log('点击读取');
    Storage.getStorage('zhang').then(value => {
        console.log(value);
    });
}

const duqu1=()=>{
    Storage.getAllStorage(['1', '2']).then(value => {
        console.log(JSON.stringify(value));
    })
}

const shanchu=()=>{
    console.log('点击删除');
    Storage.rmStorage('zhang', (ret)=>{
        console.log('删除成功'+ JSON.stringify(ret))
    })
}