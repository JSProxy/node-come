let fs = require('fs');
let zlib = require('zlib'); //压缩工具
//对http 服务器发起请求的request 对象就是一个 Stream

let readStream = fs.createReadStream('test.txt');
let writeStream = fs.createWriteStream('test.txt');

let data = '';
readStream.setEncoding('utf-8'); //设置编码
readStream.on('data', (chunk) => {
    data += chunk;
})
readStream.on('end', () => {
    console.log(data);
})
readStream.on('error', (error) => {
    console.log('error')
})
readStream.on('finish', () => {
    console.log('finish')
})

//默认覆盖
writeStream.write('www.hhh', 'utf-8');
// 标记文件末尾
writeStream.end();
writeStream.on('error', (error) => {
    console.log('error')
})
writeStream.on('finish', () => {
    console.log('finish')
})

// 管道 可读流向可写
// readStream.pipe(writeStream);

//链式流
// fs.createReadStream('test.txt')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('test.txt.gz'));
// console.log('压缩完成')

fs.createReadStream('test.txt.gz')
    .pipe(zlib.createGunzip()).pipe(fs.createWriteStream('input.txt'));
console.log('解压缩完成')

console.log('程序执行ok')