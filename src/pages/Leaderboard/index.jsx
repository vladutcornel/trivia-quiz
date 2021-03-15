import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import {
  Alert, Badge, Card, Container,
} from "react-bootstrap";
import * as leaderboardActions from "../../store/leaderboard/actions";

import "./index.scss";
import { DifficultyLabel, SelectTypeLabel } from "../../components/OpenTriviaLabels";

/**
 * Page for all the saved results
 *
 * @param leaderboard
 * @param leaderboardLatest
 * @param loadLeaderboard
 * @param loadLatestPlayer
 * @returns {JSX.Element}
 * @constructor
 */
function Leaderboard({
  leaderboard,
  leaderboardLatest,

  loadLeaderboard,
  loadLatestPlayer,
}) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      loadLeaderboard(),
      loadLatestPlayer(),
    ]).then(() => {
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Alert>Loading...</Alert>;
  }

  return (
    <Container>
      {leaderboard.map((play, index) => (
        <Card key={play.id} className={`mb-2 ${play.id === leaderboardLatest.id ? "bg-success" : ""}`}>
          <Card.Body>
            <Card.Title className="d-flex justify-content-between">
              <div>
                #
                {index + 1}
                {" "}
                {play.name}
              </div>
              <div>
                <Badge variant="primary">{Math.round(play.percentage)}</Badge>
              </div>
            </Card.Title>

            <div className="d-flex justify-content-around">
              <Badge variant="secondary">
                Difficulty:
                <DifficultyLabel difficulty={play.difficulty} />
              </Badge>
              <Badge variant="secondary">
                Options:
                <SelectTypeLabel type={play.type} />
              </Badge>
              <Badge variant="secondary">
                Answers:
                {`${play.answersCorrect}/${play.answersTotal}`}
              </Badge>
            </div>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

Leaderboard.propTypes = {
  loadLatestPlayer: PropTypes.func.isRequired,
  loadLeaderboard: PropTypes.func.isRequired,

  leaderboard: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    difficulty: PropTypes.string,
    answersCorrect: PropTypes.number,
    answersTotal: PropTypes.number,
    percentage: PropTypes.number,
  })).isRequired,

  leaderboardLatest: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,

  history: PropTypes.shape({
    replace: PropTypes.func,
    push: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  leaderboard: state.leaderboard.top,
  leaderboardLatest: state.leaderboard.latest,
});

const mapDispatchToProps = (dispatch) => ({
  loadLatestPlayer: () => dispatch(leaderboardActions.loadLatestPlayer()),
  loadLeaderboard: () => dispatch(leaderboardActions.loadLeaderboard()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Leaderboard));
