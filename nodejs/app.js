const fs = require("node:fs/promises");
async function example() {
  try {
    const content = "Some async content!";
    await fs.writeFile("./test.txt", content);
  } catch (err) {
    console.log(err);
  }
}
example();
