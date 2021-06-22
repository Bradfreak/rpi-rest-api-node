const Router = require('express').Router;
const sensor = require('node-dht-sensor');
const DHTRouter = Router();

DHTRouter.get("/dht/", (req, res) => {
    sensor.read(11, 4, function(err, temperature, humidity) {
        if (!err) {
            res.json({temperature : temperature+"°C", humidity : humidity+"%" });
            res.end();
        }
        else {
            res.json({ success : false});
            res.end();
        }
      });
});

module.exports = { DHTRouter };