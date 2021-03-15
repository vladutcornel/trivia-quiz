import * as OpenTrivia from "../../api/OpenTrivia";

/**
 * Default settings
 */
export default Object.freeze({
  amount: 10,
  difficulty: OpenTrivia.DIFFICULTY.ANY,
  type: OpenTrivia.SELECT_TYPE.ANY,
});
