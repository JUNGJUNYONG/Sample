import express from 'express';
const app = express();
import router from './src/router/main.js';
import ejs from'ejs'
new router(app);
let port = process.env.port || 8082;

app.use(express.static('public'));
app.use(express.static('./src/views'));
app.set('views','./src/views');
app.engine('html', ejs.renderFile);

//port 8082
const server = app.listen(port,function(){
    console.log(port,'open');
})
