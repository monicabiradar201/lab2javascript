function Quiz (questions){
    this.score=0
    this.questions=questions
    this.questNumber=0
}
    function Question(title, options, answer) {
        this.title = title;
        this.Options = option;
        this.answers = answer;
    }
    isCorrect(option); {
        return this.answer === option;
    }

function showScores() {
    let res = "<h1>Result</h1>"
    res += "<h2 id='score'>Your score is" + quiz.score + "and mark percentage is" + (quiz.score / questions.length * 100) + "</h2>"
    let quizElem = document.getElementById("quiz")
    quizElem.innerHTML = res
}
function handleOptionClicked(btnNumber, option) {
    let btn = document.getElementById(btnNumber)
    btn.onclick = function () {
        quiz.checkAnswer(options)
        loadQuestions()
    }
}

function showProgress() {
    let curr = quiz.questNumber + 1;
    let elem = document.getElementById("progress")
    elem.innerHtml = `Questions ${curr} of ${quiz.questions.length}`
}
function loadQuestions() {

    if (quiz.isEnded()) {
        showScores()

    } else {
        let questionTitle = document.getElementById("questions")
        questionTitle.innerHtml = quiz.getQuestionIndex()

        let options = quiz.getQuestionIndex().option
        for (let i = 0; i < option.length; i++) {
            let optnBtn = document.getElementById("choices" + i)
            optnBtn.innerHTML = option[i]
            handleOptionsClicked("btn" + i, options[i])
        }
        showProgress()
    }

}
let questions = [
    new Question("Javascript Supports", ["Function", "XHTML", "CSS", "HTML"], "Functions"),
    new Question("Which is used for styling", ["Java script", "HTML", "CSS", "jquery"], "CSS"),
    new Question("Which is not js framework ", ["nodejs", "Angular", "CSS", "Django"], "Django"),
    new Question("Which is used to connect DB", ["PHP", "HTML", "CSS", "All"], "PHP"),
]
let quiz = new Quiz(questions)

loadQuestions()