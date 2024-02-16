// Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
    let map = new Map()
    for (let i of arr) {
        map.set(i, (map.get(i) || 0) + 1)
    }

    let ky = []
    for (let i of map) {
        ky.push(i)
    }
    ky = ky.sort((a, b) => a[1] - b[1])
    let sortedKeys = ky.map(k => k[0])
    // for(let i=0;i<k;i++){
    //     for(let j of sortedKeys){
    //         if(map.get(j)!=0){
    //             map.set(j,map.get(j)-1)
    //             break;
    //         }
    //     }
    // }
    for (let i = 0; (k > 0 && i < sortedKeys.length);) {
        if (map.get(sortedKeys[i]) != 0) {
            map.set(sortedKeys[i], map.get(sortedKeys[i]) - 1)
            k--
        }
        else {
            i++
        }
    }
    let res = 0
    for (let i of map) {
        if (i[1] != 0) {
            res++
        }
    }
    return res
};
console.log(findLeastNumOfUniqueInts([1,1,2,3,2,1,5],3))