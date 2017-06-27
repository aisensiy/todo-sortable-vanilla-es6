依据已经提供的 `html` `css` 模板，请在只修改 `src/app.js` 的前提下，实现 Todo 可以拖拽排序。

![](drag-and-drop.gif)

# 任务

该项目包含如下几个功能：

1. 采用 H5 的拖拽接口让 Todo 之间可以通过拖拽重新排序

**注意** 项目中已经提供了 `index.html` `src/app.js` `src/helpers.js` 等几个文件。其中：

* `index.html` 提供了项目的基本 `html` 标签
* `src/helpers.js` 提供了一些基本的帮助函数，比如查找 dom 元素、绑定 dom 事件

该项目的考察重点在于 HTML5 的拖拽操作，es6 的使用，以上文件已经提供了基础的 html 结构、事件绑定、元素查找的方法以及所要创建元素的模板，请充分利用以上内容，避免重复的工作。

由于测试需要采用 css selector 定位元素并测试页面的交互，请严格按照以上的要求将指定的 class 添加到指定的元素上用以表现元素状态的变化而不是自己直接去写 style。

最后，请不要修改除去 `src/app.js` 文件外的其他文件，在测试时会覆盖其他文件的修改。

# 预备知识

完成这个项目你需要一些基本的 javascript 的知识：

1. 对 javascript 的基础语法有所了解，并且该项目采用 es2015 的语法，因此你必须了解 es2015 的语法，比如：
   * 如何写类
   * 如何使用 `import` 
   * 如何用 `=>` 创建函数
   * 如何定义类
2. 知道如何利用 javascript 操纵 DOM 元素，比如
   * 如何创建一个元素
   * 如何把它插入到 dom 中
   * 如何用 `querySelector` 选择元素
3. 知道如何 DOM 的事件模型以及如何为 DOM 元素绑定不同种类的事件，该项目可能会涉及到如下的内容：
   * DOM 的事件传播方式是什么样子的
   * 理解 HTML5 新的拖拽 API，知道如何通过事件绑定方法让元素支持拖拽

并且，你需要知道一些 `git` 的基本使用方式：

* 知道如何 `clone` 远端的 `git` 仓库
* 知道如何将添加或者修改后的文件提交到本地 `git` 仓库
* 知道如何将本地的仓库提交到远端的仓库

本项目使用的构建工具是 `webpack`，你有必要对其有一些基本的了解，明白其 `entry` `loader` 的概念。

还有，你可能需要知道一些 `nodejs` 以及 `npm` 的知识，**不过在目前这个项目，这些不是必须的**：

* 知道什么是 `nodejs`
* 知道如何利用 `npm` 对 HTML Javascript 的项目进行依赖管理

# 环境准备

为了构建这个项目，你需要至少将下面加 `*` 的东西安装到你的电脑上：

1. [`git`](https://git-scm.com/) `*`
2. `nodejs` `*`
3. `npm` `*`

下载项目后，在该项目执行以下命令让应用在本地运行起来：

```
$ npm install
$ npm run start
```

# 在本地执行测试

首先，这一步不是必须的。

按照下面的步骤安装必要的工具：

1. 安装 [node.js](https://nodejs.org/en/)
2. 安装 [Selenium Server](http://nightwatchjs.org/gettingstarted#selenium-server-setup)
2. 安装 [nightwatch](http://nightwatchjs.org/gettingstarted#installation)

其中，`Selenium Server` 服务依赖 [JDK 7](http://www.oracle.com/technetwork/java/javase/downloads/index.html) 请首先安装它。你可以通过命令 `java -version` 确认其已经安装成功。

在本地执行测试，首先需要启动 selenium:

```
$ java -jar selenium-server-standalone-{VERSION}.jar
```

有关 `Selenium Server` 的其他信息可以参见[这里](https://github.com/SeleniumHQ/selenium/wiki/RemoteWebDriverServer)。

然后执行以下命令安装其他依赖

```
$ npm install
```

最后使用以下命令在本地执行测试

```
$ cd test
$ nightwatch
```