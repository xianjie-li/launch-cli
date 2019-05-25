
const inquirer = require('inquirer');
const log = require('./log');

exports.confirm = (message) => {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          type: 'confirm',
          name: 'prompt',
          message
        }
      ])
      .then(({ prompt }) => {
        resolve(prompt);
      })
      .catch(err => {
        log.error(err);
      })
  })
}

exports.list = (message, choices) => {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'checked',
          choices,
          message
        }
      ])
      .then(({ checked }) => {
        resolve(checked);
      })
      .catch(err => {
        log.error(err);
      })
  })
}