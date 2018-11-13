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