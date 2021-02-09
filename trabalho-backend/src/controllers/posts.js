const Post = require('../models/post.js');
const Usuario = require('../models/usuario.js');
const AuthController = require('./auth');

module.exports.listarPosts = async function(req, res){
    let token = req.query.token;
    let tokenValid = await AuthController.checar(token);
    if(tokenValid) {
        let promise = Post.find().exec();
        promise.then(
            function(posts){
                if(posts) {
                    res.status(201).json(posts)
                } else{
                    res.status(404).send("Não existem posts");
                }
            }
        ).catch(
            function(erro) {
                res.status(500).end();
            }
        );
    } else{
        res.status(401).send("Token não é valido");
    }
}

module.exports.obterPost = async function(req, res){
    let token = req.query.token;
    let tokenValid = await AuthController.checar(token);
    let id = req.params.id;
    if(tokenValid) {
        let promise = Post.findById(id).exec()
        promise.then(
            function(post) {
                if(post){
                    res.json(post);
                } else{
                    res.status(404).send("Post não encontrado");
                }
            }
        ).catch(
            function(erro) {
                res.status(500).end();
            }
        );
    } else{
        res.status(401).send("Token não é valido");
    }
}

module.exports.editarPost = async function(req, res){
    let token = req.query.token;
    let tokenValid = await AuthController.checar(token);
    let usuario_logado = AuthController.recuperarUsuarioLogado();
    let id = req.params.id;
    if(tokenValid) {
        if (token == usuario_logado.token) {
            let promise = Post.findByIdAndUpdate(id, req.body);
            promise.then(
                function(post) {
                    if(post) {
                        res.status(201).send("Post atualizado com sucesso");
                    } else{
                        res.status(404).send("Post não encontrado");
                    }
                }
            ).catch(
                function(erro) {
                    res.status(500).end();
                }
            );
        } else{
            res.status(500).send("Operação não permitida");
        }
    } else{
        res.status(401).send("Token não é valido");
    }
}

module.exports.removerPost = async function(req, res){
    let id = req.params.id;
    let token = req.query.token;
    let tokenValid = await AuthController.checar(token);
    let usuario_logado = AuthController.recuperarUsuarioLogado();
    if(tokenValid) {
        if(token == usuario_logado.token){
            let promise = Post.findByIdAndRemove(id);
            promise.then(
                function(post) {
                    if(post) {
                        res.status(201).json(post);
                    } else{
                        res.status(404).send("Post não encontrado");
                    }
                }
            ).catch(
                function(erro) {
                    res.status(500).end();
                }
            );
        } else{
            res.status(500).send("Operação não permitida");
        }
    } else{
        res.status(401).send("Token não é valido");
    }
}

module.exports.obterUsuarioDoPost = async function(req, res){
    let id = req.params.id;
    let token = req.query.token;
    let tokenValid = await AuthController.checar(token);
    if(tokenValid){
        let postPromise = Post.findById(id);
        postPromise.then(
            function(post){
                if(post) {
                    let promiseUsuario = Usuario.findById(post.uid).exec();
                    promiseUsuario.then(
                        function(usuario){
                            if(usuario){
                                res.json(usuario);
                            } else{
                                res.status(404).send("Usuário não existe");
                            }
                        }
                    ).catch(
                        function(erro) {
                            res.status(500).end();
                        }
                    );
                } else{
                    res.status(404).send("Post não existe");
                }
            }
        ).catch(
            function(erro) {
                res.status(500).end();
            }
        )
	
    } else{
        res.status(401).send("Token não é valido");
    }
}

module.exports.inserirPost = async function(req, res){
    let token = req.query.token;
    let tokenValid = await AuthController.checar(token);
    let usuario_logado = AuthController.recuperarUsuarioLogado();
    if(tokenValid) {
        if(usuario_logado.uid != ""){
            let novoPpost = new Post({
                texto: req.body.texto,
                likes: 0,
                uid: usuario_logado.uid
            });
            let promise = Post.create(novoPpost);
            promise.then(
                (post) =>{
                    res.status(201).json(post);
                }
            ).catch(
                function(erro) {
                    res.status(500).end();
                }
            );
        }
        else {
            res.status(500).send("Não tem usuário logado");
        }
    } else{
        res.status(401).send("Token não é valido");
    }
}