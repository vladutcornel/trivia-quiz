import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Container, Form } from "react-bootstrap";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import * as OpenTrivia from "../../api/OpenTrivia";
import Select from "../../components/Select";
import * as settingsActions from "../../store/settings/actions";

/**
 * Page for the user to change the settings
 *
 * @param {Settings} settings
 * @param {History} history
 * @param {Function} loadSettings
 * @param {Function} saveSettings
 * @returns {JSX.Element}
 * @constructor
 */
function Settings({
  settings, history, loadSettings, saveSettings,
}) {
  const [userSettings, setUserSettings] = useState({ ...settings });
  useEffect(() => {
    loadSettings();
  }, []);

  useEffect(() => {
    setUserSettings({ ...settings });
  }, [settings]);

  const updateSetting = (key, value) => {
    setUserSettings({
      ...userSettings,
      [key]: value,
    });
  };

  const save = () => {
    saveSettings(userSettings);
    history.push("/");
  };

  return (
    <Container>
      <Form.Group>
        <Form.Label>Number of questions</Form.Label>
        <Select
          value={userSettings.amount}
          onChange={(event) => updateSetting("amount", parseInt(event.target.value, 10))}
          values={[10, 15, 20]}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Difficulty</Form.Label>
        <Select
          value={userSettings.difficulty}
          onChange={(event) => updateSetting("difficulty", event.target.value)}
          values={{
            [OpenTrivia.DIFFICULTY.ANY]: "Any",
            [OpenTrivia.DIFFICULTY.EASY]: "Easy",
            [OpenTrivia.DIFFICULTY.MEDIUM]: "Medium",
            [OpenTrivia.DIFFICULTY.HARD]: "Hard",
          }}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Type of questions</Form.Label>
        <Select
          value={userSettings.type}
          onChange={(event) => updateSetting("type", event.target.value)}
          values={{
            [OpenTrivia.SELECT_TYPE.ANY]: "Any",
            [OpenTrivia.SELECT_TYPE.MULTIPLE]: "Multiple choice",
            [OpenTrivia.SELECT_TYPE.BOOLEAN]: "True/False",
          }}
        />
      </Form.Group>

      <div className="d-flex justify-content-between">
        <Button variant="outline-primary" onClick={save}>Cancel</Button>

        <Button onClick={save}>Save</Button>
      </div>
    </Container>
  );
}

Settings.propTypes = {
  settings: PropTypes.shape({
    amount: PropTypes.number,
    type: PropTypes.string,
    difficulty: PropTypes.string,
  }).isRequired,

  saveSettings: PropTypes.func.isRequired,
  loadSettings: PropTypes.func.isRequired,

  history: PropTypes.shape({
    replace: PropTypes.func,
    push: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapDispatchToProps = (dispatch) => ({
  loadSettings: () => dispatch(settingsActions.loadSettingsFromStorage()),
  saveSettings: (settings) => dispatch(settingsActions.saveSettings(settings)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Settings));
