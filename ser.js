
var ex = require('express');
var ap = ex();

var us = process.env.USER;
var pa = process.env.PASS;

ap.set('port', process.env.PORT || 3000);

if (us && pa) {
  ap.us(ex.basicAuth(us, pa));
}

ap.use(ex.logger('dev'));
ap.use(ex.compress());
ap.use(ex.static(__dirname + '/html1'));

ap.listen(ap.get('port'), function() {
  console.log('Server listening on port %s', ap.get('port'));
});