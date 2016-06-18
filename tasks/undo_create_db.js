var gulp = require('gulp')
var exec = require('child-process-promise').exec
var path = require('path');
var configPath = path.join(process.cwd(),'config/config.json');
var config = require(configPath);

gulp.task('undo_create_db',() => {
var execStr = "";
var isWin = (require('os').platform() === 'win32');
if(isWin) {
  execStr = "SET PGPASSWORD=" + config.connection.password;
} else {
  var execStr = "export PGPASSWORD='" + config.connection.password + "'; "
}
    execStr+= " dropdb " + config.connection.database
    execStr+= " -h " + config.connection.host
    execStr+= " -U " + config.connection.user
    execStr+= " -p " + config.connection.port
    return exec(execStr)
	})
