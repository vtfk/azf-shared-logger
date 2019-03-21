const logger = require('../lib/logger')

module.exports = async function (context, mySbMsg) {
  context.log(`${mySbMsg.id} - start`)
  logger(mySbMsg)
  context.log(`${mySbMsg.id} - finished`)
}
