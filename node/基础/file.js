const fs = require('fs');

//读取文件
fs.readFile('text.txt', (error, data) => {})
fs.writeFile('test.txt', 'a b c ', (error) => {})
// r 读取模式 r+ 读写模式
// 打开文件
var buf = new Buffer(1024);
fs.open('test.txt', 'r+', (error, fd) => {
    // fd - 通过 fs.open() 方法返回的文件描述符。
    // buffer - 数据写入的缓冲区。
    // offset - 缓冲区写入的写入偏移量。
    // length - 要从文件中读取的字节数。
    // position - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
    // callback - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。
    fs.read(fd, buf, 0, buf.length, 0, (error, bytes) => {

        // 截取文件
        fs.ftruncate(fd, 10, function (err) {
            if (err) {
                console.log(err);
            }
            console.log("文件截取成功。");
            console.log("读取相同的文件");
            fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
                if (err) {
                    console.log(err);
                }

                // 仅输出读取的字节
                if (bytes > 0) {
                    console.log(buf.slice(0, bytes).toString());
                }

                // 关闭文件
                fs.close(fd, function (err) {
                    if (err) {
                        console.log(err);
                    }
                    console.log("文件关闭成功！");
                });
            });
        });
    })
})
//获取文件信息
fs.stat('test.txt', (error, stats) => {
    console.lo(stats.isFile()) //是否慰文件
    stats.isDirectory() // 是否为目录
})
//删除文件
fs.unlink('test.txt',(error)=>{

})
//创建目录
fs.mkdir('/dir',(error)=>{

})
//读取目录
fs.readdir('/dir',(error,files)=>{

    files.forEach( function (file){
        console.log( file );
    });
})
//删除目录
fs.rmdir('/dir',(error)=>{})