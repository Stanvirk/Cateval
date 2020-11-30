/**
 * Types of operations performed within rule evaluator.
 * @enum {string}
 */
const CompareType = {
    /** Source is less than target*/
    L: '<',
    /** Source is less or equal to target*/
    LE: '<=',
    /** Source and target are equal*/
    E: '==',
    /** Source is greater than target*/
    G: '>',
    /** Source is less or equal to target */
    FE:'>='
  };

module.exports = CompareType;