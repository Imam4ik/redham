const footerForm = document.querySelector('.footer-form')
const footerFormFillIn = document.querySelectorAll('.footer-form .fill')
const footerFormBtn = footerForm.querySelector('#form-submit')


footerFormFillIn.forEach(el => {
	el.addEventListener('input', getFill, false)
})

function getFill() {
	footerFormBtn.disabled = this.value.trim().length === 0;
}




// function disabledGet(element) {
// 	if(element.getAttribute('disabled') === '') {
// 		console.log('Ok');
// 	}
// 	if(element.getAttribute('disabled') === null) {
// 		console.log('Nope');
// 	}
// }
// disabledGet(footerFormBtn)
