## Intro

最近在复习巩固 React 和 React-redux 相关知识，做了两个练手项目(Acknowledgement: freeCodeCamp)
1、App_1.js 中搭建一个简单的温度控制页面，其样式与 src/index.css 搭配。
2、App.js 中搭建一个计数器，无样式，主要关注 react-redux 的用法。

## Typical technique fails

在做第二个项目时，遇到了报错`Error: Cannot find file: 'index.js' does not match the corresponding name on disk: '.\src\redux\actions\Redux'.`，原因在于第一个 redux 的首字母应为大写，因为对应的文件名也是首字母大写的，两者要对应起来。

redux 的使用流程具体见 [yuque 笔记](https://www.yuque.com/haiyee/ilkoq7/bwphf3/edit)
