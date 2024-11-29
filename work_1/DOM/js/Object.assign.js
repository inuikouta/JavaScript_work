//第１引数に指定したオブジェクトに、
//第２引数以降に指定したオブジェクトのプロパティをマージ（合体）すること
const animals1 = { dog: 'いぬ', cat: 'ねこ'}
const animals2 = { tiger: 'とら', rabbit: 'うさぎ'}

//ここでマージ（合体）する。
const mergeAnimals = Object.assign(animals1, animals2);

console.log(mergeAnimals);



//ここからは、プロトタイプのマージ
//オブジェクトリテラル
const personPrototype = {
    greet() {
        console.log(`hello, my name is ${this.name}!`);
    },
};

//関数宣言型オブジェクト
function Person(name) {
    this.name = name;
}

//ここで、マージする。
Object.assign(Person.prototype, personPrototype);

//関数宣言型オブジェクトと合体してるので、Personコンストラクタ関数で値を初期化している。
var test = new Person("ヌイヌイ");
test.greet();