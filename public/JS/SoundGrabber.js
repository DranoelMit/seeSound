
window.onload = function() {
     var ctx = new AudioContext();
       var audio = document.getElementsByTagName("audio")[0];
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
       //audio.play();
       render();
     };
