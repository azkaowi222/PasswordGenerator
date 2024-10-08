let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");

const generatorPassword = (len) => {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = "0123456789";
  const symbol = "~`!@#$%^&*()-_=+{[}];:'',<.>?/";
  const data = lowerAlphabet + upperAlphabet + number + symbol;

  let generator = "";
  for (let index = 0; index < len; index++) {
    generator += data[~~(Math.random() * data.length)];
  }
  return generator;
};

const getPassword = () => {
  const newPassword = generatorPassword(passwordLength.value);
  password.value = newPassword;
};

const savePassword = () => {
  const saveButton = document.getElementById("saveButton");
  document.title = password.value;
  saveButton.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," +
      encodeURIComponent("MyPassword: " + document.title)
  );
  saveButton.setAttribute("download", "LOG.txt");
};
