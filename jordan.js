var data = {
    qnum:0,
    questions:[
        {
            title:"What Comes After A?",
            answer:"B",
            bgcolor:"yellow",
            img:"http://placekitten.com/100/100"
        },
        {
            title:"Is 5 bigger than 4?",
            answer:"Yes",
            bgcolor:"#ABC",
            img:"http://placekitten.com/200/200"
        },
        {
            title:"What is the colour of a Banana?",
            answer:"Yellow",
            bgcolor:"rgb(2,150,232)",
            img:"http://placekitten.com/300/300"
        },
        {
            title:"Billie Jean Billie Jean?",
            answer:"CHRISTIAN DIOR DIOR",
            bgcolor:"red",
            img:"https://cdn.britannica.com/13/12313-004-03D84561/Christian-Dior-1957.jpg"
        }
    ]
}

console.log(data); 

   function Start(){
       document.querySelector(".header_q").innerText = data.questions[data.qnum].title; 
       document.body.style.backgroundColor = data.questions[data.qnum].bgcolor; 
       document.querySelector("#header_r").innerHTML = "<img src=' "+data.questions[data.qnum].img+" '>";
    }

    function CheckAnswer(){ //checking if what they type is equivilent to a string of your answer.

    var myInp = document.querySelector(".header_i").value; 
    console.log(myInp); 

    if(myInp === data.questions[data.qnum].answer){
        document.querySelector("#header_r").innerHTML = "<h1>Correct!</h1>";

        data.qnum++;
        document.querySelector(".header_q").innerText = data.questions[data.qnum].title; 
        document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
        document.querySelector("#header_r").innerHTML = "<img src=' "+data.questions[data.qnum].img+"'/>"; 

        audiodos.play();
        Correct(); 
        // //changing the question to the next question
        // if(qnum === 1) {
        // qnum++;
        // document.querySelector(".header_q").innerText = "Is 5 bigger than 4?"; 
        // answer = "Yes"; 
        // } else if(qnum === 2){
        //     qnum++; 
        //     document.querySelector(".header_q").innerText = "What is the colour of a banana?";
        //     answer = "Yellow";
        // }
    } else { 
        document.querySelector("#header_r").innerHTML = "<h1>WRONG!</h1>";
        changeHealth();  
        var audio = new Audio('minecraft.mp3');
audio.play();
Incorrect(); 
    }
}

Start(); 