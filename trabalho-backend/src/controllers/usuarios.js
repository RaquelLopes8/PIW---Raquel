const Usuario = require('../models/usuario.js');
const Post = require('../models/post.js');
let bcrypt = require('bcrypt');
const AuthController = require('./auth');

module.exports.listaUsuarios = async function(req, res) {
    let token = req.query.token;
    let email = req.query.email;
    let nome = req.query.nome;
    let tokenValido = await AuthController.checar(token);
    if(tokenValido) {
        if (email || nome) {
            let promise = Usuario.find({"$or":[{"nome":{"$regex":nome}}, {"email":email}]});
            promise.then(
                function(usuarios) {
                    res.json(usuarios);
                }
            ).catch(
                function(erro) {
                    res.status(500).end();
                }
            );
        } else{
            let promise = Usuario.find().exec();
            promise.then(
                function(usuarios) {
                    res.json(usuarios);
                }
            ).catch(
                function(erro) {
                    res.status(500).end();
                }
            );
        }
    } else{
        res.status(401).send("Token não é valido");
    }
};

module.exports.obterUsuario = async function(req, res) {
    let token = req.query.token;
    let id = req.params.id;
    let tokenValido = await AuthController.checar(token);
    if(tokenValido) {
        let promise = Usuario.findById(id).exec();
        promise.then(
            function(usuario) {
                if(usuario) {
                    res.json(usuario);
                } else{
                    res.status(404).send("Usuário não encontrado");
                }
            }
        ).catch(
            function(erro) {
                res.status(404).send("Usuário não encontrado");
            }
        );
    } else{
        res.status(401).send("Token não é valido");
    }
};

module.exports.inserirUsuario = function(req, res) {
    let novoUsuario = new Usuario({
        nome:req.body.nome,
        email:req.body.email,
        senha:bcrypt.hashSync(req.body.senha, 10)
    });
    let promise = Usuario.create(novoUsuario);
    promise.then(
        function(usuario) {
            res.status(201).json(usuario);
        }
    ).catch(
        function(erro) {
            res.status(500).end();
        }
    );
}

module.exports.atualizarUsuario = async function(req, res) {
    let token = req.query.token;
    let tokenValido = await AuthController.checar(token);
    let usuario_logado = AuthController.recuperarUsuarioLogado();
    if(tokenValido) {
        if (token == usuario_logado.token) {
            let promise = Usuario.findByIdAndUpdate(usuario_logado.uid, req.body);
            promise.then(
                function(usuario) {
                    if(usuario) {
                        res.status(201).send("Usuário atualizado com sucesso");
                    } else{
                        res.status(404).send("Usuário não encontrado");
                    }
                }
            ).catch(
                function(erro) {
                    res.status(500).end();
                }
            );
        } else{
            res.status(500).send('Operação não é permitida');
        }
    } else{
        res.status(401).send("Token não é valido");
    }
}

module.exports.removerUsuario = async function(req, res){
    let token = req.query.token;
    let tokenValido = await AuthController.checar(token);
    let usuario_logado = AuthController.recuperarUsuarioLogado();
    if(tokenValido) {
        if(token == usuario_logado.token) {
            let promise = Usuario.findByIdAndRemove(usuario_logado.uid);
            promise.then(
                function(usuario) {
                    if(usuario) {
                        AuthController.deslogar();
                        res.status(201).json(usuario);
                    } else{
                        res.status(404).send("Usuário não existe");
                    }
                },
            ).catch(
                function(erro){
                    res.status(500).json(erro);
                }
            );
        } else{
            res.status(500).send("Operação não permitida");
        }
    } else{
        res.status(401).send("Token não é valido");
    }
}

module.exports.obterPostsDoUsuario = async function(req, res){
    let id = req.params.id;
    let token = req.query.token;
    let tokenValido = await AuthController.checar(token);
    if(tokenValido) {
        let promise = Post.find().where('uid',id).populate('uid').exec();
        promise.then(
            function(posts) {
                if (posts) {
                    res.json(posts);
                } else{
                    res.status(404).send("Posts não encontrados");
                }
            }
        ).catch(
            function(erro) {
                res.status(500).end();
            }
        );
    } else {
        res.status(401).send("O token não é valido");
    }
}