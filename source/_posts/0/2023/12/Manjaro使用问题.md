---
title: Manjaro的使用问题
date: 2023-12-09 9:22:43
categories: 
- 教程
tags:
- 系统
---

在使用Manjaro的过程中，会偶尔出现一些问题，在这里开一篇东西来记录一下。

一、升级
---

我在一次升级的过程中，遇到了一次冲突问题。
```
错误：无法准备事务处理 (无法满足依赖关系)
:: 安装 xxx 破坏依赖 'kpeople' （kpeoplevcard 需要）
:: 安装 xxx 破坏依赖 'kcontacts' （kpeoplevcard 需要）
```
后来用一句命令来卸载冲突软件
```bash
sudo pacman -Rdd kpeoplevcard
```
卸载后更新
更新完看有没有自动安装刚刚卸载的东西，如果没有可以装回去，如果提示有冲突那就算了。

升级可以用命令，也可以用鼠标点，可以都试下。反正稀里糊涂就升过去了，大致思路是这样。

---
当出现类似如下显示时，可能是因为镜像的服务器有问题。
```
archlinuxcn.db下载失败
错误：无法从 XXX 'mirrors.XXX.com' 获取文件 'archlinuxcn.db'
```
尝试下更换源，参照设置系统时的步骤，同时参照下[镜像排名](https://archlinux.org/mirrors/status/)

---
(更新于2024-2-05)
