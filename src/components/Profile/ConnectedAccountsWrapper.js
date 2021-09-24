import React from 'react'
import {ConnectedAccount} from './'
import connected_wallet_icon from 'src/assets/connected-wallet-icon.png'
import connected_email_icon from 'src/assets/connected-email-icon.png'
import connected_twitter_icon from 'src/assets/connected-twitter-icon.png'
import styled from 'styled-components'

const ConnectedAccountsWrapper = ({marginBottomInRem}) => {
    return (
        <Wrapper marginBottomInRem={marginBottomInRem}>
            <ConnectedAccount 
                icon={connected_wallet_icon}
                address="0x43A1…58S1"
                verified={true}
            />
            <ConnectedAccount 
                icon={connected_email_icon}
                address="Email"
                verified={true}
            />
            <ConnectedAccount 
                icon={connected_twitter_icon}
                address="pmarca"
                verified={true}
            />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    ${({marginBottomInRem}) => marginBottomInRem && `
        margin-bottom: ${marginBottomInRem}rem;
    `}

`

export default ConnectedAccountsWrapper
