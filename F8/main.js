/*--------------- Ngày 7/6/2021 Get element method----------------*/

/*var headingNode = document.getElementById('heading');
// console.log(headingNode);
console.log({
    element: headingNode
});*/

/*var headingNodes = document.getElementsByClassName('heading');
console.log(headingNodes);*/

/*var headingNodes = document.getElementsByTagName('h1');
console.log(headingNodes);
var headingNodes1 = document.getElementsByTagName('p');
console.log(headingNodes1);*/

/*var headingNode = document.querySelector('.heading-2:first-child');
console.log(headingNode);
var headingNode2 = document.querySelector('.heading-2:nth-child(2)');
console.log(headingNode2);
var headingNodes = document.querySelectorAll('.heading-2');
console.log(headingNodes);
console.log(headingNodes[2]);*/

/*console.log(document.forms);
console.log(document.forms['form-1']);
console.log(document.forms.testForm);
console.log(document.anchors);*/

/*var listItemNodes = document.querySelectorAll('.box-1 li');
console.log(listItemNodes);*/
/*var boxNode = document.querySelector('.box-1');
console.log(boxNode);
console.log(boxNode.getElementsByTagName('li'));
console.log(boxNode.querySelector('p'));*/

/*--------------- Ngày 11/6/2021 exercice Get element method----------------*/
/*document.write('Hello')*/

/*--------------- Ngày 11/6/2021 DOM attribute----------------*/
/*var headingElement = document.querySelector('h1');
console.log(headingElement);
headingElement.title = 'heading'; //id, class name, href
headingElement.setAttribute('class', 'heading');
console.log(headingElement.getAttribute('class'));*/

/*--------------- Ngày 12/6/2021 inner text----------------*/
/*var headingElement = document.querySelector('.heading');
console.log(headingElement.innerText);
console.log(headingElement.textContent);
headingElement.innerText = 'New heading'; //textContent tương tự
//innerText trả về những thứ nhìn thấy, còn textContent trả về toàn bộ DOM

headingElement.innerText = `
    New Heading
    `;
headingElement.textContent = `
    New heading
    `;*/
/*--------------- Ngày 12/6/2021 inner HTML----------------*/
/*var boxElement = document.querySelector('.box');
console.log(boxElement);
boxElement.innerHTML = '<h1>Hello</h1>';
console.log(boxElement.innerHTML);
boxElement.outerHTML = '<h2>Lo cc</h2>';*/

/*--------------- Ngày 15/6/2021 DOM CSS, ClassList, DOM Event ----------------*/
// var boxElement = document.querySelector('.box');
// Dùng để css inline
/*boxElement.style.width = '100px';
boxElement.style.height = '200px';
boxElement.style.backgroundColor = 'red';*/
/*Object.assign(boxElement.style, {
    width: '200px',
    height: '100px',
    backgroundColor: 'green'
});*/

/*console.log(boxElement.classList);
boxElement.classList.add('red', 'blue');
console.log(boxElement.classList.contains('red'));
// boxElement.classList.remove('red');
setTimeout(() => {
    boxElement.classList.remove('red');
}, 3000);
setInterval(() => {
    boxElement.classList.toggle('red');
}, 1000);*/

/*var h1Element = document.querySelector('.DOM-event');
h1Element.onclick = function() {
    console.log(Math.random());
}*/
/*var h1Element = document.querySelectorAll('.DOM-event');
for (var i = 0; i < h1Element.length; i++) {
    h1Element[i].onclick = function(e) {
        console.log(e.target);
    }
}*/

/*var inputElement = document.querySelector('input[type=text]');
// inputElement.onchange = function(e) {
//     console.log(e.target.value);
// }
inputElement.oninput = function(e) {
    console.log(e.target.value);
}*/
/*var inputElement = document.querySelector('input[type=checkbox]');
inputElement.onchange = function(e) {
    console.log(e.target.checked);
}*/
/*var inputElement = document.querySelector('select');
inputElement.onchange = function(e) {
    console.log(e.target.value);
}*/
/*var inputElement = document.querySelector('input[type=text]');
inputElement.onkeydown = function(e) {
    console.log(e.which);
    switch(e.which){
        case 27:
            console.log('ESC');
    }
}*/
/*document.onkeypress = function(e) {
    console.log(e.which)
    switch(e.which){
        case 27:
            console.log('ESC'); // key press không nhận ESC
            break
        case 13:
            console.log('Enter');
            break;
    }
}*/

