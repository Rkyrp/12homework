//1задание 
function summarize(num) {
    return function(arg = 1) {
        return num + arg;
    };
}
const addFive = summarize(5);
console.log(addFive(3));
//2задание
function counter(startValue, step) {
    let currentValue = startValue;
    function counterFunction() {
        currentValue += step;
        return currentValue;
    }
    counterFunction.increment = function() {
        currentValue += step;
        return currentValue;
    };
    counterFunction.decrement = function() {
        currentValue -= step;
        return currentValue;
    };
    counterFunction.reset = function() {
        currentValue = startValue;
        return currentValue;
    };
    return counterFunction;
}
const myCounter = counter(10, 2);
console.log(myCounter());     
console.log(myCounter()); 
console.log(myCounter.increment());
console.log(myCounter.decrement());
console.log(myCounter.reset());


