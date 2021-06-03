const input = require('readline-sync');
// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = {firstName : "", lastName : ""} ;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ['1. Who was the first American woman in space?', '2. True or false: 5 kilometer == 5000 meters?',	
'3. (5 + 3)/2 * 10 = ?', "4. Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", 	
'5. What is the minimum crew size for the ISS?']
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Hello. Please input your first and last name: ")
};

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i<questions.length; i++) {
    candidateAnswers.push(input.question(`${questions[i]} \n\t`));
  }
  console.log("One moment please. Commencing grading protocol. ")
};

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  console.log('\n-------GRADING PROTOCOL ENACTED-------\n\n')
  let numCorrect = 0;
  let total = 5;
  for (let i = 0; i<candidateAnswers.length; i++) {
      console.log(`\nQuestion ${questions[i]} \n\tYour Answer: ${candidateAnswers[i]}\n\tCorrect Answer: ${correctAnswers[i]} `);
      if (candidateAnswers[i] === correctAnswers[i]) {
      console.log("CORRECT");
      numCorrect += 1;
      } else if (candidateAnswers.toString().toLowerCase()===correctAnswers.toString().toLowerCase()) {
       console.log("CORRECT");
       numCorrect += 1;
      }  /*else if (candidateAnswers.toString().toUpperCase()===correctAnswers.toString().toUpperCase()) {
            console.log("CORRECT");
            numCorrect += 1;*/
      else {
      console.log("FALSE");

      }
      
  }
  
  let grade = (numCorrect / total * 100);
  if (grade >= 80) {
    console.log(`Congratulations! You've passed the assessment with a final score of ${grade}%`);
  } else {
      console.log(` We regret to inform you that a score of ${grade}% does not constitute as passing. `);
    }

}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Welcome ${candidateName}. Please stand by for further instruction. \nL\nO\nA\nD\nI\nN\nG\n.\n.\n.`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}








// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};