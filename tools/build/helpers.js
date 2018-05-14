const path = require('path');
const { lstatSync, readdirSync } = require('fs')
const { join, resolve } = require('path')

exports.root = function(args) {
  const ROOT = path.resolve(__dirname, '../..');
  args = Array.prototype.slice.call(arguments, 0);

  return path.join.apply(path, [ROOT].concat(args));
};
const isDirectory = source => lstatSync(source.path).isDirectory();
const getDirectories = (source, execludes, entryFileName) =>
  readdirSync(source).filter(name => execludes.indexOf(name) === -1)
  .map(name => { return { name:name, entryFileName:join(source,name,entryFileName) ,path:join(source, name) }})
  .filter(isDirectory);

exports.getEntries = function(sourceDirecoty, excludedDirecotries, entryFileName) {
  let allDirectories = getDirectories(resolve(__dirname, `../../${sourceDirecoty}`),excludedDirecotries, entryFileName);
  return allDirectories.map(
    item => {
        return {
          [item.name]: item.entryFileName.replace(resolve(__dirname, '../..'),'.')
        }; 
      
    }
  );
};
//Usage Example:
// getEntries("src",["test","__tests__","__mocks__","shared"],"index.ts");