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

const productsRate = 0.5;
const ordersRate = 0.25;
const packageBasicRate = 0;
const packageProfessionalRate = 25;
const packagePremiumRate = 60;
const accountingRate = 35;
const terminalRate = 5;

let totalPrice = 0;

function getProductsResult() {
    return inputProducts.value * productsRate;
};
function getOrdersResult() {
    return inputOrders.value * ordersRate;
};
function getPackageResult() {
    if (options[1].selected) {
        packageResult.firstElementChild.nextElementSibling.innerText = "Basic";
        packageResult.lastElementChild.innerText = "$0";
        return packageBasicRate;
    } else if (options[2].selected) {
        packageResult.firstElementChild.nextElementSibling.innerText = "Professional";
        packageResult.lastElementChild.innerText = "$25";
        return packageProfessionalRate;
    } else if (options[3].selected) {
        packageResult.firstElementChild.nextElementSibling.innerText = "Premium";
        packageResult.lastElementChild.innerText = "$60";
        return packagePremiumRate;
    } else {
        return 0;
    }
};
function getAccountingResult() {
    if (checkboxAccounting.checked) {
        return accountingRate;
    } else if (!checkboxAccounting.checked) {
        return 0;
    }
};
function getTerminalResult() {
    if (checkboxTerminal.checked) {
        return terminalRate;
    } else if (!checkboxTerminal.checked) {
        return 0;
    }
};

function calculateTotalPrice() {
    totalPrice = 0;
    const productsTotal = getProductsResult();
    const ordersTotal = getOrdersResult();
    const packageTotal = getPackageResult();
    const accountingTotal = getAccountingResult();
    const terminalTotal = getTerminalResult();
    totalPrice = productsTotal + ordersTotal + packageTotal + accountingTotal + terminalTotal;
    totalResult.lastElementChild.innerText = "$" + totalPrice;
};

inputProducts.addEventListener("keyup", function(e) {
    productsResult.classList.remove("calculator__hidden");
    productsResult.firstElementChild.nextElementSibling.innerText = inputProducts.value + " * $" + productsRate;
    productsResult.lastElementChild.innerText = "$" + getProductsResult();
    calculateTotalPrice();
});

inputOrders.addEventListener("keyup", function(e) {
    ordersResult.classList.remove("calculator__hidden");
    ordersResult.firstElementChild.nextElementSibling.innerText = inputOrders.value + " * $" + ordersRate;
    ordersResult.lastElementChild.innerText = "$" + getOrdersResult();
    calculateTotalPrice();
});

selectPackage.addEventListener("change", function(e) {
    packageResult.classList.remove("calculator__hidden");
    getPackageResult();
    calculateTotalPrice();
});

checkboxAccounting.addEventListener("click", function(e) {
    accountingResult.classList.toggle("calculator__hidden");
    accountingResult.lastElementChild.innerText = "$" + getAccountingResult();
    calculateTotalPrice();
});

checkboxTerminal.addEventListener("click", function(e) {
    terminalResult.classList.toggle("calculator__hidden");
    terminalResult.lastElementChild.innerText = "$" + getTerminalResult();
    calculateTotalPrice();
});

totalResult.lastElementChild.innerText = "$" + totalPrice;