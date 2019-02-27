// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    const H = 50,
    Q = 25,
    D = 10,
    N = 5,
    P = 1;
const obj = {};


if(currency>10000){ obj['error'] = "You are rich, my friend! We don't have so much coins for exchange";
return obj;
}
if (currency >= H) {
    var countH = Math.floor(currency / H);
    currency = currency % H;
};
if (currency >= Q) {
    var countQ = Math.floor(currency / Q);
    currency = currency % Q;
};
if (currency >= D) {
    var countD = Math.floor(currency / D);
    currency = currency % D;  
};
if (currency >= N) {
    var countN = Math.floor(currency / N);
    currency = currency % N;
};
if (currency >= P) {
    var countP = currency / P;
    currency = currency % P;
};

if (!!countH) {
    obj['H'] = countH;
}if (!!countQ) {
    obj['Q'] = countQ;
}if (!!countD) {
    obj['D'] = countD;
}if (!!countN) {
    obj['N'] = countN;
}if (!!countP) {
    obj['P'] = countP;
}
return obj;
 
}
