const Usuario = require('../models/usuario.js');
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

let usuario_logado = {
    token:"",
    uid:""
};

module.exports.recuperarUsuarioLogado = function() {
    return usuario_logado;
}

module.exports.deslogar = function() {
    usuario_logado = {
        token:"",
        uid:""
    };
}

module.exports.checar = async function(token) {
    if (token) {
        return jwt.verify(token, 'secret', function(err, decoded) {
            if (err) {
                return false;
            }
            return true;
        });
    } else {
        return false;
    }
    
};

module.exports.logar = function(req, res) {
    function logar(usuario) {
        if (!bcrypt.compareSync(req.body.senha, usuario.senha)) {
            falhar();
        } else {
            let token = jwt.sign({ usuario }, 'secret');
            usuario_logado = {token:token, uid:usuario._id};
            res.status(200).json({
                message: "Logado",
                token: token,
                userId: usuario._id
            });
        }
    }

    function falhar() {
        res.status(401).send("Credenciais incorretas");
    }
    let promise = Usuario.findOne({ email: req.body.email }).exec();
    promise.then(
        function(usuario) {
            if(usuario) {
                logar(usuario);
            } else {
                res.status(404).send("Usuário não existe");
            }
        }
    ).catch(
        function(erro) {
            res.status(500).end();
        }
    );
};