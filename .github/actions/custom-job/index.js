const core = require("@actions/core");

try {
  console.log(`Input is: ${core.getInput("name")}`);
} catch (error) {
  core.setFailed(error.message);
}
