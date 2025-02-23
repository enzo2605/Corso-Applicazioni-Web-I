/* eslint-disable react/prop-types */
import { Row, Col } from 'react-bootstrap';

function QuestionDescription({ question }) {
  return (
    <>
      <Row>
        <Col md={6} as="p">
          <strong>Question #{question.id}</strong>
        </Col>
        <Col md={6} as="p" className="text-end">
          Asked by{" "}
          <span className="badge rounded-pill text-bg-secondary">
            {question.email}
          </span>
        </Col>
      </Row>
      <Row>
        <Col as="p" className="lead">
          {question.text}
        </Col>
      </Row>
    </>
  );
}

export default QuestionDescription;
