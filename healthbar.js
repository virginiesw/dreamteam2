var health_state = { 
    width:300
}

function changeHealth(){ 
    health_state.width -= 20; 
    document.querySelector(".healthbar").style.width = health_state.width + "px";
}

var audio = new Audio('minecraft.mp3');
audio.play();

var audiodos = new Audio('wow.mp3');
audiodos.play();

