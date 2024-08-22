// buatkan function untuk membuat bintang

const star = (num) => {
  let result = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      result += "*";
    }
    result += "\n";
  }
  return result;
};

console.log(star(5));
const xSign = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n; j++) {
      if (i === j || i + j === n + 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
};

xSign(5);
