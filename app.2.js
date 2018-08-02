const Straightforward = require('straightforward')
 
;(async () => {
  // Start proxy server
  const sf = await new Straightforward().listen(8080)
  console.log(`Proxy listening on http://localhost:9191(8080)`)
 
  // Log http requests
  sf.onRequest(async ({ req, res }, next) => {
    console.log(`http request: ${req.url}`)
    // Note the common middleware pattern, use `next()`
    // to pass the request to the next handler.
    return next()
  })
 
  // Log connect (https) requests
  sf.onConnect(async ({ req, res }, next) => {
    console.log(`connect request: ${req.url}`)
    return next()
  })
 
})()