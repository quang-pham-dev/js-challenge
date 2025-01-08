import * as readline from "readline";
import { spawn } from "child_process";
import * as path from "path";
import * as fs from "fs";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to find index file in feature folders
const findIndexFile = (feature: string): string | null => {
  const folders = ['decorators', 'events']; // Add more folders if needed
  
  for (const folder of folders) {
    const indexFile = path.join(__dirname, folder, `index-${feature}.ts`);
    if (fs.existsSync(indexFile)) {
      return indexFile;
    }
  }
  return null;
};

const runFile = async (feature: string) => {
  const indexFile = findIndexFile(feature);
  
  if (!indexFile) {
    console.error(`No index file found for feature: ${feature}`);
    return;
  }

  console.log(`\nRunning ${path.basename(indexFile)}...`);

  return new Promise((resolve) => {
    const child = spawn("ts-node", [indexFile], {
      stdio: "inherit"
    });

    child.on("error", (error) => {
      console.error(`Error running ${indexFile}:`, error);
    });

    child.on("exit", (code) => {
      console.log(`Process exited with code ${code}`);
      resolve(null);
    });
  });
};

const features = ['auth', 'base', 'events'];

console.log("Please choose which feature to run:");
features.forEach((feature, index) => {
  console.log(`${index + 1}. Enter "${feature}" to run index-${feature}.ts`);
});
console.log("Press Enter to run all features");

rl.question("Your choice: ", async (answer) => {
  const choice = answer.trim().toLowerCase();

  if (choice === "") {
    console.log("Running all features sequentially...");
    for (const feature of features) {
      await runFile(feature);
    }
  } else if (features.includes(choice)) {
    await runFile(choice);
  } else {
    console.error(
      `Invalid choice. Please enter one of: ${features.join(', ')}, or press Enter for all`
    );
    process.exit(1);
  }

  rl.close();
});