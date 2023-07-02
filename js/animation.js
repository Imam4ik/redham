const animationEls = document.querySelectorAll('._anim-el')

if(animationEls.length > 0) {
	window.addEventListener('scroll', animOnScroll)
	function animOnScroll() {
		for(let index = 0; index < animationEls.length; index++) {
			const animationEl = animationEls[index]
			const animationElHeight = animationEl.offsetHeight
			const animationElOffset = offset(animationEl).top
			const animationStart = 4

			let animationElPoint = window.innerHeight - animationElHeight / animationStart

			if(animationElHeight > window.innerHeight) {
				animationElPoint = window.innerHeight - window.innerHeight / animationStart
			}

			if((pageYOffset > animationElOffset - animationElPoint) && pageYOffset < (animationElOffset + animationElHeight)) {
				animationEl.classList.add('_active')
			} else {
				if(!animationEl.classList.contains('_anim-no-hide'))				
					animationEl.classList.remove('_active')
			}
		}
	}
	function offset(el)  {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}

	setTimeout(() => {
		animOnScroll()
	}, 400)
}