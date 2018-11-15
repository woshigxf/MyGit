// document.write("Hello world");

// var obj={x:1};
// //console.log(obj.y);
// // var yz = obj.y.z;
// // obj.y.z = 2;

// var yz;
// if(obj.y){
//     yz = obj.y.z
//     console.log(yz);
// }
// var yz = obj.y&&obj.z&&obj;
// console.log(yz);


// var descriptor = Object.getOwnPropertyDescriptor(Object,'prototype');
// console.log(descriptor);

// var man={
//     weibo:'@Bosn',
//     $age:null,
//     get age(){
//         if(this.$age == undefined){
//             return new Date().getFullYear() - 1987;
//         }else{
//             return this.$age;
//         }
//     },
//     set age(val){
//         val = +val;
//         if(!isNaN(val) && val>0 && val<150){
//             this.$age = +val;
//         }else{
//             throw new Error('Incorrect val =' + val);
//         }
//     },
// };
// console.log(man.age);
// man.age = 100;
// console.log(man.age);
// man.age = 'abc';

//get/set与原型链

// function foo(){}
// Object.defineProperty(foo.prototype,'z',{get:function(){return 1;}});
// var obj = new foo();
// console.log(obj.z);
// obj.z = 10;
// console.log(obj.z);

// Object.defineProperty(obj,'z',{value:100,configurable:true});
// console.log(obj.z);
// delete obj.z;
// console.log(obj.z);


// var a = 0x1001; //1*16*16*16 + 1*1
// a = +a; //一元+运算符可以将字符串转成数字类型，一元-运算符是类似的效果，只是会将值变成负值

// b = 1*16*16*16 + 1;
// console.log(a + ' ' + b);

// var oCar = new Object;
// oCar.color = "blue";
// oCar.doors = 4;
// oCar.mpg = 25;
// oCar.showColor = function(){
//     console.log(this.color);
// };

// oCar.showColor();
//这里创建一个car对象，每次都要去实例一个很麻烦

//解决方案就是通用一个工厂函数，封装之前的创建car对象的操作
//也就是工厂模式
// function createCar(){
//     var oTempCar = new Object();
//     oTempCar.color = "blue";
//     oTempCar.doors = 4;
//     oTempCar.mpg = 25;
//     oTempCar.showColor = function(){
//         console.log(this.color);
//     };
//     return oTempCar;
// }
// var oCar1 = createCar();
// var oCar2 = createCar();

// oCar1.showColor();
// oCar2.showColor();

// function createCar(sColor,iDoors,iMpg){
//     var oTempCar = new Object();
//     oTempCar.color = sColor;
//     oTempCar.doors = iDoors;
//     oTempCar.mpg = iMpg;
//     oTempCar.showColor = function(){
//         console.log(this.color);
//     };
//     return oTempCar;
// }
// var oCar1 = createCar("blue",4,25);
// var oCar2 = createCar("red",4,23);

// oCar1.showColor();
// oCar2.showColor();
//在工厂函数定义对象的方法

// function showColor(){
//     console.log(this.color);
// }

// function createCar(sColor,iDoors,iMpg){
//     var oTempCar = new Object();
//     oTempCar.color = sColor;
//     oTempCar.doors = iDoors;
//     oTempCar.mpg = iMpg;
//     oTempCar.showColor = showColor;
//     return oTempCar;
// }
// var oCar1 = createCar("blue",4,25);
// var oCar2 = createCar("red",4,23);

// oCar1.showColor();
// oCar2.showColor();

//构造函数方式创建对象

// function Car(sColor,iDoors,iMpg){
//     this.color = sColor;
//     this.doors = iDoors;
//     this.mpg = iMpg;
//     this.showColor = function(){
//         console.log(this.color);
//     };
// }
// var oCar1 = new Car("red",2,23);
// var oCar2 = new Car("blue",4,25);

// oCar1.showColor();
// oCar2.showColor();


// function Car(){}
// Car.prototype.color = "blue";
// Car.prototype.doors = 4;
// Car.prototype.mpg = 25;
// Car.prototype.drivers = new Array("Mike","John");
// Car.prototype.showColor = function(){
//     console.log(this.color);
// }

// var oCar1 = new Car();
// var oCar2 = new Car();

// oCar1.drivers.push("Bill");

