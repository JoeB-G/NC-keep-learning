const toggleDoors = (numberOfDoors) => {
    const resultArray = [];
    for (let i = 1; i*i <= numberOfDoors; i++) {
        resultArray.push(i*i);
    }
    return resultArray
}
module.exports = toggleDoors;