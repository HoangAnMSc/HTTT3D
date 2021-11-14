const HomeRouter= require('./web.js');
function route(app){

        app.use('/',HomeRouter);
        app.use('/store',HomeRouter);
   
}
module.exports =route;