// Dev: netlify-lambda serve ./lambda
// Prod: netlify-lambda build ./lambda

// http://localhost:9000/test will run test.js
exports.handler = function(event, context, callback) {
  console.log('event', event);
  console.log('context', context.clientContext);
  // your server-side functionality
  // Netlify provides the event and context parameters when the function is invoked.
  // You provide the callback parameter, which is optional, but recommended.
  callback(null, {
    statusCode: 200,
    body: "<h1>Hello, World</h1>"
    });
}

