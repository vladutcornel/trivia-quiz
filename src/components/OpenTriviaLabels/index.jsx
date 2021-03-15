/* eslint-disable import/prefer-default-export */
import React from "react";
import PropTypes from "prop-types";
import { DIFFICULTY, SELECT_TYPE } from "../../api/OpenTrivia";

/**
 * Component to render the OpenTrivia difficulty
 * @param {String} difficulty
 * @returns {JSX.Element}
 * @constructor
 */
export function DifficultyLabel({ difficulty }) {
  return (
    <>
      {{
        [DIFFICULTY.ANY]: "Any",
        [DIFFICULTY.EASY]: "Easy",
        [DIFFICULTY.MEDIUM]: "Medium",
        [DIFFICULTY.HARD]: "Hard",
      }[difficulty]}
    </>
  );
}

DifficultyLabel.propTypes = {
  difficulty: PropTypes.string.isRequired,
};

/**
 * Component to render the OpenTrivia answer type
 *
 * @param {String} type
 * @returns {JSX.Element}
 * @constructor
 */
export function SelectTypeLabel({ type }) {
  return (
    <>
      {{
        [SELECT_TYPE.ANY]: "Any",
        [SELECT_TYPE.BOOLEAN]: "True/False",
        [SELECT_TYPE.MULTIPLE]: "Multiple",
      }[type]}
    </>
  );
}

SelectTypeLabel.propTypes = {
  type: PropTypes.string.isRequired,
};
