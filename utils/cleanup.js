const fs = require('fs');
const glob = require('glob');

/*
  * This script deletes all generated .js files in the packages' folder.
  * Files in the node_modules folder are ignored.
 */
const cleanUp = () => {
  glob('packages/**/*.js', (err, files) => {
    files.forEach((file) => {
      if (!file.includes('node_modules')) {
        fs.unlinkSync(file);
        console.log('Deleted file: ', file);
      }
    });
  });
};

cleanUp();
