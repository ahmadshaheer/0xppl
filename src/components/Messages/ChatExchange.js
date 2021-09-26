import React from 'react'
import MessagePreviewItem from 'src/components/Sidebars/Messages/MessagePreviewItem';
import {chat_exchange} from 'src/data/messages'
const ChatExchange = () => {
    const chat = chat_exchange.map((item, index) => <MessagePreviewItem alignItems="flex-start" imageSize="md" key={index} {...item} />)
    return (
        <>
            {chat}
        </>
    )
}

export default ChatExchange
