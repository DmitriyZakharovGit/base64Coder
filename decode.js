function decode(source) {
    if (!source || Array.isArray(source) === false) {
        return source;
    }

    return source.reduce((acc, data) => {
        const decodeData = {};

        for(let item in source) {
            decodeData[item] = Buffer.from(source[item], 'base64').toString('utf-8');
        }

        acc.push(decodeData);

        return acc;
    });
}

module.exports = decode;
