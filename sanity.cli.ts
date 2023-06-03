/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
var defineCliConfig = require('sanity/cli').defineCliConfig;

var projectId = "sy2u7u0j";
var dataset = "production";

module.exports = defineCliConfig({ api: { projectId: projectId, dataset: dataset } });
