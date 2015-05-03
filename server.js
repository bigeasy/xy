var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('/Users/demariuschrite/git/ecma/xy')).listen(8080);
