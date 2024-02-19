const fs = require("node:fs/promises");
async function example() {
  try {
    const content = "Some content!";
    await fs.appendFile("./test.txt", content);
  } catch (err) {
    console.log(err);
  }
}
example();
