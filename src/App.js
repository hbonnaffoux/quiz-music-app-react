import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText:
        "What is the name of the famous streaming channel showcasing electronic music DJ sets that was created in 2019 ?",
      answerOptions: [
        { answerText: "Boiler room", isCorrect: false },
        { answerText: "Pano TV", isCorrect: false },
        { answerText: "Party Fun", isCorrect: false },
        { answerText: "Hör", isCorrect: true },
      ],
    },
    {
      questionText:
        "Which iconic duo played in a LED pyramid in 2006 in Coachella ?",
      answerOptions: [
        { answerText: "David & Cathy Guetta", isCorrect: false },
        { answerText: "Keumzer & Lobby", isCorrect: false },
        { answerText: "Daft Punk", isCorrect: true },
        { answerText: "Tale of Us", isCorrect: false },
      ],
    },
    {
      questionText: "Who is the owner of the techno label Axis records ?",
      answerOptions: [
        { answerText: "Ben klock", isCorrect: false },
        { answerText: "Jeff Mills", isCorrect: true },
        { answerText: "Nina Kraviz ", isCorrect: false },
        { answerText: "Slam", isCorrect: false },
      ],
    },
    {
      questionText: "Where does the name Berghain come from ?",
      answerOptions: [
        {
          answerText: "The name of a Berlin underground party",
          isCorrect: false,
        },
        { answerText: "The DJ name of his creator", isCorrect: false },
        { answerText: "The name of a sex position", isCorrect: false },
        { answerText: "The name of Berlin neighbourhoods", isCorrect: true },
      ],
    },
    {
      questionText:
        "During the festival “Weather Festival” that took place on the airport Le Bourget in Paris in 2014, which celebrity took off in front of the crowd during the set of the collective Camion Bazar ?",
      answerOptions: [
        { answerText: "Francois Hollande", isCorrect: false },
        { answerText: "Lionel Messi", isCorrect: false },
        { answerText: "Shakira", isCorrect: false },
        { answerText: "Barack Obama", isCorrect: true },
      ],
    },
    {
      questionText: "Which island is known for its crazy endless parties ?",
      answerOptions: [
        { answerText: "Corsica", isCorrect: false },
        { answerText: "Ibiza", isCorrect: true },
        { answerText: "Sardinia", isCorrect: false },
        { answerText: "Island", isCorrect: false },
      ],
    },
    {
      questionText: "Where does house music is originally from ?",
      answerOptions: [
        { answerText: "Chicago", isCorrect: true },
        { answerText: "Berlin", isCorrect: false },
        { answerText: "Detroit", isCorrect: false },
        { answerText: "London", isCorrect: false },
      ],
    },
    {
      questionText:
        "What is the name of the house music legend who produced “Get Get Down” and sadly died at the age of 50 in 2021 ?",
      answerOptions: [
        { answerText: "Eric Morillo", isCorrect: false },
        { answerText: "Kelli Hand", isCorrect: false },
        { answerText: "Paul Johnson", isCorrect: true },
        { answerText: "Avicii", isCorrect: false },
      ],
    },
    {
      questionText: "What is Roland TR 909 ?",
      answerOptions: [
        { answerText: "A music production software", isCorrect: false },
        { answerText: "A techno dj name", isCorrect: false },
        { answerText: "A new drug ", isCorrect: false },
        { answerText: "A drum machine", isCorrect: true },
      ],
    },
    {
      questionText: "Who produced the famous track “Move your body” ?",
      answerOptions: [
        { answerText: "Marshall Jefferson", isCorrect: true },
        { answerText: "Kerri Chandler", isCorrect: false },
        { answerText: "Frankie Knuckles", isCorrect: false },
        { answerText: "Dj Deeon", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0); // state object

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="root">
    <div className="title"><h1>Electronic music quiz</h1></div>
    <div className="app">
      {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
      {showScore ? (
        <>
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
          <div class="answers-display">
            <div class="question">{questions[0].questionText}</div>
            <div class="answer">Hör</div>
            <div class="question">{questions[1].questionText}</div>
            <div class="answer">Daft Punk</div>
            <div class="question">{questions[2].questionText}</div>
            <div class="answer">Jeff Mills</div>
            <div class="question">{questions[3].questionText}</div>
            <div class="answer">The name of Berlin neighbourhoods</div>
            <div class="question">{questions[4].questionText}</div>
            <div class="answer">Barack Obama</div>
            <div class="question">{questions[5].questionText}</div>
            <div class="answer">Ibiza</div>
            <div class="question">{questions[6].questionText}</div>
            <div class="answer">Chicago</div>
            <div class="question">{questions[7].questionText}</div>
            <div class="answer">Paul Johnson</div>
            <div class="question">{questions[8].questionText}</div>
            <div class="answer">A drum machine</div>
            <div class="question">{questions[9].questionText}</div>
            <div class="answer">Marshall Jefferson</div>
          </div>
        </>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
    </div>
  );
}
