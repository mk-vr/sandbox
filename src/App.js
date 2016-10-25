import 'aframe'
import 'aframe-animation-component'
import 'aframe-text-component'
import 'babel-polyfill'
import {Entity, Scene} from 'aframe-react'
import React from 'react'

import Camera from './components/Camera'
import Sky from './components/Sky'
import Building from './components/Building'
import Grass from './components/Grass'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {color: 'red'}
  }

  changeColor () {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue']
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    })
  }

  render () {
    return (
      <Scene>
        <Camera>
          <a-cursor
            animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150">
          </a-cursor>
        </Camera>

        <Sky
          color='#1DACFC'/>

        <Entity light={{type: 'ambient', color: '#888'}}/>
        <Entity light={{type: 'directional', intensity: 0.5}} position='-1 1 0'/>
        <Entity light={{type: 'directional', intensity: 1}} position='1 1 0'/>

        <Building position='-5 -3 -8' rotation='0 45 0'/>
        <Building position='-2 0 -15' rotation='0 25 0'/>
        <Building position='1 -1 -10' rotation='0 60 0'/>
        <Grass />

        <Entity
          geometry='primitive: plane; height: 8; width: 8'
          material={{color: '#C6C02C'}}
          position='0 -4 -3'
          rotation='-90 0 0'/>
      </Scene>
    )
  }
}

export default App
