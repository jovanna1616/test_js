myObj =
 { 
	"name":"John", 
	"last_name":"Doe", 
	"age":30
};

array_of_objects = 
[
	{"name":"John", "last_name":"Doe", "age":30},
	{"name":"Joan", "last_name":"Doe", "age":29},
	{"name":"Tom", "last_name":"White", "age":20}
];

class Person {
	constructor(first_name, last_name, gender)
	{
		this.first_name = first_name;
		this.last_name = last_name;
		this.gender = gender;
	}
	static staticMethod() {
    return "I'm static method;"
  }
}

var person1 = new Person("John", "Doe", "M");
console.log(person1.first_name);
console.log(person1.last_name);
console.log(person1.gender);

console.log(Person.staticMethod());
Person.age = 30;
console.log(Person.age);


// promise
let myPromise = new Promise((resolve, reject) => {
  setTimeout(function(){
    resolve("Success!");
  }, 250);
});

myPromise.then((successMessage) => {
  console.log(successMessage);
});


// callback function
function finished(){
	console.log("Finished");
}

function increment(num, callBack){
	for(var i = 0; i <= num; i++){
  	console.log(i);
  }
  return callBack();
}

increment(5, finished);