import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
const TopMenuItem = (props) => {

    const {route, icon, text, search, className} = props
    return (
        <Item to={route} search={search} className={className}>
            <div className="icon">
                <img src={icon} alt="" />
            </div>
            <div className="title">{text}</div>
        </Item>
    )
}

const Item = styled(NavLink)`
    color: var(--color-grey);
    &.active {
        background: #fff;
        color: var(--color-black);
    }
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

TopMenuItem.propTypes = {
    route: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.string,
}
export default TopMenuItem
