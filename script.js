/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

let arr1 = [
  { id: 4, name: "jhn", age: "8", profession: "deveoper" },
  { id: 5, name: "jak", age: "2", profession: "deveoper" },
  { id: 6, name: "kren", age: "9", profession: "admn" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((dev)=>{
    if(dev.profession==='developer'){
      console.log(dev);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((dev)=>{
    if(dev.profession=='developer'){
      console.log(dev)
    }
  })
}

function addData() {
  //Write your code here, just console.log

  arr.push({id:4,name:"susan",age:"20",profession:"intern"});
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((dev)=>dev.profession!=='admin');
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  
  arr1.forEach((dev)=>arr.push(dev));

  console.log(arr);

}
