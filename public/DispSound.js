function playMusic(){
     console.log("reached play");
     var audios = document.getElementsByTagName('audio');

     for(i=0; i<audios.length;i++){
     audios[i].play();
     }
     document.getElementById('playForm').style.display = "none";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function spawn(){
     var scene = document.getElementsByTagName("a-scene")[0];
     const numBars =360;
     for(i=0; i<numBars; i++){
          let x = document.createElement("a-box");
          x.setAttribute("class", "soundBars");
          x.setAttribute("position", ""+(18*Math.cos((numBars/2)-i)*Math.PI)+" "+.5+" "+(18*Math.sin(numBars/2 -i)*Math.PI));
          x.setAttribute("color", getRandomColor());
          x.setAttribute("scale","1 "+  "1 " + frequencyData[1024/i]/25);
          scene.appendChild(x);
     }
}

function update(frequencyData){
//there is 1024 indexes in the array
var bars = document.getElementsByClassName("soundBars");
for(i=0; i<bars.length; i++){
     bars[i].setAttribute("scale", "1 "+"1" + frequencyData[i]/20);
}
};
