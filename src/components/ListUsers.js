import React, { useEffect, useState } from 'react'
import Details from './Details'
import List from './List'

export default function ListUsers() {
    const [state, setState] = useState({ isLoading: true, id: null, details: false })
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
            .then(response => response.json())
            .then(result => {
                setState(prevState => ({ ...prevState, users: result, isLoading: false }))
            })
    }, [])

    // useEffect(() => {
    //     console.log(state)
    // }, [state.isLoading, state.details])

    useEffect(() => {
        if (state.id) {
            fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${state.id}.json`)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    setState(prevState => ({ ...prevState, details: result }))
                })
        }
    }, [state.id])

    const handlerClick = (event) => {
        setState(prevState => ({ ...prevState, id: event.target.dataset.id }))
    }

    return (
        <div className='list-users'>
            {!state.isLoading || <progress />}
            <List users={state.users} handlerClick={handlerClick} id={state.id} />
            {state.details && <Details details={state.details} />}

        </div>
    )
}
