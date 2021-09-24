import React from 'react'
import styled from 'styled-components'
import wallet_connect_logo from  'src/assets//wallet-icon.png'
import ConnectWalletsWrapper from './Main/ConnectWalletsWrapper'
const MainLayoutRightSidebar = () => {
    return (
        <Wrapper>
            <img className="connect-wallet-icon" src={wallet_connect_logo} alt="" />

            <div className="connect-wallet-text">
                <div className="title">
                    Connect
                    your wallet

                </div>
                <div className="description">
                    <p><span>*</span>Add your updates</p>
                    <p><span>*</span>Customize your Feed</p>
                    <p><span>*</span>Join Communities</p>
                    <p><span>*</span>Enable Messaging</p>
                </div>
            </div>

            <ConnectWalletsWrapper className="connect-wallets" />

            <div className="privacy">How is your privacy protected?</div>
        </Wrapper>
    )
}
const Wrapper = styled.div`

    .connect-wallet-icon {
        width: 5rem;
        height: 5rem;
        margin-bottom: 1.75rem;
    }

    .title {
        font-size: 1.75rem;
        line-height: 1.75rem;
        font-weight: 600;
        width: 9.188rem;
        letter-spacing: -1px;
        margin-bottom: 1.25rem;

    }
    .description {
        p {
            font-weight: 400;
            font-size: 0.75rem;
            line-height: 1.125rem;
            color: var(--color-grey);
            span {
                font-weight: 700;
                font-size: 1rem;
                vertical-align: middle;
                margin-right: 0.75rem;
                /* line-height: 1.1rem; */
            }
        }
        margin-bottom: 2rem;
    }

    .connect-wallets {
        margin-bottom: 2.125rem;
    }

    /* privacy  */
    .privacy {
        color: var(--color-blue);
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 1.125rem;;

    }
`
export default MainLayoutRightSidebar
