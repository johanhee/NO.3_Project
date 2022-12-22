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
});

