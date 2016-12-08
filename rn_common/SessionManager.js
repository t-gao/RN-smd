
import { cache } from './PersistStorage'

export function isLoggedIn() {
    var session = cache.retrieve('SESSION');
    if (session) {
        return true;
    } else {
        return false;
    }
}