const { program } = require("commander");
const colors = require("colors");

program
    .name("create")
    .usage("")
    .option("-d, --dir <type>", "Name of the directory you want to create".yellow)
    .option(
        "-l, --lang <type>",
        "Language of your template and the new files that will be created"
        .yellow + " (default: cpp)"
    )
    .option(
        "-n, --number <type>", "Number of files you want inside your directory".yellow,3
    )
    .option(
        "-t, --template", 
        "Add the directory where your template is or go to disered directory and type the command create -t"
        .yellow,
        false   
    )
    .option(
        "-r, --root",
        "Sets the current dir as the root dir, for making new dirs, works same as -t, but sets the curr dir as root"
        .yellow,
        false
    )
    .helpOption("-h, --help","display all the commads for help".yellow)
    .on("--help",() => {
        console.log("\n created by tanmayChakrawarty".magenta)
    });

    module.exports = program;