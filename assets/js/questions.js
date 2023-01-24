var startButton = document.querySelector("#start");
var questionForm = document.querySelector("#questions");
var choicesForm = document.querySelector("#choices");
var endScreenPage = document.querySelector("#end-screen");
var questionTitle = document.querySelector("#question-title");
var choices = ["Kenny","John","Steve"];

function questions(todo) {
    questionTitle.textContent = "What is your Name?";
    choices.forEach(function(todo) {
        let li = document.createElement("li");
        li.textContent = todo;
        choices.appendChild(li);
    })
}
startButton.addEventListener("click",function(event){
    event.preventDefault();
    if (event.keyCode ===13){
        choices.push(questionTitle.textContent);
    }
    console.log(questions);
});
questions();