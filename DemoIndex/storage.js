import {AsyncStorage} from 'react-native';

class Storage {

    /***
     * 将一个参数保存到本地存储中
     * @param key 键
     * @param value 值
     * @param callback
     * @returns {Promise<void>}
     */
    static putStorage = async (key, value, callback) => {
        try {
            await AsyncStorage.setItem(key, value);
            callback({states: 'true', msg: ''});
        }catch (e) {
            callback({states: 'false', msg: ''});
        }
    }
    /***
     * 根据某一个键来取出本地保存的一个数值
     * @param key
     * @returns {Promise<null>}
     */
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

    /***
     * 根据一个键值来删除本地存储中的一个参数
     * @param key 需要删除的某一个key值
     * @param callback
     * @returns {Promise<void>}
     */
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
    /***
     * 清理本地所有储存记录
     * @param callback
     * @returns {Promise<void>}
     */
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

    /***
     * 将需要保存的数据批量保存到本地储存
     * @param keys [["1","1"],["2","2"]]
     * @returns {Promise<void>}
     */
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
    /**
     * 获取数据
     * @param ['key1', 'key2', ...]
     * @returns {Promise} [["1","1"],["2","2"]]
     */
    static getAllStorage = async (keys) => {
        try {
            let values = await AsyncStorage.multiGet(keys);
            if(values !== null){
                return values;
            }else{
                return null;
            }
        } catch (e) {
            return null;
        }
    }

    /***
     * 批量移除若干个键所对应的值
     * @param keys ["k1", "k2"]
     * @returns {Promise<void>}
     */
    static rmAllStorage = async (keys, callback) => {
        try {
            await AsyncStorage.multiRemove(keys, (errs) => {
                if (!errs){
                    callback({state: 'true', msg: ''});
                } else {
                    callback({states: 'false', msg: errs});
                }
            });
        } catch (e) {
            callback({state: 'true', msg: ''});
        }
    }

    /***
     * 暂时没有用，不打算总结这个先
     * @param keysone
     * @param keystwo
     * @param callback
     * @returns {Promise<void>}
     */
    static mergeAllStorage = async (keysone, keystwo, callback) => {

    }

}

export default Storage;