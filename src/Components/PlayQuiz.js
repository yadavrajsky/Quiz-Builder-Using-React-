import React from "react";
import { useState } from "react";
import { StartQuiz } from "./StartQuiz";
export default function PlayQuiz(props) {
  const [startQuiz, setStartQuiz] = useState(false);
  const activeQuizes = props.quizes.filter((quiz) => quiz.status === "active");
  const [name, setname] = useState("");
  const [currentQuiz, setCurrentQuiz] = useState(
    activeQuizes.length !== 0 ? activeQuizes[0] : {}
  );
  let handleCurrentQuiz = (createdOn) => {
    setCurrentQuiz(
      activeQuizes.filter((quiz) => quiz.createdOn === createdOn)[0]
    );
  };
  let handleStartQuiz = (event) => {
    event.preventDefault();

    setStartQuiz(true);
  };
  return (
    <>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="StartQuiz"
        tabIndex="-1"
        aria-labelledby="StartQuizLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <form onSubmit={handleStartQuiz}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="StartQuizLabel">
                  Play Quiz
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Please input your Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    onChange={(e) => setname(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Start Quiz
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {startQuiz === true ? (
        <StartQuiz quiz={currentQuiz} name={name} />
      ) : (
        <div className="container  border-dark">
          <div className="mt-5 border  bg-white h-100">
            <div>
              <div className="h3 m-2">Choose quiz </div>
              <div className="m-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => handleCurrentQuiz(parseInt(e.target.value))}
                >
                  {activeQuizes.length !== 0 ? (
                    activeQuizes.map((quiz) => {
                      return (
                        <option value={quiz.createdOn} key={quiz.createdOn}>
                          {quiz.title}
                        </option>
                      );
                    })
                  ) : (
                    <option disabled={true}>No Quizes Found</option>
                  )}
                </select>
              </div>
              <div className="m-3">
                <div className="h6">Description:</div>
                <div className="p-3">{currentQuiz.desc}</div>
              </div>
              <div className="m-3">
                <div className="h5">Press Play button to begin the quiz</div>
                <div className="h5">Wish you All the best</div>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center p-3  border-top m-3">
              <button
                type="button"
                disabled={activeQuizes.length === 0 ? true : false}
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#StartQuiz"
              >
                Play
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
