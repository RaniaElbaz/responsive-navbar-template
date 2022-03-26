var bars = document.querySelector(".bars")
var list = document.querySelector(".link-list")
var trigger = document.querySelector(".service")
var dropdown = document.querySelector(".dropdown")

/* responsive style */
bars.onclick = function(){
    list.classList.toggle("resp-list")
}

/* show dropdown */
trigger.onmouseover = function(){
    dropdown.style.display = "block"
}

/* hide dropdown */
trigger.onmouseout = function(){
    dropdown.style.display = "none"
}