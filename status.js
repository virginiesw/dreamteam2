var cur_state = 0;
var status_state = [
        {
            text:"Good", 
            bgcolor:"green"
        },
        {
            text:"Bad", 
            bgcolor:"red"
        },
        {
            text:"Pending...",
            bgcolor:"orange"
        }
    ]

function ChangeState(){
    // modify the state
    cur_state = 2; 
    //modify the UI
    document.querySelector("#statusbar").style.backgroundColor = status_state[cur_state].bgcolor;
    document.querySelector("#status_text").innerText = status_state[cur_state].text;
}

function Correct() {
    cur_state = 0; 
    document.querySelector("#statusbar").style.backgroundColor = status_state[cur_state].bgcolor;
    document.querySelector("#status_text").innerText = status_state[cur_state].text;
}

function Incorrect() {
    cur_state = 1; 
    document.querySelector("#statusbar").style.backgroundColor = status_state[cur_state].bgcolor;
    document.querySelector("#status_text").innerText = status_state[cur_state].text;
}