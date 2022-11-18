window.onload = () =>{
var btn = document.getElementById('button');
var collapse = document.getElementById("collapse");
var menu = document.getElementById("menu");

//BURGER
menu.style.display = "none";
btn.addEventListener('click', function () {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
        this.classList.add('not-active');        
        menu.style.display = "none";
    } else {
        this.classList.add('active');
        this.classList.remove('not-active');
        menu.style.display = "block";
    }

})

//MENU

/*collapse.addEventListener("click", () =>
{
    if(menu.style.display === "block")
    {
        menu.style.display = "none";
    }
    else
    {
    menu.style.display = "block";
}
})

if(menu)
{
    menu.addEventListener("click", () =>
    {
        menu.style.display = "block";
    })
}*/
}












