import React from 'react'
import styled from 'styled-components'
import {kFormatter} from 'src/helpers/general'
const FollowDetails = ({count, label, color}) => {
    return (
        <Wrapper color={color}>
            <div className="count">{kFormatter(count)}</div>
            <div className="label">
                {label}
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.5rem;
    ${({color}) => color && `
        color: ${color};
    `}
    .count {
        margin-right: .25rem;
        font-weight: 600;
    }
`
export default FollowDetails
