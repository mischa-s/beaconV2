const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const Header = require('../components/header')

const App = (props) => {
	console.log(props, 'app props')
	return (
		<div className='flexContainer'>
			<Header />
			<br />
			{props.children}
		</div>
	)
}

module.exports = connect((state) => state)(App)
