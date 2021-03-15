import React from "react";
import PropTypes from "prop-types";
import { Card, Form, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import * as questions from "../../../store/questions/actions";

function Question({
  question, showAnswer, saveAnswer, questionNumber,
}) {
  return (
    <Card>
      <Card.Header>
        Question
        {questionNumber ? ` ${questionNumber}` : ""}
      </Card.Header>
      <Card.Body>
        <p>
          {question.question}
        </p>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {question.answers.map((answer, index) => (
          <ListGroup.Item
            key={answer}
            onClick={() => saveAnswer(question, index)}
          >
            <Form.Check
              id={`answer${question.id}-${index}`}
              name={`answer${question.id}`}
              value={index}
              type="radio"
              label={answer}
              isValid={showAnswer && index === question.correctAnswer}
              isInvalid={showAnswer && index !== question.correctAnswer}
              checked={question.userAnswer === index}
              onChange={() => saveAnswer(question, index)}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}

Question.propTypes = {
  questionNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  showAnswer: PropTypes.bool,
  saveAnswer: PropTypes.func,

  question: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    question: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.string),
    correctAnswer: PropTypes.number,
    userAnswer: PropTypes.number,
  }).isRequired,
};

Question.defaultProps = {
  questionNumber: 0,
  showAnswer: false,
  saveAnswer: () => {},
};

const mapDispatchToProps = (dispatch) => ({
  saveAnswer: (question, answerIndex) => dispatch(questions.saveAnswer({ question, answerIndex })),
});

export default connect(null, mapDispatchToProps)(Question);
