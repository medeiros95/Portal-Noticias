const { connect } = require("../../config/server");


function NoticiasDAO(connection){
    this._connection=connection;

}

Noticias.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias', callback);
};

Noticias.prototype.getNoticia = function(callback){
    this._connection.query('select * from noticias where idnoticias = 1', callback)
}

Noticias.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('insert into noticias set ? ',noticia, callback)
}

module.exports = function(){
    return NoticiasDAO;
}