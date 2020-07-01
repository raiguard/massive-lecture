const express = require('express'),
      ctrl = require('./controller'),
      app = express();

app.use(express.json());

app.listen(5555, () => console.log('Server running on 5555'));