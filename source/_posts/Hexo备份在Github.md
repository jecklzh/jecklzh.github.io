---
title: Hexo备份在Github
categories:
  - 教程
tags:
  - Hexo
date: 2023-06-03 20:20:48
---

纯粹是想灵活点，虽然说备份确实很重要。

一、新建分支
---
这个点的按钮的位置其实是会变的。不过记住核心即可。
去博客的仓库里面，找到branches，点击，然后找到 New branch 点击。新建一个名称 hexo 的分支，并设置为默认分支。

二、克隆分支
---
把刚刚新建的hexo分支克隆到本地，自己找一个文件夹。
然后把克隆下来的.io 文件夹除了 .git 文件夹外的文件，全部删除，然后把博客里的文件，除了 .deploy_git文件夹，全部复制过来。
顺便看下有没有 .gitignore 文件。如果没有就自己新建一个，并输入下列代码保存：
```
.DS_Store
Thumbs.db
db.json
*.log
node_modules/
public/
.deploy*/
_multiconfig.yml
```
这一步其实就是把你的博客文件夹名字给换成GitHub上那个一致了，不然运行下面的代码会有问题。
这个问题虽然能解决，但是不是程序员的我就懒得折腾了。能解决的可以自便。


三、备份
---
按顺序运行下列代码进行上传备份：
```bash
git add .
git commit -m "backup"
git push origin hexo
```
在运行第一个代码可能会出警告问题，那是因为回车符和换行符的转换问题。如果文件夹和GitHub项目名称一样就没这样的问题。

然后，后续更新备份的操作是：
```bash
hexo clean
git add .
git commit -m "backup"
git push
hexo g & hexo d
```

上传博客照常是：
```bash
hexo g
hexo d
```

四、恢复博客
---
换个地方更新博客

1.安装git
2.设置git全局邮箱和用户名
3.安装node.js
4.安装hexo
```bash
npm install hexo-cli -g
```
5.克隆博客
```bash
git clone ...
```
6.安装npm
```bash
cd xxx.github.io
npm install
npm install hexo-deployer-git --save
```

---
然后就可以开始正常编辑部署了。

