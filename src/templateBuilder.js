const fs = require("fs");
const util = require("util")
const readFile = util.promisify(fs.readFile);
const storage = require("node-persist");

exports.getTemplate = async () => {
    try{
        let templateDir = await storage.getItem("templateDir");
        let template = await readFile(templateDir + "/template.txt");
        return template;
    }
    catch (err){
        return "";
    }
};

exports.setTemplate = async (dirName) => {
    try{
        await storage.setItem("templateDir", dirName);
        return true;
    }
    catch (err){
        return false;
    }
};