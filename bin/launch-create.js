#!/usr/bin/env node

const path = require('path');
const fs = require('fs');

const program = require('commander');
const chalk = require('chalk');
const ora = require('ora');
const download = require('download-git-repo');

const inquirer = require('../common/inquirer');
const log = require('../common/log');
const config = require('../common/config');
const exec = require('../common/exec');

const processDir = `${process.cwd()}`; // 当前进程执行目录


program
  .usage('<template-name> <project-name>')
  .parse(process.argv)

program.on('--help', () => {
  console.log(chalk.blue('  heloInfo: <commder> create <template-name> <project-name>'))
})

if(program.args.length === 0) program.help();

let templateName = program.args[0];
let projectName = program.args[1];

if(!templateName || !projectName) {
  log.error(`缺少必要参数${chalk.red('<template-name>')}, ${chalk.red('<project-name>')}`);
}

let projectDir = path.join(processDir, projectName);

if(fs.existsSync(projectDir)) {
  log.error(`目录 ${path.sep}${chalk.red(projectName)} 已存在`)
} else {
  downloadTemplate();
}


function downloadTemplate() {
  const downloadSpinner = ora('下载模板中...').start();
  downloadSpinner.color = 'blue';
  
  download(config.repo + config.repoPrefix + templateName, projectDir, { clone: false }, async function (err) {
    if(err) log.error(err);
    downloadSpinner.succeed('下载完成');

    let installModules = await inquirer.confirm('是否下载依赖？');

    process.chdir(projectDir);

    const packagePath = path.join(projectDir, './package.json');
    let pageage = require(packagePath);
    pageage.name = projectName;
    pageage.version = '1.0.0';
    fs.writeFileSync(packagePath, JSON.stringify(pageage, '', 2), 'utf-8');

    if(installModules) {
      let installModules = await inquirer.list('选择下载方式', ['yarn', 'npm install', 'cnpm install']);
      downloadSpinner.text = '正在下载依赖...';
      downloadSpinner.start();
      await exec(installModules);
      downloadSpinner.stop();
    } else {
      log.log('下载依赖后运行项目');
      log.log(`   cd ./${projectName}`);
      log.log('   npm install or yarn');
    }
  })
}