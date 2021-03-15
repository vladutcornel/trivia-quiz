import axios from "axios";

export const DIFFICULTY = Object.freeze({
  ANY: "any",
  EASY: "easy",
  MEDIUM: "medium",
  HARD: "hard",
});

export const SELECT_TYPE = Object.freeze({
  ANY: "any",
  MULTIPLE: "multiple",
  BOOLEAN: "boolean",
});

/**
 * Helper to work with the OpenTrivia API
 */
export default class OpenTrivia {
  constructor(options) {
    this.options = {
      ...{
        difficulty: DIFFICULTY.ANY,
        type: SELECT_TYPE.ANY,
      },

      ...options,
    };

    this.axios = axios.create({
      baseURL: "https://opentdb.com/",
    });
  }

  async load(amount = 10) {
    const params = {
      ...this.options,
      amount,
    };

    if (params.difficulty === DIFFICULTY.ANY) {
      params.difficulty = "";
    }

    if (params.type === SELECT_TYPE.ANY) {
      params.type = "";
    }

    const response = await this.axios.get("api.php", {
      params,
    });

    const { data } = response;

    if (data.response_code !== 0) {
      throw new Error("Failed to load questions");
    }

    return data.results;
  }

  setDifficulty(difficulty) {
    this.options.difficulty = difficulty;
  }

  setType(type) {
    this.options.type = type;
  }
}
