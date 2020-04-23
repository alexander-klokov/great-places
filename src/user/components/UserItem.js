import React from 'react'
import {Link} from 'react-router-dom'

import './UserItem.css'

import {Avatar} from '../../shared/components/UIElements/Avatar'
import {Card} from '../../shared/components/UIElements/Card'

export const UserItem = props => {
    const {name, image, placesCount} = props
    return (
        <li className="user-item">
            <Card className="user-item__content">
                <Link to={`/${props.id}/places`}>
                  <div className="user_item__image">
                    <Avatar image={image} alt={name} />
                  </div>
                  <div className="user-item__info">
                    <h2>{name}</h2>
                    <h3>{placesCount} {placesCount === 1 ? 'place' : 'places'} </h3>
                  </div>
                </Link>
            </Card>
        </li>
    )
}