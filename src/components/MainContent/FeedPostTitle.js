import React from 'react'

const FeedPostTitle = ({name, verified, username, transaction, duration}) => {
    return (
        <div className="top">
            <div className="name">{name}</div>
            <div className="verified"></div>
            <div className="username">{username}</div>
            <div className="transaction">
                <div className="hash">
                    {transaction.id}
                </div>
                <div className="status">
                    {transaction.status}
                </div>
            </div>
            <div className="duraction">{duration}</div>
        </div>
    )
}

export default FeedPostTitle