// console.log(oCar1.drivers); //["Mike", "John", "Bill"]
// console.log(oCar2.drivers); //["Mike", "John", "Bill"] ?这里oCar2的drivers也是指向原型上的drivers属性，所以导致得到oCar1修改后的结果 要解决这个问题就要使用混合的构造函数/原型方式

// function Car(sColor,iDoors,iMpg){
//     this.color = sColor;
//     this.doors = iDoors;
//     this.mpg = iMpg;
//     this.drivers = new Array("Mike","John");
// }
// Car.prototype.showColor = function(){
//     console.log(this.color);
// }

// var oCar1 = new Car("red",4,25);
// var oCar2 = new Car("blue",2,25);

// oCar1.drivers.push("Bill");

// oCar1.showColor();
// oCar2.showColor();
// console.log(oCar1.drivers);
// console.log(oCar2.drivers);


// 更完美的方式->动态原型方式

// function Car(sColor,iDoors,iMpg){
//     this.color = sColor;
//     this.door = iDoors;
//     this.mpg = iMpg;
//     this.drivers = new Array("Mike","John");

//     if(typeof Car._initialized == "undefined"){
//         Car.prototype.showColor = function(){
//             console.log(this.color);
//         };

//         Car._initialized = true;
//     }
// }

// var oCar1 = new Car("red",2,25);
// var oCar2 = new Car("blue",4,23);

// oCar1.drivers.push("Bill");

// console.log(oCar1.drivers);
// console.log(oCar2.drivers);
// oCar2.showColor();
// oCar1.showColor();

// var a = [];
// for(let i = 0; i<10; i++){
//     a[i] = function () {
//         console.log(i);
//     }
// }
// a[6]();//6

// for(let i = 0; i < 3; i++){
//     let i = 'abc';
//     console.log(i);
// }

// //ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。

// function Cat(sColor,iFeet){
//     this.color = sColor;
//     this.feets = iFeet;
//     Cat.prototype.tails = 1;
// }

// var cat1 = new Cat("red",4);
// // console.log(cat1.color);
// // console.log(typeof cat1.constructor)
// // console.log(cat1.hasOwnProperty("color"));
// // console.log(cat1.hasOwnProperty("feets"));
// // console.log(cat1.hasOwnProperty("tails"));
// console.log(cat1.isPrototypeOf(Cat));


// function Parent() {this.name = "Micheal_Gao"}
// Parent.prototype.alertP = function() {
//     console.log("Parent");
// };
// function Child() {this.age = 31}
// Child.prototype.alertC = function() {
//     console.log("Child");
// };

// function F() {}
// F.prototype = Parent.prototype;
// Child.prototype = new F();
// Child.prototype.constructor = Child;
// var child = new Child();

// // console.log(child instanceof Parent);
// // console.log(child instanceof Child);

// // console.log(Parent.prototype.isPrototypeOf(child));
// // console.log(Child.prototype.isPrototypeOf(child));

// // console.log(Child.prototype);
// // console.log(Parent.prototype);
// console.log(child.age);


// 一元操作符

// var num = 25;
// num = +num; 
// console.log(typeof num);
// num = "4";//字符串
// num = +num;//+号会将变量的类型变成数值类型
// console.log(typeof num);
// num = "4";
// num = -num;//-号也会进行数据类型转换
// console.log(typeof num);

// 递增和递减

// var num = 10;
// a = num++;  //此时num只计算+1，不返回，所以a还是10
// b = num--;  //这里的num已经是+1后的，所以此时num是11，这步的操作里又进行--的计算，不返回
// c = --num;  //这里的num从前面的11-1得到10，然后进行前置--的计算，立即返回10-1，所以这里得到9
// d = ++num;  //前置++计算，9+1，立即返回，所以得到10
// console.log(a); //10
// console.log(b); //11
// console.log(c); //9
// console.log(d); //10

// 按位非（NOT)  按位非操作符是由一个波浪线（~）表示，执行按位非的结果就是返回数值的反码

// var num = 25;
// console.log(~num);  // 运算过程先将操作数转成32位二进制数  00000000000000000000000000011001
//                     //  然后取反码                       11111111111111111111111111100110
//                     //  -26
//                     // 按位非操作的本质：操作数的负值减1
// var num = 25;
// var num2 = -num - 1;
// console.log(num2);  // 这段代码也能返回同样的结果 ，但由于按位非是在数值表示的最底层执行操作，因此速度更快。


