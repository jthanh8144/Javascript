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

function createStorage(key) {
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
profileSetting.set('address', 'QN');