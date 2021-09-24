import React from 'react'
import styled from 'styled-components'

const Closed = () => {
    return (
        <Wrapper>
                YOUR PROFILE
        </Wrapper>
    )
}
const Wrapper = styled.a`
    cursor: pointer;
    font-size: 0.688rem;
    font-weight: 500rem;
    transform:  translateX(-50%) translateY(-50%) rotate(-90deg);
    position: absolute;
    top: 50%;
    left: 50%;
    .toggle {
    }

`
export default Closed
