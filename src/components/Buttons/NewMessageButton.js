import React from 'react'
import { Button } from 'src/components/Buttons';

const NewMessageButton = () => {
    const properties = {

        color: '#0648D7',
        background: '#fff',
        hover: {
            background: '#f8f8f9',
            color: '#0648D7',
        },
        style:{
            padding:"1.25rem 1.743rem",
            height:'3.625rem', 
            display: 'block',
            width: '100%',
            textAlign: 'left',
            border: 'none',
            borderBottom: '0.063rem dashed #BDC5CD',
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
