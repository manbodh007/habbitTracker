const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/task_List_db');
const db = mongoose.connection;

 db.on('error',console.error.bind('database is not connected'));

 db.once('open',function(){
     console.log('database is connected now');
 });
 // mongodb connection