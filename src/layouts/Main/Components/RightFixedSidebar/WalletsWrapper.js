import React from 'react'
import Wallet from './Wallet'
const WalletsWrapper = ({children}) => {
    return (
        <div>
            <Wallet type="metamask" color="black" />
            <Wallet type="walletconnect" color="pink" />
            <Wallet type="coinbase" color="blue" />
            {/* <Wallet />
            <Wallet /> */}
        </div>
    )
}

export default WalletsWrapper
