var inquirer = require('inquirer');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'mixVok-quxsy0-sinmup',
    database: 'department_db'
})
const options = [
    'Departments',
    'Roles',
    'Employees',
    'Exit'
];

const employees = [
    'Steve',
    'Marci',
    'Christian',
    'Alex',
    'JD'

];

const update = [
    'First Name',
    'Last Name',
    'Role',
    'Department',
    'Exit'
];

search();

function search() {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'Look For',
            choices: options
        })

        .then(function (answer) {
            switch (answer.action){
                case options[0]:
                    departments();
                    break;
                case options[1]:
                    roles();
                    break;
                case options[2]:
                    employee();
                    break;
                case options[3]:
                    changeEmployee();
                case update[4]:
                    connection.end();
                    break

            }
        })
    };

    function departments() {
        var departmentCol = 'SELECT * FROM department';
        connection.query(departmentCol, function(err, result){
            if(err) throw err;
            console.log(result);
            search()
        })
    };

    function employee() {
        var employeeCol = 'SELECT first_name, last_name, title, salary FROM employee';
        employeeCol += 'LEFT JOIN role';
       // employeeCol += 'ON employee.role_id = role.id';
        connection.query(employeeCol, function(err, result){
            if(err) throw err;
            console.log(result);
            search()
        })
    };

    function roles() {
        var roleCol = 'SELECT * FROM role';
        connection.query(roleCol, function (err, result){
            if(err) throw err;
            console.log(result);
            search();
        })
    };

    const changeEmployee = () => {
        function initUpdate() {
            inquirer
                .prompt({
                    name: 'action',
                    type: 'list',
                    message: 'Update Employee',
                    choices: employees
                })
        }
        initUpdate();

    }