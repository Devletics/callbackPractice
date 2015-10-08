/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the favNum function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   
   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    var sayHi = function(st, cb) {
      cb(str);
    }
    
    function(thingtosay){
      alert(thingtosay);
    }
*/



  //Code Here for first

  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

 var first = function(arr, cb) {     //takes in the anonymous function(cb) and the array of names as parameters. So when you call it, it needs these two. 
   cb(arr[0]);                       //says put the array into the anonymous and get the first index of the array. -- The anonymous function gets made in the parameters when you call it.
 }

first(names, //puts into into function below

function(firstName){                                           //this is the cb function in the "first" parameter its just unnamed
  console.log('The first name in names is ', firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last
  
var last = function(arr, cb)
cb(arr[arr.length-1]);

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




var multiply = function(num1, num2, cb) {
  cb(num1 * num2); 
}

  //Code Here for multiply

multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains

var contains = function(arr, str, cb) {
  cb(arr.indexOf(str) !== -1);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];


contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

var uniq = function(arr, cb) {
      var uniqArray =[];
  for (var i = 0; i < arr.length; i++) {
     if (uniqArray.indexOf(arr[i]) === -1) {
       uniqArray.push(arr[i]);
     }   
   }
    cb(uniqArray);
 }
 
 
 
    //Code Here for uniq

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});



var uniq = function(arr,cb){
  var emptyObj = {};
  var emptyArr = [];
  
  for (var i = 0; i < arr.length; i++) {
    emptyObj[arr[i]] = arr[i];
    console.log(emptyObj);
  }
  
  for ( var key in emptyObj) {
    emptyArr.push(key);
  }
  
  cb(emptyArr);
}
  







/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
