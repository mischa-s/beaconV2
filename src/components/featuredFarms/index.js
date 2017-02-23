const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent')

function FeaturedFarms (props) {
  function getTheFarms () {
    request.get('/api/v1/farms', (err, res) => {
      res
    })
  }
  getTheFarms()

  return (
    <div className='header'>
      <h2> List Of Farms</h2>
    </div>
  )
}

module.exports = connect((state) => state)(FeaturedFarms)
