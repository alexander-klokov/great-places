import React from 'react'
import './UsersList.css'
import {UserItem} from './UserItem'


export const UsersList = props => {
    if (!props.items.length) {
      return <div className="center">
        <h2>No users found.</h2>
      </div>    
    }

    // user list is not empty - render the items
    return <ul className="users-list">
      {props.items.map(user => {
        const {id, image, name, places} = user
        return <UserItem key={id} id={id} image={image} name={name} placesCount={places} />
        })}
    </ul>
}