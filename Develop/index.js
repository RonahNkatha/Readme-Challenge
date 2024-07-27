// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";

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
  }

  //   {
  //     type: "confirm",
  //     name: "confirm",
  //     message: "Are you ready to proceed?",
  //     default: true,
  //   },
];

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

${answers.table_of_content}

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

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

${answers.features}

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests
${answers.tests}
`;
  return text;
}
