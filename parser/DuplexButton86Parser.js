const DeviceParser = require('./DeviceParser');
const AccessoryParser = require('./AccessoryParser');


class DuplexButton86Parser extends DeviceParser {
    constructor(platform) {
        super(platform);
    }
    
    getAccessoriesParserInfo() {
        return {
            'DuplexWallButton_StatelessProgrammableSwitch': DuplexButton86StatelessProgrammableSwitchParser            
        }
    }
}
module.exports = DuplexButton86Parser;

class DuplexButton86StatelessProgrammableSwitchParser extends AccessoryParser {
    constructor(platform, accessoryType) {
        super(platform, accessoryType)
    }
    
    getAccessoryCategory(deviceSid) {
        return this.Accessory.Categories.PROGRAMMABLE_SWITCH;
    }
    
    getAccessoryInformation(deviceSid) {
        return {
            'Manufacturer': 'Aqara',
            'Model': 'Duplex Wall Button',
            'SerialNumber': deviceSid
        };
    }

    getServices(jsonObj, accessoryName) {
        var that = this;
        var result = [];
        
        var service = new that.Service.StatelessProgrammableSwitch(accessoryName);
        service.getCharacteristic(that.Characteristic.ProgrammableSwitchEvent);
        result.push(service);
        
        var batteryService  = new that.Service.BatteryService(accessoryName);
        batteryService.getCharacteristic(that.Characteristic.StatusLowBattery);
        batteryService.getCharacteristic(that.Characteristic.BatteryLevel);
        batteryService.getCharacteristic(that.Characteristic.ChargingState);
        result.push(batteryService);
        
        return result;
    }
    
    parserAccessories(jsonObj) {
        var that = this;
        var deviceSid = jsonObj['sid'];
        var uuid = that.getAccessoryUUID(deviceSid);
        var accessory = that.platform.AccessoryUtil.getByUUID(uuid);
        if(accessory) {
            var service = accessory.getService(that.Service.StatelessProgrammableSwitch);
            var programmableSwitchEventCharacteristic = service.getCharacteristic(that.Characteristic.ProgrammableSwitchEvent);
            var value = that.getProgrammableSwitchEventCharacteristicValue(jsonObj, null);
            if(null != value) {
                programmableSwitchEventCharacteristic.updateValue(value);
            }
            
            that.parserBatteryService(accessory, jsonObj);
        }
    }
    
    getProgrammableSwitchEventCharacteristicValue(jsonObj, defaultValue) {
        var value = this.getValueFrJsonObjData(jsonObj, 'channel_0');
        if(value === 'click') {
            return this.Characteristic.ProgrammableSwitchEvent.SINGLE_PRESS;
        } else 
    
        var value = this.getValueFrJsonObjData(jsonObj, 'channel_1');
        if(value === 'click') {
            return this.Characteristic.ProgrammableSwitchEvent.DOUBLE_PRESS;
        
        } else 
    
        var value = this.getValueFrJsonObjData(jsonObj, 'dual_channel');
        if(value === 'both_click') {
            return this.Characteristic.ProgrammableSwitchEvent.LONG_PRESS;
        
        } else {
            return defaultValue;
        }
    }

}
