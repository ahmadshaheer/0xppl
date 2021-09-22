import React from 'react'
import styled from 'styled-components'
import ConnectWalletItem from './ConnectWalletItem'
import metamask_icon from 'src/assets//metamask-icon.png'
import walletconnect_icon from 'src/assets//walletconnect-icon.png'
import coinbase_icon from 'src/assets//coinbase-icon.png'
const ConnectWalletsWrapper = ({className}) => {
    return (
        <Wrapper className={className}>
            <ConnectWalletItem icon_png={metamask_icon} text="MetaMask" color="#141619" />
            <ConnectWalletItem icon_png={walletconnect_icon} text="WalletConnect" color="#EE57AC" />
            <ConnectWalletItem icon_png={coinbase_icon} text="CoinBase" color="#0648D7" />
        </Wrapper>
    )
}
const Wrapper = styled.div`
`
export default ConnectWalletsWrapper
