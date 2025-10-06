let frames = [
assets.image`Sunset`,
assets.image`sunset 2`,
assets.image`sunset 3`,
assets.image`sunset 2`
]
for (let index = 0; index < 2; index++) {
    for (let value of frames) {
        scene.setBackgroundImage(value)
        pause(700)
    }
}
scene.setBackgroundImage(assets.image`Slot`)
