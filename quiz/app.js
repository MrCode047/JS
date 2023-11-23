let questions = [`Quel est l'âge du capitaine?
1. 42
2. 101
3. 18`,

`Quelle est la différence entre un pigeon?
1. Glouuuu
2. Uh?
3. La longueur des pattes`,

`Qu'est ce qui est jaune et qui attend?
1. Homer Simpson
2. Jonhatan
3. Un citron pressé`,

`Ça fait combien 1 + 1?
1. 2
2. 11
3. 3`
]

let reponses = [1,3,2,1];

let compteurBonnesReponses = 0;

alert(
  "Bienvenue sur ce quiz !" +
    "\n" +
    questions.length +
    " questions te seront posées."
);

alert("Es-tu prêt ?" + "\nC'est parti !");

// i=i+1 -> i+=1 -> i++
for (let i = 0; i < questions.length; i++) {
  let intituleQuestion = "Question " + (i+1) + "/" + questions.length + "\n";  
  let reponseUtilisateur = prompt( intituleQuestion + questions[i]);

  console.log(reponseUtilisateur);

  if (reponseUtilisateur == reponses[i]) {
    alert("Bien joué !");
    console.log("Bien joué !");
    compteurBonnesReponses=compteurBonnesReponses+1;
  } 
  else {
    alert("Mauvaise réponse ...");
    console.log("Mauvaise réponse ...");
  }
}

alert(compteurBonnesReponses + " réponses sur " + questions.length + " correctes !");
