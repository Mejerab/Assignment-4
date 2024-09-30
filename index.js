function calculateMoney(ticketSale) {
    if (ticketSale > 0) {
        const price = 120;
        const daroan = 500;
        const lunch = 50 * 8;
        const income = ticketSale * price;
        const spend = daroan + lunch;
        const profit = income - spend;
        return profit;
    }
    else{
        console.log('Number is not valid');
    }
}

function checkName(Name) {
    if (typeof (Name) === 'string') {
        const name = Name.toLowerCase();
        if (name.slice(-1) == 'a' || name.slice(-1) == 'y' || name.slice(-1) == 'i' || name.slice(-1) == 'e' || name.slice(-1) == 'o' || name.slice(-1) == 'u' || name.slice(-1) == 'w') {
            return 'Good Name'
        }
        else {
            return 'Bad Name';

        }
    }
    else{
        return 'Invalid'
    }
}

function deleteInvalids(array) {
    if (Array.isArray(array)) {
        let output = [];
        for (const item of array) {
            if (typeof (item) === "number" && !isNaN(item)) {
                output.push(item);
            }
        }
        return output;
    }
    else {
        return 'Invalid'
    }
}

function password(obj) {
    if (obj.name && obj.birthYear && obj.siteName && obj.birthYear.toString().length > 3) {
        const pass = (obj.siteName + '#' + obj.name + '@' + obj.birthYear);
        const password = pass.charAt(0).toUpperCase() + pass.slice(1);
        return password
    }
    else {
        return 'Invalid'

    }
}

function monthlySavings(array , livingCost) {
    if (Array.isArray(array) && typeof(livingCost) === "number") {
        let left = 0;
    for (const arr of array) {
        if (arr >= 3000) {
            const taka = arr - (arr * 0.20)
            left = left + taka;
        }
        else{
            left = left + arr;
        }
    }
    const savings = left - livingCost;
    if (savings > 0) {
        return savings
    }
    else{
        return 'earn more'
    }
    }
    else{
        return "Invalid"
    }
}