/*var aElement = document.querySelectorAll('a');
for (var i = 0; i < aElement.length; i++) {
    aElement[i].onclick = function(e) {
        if (!e.target.href.startsWith('http://fb.com')) {
            e.preventDefault();
        }
    }
}*/
/*var ulElement = document.querySelector('ul');
ulElement.onmousedown = function(e) {
    e.preventDefault();
}
ulElement.onclick = function(e) {
    console.log(e.target);
}*/
/*document.querySelector('div').onclick = function(e) {
    console.log("Div");
}
document.querySelector('button').onclick = function(e) {
    e.stopPropagation();
    console.log('Click here!');
}*/

/*--------------- Ngày 15/6/2021 Event listener ----------------*/
var btn = document.getElementById('btn');
/*setTimeout(function(e) {
    btn.onclick = function(e) {
        console.log('Viec 1');
        console.log('Viec 2');
        alert('Viec 3');
    }
}, 3000);*/
/*btn.addEventListener('click', function(e) {
    console.log('Viec 1');
});
btn.addEventListener('click', function(e) {
    console.log('Viec 2');
});
btn.addEventListener('click', function(e) {
    console.log('Viec 3');
});*/
/*function Viec1() {
    console.log('Viec 1');
}
function Viec2() {
    console.log('Viec 2');
}
btn.addEventListener('click', Viec1);
btn.addEventListener('click', Viec2);
setTimeout(function() {
    btn.removeEventListener('click', Viec1);
}, 3000);*/

/*--------------- Ngày 21/6/2021 Reduce ----------------*/
/*var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce(function(flatOUtput, depthItem) {
    return flatOUtput.concat(depthItem);
}, []);
console.log(flatArray);*/

/*var topic = [
    {
        topic: 'FE',
        courses: [
            {
                id: 1,
                title: 'HTML, css'
            },
            {
                id: 2,
                title: 'Js'
            }
        ]
    },
    {
        topic: 'BE',
        courses: [
            {
                id: 1,
                title: 'PHP',
            },
            {
                id: 2,
                title: 'NodeJs'
            }
        ]
    }
];
var list = topic.reduce(function(courses, topic) {
    return courses.concat(topic.courses);
}, []);
console.log(list);
var htmls = list.map(function(course) {
    return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
        </div>
    `
});
console.log(htmls.join(''));*/

/*--------------- Ngày 21/6/2021 JSON ----------------*/
// var json = '["js","php"]';
/*var json = '{"name":"VVThanh","age":19}';
console.log(JSON.parse(json));
console.log(JSON.stringify(['js', 'php']));*/

/*--------------- Ngày 22/6/2021 Promise ----------------*/
// Dùng để xử lí bất đồng bộ, trước khi có promise thì dùng call back và sẽ xảy ra vấn đề là call back hell
// code bị khó nhìn, khó hiểu. Promise sinh ra ở ES6. Để dùng promise cần khai báo với từ khóa new Promise
// với 1 executor function có 2 tham số dạng hàm là resolve và reject
/*var promise = new Promise(
    // Executor
    function(resolve, reject) {
        resolve([
            {
                id: 1,
                name: 'Js'
            }
        ]);
        // reject('co loi');
    }
);
promise
    .then(function(courses) {
        console.log(courses);
    })
    .catch(function(error){
        console.log(error);
    })
    .finally(function(){
        console.log('Done');
    });*/

// var promise = Promise.resolve(1);
// var promise = Promise.reject('Co loi');
/*var promise1 = new Promise(
    function(resolve, reject) {
        setTimeout(function() {
            resolve([1]);
        }, 2000);
    }
);
var promise2 = new Promise(
    function(resolve, reject) {
        setTimeout(function() {
            resolve([2, 3]);
        }, 5000);
    }
);
Promise.all([promise1, promise2])
    .then(function(result) {
        console.log(result);
    });*/

/*--------------- Ngày 23/6/2021 let, const ----------------*/
let x = 1;
console.log(x);
const a = {
    name: 'js'
};
a.name = 'php';
console.log(a.name);