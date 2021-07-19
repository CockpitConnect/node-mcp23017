const MCP23017 = require('node-mcp23017')

const mcp = new MCP23017({
    address: 0x20, //all address pins pulled low
    device: 1, // Model B
    debug: false
})

mcp.pinMode(0, mcp.INPUT_PULLUP);
mcp.pinMode(1, mcp.INPUT_PULLUP);
mcp.pinMode(2, mcp.INPUT_PULLUP);
mcp.pinMode(3, mcp.INPUT_PULLUP);
mcp.pinMode(4, mcp.INPUT_PULLUP);
mcp.pinMode(5, mcp.INPUT_PULLUP);
mcp.pinMode(6, mcp.INPUT_PULLUP);
mcp.pinMode(7, mcp.INPUT_PULLUP);
mcp.pinMode(8, mcp.INPUT_PULLUP);
mcp.pinMode(9, mcp.INPUT_PULLUP);
mcp.pinMode(10, mcp.INPUT_PULLUP);
mcp.pinMode(11, mcp.INPUT_PULLUP);
mcp.pinMode(12, mcp.INPUT_PULLUP);
mcp.pinMode(13, mcp.INPUT_PULLUP);
mcp.pinMode(14, mcp.INPUT_PULLUP);
mcp.pinMode(15, mcp.INPUT); // this one should float from time to time

setInterval(function() {1
    for (let i = 8; i < 16; i++) {
      mcp.digitalRead(i, (error, value) => console.log(error, value));
    }
}, 1000);
