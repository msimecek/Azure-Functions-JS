//@ts-check
const httpClient = require('request-promise');

module.exports = function (context, file) {
    context.log("Downloading " + file.url);

    httpClient.get(file.url, {encoding: null}).then((response) => {
        context.bindings.outputBlob = response;
        context.done();
    });
};