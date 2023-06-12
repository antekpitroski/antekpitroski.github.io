

// import kaboom lib
import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("kartka","kartkas.png")

loadSprite("balwan","beznaz.png")

loadSound("muzyka","Przybiezeli.mp3")

add([
    sprite("kartka")
])

const balwan = add([
    sprite("balwan"),
    pos(0,180)
])

let wprawo = true

balwan.onUpdate(() => {
     if(wprawo && balwan.pos.x < 600)
     balwan.pos.x += 1
     else if(!wprawo && balwan.pos.x > 50)
     balwan.pos.x -=1

     else wprawo ^=true


})

onMouseRelease(()=>play("muzyka"))
