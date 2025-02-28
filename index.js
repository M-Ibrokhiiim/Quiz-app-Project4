const questions=[
    {
        question:"1.What is the largest animal in the World?",
        anwer:
        [
         {text:"Whale", correct:true},
         {text:"Shark",correct:false},
         {text:"Camel",correct:false},
         {text:"NorTuya", correct:false}
        ]
    },
    {
        question:"2.Which  country is the largest  in the world?",
        anwer:
        [
         {text:"China", correct:true},
         {text:"Russia",correct:false},
         {text:"The USA",correct:false},
         {text:"Georgia", correct:false}
        ]
    },
    {
        question:"3.Where lives chinese people ?",
        anwer:
        [
         {text:"Chimgan",correct:false},
         {text:"China",correct:true},
         {text:"Norway",correct:false},
         {text:"United Kingdom",correct:false}
        ]
    }
]

let UI=''
questions.forEach(question=>{
    UI+=`
     <h6 class="quiz-section-quiz">${question.question}</h6>

        <div class="quiz-section-option-div">
          <button class="options">Vatican</button>
          <button class="options">China</button>
          <button class="options">Bali</button>
          <button class="options">Vietnam</button>
        </div>
    `    
})

const appealToUIelements=document.getElementById('quiz-sectionId')
appealToUIelements.innerHTML=UI
console.log(appealToUIelements);
