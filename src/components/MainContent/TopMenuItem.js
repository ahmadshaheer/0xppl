import React from 'react'
import styled from 'styled-components'

const TopMenuItem = ({icon, text, active, search}) => {
    return (
        <Item search={search} active={active}>
            <div className="icon">
                <img src={icon} alt="" />
            </div>
            <div className="title">{text}</div>
        </Item>
    )
}

const Item = styled.button`
    ${({search}) => search && `
        display:none;
    `}
    display: flex;
    flex-basis: 8rem;
    border: none;
    padding: 1rem 2rem;
    align-items: center;
    cursor: pointer;
    background: var(--color-background);
    ${({active}) => active && `
        background: #fff;
    `}

    &:hover {
        background: #fff;
    }
    .icon {
        margin-right: 0.625rem;
        img {
            width: 0.75rem;
            display: block;
        }
    }
    .title {
        font-weight: 600;
        font-size: 0.875rem;
        line-height: 1rem;
    }
`

export default TopMenuItem
