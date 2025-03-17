const fs = require("fs");
const filePath = "file.json";

// Create file

const createFile = (task, args) => {
  fs.writeFileSync(task, JSON.stringify(args));
};

const readFile = (fileName) => {
  console.log(fileName);
  if (!fs.existsSync(fileName)) return [];
  const data = fs.readFileSync(fileName, "utf-8");
  console.log(data);
};

// Reading from cli
const [, , cmd, fileName, ...args] = process.argv;
if (cmd === "create") createFile(fileName, args.join(","));
else if (cmd === "read") readFile(fileName);
