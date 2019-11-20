//搭建服务器 
//1.引入express问价
const express = require('express');
const fs = require('fs');
// const ejs = require('ejs');

//2.创建服务器
const app = express();
//3.添加监听端口
app.listen(3000, () => {
    console.log('http://127.0.0.1:3000');
})

//5.托管静态资源 
app.use('/assets', express.static('assets')); // 静态页面结构
app.use('/uploads', express.static('uploads')); // 页面图片

//6.配置ejs模板引擎
app.set('view engine', 'ejs'); //PS:这里的EJS有引号,故上面就不用再引入ejs文件
//下面这个代码是进行EJS模板文件查询的默认位置,以后所有的EJS问价都会指定这个目录
app.set('views', __dirname + '/views');


//4.添加路由配置    
app.get('/', (req, res) => {
    // render 完成是三个事件  读文件 渲染(指还没有数据参与) 返回
    // fs.readFile('./views/index.ejs',(err,data)=>{
    //     if(err){
    //         res.end('404')
    //     }else{
    //         res.end(data)
    //     }
    // })
    res.render('index.ejs');
})

//4.添加路由配置    
app.get('/admin', (req, res) => {
    res.render('admin/index.ejs');
})