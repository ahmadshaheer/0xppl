import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavbarItem = ({text, active, icon}) => {
    return (
        <Wrapper active={active}>
            <Link className="navbar-button" to="/">
                <div className="icon">
                    <img src={icon} alt="" />
                </div>
                <div className="text">
                    {text}
                </div>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: -webkit-fill-available;
    justify-content: center;

    .navbar-button {
        display: flex;
        
        ${({ active }) => active ? `
            background: #fff;
        ` : `
            background: #F8F8F9;

        `}
        padding-left: 1rem;
        padding-right: 1rem;
        height: 3rem;
        width: 100%;
        align-items: center;
        text-decoration: none;
        color: #141619;
        .icon {
            margin-right: 0.625rem;
        }
        .text {
            vertical-align: center;
            font-size: 0.875rem;
            font-weight: 600;
        }
    }

`

export default NavbarItem
