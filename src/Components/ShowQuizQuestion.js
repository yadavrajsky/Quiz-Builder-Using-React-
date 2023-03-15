import React from "react";
export const ShowQuizQuestion = ({ question, setChosenAnswer }) => {
  return (
    <div>
      <div className="d-flex flex-row align-items-center question-title">
        <h3 className="text-danger">Q.</h3>
        <h5 className="mt-1 ml-2">{question.questionTitle}</h5>
      </div>
      <div className="ans ml-2">
        <label className="radio">
          <input
            type="radio"
            name={question.id}
            id={question.id}
            value={question.option1}
            onChange={(e) => setChosenAnswer(e.target.value)}
          />
          <span>{question.option1}</span>
        </label>
      </div>
      <div className="ans ml-2">
        <label className="radio">
          <input
            type="radio"
            name={question.id}
            id={question.id}
            value={question.option2}
            onChange={(e) => setChosenAnswer(e.target.value)}
          />
          <span>{question.option2}</span>
        </label>
      </div>
      <div className="ans ml-2">
        <label className="radio">
          <input
            type="radio"
            name={question.id}
            id={question.id}
            value={question.option3}
            onChange={(e) => setChosenAnswer(e.target.value)}
          />
          <span>{question.option3}</span>
        </label>
      </div>
      <div className="ans ml-2">
        <label className="radio">
          <input
            type="radio"
            name={question.id}
            id={question.id}
            value={question.option4}
            onChange={(e) => setChosenAnswer(e.target.value)}
          />
          <span>{question.option4}</span>
        </label>
      </div>
    </div>
  );
};
