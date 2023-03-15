import * as React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="container">
        <div className="btn-group p-3" role="group" aria-label="Basic example">
          <Link
            to="/PlayQuiz"
            type="button"
            className="btn btn-primary btn-lg m-3 rounded"
          >
            Play Quiz
          </Link>

          <Link
            to="/CreateQuiz"
            type="button"
            className="btn btn-primary btn-lg m-3 rounded"
          >
            Create Quiz
          </Link>

          <Link
            to="/MyQuiz"
            type="button"
            className="btn btn-primary btn-lg m-3 rounded"
          >
            My Quizes
          </Link>
        </div>
      </div>
    </>
  );
}
