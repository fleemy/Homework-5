//  1 - masala
// let a = prompt("Son kiriting")-0;
// let a1 = Math.floor(a/100)
// let a2 = Math.floor((a%100)/10)
// let a3 = a%10
// console.log((a1+a2)-a3, "manashuncha katta");

// //  2 - masala
// let a = prompt("Son kiriting")-0;
// let sum = 0
// for (let i = 0; i < a.length; i++) {
//     if(i % a === 0){
//         sum += a[i]
//     }
// }
// console.log(sum)

// 3 - masala
// let arr = [false, 'Anna', 23, undefined, 'Lisa']x
// for(let i = 0; i < arr.length; i++){
//    if(typeof arr[i] === 'string'){
//        arr[i] = null
//    }
// }
// console.log(arr);

// 4 - masala


// let a =[2,3,4,52,2,3,4,53,2,23,43,2]
// let maxA =a[0]
//
// for (let i = 0; i < a.length; i++) {
//     if(maxA < a[i]){
//         maxA = a[i]
//     }
// }
// console.log(maxA)

// 5 - masala
// let a =[54, 32, 76, 12, 22]
// let sum = 0
// for (let i = 0; i < a.length; i++) {
//     sum += a[i]
// }
// console.log(sum);

// 7 - masala

// let a =[1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i < a.length; i++) {
//     if (a[i] % 2 === 0) {
//         a[i] = 0
//     }
//     console.log(a[i])
//
// }


// 8 - masala
// let first = prompt('1-Son kiriting')-0
// let action = prompt('%action')
// let second = prompt('2-Son kiriting')-0

// switch(action){
//    case '+':
//        console.log(first + second);
//    break;
//    case '-':
//        console.log(first - second);
//    break;
//    case '*':
//        console.log(first * second);
//    break;
//    case '/':
//        console.log(first / second);
//    break;
// }

// 9 - masala
// let username = prompt('Ism kiriting')
// let users = ["Sardor", "Abdurahmon", "Akmal", "Islomjon", "Hasan"]
// let isFind = false

// String methodlari
// 1.Include
// 2.toLowerCase()

// for(let i = 0; i < users.length; i++){
//    if(users[i].toLowerCase() === username.toLowerCase()){
//        isFind = true
//    }
// }
// console.log(isFind ? 'Bor' : 'Yoq');

// 10 - masala
// const users = [
//    {id:1, name:"Billura", age:18},
//    {id:2, name:"Soliha", age:17},
//    {id:3, name:"Hasan", age:35},
// ]
// let username = prompt('Ism kiriting')

// for(let i = 0; i < users.length; i++){
//    if(users[i].name.toLowerCase() === username.toLowerCase()){
//        console.log(users[i]);
//    }
// }

// 11 - masala

// const users = [
//     {id:1, name:"Billura", age:18},
//     {id:2, name:"Soliha", age:17},
//     {id:3, name:"Hasan", age:35},
// ]
//
// let maxAge = users[0].age
// let sum = 0
// for (let i = 0; i < users.length; i++){
//     sum += users[i].age
//     if(maxAge < users[i].age){
//         maxAge = users[i].age
//     }
// }
// console.log(maxAge)


// 12 - masala
// const users = [
//     {id:1, name:"Billura", age:18},
//     {id:2, name:"Soliha", age:17},
//     {id:3, name:"Hasan", age:35},
// ]
//
// let maxAge = users[0].age
// let sum = 0
// for (let i = 0; i < users.length; i++){
//    sum += users[i].age
//    if(maxAge < users[i].age){
//        maxAge = users[i].age
//    }
// }
// console.log(sum / users.length);

// 13 - masala
// let numbers = [1,2,3,4,5,6,7]
// let res = numbers[0] + numbers[numbers.length - 1]
// if(res % 2 == 0){
//    numbers.unshift(res)
// }
// else{
//    numbers.push(res)
// }
// console.log(numbers);

// 14 - masala
// let numbers = [1,2,3,4,5,6,7,8,9,10]
// let toqlar = []
// let juftlar = []

// for(let i=0; i<numbers.length;i++){
//    if(numbers[i] % 2 == 0){
//        juftlar.push(numbers[i])
//    }
//    else{
//        toqlar.push(numbers[i])
//    }
// }

// for(let i=0; i<numbers.length;i++) numbers[i] % 2 == 0 ? juftlar.push(numbers[i]) : toqlar.push(numbers[i])

// console.log("Toqlar", toqlar);
// console.log("Juftlar", juftlar);

// 15 - masala
// let numbers = [1,2,3,4,5,6,7]
// let res = []

// for(let num of numbers) {
//    res.unshift(num)
// }
// console.log(res);

// _________________________________________________________________________________________________________________________________________


// 1 - masala

// let a = [
//     {
//         id:1,
//         name: "Botir",
//         age: 20,
//         hobby: "Football"
//     },
//     {
//         id:2,
//         name: "Anvar",
//         age: 22,
//         hobby: "Football"
//     },
//     {
//         id:3,
//         name: "Shohrux",
//         age: 20,
//         hobby: "Basketball"
//     },
//     {
//         id:4,
//         name: "Akram",
//         age: 22,
//         hobby: "Football"
//     },
// ]
//
// let a1 = []
//
// for (let i = 0; i < a.length; i++) {
//     for (let j = i +1; j < a.length; j++) {
//         if (a[i].age === a[j].age && a[i].hobby === a[j].hobby) {
//             a1.push(a[i])
//             a1.push(a[j])
//         }
//     }
// }
// console.log(a1)


//  2 - masala

// let a = [3,4,3,2,3,4,5,6,3,5,6,7,8,9,5,4,3]
// let res = []
//
// for(let i = 0; i < a.length; i++){
//     if(!res.includes(a[i])){
//         res.push(a[i])
//     }
// }
// console.log(res);

//  3 - masala

// let a =[22,112,3,4,222,123,43]
// let maxA = a[0]
//
// for (let i = 0; i < a.length; i++) {
//     if(maxA < a[i]){
//         maxA = a[i]
//         a.unshift(maxA)
//     }
// }
// console.log(a);




// 4 - masala
// let size = prompt("Size kiriting")-0 // 3
// let usersList = []
//
// for(let i = 0; i < size; i++){
//     let newUser = prompt(`${i+1} - Ism kiriting`)
//     usersList.push(newUser)
// }
//
// // Array method -> includes
//
// let findUser = prompt("Ism qidiring")
// for(let value of usersList){
//     if(usersList.includes(findUser)) usersList.push(findUser)
// }
// console.log(usersList);


// 5 - masala

// let a = prompt("Son kiriting")-0;
// let res =[]
// for (let i = a; i <=0 ; i++) {
//     res.unshift(a[i]);
// }
// console.log(res);