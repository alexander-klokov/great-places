import React from 'react'
import './UserItem.css'

export const UserItem = props => {
    const {name, image, placesCount} = props
    return (
        <li className="user-item">
            <div className="user-item__content">
                <div className="user_item__image">
                    <img srs={image} alt="" />
                </div>
                <div className="user-item__info">
                    <h2>{name}</h2>
                    <h3>{placesCount} {placesCount === 1 ? 'place' : 'places'} </h3>
                </div>
            </div>
        </li>
    )
}