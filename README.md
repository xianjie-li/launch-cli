# launch-cli

<br>

## template

目前已有的配置模板

| 名称       | repo                                                     | 说明                              |
| ---------- | ------------------------------------------------------------ | --------------------------------- |
| vue-cli-v3 | [vue-cli-v3](https://github.com/Iixianjie/launch-template-vue-cli-v3) | vue-cli3 + 大量示例代码和样板代码以及额外配置 |
| webpack-v4-vue | [webpack-v4-vue](https://github.com/Iixianjie/launch-template-webpack-v4-vue) | 用于日常开发的webpack4配置，除了基本配置外添加了多页面支持、使用pug替代默认的ejs模板、基本包含所有常用的功能配置，对vue提供开箱即用的支持。      |
| library-rollup | [library-rollup](https://github.com/Iixianjie/launch-template-library-rollup) | rollup配置， 用于开发react组件或library |
| webpack-v3 | [webpack-v3](https://github.com/Iixianjie/launch-template-webpack-v3) | 切图配置，支持多页面(请使用v4)       |
| webpack-v4 | [webpack-v4](https://github.com/Iixianjie/launch-template-webpack-v4) | 用于日常开发的webpack4配置，除了基本配置外添加了多页面支持、使用pug替代默认的ejs模板、基本包含所有常用的功能配置，对react提供开箱即用的支持。      |


<br>

## Install
```
npm install @lxjx/launch-cli -g
or
yarn global add @lxjx/launch-cli  // 使用yarn安装全局前，请先确保你已经正确设置bin目录。
```

<br>

## Cli
### list
查看可用的配置列表
```
launch list
```

<br>

### create
选择模板并创建项目文件
```
launch create <template-name> <project-name>
```

<br>

### -v
查看版本
```
launch -v
```

<br>

### -h
帮助信息
```
launch -h
```
