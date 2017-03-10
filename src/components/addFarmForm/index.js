const React = require('react')
const FindLatLong = require('../../functions/FindLatLang')
const request = require('superagent')

class addFarmForm extends React.Component {
  handleSubmit (e) {
    e.preventDefault()
    const { dispatch } = this.props
    const name = this.refs.name.value
    const location = this.refs.location.value
    const type = this.refs.type.value
    const description = this.refs.description.value
    const mainImage = this.refs.image.value
    const video = this.refs.video.value

    if (name.length > 0 && location.length > 0) {
      FindLatLong(location, function (result) {
        const longitude = result.Longitude
        const latitude = result.Latitude

        request.post('api/v1/createfarm')
        .send({name, location, type, description, mainImage, latitude, longitude})
        .end((err, data) => {
          if (err) throw err
          dispatch({type: 'GET_ALL_FARMS', payload: data.body})
        })
      })
    }
  }
  render () {
    return (
      <div>
        <form className='addFarmForm'>
          <input
            placeholder='Farm Name'
            ref='name' />
          <input
            placeholder='Farm Location'
            ref='location' />
          <input
            placeholder='Farm Type'
            ref='type' />
          <input
            placeholder='Farm Description'
            ref='description' />
          <input
            placeholder='Farm Image'
            ref='image' />
          <input
            placeholder='Farm Video'
            ref='video' />

          <button onClick={this.handleSubmit.bind(this)}> Submit
          </button>
        </form>
      </div>
    )
  }
}
module.exports = (addFarmForm)
