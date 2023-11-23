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

let question1 = new Question("Quel est l'âge du capitaine?", [42, 101, 18], 1);

console.log(question1);

question1.addAnswer(11);
question1.addAnswer(22);
console.log(question1);

let bodyQuestion1 = question1.getBody();
console.log(bodyQuestion1);

let answerUser = prompt(bodyQuestion1);
if(question1.isCorrectAnswer(answerUser)) {
    console.log("Gagné !"); 
}
else { 
    console.log("Perdu");
}

let question2 = new Question("Quelle est la différence entre un pigeon?", ["Glouuuu", "Uh?", "La longueur des pattes"], 3);

answerUser = prompt(question2.getBody());
if(question2.isCorrectAnswer(answerUser)) {
    console.log("Gagné !"); 
}
else { 
    console.log("Perdu");
}