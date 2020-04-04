class Reproductor{
    constructor(video,playing,vol){
        this.video=video
        this.playing=playing;
        this.vol=vol;

    }

    playPause(reproductor,boton) {
        
        if(reproductor.playing===false){

            reproductor.video.play();
            
            boton.innerHTML='&#9616;&#9616;'//"❚❚"
            
        }else{
            reproductor.video.pause();
            boton.innerHTML="&#9654;"
            
        }
        
    }

    setVolume(reproductor){
        reproductor.video.volume=reproductor.vol;

    }
    fastForward(reproductor){
        reproductor.video.currentTime+=5;

    }

    rewind(reproductor){
        reproductor.video.currentTime-=5;

    }

}
//EVENTOS

// PLAY - PAUSE
document.getElementById('play-pause').addEventListener('click', function(){
    let vid = document.getElementById('video');
    let play=document.getElementById('video').paused;    
    let vol = document.getElementById('volumen').value/100;
    let boton=document.getElementById('play-pause')

    const reproductor = new Reproductor(vid,!play,vol);
    reproductor.playPause(reproductor,boton);
    

    console.log('reproducir', reproductor);


})
// VOLUMEN
document.getElementById('volumen').addEventListener('change', function(e){
    let vid = document.getElementById('video');
    let play=document.getElementById('video').paused;    
    let vol = e.target.value/100;

    const reproductor = new Reproductor(vid,!play,vol);
    reproductor.setVolume(reproductor);

    console.log(e.target.value)
})

//FAST FORWARD

document.getElementById('fast-forward').addEventListener('click', function () {
    let vid = document.getElementById('video');
    let play=document.getElementById('video').paused;    
    let vol = document.getElementById('volumen').value/100;

    const reproductor = new Reproductor(vid,!play,vol);
    reproductor.fastForward(reproductor);

    
})

//REWIND

document.getElementById('rewind').addEventListener('click', function() {
    let vid = document.getElementById('video');
    let play=document.getElementById('video').paused;    
    let vol = document.getElementById('volumen').value/100;

    const reproductor = new Reproductor(vid,!play,vol);
    reproductor.rewind(reproductor);
    
})