function GetInput() {
    let input = {
        text: GetCurrentInput(),
    }

}

function GetPrevInput(input) {
    
}

function GetCurrentInput() {
    return document.getElementsByClassName("curreentInput")[0].value.toLowerCase()
}
