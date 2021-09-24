import React from 'react'
import styled from 'styled-components'
import {FollowDetails} from './'

const FollowersStatistics = ({marginBottomInRem}) => {
    return (
        <Wrapper marginBottomInRem={marginBottomInRem}>
            <FollowDetails
                label="Following"
                count={0}
                color="#0648D7"
                />
            <FollowDetails
                label="Followers"
                count={2889}
                color="#0648D7"
                />
            
        </Wrapper>
    )
}
const Wrapper = styled.div`
    ${({marginBottomInRem}) => marginBottomInRem && `
        margin-bottom: ${marginBottomInRem}rem;
    `}
`

export default FollowersStatistics
