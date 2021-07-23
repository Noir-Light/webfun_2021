var click = 0

function loginNLogout(element) {

    if (element.innerText == "Login") {
        element.innerText = "Logout"

    }
    else {
        element.innerText = "Login"
    }
}


var click = 0
function countLikes(element) {
    click++
    element.innerText = click + "likes"
}

// var click = 0
// function alert() {
//     console.log("Ninja was liked")
// }


var click = 0

function hide(element) {
    element.remove()
}

