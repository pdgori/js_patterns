const logger = require('./logger')

module.exports = function(){
    logger.printLogCount()
    logger.log('Second Use')
    logger.printLogCount()
}