# Azure Functions - Budapest JS

Two demos I have shown as examples of Azure Functions written with JavaScript.

## Prerequisites

To run these samples successfuly, you need to have [Azure Functions core tools](https://www.npmjs.com/package/azure-functions-core-tools) installed.

Both samples were created for the **v1** of Functions runtime, which means that they were tested on **Windows only**. It's not guaranteed that they will run with the v2 runtime.

[Visual Studio Code](https:/code.visualstudio.com) is a good choice for an editor.

## Run

To run each of the samples:

* navigate to their respective folder, 
* rename the `local.settings.json.sample` file to `local.settings.json`,
* replace `AzureWebJobsStorage` value with your connection string,
* `npm install`,
* `func host run`.

### blob-downloader

When a new text file is uploaded to Azure Blob Storage, it gets parsed (each line should be a JavaScript object with `name` and `url`) and produces queue messages.

Second function then reads those messages and downloads each of the files to Blob Storage.

> Don't forget to set a proper connection string for your storage in the `local.settings.json` file.

### meetup-events

This Function runs periodically, every 30th second of a minute, and downloads upcoming Meetup.com meetups around Budapest.

> Don't forget to set a proper connection string for your storage in the `local.settings.json` file.

## Links

* [slides from my similar presentation on Azure Functions](https://codez.deedx.cz/talks/wug-days-2018/)
* [Azure Functions site](https://azure.microsoft.com/services/functions/)
* [Azure Functions Node.js worker on GitHub](https://github.com/Azure/azure-functions-nodejs-worker)