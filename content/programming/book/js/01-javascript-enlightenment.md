# 開眼!JavaScriptを読む

原著は2013年(10年前!)で、和訳も2013年だった。

ES2015の前なので、モダンJavaScriptに沿った内容ではないと思うが、コア部分は変わらない部分もあるはずなので、調べながら読む。

## はじめに

この本は、JavaScriptの世界観を把握するために読むものである。JSライブラリユーザーからJS開発者への変身を起こす媒介である。

## 第一章 JavaScriptオブジェクト

### 1.1 オブジェクトの生成

「JavaScriptの世界では、オブジェクトが王様です。この世界では、ほぼすべてがオブジェクトそのものか、もしくはオブジェクトのようにふるまいます。オブジェクトを理解すると、きっとJavaScriptを理解できることでしょう。」(p1)

オブジェクトは、名前と値がセットになったプロパティを格納するコンテナに過ぎない。言い換えると、オブジェクトは名前と値を持つベクトルの集合と言える?

値は静的でもあるし、動的(関数)でもある。JSの文脈では、このオブジェクト上で動作する関数のことをメソッドという。

```js
const codyA = new object();
cody.living = true;
cody.age = 33;
cody.gender = 'male';
cody.getGender = function() {
  return cody.gender;
};
```

コンストラクタ関数とは、あらかじめ決められたオブジェクトを生成する関数である。テンプレートやクッキーのぬき型だと覚えれば良い。

オブジェクトが`object()`コンストラクタ関数によって生成されるという一連の動作は、文字列オブジェクトが`String（）`コンストラクタによって生成されるという一連の動作とあまり変わらない。JSでは、値をオブジェクトで表現する。（実際のところはプリミティブ型をオブジェクト型として扱うことはあまりない。）

`object()`コンストラクタ関数を用いてオブジェクトを生成する場合と、自作のコンストラクタ関数を用いてオブジェクトを生成する場合との違いは、オブジェクト自体にあるのではなく、コンストラクタ関数に違いがある。（むしろ、オブジェクト自体には違いがない？）

```js
const Person = function(living, age, gender) {
  this.living = living;
  this.age = age;
  this.gender = gender;
  this.getGender = function() { return this.gender; };
};

const codyB = new Person(true, 33, 'male');
```

JSは少数の組み込みオブジェクトコンストラクタ関数が存在する言語にすぎない。この組み込みコンストラクタが、ユーザ定義のオブジェクトコンストラクタを構築する材料になる。このため、JSではオブジェクトが生成されるのである。

### 1.2 コンストラクタ関数はオブジェクトインスタンスを構築して返す

コンストラクタ関数の役目は、共通のプロパティ・メソッドを持ったオブジェクト（インスタンス）を何度も生成することである。

コンストラクタ関数はnew演算子と一緒に使用されると、以下のような特別な動きをする。

- コンストラクタ関数の中のthisがインスタンスを指す。
- return文のない関数は実行されるとfalseに相当する値を返すが、コンストラクタ関数はインスタンスが返り値になる。

```js
const Person = function Person(living, age, gender) {
  // thisはインスタンスである。（this = new Object())
  this.living = living;
  this.age = age;
  this.gender = gender;
  this.getGender = function() {
    return this.gender;
  }
  // return文がないが、コンストラクタ関数はthisを返す。
}

const cody = new Person(true, 33, 'male');
console.log(typeof cody); // object
console.log(cody); // codyのキーと値を出力
console.log(cody.constructor); // Person関数そのもの
```

### 1.3 ネイティブ/ビルトインオブジェクトのコンストラクタ

JSには9つのネイティブオブジェクトコンストラクタがある。値を表すだけでなく、JSの機能もこのコンストラクタに格納されている。

- `Number()`
- `String()`
- `Boolean()`
- `Object()`
- `Array()`
- `Function()`
- `Date()`
- `RegExp()`
- `Error()`

Mathオブジェクトは数字関数や定数を格納するための名前空間(静的なオブジェクト)であるため、コンストラクタとしては使用されない。

`Number()`や`String()`、`Boolean()`は、コンストラクタ関数として使用するとオブジェクトを返す。数字や文字列、真偽値をリテラルで記述する場合も裏でこれらのコンストラクタ関数は実行されるが、その場合はオブジェクトではなくプリミティブ値を返す。

```js
const str1 = String('sample'); // new演算子なしのコンストラクタ
const str2 = new String('sample'); // new演算子を伴うコンストラクタ
const str3 = 'sample' // リテラル

console.log(typeof str1, typeof str2, typeof str3); // string object string
console.log(str1, str2, str3); // sample String{'sample'} sample
```

`Number()`や`String()`、`Boolean()`をコンストラクタ関数としてそのまま使う機会はほぼない上に、使うべきではない。
