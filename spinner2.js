const spinner2 = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${arr[i]}   `);
    }, 200 * i);
  }
};
let arr = ["|","/", "-", "|","-","|"];
spinner2(arr);
