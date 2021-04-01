$(document).ready(
    function(){
        
	var slickTrack = document.querySelector('.slick-track');
	var slickSlice = document.querySelectorAll('.slick-slide');
	var slickDots = document.querySelectorAll('.slick-dots li');

	var btn = document.querySelectorAll('.slick-dots button');

    var eleIsClicked = 0; // vị trí của button được click

	var size = slickSlice[0].clientWidth; // lấy giá trị dịch chuyển bằng width của .slick-slice đang chứa ảnh
	var count = 1, time = 4000;
	var stateTab = true; // Dùng để kiểm tra xem user đang ở trong tab chứa web page của mình hay user đang ở tab khác
	var stateTranslateOfSlickTrack = true; // Kiểm tra xem .slick-track (là thằng chứa tất cả các ảnh) đã dịch chuyển xong chưa
	var v_interval = ""; // Dùng để lưu giá trị setInterval

	var hidden, visibilityChange;

    function run_setInterval(){
        v_interval = setInterval(()=>{
                 slickDots[count-1].classList.remove('slick-active');
                 slickTrack.style.transition ="transform 0.5s ease-in-out";
                 slickTrack.style.transform = `translate3d(${-size*(++count)}px,0px,0px)`;
                 eleIsClicked=count-1;
                 if(count === slickSlice.length - 1){
                     slickDots[0].classList.add('slick-active');
                 }else{
                     slickDots[count-1].classList.add('slick-active');
                 }
             }, time);
         }
     
         function run_clearInterval(){
             clearInterval(v_interval);
         }

         if (typeof document.hidden !== "undefined") {
            hidden = "hidden";
            visibilityChange = "visibilitychange";
        } else if (typeof document.msHidden !== "undefined") {
            hidden = "msHidden";
            visibilityChange = "msvisibilitychange";
        } else if (typeof document.webkitHidden !== "undefined") {
            hidden = "webkitHidden";
            visibilityChange = "webkitvisibilitychange";
        }
        
        // Hàm xử lý sự kiện visibilityChange cho document
        function handleVisibilityChange() {
            stateTab = (document[hidden])?false:true;
            if(stateTab){ // Nếu user ở trong tab.
                run_setInterval();
            }else{
                run_clearInterval();
            }
        }

        btn.forEach((elem) => {
            elem.addEventListener('click', ()=>{
                if(stateTranslateOfSlickTrack){ // Chỉ đuợc thực thi khi carousel đã thực hiện translate xong.
                    run_clearInterval();
                    slickTrack.style.transition = `transform 0.5s ease-in-out`;
                    count = Number(elem.textContent);
                    slickDots[eleIsClicked].classList.remove('slick-active');
                    slickDots[count-1].classList.add('slick-active');
                    slickTrack.style.transform = `translate3d(${-size*count}px,0px,0px)`;
                    eleIsClicked = count-1;
                    run_setInterval();
                }
            });
        });

        slickTrack.addEventListener('transitionend', ()=>{
            stateTranslateOfSlickTrack = true; // cho biết thằng carousel nó đã thực hiện xong việc translateX 
            let nameClassSlickSlide = slickSlice[count].id;
            if(nameClassSlickSlide === 'lastClone' || nameClassSlickSlide === 'firstClone'){ 
                slickTrack.style.transition = `none`;
                count = (nameClassSlickSlide === 'lastClone')?slickSlice.length - 2:(nameClassSlickSlide === 'firstClone')?1:count; // slickSlice .length - 2 thì 2 này là 1 cái ảnh ở đầu có id='lastClone' và 1 ảnh ở cuối có id = 'firstClone'
                eleIsClicked = count - 1;
                slickTrack.style.transform = `translateX(-${size*count}px)`;
            }
        })
    }
)