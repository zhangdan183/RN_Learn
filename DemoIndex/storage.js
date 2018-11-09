import {AsyncStorage} from 'react-native';

class Storage {
    static putStorage = async (key, value, callback) => {
        try {
            await AsyncStorage.setItem(key, value);
            callback({states: 'true', msg: ''});
        }catch (e) {
            callback({states: 'false', msg: ''});
        }
    }

    static getStorage = async (key) => {
        try {
            let value = await AsyncStorage.getItem(key);
            if(value !== null){
                return value;
            }else{
                return null;
            }
        }catch (e) {
            return null;
        }

    }

    static rmStorage = async (key, callback) => {
        try {
            await AsyncStorage.removeItem(key,function (errs) {
                if(!errs){
                    callback({state: 'true', msg: ''});
                }else{
                    callback({state: 'false', msg: errs});
                }
            });
        }catch (e) {
            callback({states: 'false', msg: ''});
        }
    }

    static clearStorage = async (callback) => {
        try {
            await AsyncStorage.clear(function (errs) {
                if (!errs){
                    callback({state: 'true', msg: ''});
                } else {
                    callback({states: 'false', msg: errs});
                }
            });
        }catch (e) {
            callback({states: 'false', msg: ''});
        }
    }

    /*
    * 下面是批量操作函数
    * */
    static setAllStorage = async (keys, callback) => {
        try {
            await AsyncStorage.multiSet(keys, function (errs) {
                if (!errs){
                    callback({state: 'true', msg: ''});
                } else {
                    callback({states: 'false', msg: errs});
                }
            });
        } catch (e) {
            callback({states: 'false', msg: errs});
        }
    }
}

export default Storage;