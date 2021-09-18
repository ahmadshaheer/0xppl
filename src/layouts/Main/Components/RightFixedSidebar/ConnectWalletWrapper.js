import React from 'react'
import styled from 'styled-components'
import logo from '../../../../assets/wallet-logo.svg'
const ConnectWalletWrapper = () => {
    return (
        <Wrapper>
            <LogoWrapper>
                <img src={logo} alt="" />                
            </LogoWrapper>
            <TextWrapper>
                <h3>
                Connect
                your wallet
                </h3>
                <div className="details">
                    <p><span>*</span>Add your updates</p>
                    <p><span>*</span>Customize your Feed</p>
                    <p><span>*</span>Join Communities</p>
                    <p><span>*</span>Enable Messaging</p>

                </div>
            </TextWrapper>

        </Wrapper>
    )
}


const Wrapper = styled.div`
    margin-bottom: 2rem;
`

const LogoWrapper = styled.div`
        margin-bottom: 1.75rem;
    svg {
    }
`

const TextWrapper = styled.div`
    h3 {
        width: 9.188rem;
        line-height: 1.75rem;
        font-size: 1.75rem;
        font-weight: 600;
        letter-spacing: -0.063rem;;
        margin-bottom: 1.25rem;

    }
    .details {
        font-size: .75rem;
        /* line-height: 1.12÷5rem; */
        line-height: 1.125rem;    
        width: 100%;
        p {
            color: #687684;
            
            span {
                opacity: 0.5;
                
                vertical-align: middle;
                margin-right: 0.75rem;   
                font-size: 1rem;
                line-height: 1rem;
                font-weight: 700;
    
                
            }
        }

    } 
`

export default ConnectWalletWrapper
