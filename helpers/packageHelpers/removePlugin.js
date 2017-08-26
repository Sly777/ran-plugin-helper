const execSync = require('child_process').execSync;
const helpers = require('../_helpers');

const removePackage = (package, isMulti = false) => {
  const packageStr = isMulti ? package.replace(' ', ', ') : package;
  const spinner = helpers.showSpinnerWithText(`Removing ${packageStr}...`);

  try {
    execSync(`yarn remove ${package}`, {
      cwd: helpers.getMainFolder()
    });
    spinner.succeed(`${packageStr} ${isMulti ? 'are' : 'is'} removed`);
  } catch (err) {
    spinner.fail(`Error on ${packageStr}: ${err.stderr}`);
  }
};

module.exports = (packages) => {
  if (helpers.isArray(packages)) {
    removePackage(packages.join(' '), true);
  } else {
    removePackage(packages);
  }
};
