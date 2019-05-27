#!/usr/bin/env node
const axios = require('axios');
const ora = require('ora');

const config = require('../common/config');
const filterRepo = require('../common/filterRepo');
const log = require('../common/log');

const downloadSpinner = ora('获取模板信息...').start();
downloadSpinner.color = 'blue';

axios(config.listUrl)
  .then(res => {
    downloadSpinner.stop();
    if(res && res.status === 200) {
      return res.data;
    }
  })
  .then(res => {
    filterRepo(res).forEach(repo => {
      log.log(repo.name.replace(config.repoPrefix, ''))
    })
  })
  .catch(err => {
    log.warning('加载失败!');
    log.error(err);
  })