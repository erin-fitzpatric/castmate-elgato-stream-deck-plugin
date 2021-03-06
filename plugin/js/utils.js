// Log to the global log file
function log(inMessage) {
  // Log to the developer console
  var time = new Date();
  var timeString = time.toLocaleDateString() + " " + time.toLocaleTimeString();
  console.log(timeString + ": " + inMessage);
  
  try {
    // Log to the Stream Deck log file
    if (websocket) {
        var json = {
            "event": "logMessage",
            "payload": {
                "message": inMessage
            }
        };
        websocket.send(JSON.stringify(json));
    }
  }
  catch (e) {
      console.log("Websocket not defined");
    }
}