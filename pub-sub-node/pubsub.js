var http = require('http'),
    faye = require('faye'),
    ChannelsController = require("./controllers/channels");

var server = http.createServer(),
    bayeux = new faye.NodeAdapter({
                mount: '/faye',
                timeout: 45,
                ping: 20
            });

//controllers initializations
var channels_monitor = new ChannelsController(bayeux);

//run the server
bayeux.attach(server);
server.listen("5000");