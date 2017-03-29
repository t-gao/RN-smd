var SessionManager = require("../SessionManager");


async function login(un, pw, callback) {
    console.log("mock login called");
    let token = "fake-token";
      SessionManager.setSessionWithCallback(token, (result) => {
                console.log("mock login setSessionWithCallback callback, result: " + result);
                if (result) {
                    console.log("mock login callback true");
                    callback(true);
                } else {
                    console.log("mock login callback false");
                    callback(false, '');
                }
            });
}

async function refreshLoginPin(callback) {
    setTimeout(() => {
            let ts = new Date().getTime();
            let pin = Math.floor(ts / 1000).toString();
            callback(pin);
        }, 3000)
}

exports.login = login;
exports.refreshLoginPin = refreshLoginPin;