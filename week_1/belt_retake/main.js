// console.log("Great job!")

var click = 0

function countLikes(element) {
    click++
    element.innerText = click + "Likes"
}


var click = 0

function hide(element) {
    element.remove()
}