var inquirer = require('inquirer');
var mysql = require('mysql');

//connection to localhost
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'mixVok-quxsy0-sinmup',
    database: 'department_db'
})
// command line options
const options = [
    'Departments',
    'Roles',
    'Employees',
    'Change Employee Info',
    'Exit'
];
// current employees
const employees = [
    'Steve',
    'Marci',
    'Christian',
    'Alex',
    'JD'

];

const roleList = [
    'Programmer',
    'Accountant',
    'Auto Sales',
    'Contractor',
    'Sales person'
]

const departmentList = [
    'Installation',
    'Sales',
    'Configuration',
    'Accounting',
    'Auto'
]
// things required for updating employees
const update = [
    'First Name',
    'Last Name',
    'Role',
    'Department',
    'Exit'
];

search();
// command line app
function search() {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'Look For',
            choices: options
        })
// command line use cases
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
                    break;
                case update[4]:
                    connection.end();
                    break

            }
        })
    };

// Select available departments
    function departments() {
        var departmentCol = 'SELECT * FROM department';
        connection.query(departmentCol, function(err, result){
            if(err) throw err;
            console.table(result);
            search()
        })
    };

// Select available employee roles
    function roles() {
        var roleCol = 'SELECT * FROM role';
        connection.query(roleCol, function (err, result){
            if(err) throw err;
            console.table(result);
            search();
        })
    };
//display employees
    function employee() {
        var employeeCol = 'SELECT first_name, last_name, title, salary FROM employee ';
        employeeCol += 'LEFT JOIN role ';
        employeeCol += 'ON employee.role_id = role.id'
        connection.query(employeeCol, function(err, result){
            if(err) throw err;
            console.table(result);
            search()
        })
    };

// update employees
    const changeEmployee = () => {
        function runUpdate() {
            inquirer
                .prompt({
                    name: 'action',
                    type: 'list',
                    message: 'Update Employee',
                    choices: employees
                },
                {
                    type: 'list',
                    name: 'role',
                    message: 'New Role',
                    choices: roleList
                },
                {
                    type: 'list',
                    name: 'department',
                    message: 'New Department',
                    choices: departmentList
                })
        }
        runUpdate();

    }