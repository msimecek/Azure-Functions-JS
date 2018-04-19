//@ts-check
const httpReq = require('request-promise');

module.exports = function (context, myTimer) {
    context.log("Function triggered.");
    var timestamp = new Date().getTime() / 1000;

    context.bindings.outputTable = [];
    
    httpReq.get(`https://api.meetup.com/find/upcoming_events?key=${process.env.MeetupApiKey}&lat=47.4811921&lon=19.0602641`)
        .then((resp) => {
            const res = JSON.parse(resp);
            const events = res.events;
            events.forEach(event => {
                const tableRow = {
                    PartitionKey: event.id,
                    RowKey: timestamp,
                    Updated: event.updated,
                    Name: event.name,
                    Status: event.status,
                    DateTime: `${event.local_date} ${event.local_time}`,
                    Link: event.link
                };

                context.log(JSON.stringify(tableRow));             
                context.bindings.outputTable.push(tableRow);
            });

            context.done();
        })
        .catch((error) => {
            context.log("Caught an error: " + JSON.stringify(error));
            context.done();
        });
};