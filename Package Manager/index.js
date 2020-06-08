var figlet = require('figlet');

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const figlety = figlet.textSync('Boo!', {    //Change the 'Boo!' string for another result
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default'
  });
  //res.end('Hello World');
  res.end(figlety);
}); //Working version :)!!!

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// figlet('Hello World!!', function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data)
// });

// figlet.text('Boo!', {
//     font: 'Ghost',
//     horizontalLayout: 'default',
//     verticalLayout: 'default'
// }, function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data);
// });

// console.log(figlet.textSync('Boo!', {
//     font: 'Ghost',
//     horizontalLayout: 'default',
//     verticalLayout: 'default'
// }));