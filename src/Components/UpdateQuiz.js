import React from "react";
import { useParams } from "react-router";
import { QuizInfo } from "./QuizInfo";

export const UpdateQuiz = (props) => {
  const params = useParams();
  const handleSubmit = (event, title, desc, questions) => {
    event.preventDefault();
    const quiz = {
      title: title,
      desc: desc,
      status: "active",
      createdOn: parseInt(params.id),
      questions: questions,
    };
    props.handleQuizUpdate(quiz);
  };
  let currentQuiz = props.quizes.filter((quiz) => {
    return quiz.createdOn === parseInt(params.id);
  });

  let current = currentQuiz[0];
  return (
    <div className="container justify-content-center ">
      <div className="container mt-3 bg-info">
        <span className="h3">Update Quiz</span>
      </div>
      <QuizInfo
        handleSubmit={handleSubmit}
        quiz={current}
        key={current.createdOn}
      />
    </div>
  );
};
