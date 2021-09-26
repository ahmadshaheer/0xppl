import React from 'react'
import  styled  from 'styled-components';
import { PropTypes } from 'prop-types';

const Button = (props) => {
    const {icon, label} = props;
    return (
        <ButtonWrapper {...props}>
            {icon && <div className="icon"><img src={icon} alt="" /></div>}
            
            <div className="label">{label}</div>
        </ButtonWrapper>
    )
}
const ButtonWrapper = styled.button`
    cursor: pointer;
    ${({background}) => background !== undefined && `
        background: ${background};
        &:hover {
            color: ${background};
        }
    `}
    
    ${({color}) => color !== undefined && `
        color: ${color};
        &:hover {
            background: ${color};
        }
    `}
    
    ${({hover}) => hover && `
        &:hover {
            background: ${hover.background};
            color: ${hover.color};
        }
    `}
    
    
`

Button.propTypes = {
    background: PropTypes.string,
    color: PropTypes.string,
    hover: PropTypes.object,
}


export default Button
