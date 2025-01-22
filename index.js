document.addEventListener("DOMContentLoaded", function () {
  
  function getRandomCharacters(array, n) {
    let newArray = [];
    array.split("");

    for (let i = 0; i < n; i++) {
      newArray.push(array[Math.floor(Math.random() * array.length)]);
    }
    return newArray;
  }

  function generatePassword(e) {
    e.preventDefault();

    const specialCharactersCheckbox =
      document.getElementById("specialCharacters");

    let characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let specialCharacters = "!#$%&'*+,-./:_@;";
    let passWord = [];

    let passwordLenghtValue = e.target.passwordLenght.value;

    specialCharactersCheckbox.checked &&
      (characters += specialCharacters) &&
      console.log("hi");
    passwordLenghtValue > 20 && (passwordLenghtValue = 20);
    passwordLenghtValue < 10 && (passwordLenghtValue = 10);

    passWord = []
      .concat(getRandomCharacters(characters, passwordLenghtValue))
      .sort(() => Math.random() - 0.5);

    showPassword("show", passWord.join(""));
  }

  function copyPasswordToClipboard() {
    let copyText = document.getElementById("passWordGenerated");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = " Password copied ";
  }

  function showTextOnHover() {
    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }

  function showPassword(type = "clear", passWord) {
    let pwGeneratedContainer = document.getElementById("passWordGenerated");
    pwGeneratedContainer.value = type === "show" ? passWord : "";
  }

  const passWordGeneratorForm = document.getElementById(
    "passwordGeneratorForm"
  );
  const specialCharactersCheckbox =
    document.getElementById("specialCharacters");
  const passWordLengthRange = document.getElementById("passwordLenghtRange");

  passWordGeneratorForm.addEventListener("submit", generatePassword);
  copyButton.addEventListener("mouseout", showTextOnHover);
  copyButton.addEventListener("click", copyPasswordToClipboard);
  specialCharactersCheckbox.addEventListener("change", showPassword);
  passWordLengthRange.addEventListener("change", showPassword);
});
