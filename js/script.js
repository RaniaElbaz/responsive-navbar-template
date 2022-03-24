var bars = document.querySelector(".bars")
var list = document.querySelector(".link-list")

/* to display list of icons*/
bars.onclick = function(){
    if(list.className == 'link-list'){
        list.className += ' resp-list'
    }
    else{
        list.className = 'link-list'
    }
}