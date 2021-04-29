import React from 'react'
import StoreContext from '../store/StoreContext'

class AddCountry extends React.Component {
  static contextType = StoreContext

  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      countryName: ''
    }
  }

  onChange(event) {
    this.setState({
      countryName: event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault()

    this.context.addCountry(this.state.countryName)

    this.setState({
      countryName: ''
    })
  }

  render() {
    const { statusText } = this.context

    return (
      <form onSubmit={this.onSubmit}>
        <div className="input-group">
          <input type="search" className="form-control" placeholder="Название страны" value={this.state.countryName} onChange={this.onChange} required />
          <button className="btn btn-outline-secondary" type="submit">Добавить</button>
        </div>
        <div className="input-group mb-3">
          <div class="valid-feedback" style={{ display: 'block' }}>
            {statusText}
          </div>
        </div>
      </form>
    )
  }
}

export default AddCountry
