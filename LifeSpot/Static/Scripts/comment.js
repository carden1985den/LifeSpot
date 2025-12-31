// класс комментария
function Comment() {
    let max = 9999;
    let min = 1;
    this.name = prompt("Введите своё имя");
    //this.name = "Денис"
    if (this.name.length == 0) {
        this.empty = true;
        return
    }

    this.text = prompt("Введите комментарий");
    //this.text = "Комментарий"
    if (this.text.length == 0) {
        this.empty = true;
        return
    }
    this.id = Math.floor(Math.random() * (max - min)) + min;

    this.date = new Date().toLocaleString();
}

function GetUserData() {

    let comment = new Comment()

    if (comment.empty != true) {
        let mustLike = confirm("Оставить отзыв на комментарий?");

        if (mustLike == true) {
            let commentWithLike = Object.create(comment)
            commentWithLike.rate = 0;
            PostComment(commentWithLike);
        } else {
            PostComment(comment);
        }
    }
}

function setLike(id){
    let element = document.getElementById("comment_" + id);
    let elementCount = element.querySelector("i");
    let count = Number(elementCount.innerText.replace('(', '').replace(')', '')) + 1;
    elementCount.innerText = count
    
    console.log(count);
    
}

function PostComment(comment) {

    let codeLike = '';
    if (comment.hasOwnProperty("rate")) {
        codeLike = `<div style="display:inline-block" id="comment_${comment.id}"> <img onclick="setLike(${comment.id})" style="width:15px; 
        height:15px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Likee_new_logo.png/1280px-Likee_new_logo.png"/>
        <i> (${comment.rate}) </i> </div>`
    }

    document.getElementsByClassName('comment_area')[0].innerHTML +=
        `<div class="comment_title">` +
        `<i><b>${comment.name}</b> (${comment.date})</i> ${codeLike} ` +
        `<p> ${comment["text"]} </p>` +
        `</div>`
}
