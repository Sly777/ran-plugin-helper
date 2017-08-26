const semver = require('semver');
const helpers = require('../_helpers');

module.exports = (versionRange) => {
  const spinner = helpers.showSpinnerWithText('Checking Version...');
  const result = semver.satisfies(helpers.getRanVersion(), versionRange);
  if (result) {
    spinner.succeed('RAN version is OK');
  } else {
    spinner.fail('Please upgrade RAN version');
    process.exit(0);
  }
};
