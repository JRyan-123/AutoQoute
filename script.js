const selectService = document.getElementById('selectService');
const HSwrapper = document.getElementById('HSwrapper');
const inputDays = document.getElementById('inputDays');


//choose on select service option
selectService.addEventListener('change' , function() {
	if (this.value === "hs") {
		HSwrapper.classList.remove("hidden");
	}
	else{
		HSwrapper.classList.add("hidden");
	}
	if (this.value === "hg") {
		inputDays.classList.add("hidden");
	}
	else{
		inputDays.classList.remove("hidden");
	}
});

//option for HS if selected
const HSoption = document.getElementById('HSoption');
const inline = document.querySelector('.inline');

HSoption.addEventListener("change", function() {
	if (this.value === "1way") {
		inline.classList.add("hidden");
	}
	else{
		inline.classList.remove("hidden");
	}
});

const km = document.getElementById('km');

const days = document.getElementById('days');
const div = 15;
let result = "";

function calculate() {
	if (selectService.value === "p2p") {
		const carCharge = 1000 + (days.value * 1000);
		const driverFee = 500 + (days.value * 500);
		const gasToll = Math.ceil(km.value / 25) * 500;
		const xtraFee = Math.max(0, Math.floor((km.value - 75) / 25)) * 250;	
		result = `Result: ${carCharge + driverFee + gasToll} and Extra fee of ${xtraFee}`;

	}

	document.getElementById('result').innerText = result;
}