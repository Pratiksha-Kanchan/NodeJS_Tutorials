const os = require('os');

const server = {
  'type': os.type(),
  'architecture': os.arch(),
  'uptime': os.uptime()
}

console.log(server)



/*
https://nodejs.org/docs/latest-v14.x/api/os.html

os.EOL
os.arch()
os.constants
os.cpus()
os.devNull
os.endianness()
os.freemem()
os.getPriority([pid])
os.homedir()
os.hostname()
os.loadavg()
os.networkInterfaces()
os.platform()
os.release()
os.setPriority([pid, ]priority)
os.tmpdir()
os.totalmem()
os.type()
os.uptime()
os.userInfo([options])
os.version()
*/

