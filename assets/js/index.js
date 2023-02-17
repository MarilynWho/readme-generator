const inquirer = require("inquirer");
const fs = require("fs");

const licencesInfo = {
  "MIT Licence":
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "Apache licence 2.0":
    "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "Boost Software License 1.0":
    "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  "BSD 3-Clause License":
    "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  "BSD 2-Clause License":
    "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
  "CC0" : "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
  "Attribution-NonCommercial 4.0 International":
    "[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)",
  "Eclipse Public License 1.0":
    "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
  "GNU general public licence v3.0":
    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  "The Hippocratic License 3.0":
    "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)",
  "IBM Public License Version 1.0":
    "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
  "Mozilla Public License 2.0":
    "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
};
const licences = Object.keys(licencesInfo);
const questions = [
  { type: "input", message: "What is your project title?", name: "title" },
  {
    type: "list",
    message: "What licence do you use?",
    choices: licences,
    name: "licence",
  },
];

inquirer.prompt(questions).then((answers) => {
  fs.writeFile(
    "../output/README.txt",
    `${licencesInfo[answers.licence]}

# ${answers.title}

## Description

`,
    (err) => {
      err ? console.log("We have a problem") : console.log("Creating a file");
    }
  );
});
