
function start(choice) {

     var audio = document.getElementsByClassName(choice)[0];
     var ctx = new AudioContext(); //Does not work with IOS browsers

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
     }
