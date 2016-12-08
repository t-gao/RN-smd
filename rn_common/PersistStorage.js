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

export function retrieve(key) {
    try {
        const value = await AsyncStorage.getItem(key);
        return value;
    } catch (error) {
        return null;
    }
}

export async function retrieveAsync(key) {
    return AsyncStorage.getItem(key);
}