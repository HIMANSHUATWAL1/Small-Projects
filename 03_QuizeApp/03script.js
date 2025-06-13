const question = [
    {
        question: "What is the full form of HTML?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Hyper Text  Language", correct: false },
            { text: "Hyper Text Language", correct: false },
            { text: "High Text Markup Language", correct: false }
        ]

    },
    {
        question: "full form of JS?",
        answers: [
            { text: "JavaStyle", correct: false },
            { text: "javaScript", correct: true },
            { text: "java System", correct: false },
            { text: "Jsp System", correct: false }
        ]

    },
   {
    question:"What is the full form of CSS?",
    answers:[
        {text:"Cascading Style Sheet",correct:true},
        {text:"Cascading Style Sheet",correct:false},
        {text:"Cascading Style Sheet",correct:false},
        {text:"Cascading Style Sheet",correct:false}
    ]
   },
   {
    question:"What is the full form of HTTP?",
    answers:[
        {text:"Hyper Text Transfer Protocol",correct:true},
        {text:"Hyper Text Transfer Protocol",correct:false},
        {text:"Hyper Text Transfer Protocol",correct:false},
        {text:"Hyper Text Transfer Protocol",correct:false}
    ]
   },
   {
    question:"What is the full form of IP?",
    answers:[
        {text:"Internet Protocol",correct:true},
        {text:"Internet Protocol",correct:false},
        {text:"Internet Protocol",correct:false},
        {text:"Internet Protocol",correct:false}
    ]
   }
]



const questionContainer = document.getElementById('question');
const answerButtons = document.getElementById('ans-button');

const nextButton = document.getElementById('next-btn');


let currentQuestionIndex = 0;

let score =0;

function startGame(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML = "Next";
    showQuestion();

}


function showQuestion(){
    resetState();
    let currQues = question[currentQuestionIndex];
    let quesNo=currentQuestionIndex+1;
    questionContainer.innerText = quesNo +". "+currQues.question;
    
    currQues.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener('click',selectAnswer);
    });
    
}

// for removing privious questions
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct==="true";

    if(correct){
        selectedButton.classList.add('correct');
        score++;
    }else{
        selectedButton.classList.add('incorrect');
    }
    
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex<question.length){
        handleNextBtn();
    }else{
       startGame();
    }

})

function handleNextBtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex<question.length){
        showQuestion();
    }else{
        showScore();

    }
}


function showScore(){
    resetState();
    questionContainer.innerText = "Your Score is "+score;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


startGame(); 









