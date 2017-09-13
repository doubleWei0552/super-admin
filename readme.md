# Express应用生成器

> express应用生成器是一个快速搭建web项目的工具，可以生成应用骨架
```bash
npm i express-generator -g #全局安装应用生成器
express super-admin -e # 使用ejs模板引擎初始化空白项目
cd super-admin # 进入项目目录
npm start      # 启动项目，项目的启动信息配置在package.json文件中

    #在package.json文件的script节点中配置的属性名可以通过 npm run 运行
    # start节点可以不加run
```

# ngrok外网映射
```bash
#通过ngrok插件可以把本机的端口映射一个外网地址
ngrok http 端口号 # 进入所在文件夹，运行命令