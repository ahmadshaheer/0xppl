import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const MainContentWrapper = ({children}) => {
    return (
        <Wrapper>
            <Navbar />
            {children}
        </Wrapper>
    )
}
const Wrapper = styled.div`
    background: #fff;
    filter: drop-shadow(0px 4px 12px rgba(104, 118, 132, 0.1));
    width: 45rem;
    
    position: relative;
    top: 1.25rem;
    height: 1000px;
    margin: 0 auto;
`
export default MainContentWrapper
