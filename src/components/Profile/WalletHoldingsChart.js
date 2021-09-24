import React from 'react'
import wallet_holdings from 'src/assets/wallet-holdings.png'
import styled from 'styled-components'

const WalletHoldingsChart = () => {
    return (
        <Wrapper>
            
            <img src={wallet_holdings} alt="" />
            
        </Wrapper>
    )
}
const Wrapper = styled.div`
    img {
        width: 10rem;
    }
`
export default WalletHoldingsChart
