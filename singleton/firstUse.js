const logger = require('./logger')

module.exports = function(){
    logger.printLogCount()
    logger.log('First Use')
    logger.printLogCount()
}