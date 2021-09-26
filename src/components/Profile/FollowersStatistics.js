import React from 'react'
import styled from 'styled-components'
import {FollowDetails} from './'

const FollowersStatistics = ({style}) => {
    return (
        <Wrapper style={style}>
            <FollowDetails
                label="Following"
                count={0}
                style={{color: "#0648D7"}}
                />
            <FollowDetails
                label="Followers"
                count={2889}
                style={{color: "#0648D7"}}
                />
            
        </Wrapper>
    )
}
const Wrapper = styled.div`
`

export default FollowersStatistics
