import React from 'react'
import styled from 'styled-components'
import search_icon from '../../../../assets/search-icon.svg'
let expanded = false;
function expand () {
    expanded = !expanded
}
const Searchbar = ({text}) => {
    return (
        <Wrapper >
            <label>
                <input onFocus={() => expand()}type="text" placeholder={text} />
            </label>
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
flex-grow: 2;
label {
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    width: 20px;
    background: url(${search_icon}) center / contain no-repeat;
    }

    input {
        padding: 1rem 4.5rem;
        width: auto;
        border: none;
        background: #EAECEE;

    }
}



`

export default Searchbar
