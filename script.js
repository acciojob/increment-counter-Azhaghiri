//your JS code here. If required.
let counterValue = 0;

let counter = document.getElementById("counter");
let incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click",function () {
	counterValue++;
	alert('Current value before increment: ' + counterValue)
 

	counter.textContent = counterValue;
})