/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here

  // using map() function
  var arrDev = arr.map(printDev);
  function printDev(value) {
    if(value.profession === 'developer'){
      console.log(value);
    }
  }
}

function PrintDeveloperbyForEach() {
  //Write your code here

  // using forEach() method 
  var arr_Dev = arr.forEach(print_Dev);
  function print_Dev(value) {
    if(value.profession === 'developer'){
      console.log(value);
    }
  }
}

function addData() {
  //Write your code here

  //using push() method
  let new_data = {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(new_data);

  //print new array 
  for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
  }
}

function removeAdmin() {
  //Write your code here
  arr.filter(remAdmin);
  function remAdmin(value){
    if(value.profession != 'admin'){
      console.log(value);
    }
  }
}

function concatenateArray() {
  //Write your code here
  let arrConcate = [
    { id: 8, name: "ram ji", age: "26", profession: "tester" },
    { id: 11, name: "radha", age: "23", profession: "ui/ux designer" },
    { id: 15, name: "krishna", age: "24", profession: "project manager" },
  ];
  //using concate function
  let new_arr = arr.concat(arrConcate);
  
  //print new array 
  for(let i=0;i<new_arr.length;i++){
    console.log(new_arr[i]);
  }
}