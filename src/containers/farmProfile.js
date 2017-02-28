const React = require('react')
const { connect } = require('react-redux')
const Map = require('../components/map')
const FeaturedFarms = require('../components/featuredFarms')
const request = require('superagent')
const _ = require('lodash')

class FarmProfile extends React.Component {

  componentWillMount () {
    const { dispatch, allFarms } = this.props
    if (!allFarms) {
      request.get('/api/v1/farms', (err, res) => {
        const theFarms = res.body
        if (err) throw err
        else {
          console.log('heard back from API')
          dispatch({type: 'GET_ALL_FARMS', payload: theFarms})
          this.filterById()
        }
      })
    }
  }
  filterById () {
    const { dispatch, allFarms } = this.props
    const id = 1
    console.log(allFarms,'all farms in filter by id')
    _.find(allFarms, 'id', id)((farm) => {
      dispatch({type: 'GET_FARM', payload: farm})
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
