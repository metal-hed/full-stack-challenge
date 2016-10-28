var employeesDB = TAFFY([
    new Employee('Nicolo Orlando', 'Developer'),
    new Employee('Harry Potter', 'Manager')
]);


var findAll = function () {
    return employeesDB().get();
}


var add = function (employee) {
    employeesDB.insert(employee);
}

var update = function (employee) {
    employeesDB.merge(employee);
}

var remove = function (employee) {
    log(employee)
    employeesDB(employee).remove();
}

