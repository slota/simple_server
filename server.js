'use strict'

 const express = require('express');
 const app = express();

 let port = 3000;

 app.get('/', (req, res) => {
   res.send('Hello Turing!');
 });

 app.listen(port, () => {
   console.log('Example app listening on port 3000!');
 });
