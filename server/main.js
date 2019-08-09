const config = require("./config.json");
const server = require("./server");

config.PORT = process.env.PORT || config.PORT;

server.run(config);
