input.onGesture(Gesture.TiltRight, function () {
    music.playMelody("B A G A G F A C5 ", 300)
    radio.sendNumber(2)
})
input.onGesture(Gesture.TiltLeft, function () {
    music.playMelody("E B C5 A B G A F ", 300)
    radio.sendNumber(3)
})
input.onGesture(Gesture.Shake, function () {
    allumer_la_lampe = !(allumer_la_lampe)
    if (allumer_la_lampe) {
        pins.analogWritePin(AnalogPin.P0, 1023)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    radio.sendNumber(1)
})
let allumer_la_lampe = false
radio.setGroup(300)
