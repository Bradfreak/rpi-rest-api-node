const Router = require('express').Router;
const { PinUtility } = require('../Utils/pinutil');
const LedRouter = Router();

const pinUtil = new PinUtility();
pinUtil.create({ id : 1, pin_num : 21, state : "off"});

LedRouter.get("/view/:id", (req,res) => {
    let id = req.params.id;
    res.json(pinUtil.get(id));
    res.end();
})

LedRouter.get("/change/", (req, res) => {
    let id = req.query.id;
    let state = req.query.state;
    let data = pinUtil.get(id);
    data.state = state;
    pinUtil.update(id,data);
    res.json({success : true});
    res.end();
})

module.exports = { LedRouter };
