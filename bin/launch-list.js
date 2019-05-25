#!/usr/bin/env node

const axios = require('axios');

const config = require('../common/config');
const log = require('../common/log');

axios(config.listUrl)
  .then(res => {
    if(res && res.status === 200) {
      return res.data
    }
  })
  .then(res => {
    res.forEach(repo => {
      log.log(repo.name)
    })
  })
  .catch(err => {
    log.warning('加载失败!');
    log.error(err);
  })