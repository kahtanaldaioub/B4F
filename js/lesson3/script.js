// //objects 

// function calculateDiscount(subscriptionType, price) {
//     switch (subscriptionType) {
//         case "premium":
//             return {
//                 discout: price*0.2,
//                 subscriptionType:"premium",
                
//             }; 
//         case "standard":
//              return {
//                 discout: price*0.1,
//                 subscriptionType:"standard",
//             };  
//         case "basic":
//             return {
//                 discout: price*0.05,
//                 subscriptionType:"basic",
//             };  
//         default:
//             return 0;
//     }
// }
// console.log(calculateDiscount("premium", 100)); 
// console.log(calculateDiscount("standard", 100)); 
// console.log(calculateDiscount("basic", 100)); 



// function auth(username,password,role){
//     const users ={
//         admin:{ password:"123", role:"admin"},
//         user:{ password:"1234", role:"user"},
//         guest:{ password:"12345", role:"guest"}
//     }
//     let user = users[username]
//     if(!user){
//         return {sucsses:false, message:"User not found"}
//     }
//     if (user.password !== password)
//     {
//         return {sucsses:false , message: "wrong password"}
//     }
//     if(user.role !==role)
//     {
//         return {sucsses:false , message: "wrong role"}
//     }
//     else return { sucsses:true, message:"login success"}
   
// }

// console.log(auth("admin","1234","admin"))
// console.log(auth("user","123","admin"))
// console.log(auth("admin","123","admin"))
// let numbers=new Array(10)
// numbers[0]=1
// numbers[1]=2
// numbers[2]=3
// numbers[3]=4
// numbers[4]=5
// numbers[5]=6

// function returnnum(){return numbers}
// console.log(numbers[9])

// let users =[
//     {id:1,name:"john",age:30},
//     {id:2,name:"jane",age:25},
//     {id:3,name:"bob",age:35},
//     {id:4,name:"mark",age:70},
// ]


// let firstAdult =users.find(u=> u.age>=30);
// console.log(firstAdult)
