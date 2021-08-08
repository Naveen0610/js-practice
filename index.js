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