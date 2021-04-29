import React from 'react'
import StoreContext from '../store/StoreContext'

class ListСountries extends React.Component {
  static contextType = StoreContext

  componentDidMount() {
    this.context.getСountries()
  }

  render() {
    const { countries } = this.context

    if (0 < countries.length)
      return (
        <div className="list-group">
          {countries.map((e) => {
            return <button className="list-group-item list-group-item-action" key={e.id} dangerouslySetInnerHTML={{ __html: e.name }}></button>
          })}
        </div>
      )
    else
      return (<div></div>)
  }
}

export default ListСountries
