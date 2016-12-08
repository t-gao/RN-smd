
//import { cache } from './PersistStorage'
var cache = require("./PersistStorage");

function isLoggedIn() {
    var session = cache.retrieve('SESSION');
    if (session) {
        return true;
    } else {
        return false;
    }
}

function setSession(session) {
    cache.save('SESSION', session);
}

exports.isLoggedIn = isLoggedIn;
exports.setSession = setSession;