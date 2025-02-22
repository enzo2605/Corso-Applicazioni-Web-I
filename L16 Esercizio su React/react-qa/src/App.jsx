import { Question } from "./QAModels.mjs"
import NavHeader from "./NavHeader";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import QuestionDescription from "./QuestionDescription";
import Answers from "./Answers";

const fakeQuestion = new Question(
  1, 
  'Is JavaScript better than Python', 
  'enzoiannucci2@gmail.com',
  '2025-02-20'
);
fakeQuestion.init();

function App() {
  return (
    <>
      <NavHeader questionNum = { fakeQuestion.id } />
      <Container fluid className="mt-3">
        <QuestionDescription question = { fakeQuestion } />
        <Answers answers = { fakeQuestion.getAnswers() } /> 
      </Container>
    </>
  )
}

export default App
