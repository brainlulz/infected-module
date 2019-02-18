const path = require('path');
const fs = require('fs');

const { exec } = require('child_process')

module.exports = function runMaliciousModule(arg) {
  console.log('I may do great stuff here', arg);

  exec('touch /tmp/malicious_package', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log('but here, I may break your machine');
  });
};