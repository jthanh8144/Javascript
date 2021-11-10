const cars = [];
const num = [1, 2, 3, 7, 3, 9];
function a(num, str) {
	this.str = str;
	this.num = num;
}

var b = new a(num, "BMW");
cars[0] = [b];
var c = new a();
c = cars[0];
console.log(c[0].str);