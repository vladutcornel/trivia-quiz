import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Button, Form, Modal,
} from "react-bootstrap";
import * as questionsActions from "../../store/questions/actions";
import * as leaderboardActions from "../../store/leaderboard/actions";
import "./index.scss";

/**
 * Modal for the game results
 *
 * @param {Question[]} questions
 * @param {Object} leaderboardLatest
 * @param {History} history
 * @param {Function} loadQuestions
 * @param {Function} loadQuestionsFromAPI
 * @param {Function} deleteQuestionsFromMemory
 * @param {Function} loadLatestPlayer
 * @param {Function} saveScore
 * @param {Function} onRetry
 * @returns {JSX.Element}
 * @constructor
 */
function Results({
  questions,
  leaderboardLatest,

  history,

  loadQuestions,
  loadQuestionsFromAPI,
  deleteQuestionsFromMemory,

  loadLatestPlayer,
  saveScore,

  onRetry,
}) {
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState(leaderboardLatest.name ?? "");

  useEffect(() => {
    setLoading(true);
    Promise.all([
      questions.length < 1 ? loadQuestions() : Promise.resolve(),
      loadLatestPlayer(),
    ]).then(() => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setName(leaderboardLatest.name);
  }, [leaderboardLatest.name]);

  if (isLoading) {
    return (
      <Modal centered show>
        <Modal.Body>
          Loading...
        </Modal.Body>
      </Modal>
    );
  }

  const answersCorrect = questions.filter((q) => q.userAnswer === q.correctAnswer).length;

  const retry = async () => {
    setLoading(true);
    await loadQuestionsFromAPI();
    deleteQuestionsFromMemory();
    onRetry();
  };

  const save = async () => {
    await saveScore({
      name,
      answersCorrect,
    });

    history.push("/leaderboard");
  };

  return (
    <Modal centered show keyboard={false} backdrop="static">
      <Modal.Header>
        <Modal.Title>
          {`You answered ${answersCorrect}/${questions.length}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Do you want to save your result?
        </p>
        <Form.Group>
          <Form.Label>Your name:</Form.Label>
          <Form.Control value={name} onChange={(event) => setName(event.target.value)} />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={retry}>Try again</Button>
        <Button variant="primary" onClick={save}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

Results.propTypes = {
  loadQuestions: PropTypes.func.isRequired,
  loadQuestionsFromAPI: PropTypes.func.isRequired,
  deleteQuestionsFromMemory: PropTypes.func.isRequired,

  loadLatestPlayer: PropTypes.func.isRequired,
  saveScore: PropTypes.func.isRequired,

  onRetry: PropTypes.func,

  leaderboardLatest: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,

  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,

  history: PropTypes.shape({
    replace: PropTypes.func,
    push: PropTypes.func,
  }).isRequired,
};

Results.defaultProps = {
  onRetry: () => {},
};

const mapStateToProps = (state) => ({
  questions: state.questions.questions,
  leaderboardLatest: state.leaderboard.latest,
});

const mapDispatchToProps = (dispatch) => ({
  loadQuestions: () => dispatch(questionsActions.loadQuestionsFromDB()),
  deleteQuestionsFromMemory: () => dispatch(questionsActions.deleteQuestionsFromMemory()),
  loadQuestionsFromAPI: () => dispatch(questionsActions.loadQuestionsFromAPI()),

  loadLatestPlayer: () => dispatch(leaderboardActions.loadLatestPlayer()),
  saveScore: (payload) => dispatch(leaderboardActions.saveScore(payload)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Results));
