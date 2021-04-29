import React from 'react'
import StoreContext from './StoreContext';

class Store extends React.Component {
  static contextType = StoreContext

  constructor(props) {
    super(props)

    this.showError = this.showError.bind(this);
    this.getСountries = this.getСountries.bind(this);
    this.addCountry = this.addCountry.bind(this);

    this.state = {
      statusText: '',
      countries: [],
      getСountries: this.getСountries,
      addCountry: this.addCountry,
    }
  }

  showError(error) {
    let statusText = ''

    if (typeof error === 'object') {
      statusText = JSON.stringify(error)
    } else {
      statusText = error
    }

    this.setState({
      statusText
    })
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
        this.showError(data.error)
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
        this.showError(status.error)
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
