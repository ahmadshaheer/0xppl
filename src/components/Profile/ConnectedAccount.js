import React from 'react'
import verified_badge from 'src/assets/feed_post_profile_verified_badge.png'
import styled from 'styled-components'

const ConnectedAccount = ({icon, address, verified}) => {
    return (
        <Wrapper>
            <div className="icon">
                <img src={icon} alt="" />
            </div>
            <div className="address">{address}</div>
            <div className="verified">
                {verified && <img src={verified_badge} alt="" />}
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    color: #687684;
    
    & >  {
    }
    .icon {
        margin-right: 0.375rem;
        img {
            width: 0.625rem;
        }
    }
    .address {
        margin-right: 0.375rem;
        font-size: 0.875rem;
        line-height: 1.313rem;

    }
    .verified {
        img {
            width: 0.625rem;
        }
        
    }
`
export default ConnectedAccount
