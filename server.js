/*function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
      return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}*/

// créé un serveur
const express = require('express');
const app = express();
//app.use(requireHTTPS);

// indique ou se situe le contenu du serveur
app.use(express.static('./dist/ofcourse'));

// indique ce qu'on sert quand on effectue une requête GET sur le serveur nodeJS
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/ofcourse/'}
);
});

app.listen(process.env.PORT || 80);