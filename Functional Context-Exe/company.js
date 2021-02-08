function Copamny (){
    this.departments = {};
    const index = {};
    const company = {
        departments,
        index,
        addEmployee,
        bestDepartment
    };
    return company;

    function addEmployee(userName, salary, position, department) {
        this.validatePositon(userName);
        this.validatePositon(salary);
        this.validatePositon(position);
        this.validatePositon(department);

        const current = departments[index[department]];
        if (current === undefined) {
            current = {
                name: department,
                employee: []
            };
            departments.push(current);
            index[department] = departments.length - 1;
        }
        current.employees.push({
            userName,
            salary,
            position
        });
        return `New employee is hired.Name ${userName}. Position: ${position}`;
    }
    function bestDepartment() {

        const best = departments.map(d => ({
            name: d.name,
            employees: d.employee.slice(),
            averageSalary: d.employees.reduce(getAverage, 0) / d.employees.length
        })).sort((a, b) => b.averageSalary - a.averageSalary)[0];

        if (best !== undefined) {
            best.employees.sort((a, b) => b.salary - a.salary || a.userName.localeCompare(b.userName));
            const result = [
                `Best Department is: ${best.name}`,
                `Avarage salary: ${best.avarageSalary.toFixed(2)}`
            ];
            best.employees.forEach(empl => result.push(`${empl.userName} ${empl.salary} ${empl.position}`));
            return result.join('\n');
        }
        function getAverga(p, c) {
            return p + c.salary;
        }
    }
    function validatePositon(param) {
        if (param === undefined || param === null || param === '') {
            throw new Error(`Invalid input!`);
        }
    }
}