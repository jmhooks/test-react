const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

const sum = (arr) => {
  let n = 0;
  arr.map((element, index) => {
    if(index >= 2) {
      n += Number(element);
    }
  });
  console.log(n);
}

const count = (file) => {
  fs.readFile(file, 'utf-8', (err, data) => {
    console.log(data.split('\n').length - 1);
  });
}

const list = (dir, ext) => {
  fs.readdir(dir, (err, data) => {
    data.forEach((f) => {
      let arr = f.split('.');
      if (arr[arr.length-1] === ext && arr.length > 1) {
        console.log(f);
      }
    });
  });
}

const listFiles = (dir, ext, callback) => {
  let output = '';
  fs.readdirAsync(dir)
  .then((data) => {
    data.forEach((f) => {
      let arr = f.split('.');
      if (arr[arr.length-1] === ext && arr.length > 1) {
        output += f + '\n';
      }
    })
  })
  .then(() => {
    output = output.replace(/\n$/, '');
    callback(null, output);
  })
  .catch((err) => {
    callback(err, output);
  })
}

const checkPromise = () => {
  new Promise((res, rej) => {
    console.log("Hi");
    resolve("Done");
  }).then((res) => {
    console.log("Hey: " + res)
  })
}

const insertionSort = (arr) => {
  //TODO
}



module.exports = {
  sum: sum,
  count: count,
  list: list,
  listFiles: listFiles
}
