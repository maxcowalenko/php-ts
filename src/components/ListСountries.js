import React from 'react'
import StoreContext from '../store/StoreContext'

class ListСountries extends React.Component {
  static contextType = StoreContext

  componentDidMount() {
    this.context.getСountries()
  }

  render() {
    const { countries } = this.context

    return (
      <div className="list-group">
        {countries.map((e) => {
          return <button className="list-group-item list-group-item-action" key={e.id} dangerouslySetInnerHTML={{ __html: e.name }}></button>
        })}
      </div>
    )
  }
}

export default ListСountries
