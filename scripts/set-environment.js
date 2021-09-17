const fs = require("fs");

const API_URL = process.env.API_URL;
console.log(`Setting env to ${API_URL}...`);

fs.writeFileSync("./src/environments.json", JSON.stringify({
  API_URL: `${API_URL || ''}/API`,
}));

console.log(`Setting env to ${API_URL} done`);
