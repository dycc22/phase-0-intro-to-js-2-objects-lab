// Write your solution in this file!
const employee = {
    name:"David Smith",
    streetAddress:"123 Main St"
};


function updateEmployeeWithKeyAndValue(employee,key,value) {
const newemployee = { ...employee }; //clone employee to newemployee
newemployee[key] = value;
return newemployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
employee[key] = value;
return employee;
}

function deleteFromEmployeeByKey(employee,key) {
const newemployee = { ...employee };
delete newemployee[key];
return newemployee;
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
delete employee[key];
return employee;
}