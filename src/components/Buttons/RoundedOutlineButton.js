import React from 'react'
import styled from 'styled-components'

const RoundedOutlineButton = ({color}) => {
    return (
        <Button color={color}>UPDATE PROFILE</Button>
    )
}
const Button = styled.button`
    
    background: #fff;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: 1rem;
    padding: 0.313rem 0.688rem;
    cursor: pointer;
    ${({color}) => color && `
        border: 1px solid ${color};
        color: ${color};
        &:hover {
            background: ${color};
            color: #fff;
            
        }
        
    `}

`
export default RoundedOutlineButton
