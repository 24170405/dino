input.onButtonPressed(Button.A, function () {
    Jugador_Arriba.change(LedSpriteProperty.Y, -1)
    Jugador_Abajo.change(LedSpriteProperty.Y, -1)
    music.playTone(523, music.beat(BeatFraction.Half))
    basic.pause(1000)
    Jugador_Arriba.change(LedSpriteProperty.Y, 1)
    Jugador_Abajo.change(LedSpriteProperty.Y, 1)
    game.addScore(1)
})
input.onButtonPressed(Button.B, function () {
    Jugador_Arriba.change(LedSpriteProperty.X, -1)
    Jugador_Arriba.change(LedSpriteProperty.Y, 1)
    music.playTone(523, music.beat(BeatFraction.Half))
    basic.pause(1000)
    Jugador_Arriba.change(LedSpriteProperty.X, 1)
    Jugador_Arriba.change(LedSpriteProperty.Y, -1)
    game.addScore(1)
})
let Jugador_Abajo: game.LedSprite = null
let Jugador_Arriba: game.LedSprite = null
Jugador_Arriba = game.createSprite(1, 3)
Jugador_Abajo = game.createSprite(1, 4)
let Obstaculo = game.createSprite(4, 4)
basic.forever(function () {
    Obstaculo.change(LedSpriteProperty.X, -1)
    basic.pause(750)
    if (Obstaculo.get(LedSpriteProperty.X) == 0) {
        Obstaculo.set(LedSpriteProperty.X, 4)
        Obstaculo.set(LedSpriteProperty.Y, randint(4, 3))
    }
    if (Obstaculo.isTouching(Jugador_Arriba) || Obstaculo.isTouching(Jugador_Abajo)) {
        music.playTone(131, music.beat(BeatFraction.Whole))
        game.gameOver()
        game.setScore(0)
    }
})
