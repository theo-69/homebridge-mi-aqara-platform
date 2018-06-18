### NEW Version

* WallButton new Name for both and double is now just one Button (left click > one click, right click > two click, both click > long click)
* removed virtuell Switches
* Fakegato Integration

to do

* Integration of Gateway Sound

### For now install with

```
git clone https://github.com/theo-69/homebridge-mi-aqara-platform.git
cd homebridge-mi-aqara-platform
sudo npm link
```

# homebridge-mi-aqara-platform
[![npm version](https://badge.fury.io/js/homebridge-mi-platform.svg)](https://badge.fury.io/js/homebridge-mi-platform)

homebridge plugin for XiaoMi Aqara plugin.   

Thanks for all previous developer and testers.   

**Note: I have only a part of these devices, so some devices don't have tested. If you find bugs, please submit them to [issues](https://github.com/thro-69/homebridge-mi-platform/issues).**
   
**Please update to node 10.4.0.**   
 
This repository contains the Aqara plugin for homebridge.   
Aqara is a ZigBee gateway with a few sensors.   

![](https://raw.githubusercontent.com/theo-69/homebridge-mi-aqara-platform/master/images/Gateway.jpg)
![](https://raw.githubusercontent.com/theo-69/homebridge-mi-aqara-platform/master/images/ContactSensor.jpg)
![](https://raw.githubusercontent.com/theo-69/homebridge-mi-aqara-platform/master/images/MotionSensor.jpg)
![](https://raw.githubusercontent.com/theo-69/homebridge-mi-aqara-platform/master/images/Button.jpg)
![](https://raw.githubusercontent.com/theo-69/homebridge-mi-aqara-platform/master/images/TemperatureAndHumiditySensor.jpg)
![](https://raw.githubusercontent.com/theo-69/homebridge-mi-aqara-platform/master/images/SingleSwitch.jpg)
![](https://raw.githubusercontent.com/theo-69/homebridge-mi-aqara-platform/master/images/DuplexSwitch.jpg)
![](https://raw.githubusercontent.com/theo-69/homebridge-mi-aqara-platform/master/images/SingleSwitchLN.jpg)
![](https://raw.githubusercontent.com/theo-69/homebridge-mi-aqara-platform/master/images/DuplexSwitchLN.jpg)
![](https://raw.githubusercontent.com/theo-69/homebridge-mi-aqara-platform/master/images/SingleButton86.jpg)
![](https://raw.githubusercontent.com/theo-69/homebridge-mi-aqara-platform/master/images/DuplexButton86.jpg)
![](https://raw.githubusercontent.com/theo-69/homebridge-mi-aqara-platform/master/images/PlugBase.jpg)
![](https://raw.githubusercontent.com/theo-69/homebridge-mi-aqara-platform/master/images/PlugBase86.jpg)
![](https://raw.githubusercontent.com/theo-69/homebridge-mi-aqara-platform/master/images/MagicSquare.jpg)
![](https://raw.githubusercontent.com/theo-69/homebridge-mi-aqara-platform/master/images/SmokeDetector.jpg)
![](https://raw.githubusercontent.com/theo-69/homebridge-mi-aqara-platform/master/images/NatgasDetector.jpg)
![](https://raw.githubusercontent.com/theo-69/homebridge-mi-aqara-platform/master/images/ElectricCurtain.jpg)
![](https://raw.githubusercontent.com/theo-69/homebridge-mi-aqara-platform/master/images/ContactSensor2.jpg)
![](https://raw.githubusercontent.com/theo-69/homebridge-mi-aqara-platform/master/images/MotionSensor2.jpg)
![](https://raw.githubusercontent.com/theo-69/homebridge-mi-aqara-platform/master/images/Button2.jpg)
![](https://raw.githubusercontent.com/theo-69/homebridge-mi-aqara-platform/master/images/TemperatureAndHumiditySensor2.jpg)
![](https://raw.githubusercontent.com/theo-69/homebridge-mi-aqara-platform/master/images/WaterDetector.jpg)
![](https://raw.githubusercontent.com/theo-69/homebridge-mi-aqara-platform/master/images/UnlockedSensor.jpg)
![](https://raw.githubusercontent.com/theo-69/homebridge-mi-aqara-platform/master/images/AcPartner.jpg)

## Supported Devices
||Device Name|Protocol Model Value|
|:-:|:-|:-|
|1|Gateway|gateway<br>gateway.v3|
|2|ContactSensor|magnet|
|3|MotionSensor|motion|
|4|Button |switch|
|5|TemperatureAndHumiditySensor|sensor_ht|
|6|SingleSwitch|ctrl_neutral1|
|7|DuplexSwitch|ctrl_neutral2|
|8|SingleSwitchLN|ctrl_ln1<br>ctrl_ln1.aq1|
|9|DuplexSwitchLN|ctrl_ln2|
|10|SingleWallButton|86sw1<br>sensor_86sw1.aq1|
|11|DuplexWallButton|86sw2<br>sensor_86sw2.aq1|
|12|PlugBase|plug|
|13|PlugBase86|86plug<br>ctrl_86plug|
|14|MagicSquare|cube<br>sensor_cube|
|15|SmokeDetector|smoke<br>sensor_smoke|
|16|NatgasDetector|natgas<br>sensor_natgas|
|17|ElectricCurtain|curtain|
|18|ContactSensor2|sensor_magnet<br>sensor_magnet.aq2|
|19|MotionSensor2|sensor_motion.aq2|
|20|Button2|sensor_switch<br>sensor_switch.aq2|
|21|TemperatureAndHumiditySensor2|weather.v1<br>weather|
|22|WaterDetector|sensor_wleak.aq1|
|23|UnlockedSensor|lock.aq1|
|24|AcPartner|acpartner.v3|


## Pre-Requirements
1. Make sure your IOS version is ios11 or later.   
2. Make sure you have gateway v2 or acpartner v3. gateway v1 has limited space so can't support this feature.   
3. Update gateway firmware to **1.4.1_155.0143(gateway v2)**, **1.4.1_148.019(acpartner v3)** or later.   

## Installation
1. Install HomeBridge, please follow it's [README](https://github.com/nfarina/homebridge/blob/master/README.md).   
If you are using Raspberry Pi, please read [Running-HomeBridge-on-a-Raspberry-Pi](https://github.com/nfarina/homebridge/wiki/Running-HomeBridge-on-a-Raspberry-Pi).   
2. Make sure you can see HomeBridge in your iOS devices, if not, please go back to step 1.   
3. Download homebridge-mi-aqara to your HomeBridge path or installation through NPM (not working yet):
```
npm install -g homebridge-mi-aqara-platform
```
   

## Configuration
||Name|Required|Value Type|Description|Value Example|
|:-:|:-|:-|:-|:-|:-|
|1|platform|True|String||It must be 'MiAqaraPlatform'|
|2|[gateways](#gateways-configuration)|True|Object|set gateway information.|{ "6409802da3b3": "02i44k56zrgg578b" }|
|3|[bindAddress](#bindaddress-configuration)|False|String|specified network.|"10.0.0.1"|
|4|[defaultValue](#defaultvalue-configuration)|False|Object|set device default value.||

For more information about config, Please refer to file `sampleConfig.json`.   

### gateways configuration
Open aqara gateway's settings, enable [local network protocol](https://github.com/louisZL/lumi-gateway-local-api).  
Please follow the steps in this thread: http://wiki.yinhh.com/Wiki.jsp?page=Homebridge-mi-aqara or http://bbs.xiaomi.cn/t-13198850. It's in Chinese so you might need a translator to read it.  

**On iOS:
 
* Open the app
* Select the gateway
* Press the top right `(…)` Settings button
* Select `About`
* Tap five times in the blank area to reveal the hidden menu items
* Below the version numbers, choose the first: `局域网通信协议` (LAN Communication Protocol)
* Toggle the `局域网通协议` (LAN Communication Protocol) switch to on
* Take note of the alphanumeric code beside `密码` (Password)
* Press `OK`
* Go back to the previous menu (About) and select the next option: `网关信息` (Gateway Information)
* Take note of the MAC address at `mac=`

To control the devices, put gateway's MAC address (**lower case without colon**) and password (**keep original and case sensitive**) to ~/.homebridge/config.json.   
```
{
    "platforms": [{
        "platform": "MiAqaraPlatform",
        "gateways": {
            "6409802da3b3": "02i44k56zrgg578b"
        }
    }]
}
```
If you have more than one gateways, fill them in right order, like below. Or better option use second instance with homebridge.  
```
{
    "platforms": [{
        "platform": "MiAqaraPlatform",
        "gateways": {
            "6409802da3b3": "02i44k56zrgg578b",
            "f0b4299a5b2b": "2F92E7DA90C66B86",
            "f0b4299a77dd": "syu3oasva3uqd5qd"
        }
    }]
}
```

### bindAddress configuration
If your device (which running homebridge) has multiple network, please add the bindAddress configuration item to decide to listen which network, like below.   
```
{
    "platforms": [{
        "platform": "MiAqaraPlatform",
        "bindAddress": "10.0.0.1",
        "gateways": {
            "6409802da3b3": "02i44k56zrgg578b"
        }
    }]
}
```

### defaultValue configuration
If you want to specify the default value, such as specify the name of the accessory, hide the accessory, any other configs. You can add a defaultValue mapping table to your config.json.   
The config supported are as follows:   

||Name|Value Type|Description|Default Value|Recommended Value|Value Example|
|:-:|:-|:-|:-|:-|:-|:-|
|1|[name](#defaultvalue-name-configuration)|String|set accessory name.|DeviceAccessoryType_device SID last four bits||"living room temperature"|
|2|[serviceType](#defaultvalue-servicetype-configuration)|String|set accessory type for Switch or Lightbulb. <br>Currently only supported: SingleSwitch, DuplexSwitch, SingleSwitchLN, DuplexSwitchLN.|"Switch"|"Switch"|"Lightbulb"|
|3|[disable](#defaultvalue-disable-configuration)|Boolean|disable accessory|false|the accessories that do not need to be set to true, such as virtual press.|true|
|4|[syncValue](#defaultvalue-syncvalue-configuration)|Boolean|accessory will synchronization value when homebridge call the get function, if it's true.|false|fasle|false|
|4|[ignoreWriteResult](#defaultvalue-ignorewriteresult-configuration)|Boolean|if set to true, the result of control is not detected.|true|If your network is awful, it's recommended to be set true.|false|
|4|[disableNoResponse](#defaultvalue-disablenoresponse-configuration)|Boolean|use jump back the last value to replace show NoResponse, you can set it true.|false|false|true|

The rules are as follows:
```
{
    "platforms": [{
        "platform": "MiAqaraPlatform",
        "gateways": {
            "6409802da3b3": "02i44k56zrgg578b",
            "f0b4299a5b2b": "2F92E7DA90C66B86",
            "f0b4299a77dd": "syu3oasva3uqd5qd"
        },
        "defaultValue": {
            "device1 sid": {
                "DeviceAccessoryType1": {
                    "config1": "config1 value"
                }
            },
            "device2 sid": {
                "DeviceAccessoryType1": {
                    "config1": "config1 value"
                    "config2": "config2 value"
                },
                "DeviceAccessoryType2": {
                    "config1": "config1 value"
                }
            }
        }
    }]
}
```
examples:   
```
{
    "platforms": [{
        "platform": "MiAqaraPlatform",
        "gateways": {
            "6409802da3b3": "02i44k56zrgg578b",
            "f0b4299a5b2b": "2F92E7DA90C66B86",
            "f0b4299a77dd": "syu3oasva3uqd5qd"
        },
        "defaultValue": {
            "158d0001000001": {
                "ContactSensor_ContactSensor": {
                    "name": "entrance door"
                }
            },
            "158d0001000002": {
                "MotionSensor2_MotionSensor": {
                    "name": "study room motion sensor"
                },
                "MotionSensor2_LightSensor": {
                    "name": "study room light sensor"
                }
            }
        }
    }]
}
```
   
The rules of A DeviceAccessoryType:   
```
DeviceName_HomeBridgeAccessoryType(_ExtraMessage)
```
detail:   

||Device Name|DeviceAccessoryType|
|:-:|:-|:-|
|1|Gateway|Gateway_Lightbulb<br>Gateway_LightSensor<br>Gateway_Switch_JoinPermission|
|2|ContactSensor|ContactSensor_ContactSensor|
|3|MotionSensor|MotionSensor_MotionSensor|
|4|Button|Button_StatelessProgrammableSwitch|
|5|TemperatureAndHumiditySensor|TemperatureAndHumiditySensor_TemperatureSensor<br>TemperatureAndHumiditySensor_HumiditySensor|
|6|SingleSwitch|SingleSwitch_Switch|
|7|DuplexSwitch|DuplexSwitch_Switch_Left<br>DuplexSwitch_Switch_Right|
|8|SingleSwitchLN|SingleSwitchLN_Switch|
|9|DuplexSwitchLN|DuplexSwitchLN_Switch_Left<br>DuplexSwitchLN_Switch_Right|
|10|SingleWallButton|SingleWallButton_StatelessProgrammableSwitch|
|11|DuplexWallButton|DuplexWallButton_StatelessProgrammableSwitch|
|12|PlugBase|PlugBase_Outlet|
|13|PlugBase86|PlugBase86_Outlet|
|14|MagicSquare|MagicSquare_StatelessProgrammableSwitch_Flip90<br>MagicSquare_StatelessProgrammableSwitch_Flip180<br>MagicSquare_StatelessProgrammableSwitch_Move<br>MagicSquareStatelessProgrammableSwitchTapTwiceParser<br>MagicSquare_StatelessProgrammableSwitch_ShakeAir<br>MagicSquare_StatelessProgrammableSwitch_Rotate<br>MagicSquare_Switch_VirtualFlip90<br>MagicSquare_Switch_VirtualFlip180<br>MagicSquare_Switch_VirtualMove<br>MagicSquare_Switch_VirtualTapTwice<br>MagicSquare_Switch_VirtualShakeAir|
|15|SmokeDetector|SmokeDetector_SmokeSensor|
|16|NatgasDetector|NatgasDetector_SmokeSensor|
|17|ElectricCurtain|ElectricCurtain_WindowCovering|
|18|ContactSensor)|ContactSensor2_ContactSensor|
|19|MotionSensor|MotionSensor2_MotionSensor<br>MotionSensor2_LightSensor|
|20|Button|Button_StatelessProgrammableSwitch<br>Button2_Switch_VirtualSinglePress<br>Button2_Switch_VirtualDoublePress|
|21|TemperatureAndHumiditySensor)|TemperatureAndHumiditySensor2_TemperatureSensor<br>TemperatureAndHumiditySensor2_HumiditySensor|
|22|WaterDetector|WaterDetector_LeakSensor|
|23|UnlockedSensor|UnlockedSensor_MotionSensor|
|24|AcPartner|AcPartner_Switch_JoinPermission|

About Global:   
Some similar configurations and repeated multiple copies are boring things. So I provided a global writing method.   
The following two methods of writing are equivalent:   
```
....
"158d0001000008": {
    "DuplexSwitch_Switch_Left": {
        "name": "master bedroom room light",
        "serviceType": "Lightbulb"
    },
    "DuplexSwitch_Switch_Right": {
        "name": "study room light",
        "serviceType": "Lightbulb"
    }
}
....
```
```
....
"158d0001000008": {
    "Global": {
        "serviceType": "Lightbulb"
    },
    "DuplexSwitch_Switch_Left": {
        "name": "master bedroom room light"
    },
    "DuplexSwitch_Switch_Right": {
        "name": "study room light"
    }
}
....
```
In the same way, the following two kinds of writing are alse equivalent:   
```
....
"158d0001000003": {
    "Button_StatelessProgrammableSwitch": {
        "name": "living room button"
    }
}
....
```
```
....
"158d0001000003": {
    "Global": {
        "disable": true 
    },
    "Button_StatelessProgrammableSwitch": {
        "name": "living room button",
        "disable": false
    }
}
....
```
It also provides a higher level of way, the following three kinds of writing are alse equivalent:   
```
{
    "platforms": [{
        "platform": "MiAqaraPlatform",
        "gateways": {
            "6409802da3b3": "02i44k56zrgg578b",
            "f0b4299a5b2b": "2F92E7DA90C66B86",
            "f0b4299a77dd": "syu3oasva3uqd5qd"
        },
        "defaultValue": {
            "158d0001000007": {
                "SingleSwitch_Switch": {
                    "name": "living room light",
                    "ignoreWriteResult": true
                }
            },
            "158d0001000008": {
                "DuplexSwitch_Switch_Left": {
                    "name": "master bedroom room light",
                    "ignoreWriteResult": true
                },
                "DuplexSwitch_Switch_Right": {
                    "name": "study room light",
                    "ignoreWriteResult": true
                }
            }
        }
    }]
}
```
```
{
    "platforms": [{
        "platform": "MiAqaraPlatform",
        "gateways": {
            "6409802da3b3": "02i44k56zrgg578b",
            "f0b4299a5b2b": "2F92E7DA90C66B86",
            "f0b4299a77dd": "syu3oasva3uqd5qd"
        },
        "defaultValue": {
            "158d0001000007": {
                "SingleSwitch_Switch": {
                    "name": "living room light",
                    "ignoreWriteResult": true
                }
            },
            "158d0001000008": {
                "Global": {
                    "ignoreWriteResult": true
                },
                "DuplexSwitch_Switch_Left": {
                    "name": "master bedroom room light"
                },
                "DuplexSwitch_Switch_Right": {
                    "name": "study room light"
                }
            }
        }
    }]
}
```
```
{
    "platforms": [{
        "platform": "MiAqaraPlatform",
        "gateways": {
            "6409802da3b3": "02i44k56zrgg578b",
            "f0b4299a5b2b": "2F92E7DA90C66B86",
            "f0b4299a77dd": "syu3oasva3uqd5qd"
        },
        "defaultValue": {
            "Global": {
                "ignoreWriteResult": true
            },
            "158d0001000007": {
                "SingleSwitch_Switch": {
                    "name": "living room light"
                }
            },
            "158d0001000008": {
                "DuplexSwitch_Switch_Left": {
                    "name": "master bedroom room light"
                },
                "DuplexSwitch_Switch_Right": {
                    "name": "study room light"
                }
            }
        }
    }]
}
```

### defaultValue name configuration
If you want to specify the default name of the device, add a mapping table to your config.json like this.
```
{
    "platforms": [{
        "platform": "MiAqaraPlatform",
        "gateways": {
            "6409802da3b3": "02i44k56zrgg578b",
            "f0b4299a5b2b": "2F92E7DA90C66B86",
            "f0b4299a77dd": "syu3oasva3uqd5qd"
        },
        "defaultValue": {
            "158d0001000001": {
                "ContactSensor_ContactSensor": {
                    "name": "entrance door"
                }
            },
            "158d0001000002": {
                "MotionSensor2_MotionSensor": {
                    "name": "study room motion sensor"
                },
                "MotionSensor2_LightSensor": {
                    "name": "study room light sensor"
                }
            },
            "158d0001000004": {
                "TemperatureAndHumiditySensor_TemperatureSensor": {
                    "name": "living room temperature"
                },
                "TemperatureAndHumiditySensor_HumiditySensor": {
                    "name": "living room humidity"
                }
            }
        }
    }]
}
```

### defaultValue serviceType configuration
If you like to use Light Bulb type for Light Switch to make grandma Siri happy, you can set the following in the config.   
Currently only supported: SingleSwitch, DuplexSwitch, SingleSwitchLN, DuplexSwitchLN.   
**If you changed serviceType config, Please [clear register accessories](#clear-register-accessories).**   
```
{
    "platforms": [{
        "platform": "MiAqaraPlatform",
        "gateways": {
            "6409802da3b3": "02i44k56zrgg578b",
            "f0b4299a5b2b": "2F92E7DA90C66B86",
            "f0b4299a77dd": "syu3oasva3uqd5qd"
        },
        "defaultValue": {
            "158d0001000007": {
                "SingleSwitch_Switch": {
                    "name": "living room light",
                    "serviceType": "Lightbulb"
                }
            },
            "158d0001000008": {
                "Global": {
                    "serviceType": "Lightbulb"
                },
                "DuplexSwitch_Switch_Left": {
                    "name": "master bedroom room light"
                },
                "DuplexSwitch_Switch_Right": {
                    "name": "study room light"
                }
            },
            "158d10010000001": {
                "DuplexSwitch_Switch_Left": {
                    "name": "master bedroom room light",
                    "serviceType": "Lightbulb"
                },
                "DuplexSwitch_Switch_Right": {
                    "name": "study room light"
                }
            }
        }
    }]
}
```

### defaultValue disable configuration
If you want to disable accessories, you can add disable attribute to config.   
```
{
    "platforms": [{
        "platform": "MiAqaraPlatform",
        "gateways": {
            "6409802da3b3": "02i44k56zrgg578b",
            "f0b4299a5b2b": "2F92E7DA90C66B86",
            "f0b4299a77dd": "syu3oasva3uqd5qd"
        },
        "defaultValue": {
            "158d0001000007": {
                "SingleSwitch_Switch": {
                    "name": "living room light",
                    "serviceType": "Lightbulb"
                }
            },
            "158d0001000008": {
                "DuplexSwitch_Switch_Left": {
                    "name": "master bedroom room light",
                    "serviceType": "Lightbulb",
                    "disable": false
                },
                "DuplexSwitch_Switch_Right": {
                    "name": "study room light",
                    "serviceType": "Lightbulb",
                    "disable": true
                }
            },
            "158d0001000004": {
                "TemperatureAndHumiditySensor_TemperatureSensor": {
                    "name": "living room temperature"
                },
                "TemperatureAndHumiditySensor_HumiditySensor": {
                    "name": "living room humidity",
                    "disable": true
                }
            },
            "158d0001000012": {
                "Global": {
                    "disable": true
                }
            },
            "158d0001000015": {
                "Global": {
                    "disable": true
                },
                "MagicSquare_StatelessProgrammableSwitch_Flip90": {
                    "name": "study room magic square flip90",
                    "disable": false
                }
            }
        }
    }]
}
```

### defaultValue syncValue configuration
If you want to accessory value exact, you can set syncValue is true.   
when syncValue is true, accessory will synchronization value when homebridge call the get function. At the same time, it's going to waste more time.   
when syncValue is false, accessory will use the device last reported value. It's going to respond quickly.   
```
{
    "platforms": [{
        "platform": "MiAqaraPlatform",
        "gateways": {
            "6409802da3b3": "02i44k56zrgg578b",
            "f0b4299a5b2b": "2F92E7DA90C66B86",
            "f0b4299a77dd": "syu3oasva3uqd5qd"
        },
        "defaultValue": {
            "158d0001000007": {
                "SingleSwitch_Switch": {
                    "name": "living room light",
                    "serviceType": "Lightbulb",
                    "syncValue": true
                }
            }
        }
    }]
}
```

### defaultValue ignoreWriteResult configuration
If you control device always timeout, but in fact it's already working.   
you can set ignoreWriteResult is true.   
```
{
    "platforms": [{
        "platform": "MiAqaraPlatform",
        "gateways": {
            "6409802da3b3": "02i44k56zrgg578b",
            "f0b4299a5b2b": "2F92E7DA90C66B86",
            "f0b4299a77dd": "syu3oasva3uqd5qd"
        },
        "defaultValue": {
            "Global": {
                "ignoreWriteResult": true
            },
            "158d0001000007": {
                "SingleSwitch_Switch": {
                    "name": "living room light",
                    "serviceType": "Lightbulb",
                    "syncValue": true
                }
            }
        }
    }]
}
```
   
![](https://raw.githubusercontent.com/YinHangCode/homebridge-mi-aqara/master/images/syncValue.png)
   
### defaultValue disableNoResponse configuration
If you don't like "No Response", you can set disableNoResponse is true.   
When the device is no pesponse and disableNoResponse is true, the accessory value will auto jump back to before the control.   
```
{
    "platforms": [{
        "platform": "MiAqaraPlatform",
        "gateways": {
            "6409802da3b3": "02i44k56zrgg578b",
            "f0b4299a5b2b": "2F92E7DA90C66B86",
            "f0b4299a77dd": "syu3oasva3uqd5qd"
        },
        "defaultValue": {
            "Global": {
                "disableNoResponse": true
            },
            "158d0001000007": {
                "SingleSwitch_Switch": {
                    "name": "living room light",
                    "serviceType": "Lightbulb",
                    "syncValue": true
                }
            }
        }
    }]
}
```

### defaultValue other configuration
If you want to use Aqara lock,you need add some configuration like this
```
{
    "platforms": [{
        "platform": "MiAqaraPlatform",
        "gateways": {
            "6409802da3b3": "02i44k56zrgg578b",
            "f0b4299a5b2b": "2F92E7DA90C66B86",
            "f0b4299a77dd": "syu3oasva3uqd5qd"
        },
        "defaultValue": {
            "LockDeviceID": {
                "UserID": {
                    "name": "UserName"
                }
            }
        }
    }]
}
```
`UserID` is user identification from lock.The value can get from `Aqara Lock Plugin` in `MIHOME` APP,The user ID contains the ID type. The integer value obtained by dividing the user ID by 65536 is the ID type. The ID type value is: 1 fingerprint, 2 password, 3 proximity card, 5 check-in password.Example:
```
{
    "platforms": [{
        "platform": "MiAqaraPlatform",
        "gateways": {
            "6409802da3b3": "02i44k56zrgg578b",
            "f0b4299a5b2b": "2F92E7DA90C66B86",
            "f0b4299a77dd": "syu3oasva3uqd5qd"
        },
        "defaultValue": {
            "158d0001dd0289": {
                "65536": {
                    "name": "Administrator"
                },
                "65537": {
                    "name": "Finger"
                },
                "196608": {
                    "name": "Card"
                }
            }
        }
    }]
}
```  
   
## Some explanation
Button/Button2 StatelessProgrammableSwitch support SinglePress, DoublePress, LongPress.   
SingleButton86/DuplexButton86(Left, Right, Both) StatelessProgrammableSwitch only support SinglePress.   
MagicSquare(Flip90, Flip180, Move, TapTwice, ShakeAir, Rotate) StatelessProgrammableSwitch only support SinglePress.   
   
## Run it
homebridge -D   
   
## Clear register accessories
cd ~/.homebridge/accessories/   
mv cachedAccessories cachedAccessories_\`date '+%Y%m%d_%H%M%S'\`.bak   
echo [] > cachedAccessories   

## Version Logs

* 1.0.2 removed fake Switch, changes DualWallSwitch left click > one click, right click > two click, both click > long click
* 1.0.1 integrating Fakegato
* 1.0.0 first release after Fork
