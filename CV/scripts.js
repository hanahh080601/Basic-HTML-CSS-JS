let head = document.getElementById('header');
let home = document.getElementById('a-home');
let about = document.getElementById('a-about');
let service = document.getElementById('a-service');
let portfolio = document.getElementById('a-portfolio');
let blog = document.getElementById('a-blog');
let contact = document.getElementById('a-contact');

window.onscroll = function(){ 
    let height = window.pageYOffset;
        console.log(height);
        if(height < 100)
        {
            head.classList.remove("bk-head");
        }
        if(height > 100)
        {
            head.classList.add("bk-head");
        } 
        if(height < 670)
        {
            home.classList.add('nav-scroll');
        }
        else
        {
            home.classList.remove('nav-scroll');
        }
        if(height > 670 && height < 2950)
        {
            about.classList.add('nav-scroll');
        }
        else
        {
            about.classList.remove('nav-scroll');
        }
        if(height > 2950 && height < 3940) 
        {
            service.classList.add('nav-scroll');
        }
        else
        {
            service.classList.remove('nav-scroll');
        } 
        if(height > 3940 && height < 5800)
        {
            portfolio.classList.add('nav-scroll');
        }
        else
        {
            portfolio.classList.remove('nav-scroll');
        }
        if(height > 5800 && height < 6850)
        {
            blog.classList.add('nav-scroll');   
        }
        else
        {
            blog.classList.remove('nav-scroll');  
        }
        if(height > 6850)
        {
            contact.classList.add('nav-scroll');
        }
        else
        {
            contact.classList.remove('nav-scroll');
        }
}
// document.addEventListener("DOMContentLoaded",function() {
   
// })
$(document).ready(
    function(){
        //mobile nav
        $('.mobile-icon').click(
            function(){
                $('.nav').slideToggle(200);
            }
        )
    }
    
)

$(document).ready(function(){
    $('.for-slick-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        dots: true,
    });
});

$(document).ready(function(){
    $('.for-slick-slider-1').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        // autoplay: true,
        // autoplaySpeed: 2000,
        dots: true,
    });
});

