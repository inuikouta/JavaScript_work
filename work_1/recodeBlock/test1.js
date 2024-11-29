const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");//「 」を指定してるので適応
console.log(madeAString);
// 'I love chocolate frogs' を返す

const madeAnotherString = myArray.join();//引数なしは「,」が適応
console.log(madeAnotherString);
// 'I,love,chocolate,frogs' を返す