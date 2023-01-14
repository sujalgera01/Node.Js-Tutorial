// console.log("Welcome to nodejs tutorial");

// ---------------------------------------------------------
// Exporting the METHODS, Classes, variables from diff Files.
// ----------------------------------------------------------

// const tutorial = require('./tutorial');
// console.log(tutorial);
// console.log(tutorial.sum(1,1));
// console.log(tutorial.PI);
// console.log(new tutorial.SomeMathObject());


// ---------------------------------------------------------
// Using the Events | Trigger the Events on function call
// ----------------------------------------------------------


// const EventEmitter = require('events');
// const tutorial = require('./tutorial');
// const eventEmitter = new EventEmitter();
// eventEmitter.on('tutorial',()=>{
//     console.log('tutorial event has occured');
// });
// eventEmitter.emit('tutorial');
// eventEmitter.on('tutorial',(num1,num2)=>{
//     console.log(num1+num2);
// });
// eventEmitter.emit('tutorial',1,2);
// class Person extends EventEmitter{
//     constructor(name){
//         super();
//         this._name = name;
//     }
//     get name(){
//         return this._name;
//     }
// }
// let sujal = new Person('Sujal');
// let pri = new Person('pridhi');
// sujal.on('name',()=>{
//     console.log('My name is '+ sujal.name);
// });
// sujal.emit('name');
// pri.on('name',()=>{
//     console.log('my name is '+ pri.name);
// });
// pri.emit('name');


// ----------------------------------------------------------------
// using the readline. Craeting random ques and judge on userInput.
// ----------------------------------------------------------------


// const readline = require('readline');
// const rl = readline.createInterface({input : process.stdin,
//                          output : process.stdout});
// let num1 = Math.floor((Math.random()*10) + 1);
// let num2 = Math.floor((Math.random()*10) + 1);
// let ans = num1 + num2;
// rl.question(`What is ${num1} + ${num2}? \n`,(userInput)=>{
//     if(userInput.trim() == ans){
//         rl.close();
//     }
//     else{
//         rl.setPrompt('Incorrect Response. Try Again \n');
//         rl.prompt();
//         rl.on('line',(userInput)=>{
//             if(userInput.trim()==ans){
//                 rl.close();
//             }
//             else{
//                 rl.setPrompt(`Your answer of ${userInput} is incorrect \n`);
//                 rl.prompt();
//             }
//         });
//     }
// });
// rl.on('close',()=>{
//     console.log('Correct.');
// });

// ---------------------------------------------------------
// use of File System Module. Create|Rename|Append|Delete
// ----------------------------------------------------------


// const fs = require('fs');
//create a file
// fs.writeFile('example.txt',"this is an example",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('File success created');
//         fs.readFile('example.txt','utf8',(err,file)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log(file);
//             }
//         });
//     }
// });
//rename a file
// fs.rename('example.txt','example2.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Success renamed');
//     }
// });
//append data to file
// fs.appendFile('example2.txt','Some data to append',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Success appended data');
//     }
// });
//delete a file
// fs.unlink('example2.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Success delete a file');
//     }
// });

// ---------------------------------------------------------
// File System Module for Folders.
// ----------------------------------------------------------


//work with folders
// const fs = require('fs');
// fs.mkdir('tut',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Folder created success');
//     }
// });
//delete the folder
// fs.rmdir('tut',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Folder deleted success');
//     }
// });
//create a folder and a file in it.
// fs.mkdir('tut',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         fs.writeFile('./tut/example.txt','Some data to enter',(err)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log('File created success');
//             }
//         });
//     }
// });
// delete a folder with file in it
// first delete the file and then the folder
// fs.unlink('./tut/example.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         fs.rmdir('tut',(err)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log('Removed success');
//             }
//         });        
//     }
// });
// delete the multiple files in a folder
// fs.readdir('example',(err,files)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         // console.log(files);
//         for(let file of files){
//             fs.unlink('./example/'+file,(err)=>{
//                 if(err){
//                     console.log(err);
//                 }
//                 else{
//                     console.log('Success deleted files');
//                 }
//             });
//         }
//     }
// });


// ---------------------------------------------------------
// ReadStream and WriteStream for large data.
// ----------------------------------------------------------


// const fs = require('fs');
// const readStream = fs.createReadStream('./random.txt','utf8');
// const writeStream = fs.createWriteStream('random2.txt');
// readStream.on('data',(chunk)=>{
//     // console.log(chunk);
//     writeStream.write(chunk);
// });
// if file is so large in size and we readfile using fs.readfile,
//it gives error as size is greater than the buffer size.
// To prevent the buffer size, we create the readable stream so that
// a large amount of data can be readable and writeable.


// ------------------------------------------------------------------------
// Pipe and Pipelining for short hand methods and compress/uncompress files.
// ------------------------------------------------------------------------


// const fs = require('fs');
// const { METHODS } = require('http')
// const zlib = require('zlib'); // to compress files for pipelining
// const gzip = zlib.createGzip('zlib'); // creating zip
// const gunzip = zlib.createGunzip('zlib'); // unzip
// const readStream = fs.createReadStream('./random.txt','utf8');
// const writeStream = fs.createWriteStream('random2.txt.gz');
// readStream.pipe(gzip).pipe(writeStream); // reading->compressing->writing
// const readStream1 = fs.createReadStream('./random.txt.gz');
// const writeStream1 = fs.createWriteStream('random2.txt');
// readStream1.pipe(gunzip).pipe(writeStream1); // readingFromCompress->Unzip->writing
// pipe method is a short hand method. It require 2 stream
// to work on - source stream and destination stream.


// const http = require('http');
// const server = http.createServer((req,res)=>{
//     // res.write('hello world from nodejs');
//     // res.end();
//     if(req.url === '/'){
//         res.write('hello world from nodejs');
//         res.end();
//     }
//     else{
//         res.write('using other domain');
//         res.end();
//     }
// });
// server.listen('3000');

// ------------------------------------------------------------------------
// Displaying static files using http and fs module
// ------------------------------------------------------------------------

// const http = require('http');
// const fs = require('fs');
// http.createServer((req,res)=>{
//     const readStream = fs.createReadStream('./static/index.html'); // any type of file can be read and displayed
//     res.writeHead(200,{'Content-type': 'text/html'}); // acc to file data, contentType can be changed
//     readStream.pipe(res);
// }).listen(3000);


// ------------------------------------------------------------------------
// Creating package.json file using npm init and installing more packages.
// ------------------------------------------------------------------------

// Command: npm init (to create json)
// Command: npm i lodash (install lodash package using npm)
// uninstall cmd: npm uninstall lodash
// using lodash module
// const lod = require('lodash');
// let example = lod.fill([1,2,3,4,5],"banana",1,4);
// console.log(example);

