import React from 'react'
import { container, innerContainer } from './styles.css'
import { Navigation } from '../../components'

class MainContainer extends React.Component {
  render () {
    return (
      <div className={container}>
        <Navigation isAuthed={false} />
        <div className={innerContainer}>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default MainContainer
