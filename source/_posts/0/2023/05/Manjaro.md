---
title: Linux-Manjaro KDE 版本
date: 2023-05-19 21:46:49
categories: 
- 教程
tags:
- 系统
---

总结一下安装Manjaro KDE的过程。不复杂，但是也要小心。

一、安装系统
---
### 1.下载系统

官网: [Manjaro](https://manjaro.org/)

点击 Get Manjaro ，选择PLASMA版本，其实就是KDE版本，下载。

### 2.安装系统

把下载下来的ISO镜像文件，放进U盘启动盘里面，开机启动。如果不熟、担心的，可以先在虚拟机里尝试，上手了再安装。

#### 2.1 操作

进入到启动界面后，选择lang=en_US，把英文改成中文。

然后点击 Boot with open source drivers (开源驱动) 进入安装。

进入操作界面后，点击Install图标，

语言:中文。  地域:亚洲，上海。  键盘:默认。  

#### 2.2 分区
如果是装在虚拟机里，可以不分区，直接下一步，随意。
如果打算装在实体机里，这一步比较关键，慢慢点。

选择手动分区，然后按顺序分:
```
新建分区   FAT32   /boot/efi   300M        (引导分区，非常重要)

新建分区   ext4    /opt        15G         (软件目录)

新建分区   ext4    /           30G         (根目录)

新建分区   临时存储空间         8G          (保险分区)

空闲分区   未知                8G          (硬盘不能用尽，救命分区)

新建分区   ext4    /home       剩余空间    (主目录)
```
熟悉之后，可以再根据具体情况进行调整。

#### 2.3 后续操作

设置用户名，密码。 后面最好不要随便改用户名，因为比较麻烦，也省的出问题。

下一步，安装。

完成。重启，拔U盘，OK!

二、配置系统
---
Manjaro KDE 安装后，需要一顿配置才能正常使用。

### 1.换源
```bash
sudo pacman-mirrors -i -c China -m rank
```
选一个最快的源，一个就好，选多了会降低速度。

### 2.更新软件源
```bash
sudo pacman -Syy
```

### 3.添加Archlinuxcn软件源
```bash
kate /etc/pacman.conf
```
编辑文件，在文件的末尾添加2行内容:
```bash
[archlinuxcn]
Server = https://mirrors.aliyun.com/archlinuxcn/$arch
```
接着执行以下命令：
```bash
sudo pacman -Sy archlinuxcn-keyring haveged
sudo systemctl enable haveged
sudo pacman-key --init
sudo pacman-key --populate manjaro
sudo pacman-key --populate archlinux
sudo pacman-key --populate archlinuxcn
```

### 4.安装yay
```bash
sudo pacman -S yay
```
### 5.选择Linux内核版本

选择有“长期支持”和“推荐内容”这2个标签的版本

### 6.安装输入法

以下两种，随便选一种即可：

云拼音
```bash
yay -S manjaro-asian-input-support-fcitx5 fcitx5 fcitx5-configtool fcitx5-chinese-addons fcitx5-qt fcitx5-gtk
```

搜狗拼音
```bash
yay -S fcitx fcitx-configtool fcitx-qt5 manjaro-asian-input-support-fcitx fcitx-sogoupinyin
```

然后自己设置一下。

### 7.优化配置
TRM
如果你的manjaro根目录安装在固态硬盘上，那么建议你输入以下命令，TRM会帮助清理SSD中的块，从而延长SSD的使用寿命：
```bash
sudo systemctl enable fstrim.timer
```

避免关机时间过长
```bash
kate /etc/systemd/system.conf
```

编辑文件，找到#DefaultTimeoutStartSec和#DefaultTimeoutStopSec，将这2行内容做如下修改:
```bash
DefaultTimeoutStartSec=5s
DefaultTimeoutStopSec=5s
```

### 8.安装谷歌浏览器
```bash
yay -S google-chrome
```
设置为默认浏览器

浏览器快捷键可以改成: WIN+C

### 9.上网
```bash
yay -S clash clash-for-windows-bin
```

### 10.改善字体
```bash
yay -S ttf-sarasa-gothic
```
---
更纱黑体 UI SC 11pt
等距更纱黑体 SC 11pt
更纱黑体 SC 9pt
更纱黑体 SC 10pt
更纱黑体 SC 10pt
更纱黑体 UI SC 10pt

---
固定字体 DPI: 110

具体设置后，可以再自行调整。

重启，OK!

---
