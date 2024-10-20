import React,{useState} from 'react'
import MenuList from './Component/Menu-list'

const TreeView = ({menu = []}) => {
  return (
    <div className=''>
     <MenuList list={menu}/>
    </div>
  )
}

export default TreeView
