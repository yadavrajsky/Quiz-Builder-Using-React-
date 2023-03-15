import React, { useState } from "react";
import { AddQuestion } from "./AddQuestion";
export const QuizInfo = (props) => {
  const [title, setTitle] = useState(props.quiz.title);
  const [desc, setDesc] = useState(props.quiz.desc);
  // let quizQuestions = props.quiz.questions;
  const [questions, setQuestions] = useState(props.quiz.questions);
  // console.log(props.quiz);
  let createQuestion = () => {
    let question = {
      id: Date.now(),
      questionTitle: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      correctAnswer: "",
    };
    return question;
  };
  const addQuestion = () => {
    setQuestions([...questions, createQuestion()]);
    // console.log(questions);
  };
  let handleQuestion = (
    id,
    questionTitle,
    option1,
    option2,
    option3,
    option4,
    correctAnswer
  ) => {
    // quizQuestions[index] = questionDetail;

    const newstate = questions.map((question) => {
      if (question.id === id) {
        question["questionTitle"] = questionTitle;
        question["option1"] = option1;
        question["option2"] = option2;
        question["option3"] = option3;
        question["option4"] = option4;
        question["correctAnswer"] = correctAnswer;
      }
      return question;
    });
    setQuestions([...newstate]);
  };
  let handleDeleteQuestion = (id) => {
    setQuestions(questions.filter((question) => question.id !== id));
    // console.log(id,questions)
  };
  return (
    <form
      onSubmit={(e) => {
        props.handleSubmit(e, title, desc, questions);
      }}
    >
      {/* questions-section  */}
      <div className=" bg-white  container mt-3 mb-3 p-3 questions-quiz border border-3">
        {/* quiz desc  */}
        <div className="p-3 mt-3 questions-quiz border border-2">
          <h4 className="text-dark text-center">Quiz Description</h4>
          <div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                aria-describedby="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Description
              </label>
              <input
                type="textarea"
                className="form-control"
                value={desc}
                id="desc"
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* quiz desc end */}
        {/* button-start  */}
        <div className="p-3 mt-5 questions-quiz border border-2">
          <h4 className="text-dark text-center mb-4"> Questions</h4>
          <div>
            {questions.map((question) => {
              return (
                <AddQuestion
                  key={question.id}
                  index={questions.indexOf(question)}
                  handleQuestion={handleQuestion}
                  handleDeleteQuestion={handleDeleteQuestion}
                  questionInfo={question}
                />
              );
            })}
          </div>
          <div className="text-center ">
            <button
              type="button"
              className="btn dragon btn-primary m-auto"
              style={{
                background: "white",
                color: "#05A5E1",
              }}
              onClick={addQuestion}
            >
              <img
                alt="Add Question"
                src="../../public/plus.png"
                height="20px"
                width="20px"
                style={{ marginRight: "10px", marginBottom: "3px" }}
              />
              Add Question
            </button>
          </div>
        </div>
        {/* button-end  */}
        <div className="m-3 justify-content-sm-end align-items-end d-flex">
          <button
            className="btn btn-primary  ms-auto btn-primary"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};
