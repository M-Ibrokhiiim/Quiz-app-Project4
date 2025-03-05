const questions=[
    {
        question:"1.What is the largest animal in the World?",
        options:["Whale","Shark","Camel","Nortuya"],
        correctAswer:"Whale"
    },
    {
        question:"2.Which  country is the largest  in the world?",
        options:["China","Russia","The USA","Georgia"],
        correctAswer:"China"
    },
    {
        question:"3.Where lives chinese people ?",
        options:["Chimgan","China","Norway","United Kingdom"],
        correctAswer:"China"
    }
]


// Buttons

const nextBtn=document.getElementById('nextBtn')
const stratBtn=document.getElementById('startBtn')


// UI give questions function

let nextQuiz=0  
let orderOfJson=0
console.log(orderOfJson);
 

console.log(orderOfJson);
// previousQuiz1()
nextBtn.addEventListener("click",function previousQuiz1(){
                
     let increasing=nextQuiz++
     
    orderOfJson=increasing
    console.log(orderOfJson);
    
    return orderOfJson
})

let existQuiz=questions[orderOfJson]
console.log(existQuiz);


function startBtn(){
// Buttons hiding and showing

stratBtn.style.display="none"
nextBtn.style.display="block"


let UI=`
     <h6 class="quiz-section-quiz"> ${existQuiz.question}</h6>
        <div class="quiz-section-option-div">
          <button class="options"> ${existQuiz.options[0]}</button>
          <button class="options">${existQuiz.options[1]}</button>
          <button class="options">${existQuiz.options[2]}</button>
          <button class="options">${existQuiz.options[3]}</button>
        </div>
  `
    

const appealToUIelements=document.getElementById('quiz-sectionId')
appealToUIelements.innerHTML=UI

}




 