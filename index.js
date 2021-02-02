const { setRootDir, getRootDir } = require("./src/rootDirectory");
const { program } = require("./src/cliManager");
const { makeDir } = require("./src/fileMaker");
const { setTemplate } = require("./src/templateBuilder");
const { takeConfirmation } = require("./src/confirmation");
const colors = require("colors");
const storage = require("node-persist");

exports.mainCliProcess = async (args) => {
    program.parse(args);
    await storage.init({
      dir: `${__dirname}/storage`,
      stringify: JSON.stringify,
      parse: JSON.parse,
      encoding: "utf8",
      logging: false,
      expiredInterval: 2 * 60 * 1000,
      forgiveParseErrors: false,
});

if ((await storage.getItem("lang")) === undefined) {
    storage.setItem("lang", "cpp");
  }

  if (!!program.root) {
    let newRootDir = process.cwd(); 
    let isSuccessfull = setRootDir(newRootDir);
    if (!!isSuccessfull) {
      console.log(`"${newRootDir}" is now the root dir.`.cyan);
    } else {
      console.log(
        "error: There is some problem, please try again later.".bgRed
      );
    }
  }

  else if (!!program.template) {
    let currDir = process.cwd(); 
    let isSuccessfull = setTemplate(currDir);
    if (!!isSuccessfull) {
      console.log(
        `CLI will look in "${currDir}" for template now, make sure you have "template.txt" here.`
          .cyan
      );
    } else {
      console.log(
        "error: There is some problem, please try again later.".bgRed
      );
    }
  }
  else {
    const rootDir = await getRootDir(); 
    const dirName = program.dir; 
    const numberOfFiles = parseInt(program.number); 
    if (program.lang) {
      await storage.setItem("lang", program.lang);
    }
    if (dirName == undefined) {
      console.log("error: option '-d, --dir <type>' argument missing".red);
    } else {
      const res = await makeDir(rootDir, dirName, numberOfFiles); 
      if (typeof res == "boolean") {
        if (!!res === true) {
          console.log(`${dirName} created at "${rootDir}"`.bgBrightGreen.black);
          takeConfirmation();
        } else {
          console.log(
            "error: There is some problem, please try again later.".bgRed
          );
        }
      } else {
        console.log(res.red);
      }
    }
  }

};