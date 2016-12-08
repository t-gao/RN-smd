/**
 * Persist storage helper.
 */
import { AsyncStorage } from 'react-native';

export function save(key, value, callback) {
    try {
        await AsyncStorage.setItem(key, value);
        if (callback !== undefined) {
            callback();
        }
    } catch (error) {
        // Error saving data
    }
}

export async function retrieve(key, callback) {
    try {
        const value = await AsyncStorage.getItem(key);
        if (callback !== undefined) {
            callback(value);
        }
    } catch (error) {
        // error
    }
}