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

	//reset value
	document.getElementById('result').innerText = "";
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
	if (!km.value || km.value === "0") {
		alert("Invalid input: must be greater than 0.");
		return; // Stop the function
	}
	if (selectService.value === "p2p") {
		let xtraFee = 0;
		const carCharge = 1000 + (days.value * 1000);
		const driverFee = 500 + (days.value * 500);
		const gasToll = Math.ceil(km.value / 25) * 500;
		 xtraFee += (Math.floor((km.value)/100)*500);
		 xtraFee += (Math.ceil((km.value-63)/25)*250);

		
		result = `Basepay: ${carCharge + driverFee + gasToll} and Extra fee of ${xtraFee}`;

	}

	else if (selectService.value === "hs") {
		  
	}
	else{
		let xtraFee = 0;
		xtraFee += (Math.ceil((km.value-5)/8)*50);
		totalCharge = 500 + ((km.value/100) * 3500);
		result = `TotalFee: ${Math.max(1000,totalCharge + xtraFee)} and extra 500 for helper` ;
	}
	document.getElementById('result').innerText = result;
}