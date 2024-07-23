
   
function decline(){
alert("Question Declined");
}

let questions = [
    "how old are you",
    "what is your name",
    "are you happy right now",
    "what is your profession",
    "are you a programmer",
    "how many languages do you know",
    "are you an engineer",
    "what is your age",
    "who is the cuurent owner of tesla",
    "who is the prime minister of india"
]

function accept(){
    let question = document.querySelector("#in").value;
    question = question.toLowerCase();
    if(questions.includes(question)) window.alert(" Question accepted ");
    else window.alert("Question  rejected ");
}
