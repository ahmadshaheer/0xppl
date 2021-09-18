import React from 'react'
import styled from 'styled-components'
import WalletsWrapper from './WalletsWrapper'
import ConnectWalletWrapper from './ConnectWalletWrapper'

const RightFixedSidebar = () => {
    return (
        <Wrapper>
            <ConnectWalletWrapper />
            <WalletsWrapper />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    right: 5.75rem;
    left: auto;
    width: 15rem;
    margin-top: 12.813rem;
`


export default RightFixedSidebar
