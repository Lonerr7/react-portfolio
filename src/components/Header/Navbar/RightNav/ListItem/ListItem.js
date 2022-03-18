import React from 'react'
import { NavLink } from 'react-router-dom'

const ListItem = (props) => {
  return (
    <li className={props.classLiTitle}>
        <NavLink className={props.classLinkTitle} to={props.to}>
          {props.data}
        </NavLink>
      </li>
  )
}

export default ListItem