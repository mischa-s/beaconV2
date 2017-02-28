const { combineReducers } = require('redux')
const allFarms = require('./allFarms')
const currentFarm = require('./currentFarm')

module.exports = combineReducers({
  currentFarm,
  allFarms
})
