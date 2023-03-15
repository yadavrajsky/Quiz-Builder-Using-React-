import React, { useEffect, useState } from "react";
export const AddQuestion = (props) => {
  const [questionTitle, setQuestionTitle] = useState(
    props.questionInfo.questionTitle
  );
  const [option1, setOption1] = useState(props.questionInfo.option1);
  const [option2, setOption2] = useState(props.questionInfo.option2);
  const [option3, setOption3] = useState(props.questionInfo.option3);
  const [option4, setOption4] = useState(props.questionInfo.option4);
  const [correctAnswer, setcorrectAnswer] = useState(
    props.questionInfo.correctAnswer
  );
  useEffect(() => {
    props.handleQuestion(
      props.questionInfo.id,
      questionTitle,
      option1,
      option2,
      option3,
      option4,
      correctAnswer
    );
  }, [questionTitle, option1, option2, option3, option4, correctAnswer]);
  return (
    <div className="container border shadow-sm border-1 shadow mb-3">
      {/* <hr className="border-info w-100" /> */}
      <div className="m-3">
        {/* QB tb  */}
        <div className="row justify-content-evenly">
          <div className="input-group mb-3">
            <span className="input-group-text bg-white mr-1" id="basic-addon1">
              Q.{props.index + 1}
            </span>
            <input
              type="text"
              placeholder="Enter your Question here....."
              className="form-control "
              value={questionTitle}
              required
              onChange={(e) => {
                setQuestionTitle(e.target.value);
              }}
            />
            <button
              type="button"
              onClick={() => props.handleDeleteQuestion(props.questionInfo.id)}
              className="input-group-text bg-white ml-2"
            >
              <i className="bi bi-trash float-end"></i>
            </button>
          </div>
        </div>
        {/* QB tb  end */}
        {/* options */}
        {/* row  */}
        <div className="row">
          {/* first col  */}
          <div className="col p-2">
            <input
              type="text"
              style={{ height: "30px" }}
              placeholder="Option 1"
              className="form-control"
              required
              value={option1}
              onChange={(e) => {
                setOption1(e.target.value);
                if (
                  document.getElementById(props.questionInfo.id + "option1")
                    .checked === true
                ) {
                  setcorrectAnswer(e.target.value);
                }
              }}
            />
            <div className="form-check">
              <input
                required
                className="form-check-input"
                type="radio"
                name={props.index}
                id={props.questionInfo.id + "option1"}
                value={option1}
                defaultChecked={
                  correctAnswer === ""
                    ? false
                    : correctAnswer === option1
                    ? true
                    : false
                }
                onChange={(e) => {
                  setcorrectAnswer(e.target.value);
                }}
              />
              <label
                className="form-check-label"
                htmlFor={props.questionInfo.id + "option1"}
              >
                Correct Answer
              </label>
            </div>
          </div>
          {/* second col   */}
          <div className="col p-2">
            <input
              type="text"
              style={{ height: "30px" }}
              placeholder="Option 2"
              className="form-control"
              value={option2}
              required
              onChange={(e) => {
                setOption2(e.target.value);
                if (
                  document.getElementById(props.questionInfo.id + "option2")
                    .checked === true
                ) {
                  setcorrectAnswer(e.target.value);
                }
              }}
            />
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name={props.index}
                id={props.questionInfo.id + "option2"}
                defaultChecked={
                  correctAnswer === ""
                    ? false
                    : correctAnswer === option2
                    ? true
                    : false
                }
                value={option2}
                required
                onChange={(e) => {
                  setcorrectAnswer(e.target.value);
                }}
              />
              <label
                className="form-check-label"
                htmlFor={props.questionInfo.id + "option2"}
              >
                Correct Answer
              </label>
            </div>
          </div>
          {/* second col end  */}
        </div>
        {/* row  */}
        <div className="row">
          {/* first col  */}
          <div className="col p-2">
            <input
              type="text"
              placeholder="Option 3"
              className="form-control"
              value={option3}
              required
              onChange={(e) => {
                setOption3(e.target.value);
                if (
                  document.getElementById(props.questionInfo.id + "option3")
                    .checked === true
                ) {
                  setcorrectAnswer(e.target.value);
                }
              }}
            />
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name={props.index}
                id={props.questionInfo.id + "option3"}
                value={option3}
                defaultChecked={
                  correctAnswer === ""
                    ? false
                    : correctAnswer === option3
                    ? true
                    : false
                }
                required
                onChange={(e) => {
                  setcorrectAnswer(e.target.value);
                }}
              />
              <label
                className="form-check-label"
                htmlFor={props.questionInfo.id + "option3"}
              >
                Correct Answer
              </label>
            </div>
          </div>
          {/* second col   */}
          <div className="col p-2">
            <input
              type="text"
              style={{ height: "30px" }}
              placeholder="Option 4"
              className="form-control"
              required
              value={option4}
              onChange={(e) => {
                setOption4(e.target.value);
                if (
                  document.getElementById(props.questionInfo.id + "option4")
                    .checked === true
                ) {
                  setcorrectAnswer(e.target.value);
                }
              }}
            />
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name={props.index}
                id={props.questionInfo.id + "option4"}
                value={option4}
                defaultChecked={
                  correctAnswer === ""
                    ? false
                    : correctAnswer === option4
                    ? true
                    : false
                }
                required
                onChange={(e) => {
                  setcorrectAnswer(e.target.value);
                  if (e.target.checked === true) {
                    setcorrectAnswer(e.target.value);
                  }
                }}
              />
              <label
                className="form-check-label"
                htmlFor={props.questionInfo.id + "option4"}
              >
                Correct Answer
              </label>
            </div>
          </div>
          {/* second col end  */}
        </div>
        {/* options end */}
      </div>
      {/* <hr className="border-info w-100" /> */}
    </div>
  );
};
