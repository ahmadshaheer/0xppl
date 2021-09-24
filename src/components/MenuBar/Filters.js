import React from 'react'
import styled from 'styled-components'

const Filters = () => {
    return (
        <Wrapper>
            <a href="/" className="more">
                Most interesting blockchain activity
            </a>
            <a href="/" className="current-filter">
                Filter: <span>TOP ACTIVITY</span>
            </a>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 3.063rem;
    border-bottom: 1px dashed #BDC5CD;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1.875rem;
    padding-right: 1.875rem;
    
    font-size: 0.75rem;
    line-height: 0.88rem;
    
    font-weight: 400;
    * {
        color: #687684;
    }
    .current-filter {
        cursor: pointer;
        span {
            font-weight: 600;

        }
    }

`
export default Filters
