import React from 'react'

import {UsersList} from '../components/UsersList'

export const Users = () => {
    const USERS = [
        {id: 'u1', name: 'Max Swartz', places: 3}
    ]
    return <UsersList items={USERS}/>
}