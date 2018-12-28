(function() {
    const myQuestions = [
        {
            question: "Ile to jest 10 / 2?",
            answers: {
                a: '3',
                b: '5',
                c: '12',
                d: '115'
            },
            correctAnswer: 'b'
        },
        {
            question: "Na którym jesteś roku studiów?",
            answers: {
                a: '3',
                b: '1',
                c: '4',
                d: '2'
            },
            correctAnswer: 'c'
        },
        {
            question: "Jaki jest twoj ulubiony język programowania?",
            answers: {
                a: 'Java',
                b: 'Python',
                c: 'C#',
                d: 'C++'
            },
            correctAnswer: 'a'
        },
        {
            question: "Jak długo biegasz?",
            answers: {
                a: 'rok',
                b: 'miesiąc',
                c: 'tydzień',
                d: 'w ogóle'
            },
            correctAnswer: 'd'
        },
        {
            question: "Ile wynosi 2 * 2?",
            answers: {
                a: '3',
                b: '4',
                c: '5',
                d: 'nie wiem'
            },
            correctAnswer: 'b'
        },
        {
            question: "Ile wynosi 3 * 7?",
            answers: {
                a: '13',
                b: '55',
                c: '21',
                d: '65'
            },
            correctAnswer: 'c'
        },
        {
            question: "Ile wynosi 5 * 5?",
            answers: {
                a: '30',
                b: '25',
                c: '115',
                d: '15'
            },
            correctAnswer: 'b'
        },
        {
            question: "Ile wynosi 30 / 3?",
            answers: {
                a: '3',
                b: '5',
                c: '10',
                d: '1'
            },
            correctAnswer: 'c'
        },
        {
            question: "Ile to jest 10 / 2?",
            answers: {
                a: '3',
                b: '5',
                c: '11',
                d: '1'
            },
            correctAnswer: 'b'
        },
        {
            question: "Ile to jest 20 * 10?",
            answers: {
                a: '38',
                b: '57',
                c: '200',
                d: '221'
            },
            correctAnswer: 'c'
        }
    ];

    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "darkred";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `Gratulacje! Odpowiedziałeś poprawnie na ${numCorrect} pytań z ${myQuestions.length}.`;

        // save result to LocalStorage
        localStorage.setItem('result', `Gratulacje! Odpowiedziałeś poprawnie na ${numCorrect} pytań z ${myQuestions.length}.`);
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;

        if (currentSlide === 0) {
            previousButton.style.display = "none";
        } else {
            previousButton.style.display = "inline-block";
        }

        if (currentSlide === slides.length - 1) {
            nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
        } else {
            nextButton.style.display = "inline-block";
            submitButton.style.display = "none";
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");

    // display quiz right away
    buildQuiz();

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(0);

    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();