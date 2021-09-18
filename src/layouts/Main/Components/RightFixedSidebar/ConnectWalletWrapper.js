import React from 'react'
import styled from 'styled-components'

const ConnectWalletWrapper = () => {
    return (
        <Wrapper>
            <LogoWrapper>
                <svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                <circle cx="52" cy="48" r="40" fill="white"/>
                </g>
                <path d="M69 65V61C69 56.5817 64.9407 53 59.9333 53H44.0667C39.0593 53 35 56.5817 35 61V65" stroke="#141619" stroke-width="4" strokeLinecap="round" stroke-linejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M52 45C56.4183 45 60 41.4183 60 37C60 32.5817 56.4183 29 52 29C47.5817 29 44 32.5817 44 37C44 41.4183 47.5817 45 52 45Z" stroke="#141619" stroke-width="4" strokeLinecap="round" stroke-linejoin="round"/>
                <defs>
                <filter id="filter0_d" x="0" y="0" width="104" height="104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="6"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.407843 0 0 0 0 0.462745 0 0 0 0 0.517647 0 0 0 0.1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                </defs>
                </svg>                
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
