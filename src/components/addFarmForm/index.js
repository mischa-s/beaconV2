const React = require('react')

class addFarmForm extends React.Component {
  handleSubmit () {

  }
  render () {
    return (
      <div>
        <form className='addFarmForm'>
          <input
            placeholder='Farm Name'
            className='input'
            ref='name' />
          <input
            placeholder='Farm Location'
            className='input'
            ref='location' />
          <input
            placeholder='Farm Type'
            className='input'
            ref='type' />
          <input
            placeholder='Farm Description'
            className='input'
            ref='description' />
          <input
            placeholder='Farm Image'
            className='input'
            ref='image' />
          <input
            placeholder='Farm Video'
            className='input'
            ref='video' />

          <button onClick={this.handleSubmit.bind(this)}> Submit
          </button>
        </form>
      </div>
  )
  }
}
module.exports = (addFarmForm)
