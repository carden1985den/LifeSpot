function HandleSession(CheckerAge, Logger) {

    if (NewSession()) {
        CheckerAge();

        window.sessionStorage.setItem('sessionDate', new Date().toLocaleString());
        window.sessionStorage.setItem('userAgent', window.navigator.userAgent);
    }
    Logger();
}

function NewSession() {
    if (window.sessionStorage.getItem('sessionDate') == null) {
        return true;
    }
    return false;
}

let CheckerAge = () => {
    
    if (window.sessionStorage.getItem('userAge') == null) {
        let age = prompt("Enter your age...");

        if (age < 18) {
            alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
            window.location.replace("https://google.com");
        } else {
            window.sessionStorage.setItem('userAge', age);
        }
    }
}

let Logger = () => {
    for (let item in window.sessionStorage) {
        console.log(window.sessionStorage[item]);
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