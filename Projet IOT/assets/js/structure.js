window.onload = () =>{
var btn = document.getElementById('button')
var collapse = document.getElementById("collapse")
var menu = document.getElementById('menu')


//BURGER
menu.style.display = "none";

btn.addEventListener('click', function () {
    if (this.classList.contains('active')) {
        this.classList.remove('active')
        this.classList.add('not-active')    
        menu.style.display = "none"
    } else {
        this.classList.add('active')
        this.classList.remove('not-active')
        menu.style.display = "block"
    }

})

//MENU - QUERY
var x = window.matchMedia("(min-width: 1280px)")

function dispNav(x) {
    if (x.matches) {
      menu.style.display = "block"
      menu.style.width = "250px"
      menu.style.zIndex = "-1"
    } else {
      menu.style.display = "none"
    }
  }

dispNav(x)
x.addEventListener(dispNav)
  
//Empecher retour en arriere apres déconnexion
//history.back()

}


// DATE
var date = new Date();
const months = ['01','02','03','04','05','06','07','08','09','10','11','12']

var initDate = () => {
    var date = new Date();
    var currentDate = {
        day: date.getDate(),
        months: months[date.getMonth()],
        year: date.getFullYear(),
        hours: date.getHours(),
        minutes: date.getMinutes()
    }
    return currentDate;
}

var setData = (data) =>{
    if (data<10) {
        return '0'+data;
    }
    return data;
}

var displayDate = () => {
    var currentDate = initDate()

    var div = document.createElement('div')
    var div2 = document.createElement('div')

    div.className = 'currentDate'
    div2.className = 'currentTime'

    var date = `${currentDate.day}/${currentDate.months}/${currentDate.year}, `
    var time = `${setData(currentDate.hours)}:${setData(currentDate.minutes)}`
   
    var text = document.createTextNode(date)
    var text_time = document.createTextNode(time)

    div.appendChild(text);
    div.appendChild(text_time);

    document.getElementById('dateHeure').innerHTML = ""
    document.getElementById('dateHeure').appendChild(div)
    document.getElementById('dateHeure').appendChild(div2)

}

setInterval(displayDate, 500)