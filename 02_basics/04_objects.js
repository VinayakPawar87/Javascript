const tinderUser = new Object()

tinderUser.id = '123abc'
tinderUser.name = 'Sammy'
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: 'hitesh',
            lastname: 'choudhary'
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"a",
    4:"b"
}


//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}

console.log(obj3);


const course = {
    coursename : 'Javascript Tutorial',
    price : '999',
    courseInstructor: 'hitesh'
}

const {courseInstructor : instructor} = course

console.log(instructor);