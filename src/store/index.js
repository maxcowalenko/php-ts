import React from 'react'
import StoreContext from './StoreContext';

class Store extends React.Component {
  static contextType = StoreContext

  constructor(props) {
    super(props)

    this.getСountries = this.getСountries.bind(this);
    this.addCountry = this.addCountry.bind(this);

    this.state = {
      listСountries: [],
      getСountries: this.getСountries,
      addCountry: this.addCountry,
    }
  }

  getСountries() {
    fetch('http://localhost:8088/get-countries.php').then(
      response => response.json()
    ).then((listСountries) => {
      this.setState({
        listСountries
      })
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
    ).then((data) => {
      if (data.done) {
        this.getСountries()
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
