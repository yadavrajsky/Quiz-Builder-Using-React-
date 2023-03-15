import React, { useState } from "react";
import Result from "./Result";
import { ShowQuizQuestion } from "./ShowQuizQuestion";
export const StartQuiz = (props) => {
  const questions = props.quiz.questions;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [submitStatus, setSubmiStatus] = useState(false);
  const [chosenAnswer, setChosenAnswer] = useState("");
  const [score, setScore] = useState(0);
  let handleSubmitAnswer = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setSubmiStatus(true);
    }
    setChosenAnswer("");
    if (questions[currentQuestionIndex].correctAnswer === chosenAnswer)
      setScore(score + 1);
  };
  return (
    <div>
      {submitStatus === true ? (
        <Result name={props.name} score={score} totalScore={questions.length} />
      ) : (
        <div className="container mt-5">
          <div className="d-flex justify-content-center row">
            <div className="col-md-10 col-lg-10">
              <div className="border">
                <div className="question bg-white p-3 border-bottom">
                  <div className="d-flex flex-row justify-content-between align-items-center mcq">
                    <h4>MCQ Quiz</h4>
                    <span>
                      ({currentQuestionIndex + 1} of {questions.length})
                    </span>
                  </div>
                </div>
                <div className="question bg-white p-3 border-bottom">
                  {questions.length === 0 ? (
                    "No Question."
                  ) : (
                    <ShowQuizQuestion
                      key={questions[currentQuestionIndex].id}
                      question={questions[currentQuestionIndex]}
                      setChosenAnswer={setChosenAnswer}
                    />
                  )}
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center p-3 bg-white">
                  <button
                    className="btn btn-primary border-success align-items-center btn-success"
                    type="button"
                    disabled={chosenAnswer === ""}
                    onClick={handleSubmitAnswer}
                  >
                    {currentQuestionIndex + 1 === questions.length
                      ? "Submit"
                      : "Next"}
                    <i className="fa fa-angle-right ml-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
