const inputProducts = document.querySelector("#products");
const inputOrders = document.querySelector("#orders");
const selectPackage = document.querySelector("#package");
const options = document.querySelectorAll("option");
const checkboxAccounting = document.querySelector("#accounting");
const checkboxTerminal = document.querySelector("#terminal");

const productsResult = document.querySelector("#products-result");
const ordersResult = document.querySelector("#orders-result");
const packageResult = document.querySelector("#package-result");
const accountingResult = document.querySelector("#accounting-result");
const terminalResult = document.querySelector("#terminal-result");
const totalResult = document.querySelector("#total");

console.log(selectPackage, packageResult);

let totalPrice = 0;

inputProducts.addEventListener("click", function(e) {
    productsResult.classList.remove("calculator__hidden");
});
inputProducts.addEventListener("keyup", function(e) {
    productsResult.firstElementChild.nextElementSibling.innerText = inputProducts.value + " * $0.5";
    productsResult.lastElementChild.innerText = "$" + inputProducts.value * 0.5;
});
inputProducts.addEventListener("change", function(e) {
    totalPrice += inputProducts.value * 0.5;
    totalResult.lastElementChild.innerText = "$" + totalPrice;
});

inputOrders.addEventListener("click", function(e) {
    ordersResult.classList.remove("calculator__hidden");
});
inputOrders.addEventListener("keyup", function(e) {
    ordersResult.firstElementChild.nextElementSibling.innerText = inputOrders.value + " * $0.25";
    ordersResult.lastElementChild.innerText = "$" + inputOrders.value * 0.25;

});
inputOrders.addEventListener("change", function(e) {
    totalPrice += inputOrders.value * 0.25;
    totalResult.lastElementChild.innerText = "$" + totalPrice;
});

selectPackage.addEventListener("change", function(e) {
    packageResult.classList.remove("calculator__hidden");
    if (options[1].selected) {
        packageResult.firstElementChild.nextElementSibling.innerText = "Basic";
        packageResult.lastElementChild.innerText = "$0";
        totalPrice += 0;
    };    
    if (options[2].selected) {
        packageResult.firstElementChild.nextElementSibling.innerText = "Professional";
        packageResult.lastElementChild.innerText = "$25";
        totalPrice += 25;
    };  
    if (options[3].selected) {
        packageResult.firstElementChild.nextElementSibling.innerText = "Premium";
        packageResult.lastElementChild.innerText = "$60";
        totalPrice += 60;
    };  
    totalResult.lastElementChild.innerText = "$" + totalPrice;
});

checkboxAccounting.addEventListener("click", function(e) {
    accountingResult.classList.toggle("calculator__hidden");
    accountingResult.lastElementChild.innerText = "$35";
    if (checkboxAccounting.checked) {
        totalPrice += 35;
    } else if (!checkboxAccounting.checked) {
        totalPrice -= 35;
    }
    totalResult.lastElementChild.innerText = "$" + totalPrice; 
});

checkboxTerminal.addEventListener("click", function(e) {
    terminalResult.classList.toggle("calculator__hidden");
    terminalResult.lastElementChild.innerText = "$5";
    if (checkboxTerminal.checked) {
        totalPrice += 5;
    } else if (!checkboxTerminal.checked) {
        totalPrice -= 5;
    }
    totalResult.lastElementChild.innerText = "$" + totalPrice;
});

totalResult.lastElementChild.innerText = "$" + totalPrice;