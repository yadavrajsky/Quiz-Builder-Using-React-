import React from "react";
import { Link } from "react-router-dom";
export default function MyQuiz(props) {
  return (
    <div className="container">
      <div className="mt-5 mb-2 p-3">
        <h3 className="ms-auto">My Quizes</h3>
        <div className="justify-content-around">
          {props.quizes.length === 0 ? <span className="me-2">No Quizes</span> : ""}
          <Link to="/CreateQuiz">
            <button type="button" className="btn btn-primary float-right mb-3">
              Create New Quiz
            </button>
          </Link>
        </div>
      </div>
      <div className=" ms-5">
        <table className="table rounded border">
          <thead>
            <tr>
              <th>Quiz No</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Created on</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.quizes.map((quiz) => {
              let id = quiz.createdOn;
              let to = "/update/" + id;
              let createdOn = new Date(quiz.createdOn);
              return (
                <tr key={quiz.createdOn}>
                  <td>{props.quizes.indexOf(quiz) + 1}</td>
                  <td>{quiz.title}</td>
                  <td>{quiz.desc}</td>
                  <td>
                    <div className="form-check form-switch ">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        aria-checked="false"
                        id="flexSwitchCheckDefault"
                        defaultChecked={quiz.status === "active" ? true : false}
                        value={quiz.status}
                        onChange={(e) =>
                          props.handleQuizStatus(quiz.createdOn, e.target.value)
                        }
                      />
                      <label
                        className="form-check-label text-capitalize"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        {quiz.status}
                      </label>
                    </div>
                  </td>

                  <td>
                    {createdOn.getFullYear() +
                      "/" +
                      createdOn.getMonth() +
                      "/" +
                      createdOn.getDate() +
                      " " +
                      createdOn.getHours() +
                      ":" +
                      createdOn.getMinutes()}
                  </td>
                  <td>
                    <div className="btn-group" role="group">
                      <Link to={to} className="btn btn-sm btn-primary me-2">
                        <i className="bi bi-pencil-square"></i>
                      </Link>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => {
                          props.handleDeleteQuiz(quiz.createdOn);
                        }}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
