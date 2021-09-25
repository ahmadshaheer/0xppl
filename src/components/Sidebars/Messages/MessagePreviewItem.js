import React, { useContext } from 'react'
import styled from 'styled-components'
import verified_badge from 'src/assets/feed_post_profile_verified_badge.png'
import ellipsis_icon from 'src/assets/ellipsis.png'

import {Context} from 'src/Store'
import { trimText } from 'src/helpers/general'
const MessagePreviewItem = (props) => {
    
    const {image, 
            name, 
            verified, 
            address, 
            preview_text, 
            elapsed_time, 
            active, 
            unread_messages_count,
            border,
            hoverable,
            cursorPointer,
            settings,
            image_size,
            dont_trim_text,
        } = props

    const [state, setState] = useContext(Context);

    return (
        <Wrapper 
            border={border}
            hoverable={hoverable}
            cursorPointer={cursorPointer}
            settings={settings}
            image_size={image_size}
            dont_trim_text={dont_trim_text}
            >

            {/* display active badge if active = true */}
            {active && <div className="badge active-badge"></div>}

            {/* display messages count badge if passed */}
            {unread_messages_count && <div className="badge unread-messages-badge">{unread_messages_count}</div> }

            <a href="/" className="profile-image">
                <img src={image} alt="" />
            </a>
            
            <div className="profile-details">
                <div className="top">
                    <a href="/" className="name">{name}</a>
                    {verified && <div className="verified"><img src={verified_badge} alt="" /></div>}
                    <div className="address">{address}</div>
                    <div className="elapsed-time">
                        {elapsed_time}
                    </div>
                </div>

                
                <div className="preview-text">
                    {dont_trim_text ? preview_text : trimText(preview_text, 30)}
                    
                </div>

            </div>
            {settings && <a href="/" className="settings"> </a>}
            <div className="elapsed-time">
                {!dont_trim_text && elapsed_time}
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    font-size: 1rem;
    padding:1.25rem 1.875rem;
    

    
    ${({cursorPointer}) => cursorPointer && `
        cursor: pointer;
    `}
    ${({border}) => border && `
        border-${border}: 1px dashed #BDC5CD;
    `}

    ${({hoverable}) => hoverable && `
        &:hover {
            background: #F8F8F9;
            cursor: pointer;
        }    
    `}
    &:not(:first-child) {
        border-top: 1px dashed #BDC5CD;
        

    }
    

    .badge {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-56%);
        
    }
    .active-badge {
        background: #000;
        width: 0.375rem;
        height: 3rem;
    }

    .unread-messages-badge {
        
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
            ${({image_size}) => image_size === "lg" && `
                height: 3rem;
                width: 3rem;
                
            `}
            ${({image_size}) => image_size === "md" && `
                height: 2.125rem;
                width: 2.125rem;
            `}
        }
        margin-right: 0.931rem;
    }
    .profile-details {
        ${({dont_trim_text}) => dont_trim_text && `
            flex-basis: 1;
            .preview-text {
                width: 37.188rem;
            }
        `}
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
            line-height: 1.375rem;
            

        }
    }
    .settings {
        position: absolute;
        right: 1.875rem;
        &:hover {
            background-color: #F8F8F9;            
        }
        width: 2rem;
        height: 2rem;
        border-radius: 50px;
        background: url(${ellipsis_icon});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 1rem;
    }
    
    .elapsed-time {
        /* color: #687684; */
        width: 3rem;
        text-align: right;
        font-size: 0.875rem;
    }
`

export default MessagePreviewItem
