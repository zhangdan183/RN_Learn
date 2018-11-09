/**
 * 统一的提示框， 需要传递提示信息传递之后返回点击的按钮情况
 * */
import React from 'react';
import {Modal} from 'react-native';

export default class index007modal extends React.Component{
    state = {
        modalVisible: false
    }

    setModalVisible(visible){
        this.setState({ modalVisible: true});
    }

    render(){
        return(
            <View style={{ marginTop: 100}}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert("Modal has been closed.");
                    }}
                >
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}
                            >
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}