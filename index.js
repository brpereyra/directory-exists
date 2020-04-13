const fs = require('fs');

/**
 * @param {string} path directory address
 * @description Validate if a directory exists
 * @returns {boolean} Returns true if the directory exists; false otherwise
 */

function directoryExists(path) {
    try {
        // Query the entry
        stats = fs.lstatSync(path);
    
        // Is it a directory?
        if (stats.isDirectory()) {
            return true
        }
        // Not is a directory
        throw 'Not is a directory'
    }
    catch (e) {
        return false
    }
}

module.exports = {
    directoryExists
}