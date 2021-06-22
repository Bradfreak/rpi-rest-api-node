const Gpio = require('onoff').Gpio;

class PinUtility{
    count = 0;
    pin = [];

    constructor(){
    }

    get(id){
        return this.pin[id];
    }

    create(pin){
        this.pin[pin.id] = { pin_num : pin.pin_num, state : pin.state};
        this.count++;
        const led = new Gpio(pin.pin_num, "out");
        led.writeSync(pin.state === "on" ? 1 : 0);
    }

    update(id, data){
        this.pin[id] = { pin_num : data.pin_num, state : data.state};
        const led = new Gpio(data.pin_num, "out");
        led.writeSync(data.state === "on" ? 1 : 0);
    }

    delete(id){
        delete this.pin[id];
        this.count--;
    }
};

// const pinUtil = new PinUtility();
// pinUtil.create({ id : 1, pin_num : 21, state : "off"});

module.exports = { PinUtility };