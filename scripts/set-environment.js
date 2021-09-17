const fs = require("fs");

fs.writeFileSync("./src/environments.json", JSON.stringify({
  API_URL: `${process.env.API_URL || ''}/API`,
}));