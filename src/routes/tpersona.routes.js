const express = require('express')
const tpersonaService = require('../Services/tpersona.service.js')




const router = express.Router();
const service = new tpersonaService();


router.get('/',async(req,res)=>{
    const persona = await service.find();
    res.send(persona)
})

router.get('/:id',async (req,res)=>{
    const {id} = req.params;
    const persona = await service.findOne(id);
    res.send(persona)
})

router.post('/',(req,res)=>{
    res.send('post')
})

router.patch('/:id',(req,res)=>{
    const {id} = req.params;
    res.send('patchid')
})

module.exports = router