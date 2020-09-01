# Arduino Temperature Logger

## Description
This is a hobby project developed by me to log the maximum and minumum temperatures in my apartment using Arduino.

## Requirements
- Arduino (I am using Arduino Uno, I don't know will there any differences in terms of code when using any other Arduino board)
- Temperature Sensor (I am using TMP36 for the project but will other sensors supported by `johnny-five`)

## Docs
### GET/currentTemperature
To retrieve current temperature data from the sensor
### type[optional]
Send type in body as raw JSON as `C, K or F`. If not set default data will be in Celsius (`C`).

### returns
```
{
    "type": "C",
    "temperature": 38,
    "timestamp": "2020-09-01T15:46:58+03:00"
}
```