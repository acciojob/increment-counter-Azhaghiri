//your JS code here. If required.
let counterValue = 0;

let counter = document.getElementById("counter");
let incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click",function () {
	alert('Current value before increment: ' + counterValue)

	counterValue++;

	counter.textContent = counterValue;
})