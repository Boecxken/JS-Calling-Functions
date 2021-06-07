// Hey kiddo
const checkAge = function (age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

const greeting = function (age) {
    if (checkAge(age) == true) {
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
};

console.log(greeting(18));
console.log(greeting(16));


// VAT exercise 1
const VAT = function (baseprice) {
    const amountVAT = baseprice * 0.21;
    return amountVAT;
};

const price = function (baseprice) {
    const priceIncludingVAT = VAT(baseprice) + baseprice;
    return priceIncludingVAT;
};

console.log(price(10));

//VAT exercise 2

