const express =require('express')
const cors = require('cors')
const routerApi = require('./src/routes');
const { logErrors, errorHandler } = require('./src/middlewares/error.handlers');

const app = express()
const port = 3000;

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('servidor corriendo')
})

routerApi(app)

app.use(logErrors)
app.use(errorHandler)

app.listen(port)
console.log("http://localhost:3000")