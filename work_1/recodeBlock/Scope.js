//アロー関数の適用範囲について

//最下層のスコープ
const outerObject = {
    value: "outer",
    method: function() {
        console.log(this.value); // "outer" を出力
        //２層目のスコープ
        const innerObject = {
            value: "inner",
            innerMethod: function() {
                console.log(this.value); // "inner" を出力
                //ここでアロー関数を実行し、thisを実行すると、
                //スコープの範囲である２層目が適応される。
                //最下層は、２層目で上書きされてるから反映されない
                const nestedArrowFunction = () => {
                    console.log(this.value); // "inner" を出力
                };
                nestedArrowFunction();
            }
        };
        innerObject.innerMethod();
    }
};

outerObject.method();
