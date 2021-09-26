import React from 'react'
import {sidebar_preview_messages} from 'src/data/messages'
import MessagePreviewItem from './MessagePreviewItem'
const MessagePreviewItemsWrapper = () => {
    const messages = sidebar_preview_messages.map((item, index) => <MessagePreviewItem {...item} key={index}/>)
    return (
        <>
            {messages}
        </>
    )
}

export default MessagePreviewItemsWrapper
