let session = new Map();
function HandleSession() {
    session.set("startDate", new Date().toLocaleString());
    session.set("userAgent", window.navigator.userAgent);
}

function CheckAge() {
    session.set("age", prompt("Введите ваш возраст"))

    if (session.get("age") < 18) {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.replace("https://google.com");
    }
}

let SessionLog = function() {
    for (let item of session) {
        console.log(item);
    }
}

function LiveVideoSearch() {
    for (let element of document.getElementsByClassName('video-container')) {
        let childElement = element.getElementsByTagName('h3')[0];

        if (!childElement.innerText.toLowerCase().includes(inputParseFunction())) {
            element.style.display = 'none';
            console.log(childElement.innerText);
        } else {
            element.style.display = 'inline-block';
        }
    }
}