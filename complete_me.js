

var add = function (array) {
    return array.reduce(function (total, curr) {
        return total + curr;
    }, 0);
}

var multiplyLargestAndSmallest = function (array) {
    var sorted = array.sort(function (a, b) {
        return a - b;
    });

    return sorted[0] * sorted[sorted.length - 1];
}

var replaceWithTuples = function (array) {
    let arr = [];
    array.forEach(function (v, i, a) {
        if (v % 2 === 0 && v !== 0) {
            arr.push([]);
        } else {
            arr.push(v);
        }
    })
    return arr;
}

var addNumbersToEmptyTuples = function (array) {
    array.forEach(function (v, i, a) {
        if (Array.isArray(v)) {
            let result = v.reduce(function (total, curr) {
                return total + curr;
            }, 0);
            a[i] = result;
        }
    });

    return array;
}

var replaceOddIndex = function (array, target) {
    array.forEach(function (v, i, a) {
        if (i % 2 > 0 && v !== target || i === 0) {
            a[i] = target;
        } else if (v === target) {
            a[i] = v + 2;
        }
    });
    return array;
}

var getKeys = function (collection) {
    let arr = [];
    for (var key in collection) {
        arr.push(key);
    }

    return arr;
}

var getValues = function (collection) {
    let arr = [];
    for (var key in collection) {
        arr.push(collection[key]);
    }

    return arr;
}

var addValuesAtKeys = function (obj) {
    let newObj = {};
    for (var key in obj) {
        if (Array.isArray(obj[key])) {
            newObj[key] = obj[key].reduce(function (total, curr) {
                return total + curr;
            }, 0);
        }
    }

    return newObj;
}

var addValuesThenChooseLargest = function (obj) {
    let newObj = {};
    let newArr = [];
    let result = addValuesAtKeys(obj);
    let compare;

    for (var key in result) {
        if (!compare) {
            compare = result[key];
        } else {
            if (compare < result[key]) {
                compare = result[key];
                newArr.push([key, result[key]]);
            }
        }
    }

    let end = newArr[newArr.length - 1];
    let lastObj = {};
    lastObj[end[0]] = end[1];
    return lastObj;
}

var createNameObj = function (string) {
    /*
        Input: string
        Output: object

        todo: create a 'createNameObj' function that takes a name string and assigns properties 
            firstName and lastName in a new object. The values at firstName an lastName will be the respective first and last name of the string. 
    */
    let obj = {};
    let split = string.split(" ");
    obj.firstName = split[0];
    obj.lastName = split[1];
    return obj;

}

var findClosestNumber = function (collection, target) {
    let compare;
    collection.forEach(function (v, i, a) {
        if (!compare) {
            let subtract = target - v;
            if (subtract > 0) {
                compare = [subtract, v];
            }
        } else {
            let subtract1 = target - v;
            if (compare[0] > subtract1 && subtract1 !== 0) {
                compare = [subtract1, v];
            }
        }
    });
    return compare[1];
}

var pushScores = function (obj) {
    let scoreArray = [];
    for (var key in obj) {
        if (typeof obj[key] === 'number') {
            scoreArray.push(obj[key]);
        }
    }

    return scoreArray.reduce(function (total, curr) {
        return total + curr;
    }, 0);
}