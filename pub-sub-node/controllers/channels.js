function ChannelsController (bayeux){
	this.bayeux = bayeux;
	var self = this;
	
	bayeux.on('subscribe', function(clientId, channel) {
		//handle on subscribe
		console.log("clientId :: " + clientId + " subscribe on " + channel);
	});
	bayeux.on('unsubscribe', function(clientId, channel) {
		//handle on unsubscribe
		console.log("clientId :: " + clientId + " unsubscribe from " + channel);
	});
	bayeux.on('publish', function(clientId, channel, data) {
		//handle on publish
		self.publish(channel, data);
	});
	
	/*
	extension is important for auth 
	bayeux.addExtension({
	  	incoming: function(message, request, callback) {
			callback(message)
	  	},
  		outgoing: function(message, callback) {
	    	callback(message);
 		}
	});*/
};

ChannelsController.prototype = {
	publish: function(channel, data){
		console.log("DATA :: " + data);		
	},
};


if (typeof module !== "undefined" && module.exports) {
    module.exports = ChannelsController;
};