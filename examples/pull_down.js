const MCP23017 = require('node-mcp23017')

const mcp = new MCP23017({
    address: 0x20, //all address pins pulled low
    device: 1, // Model B
    debug: false
})

mcp.pinMode(6, mcp.INPUT);

setInterval(function() {
    mcp.digitalRead(6, (error, value) => console.log(error, value));
}, 1000);
