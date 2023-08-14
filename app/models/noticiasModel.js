const { connect } = require("../../config/server");

module.exports = function(){
    this.getNoticias = function(connection, callback){
        connection.query('select * from noticias', callback);
    };

    this.getNoticia = function(connection, callback){
        connection.query('select * from noticias where idnoticias = 1', callback)
    }

    this.salvarNoticia = function(noticia, connection, callback){
        connection.query('insert into noticias set ? ',noticia, callback)
    }

    return this;
}