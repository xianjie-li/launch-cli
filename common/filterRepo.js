const config = require('./config');

module.exports = function(allRepoList) {
  return allRepoList.filter(v => {
    if(v.name.search(config.repoPrefix) !== -1) return true;
  })
}