let {config} = require('./wdio.browserstack.conf');


exports.config = global.config = Object.assign({}, config, {
    services: ['docker'],
    // ...
    // Options are set here as well
    dockerLogs: './logs',
    dockerOptions: { 
      image: 'selenium/standalone-chrome',
      healthCheck: 'http://localhost:4444',
      options: { 
        p: ['4444:4444'],
        shmSize: '2g'
      }    
    }
});