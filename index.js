document.addEventListener("DOMContentLoaded", function (e) {
  const passWordGeneratorForm = document.getElementById(
    "passwordGeneratorForm"
  );

  passWordGeneratorForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const letters = "abcdefghijklmnopqrstuvwxyz";
    const letterUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialCharacters = "!#$%&'*+,-./:_@;";
    let passWord = [];

    let passwordLenghtValue = e.target.passwordLenght.value;

    if (passwordLenghtValue > 20) {
      passwordLenghtValue = 20;
    }

    if (passwordLenghtValue < 10) {
      passwordLenghtValue = 10;
    }

    const digitsNumber = Math.round(passwordLenghtValue / 4);

    passWord = []
      .concat(getRandomCharacters(letters, digitsNumber))
      .concat(getRandomCharacters(letterUppercase, digitsNumber))
      .concat(getRandomCharacters(numbers, digitsNumber))
      .concat(getRandomCharacters(specialCharacters, digitsNumber))
      .sort(() => Math.random() - 0.5);

    passWord.splice(0, passWord.length - passwordLenghtValue);

    const pwGeneratedContainer = document.getElementById("passWordGenerated");

    pwGeneratedContainer.value = passWord.join("");

    function getRandomCharacters(array, n) {
      let newArray = [];
      array.split("");

      for (let i = 0; i < n; i++) {
        newArray.push(array[Math.floor(Math.random() * array.length)]);
      }
      return newArray;
    }

    copyButton.addEventListener("click", function () {
      let copyText = document.getElementById("passWordGenerated");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(copyText.value);

     let tooltip = document.getElementById("myTooltip");
      tooltip.innerHTML = " Password copied ";
    });

    copyButton.addEventListener("mouseout", function() {
      let tooltip = document.getElementById("myTooltip");
      tooltip.innerHTML = "Copy to clipboard";
    });
  });
});
