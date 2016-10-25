import {Entity} from 'aframe-react'
import React from 'react'

export default props => (
  <Entity
    geometry='primitive: box; depth: 2; height: 20; width: 2'
    material={{color: '#24CAFF'}}
    position={props.position}
    rotation={props.rotation}/>
)
