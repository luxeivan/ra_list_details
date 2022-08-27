import React from 'react'

export default function List({ users, handlerClick, id }) {
    return (
        <ul className='users__list'>
            {users && users.map(item => <li 
            className={item.id == id ? 'users__item active' : 'users__item'} 
            key={item.id} 
            data-id={item.id} 
            onClick={handlerClick}>{item.name}</li>)}
        </ul>
    )
}
