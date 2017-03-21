var SessionManager = require("../SessionManager");


async function login(un, pw, callback) {
    let token = "fake-token";
      SessionManager.setSessionWithCallback(token, (result) => {
                if (result) {
                    callback(true);
                } else{
                    callback(false, '');
                }
            });
}

exports.login = login;