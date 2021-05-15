const loading = document.getElementById('loading');

setTimeout(function(){
    loading.style.opacity = 0;
    loading.style.zIndex = -10;
},1000)

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
