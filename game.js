alert("Welcome to the Blob Game")

let initialBlob= {
    position: {
        x: 50,
        y: 50
    },
    height: 20,
    speed: 3,
}

let secondBlob= {
    position: {
        x: 350,
        y: 350
    },
    height: 20,
    speed: 2,
}


let blobs = [initialBlob, secondBlob]

function drawBlob (){
    console.log("Aboout to create a new blob")
    let newRandomPosition = Math.floor(Math.random() * 550) +1
    let newBlob = {
        height: 20,
        speed: 3,
        position: {
            x: newRandomPosition,
            y: newRandomPosition
        }
    }
    blobs.push(newBlob)
}

let createBlobButton = document.getElementById('create-blob')
createBlobButton.addEventListener('click', drawBlob)

console.log(blobs);

function setup(){
    createCanvass(600,600);
    background(200)

}

function draw(){
    for (var i=0, i<blobs.length; i++){
        fill(255,0,0)
        ellipse(blobs[i].position.x,blobs[i].position.y,blobs[i].height, blobs[i].height);
    }

}
