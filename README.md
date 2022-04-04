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

### **Comands**:
These are several useful commands to run the project.

- Run unit test:
```console
damian@challenge:~$ npm test
```
- Run coverage report.
```console
damian@challenge:~$ npm run coverage
```
- Run app in development mode:
```console
damian@challenge:~$ npm run dev
```
- Run app:
```console
damian@challenge:~$ npm start
```

- Create and run docker container:
```console
damian@challenge:~$ npm run build
```

### **Architecture**:
The project is divided into several layers, each with different responsibilities. Three stand out **consumer** / **memory** / **api server**.

- **Comsumer**: Get data from the socket and keep the book updated in memory, separated by buy and sell.
- **Api**: HTTP interface to obtain the different features proposed.

<img src="https://github.com/damiancipolat/RatherLabsChallege/blob/main/doc/complete.png?raw=true" width="150px" align="right" />
<img src="https://github.com/damiancipolat/RatherLabsChallege/blob/main/doc/layers.png?raw=true" width="150px" align="right" />



http://127.0.0.1:8000/orders/tBTCUSD/prices
http://127.0.0.1:8000/market/execute/tBTCUSD/BUY/0.5
http://127.0.0.1:8000/market/execute/tBTCUSD/BUY/0.5/limit/100
