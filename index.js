document.addEventListener("DOMContentLoaded", function () {
  const passWordGeneratorForm = document.getElementById(
    "passwordGeneratorForm"
  );

  function getRandomCharacters(array, n) {
    let newArray = [];
    array.split("");

    for (let i = 0; i < n; i++) {
      newArray.push(array[Math.floor(Math.random() * array.length)]);
    }
    return newArray;
  }

  passWordGeneratorForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const specialCharactersCheckbox =
      document.getElementById("specialCharacters");

    let characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let specialCharacters = "!#$%&'*+,-./:_@;";
    let passWord = [];

    let passwordLenghtValue = e.target.passwordLenght.value;

    specialCharactersCheckbox.checked && (characters += specialCharacters);
    passwordLenghtValue > 20 && (passwordLenghtValue = 20);
    passwordLenghtValue < 10 && (passwordLenghtValue = 10);

    passWord = []
      .concat(getRandomCharacters(characters, passwordLenghtValue))
      .sort(() => Math.random() - 0.5);

    const pwGeneratedContainer = document.getElementById("passWordGenerated");
    pwGeneratedContainer.value = passWord.join("");
  });

  copyButton.addEventListener("click", function () {
    let copyText = document.getElementById("passWordGenerated");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = " Password copied ";
  });

  copyButton.addEventListener("mouseout", function () {
    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  });
});
