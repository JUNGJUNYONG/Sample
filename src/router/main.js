export default class router {
    constructor(app) {
        app.get('/',function(req,res){
            res.render('index.html')
        });
        app.get('/about',function(req,res){
            res.render('about.html');
        });
    }
}