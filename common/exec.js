const cp_exec = require('child_process').exec;

module.exports = function exec(cmd) {
  return new Promise((resolve, reject) => {
    cp_exec(cmd, (err, stdout, stderr) => {
      if(err) {
        console.log('err', stderr);
        reject(err);
      }else {
        console.log(stdout);
        resolve();
      }
    })
  })
}