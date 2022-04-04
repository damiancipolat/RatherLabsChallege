<img src="https://github.com/damiancipolat/node-bff/blob/master/doc/node.png?raw=true" width="150px" align="right" />

# RatherLabs challenge - Membrane
In this challenge I solve the statement proposed in the following pdf, which consists of creating a market status api.
https://github.com/damiancipolat/RatherLabsChallege/blob/main/doc/challenge.pdf

**Readme sections**

- [Decitions](#exchange-provider)
- [Stack](#stack)
- [Configuration](#configuration)
- [Commands](#commands)
- [Architecture](#architecture)
- [Endpoints](#endpoints)

### Exchange provider:
For this challenge, I decided to use the bitfinex api through communication via websocket after analyzing both providers, bitfinex presents a better developer experience and better documentation.

## **Stack**:
- **Node.js v16**
- Docker
- Test: jest
- config: dotenv
- express.js
- pino: For logging.

## **Configuration**:
The project uses .env files to handle the configuration, the format is as follows.

```console
#Provider websocker url.
BITFINEX_HOST="wss://api-pub.bitfinex.com/ws/2"

#Limit of pair name point length on memory.
TIPS_LIMIT=50

#Server port
SERVER_PORT=8000
```

**Money pair-names**:
You can configure the pair names in the file: `'/src/config/index.ts'`.

```console
  moneys: [
    'tBTCUSD',
    'tETHUSD',
  ],
```
**Note**: 
Trading pairs are prepended by a “t” before the pair (e.g. tBTCUSD, tETHUSD, ...), the project only works with bitfinex supported **trading pairs**.
https://docs.bitfinex.com/docs/ws-general


## **Commands**:
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

## **Architecture**:
The project is divided into several layers, each with different responsibilities. Three stand out **consumer** / **memory** / **api server**.

- **Comsumer**: Get data from the socket and keep the book updated in memory, separated by buy and sell.
- **Api**: HTTP interface to obtain the different features proposed.
- **Memory (Store)**: In this layer we store the data obtained from the bitfinex provider through the websocket.
- **Configuration**: Here I centralize the configuration from which the api or the consumer obtained information
- **Utilis:** Cross functionality, only the logger is found.

#### **Layer diagrams**:
Here we see the main layers of the project.

<img src="https://github.com/damiancipolat/RatherLabsChallege/blob/main/doc/layers.png?raw=true" width="250px" />

#### **Component diagrams**:
Here we see the component of every layers of the project.

<img src="https://github.com/damiancipolat/RatherLabsChallege/blob/main/doc/complete.png?raw=true" width="550px" />

## **Endpoints**:
Here are examples of how to use the requested endpoints.

- **1) BID ASK**:

Receive a parir name and retrieve bid-ask prices, format: `'http://127.0.0.1:8000/orders/:pair-name/prices'`

```console
curl 'http://127.0.0.1:8000/orders/tBTCUSD/prices'
```

- **2) Simulate order execution**:

Receive a pair name a operation and ammount and return the price if the order is executed, format: `'http://127.0.0.1:8000/market/execute/:pair-name/[BUY/SELL]/:ammount'`

```console
curl 'http://127.0.0.1:8000/market/execute/tBTCUSD/BUY/0.5'
curl 'http://127.0.0.1:8000/market/execute/tBTCUSD/SELL/0.5'
```

- **3) Simulate order execution with limit BONUS**:

Receive a pair name a operation, ammount, limit and return the price if the order is executed, format: `'http://127.0.0.1:8000/market/execute/:pair-name/[BUY/SELL]/:ammount/limit/:limit-ammount'`

```console
http://127.0.0.1:8000/market/execute/tBTCUSD/BUY/0.5/limit/100
http://127.0.0.1:8000/market/execute/tBTCUSD/SELL/0.5/limit/100
```
