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

/*'use strict';
const private = 123;
console.log(private);*/

/* this keyword */
/*const pixel1 = {
    name: 'Google pixel',
    color: 'Really blue',
    weight: 300,

    takePhoto() {
        console.log(this);
    },

    objChild: {
        name: 'Child Object',
        methodChild() {
            console.log(this);
        }
    }
};
pixel1.objChild.methodChild();*/

/*function Car(name, color, weight) {
    this.name = name;
    this.color = color;
    this.weight = weight;
    this.run = function() {
        console.log('running...', this);
    }
}

const mercedesBenZ = new Car('Mercedes Ben Z', 'Black', 5000);
console.log(mercedesBenZ.run());*/

/*const button = document.querySelector('button');
button.onclick = function() {
    console.dir(this.innerText);
}*/

/*function myFunc() {
    console.log(this);
}
myFunc();*/
/*'use strict';
function myFunc() {
    console.log(this);
}
myFunc();*/

/*
// 'use strict';
function Car(name, color) {
    this.name = name;
    this.color = color;
    // this.run = function() {
    //     console.log(this);
    // }
}
Car.prototype.run = function() {
    // console.log(this);

    // function test() {
    //     console.log(this);
    // }

    const test = () => {
        console.log(this);
    }
    test();
}
const mercedesBenZ = new Car('Mercedes Ben Z', 'Black');
const hondaCRV = new Car('Honda CRV', 'White');
console.log(mercedesBenZ.run());
console.log(hondaCRV.run());*/

/* bind */
/*this.firstName = 'Minh';
this.lastName = 'Thu';
const teacher = {
    firstName: 'Minh',
    lastName: 'Thảo',
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const student = {
    firstName: 'Vo',
    lastName: 'Thanh'
}
console.log(teacher.getFullName());
// const getTeacherName = teacher.getFullName;
// const getTeacherName = teacher.getFullName.bind(teacher);
const getTeacherName = teacher.getFullName.bind(student);
console.log(getTeacherName()); */

/*this.firstName = 'Minh';
this.lastName = 'Thu';
const teacher = {
    firstName: 'Minh',
    lastName: 'Thảo',
    getFullName(data1, data2) {
        console.log(data1, ' ', data2);
        return `${this.firstName} ${this.lastName}`;
    }
}
const getTeacherName = teacher.getFullName.bind(teacher, 'test 3', 'test 4');
console.log(getTeacherName('test 1', 'test 2'));*/

/*const teacher = {
    firstName: 'Minh',
    lastName: 'Thảo',
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
const button = document.querySelector('button');
// button.onclick = function() {
//     teacher.getFullName()
// }
button.onclick = teacher.getFullName.bind(teacher);*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// console.log($('#heading').innerText);
const app = (() => {
    const cars = ['BMW'];
    const root = $('#root');
    const input = $('#input');
    const submit = $('#submit');
    return {
        add(car) {
            cars.push(car);
        },
        delete(index) {
            cars.splice(index, 1);
        },
        render() {
            const html = cars.map((car, index) => `
                <li>
                    ${car}
                    <span class="delete" data-index="${index}">&times</span>
                </li>
            `).join('');
            root.innerHTML = html;
        },
        handleDelete(e) {
            const deleteBtn = e.target.closest('.delete');
            if (deleteBtn) {
                const index = deleteBtn.dataset.index;
                this.delete(index);
                this.render();
            }
        },
        init() {
            submit.onclick = () => {
                const car = input.value;
                this.add(car);
                this.render();
                input.value = '';
                input.focus();
            }

            root.onclick = this.handleDelete.bind(this);

            this.render();
        }
    }
})();
app.init();