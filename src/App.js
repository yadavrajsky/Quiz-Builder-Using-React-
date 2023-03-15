import Navbar from "./Components/Navbar";
import PlayQuiz from "./Components/PlayQuiz";
import CreateQuiz from "./Components/CreateQuiz";
import HomePage from "./Components/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyQuiz from "./Components/MyQuiz";
import React, { useEffect, useState } from "react";
import { UpdateQuiz } from "./Components/UpdateQuiz";
function App() {
  let quizes_info;
  if (localStorage.getItem("quizes") == null) {
    quizes_info = [];
  } else {
    quizes_info = JSON.parse(localStorage.getItem("quizes"));
  }
  const [quizes, setQuizes] = useState(quizes_info);
  let handleQuizStorage = (quiz) => {
    setQuizes([...quizes, quiz]);
  };
  useEffect(() => {
    localStorage.setItem("quizes", JSON.stringify(quizes));
  }, [quizes]);
  let handleQuizUpdate = (quiz) => {
    const newState = quizes.map((MapQuiz) => {
      if (MapQuiz.createdOn === quiz.createdOn) {
        MapQuiz["title"] = quiz.title;
        MapQuiz["desc"] = quiz.desc;
        MapQuiz["questions"] = quiz.questions;
      }
      return MapQuiz;
    });
    setQuizes([...newState]);
    alert("Updated Successfully");
  };
  let handleDeleteQuiz = (id) => {
    setQuizes(quizes.filter((quiz) => quiz.createdOn !== id));
    alert("Quiz deleted Successfully");
  };
  let handleQuizStatus = (id, status) => {
    const newState = quizes.map((MapQuiz) => {
      if (MapQuiz.createdOn === id) {
        MapQuiz["status"] = status === "active" ? "inactive" : "active";
      }
      return MapQuiz;
    });
    setQuizes([...newState]);
  };
  return (
    <div>
      <Router>
        <Navbar
          title={
            <img
              alt="Almabetter"
              src="../../quantafile.png"
              height="30px"
              width="30px"
            /> 
          }
        />
        <div className="position-relative" style={{ marginTop: "80px" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/MyQuiz"
              element={
                <MyQuiz
                  quizes={quizes}
                  handleQuizStatus={handleQuizStatus}
                  handleDeleteQuiz={handleDeleteQuiz}
                />
              }
            />
            <Route path="/PlayQuiz" element={<PlayQuiz quizes={quizes} />} />
            <Route
              path="/CreateQuiz"
              element={
                <CreateQuiz
                  handleQuizStorage={handleQuizStorage}
                  quizes={quizes}
                />
              }
            />
            <Route
              path="/update/:id"
              element={
                <UpdateQuiz
                  quizes={quizes}
                  handleQuizUpdate={handleQuizUpdate}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
