/**
 * Helper function to safely update the provided state
 *
 * @param {Object} state
 * @param {Object} updates
 * @returns {Object}
 */
export default function fillState(state, updates) {
  return {
    ...state,
    ...updates,
  };
}
