import React from 'react'
import styled from 'styled-components'
import verified_badge from 'src/assets/feed_post_profile_verified_badge.png'
const MessagePreviewItem = (props) => {
    const {image, name, verified, address, preview_text, elapsed_time, paddingInRem} = props
    return (
        <Wrapper margin={paddingInRem}>
            <div className="profile-image">
                <img src={image} alt="" />
            </div>
            <div className="profile-details">
                <div className="top">
                    <div className="name">{name}</div>
                    {verified && <div className="verified"><img src={verified_badge} alt="" /></div>}
                    <div className="address">{address}</div>
                </div>
                <div className="preview-text">
                    {preview_text}
                </div>
            </div>
            <div className="elapsed-time">
                {elapsed_time}
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 1rem;
    padding:1.25rem 1.875rem;
    border-top: 1px dashed #BDC5CD;
    &:not(:first-child) {
        border-top: 1px dashed #BDC5CD;
        // border-bottom: 1px dashed #BDC5CD;

    }
    // border-bottom: 1px dashed #BDC5CD;
    ${({paddingInRem}) => paddingInRem && `
        padding-top: ${paddingInRem.top},
        padding-right: ${paddingInRem.right},
        padding-bottom: ${paddingInRem.bottom},
        padding-left: ${paddingInRem.left},
    `}
    .profile-image {
        img {
            height: 3rem;
        }
        margin-right: 0.931rem;
    }
    .profile-details {
        width: 16.563rem;
        .top {
            & > {
            }
            display: flex;
            .name {
                font-weight: 600;
                margin-right: 0.375rem;
            }
            .verified {
                img {
                    height: 0.625rem;
                    margin-right: 0.625rem;
                }
            }
            .address {
                color: #687684;
                font-weight: 400;
            }
        }
        .preview-text {

        }
    }
    .elapsed-time {
        color: #687684;
    }
`

export default MessagePreviewItem
