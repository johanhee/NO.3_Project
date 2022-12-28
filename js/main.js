window.addEventListener("DOMContentLoaded", function(){
	// gnb 

	// 메인 화면
   const start=document.getElementById("header");
   const video1=document.getElementById("intro_1");
   const video2=document.getElementById("intro_2");
   

   video1.addEventListener("loadeddata" , function(){
      video1.muted=true;
      video1.play();
   });

   video1.addEventListener("ended", function(){
      video1.currentTime=0;
      video1.play();
   });

   var mainTotal, mainCurrent; 
   let activeNum=0; 

    var mainswiper = new Swiper(".main_slider .mainSwiper", {
      speed: 1200,

      on: {
         slideChange: function(){
            activeNum=this.activeIndex; 
            //console.log(activeNum);

            if(activeNum == 0){
               video1.play();
               video2.pause();
            }
            else if(activeNum == 1){
               video1.pause();
               video2.play();
            }   
         }
      },

		pagination: {

		el: ".main_slider swiper-pagination", 
		dynamicBullets: true,
		
		}
   })

   function sliderActiveEffect(){
		$(".main_slider .mainSwiper").each(function(i){
			if($(this).hasClass("mainSwiper-active")){
				$(this).find(".textbox .title").animate({opacity: 1, marginTop: 0}, 600);
				$(this).find(".textbox .desc").delay(500).animate({opacity: 1, marginTop: 0}, 600);
				$(this).find(".textbox .link").delay(1000).animate({opacity: 1, marginTop: 0}, 600);
			}
			else {
				$(this).find(".texbot .title").removeAttr("style");
				$(this).find(".texbot .desc").removeAttr("style");
				$(this).find(".texbot .link").removeAttr("style");
			}
		});
   }

   $(function(){
	var n=0;
	var h;
	var pos=0;
	var timer=0;
	var total=3;

	function init(){
		$(".wrap").addClass("active");
		$(".controllers li").eq(n).addClass("on"); 
	}
	init();

	$(window).resize(function(){
		clearTimeout(timer);

		timer=setTimeout(function(){
			h=$(window).height();
			pos=n*h;
			$("html").stop().animate({scrollTop:pos}, 800); // 정해진 크기 설정? 
		}, 100);
	});
	$(window).trigger("resize"); 

	$(".wrap").mousewheel(function(e,delta){ //delta 마우스휠의 움직이는 방향..
		if($("html").is(":animated")) return;

		if(delta > 0 ){
			if(n > 0){
				n=n-1;
			}
		}
		else{
			if(n < 6){
				n=n+1;
			}
		}
		pos=n*h;

		$("html").stop().animate({scrollTop: pos}, 800, function(){
			$(".wrap > *").removeClass("active");
			$(".controllers li").removeClass("on");

			if(n == 0){
				$("#header").addClass("active");
				$(".controllers li").eq(n).addClass("on");
			}
			else if(n == total){
				$(".controller li").eq(n-1).addClass("on");
			}
			else{
				$("#page"+n).addClass("active");
				$(".controllers li").eq(n).addClass("on");
			}
		});
	});

		$(".controllers li").click(function(e){
			if($("html").is(":animated")) return;

			e.preventDefault();
			n=$(this).index();
			pos=n*h;

			$("html").animate({scrollTop:pos}, 800), function(){
				// $(".containers > *").removeClass("active");
				// $(".containers > *").eq(n).addClass("active");
				$(".controllers li").removeClass("on");
				$(".controllers li").eq(n).addClass("on");
			}
		});

		var imageN;

		$(".banner_list li").hover(
			function(){
				$(this).addClass("on");
				imageN=$(this).index();
				$(".swap_bg").removeClass("active");
				$(".swap_bg").eq(imageN).addClass("active");
			},
			function(){
				$(this).removeClass("on");
				imageN=null;
				$(".swap_bg").removeClass("active");
			},
		)
	});

	
});

