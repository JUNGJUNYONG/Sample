import express from 'express';
const app = express();
import router from './src/router/main.js';
import ejs from'ejs'
new router(app);
let port = process.env.port || 8081;

app.use(express.static('public'));
app.use(express.static('./src/views'));
app.set('views','./src/views');
app.engine('html', ejs.renderFile);

const server = app.listen(8082,function(){
    console.log(port,'open');
})
