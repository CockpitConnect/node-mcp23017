const MCP23017 = require('../lib/mcp23017')

const mcp = new MCP23017({
    address: 0x20, //all address pins pulled low
    device: 1, // Model B
    debug: true
})

mcp.pinMode(5, mcp.INPUT);
mcp.pinMode(6, mcp.INPUT);
mcp.pinMode(7, mcp.INPUT);

setInterval(function() {
    mcp.digitalRead(5, (error, value) => console.log("pin 5", error, value));
    mcp.digitalRead(6, (error, value) => console.log("pin 6", error, value));
    mcp.digitalRead(7, (error, value) => console.log("pin 7", error, value));
}, 1000);
