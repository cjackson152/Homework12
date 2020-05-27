var inquirer = require('inquirer');
var connection = require('./connection')
const choices = [
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
                    employees();
                    break;
                case options[3]:
                    changeEmployee();
                case options[4]:
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
        });
    }