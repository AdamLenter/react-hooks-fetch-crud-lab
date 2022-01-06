import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList( {questionList, questionsLoaded, deleteQuestion, updateCorrectAnswer } ) {  
  if(questionsLoaded) {
    return (
      <section>
        <h1>Quiz Questions</h1>
        <ul>
          {questionList.map((question) => {
            
            console.log(question.id)

            return(
              <QuestionItem key={question.id} question={question} deleteQuestion = {deleteQuestion} updateCorrectAnswer = {updateCorrectAnswer} />
            )
          })}
        </ul>
      </section>
    );
  }
  else {
    return (
      <p>Loading...</p>
    )
  }
}

export default QuestionList;
