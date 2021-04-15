let head = document.getElementById('header');
let home = document.getElementById('a-home');
let about = document.getElementById('a-about');
let service = document.getElementById('a-service');
let portfolio = document.getElementById('a-portfolio');
let blog = document.getElementById('a-blog');
let contact = document.getElementById('a-contact');

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
}

let heightAbout = getOffset(document.getElementById("about")).top; 
let heightSer = getOffset(document.getElementById("service")).top; 
let heightPort = getOffset(document.getElementById("portfolio")).top; 
let heightBlog = getOffset(document.getElementById("blog")).top; 
let heightCon = getOffset(document.getElementById("contact")).top; 

window.onscroll = function(){ 
    let height = window.pageYOffset;
        // console.log(a);
        if(height < 100)
        {
            head.classList.remove("bk-head");
        }
        if(height > 100)
        {
            head.classList.add("bk-head");
        } 
        if(height < heightAbout)
        {
            home.classList.add('nav-scroll');
        }
        else
        {
            home.classList.remove('nav-scroll');
        }
        if(height > heightAbout && height < heightSer)
        {
            about.classList.add('nav-scroll');
        }
        else
        {
            about.classList.remove('nav-scroll');
        }
        if(height > heightSer && height < heightPort) 
        {
            service.classList.add('nav-scroll');
        }
        else
        {
            service.classList.remove('nav-scroll');
        } 
        if(height > heightPort && height < heightBlog)
        {
            portfolio.classList.add('nav-scroll');
        }
        else
        {
            portfolio.classList.remove('nav-scroll');
        }
        if(height > heightBlog && height < heightCon)
        {
            blog.classList.add('nav-scroll');   
        }
        else
        {
            blog.classList.remove('nav-scroll');  
        }
        if(height > heightCon)
        {
            contact.classList.add('nav-scroll');
        }
        else
        {
            contact.classList.remove('nav-scroll');
        }
}


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

$('a').click(function(event){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    event.preventDefault();
});

$('.for-slick-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
});

$('.for-slick-slider-1').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true,
    });


