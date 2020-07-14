const express = require('express');

const jwt = require('jsonwebtoken')

const AccountController = require('./controllers/AccountController');

const OcorrenciaController = require('./controllers/OcorrenciaController');

const routes = express.Router();

routes.post('/account', AccountController.registrar);

routes.get('/account', AccountController.listar)

routes.get('/account/recuperarAccount', authenticateToken, AccountController.recuperarAccount)

routes.put('/account', authenticateToken, AccountController.atualizar)

routes.post('/logIn', AccountController.logIn)

routes.delete('/account/remover/:id', authenticateToken,AccountController.remover)


routes.post('/ocorrencia', authenticateToken, OcorrenciaController.registrar);

routes.get('/ocorrencia', authenticateToken, OcorrenciaController.listar)

routes.get('/ocorrencia/:id', authenticateToken, OcorrenciaController.recuperarOcorrencia)

routes.put('/ocorrencia/:id', authenticateToken, OcorrenciaController.atualizar)

routes.delete('/ocorrencia/:id', authenticateToken, OcorrenciaController.remover)

routes.post('/ocorrencia/finalizarOcorrencia', authenticateToken, OcorrenciaController.finalizarOcorrencia)

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
  
    const token = authHeader && authHeader.split(' ')[1]

    if(token == null) return res.sendStatus(401)

    jwt.verify(token,SECRET_KEY, (err, id)=>{
        if(err) return res.sendStatus(403)
        req.tokenInfo = id
        next()
    })
}



module.exports = routes
