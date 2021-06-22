var express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});

const { LedRouter } = require('./Routers/ledrouter');
const { DHTRouter } = require('./Routers/dhtrouter');

app.use("/led", LedRouter);
app.use("/dht", DHTRouter);