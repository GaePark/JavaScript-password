const numberItem = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbolsItem = ["@", "!", "#", "$", "&", "%"];
const SLettersItem = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const CLettersItem = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let createItem = [];

let passwordItem = [];

const number = document.querySelector(".number");
const SLetters = document.querySelector(".SLetters");
const CLetters = document.querySelector(".CLetters");
const symbols = document.querySelector(".symbols");
const password = document.querySelector(".password");
const include = document.querySelector(".include");

const copyBtn = document.querySelector(".copy-btn");

const onClickCreate = () => {
  passwordItem = [];
  const length = document.querySelector(".length-num").value;
  if (length < 5 || length > 70) {
    alert("길이를 확인하세요");
    return;
  }
  for (let i = 0; i < length; i++) {
    createWord();
  }
  password.value = passwordItem.join("");
};

const createWord = () => {
  const word = Math.ceil(Math.random() * createItem.length);
  passwordItem.push(createItem[word]);
};

const onChangeNumber = () => {
  if (number.checked) {
    createItem = createItem.concat(numberItem);
  } else {
    createItem = "";
  }
};

include.addEventListener("change", () => {
  createItem = [];

  if (number.checked) {
    createItem = createItem.concat(numberItem);
  }
  if (SLetters.checked) {
    createItem = createItem.concat(SLettersItem);
  }
  if (CLetters.checked) {
    createItem = createItem.concat(CLettersItem);
  }
  if (symbols.checked) {
    createItem = createItem.concat(symbolsItem);
  }
  console.log(createItem);
});

copyBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!password.value) return;
  window.navigator.clipboard.writeText(password.value).then(() => {
    alert("복사되었습니다.");
  });
});
