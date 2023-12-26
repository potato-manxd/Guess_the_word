document.querySelector("img").onclick = function () {
    window.location.replace("../index.html")
}

document.querySelector(".audio").onclick = function () {

        if (document.querySelector(".audio").getAttribute("src") == "../assests/Audio.jpeg") {
            document.querySelector(".audio").setAttribute("src", "../assests/Mute.png")
            window.localStorage.setItem("sound", "off")
            console.log(window.localStorage.getItem("sound"))
        } else{
            window.localStorage.setItem("sound", "on")
            console.log(window.localStorage.getItem("sound"))
            document.querySelector(".audio").setAttribute("src", "../assests/Audio.jpeg")
        }

    }

document.getElementById("i").onclick = function () {
    window.localStorage.setItem("language", "arabic")
    console.log(window.localStorage.getItem("language"))
    document.querySelector("h2").textContent =" الصوت"
}

document.getElementById("i2").onclick = function () {
    window.localStorage.setItem("language", "english")
    console.log(window.localStorage.getItem("language"))
    document.querySelector("h2").textContent ="sound"
}

if (window.localStorage.getItem("language") == "arabic") {
    document.getElementById("i").setAttribute("checked", "")
    document.querySelector("h2").textContent =" الصوت"
} else {
    document.getElementById("i2").setAttribute("checked", "")
    document.querySelector("h2").textContent ="sound"
    document.querySelector("h2").textContent ="sound"
}

document.querySelector("input").onblur = function () {
    window.localStorage.setItem("name1", document.querySelector("input").value)
    console.log(window.localStorage.getItem("name1"))
}

document.querySelectorAll("input")[1].onblur = function () {
    window.localStorage.setItem("name2", document.querySelectorAll("input")[1].value)
    console.log(window.localStorage.getItem("name2"))
}

if (window.localStorage.getItem("name1")) {
    document.querySelector("input").value = `${window.localStorage.getItem("name1")}`
}

if (window.localStorage.getItem("name2")) {
    document.querySelectorAll("input")[1].value = `${window.localStorage.getItem("name2")}`
}
