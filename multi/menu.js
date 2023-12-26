// window.localStorage.clear()
document.querySelector(".p").onclick = () => {
    window.location.assign("../index.html")
    window.localStorage.removeItem("rounds")
    window.localStorage.removeItem("ahh")
    window.localStorage.removeItem("firstScore")
    window.localStorage.removeItem("secondScore")
}

if (window.localStorage.getItem("firstScore")) {
    document.querySelectorAll("h3")[1].textContent = window.localStorage.getItem("firstScore")
    document.querySelectorAll("h3")[2].textContent = window.localStorage.getItem("secondScore")
}

if (window.localStorage.getItem("rounds")) {
    document.querySelectorAll("input")[1].remove()
}

if (window.localStorage.getItem("rounds") == "0") {
    if (window.localStorage.getItem("firstScore") > window.localStorage.getItem("secondScore")) {
        let h1 = document.createElement("h1")
        let h1t = document.createTextNode("first player win")
        if (window.localStorage.getItem("name1")) {
            h1t = document.createTextNode(`${window.localStorage.getItem("name1")} win`)
        }
        if (window.localStorage.getItem("language") == "arabic" || (window.localStorage.getItem("name1"))) {
            h1t = document.createTextNode(` هو الفائز ${window.localStorage.getItem("name1")}`)
        }
        h1.appendChild(h1t)
        document.querySelector("form").remove()
        document.querySelector("body").appendChild(h1)
        window.localStorage.removeItem("rounds")
        window.localStorage.removeItem("firstScore")
        window.localStorage.removeItem("secondScore")
    } else if (window.localStorage.getItem("firstScore") < window.localStorage.getItem("secondScore")) {
            let h1 = document.createElement("h1")
            let h1t = document.createTextNode("second player win")
            if (window.localStorage.getItem("name2")) {
                h1t = document.createTextNode(`${window.localStorage.getItem("name2")} win`)
            }
            if (window.localStorage.getItem("language") == "arabic" || (window.localStorage.getItem("name2"))) {
                h1t = document.createTextNode(` هو الفائز ${window.localStorage.getItem("name2")}`)
        }
        document.querySelector("form").remove()
        h1.appendChild(h1t)
        document.querySelector("body").appendChild(h1)
        window.localStorage.removeItem("rounds")
        window.localStorage.removeItem("firstScore")
        window.localStorage.removeItem("secondScore")
    }else {
        let h1 = document.createElement("h1")
        let h1t = document.createTextNode("its a draw")
        if (window.localStorage.getItem("language") == "arabic") {
            h1t = document.createTextNode(`انه تعادل`)

    }
    document.querySelector("form").remove()
    h1.appendChild(h1t)
    document.querySelector("body").appendChild(h1)
    window.localStorage.removeItem("rounds")
    window.localStorage.removeItem("firstScore")
    window.localStorage.removeItem("secondScore")
    }

}


let j = 0

if (document.querySelector("form")) {
    document.querySelector("form").onsubmit = (e) => {
        e.preventDefault()
        // document.querySelector("input").value = ""
        console.log(j)
        if (j == 0) {
            window.localStorage.setItem("ahh", "g")
            window.localStorage.setItem("firstWord", document.querySelector("input").value)
            // let firstword =     window.localStorage.getItem("firstWord")
            console.log(j)
    
            if (document.querySelectorAll("input")[1]) {
                window.localStorage.setItem("rounds", document.querySelectorAll("input")[1].value)
                document.querySelectorAll("input")[1].remove()
            }
            // window.localStorage.setItem("ahh", "")
            console.log(j)
            j++
            document.querySelector("input").value = ""
    
            // window.localStorage.setItem("ahh", Number(window.localStorage.getItem("ahh") + 1))
        } else if (j == 1) {
           
            console.log(j)
            console.log(333333333333)
            window.localStorage.setItem("secondWord", document.querySelectorAll("input")[0].value)
        window.location.assign("play/play.html")
        }
    
        // window.localStorage.setItem("ahh", Number(window.localStorage.getItem("ahh")) + 1)
    
        // window.localStorage.setItem("rounds", document.querySelectorAll("input")[1].value)
    }
}



// we are almost there