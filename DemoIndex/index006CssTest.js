import React from 'react';
import {View} from 'react-native';
import styles from './index006CssTest.css';

export default class index006CssTest extends React.Component{
    render(){
        return(
            <View>
                <div className={styles.title}>张丹</div>
            </View>

        );
    }
}