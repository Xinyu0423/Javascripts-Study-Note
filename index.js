// Node是运行JS的终端环境

console.log("Hello World");

// JS三种变量，var，let，const
// var是全剧作用域，可能会导致冲突，所以很少被使用
// let和const的区别是
// let的值可以被修改
// 而const的值不可以被修改
// const声明的是数组或者对象时，其数组或对象中的值是可以被更改的
// 但不可以修改整个const的值


let age=30;
// const age=30;
age=31;
console.log(age);

// 使用let可以不在声明变量时初始化数值
// 使用const必须在声明时就初始化数值
let score;
score=10;
console.log(score);

// JS中的数据类型
// String， Number，Boolean，null，undefined
const username="John";
const age2=30;
const rate=4.5;
const isCool=true;
// null和undefined的不同是
// null已经被定义了
// undefined表示没有被定义
const x=null;
const y=undefined;
let z;

// 查看JS的数据类型
console.log(typeof age)
// 如果数据为null，输出的数据类型为object
console.log(typeof x)

// 模版型字符串
const name="John"
const age3=30
// 连接字符串的方法1
console.log("My name is "+name+", I am "+age3+" years old");
// 方法2
// 使用esc下方的反引号取代引号
// 并使用${}将variable包裹起来
console.log(`My name is ${name} and I am ${age3} years old`);

// 字符串的内置方法
// 获取的字符串
const s="Hello World";
console.log(s.length)
// 将字符串转化为大写/小写
console.log(s.toLowerCase())
console.log(s.toUpperCase())
// 分割字符串
console.log(s.substring(0,5))
//分割字符串并转化为数组
console.log(s.split(''))

// 数组
const nums1=new Array(1,2,3,4,5);
const fruits=["apples","oranges","pears"];
console.log(nums1);
console.log(fruits);
// 在末尾增加新元素
fruits.push("banana")
console.log(fruits)
// 在头部添加新元素
fruits.unshift("mango")
console.log(fruits)
// 删除数组末尾的元素
fruits.pop()
console.log(fruits)
// 判断variable是不是数组
// Array.isArray()
console.log(Array.isArray(fruits))
console.log(Array.isArray(age))
// 得到特定元素的index
console.log(fruits.indexOf("oranges"))
// 注意，因为数据类型是const，所以无法将数组置为空
// 以下代码会产生报错
// fruits=[]

// 对象
const person = {
    firstName: "John",
    lastName: "Doe",
    age: "30",
    address:{
        street: "50th street",
        city: "Boston",
    },
};
console.log(person.address.city)
// 获取first，lastname和address并保存在以下3个variable里
const {firstName,lastName,address}=person
console.log(address)
// 获取first，lastname和address中的city并保存在以下3个variable里
const {firstName2,lastName2,address:{city},}=person
console.log(city)
// 添加一个新的属性
person.email="johndoe@gmail.com";
console.log(person.email);

// 对象数组和Json
const todos=[
    {
        id: 1,
        text: "Eat breakfast",
        isComplete: true
    },
    {
        id: 2,
        text: "Finish work",
        isComplete: true
    },
    {
        id: 3,
        text: "Go back home",
        isComplete: false
    },
];
console.log(todos[1].text)
// Json是一种数据格式，常被用在api和服务的数据传输中
// Json和对象数组的格式非常类似
// 将对象数组转换为Json格式
const todoJSON=JSON.stringify(todos)
console.log(todoJSON)

// if条件
// 当使用===时,同时比较数据类型和数据的值
const num=10;
if(num===10){
    console.log("x is 10")
}
// 当使用==时，仅比较数据的值
if(num==10){
    console.log("x is 10")
}
// or: ||
// and: &&

// 三目运算符
const num2=10;
const color = x>10 ? "red" : "blue"
console.log(color)

// Switch
// 以上条件都不满足时，执行default的内容
switch (color) {
    case "red":
        console.log("color is red");
        break
    case "blue":
        console.log("color is blue");
        break;
    default:
        console.log("color is not blue and red")
}

// for和while循环
// for
for(let i=0; i<10; i++){
    console.log(`i= ${i}`)
}
// while
let i=0
while ( i<10 ){
    console.log(`i=${i}`);
    i++;
}
for(let i=0; i<todos.length; i++){
    console.log(todos[i].text)
}
// 使用for循环获取数组中的每一项
for (let todo of todos){
    console.log(todo)
    console.log(todo.text)
}