const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on("connect", () => console.log("Successfully connected"));
  conn.on("data", (data) => console.log("Server says : ", data));
  conn.on('connect', () => conn.write('Name: KEL'));
  /*
  conn.on('connect', () => conn.write('Move: up'));
  conn.on('connect', () => setTimeout(function() {conn.write('Move: left');}, 500));
  conn.on('connect', () => setTimeout(function() {conn.write('Move: up');}, 1000));
  conn.on('connect', () => setTimeout(function() {conn.write('Move: right');}, 1500));*/
  return conn;

}

console.log('Connecting ...');
connect();
