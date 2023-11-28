function Quiz() {
    this.questions = [];
    this.nbCorrects = 0;

    this.addQuestion = function(question) {
        this.questions.push(question);
    }

    this.launch = function() {

        //for(let i=0; i<this.questions.length;i++) {
        this.questions.forEach((question) => {
            let answerUser = prompt(question.getBody());
            if(question.isCorrectAnswer(answerUser)) {
                console.log("Gagné!"); 
                this.nbCorrects++;
            }
            else { 
                console.log("Perdu!");
            }
        })

        this.showResults();
    }

    this.showResults = function() {
        let msg = "Résultats:\n" + this.nbCorrects + " sur " + this.questions.length + " correctes";
        alert(msg);
    }
}

function Question(title, answers, answerCorrect) {
    this.title = title;
    this.answers = answers;
    this.answerCorrect = answerCorrect;

    this.getBody = function() {
        let body = this.title.toUpperCase() + "\n";

        for(let i=0;i<this.answers.length;i++) {
            body += (i+1) + ". " + this.answers[i] + "\n";
        }
        
        return body;
    },

    this.addAnswer = function(answer) {
        // this.answers[this.answers.length] = answer;
        this.answers.push(answer);
    },

    this.isCorrectAnswer = function(answerUser) {
        if(answerUser == this.answerCorrect) {
            return true;
        }
        else {
            return false;
        }
    }
};

let quiz = new Quiz();

let question1 = new Question("Quel est l'âge du capitaine?", [42, 101, 18], 1);
quiz.addQuestion(question1);

let question2 = new Question("Quelle est la différence entre un pigeon?", ["Glouuuu", "Uh?", "La longueur des pattes"], 3);
quiz.addQuestion(question2);

let question3 = new Question("Qu'est ce qui est jaune et qui attend?", ["Homer Simpson", "Jonhatan?", "Un citron pressé"], 2);
quiz.addQuestion(question3);

console.log(quiz);

//quiz.launch();

//let elNbCorrects = document.getElementById("nbcorrects");
let elNbCorrects = document.querySelectorAll("#nbcorrects");
console.log(elNbCorrects);

console.log(elNbCorrects.innerHTML);
elNbCorrects.innerHTML = quiz.nbCorrects;

//let elNbQuestions = document.getElementsByClassName("nbquestions");
let elNbQuestions = document.querySelectorAll(".nbquestions");
console.log(elNbQuestions);

//for(let i=0; i<elNbQuestions.length;i++) {
//    elNbQuestions[i].textContent = quiz.questions.length;
//}

elNbQuestions.forEach(function(elNbQuestions) {
    elNbQuestions.textContent = quiz.questions.length;
});