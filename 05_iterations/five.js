const coding = ['js', 'ruby', 'java', 'py', 'cpp']

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (val) => {
//     console.log(val);
// } )

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )


const mycoding = [
    {
        langName: 'Javascript',
        langFileName: 'js'
    },
    {
        langName: 'Java',
        langFileName: 'java'
    },
    {
        langName: 'python',
        langFileName: 'py'
    }
]

mycoding.forEach( (item) => {
    console.log(item.langName);
} )

