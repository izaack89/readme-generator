// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Here I check if the license is none if not I check what License to set a color for the badge 
  if (license !== "None") {        
    let colorBadge = '';
    switch (license) {
      case 'Apache 2.0':
        colorBadge = 'brightgreen';
        break;
      case 'GNU v3.0':
        colorBadge = 'yellowgreen';
        break;
      case 'MIT':
        colorBadge = 'blue';
        break;
      case 'BSD 2':
        colorBadge = 'orange';
        break;
      case 'BSD 3':
        colorBadge = 'yellow';
        break;
      case 'Boost SW 1.0':
        colorBadge = 'red';
        break;
      case 'Creative Commons Zero 1.0':
        colorBadge = 'lightgrey';
        break;
      case 'Eclipse':
        colorBadge = 'blueviolet';
        break;
      case 'GNU v3.0':
        colorBadge = 'blue';
        break;
      case 'GNU v2.0':
        colorBadge = 'orange';
        break;
      case 'GNU 2.1':
        colorBadge = 'red';
        break;
      case 'Mozilla':
        colorBadge = 'orange';
        break;
    }
    // I create the License link of the Badge 
    const licenseLink = `https://img.shields.io/badge/licenses-${license.replace(/\s/g, "_")}-${colorBadge}.svg`;
    return `
![GitHub license](${licenseLink})
    `;
  } else {
    // if the License is NONE I return blank
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Here I check if the license is none if not I check what License to set the link of the License information
  if (license !== "None") {
    let link = '';
    switch (license) {
      case 'Apache 2.0':
        link = 'https://choosealicense.com/licenses/apache-2.0/';
        break;
      case 'GNU v3.0':
        link = 'https://choosealicense.com/licenses/gpl-3.0/';
        break;
      case 'MIT':
        link = 'https://choosealicense.com/licenses/mit/';
        break;
      case 'BSD 2':
        link = 'https://choosealicense.com/licenses/bsd-2-clause/';
        break;
      case 'BSD 3':
        link = 'https://choosealicense.com/licenses/bsd-3-clause/';
        break;
      case 'Boost SW 1.0':
        link = 'https://choosealicense.com/licenses/bsl-1.0/';
        break;
      case 'Creative Commons Zero 1.0':
        link = 'https://choosealicense.com/licenses/cc0-1.0/';
        break;
      case 'Eclipse':
        link = 'https://choosealicense.com/licenses/epl-2.0/';
        break;
      case 'Mozilla':
        link = 'https://choosealicense.com/licenses/mpl-2.0/';
        break;
    }
    return `[${license}](${link})`
  } else {
    // if the License is NONE I return blank
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log('renderLicenseSection');
  if (license !== "None") {
    const licenseLink = renderLicenseLink(license);
    const badgeLink = renderLicenseBadge(license);
    const licenseSection = `
## License

This project is licensed under the ${licenseLink} license. 

${badgeLink}`;
    return licenseSection;
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = function (data) {
  // I get the License Section 
  const licenseSection = renderLicenseSection(data.projectLicense);
  // Created a variable that will be the table content , this will check if the user selected a License so it can be aaded or if not it will not add the License section 
  let tableContent = `
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)`;
  if (data.projectLicense !== "None") {
    tableContent = `
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)`;
  }
  // I created the constant variable for the template of the readme and I append the information that the user provided using inquirer
  const templateReadme = `
# ${data.projectTitle}

## Description

${data.projectDescription}


## Table of Contents

${tableContent}


## Installation

To install necessary dependencies, run the following command:

\`\`\` 
${data.projectInstall}
\`\`\`


## Usage

${data.projectUsage}

${licenseSection}

## Contributing

${data.projectGuidelines}


## Test

To run tests, run the following command:

\`\`\`
${data.projectTest}
\`\`\`


## Questions

If you have any questions about the repository, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.githubName}](https://github.com/${data.githubName})

  `;
  // I return the template already completed with the user information
  return templateReadme;
}
// Here the function of generateMarkdown is exported in order to be used on the file by using require property 
module.exports = generateMarkdown
