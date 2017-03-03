const React = require('react')
const request = require('superagent')
const _ = require('lodash')
const { Link } = require('react-router')

function FeaturedFarms (props) {
  const { allFarms, dispatch } = props
  function getTheFarms () {
    request.get('/api/v1/farms', (err, res) => {
      if (err) throw err
      dispatch({type: 'GET_ALL_FARMS', payload: res.body})
    })
  }
  if (!allFarms) getTheFarms()

  return (
    <div className='featuredFarms'>
      <h2 className='featuredFarmsHeaderText'>Featured Farms</h2>
      {
        _.map(allFarms, (farm) => (
          <div className='eachFeaturedFarm' key={farm.id}>
            <Link to={`/farm/${farm.id}/`}>
              <h3>{farm.name}, {farm.location}</h3>
              <div className='farmImage'>
                <img src={farm.mainImage} />
              </div>
            </Link>
          </div>
        ))
      }
    </div>

  )
}

module.exports = FeaturedFarms
