const body = document.body
const menu = document.querySelector('.header-menu')
const shnyga = document.querySelector('.header-block__shnyga')

window.addEventListener('click', (e) => {
	if(e.target != shnyga) menu.classList.remove('active')
})
shnyga.addEventListener('click', () => {
	menu.classList.toggle('active')
})

