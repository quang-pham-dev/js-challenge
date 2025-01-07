import * as readline from "readline";
import { spawn } from "child_process";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Please choose which file to run:");
console.log('1. Enter "auth" to run index-auth.ts');
console.log('2. Enter "base" to run index-base.ts');
console.log("3. Press Enter to run both files");

const runFile = (fileType: string) => {
  const fileToRun = `src/decorators/index-${fileType}.ts`;
  console.log(`\nRunning ${fileToRun}...`);

  return new Promise((resolve) => {
    const child = spawn("ts-node", [fileToRun], {
      stdio: "inherit"
    });

    child.on("error", (error) => {
      console.error(`Error running ${fileToRun}:`, error);
    });

    child.on("exit", (code) => {
      console.log(`Process ${fileToRun} exited with code ${code}`);
      resolve(null);
    });
  });
};

rl.question("Your choice: ", async (answer) => {
  const choice = answer.trim().toLowerCase();

  if (choice === "") {
    console.log("Running both files sequentially...");
    await runFile("base");
    await runFile("auth");
  } else if (choice === "auth" || choice === "base") {
    await runFile(choice);
  } else {
    console.error(
      'Invalid choice. Please enter either "auth", "base", or press Enter for both'
    );
    process.exit(1);
  }

  rl.close();
});
