const isCoPrime = (num1, num2) => {
    for (let i = 2; i <= Math.min(num1, num2); i++) {
        if (num1 % i === 0 && num2 % i ===0) {
            return false
        }
    }
    return true
}

module.exports = isCoPrime;