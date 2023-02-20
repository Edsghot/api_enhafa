const express = require('express')
const tobraService = require('../Services/tobra.service.js')

const router = express.Router();
const service = new tobraService();

router.get('/',async(req,res)=>{
    const result = await service.find();
    res.json(result)
})

router.get('/:id',async (req,res)=>{
    const {id} = req.params;
    const result = await service.findOne(id);
    res.json(result)
})

router.post('/',async (req,res)=>{
    const body = req.body;
    const result = await service.create(body); 
    res.json(result)
})

router.patch('/:id',async (req,res)=>{
    const {id} = req.params;
    const body = req.body;
    const result = await service.update(id,body);
    res.json(result)
})

router.delete('/:id',async(req,res)=>{
    const {id} = req.params;
    const result = await service.delete(id);
    res.json(result)
})

module.exports = router