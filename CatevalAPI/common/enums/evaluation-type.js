/**
 * Types of operations performed within rule group evaluator.
 * @enum {string}
 */
const EvaluationType = {
    /** conjunction of rules evaluation results */
    AND: 'AND',
    /** Disjunction of rules evaluation results  */
    OR: 'OR'
  };

module.exports = EvaluationType;