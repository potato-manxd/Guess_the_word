// document.querySelector("button").onclick = function(e) {
//     document.querySelector("form").remove()
//     let wordForm = document.createElement("form")
//     wordForm.setAttribute("method", "get")
//     // 
//     let writeTheWord = document.createElement("h2")
//     let writeTheWordText = document.createTextNode("write the word")
//     writeTheWord.appendChild(writeTheWordText)
//     // 
//     let wordInput = document.createElement("input")
//     wordInput.setAttribute("type", "text")
//     wordInput.setAttribute("name", "word")
//     wordInput.setAttribute("id", "word")
//     wordInput.setAttribute("required", "")
//     // 
//     let next = document.createElement("button")
//     let nextText = document.createTextNode("start")
//     next.setAttribute("type", "submit")
//     next.appendChild(nextText)
//     // 
//     wordForm.appendChild(writeTheWord)
//     wordForm.appendChild(wordInput)
//     wordForm.appendChild(next)
//     document.querySelector("div").appendChild(wordForm)
//     // 
//     // 
//     next.onclick = function(e) {
//         wordForm.remove()
//         e.preventDefault()
//     }
//     // 
//     // 
//     e.preventDefault()
// }

// document.querySelector("h1").style.marginBottom 

// 

document.querySelector("img").onclick = function() {
    window.location.replace("settings/settings.html")
}

if (window.localStorage.getItem("language") == "arabic") {

    document.querySelector(".play").textContent = "لاعب منفرد"
    document.querySelector(".multi").textContent = "متعدد اللاعبين"
}

document.querySelector(".single").onclick = function() {
    window.location.replace("play-offline/play.html")
}

document.querySelector(".multi").onclick = function () {
    window.location.replace("multi/menu.html")
}