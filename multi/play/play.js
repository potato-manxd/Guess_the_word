let l = 0
let words = []
let letters = []

if (window.localStorage.getItem("language") == "arabic") {
      letters = ["ا", "ب", "ت" ,"ث", "ج", "ح" ,"خ", "د", "ذ" ,"ر", "ز", "س" ,"ش", "ص", "ض" ,"ط", "ظ", "ع" ,"غ", "ف", "ق" ,"ك", "ل", "م" ,"ن", "ه", "و", "ي", "ة"]
      document.querySelector(".cletters").style.direction = "rtl"
} else {
      letters = ["a", "b" ,"c", "d"  ,"e", "f"  ,"g", "h"  ,"i", "j"  ,"k", "l"  ,"m", "n"  ,"o", "p"  ,"q", "r"  ,"s", "t" ,"u", "v" ,"w", "x" ,"y", "z" ] 
}

let word = window.localStorage.getItem("firstWord")
console.log(word)
let word1 =[]

for (let index = 0; index < word.length; index++) {
    word1.push(word[index])
}
window.localStorage.setItem("word", word)

// let letters = ['o']

    let help = []
    for (let index = 0; index < word1.length * 5; index++) {
        help.push(index + 1)
    }
    word1.forEach(function (e, ind, a) {
        help.push(ind)
        let div = document.createElement("div")
        div.setAttribute("class", `letter${ind}`)
        div.style.cssText = "font-size:29px; text-align:center; margin:2px; display: inline-block ; width: 10vw; border-bottom:solid black 2px; height:40px;"
        document.querySelector(".cletters").appendChild(div)
        let h2 = document.createElement("h2")
        h2.setAttribute("class", "correct letter")
        document.querySelector(".choose").appendChild(h2)
        h2.appendChild(document.createTextNode(`${e}`))


        for (let index =0; index < 4; index++) {
            let letter = Math.floor(Math.random() * letters.length)
            let txt =document.createTextNode(`${letters[letter]}`)
            let h2 = document.createElement("h2")
            document.querySelector(".choose").appendChild(h2)
            // h2.setAttribute("class", "letter")
            
            h2.appendChild(txt)
        }

        for (let index = 0; index < document.querySelectorAll("h2").length; index++) {
            if ( document.querySelectorAll("h2")[index].textContent == e) {
                document.querySelectorAll("h2")[index].setAttribute("class", `correct${ind} cl`)
        }     
    }

        // console.log(`${e}\n`)
    });
    for (let iv = 0; iv < document.querySelectorAll("h2").length; iv++) {
            
        let i = Math.floor(Math.random() * help.length)
        document.querySelectorAll("h2")[iv].style.order = `${i}`
        help.splice(i, 1)
    }
    let ahh = 0
    let shesh = word1.length
    let i1 = setInterval(() => {
         for(let i = 0; i < word1.length; i++) {
                if (document.querySelector(`.correct${i}`)) {
                    for (let index = 0; index < document.querySelectorAll(`.correct${i}`).length; index++) {
                        document.querySelectorAll(`.correct${i}`)[index].onclick = () => {
                            if (document.querySelector(`.correct${i}`)) {
                                l++
                                document.querySelector(`.letter${i}`).textContent = document.querySelector(`.correct${i}`).textContent
                                document.querySelector(`.letter${i}`).style.animationName = "correct "
                                document.querySelector(`.letter${i}`).style.animationDuration = "2s "
                                setTimeout(() => {
                                    document.querySelector(`.letter${i}`).style.animationName = "hh"
                                   }, 2000)
                                // document.querySelector(`.letter${i}`).style.transform = "translateY(-2.87vh)"

                                word1[i] = ""
                                 let j = []
                                 for (let index1 = 0; index1 < word1.length; index1++) {
                                     for (let ii = 0; ii < document.querySelectorAll("h2").length; ii++) {
                                        // if (document.querySelectorAll("h2")[ii].textContent != word1[index1]) {
                                         // j.push(document.querySelectorAll("h2")[ii])
                                         document.querySelectorAll("h2")[ii].setAttribute("class", null)
                                        
                                         
                                     }
                                 }
                                 // console.log(word1[i])
                                 let h2s = []
                                 for (let i3 = 0; i3 < word1.length; i3++) {
                                     for (let i2 = 0; i2 < document.querySelectorAll("h2").length; i2++) {
     
                                         if (document.querySelectorAll("h2")[i2].textContent == word1[i3]) {
                                             // let fuck = document.querySelectorAll("h2")[i2].getAttribute
                                             document.querySelectorAll("h2")[i2].setAttribute("class", `correct${i3} cl`)
                                             // for (let ii = 0; ii < j.length; ii++) {
                                             //     if ( document.querySelectorAll("h2")[i2] == j[ii]) {
                                             //         j[ii] = ""
                                             //     }
                                                 
                                             // }
                                         } 
                                     }
                                 }
                                
                                } else {
                                   
                                }
                            }
                            // document.querySelectorAll(`.correct${i}`)[index].remove()
                                     
                    }
                }
            }
 
    
    }, 10);
