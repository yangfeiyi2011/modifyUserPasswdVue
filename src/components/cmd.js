const exec = require('child_process').exec;

export function execute (cmd){
  exec(cmd, function(error, stdout, stderr) {
      if(error){
        console.error(error);
      }
      else{
        console.log("success");
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
      }
  });
}