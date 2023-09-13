document.addEventListener("DOMContentLoaded", function () {
  console.log("hello world!");

  let passWordGeneratorForm = document.querySelector("#passwordGeneratorForm");

  passWordGeneratorForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const passwordLenghtValue = e.target.passwordLenght.value;

    const pwGeneratedContainer = document.getElementById(
      "passWordGeneratorContainer"
    );

    const letters = "abcdefghijklmnopqrstuvwxyz".split("");
    const letterUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const numbers = "0123456789".split("");
    const specialCharacters = "!#$%&'()*+,-./:_@;".split("");
    let passWord = [];

    const digitsNumber = Math.round(passwordLenghtValue / 4);

    console.log(digitsNumber);

    passWord = []
      .concat(getRandomCharacters(letters, digitsNumber))
      .concat(getRandomCharacters(letterUppercase, digitsNumber))
      .concat(getRandomCharacters(numbers, digitsNumber))
      .concat(getRandomCharacters(specialCharacters, digitsNumber))
      .sort(() => Math.random() - 0.5);

    passWord.splice(0, passWord.length - passwordLenghtValue);
    console.log(passWord);

    pwGeneratedContainer.innerText = passWord.join("");

    function getRandomCharacters(array, n) {
      let newArray = [];

      for (let i = 0; i < n; i++) {
        newArray.push(array[Math.floor(Math.random() * array.length)]);
      }

      return newArray;
    }
  });
});
