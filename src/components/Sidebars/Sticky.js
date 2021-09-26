import React from 'react'
import styled from 'styled-components'
const Sticky = (props) => {
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
    min-height: 18.25rem;
    
    

`

export default Sticky
