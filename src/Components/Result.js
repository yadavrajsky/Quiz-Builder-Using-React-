import React from "react";
import "./Result.css";
export default function Result(props) {
  return (
  <div className="container" id="result">
    <div className="h3">
    Congratulations  {props.name}
      </div>
      <div className="h4">
      You Scored : {props.score}/{props.totalScore}
      </div>

  </div>);
}
