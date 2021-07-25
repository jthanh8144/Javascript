var a = 1;
var b = 4;
var n = 2345;

function run() {
    do {
        if (n % a == 0) {
            if (n == a || n == b + 1) {
                console.log(true);
                return;
            } 
            else n /= a;
        } else {
            n -= b;
        }
    } while (n != 1 && n > 0);
    if (n == 1) console.log(true);
    else console.log(false);
}

run();