function setBackground(choice){
    let choices ={
        'audiotag1' : "Gradient1.jpg",
        'audiotag2' : "Gradient2.jpg",
        'audiotag3' : "Gradient3.jpg",
        'audiotag4' : "Gradient4.jpg"
    };
    document.getElementById('background').setAttribute("src", "./images/" +choices[choice] );
}

function playMusic(choice){
    setBackground(choice);
    var audios = document.getElementsByClassName(choice);
    audios[0].play();
    audios[1].play();
    document.getElementById('warn').style.display = "none";
    document.getElementById('default_music').style.display = "none";
    document.getElementById('MusicUpload').style.display = "none";
    document.getElementsByClassName("a-enter-vr-button")[0].style.display = "inherit";
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
        x.setAttribute("position", ""+(27*Math.cos(i*6.28319/numBars))+" "+1.6+" "+(27*Math.sin(i*6.28319/numBars)));
        x.setAttribute("color", getRandomColor());
        scene.appendChild(x);
    }
    const numCubes = 15;
    for(i=0; i<numCubes; i++){
        let y = document.createElement("a-box");
        y.setAttribute("class", "spazCube");
        y.setAttribute("position", ""+(160*(Math.cos(i*6.28319/numCubes)))+" "+75+" "+(160*Math.sin(i*6.28319/numCubes)));
        y.setAttribute("rotation", ""+8*i+ " "+10*i+ " " + 12*i);
        y.setAttribute("scale",  "1 1 1");
        y.setAttribute("color", getRandomColor());
        scene.appendChild(y);

        let z = document.createElement("a-box");
        z.setAttribute("class", "spazCube");
        z.setAttribute("position", ""+(80*(Math.cos(i*6.28319/numCubes)))+" "+100+" "+(80*Math.sin(i*6.28319/numCubes)));
        z.setAttribute("rotation", ""+8*i+ " "+10*i+ " " + 12*i);
        z.setAttribute("scale",  "1 1 1");
        z.setAttribute("color", getRandomColor());
        scene.appendChild(z);
    }
}

function update(frequencyData){
    //there is 1024 indexes in the array
    var bars = document.getElementsByClassName("soundBars");
    for(i=0; i<bars.length; i++){
        bars[i].setAttribute("scale", "1 "+  ((3+(frequencyData[i]))/20) + " 1");
    }

    var cubes = document.getElementsByClassName("spazCube");
    for(i=0; i<cubes.length; i++){

        cubes[i].setAttribute("scale", ""+(Math.sqrt(frequencyData[i]))+" "
                                       +(Math.sqrt(frequencyData[i*5]))+" "
                                       +(Math.sqrt(frequencyData[i*10])));
    }
};
