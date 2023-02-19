const express = require('express')

const router = express.Router();


router.get('/',(req,res)=>{
    
    res.send('getAlll')
})

router.get('/:id',(req,res)=>{
    const {id} = req.params;
    res.send('getid')
})

router.post('/',(req,res)=>{
    res.send('post')
})

router.patch('/:id',(req,res)=>{
    const {id} = req.params;
    res.send('patchid')
})


module.exports = router