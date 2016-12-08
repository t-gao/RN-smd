
//import { cache } from './PersistStorage'
var cache = require("./PersistStorage");

async function isLoggedIn() {
    try {
        let session = await cache.retrieveAsync('SESSION');
        // var session = cache.retrieve('SESSION');
        if (session !== null && session !== undefined && session.length > 0) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        return false;
    }
}

function setSession(session) {
    cache.save('SESSION', session);
}

function clearSession() {
    cache.remove('SESSION');
}

async function getSessionAsync() {
    return cache.retrieve('SESSION');
}

exports.isLoggedIn = isLoggedIn;
exports.setSession = setSession;
exports.clearSession = clearSession;
exports.getSessionAsync = getSessionAsync;