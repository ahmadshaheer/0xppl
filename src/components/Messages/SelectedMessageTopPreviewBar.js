import React from 'react'
import { MessagePreviewItem } from 'src/components/Sidebars/Messages';
import profile_image from 'src/assets/feed_post_profile.png'

const SelectedMessageTopPreviewBar = () => {
    return (
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
            imageSize="md"
        />
    )
}

export default SelectedMessageTopPreviewBar
