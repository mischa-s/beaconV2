const React = require('react')
const { connect } = require('react-redux')
const Map = require('../components/map')
const FeaturedFarms = require('../components/featuredFarms')
const request = require('superagent')
const _ = require('lodash')

class FarmProfile extends React.Component {

  theDroidYourLookingFor () {
    const { allFarms } = this.props
    if (!allFarms) this.getAndFilterTheFarms()
    else this.filterTheFarms(allFarms)
  }
  getAndFilterTheFarms () {
    const { dispatch } = this.props
    request.get('/api/v1/farms', (err, res) => {
      const theFarms = res.body
      if (err) throw err
      else {
        dispatch({type: 'GET_ALL_FARMS', payload: theFarms}, (err, res) => {
          const id = 1
          if (err) throw err
          else {
            theFarms.filter(id === 'id')((farm) => (
              <div className='eachFarm' key={farm.id}>
                <h3>{farm.name}, {farm.location}</h3>
                <div className='farmImage'>
                  <img src={farm.mainImage} />
                </div>
              </div>
            ))
          }
        })
      }
    })
  }
  filterTheFarms (theFarms) {
    console.log(theFarms, 'filter the farms')
    const id = 1
    theFarms.filter(id === 'id')((farm) => (
      <div className='eachFarm' key={farm.id}>
        <h3>{farm.name}, {farm.location}</h3>
        <div className='farmImage'>
          <img src={farm.mainImage} />
        </div>
      </div>
    ))
  }
  render () {
    console.log('rendering')
    const { allFarms } = this.props
    const filteredResult = this.theDroidYourLookingFor(allFarms)
    return (
      <div className='listOfFarms'>
        < filteredResult />
      </div>
    )
  }
}

module.exports = connect((state) => state)(FarmProfile)
