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
    },
    {
        question:"4.Where  located chinese people of location ?",
        options:["Chimgan"," North China","Norway","United Kingdom"],
        correctAswer:"China"
    },
    {
        question:"5.Where lives uygur people ?",
        options:["Chimgan","Uyguriston","Norway","United Kingdom"],
        correctAswer:"China"
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
        
        return
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
         
       
       appealToUIelements.innerHTML=UI
       
    //  Choosing answers function()
    
       
       return orderOfJson
    })


// Entrance of App
function startBtn(){

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

   // console.log(orderOfJson);

   const appealToUIelements=document.getElementById('quiz-sectionId')
   appealToUIelements.innerHTML=UI
   


}




// const appealToBtnContainer=document.getElementById('quiz-sectionId')
// appealToBtnContainer.addEventListener('click',(event)=>{

//  if(event.target.classList.contains('options'))
//    const appealToParentElement=event.target.parentElement
//    const btnText=appealToParentElement.querySelector('options').textContent
//    console.log(btnText);
   
// })



const buttons=document.querySelectorAll(' .quiz-section-option-div .options')



 
const quizSection = document.getElementById('quiz-sectionId');

let valOfButton=''

quizSection.addEventListener('click', (event) => {


    if (event.target.classList.contains('options')){
        let btnValue=event.target.textContent.trim()
        valOfButton+=btnValue
        
        choseAnswers.push(valOfButton)
        valOfButton=''
        return valOfButton
    }
});

console.log(choseAnswers);

