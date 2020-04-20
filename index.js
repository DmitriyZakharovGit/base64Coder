function encode(source) {
    eval(source);

    if (!base64data || Array.isArray(base64data) === false) {
        return `export default ${ JSON.stringify(source) }`;
    }

    const base64Array = base64data.reduce((acc, data) => {
        const dataBase64 = {};

        for(let item in data) {
            dataBase64[item] = Buffer.from(JSON.stringify(data[item]).toString('base64'));
        }

        acc.push(dataBase64);

        return acc;
    }, []);


    return `export default ${ JSON.stringify(base64Array) }`;
}

module.exports = encode;
