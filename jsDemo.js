console.log("this output is from the external JS file");
var name = "alfonso";
let school = "David W Butler Highschool";
var grade = "12"
console.log(`name: ${name}`);
console.log(`school:${school}`);
console.log(`Grade: ${grade}`);
document.getElementById("name").innerHTML = "<b>Name: </b> <i></i>" + name + "</i>";
document.getElementById("school").innerHTML = "<b>School: </b><i>" + school + "</i>";
document.getElementById("grade").innerHTML = "<b>Grade: </b><i>" + grade + "</i>";
