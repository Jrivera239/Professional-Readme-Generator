
const fs = require ('fs');
const inquirer = require ('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown.js');
console.log ("Welcome to my create README generator")
console.log (" Answer the following questions accordingly")


// inquire to generate questions//
inquirer.prompt(
    [
        {
            type: 'input',
            message:'What title would you like for your README?',
            name:'title',
            validate: (value) => 
            {if (value){return true}
            else {return 'In order to proceed, you need to submit the asked informaton'}}
        },
        {
            type:'input',
            message:'How do you install your app?',
            name:'installation',
            validate: (value) =>
             {if (value){return true}
            else {return 'In order to proceed, you need to submit the asked informaton'}}
        },
        {
            type:'input',
            message:'Instructions to be follow?',
            name:'instruction',
            validate: (value) =>
             {if (value){return true}
            else {return 'In order to proceed, you need to submit the asked informaton'}}
        },
        {
            type:'input',
            message:'How did you use your app?',
            name:'usage',
            validate: (value) =>
             {if (value){return true}
            else {return 'In order to proceed, you need to submit the asked informaton'}}
        },
        {
            type:'checkbox',
            message:'what license do you used?',
            name:'license',
            choices:['The MIT License','The Driver License','NPM License','BSD License','GPL License','N/A'],
            validate: (value) => 
            {if (value){return true}
            else {return 'In order to proceed, you need to submit the asked informaton'}}
        },
        {
            type:'input',
            message:'Please write your Github username',
            name:'git',
            validate: (value) => 
            {if (value){return true}
            else {return 'In order to proceed, you need to submit the asked informaton'}}
        },
        {
            type:'input',
            message:' Please write your E-mail',
            name:'email',
            validate: (value) =>
            {if (value){return true}
            else {return 'In order to proceed, you need to submit the asked informaton'}},
        }
    ]
).then(({
    title,
    installation,
    instruction,
    credit,
    license,
    git,
    email,
    usage,
})=>{

//sources to use//

const sources = `# ${title}

*[Installation](#installation)
*[Usage](#usage)
*[Credits](#credits)
*[License](#license)
*Installation
${installation}
## Usage
${usage}
### instructions
${instruction}
## Credits
${credit}
## License
${license}
# Contact Information
* GitHub :${git}
* E-mail:${email}`;


// function to create our readme using fs
createNewFile(title, sources);
}
);
//creating our createNewFile Function//
function createNewFile(fileName,data) {
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data, (err) => {
        if(err) {
            return console.log (err);
        }
  
console.log("Congratulations, we are completed here. Please now feel free the review your README file");
});
};
//fs.appendFile ('log.txt',`${process.argv[2]}\n`, err =>
//err ? console.error(err) : console.log('commit logged!'));

   // function init() {
   //     inquirer.prompt()
   //     .then(function (userInput) {
   //         console.log (userinput)
   //         writeToFile("README.md",generateMarkdown(userInput));
   //     });
  //  };

