function GetUserData() {

    let userData = {};
    userData["name"] = prompt("Введите своё имя");
    if (userData["name"].length == 0) {
        return
    }

    userData["comment"] = prompt("Введите комментарий");
    if (userData["comment"].length == 0) {
        return
    }

    userData["date"] = new Date().toLocaleString()

    PostComment(userData);
}

function PostComment(userData) {

    document.getElementsByClassName('comment_area')[0].innerHTML +=
        `<div class="comment_title">` +
        `<i><b>${userData.name}</b> (${userData.date})</i>` +
        `<p> ${userData["comment"]} </p>` +
        `</div>`
}