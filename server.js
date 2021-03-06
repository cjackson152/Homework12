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
    'Employees'
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
// other attempt at creating an add employee functionality
  /* function createEmployee(employees, roleList, departmentList) {
        inquirer
            .prompt([{
                type: 'input',
                name: 'first_name',
                message: 'Employee First Name?',
                validate: async (input) => {
                    if (/^[a-z A-Z] +$/.test(input)){
                        return true;
                    }
                }
                
            },
            {
                type: 'input', 
                name: 'last_name',
                message: 'Employee Last Name?',
                validate: async (input) => {
                    if (/^[a-z A-Z]+$/.test(input)) {
                        return true;
                    }

                }
            },
            {
                type: 'list',
                name: 'role',
                message: 'Employee Role?',
                choices: roleList
            },
            {
                type: 'list',
                name: 'department',
                message: 'Which Department?',
                choices: departmentList
            }])
            .then(function (data) {
                console.log(data);
                let newEmployeesFirstName = data.first_name;
                let newEmployeesLastName = data.last_name;
                let newEmployeesRoleId = data.role.id;
                let newEmployeeDepartmentId = data.department.id;
            })
    }
*/
// update employees *currently just selects an employee and ends connection*
    const changeEmployee = () => {
        function initUpdate() {
            inquirer
                .prompt([
               {
                   type: 'list',
                   name: 'action',
                   message: 'Update Employee',
                   choices: employees
               },
// can not figure this out               
              /* .then(function(answer){
                   switch (answer.action) {
                       case New_Employee[0]:
                           createEmployee();
                           break;
                        case Update_Employee[1]:
                            updateEmployee();
                            break;
                        case exit[2]:
                            connection.end();
                            

                   }
               })*/
//cant figure out why inquirer wont continue onto the next               
                {
                   type: 'list',
                   name: 'action',
                   message: 'Employee role',
                   choices: roleList
               },
               {
                   type: 'list',
                   name: 'action',
                   message: 'Employee Department',
                   choices: departmentList
               }])

// potential add employee functionality               
               /* .then(function(answer){
                    switch(answer.action) {
                        case names[0]:
                            inquirer.prompt({
                                type: 'input',
                                name: 'action',
                                message: 'Employee Names',
                                choices: employees
                            });
 
                        case roleList[1]:
                            inquirer.prompt({
                                type: 'input',
                                name: 'action',
                                message: 'Employee Role',
                                choices: roleList
                            });
 
                        case departmentList[2]:
                            inquirer.prompt({
                                type: 'input',
                                name: 'action',
                                message: 'Employee Department',
                                choices: departmentList
                            });

                        case options[3]:
                            connection.end();
                            break;

                    }
                })*/
            
                };

        initUpdate();

    }