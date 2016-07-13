# react-redux

### 前言

后端：express + co + mongoose + ...
前端：react + redux + react-router + ...
线上地址：

- resource             静态资源文件夹
    - static
        - dist         打包地址
        - fonts        字体
        - images       图片资源
        - scripts
- src                  源码文件夹：包含项目源码，我们基本都在这个文件夹下做开发
    - client           前端文件夹
        - containers   容器文件夹：存放容器组件，比如 “苹果篮子”
        - components   组件文件夹：存放普通显示组件，比如 “苹果”
        - actions      actions文件夹：存放可以发出的action
        - reducers     reducers文件夹：存放action的处理器reducers
        - services     服务文件夹：存放经过封装的服务，如 ajax服务, 模拟数据服务
        - styles       样式文件夹：存放应用的样式，如css, scss
        - images       图片文件夹：存放图片资源
        - apis         开发接口文件夹：存放开发接口文档
    - server           后台文件夹
        - config       后台配置
        - controllers
        - models
- test                 测试
    - client           前端测试
    - server           后台测试