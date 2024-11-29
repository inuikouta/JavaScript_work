const pePro = {
    greea() {
        console.log("hello");
    },
};



//オブジェクトリテラルのプロトタイプの確認
console.log("peProのプロトタイプ確認")
console.log(pePro.__proto__ === Object.prototype);
var a = pePro.__proto__;
console.log(a.__proto__);


//オブジェクトを作成する。こうすることで、
console.log("\ncarlのプロトタイプ確認");
const carl = Object.create(pePro);
console.log(carl.__proto__ === pePro);
console.log(pePro.greea.__proto__.__proto__.__proto__);
a = carl.__proto__;
console.log(a);
console.log(a.__proto__ === Object.prototype);