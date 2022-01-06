import React from "react";

function QuestionItem({ question, deleteQuestion, updateCorrectAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete() {
    deleteQuestion(id);
  }

  function handleUpdateCorrectAnswer(event) {
    const updatedQuestion = {
      id: id,
      prompt: prompt, 
      answers: answers, 
      correctIndex: parseInt(event.target.value, 10)
    }
    updateCorrectAnswer(id, updatedQuestion);
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange = {handleUpdateCorrectAnswer} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick = {handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
