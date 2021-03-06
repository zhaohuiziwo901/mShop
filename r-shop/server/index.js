process.env.NODE_ENV = 'development';
// process.env.NODE_ENV = 'production';

require('babel-register');
require.extensions['.css'] = function() {
  return;
};
require('isomorphic-fetch');

const isProductionMode = (process.env.NODE_ENV === 'production');
const app = isProductionMode ? require('./app.prod.js'): require('./app.dev.js');

if (!isProductionMode) {
  process.env.NODE_ENV = 'development';
}

const PORT = process.env.PORT || 9000;

app.listen(PORT, function() {
  console.log('running in ' + (isProductionMode ? 'producition' : 'development') + ' mode');
  console.log('listening on port: ' + PORT);
});
