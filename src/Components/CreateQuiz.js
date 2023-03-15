import React from "react";
import { QuizInfo } from "./QuizInfo";
export default function CreateQuiz(props) {
  let createQuiz = () => {
    let quiz = {
      title: "",
      desc: "",
      createdOn: Date.now(),
      questions: [],
    };
    return quiz;
  };
  const handleSubmit = (event, title, desc, questions) => {
    event.preventDefault();
    const quiz = {
      title: title,
      desc: desc,
      status: "active",
      createdOn: Date.now(),
      questions: questions,
    };
    if (
      props.quizes.filter((quiz_Info) => {
        return quiz_Info.title === quiz.title;
      }).length !== 0
    )
      alert("Quiz already exists !");
    else {
      props.handleQuizStorage(quiz);
      alert("Quiz Added Successfully!");
    }
  };
  return (
    <>
      {/* label create quiz  */}
      <div className="container justify-content-center ">
        <div className="container mt-3 bg-info">
          <span className="h3">Create Quiz</span>
        </div>
        {/* label create quiz  end */}
        <QuizInfo handleSubmit={handleSubmit} quiz={createQuiz()} key="1" />
      </div>
      {/* questions-section  end */}
    </>
  );
}
