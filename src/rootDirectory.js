const storage = require("node-persist");

exports.setRootDir = async (dirName) => {
    try {
      await storage.setItem("rootDir", dirName);
      return true;
    } catch (err) {
      return false;
    }
  };
  
  exports.getRootDir = async () => {
    try {
      let rootDir = await storage.getItem("rootDir");
      return rootDir;
    } catch (err) {
      return "";
    }
  };