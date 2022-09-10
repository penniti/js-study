// /* const letの変数宣言 */
// var val1="var変数";
// //var変数は上書き可能
// val1="var変数を上書きしました";
// //var変数は再宣言可能
// var val1="再宣言しました";
// console.log(val1);
// let val2="let変数";
// val2="let上書きしました";
// console.log(val2);
// let val2="再宣言しました";
// const val3="const変数";
// console.lot(val3);
// val3="上書きしました";
// const val3="再宣言しました":
/* constで定義したオブジェクトはプロパティで変更可能 */
// const val4={
//     name:"けん",
//     age:"31"
// };
// console.log(val4);
// val4.name="ken";
// console.log(val4);
/* constで定義した配列はプロパティで変更可能 */
// const val5=['dog','cat'];
// val5[0]="bird";
// val5.push("monkey");
// console.log(val5);
/*------------------------------------
テンプレート文字列
-------------------------------------*/
// const name ="けん";
// const age=31;
// //「私の文字列はけんです。年齢は31歳です。」
// const message1="私の名前は"+name+"です。年齢は"+age+"です。";
// console.log(message1);
// // テンプレート文字列
// const message2=`私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/*------------------------------------
アロー関数
-------------------------------------*/

// const func1=function(str){
//     return str;
// }
// console.log(func1("func1です"));
// // アロー関数
// const func2=(str)=>{
//     return str;
// }
// console.log(func2("func2です"));

// const func3=(num1,num2)=>{
//     return(num1+num2);
// }
// console.log(func3(19,20));
/*------------------------------------
分割代入
-------------------------------------*/
// const myProfile = {
//     name: "健",
//     age: 31,
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);
/*------------------------------------
デフォルト値
-------------------------------------*/
// const stayHello=(name="ゲスト")=>console.log(`こんにちは${name}さん!`);
// stayHello();
/*------------------------------------
スプレッド構文
-------------------------------------*/
//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);
//まとめる
// const arr2=[1,2,3,4,5];
// const [num1,num2,...arr3]=arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);
// 配列のコピー,結合
// const arr4=[10,20];
// const arr5=[30,40];
// const arr6=[...arr4];
// arr6[0]=100;
// console.log(arr6);
// const arr7=[...arr4,...arr5];
// console.log(arr7);
// const arr8=arr4;
// console.log(arr8);
// arr8[0]=100;
// console.log(arr4);
/*------------------------------------
mapやfillterを使った配列の処理
-------------------------------------*/
// const nameArr=["田中","山田","じぇけぇ"];
// for(let i=0;i<nameArr.length;i++){
//     console.log(`${i+1}番目は${nameArr[i]}です`);
// }
// const nameArr2=nameArr.map((name)=>{
//     return name;
// })
// console.log(nameArr2);
// nameArr.map((name,i)=>console.log(`${i+1}番目は${name}です`));
// const numArr=[1,2,3,4,5];
// const newNumArr=numArr.filter((num)=>{
//     return num %2===1;
// });
// console.log(newNumArr);
// const newNameArr=nameArr.map((name)=>{
//     if(name==="じぇけぇ"){
//         return name;
//     }else{
//         return`${name}さん`
//     }
// });
// console.log(newNameArr);
/*------------------------------------
三項演算子
-------------------------------------*/
//ある条件?条件がtrueの時　:条件がfalseのとき
// const val1=1<0?'trueです':'falseです';
// console.log(val1);
// const num="1300";
// console.log(num.toLocaleString());
// const formattedNum=typeof num==='number'?num.toLocaleString():'数値を入力してください';
// console.log(formattedNum);
// const checkSum=(num1,num2)=>{
//     return num1+num2>100?"100を超えています":"許容範囲です";
// }
// console.log(checkSum(50,40));
/*------------------------------------
論理演算子の本当の意味を知ろう
-------------------------------------*/
// const flag1=true;
// const flag2=true;
// if(flag1||flag2){
//     console.log("1か２はtrueになります");
// }
// if(flag1&&flag2){
//     console.log("1も2はtrueになります");
    
// }
// //||は左側がfalseなら右側を返す
// const num=null;
// const fee=num||"金額未設定です";
// console.log(fee);
// //&&は左側がtrueなら右側を返す
// const num2=null;
// const fee2=num2&&"何か設定されました";
// console.log(fee2);