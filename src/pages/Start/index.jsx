import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Alert, Button, Container } from "react-bootstrap";
import PropTypes from "prop-types";

import * as questions from "../../store/questions/actions";

import "./index.scss";

/**
 * Landing page of the application
 *
 * @param {Function} loadQuestions
 * @param {History} history
 * @returns {JSX.Element}
 * @constructor
 */
function Start({ loadQuestions, history }) {
  const [isLoading, setLoading] = useState(false);

  const start = async () => {
    setLoading(true);
    await loadQuestions();

    history.push("/q/1");
  };

  return (
    <Container className="Start">
      <div>
        <p className="App-welcome">
          Welcome to my Trivia Quiz app
        </p>
        {isLoading ? <Alert>Loading</Alert> : <Button onClick={start}>Start</Button>}
      </div>
    </Container>
  );
}

Start.propTypes = {
  loadQuestions: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loadQuestions: () => dispatch(questions.loadQuestionsFromAPI({ amount: 10 })),
});

export default withRouter(connect(null, mapDispatchToProps)(Start));
