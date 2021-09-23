import React from 'react'
import styled from 'styled-components'
import profile_img from 'src/assets//default-profile-img.png'
import logo from 'src/assets//0xppl-logo.png'
const LeftSidebar = () => {
    return (
        <Wrapper>
            <img className="profile-img" src={profile_img} alt="" />
            <img className="logo" src={logo} alt="" />
            <div className="introduction-text">
                <p className="title">Welcome to 0xPeople,</p>
                <p className="sub-title">
                    a decentralized social network 
                    for the crypto natives.
                    <br />
                    <br />

                </p>
                <p className="description">
                    For the first time, you can communicate with users behind
                    the ETH addresses. Follow what 
                    the others are doing and engage 
                    in cummunication.
                    <br />
                    <br />
                    Service is run on a distributed proof-of-stake network.
                    There’s 
                    no central company owning 
                    the servers. 
                    <br />
                    <br />
                    <a href="/" className="read-more">Learn more</a>
                </p>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    /* margin-top: 4.375rem; */
    flex-basis: 14.125rem;
    position: sticky;
    align-self: flex-start;
    top: 4.375rem;
    height: 18.25rem;
    
    .profile-img {
        width: 4rem;
        height: 4rem;
        margin-bottom: 11.688rem;
        
    }
    
    .logo {
        width: 11rem;
        height: 3.379rem;
        margin-bottom: 3.183rem;

    }
    .introduction-text {
        font-size: 0.875rem;
        line-height: 1.25rem;
        .title {
            font-weight: 600;
            color: var(--color-black);
        }
        .sub-title {
            
            font-weight: 400;
            

        }
        .description {
            color: var(--color-grey);
        }

        .read-more {
            color: var(--color-blue);
            text-decoration: none;
        }
    }
`
export default LeftSidebar
