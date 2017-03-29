
const HOST = 'https://smart-dominance.com';

async function get(path) {
    
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
    .done();
}

exports.get = get;
exports.postJson = postJson;