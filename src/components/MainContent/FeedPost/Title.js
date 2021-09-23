import React from 'react'
import styled from 'styled-components'
import verified_profile_badge from 'src/assets/feed_post_profile_verified_badge.png'
import verified_transaction_badge from 'src/assets/feed_post_transaction_verified_badge.png'

const Title = (props) => {

    const {name, verified, username, transaction, duration} = props
    return (
        <Wrapper className="top">
            <div className="name">{name}</div>
            {verified && 
                            <div className="verified">
                                <img src={verified_profile_badge} alt="" />
                            </div>
            }
            
            <div className="username">{username}</div>
            <div className="transaction">
                <div className="hash">
                    {transaction.id}
                </div>
                <div className="verified">
                    {transaction.verified &&  <img src={verified_transaction_badge} alt="" /> }
                </div>
            </div>
            <div className="duraction">{duration}</div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    color: #687684;
    font-size: 1rem;
    line-height: 1.188rem;
    margin-bottom: 0.25rem;
    .name {
        color: #141619;
        font-weight: 600;
    }
    .verified {
        margin-left: 0.313rem;
        margin-right: 0.688rem;
        img {
            height: 0.625rem;
            width: 0.625rem;
        }


    }
    .username {
        margin-right: 1rem;
    }
    .transaction {
        display: flex;
        
        /* margin-right: 0.625rem; */
    }
`
export default Title
