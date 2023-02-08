const DataUriPaser = require("datauri/parser");
const path = require("path");

const getDataUri = (file) => {
  const parser = new DataUriPaser();
  const extName = path.extname(file.originalName).toString();

  console.log(extName);
  return parser.format(extName, file.content);
};

module.exports = getDataUri;
