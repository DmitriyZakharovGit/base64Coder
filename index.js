function encode(source) {
    const data = JSON.parse(source);
    const dataBase64 = {};

    for(let item in data) {
        dataBase64[item] = Buffer.from(JSON.stringify(data[item]).toString('base64'));
    }

    return `export default ${ JSON.stringify(dataBase64) }`;
}

function decode(source) {
    const decodeData = {};

    for(let item in source) {
        decodeData[item] = Buffer.from(source[item], 'base64').toString('utf-8');
    }

    return decodeData;
}

module.exports = { encode, decode };
