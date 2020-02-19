var data = {
    qnum:0,
    questions:[
        {
            title:"What colour is an orange?",
            answer:"orange",
            bgcolour:"orange",
            img:"http://placekitten.com/100/100"
        },
        {
            title:"Are apples round?",
            answer:"yes",
            bgcolour:"purple",
            img:"http://placekitten.com/200/200"
        }, 
        {
            title:"Are grapefruits pink?",
            answer:"sometimes",
            bgcolour:"pink",
            img:"http://placekitten.com/300/300"
        }, 
        {
            title:"Dp bananas have seeds?",
            answer:"yes",
            bgcolour:"yellow",
            img:"http://placekitten.com/400/400"
        }
    ]
}

// var answer = "orange";
var qnum = 0;  

var questions = [
    "What colour is an orange?",
    "Are apples round?",
    "Are grapefruits pink?",
    "Do bananas have seeds?"
];

var answers = [
    "orange",
    "yes",
    "sometimes", 
    "yes"
]; 

var bgcolour = [
    "orange",
    "purple",
    "pink",
    "yellow"
];

var img = [
    "http://placekitten.com/100/100",
    "http://placekitten.com/200/200",
    "http://placekitten.com/300/300",
    "http://placekitten.com/400/400"
];


console.log(data, window);


function Start(){
    document.querySelector("#text").innerText = data.questions[data.qnum].title;
    document.body.style.backgroundColor = data.questions[data.qnum].bgcolour;
    document.querySelector("#result").innerHTML = "<img src='"+data.questions[data.qnum].img+"' />"; 

}

function CheckAnswer(){
    //if(???)
    /*
        check if what they typed is equivalent to a string of your answer..
    */
   var myInp = document.querySelector("#answer").value;
   console.log(myInp);

   if(myInp === data.questions[data.qnum].answer){
        //  alert("Correct!");
       document.querySelector("#result").innerHTML = "<h1>Correct</h1>";

       data.qnum++;
       document.querySelector("#text").innerText = data.questions[data.qnum].title;
       document.body.style.backgroundColor = data.questions[data.qnum].bgcolour;
       document.querySelector("#result").innerHTML = "<img src='"+data.questions[data.qnum].img+"' />";
       // changing question to next question 
        // if (qnum === 1){
        //     qnum++;
        //     document.querySelector("#text").innerText = "Are apples round?";
        //     answer = "yes";
        // } else if(qnum === 2){
        //     qnum++;
        //     document.querySelector("#text").innerText = "Are grapefruits pink";
        //     answer = "sometimes";
        // }
   } else {
    //    alert("Wrong!");
       document.querySelector("#result").innerText = "<h1>Wrong</h1>";
   }
}

Start(); //add this here so that the first question has its background color and picture 