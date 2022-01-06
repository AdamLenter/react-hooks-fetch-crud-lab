import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  const [questionList, setQuestionList] = useState([])
  const [questionsLoaded, setQuestionsLoaded] = useState(false)

  useEffect(()=> {
    fetch("http://localhost:4000/questions")
      .then((r)=>r.json())
      .then((questionList) => setQuestionList(questionList))
      .then(()=>setQuestionsLoaded(true))   
      }, [])

  function addQuestion(formData) {
    const newQuestionList = [...questionList, formData];
    setQuestionList(newQuestionList)
    setPage("List")
  }

  function deleteQuestion(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE"}
      )

    const newQuestionList = questionList.filter((question) => question.id !== id);
    setQuestionList(newQuestionList);
  }

  function updateCorrectAnswer(id, updatedQuestion) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
        },
      body: JSON.stringify(
          {
          correctIndex: updatedQuestion.correctIndex
          }
        )
      }
    )
    console.log(id);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addQuestion = {addQuestion} /> : <QuestionList questionList = {questionList} questionsLoaded = {questionsLoaded} deleteQuestion = {deleteQuestion} updateCorrectAnswer = {updateCorrectAnswer} />}
    </main>
  );
}

export default App;
