import React from 'react'
import profile_logo from 'src/assets/default-profile-img.png'
import logo from 'src/assets/0xppl-logo.png'
import styled from 'styled-components'
const TopLogo = () => {
    return (
        <Wrapper>
            <div className="profile-logo">
                <img src={profile_logo} alt="" />
            </div>
            <div className="main-logo">
                <img src={logo} alt="" />
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    position: fixed;
    display: flex;
    align-items: center;

    .profile-logo {
        height: 2rem;
        margin-right: 0.813rem;
        margin-left: 2.5rem;
        top: 1.688rem;
        img {
            height: 100%;            
        }
    }

    .main-logo {
        height: 1.5rem;
        img {
            height: 100%;
            /* height: 100%; */
        }
    }

`
export default TopLogo
