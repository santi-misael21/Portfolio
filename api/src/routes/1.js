const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();

const {TOKEN} = process.env;

router.get('/d', async (req, res)=>{

    try{
        
        let r = await axios("https://api.vercel.com/v6/deployments?limit=100", {
            "headers": {
                "Authorization": `Bearer SHAwmBUhM3z3wKg7qJo9iOCa`,
                "Content-Type": "application/json"
            },
            // "method": "get"

        });

        return res.status(200).json(r.data);
    }
    catch(e){
        return res.status(200).json({
            error: e.message
        });
    }

})

router.get('/p', async (req, res)=>{

    try {

        let r = await axios("https://api.vercel.com/v9/projects", {

            "headers": {
                "Authorization": `Bearer SHAwmBUhM3z3wKg7qJo9iOCa`,
                "Content-Type": "application/json"
            },
        })
        return res.status(200).json(r.data)
    }
    catch (e) {
        return res.status(200).json({
            error: e.message
        });
    }

})

module.exports = router;