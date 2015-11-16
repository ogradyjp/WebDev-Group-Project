/**
 * @author John O'Grady
 * @date 14/11/2015.
 * @note class with helper functions to clean out any unnecessary generated xml
 */

/**
 * @param xml
 * @constructor
 */
var XMLCleaner = function() {
    this.cleanRSS = function(xml) {
        return xml.replace(/<content:encoded\/>/g, '');
    }
};

module.exports = XMLCleaner;