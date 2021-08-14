var student={
    name:'Naveen',
    age:23,
    number:9113923564,
    address:'hiriyur',
}
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student['address']);

var student={
    name:'Naveen',
    age:23,
    address:{
        city:'hiriyur',
        state:'karnataka',
        pincode:577598,
    }
}
console.log(student);
console.log(student.address.city);
console.log(student['address']['state']);

student.graduate='true';
console.log(student.graduate);


var video={
    name:'access 101 js tutorial',
    play:function(){
        console.log('video played');
    },
    time:[0,30,80]
}
console.log(video.time);

var student={
    name:'Naveen',
    age:23,
    address:{
        city:'hiriyur',
        state:'karnataka',
        pincode:577598,
    }

}

console.log(student);
var student2=student;
console.log(student2);


var student={
    name:'Naveen',
    age:23,
    adrress:{
        city:'hiriyur',
        state:'karnataka',
        pin:577598,
    },

    hobbies:['gaming','running','cooking','reading','watching games'],

}

console.log(student.name);
console.log(student.address.state);
console.log(student.hobbies[4])

//loop:
for(i=0;i<=student.hobbies.lenght-1;i++)

{
    console.log(student.hobbies[i]);
}
// let and const
//var --> can be hosted,
// let and const cant't be hosted , let ----> variable , const --->constants
// let and const block scoped variable
// var -->it's not 


function vartest(){
    var x =1;
    if(true) {
        var x =2;
        console.log(x);
    }
    console.log(x);
}
vartest()

function es6test() {
    let x =1;
    if(true) {
        let x=2;
        console.log(x);
        }
        console.log(x);
}
es6test()


// functions
function add(a,b){
    return a + b;
}
add(3,5);

//FE
var add1 = function(a,b) {
    return a + b;
}
add1(6,2);

//es6 arrow functions
const add2 = (a,b) => {
    return a + b;
}

//one statement
const add3 = (a,b) => a + b;
const mul =(a,b) => a * b;
var res = mul(3,3);
console.log(res);


//default parameters values
function demo(x,y,z){
    if(y=== undefined){
        y=0;
    }
    if (z=== undefined){
        z=0;
    }
    return x + y + z;
};
let res1 = demo(15,25);

const demo2 =(a, b=10, c=30) => {
    return a + b + c;
}
const result = demo2(10);
console.log(result);

//string concatination
var address = ' To All';
var greeting = 'Happy independence day';
var message = greeting + address ;
console.log(message);


//templates literals
const mes =`${greetings} ${address}`
console.log(mes);

//arrays
const arr =[3,5,6,1];
const arry2 =[];
for(let i=0; i<=arr.length-1; i++) {
    arry2.push(arr[i] * 2)
}
console.log(arry2);

// array helper method 
//map, find, filter, foreach and reduce
const mul2 = arr.map(function(e){
    console.log(e)
})
const mul3 = arr.map((item) => {
    return item * 2
})

console.log(arr)
console.log(mul3)

