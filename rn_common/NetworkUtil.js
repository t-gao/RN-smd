
const HOST = 'https://smart-dominance.com';

async function get(path, token, callback) {
    console.log('get, path: ' + path);

    fetch(`${HOST}${path}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    })
    .then((response) => response.text())
    .then((responseText) => {
        console.log('get, response: ' + responseText);
        callback(JSON.parse(responseText));
    })
    .catch(err => {console.log('get, err: ' + err)})
    .done();
}

async function postJson(path, params, callback) {
    console.log('postJson, path: ' + path + '; params: ' + JSON.stringify(params));

    fetch(`${HOST}${path}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
    })
    .then((response) => response.text())
    .then((responseText) => {
        console.log('postJson, response: ' + responseText);
        callback(JSON.parse(responseText));
    })
    .catch(err => {console.log('postJson, err: ' + err)})
    .done();
}

exports.get = get;
exports.postJson = postJson;