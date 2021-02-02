const { exec } = require("child_process");
const inquirer = require("inquirer");
const colors = require("colors");
exports.takeConfirmation = () => {
    inquirer.prompt([
        {
            name : "vsCode",
            type : "confirm",
            message : "Do you want to open vs code?",
        },
    ])
    .then((answers) => {
        if(!!answers.vsCode){
            exec("code1 .",(error, stdout, stderr) =>{
                if(error){
                    console.log(
                        "error: can't open vs code".red
                    );
                }
            });
        }

    })
    .catch((error) => {
        console.log(
            "error: please try again later".bgRed
        );
    });
};