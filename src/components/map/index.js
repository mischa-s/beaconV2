const React = require('react')
const { connect } = require('react-redux')

function Header (props) {
  return(
    <div className='map'>
      <h2> Map Here</h2>
    </div>
  )
}

module.exports = connect((state) => state)(Header)