let q = []
for (let index = 0; index < window.localStorage.getItem("word").length; index++) {
   q.push(index)
//    console.log(q)
}
for (let index = 0; index < Math.floor(Math.random() * q.length); index++) {
    let b = Math.floor(Math.random() *q.length)
 
    let i = q[b]
    q.splice(b, 1)
    console.log(q)
    let t = document.createTextNode(`${window.localStorage.getItem("word")[i]}`)
    document.querySelector(`.letter${i}`).appendChild(t)


 
    // console.log(g)
     l++
     
    //  document.querySelector(`.letter${i}`).style.transform = "translateY(-2.87vh)"

    // console.log(word1[i])
 
    // console.log(document.querySelector(`.letter${i}`))
 
    word1[i] = ""
    for (let i2 = 0; i2 < document.querySelectorAll("h2").length; i2++) {
        if (document.querySelectorAll("h2")[i2].textContent == document.querySelector(`.letter${i}`).textContent) {
            for (let i3 = 0; i3 < word1.length; i3++) {
                for (let i4 = 0; i4 < document.querySelectorAll("h2").length; i4++) {
                    if (document.querySelectorAll("h2")[i4].textContent == word1[i3]) {
                        // let fuck = document.querySelectorAll("h2")[i2].getAttribute
                        document.querySelectorAll("h2")[i4].setAttribute("class", `correct${i3} cl`)
                    }
                }
            }
        }
    }
    console.log(i)


}

let i2 = setInterval(function () {
    for (let index = 0; index < document.querySelectorAll("h2").length; index++) {
        // console.log(document.querySelectorAll("h2")[index].getAttribute("class"))
        if (document.querySelectorAll("h2")[index].getAttribute("class") == null || document.querySelectorAll("h2")[index].getAttribute("class") == "null") {
            document.querySelectorAll("h2")[index].onclick = function () {
                --document.querySelectorAll("span")[1].textContent
                for (let ic = 0; ic < document.querySelectorAll("h2").length; ic++) {
                    document.querySelectorAll(`h2`)[ic].style.animationName = "wrong"
                    document.querySelectorAll(`h2`)[ic].style.animationDuration = "2s "
                   setTimeout(() => {
                    document.querySelectorAll(`h2`)[ic].style.animationName = "hh"
                   }, 2000)
                }
                if( document.querySelectorAll("span")[1].textContent == 0) {
                    setTimeout(() => {
                        window.location.assign("../play2/play.html")
                }, 500)
                }
            }
        }
    }
},1)

document.querySelector(".p").onclick = () => {
    window.location.assign("../../index.html")
    window.localStorage.removeItem("rounds")
    window.localStorage.removeItem("ahh")
    window.localStorage.removeItem("firstScore")
    window.localStorage.removeItem("secondScore")
}

let i3 = setInterval(() => {

//    console.log(l)
//    console.log(window.localStorage.getItem("word"))
    if (l == window.localStorage.getItem("word").length) {
        if (window.localStorage.getItem("firstScore") != null) {
            
           console.log("fuck")
            window.localStorage.setItem("firstScore", `${Number(window.localStorage.getItem("firstScore")) + 50}`)
        } else {
            window.localStorage.setItem("firstScore", 50)
        }
        setTimeout(() => {
            location.replace("../play2/play.html")
    }, 500)
    clearInterval(i3)
    }
}, 1);


// if you click the first correct buuton it dosent work