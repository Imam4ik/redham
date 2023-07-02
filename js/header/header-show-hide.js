
const html = document.html
const header = document.body.querySelector('.header')



var last_scroll = 50;
window.addEventListener('scroll', function(e){
  if(window.scrollY > last_scroll){
	if(window.scrollY > 50) 
		if(menu.classList[1] !== 'active') header.style.top = '-100px';
  }else{
    header.style.top = '0px';
  }
  last_scroll = window.scrollY;
})
