const express = require('express')
const tpersonaRouter = require('./tpersona.routes.js')
const tobraRouter = require('./tobra.routes.js')

function routerApi(app){
    const router = express.Router();
    app.use('/apienhafa',router);
    router.use('/persona',tpersonaRouter)
    router.use('/obra',tobraRouter)
}

module.exports = routerApi