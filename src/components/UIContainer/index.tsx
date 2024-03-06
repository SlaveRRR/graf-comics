

import React,{FC} from 'react'
import { Loader, ModalAuth } from '../UI'




const UIContainer : FC = () => {
  return (
    <div className="ui-container">
        <Loader/>
        <ModalAuth/>
    </div>
  )
}

export default UIContainer