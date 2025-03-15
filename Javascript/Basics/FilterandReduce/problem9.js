// 9. Calculate total salary of employees by department.

const employees = [
  { id: 1, name: "John", department: "Engineering", salary: 5000 },
  { id: 2, name: "Jane", department: "HR", salary: 3000 },
  { id: 3, name: "Jim", department: "Engineering", salary: 6000 },
  { id: 4, name: "Jill", department: "Sales", salary: 4000 },
];

const salaryObj = employees.reduce((prev, next) => {
  prev[next.department] = prev[next.department] || 0;
  prev[next.department] = (prev[next.department] || 0) + next.salary;
  return prev;
}, {});

console.log(salaryObj);
