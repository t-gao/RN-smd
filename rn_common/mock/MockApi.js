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

exports.login = login;