<img src="https://github.com/damiancipolat/node-bff/blob/master/doc/node.png?raw=true" width="150px" align="right" />

# RatherLabs challenge - Membrane
In this challenge I solve the statement proposed in the following pdf, which consists of creating a market status api.

### **Stack**:
- Node.js v16
- Docker
- Test: jest
- config: dotenv
- express.js
- pino: For logging.

### **Configuration**:
The project uses .env files to handle the configuration, the format is as follows.

```console
#Provider websocker url.
BITFINEX_HOST="wss://api-pub.bitfinex.com/ws/2"

#Limit of pair name point length on memory.
TIPS_LIMIT=50

#Server port
SERVER_PORT=8000
```

http://127.0.0.1:8000/orders/tBTCUSD/prices
http://127.0.0.1:8000/market/execute/tBTCUSD/BUY/0.5
http://127.0.0.1:8000/market/execute/tBTCUSD/BUY/0.5/limit/100
