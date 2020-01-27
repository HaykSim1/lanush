const express = require('express');
const cors = require('cors');
const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const config = require('./config');

const isDev = process.env.NODE_ENV !== 'production';
const port  = process.env.PORT || 8080;


// Configuration
// ================================================================================================

// Set up Mongoose
mongoose.connect(isDev ? config.db_dev : config.db, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.Promise = global.Promise;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public', express.static('public'));
app.use(cors());
// API routes
require('./routes')(app);


// if (isDev) {
//   const compiler = webpack(webpackConfig);
//
//   app.use(historyApiFallback({
//     verbose: false
//   }));
//
//   app.use(webpackDevMiddleware(compiler, {
//     publicPath: webpackConfig.output.publicPath,
//     contentBase: path.resolve(__dirname, '../client/public'),
//     stats: {
//       colors: true,
//       hash: false,
//       timings: true,
//       chunks: false,
//       chunkModules: false,
//       modules: false
//     }
//   }));
//
//   app.use(webpackHotMiddleware(compiler));
//   app.use(express.static(path.resolve(__dirname, '../dist')));
// } else {
//   app.use(express.static(path.resolve(__dirname, '../dist')));
//   app.get('*', function (req, res) {
//     res.sendFile(path.resolve(__dirname, '../dist/index.html'));
//     res.end();
//   });
// }

app.use(express.static(path.join(__dirname, 'website')));
app.use(express.static(path.join(__dirname, 'admin')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'website', 'index.html'));
});
app.get('/admin/', function(req, res) {
  res.sendFile(path.join(__dirname, 'admin', 'index.html'));
});
// app.get('/admin', function (req, res) {
//   res.sendFile(path.resolve(__dirname, './admin/index.html'));
//   res.end();
// });
//
// app.get('/', function (req, res) {
//   res.sendFile(path.resolve(__dirname, './website/index.html'));
//   res.end();
// });

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }

  console.info('>>> 🌎 Open http://0.0.0.0:%s/ in your browser.', port);
});

module.exports = app;
