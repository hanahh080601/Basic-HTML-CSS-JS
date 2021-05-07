let navbar = document.querySelector(".navbar");

window.onscroll = function(){ 
    let height = window.pageYOffset;
    if(height > 0)
    {
        navbar.classList.add("fixed-top");
    }
    else navbar.classList.remove("fixed-top");
}