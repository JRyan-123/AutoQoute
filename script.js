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