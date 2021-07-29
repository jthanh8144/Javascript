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

/* Scope */
/*{
    let a = 0;
    const b = 1;
    console.log(a, b);
}
console.log(a, b);*/

/* Closure */
/*function createCounter() {
    let counter = 0;
    function increase() {
        return ++counter;
    }
    return increase;
}
const count = createCounter();
console.log(count());
console.log(count());
console.log(count());*/

/*function createLogger(namespace) {
    function logger(message) {
        console.log(`[${namespace}] ${message}`);
    }
    return logger;
}
const infoLogger = createLogger('Info');
infoLogger('Bắt đầu gửi mail');
infoLogger('Gửi thành công');
const errorLogger = createLogger('Error');
errorLogger('Lỗi');*/

/*function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {};
    const save = () => {
        localStorage.setItem(key, JSON.stringify(store));
    }
    const storage = {
        get(key) {
            return store[key];
        },
        set(key, value) {
            store[key] = value;
            save();
        }, 
        remove(key) {
            delete store[key];
            save();
        }
    }
    return storage;
}
const profileSetting = createStorage('profile_setting');
console.log(profileSetting.get('fullName'));
profileSetting.set('fullName', 'Thanh Vo');
profileSetting.set('age', 19);
profileSetting.set('address', 'QN');*/

/* hoisting */
/*console.log(age);
console.log(fullName);
var age = 16;*/

/*{
    console.log(fullName);
    let fullName = 'Vo Van Thanh';
}*/

/*const count = makeCounter();
console.log(count());
function makeCounter() {
    let counter = 0;
    return increase;
    function increase() {
        return ++counter;
    }
}*/

/* strict mode */
/*'use strict';
fullName = 'Vo Van Thanh';
function test() {
    age = 19;
}
console.log(fullName);
console.log(age);*/

/*'use strict';
const student = Object.freeze({
    fullName: 'Vo Van Thanh'
});
student.fullName = 'Thanh Van Vo';
console.log(student);*/
/*'use strict';
const student = {};
Object.defineProperty(student, 'fullName', {
    value: 'Vo Van Thanh',
    writable: true
});
student.fullName = 'Thanh Van Vo';
console.log(student);*/

/*'use strict';
function sum(a, a) {
    return a + a;
}
console.log(sum(6, 9));*/

/*'use strict';
{
    function sum(a, b) {
        return a + b;
    }
}
console.log(sum(1, 2));*/

'use strict';
const private = 123;
console.log(private);