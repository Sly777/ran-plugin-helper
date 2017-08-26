const execSync = require('child_process').execSync;
const helpers = require('../_helpers');

const installPackage = (package, isMulti = false) => {
  const packageStr = isMulti ? package.replace(' ', ', ') : package;
  const spinner = helpers.showSpinnerWithText(`Installing ${packageStr}...`);

  try {
    execSync(`yarn add ${package}`, {
      cwd: helpers.getMainFolder()
    });
    spinner.succeed(`${packageStr} ${isMulti ? 'are' : 'is'} installed`);
  } catch (err) {
    spinner.fail(`Error on ${packageStr}: ${err.stderr}`);
  }
};

module.exports = (packages) => {
  if (helpers.isArray(packages)) {
    installPackage(packages.join(' '), true);
  } else {
    installPackage(packages);
  }
};
