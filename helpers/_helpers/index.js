const path = require('path');
const fs = require('fs');
const figlet = require('figlet');
const chalk = require('chalk');
const ora = require('ora');

/**
 * Get Folder Path of Main Application
 * @method getMainFolder
 * @return {string} Main App Folder Path
 */
const getMainFolder = () => path.dirname(require.main.filename);

/**
 * Get Package.json of Main Application
 * @method getMainPackage
 * @return {object} Package.json
 */
const getMainPackage = () => {
  const appDir = getMainFolder();
  const obj = JSON.parse(fs.readFileSync(`${appDir}/package.json`, 'utf8'));
  return obj;
};

/**
 * Get RAN! Version
 * @method getRanVersion
 * @return {string} RAN! Version
 */
const getRanVersion = () => getMainPackage().version;

/**
 * Write RAN! Boilerplate Name
 * @method writeRan
 * @param  {Function} callback callback after finished
 * @return {void}
 */
const writeRan = (callback) => {
  process.stdout.write('\n');
  process.stdout.write(chalk.yellow.bold(
    figlet.textSync(
      'RAN!',
      {
        verticalLayout: 'full'
      }
    )
  ));
  process.stdout.write('\n');
  if (callback) callback();
};

const showPluginName = (pluginName) => {
  writeRan(() => {
    process.stdout.write(chalk.dim('Plugin name: ') + chalk.magenta(pluginName));
    process.stdout.write('\n');
  });
};

const showSpinnerWithText = (text) => ora(text).start();

const isArray = (a) => Object.prototype.toString.call(a) === '[object Array]';

module.exports = {
  getMainFolder,
  getMainPackage,
  getRanVersion,
  writeRan,
  showSpinnerWithText,
  showPluginName,
  isArray,
};
