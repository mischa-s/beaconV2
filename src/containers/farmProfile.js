const React = require('react')
const { connect } = require('react-redux')
const Map = require('../components/map')
const FeaturedFarms = require('../components/featuredFarms')

function Home (props) {
  return (
    <div>
      <Map />
      <FeaturedFarms />
    </div>
  )
}

module.exports = connect((state) => state)(Home)
