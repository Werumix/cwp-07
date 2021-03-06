let articles = require('./articles');
const handle_errors = require('./handle_errors');

module.exports = function updateAtricle(req, res, payload, cb) {
    let index;
    index = articles.findIndex(i => i.id == payload.id);
    if(index === -1){
        return handle_errors.invalidRequest(req, res, payload, cb);
    }else{
        articles[index].title = "new_title";
    }
    cb(null, articles[index]);
};