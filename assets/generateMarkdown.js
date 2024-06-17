// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
// if licence.name = 'MIT'
// return 
// else licence.name = 'apache'
// return
// if else 
// return
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
// if{licence.name = 'MIT'}
// return ""
// else{licence.name = 'apache'}
// return
// else{licence.name = 'none'}
// return ""
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}
 ## Description
  ${data.description}
 ## Table of contents
* Installation
* Usage
* Licence
* Contributing
* Questions
* Testing ##Installation
${data.installation}
## Usage
   ${data.usage}   
## Licence
     ${data.licence}
## Contributing
   ${data.contributing}
## Testing
${data.tests}
## Questions
 email:${data.email}
github:${data.github}

`;
}

module.exports = generateMarkdown;
// title
// Description
//  Table of Contents
//   Installation 
//   Usage
// License, 
// Contributing
// ,
//  Tests
//  , and Questions
