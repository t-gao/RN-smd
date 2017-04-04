const API_PATH_LOGIN = '/api/v1/login';
const API_CUR_USER = '/api/v1/users/me';


var network = require("./NetworkUtil");
var SessionManager = require("./SessionManager");

async function login(un, pw, callback) {
    var params = {
        username: un,
        password: pw,
    };

    network.postJson(API_PATH_LOGIN, params, (resp) => {
        var token = resp['token'];
        if (token === undefined || token === null) {
            var msg = '';
            var msgObj = resp['message'];
            if (msgObj !== undefined && msgObj !== null) {
                msg = msgObj['zh_cn'];//TODO: local management
            }
            if (callback !== undefined) {
                callback(false, msg);
            }
        } else {
            SessionManager.setSessionWithCallback(token, (result) => {
                if (result) {
                    callback(true);
                } else {
                    callback(false, '');
                }
            });
        }
        
    } );
}

async function getCurrentUserInfo(token, callback) {
    network.get(API_CUR_USER, token, callback);
}

exports.login = login;
exports.getCurrentUserInfo = getCurrentUserInfo;