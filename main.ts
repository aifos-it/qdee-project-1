let DISTANCE = 0
basic.showIcon(IconNames.Happy)
qdee.qdee_Init()
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    DISTANCE = qdee.qdee_ultrasonic(qdee.ultrasonicPort.port1)
    if (DISTANCE < 40 && DISTANCE > 0) {
        qdee.qdee_setMotorSpeed(50, -50)
        basic.pause(100)
    } else {
        qdee.qdee_setMotorSpeed(50, 50)
    }
})
