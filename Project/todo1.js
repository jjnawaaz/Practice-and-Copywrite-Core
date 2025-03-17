/**
 *  4. Build CLI To-Do App (file read/write)
✔️ Step 1: Create commands to add, list, delete tasks
File: todo.js
 */

const fs = require("fs");
const filePath = "tasks.json";

// Helper Read Tasks
const readTasks = () => {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

// Helper tasks : Save Tasks
const saveTasks = (tasks) => {
  fs.writeFileSync(filePath, JSON.stringify(tasks));
};

// Add Tasks
const addTask = (task) => {
  const tasks = readTasks();
  tasks.push(task);
  saveTasks(tasks);
  console.log("Task added");
};

// List Tasks
const listTasks = () => {
  const tasks = readTasks();
  tasks.length
    ? tasks.forEach((t, i) => console.log(`${i + 1}.${t}`))
    : console.log("No Tasks");
};

// Delete Tasks
const deleteTask = (index) => {
  const tasks = readTasks();
  if (index < 1 || index > tasks.length) return console.log("Invalid Task");
  const removed = tasks.splice(index - 1, 1);
  saveTasks(tasks);
  console.log("Task removed: ", removed[0]);
};

// CLI Handling
const [, , cmd, ...args] = process.argv;
if (cmd === "add") addTask(args.join(" "));
else if (cmd === "list") listTasks();
else if (cmd === "delete") deleteTask(parseInt(args[0]));
else console.log("Commands: add <task>, list, delete <index>");
