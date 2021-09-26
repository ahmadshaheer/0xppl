import React from 'react'
import {Button} from './';

const RoundedOutlineButton = ({color, label}) => {
    const properties = {
        color: '#0648D7',
        background: '#FFF',
        style:{
            border: '0.063rem solid #0648D7',
            fontSize: '0.75rem',
            fontWeight: 600,
            borderRadius: '1rem',
            padding: '.313rem .688rem',
        },
    }
    return (
        
        <Button 
            {...properties}

            label={label}
        
        />
    )
}

export default RoundedOutlineButton
