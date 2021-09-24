import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
const Left = (props) => {
    const {contentsComponent} = props
    return (
        <Wrapper 
            {...props}
        >
            {contentsComponent && contentsComponent()}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    
    
    
    ${({topInRem}) => topInRem !== undefined && `
        top: ${topInRem}rem;
    `}
    
    ${({bottomInRem}) => bottomInRem !== undefined && `
        bottom: ${bottomInRem}rem;
    `}
    
    ${({rightInRem}) => rightInRem !== undefined && `
        right: ${rightInRem}rem;
    `}
    
    ${({leftInRem}) => leftInRem !== undefined && `
        left: ${leftInRem}rem;
    `}
    
    ${({paddingTopInRem}) => paddingTopInRem !== undefined && `
        padding-top: ${paddingTopInRem}rem;
    `}
    
    ${({paddingBottomInRem}) => paddingBottomInRem !== undefined && `
        padding-bottom: ${paddingBottomInRem}rem;
    `}
    
    ${({paddingRightInRem}) => paddingRightInRem !== undefined && `
        padding-right: ${paddingRightInRem}rem;
    `}
    
    ${({paddingLeftInRem}) => paddingLeftInRem !== undefined && `
        padding-left: ${paddingLeftInRem}rem;
    `}
    
    ${({fullHeight}) => fullHeight ? `
        height: 100%;
    ` : `height: fit-content;`}
    
    ${({heightInRem}) => heightInRem !== undefined && `
        height: ${heightInRem}rem;
    `}
    
    ${({widthInRem}) => widthInRem !== undefined && `
        width: ${widthInRem}rem;
    `}
    
    
    ${({marginLeftInRem}) => marginLeftInRem !== undefined && `
        margin-left: ${marginLeftInRem}rem;
    `}
    
    ${({marginRightInRem}) => marginRightInRem !== undefined && `
        margin-right: ${marginRightInRem}rem;
    `}
    
    ${({background}) => background !== undefined && `
        background: ${background};
        filter: drop-shadow(0px 4px 12px rgba(104, 118, 132, 0.1));

    `}
    
    ${({padding}) => padding !== undefined && `
        padding: ${padding}rem;
    `}
    
    min-height: 18.25rem;
    
    

`

Left.propTypes = {
    widthInRem: PropTypes.number,
    topInRem: PropTypes.number,
    marginLeftInRem: PropTypes.number,
    marginRightInRem: PropTypes.number,
    background: PropTypes.string,
    padding: PropTypes.number,
}
export default Left
