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
    
    ${({fontSizeInRem}) => fontSizeInRem !== undefined && `
        font-size: ${fontSizeInRem}rem;
    `}
    
    ${({fontWeight}) => fontWeight !== undefined && `
        font-weight: ${fontWeight};
    `}
    
    ${({borderRadiusInRem}) => borderRadiusInRem !== undefined && `
        border-radius: ${borderRadiusInRem}rem;
    `}

    /**
        paddingInRem: {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1,
        }
     * */
    
    ${({paddingInRem}) => paddingInRem !== undefined && `
        padding-top: ${paddingInRem.top}rem;
        padding-right: ${paddingInRem.right}rem;
        padding-bottom: ${paddingInRem.bottom}rem;
        padding-left: ${paddingInRem.left}rem;
    `}
    
    ${({heightInRem}) => heightInRem !== undefined && `
        height: ${heightInRem}rem;
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
    
    ${({block}) => block && `
        display: block;
        width: 100%;
    `}
    
    ${({textAlign}) => textAlign !== undefined && `
        text-align: ${textAlign};
    `}

    ${({border}) => border ? `
        border-width: ${border.widthInRem}rem;
        border-color: ${border.color};
        border-style: ${border.style};
    ` : 'border:none;'}

    ${({borderBottom}) => borderBottom ? `
        border-bottom-width: ${borderBottom.widthInRem}rem;
        border-bottom-color: ${borderBottom.color};
        border-bottom-style: ${borderBottom.style};
    ` : 'border:none;'}

    
`

Button.propTypes = {
    background: PropTypes.string,
    fontSizeInRem: PropTypes.number,
    fontWeight: PropTypes.number,
    borderRadiusInRem: PropTypes.number,
    color: PropTypes.string,
    block: PropTypes.bool,
    paddingInRem: PropTypes.object
}


export default Button