// var num = 99999999999999999999999999999999999999999999999999999999999999999999999;
// var time = new Date();
// for(var i = 0; i<1000000;i++){
//     ~num;
// }
// var time2 = new Date();
// var t = time2 - time;
// console.log(t);

// num = 99999999999999999999999999999999999999999999999999999999999999999999999;
// var time = new Date();
// for(var i = 0; i<1000000;i++){
//     num2 = -num - 1;
// }
// time2 = new Date();
// t = time2 - time;
// console.log(t);



// // 按位与(AND) 操作符& 是对两个数进行操作，先将两个操作数转二进制，然后对相同位置上的数进行与操作
// var num = 25 & 3;
// console.log(num);

// // 按位或（OR) 操作符| 同样是两个操作数
// var num = 25 | 3;
// console.log(num);

// // 按位异或（XOR) 操作符^
// var num = 25 ^ 3;
// console.log(num);

// // 逻辑非 操作符 !
// console.log(!{});       //操作数是对象，返回false
// console.log(!"");       //操作数是空字符串，返回true
// console.log(!"a");      //操作数是非空字符串，返回false
// console.log(!0);        //操作数是0，返回true
// console.log(!-2);       //操作数是非0数值（包括Infinity)，返回false
// console.log(!NaN);      //操作数是NaN,返回true
// console.log(!null);     //操作数是null，返回true  
// console.log(!undefined) //操作数是undefined，返回true

// 逻辑与 操作符 && , 两个操作数为布尔值的话，同时为true时才返回true，否则返回false, 如果有一个操作不是布尔值，逻辑与也不一定返回布尔值，此时就按照下面的规则来
// var result = true && false;
// console.log(result);
// var result = {} && "呵呵"; //第一个操作数为对象，则返回第二个操作数
// console.log(result);
// var result = "abc" && {}; //第二个操作数为对象，只有第一个操作数求值结果为true的时候才能返回该对象
// console.log(result);
// var result = {a:1} && {b:2};    //两个操作数都是对象的话，则返回第二个操作数
// var result1 = "123" && "456";
// var result2 = 123 && 456;
// console.log(result);
// console.log(result1 + typeof result1);
// console.log(result2 + typeof result2);
// var result = null && 1234;    //第一个操作数为null时，则返回null
// // var result = "1" && null;
// console.log(result);
// var result = undefined && 1234; //第一个操作数为undefined时，则返回undefined
// console.log(result);
// var result = NaN && 1234;   //第一个操作数为NaN时，则返回NaN
// console.log(result);
// // var found = true;
// // var result = (found && someUndefinedVariable); //这里出错，说明逻辑与操作中不能使用未定义的值
// // console.log(result);
// var found = false;
// var result = (found && someUndefinedVariable); //因为found被设置成false，逻辑与操作属于短路操作，第一个操作数为false就不会再执行后面的操作数
// console.log(result);    //返回false


// 逻辑或 操作符 || , 两个操作数为布尔值的话，只要一个为true就返回true,否则返回false，如果有一个操作数不是布尔值，逻辑或也不一定返回布尔值。此时遵循以下规则
// var res = {} || 123;    
// console.log(res);   //如果第一个操作数为对象则返回第一个操作数
// res = "" || 124;
// console.log(res);   //如果第一个操作数求值为false,则返回第二个操作数
// res = "abc" || 345;
// console.log(res);   //如果两个操作数都是对象，则返回第一个操作数
// res = null || null;
// console.log(res);   //如果两个操作数都是null，则返回null
// res = undefined || undefined;
// console.log(res);   //如果两个操作数都是undefined，则返回underfined
// res = NaN || NaN;
// console.log(res);   //如果两个操作数都是NaN,则返回NaN

// //逻辑或与逻辑与相似，也属于短路操作，只要第一个操作数为true就不会再对第二个操作数求值了

// var found = true;
// var res = found || someUndefinedVariable; //当found为true这里没有问题。当found为false里则报错,不能使用未定义的值
// console.log(res);


// 利用逻辑或的特性可以避免为变量赋null或undefined值

// var myNum = preferredObject || backupObject; 