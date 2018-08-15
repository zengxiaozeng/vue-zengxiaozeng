# vue-zengxiaozeng
vue的任务分离式脚手架，支持单页面、多页面共同开发模式，支持ES6和各种预编辑语言，支持Vuex状态管理...
说明：基于vue-cli的基础进行的扩展，增加了.bat 脚本批处理文件（只支持windows环境），保证多任务同时开发运行，本地服务启动，手机保持和电脑同一局域网络的环境下
，可以实时查看页面的展示和避免兼容性...  支持ES6+各种预编译处理+Vue-router+Vuex。

## Development步骤

- npm i/cnpm i //安装依赖
- 在当前目录下打开Windows自带终端（不支持git环境、不支持MacOS系统）运行**.bat**
``` bash
# c:\xx\xx\vue-zengxiaozeng>
.bat
控制台显示set/p name=后输入：
testA
```
- 当要终止环境时输入ctrl+c命令，重新开启命令行只需在命令行输入npm run dev/npm run build命令即可

#### 开发目录说明

```javascript
dist --打包目录
src --开发目录
​ +pages //页面存放，文件夹名对应独立页面名字
​ +common //常用组件库

```

## License
ISC
