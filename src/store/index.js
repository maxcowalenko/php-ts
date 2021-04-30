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

  async thenError(response) {
    let responseLocal = await response.text();

    let error;

    if (response.ok) {
      try {
        responseLocal = JSON.parse(responseLocal)
      } catch (e) {
        error = `Did not receive JSON, instead received: ${responseLocal}`
      }
    }
    else {
      error = response.statusText
    }

    if (error) {
      throw new Error(error)
    }

    return responseLocal
  }

  getСountries() {
    fetch(
      'get-countries.php'
    ).then(
      this.thenError
    ).then((data) => {
      if (!data.error) {
        this.setState({
          countries: data
        })
      } else {
        this.showError(data.error)
      }
    }).catch((error) => {
      this.showError(error.message)
    })
  }

  addCountry(countryName) {
    const body = new FormData()

    body.append('countryName', countryName)

    fetch('add-country.php', {
      method: 'POST',
      body
    }).then(
      this.thenError
    ).then((status) => {
      if (status.done) {
        this.getСountries()

        this.setState({
          statusText: ''
        })
      } else {
        this.showError(status.error)
      }
    }).catch((error) => {
      this.showError(error.message)
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
