import React from 'react'

import {UserItem} from './UserItem'
import {Card} from '../../shared/components/UIElements/Card'
import './UsersList.css'

export const UsersList = props => {
    if (!props.items.length) {
      return <div className="center">
        <Card>
          <h2>No users found.</h2>
        </Card>
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