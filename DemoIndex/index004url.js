import React from 'react';
import {Text, Button, View} from 'react-native';
export default class index004rul extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Text>网络请求</Text>
                <Button title='点我进行求情' onPress={posturl}/>
            </View>

        );
    }

}
const posturl = () =>{
    console.log('成功');
    // loginuser('http://dev.api.ba.ikunchi.cn/token', {'username': 'BA1', 'password': '888888', 'grant_type': 'password'}).then(
    //     data => console.log(data)
    // ).catch(error => console.error(error));
    let jsonboy = {username: 'BA1', password: '888888', grant_type: 'password'};
    console.log(JSON.stringify(jsonboy));
    fetch('http://dev.api.ba.ikunchi.cn/token', {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: 'username=BA1&password=888888&grant_type=password'
    }).then(ret => ret.json())
        .then(response => console.log('成功了吗', JSON.stringify(response)))
        .catch(error => console.log('报错了', JSON.stringify(error)))
        .done(chengong => console.log(JSON.stringify(chengong)));


}


const loginuser = (url, data) =>{
    // Default options are marked with *
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: data, // body data type must match "Content-Type" header
    })
        .then(response => response.json()); // parses response to JSON
}