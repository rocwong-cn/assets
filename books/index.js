const fs = require('fs');

const dirs = fs.readdirSync('./');
let result = '';
if (dirs) {
  dirs.forEach(dir => {
    if (!dir.endsWith('.js') && !dir.endsWith('.mp4') {
      result += `
      <img style="margin: 10px" alt="" width=180 src="https://cdn.jsdelivr.net/gh/rocwong-cn/assets/books/${dir}">`
    }
  })
}
console.log(result);
