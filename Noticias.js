var http = require('http');

var server = http.createServer(function (req, res){
    
    var categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end('<html><body>Portal de tecnologias</body></html>');
    }else if(categoria == '/moda'){
        res.end('<html><body>Portal de moda</body></html>');
    }else if(categoria == '/beleza'){
        res.end('<html><body>Portal de beleza</body></html>');
    }else{
        res.end('<html><body>Portal de noticias</body></html>');
    }

}).listen(3000);
