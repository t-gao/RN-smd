
//import { cache } from './PersistStorage'
var cache = require("./PersistStorage");
var network = require("./NetworkUtil");

//FIXME: isLoggedIn 有问题！use getSessionAsync() instead
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

function setSessionWithCallback(session, callback) {
    cache.save('SESSION', session, callback);
}

function clearSession() {
    cache.remove('SESSION');
}

async function getSessionAsync() {
    return cache.retrieve('SESSION');
}

async function getLastPin() {
    return cache.retrieveAsync('last_pin');
}

exports.isLoggedIn = isLoggedIn;
exports.setSession = setSession;
exports.setSessionWithCallback = setSessionWithCallback;
exports.clearSession = clearSession;
exports.getSessionAsync = getSessionAsync;
exports.getLastPin = getLastPin;