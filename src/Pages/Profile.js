import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function Profile() {
    const navigate = useNavigate()
    const { userName } = useParams()
    return (
        <div>
            <h1>Profile page: { userName }</h1>
            <br/>
            <button
                onClick={ () => {
                    navigate('/')
                } }
            >
                Go to Home
            </button>
            <br/>
            <button
                onClick = {
                    () => navigate('/about')
                }
            >
                Go to About
            </button>
        </div>
    )
}

export default Profile
