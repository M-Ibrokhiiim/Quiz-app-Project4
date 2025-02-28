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
function startBtn(){
    
let UI=''
   
questions.forEach(quiz=>{
//    UI= 
//    `
//    <h6 class="quiz-section-quiz">${quiz.question}</h6>
//         <div class="quiz-section-option-div">
//              <button class="options"> Option1</button>
//              <button class="options">China</button>
//              <button class="options">Bali</button>
//              <button class="options">Vietnam</button>
//         </div>
//    `
   
console.log(quiz.options.forEach(a=>{
    console.log(a);
    
}));



})

const appealToUIelements=document.getElementById('quiz-sectionId')
appealToUIelements.innerHTML=UI






// Buttons hiding and showing
stratBtn.style.display="none"
nextBtn.style.display="block"
}
 