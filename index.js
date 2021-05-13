/**
 * Test params object.
 * @typedef {Object} testObj - Test params object for `test()`.
 * @prop {number|boolean|string} exp - Expected value.
 * @prop {number|boolean|string} res - Resulted value.
 * @prop {string} msg - Message for the test.
 */

/**
 * Basic test for quick compares.
 * @param {testObj}
 */
const test = ({ exp, res, msg }) => {
  // Pass
  if (exp === res) {
    console.log(`# ${msg}\nPASS`);
  }
  // Fail
  else {
    console.log(`# ${msg}\n|__ FAIL`);
  }
};

export default {
  test
};
