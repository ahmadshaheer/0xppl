import React from 'react'
import styled from 'styled-components'

const ContentPlainText = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.375rem;
`

export default ContentPlainText
