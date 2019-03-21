const logger = require('../lib/logger')

module.exports = async function (context, mySbMsg) {
  context.log(`${mySbMsg.id} - start`)
  logger(mySbMsg.level, mySbMsg.message)
  context.log(`${mySbMsg.id} - finished`)
}
