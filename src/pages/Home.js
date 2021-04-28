import React from 'react'
import StoreContext from '../store/StoreContext'

class Home extends React.Component {
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

  componentDidMount(){
    this.context.getСountries()
  }

  render() {
    const { listСountries } = this.context

    return (
      <div className="container mt-3">
        <form onSubmit={this.onSubmit}>
          <div className="input-group mb-3">
            <input type="search" className="form-control" placeholder="Название страны" value={this.state.countryName} onChange={this.onChange} required />
            <button className="btn btn-outline-secondary" type="submit">Добавить</button>
          </div>
        </form>
        <div className="list-group">
          {listСountries.map((e, i) => {
            return <button className="list-group-item list-group-item-action" key={i}>{e.name}</button>
          })}
        </div>
      </div>
    )
  }
}

export default Home
