const fs = require("fs");
const util = require("util");
const storage = require("node-persist");
const colors = require("colors");
const { getTemplate } = require("./templateBuilder");
const readdir = util.promisify(fs.readdir);

exports.makeDir = async (rootDir, dirName, numberOfFile) => {
    try {
      process.chdir(rootDir);
    } catch (e) {
      return "Root dir not found";
    }
    let files;
    try {
      files = await readdir(process.cwd(), "utf-8");
      if (files.includes(dirName)) return `error: ${dirName} already exists.`;
      else {
        const template = await getTemplate();
        process.chdir(rootDir);
        if (template === undefined || template === "")
          return "error: The template file in empty or the template dir is not set. \nPlease use -t or -h for help";
        else {
          fs.mkdirSync(dirName);
          let res = makeFiles(numberOfFile, rootDir, dirName);
          process.chdir(`${rootDir}/${dirName}`);
          return res;
        }
      }
    } catch (err) {
      return err;
    }
};

const makeFiles = async (numberOfFile, rootDir, dirName) => {
    try {
      const template = await getTemplate();
      const lang = await storage.getItem("lang");
      let fileName = "a";
      while (numberOfFile--) {
        fs.writeFileSync(`${rootDir}/${dirName}/${fileName}.${lang}`, template);
        console.log(`${rootDir}/${dirName}/${fileName}.${lang} created`.green);
        fileName = String.fromCharCode(fileName.charCodeAt(0) + 1);
      }
      return true;
    } catch (e) {
      return false;
    }
};