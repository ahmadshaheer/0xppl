import React from 'react'
import styled from 'styled-components'
import FeedPostTitle from './FeedPostTitle'

const FeedPost = () => {
    return (
        <Wrapper>

            <div className="profile-img">
                <img src="" alt="" />
            </div>
            <div className="content">
                <FeedPostTitle 
                    name="Marc Andreessen"
                    verified={true}
                    username="0xMarcA"
                    transaction={{id: '0 x43A1…58S1', 'verified': true}}
                    duration="40m"
                />
                
                <Content className="details">

                </Content>

                <Interactions className="interactions">
                    <div className="total-comments"></div>
                    <div className="total-likes"></div>
                </Interactions>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`

`

const Content = styled.div`

`

const Interactions = styled.div`

`

export default FeedPost
