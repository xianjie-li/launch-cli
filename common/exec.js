const cp_exec = require('child_process').exec;

module.exports = function exec(cmd) {
  return new Promise((resolve, reject) => {
    const cp = cp_exec(cmd, (err, stdout, stderr) => {
      if(err) {
        reject(err);
      }else {
        resolve();
      }
    })

    cp.stdout.on('data', function (data) {
      console.log(data);
    });
    
    cp.stderr.on('data', function (err) {
      console.log(err);
    });
  })
}