const sql = require('../config/database.js');
class HomeController{
    index(req,res){
        res.render('home');
    }
    store(req,res){
            console.log(req.body);
            sql.getdata();
        res.render('home');
    }
}
module.exports =new HomeController;