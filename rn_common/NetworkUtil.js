
const HOST = 'http://139.219.234.63:3000';

async function get(path) {
    
}

async function postJson(path, params, callback) {
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
        callback(JSON.parse(responseText));
    })
    .done();
}

exports.get = get;
exports.postJson = postJson;