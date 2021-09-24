import React from 'react'
import styled from 'styled-components'
import { WalletHoldingsChart, PersonalDescription, WalletAddress, FollowersStatistics, ConnectedAccountsWrapper } from 'src/components/Profile'

const Collapsed = () => {
    return (
        <Wrapper>
            <WalletAddress 
                address="MarcA"
                marginBottomInRem={1.188}
                />

            <ConnectedAccountsWrapper
                marginBottomInRem={1.938}
                />
            
            <PersonalDescription 
                marginBottomInRem={0.813}
                name="Marc Andreessen"
                description="I think the historical comparison to Jules Verne is very apt. This is going to be simply explained by stages of economic development. As you're alluding, America was the dynamic new force on the economic stage at that point. "
                updatable={true}
                />
                
            <FollowersStatistics
                marginBottomInRem={3.75}
                following={0}
                followers={28400}
            />

            <WalletHoldingsChart />
        </Wrapper>
    )
}
const Wrapper = styled.div`
`

export default Collapsed
