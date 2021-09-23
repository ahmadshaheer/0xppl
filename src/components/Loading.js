import React from 'react'

const Loading = ({ pastDelay }) => {
    return (
        <div>
            {pastDelay ? <h3>Loading...</h3> : null}
        </div>
    )
}

export default Loading
