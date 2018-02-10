
function moveCube(frequencyData){
var box = document.getElementById("testCube");
box.setAttribute("scale", "1" + " 1" +  frequencyData[40]/20 );
};



function playMusic(){
     console.log("reached play");
     var audios = document.getElementsByTagName('audio');

     for(i=0; i<audios.length;i++){
     audios[i].play();
     }
     document.getElementById('playForm').style.display = "none";
}
