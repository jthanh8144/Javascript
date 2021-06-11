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
var headingElement = document.querySelector('h1');
console.log(headingElement);
headingElement.title = 'heading'; //id, class name, href
headingElement.setAttribute('class', 'heading');
console.log(headingElement.getAttribute('class'));

/*--------------- Ngày 11/6/2021 DOM attribute----------------*/