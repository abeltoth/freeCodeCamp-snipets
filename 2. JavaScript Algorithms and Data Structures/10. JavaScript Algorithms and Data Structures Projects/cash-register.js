function checkCashRegister(price, cash, cid) {
    const currencyValues = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    let change = cash - price;
    let result = {status: "", change: []};

    for (let i = currencyValues.length - 1; i >= 0; i--) {
        if (currencyValues[i] < change && cid[i][1] > 0) {
            const ammountWithCurrency = Math.min(Math.floor(change/currencyValues[i]) * currencyValues[i], cid[i][1]);
            result.change.push([cid[i][0], ammountWithCurrency]);
            change = (change - ammountWithCurrency).toFixed(2);
            cid[i][1] -= ammountWithCurrency;
        } else {
            result.change.push([cid[i][0], 0]);
        }
    }
    if (change > 0) {
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
    } else if (cid.map((obj) => obj[1]).reduce((acc, curr) => acc + curr) === 0) {
        result.status = "CLOSED";
        result.change.reverse();
    } else {
        result.status = "OPEN";
        for (let i = result.change.length - 1; i >= 0; i--) {
            if (result.change[i][1] === 0) {
                result.change.splice(i,1);
            }
        }
    }
    return result;
}
