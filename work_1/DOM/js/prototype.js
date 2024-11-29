//プロトタイプ
//最上位が、Object.prototype
//その下に、あらかじめあるオブジェクトやString、変数にもプロトタイプがある。
//プロトタイプはツリー状態になる
//作成されたら自動的に、__prototype__ が表示される。
//String.__prototype__　と　Object.prototypeは同じ
//変数 → 型 → Object のようにチェーンしている、これがプロトタイプチェーン

//最上位のプロトタイプ
Object.prototype.abc = 100;

//Stringのプロトタイプ(その上に、Object.prototype)
String.prototype.abc = 500;

//オブジェクト宣言
var Test = function(name) {
    this.name = name;
}

//オブジェクト宣言
var User = function(name, age) {
    this.name = name;
    this.age = age;
}


//インスタンス生成
Object.prototype.getName = function() {
    return this.name;
}

//インスタンス生成
var test = new Test('縫い');
var taro = new User('太郎',30);
var a = "aa";

console.log(test.abc);
console.log(taro.abc);
//こいつはStringだから、String.prototype.abcで設定した値が入る
console.log(a.abc);