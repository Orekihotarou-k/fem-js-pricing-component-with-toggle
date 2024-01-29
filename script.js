// create variables
const priceToggle = document.querySelector(".price-toggle--button");
const monthPriceElements = document.querySelectorAll('.card-price-monthly');
const yearPriceElements = document.querySelectorAll('.card-price');

// Add event listener that calls the priceChange function
if (priceToggle) {
    priceToggle.addEventListener("click", priceChange);
}

// create function to swap prices when button is clicked
function priceChange(event) {

    // Toggle change of price elements
    monthPriceElements.forEach((element) => {
        element.style.display = element.style.display === "none" ? "block" : "none";
    });

    yearPriceElements.forEach((element) => {
        element.style.display = element.style.display === "block" ? "none" : "block";
    });

    // toggle button active class
    priceToggle.classList.toggle("active");
}

// function to set initial styles for price toggles
function init() {
    monthPriceElements.forEach((element) => {
      element.style.display = "none";
    });
  
    yearPriceElements.forEach((element) => {
      element.style.display = "block";
    });
  }
  
  init();
