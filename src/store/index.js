import React from 'react'
import StoreContext from './StoreContext';

class Store extends React.Component {
  static contextType = StoreContext

  constructor(props) {
    super(props)

    this.getСountries = this.getСountries.bind(this);
    this.addCountry = this.addCountry.bind(this);

    this.state = {
      statusText: '',
      countries: [],
      getСountries: this.getСountries,
      addCountry: this.addCountry,
    }
  }

  getСountries() {
    fetch('http://localhost:8088/get-countries.php').then(
      response => response.json()
    ).then((data) => {      
      if (!data.error) {
        this.setState({
          countries: data
        })
      } else {
        let statusText = ''

        if (typeof data.error === 'object') {
          statusText = JSON.stringify(data.error)
        } else {
          statusText = data.error
        }

        this.setState({
          statusText
        })
      }
    })
  }

  addCountry(countryName) {
    const body = new FormData()

    body.append('countryName', countryName)

    fetch('http://localhost:8088/add-country.php', {
      method: 'POST',
      body
    }).then(
      response => response.json()
    ).then((status) => {
      if (status.done) {
        this.getСountries()

        this.setState({
          statusText: ''
        })
      } else {
        let statusText = ''

        if (typeof status.error === 'object') {
          statusText = JSON.stringify(status.error)
        } else {
          statusText = status.error
        }

        this.setState({
          statusText
        })
      }
    })
  }

  render() {
    return (
      <StoreContext.Provider value={this.state}>
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}

export default Store
