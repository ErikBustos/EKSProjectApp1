const router = require('express').Router();

const helloRoute = require('./hello');

router.use('/hello', helloRoute);

router.get('/revisasivivo', (req, res) =>{
    res.json({"status":"estoy bien"});
})

module.exports = router;