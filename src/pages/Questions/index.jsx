import React, { useEffect, useState, Suspense } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import {
  Alert, Button, Carousel, Container, Modal,
} from "react-bootstrap";
import { connect } from "react-redux";

import * as questionsActions from "../../store/questions/actions";
import Question from "./Question";

import "./index.scss";
import Countdown from "../../components/Countdown";

const Results = React.lazy(() => import("../Results"));

/**
 * Page to answer the trivia quiz
 *
 * @param loadQuestions
 * @param questions
 * @param expireTime
 * @param match
 * @param history
 * @returns {JSX.Element|boolean}
 * @constructor
 */
function Questions({
  loadQuestions,
  questions,
  expireTime,
  match,
  history,
}) {
  const [isLoading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  useEffect(() => {
    if (questions.length < 1) {
      setLoading(true);
      loadQuestions().then(() => {
        setLoading(false);
      });
    }
  }, [match.params.question]);

  if (isLoading) {
    return <Alert>Loading...</Alert>;
  }

  const updateSlide = (index) => {
    if (index < questions.length) {
      history.replace(`/q/${index + 1}`);
    }
  };

  const currentQuestionNumber = parseInt(match.params.question, 10);

  const answeredCount = questions.filter((q) => q.userAnswer >= 0).length;

  const retry = () => {
    history.push("/q/1");
    setShowResults(false);
  };

  let nextIcon;
  if (currentQuestionNumber === questions.length) {
    nextIcon = React.createElement(Button, {
      disabled: answeredCount !== questions.length,
      onClick(event) {
        event.stopPropagation();
        setShowResults(true);
        return false;
      },
    }, "Submit");
  }
  const prevIcon = currentQuestionNumber === 1 ? null : undefined;

  return (
    <Container className="Questions">
      <div className="countdown">
        {showResults ? null : (
          <Countdown until={expireTime} onTimeout={() => setShowResults(true)} />
        )}
      </div>
      <Carousel
        activeIndex={currentQuestionNumber - 1}
        interval={null}
        onSelect={updateSlide}
        prevLabel="Previous question"
        nextLabel="Next question"
        prevIcon={prevIcon}
        nextIcon={nextIcon}
        wrap
        touch={false}
        onSlide={() => false}
      >
        {questions.map((question, index) => (
          <Carousel.Item key={question.id}>
            <Question
              question={question}
              questionNumber={`${index + 1} of ${questions.length}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      {!showResults ? null : (
        <Suspense fallback={<Modal>Loading...</Modal>}>
          <Results onRetry={retry} />
        </Suspense>
      )}
    </Container>
  );
}

Questions.propTypes = {
  loadQuestions: PropTypes.func.isRequired,
  expireTime: PropTypes.number.isRequired,

  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,

  match: PropTypes.shape({
    params: PropTypes.shape({
      question: PropTypes.string,
    }),
  }).isRequired,

  history: PropTypes.shape({
    replace: PropTypes.func,
    push: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  questions: state.questions.questions,
  expireTime: state.questions.expire,
});

const mapDispatchToProps = (dispatch) => ({
  loadQuestions: () => dispatch(questionsActions.loadQuestionsFromDB({ amount: 10 })),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Questions));
