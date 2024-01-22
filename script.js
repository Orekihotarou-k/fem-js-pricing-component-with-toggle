// create variables
let priceChange = document.querySelector(".price-toggle--label")
let cardPrice = document.querySelectorAll(".card-price")

// add event listener which changes the cardprice when toggled
priceChange.addEventListener("click", () => {
    // call function that changes classnames
    priceSwap()
})



