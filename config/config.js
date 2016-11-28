var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'chat-generator'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/chat-generator-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'chat-generator'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/chat-generator-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'chat-generator'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/chat-generator-production'
  }
};

module.exports = config[env];
