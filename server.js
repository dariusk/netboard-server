var cloak = require('cloak');

cloak.configure({
  port: 8090,
  messages: {
    move: function(arg, user) {
      console.log('message from client received!', arg);
      cloak.messageAll('confirmMove',arg);
    }
  }
});

cloak.run();
