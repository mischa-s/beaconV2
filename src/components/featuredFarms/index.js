const React = require('react')
const request = require('superagent')
const _ = require('lodash')
console.log(_, 'lodash in featured farms')
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
    <div className='listOfFarms'>
      {
        _.map(allFarms, (farm) => (
          <div className='eachFarm' key={farm.id}>
            <h3>{farm.name}, {farm.location}</h3>
            <div className='farmImage'>
              <img src={farm.mainImage} />
            </div>
          </div>
        ))
      }
    </div>

  )
}

module.exports = FeaturedFarms
