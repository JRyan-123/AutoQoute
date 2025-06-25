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


	if (this.value === "hg" || this.value === "hs") {
		inputDays.classList.add("hidden");
	}
	else{
		inputDays.classList.remove("hidden");
	}

	//reset value
	document.getElementById('result').innerText = "";
});



const km = document.getElementById('km');
const days = document.getElementById('days');
const div = 15;
let result = "";
const HSsameday = document.getElementById('HSsameday');


function calculate() {

	//catch empty or zero errors
	if (!km.value || km.value === "0") {
		alert("Invalid input: must be greater than 0.");
		return; // Stop the function
	}

	//switch per service option chosen
	switch(selectService.value){
		case "p2p":
			let xtraFee = 0;
				const carCharge = 1000 + (days.value * 1000);
				const driverFee = 500 + (days.value * 500);
				const gasToll = Math.ceil(km.value / 25) * 500;
				xtraFee += (Math.ceil((km.value-149)/100)*250);
				xtraFee += (Math.ceil((km.value-99)/100)*100);
				xtraFee += (Math.ceil((km.value-63)/25)*250);

				result = `Basepay: ${carCharge + driverFee + gasToll} and Extra fee of ${xtraFee}`;
			break;
		case "hs":
					//input 30 = disable sameday discount

				if (Number(km.value) >=30 && Number(HSsameday.value) === 1) {
					alert("sameday discount is for 30 km under!");
					HSsameday.value=2;
				}
				const value = Number(HSsameday.value);
				const sameday = value === 2 ? 0 : ((km.value) * 10) + 500 ;			
				totalCharge = ((1000 + ((km.value) * 40))*2) - sameday ;
				result = `TotalFee: ${Math.max(1000,totalCharge )} same day deduction ${sameday}` ;
			break;
		case "hg":
			
				totalCharge = 1000 + ((km.value) * 40);
				result = `TotalFee: ${Math.max(1000,totalCharge )} and extra 500 for helper` ;
			break;
	}

	
	document.getElementById('result').innerText = result;
}