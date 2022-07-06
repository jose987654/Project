const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const router = express.Router();
const Purchase = require('../models/Purchase');
const Farm = require('../models/Farm');

router.get('/purchases',(req,res)=>{
    res.render('purchases')
})


router.post('/purchases', async(req,res)=>{
    //console.log(req.body)    
        const purchase = new Purchase(req.body);
        await purchase.save()
        res.redirect('/purchases')
        console.log(req.body)
    
    // catch(err){
    //     res.render('accounts')
    //     // res.status(400).redirect('/login', {title:"Products ", routeName:"Products"})
    // }
})

router.get('/farm',(req,res)=>{
    res.render('farm')
})

router.post('/farm', async(req,res)=>{
    //console.log(req.body)    
        const farm = new Farm(req.body);
        await farm.save()
        res.redirect('/farm')
        console.log(req.body)
    
    // catch(err){
    //     res.render('accounts')
    //     // res.status(400).redirect('/login', {title:"Products ", routeName:"Products"})
    // }
})




module.exports=router;