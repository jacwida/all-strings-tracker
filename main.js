"use strict";
const capital = document.querySelector(".capital");
const padstart = document.querySelector(".padstart");
const padend = document.querySelector(".addup");
const camelcase = document.querySelector(".camelcase");
const reverse = document.querySelector(".reverse");
const trim = document.querySelector(".trim");
const repeats = document.querySelector(".repeat");
const input = document.querySelector(".input-filed");
const check = document.querySelector(".check");
const code = document.querySelector(".code");
const answer = document.querySelector(".answer");

//state...
//how we track which function is running
let currentfunc = 0;

//functions to run

//function to pad at the start with 7 xxx
const padAtStart = function (n) {
  const len = n.length + 7;
  return n.padStart(len, "x");
};

//function to pad at the end with 10 xxx
const padAtEnd = function (n) {
  const len = n.length + 10;
  return n.padEnd(len, "x");
};

//function to make first letter capital one...
const capitaFirst = function (s) {
  const sArray = s.split(" ");
  const fined = [];
  for (const f of sArray) {
    const [first, ...other] = f.split("");
    fined.push([first.toUpperCase(), ...other].join(""));
  }
  return fined.join(" ");
};

//function to make string into camel case
const camelCase = function (s) {
  const sArr = s.split(" ");
  let [first, ...second] = sArr;
  let cameled = [first];
  for (const ss of second) {
    cameled.push(ss.replace(ss[0], ss[0].toUpperCase()));
  }
  return cameled.join("");
};

//function to reverse a word
const reverseWords = function (s) {
  const sArr = s.split(" ");
  return sArr.reverse().join(" ");
};

//function to trim words
const trimWord = function (s) {
  return s.split(" ").join("");
};

//function to repeat a word
const repeatWord = function (s) {
  s += " ";
  return s.repeat(`${s.length}`);
};

capital.addEventListener("click", function () {
  currentfunc = 1;
  const str = `
    //this will capitalize first letter <br>
    <br>
    function capitaFirst(string) {<br>
      <br>
      const sArray = string.split(' ');<br>
      const fined = [];<br>
      for (const f of sArray) {<br>
        const [first, ...other] = f.split('');<br>
        fined.push([first.toUpperCase(), ...other].join(''));<br>
      }<br>
      return fined.join(' ');<br>
    <br>
  };
  `;
  code.innerHTML = "";
  code.insertAdjacentHTML("afterbegin", str);
  input.value = "";
  answer.textContent = "";
});

padstart.addEventListener("click", function () {
  currentfunc = 2;
  const str = `
    //this will padstart the string <br>
    <br>
    function padAtStart(string) {<br>
      <br>
    const len = string.length + 7;<br>
    return string.padStart(len, 'x');<br>
    <br>
  };
  `;
  code.innerHTML = "";
  code.insertAdjacentHTML("afterbegin", str);
  input.value = "";
  answer.textContent = "";
});
padend.addEventListener("click", function () {
  currentfunc = 3;
  console.log(currentfunc);
  // console.log('clicked');
  const str = `
    //this will padend the string <br>
    <br>
    function padAtEnd(string) {<br>
      <br>
    const len = string.length + 10;<br>
    return string.padEnd(len, 'x');<br>
    <br>
  };
  `;
  code.innerHTML = "";
  code.insertAdjacentHTML("afterbegin", str);
  input.value = "";
  answer.textContent = "";
});

camelcase.addEventListener("click", function () {
  currentfunc = 4;
  const str = `
    //this will camelcase the words <br>
    <br>
    function camelCase(string) {<br>
      <br>
      const sArr = string.split(' ');<br>
	    let [first, ...second] = sArr;<br>
	    let cameled = [first];<br>
	    for (const ss of second) {<br>
		  cameled.push(ss.replace(ss[0], ss[0].toUpperCase()));<br>
	}<br>
	return cameled.join('');<br>
    <br>
  };
  `;
  code.innerHTML = "";
  code.insertAdjacentHTML("afterbegin", str);
  input.value = "";
  answer.textContent = "";
});

reverse.addEventListener("click", function () {
  currentfunc = 5;
  const str = `
    //this will reverse the string <br>
      <br>
    function reverseWords(string) {<br>
      <br>
      const sArr = string.split(' '); <br>
      return sArr.reverse().join(' '); <br>
    <br>
  };
  `;
  code.innerHTML = "";
  code.insertAdjacentHTML("afterbegin", str);
  input.value = "";
  answer.textContent = "";
});

trim.addEventListener("click", function () {
  currentfunc = 6;
  const str = `
    //this will trim the string <br>
    <br>
    function trimWord(string) {<br>
      <br>
      return s.split(' ').join(''); <br>
    <br>
  };
  `;
  code.innerHTML = "";
  code.insertAdjacentHTML("afterbegin", str);
  input.value = "";
  answer.textContent = "";
});

repeats.addEventListener("click", function () {
  currentfunc = 7;
  const str = `
    //this will repeat the string <br>
      <br>
    function repeatWord(string) {<br>
      <br>
      return string.repeat(string.length); <br>
    <br>
  };
  `;
  code.innerHTML = "";
  code.insertAdjacentHTML("afterbegin", str);
  input.value = "";
  answer.textContent = "";
});

check.addEventListener("click", function () {
  let text = input.value;
  let func =
    currentfunc === 1
      ? capitaFirst(text)
      : currentfunc === 2
      ? padAtStart(text)
      : currentfunc === 3
      ? padAtEnd(text)
      : currentfunc === 4
      ? camelCase(text)
      : currentfunc === 5
      ? reverseWords(text)
      : currentfunc === 6
      ? trimWord(text)
      : currentfunc === 7
      ? repeatWord(text)
      : (answer.textContent = "select a function first..");
  const answed = func;
  answer.textContent = answed;
  input.value = "";
});
