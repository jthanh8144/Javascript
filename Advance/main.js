/*(function (message) {
    console.log('Message: ', message);
})("abc");*/

/*let i = 0;
(function myFunc() {
    console.log(i++);
    if (i < 10)
        myFunc();
})();*/

/*const app = (function () {
    const cars = [];
    return {
        add(car) {
            cars.push(car);
        },
        edit(index, car) {
            cars[index] = car;
        },
        delete(index) {
            cars.splice(index, 1);
        }
    }
})();*/

{
    let a = 0;
    const b = 1;
    console.log(a, b);
}
console.log(a, b);