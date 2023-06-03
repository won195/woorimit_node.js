'use strict';

const app = require('../app');
const PORT = process.evn.PORT || 3000;


app.listen(PORT,() =>{
  console.log('localhost:3000');
});