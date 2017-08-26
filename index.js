const checkVersion = require('./helpers/otherHelpers/checkVersion');
const installPlugin = require('./helpers/packageHelpers/installPlugin');
const removePlugin = require('./helpers/packageHelpers/removePlugin');

/*
checkVersion('>= 0.1');
installPlugin([
  'dotenv',
  'import-export'
]);
removePlugin([
  'dotenv',
  'import-export'
]);
*/

module.exports = {
  checkVersion,
  installPlugin,
  removePlugin
};
