/**
 * Persist storage helper.
 */
import { AsyncStorage } from 'react-native';

async function save(key, value, callback) {
    try {
        await AsyncStorage.setItem(key, value);
        if (callback !== undefined) {
            callback();
        }
    } catch (error) {
        // Error saving data
    }
}

async function retrieve(key) {
    try {
        let value = await AsyncStorage.getItem(key);
        return value;
    } catch (error) {
        return null;
    }
}

async function retrieveAsync(key) {
    return AsyncStorage.getItem(key);
}

exports.save = save;
exports.retrieve = retrieve;
exports.retrieveAsync = retrieveAsync;