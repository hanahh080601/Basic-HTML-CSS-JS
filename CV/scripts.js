let head = document.getElementById('header');
let home = document.getElementById('a-home');
let about = document.getElementById('a-about');
let service = document.getElementById('a-service');
let portfolio = document.getElementById('a-portfolio');
let blog = document.getElementById('a-blog');
let contact = document.getElementById('a-contact');
let slider = document.getElementById('slider');
const progress = document.querySelectorAll('.progress-done');
const tooltip1 = document.querySelectorAll('.tooltip1');
const counters = document.querySelectorAll('.counter');
const numbers = document.querySelectorAll('.so');
const loading = document.getElementById('loading'); 

let heightAbout = getOffset(document.getElementById("about")).top; 
let heightSer = getOffset(document.getElementById("service")).top; 
let heightPort = getOffset(document.getElementById("portfolio")).top; 
let heightBlog = getOffset(document.getElementById("blog")).top; 
let heightCon = getOffset(document.getElementById("contact")).top; 
let heightSkill = getOffset(document.querySelector(".AUBK2")).top;
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
}

setTimeout(function(){
    loading.style.opacity = 0;
    loading.style.zIndex = -10;
},1000)


let check1 = false;
function animateValue1(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
    check1 = true;
  }

  let check2 = false;
function animateValue2(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
    check2 = true;
  }


window.onscroll = function(){ 
    let height = window.pageYOffset;
        if(height >= heightAbout - 200 && check1 == false) {
            numbers.forEach(function(num){
                animateValue1(num, 0, num.getAttribute('data-Number'), 2000);
            })
            
        }
        if(height >= heightSkill - 380 && check2 == false)
        {
            for(let i = 0; i < 4; i++)
            {
                progress[i].style.width = progress[i].getAttribute('data-done') + '%';
            }
            counters.forEach(function(counter){
                animateValue2(counter, 0, counter.getAttribute('data-TargetNum'), 2000);
            })
        }
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
        if(height > heightCon - 100)
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
    //autoplay: true,
    //autoplaySpeed: 2000,
    dots: true,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },   
      ]
});

$('.for-slick-slider-1').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },

            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
              },
            
            
          ]
    });

  