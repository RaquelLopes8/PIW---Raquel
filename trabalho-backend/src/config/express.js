let express = require('express');
let usuariosRouter = require('../routes/usuarios.js');
let postsRouter = require('../routes/posts.js');
let bodyParser = require('body-parser');
const path = require('path');

module.exports = function() {
    let app = express();
    app.set("port", 3000);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(express.static('./public'));
    usuariosRouter(app);
    postsRouter(app);
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    return app;
}