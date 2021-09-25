import React, { useContext } from 'react'
import styled from 'styled-components'
import {MessagePreviewUserInfo} from '.'
import verified_badge from 'src/assets/feed_post_profile_verified_badge.png'

import {Context} from 'src/Store'

const MessagePreviewItem = (props) => {
    
    const {handleClick, image, name, verified, address, preview_text, elapsed_time, paddingInRem, active, unread_messages_count} = props

    const [state, setState] = useContext(Context);

    return (
        <Wrapper 
            onClick={handleClick}
            margin={paddingInRem}>

            {/* display active indicator if active = true */}
            {active && <div className="indicator active-indicator"></div>}

            {/* display messages count indicator if passed */}
            {unread_messages_count && <div className="indicator unread-messages-indicator">{unread_messages_count}</div> }
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
                    {preview_text.length > 30 ?
                        `${preview_text.substring(0, 30)}...` : preview_text
                    }
                </div>
            </div>
            <div className="elapsed-time">
                {elapsed_time}
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.a`
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 1rem;
    padding:1.25rem 1.875rem;
    border-top: 1px dashed #BDC5CD;
    &:hover {
        background: #F8F8F9;
    }
    &:not(:first-child) {
        border-top: 1px dashed #BDC5CD;
        

    }
    
    ${({paddingInRem}) => paddingInRem && `
        padding-top: ${paddingInRem.top},
        padding-right: ${paddingInRem.right},
        padding-bottom: ${paddingInRem.bottom},
        padding-left: ${paddingInRem.left},
    `}

    .indicator {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-56%);
        
    }
    .active-indicator {
        background: #000;
        width: 0.375rem;
        height: 3rem;
    }

    .unread-messages-indicator {
        
        background: #0648D7;
        width: 0.75rem;
        height: 0.75rem;
        font-size: 0.625rem;
        font-weight: 700;
        line-height: 0.733rem;
        text-align: center;
        color: #fff;
        border: none;
    }

    
    color: #687684;
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
                color: #141619;
            }
            .verified {
                img {
                    height: 0.625rem;
                    margin-right: 0.625rem;
                }
            }
            .address {
                font-weight: 400;
            }
        }
        .preview-text {
            font-size: 1rem;
            /* color: #687684; */
            

        }
    }
    .elapsed-time {
        /* color: #687684; */
        width: 3rem;
        text-align: right;
        font-size: 0.875rem;
    }
`

export default MessagePreviewItem
