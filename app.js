const AnyProxy = require('anyproxy');
const options = {
  port: process.env.PORT || '8001',
  // rule: require('myRuleModule'),
  webInterface: {
    enable: true,
    // webPort: 8002
  },
  throttle: 10000,
  forceProxyHttps: false,
  wsIntercept: false,
  silent: false
};
const proxyServer = new AnyProxy.ProxyServer(options);
console.log('running port ==================> ' + process.env.PORT);
proxyServer.on('ready', () => { /* */ });
proxyServer.on('error', (e) => { /* */ });
proxyServer.start();

//when finished
// proxyServer.close();