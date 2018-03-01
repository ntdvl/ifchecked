var x = document.getElementById('terms');
var result = document.getElementById('result');
var customForm = document.getElementById('myForm');

function check(event) {

	if (!x.checked) {

		result.innerHTML = 'You must agree to the terms.';
		event.preventDefault();

	}
}
customForm.addEventListener('submit', check, true);