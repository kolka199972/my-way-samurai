import React from 'react'
import StoreContext from '../../../storeContext'
import Sidebar from './Sidebar'

const SidebarContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store: any) => <Sidebar friends={store.getState().sidebar.friends} />}
    </StoreContext.Consumer>
  )
}

export default SidebarContainer
