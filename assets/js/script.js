var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerEl = document.getElementById('hidden-questions')
var questionElement = document.getElementById('questions')
var answerButtonElement = document.getElementById('answer-buttons')
var timePara = document.querySelector('.countdown')
var wins = localStorage.getItem("wins") || 0;
var losses = localStorage.getItem("losses") || 0;
// winsSpan.textContent = wins;
// lossesSpan.textContent = losses;

var shuffledQuestions, currentQuestionsIndex



startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionsIndex++
    setNextQuestion()
})

var countdown;
var timeLeft =100;

function startTimer() {
    countdown = setInterval(function(){
        console.log(timeLeft);
        timeLeft--;
        timePara.textContent=timeLeft
        if(timeLeft<=0){
                clearInterval(countdown);
                console.log("Lost!")
        }
    },1000)
}


function startQuiz() {
    console.log('Started')
    startButton.classList.add('hide')
    questionContainerEl.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0

    console.log("chosenquestions:", shuffledQuestions)

    setNextQuestion()
    startTimer();
}

function setNextQuestion(){
    resetState()
    visiblequestion(shuffledQuestions[currentQuestionsIndex])
}
var theCorrectAnswer
function visiblequestion(question) {
    theCorrectAnswer = shuffledQuestions[currentQuestionsIndex].correctAnswer
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer
        button.setAttribute("data-status", answer.correct)
        button.classList.add("btn")
        // if (answer.correct) {
        //     button.dataset.correct = answer.correct
        // }
        button.addEventListener("click", selectAnswer)
        answerButtonElement.appendChild(button)
    })
        // console.log(typeof questions)
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(event){
    var element = event.target 
    if(element.matches(".btn")){
    console.log(event.target.textContent)
    console.log(theCorrectAnswer)
        if (event.target.textContent === theCorrectAnswer){          
        }else {
            timeLeft -= 10;
        }
    }
    if(shuffledQuestions.length > currentQuestionsIndex +1) {
    nextButton.classList.remove('hide')
    }else {
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
        clearInterval(countdown)
    }
}

const questions = [
    {
        question: "1+1",
        answers: [ '2', '3', '5', '6' ],
        correctAnswer: '2'
    },
    {
        question: "3+3",
        answers: [ '6', '3', '5', '1' ],
        correctAnswer: '6'
    },
    {
        question: "4+4",
        answers: [ '6', '4', '5', '8' ],
        correctAnswer: '8'
    },
]

//check (event.target.textContent) string to see if it equals the correctAnswer string (answer ===correctAnswer)
//highhighscore (btn) header that changes in real time.

//countdown - in the checkWin function, "clearInenterval(countdown);" to stop the clock

//show results
//save local storage


//if incorrect, subtract time for countdown countdown


//Countdown countdown setup to lose [timePara]

//start game function


