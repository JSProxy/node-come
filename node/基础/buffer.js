
{
let  buf = new Buffer(10);// 10个字节的buffer
let  buf1 = new Buffer([10,20,30,40,50]);
let  buf2 = new Buffer('www','utf-8');
}
//写入缓存区
// 返回实际写入大熊啊
//buf.write(string[, offset[, length]][, encoding])
// string - 写入缓冲区的字符串。
// offset - 缓冲区开始写入的索引值，默认为 0 。
// length - 写入的字节数，默认为 buffer.length
// encoding - 使用的编码。默认为 'utf8' 。
{
let buf = new Buffer(256);
let len  = buf.write('qwertyuiopa');
console.log("写入字节数 : "+  len);
}
// 重缓存中读取数据
{
let buf = new Buffer(26);
for (let i = 0;i<26;i++){
    buf[i] = i+97;
}
// ncoding - 使用的编码。默认为 'utf8' 。
// start - 指定开始读取的索引位置，默认为 0。
// end - 结束位置，默认为缓冲区的末尾。
console.log(buf.toString('utf-8',0,5));
console.log(buf.toString('ascii'));
}

//将 Buffer 转换为 JSON 对象
{
    let buf = new Buffer('www.baidu.com');
    let json = buf.toJSON(buf);
    console.log(json);
}
// 缓存 合并
// ist - 用于合并的 Buffer 对象数组列表。
// totalLength - 指定合并后Buffer对象的总长度。
{
 let buf1  = new Buffer('www.baidu.com');
 let buf2 = new Buffer('oooooooooooo');

 let buf3 = Buffer.concat([buf1,buf2]);
 console.log(buf3.toString());
}
// 裁剪
{
    let buf = new Buffer('wwoo');
    let slicebuf = buf.slice(0,3);
    console.log(slicebuf.toString());
}

