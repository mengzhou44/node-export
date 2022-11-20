import React from 'react'

export default function Users() {
    let users = [
        { id: 1, name:'david'},
        { id: 2, name:'mark'},
    ]
    return <div className='users'>
    {users.map(user=> <div className='user' key={user.id}>{user.name}</div>)} 
    </div> 
}