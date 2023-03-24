 
const employees=[
{ name: "David carlson", age:30 },
{ name: "John cena", age:34 },
{ name: "Mike Sheridan", age:40 },
{ name:"John carte", age:50 }
];
var b=employees.find(function(a){
	return a.name.indexOf("John") >=0;
	})
	console.log(b);
for (c in employees){
	console.log(c);
}
