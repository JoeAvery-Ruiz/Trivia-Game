// start button on main display
// prompt question
// timer for 10s
// show answer after timer ends 
// random generator for 3 outcomes 
// score selector for team 
// score board
// next question button
//add name for each team/player
 
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

 
 timeLeft = 10;

 function countdown() {
     timeLeft--;
     document.getElementById("seconds").innerHTML = String( timeLeft );
     if (timeLeft > 0) {
         setTimeout(countdown, 1000);
     }
 };

 
 setTimeout(countdown, 1000);

 let player1 = document.querySelector('.player1-score')
player1.addEventListener('click', ()=>{
    
let score = document.querySelector('.score')
    
    score.innerHTML = (parseInt(score.innerHTML) + 10).toString().padStart(4,'0')

    
    
    
    
    console.log(score)
    

})
let player2 = document.querySelector('.player2-score2')
player2.addEventListener('click', ()=>{

let score2 = document.querySelector('.score2')
   
    score2.innerHTML = (parseInt(score2.innerHTML) + 10).toString().padStart(4,'0')
    console.log(score2)
 
}) 



document.getElementById('btn-modal').addEventListener('click', function() {
    document.getElementById('overlay').classList.add('is-visible');
    document.getElementById('modal').classList.add('is-visible');
  });
  
  document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('overlay').classList.remove('is-visible');
    document.getElementById('modal').classList.remove('is-visible');
  });
  document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('overlay').classList.remove('is-visible');
    document.getElementById('modal').classList.remove('is-visible');
  });
   
