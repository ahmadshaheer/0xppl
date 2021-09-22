import React from 'react'
import styled from 'styled-components'
import FeedPostPlainText from './FeedPostPlainText'
import FeedPostTitle from './FeedPostTitle'
import FeedPostTotalInteractions from './FeedPostTotalInteractions'

const FeedPost = ({image, name, verified, username, transaction, duration, type, comments_count, likes_count, content}) => {
    return (
        <Wrapper>
            <div className="profile-image">
                <img src={image} alt="" />
            </div>
            <div className="content">
                
                <FeedPostTitle 
                    name={name}
                    verified={verified}
                    username={username}
                    transaction={transaction}
                    duration={duration}
                />

                <FeedPostPlainText>
                    {content}
                </FeedPostPlainText>

                <FeedPostTotalInteractions
                    comments_count={comments_count}
                    likes_count={likes_count}
                />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    padding: 1.313rem 1.875rem;
    &:not(:last-child) {
        border-bottom: 1px dashed #ddd;
    }
    .profile-image {
        img {
            height: 4rem;
            width: 4rem;
        }
        padding-right: 0.931rem;
    }
    .content {

    }

`

export default FeedPost
