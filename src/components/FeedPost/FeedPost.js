import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {ContentPlainText, Title, TotalInteractions} from './'

const FeedPost = (props) => {

    const {
        image, 
        name, 
        verified, 
        username, 
        transaction, 
        duration, 
        type, 
        comments_count, 
        likes_count, 
        content} = props
    return (
        <Wrapper>
            <div className="profile-image">
                <img src={image} alt="" />
            </div>
            <div className="content">
                
                <Title 
                    name={name}
                    verified={verified}
                    username={username}
                    transaction={transaction}
                    duration={duration}
                />

                {type && <ContentPlainText>{content}</ContentPlainText>}

                <TotalInteractions
                    comments_count={comments_count}
                    likes_count={likes_count}
                />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.a`
    cursor: pointer;
    :hover {
        background: var(--color-background);

    }
    display: flex;
    padding: 1.313rem 0;
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

FeedPost.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    verified: PropTypes.bool,
    username: PropTypes.string,
    transaction: PropTypes.object,
    duration: PropTypes.string,
    type: PropTypes.string,
    likes_count: PropTypes.number,
    comments_count: PropTypes.number,
    content: PropTypes.string,
}

export default FeedPost
