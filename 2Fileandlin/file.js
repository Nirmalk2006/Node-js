const fs = require('fs');
const os = require('os');
console.log(os.cpus().length);
// fs.writeFileSync("test.txt","hello world hbhbf");
// fs.writeFile("test2.txt","hello world nirmal",(err)=>{});

// const res = fs.readFileSync("./test.txt","utf-8");
// console.log(res);

// fs.readFile("./test2.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else
//     {
//         console.log(data);
//     }
// })

// fs.appendFileSync("test.txt","hello world hbhbf");

// fs.cpSync("test.txt","test3.txt");
// fs.unlinkSync("test3.txt");