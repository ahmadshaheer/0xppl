import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import comment_icon from 'src/assets/feed_post_comment_icon.png'
import like_icon from 'src/assets/feed_post_like_icon.png'

const TotalInteractions = (props) => {
    const {comments_count, likes_count} = props
    return (
        <Wrapper>
            <div className="total-interactions">
                <div className="icon">
                    <img src={comment_icon} alt="" />
                </div>
                <div className="total">
                    {comments_count}
                </div>
            </div>
            <div className="total-interactions">
                <div className="icon">
                    <img src={like_icon} alt="" />
                </div>
                <div className="total">
                    {likes_count}
                </div>

            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    padding-top: 0.5rem;
    .total-interactions {
        display: flex;
        margin-right:3.125rem;
        .icon {
            img {
                height: .75rem;
            }
        }
        .total {
            padding: 0 0.375rem;
            font-size:0.875rem;
            color: #687684;

        }
    }

`

TotalInteractions.protoTypes = {
    comments_count: PropTypes.number,
    likes_count: PropTypes.number,

}

export default TotalInteractions
