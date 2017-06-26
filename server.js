const express = require('express');
const path = require('path');
// Main App

const app = express();
const port = process.env.PORT || 5000;

app.use(function(req,res,next){
  if(req.headers['x-forwarded-proto']==='https'){
      res.redirect('http://'+req.hostname+req.url);

  }
  else{
  next();
  }
});

app.use(express.static('public'));


app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});


app.listen(port,function()
{
  console.log('listening on port' + port);
});
