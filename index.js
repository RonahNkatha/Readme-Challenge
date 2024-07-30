// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import path from "path";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What's the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What's your description?",
  },
  {
    type: "input",
    name: "github",
    message: "What's your github handle?"
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select a license",
        choices: ["MIT", "None", "APACHE2.0"],
  },

  {
    type: "input",
    name: "table_of_content",
    message: "What is your table of content?",
  },

  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project? ",
  },

  {
    type: "input",
    name: "credits",
    message: "Who do you give credit to?",
  },
  {
    type: "input",
    name: "features",
    message: "What are your features",
    },
    {
        type: "input",
        name: "tests",
        message: "What test do you run?"
  },
  {
    type: "input",
    name: "email",
    message: "What's your email address?"
    }


];

// inquirer.prompt(questions).then(answers => {
//   console.log('Selected License:', answers.license);
// });

// TODO: Create a function to write README file
function writeToFile(fileName, text) {
  fs.writeFile(fileName, text, (err) => {
    if (err) {
      console.error(err);
    } else {
    //   file written successfully
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      // Use user feedback for... whatever!!
      const text = generateReadMeText(answers);
      console.log(text);
      writeToFile("./README.md", text);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();
function generateReadMeText(answers) {
  const text = `# ${answers.title}
  

## Description

${answers.description}


## Table of Contents (Optional)

-[installation](#installation)
-[usage](#usage)
-[credits](#credits)
-[License](#license)
-[Badges](#badges)

## Installation

${answers.installation}

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an "assets/images" folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    md
    ![alt text](assets/images/screenshot.png)

## Credits

${answers.credits}
## License

${renderLicense(answers.license)}



## Badges



![Static Badge](https://img.shields.io/badge/https%3A%2F%2Fimg.shields.io%2Fbadge%2FREADME-Generator-brightgreen)


## Features

${answers.features}

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Email
${answers.email}

## Github

${answers.github}


## Tests
${answers.tests}
`
  return text;
}


  
function renderLicense(license) {
  let licenseText = "";

  // Generate the license badge based on the selected license
  let licenseBadge = `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;

  // Generate the license notice text based on the selected license
  let licenseNotice = `This application is covered under the ${license} license.`;

  // Generate the license section with badge and notice
  licenseText += `## License\n\n`;
  licenseText += `${licenseBadge}\n\n`;
  licenseText += `${licenseNotice}\n\n`;

  return licenseText;
}
