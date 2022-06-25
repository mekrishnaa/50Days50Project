var checkbox = document.querySelector("input[name=checkbox]");
checkbox.addEventListener('change', function() {
    var sliderStatus = document.querySelector(".slider-status");
  if (this.checked) {
    console.log("Checkbox is checked..");
    sliderStatus.innerHTML="ON";

  } else {
    console.log("Checkbox is not checked..");
    sliderStatus.innerHTML="OFF";

  }
});