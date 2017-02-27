const React = require('react')
const { connect } = require('react-redux')
const Map = require('../components/map')
const FeaturedFarms = require('../components/featuredFarms')
const request = require('superagent')
const _ = require('lodash')

class FarmProfile extends React.Component {

  componentWillMount () {
    const { allFarms } = this.props
    if (!allFarms) {

    }
  }
  getAndFilterTheFarms () {
    const { dispatch } = this.props
    request.get('/api/v1/farms', (err, res) => {
      const theFarms = res.body
      if (err) throw err
      else {
        dispatch({type: 'GET_ALL_FARMS', payload: theFarms}, (err, res) => {
          if (err) throw err
        })
      }
    })
  }
  render () {
    const { currentFarm } = this.props
    return (
      <div>
        <h2>
          {currentFarm.name}
        </h2>
      </div>
    )
  }
}

module.exports = connect((state) => state)(FarmProfile)

// Page is loading, are the farms loaded? If not return object with the right keys and no data

// When farms are loaded, rerender the page with the farm data
