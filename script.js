var questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Hyperlinks and Text Markup Language",
        "Home Tool Markup Language",
        "None of the above"
      ],
      answer: 0
    },
    {
      question: "What is the correct HTML element for the largest heading?",
      options: [
        "<h6>",
        "<h1>",
        "<heading>",
        "<head>"
      ],
      answer: 1
    },
    {
      question: "Which tag is used to create an unordered list in HTML?",
      options: [
        "<ol>",
        "<li>",
        "<list>",
        "<ul>"
      ],
      answer: 3
    },
    {
      question: "Which attribute is used to specify the URL of an external script file in HTML?",
      options: [
        "href",
        "src",
        "link",
        "script"
      ],
      answer: 1
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: [
        "<lb>",
        "<break>",
        "<br>",
        "<line>"
      ],
      answer: 2
    },
    {
      question: "Which attribute is used to define inline styles in HTML?",
      options: [
        "style",
        "class",
        "id",
        "font"
      ],
      answer: 0
    },
    {
      question: "Which tag is used to define an image in HTML?",
      options: [
        "<picture>",
        "<img>",
        "<photo>",
        "<image>"
      ],
      answer: 1
    },
    {
      question: "Which tag is used to create a hyperlink in HTML?",
      options: [
        "<a>",
        "<link>",
        "<href>",
        "<hyperlink>"
      ],
      answer: 0
    },
    {
      question: "What is the correct HTML element for playing video files?",
      options: [
        "<media>",
        "<movie>",
        "<video>",
        "<play>"
      ],
      answer: 2
    },
    {
      question: "Which tag is used to define a table in HTML?",
      options: [
        "<td>",
        "<tab>",
        "<tr>",
        "<table>"
      ],
      answer: 3
    }
  ];
  
  // Get HTML elements
  var questionNumber = document.getElementById('questionNumber');
  var questionNumberup = document.getElementById('noOfQuestions');
  var quest = document.getElementById('quest');
  var ans1 = document.getElementById('ans1');
  var ans2 = document.getElementById('ans2');
  var ans3 = document.getElementById('ans3');
  var ans4 = document.getElementById('ans4');
  var nextBtn = document.getElementById('nextBtn');
  var res = document.getElementById('result');
  var result = document.getElementById('marks');
  var grade = document.getElementById('grade');
  
  
  var currentQuestionIndex = 0;
  var score = 0;
  
  // Load question and options
  function loadQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    questionNumber.textContent = "Que " + (currentQuestionIndex + 1);
    questionNumberup.textContent = currentQuestionIndex + 1;
    quest.textContent = currentQuestion.question;
    ans1.textContent = currentQuestion.options[0];
    ans2.textContent = currentQuestion.options[1];
    ans3.textContent = currentQuestion.options[2];
    ans4.textContent = currentQuestion.options[3];
    nextBtn.disabled = true;
  }
  
  // Check user's answer and move to the next question
  function checkAnswer() {
    var selectedOption = document.querySelector('input[name="app"]:checked');
    if (selectedOption) {
      var userAnswer = parseInt(selectedOption.value);
      if (userAnswer === questions[currentQuestionIndex].answer) {
        score += 5;
      }
      currentQuestionIndex++;
      selectedOption.checked = false;
      if (currentQuestionIndex < questions.length) {
        loadQuestion();
      } else {
        showResult();
      }
    }
  }
  
  // Show the final quiz result
  function showResult() {
    var percentage = document.getElementById('per');
    questionNumber.style.display = "none";
    quest.textContent = "Quiz Complete!";
    document.querySelector('.mcqContainer').style.display = "none";
    res.style.visibility = "visible";
    res.style.transform = "scale(1)";
    res.style.top = "30%";
    result.innerHTML = "Your Score: " + score + " out of " + questions.length * 5;
    var per = (Number(score) / 50) * 100;
    percentage.innerText = per + "%"
    if (per >= 90) {
      grade.innerHTML = "A+";
    } else if (per >= 80) {
      grade.innerHTML = "A";
    } else if (per >= 70) {
      grade.innerHTML = "B";
    } else if (per >= 60) {
      grade.innerHTML = "C";
    } else if (per >= 50) {
      grade.innerHTML = "D";
    } else {
      grade.innerHTML = "F";
    }
  }
  
  
  loadQuestion();
  
  // Add event listener to the Next button
  nextBtn.addEventListener('click', checkAnswer);
  
  
  var submit = document.getElementById('nextBtn')
  var radbtns = document.querySelectorAll("input[name='app']");
  function handleRadioChange() {
    var checked = document.querySelectorAll("input[name='app']:checked");
  
    if (checked.length > 0) {
  
      submit.disabled = false;
    } else {
      submit.disabled = true;
    }
  }
  
  radbtns.forEach(function (radio) {
    radio.addEventListener("change", handleRadioChange);
  });
  
  function sign() {
    let prev = localStorage.getItem("users");
    let userData = prev ? JSON.parse(prev) : [];
    var name = document.getElementById("na").value;
    var email = document.getElementById("em").value;
    var password = document.getElementById("pass").value;
    var users = {
      name: name,
      email: email,
      password: password
    }
    userData.push(users)
    console.log(users.name);
    let stringfy = JSON.stringify(userData)
    localStorage.setItem("users", stringfy)
  
    window.location.href = "index.html"
  
  }
  
  function login() {
    var flag = false;
    var email = document.getElementById("em").value;
    var password = document.getElementById("pass").value;
    var userName = localStorage.getItem("users");
  
    if (userName) {
      var json = JSON.parse(userName);
      for (var i = 0; i < json.length; i++) {
        if (email == json[i].email && password == json[i].password) {
          flag = true;
          alert("Welcome!");
          window.location.href = "quiz.html";
          break;
        }
      }
    }
  
    if (!flag) {
      alert("Account not signed in");
      window.location.href = "signup.html";
    }
  }