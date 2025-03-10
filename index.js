const questions=[
    {
        question:"1.What is the largest animal in the World?",
        options:["Whale","Shark","Camel","Nortuya"],
        correctOption:'Whale'
    },
    {
        question:"2.Which  country is the largest  in the world?",
        options:["China","Russia","The USA","Georgia"],
        correctOption:'China'
    },
    {
        question:"3.Where lives chinese people ?",
        options:["Chimgan","China","Norway","United Kingdom"],
        correctOption:'China'
    },
    {
        question:"4.Where  located chinese people of location ?",
        options:["Chimgan"," North China","Norway","United Kingdom"],
        correctOption:'North China'
    },
    {
        question:"5.Where lives uygur people ?",
        options:["Chimgan","Uyguriston","Norway","United Kingdom"],
        correctOption:'Uyguriston'
    }
]





// Buttons

const nextBtn=document.getElementById('nextBtn')
const stratBtn=document.getElementById('startBtn')
const appealToUIelements=document.getElementById('quiz-sectionId')
 

// UI give questions function

let nextQuiz=1  
let orderOfJson=0
let existQuiz=questions[0]

// Scores
let choseAnswers=[]
let overallScore=0


// nextButton process
nextBtn.addEventListener("click",function previousQuiz1(){                
       
       let orderOfQuiz=nextQuiz++
       let existQuiz=questions[orderOfQuiz]
       let UI=''

       if(orderOfQuiz===5){
        appealToUIelements.innerHTML=''
        nextBtn.style.display="none"

        for(let i=0; i < choseAnswers.length; i++){
            if(choseAnswers[i]===questions[i].correctOption){
              overallScore++
            }
        }

        UI=` 
         <div id="totalAnswerPlace">
         <h1>Your total score:${overallScore}/5</h1>
         
        
        <div class="restart-button-container">
          <a class="restart-button" onclick="location.reload()"><i class="fa-solid fa-rotate-left reIcon"></i>Restart</a>
        </div>
         </div>
         `
        
        appealToUIelements.innerHTML=UI
        return overallScore
       }
       
        UI=`
        <div id="quizPlace">

        <h6 class="quiz-section-quiz"> ${existQuiz.question}</h6>
           <div class="quiz-section-option-div">
             <button class="options" > ${existQuiz.options[0]}</button>
             <button class="options">${existQuiz.options[1]}</button>
             <button class="options">${existQuiz.options[2]}</button>
             <button class="options">${existQuiz.options[3]}</button>
           </div>
        
        </div>

        
     `
       nextBtn.style.display='none'       
       appealToUIelements.innerHTML=UI
       return orderOfJson
    })


// Entrance of App
function startBtn(){

stratBtn.style.display="none"


     
let UI=`
    <h6 class="quiz-section-quiz"> ${existQuiz.question}</h6>
       <div class="quiz-section-option-div">
         <button class="options"> ${existQuiz.options[0]}</button>
         <button class="options">${existQuiz.options[1]}</button>
         <button class="options">${existQuiz.options[2]}</button>
         <button class="options">${existQuiz.options[3]}</button>
       </div>
 `

   // console.log(orderOfJson);

   const appealToUIelements=document.getElementById('quiz-sectionId')
   appealToUIelements.innerHTML=UI
}
 
 
const quizSection = document.getElementById('quiz-sectionId');

let valOfButton=''

quizSection.addEventListener('click', (event) => {

    if (event.target.classList.contains('options')){
        let btnValue=event.target.textContent.trim()
        valOfButton+=btnValue
        choseAnswers.push(valOfButton)
        valOfButton=''
        nextBtn.style.display="block"
        return valOfButton
    }
}); 