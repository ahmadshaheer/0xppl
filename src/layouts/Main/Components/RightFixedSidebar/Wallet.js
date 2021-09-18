import React from 'react'
import styled from 'styled-components'
import coinbase from '../../../../assets/coinbase-icon.svg'
import metamask from '../../../../assets/metamask-icon.svg'
import walletconnect from '../../../../assets/walletconnect-icon.svg'
const Wallet = ({color, type}) => {
    let icon, text;
    switch(type) {
        case 'metamask': 
            icon =metamask;
            text = "MetaMask"
            break;
        case 'walletconnect': 
            icon =walletconnect;
            text = "WalletConnect"

            break;
        case 'coinbase': 
            icon =coinbase;
            text = "Coinbase"

            break;
        default: 
            break;
    }
    return (
        <Item color={color}>
            <div className="text">
                {text}
            </div>
            <div className="icon">
                <img src={icon} alt=""/> 
            </div>
        </Item>
    )
}

const Item = styled.button`
    display: flex;
    padding: 1.438rem 1.25rem;
    width: 15rem;
    height: 4rem;
    justify-content: space-between;
    align-items: center;
    border: none;
    margin-bottom: .5rem;
    ${({ color }) => color === 'black' && `
        background: #141619;
    `}
    ${({ color }) => color === 'pink' && `
        background: #EE57AC;
    `}
    ${({ color }) => color === 'blue' && `
        background: #0648D7;
    `}
    border-radius: 0.25rem;
    .text {
        font-size: 1rem;
        line-height: 1rem;
        font-weight: 600;
        color: #fff;


    }
    .icon {
        width: 1.689rem;
        height: 1.563rem;
    }
`


export default Wallet
