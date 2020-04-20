function decode(source) {
    const decodeData = {};

    for(let item in source) {
        decodeData[item] = Buffer.from(source[item], 'base64').toString('utf-8');
    }

    return decodeData;
}

module.exports = decode;
