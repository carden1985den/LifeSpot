let session = new Map();
session.set("name", prompt("Введите своё Имя"));

let age = prompt("Введите ваш возраст");

let nowDate = new Date().toLocaleString();

if (age < 18) {
    alert("Вы слишком югны..." + new Date().toLocaleString());
    window.location.href("https://google.com");
}

session.set("date", (new Date()));
session.set("userAgent", window.navigator.userAgent);

for (let item of session) {
    console.log(item[0] + ":" + item[1])
}