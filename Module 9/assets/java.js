
const inquirer = require ('inquirer');
const fs = require ('fs');

// inquire to generate questions//
inquirer.prompt(
    [
        {
            type: 'input',
            message:'Whats the project title?',
            name:'title',
            validate: (value) => {if (value){return true}
            else {return 'i need a value to continue'}}
        },
        {
            type:'input',
            message:'how do you install your app?',
            name:'installation',
            validate: (value) => {if (value){return true}
            else {return 'i need a value to continue'}}
        },
        {
            type:'input',
            message:'Instructions to be follow?',
            name:'instruction',
            validate: (value) => {if (value){return true}
            else {return 'i need a value to continue'}}
        },
        {
            type:'input',
            message:'how did you use your app?',
            name:'usage',
            validate: (value) => {if (value){return true}
            else {return 'i need a value to continue'}}
        },
        {
            type:'input',
            message:'what license do you used?',
            name:'license',
            choices:['The MIT License','The GPL License','Apache License','GNU License','N/A'],
            validate: (value) => {if (value){return true}
            else {return 'i need a value to continue'}}
        },
        {
            type:'input',
            message:'Github username',
            name:'git',
            validate: (value) => {if (value){return true}
            else {return 'i need a value to continue'}}
        },
        {
            type:'input',
            message:'E-mail'?
            name:'email',
            validate: (value) => {if (value){return true}
            else {return 'i need a value to continue'}},
        }
    ]
).then(({
    title,
    installation,
    instruction,
    credit,
    license,
    git,
    linkedin,
    email,
    usage,
    contribution,
})=>{

//template to use//

const template = `# ${title}

*[Installation](#installation)
*[Usage](#usage)
*[Contribtion](#contribution)
*[Credits](#credits)
*[License](#license)
*Installation
${installation}
## Usage
${usage}
## Contribution
${contribution}
### instructions
${instruction}
## Credits
${credit}
## License
${license}

# Contact
* GitHub :${git}
* Linkedin:${linkedin}
* E-mail:${email}`;

// function to create our readme using fs
createNewfile(tittle, template);
}
);
//creating our createNewFile Function//
function createNewFile(filename,template){

    fs.writeFile(`./s(fileName.toLowerCase().split('')}.nd`,data,(err)=>{
        if (err){
            console.log(err)
        }
        console.log('Your README has been generated');
    })
}