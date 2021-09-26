import React from 'react'
import { WalletHoldingsChart, PersonalDescription, WalletAddress, FollowersStatistics, ConnectedAccountsWrapper } from 'src/components/Profile'
const RightSidebar = () => {
    return (
        <>
            <WalletAddress 
                address="MarcA"
                style={
                    {
                        marginBottom: "1.188rem"
                    }
                }
                />

            <ConnectedAccountsWrapper
                style={
                    {
                        marginBottom: "1.938rem"
                    }
                }
                />

            <PersonalDescription 
                style={
                    {
                        marginBottom: "0.813rem"
                    }
                }
                name="Marc Andreessen"
                description="I think the historical comparison to Jules Verne is very apt. This is going to be simply explained by stages of economic development. As you're alluding, America was the dynamic new force on the economic stage at that point. "
                updatable={true}
                />
                
            <FollowersStatistics
                style={
                    {
                        marginBottom: "3.75rem"
                    }
                }
                following={0}
                followers={28400}
            />

            <WalletHoldingsChart />
        </>
    )
}
export const rightSidebarProperties = {
    style: {
        paddingTop: '3.688rem',
        paddingBottom: '4.25rem',
        paddingRight: '4.625rem',
        paddingLeft: '4.813rem',
        width: '11.375rem',
        top: '0',
        bottom: '0',
        right: '0',
        height: '100%',
        background: "#fff",

    },
    contentsComponent: RightSidebar
}
export default RightSidebar
