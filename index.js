//first class assignment - a node.js server


let  coolhttp = require('http');

let coolserver = coolhttp.createServer(


  function( coolrequest, coolresponse) {

    console.log(coolrequest.url);
    
    let coolreply;
    if (coolrequest.url === '/startUp'){
      coolreply = 'Start-ups are welcome here.';
    } else coolreply = 'This space is only for start-ups';

    coolresponse.writeHead( 200, { "Content-Type": "text/plain" } );

    coolresponse.end( coolreply );
  }
  )

coolserver.listen(80, '0.0.0.0')


console.log("start-up server running");

