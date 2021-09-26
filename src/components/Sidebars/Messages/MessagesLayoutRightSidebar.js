import React from 'react'
import { WalletHoldingsChart, PersonalDescription, WalletAddress, FollowersStatistics, ConnectedAccountsWrapper } from 'src/components/Profile'
const MessagesLayoutRightSidebar = () => {
    return (
        <>
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
        </>
    )
}
export const rightSidebarProperties = {
    paddingTopInRem: 3.688,
    paddingBottomInRem: 4.25,
    paddingRightInRem: 4.625,
    paddingLeftInRem: 4.813,
    widthInRem: 11.375,
    topInRem: 0,
    bottomInRem: 0,
    rightInRem: 0,
    fullHeight: true,
    background: "#fff",
    contentsComponent: MessagesLayoutRightSidebar
}
export default MessagesLayoutRightSidebar
