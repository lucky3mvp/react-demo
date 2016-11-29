# react-demo
---
### 安装说明：
1. 安装webpack: npm install webpack webpack-dev-server --save-dev
1. 安装React: npm install react react-dom react-router --save
1. 安装babel: npm install babel babel-loader babel-preset-es2015 babel-preset-react --save-dev
1. 安装less loader: npm install less less-loader css-loader style-loader --save-dev

### 运行：
```bash
1. npm run mwatch
2. npm start
```

### 文件说明：
1. package.json: npm配置；需注意其中关于webpack的命令配置部分：  
> "watch": "webpack -d --watch"  
> "start": "webpack-dev-server --progress --inline --content-base ./src"
1. webpack.config.js: webpack配置
1. .babelrc: babel配置
1. ./src/mian.html: 主页面
1. ./src/main.js：webpack入口文件
1. ./src/common：初始化样式的less文件
1. ./src/img：图片
1. ./src/components: React组件

### 问题记录
Q1:数据传递，eg:data-index="1",怎么传真实值，数字1而非字符串1  
A1:data-index={numberOne} 

Q2:this.props.children string的情况  
Q3:this.PropTypes不报错？slide6  
Q4:this.refs["name"] vs this.refs.name slide9
Q5：关于每页slide的Footer数据，index,first,last，按照官方的说法，其实是不应该放在state里的，这个有待改进 
> 参见：http://reactjs.cn/react/docs/interactivity-and-dynamic-uis.html



#### 2016.10.31 更新：
Q1：按照之前的配置后，在dev中设置了资源文件夹（--content-base）为src文件夹，所以在访问[http://localhost:8080](http://localhost:8080)时，浏览器显示的是src文件夹的内容，包括main.html啊，main.less啊等等，此时点击main.html就可以看到demo了；  
但是这样并不是很好，应该是用户输入网址后直接就可以看到主页面，而不是显示文件夹内容，点一下之后才可以看到主页面;  
经尝试发现：**其实设置了资源文件夹后，访问网址时默认是会去加载index.html的，当没有index.html时会显示文件夹内容，因此，只需要将main.html重命名成index.html就可以了**

但这只是在设置--content-base的情况下，不设置的情况下怎么解决的，还有待研究。。。