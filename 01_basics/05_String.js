name = "Vinayak"
repoCount = 50

console.log(`Hello name is ${name} and repo count is ${repoCount}`);

const gameName = new String('Vinayak')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);


const newStringOne = '     Vinayak      '
console.log(newStringOne);
console.log(newStringOne.trim());


const url = 'https://vinayak.com/vinayak%20pawar'
console.log(url.replace('%20','-'));

console.log(url.includes('vinayak'));

const newStringTwo = 'Vinayak Pawar Course5 Intelligence'
console.log(newStringTwo.split(' '));





