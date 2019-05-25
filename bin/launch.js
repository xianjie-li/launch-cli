#!/usr/bin/env node

const program = require('commander');

program
  .usage('<command> [options]')
  .version(require('../package').version, '-v, --version')
  .command('create', '创建项目')
  .command('list', '查看模板列表')
  .parse(process.argv)