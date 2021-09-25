import React from 'react'
import styled from 'styled-components'

import {feed_posts} from 'src/data/feed_posts'
import FeedPost from './FeedPost'
const FeedPostsWrapper = () => {


    let feed = feed_posts.map((post, index) => <FeedPost
                                image={post.image}
                                
                                name={post.name}
                                verified={post.verified}
                                username={post.username}
                                transaction={post.transaction}
                                duration={post.duration}
                                type={post.type}

                                comments_count={post.comments_count}
                                likes_count={post.likes_count}
                                content={post.content}
                                key={index}
                            />
                        )
    return (
        <Wrapper>
            {feed}
        </Wrapper>
    )
}
const Wrapper = styled.div`
    padding:0 1.875rem;
`


export default FeedPostsWrapper
