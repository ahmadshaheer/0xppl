import React from 'react'
import styled from 'styled-components'

const WalletAddress = ({style, address, marginBottomInRem}) => {
    return (
        <Wrapper style={style}>
            <div className="prefix">
                <span>0x</span>p
            </div>
            <div className="address">{address}</div>
            
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    /* justify-content: center; */
    font-size: 2.25rem;
    font-weight: 800;
    line-height: 2.639rem;
    letter-spacing: 0.019rem;
    span {
        font-weight: 400;

    }
`

export default WalletAddress
