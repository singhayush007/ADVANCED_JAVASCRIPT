// POLYMORPHISM 

// In Polymorphism , poly means = many , morph means forms and polymorphism = many form .

// It allows different classes to define methods with the same name but different behaviour.(or we can say that has more than one form).

// image a play() button:

// On a video , it plys the video
// on a music player, it plays the music.
// On a game , it starts the game.


// EG : 

class MediaPlayer {
    play(){
        console.log("Playing Media...")
    }
}

class Video extends MediaPlayer {
    play(){
        console.log("Playing the Video...")
    }
}

class Music extends MediaPlayer {
    play(){
        console.log("Playing the Music..")
    }
}

let video = new Video();
let music = new Music();
video.play();
music.play();