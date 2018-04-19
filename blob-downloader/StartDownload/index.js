module.exports = function (context, sourceFile) {
    // parse the sourcefile
    const lines = sourceFile.split('\n');

    // each line is an URL for download to storage
    context.bindings.outQueue = [];
    lines.forEach(line => {
        context.log(line);
        context.bindings.outQueue.push(line);
    });

    context.done();
};