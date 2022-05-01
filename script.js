// start button on main display
// prompt question
// timer for 10s
// show answer after timer ends 
// random generator for 3 outcomes 
// score selector for team 
// score board
// next question button
 
/* function trivia (question,answer){
    this.question=question
    this.answer=answer
}
const question1 = new trivia('what is ricky bobbys catchphrase')
 console.log(question1);
 const answer1 = new answer("If you ain't first you're last")
 console.log(answer1);  */
 
 const questionArray = ['quest1','quest2','quest3']
 const answerArray = ['answer1','answer2','answer3']
 const drinkArray=['sip','chug','shot']
 
 function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  }
 const arrayLength = questionArray.length;
 for (var i = 0; i < arrayLength; i++) {
     console.log(questionArray[i]);
     console.log(answerArray[i]);
     let drink = randomRange(0,2)
     console.log(drinkArray[drink]);
   
 }






