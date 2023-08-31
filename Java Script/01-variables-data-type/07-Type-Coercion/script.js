let s, t, u, v, w, x;

s = 5 + '5'; // return 55 (concat)

t = 5 + Number('5'); // return 5

u = 5 + true; //return 6 (true = 1)

v = 5 + false; // return 5 (false = 0)

w = 5 + null; // return 5 (null = 0)

x = 5 + undefined; // return NaN 

console.log(s);
console.log(t);
console.log(u);
console.log(v);
console.log(w);
console.log(x);