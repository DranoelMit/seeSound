
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

     document.getElementById('song').onchange = function (evt) {
         var tgt = evt.target || window.event.srcElement,
             files = tgt.files;

         // FileReader support
         if (FileReader && files && files.length) {
             var fr = new FileReader();
             fr.onload = function () {
                  let x = fr.result;
                 document.getElementById("a41").setAttribute("src", x);
                 document.getElementById("a42").setAttribute("src", x);
             }
             fr.readAsDataURL(files[0]);
             start('audiotag4');
         }

         // Not supported
         else {
             // fallback -- perhaps submit the input to an iframe and temporarily store
             // them on the server until the user's session ends.
         }
     }

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
