
function start(choice) {
    var ctx = new AudioContext();
    var audio = document.getElementsByClassName(choice)[0];
    var audioSrc = ctx.createMediaElementSource(audio);
    var analyser = ctx.createAnalyser();


    audioSrc.connect(analyser);
    frequencyData = new Uint8Array(analyser.frequencyBinCount);

    spawn();

    // loop
    function render() {
        requestAnimationFrame(render);
        analyser.getByteFrequencyData(frequencyData);

        //console.log(frequencyData);
        update(frequencyData);
    }
    playMusic(choice);
    render();
};

var soundUp = document.getElementById("songUpload");
soundUp.onchange =  function(e){
    var sounds = document.getElementsByClassName("audiotag4");
    let x = window.URL.createObjectURL(this.files[0]);
    sounds[0].src = x;
    sounds[1].src =x;

    start("audiotag4");
}
