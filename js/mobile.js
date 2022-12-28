window.addEventListener("load", function(){
	let top=document.getElementsByClassName("top")[0];
	let tab=top.getElementsByClassName("tab")[0];
	console.log(tab);

	let menu=document.getElementsByClassName("menu")[0];
	let menuLi=moblie_gnb.firstElementChild.children;
	let closeBtn=menu.getElementsByClassName("close")[0];

	tab.addEventListener("click", function(e){
		e.preventDefault();
		gsap.to(menu, {left: 0, duration: 0.3});
	});
	closeBtn.addEventListener("click", function(e){
		e.preventDefault(); 
		gsap.to(menu, {left: "-100vw", duration: 0.3, onComplete: function(){
			for(let i=0; i<menuLi.length; i++){
				if(menuLi[i].classList.contains("active")){
					menuLi[i].classList.remove("active");
					menuLi[i].children[1].style.display="none"; 
				}
			}
		}});
	});
	
	for(var i=0; i<menuLi.length; i++){
		menuLi[i].index=i;

		menuLi[i].addEventListener("click", function(e){
			e.preventDefault();
			var index=e.currentTarget.index;

			for(let j=0; j<menuLi.length; j++){
				if(j == index){
					menuLi[j].classList.add("active");
					menuLi[j].children[1].style.display="block";
				}
				else{
					menuLi[j].classList.remove("active");
					menuLi[j].children[1].style.display="none"; 
				}
			}
		}); 
	}	
});