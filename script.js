const QuizData = [
  {
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Program Unit",
      "Control Processing Unit"
    ],
    correctAns: 0
  },
  {
    question: "Which data structure follows FIFO?",
    options: [
      "Stack",
      "Queue",
      "Tree",
      "Graph"
    ],
    correctAns: 1
  },
  {
    question: "Which language is primarily used for web page structure?",
    options: [
      "CSS",
      "JavaScript",
      "HTML",
      "Python"
    ],
    correctAns: 2
  },
  {
    question: "Which of the following is not an operating system?",
    options: [
      "Windows",
      "Linux",
      "Oracle",
      "macOS"
    ],
    correctAns: 2
  },
  {
    question: "What is the time complexity of binary search?",
    options: [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    correctAns: 1
  },
  {
    question: "Which protocol is used to send emails?",
    options: [
      "HTTP",
      "FTP",
      "SMTP",
      "SNMP"
    ],
    correctAns: 2
  },
  {
    question: "Which memory is volatile?",
    options: [
      "ROM",
      "Hard Disk",
      "RAM",
      "SSD"
    ],
    correctAns: 2
  },
  {
    question: "Which of these is a non-linear data structure?",
    options: [
      "Array",
      "Linked List",
      "Stack",
      "Tree"
    ],
    correctAns: 3
  },
  {
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Query Language",
      "Sequential Query Language",
      "Standard Query Language"
    ],
    correctAns: 0
  },
  {
    question: "Which sorting algorithm is fastest on average?",
    options: [
      "Bubble Sort",
      "Insertion Sort",
      "Quick Sort",
      "Selection Sort"
    ],
    correctAns: 2
  },
  {
    question: "Which device connects different networks?",
    options: [
      "Switch",
      "Hub",
      "Router",
      "Repeater"
    ],
    correctAns: 2
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: [
      "/* */",
      "#",
      "//",
      "<!-- -->"
    ],
    correctAns: 2
  },
  {
    question: "What is the main function of an operating system?",
    options: [
      "Run applications",
      "Manage hardware and software resources",
      "Compile programs",
      "Design software"
    ],
    correctAns: 1
  },
  {
    question: "Which data structure uses LIFO?",
    options: [
      "Queue",
      "Array",
      "Stack",
      "Tree"
    ],
    correctAns: 2
  },
  {
    question: "Which of the following is a primary key used for?",
    options: [
      "Sorting data",
      "Uniquely identifying records",
      "Encrypting data",
      "Indexing files"
    ],
    correctAns: 1
  },
  {
    question: "Which layer of OSI model deals with encryption?",
    options: [
      "Transport Layer",
      "Session Layer",
      "Presentation Layer",
      "Application Layer"
    ],
    correctAns: 2
  },
  {
    question: "What is a bug in software?",
    options: [
      "A hardware defect",
      "A logical error",
      "A virus",
      "A compiler"
    ],
    correctAns: 1
  },
  {
    question: "Which of these is a NoSQL database?",
    options: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Oracle"
    ],
    correctAns: 2
  },
  {
    question: "Which algorithm is used to find shortest path?",
    options: [
      "DFS",
      "BFS",
      "Dijkstra",
      "Merge Sort"
    ],
    correctAns: 2
  },
  {
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Programming Interface",
      "Application Process Integration",
      "Automated Program Interface"
    ],
    correctAns: 0
  }
];

const answerEl=document.querySelectorAll('.answer');
const [questionEl, option_1, option_2, option_3, option_4]=document.querySelectorAll(
    "#question, .option_1, .option_2, .option_3, .option_4"
);
const submitBtn=document.getElementById('submit')

let currentQuiz=Math.floor(Math.random() * QuizData.length);;
let number=0;
let score=0;

//Load quiz function

const loadQuiz=()=>{
    //isse hume first quiz ka data mill jayeg
    const {question, options}=QuizData[currentQuiz];
    questionEl.innerHTML=`Q.${number+1 }${question}`;

    options.forEach((curr, index)=>{
        window[`option_${index+1}`].innerHTML=curr;
    })
}


loadQuiz();

//ye hume index dega jo index user option submit kr raha hai.
const getSelectOption=()=>{
  // let ans_index;
  // answerEl.forEach((curr,index)=>{
  //   if(curr.checked){
  //     ans_index=index;
  //   }
  // })
  // return ans_index;
  let array=[...answerEl];
   return array.findIndex(curr=>curr.checked);
}

const deselectedAnswer=()=>{
  answerEl.forEach((curr)=>{
    curr.checked=false;
  })
}

submitBtn.addEventListener('click',()=>{
  const selectOptionIndex=getSelectOption();
  // console.log(selectOptionIndex);
  
  if (selectOptionIndex === -1) return;

  if(selectOptionIndex===QuizData[currentQuiz].correctAns){
    score++;
  }
  
  number++;

  if(number<5){
    currentQuiz = Math.floor(Math.random() * QuizData.length);
  deselectedAnswer()
  loadQuiz()
  // console.log(score)
  console.log(number)
  console.log(QuizData.length);
  }
  else{
    alert(`Your Score is: ${score}`)
  }

})
