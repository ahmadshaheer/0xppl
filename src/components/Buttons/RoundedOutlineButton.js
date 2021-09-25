import React from 'react'
import {Button} from './';

const RoundedOutlineButton = ({color}) => {
    const properties = {
        color: '#0648D7',
        background: '#FFF',
        border: {
            widthInRem: 0.063,
            style: 'solid',
            color: '#0648D7',
        },
        fontSizeInRem: 0.75,
        fontWeight: 600,
        borderRadiusInRem: 1,
        paddingInRem: {
            top: 0.313,
            right: 0.688,
            bottom: 0.313,
            left: 0.688,
        },
    }
    return (
        
        <Button 
            {...properties}

            label="UPDATE PROFILE"
        
        />
    )
}

export default RoundedOutlineButton
