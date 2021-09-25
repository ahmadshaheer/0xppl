import React from 'react'
import { Button } from 'src/components/Buttons';

const NewMessageButton = () => {
    const properties = {
        color: '#0648D7',
        background: '#fff',
        paddingInRem:{
            top: 1.25,
            bottom: 1.25,
            left: 1.743,
        },
        heightInRem:3.625, 
        block:true,
        textAlign: 'left',
        hover: {
            background: '#f8f8f9',
            color: '#0648D7',
        },
        borderBottom: {
            widthInRem: 0.063,
            style: 'dashed',
            color: '#BDC5CD'
        }
    }
    return (
        <Button 
            {...properties}
            label="+ New message"
            
        />
    )
}

export default NewMessageButton
