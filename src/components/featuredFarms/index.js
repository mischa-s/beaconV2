const React = require('react')
const { connect } = require('react-redux')

function Header (props) {
  return(
    <div className='header'>
      <h2> List Of Farms</h2>
    </div>
  )
}

module.exports = connect((state) => state)(Header)
