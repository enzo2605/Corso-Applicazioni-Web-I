/* eslint-disable no-unused-vars */
import { Answer, Question } from "./QAModels.mjs"
import NavHeader from "./NavHeader";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import QuestionDescription from "./QuestionDescription";
import Answers from "./Answers";
import { useState } from "react";

const fakeQuestion = new Question(
  1, 
  'Is JavaScript better than Python', 
  'enzoiannucci2@gmail.com',
  '2025-02-20'
);
fakeQuestion.init();
const fakeAnswers = fakeQuestion.getAnswers();

function App() {
  const [question, setQuestion] = useState(fakeQuestion);
  const [answers, setAnswers] = useState(fakeAnswers);

  const voteUp = (answerId) => {
    setAnswers((oldAnswers) => {
      return oldAnswers.map((ans) => {
        if (answerId === ans.id) 
          // ritorno una nuova, aggiornata, risposta
          return new Answer(ans.id, ans.text, ans.email, ans.date, ans.score +1);
        else
          return ans;
      });
    });
  }
  
  return (
    <>
      <NavHeader questionNum={question.id} />
      <Container fluid className="mt-3">
        <QuestionDescription question={question} />
        <Answers answers={answers} voteUp={voteUp} /> 
      </Container>
    </>
  )
}

export default App
