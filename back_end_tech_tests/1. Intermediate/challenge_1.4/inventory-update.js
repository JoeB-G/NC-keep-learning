function updateInventory(items1, items2) {
    for (let i = 0; i < items1.length; i++) {
        for (let j = 0; j < items2.length; j++) {
            if (items1[i][1] == items2[j][1]) {
                items1[i][0] += items2[j][0]
                items2.splice(j, 1)
            }
        }
    }
    
    const newInventory =  [...items1, ...items2]

    function Comparator(a, b) {
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        return 0;
      }

    return newInventory.sort(Comparator)
}

module.exports = updateInventory;