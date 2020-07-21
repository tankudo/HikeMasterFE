const express = require('express');
const app = express();

app.use(express.static('./dist/hikemaster'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/hikemaster/'});
});
app.listen(process.env.PORT || 8080);
