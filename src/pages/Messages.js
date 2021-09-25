// import { SelectedMessagePreviewItem } from 'src/components/Messages'
import { MessagePreviewItem } from 'src/components/Sidebars/Messages'
import React from 'react'
import profile_image from 'src/assets/feed_post_profile.png'

const Messages = () => {
    return (
        <div>
            <MessagePreviewItem 
                id={2}
                image={profile_image}
                name="flippen.eth"
                verified={true}
                address="0xPras"
                border="bottom"
                hoverable={false}
                settings
                cursorPointer={false}
            />
            {/* <ScrollableMessages /> */}
        </div>
    )
}

export default Messages
