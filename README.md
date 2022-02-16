<!--
 * @Author: jonty
 * @Date: 2022-02-15 20:00:38
 * @LastEditTime: 2022-02-16 22:20:12
 * @Description: 
 * @Reference: 
 * @FilePath: \in100days\README.md
-->
# 创建

现在换成 npx 了
> `npx create-react-app tic-tac-tac`

# 安装antd
> `cnpm install antd --save`
官方文档里也有参考 

> 引入后没有起反应 在 App 里加上下面一行就好
> `import 'antd/dist/antd.css';`

# 布局

从 antd 里考一个布局贴成一个组件

# git
1.远程github先建个仓库
2.本地git init
3.修改.gitignore 过滤掉没必要的文件比如 node_module
4.git commit -m 'xxx'
5.git remote add [shortname] [url] 
> url便是github上的.git后缀的仓库地址 与远程仓库连接上才能push
> origin 是远程仓库的别名
> eg: 显示远程仓库的信息：git remote show [shortname]
6.git push -u origin master 
（这些在github建了一个新仓库后都会有的 菜鸟教程上有一些冷知识）

# 安路由
```sh
npm install react-router-dom@6
```