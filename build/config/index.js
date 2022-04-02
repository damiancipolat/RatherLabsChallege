"use strict";
const config = {
    provider: {
        bitfinex: {
            host: process.env.BITFINEX_HOST,
        },
    },
    store: {
        limit: process.env.TIPS_LIMIT || 10,
    },
    server: {
        port: process.env.SERVER_PORT,
        killTimeout: process.env.SERVER_KILLTIMEOUT,
    },
    moneys: [
        'tBTCUSD',
        'tETHUSD',
    ],
};
module.exports = config;
