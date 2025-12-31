let mainPicture = document.getElementsByClassName(".picture")[0];
let mainPictureTitle = document.getElementsByClassName(".mainSlider")[0].getElementsByTagName("p")[0];

const thumbnails = document.getElementsByClassName("thumbnails")[0];
const thumbnailsArray = thumbnails.getElementsByTagName("img");
const thumbnailsCount = thumbnailsArray.length;
let currentThumbnail = 0;

mainPicture.src = thumbnailsArray[0].src;
mainPictureTitle.innerText = thumbnailsArray[0].alt;

//Уменьщаем значение переменной что б выбрать предыдущий img в массиве
function slidePrev() {

    currentThumbnail -= 1;

    if (currentThumbnail > thumbnailsCount - 1 || currentThumbnail < 0) {
        currentThumbnail = thumbnailsCount - 1;
    }

    let slidePicture = thumbnailsArray[currentThumbnail]
    mainPicture.src = slidePicture.src;
    mainPictureTitle.innerText = slidePicture.alt
    
}

//Увеличиваем значение переменной что б выбрать следующий img в массиве
function slideNext() {

    currentThumbnail += 1;

    if (currentThumbnail > thumbnailsCount - 1 || currentThumbnail < 0)
    {
        currentThumbnail = 0;
    }

    let slidePicture = thumbnailsArray[currentThumbnail]
    mainPicture.src = slidePicture.src;
    mainPictureTitle.innerText = slidePicture.alt
}

let prevBtn = document.getElementsByClassName(".prev")[0]
prevBtn.addEventListener("click", slidePrev);

let nextBtn = document.getElementsByClassName(".next")[0]
nextBtn.addEventListener("click", slideNext);

mainPicture.addEventListener("slidePicture", slidePrev);