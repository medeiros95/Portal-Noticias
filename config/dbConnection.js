var mysql = require('mysql');

var connMySql = function(){
        return mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : 'Ferevi@3101*',
            database : 'portal_noticias'
        });
}

module.exports = function(){
    return connMySql;
}
