function setBackground(choice)
{
     document.getElementById('background').setAttribute("src", "./images/choice" + "360.jpg" );
}

function playMusic(choice){
     //setBackground(choice);
     var audios = document.getElementsByTagName('audio');

     for(i=0; i<audios.length;i++){
     audios[i].play();
     }
     document.getElementById('warn').style.display = "none";
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
     const numBars =100;
     for(i=0; i<numBars; i++){
          let x = document.createElement("a-box");
          x.setAttribute("class", "soundBars");
          //54 is just the distance from the camera that looks nice. 6.283 is 2PI  #magicNumbers
          x.setAttribute("position", ""+(54*Math.cos(i*6.28319/numBars))+" "+.5+" "+(54*Math.sin(i*6.28319/numBars)));
          x.setAttribute("color", getRandomColor());
          scene.appendChild(x);
     }
     //not twerking
     let y = document.createElement("a-box");
     y.setAttribute("class", "spazCube");
     y.setAttribute("position", "50 .5 0");
     y.setAttribute("color", getRandomColor());
     scene.appendChild(y);
}

function update(frequencyData){
//there is 1024 indexes in the array
var bars = document.getElementsByClassName("soundBars");
for(i=0; i<bars.length; i++){
     bars[i].setAttribute("scale", "1 "+"1" + Math.pow(frequencyData[i], 1/2.5));
}

var cubes = document.getElementsByClassName("spazCube");
for(i=0; i<cubes.length; i++){
     cubes[i].setAttribute("scale", ""+frequencyData[Math.random()*frequencyData.length]/10+" "+frequencyData[Math.random()*frequencyData.length]/10+" "+ frequencyData[Math.random()*frequencyData.length]/10);
}
};
