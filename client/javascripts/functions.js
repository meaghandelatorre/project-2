// jshint esversion: 6

//extra credit
let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};

//3A
//for loop
//write a reverseOneWord function
function wordRev(r) {
  let string = r.split("");
  let reversedArr = string.reverse();
  let joinArr = reversedArr.join("");
  for (var i = 0; i < r.length; i++) {
  }
  return joinArr;
}
let revWords1 = (str) => {
  let result= "";
  for (var i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
  return result;
};

//3B
//forEach method
function wordRev(r) {
  let string = r.split("");
  let reversedArr = string.reverse();
  let joinArr = reversedArr.join("");
  for (var i = 0; i < r.length; i++) {
  }
  return joinArr;
}
let revWords2 = (str) => {
  let arrayW = str.split(" "),
  result = "";
  arrayW.forEach(function(item) {
    let current = item;
    let wordReversed = wordRev(current);
      result = result + wordReversed + " ";
  });
  return result;
};

//3C
//forIn/Of loop

function wordRev(r) {
  let string = r.split("");
  let reversedArr = string.reverse();
  let joinArr = reversedArr.join("");
  for (var i = 0; i < r.length; i++) {
  }
  return joinArr;
}
let revWords3 = (str) => {
  let arrayW = str.split(" "),
  result ="";

  for (item of arrayW) {
    let current = item;
    let reversedW = wordRev(current);

      result = result + reversedW + " ";
  }
  return result
};
