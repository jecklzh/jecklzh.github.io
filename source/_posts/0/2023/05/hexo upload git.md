---
title: Hexo部署到Github
date: 2023-05-21 10:54:37
categories: 
- 教程
tags:
- Hexo
---

我的部署过程。

一、新建仓库
---
在你的账号里新建仓库

user-name/user-name.github.io (最好按照格式来)
Public

创建。

二、部署Hexo
---

### 1.修改文件
参照样式修改Hexo主目录里的 -config.yml 文件
```
# URL
url: https://user-name.github.io
root: /

# Deployment
deploy:
  type: git
  repo: https://github.com/user-name/user-name.github.io.git
  branch: master
```
运行一下看有没有问题
```bash
hexo s
```

### 2.安装工具
在博客主目录里运行
```bash
npm install hexo-deployer-git --save
```

### 3.上传到Github
先清理和生成一下文件
```bash
hexo cl -g
```
正式上传
```bash
hexo d
```
最后，到 user-name.github.io 看是否顺利生成网页。
后面更新文章的话，重复步骤(3.)就可以了。

这里，部署步骤就告一段落了。

三、域名
---
进阶操作。如果有一个属于自己域名，那么绑定一下还是挺帅的。

### 1.新建CNAME
在本地主目录 source 文件夹里新建一个CNAME文件，写上自己的域名，例如:
```
abc.com
```
注意，没有[https://]这一串,CNAME也没有后缀名。

### 2.设置
进入博客的仓库里，点setting -> Pages ，
在Custom domain里输入域名
```
abc.com
```
Save

Enforce HTTPS -> 打勾。

### 3.绑定
本地 ping 一下
```bash
ping user-name.github.io
```
得到一个IP地址。

然后到一个管理网站里，例如: [CLOUDFLARE](https://dash.cloudflare.com)
添加你的域名。

点击DNS，新建两个A类:一个顶级,一个www，在地址上填刚才ping到的IP. 这样带不带 www 就都可以访问了。

最后，试一下网址，看有没有正常访问，不行等几分钟再试一下。

---
整个流程到这里就结束了，祝部署顺利。