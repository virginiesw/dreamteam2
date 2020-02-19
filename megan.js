var data = {
    qnum:0,
    questions:[
        {
            title:"What is the best companion animal?",
            answer:"Cat",
            bgcolor:"blue",
            img:"http://placekitten.com/100/100"
        },
        {
            title:"Are cats better than dogs?",
            answer:"Yes",
            bgcolor:"#DAD",
            img:"http://placekitten.com/125/125"
        },
        {
            title:"Do cats bark?",
            answer:"No",
            bgcolor:"rgb(2,150,230)",
            img:"http://placekitten.com/150/150"
        },
        {
            title:"Do you like cats?",
            answer:"Yes",
            bgcolor:"pink",
            img:"http://placekitten.com/175/175"
        }
    ]
}

//var answer = "Cat";
//var qnum = 0;

// // var questions = [
//     "What is the best companion animal?",
//     "Are cats better than dogs?",
//     "Do cats bark?",
//     "Do you like cats?",
// ];

// var answers = [
//     "Cat",
//     "Yes",
//     "No",
//     "Yes"
// ];

// var bgcolor = [
//     "blue",
//     "#DAD",
//     "rgb(2,150,230)",
//     "red"
// ];

// var imgs = [
//     "http://placekitten.com/100/100",
//     "http://placekitten.com/200/200",
//     "http://placekitten.com/300/300",
//     "http://placekitten.com/150/150"
// ];

console.log(data, window);

function Start(){
    document.querySelector("#question").innerText = data.questions[data.qnum].title;
        document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
        document.querySelector("#result").innerHTML = "<img src='"+data.questions[data.qnum].img+"' />";
}

function CheckAnswer(){
    var myInp = document.querySelector("#textbox").value;
    console.log(myInp);

    //check if what they typed is equivalent to a string of your answer
    //if (myInp === "Cat" || myInp === "cat")

    if (myInp === data.questions[data.qnum].answer){
        //alert("Correct!");
        document.querySelector("#result").innerHTML = "<h2>Correct!</h2>";

        data.qnum++;
        document.querySelector("#question").innerText = data.questions[data.qnum].title;
        document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
        document.querySelector("#result").innerHTML = "<img src='"+data.questions[data.qnum].img+"' />";
        // if(qnum === 1){
        //     qnum++;
        //     document.querySelector("#question").innerText = "Are cats better than dogs?";
        //     answer = "Yes";
        // } else if(qnum === 2){
        //     qnum++;
        //     document.querySelector("#question").innerText = "Do cats bark?";
        //     answer = "No";
        // }

    } else {
        //alert("Incorrect!");
        document.querySelector("#result").innerHTML = "<h2>Incorrect!</h2>";
    }
}

Start();