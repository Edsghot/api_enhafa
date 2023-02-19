const express = require('express')
const tpersonaRouter = require('./tpersona.routes.js')

function routerApi(app){
    const router = express.Router();
    app.use('/apienhafa',router);
    router.use('/persona',tpersonaRouter)
}

module.exports = routerApi