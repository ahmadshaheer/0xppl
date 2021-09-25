import React from 'react'
import styled from 'styled-components'

const ScrollableContentWrapper = (props) => {
    
    return (
        <Wrapper {...props}>
            {props.children}
        </Wrapper>
    )
}
const Wrapper = styled.div`
    ${({paddingInRem}) => paddingInRem !== undefined && `
        padding-top: ${paddingInRem.top}rem;
        padding-right: ${paddingInRem.right}rem;}
        padding-bottom: ${paddingInRem.bottom}rem;}
        padding-left: ${paddingInRem.left}rem;}
    `}
    ${({heightInRem}) => heightInRem !== undefined && `
        height: ${heightInRem}rem;
    `}
    /* padding: 0 1.25rem;
    height: 40.75rem; */
    overflow-y: scroll;
`
export default ScrollableContentWrapper
