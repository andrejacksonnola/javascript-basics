var assert = chai.assert;
var expect = chai.expect;
var FILL_ME_IN = 'Fill me in!';

var arraysEqual = function (arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    for (var i = arr1.length; i--;) {
        if (arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

var objectsEqual = function(actual, expected){
    actual = actual.toString();
    expected = expected.toString();
    if(actual === expected){
        return true;
    }
    return false;
}

describe('javascript-basics', function () {
    describe('add', function(){
        it('should return number', function(){
            let result = add([1,2,3,4,5]);
            assert.typeOf(result, 'number');
        });
    
        it('should sum all numbers in array', function(){
            let result = add([1,2,3,4,5]);
            assert.equal(result, 15);
        });
});

    describe('multiplyLargestAndSmallest', function(){
        it('should multiply smallest and largest number of array', function(){
            let result = multiplyLargestAndSmallest([10,9,8,29,1,0,5,1]);
            assert.equal(result, 0);
        });
    });

    describe('replaceWithTuples', function(){
        it('should replace all even numbers with an empty array', function(){
        let fn = replaceWithTuples([1,1,3,6,10,20,13,14,2,0]);
        let expected = [1, 1, 3, [], [], [], 13, [], [], 0];
        let flag = true;
        let result = function(res, exp){
            res.forEach(function(v,i,a){
                if(v !== exp[i]){ 
                    if(!Array.isArray(v)){ //FILL ME IN
                        flag = false;
                    }
                }
            })
            return flag;
        }
        assert.equal(result(fn, expected), true);
    });

    });

    describe('addNumbersToEmptyTuples', function(){
        it('should add numbers in empty tuples, and replace with number', function(){
            var arr = [1,[3,5], 6, [0,1], 2, [5,9]];
            var result = addNumbersToEmptyTuples(arr);
            var expected = [1, 8, 6, 1, 2, 14];
            assert.equal(arraysEqual(result, expected), true);
        });
    });


    describe('replaceOddIndex', function(){
        it('should return an array', function(){
            assert.equal(Array.isArray(replaceOddIndex([1,2,3,4,5])), true);
        });
        it('should return the correct array', function(){
            var result = replaceOddIndex([1,2,3,4,5], 5);
            var expected = [5,5,3,5,7];
            assert.equal(arraysEqual(result, expected), true);
        });
    });


//objects

    describe('getKeys', function(){
        it('should get keys from object', function(){
            let result = getKeys({a:'yo', b:'bro', c:'laugh'});
            let expected = ['a', 'b', 'c'];

            assert.equal(arraysEqual(result, expected), true);
        })
    });

    describe('getValues', function(){
        it('should get values at keys', function(){
            let result = getValues({ a: 'yo', b: 'bro', c: 'laugh' });
            let expected = ['yo', 'bro', 'laugh'];

            assert.equal(arraysEqual(result, expected), true);
        });
    });

    describe('addValuesAtKeys', function(){
        it('should add values at keys', function(){
            let result = addValuesAtKeys({a:[1,2,3], b:[4,5,6], c:[7,8,9]});
            let expected = {a: 6, b: 15, c: 24};
            assert.equal(result.a, 6);
            assert.equal(result.b, 15);
            assert.equal(result.c, 24);
        });
    });

    describe('addValuesThenChooseLargest', function(){
        it('should add values then choose largest', function(){
            //MAKE THIS WORK USING addValuesAtKeys
            let complete = addValuesThenChooseLargest({ a: [1, 2, 3], b: [4, 5, 6], c: [7, 8, 9] });
            let expect = {c: 24};
            assert.equal(complete.c, expect.c);
        });
    });

    describe('createNameObj', function(){
        it('should return an object', function(){
            let name = 'James Brown';
            let fn = createNameObj(name);
            assert.typeOf(fn, 'object');
        });

        it('should have correct firstname property', function(){
            let name = 'Lebron James';
            let fn = createNameObj(name);
            assert.equal(fn.firstName, 'Lebron');
        });

        it('should have the correct lastname property', function(){
            let name = 'Dwayne Wade';
            let fn = createNameObj(name);
            assert.equal(fn.lastName, 'Wade');
        });

        it('should work with names of different lengths', function(){
            let name = 'Steph Curry';
            let name1 = 'Kevin Durant';
            let name2 = 'Draymond Green';
            let name3 = 'Michael Jordan';
            let fn = createNameObj(name);
            let fn1 = createNameObj(name1);
            let fn2 = createNameObj(name2);
            let fn3 = createNameObj(name3);
            assert.equal(objectsEqual(fn, {firstName: 'Steph', lastName: 'Curry'}), true);
            assert.equal(objectsEqual(fn1, { firstName: 'Kevin', lastName: 'Durant' }), true);
            assert.equal(objectsEqual(fn2, { firstName: 'Draymond', lastName: 'Green' }), true);
            assert.equal(objectsEqual(fn3, { firstName: 'Michael', lastName: 'Jordan' }), true);
        });
    });

    describe('findClosestNumber', function(){
        it('should return a number', function(){
            let result = findClosestNumber([1,2,3,4,5], 5);
            assert.typeOf(result, 'number');
        });

        it('should work on a wide range of numbers, and return the correct number', function(){
            let result = findClosestNumber([10,9,8,7], 15);
            let result1 = findClosestNumber([20,50,100], 70);
            assert.equal(result, 10);
            assert.equal(result1, 100);
        });
    });

    describe('pushScores', function(){
        let obj = {a:1, b:2, c:3, d:4, e:'foo'};
        let obj1 = { a: 2, b: 2, c: 3, d: 8, e: 'foo' };
        let obj2 = { a: 10, b: 2, c: 3, d: 8, e: 'foo' };
        it('should return a number', function(){
            let result = pushScores(obj);
            let expected = 10;
            assert.equal(result, expected);
        });

        it('should return the correct number', function(){
            let result = pushScores(obj);
            let result1 = pushScores(obj1);
            let result2 = pushScores(obj2);
            let expected = 10;
            let expected1 = 15;
            let expected2 = 23;
            assert.equal(result, expected);
            assert.equal(result1, expected1);
            assert.equal(result2, expected2);
        });
    });

});
