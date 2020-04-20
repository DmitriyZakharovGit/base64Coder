module.exports = function(source) {
    const data = JSON.parse(source);
    const dataBase64 = {};

    for(let item in data) {
        dataBase64[item] = Buffer.from(JSON.stringify(data[item]).toString('base64'));
    }

    return `export default ${ JSON.stringify(dataBase64) }`;
};
