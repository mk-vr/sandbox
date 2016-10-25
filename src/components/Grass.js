import {Entity} from 'aframe-react'
import React from 'react'

export default props => (
  <Entity
    geometry='primitive: cylinder; height: .3; radius: .05'
    material={{color: '#A5A026'}}
    position='2 -4 -5'
    rotation='0 0 15'/>
)
