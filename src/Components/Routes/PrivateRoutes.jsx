import React from 'react'
import { useSelector } from 'react-redux'

const PrivateRoutes = () => {
    const token = useSelector(store => store.AuthReducer.token)
    console.log(token)
    return (
        <div>PrivateRoutes</div>
    )
}

export default PrivateRoutes