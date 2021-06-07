// alert('Hello cc');
/*var result = confirm('M chắc chưa?');
if (result == true)
{
    alert('Chắc');
}
else
{
    alert('Đé o');
}*/
/*var input = prompt('Nhập tên mày vào đây', 'CC');
alert(input);*/
/*var str1 = new String('String object');
var str2 = new String('String object');
console.log(str1 == str2);
var str3 = 'String object';
console.log(str1 == str3);
console.log(str1 === str3);*/
/*var hex = new Number(0xff);
console.log(hex);
console.log(hex.valueOf());
var str = '123';
console.log(isNaN(str));// Có phải là số không
*/
/*function Person()
{
    this.name = "Thanh";
    this.gender = true;    
}
Person.prototype.age = 15;
var o1 = new Person();
console.log(o1.age);*/
/*function Person(firstName, lastName) {
    this.FirstName = firstName || "unknown";
    this.LastName = lastName || "unknown";
}
Person.prototype.getFullName = function() {
    return this.FirstName + " " + this.LastName;
}

function Student(firstName, lastName, schoolName, grade){
    Person.call(this, firstName, lastName);
    this.SchoolName = schoolName || "unknown";
    this.Grade = grade || 0;
}

Student.prototype = new Person();
Student.prototype.constructor = Student;

var s = new Student("Vo", "Thanh", "DUT", 14);
console.log(s.getFullName());
console.log(s instanceof Student);
console.log(s instanceof Person);*/
/*var Name = "Thanh";
(function IIFE(name){
    alert(name);
})(Name);*/
var counter = (function(){
    var pCounter = 0;
    function ChangeBy(Val){
        pCounter += Val;
    }
    return {
        inc : function() {
            ChangeBy(1);
        },
        dec : function() {
            ChangeBy(-1);
        },
        value : function() {
            return pCounter;
        }
    };
}) ();
console.log(counter.value());
counter.inc();
counter.inc();
console.log(counter.value());
counter.dec();
console.log(counter.value());