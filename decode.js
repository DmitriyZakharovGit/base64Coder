function decode(source) {
    if (!source || Array.isArray(source) === false) {
        return source;
    }

    return source.reduce((acc, data) => {
        const decodeData = {};

        for(let item in data) {
            if (Object.prototype.hasOwnProperty.call(data, item)) {
                if (data[item].includes('[') && data[item].includes(']')) {
                    decodeData[item] = data[item].map((item) => {
                        return Buffer.from(item, 'base64').toString('utf-8');
                    });
                } else {
                    decodeData[item] = Buffer.from(data[item], 'base64').toString('utf-8');
                }
            }
        }

        acc.push(decodeData);

        return acc;
    }, []);
}

module.exports = decode;
