function areIdentical(obj1, obj2) {
    obj1Keys = Object.keys(obj1);
    obj2Keys = Object.keys(obj2);
    obj1Values = Object.values(obj1);
    obj2Values = Object.values(obj2);
   


    if (obj1Keys.length !== obj2Keys.length){
        return false
    }
    for (let i = 0; i < obj1Keys.length; i++) {
        if (typeof obj1Values[i] === "object" && typeof obj2Values[i] === "object"){
            if (!areIdentical(obj1Values[i], obj2Values[i])) {
                return false
            }
        }
        if (obj1Keys[i] !== obj2Keys[i]){
            return false
        }
        if (obj1Values[i] !== obj2Values[i]){
            return false
        }
    }
    return true
}

module.exports = areIdentical;