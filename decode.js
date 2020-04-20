function decode(source) {
    if (!source || Array.isArray(source) === false) {
        return source;
    }

    const decodeSource = source.reduce((acc, data) => {
        const decodeData = {};

        for (let item in data) {
            if (Object.prototype.hasOwnProperty.call(data, item)) {
                decodeData[item] = Buffer.from(data[item], 'base64').toString('utf-8');
            }
        }

        acc.push(decodeData);

        return acc;
    }, []);

    return decodeSource.map((data) => {
        const obj = {};

        for(item in data) {
            if (typeof data[item] === 'string' && data[item].includes('[') && data[item].includes(']')) {
                obj[item] = JSON.parse(data[item]);
            } else {
                obj[item] = data[item];
            }
        }

        return obj;
    });
}

module.exports = decode;
