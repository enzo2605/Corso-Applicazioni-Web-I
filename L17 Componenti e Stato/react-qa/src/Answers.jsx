/* eslint-disable react/prop-types */
import {Row, Col, Table, Button} from 'react-bootstrap'
function Answers(props) {
  return (
    <>
      <Row>
        <Col as='h2'>Answers ({props.answers.length}) :</Col>
      </Row>
      <Row>
        <Col lg={10} className='mx-auto'>
          <AnswerTable answers={ props.answers } voteUp = { props.voteUp }  />
        </Col>
      </Row>
    </>
  )
}

function AnswerTable(props) {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Date</th>
          <th>Text</th>
          <th>Author</th>
          <th>Score</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        { props.answers.map((ans) => <AnswerRow answer={ans} key={ans.id} voteUp = { props.voteUp } />) }
      </tbody>
    </Table>
  )
}

function AnswerRow(props) {
  return (
    <>
      <tr>
        <AnswerData answer={props.answer} />
        <AnswerAction voteUp={props.voteUp} answerId={props.answer.id}/>
      </tr>
    </>
  )
}

function AnswerData(props) {
  return (
    <>
      <td>{props.answer.date.format('YYYY-MM-DD')}</td>
      <td>{props.answer.text}</td>
      <td>{props.answer.email}</td>
      <td>{props.answer.score}</td>
    </>
  )
}

function AnswerAction(props) {
  return (
    <>
      <td>
        <Button variant='warning' onClick={() => { props.voteUp(props.answerId) }}> vote up </Button>
        <Button variant='primary'> edit </Button>
        <Button variant='danger'> delete </Button>
      </td>
    </>
  )
}

export default Answers;