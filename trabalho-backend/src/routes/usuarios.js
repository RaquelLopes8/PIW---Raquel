let controller = require("../controllers/usuarios.js");
let authcontroller = require("../controllers/auth");

module.exports = function(app) {
    app.post("/api/usuarios/signin",authcontroller.logar);
    app.get("/api/usuarios",controller.listaUsuarios);
    app.get("/api/usuarios/:id", controller.obterUsuario);
    app.post("/api/usuarios", controller.inserirUsuario);
    app.put("/api/usuarios", controller.atualizarUsuario);
    app.delete("/api/usuarios",controller.removerUsuario);
    app.get("/api/usuarios/:id/posts",controller.obterPostsDoUsuario);
    
}