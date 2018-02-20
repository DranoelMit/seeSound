
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
soundUp.onchange = function(){
     var sounds = document.getElementsByClassName('audiotag4');
     var reader = new FileReader();
     reader.onload = function(e) {
          let x = this.result;
          sounds[0].src = x;
          sounds[1].src = x;
    };
    reader.readAsDataURL(this.files[0]);
     start("audiotag4");
}

//
// var sound1 = document.getElementById('a41');
// var sound2 = document.getElementById('a42');
//
//   var reader = new FileReader();
//   reader.onload = function(e) {
//     sound1.src = this.result;
//     sound2.src = this.result;
//
//
//     };
//   reader.readAsDataURL(soundFile.files[0]);
//   start('audiotag4');
// }
//      //     // FileReader support
//      //     if (songFile){
     //
     //              let x = URL.createObjectURL(songFile);
     //             document.getElementById("a41").setAttribute("src", x);
     //             document.getElementById("a42").setAttribute("src", x);
     //
     //         start('audiotag4');
     //     }
     //
     //     // Not supported
     //     else {
     //         // fallback -- perhaps submit the input to an iframe and temporarily store
     //         // them on the server until the user's session ends.
     //     }
     // }

//
// function fileCheck(songFile){
// console.log(songFile);
//      var audio4s = document.getElementsByClassName("audiotag4");
//
//      for(i=0; i<audio4s.length; i++){
//           var source = document.createElement("source");
//                source.setAttribute("src", songFile.value);
//           audio4s[i].appendChild(source);
//      }
//      start("audiotag4");
// }
